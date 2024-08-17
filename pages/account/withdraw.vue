<script setup lang="ts">
definePageMeta({
  layout: 'hasback',
  title: '회원 탈퇴',
});
const { token, signOut } = useAuth();

const handleWithdraw = async () => {
  try {
    await useApiFetch('/api/auth/deleteAccount', {
      method: 'DELETE',
      headers: {
        Authorization: token.value!,
      },
    });
    alert('회원 탈퇴가 완료되었습니다.');
    await signOut({ callbackUrl: '/' });
  } catch (error: any) {
    if (error.response?.status === 500) return alert('서버 오류가 발생했습니다.');
    return alert('알 수 없는 오류가 발생했습니다.');
  }
};
</script>

<template>
  <div class="flex flex-col items-center w-full h-full p-5 relative">
    <div>정말 탈퇴하시겠습니까?</div>
    <div>작성한 글들은 사라지지 않습니다.</div>
    <div class="absolute bottom-20 p-5 flex w-full justify-center">
      <ButtonRound class="w-full" danger @click="handleWithdraw">네, 탈퇴하겠습니다.</ButtonRound>
    </div>
  </div>
</template>
