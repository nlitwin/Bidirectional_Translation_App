<template lang="pug">
  .task-wrapper
    v-card
      v-card-title.grey.lighten-4.py-3.title Listening and Reading

      v-container.pa-4(grid-list-sm)
        v-layout(row wrap)
          v-flex(xs12)
            v-text-field(
              label="# of times listened to audio"
              v-model="numTimesListened"
              type="number"
              mask="##"
            )

            bt-stopwatch

      v-card-actions
        v-btn(
          style='margin-left: auto'
          flat
          @click='saveTaskData'
        ) Save
</template>

<script>
  import BtStopwatch from '@/components/Stopwatch'

  export default {
    name: 'bt-task',
    components: {
      BtStopwatch,
    },
    data: () => ({
      // TODO what options are there for default prop values?
      numTimesListened: null,
    }),
    methods: {
      saveTaskData() {
        // TODO: pass model to stopwatch to get time data?
        alert(this.numTimesListened)
      },
    },
  }
</script>

<style lang="stylus" scoped>

</style>
