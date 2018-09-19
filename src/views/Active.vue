<template>
  <div>
    <div class="spotlight">
      <div class="spotlight-box">
        <h1 class="title symbol"><span>駭客地下黑暗商城</span></h1>
        <div class="content center no-indent">
          <p class="says">
            「從古至今，先人都說：<br />
            凡走過必留下痕跡。<br />
            傳說中的黑暗商城擁有各式各樣的寶藏，<br />
            這些都是先人遺留下來，<br />
            並且想要傳揚下去的寶藏！<br /><br />
            既然這位旅行者你都進到這了，<br />
            我想你就不能什麼都不留地離開這，<br />
            如果你沒有什麼可以留下的，<br />
            那請你帶走你最喜歡的寶藏吧！<br /><br />
            不過、想要帶走你所心愛的寶藏可沒這麼容易，<br />
            你需要付出與這寶藏同等價值的代價...<br />
            所以這位旅行者，你，準備好了嗎？<br />
            是要想要留下東西，還是帶走寶藏呢？」
          </p>
        </div>
      </div>
      <div class="spotlight-box">
        <h1 class="title symbol"><span>TDOH-WorkShop</span></h1>
        <div class="content no-indent">
          <p class="says">「駭客地下城與博格資安讀書會合作舉辦的企業資安工作坊！」</p>
          <p>本次的工作坊分為上午場與下午場兩個部分：</p>
          <ul>
            <li>企業防禦 DDoS 方式，和你想的一樣嗎</li>
            <li>Playing Malware Injection with Exploit thoughts</li>
          </ul>
          <p>
            由於此為進階課程，工作坊將採取審核制，購買地下城的冒險證後通過大師們的審核即可參加，無另外收費。
          </p>
          <ul>
            <li>工作坊介紹請參考<router-link :to="{ name: 'Agenda' }">議程資訊</router-link></li>
            <li>欲報名工作坊請<a href="https://goo.gl/forms/mXzDDoS8cbRURpdJ3" target="_blank">點此報名</a> </li>
          </ul>
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
