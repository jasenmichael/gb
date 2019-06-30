<template>
  <div>
    <mdb-container class="container mt-3">
      <small>
        <nuxt-link class="back" :to="'/events'">back to EVENTS</nuxt-link>
      </small>
      <h4>About this Event:</h4>
      <div id="category">
        <h5>
          Category:
          <span>
            {{ event.category_name
            }}{{ !event.category_id ? '' : ' / ' + event.subcategory_name }}
          </span>
        </h5>
      </div>
      <div
        class="content"
        v-html="
          event.description.html
            .replace(event.description.text, '')
            .replace(
              /<img/g,
              '<img class=\'img-fluid event-image z-depth-1-half\' align=\'left\''
            )
            .replace(
              /<iframe/g,
              '<div class=\'embed-responsive embed-responsive-16by9 z-depth-1-half\'><iframe class=\'embed-responsive-item\''
            )
        "
      ></div>
      <hr />
    </mdb-container>
    <hr />
    <mdb-google-map
      name="reg"
      class="col-md-12"
      style="height: 500px; width:100%; position: relative; overflow: hidden"
      :zoom="10"
      :markerCoordinates="[
        {
          latitude: 30.247593,
          longitude: -97.347876,
          title: 'Greenbriar Community School'
        }
      ]"
    ></mdb-google-map>
    <hr />
    <div>
      <pre>{{ event }}</pre>
    </div>
  </div>
</template>

<script>
import { mdbContainer, mdbGoogleMap } from 'mdbvue'
// import { gmapApi } from 'vue2-google-maps'

export default {
  components: {
    mdbContainer,
    mdbGoogleMap
  },
  props: {
    event: {
      type: Object,
      default() {},
      useDefaultForNull: true
    }
  },
  data() {
    return {}
  },
  // computed: {
  //   google: gmapApi
  // },
  mounted() {
    const imgs = document.getElementsByClassName('event-image')
    for (let index = 0; index < imgs.length; index++) {
      const img = imgs[index]
      if (index % 2 === 0) {
        // alert("Even Number");
        img.classList.add('img-right')
        // img.parentNode.classList.add('img-max')
        // img.parentNode.classList.add('img-left')
      } // else {
      // alert("Odd Number");
      // img.classList.add('img-right')
      // img.parentNode.classList.add('img-max')
      // img.parentNode.classList.add('img-right')
      // }
    }
  }
}
</script>

<style scoped>
.back {
  color: blue;
}
</style>

<style>
.event-image {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  position: relative;
  /* max-width: 95%; */
}

@media only screen and (min-width: 750px) {
  .event-image {
    /* max-width: 40vw; */
    clear: both;
    /* float: none; */
    display: inline-block;
    max-height: 300px;
    max-width: 100%;
    border-radius: 2px;
    /* padding: 0.4rem; */
    margin-right: 1rem;
    margin-left: 0.5rem;
    margin-bottom: 1rem;
    /* padding-top: 0.4rem; */
  }

  .img-right {
    float: none;
    /* display: block; */
    display: inline-block;
  }
}
.content {
  /* max-width: 100%; */
  /* clear: both; */
  /* display: block; */
  overflow: auto;
}
</style>
