<template>
  <div>
    <h1>Events</h1>
    <nuxt-link
      v-for="event in events"
      :key="event.id"
      :to="'/event/' + event.urlPath"
    >
      {{ event.name.html }}
      <br />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      eventLogo: '/event-logo.jpg',
      events: this.$store.state.events.list
    }
  }
}
</script>
