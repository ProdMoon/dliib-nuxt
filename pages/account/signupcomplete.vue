<script setup lang="ts">
definePageMeta({
  layout: 'blank',
});
const router = useRouter();

const handleClose = () => {
  router.push('/');
};
</script>

<template>
  <div class="flex flex-col items-center w-full p-5 relative">
    <div class="absolute top-5 left-5">
      <ButtonClose @click="handleClose" />
    </div>
    <div class="mt-20">
      <img src="/doge.jpg" alt="doge welcome">
    </div>
    <div class="mt-5 text-4xl font-bold">웰 콤 !</div>
    <ButtonRound href="/" class="mt-10">다른 놈들 드립 감상하기</ButtonRound>
  </div>
</template>
