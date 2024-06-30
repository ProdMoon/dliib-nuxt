<script setup lang="ts">
import type { Dliib } from '@/types/dliib';

definePageMeta({
  layout: 'hasback',
  title: '내가 쓴 글',
  middleware: 'auth',
});

const { token } = useAuth();

const { data } = await useApiFetch('/api/dliib/my', {
  method: 'GET',
  headers: {
    Authorization: token.value!,
  },
});
const dliibs: Dliib[] = data;
</script>

<template>
  <ButtonNavigateMenu v-for="dliib in dliibs" :href="`/mypage/mydliib/${dliib.id}`">
    <div class="truncate">{{ dliib.content }}</div>
    <div class="text-gray-500 text-xs mt-1">{{ momentFormat(dliib.createdAt) }}</div>
  </ButtonNavigateMenu>
</template>
