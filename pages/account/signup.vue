<script setup lang="ts">
definePageMeta({
  layout: 'blank',
});
const router = useRouter();

const handleBack = () => {
  router.back();
};
</script>

<template>
  <div class="flex flex-col items-center w-full p-5 relative">
    <div class="absolute top-5 left-5">
      <ButtonBack @click="handleBack" />
    </div>
    <div class="text-2xl font-bold">회원가입</div>
    <div class="mt-2">사실 3초컷은 구라임 ㅋㅋ</div>
    <div class="mt-10 space-y-5 w-full">
      <div class="flex flex-col space-y-1">
        <label for="email" class="text-sm">이메일</label>
        <InputDefault type="email" />
      </div>
      <div class="flex flex-col space-y-1">
        <label for="password" class="text-sm">비밀번호</label>
        <InputDefault type="password" />
      </div>
      <div class="flex flex-col space-y-1">
        <label for="passwordConfirm" class="text-sm">비밀번호 확인</label>
        <InputDefault type="password" />
      </div>
      <div class="flex flex-col space-y-1">
        <label for="nickname" class="text-sm">닉네임</label>
        <InputDefault type="text" />
      </div>
    </div>
    <div class="mt-10 flex w-full justify-center">
      <ButtonRound class="w-full">회원가입</ButtonRound>
    </div>
  </div>
</template>
