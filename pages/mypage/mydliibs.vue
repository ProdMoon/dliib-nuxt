<script setup lang="ts">
definePageMeta({
  layout: 'hasback',
  title: '내정보 > 내가 쓴 글',
})
</script>

<template>
  <ButtonNavigateMenu v-for="idx in 10" href="/mypage/mydliib">
    드립 {{ idx }}
  </ButtonNavigateMenu>
</template>