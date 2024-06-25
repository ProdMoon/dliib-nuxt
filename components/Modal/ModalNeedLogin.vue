<script setup lang="ts">
const props = defineProps<{
  onClose: () => void;
}>();
</script>

<template>
  <ModalDefault @close="props.onClose">
    <div class="p-10">
      <div class="text-5xl font-bold">로그인이<br />필요해요</div>
      <div class="mt-10">
        <ButtonRound href="/account/signup">회원가입 ㄹㅇ 3초컷</ButtonRound>
      </div>
      <div class="mt-5">
        <ButtonRound href="/account/login">로그인</ButtonRound>
      </div>
    </div>
  </ModalDefault>
</template>