<template lang="pug">
header.bohns-header
    a.bohns-header-author(href="/")
        g-image(src="~/assets/images/alexis-bohn-product-designer.webp" class='bohns-header-author-picture' alt='Alexis Bohn')
        .bohns-header-author-body
            h1.bohns-header-author-body-name Alexis Bohn
            .bohns-header-author-body-title Product, brand & design
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
                    i.fab.fa-linkedin
                a(href="https://www.behance.net/alexisbohn")
                    i.fab.fa-behance
                a(href="https://github.com/alexisbohns")
                    i.fab.fa-github
</template>
<style lang="scss">
header {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: black;
    text-decoration: none;

    @media (min-width: 800px) {
        flex-direction: row;
        justify-content: space-between;
    }
}
.bohns-header-author {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: var(--bohns-primary);
    text-decoration: none;
    &-picture {
        max-width: 96px;
        border-radius: 1rem;
    }
    &-body {
        display: flex;
        flex-direction: column;
        align-items: center;
    
        @media (min-width: 480px) {
            align-items: flex-start;
        }

        &-name {
            font-family: var(--bohns-ff-headings);
            font-size: 2rem;
            margin: 0;
            line-height: 100%;
        }
        &-title {
            font-variation-settings: "wght" 200;
            font-size: 1rem;
        }
    }
}

.bohns-header-contact {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    border-bottom: 1px solid var(--bohns-def-50);

    @media (min-width: 800px) {
        flex-direction: row;
        align-items: center;
        gap: 2rem;
    }

    &-item {
        display: flex;
        flex-direction: column;

        &-data {
            display: flex;
            gap: 8px;
        }
    }
}
</style>