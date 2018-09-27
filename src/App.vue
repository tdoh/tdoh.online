<template>
  <div id="app">
    <Navbar :isToggle="isToggle" :isMobile="isMobile" />
    <div class="head" v-if="!($route.name === 'Home' || $route.name === 'Error') && isMobile">
      <img src="@/assets/images/icon/menu-active-gold.png" />
      <h1>
        <span>{{ $route.meta.label || $route.name }}</span>
      </h1>
    </div>
    <transition :name="transitionMode">
      <keep-alive>
        <router-view class="page-container" />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import layout from '@/components/layout'
export default {
  data () {
    return {
      isMobile: document.querySelector('#app').offsetWidth <= 1440,
      isToggle: false,
      transitionMode: 'slide-left',
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
        this.$route.name === 'Agenda' ? this.$router.push({ name: 'Agenda', query: { ' ': ' ' } }) : window.location = '/2018/static/img/fuck_b1@ck_Sh0ve1.jpg'
        this.keyListCode = ''
      }
    }
  },
  watch: {
    $route (to, from) {
      this.scrollAnimate()
      const toDepth = to.meta.index
      const fromDepth = from.meta.index
      this.transitionMode = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';
</style>
