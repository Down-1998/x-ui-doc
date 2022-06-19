<script setup>
import { reactive,ref } from 'vue';
defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <x-button type="primary">测试</x-button>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
