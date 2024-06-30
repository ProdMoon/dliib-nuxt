<script setup lang="ts">
const props = defineProps<{
  href?: string;
  class?: string;
  onClick?: () => void;
  disabled?: boolean;
  confirm?: boolean;
  danger?: boolean;
}>();

let combinedClass = props.class ?? '';
combinedClass += ' px-5 py-2 rounded-full inline-block disabled:bg-gray-200 disabled:text-gray-500 disabled:border-none';
if (props.danger) combinedClass += ' bg-red-500 text-white hover:bg-red-600';
else if (props.confirm) combinedClass += ' bg-green-500 text-white hover:bg-green-600';
else combinedClass += ' bg-white border border-gray-500 text-black hover:bg-gray-100';
</script>
<template>
  <ButtonDefault :href="props.href" :class="combinedClass" @click="props.onClick" :disabled="props.disabled">
    <slot></slot>
  </ButtonDefault>
</template>
