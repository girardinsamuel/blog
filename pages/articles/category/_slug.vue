<template>
  <div>
    <h1>More in {{ category }}</h1>
    <ul>
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'articles-slug', params: { slug: article.slug } }">
          <div class="bg-front rounded-md p-4 mb-2">
            <span class="text-yellow-400 font-medium">{{ article.title }}</span>
            <p class="text-gray-500 text-xs truncate">
              {{ article.description }}
            </p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
const tags = {
  masonite: 'Masonite',
  python: 'Python'
}
export default {
  layout: 'content',
  async asyncData ({ $content, params, error }) {
    if (!(params.slug in tags)) {
      error({ statusCode: 404, message: 'Category not found' })
    }
    const articles = await $content('articles').where({ tags: { $contains: params.slug } }).fetch()
    return { articles, category: tags[params.slug] }
  }
}
</script>
