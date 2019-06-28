<template>
  <div>
    <div class="home">
      <h1 class="display-6 pre">Celebrating 50 years!</h1>
      <h1 class="display-4 title">{{ welcome }}</h1>
      <br />
      <mdb-btn
        v-scroll-to="{ el: '#info', duration: 800 }"
        tag="a"
        href="#"
        icon="angle-double-right"
        color="blue darken-4"
      >
        learn more
      </mdb-btn>
    </div>

    <mdb-carousel class="crousel" :interval="5000">
      <mdb-carousel-item v-for="(slide, index) in slides" :key="index">
        <mdb-view>
          <!-- <b-img alt=""></b-img> -->
          <img :src="slide.img" class="img-fluid z-depth-5" :alt="slide.alt" />
          <mdb-mask flex-center overlay="black-light" />
        </mdb-view>
      </mdb-carousel-item>
    </mdb-carousel>

    <mdb-container>
      <h1 id="info" class="mt-4 mb-4">
        Welcome to Greenbriar Community School
      </h1>
      <p>
        Located within 170 wooded acres east of Austin near Bastrop Texas.
        Greenbriar is a part of the free school movement that began in the
        1960's. We are an Educational community focusing on sustainability,
        homeschooling and providing an alternative learning center.
      </p>
      <p>
        Greenbriar Community is a model for sustainable community living by
        consensus decision making.
      </p>
      <p>
        We do a variety of workshops and educational programs, while promoting
        and collaborating with other educators.
      </p>
      <p>
        Check our upcoming
        <nuxt-link to="/events">Events & Workshops</nuxt-link>
      </p>
    </mdb-container>
  </div>
</template>

<script>
import {
  mdbCarousel,
  mdbCarouselItem,
  mdbBtn,
  mdbContainer,
  mdbMask,
  mdbView
} from 'mdbvue'

export default {
  components: {
    mdbCarousel,
    mdbCarouselItem,
    mdbBtn,
    mdbContainer,
    mdbMask,
    mdbView
  },
  data() {
    return {
      welcome: 'Greenbriar Community School',
      slides: [
        {
          img: '/slide/1.jpg',
          alt: 'slide 1'
        },
        {
          img: '/slide/2.jpg',
          alt: 'slide 2'
        },
        {
          img: '/slide/3.jpg',
          alt: 'slide 3'
        }
      ]
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
  }
}
</script>

<style>
html {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
.home .pre {
  font-size: 130%;
  text-shadow: 2px 2px 12px rgba(0, 0, 0, 0.7);
}
.home .title {
  font-weight: 400;
}
.home {
  color: white;
  z-index: 9;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  top: 30%;
  /* transform: translate(-0%, -50%); */
  text-shadow: 2px 2px 12px rgba(0, 0, 0, 0.7);
  /* margin: 0, auto; */
}
.carousel-item {
  height: 93vh;
}
.carousel-item img {
  top: 0;
  left: 0;
  object-fit: cover;
  height: 93vh;
}
</style>
