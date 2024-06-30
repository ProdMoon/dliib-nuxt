<script setup lang="ts">
const props = defineProps<{
  href?: string;
  class?: string;
  onClick?: () => void;
}>();

const combinedClass = `w-full flex items-center p-5 border-b hover:bg-blue-50 ${props.class ?? ''}`;
</script>

<template>
  <ButtonDefault :href="props.href" :class="combinedClass" @click="props.onClick">
    <div class="flex w-full items-center justify-between">
      <div class="w-11/12 grow">
        <slot></slot>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
          <path
            fill-rule="evenodd"
            d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  </ButtonDefault>
</template>
