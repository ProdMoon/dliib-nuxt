<script setup lang="ts">
import type { Dliib } from "@/types/dliib";

const props = defineProps<{
  dliib?: Dliib,
}>();

const { status, token } = useAuth();
const modalNeedLoginShow = useState('modalNeedLoginShow', () => false);

const dliib = ref<Dliib | undefined>(props.dliib);

const handleLikeClick = async () => {
  if (!dliib.value) return;
  if (status.value === 'unauthenticated') {
    modalNeedLoginShow.value = true;
    return;
  }

  const _ = await useApiFetch(`/api/dliiblike/like/${dliib.value.id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token.value!,
    },
  });

  await getDliib();
};

const handleTryHarderClick = async () => {
  if (!dliib.value) return;
  if (status.value === 'unauthenticated') {
    modalNeedLoginShow.value = true;
    return;
  }

  const _ = await useApiFetch(`/api/dliiblike/dislike/${dliib.value.id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token.value!,
    },
  });
  
  await getDliib();
};

const getDliib = async () => {
  if (!dliib.value) return;
  dliib.value = await useApiFetch(`/api/dliib/${dliib.value.id}`, {
    headers: {
      Authorization: token.value!,
    },
  });
};
</script>

<template>
  <div class="relative h-[95%] shadow-lg rounded-lg m-5 p-5 bg-gray-100 text-lg snap-start">
    <template v-if="dliib">
      <div v-html="dliib.content?.replaceAll('\n', '<br />')"></div>
      <div class="absolute bottom-5 left-5 text-gray-500">
        <div class="italic">by. {{ dliib.authorNickName ?? '익명' }}</div>
        <div class="text-sm">{{ momentFormat(dliib.createdAt) }}</div>
      </div>
      <div class="absolute bottom-5 right-5 text-gray-500">
        <div class="italic text-sm">좋았다 <span class="text-blue-500">{{ dliib.likes }}개</span> / 분발하자 <span class="text-red-500">{{ dliib.dislikes }}개</span></div>
      </div>
      <div class="absolute bottom-20 right-6">
        <div class="space-y-6">
          <ButtonLike :on-click="handleLikeClick" :is-clicked="dliib.isLiked"/>
          <ButtonTryHarder :on-click="handleTryHarderClick" :is-clicked="dliib.isDisliked" />
        </div>
      </div>
    </template>
    <slot></slot>
  </div>
</template>
