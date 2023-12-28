<script>
export default {
  props: {
    compact: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<template lang="pug">
header.bohns-header(:class="{'display-full': !compact,'display-compact': compact}")
    .bohns-header-top
    .bohns-header-head
        a.bohns-header-alexis(href="/")
            g-image(src="~/assets/images/alexis-bohn-product-designer.webp" class='bohns-header-picture' alt='Alexis Bohn')
            .bohns-header-heading
                h1.bohns-header-title Alexis Bohn
                .bohns-header-subtitle Product, brand & design
        // .bohns-header-navigation
            a.bohns-header-navigation-item(href="/") Home
            a.bohns-header-navigation-item(href="/") About
            a.bohns-header-navigation-item(href="/") Works
    .bohns-header-contact
        .bohns-header-contact-item
            .bohns-header-contact-item-label phone
            a.bohns-header-contact-item-data(href="tel:+33756860089") +33 07 56 86 00 89
        .bohns-header-contact-item
            .bohns-header-contact-item-label mail
            a.bohns-header-contact-item-data(href="mailto:hello@bohns.design") hello@bohns.design
        .bohns-header-contact-item
            .bohns-header-contact-item-label social
            .bohns-header-contact-item-data
                a(href="https://linkedin.com/in/bohns")
                    span LinkedIn
                a(href="https://www.behance.net/alexisbohn")
                    span Behance
                a(href="https://github.com/alexisbohns")
                    span GitHub
</template>
<style lang="scss">
.bohns-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    gap: 2rem;

    &-head {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: var(--bohns-color-dark);
        text-decoration: none;
        gap: 2rem;
    }

    &-alexis {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: white;
    }

    &-picture {
        width: 6rem;
        border-radius: 15%;
        filter: saturate(1);
        transition: all ease-in-out 0.25s;
        &:hover {
            filter: saturate(0.5);
        }
    }

    &-heading {
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: all ease-in-out 0.2s;
    }

    &-title {
        font-family: var(--bohns-font-headings);
        font-size: 1.5rem;
        margin: 0;  
    }

    &-subtitle {
        margin: 0;
    }

    &-navigation {
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }
}

.bohns-header-contact {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    border-bottom: 1px solid var(--bohns-def-50);
    background: white;
    padding: 1rem;
    border-radius: 1rem 1rem 0 0;

    @media (min-width: 600px) {
        align-items: center;
        flex-direction: row;
        gap: 2rem;
    }

    &-item {
        display: flex;
        flex-direction: column;

        &-label {
            text-transform: uppercase;
            letter-spacing: 0.125rem;
            font-size: 0.75rem;
        }

        &-data {
            display: flex;
            gap: 8px;
        }
    }
}
</style>