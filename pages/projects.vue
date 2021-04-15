<template>
  <div
    class="container mx-auto"
  >
    <div
      class="w-full py-4 lg:pt-8 lg:pb-4 border-gray-800"
    >
      <div class="prose prose-md lg:prose-lg text-gray-400">
        <h1>Projects</h1>

        <ul class="pl-0">
          <li v-for="project in projects" :key="project.title" class="pl-0">
            <a :href="project.url" target="_blank" class="link">{{ project.title }}</a>
            <p class="text-gray-500">
              {{ project.description }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import projects from '@/assets/data/projects.json'

export default {
  name: 'Projects',
  data () {
    return {
      projects
    }
  },
  head () {
    return {
      title: 'My Projects | samuelgirardin.dev'
    }
  }
}
</script>
