<!-- html -->
<template>
  <x-button @click="openLoading">自定义加载图片</x-button>
</template>

<!-- js -->
<script setup>
  import Loading from "../index.js"; //此处为本地示例，请使用import { xLoading } from "xinlun-ui";
  const openLoading = () => {
    Loading.show({
      text:"正在努力加载中...",
      img:"https://down-1998.github.io/x-ui-doc/assets/logo.30f90e1c.jpg"
    })
    setTimeout(()=>{
      Loading.hide()
    },1000)
  }
</script>