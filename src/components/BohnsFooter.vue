<script>
import socialMediaLinks from '../content/SocialMediaLinks.json'

export default {
    data() {
        return {
            medias: socialMediaLinks.links
        };
    }
}
</script>
<template lang="pug">
footer.bohns-footer
    // .bohns-footer-links
        a.bohns-footer-links-item(v-for='media in medias' :key='media.name' :href='media.url' target='_blank')
            .bohns-footer-links-item-name {{ media.name }}
</template>
<style lang="scss">
.bohns-footer-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;

    @media (min-width: 480px) {
        flex-direction: row;
        gap: 2rem;        
    }
    
    &-item {
        font-family: var(--bohns-ff-fun);
        text-decoration: none;
        font-size: 2rem;
        color: blue;
        transition: all ease-out 0.2s;

        &:hover {
            color: magenta;
        }
    }
}
</style>