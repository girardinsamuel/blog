<template>
  <div
    class="container mx-auto"
  >
    <div
      class="w-full py-4 lg:pt-8 lg:pb-4 border-gray-800"
    >
      <div class="prose">
        <h1>Derniers articles</h1>
        <ul>
          <li v-for="article of articles" :key="article.slug">
            <NuxtLink :to="{ name: 'articles-slug', params: { slug: article.slug } }">
              {{ article.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles
    }
  }
}
</script>

<style>

</style>
