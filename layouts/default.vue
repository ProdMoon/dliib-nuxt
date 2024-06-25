<script setup lang="ts">
const modalNeedLoginShow = ref(false);
</script>

<template>
  <main class="flex justify-center items-center h-screen">
    <div class="w-full h-full max-w-screen-sm bg-gray-300 relative">
      <div class="absolute top-0 left-0 w-full h-14 flex items-center justify-between px-2 bg-zinc-700">
        <div>
          <img src="/dliib_logo_small.png" alt="dliib logo" class="h-10" />
        </div>
        <div>
          <ButtonRound @click="modalNeedLoginShow = true">나도 드립쳐보기</ButtonRound>
        </div>
      </div>

      <slot></slot>

      <div class="absolute bottom-0 left-0 w-full h-14 flex items-center justify-around px-2 bg-zinc-700">
        <div class="text-white flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path
              fill-rule="evenodd"
              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
              clip-rule="evenodd"
            />
          </svg>
          <div class="text-xs">내정보</div>
        </div>
        <div class="text-white flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path
              fill-rule="evenodd"
              d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm18 3H3.75v9a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V9Zm-15-3.75A.75.75 0 0 0 4.5 6v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75H5.25Zm1.5.75a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V6Zm3-.75A.75.75 0 0 0 9 6v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75H9.75Z"
              clip-rule="evenodd"
            />
          </svg>
          <div class="text-xs">드립의 장</div>
        </div>
      </div>

      <!-- Modal zone -->
      <ModalNeedLogin v-show="modalNeedLoginShow" @close="modalNeedLoginShow = false" />
      <!-- Modal zone end -->
    </div>
  </main>
</template>
