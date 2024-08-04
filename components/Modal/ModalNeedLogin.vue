<script setup lang="ts">
const props = defineProps<{
  onClose: () => void;
}>();

const modalNeedLoginShow = useState('modalNeedLoginShow', () => false);
</script>

<template>
  <ModalDefault @close="props.onClose">
    <div class="p-10">
      <div class="text-5xl font-bold">로그인이<br />필요해요</div>
      <div class="mt-10">
        <ButtonRound href="/account/signup" @click="modalNeedLoginShow = false">회원가입 ㄹㅇ 3초컷</ButtonRound>
      </div>
      <div class="mt-5">
        <ButtonRound href="/account/login" @click="modalNeedLoginShow = false">로그인</ButtonRound>
      </div>
    </div>
  </ModalDefault>
</template>