<template>
  <div>
    <div class="home">
      <h1 class="display-6 pre">Celebrating 50 years!</h1>
      <h1 class="display-4 title">{{ welcome }}</h1>
      <mdb-btn
        v-scroll-to="{ el: '#info', duration: 800 }"
        tag="a"
        href="#"
        icon="angle-double-right"
        color="blue darken-4"
        >learn more
      </mdb-btn>
    </div>

    <mdb-carousel :interval="5000">
      <mdb-carousel-item
        v-for="(slide, index) in slides"
        :key="index"
        class="carousel"
      >
        <mdb-view>
          <figure class="picture">
            <picture>
              <source :data-srcset="slide.img + '?webp'" type="image/webp" />
              <source :data-srcset="slide.img" type="image/png" />
              <img
                :data-src="slide.img"
                :alt="slide.alt"
                class="lazyload img-fluid"
              />
              <mdb-mask flex-center overlay="black-light" />
            </picture>
          </figure>
          <!-- eslint-disable-next-line -->
          <!-- <img 
            :src="slide.img"
            class="img-fluid lazyload"
            :alt="slide.alt"
          />-->
          <!-- <mdb-mask flex-center overlay="black-light" /> -->
        </mdb-view>
      </mdb-carousel-item>
    </mdb-carousel>
    <mdb-container id="info" style="font-size:120%;" class="mt-4">
      <div class="text-center pt-4 mb-4">
        <mdb-btn @click.native="covidmodal = true" color="red darken-2"
          >Covid-19 Statement</mdb-btn
        >
        <!-- covid-modal -->
      </div>
      <mdb-modal :show="covidmodal" @close="covidmodal = false" size="lg">
        <mdb-modal-body>
          <covid class="p-4 m-4" />
        </mdb-modal-body>
        <mdb-btn @click.native="covidmodal = false" color="secondary"
          >Close</mdb-btn
        >
      </mdb-modal>
      <h1 class="pt-4 mb-4 text-center">
        Welcome to Greenbriar Community School
      </h1>
      <h4 class="text-center ml-4 mr-4" style="font-style:italic;">
        "Greenbriar Community School is an educational institution for students
        ages five years or more, and a model for sustainable community living by
        consensus decision making."
      </h4>
      <p>
        Located within 170 wooded acres east of Austin, between Elgin and
        Bastrop Texas. Greenbriar was a part of the free school movement that
        began in the 1960's
        <span style="font-size:130%;">☮</span>
        <br />We are an Educational community focusing on sustainability,
        homeschooling and providing an alternative learning center.
      </p>
      <p>
        We host a variety of workshops and educational programs, while promoting
        and collaborating with other educators.
      </p>
      <p>
        For more information, history and current programs visit the
        <nuxt-link class="thislink" to="/about">About</nuxt-link> page.
      </p>
    </mdb-container>
  </div>
</template>

<script>
import Covid from '@/components/Covid'
import {
  mdbModal,
  mdbCarousel,
  mdbCarouselItem,
  mdbBtn,
  mdbContainer,
  mdbMask,
  mdbView
} from 'mdbvue'

export default {
  components: {
    Covid,
    mdbModal,
    mdbCarousel,
    mdbCarouselItem,
    mdbBtn,
    mdbContainer,
    mdbMask,
    mdbView
  },
  head: { title: 'Welcome Home' },
  data() {
    return {
      covidmodal: false,
      welcome: 'Greenbriar Community School',
      slides: [
        {
          img: 'slide/3.jpg',
          alt: 'slide 3'
        },
        {
          img: 'slide/1.jpg',
          alt: 'slide 1'
        },
        {
          img: 'slide/2.jpg',
          alt: 'slide 2'
        }
      ]
    }
  }
}
</script>

<style scoped>
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
.carousel {
  background-image: linear-gradient(rgb(75, 82, 81), rgb(27, 27, 27));
  /* background-color: rgb(27, 27, 27); */
  height: 93vh;
}
.carousel-item img {
  top: 0;
  left: 0;
  object-fit: cover;
  height: 93vh;
}

.thislink {
  color: #0d47a1;
  text-decoration-color: #1f6bdd;
  font-weight: 400;
  /* font-style: italic; */
}
</style>

<style>
html {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
</style>
