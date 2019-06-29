<template>
  <mdb-container>
    <mdb-tabs
      :active="0"
      default
      :links="[{ text: 'Upcoming Events' }, { text: 'Past Events' }]"
      :transition-duration="0.5"
      transition-style="linear"
    >
      <template :slot="'Upcoming Events'">
        <events-list status="live" />
      </template>
      <template :slot="'Past Events'">
        <events-list status="completed" />
      </template>
    </mdb-tabs>
  </mdb-container>
</template>

<script>
import EventsList from '@/components/EventsList'
import { mdbContainer, mdbTabs } from 'mdbvue'

export default {
  components: { mdbContainer, mdbTabs, EventsList }
  // data() {
  //   return {
  //     pastevents: []
  //   }
  // }
}
</script>
