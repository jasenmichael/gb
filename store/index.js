export const actions = {
  nuxtServerInit({ dispatch }) {
    // eslint-disable-next-line no-console
    console.log('init')
    return Promise.all([
      dispatch('events/getEvents'),
      dispatch('events/getCategories'),
      dispatch('events/getSubcategories')
    ])
  }
}
