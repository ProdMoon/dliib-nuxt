<script setup lang="ts">
const props = defineProps<{
  href?: string;
  class?: string;
  onClick?: () => void;
}>();

const combinedClass = `px-5 py-2 rounded-full bg-cyan-600 text-white hover:bg-cyan-500 inline-block ${
  props.class ?? ''
}`;
</script>
<template>
  <ButtonDefault :href="props.href" :class="combinedClass" @click="props.onClick">
    <slot></slot>
  </ButtonDefault>
</template>
