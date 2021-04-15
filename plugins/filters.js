import Vue from 'vue'

Vue.filter('formatDate', dateStr => new Date(dateStr).toLocaleDateString())

Vue.filter('truncate', (s, limit, suffix = '') => {
  if (typeof s !== 'string') { return '' }
  if (s.length > limit) {
    s = s.substring(0, limit - suffix.length) + suffix
  }
  return s
})
