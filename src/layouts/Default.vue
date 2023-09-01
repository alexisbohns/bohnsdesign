<script>
import BohnsHeader from '../components/BohnsHeader.vue'
import BohnsFooter from '../components/BohnsFooter.vue'

export default {
  components: {
    BohnsHeader,
    BohnsFooter
  },
  props: {
    displayHeader: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    showHeader() {
      return this.BohnsHeader;
    }
  }
}
</script>
<template lang="pug">
.layout
  BohnsHeader(v-if='displayHeader')
  .main
    slot
  BohnsFooter
</template>
<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  .main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  .main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
}
</style>
