<template>
<header>
    <h1 class="header-icon">
        <img class="small-icon" src="/images/juejin-icon.png" style="width: 2rem;" alt="juejin" >
        <img class="big-icon" src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg" alt="稀土掘金">
    </h1>
    <nav class="header-nav header-nav-normal">
        <span><nuxt-link class="header-nuxt-link" to="/">首页</nuxt-link></span>
        <span><nuxt-link class="header-nuxt-link" to="/juejin-index/">掘金首页</nuxt-link></span>
        <span><nuxt-link class="header-nuxt-link" to="/test/article/detail">测试文章页</nuxt-link></span>
        <span><nuxt-link class="header-nuxt-link" to="/test/article/markdown">markdown测试</nuxt-link></span>
        <span><nuxt-link class="header-nuxt-link" to="/text/neirong/neirong">文章内容</nuxt-link></span>
    </nav>

    <select v-model="navSelectInSelectBox" class="header-nav-select">
        <option class="header-nav-select-option" value="/"><div>首页</div></option>
        <option class="header-nav-select-option" value="/juejin-index/"><div>掘金首页</div></option>
        <option class="header-nav-select-option" value="/test/article/detail"><div>测试文章页</div></option>
        <option class="header-nav-select-option" value="/test/article/markdown"><div>markdown测试</div></option>
        <option class="header-nav-select-option" value="/text/neirong/neirong"><div>文章内容</div></option>
    </select>

    <div @click="changeTheme">
        <svg id="darkModeIcon" t="1677113794307" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3591" width="200" height="200">
            <path d="M512 832c-179.2 0-320-140.8-320-320s140.8-320 320-320 320 140.8 320 320S691.2 832 512 832M512 896c211.2 0 384-172.8 384-384s-172.8-384-384-384S128 300.8 128 512 300.8 896 512 896L512 896zM800 512c0-160-128-288-288-288l0 576C672 800 800 672 800 512zM480 608 243.2 608C249.6 620.8 256 640 262.4 652.8l217.6 0L480 608zM480 416 480 371.2 262.4 371.2C256 384 249.6 403.2 243.2 416L480 416zM480 300.8 480 256 384 256C358.4 268.8 339.2 281.6 320 300.8L480 300.8zM224 537.6l256 0L480 492.8l-256 0c0 6.4 0 12.8 0 19.2S224 524.8 224 537.6zM480 723.2 320 723.2c19.2 19.2 38.4 32 64 44.8l96 0L480 723.2z" 
                fill="#e6e6e6" p-id="3592">
            </path>
        </svg>
    </div>

</header>
<div class="total-container-with-label">
    <!-- 为了label-nav能够sticky加了一个壳 -->
    <nav class="label-nav" v-show="/^\/juejin-index/.test(routeInfo.path)">
        <span v-for="tag in tagsArr" :key="tag.id" @click="setTagNow(tag)">
            <span>{{ tag.tagName }}</span>
        </span>
        <span v-show="tagNow != null" @click="setTagNow(null)"><span>取消选择</span></span>
    </nav>
    <div class="total-container"> 
        <main>
            <slot></slot>
        </main>

        <aside class="right-aside">
            <!-- <div> 
                <button @click="changeAside">切换</button>
            </div> -->
            <div v-if="!/^\/juejin-article\/*/.test(routeInfo.path)">
                <HomePageAdvertisingBoard></HomePageAdvertisingBoard>
                <HomePageExcellentAuthors></HomePageExcellentAuthors>
                <div>备案信息</div>    
            </div> 
            <div v-if="/^\/juejin-article\/*/.test(routeInfo.path)">
                <ArticleDetailAuthorBoard></ArticleDetailAuthorBoard>
                <div>相关文章</div>
                <div>目录</div>
            </div>
        </aside>

    </div>    
</div>
<footer>
    <div>footer</div>
</footer>


</template>

<script setup>
useSeoMeta({
    title: "掘金仿制项目",
    viewport: "width=device-width, initial-scale=1.0"
})

const {data: tagRes} = await useAsyncData(
    "requestTagsList",
    () => $fetch(getFullUrl('/api/qx-tags', ['qx_articles']))
);
// console.log(tagRes);
const tagsArr = [];
tagRes.value.data.forEach( element => {
    let newItem = {
        id: element.id,
        tagName: element.attributes.tagName,
        relateArticles: element.attributes.qx_articles 
    }
    tagsArr.push(newItem)
})

const tagNow = useTagNow()

const routeInfo = useRoute();
const navSelect = useState("navSelect", ()=>routeInfo.path);
onUpdated(()=>{
    navSelect.value = routeInfo.path;
})

const route = useRouter();
const navSelectInSelectBox = computed({
    get: () => {
        return navSelect.value;
    },
    set: (url) => {
        navSelect.value = url;
        route.push({path:url});
    }
})

</script>

<style>

.header-icon {
    margin: 0 1rem 0;
    display: inline-block;
    height: 2rem;
    line-height: 2rem;
    color: #1e80ff;
}

header {
    height: 4rem;
    display: flex;
    align-items: center;
}

/* 宽屏下的样式 header nav */
.header-nav > span{
    margin: 0 1rem 0;
    padding-bottom: .8rem;
}

.header-nav > span:hover {
    border-bottom: 2px solid var(--highlight-blue);
}

/* 窄屏下的 header nav 选择器 */
.header-nav-select, .header-nav-select:active{
    background-color: var(--block-bgc);
    height: 2rem;
    border: none;
    font-size: 1rem;
    color: var(--highlight-blue);
    width: 5.5rem;
    /* 四个字加一个三角形的宽度 */
    outline: none;
}

.header-nav-select-option, .header-nav-select option, .header-nav-select-option:active {
    color: var(--color);
    background-color: var(--block-bgc);

    /* 以下属性失效 */
    display: block;
    height: 5rem;
    margin: 10px;
    padding: 10rem 10rem .2rem;
}

.header-nav-select-option > div {
    /* 以下属性失效 */
    height: 2rem;
}

#darkModeIcon {
    width: 3rem;
    transform: translateY(.2rem);
}

.total-container-with-label {
    position: relative;
    height: 100vh;
}

.label-nav {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 100;
}

.label-nav {
    /* height: 1.8rem; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.label-nav::-webkit-scrollbar {
    display: none;
}

.label-nav > span {
    height: 1.2rem;
    padding: .2rem .3rem .2rem;
}

.label-nav > span > span {
    padding: 0 .5rem 0;
    border-radius: .8rem;
    background-color: var(--bgc);
}

.label-nav > span:hover {
    cursor: pointer;
    color: var(--highlight-blue)
}

.total-container {
    padding-bottom: 20rem;
}

main {
    margin-top: .3rem;
}

.right-aside {
    margin-top: .3rem;
}

</style>