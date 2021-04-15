<template>
  <div
    class="container mx-auto"
  >
    <div
      class="w-full py-4 lg:pt-8 lg:pb-4 border-gray-800"
    >
      <div class="prose prose-md lg:prose-lg text-gray-400">
        <h1>Main OSS Contributions</h1>

        <ul class="pl-0">
          <li v-for="contribution in contributions" :key="contribution.title" class="pl-0">
            <a :href="contribution.url" target="_blank" class="link">{{ contribution.title }}</a>
            <p class="text-gray-500">
              {{ contribution.description }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import contributions from '@/assets/data/contributions.json'

export default {
  name: 'Contributions',
  data () {
    return {
      contributions
    }
  },
  head () {
    return {
      title: 'Main contributions me | samuelgirardin.dev'
    }
  }
}
</script>
