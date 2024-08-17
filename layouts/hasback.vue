<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const handleBack = () => {
  router.back();
};
</script>

<style scoped>
.container {
  height: calc(100% - 3.5rem);
}
</style>

<template>
  <NuxtLayout name="blank">
    <div class="h-14 bg-gray-200 flex items-center justify-center relative">
      <div class="absolute top-4 left-5">
        <ButtonBack @click="handleBack" />
      </div>
      <div class="text-2xl font-bold">{{ route.meta.title }}</div>
    </div>
    <div class="container overflow-y-auto">
      <slot></slot>
    </div>
  </NuxtLayout>
</template>
