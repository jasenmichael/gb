<template>
  <div>
    <mdb-card
      class="card-image"
      :style="{
        // eslint-disable-next-line
        background: '#fff url(' + '/banner.jpg' + ') no-repeat center center'
      }"
    >
      <div class="text-white text-center rgba-stylish-light py-5 px-4">
        <div>
          <h1 class="pt-4 mb-4 font-bold display-4 eventtitle">
            <strong>Upcoming Events and Workshops</strong>
          </h1>
          <h4
            class="mx-4 mb-4 font-bold eventdescription"
            v-html="
              'Greenbriar Community School workshops & educational programs'
            "
          ></h4>
        </div>
      </div>
    </mdb-card>
    <mdb-container>
      <h2 class="mt-2 mb-2">Events</h2>
      <hr />
      <events />
      <nuxt-link
        v-for="event in events"
        :key="event.id"
        :to="'/event/' + event.urlPath"
      >
        {{ event.name.html }}
        <br />
      </nuxt-link>
    </mdb-container>
  </div>
</template>

<script>
import Events from '@/components/Events'
import { mdbCard, mdbContainer } from 'mdbvue'

export default {
  components: { mdbCard, mdbContainer, Events },
  data() {
    return {
      eventLogo: '/banner.jpg',
      events: this.$store.state.events.list
    }
  }
}
</script>

<style scoped>
.eventtitle {
  text-shadow: 2px 2px 12px rgba(0, 0, 0, 0.7);
}

.eventdescription {
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.9);
}
</style>
