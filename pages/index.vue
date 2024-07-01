<script setup lang="ts">
const dliibs = await useFetchDliibs();
</script>

<template>
  <DliibWindowContainer>
    <DliibWindowInnerContainer>
      <template v-if="dliibs">
        <DliibWindowContentCard v-for="dliib in dliibs">
          <div v-html="dliib.content?.replaceAll('\n', '<br />')"></div>
          <div class="absolute bottom-5 left-5 text-gray-500">
            <div class="italic">by. {{ dliib.authorNickName ?? '익명' }}</div>
            <div class="text-sm">{{ momentFormat(dliib.createdAt) }}</div>
          </div>
        </DliibWindowContentCard>
        <DliibWindowContentCard>
          어머! 마지막 드립이에요 🥲<br />
          드립 부족 사태를 해결하기 위해 드립을 쳐 봅시다 (우상단)
        </DliibWindowContentCard>
      </template>
      <template v-else>
        <DliibWindowContentCard>
          서버가 잠에서 깬 지 얼마 되지 않아 정신이 없습니다. 30초 정도 후에 새로고침을 해주세요... 🤔
        </DliibWindowContentCard>
      </template>
    </DliibWindowInnerContainer>
  </DliibWindowContainer>
</template>
