<template>
    <!-- <div>{{ articleTest }}</div> -->
    <article>
        <h2 id="composition-title">{{ compostion_title }}</h2>
        <small>{{ description }}</small>
        <br/><br/>
        <section>{{ composition }}</section>
    </article>
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
console.log(articleTest.value.data);
// {
//     "id": 1,
//     "attributes": {
//         "title": "关雎",
//         "description": "《周南·关雎》是中国古代第一部诗歌总集《诗经》中的第一首诗，通常认为是一首描写男女恋爱的情歌。此诗首章以关雎鸟相向合鸣，相依相恋，兴起淑女配君子的联想。以下各章，又以采荇菜这一行为兴起主人公对女子疯狂的相思与追求。全诗在艺术上巧妙地采用了“兴”的表现手法，语言优美，善于运用双声叠韵和重章叠词，增强了诗歌的音韵美和写人状物、拟声传情的生动性。",
//         "article": "关关雎鸠，在河之洲。窈窕淑女，君子好逑。\n参差荇菜，左右流之。窈窕淑女，寤寐求之。\n求之不得，寤寐思服。悠哉悠哉，辗转反侧。\n参差荇菜，左右采之。窈窕淑女，琴瑟友之。\n参差荇菜，左右芼之。窈窕淑女，钟鼓乐之",
//         "createdAt": "2023-02-18T12:43:42.594Z",
//         "updatedAt": "2023-02-18T12:43:49.902Z",
//         "publishedAt": "2023-02-18T12:43:49.898Z"
//     }
// }

const {article:composition, description, title:compostion_title} = articleTest.value.data.attributes;
</script>

<style>
#composition-title {
    text-align: center;
}

article {
    padding: 1rem;
}
</style>