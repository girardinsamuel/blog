const round = num =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const em = (px, base) => `${round(px / base)}em`

module.exports = {
  purge: {
    enabled: false // process.NODE_ENV !== 'development'
    // content: ['./src/**/*.html'], TODO
  },
  darkMode: 'class',
  theme: {
    fontFamily: {
      mono: ['Roboto Mono', 'Arial', 'sans-serif']
    },
    extend: {
      backgroundColor: {
        back: '#142038',
        front: '#2d3048'
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.400'),
            h1: {
              color: theme('colors.gray.200')
            },
            h2: {
              color: theme('colors.gray.200')
            },
            hr: {
              borderColor: theme('colors.gray.500')
            },
            blockquote: {
              color: theme('colors.gray.700')
            },
            code: {
              fontSize: em(16, 16)
            },
            'h3 code': {
              fontWeight: '600'
            }
          }
        }
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
}
