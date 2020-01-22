<template>
  <div>
    <!-- <pre>{{ events.length }}</pre> -->
    <!-- <pre>{{ pageCount + '  current page:' + currentPage }}</pre> -->
    <mdb-container v-if="events.length === 0" class="noevents">
      <h3 class="mt-4">
        There are no
        {{ status === 'live' ? 'upcoming' : 'past' }}
        events...
      </h3>
    </mdb-container>
    <div v-else class="events">
      <div class="row text-center">
        <div class="[ col-xs-12 col-sm-offset-2 col-sm-12 col-md-12 ]">
          <ul class="event-list">
            <li
              v-for="(event, index) in events"
              :key="event.id"
              :class="
                `event animated
                  ${isOdd(index) ? 'slideInLeft' : 'slideInRight'}`
              "
            >
              <nuxt-link :to="'/event/' + event.urlPath">
                <time datetime="2014-07-20">
                  <span class="day">{{ getDate(event.start.local, 'D') }}</span>
                  <!-- eslint-disable-next-line -->
                  <span class="month">{{ getDate(event.start.local, 'MMM') }}</span>
                  <!-- eslint-disable-next-line -->
                  <span class="year">{{ getDate(event.start.local, 'YYYY') }}</span>
                  <span class="time">
                    <!-- eslint-disable-next-line -->
                    {{ `${getDate(event.start.local, 'h:mma')} - ${getDate(event.end.local, 'h:mma' )}` }}
                  </span>
                </time>
                <img
                  v-if="event.logo"
                  :alt="event.name.text + ' background image'"
                  :src="event.logo == null ? eventLogo : event.logo.url"
                  class="lazyload"
                />
                <div class="info">
                  <h2 class="title">{{ event.name.text }}</h2>
                  <p class="desc">
                    {{
                      event.summary.length >= 80
                        ? event.summary.slice(0, 80) + '...'
                        : event.summary
                    }}
                  </p>
                  <ul :class="!event.logo ? 'times noimg' : 'times'">
                    <li style="width:50%;">
                      <span class="fa fa-calendar"></span>
                      {{ getDate(event.start.local, 'dddd MMM Do') }}
                    </li>
                    <li style="width:50%; font-style:bold;">
                      <span class="fa fa-clock"></span>
                      <!-- eslint-disable-next-line -->
                      {{ `${getDate(event.start.local, 'h:mma')} - ${getDate(event.end.local, 'h:mma' )}` }}
                    </li>
                  </ul>
                </div>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <mdb-pagination v-if="pageCount > 1" circle>
        <mdb-page-item
          :disabled="1 === currentPage"
          @click.native.prevent="changePage(1)"
        >
          First
        </mdb-page-item>
        <mdb-page-nav
          :disabled="currentPage === 1"
          prev
          @click.native.prevent="changePage(currentPage - 1)"
        ></mdb-page-nav>
        <mdb-page-item
          v-for="(current, index) in pageCount"
          :key="index"
          :active="index + 1 === currentPage"
          @click.native.prevent="changePage(index + 1)"
        >
          {{ index + 1 }}
        </mdb-page-item>
        <mdb-page-nav
          :disabled="pageCount === currentPage"
          next
          @click.native.prevent="changePage(currentPage + 1)"
        ></mdb-page-nav>
        <mdb-page-item
          :disabled="pageCount === currentPage"
          @click.native.prevent="changePage(pageCount)"
        >
          Last
        </mdb-page-item>
      </mdb-pagination>
      <!-- <pre>{{ status }}</pre> -->
    </div>
  </div>
</template>

<script>
import { mdbContainer, mdbPagination, mdbPageItem, mdbPageNav } from 'mdbvue'
import moment from 'moment'

export default {
  components: { mdbContainer, mdbPagination, mdbPageItem, mdbPageNav },
  props: {
    status: {
      type: String,
      default: '',
      useDefaultForNull: true
    }
  },
  data() {
    return {
      currentPage: 1,
      perPage: 6,
      pageCount: null,
      allEvents: [],
      events: this.getEvents()
    }
  },
  beforeMount() {
    this.paginate()
    this.getPageCount()
  },
  methods: {
    paginate() {
      const currentPage = this.currentPage - 1
      const perPage = this.perPage
      this.events = this.getEvents().slice(
        currentPage * perPage,
        (currentPage + 1) * perPage
      )
    },
    changePage(page) {
      this.currentPage = page
      this.paginate()
    },
    getPageCount() {
      this.pageCount = Math.ceil(this.getEvents().length / this.perPage)
    },
    getDate(date, format) {
      return moment(date).format(format)
    },
    getEvents() {
      if (this.status === 'live') {
        const liveEvents = this.$store.state.events.list.filter(
          event => event.status === 'live'
        )
        // return liveEvents
        return liveEvents.sort((a, b) => a.start.local <= b.end.local)
      }
      if (this.status === 'completed') {
        const pastEvents = this.$store.state.events.list.filter(
          event => event.status === 'completed'
        )
        // eslint-disable-next-line no-console
        // console.log(
        //   'yo', pastEvents.sort((a, b) => a.start.local >= b.end.local)
        // )
        // return pastEvents
        return pastEvents.sort((a, b) => a.start.local <= b.end.local)
      }
    },
    isOdd(num) {
      return num % 2
    }
  }
}
</script>

