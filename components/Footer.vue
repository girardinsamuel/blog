<template>
  <footer class="h-16 relative w-full border-t border-gray-800 bg-gray-900 z-20">
    <div class="h-full w-full mx-auto px-4 lg:px-8 flex items-center justify-start">
      <div class="flex items-baseline">
        <a href="https://nuxtjs.org" target="_blank" rel="noopener">
          <BuiltWithNuxtDark class="h-4 dark-img" />
        </a>
        <a href="https://github.com/girardinsamuel/website" target="_blank" rel="noopener" class="ml-2 text-gray-600 text-sm hover:underline">
          &copy; {{ (new Date()).getFullYear() }} All rights reserved.
        </a>
      </div>
      <button
        class="hidden flex-shrink-0 ml-auto text-yellow-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        @click="toggleMode"
      >
        <svg
          v-if="darkModeEnabled"
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
        <svg
          v-else
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
      </button>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      darkModeEnabled: true
    }
  },
  mounted () {
    this.darkModeEnabled = window.localStorage.theme === 'dark'
  },
  methods: {
    toggleMode () {
      if (window.localStorage.theme === 'dark') {
        window.localStorage.theme = 'light'
        document.documentElement.classList.remove('dark')
        this.darkModeEnabled = false
      } else {
        window.localStorage.theme = 'dark'
        document.documentElement.classList.add('dark')
        this.darkModeEnabled = true
      }
    }
  }
}
</script>
