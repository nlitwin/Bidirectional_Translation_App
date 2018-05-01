<template lang="pug">
  .home-page-wrapper
    bt-task(
      v-for="(taskType, index) in taskTypes",
      :key="index",
      :type="taskType",
    )
</template>

<script>
  import { mapGetters } from "vuex";
  import BtTask from '@/components/Task'

  export default {
    name: 'HomePage',
    components: {
      BtTask,
    },
    computed: {
      ...mapGetters({
        taskTypes: 'taskTypes',
      })
    }
  }
</script>

<style lang="stylus" scoped>
  .home-page-wrapper
    display grid
    grid-template-columns 300px 300px
    grid-gap: 20px
</style>
