<template>
    <div class="author-board-container">
        <div class="icon-box" v-show="!loadFinish"><img src="" alt="加载中"></div>
        <div class="icon-box" v-show="loadFinish"><img :src="showAuthor.portraitUrl" alt=""></div>
        <div class="name-box">{{ showAuthor.username }}</div>
        <small class="des-box">{{ showAuthor.description }}</small>
        <div class="widget-box">
            <button class="widget-button">看TA主页</button>
        </div>
    </div>
</template>

<style>
.author-board-container {
    background-color: var(--block-bgc);
    padding: 1rem;
    display: grid;
    grid-template-columns: 4rem auto;
    grid-template-areas: 
        "icon name "
        "icon des "
        "widget widget"
    ;
    grid-row-gap: .8rem;
    grid-column-gap: .8rem;
}

.icon-box {
    grid-area: icon;
    width: 4rem;
    height: 4rem;
    border-radius: 2rem;
    overflow: hidden;
}

.icon-box > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.name-box {
    grid-area: name;
    height: 1.6rem;
    font-size: large;
    font-weight: 800;
    color: var(--color);
    transform: translateY(.3rem);
}

.des-box {
    grid-area: des;
    height: 1.2rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.widget-box {
    grid-area: widget;
    height: 2rem;
}

.widget-box > button {
    border: none;
    color: var(--highlight-white);
    background-color: var(--highlight-blue);
    width: 100%;
    height: 100%;
    letter-spacing: .5rem;
}
.widget-box > button:hover {
    cursor: pointer;
}



</style>

<script setup>
import axios from "axios";
const routeInfo = useRoute();

// 在layout中已经设置好，只有路由匹配的时候才会渲染该组件，所以可以拿到articleId
const articleId = routeInfo.params.articleId;
let showAuthor = ref({});
let loadFinish = ref(false)
try {
    const articleRes = await axios(
        getFullUrl("api/qx-articles/"+articleId, ["qx_user"])
    );
    // console.log("articleRes", articleRes)
    const authorId = articleRes.data.data.attributes.qx_user.data.id;
    const authorRes = await axios(
        getFullUrl("api/qx-users/" + authorId, ["portrait"])
    );
    // console.log("authorRes", authorRes);
    const url = getBaseUrl()
        + authorRes.data.data.attributes.portrait.data.attributes.url;
    const authorInfo = authorRes.data.data;
    // console.log("get the pic url:", url); 
    showAuthor.value = {
        id: authorInfo.id,
        username: authorInfo.attributes.username,
        description: authorInfo.attributes.description,
        portraitUrl: url
    }
    loadFinish.value = true;
} catch (err) {
    console.info(err);
}

</script>