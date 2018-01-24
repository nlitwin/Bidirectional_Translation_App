<template lang="pug">
  v-container.stopwatch-wrapper(text-xs-center)
    v-layout(column)
      v-flex.current-time(xs12 headline)
        p {{ formattedTime }}

      v-flex(xs12)
        v-btn(
          @click.stop="toggle"
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
        this.reset()
        this.isRunning = true
        this.startTime = Date.now()
        this.interval = setInterval(this.formatTime, 1000)
      },
      reset() {
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
      formatTime() {
        if (!this.isRunning) {
          this.formattedTime = this.parseMilliseconds(0)

          return
        }

        const timeElapsed = Date.now() - this.startTime
        this.formattedTime = this.parseMilliseconds(timeElapsed)
      },
      parseMilliseconds(numMilliseconds) {
        let seconds = parseInt((numMilliseconds / 1000) % 60)
        let minutes = parseInt((numMilliseconds / (1000 * 60)) % 60)
        let hours = parseInt(numMilliseconds / (1000 * 60 * 60))

        seconds = seconds < 10 ? `0${seconds}` : seconds
        minutes = minutes < 10 ? `0${minutes}` : minutes
        hours = hours < 10 ? `0${hours}` : hours

        return `${hours}:${minutes}:${seconds}`
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
