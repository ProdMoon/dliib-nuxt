<script setup lang="ts">
const { status, refresh } = useAuth();
const { refreshToken } = useAuthState();

if (status.value === 'unauthenticated' && refreshToken.value) {
  //refresh();
}
</script>

<style>
body {
  background-color: #333;
}
</style>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
