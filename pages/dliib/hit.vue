<script setup lang="ts">
import type { Dliib } from '@/types/dliib';
definePageMeta({
  layout: 'hasback',
  title: '드립쳐보기',
  middleware: 'auth',
});

const { token } = useAuth();
const router = useRouter();

const showModal = ref(false);
const dliib: Ref<Dliib> = ref({
  content: '',
});

const handleConfirm = async () => {
  const _ = await useApiFetch('/api/dliib', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token.value!,
    },
    body: dliib.value,
  });
  router.push('/');
};
</script>

<template>
  <div class="p-5">
    <textarea v-model="dliib.content" class="w-full h-96 p-4 border rounded-lg" placeholder="여기에 당신의 드립 입력"></textarea>
    <div class="flex justify-end mt-4">
      <ButtonRound @click="showModal = true">끝!</ButtonRound>
    </div>
  </div>
  <ModalAreYouDone v-if="showModal" @close="showModal = false" @confirm="handleConfirm"></ModalAreYouDone>
</template>
