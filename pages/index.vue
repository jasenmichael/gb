<template>
  <div>
    <h1>Home</h1>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  components: {},
  async fetch({ store }) {
    if (store.state.events.list.length === 0) {
      await store.dispatch('events/getEvents')
    }
    if (store.state.events.categories.length === 0) {
      await store.dispatch('events/getCategories')
    }
    if (store.state.events.subcategories.length === 0) {
      await store.dispatch('events/getSubcategories')
    }
  }
}
</script>
