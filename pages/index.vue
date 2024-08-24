<script setup lang="ts">
import type { Dliib } from '@/types/dliib';

const { token } = useAuth();

const apiHealth = ref(true);
const dliibs = ref<Dliib[] | undefined>(undefined);

onMounted(() => {
  getApiHealth();
  getDliibs();
});

watch(token, () => {
  getDliibs();
});

const getApiHealth = async () => {
  const healthResponse = await useApiFetch('/api/health');
  apiHealth.value = !!healthResponse;
};

const getDliibs = async () => {
  const dliibsResponse = await useApiFetch('/api/dliib', {
    headers: {
      Authorization: token.value,
    },
  });
  dliibs.value = dliibsResponse;
};
</script>

<template>
  <DliibWindowContainer>
    <DliibWindowInnerContainer>
      <template v-if="dliibs">
        <DliibWindowContentCard v-for="dliib in dliibs" :dliib="dliib">
        </DliibWindowContentCard>
        <DliibWindowContentCard>
          어머! 마지막 드립이에요 🥲<br />
          드립 부족 사태를 해결하기 위해 드립을 쳐 봅시다 (우상단)
        </DliibWindowContentCard>
      </template>
      <template v-else>
        <DliibWindowContentCard>
          드립을 불러오는 중...<br />
          <br />
          서버 상태가 {{ apiHealth ? '좋습니다.' : '좋지 않습니다... 🤔 이 상태가 지속된다면 새로고침 해주세요.' }}
        </DliibWindowContentCard>
      </template>
    </DliibWindowInnerContainer>
  </DliibWindowContainer>
</template>
