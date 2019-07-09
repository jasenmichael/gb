<template>
  <mdb-container>
    <hr />
    <!-- <school-schedule /> -->
    <div
      class="calendar-container embed-responsive embed-responsive-4by3 z-depth-1-half desk-cal mt-5"
    >
      <iframe
        style="border: 0;"
        src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showTz=0&amp;showTabs=0&amp;showCalendars=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23ccccff&amp;src=thegreenbriarschool@gmail.com&amp;src=khjr4b4vu3g5rp4d7l7cqrhl88%40group.calendar.google.com&amp;color=%2342104A&amp;src=en.usa%23holiday%40group.v.calendar.google.com&amp;color=%235A6986&amp;ctz=America%2FChicago"
        frameborder="0"
        width="800"
        height="600"
        scrolling="no"
      >
      </iframe>
    </div>
    <hr />
    <div
      class="calendar-container embed-responsive embed-responsive-4by3 z-depth-1-half mobile-cal"
    >
      <iframe
        id="calendar"
        style="border: 0;"
        src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showTz=0&amp;showTabs=0&amp;showCalendars=0&amp;mode=AGENDA&amp;height=600&amp;wkst=1&amp;bgcolor=%23ccccff&amp;src=khjr4b4vu3g5rp4d7l7cqrhl88%40group.calendar.google.com&amp;color=%2342104A&amp;src=en.usa%23holiday%40group.v.calendar.google.com&amp;color=%235A6986&amp;ctz=America%2FChicago"
        frameborder="0"
        width="800"
        height="600"
        scrolling="no"
      >
      </iframe>
    </div>
  </mdb-container>
</template>

<script>
import { mdbContainer } from 'mdbvue'
// import SchoolSchedule from '@/components/SchoolSchedule'
export default {
  components: { mdbContainer }
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
/* .calendar-container {
  position: relative;
  padding-bottom: 75% !important;
  height: 0;
  overflow: hidden;
}
.calendar-container > iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
} */
</style>
