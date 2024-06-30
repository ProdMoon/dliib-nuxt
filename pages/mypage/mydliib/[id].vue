<script setup lang="ts">
definePageMeta({
  layout: 'hasback',
  title: '내 드립',
  middleware: 'auth',
});

const route = useRoute();
const router = useRouter();
const { token } = useAuth();
const showModal = ref(false);


const { data } = await useApiFetch(`/api/dliib/${route.params.id}`);
const dliib: Dliib = data;

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
  <div class="p-5">
    <div>{{ dliib.content }}</div>
    <div class="flex justify-end mt-4">
      <ButtonRound @click="showModal = true">삭제?</ButtonRound>
    </div>
  </div>
  <ModalDeleteConfirm v-if="showModal" @close="showModal = false" @confirm="handleConfirm"></ModalDeleteConfirm>
</template>
