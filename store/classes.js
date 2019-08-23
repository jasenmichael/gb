// import merge from "lodash.merge";
// import assign from 'lodash.assign';

export const state = () => ({
  list: [],
  teachers: [],
  days: []
})

export const mutations = {
  setClasses(state, classes) {
    state.list = classes
    // eslint-disable-next-line no-console
    console.log('set classes', classes.length)
  },
  setTeachers(state, teachers) {
    state.categories = teachers
  },
  setDays(state, days) {
    state.subcategories = days
  }
}

export const actions = {
  async getClasses({ commit }) {
    // const url = 'http://localhost:1337'
    const url = process.env.STRAPI_URL
    await this.$axios
      .get(url + '/classes')
      // .get('/data/classes.json')
      .then(res => {
        if (res.status === 200) {
          // eslint-disable-next-line no-console
          // console.log('yoyo', url)
          return res.data
        }
      })
      .then(classes => {
        commit('setClasses', classes)
      })
  },

  async getTeachers({ commit }) {
    const config = {
      headers: {
        Authorization: 'Bearer ' + process.env.EVENTBRITE_KEY
      }
    }
    const teachers = await this.$axios.$get(
      'https://www.eventbriteapi.com/v3/categories',
      config
    )
    commit('setTeachers', teachers)
  },

  async getSubcategories({ commit }) {
    const config = {
      headers: {
        Authorization: 'Bearer ' + process.env.EVENTBRITE_KEY
      }
    }
    const subcategories = await this.$axios.$get(
      'https://www.eventbriteapi.com/v3/subcategories',
      config
    )
    let moreCategories = []
    if (subcategories.pagination.page_count !== 1) {
      for (let i = 2; i < subcategories.pagination.page_count + 1; i++) {
        await this.$axios
          .get(
            'https://www.eventbriteapi.com/v3/subcategories?page=' + i,
            config
          )
          .then(res => {
            if (res.status === 200) {
              const categories = moreCategories.concat(res.data.subcategories)
              moreCategories = categories
            }
          })
      }
    }
    const allCategories = moreCategories.concat(subcategories.subcategories)
    commit('setSubcategories', allCategories)
  }
}
