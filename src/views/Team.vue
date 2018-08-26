<template>
  <div>
    <div class="spotlight">
      <div class="spotlight-box member" v-for="team in teams" :key="team.type">
        <h1 class="title symbol"><span>{{ team.type }}</span></h1>
        <div class="spotlight-member">
          <div class="member" v-for="(member, i) in team.members" :key="i">
            <img :src="require(`@/assets/images/team/${member.image}`)" alt="">
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
          type: '總招組',
          members: [
            {
              name: 'HrJ',
              image: 'image29.jpg'
            },
            {
              name: 'Syu',
              image: 'image29.jpg'
            },
            {
              name: 'HrJ',
              image: 'image29.jpg'
            },
            {
              name: 'Syu',
              image: 'image29.jpg'
            }
          ]
        },
        {
          type: '行政組',
          members: [
            {
              name: 'HrJ',
              image: 'image29.jpg'
            },
            {
              name: 'Syu',
              image: 'image29.jpg'
            }
          ]
        },
        {
          type: '場務組',
          members: [
            {
              name: 'HrJ',
              image: 'image29.jpg'
            },
            {
              name: 'Syu',
              image: 'image29.jpg'
            },
            {
              name: 'HrJ',
              image: 'image29.jpg'
            },
            {
              name: 'Syu',
              image: 'image29.jpg'
            },
            {
              name: 'HrJ',
              image: 'image29.jpg'
            },
            {
              name: 'Syu',
              image: 'image29.jpg'
            },
            {
              name: 'HrJ',
              image: 'image29.jpg'
            },
            {
              name: 'Syu',
              image: 'image29.jpg'
            },
            {
              name: 'HrJ',
              image: 'image29.jpg'
            },
            {
              name: 'Syu',
              image: 'image29.jpg'
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
