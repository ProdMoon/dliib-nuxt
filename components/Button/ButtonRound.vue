<script setup lang="ts">
const props = defineProps<{
  href?: string;
  class?: string;
}>();

const combinedClass = `px-5 py-2 rounded-full bg-cyan-600 text-white hover:bg-cyan-500 inline-block ${props.class ?? ''}`;
</script>
<template>
  <NuxtLink v-if="props.href" :to="props.href" :class="combinedClass">
    <span>
      <slot></slot>
    </span>
  </NuxtLink>
  <button v-else :class="combinedClass">
    <span>
      <slot></slot>
    </span>
  </button>
</template>
