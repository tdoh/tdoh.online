<template>
  <div id="app">
    <Navbar :isToggle="isToggle" :isMobile="isMobile" />
    <div class="head" v-if="$route.name !== 'Home' && isMobile">
      <img src="@/assets/images/icon/menu-active-gold.png" />
      <h1>
        <span>{{ $route.meta.label || $route.name }}</span>
      </h1>
    </div>
    <router-view class="page-container" />
    <Footer />
  </div>
</template>

<script>
import layout from '@/components/layout'
export default {
  data () {
    return {
      isMobile: document.querySelector('#app').offsetWidth <= 1440,
      isToggle: false,
      keyListCode: '',
      masterKeyCodeString: '38384040373937396665'
    }
  },
  components: {
    ...layout
  },
  mounted () {
    if (!this.isMobile) {
      this.scrollAnimate()
    } else {
      this.isToggle = false
    }
    document.addEventListener('keydown', this.eggHandler)
    window.addEventListener('resize', () => {
      if (document.querySelector('#app').offsetWidth <= 1440) {
        this.isMobile = true
        document.removeEventListener('scroll', this.scrollHandler)
      } else {
        this.isMobile = false
        this.scrollAnimate()
      }
    })
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
