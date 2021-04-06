// import merge from "lodash.merge";
// import assign from 'lodash.assign';

export const state = () => ({
  list: [],
  categories: [],
  subcategories: []
})

export const mutations = {
  setEvents(state, events) {
    state.list = events
  },
  setCategories(state, categories) {
    state.categories = categories
  },
  setSubcategories(state, subcategories) {
    state.subcategories = subcategories
  }
}

export const actions = {
  async getEvents({ commit }) {
    // const config = {
    //   headers: {
    //     Authorization: 'Bearer ' + process.env.EVENTBRITE_KEY
    //   }
    // }
    await commit('setEvents', [])

    // await this.$axios
    //   .get(process.env.STRAPI_URL + '/events')
    //   .then(res => {
    //     if (res.status === 200) {
    //       return res.data
    //     }
    //   })
    //   .then(events => {
    //     commit('setEvents', events)
    //   })
  },

  async getCategories({ commit }) {
    // const config = {
    //   headers: {
    //     Authorization: 'Bearer ' + process.env.EVENTBRITE_KEY
    //   }
    // }
    // const categories = await this.$axios.$get(
    //   'https://www.eventbriteapi.com/v3/categories',
    //   config
    // )
    // commit('setCategories', categories.categories)
    await commit('setCategories', [])
  },

  async getSubcategories({ commit }) {
    // const config = {
    //   headers: {
    //     Authorization: 'Bearer ' + process.env.EVENTBRITE_KEY
    //   }
    // }

    // const subcategories = await this.$axios.$get(
    //   'https://www.eventbriteapi.com/v3/subcategories',
    //   config
    // )

    // let moreCategories = []
    // if (subcategories.pagination.page_count !== 1) {
    //   for (let i = 2; i < subcategories.pagination.page_count + 1; i++) {
    //     await this.$axios
    //       .get(
    //         'https://www.eventbriteapi.com/v3/subcategories?page=' + i,
    //         config
    //       )
    //       .then(res => {
    //         if (res.status === 200) {
    //           const categories = moreCategories.concat(res.data.subcategories)
    //           moreCategories = categories
    //         }
    //       })
    //   }
    // }
    // const allCategories = moreCategories.concat(subcategories.subcategories)
    // commit('setSubcategories', allCategories)
    await commit('setSubcategories', [])
  }
}
