<template>
  <div id="nav">
    <ul :class="{ 'toggle': isToggle }">
      <img src="@/assets/images/icon/menu-active-gold.png" alt="" :class="`at-${activePage}`">
      <li v-for="(item, index) in menuItem" :key="index">
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
      activePage: 0,
      menuItem: this.$router.options.routes
    }
  },
  props: {
    isToggle: {
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
    }
  }
}
</script>
