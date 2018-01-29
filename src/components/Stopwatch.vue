<template lang="pug">
  v-container.stopwatch-wrapper(text-xs-center)
    v-layout(column)
      v-flex.current-time(xs12 headline)
        p {{ formattedTime }}

      v-flex(xs12)
        v-btn(
          @click="toggle"
          color="primary"
        ) {{ toggleButtonText }}

        v-btn(
          @click="reset(false)"
          color="secondary"
        ) Reset
</template>

<script>
  export default {
    name: 'bt-stopwatch',
    data: () => ({
      isRunning: false,
      startTime: 0,
      timeElapsed: 0,
      formattedTime: null,
      interval: null,
    }),
    mounted() {
      this.formatTime()
    },
    destroyed() {
      clearInterval(this.interval)
    },
    computed: {
      toggleButtonText() {
        if (this.isRunning) return 'Pause'
        if (this.timeElapsed) return 'Resume'
        return 'Start'
      },
    },
    methods: {
      toggle() {
        if (this.isRunning) {
          this.pause()
          return
        }

        if (this.timeElapsed) {
          this.resume()
          return
        }

        this.start()
      },
      start() {
        // Start from a clean slate
        this.reset()

        // Initialize and kick off the timer
        this.isRunning = true
        this.startTime = Date.now()
        this.interval = setInterval(this.updateTime, 1000)
      },
      resume() {
        this.isRunning = true
        this.startTime = Date.now() - this.timeElapsed
        this.interval = setInterval(this.updateTime, 1000)
      },
      pause() {
        this.reset(true)
      },
      reset(saveElapsedTime) {
        this.isRunning = false
        this.startTime = 0
        if (!saveElapsedTime) {
          this.timeElapsed = 0
        }
        this.formatTime(this.timeElapsed)
        clearInterval(this.interval)
        this.interval = null
      },
      updateTime() {
        if (!this.isRunning) {
          this.formatTime()
          return
        }

        this.timeElapsed = Date.now() - this.startTime
        this.formatTime(this.timeElapsed)
      },
      formatTime(time = 0) {
        this.$emit('time', time)
        this.formattedTime = this.parseTimeInMilliseconds(time)
      },
      parseTimeInMilliseconds(time = 0) {
        let seconds = Math.floor((time / 1000) % 60)
        let minutes = Math.floor((time / (1000 * 60)) % 60)
        let hours = Math.floor(time / (1000 * 60 * 60))

        seconds = seconds < 10 ? `0${seconds}` : seconds
        minutes = minutes < 10 ? `0${minutes}` : minutes
        const parsedTime = `${minutes}:${seconds}`

        if (hours === 0) return parsedTime
        return `${hours}:${parsedTime}`
      },
    }
  }
</script>

<style lang="stylus" scoped>
  .stopwatch-wrapper
    > p
      display inline-block
      color red

</style>
