<template>
  <div>
    <div class="spotlight">
      <div class="spotlight-box">
        <h1 class="title symbol"><span>駭客地下黑暗商城</span></h1>
        <div class="content">
          <p class="says">「你好啊大哥哥，真沒想到你可以來到駭客地下城呢！不過就到這裡為止了，接下來由各式煉獄困境來對付你吧！當然 … 如果勇者你能突破困境，我也不會虧待你的，顆顆！」</p>
          <p>Comming Soon!</p>
        </div>
      </div>
      <div class="spotlight-box">
        <h1 class="title symbol"><span>TDOH-WorkShop</span></h1>
        <div class="content">
          <p class="says">「駭客地下城與博格資安讀書會合作舉辦的企業資安工作坊！」</p>
          <p>傳統的邊際安全性產品不僅在 DDoS的因應對策方面顯得相對薄弱，亦因其狀態表（Stateful）結構而無法阻擋狀態耗盡攻擊，尤其現在直播和串流視訊或是遊戲，這些服務往往是 TCP 和 UDP 混合使用，在防護上將變得越來越有挑戰性。</p>
          <p>本工作坊將會現場架設一個測試環境，並且將防禦設備（價值 1400 萬）真實架設在前端，讓各位有機會和企業 DDoS 解決方案現場交手一番。</p>
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
