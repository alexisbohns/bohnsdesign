<script>
import BohnsHeader from '../components/BohnsHeader.vue'
import BohnsFooter from '../components/BohnsFooter.vue'
import Skills from '../components/Skills.vue'

export default {
  components: {
    BohnsHeader,
    BohnsFooter,
    Skills
  }
}
</script>
<template lang="pug">
.layout
  BohnsHeader
  .main
    slot
  Skills
  BohnsFooter
</template>
<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: 480px) {
    justify-content: center;
    min-height: 100vh;
  }
  header, footer {
    padding: 2rem;
    
    @media (min-width: 480px) {
      padding: 0 3rem;
    }
  }
  .main {
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    padding: 2rem;
    
    @media (min-width: 480px) {
      padding: 0 3rem;
    }
  }
}
</style>
