<template>
  <div>
    <mdb-card
      class="card-image"
      :style="{
        background:
          '#fff url(' +
          (getEvent().logo == null ? eventLogo : getEvent().logo.original.url) +
          ') no-repeat center center'
      }"
    >
      <div class="text-white text-center rgba-stylish-light py-5 px-4">
        <div>
          <h1 class="pt-3 mb-4 font-bold display-4 eventtitle">
            <strong>{{ getEvent().name.text }}</strong>
          </h1>
          <h4 class="mx-4 mb-4 font-bold eventdescription">
            {{ getEvent().description.text }}
          </h4>
          <mdb-btn
            outine="primary"
            class="register"
            color="green"
            tag="a"
            target="_blank"
            :href="getEvent().url"
            icon="leaf"
          >
            {{ getEvent().is_free ? 'RSVP' : 'REGISTER' }}
          </mdb-btn>
        </div>
      </div>
    </mdb-card>
    <mdb-container class="container mt-3">
      <nuxt-link :to="'/events'">Events</nuxt-link>
      <span>&middot; {{ getEvent().urlPath }}</span>
      <div id="category">
        <p>
          Category:
          <span>{{ getCategory() }} / {{ getSubcategory() }}</span>
        </p>
      </div>
      <!-- <h1>{{ getEvent().name.text }}</h1> -->
      <div
        class="content"
        v-html="
          getEvent()
            .description.html.replace(getEvent().description.text, '')
            .replace(/<img/g, '<img class=\'img-fluid\'')
        "
      ></div>
      <hr />
      <hr />
      <div>
        <pre>{{ getEvent() }}</pre>
      </div>
    </mdb-container>
  </div>
</template>

<script>
import { mdbCard, mdbBtn, mdbContainer } from 'mdbvue'

export default {
  components: {
    mdbCard,
    mdbBtn,
    mdbContainer
  },
  data() {
    return {
      eventLogo: '/banner.jpg',
      getEvent: () => {
        const eventPath = this.$nuxt.$route.params.event
        const event = this.$store.state.events.list.find(
          event => event.urlPath === eventPath
        )
        return event
      },
      getCategory: () => {
        const event = this.getEvent()
        const category = this.$store.state.events.categories.find(
          category => category.id === event.category_id
        )
        if (!category) {
          return 'Educational'
        }
        return category.name
      },
      getSubcategory: () => {
        const event = this.getEvent()
        const subcategory = this.$store.state.events.subcategories.find(
          subcategory => subcategory.id === event.subcategory_id
        )
        if (!subcategory) {
          return 'Educational'
        }
        return subcategory.name
      }
    }
  },
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
  },
  mounted: function() {
    const imgs = document.getElementsByClassName('img-fluid')
    for (let index = 0; index < imgs.length; index++) {
      const img = imgs[index]
      if (index % 2 === 0) {
        // alert("Even Number");
        img.classList.add('img-left')
        img.parentNode.classList.add('img-max')
        img.parentNode.classList.add('img-left')
      } else {
        // alert("Odd Number");
        img.classList.add('img-right')
        img.parentNode.classList.add('img-max')
        img.parentNode.classList.add('img-right')
      }
    }
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
</style>
