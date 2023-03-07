<template>
    <div class="section-nav-container">
        <h3>
            章节
        </h3>
        <ul>
            <li class="section-title" v-for="(item,index) in h1Doms" :key="index" @click="goView(item)">{{item.innerHTML}}</li>
        </ul>
    </div>
</template>

<script setup>
const h1Doms = document.querySelectorAll(".ui h1");
h1Doms.forEach(ele => {
    console.log(ele.innerHTML);
})

function goView(dom) {
    dom.scrollIntoView({
        behavior: "smooth",     // 滚动动画
        block: "center"
    })
}

</script>

<style>
.section-nav-container {
    background-color: var(--block-bgc);
    padding: 1rem;
}
.section-nav-container ul {
    padding: 1rem
}
.section-nav-container ul li {
    margin: 1rem;
    text-decoration: none;
}
.section-nav-container ul li:hover {
    cursor: pointer;
}
</style>