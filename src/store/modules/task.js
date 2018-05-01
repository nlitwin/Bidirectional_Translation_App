import tasksApi from '@/api/tasks'

const state = {
  tasks: {
    LR: {},
    PA: {},
    RA: {},
    L2L1: {},
    OT: {},
    L1L2: {},
  },
  taskTypes: [],
}

const getters = {
  taskTypes: state => state.taskTypes,
}

const actions = {
  getTasks({ commit }) {
    tasksApi.getTasks(taskTypes => {
      commit('setTaskTypes', taskTypes)
    })
  }
}

const mutations = {
  setTaskTypes(state, taskTypes) {
    state.taskTypes = taskTypes
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
