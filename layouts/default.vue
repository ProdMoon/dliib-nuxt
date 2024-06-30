<script setup lang="ts">
const { status, signOut } = useAuth();
const route = useRoute();
const router = useRouter();

const modalNeedLoginShow = ref(false);

const currentPath = computed(() => router.currentRoute.value.path);
const isLogon = computed(() => status.value === 'authenticated');

const handleLogout = async () => {
  await signOut();
};
</script>

<style scoped>
#default-slot-container {
  height: calc(100vh - 7rem);
  margin-top: 3.5rem;
}
</style>

<template>
  <main class="flex justify-center items-center h-screen">
    <div class="w-full h-full max-w-screen-sm bg-gray-50 relative">
      <div class="absolute top-0 left-0 w-full h-14 flex items-center justify-between px-2 bg-zinc-700">
        <div>
          <img src="/dliib_logo_small.png" alt="dliib logo" class="h-10" />
        </div>
        <div class="flex items-center space-x-2">
          <ButtonRound v-if="!isLogon" :href="`/account/login?returnUrl=${route.path}`">로그인</ButtonRound>
          <ButtonRound v-else @click="handleLogout">로그아웃</ButtonRound>
          <ButtonRound @click="isLogon ? router.push('/dliib/hit') : modalNeedLoginShow = true">나도 드립쳐보기</ButtonRound>
        </div>
      </div>

      <div id="default-slot-container">
        <slot></slot>
      </div>

      <div class="absolute bottom-0 left-0 w-full h-14 flex items-center justify-around px-2 bg-zinc-700">
        <NuxtLink to="/mypage">
          <div :class="`flex flex-col items-center ${currentPath === '/mypage' ? 'text-blue-300' : 'text-white'}`">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path
                fill-rule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clip-rule="evenodd"
              />
            </svg>
            <div class="text-xs">내정보</div>
          </div>
        </NuxtLink>
        <NuxtLink to="/">
          <div :class="`flex flex-col items-center ${currentPath === '/' ? 'text-blue-300' : 'text-white'}`">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path
                fill-rule="evenodd"
                d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm18 3H3.75v9a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V9Zm-15-3.75A.75.75 0 0 0 4.5 6v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75H5.25Zm1.5.75a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V6Zm3-.75A.75.75 0 0 0 9 6v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75H9.75Z"
                clip-rule="evenodd"
              />
            </svg>
            <div class="text-xs">드립의 장</div>
          </div>
        </NuxtLink>
      </div>

      <!-- Modal zone -->
      <ModalNeedLogin v-show="modalNeedLoginShow" @close="modalNeedLoginShow = false" />
      <!-- Modal zone end -->
    </div>
  </main>
</template>
