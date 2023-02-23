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
const { $renderMarkdown } = useNuxtApp();
const routeInfo = useRoute();
const articleId = routeInfo.params.articleId;

const {data: res} = await useAsyncData(
    'qx-article-detail',
    () => $fetch(getFullUrl("api/qx-articles/"+articleId))
)

const content = $renderMarkdown(res.value.data.attributes.content);

</script>