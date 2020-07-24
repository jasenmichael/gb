<template>
  <mdb-container class="top mt-4">
    <h1 class="text-center">Homeschool Enrichment Program</h1>
    <h2 class="text-center">Fall 2020 Schedule in progress</h2>
    <h4 class="text-center">
      Classes tentatively begin late September to mid August
    </h4>
    <p class="mb-0 pb-0">
      Keep an eye on upcoming
      <nuxt-link to="/events">events</nuxt-link>
      for "Greenbriar School Open House" so that potential parents and students
      may tour our facilities, ask questions, and possibly enroll pending space
      availability.
    </p>
    <br />
    <div>
      Scheduled for (subject to change):
      <ul>
        <li>Tuesday, July 28th from 7-8 pm</li>
        <li>Saturday, August 1st from 10-11 am</li>
        <li>Thursday, August 6th from 7-8 pm</li>
      </ul>
    </div>
    <div class="text-center pt-4 mb-2">
      <mdb-btn @click.native="covidmodal = true" color="red darken-2"
        >&nbsp;&nbsp;&nbsp;&nbsp;Covid-19 Statement&nbsp;&nbsp;&nbsp;</mdb-btn
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
    <nuxt-link to="/student-interest-form">
      <div class="text-center pb-2">
        <mdb-btn>Student Interest Form</mdb-btn>
      </div>
    </nuxt-link>
    <hr />
    <h5 class="text-center">Fall 2019/Spring 2020 - Schedule</h5>
    <hr />
    <school-schedule />
    <!-- <nuxt-link to="/student-interest-form">
      <div class="text-center">
        <mdb-btn>Student Interest Form</mdb-btn>
      </div>
    </nuxt-link> -->

    <div
      class="calendar-container embed-responsive embed-responsive-4by3 z-depth-1-half desk-cal mt-5"
    >
      <iframe
        id="calendar"
        style="border: 0;"
        src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showTz=0&amp;showTabs=0&amp;showCalendars=0&amp;mode=AGENDA&amp;height=600&amp;wkst=1&amp;bgcolor=%23ccccff&amp;src=khjr4b4vu3g5rp4d7l7cqrhl88%40group.calendar.google.com&amp;color=%2342104A&amp;src=en.usa%23holiday%40group.v.calendar.google.com&amp;color=%235A6986&amp;ctz=America%2FChicago"
        frameborder="0"
        width="800"
        height="600"
        scrolling="no"
      ></iframe>
    </div>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbBtn, mdbModal } from 'mdbvue'
import SchoolSchedule from '@/components/SchoolSchedule'
import Covid from '@/components/Covid'

export default {
  components: {
    Covid,
    mdbModal,
    mdbContainer,
    SchoolSchedule,
    // mdbModal,
    // mdbModalHeader,
    // mdbModalTitle,
    // mdbModalBody,
    // mdbModalFooter,
    mdbBtn
  },
  head: { title: 'Homeschool Enrichment Program Schedule' },
  data() {
    return {
      covidmodal: false,
      interestform: false
    }
  }
}
</script>

<style scoped>
@media (max-width: 768px) {
  .desk-cal {
    display: none;
  }
}
@media (min-width: 768px) {
  .mobile-cal {
    display: none;
  }
}
.calendar-container {
  max-width: 800px;
  margin: auto;
}

.top {
  padding-top: 35px;
}
</style>
