<template>
  <div
    class="container mx-auto"
  >
    <div
      class="w-full py-4 lg:pt-8 lg:pb-4 border-gray-800"
    >
      <div class="prose prose-md lg:prose-lg">
        <h2 class="font-semibold mb-8">
          Who am I ?
        </h2>
        <div class="flex flex-wrap items-start justify-between space-y-6 sm:space-y-0">
          <div class="px-8 w-full sm:w-auto">
            <img src="~/assets/img/me.jpg" alt="Profile picture" class="rounded-full h-20 w-20 sm:h-32 sm:w-32 flex-shrink-0 object-cover mx-auto">
          </div>
          <div class="flex-1">
            <p>
              I am a Python 🐍 software engineer working mainly with <a href="https://docs.masoniteproject.com" class="link">MasoniteFramework</a> and <a href="https://docs.djangoproject.com" class="link">Django</a>. I am a huge
              fan of Vue.js, Tailwind CSS and Inertia.js. Those are my favorite tools when it come to develop a new project.
            </p>

            <p>I am also a core contributor of MasoniteFramework and its ecosystem.</p>

            <p>Outside of programming I am a mountaineer 🏔 / rock climber who enjoy being outside.</p>
          </div>
        </div>

        <h2 class="font-semibold">
          How to help ?
        </h2>

        <p>Thanks for supporting me ! It's really helpful to stay motivated and excited by open source contributions!</p>

        <p>
          <span class="item-prefix">#1</span> You can contribute to those projects, feel free to open an issue on the <nuxt-link to="/projects" class="link">
            GitHub repositories
          </nuxt-link>!
        </p>
        <p><span class="item-prefix">#2</span> You can sponsor me via GitHub</p>

        <div class="text-center mb-6">
          <a href="https://github.com/sponsors/girardinsamuel" class="inline-block">
            <div class="px-8 py-3 bg-gray-800 rounded-lg duration-400 transition ease-in-out border border-transparent hover:border-yellow-500 hover:text-yellow-500 hover:bg-gray-900">
              <div class="flex items-center justify-center space-x-3">
                <span>Sponsor via</span><IconGithub class="w-10 h-10 mx-auto" />
              </div>
            </div>
          </a>
        </div>

        <p><span class="item-prefix">#3</span> You can buy me a beer! I mostly drink tea but I definitely prefer to drink a beer!</p>

        <div class="text-center mb-6">
          <a href="https://www.buymeacoffee.com/samuelgirardin" class="inline-block text-center">
            <div class="px-8 py-3 bg-gray-800 rounded-lg duration-400 transition ease-in-out border border-transparent hover:border-yellow-500 hover:text-yellow-500 hover:bg-gray-900">
              <div class="flex items-center justify-center space-x-3">
                <span>Buy me a beer</span><BuyMeACoffee class="w-10 h-10 mx-auto" />
              </div>
            </div>
          </a>
        </div>

        <h2 class="font-semibold">
          How to get in touch ?
        </h2>

        <ul class="list-disc ml-5">
          <li><span class="font-semibold">E-mail:</span> <span class="text-yellow-500"><a href="mailto:samuelgirardin@pm.me" class="link">samuelgirardin[at]pm.me</a></span></li>
          <li><span class="font-semibold">GitHub:</span> <a href="https://github.com/girardinsamuel/" class="link">@girardinsamuel</a></li>
          <li><span class="font-semibold">Slack:</span> you can join the MasoniteFramework Slack Channel for free <a href="http://slack.masoniteproject.com/" class="link">here</a>. You can DM me <span class="text-yellow-500">@SamuelGirardin</span>.</li>
          <li><span class="font-semibold">Twitter:</span> <a href="https://twitter.com/girardin_sam" class="link">@girardin_sam</a></li>
        </ul>

        <ContactForm />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'About me | samuelgirardin.dev'
    }
  }
}
</script>

<style scoped>
.item-prefix {
  @apply text-yellow-500 font-semibold underline;
}
</style>
