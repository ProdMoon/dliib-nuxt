<script setup lang="ts">
definePageMeta({
  layout: 'hasback',
  title: '회원가입',
});
const router = useRouter();
const { signUp } = useAuth();

const email = ref('');
const password = ref('');
const passwordConfirm = ref('');
const nickname = ref('');
const isLoading = ref(false);

const handleSignup = async () => {
  if (!isFormValid.value) {
    return;
  }
  isLoading.value = true;
  const credentials = {
    email: email.value,
    password: password.value,
    nickName: nickname.value,
  };
  try {
    await signUp(credentials, {
      callbackUrl: '/account/signupcomplete',
    });
  } catch (error: any) {
    if (error.response?.status === 500) return alert('서버 오류가 발생했습니다.');
    console.log(error.response?._data)
    return alert(error.response?._data);
  } finally {
    isLoading.value = false;
  }
};

const isFormValid = computed(() => {
  return !!email.value && !!password.value && !!passwordConfirm.value && !!nickname.value && !!isPasswordMatch.value;
});

const isPasswordMatch = computed(() => {
  return password.value === passwordConfirm.value;
});
</script>

<template>
  <div class="flex flex-col items-center w-full p-5 relative">
    <div>사실 3초컷은 구라임 ㅋㅋ</div>
    <form class="w-full" @submit.prevent="handleSignup">
      <div class="mt-10 space-y-5 w-full">
        <div class="flex flex-col space-y-1">
          <label for="email" class="text-sm">이메일</label>
          <InputDefault v-model="email" type="email" />
        </div>
        <div class="flex flex-col space-y-1">
          <label for="password" class="text-sm">비밀번호</label>
          <InputDefault v-model="password" type="password" />
        </div>
        <div class="flex flex-col space-y-1">
          <label for="passwordConfirm" class="text-sm">비밀번호 확인</label>
          <InputDefault v-model="passwordConfirm" type="password" />
          <div v-if="password && passwordConfirm && !isPasswordMatch" class="text-red-500 text-xs">
            비밀번호가 일치하지 않습니다.
          </div>
        </div>
        <div class="flex flex-col space-y-1">
          <label for="nickname" class="text-sm">닉네임</label>
          <InputDefault v-model="nickname" type="text" />
        </div>
      </div>
      <div class="mt-10 flex w-full justify-center">
        <ButtonRound class="w-full" type="submit" :disabled="!isFormValid || isLoading">회원가입</ButtonRound>
      </div>
    </form>
  </div>
</template>
