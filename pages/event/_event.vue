<template>
  <div>
    <mdb-card
      v-if="event"
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
          <h4 class="mx-4 mb-4 font-bold eventdescription">
            {{ event.description.text }}
          </h4>
          <mdb-btn
            outine="primary"
            class="register"
            color="green"
            tag="a"
            target="_blank"
            :href="event.url"
            icon="leaf"
          >
            {{ event.is_free ? 'RSVP' : 'REGISTER' }}
          </mdb-btn>
        </div>
      </div>
    </mdb-card>
    <event :event="event" />
  </div>
</template>

<script>
import Event from '@/components/Event'
import { mdbCard, mdbBtn } from 'mdbvue'

export default {
  components: {
    mdbCard,
    mdbBtn,
    Event
  },
  head: {
    script: [
      {
        src:
          'https://maps.google.com/maps/api/js?key=AIzaSyAyKWRUE34jY8_5-DcMlPS71-UioHx4yCk'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto'
      }
    ]
  },
  data() {
    return {
      event: this.getEvent(),
      eventLogo: '/banner.jpg'
    }
  },
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
      if (!category) {
        return { category_name: 'Educational' }
      }
      return { category_name: category.name }
    },
    getSubcategory(event) {
      const subcategory = this.$store.state.events.subcategories.find(
        subcategory => subcategory.id === event.subcategory_id
      )
      if (!subcategory) {
        return { subcategory_name: 'Educational' }
      }
      return { subcategory_name: subcategory.name }
    }
  },
  mounted() {
    // const imgs = document.getElementsByClassName('img-fluid')
    // for (let index = 0; index < imgs.length; index++) {
    //   const img = imgs[index]
    //   if (index % 2 === 0) {
    //     // alert("Even Number");
    //     img.classList.add('img-left')
    //     img.parentNode.classList.add('img-max')
    //     img.parentNode.classList.add('img-left')
    //   } else {
    //     // alert("Odd Number");
    //     img.classList.add('img-right')
    //     img.parentNode.classList.add('img-max')
    //     img.parentNode.classList.add('img-right')
    //   }
    // }
  }
}
</script>

<style scoped>
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
