<script>
import BohnsHeader from '../components/BohnsHeader.vue'
import BohnsFooter from '../components/BohnsFooter.vue'

export default {
  components: {
    BohnsHeader,
    BohnsFooter
  }
}
</script>
<template lang="pug">
.layout
  BohnsHeader
  .main
    slot
  BohnsFooter
</template>
<style lang="scss">
.layout {
  max-width: 600px;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  @media (min-width: 480px) {
    justify-content: center;
    min-height: 100vh;
    padding: 0 3rem;
  }
}
</style>