<style scoped>
/* @import url('http://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,400italic'); */
/* @import url('//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.css'); */

.noevents {
  min-height: 110px;
}
.events {
  overflow: visible;
  height: auto;
}
body {
  background-color: rgb(240, 240, 240);
}
.event-list {
  list-style: none;
  font-family: 'Lato', sans-serif;
  margin: 0px;
  padding: 0px;
}
a {
  color: inherit;
  text-decoration: inherit;
}
.event-list > li > a > time {
  display: inline-block;
  width: 100%;
  color: rgb(255, 255, 255);
  background-color: rgb(165, 82, 167);
  padding: 5px;
  text-align: center;
  text-transform: uppercase;
}
.event-list > li.event {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 1em;
  transition: all 0.2s ease-in-out;
}
.event-list > li.event:hover {
  transform: scale(1.01);
  box-shadow: 6px 6px 10px 0 rgba(0, 0, 0, 0.2),
    6px 8px 24px 0 rgba(0, 0, 0, 0.19);
}
.event-list > li:nth-child(even) > a > time {
  background-color: rgb(197, 44, 102);
}
.event-list > li > a > time > span {
  display: none;
}
.event-list > li > a > time > .day {
  display: block;
  font-size: 56pt;
  font-weight: 100;
  line-height: 1;
}
.event-list > li > a time > .month {
  display: block;
  font-size: 24pt;
  font-weight: 900;
  line-height: 1;
}
.event-list > li > a > img {
  width: 100%;
  display: block;
  max-height: 180px;
  width: 100%;
  height: auto;
  float: left;
}
.event-list > li > a > .info {
  padding-top: 5px;
  text-align: center;
}
.event-list > li > a > .info > .title {
  font-size: 17pt;
  font-weight: 700;
  margin: 0px;
}
.event-list > li > a > .info > .desc {
  font-size: 13pt;
  font-weight: 300;
  margin: 0px;
}
.event-list > li > a > .info > ul {
  display: table;
  list-style: none;
  margin: 10px 0px 0px;
  padding: 0px;
  width: 100%;
  text-align: center;
}
.event-list > li > a > .info > ul > li {
  display: table-cell;
  cursor: pointer;
  color: rgb(30, 30, 30);
  font-size: 11pt;
  font-weight: 300;
  padding: 3px 0px;
}
.event-list > li > a > .info > ul > li > a {
  display: block;
  width: 100%;
  color: rgb(30, 30, 30);
  text-decoration: none;
}
@media (min-width: 768px) {
  .event-list > li > a > .info > .times {
    /* background-color: aqua; */
    text-align: left;
    padding-left: 40px;
  }
  .event-list > li > a > .info > .times > li:nth-child(2) {
    /* background-color: red; */
    text-align: right;
    padding-right: 40px;
  }
  .event-list > li > a > .info > .noimg > li:nth-child(2) {
    padding-right: 160px;
  }
  .event-list > li > a {
    position: relative;
    display: block;
    width: 100%;
    height: 120px;
    padding: 0px;
  }
  .event-list > li > a > time,
  .event-list > li > a > img {
    display: inline-block;
  }
  .event-list > li > a > time,
  .event-list > li > a > img {
    display: block;
    max-width: 120px;
    max-height: 120px;
    width: 100%;
    height: auto;
    float: left;
  }
  .event-list > li > a > .info {
    background-color: rgb(245, 245, 245);
    overflow: hidden;
  }
  .event-list > li > a > time,
  .event-list > li > a > img {
    display: block;
    max-width: 120px;
    height: 120px;
    padding: 0px;
    margin: 0px;
    object-fit: cover;
  }
  .event-list > li > a > .info {
    position: relative;
    height: 120px;
    text-align: left;
    padding-right: 40px;
  }
  .event-list > li > a > .info > .title,
  .event-list > li > a > .info > .desc {
    padding: 0px 10px;
  }
  .event-list > li > a > .info > ul {
    position: absolute;
    left: 0px;
    bottom: 0px;
  }
  .event-list > li > a > .info > .noimg {
    margin-left: 120px;
  }
  .event-list > li > a > .social {
    position: absolute;
    top: 0px;
    right: 0px;
    display: block;
    width: 40px;
  }
  .event-list > li > a > .social > ul {
    border-left: 1px solid rgb(230, 230, 230);
  }
  .event-list > li > a > .social > ul > li {
    display: block;
    padding: 0px;
  }
  .event-list > li > a > .social > ul > li > a {
    display: block;
    width: 40px;
    padding: 10px 0px 9px;
  }
}
@media (max-width: 1100px) {
  .event-list > li > a > .info > .desc {
    font-size: 12pt;
    line-height: 90%;
  }
}
@media (max-width: 768px) {
  .event-list > li > a > .info > .desc {
    font-size: 13pt;
    line-height: 100%;
  }
}
</style>
