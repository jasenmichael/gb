<template>
  <div class="container mt-4">
    <div class="row text-center">
      <div class="[ col-xs-12 col-sm-offset-2 col-sm-12 col-md-12 ]">
        <ul class="event-list">
          <li v-for="event in events" :key="event.id" class="event">
            <nuxt-link :to="'/event/' + event.urlPath">
              <time datetime="2014-07-20">
                <span class="day">4</span>
                <span class="month">Jul</span>
                <span class="year">2019</span>
                <span class="time">ALL DAY</span>
              </time>
              <img
                v-if="event.logo"
                alt="Independence Day"
                :src="event.logo == null ? eventLogo : event.logo.url"
              />
              <div class="info">
                <h2 class="title">{{ event.name.text }}</h2>
                <p class="desc">{{ event.summary }}</p>
                <ul>
                  <li style="width:33%;">
                    1
                    <span class="glyphicon glyphicon-ok"></span>
                  </li>
                  <li style="width:34%;">
                    3
                    <span class="fa fa-question"></span>
                  </li>
                  <li style="width:33%;">
                    <span class="fa fa-dollar"></span>
                    FREE
                  </li>
                </ul>
              </div>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <mdb-container>
      <nuxt-link
        v-for="event in events"
        :key="event.id"
        :to="'/event/' + event.urlPath"
      >
        {{ event.name.html }}
        <br />
      </nuxt-link>
    </mdb-container>
    <pre>{{ events }}</pre>
  </div>
</template>

<script>
import { mdbContainer } from 'mdbvue'

export default {
  components: { mdbContainer },
  data() {
    return {
      events: this.$store.state.events.list,
      eventLogo: '/banner.jpg'
    }
  }
}
</script>

<style scoped>
/* @import url('http://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,400italic'); */
/* @import url('//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.css'); */
body {
  /* padding: 60px 0px; */
  background-color: rgb(220, 220, 220);
}

.event-list {
  list-style: none;
  font-family: 'Lato', sans-serif;
  margin: 0px;
  padding: 0px;
}
a {
  color: inherit; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
}
/* .event-list > li > a {
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 5px rgb(51, 51, 51);
  box-shadow: 0px 0px 5px rgba(51, 51, 51, 0.7);
  padding: 0px;
  margin: 0px 0px 20px;
} */
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
.event-list > li > a > .info > ul,
.event-list > li > a > .social > ul {
  display: table;
  list-style: none;
  margin: 10px 0px 0px;
  padding: 0px;
  width: 100%;
  text-align: center;
}
.event-list > li > a > .social > ul {
  margin: 0px;
}
.event-list > li > a > .info > ul > li,
.event-list > li > a > .social > ul > li {
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
.event-list > li > a > .social > ul > li {
  padding: 0px;
}
.event-list > li > a > .social > ul > li > a {
  padding: 3px 0px;
}
.event-list > li > a > .info > ul > li:hover,
.event-list > li > a > .social > ul > li:hover {
  color: rgb(30, 30, 30);
  background-color: rgb(200, 200, 200);
}
/* .facebook a,
.twitter a,
.google-plus a {
  display: block;
  width: 100%;
  color: rgb(75, 110, 168) !important;
}
.twitter a {
  color: rgb(79, 213, 248) !important;
}
.google-plus a {
  color: rgb(221, 75, 57) !important;
}
.facebook:hover a {
  color: rgb(255, 255, 255) !important;
  background-color: rgb(75, 110, 168) !important;
}
.twitter:hover a {
  color: rgb(255, 255, 255) !important;
  background-color: rgb(79, 213, 248) !important;
}
.google-plus:hover a {
  color: rgb(255, 255, 255) !important;
  background-color: rgb(221, 75, 57) !important;
} */

@media (min-width: 768px) {
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
</style>
