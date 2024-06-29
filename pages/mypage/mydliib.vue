<script setup lang="ts">
definePageMeta({
  layout: 'hasback',
});

const route = useRoute();
const router = useRouter();
const showModal = ref(false);

const dliib = {
  title: '드립 1',
};
route.meta.title = dliib.title;

const handleConfirm = () => {
  router.push('/mypage/mydliibs');
};
</script>

<template>
  <div class="p-5">
    <div>여기에 당신의 드립 내용</div>
    <div class="flex justify-end mt-4">
      <ButtonRound @click="showModal = true">삭제?</ButtonRound>
    </div>
  </div>
  <ModalDeleteConfirm v-if="showModal" @close="showModal = false" @confirm="handleConfirm"></ModalDeleteConfirm>
</template>
