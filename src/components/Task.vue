<template lang="pug">
  .task-wrapper
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
