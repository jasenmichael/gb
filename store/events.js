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
    const config = {
      headers: {
        Authorization: 'Bearer ' + process.env.EVENTBRITE_KEY
      }
    }
    await this.$axios
      .get(
        'https://www.eventbriteapi.com/v3/organizations/312706594048/events/?order_by=start_asc',
        config
      )
      .then(res => {
        if (res.status === 200) {
          // eslint-disable-next-line no-console
          console.log(res.data)
          const events = res.data.events.filter(
            event => event.status === 'live' || 'completed'
          )
          events.map(event => {
            event.urlPath = event.name.text.replace(/\s+/g, '-').toLowerCase()
          })
          events.forEach(event => {
            this.$axios
              .$get(
                `https://www.eventbriteapi.com/v3/events/${event.id}/description`,
                config
              )
              .then(res => {
                event.description.html = res.description
              })
          })

          return events
        }
      })
      .then(events => {
        commit('setEvents', events)
      })
  },

  async getCategories({ commit }) {
    const config = {
      headers: {
        Authorization: 'Bearer ' + process.env.EVENTBRITE_KEY
      }
    }
    const categories = await this.$axios.$get(
      'https://www.eventbriteapi.com/v3/categories',
      config
    )
    commit('setCategories', categories.categories)
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
