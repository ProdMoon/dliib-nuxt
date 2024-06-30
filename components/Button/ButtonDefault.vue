<script setup lang="ts">
const props = defineProps<{
  href?: string;
  class?: string;
  onClick?: () => void;
  disabled?: boolean;
}>();
</script>
<template>
  <NuxtLink v-if="props.href" :to="props.href" @click="onClick" :class="props.class" :disabled="props.disabled">
    <slot></slot>
  </NuxtLink>
  <button v-else @click="onClick" :class="props.class" :disabled="props.disabled">
    <slot></slot>
  </button>
</template>
