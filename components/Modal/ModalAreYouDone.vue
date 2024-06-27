<script setup lang="ts">
const props = defineProps<{
  onClose: () => void;
  onConfirm: () => void;
}>();
</script>

<template>
  <ModalDefault @close="props.onClose">
    <div class="p-10 flex flex-col items-center">
      <div class="text-2xl font-bold">다 적었나유?<br />나중에 수정은 안돼유~</div>
      <div class="mt-4">(삭제는 됨)</div>
      <div class="mt-10">
        <ButtonRound @click="onConfirm">올리기</ButtonRound>
      </div>
      <div class="mt-5">
        <ButtonRound @click="onClose">취소</ButtonRound>
      </div>
    </div>
  </ModalDefault>
</template>
