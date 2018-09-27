<template>
  <div>
    <div class="spotlight">
      <div class="spotlight-box">
        <h1 class="title symbol"><span>2F 場地圖</span></h1>
        <div class="content">
          <img src="@/assets/images/floormap/2F-map.png" alt="">
        </div>
      </div>
      <div class="spotlight-box">
        <h1 class="title symbol"><span>3F 場地圖</span></h1>
        <div class="content">
          <img src="@/assets/images/floormap/3F-map.png" alt="">
        </div>
      </div>
    </div>
    <Footer />
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
