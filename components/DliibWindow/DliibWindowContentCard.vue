<script setup lang="ts">
const handleLikeClick = () => {
  console.log('Like button clicked');
};
const handleTryHarderClick = () => {
  console.log('Try harder button clicked');
};
</script>

<template>
  <div class="relative h-[95%] shadow-lg rounded-lg m-5 p-5 bg-gray-100 text-lg snap-start">
    <div class="absolute bottom-20 right-6">
      <div class="space-y-6">
        <ButtonLike :onClick="handleLikeClick" />
        <ButtonTryHarder :onClick="handleTryHarderClick" />
      </div>
    </div>
    <slot></slot>
  </div>
</template>
