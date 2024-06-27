<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const handleBack = () => {
  router.back();
};
</script>

<template>
  <NuxtLayout name="blank">
    <div class="h-14 bg-gray-200 flex items-center justify-center relative">
      <div class="absolute top-4 left-5">
        <ButtonBack @click="handleBack" />
      </div>
      <div class="text-2xl font-bold">{{ route.meta.title }}</div>
    </div>
    <slot></slot>
  </NuxtLayout>
</template>
