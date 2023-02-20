<!-- 作者榜 -->
<template>
    <div>
        🎖作者榜🏆
        <div v-for="item in authors" :key="item.id" style="
            display:grid; 
            grid-template-columns: 4rem auto;
            grid-template-rows: 2rem 2rem;
            grid-template-areas:    'portrait username' 
                                    'portrait description'; 
        ">
            <div style="grid-area: portrait; overflow:hidden; display: flex; align-item: center; justify-content: center;">
                <img style="width: 80%; height: 80%; border-radius:50%; " :src="item.portraitUrl" alt="图片裂开">
            </div>
            <span style="display:inline;  grid-area: username ">{{ item.username }} - {{ item.level }}</span>
            <small style="grid-area: description">{{ item.description }}</small>
        </div>
    </div>
</template>

<script setup>
const {data: res} = await useAsyncData(
    'excellentAuthors',
    () => $fetch(getFullUrl("/api/excellent-authors", ["portrait"]))
)
console.log("/api/excellent-authors RES",res.value.data);

// 参考：
// [
//     {
//         "id": 1,
//         "attributes": {
//             "username": "我不懂前端",
//             "description": "精通C--和Verilog",
//             "level": "level3",
//             "createdAt": "2023-02-19T02:52:16.302Z",
//             "updatedAt": "2023-02-19T05:35:19.343Z",
//             "publishedAt": "2023-02-19T02:52:20.133Z",
//             "portrait": {
//                 "data": {
//                     "id": 7,
//                     "attributes": {
//                         "name": "portraitWBDQD.png",
//                         "alternativeText": null,
//                         "caption": null,
//                         "width": 451,
//                         "height": 399,
//                         "formats": {
//                             "thumbnail": {
//                                 "name": "thumbnail_portraitWBDQD.png",
//                                 "hash": "thumbnail_portrait_WBDQD_4beba62282",
//                                 "ext": ".png",
//                                 "mime": "image/png",
//                                 "path": null,
//                                 "width": 176,
//                                 "height": 156,
//                                 "size": 16.53,
//                                 "url": "/uploads/thumbnail_portrait_WBDQD_4beba62282.png"
//                             }
//                         },
//                         "hash": "portrait_WBDQD_4beba62282",
//                         "ext": ".png",
//                         "mime": "image/png",
//                         "size": 21.35,
//                         "url": "/uploads/portrait_WBDQD_4beba62282.png",
//                         "previewUrl": null,
//                         "provider": "local",
//                         "provider_metadata": null,
//                         "createdAt": "2023-02-19T02:51:25.287Z",
//                         "updatedAt": "2023-02-19T02:51:25.287Z"
//                     }
//                 }
//             }
//         }
//     }
// ]
const authors = [];
res.value.data.forEach(element => {
    let item = {
        id: element.id,
        username: element.attributes.username,
        description: element.attributes.description,
        level: element.attributes.level,
        portraitUrl: getBaseUrl()+element.attributes.portrait.data.attributes.url
    }
    authors.push(item);
});
// console.log(getBaseUrl());
</script>
