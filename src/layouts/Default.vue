<template lang="pug">
.layout
  .main
    slot
</template>
<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  .main {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
}
</style>
