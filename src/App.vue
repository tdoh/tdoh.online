<template>
  <div id="app">
    <Navbar v-if="new Date('2018-08-18').getTime() <= new Date().getTime()" :isToggle="isToggle" />
    <router-view class="page-container" />
    <Footer />
  </div>
</template>

<script>
import layout from '@/components/layout'
export default {
  data () {
    return {
      isToggle: false,
      keyListCode: '',
      masterKeyCodeString: '38384040373937396665'
    }
  },
  components: {
    ...layout
  },
  mounted () {
    this.scrollAnimate()
    document.addEventListener('keydown', this.eggHandler)
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
      this.isToggle = (event.pageY || window.scrollY) >= document.documentElement.clientHeight - 244
    },
    eggHandler (event) {
      this.keyListCode += event.keyCode
      if (this.keyListCode.indexOf(this.masterKeyCodeString) > -1) {
        window.location = '/static/img/fuck_b1@ck_Sh0ve1.jpg'
      }
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
