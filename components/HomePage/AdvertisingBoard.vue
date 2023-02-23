<!-- 作者榜 -->
<template>
    <div class="advertisings-container">
        <div v-for="item in advertisingArr" :key="item.id" class="advertising-item">
            <div><img :src="item.postUrl" alt="广告图片"></div>
        </div>
    </div>
</template>
<style>
.advertisings-item {
    background-color: var(--block-bgc);
}

.advertising-item {
    margin: .4rem 0 .4rem;
}

.advertising-item img {
    width: 100%;
    max-width: 30rem;
}
</style>
<script setup>
const {data: res} = await useAsyncData(
    'qx-advertisings',
    () => $fetch(getFullUrl("/api/qx-advertisings", ["post"]))
)


const advertisingArr = [];
res.value.data.forEach(element => {
    let item = {
        id: element.id,
        title: element.attributes.title,
        postUrl: getBaseUrl()+element.attributes.post.data.attributes.url
    }
    advertisingArr.push(item);
});
// console.log(getBaseUrl());
</script>
