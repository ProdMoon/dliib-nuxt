<script setup lang="ts">
import type { Dliib } from '@/types/dliib';

const props = defineProps<{
  dliib?: Dliib;
}>();

const { status, token } = useAuth();
const modalNeedLoginShow = useState('modalNeedLoginShow', () => false);

const dliib = ref<Dliib | undefined>(props.dliib);
const dliibContentElements = ref<HTMLElement[]>([]);
const currentPage = ref(0);
const maxPage = computed(() => {
  const length = dliib.value?.contents?.length ?? 0;
  return length > 0 ? length - 1 : 0;
});

onMounted(() => {
  if (!dliib.value) return;
  const id = dliib.value.id;

  initContainerObserver();
  containerObserver.observe(document.getElementById(`dliib-${id}-container`) as HTMLElement);
  
  for (let idx = 0; idx < dliib.value.contents!.length; idx++) {
    const el = document.getElementById(`dliib-${id}-${idx}`);
    if (el) dliibContentElements.value.push(el);
  }
  initContentsObserver();
  dliibContentElements.value.forEach((el) => contentsObserver.observe(el));
});

onUnmounted(() => {
  contentsObserver && contentsObserver.disconnect();
  containerObserver && containerObserver.disconnect();
});

let containerObserver: IntersectionObserver;
const initContainerObserver = () => {
  if (containerObserver) containerObserver.disconnect();
  containerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const container = entry.target as HTMLElement;
      if (!container) return;
      if (!entry.isIntersecting) return;
      container.focus({ preventScroll: true });
    });
  }, {
    threshold: 0.5,
  });
};

watch(props, () => {
  dliib.value = props.dliib;
});

let contentsObserver: IntersectionObserver;
const initContentsObserver = () => {
  if (contentsObserver) contentsObserver.disconnect();
  contentsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const idx = dliibContentElements.value.indexOf(entry.target as HTMLElement);
      if (idx !== -1) currentPage.value = idx;
    });
  }, {
    root: document.getElementById(`dliib-${dliib.value!.id}-container`),
    threshold: 0.5,
  });
};

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

const moveToPreviousPage = () => {
  const el = document.getElementById(`dliib-${dliib.value!.id}-container`);
  if (el) el.scrollBy({ left: -el.clientWidth, behavior: 'smooth' });
};

const moveToNextPage = () => {
  const el = document.getElementById(`dliib-${dliib.value!.id}-container`);
  if (el) el.scrollBy({ left: el.clientWidth, behavior: 'smooth' });
};
</script>

<style scoped>
.dliib-contents-container {
  height: calc(100% - 5rem);
}
</style>

<template>
  <div class="relative h-[95%] shadow-lg rounded-lg m-5 px-3 pt-3 bg-gray-200 text-lg snap-start">
    <template v-if="dliib">
      <div :id="`dliib-${dliib.id}-container`" class="dliib-contents-container overflow-x-auto h-full flex snap-x snap-mandatory">
        <div
          :id="`dliib-${dliib.id}-${idx}`"
          class="snap-center min-w-full overflow-y-auto border rounded-lg bg-gray-100 p-5"
          v-for="(dliibContent, idx) in dliib.contents"
          v-html="dliibContent?.replaceAll('\n', '<br />')"
        ></div>
      </div>
      <ButtonDefault v-if="maxPage > 0 && currentPage > 0" @click="moveToPreviousPage" class="absolute left-0 top-1/2 -translate-y-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="3"
          stroke="currentColor"
          class="size-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </ButtonDefault>
      <ButtonDefault v-if="maxPage > 0 && currentPage < maxPage" @click="moveToNextPage" class="absolute right-0 top-1/2 -translate-y-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="3"
          stroke="currentColor"
          class="size-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </ButtonDefault>
      <div class="absolute bottom-5 left-5 text-gray-500">
        <div class="italic">by. {{ dliib.authorNickName ?? '익명' }}</div>
        <div class="text-sm">{{ momentFormat(dliib.createdAt) }}</div>
      </div>
      <div class="absolute bottom-5 right-5 text-gray-500">
        <div class="italic text-sm">
          좋았다 <span class="text-blue-500">{{ dliib.likes }}개</span> / 분발하자
          <span class="text-red-500">{{ dliib.dislikes }}개</span>
        </div>
      </div>
      <div class="absolute bottom-24 right-7">
        <div class="space-y-6">
          <ButtonLike :on-click="handleLikeClick" :is-clicked="dliib.isLiked" />
          <ButtonTryHarder :on-click="handleTryHarderClick" :is-clicked="dliib.isDisliked" />
        </div>
      </div>
    </template>
    <slot></slot>
  </div>
</template>
