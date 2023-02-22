<template>
<div class="total-container">
    <header>
        <h1 class="header-icon">掘金</h1>
        <nav class="header-nav">
            <span><nuxt-link to="/">首页</nuxt-link></span>
            <span><nuxt-link to="/test/article/detail">测试文章页</nuxt-link></span>
            <span><nuxt-link to="/test/article/markdown">markdown测试</nuxt-link></span>
            <span><nuxt-link to="/">首页</nuxt-link></span>
            <span><nuxt-link to="/">首页</nuxt-link></span>
        </nav>
        <div class="user-box">用户信息</div>

        <button @click="changeTheme">changeTheme</button>

    </header>
    <nav class="label-nav">
        <span><nuxt-link to="/">index</nuxt-link></span>
        <span><nuxt-link to="/">index</nuxt-link></span>
        <span><nuxt-link to="/">index</nuxt-link></span>
        <span><nuxt-link to="/">index</nuxt-link></span>
        <span><nuxt-link to="/">index</nuxt-link></span>
    </nav>

    <!-- <aside class="left-aside">
        <div>点赞</div>
        <div>投币</div>
        <div>收藏</div>
    </aside> -->
    <!-- 计划单独做成文章详情页的组件 -->

    <main>
        <slot></slot>
    </main>

    <aside class="right-aside">
        <div> 
            <button @click="changeAside">切换</button>
        </div>
        <div v-show="!isArticlePage">
            <div>广告组件</div>
            <HomePageExcellentAuthors></HomePageExcellentAuthors>
            <div>备案信息</div>    
        </div>
        <div v-show="isArticlePage">
            <div>文章情况</div>
            <div>相关文章</div>
            <div>目录</div>
        </div>
    </aside>

    <footer>
        <div>footer</div>
    </footer>
</div>

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
    height: 2rem;
    line-height: 2rem;
    color: #1e80ff;
}
</style>