<template>
<header>
    <h1 class="header-icon">掘金</h1>
    <nav class="header-nav">
        <span><nuxt-link to="/">首页</nuxt-link></span>
        <span><nuxt-link to="/test/article/detail">测试文章页</nuxt-link></span>
        <span><nuxt-link to="/">首页</nuxt-link></span>
        <span><nuxt-link to="/">首页</nuxt-link></span>
        <span><nuxt-link to="/">首页</nuxt-link></span>
    </nav>
    <div class="user-box">用户信息</div>
</header>
<nav class="label-nav">
    <span><nuxt-link to="/">index</nuxt-link></span>
    <span><nuxt-link to="/">index</nuxt-link></span>
    <span><nuxt-link to="/">index</nuxt-link></span>
    <span><nuxt-link to="/">index</nuxt-link></span>
    <span><nuxt-link to="/">index</nuxt-link></span>
</nav>

<div class="main-layout">
    <aside class="left-aside">
        <div>点赞</div>
        <div>投币</div>
        <div>收藏</div>
    </aside>

    <main>
        <slot></slot>
    </main>

    <aside class="right-aside">
        <div> 
            <button @click="changeAside">切换</button>
        </div>
        <div v-show="!isArticlePage">
            <div>广告组件</div>
            <div>作者榜</div>
            <div>备案信息</div>    
        </div>
        <div v-show="isArticlePage">
            <div>文章情况</div>
            <div>相关文章</div>
            <div>目录</div>
        </div>
    </aside>
</div>

<footer>
    <div>footer</div>
</footer>
</template>

<script setup>
const isArticlePage = ref(false);
const changeAside = () => {
    isArticlePage.value = !isArticlePage.value;
}


</script>

<style>

.header-icon {
    display: inline-block;
    height: 1rem;
    line-height: 1rem;
    color: #1e80ff;
}
.user-box {
    display: inline-block;
}
.header-nav {
    display: inline-block;
}
.header-nav span{
    margin: 0;
    padding: 0 .4rem 0 .4rem;
}

.label-nav span {
    margin: 0 0 .1rem 0;
    padding: 0 .3rem 0 .3rem
}

.main-layout {
    display: flex;
}

.left-aside {
    width: 6rem;
    border: 1px #333 dashed;
}

main {
    border: 1px solid #5cf;
    flex-grow: 1;
}

.right-aside {
    width: 20rem;
    border: #333 dashed 1px;
}

footer {
    position: fixed;
    bottom: 0;
}
footer div {
    text-align: center;
}
</style>