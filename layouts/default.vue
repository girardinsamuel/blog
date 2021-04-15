<template>
  <!-- <div class="flex flex-col h-screen font-mono bg-white dark:bg-gray-900"> -->
  <div class="flex flex-col h-screen font-mono bg-gray-900">
    <MainHeader />
    <main class="container mx-auto px-4 py-20 lg:px-8 bg-gray-900 flex-grow mt-10">
      <Nuxt class="max-w-screen-lg xl:max-w-screen-xl mx-auto" />
    </main>
    <Footer class="flex-shrink-0" />
  </div>
</template>

<script>
export default {
  mounted () {
    if (process.browser) {
      if (window.localStorage.theme === 'dark' || (!('theme' in window.localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
        window.localStorage.theme = 'dark'
      } else {
        document.documentElement.classList.remove('dark')
        window.localStorage.theme = 'light'
      }
    }
  }
}
</script>
