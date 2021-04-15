<template>
  <nav class="fixed flex-shrink-0 mb-16 w-full bg-gray-900 shadow-lg z-30">
    <div class="px-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex justify-center h-16 md:justify-between">
        <div class="flex items-center justify-center flex-shrink-0 w-full md:w-auto group cursor-pointer">
          <nuxt-link v-if="searchMode" to="/" class="text-yellow-400 hover:text-yellow-600 mr-auto">
            <svg class="w-6 h-6 stroke-current" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
          </nuxt-link>
          <template v-else>
            <svg
              class="w-6 h-6 stroke-current text-yellow-400 group-hover:text-white mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            <nuxt-link to="/" class="w-auto font-medium text-yellow-400 group-hover:text-yellow-600">
              <span>samuelgirardin.dev</span>
            </nuxt-link>
          </template>
        </div>

        <div v-if="!searchMode" class="hidden justify-self-center md:ml-6 md:flex md:items-center md:space-x-4">
          <nuxt-link
            v-for="link in links"
            :key="link.url"
            :to="link.url"
            class="nav-link px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
          >
            {{ link.name }}
          </nuxt-link>
        </div>

        <div v-else class="hidden sm:w-1/2 md:w-2/3 sm:flex items-center">
          <AppSearch />
        </div>

        <div class="flex items-center ml-auto mr-4 md:hidden">
          <!-- Mobile menu button -->
          <button class="inline-flex items-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg
              v-if="menuOpened"
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              @click="close"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <svg
              v-else
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              @click="open"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div class="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center space-x-2">
          <!-- Twitter -->
          <a href="https://github.com/girardinsamuel/" rel="noopener noreferrer" class="p-1 text-gray-400 rounded-full hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span class="sr-only">GitHub profile</span>
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
              />
            </svg>
          </a>

          <!-- GitHub -->
          <a href="https://twitter.com/girardin_sam" rel="noopener noreferrer" class="p-1 text-gray-400 rounded-full hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span class="sr-only">Twitter profile</span>
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
              />
            </svg>
          </a>
          <!-- Mail  -->
          <a href="mailto:samuelgirardin@pm.me" rel="noopener noreferrer" class="p-1 text-gray-400 rounded-full hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </a>
        </div>
      </div>
    </div>
    <!--
      Mobile menu, toggle classes based on menu state.

      Menu open: "block", Menu closed: "hidden"
    -->
    <div v-if="menuOpened">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-md">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <nuxt-link
          v-for="link in links"
          :key="link.url"
          :to="link.url"
          class="nav-link block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
          @click.native="close"
        >
          {{ link.name }}
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MainHeader',
  props: {
    searchMode: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      menuOpened: false,
      links: [
        {
          name: 'Posts',
          url: '/posts/'
        },
        {
          name: 'Projects',
          url: '/projects/'
        },
        {
          name: 'Contributions',
          url: '/contributions/'
        },
        {
          name: 'About',
          url: '/about/'
        }
      ]
    }
  },
  methods: {
    open () {
      this.menuOpened = true
    },
    close () {
      this.menuOpened = false
    }
  }
}
</script>
