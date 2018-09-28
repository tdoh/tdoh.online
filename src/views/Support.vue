<template>
  <div>
    <div class="spotlight">
      <div class="spotlight-box" v-for="(support, index) in supports" :key="index">
        <h1 class="title symbol"><span>{{ support.type }}</span></h1>
        <div class="content" v-for="(item, index) in support.list" :key="index">
          <div class="card">
            <a :href="item.link ? item.link : null" target="_blank">
              <img v-if="item.image" :src="require(`@/assets/images/support/${item.image}`)" alt="">
              <p>{{ item.title }}</p>
            </a>
          </div>
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
      supports: [
        {
          type: '主辦單位',
          list: [
            {
              title: 'TDOHacker',
              image: 'TDOH.jpg',
              link: 'http://tdohacker.org/'
            }
          ]
        },
        {
          type: '承辦單位',
          list: [
            {
              title: '臺灣校園資訊安全推廣暨駭客培育協會'
            }
          ]
        },
        {
          type: '協辦單位',
          list: [
            {
              title: '博格資安企業讀書會'
            },
            {
              title: '財團法人電信技術中心 (TTC)',
              image: 'TTC.jpg',
              link: 'https://www.ttc.org.tw/'
            },
            {
              title: '台灣電腦網路危機處理暨協調中心 (TWCERT/CC)',
              image: 'TWCERT.jpg',
              link: 'https://twcert.org.tw/'
            },
            {
              title: '教育部資通訊軟體創新人才推升計畫 (ITSA)',
              image: 'ITSA.jpg',
              link: 'https://www.itsa.org.tw/'
            },
            {
              title: '教育部資通訊軟體創新人才推升計畫中山大學雲端運算跨校資源中心 (ITSA)',
              image: 'ITSA-Cloud.jpg',
              link: 'https://www.itsa.org.tw/'
            },
            {
              title: '財團法人資訊工業策進會資安科技研究所 (CSTI)',
              image: 'CSTI.jpg',
              link: 'https://www.iii.org.tw/About/Department.aspx?dp_sqno=7&fm_sqno=36'
            },
            {
              title: '盧氪賽忒股份有限公司 (Leukocyte-Lab)',
              image: 'LKC.jpg',
              link: 'http://leukocyte-lab.com/'
            },
            {
              title: 'Klick Klack 可立可股份有限公司',
              image: 'LUmnLaOQ.png',
              link: 'https://www.kkco.com.tw'
            },
            {
              title: '李梅樹紀念館資訊組 (LIT)',
              image: 'LIT.jpg',
              link: 'https://open.limeishu.org.tw/'
            }
          ]
        },
        {
          type: '贊助單位',
          list: [
            {
              title: '銓鍇國際股份有限公司 (CKmates)',
              image: 'CKMate.png',
              link: 'http://www.ckmates.com/'
            },
            {
              title: '社團法人台灣駭客協會 (HITCON)',
              image: 'HITCON.jpg',
              link: 'https://hitcon.org/2018/pacific/'
            },
            {
              title: '趨勢科技股份有限公司 (Trend Micro)',
              image: 'Tread.png',
              link: 'https://www.trendmicro.com/zh_tw/business.html'
            }
          ]
        }
      ]
    }
  },
  components: {
    ...layout
  }
}
</script>
