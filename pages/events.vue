<template>
  <div>
    <mdb-card
      class="card-image"
      :style="{
        // eslint-disable-next-line
        background: '#fff url(' + 'banner.jpg' + ') no-repeat center center'
      }"
    >
      <div class="text-white text-center rgba-stylish-light py-5 px-4">
        <div>
          <h1 class="pt-4 mb-4 font-bold display-4 eventtitle">
            <strong>{{ description }}</strong>
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
    <events class="clearfix" />
    <!-- <pre>{{ events }}</pre> -->
  </div>
</template>

<script>
import Events from '@/components/Events'
// import PastEvents from '@/components/PastEvents'

import { mdbCard } from 'mdbvue'

export default {
  components: { mdbCard, Events },
  data() {
    return {
      events: this.$store.state.events.list,
      description: 'Upcoming Events & Workshops',
      eventLogo: '/banner.jpg'
      // events: this.$store.state.events.list
    }
  },
  head() {
    return {
      title: 'Events and Workshops',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: this.description }
      ]
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
