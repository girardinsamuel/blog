<template>
  <NuxtLink :to="{ name: slug, params: { slug: article.slug } }">
    <div class="bg-gray-800 rounded-md p-4 hover:bg-front">
      <div class="flex items-center justify-between mb-3">
        <span class="text-yellow-500 font-medium text-md">{{ article.title }}</span>
        <span class="text-gray-500 text-xs">
          {{ article.createdAt | formatDate }}
        </span>
      </div>
      <p v-if="article.description" class="text-gray-400 text-sm">
        {{ article.description | truncate(80, " ...") }}
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
