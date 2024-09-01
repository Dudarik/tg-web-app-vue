<script setup lang="ts">
import Button from 'primevue/button';
import { onMounted } from 'vue';

const tg = window.Telegram.WebApp;
console.log('window.Telegram.WebApp', window.Telegram.WebApp);
onMounted(() => {
  tg.ready();
});
const onClose = () => {
  tg.close();
};
</script>

<template>
  <div class="container">
    <Button label="close" @click="onClose" />
  </div>
</template>

<style scoped></style>
