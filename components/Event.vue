<template>
  <div>
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
        <mdb-breadcrumb-item active>{{ event.name.text }}</mdb-breadcrumb-item>
      </mdb-breadcrumb>
      <!-- <hr /> -->
      <mdb-col md="12" class="mb-3">
        <mdb-row>
          <mdb-card class="mx-auto" style="min-width:90%;">
            <mdb-card-body class="text-center">
              <mdb-card-title v-if="event.summary.length <= 80">
                {{ event.summary }}
                <h1 class="text-hide">{{ event.name.text }}</h1>
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
                    {{ event.status != 'completed' ? 'Begins' : 'Began' }}
                  </div>
                  <div class="pb-2">At:</div>
                </mdb-col>
                <mdb-col sm="12" md="6">
                  <div>
                    {{ event.status != 'completed' ? 'Ends' : 'Ended' }}
                  </div>
                  <div class="pb-2">At:</div>
                </mdb-col>
              </mdb-row>
              <!-- <mdb-card-text>

              </mdb-card-text> -->
              <!-- <mdb-btn
                v-if="event.status !== 'completed'"
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
              </div> -->
            </mdb-card-body>
          </mdb-card>
        </mdb-row>
      </mdb-col>
      <div
        class="content ml-4 mr-4"
        v-html="
          event.description.html
            .replace(event.summary, '')
            .replace(/<IMG/g, '<img')
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
    <mdb-container class="">
      <mdb-col md="12" class="mb-3 event-info">
        <mdb-row>
          <mdb-card class="mx-auto" style="min-width:90%;">
            <mdb-card-body class="text-center">
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
    mdbCardTitle,
    // mdbCardText,
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
  /* margin: 2px; */
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
.event-image {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  position: relative;
  /* max-width: 95%; */
}
.map {
  position: absolute;
  margin-bottom: -24px;
}

@media only screen and (min-width: 750px) {
  .event-image {
    /* max-width: 40vw; */
    clear: both;
    /* float: none; */
    display: inline-block;
    max-height: 300px;
    max-width: 100vw;
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
  overflow: inherit;
}
</style>
