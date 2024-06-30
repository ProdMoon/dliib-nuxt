<script setup lang="ts">
const props = defineProps<{
  type?: string;
  id?: string;
  class?: string;
  modelValue?: string;
  disabled?: boolean;
}>();

defineEmits(['update:modelValue']);

const combinedClass = `px-4 py-2 rounded-md border bg-white text-black hover:bg-blue-50 focus:bg-blue-50 disabled:bg-gray-200 disabled:text-gray-500 inline-block ${
  props.class ?? ''
}`;
</script>

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    :type="props.type"
    :id="props.id"
    :class="combinedClass"
    :disabled="props.disabled"
  />
</template>
