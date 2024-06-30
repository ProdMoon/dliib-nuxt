<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
});
</script>

<template>
  <div class="w-full h-full">
    <ButtonNavigateMenu href="/mypage/mydliibs"> 내가 쓴 글 </ButtonNavigateMenu>
    <ButtonNavigateMenu href="/account/withdraw"> 회원 탈퇴 </ButtonNavigateMenu>
  </div>
</template>
