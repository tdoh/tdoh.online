<template>
  <div id="nav" v-show="$route.name !== 'Error'">
    <ul :class="{ 'toggle': isMobile ? mobileToggle : isToggle }">
      <div class="toggle-button" @click="mobileToggle = !mobileToggle">
        <div class="icon">
          <div class="block block-1"></div>
          <div class="block block-2"></div>
          <div class="block block-3"></div>
          <div class="block block-4"></div>
        </div>
      </div>
      <img src="@/assets/images/icon/menu-active-gold.png" alt="" :class="`at-${activePage}`">
      <li v-for="(item, index) in menuItem" :key="index" v-if="item.meta">
        <router-link :to="item.path">
          <span>{{ item.meta.label || item.name }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mobileToggle: false,
      activePage: 0,
      menuItem: this.$router.options.routes
    }
  },
  props: {
    isToggle: {
      default: false,
      type: Boolean
    },
    isMobile: {
      default: false,
      type: Boolean
    }
  },
  mounted () {
    this.getActivePage()
  },
  methods: {
    getActivePage () {
      this.activePage = this.$router.options.routes.indexOf(this.$router.options.routes.filter((item, index) => (item.name === this.$route.name))[0])
    }
  },
  watch: {
    $route: function () {
      this.getActivePage()
      this.mobileToggle = false
    }
  }
}
</script>
