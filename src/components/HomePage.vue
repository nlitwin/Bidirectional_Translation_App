<template lang="pug">
  .home-page-wrapper
    bt-task(
      v-for="(cardTitle, index) in cardTitles",
      :key="index",
      :cardTitle="cardTitle",
    )
</template>

<script>
  import BtTask from '@/components/Task'

  export default {
    name: 'HomePage',
    data: () => ({
      cardTitles: [
        'Listening and Reading',
        'Phonetic Analysis',
        'Reading Aloud',
        'Translation: L2 to L1',
        'Translation: L1 to L2',
      ],
    }),
    components: {
      BtTask,
    },
  }
</script>

<style lang="stylus" scoped>
  .home-page-wrapper
    display grid
    grid-template-columns 300px 300px
    grid-gap: 20px
</style>
