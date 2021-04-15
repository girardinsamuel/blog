<template>
  <nav
    class="fixed top-0 z-40 w-full border-b border-gray-800 bg-gray-900"
  >
    <div class="mx-auto flex-1 px-4 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="lg:w-1/5 flex items-center pr-4">
          <NuxtLink
            to="/"
            class="flex-shrink-0 flex-1 font-bold text-xl"
            :aria-label="`${settings.title} Logo`"
          >
            <span v-if="!logo">{{ settings.title }}</span>
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
          </NuxtLink>
        </div>
        <div v-if="settings.layout !== 'single'" class="flex-1 flex justify-start w-4/6">
          <!-- <AppSearchAlgolia v-if="settings.algolia" :options="settings.algolia" :settings="settings" /> -->
          <AppSearch class="hidden lg:block" />
        </div>
        <div
          class="lg:w-1/5 flex items-center pl-4 lg:pl-8 justify-end"
        >
          <div class="flex items-center justify-end">
            <a
              href="https://github.com/girardinsamuel"
              target="_blank"
              rel="noopener noreferrer"
              title="Github profile"
              name="Github"
              class="text-gray-300 hover:text-primary-500 ml-4"
              :class="{
                'hidden lg:block': settings.layout !== 'single'
              }"
            >
              <IconGithub class="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/girardin_sam"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter profile"
              name="Twitter"
              class="text-gray-300 hover:text-primary-500 ml-4"
              :class="{
                'hidden lg:block': settings.layout !== 'single'
              }"
            >
              <IconTwitter class="w-5 h-5" />
            </a>
            <button
              v-if="settings.layout !== 'single'"
              class="lg:hidden p-2 rounded-md text-gray-300 focus:outline-none -mr-2"
              aria-label="Menu"
            >
              <IconMenu class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      settings: {
        title: 'cook blog',
        layout: 'default'
      },
      logo: {
        light: '/logo-light.svg',
        dark: '/logo-dark.svg'
      }
    }
  }
}
</script>
