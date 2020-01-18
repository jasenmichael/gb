<template>
  <div>
    <div v-if="event">
      <mdb-container class="container mt-3">
        <mdb-breadcrumb>
          <!-- <mdb-breadcrumb-item>
            <a href="#">Home</a>
          </mdb-breadcrumb-item> -->
          <mdb-breadcrumb-item>
            <n-link :to="'/events'">
              Events
            </n-link>
          </mdb-breadcrumb-item>
          <mdb-breadcrumb-item active>
            {{ event.name.text }}
          </mdb-breadcrumb-item>
        </mdb-breadcrumb>
        <!-- <hr /> -->
        <mdb-col md="12" class="mb-3">
          <mdb-row>
            <mdb-card class="mx-auto" style="min-width:90%;">
              <mdb-card-body class="text-center">
                <h2 v-if="!isMultiDay(event)" class="pb-0">
                  {{ getDate(event.start.local, 'dddd, MMMM Do YYYY') }}
                </h2>
                <div v-if="isMultiDay(event)">
                  <h2>
                    {{ getDate(event.start.local, 'dddd, MMMM Do YYYY') }}
                    <p class="m-0 p-0">-</p>
                    {{ getDate(event.end.local, 'dddd, MMMM Do YYYY') }}
                  </h2>
                </div>
                <mdb-card-title>
                  <h3>{{ event.summary }}</h3>
                  <!-- {{ getDate(event.start.local, 'dddd MMMM Do') }} -->
                  <h1 class="text-hide">
                    {{ getDate(event.start.local, 'dddd MMMM Do') }}
                  </h1>
                </mdb-card-title>
                <h5 class="indigo-text">
                  <strong>
                    Category:
                  </strong>
                  <span>
                    {{ event.category_name
                    }}{{
                      !event.category_id ? '' : ' / ' + event.subcategory_name
                    }}
                  </span>
                </h5>
                <br />
                <mdb-row>
                  <mdb-col sm="12" md="6">
                    <div>
                      {{ event.status != 'completed' ? 'Starts' : 'Started' }}
                    </div>
                    <!-- <div class="pb-2">At:</div> -->
                    <!-- <mdb-icon far icon="clock" size="3x" /> -->
                    <h1>{{ getDate(event.start.local, 'h:mma') }}</h1>
                  </mdb-col>
                  <mdb-col sm="12" md="6">
                    <div>
                      {{ event.status != 'completed' ? 'Ends' : 'Ended' }}
                    </div>
                    <!-- <div class="pb-2">At:</div> -->
                    <!-- <mdb-icon far icon="clock" size="3x" /> -->
                    <h1>{{ getDate(event.end.local, 'h:mma') }}</h1>
                  </mdb-col>
                  <div
                    class="content ml-4 mr-4 text-left"
                    v-html="
                      event.description.html
                        .replace(event.summary, '')
                        .replace(/<IMG/g, '<img')
                        .replace(
                          /<img/g,
                          '<img class=\'img-fluid event-image lazyload z-depth-1-half\' align=\'left\''
                        )
                        .replace(
                          /<iframe/g,
                          '<div class=\'embed-responsive embed-responsive-16by9 z-depth-1-half\'><iframe class=\'embed-responsive-item\''
                        )
                    "
                  ></div>
                </mdb-row>
                <mdb-btn
                  v-if="event.status !== 'completed'"
                  outine="primary"
                  class="register"
                  color="blue"
                  tag="a"
                  target="_blank"
                  :href="event.url"
                  icon="leaf"
                >
                  {{ event.is_free ? 'RSVP' : 'REGISTER' }}
                </mdb-btn>
                <mdb-btn
                  v-if="event.status === 'completed'"
                  outine="primary"
                  class="register"
                  color="blue"
                  tag="a"
                  target="_blank"
                  :href="event.url"
                  icon="leaf"
                >
                  Event Info
                </mdb-btn>
                <br />
                <hr />
                <div>
                  <a class="px-2 fa-2x tw-ic" style="min-width=48px;">
                    <mdb-icon fab class="blue-text tw-icon" icon="twitter" />
                  </a>
                  <a class="px-2 fa-2x fb-ic" style="min-width=64px;">
                    <mdb-icon
                      fab
                      icon="facebook"
                      class="indigo-text fb-icon"
                      aria-hidden="true"
                    />
                  </a>
                  <a class="px-2 fa-2x li-ic" style="min-width=48px;">
                    <mdb-icon
                      fab
                      icon="linkedin"
                      class="light-blue-text li-icon"
                    />
                  </a>
                </div>
              </mdb-card-body>
            </mdb-card>
          </mdb-row>
        </mdb-col>
      </mdb-container>
      <mdb-google-map
        name="reg"
        class="col-md-12 map"
        style="height: 500px; width:100%; position: relative; overflow: hidden"
        :zoom="10"
        type="satellite"
        :marker-coordinates="[
          {
            latitude: 30.247593,
            longitude: -97.347876,
            title: 'Greenbriar Community School'
          }
        ]"
      ></mdb-google-map>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import {
  mdbContainer,
  mdbGoogleMap,
  mdbCol,
  mdbRow,
  mdbCard,
  mdbCardBody,
  // mdbCardTitle,
  mdbIcon,
  mdbBreadcrumb,
  mdbBreadcrumbItem,
  mdbBtn
} from 'mdbvue'

export default {
  components: {
    mdbContainer,
    mdbGoogleMap,
    mdbCol,
    mdbRow,
    mdbCard,
    mdbCardBody,
    mdbIcon,
    mdbBreadcrumb,
    mdbBreadcrumbItem,
    mdbBtn
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
  },
  methods: {
    isMultiDay(event) {
      if (
        this.getDate(event.start.local, 'dddd, MMMM Do YYYY') ===
        this.getDate(event.end.local, 'dddd, MMMM Do YYYY')
      ) {
        // eslint-disable-next-line no-console
        console.log('yoyoy')
        return false
      } else return true
    },
    getDate(date, format) {
      return moment(date).format(format)
    }
  }
}
</script>

<style>
.li-icon,
.fb-icon,
.tw-icon {
  padding: 3px;
}
.li-icon:hover,
.fb-icon:hover,
.tw-icon:hover {
  color: rgb(240, 240, 240) !important;
  border-radius: 20%;
}
.li-icon:hover {
  background-color: #03a9f4 !important;
}
.fb-icon:hover {
  background-color: #3f51b5 !important;
}
.tw-icon:hover {
  background-color: #2196f3 !important;
}
.event-info {
  float: left;
  width: 100%;
}
.map {
  position: absolute;
  margin-bottom: -24px;
}
.event-image {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  position: relative;
  /* max-width: 100vw; */
}
@media only screen and (min-width: 750px) {
  .event-image {
    clear: both;
    display: inline-block;
    max-height: 300px;
    max-width: 100vw;
    border-radius: 2px;
    margin-right: 1rem;
    margin-left: 0.5rem;
    margin-bottom: 1rem;
  }
  .img-right {
    float: none;
    display: inline-block;
  }
}
.content {
  overflow: hidden;
}
</style>
