<script setup lang="ts">
const { status, refresh } = useAuth();
const { refreshToken } = useAuthState();

onMounted(async () => {
  if (status.value === 'unauthenticated' && refreshToken.value) {
    try {
      await refresh();
    } catch (error) {
      // ignore
    }
  }
});
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
