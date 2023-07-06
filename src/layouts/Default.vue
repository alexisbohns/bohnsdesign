<script>
import BohnsHeader from '../components/BohnsHeader.vue'

export default {
  components: {
    BohnsHeader
  }
}
</script>
<template lang="pug">
.layout
  BohnsHeader
  .main
    slot
</template>
<style lang="scss">
body {
  font-family: Arial, sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  background: url(../assets/images/bohns-background.svg);
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}

.layout {
  max-width: 760px;
  display: flex;
  flex-direction: columns;
  align-items: center;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
