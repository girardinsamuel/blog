<template>
  <article>
    <h1 class="text-4xl mb-8">
      # {{ article.title }}
    </h1>

    <nuxt-content :document="article" class="prose prose-sm md:prose-md lg:prose-lg" />

    <div class="flex justify-between text-gray-600 text-sm mt-4">
      <div class="ml-2 flex items-center space-x-2">
        <badge v-for="tag in article.tags.split(',')" :key="tag">
          {{ tag }}
        </badge>
      </div>
      <span>Written by Samuel, {{ article.createdAt |formatDate }}</span>
    </div>
    <div class="flex justify-between items-center mt-16">
      <NuxtLink
        v-if="prev"
        :to="{ name: 'articles-slug', params: { slug: prev.slug } }"
        class="text-gray-600 hover:text-yellow-500 flex items-center justify-start"
      >
        <IconArrowLeft class="w-4 h-4 mr-1 flex-shrink-0" />
        <span>{{ prev.title }}</span>
      </NuxtLink>
      <span v-else />

      <NuxtLink v-if="next" :to="{ name: 'articles-slug', params: { slug: next.slug } }" class="text-gray-600 hover:text-yellow-500 flex items-center justify-start">
        <span>{{ next.title }}</span>
        <IconArrowRight class="w-4 h-4 ml-1 flex-shrink-0" />
      </NuxtLink>
      <span v-else />
    </div>

    <div v-if="similars.length > 0" class="w-2/5 mx-auto mt-8">
      <h2 class="text-gray-400 text-2xl mb-6">
        Other posts in <strong class="font-semibold">{{ article.tags }}</strong> category
      </h2>
      <ul class="space-y-6">
        <li v-for="similar of similars" :key="similar.slug">
          <post-card :article="similar" />
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
export default {
  layout: 'content',
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    const similars = await $content('articles')
      .where({ tags: { $contains: article.tags }, slug: { $ne: params.slug } })
      .only(['title', 'slug', 'createdAt', 'description'])
      .limit(5)
      .sortBy('date', 'desc')
      .fetch()
    return { article, similars, prev, next }
  },
  head () {
    return {
      title: `${this.article.title} | samuelgirardin.dev`
    }
  }
}
</script>
