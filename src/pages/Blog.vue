<template lang="pug">
Layout
    .blog-posts
        article(v-for="edge in $page.allPosts.edges" :key="edge.node.id")
            h2 {{ edge.node.title }}
            p {{ edge.node.excerpt }}
            // g-link(to="`{edge.node.path}`") Read more
            a.cta(:href="edge.node.path") Read more
</template>
  
<page-query>
  query Posts {
    allPosts {
        edges {
            node {
                id
                title
                excerpt
                path
            }
        }
    }
  }
</page-query>
<style lang="scss">
.blog-posts {
    display: flex;
    gap: 2rem;
    padding: 3rem 0;
    article {
        width: 200px;
        padding: 1rem;
        background: white;
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
    
        h2 {
            margin: 0;
        }
    
        p {
            margin: 0;
        }
    }
}
</style>