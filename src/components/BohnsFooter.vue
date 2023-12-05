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
    .bohns-footer-links
        a.bohns-footer-links-item(v-for='media in medias' :key='media.name' :href='media.url' target='_blank')
            .bohns-footer-links-item-name {{ media.name }}
</template>w