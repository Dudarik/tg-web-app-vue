<script setup lang="ts">
import Button from 'primevue/button';
import { onMounted } from 'vue';
import { useTelegram } from '../lib/useTelegram';

console.log('window.Telegram.WebApp', window.Telegram.WebApp);
const { tg, username, first_name, last_name, onClose } = useTelegram();
onMounted(() => {
  tg.ready();
});
</script>
<template>
  <header>
    <div class="user_info">
      {{ `@${username} - ${first_name} ${last_name}` }}
    </div>
    <Button label="close" @click="onClose" />
  </header>
</template>

<style scoped></style>
