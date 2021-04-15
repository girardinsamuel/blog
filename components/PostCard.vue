<template>
  <NuxtLink :to="{ name: slug, params: { slug: article.slug } }">
    <div class="bg-gray-800 rounded-md p-4">
      <span class="text-yellow-500 font-medium">{{ article.title }}</span>
      <p class="text-gray-400 text-sm truncate">
        {{ article.description }}
      </p>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    slug: {
      type: String,
      default: 'articles-slug'
    },
    article: {
      type: Object,
      required: true
    }
  }
}
</script>
