const mutations = {
  increment(state) {
    state.counter++
  },
  decrement(state) {
    state.counter -= 10
  },
  addCollection(state, item) {
    state.collection.push(item)
  }
}

export default mutations
