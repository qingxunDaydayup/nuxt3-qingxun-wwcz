<template>
    <div class="article-list-container">
        <section class="article-section" v-for="item in articleArr" :key="item.id" @click="routego(item.id)">
            <div>
                <div class="article-firstline">{{ item.userName }} | {{ item.publishDatetime }}</div>
                <div class="article-title">{{ item.title }} </div>
                <div class="article-description"><small>{{ item.description }}</small></div>
                <div class="article-pic"></div>
                <div class="article-endline"></div>
            </div>
        </section>
    </div>
</template>

<style>
.article-list-container {
    background-color: var(--block-bgc);
}

.article-section {
    padding: 0 2% 0;

}

.article-section:hover {
    cursor: pointer;
    background-color: var(--block-active-bgc);
}

.article-section > div {
    padding-top: 1rem;
    border-bottom: 1px solid var(--bgc);

    display: grid;
    grid-template-rows: 4;
    grid-template-columns: 2;
    gap: 5px;
    grid-template-areas: 
        "startline startline"
        "title pic"
        "description pic"
        "endline endline"
    ;
}

.article-firstline {
    grid-area: startline;
}
.article-title {
    grid-area: title;
    color: var(--title-color);
    font-size: 1.2rem;
    font-weight: 800;
}
.article-description {
    grid-area: description;
    height: 2rem;
    overflow: hidden;
}


</style>

<script setup>
useSeoMeta({
    title: "掘金-仿制首页",
    location: "掘金-太阳系",
    description: "这是一个由青训营-未完成组仿制的掘金首页"
})
const {data:res} = await useAsyncData(
    "fetchAriticleList",
    () => $fetch(getFullUrl("/api/qx-articles", ["qx_user"]))
);
const articleArr = [];
// const theUsefulData = res.value.data;
// console.log("theUserfullData", theUsefulData);
// console.log("res", res);
res.value.data.forEach(element => {
    // console.log(element);
    let newItem = {
        id: element.id | null,
        title: element.attributes.title,
        publishDatetime: element.attributes.publishDatetime,
        description: element.attributes.description,
        userId: element.attributes.qx_user.data.id, 
        userName: element.attributes.qx_user.data.attributes.username,
    };
    articleArr.push(newItem);
});

const route = useRouter();
function routego(articleId) {
    route.push({
        path: `/juejin-article/${articleId}/detail`,
    })
}
</script>