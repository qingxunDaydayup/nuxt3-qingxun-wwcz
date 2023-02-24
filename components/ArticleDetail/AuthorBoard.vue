<template>
    <div>
        作者信息
        {{ author }}
    </div>
</template>

<script setup>
const author = useAuthorNow();
</script>