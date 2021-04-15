<template>
  <div>
    <pre class="relative">
      <button class="absolute top-0 right-0 text-white uppercase" @click="copy">
        copy !
      </button>
      <code ref="codeblock" class="language-python"><slot /></code>
    </pre>
  </div>
</template>

<script>
import Prism from 'prismjs'

import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-liquid'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-markup-templating'
import 'prismjs/components/prism-php'
import 'prismjs/components/prism-scss'
import 'prismjs/components/prism-python'

// import 'prismjs/themes/prism.css'
export default {
  name: 'CodeBlock',
  mounted () {
    Prism.highlightAll()
  },
  methods: {
    copy () {
      console.log('copied !')
      console.log(this.$refs.codeblock)
      console.log(this.$refs.codeblock.innerHTML)
      console.log(this.$refs.codeblock.textContent)
      debugger
    }
  }
}
</script>
