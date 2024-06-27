<script setup lang="ts">
definePageMeta({
  layout: 'hasback',
  title: '로그인',
});
const router = useRouter();

const handleLogin = () => {
  router.push('/');
};
</script>

<template>
  <div class="flex flex-col items-center w-full p-5 relative">
    <form class="w-full" @submit.prevent="handleLogin">
    <div class="mt-8 space-y-5 w-full">
      <div class="flex flex-col space-y-1">
        <label for="email" class="text-sm">이메일</label>
        <InputDefault type="email" />
      </div>
      <div class="flex flex-col space-y-1">
        <label for="password" class="text-sm">비밀번호</label>
        <InputDefault type="password" />
      </div>
    </div>
    <div class="mt-10 flex w-full justify-center">
      <ButtonRound class="w-full" type="submit">로그인</ButtonRound>
    </div>
    </form>
  </div>
</template>
