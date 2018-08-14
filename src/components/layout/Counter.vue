<template>
  <div class="count-container">
    <div class="clock day">
      <p>{{ day.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) }}</p>
      <span>Days</span>
    </div>
    <p>:</p>
    <div class="clock hour">
      <p>{{ hour.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) }}</p>
      <span>Hours</span>
    </div>
    <p>:</p>
    <div class="clock min">
      <p>{{ min.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) }}</p>
      <span>Mins</span>
    </div>
    <p>:</p>
    <div class="clock sec">
      <p>{{ sec.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) }}</p>
      <span>Secs</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      day: 0,
      hour: 0,
      min: 0,
      sec: 0,
      distance: 0
    }
  },
  mounted () {
    setInterval(() => { this.countTime() }, 1000)
  },
  props: {
    endDate: {
      default: () => {
        return new Date()
      },
      type: [Date, String]
    }
  },
  methods: {
    countTime () {
      this.distance = new Date(this.endDate).getTime() - new Date()
      this.day = Math.floor(this.distance / (1000 * 60 * 60 * 24))
      this.hour = Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      this.min = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60))
      this.sec = Math.floor((this.distance % (1000 * 60)) / 1000)
    }
  }
}
</script>
