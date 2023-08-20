<script>
export default {
  metaInfo () {
    return this.$seo({
      title: 'Alexis Bohn, designer', // Uses the titleTemplate in Gridsome config
      description: "Head of Design @Enerfip (Finance) since 2018 and consultant for 10 years, I manage and design products, brands, interfaces and communication. I'm also a front-end Vue.js integrator. I own a Master's degree in Experience Design & Art Direction, a Master's degree in Management, and a Bachelor's degree in Sociology. I have experience working with large clients such as EDF and Crédit Agricole Group, as well as with entrepreneurs and non-profit organizations.",
      keywords: 'alexis bohn, alexis, bohn, bohns, design, ux design, ui design, product design, product management',
      openGraph: {
        title: 'Alexis Bohn, designer',
        description: "Head of Design @Enerfip (Finance) since 2018 and consultant for 10 years, I manage and design products, brands, interfaces and communication. I'm also a front-end Vue.js integrator. I own a Master's degree in Experience Design & Art Direction, a Master's degree in Management, and a Bachelor's degree in Sociology. I have experience working with large clients such as EDF and Crédit Agricole Group, as well as with entrepreneurs and non-profit organizations.",
        type: 'website'
      },
      twitter: {
        title: 'Alexis Bohn, designer',
        description: "Head of Design @Enerfip (Finance) since 2018 and consultant for 10 years, I manage and design products, brands, interfaces and communication. I'm also a front-end Vue.js integrator. I own a Master's degree in Experience Design & Art Direction, a Master's degree in Management, and a Bachelor's degree in Sociology. I have experience working with large clients such as EDF and Crédit Agricole Group, as well as with entrepreneurs and non-profit organizations.",
        type: 'summary'
      },
      link: [],   // any links
      script: []  // any scripts
    })
  }
}
</script>
<template lang="pug">
Layout
  .bohns-author-bio Head of Design @Enerfip (Green Fintech) since 2018 and independant designer for 10 years, I manage and design products, brands, interfaces and communication. I'm also a front-end Vue.js integrator. I own a Master's degree in Experience Design & Art Direction, a Master's degree in Management, and a Bachelor's degree in Sociology. I have experience working with large clients such as EDF and Crédit Agricole Group, as well as with entrepreneurs and non-profit organizations.
  // a.cta(href="/blog") Read my blog
</template>
<style lang="scss">
</style>
