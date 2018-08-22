<template>
  <div>
    <div class="spotlight">
      <div class="spotlight-box" v-for="(support, index) in supports" :key="index">
        <h1 class="title symbol"><span>{{ support.type }}</span></h1>
        <div class="content" v-for="(item, index) in support.list" :key="index">
          <div class="card">
            <a :href="item.link ? item.link : null" target="_blank">
              <img v-if="item.image" :src="item.image" alt="">
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
              image: 'https://i.imgur.com/leMFzbO.jpg',
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
              title: '財團法人電信技術中心 (TTC)',
              image: 'https://i.imgur.com/GaYLvdQ.jpg',
              link: ''
            },
            {
              title: '台灣電腦網路危機處理暨協調中心 (TWCERT/CC)',
              image: 'https://i.imgur.com/ae0yii9.jpg',
              link: ''
            },
            {
              title: '教育部資通訊軟體創新人才推升計畫 (ITSA)',
              image: 'https://i.imgur.com/OwiUZv0.jpg',
              link: ''
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
