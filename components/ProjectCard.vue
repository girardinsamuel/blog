<template>
  <a :href="project.url">
    <div class="bg-gray-800 rounded-md p-4 hover:bg-front">
      <div>
        <span class="text-yellow-500 font-medium text-md">{{ project.title }}</span>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>
