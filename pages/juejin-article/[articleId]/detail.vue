<template>
    <div class="article-detail-container">
        <div class="ui container" v-html="content"></div>
    </div>
   
</template>

<style>
.article-detail-container {
    background-color: var(--block-bgc);
    padding: 5rem;
}
</style>

<script setup>
import axios from 'axios'

const { $renderMarkdown } = useNuxtApp();
const routeInfo = useRoute();
const articleId = routeInfo.params.articleId;
let content = $renderMarkdown("waiting ...");
try {
    const res = await axios.get( getFullUrl('api/qx-articles/'+articleId, ['qx_user']) )
    // console.log("axios res", res)
    const article = res.data.data;
    const author = article.attributes.qx_user;
    content = $renderMarkdown(article.attributes.content)
    // console.log(author);
    setAuthorNow(author);
} catch (err) {
    console.log("catch err", err);
}

    





</script>