<template>
  <div>
    <div class="spotlight">
      <div class="spotlight-box spotlight-table">
        <div class="time-container">
          <div class="event time" v-for="time in agenda.time" :key="`time-${time}`">
            <p>{{ time }}</p>
          </div>
        </div>
        <div class="event main" v-for="main in agenda.main" :key="`main-${main.id}`" :style="{ 'grid-area': `${main.id}` }">
          <p>{{ main.name }}</p>
        </div>
        <div class="event room" v-for="room in agenda.room" :key="`room-${room.id}`" :style="{ 'grid-area': `room-${room.id}` }">
          <p>{{ room.name }}</p>
        </div>
        <div class="event session" v-for="session in agenda.session" :key="`session-${session.id}`" :style="{ 'grid-area': `session-${session.id}` }">
          <div class="info">
            <div class="box">
              <p class="room tag">{{ agenda.room.filter(e => (e.id === session.id[1]))[0].name }}</p>
              <p v-if="session.speaker">{{ session.speaker }}</p>
              <hr v-if="session.speaker" />
            </div>
            <p>{{ session.name }}</p>
          </div>
          <p v-if="session.time" class="time">{{ session.time }} 分鐘</p>
        </div>
        <div class="event break" :class="`break-${breaks.id}`" v-for="breaks in agenda.breaks" :key="`break-${breaks.id}`" :style="{ 'grid-area': `break-${breaks.id}` }">
          <p>{{ breaks.name }}</p>
        </div>
        <div class="event mobileTime" v-for="(time, i) in agenda.mobileTime" :key="`time-${i}`" :style="{ 'grid-area': `time-${i}` }">
          <p>{{ time }}</p>
        </div>
        <div class="event blank"></div>
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
      agenda: {
        time: [
          '10:00',
          '10:30',
          '10:50',
          '11:00',
          '11:20',
          '11:30',
          '11:50',
          '12:00',
          '12:20',
          '12:30',
          '12:50',
          '13:00',
          '13:20',
          '13:30',
          '13:50',
          '14:00',
          '14:20',
          '14:30',
          '14:50',
          '15:00',
          '15:20',
          '15:30',
          '15:50',
          '16:00',
          '16:20',
          '16:30'
        ],
        mobileTime: [
          '10:00',
          '10:30',
          '10:50',
          '11:00',
          '11:30',
          '12:00',
          '12:30',
          '13:00',
          '13:30',
          '13:50',
          '14:00',
          '14:30',
          '15:00',
          '15:50',
          '16:00',
          '16:20',
          '16:30'
        ],
        main: [
          {
            name: '入場',
            id: 'admission'
          },
          {
            name: '開場',
            id: 'start'
          },
          {
            name: 'Lighting Talk',
            id: 'lighting'
          },
          {
            name: '閉幕',
            id: 'closing'
          },
          {
            name: '大會結束',
            id: 'ending'
          }
        ],
        room: [
          {
            name: 'Room 302',
            id: 'A'
          },
          {
            name: 'Room 201',
            id: 'B'
          },
          {
            name: 'Room 203',
            id: 'C'
          },
          {
            name: 'Room 202',
            id: 'D'
          }
        ],
        session: [
          {
            name: '簡介 CVE-2017-9993 與 BambooFox 讀書會',
            summery: '簡介 CVE-2017-9993 如何繞過防禦，利用 ssrf 造成任意讀取的資安漏洞',
            link: 'https://hackmd.io/p/H1B9zOg_W#/',
            image: 'https://i.imgur.com/P5W0wXe.png',
            speaker: 'CALee',
            time: '50',
            id: '1A'
          },
          {
            name: 'Session 2A',
            time: '50',
            id: '2A'
          },
          {
            name: 'Session 3A',
            time: '50',
            id: '3A'
          },
          {
            name: 'Session 4A',
            time: '50',
            id: '4A'
          },
          {
            name: 'Session 5A',
            time: '50',
            id: '5A'
          },
          {
            name: 'Session 1B',
            time: '50',
            id: '1B'
          },
          {
            name: 'Session 2B',
            time: '50',
            id: '2B'
          },
          {
            name: 'Session 3B',
            time: '50',
            id: '3B'
          },
          {
            name: 'Session 4B',
            time: '50',
            id: '4B'
          },
          {
            name: 'Session 5B',
            time: '50',
            id: '5B'
          },
          {
            name: 'Session 1C',
            time: '20',
            id: '1C'
          },
          {
            name: 'Session 2C',
            time: '20',
            id: '2C'
          },
          {
            name: 'Session 3C',
            time: '20',
            id: '3C'
          },
          {
            name: 'Session 4C',
            time: '20',
            id: '4C'
          },
          {
            name: 'Session 5C',
            time: '20',
            id: '5C'
          },
          {
            name: 'Session 6C',
            time: '20',
            id: '6C'
          },
          {
            name: 'Session 7C',
            time: '20',
            id: '7C'
          },
          {
            name: 'Session 8C',
            time: '20',
            id: '8C'
          },
          {
            name: 'Session 9C',
            time: '80',
            id: '9C'
          },
          {
            name: 'Session 1D',
            time: '170',
            id: '1D'
          },
          {
            name: 'Session 2D',
            time: '120',
            id: '2D'
          }
        ],
        breaks: [
          {
            name: '休息',
            id: '1'
          },
          {
            name: 'Break',
            id: '2'
          },
          {
            name: 'Break',
            id: '3'
          },
          {
            name: 'Break',
            id: '4'
          },
          {
            name: 'Break',
            id: '5'
          },
          {
            name: 'Break',
            id: '6'
          },
          {
            name: '午餐時間',
            id: '7'
          },
          {
            name: 'Break',
            id: '8'
          },
          {
            name: 'Break',
            id: '9'
          },
          {
            name: '點心時間',
            id: 'a'
          }
        ]
      }
    }
  },
  components: {
    ...layout
  }
}
</script>
