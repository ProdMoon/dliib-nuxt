<script setup lang="ts">
const props = defineProps<{
  href?: string;
  class?: string;
  onClick?: () => void;
  confirm?: boolean;
  danger?: boolean;
}>();

let combinedClass = props.class ?? '';
combinedClass += ' px-5 py-2 rounded-full inline-block';
if (props.danger)
  combinedClass += ' bg-red-500 text-white hover:bg-red-600';
else if (props.confirm)
  combinedClass += ' bg-green-500 text-white hover:bg-green-600';
else
  combinedClass += ' bg-white border border-gray-500 text-black hover:bg-gray-100';
</script>
<template>
  <ButtonDefault :href="props.href" :class="combinedClass" @click="props.onClick">
    <slot></slot>
  </ButtonDefault>
</template>
