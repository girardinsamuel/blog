<template>
  <div
    class="container mx-auto"
  >
    <div
      class="w-full lg:pt-8 lg:pb-4"
    >
      <div class="grid grid-cols-6 gap-6">
        <div class="col-span-full sm:col-span-4">
          <h2 class="text-gray-400 text-3xl mb-6">
            Last posts
          </h2>
          <ul class="space-y-6">
            <li v-for="article of articles" :key="article.slug">
              <post-card :article="article" />
            </li>
          </ul>
        </div>
        <div class="col-span-full sm:col-span-2">
          <h2 class="text-gray-400 text-3xl mb-6">
            Actively contributing
          </h2>
          <ul class="space-y-6">
            <li v-for="lastContrib of lastContributions" :key="lastContrib.title">
              <project-card :project="lastContrib" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import projects from '@/assets/data/projects.json'
import contributions from '@/assets/data/contributions.json'

export default {
  async asyncData ({ $content, params }) {
    // fetch latest articles
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'slug', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .limit(3)
      .fetch()
    return {
      articles
    }
  },
  data () {
    return {
      activeProjects: ['masonite-admin', 'masonite-inertia', 'masonite', 'masonite-orm']
    }
  },
  computed: {
    lastContributions () {
      const allContributions = projects.concat(contributions)
      return allContributions.filter(c => this.activeProjects.includes(c.title))
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
