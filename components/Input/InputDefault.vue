<script setup lang="ts">
const props = defineProps<{
  type?: string;
  id?: string;
  class?: string;
}>();

const combinedClass = `px-4 py-2 rounded-md border bg-white text-black hover:bg-blue-50 focus:bg-blue-50 inline-block ${props.class ?? ''}`;
</script>

<template>
  <input :type="props.type" :id="props.id" :class="combinedClass" />
</template>
