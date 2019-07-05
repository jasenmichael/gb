<template>
  <div>
    <mdb-card
      class="card-image"
      :style="{
        background:
          '#fff url(' +
          (event.logo == null ? eventLogo : event.logo.original.url) +
          ') no-repeat center center'
      }"
    >
      <div class="text-white text-center rgba-stylish-light py-5 px-4">
        <div>
          <h1 class="pt-3 mb-4 font-bold display-4 eventtitle">
            <strong>{{ event.name.text }}</strong>
          </h1>
          <h4 class="mx-4 mb-4 font-bold eventdescription text-hide">
            {{ event.description.text }}
          </h4>
        </div>
      </div>
    </mdb-card>
    <event :event="event" />
  </div>
</template>

<script>
import Event from '@/components/Event'
import { mdbCard } from 'mdbvue'

export default {
  components: {
    mdbCard,
    Event
  },
  // head: {
  //   link: [
  //     {
  //       rel: 'stylesheet',
  //       href: 'https://fonts.googleapis.com/css?family=Roboto'
  //     }
  //   ]
  // },
  head() {
    return {
      title: 'Events and Workshops',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: this.description }
      ]
      // link: [
      //   {
      //     rel: 'stylesheet',
      //     href: 'https://fonts.googleapis.com/css?family=Roboto'
      //   }
      // ]
    }
  },
  data() {
    return {
      event: this.getEvent(),
      eventLogo: '/banner.jpg?webp'
    }
  },
  validate({ params, store }) {
    const event = store.state.events.list.find(
      event => event.urlPath === params.event
    )
    // eslint-disable-next-line
    // console.log('yo', event)
    return event !== undefined
  },
  // beforeMount() {
  //   this.event = this.getEvent()
  // },
  methods: {
    getEvent() {
      const eventPath = this.$nuxt.$route.params.event
      const event = this.$store.state.events.list.find(
        event => event.urlPath === eventPath
      )
      return {
        ...event,
        ...this.getCategory(event),
        ...this.getSubcategory(event)
      }
    },
    getCategory(event) {
      const category = this.$store.state.events.categories.find(
        category => category.id === event.category_id
      )
      if (!category.name) {
        return { category_name: 'Educational' }
      }
      return { category_name: category.name }
    },
    getSubcategory(event) {
      const subcategory = this.$store.state.events.subcategories.find(
        subcategory => subcategory.id === event.subcategory_id
      )
      if (!subcategory.name) {
        return { subcategory_name: 'Educational' }
      }
      return { subcategory_name: subcategory.name }
    }
  }
}
</script>

<style>
.register {
  transition: all 0.2s ease-in-out;
}
.register:hover {
  transform: scale(1.1);
}

.eventtitle {
  text-shadow: 2px 2px 12px rgba(0, 0, 0, 0.7);
}

.eventdescription {
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.9);
}

.card-image {
  background-size: cover !important;
}

/* .img-left {
  float: left;
  clear: left;
}

.img-right {
  float: right;
  clear: right;
}

.img-max > img {
  width: 250px;
  height: 200px;
  padding: 0.8rem;
} */
</style>
