<template>
  <div>
    <mdb-container class="container mt-3">
      <small>
        back to
        <nuxt-link class="back" :to="'/events'">EVENTS</nuxt-link>
      </small>
      <hr />
      <mdb-col md="12">
        <mdb-row>
          <mdb-card class="mx-auto">
            <mdb-card-body class="text-center">
              <mdb-card-title>
                <strong>About this Event</strong>
              </mdb-card-title>
              <h5 class="indigo-text">
                <strong>
                  Category:
                  <span>
                    {{ event.category_name
                    }}{{
                      !event.category_id ? '' : ' / ' + event.subcategory_name
                    }}
                  </span>
                </strong>
              </h5>
              <mdb-card-text>
                Sed ut perspiciatis unde omnis iste natus sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </mdb-card-text>
              <a class="px-2 fa-lg li-ic">
                <mdb-icon fab icon="linkedin" />
              </a>
              <a class="px-2 fa-lg tw-ic">
                <mdb-icon fab icon="twitter" />
              </a>
              <a class="px-2 fa-lg fb-ic">
                <mdb-icon fab icon="facebook" />
              </a>
            </mdb-card-body>
          </mdb-card>
        </mdb-row>
      </mdb-col>
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
    </mdb-container>
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
    <!-- <div>
      <pre>{{ event }}</pre>
    </div> -->
  </div>
</template>

<script>
import {
  mdbContainer,
  mdbGoogleMap,
  mdbCol,
  mdbRow,
  mdbCard,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbIcon
} from 'mdbvue'

export default {
  components: {
    mdbContainer,
    mdbGoogleMap,
    mdbCol,
    mdbRow,
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbIcon
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
