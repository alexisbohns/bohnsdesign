<template lang="pug">
header.bohns-header
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
        color: var(--bohns-color-dark);
        text-decoration: none;
    }

    &-picture {
        width: 4rem;
        border-radius: 20%;
    }

    &-heading {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &-title {
        font-size: 1.5rem;
        font-weight: bold;
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

    @media (min-width: 600px) {
        flex-direction: row;
        align-items: center;
        gap: 2rem;
        padding: 1rem;
        border-radius: 1rem 1rem 0 0;
        background: white;
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