<template lang="pug">
  .home-page-wrapper
    bt-task(
      v-for="(taskType, index) in taskTypes",
      :key="index",
      :type="taskType",
    )
</template>

<script>
  import BtTask from '@/components/Task'

  export default {
    name: 'HomePage',
    components: {
      BtTask,
    },
    data: () => ({
      taskTypes: ['LR', 'PA', 'RA', 'L2L1', 'OT', 'L1L2'],
    }),
  }
</script>

<style lang="stylus" scoped>
  .home-page-wrapper
    display grid
    grid-template-columns 300px 300px
    grid-gap: 20px
</style>
