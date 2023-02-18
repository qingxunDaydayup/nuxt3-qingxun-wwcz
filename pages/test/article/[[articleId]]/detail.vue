<template>
    <div>{{ articleTest }}</div>
    <!-- <article>
        <h2>{{ compostion_title }}</h2>
        <div>{{ description }}</div>
        <div>{{ composition }}</div>
    </article> -->
</template>

<script setup>
// 参考 https://nuxt.com/docs/api/composables/use-async-data
// setTimeout
// const {data:articleTest} = await useAsyncData(
//     'articleTestFetch',
//     () => {
//         return new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                 resolve("《诗经》，是中国古代诗歌的开端，最早的一部诗歌总集，收集了西周初年至春秋中叶（前11世纪至前6世纪）的诗歌，共311篇，其中6篇为笙诗，即只有标题，没有内容，称为笙诗六篇（《南陔》《白华》《华黍》《由庚》《崇丘》《由仪》），反映了周初至周晚期约五百年间的社会面貌。")
//             }, 3000)
//         })
//     }
// )
const { data:articleTest } = await useAsyncData(
    'articleTestFetch',
    () => $fetch("http://180.102.19.159:1337/api/test-articles/1")
)
console.log(articleTest);
// console.log(articleTest.value);
// console.log(articleTest.data.attributes.title);
// console.log(articleTest.article);

// const {article:composition, description, title:compostion_title} = articleTest;
</script>