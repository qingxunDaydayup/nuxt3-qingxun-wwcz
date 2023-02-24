<template>
    <div class="author-board-container">
        <div class="icon-box"><img src="http://180.102.19.159:1337/uploads/1_cca592ca00.jpg" alt=""></div>
        <div class="name-box">用户名</div>
        <small class="des-box"> 一堆奇奇怪怪的描写撒扽苏打粉撒;该哈撒萨根;红A刚开s;减肥</small>
        <div class="widget-box">
            <button class="widget-button">看TA主页</button>
        </div>
    </div>
</template>

<style>
.author-board-container {
    background-color: var(--block-bgc);
    padding: 1rem;
    display: grid;
    grid-template-areas: 
        "icon name "
        "icon des "
        "widget widget"
    ;
    grid-row-gap: .8rem;
    grid-column-gap: .8rem;
}

.icon-box {
    grid-area: icon;
    width: 4rem;
    height: 4rem;
    border-radius: 2rem;
    overflow: hidden;
}

.icon-box > img {
    width: 4rem;
}

.name-box {
    grid-area: name;
    height: 1.6rem;
    font-size: large;
    font-weight: 800;
    color: var(--color);
    transform: translateY(.3rem);
}

.des-box {
    grid-area: des;
    height: 1.2rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.widget-box {
    grid-area: widget;
    height: 2rem;
}

.widget-box > button {
    border: none;
    color: var(--highlight-white);
    background-color: var(--highlight-blue);
    width: 100%;
    height: 100%;
    letter-spacing: .5rem;
}
.widget-box > button:hover {
    cursor: pointer;
}



</style>

<script setup>
// import axios from "axios";

const author = useAuthorNow();

// try {
//     console.log("+++++++++++++");
//     const res = await axios(getFullUrl(
//         "/api/qx-user/"+author.data.id,
//         ['portrait']
//     ));
//     console.log(res);

// } catch (err) {
//     console.error("request author err", err)
// }

</script>