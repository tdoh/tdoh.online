<template>
  <div>
    <ul id="nav" :class="{ 'toggle': isToggle }">
      <li v-for="(item, index) in menuItem" :key="index" :class="{ 'active': item.name === $route.name }">
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
      menuItem: this.$router.options.routes
    }
  },
  props: {
    isToggle: {
      default: false,
      type: Boolean
    }
  }
}
</script>
