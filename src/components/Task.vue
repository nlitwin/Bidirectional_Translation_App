<template lang="pug">
  .task-wrapper
    v-card
      v-card-title.grey.lighten-4.py-3.title {{ cardTitle }}

      .task-card-content
        v-text-field(
          type="number",
          label="# of times listened to audio",
          v-model.number="numTimesListened",
          :rules="[rules.number]",
        )

        bt-stopwatch(v-on:time="trackTime")

        v-text-field(
          multi-line
          label="Notes"
          v-model="taskNotes"
        )

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
      taskNotes: '',
      rules: {
        number: (value) => {
          const pattern = /^\d+$/
          return pattern.test(value) || 'Enter a whole number'
        },
      },
    }),
    methods: {
      saveTaskData() {
        const payload = {
          numTimesListened: this.numTimesListened,
          timeSpentOnTask: this.timeSpentOnTask,
          taskNotes: this.taskNotes,
        }

        console.table(payload)
      },
      trackTime(time) {
        this.timeSpentOnTask = time
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .task-card-content
    display flex
    flex-direction column
    align-items center
    width 80%
</style>
