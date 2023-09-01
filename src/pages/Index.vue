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
  .bohns-cover
    g-image(src="~/assets/images/lets-build-impactful-products.svg" alt='Alexis Bohn')
  .bohns-author-bio Head of Design @Enerfip (Green Fintech) since 2018 and independant designer for 10 years, I manage and design products, brands, interfaces and communication. I'm also a front-end Vue.js integrator. I own a Master's degree in Experience Design & Art Direction, a Master's degree in Management, and a Bachelor's degree in Sociology. I have experience working with large clients such as EDF and Crédit Agricole Group, as well as with entrepreneurs and non-profit organizations.
  // a.cta(href="/blog") Read my blog
</template>
<style lang="scss">
.bohns-cover {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;

  @media (min-width: 600px) {
    padding: 5rem 0;
  }

  @media (min-width: 1000px) {
    padding: 10rem 0;
  }

  img {
    width: 100%;
    max-width: 2440
  }
}

.bohns-author-bio {
  max-width: 700px;
}
</style>
