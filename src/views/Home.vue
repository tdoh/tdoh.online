<template>
  <div>
    <div id="header" class="paper">
      <div class="container">
        <img id="logo" src="../assets/images/logo-big.png" alt="">
        <div class="content">
          <p class="tag">9 / 29</p>
          <div class="title-box">
            <h2>TDOH Conf</h2>
            <h1>2018</h1>
            <h3>駭客地下城</h3>
            <p>地點：<a href="https://ppt.cc/fgKQWx">高雄蓮潭國際會館</a></p>
          </div>
          <a href="" class="button" target="_blank">8 / 18 早鳥票預購開跑</a>
          <Counter :endDate="endDate" v-if="endDate.getTime() > new Date().getTime()" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import layout from '@/components/layout'
export default {
  data () {
    return {
      endDate: new Date('2018-08-18')
    }
  },
  components: {
    Counter: layout.Counter
  }
}
</script>
