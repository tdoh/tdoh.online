<template>
  <div id="app">
    <router-view />
    <Footer />
    <Navbar />
  </div>
</template>

<script>
import layout from '@/components/layout'
export default {
  components: {
    ...layout
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';
</style>
