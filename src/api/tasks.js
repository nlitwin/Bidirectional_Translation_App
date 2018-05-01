export default {
  getTasks(cb) {
    return setTimeout(() => {
      cb(['LR', 'PA', 'RA', 'L2L1', 'OT', 'L1L2'])
    }, 500)
  }
}
