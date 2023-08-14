// state //
export const state = () => ({
  customer: [],
  userpost: [],
  comment: [],
})
// actions //
export const actions = {
  async customers({ commit }, params) {
    // look users
    try {
      await this.$axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((data) => {
          commit('setCustomer', data.data)
        })
    } catch (error) {}
  },
  // look posts
  async userposts({ commit }, params) {
    try {
      await this.$axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((data) => {
          commit('setUserpost', data.data)
        })
    } catch (error) {}
  },
  // look comment
  async comments({ commit }, params) {
    try {
      await this.$axios
        .get('https://jsonplaceholder.typicode.com/posts/1/comments')
        .then((data) => {
          commit('setComment', data.data)
        })
    } catch (error) {}
  },
}
// Mutations //
export const mutations = {
  // users
  setCustomer(state, data) {
    state.customer = data
  },
  // users posts
  setUserpost(state, data) {
    state.userpost = data
  },

  // comments
  setComment(state, data) {
    state.comment = data
  },
}
