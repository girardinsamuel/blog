<template>
  <div
    class="container mx-auto"
  >
    <div
      class="w-full py-4 lg:pt-8 lg:pb-4 border-gray-800"
    >
      <ul>
        <li v-for="article of articles" :key="article.slug" class="mb-10">
          <NuxtLink :to="{ name: 'articles-slug', params: { slug: article.slug } }">
            <div class="mb-2">
              <div class="flex items-center">
                <h2 class="hover:text-yellow-400 text-2xl">
                  # {{ article.title }}
                </h2>
                <div class="ml-2 flex items-center space-x-2">
                  <badge v-for="tag in getTags(article.tags)" :key="tag">
                    {{ tag }}
                  </badge>
                </div>
              </div>
              <span class="text-gray-600 font-semibold text-xs">{{ article.createdAt | formatDate }}</span>
            </div>
            <p class="truncate">
              {{ article.description }}
            </p>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'content',
  async asyncData ({ $content, params }) {
    // fetch latest articles
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'slug', 'createdAt', 'tags'])
      .sortBy('createdAt', 'desc')
      .fetch()
    return {
      articles
    }
  },
  methods: {
    getTags (tagsList) {
      return tagsList.split(',')
    }
  },
  head () {
    return {
      title: 'Blog | samuelgirardin.dev'
    }
  }
}
</script>
