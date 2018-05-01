const state = {
  tasks: {
    LR: {},
    PA: {},
    RA: {},
    L2L1: {},
    OT: {},
    L1L2: {},
  },
}

const getters = {
  taskTypes: state => Object.keys(state.tasks),
}

const actions = {

}

const mutations = {

}

export default {
  state,
  getters,
  actions,
  mutations,
}
