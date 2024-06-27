<script setup lang="ts">
definePageMeta({
  layout: 'hasback',
  title: '드립쳐보기',
});

const router = useRouter();
const showModal = ref(false);

const handleConfirm = () => {
  router.push('/');
};
</script>

<template>
  <div class="p-5">
    <textarea class="w-full h-96 p-4 border rounded-lg" placeholder="여기에 당신의 드립 입력"></textarea>
    <div class="flex justify-end mt-4">
      <ButtonRound @click="showModal = true">끝!</ButtonRound>
    </div>
  </div>
  <ModalAreYouDone v-if="showModal" @close="showModal = false" @confirm="handleConfirm"></ModalAreYouDone>
</template>
