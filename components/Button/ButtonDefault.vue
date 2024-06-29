<script setup lang="ts">
const props = defineProps<{
  href?: string;
  class?: string;
  onClick?: () => void;
}>();
</script>
<template>
  <NuxtLink v-if="props.href" :to="props.href" @click="onClick" :class="props.class">
    <slot></slot>
  </NuxtLink>
  <button v-else @click="onClick" :class="props.class">
    <slot></slot>
  </button>
</template>
