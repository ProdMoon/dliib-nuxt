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
  contents: [''],
});
const contentsGarbage = ref<string[]>([]);

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

const addPage = () => {
  const garbage = contentsGarbage.value.pop();
  dliib.value.contents!.push(garbage ?? '');
};

const removePage = () => {
  if (dliib.value.contents!.length === 1) return;
  const content = dliib.value.contents!.pop();
  if (content) contentsGarbage.value.push(content);
};

const getCurrentPage = () => {
  const positions = [];
  for (let i = 0; i < dliib.value.contents!.length; i++) {
    const el = document.getElementById(`dliib-${i}`);
    if (el) positions.push(el.getBoundingClientRect().left);
  }
  const idx = positions.findIndex((pos) => pos > 0);
  return idx;
};

const moveToPreviousPage = () => {
  const idx = getCurrentPage();
  if (idx === -1) return;
  const el = document.getElementById(`dliib-${idx - 1}`);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

const moveToNextPage = () => {
  const idx = getCurrentPage();
  if (idx === -1) return;
  const el = document.getElementById(`dliib-${idx + 1}`);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
};
</script>

<template>
  <div class="p-5">
    <div class="relative">
      <div class="overflow-x-auto flex snap-x snap-mandatory">
        <div
          :id="`dliib-${idx}`"
          v-for="(_, idx) in dliib.contents"
          class="snap-center min-w-full flex items-center justify-center"
        >
          <textarea
            v-model="dliib.contents![idx]"
            class="w-[94%] h-96 p-4 border rounded-lg"
            placeholder="여기에 당신의 드립 입력"
          ></textarea>
        </div>
      </div>
      <ButtonDefault @click="moveToPreviousPage" class="absolute -left-2 top-1/2 -translate-y-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </ButtonDefault>
      <ButtonDefault @click="moveToNextPage" class="absolute -right-2 top-1/2 -translate-y-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </ButtonDefault>
    </div>
    <div class="flex justify-end space-x-2 mt-4">
      <ButtonRound v-if="dliib.contents!.length > 1" @click="removePage">마지막 페이지 삭제</ButtonRound>
      <ButtonRound @click="addPage">페이지 추가</ButtonRound>
    </div>
  </div>
  <div class="absolute left-0 bottom-0 w-full p-4">
    <ButtonRound @click="showModal = true" class="w-full" confirm>끝!</ButtonRound>
  </div>
  <ModalAreYouDone v-if="showModal" @close="showModal = false" @confirm="handleConfirm"></ModalAreYouDone>
</template>
