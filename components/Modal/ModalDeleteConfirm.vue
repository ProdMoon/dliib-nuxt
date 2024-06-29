<script setup lang="ts">
const props = defineProps<{
  onClose: () => void;
  onConfirm: () => void;
}>();
</script>

<template>
  <ModalDefault @close="props.onClose">
    <div class="p-10 flex flex-col items-center">
      <div class="text-2xl font-bold">정말 삭제하실건가유?</div>
      <div class="mt-4">(복구 안됨)</div>
      <div class="mt-10">
        <ButtonRound @click="onConfirm">삭제</ButtonRound>
      </div>
      <div class="mt-5">
        <ButtonRound @click="onClose">취소</ButtonRound>
      </div>
    </div>
  </ModalDefault>
</template>
