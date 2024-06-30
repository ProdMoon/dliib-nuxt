<script setup lang="ts">
const dliibs = await useFetchDliibs();
</script>

<template>
  <DliibWindowContainer>
    <DliibWindowInnerContainer>
      <DliibWindowContentCard v-for="dliib in dliibs">
        <div v-html="dliib.content?.replaceAll('\n', '<br />')"></div>
        <div class="absolute bottom-5 left-5 text-gray-500">
          <div class="italic">by. {{ dliib.authorNickName ?? '익명' }}</div>
          <div class="text-sm">{{ momentFormat(dliib.createdAt) }}</div>
        </div>
      </DliibWindowContentCard>
      <DliibWindowContentCard>
        초등학교 다니는 딸의 숙제가 5대양 6대주를 알아오라는 것이었어요.<br />
        딸은 아무리 책을 뒤져봐도 잘 몰라 아빠에게 물었어요.<br />
        딸 : "아빠! 5대양 6대 주가 뭐예요???"<br />
        한참 동안을 생각하던 아빠가 딸에게 말했어요.<br />
        아빠 : "그것은.. 응~~~ 잘 받아 적어라.<br />
        5대양은 김양, 이양, 박양, 강양, 최 양이다!"<br />
        딸 : "아빠~~ 그럼 6대 주는 뭐예요???"<br />
        아빠 : "음... 6대 주는 소주, 맥주, 양주, 고량주, 포도주, 막걸리를 6대 주라고 하지~~~!!"<br />
        다음 날 학교에서 선생님에게 야단을 맞고 집에 돌아온 딸이 아빠에게 울먹이며 말했어요.<br />
        딸 : "아빠~~~!! 숙제 잘못해 왔다고 선생님한테 혼났어요~~!!"<br />
        이 말에 아빠는 딸에게 무척이나 미안하다는 표정을 지으며 말했어요.<br />
        아빠 : "응~~ 미안하다. 아빠가 착각했다. 사실은 막걸리가 아니고 탁주다~~!! 탁주~~!!"<br />
        ㅎㅎㅎㅎㅎㅎㅎ
      </DliibWindowContentCard>
      <DliibWindowContentCard>
        뚱뚱하다고 놀림을 받던 영자가 포도 외에는 아무것도 먹지 않는 '포도 다이어트'를 시작했어요.<br />
        사흘 째 되던 날!<br />
        영자가 그만 의식을 잃고 쓰러졌어요.<br />
        깜짝 놀란 가족은 쓰러진 영자를 병원으로 데려갔어요.<br />
        영자 어머니가 의사에게 물었어요.<br />
        "의사 선생님, 영양실조인가<br />
        얘가 며칠 동안 포도만 먹었거든요....."<br />
        의사가 고개를 가로저으며 말했어요.<br />
        "어머님, 농약 중독입니다.!!!"
      </DliibWindowContentCard>
      <DliibWindowContentCard>
        이번 여름에 콘도가 당첨되어 가족여행으로 속초를 가기로 했어요.<br />
        휴가 성수기라 차가 막힐 것을 걱정스러워 6시에 출발했는데도 차가 막히기 시작했어요.<br />
        그래서 휴게소에서 잠깐 쉬고 아내와 운전을 교대했는데 도로가 뚫리기 시작했어요.<br />
        아내는 기분이 업돼서 이렇게 말했어요.<br />
        아내 : "아들~~~ 아직도 엄마 미모가 먹히나 봐~~!! 지나가는 남자들이 다 V자 표시를 하잖아~~ㅎㅎ!!"<br />
        이 말에 작은 아들은 웃으며 이렇게 대꾸했어요.<br />
        아들 : "엄<br />
        그게 아니라~~ 1차선으로 가지 말고 2차선으로 가란 뜻이잖아~~~!!"<br />
        아내 : ".......ㅠㅠ"
      </DliibWindowContentCard>
      <DliibWindowContentCard>
        지방에 사는 아이큐 3과 아이큐 1.5가 서울에 있는 대학에 합격하여 함께 자취를 하게 되었어요.<br />
        아이큐 1.5는 아이큐 3이 시키는 대로 청소도 하고 라면도 끓이고 설거지에 세탁기.. 거의 모든 일을 했어요.<br />
        그런데 겨울방학 동안 집에 다녀온 아이큐 1.5가 아이큐 3이 하는 말을 귀등으로도 듣지 않는 것이었어요.<br />
        참다못한 아이큐 3이 1.5에게 소리쳤어요.<br />
        아이큐 3 : "야~~ 1.5!!! 너 왜 그래~~~ 인마~ 뭐 잘못 먹었어!!!"<br />
        그러자 아이큐 1.5가 말했어요.<br />
        아이큐 1.5 : "야~~ 나 방학 동안에 점 뺐어! 인마~~!!"<br />
        ㅎㅎㅎㅎㅎㅎ
      </DliibWindowContentCard>
      <DliibWindowContentCard>
        어머! 마지막 드립이에요 🥲<br />
        드립 부족 사태를 해결하기 위해 드립을 쳐 봅시다 (우상단)
      </DliibWindowContentCard>
    </DliibWindowInnerContainer>
  </DliibWindowContainer>
</template>
