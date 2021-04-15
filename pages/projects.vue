<template>
  <div
    class="container mx-auto"
  >
    <div
      class="w-full py-4 lg:pt-8 lg:pb-4 border-gray-800"
    >
      <div class="prose prose-sm md:prose-md lg:prose-lg">
        <h1>Projects</h1>

        <ul class="list-disc ml-5">
          <li v-for="project in projects" :key="project.title">
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
