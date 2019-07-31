import DateCalendar from './vue-date-calendar.vue'

const comment = (Vue) => {
  Vue.component('v-date-calendar', DateCalendar)
}

// 这里的判断很重要
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(comment)
}

export default comment
