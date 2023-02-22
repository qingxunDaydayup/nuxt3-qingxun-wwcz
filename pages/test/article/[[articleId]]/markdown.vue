<template>
    <div>
        {{ $renderMarkdown(content) }}
    </div>
    
    <div class="ui container" v-html="content2"></div>
    
</template>

<script setup>
const { $renderMarkdown } = useNuxtApp();
const content = "## markdown"

const {data} = await useAsyncData('markdownTest', ()=>$fetch(getFullUrl('/api/test-mark-downs/2')));

const content2 = $renderMarkdown(data.value.data.attributes.mdFile);

// console.log("mdFile", content2);

</script>