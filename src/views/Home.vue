<template>
  <div>
    <div id="header" class="paper">
      <div class="container">
        <img id="logo" src="../assets/images/logo-big.png" alt="">
        <div class="content">
          <p class="tag">9 / 29 10:00 ~ 16:30</p>
          <div class="title-box">
            <h2>TDOH Conf</h2>
            <h1>2018</h1>
            <h3>駭客地下城</h3>
            <p>地點：<a href="https://ppt.cc/fgKQWx">高雄蓮潭國際會館</a></p>
          </div>
          <a href="https://tdohackerparty.kktix.cc/events/tdoh-conf-2018" class="button" target="_blank">立即報名</a>
          <Counter :endDate="endDate" v-if="endDate.getTime() > new Date().getTime()" />
        </div>
      </div>
    </div>
    <div class="spotlight">
      <div class="spotlight-box">
        <h1 class="title symbol"><span>關於 TDOHacker</span></h1>
        <div class="content">
          <p>TDOHacker 成立於 2013 年中，是當時一群對資安極具熱情的學生們所創立，期望利用社群的方式來推廣資訊安全、增加技術交流、改善台灣資安學習環境等。目前依舊耕耘著台灣資安人才培育的土壤，並且在全台各地與多所大專院校都有相關合作經驗和人手，是一個初具規模全國性校園資安社群。</p>
          <p>TDOHacker 近年來已有數十場講座舉辦經歷，也協助過多個社群單位與教育單位舉辦講座、課程，並發展多個資安教育平台的專案。平常則舉辦許多小型活動熱絡資安社群間的交流，而從 2016 年開始舉辦如 TDOH - PIPE、Conf 等大型活動，致力於打造更完善的資訊安全學習環境。</p>
        </div>
      </div>
      <div class="spotlight-box">
        <h1 class="title symbol"><span>關於 TDOH Conf</span></h1>
        <div class="content no-indent center">
          <p>
            在地下城尋求邂逅是否搞錯了什麼？<br />
            不！你並沒有搞錯！
          </p>
          <p>
            駭客的地下城<br />
            有著技術頂尖、想尋求徒弟的佼佼者<br />
            有著奇思妙想、想拜師學習的修行者<br />
            更有著力爭上游、具有駭客精神的夥伴
          </p>
          <p>
            進入這地下城，你可以享受到<br />
            不間斷美味食物陪伴下與他或她的邂逅<br />
            新點子所引發的腦力激盪<br />
            講師、業界人士、志工<br />
            及與會者優良的交流互動環境<br />
            與駭客生理時鐘相符的活動時間
          </p>
          <p>
            心動了嗎？<br />
            就讓我們一同來駭客的地下城<br />
            尋找屬於你的邂逅！
          </p>
        </div>
      </div>
    </div>
    <Footer />
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
    ...layout
  }
}
</script>
