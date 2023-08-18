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
  align-items: flex-start;
  padding: 2rem;
  @media (min-width: 480px) {
    justify-content: center;
    min-height: 100vh;
    padding: 0 3rem;
  }
  .main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    padding: 10vh 0;

    // @media (min-width: 480px) {
    //     padding: rem 0;
    // }
  }
}
</style>
