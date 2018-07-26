<template>
  <div id="app">
    <Navbar :isToggle="isToggle" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import layout from '@/components/layout'
export default {
  data () {
    return {
      isToggle: false
    }
  },
  components: {
    ...layout
  },
  mounted () {
    this.scrollAnimate()
  },
  methods: {
    scrollAnimate () {
      if (this.$route.name === 'Home') {
        this.isToggle = false
        document.addEventListener('scroll', this.scrollHandler)
      } else {
        this.isToggle = true
        document.removeEventListener('scroll', this.scrollHandler)
      }
    },
    scrollHandler (event) {
      this.isToggle = event.pageY >= document.documentElement.clientHeight - 244
    }
  },
  watch: {
    $route: function () {
      this.scrollAnimate()
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';
</style>
