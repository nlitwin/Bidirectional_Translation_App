<template lang="pug">
  .task-wrapper
    v-card
      v-card-title.grey.lighten-4.py-3.title {{ taskTitle }}

      .task-card-content
        v-text-field(
          type="number",
          label="# of times listened to audio",
          v-model.number="numTimesListened",
          :rules="[rules.number]",
          v-if="showListensCounter"
          data-cy="task__times-listened-input"
        )

        bt-stopwatch(v-on:time="trackTime")

        v-text-field(
          multi-line
          label="Exercises"
          v-model="readingAloudExercises"
          v-if="type === 'RA'"
        )

        v-text-field(
          multi-line
          :label="type === 'L2L1' ? 'L1 Translation' : 'L2 Translation'"
          v-model="l1Translation"
          v-if="type === 'L2L1' || type === 'L1L2'"
        )

        v-text-field(
          multi-line
          label="Notes"
          v-model="taskNotes"
          v-if="type !== 'L2L1' && type !== 'L1L2'"
          data-cy="task__notes"
        )

        v-text-field(
          type="number",
          label="% correct",
          v-model.number="percentageCorrect",
          :rules="[rules.number]",
          v-if="type === 'L1L2'"
        )

      v-card-actions
        v-btn(
          style="margin-left: auto",
          flat,
          @click="saveTaskData",
          data-cy="task__save-btn"
        ) Save
</template>

<script>
  import BtStopwatch from '@/components/Stopwatch'

  const taskToTitle = {
    LR: 'Listening and Reading',
    PA: 'Phonetic Analysis',
    RA: 'Reading Aloud',
    L2L1: 'Translation: L2 to L1',
    OT: 'Oral Translation',
    L1L2: 'Translation: L1 to L2',
  }

  export default {
    name: 'BtTask',
    components: {
      BtStopwatch,
    },
    props: {
      type: {
        type: String,
        required: true,
      },
    },
    data: () => ({
      numTimesListened: 0,
      timeSpentOnTask: 0,
      percentageCorrect: 0,
      taskNotes: '',
      readingAloudExercises: '',
      l1Translation: '',
      rules: {
        number: (value) => {
          const pattern = /^\d+$/
          return pattern.test(value) || 'Enter a whole number'
        },
      },
    }),
    computed: {
      taskTitle() {
        return taskToTitle[this.type]
      },
      showListensCounter() {
        return ['LR', 'PA', 'RA'].includes(this.type)
      }
    },
    methods: {
      saveTaskData() {
        const payload = {
          numTimesListened: this.numTimesListened,
          timeSpentOnTask: this.timeSpentOnTask,
          taskNotes: this.taskNotes,
        }

        const taskData = JSON.stringify(payload)
        // eslint-disable-next-line
        console.table(taskData)
        debugger
        localStorage.setItem("taskData", taskData)
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
