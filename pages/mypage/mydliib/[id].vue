<script setup lang="ts">
import type { Dliib } from '@/types/dliib';
import DliibWindowContentCard from '~/components/DliibWindow/DliibWindowContentCard.vue';

definePageMeta({
  layout: 'hasback',
  title: '내 드립',
  middleware: 'auth',
});

const route = useRoute();
const router = useRouter();
const { token } = useAuth();
const showModal = ref(false);
const dliib = ref<Dliib>(
  await useApiFetch(`/api/dliib/${route.params.id}`, {
    headers: {
      Authorization: token.value!,
    },
  })
);

const handleConfirm = async () => {
  await useApiFetch(`/api/dliib/${route.params.id}`, {
    method: 'DELETE',
    headers: {
      Authorization: token.value!,
    },
  });
  router.push('/mypage/mydliibs');
};
</script>

<template>
  <div class="h-full">
    <div class="h-5/6">
      <DliibWindowContentCard :dliib="dliib" />
    </div>
    <div class="flex justify-end mt-2 px-5">
      <ButtonRound @click="showModal = true">삭제?</ButtonRound>
    </div>
  </div>
  <ModalDeleteConfirm v-if="showModal" @close="showModal = false" @confirm="handleConfirm"></ModalDeleteConfirm>
</template>
