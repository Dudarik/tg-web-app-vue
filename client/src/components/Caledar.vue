<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Button from 'primevue/button';
// import audioCaledar from './audio/calendar.weba';
// new Audio(audioCaledar).play;
const audio = ref<HTMLAudioElement | null>(null);

onMounted(() => {
  // const a = new Audio('./audio/calendar.weba');
  // a.autoplay = true;
  // console.log(a);
});

// document.addEventListener('mousemove', () => {
//   audio.value?.play();
// });

const isCalendarPerevernut = ref(false);

const onPlay = () => {
  isCalendarPerevernut.value = true;
  audio.value?.play();

  audio.value?.addEventListener('ended', () => {
    isCalendarPerevernut.value = false;
  });
};
</script>
<template>
  <audio preload="auto" src="./audio/calendar.weba" ref="audio">
    <!-- <source src="./audio/calendar.weba" type="audio/weba" /> -->
    <p>
      Your browser doesn't support HTML5 audio. Here is a
      <a href="viper.mp3">link to the audio</a> instead.
    </p>
  </audio>
  <img
    src="/img/calendar_256.png"
    @click="onPlay"
    width="256"
    class="calendar"
    :class="{ perevernut: isCalendarPerevernut }"
  />
  <Button label="play" @click="onPlay" />
</template>

<style scoped lang="scss">
.calendar {
  cursor: pointer;
  transition: all 1s;
  &:hover {
    transform: rotateZ(-180deg);
  }
}

.perevernut {
  transform: rotateZ(180deg);
  transition: transform 1s;
  &:hover {
    transform: rotateZ(180deg);
  }
}
</style>
