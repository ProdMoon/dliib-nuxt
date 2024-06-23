<style scoped>
#dliib-window-container {
  height: calc(100vh - 7rem);
  margin-top: 3.5rem;
  display: flex;
  justify-content: center;
  scroll-snap-type: y mandatory;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
}
</style>

<template>
  <div id="dliib-window-container">
    <slot></slot>
  </div>
</template>