<template lang="pug">
  .task-wrapper
    v-card
      v-card-title.grey.lighten-4.py-3.title {{ cardTitle }}

      v-container.pa-4(grid-list-sm)
        v-layout(row wrap)
          v-flex(xs12)
            v-text-field(
              type="number",
              label="# of times listened to audio",
              v-model.number="numTimesListened",
              :rules="[rules.number]",
            )

            bt-stopwatch(v-on:time="trackTime")

      v-card-actions
        v-btn(
          style="margin-left: auto",
          flat,
          @click="saveTaskData",
        ) Save
</template>

<script>
  import BtStopwatch from '@/components/Stopwatch'

  export default {
    name: 'bt-task',
    components: {
      BtStopwatch,
    },
    props: {
      cardTitle: {
        type: String,
        required: true,
      },
    },
    data: () => ({
      // TODO what options are there for default prop values?
      numTimesListened: 0,
      timeSpentOnTask: 0,
      rules: {
        number: (value) => {
          const pattern = /^\d+$/
          return pattern.test(value) || 'Enter a whole number'
        },
      },
    }),
    methods: {
      saveTaskData() {
        // TODO: pass model to stopwatch to get time data?
        alert(this.numTimesListened)
      },
      trackTime(time) {
        this.timeSpentOnTask = time
      }
    },
  }
</script>

<style lang="stylus" scoped>

</style>
