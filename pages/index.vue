<template>
  <div
    class="container mx-auto"
  >
    <div
      class="w-full lg:pt-8 lg:pb-4 border-gray-800"
    >
      <div class="flex flex-wrap justify-center">
        <div class="w-full sm:w-1/2 xl:w-1/3 mb-10 sm:mb-0 mr-0 sm:mr-4">
          <h2 class="text-gray-400 text-3xl mb-6">
            Last posts
          </h2>
          <ul class="space-y-6">
            <li v-for="article of articles" :key="article.slug">
              <post-card :article="article" />
            </li>
          </ul>
        </div>
        <div class="w-full sm:w-1/2 xl:w-1/3">
          <h2 class="text-gray-400 text-3xl mb-6">
            Actively contributing
          </h2>
          <ul class="space-y-6">
            <li v-for="article of articles" :key="article.slug">
              <post-card :article="article" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    // fetch latest articles
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()
    // TODO: fetch latest projects
    return {
      articles
    }
  },
  data () {
    return {
      activeProjects: ['masonite-admin', 'masonite-inertia', 'masonite4']
    }
  },
  head () {
    return {
      title: 'Home | samuelgirardin.dev',
      meta: [
        { hid: 'description', name: 'description', content: 'Python software engineer contributing to OSS mainly on MasoniteFramework ecosystem.' }
        // Open Graph
        // { hid: 'og:title', property: 'og:title', content: this.article.title },
        // { hid: 'og:description', property: 'og:description', content: this.article.description },
        // // Twitter Card
        // { hid: 'twitter:title', name: 'twitter:title', content: this.article.title },
        // { hid: 'twitter:description', name: 'twitter:description', content: this.article.description }
      ]
    }
  }
}
</script>

<style>

</style>
