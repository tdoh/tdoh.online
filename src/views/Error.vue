<template>
  <div>
    <div class="spotlight spotlight-error">
      <div class="spotlight-box">
        <h1 class="title symbol"><span>404 Error</span></h1>
        <div class="content no-indent center">
          <p class="bigger">
            哎呀！你似乎跑到異世界了！
          </p>
          <p class="says">
            找不到回家的路嗎？<br />
            沒關係<br />
            你可以透過底下的傳送魔法回去<br />
            或是乾脆陪莫風葛格一起尋找他的伴侶吧～
          </p>
          <hr>
          <p class="split"><router-link :to="{'name': 'Home'}">⇠ 帶我回去</router-link><a href="https://ioan.isalways.one/" target="_blank">陪莫風葛格一起找伴侶 ⇢</a></p>
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
