<template lang="pug">
Layout
    a.cta(href="/blog") Back to blog
    article.single-blog-post
        h1 {{$page.posts.title}}
        p(v-html="$page.posts.content")
</template>
      
<page-query>
query ($id: ID!) {
    posts(id: $id) {
        title
        content
    }
}
</page-query>

<style lang="scss">
.single-blog-post {
    padding: 1rem;
    border-top: 1px solid;
    border-bottom: 1px solid;
    margin: 2rem 0;
    img {
        border: 1px solid;
        width: 100%;
    }

    h1 {
        font-size: 2rem;
        font-weight: 100;
    }
}
</style>