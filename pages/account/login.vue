<script setup lang="ts">
definePageMeta({
  layout: 'hasback',
  title: '로그인',
});
const route = useRoute();
const { signIn } = useAuth();

const email = ref('');
const password = ref('');
const returnUrl = route.query.returnUrl as string | undefined;

const handleLogin = async () => {
  const credentials = {
    email: email.value,
    password: password.value,
  };
  try {
    await signIn(credentials, {
      callbackUrl: returnUrl || '/',
    });
  } catch (error: any) {
    if (error.response?.status === 500) return alert('서버 오류가 발생했습니다.');
    if (error.response?.status === 401) return alert('이메일 또는 비밀번호가 일치하지 않습니다.');
    return alert('알 수 없는 오류가 발생했습니다.');
  }
};
</script>

<template>
  <div class="flex flex-col items-center w-full p-5 relative">
    <form class="w-full" @submit.prevent="handleLogin">
    <div class="mt-8 space-y-5 w-full">
      <div class="flex flex-col space-y-1">
        <label for="email" class="text-sm">이메일</label>
        <InputDefault v-model="email" type="email" />
      </div>
      <div class="flex flex-col space-y-1">
        <label for="password" class="text-sm">비밀번호</label>
        <InputDefault v-model="password" type="password" />
      </div>
    </div>
    <div class="mt-10 flex w-full justify-center">
      <ButtonRound class="w-full" type="submit">로그인</ButtonRound>
    </div>
    </form>
    <div class="mt-16 text-sm text-center">
      <div>계정이 없으신가요?</div>
      <div class="mt-2">
        <NuxtLink to="/account/signup" class="mt-6 text-blue-500 underline">회원가입 ㄹㅇ 3초컷</NuxtLink>
      </div>
    </div>
  </div>
</template>
