<template lang="pug">
header
    g-image(src="~/assets/images/bohns-alexis-bohn.webp" class='bohns-author-picture' alt='Alexis Bohn')
    .bohns-author-heading
        h1.bohns-author-heading-name Alexis Bohn
        .bohns-author-heading-title designer
</template>
<style lang="scss">
header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
    gap: 1rem;
}
.bohns-author {
    &-picture {
        width: 50%;
        max-width: 96px;
        border-radius: 100%;
    }
    &-heading {
        display: flex;
        flex-direction: column;
        align-items: center;

        &-name {
            font-family: felt-tip-senior, sans-serif;
            font-size: 3rem;
            margin: 0;
            line-height: 100%;
        }
        &-title {
            font-family: halyard-micro-variable, sans-serif;
            font-variation-settings: "wght" 300;
            text-transform: uppercase;
            opacity: 0.33;
            font-size: 1rem;
        }
    }
}
</style>