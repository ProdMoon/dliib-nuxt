<script setup lang="ts">
const props = defineProps<{
  onClose: () => void;
}>();
</script>

<template>
  <div class="w-full h-full absolute top-0 left-0 z-10 bg-black/20" @click.self="props.onClose">
    <div class="w-[95%] h-[70%] absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg">
      <div class="flex justify-start p-5">
        <ButtonClose @click="props.onClose" />
      </div>
      <slot></slot>
    </div>
  </div>
</template>