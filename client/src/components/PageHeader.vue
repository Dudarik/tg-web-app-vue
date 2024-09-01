<script setup lang="ts">
import Button from 'primevue/button';
import { onMounted } from 'vue';

const tg = window.Telegram.WebApp;
console.log('window.Telegram.WebApp', window.Telegram.WebApp);
onMounted(() => {
  // tg.ready();/
});
const onClose = () => {
  tg.close();
};
</script>
<template>
  <header>
    <div class="user_info">{{ tg.initDataUnsafe.user?.username }}</div>
    <Button label="close" @click="onClose" />
  </header>
</template>

<style scoped></style>
