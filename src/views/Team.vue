<template>
  <div>
    <div class="spotlight">
      <div class="spotlight-box member" v-for="team in teams" :key="team.type">
        <h1 class="title symbol"><span>{{ team.type }}</span></h1>
        <div class="spotlight-member">
          <div class="member" v-for="(member, i) in team.members" :key="i">
            <div class="image" :style="{ 'background-image':  'url(' + require(`@/assets/images/team/${member.image}`) + ')'}" alt=""></div>
            <p>{{ member.name }}</p>
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
      teams: [
        {
          type: '總召組',
          members: [
            {
              name: 'HrJ',
              image: 'img31.jpg'
            },
            {
              name: '莫風',
              image: 'img04.jpg'
            },
            {
              name: 'Syu',
              image: 'img01.jpg'
            },
            {
              name: '小白',
              image: 'img05.jpg'
            },
            {
              name: '小曹',
              image: 'img59.jpg'
            },
            {
              name: '卡爾',
              image: 'img48.png'
            },
            {
              name: '海豹',
              image: 'img21.jpg'
            }
          ]
        },
        {
          type: '公關組',
          members: [
            {
              name: '大順',
              image: 'img16.jpg'
            },
            {
              name: 'HTZ',
              image: 'img30.png'
            },
            {
              name: 'EC',
              image: 'img18.jpg'
            },
            {
              name: 'Dennis',
              image: 'img26.jpg'
            }
          ]
        },
        {
          type: '財務組',
          members: [
            {
              name: '腦腦',
              image: 'img56.jpg'
            },
            {
              name: '彤彤',
              image: 'img41.jpg'
            },
            {
              name: '鈞鈞',
              image: 'img33.jpg'
            },
            {
              name: '小刃',
              image: 'img50.jpg'
            }
          ]
        },
        {
          type: '議程組',
          members: [
            {
              name: '蔥蔥',
              image: 'img03.jpg'
            },
            {
              name: 'ws育慈',
              image: 'img35.jpg'
            },
            {
              name: 'Jason',
              image: 'img12.jpg'
            },
            {
              name: 'Ztex',
              image: 'img40.jpg'
            },
            {
              name: '陳哲佑',
              image: 'img27.jpg'
            },
            {
              name: '土撥鼠',
              image: 'img51.jpg'
            },
            {
              name: 'Uncle',
              image: 'img43.jpg'
            },
            {
              name: '薑糖',
              image: 'img45.jpg'
            },
            {
              name: '丸子魚',
              image: 'img46.jpg'
            },
            {
              name: '屁屁',
              image: 'img25.jpg'
            }
          ]
        },
        {
          type: '攝影組',
          members: [
            {
              name: 'Deimos',
              image: 'img09.jpg'
            },
            {
              name: 'Jeffrey Lin',
              image: 'img34.jpg'
            },
            {
              name: '大鳥',
              image: 'img53.jpg'
            },
            {
              name: '潔',
              image: 'img49.jpg'
            },
            {
              name: 'Kaminyou',
              image: 'img29.jpg'
            },
            {
              name: '閃杉',
              image: 'img02.jpg'
            },
            {
              name: '志志',
              image: 'img54.jpg'
            },
            {
              name: '柳隨雲',
              image: 'img23.jpg'
            },
            {
              name: '大助',
              image: 'img32.jpg'
            },
            {
              name: '阿貓',
              image: 'img06.jpg'
            }
          ]
        },
        {
          type: '場務組',
          members: [
            {
              name: '全全',
              image: 'img13.jpg'
            },
            {
              name: '葉子',
              image: 'img20.jpg'
            },
            {
              name: '野足',
              image: 'img17.jpg'
            },
            {
              name: 'dalun',
              image: 'img08.jpg'
            },
            {
              name: '練練',
              image: 'img07.jpg'
            },
            {
              name: '短短',
              image: 'img55.jpg'
            },
            {
              name: 'Molly',
              image: 'img28.jpg'
            },
            {
              name: 'DaYuan',
              image: 'img42.jpg'
            },
            {
              name: '阿軒',
              image: 'img19.jpg'
            },
            {
              name: 'DreamerXu',
              image: 'img38.jpg'
            },
            {
              name: '千元',
              image: 'img58.jpg'
            },
            {
              name: '阿洋',
              image: 'img47.jpg'
            },
            {
              name: '威强',
              image: 'img15.jpg'
            },
            {
              name: '蛋糕',
              image: 'img11.jpg'
            },
            {
              name: 'clooooode',
              image: 'img14.jpg'
            },
            {
              name: 'SOl',
              image: 'img60.jpg'
            },
            {
              name: '阿明',
              image: 'img39.jpg'
            },
            {
              name: '火星人',
              image: 'img44.jpg'
            }
          ]
        },
        {
          type: '形象組',
          members: [
            {
              name: 'Allen',
              image: 'img10.jpg'
            },
            {
              name: '白羊',
              image: 'img22.jpg'
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
