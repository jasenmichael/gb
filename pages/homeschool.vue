<template>
  <mdb-container class="top mt-4">
    <h1 class="text-center">Homeschool Enrichment Program</h1>
    <h2 class="text-center">Fall 2019 Schedule</h2>
    <nuxt-link to="/student-interest-form">
      <div class="text-center">
        <mdb-btn>Student Interest Form</mdb-btn>
      </div>
    </nuxt-link>
    <h4 class="text-center">Classes begin August 19th</h4>
    <hr />
    <school-schedule />
    <nuxt-link to="/student-interest-form">
      <div class="text-center">
        <mdb-btn>Student Interest Form</mdb-btn>
      </div>
    </nuxt-link>

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
import {
  mdbContainer,
  // mdbModal,
  // mdbModalHeader,
  // mdbModalTitle,
  // mdbModalBody,
  // mdbModalFooter,
  mdbBtn
} from 'mdbvue'
import SchoolSchedule from '@/components/SchoolSchedule'

export default {
  components: {
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
