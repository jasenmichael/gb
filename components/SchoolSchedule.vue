<template>
  <div class="mt-4">
    <mdb-datatable
      class="pt-4"
      :data="data"
      responsive
      striped
      bordered
      :searching="true"
      :pagination="false"
      :sorting="false"
    />
  </div>
</template>

<script>
import { mdbDatatable } from 'mdbvue'
export default {
  name: 'DatatablePage',
  components: {
    mdbDatatable
  },
  data() {
    return {
      data: {
        columns: [
          {
            label: 'Starts At',
            field: 'starts_at'
          },
          {
            label: 'Activity/Class',
            field: 'class'
          },
          {
            label: 'Age Range',
            field: 'ages'
          },
          {
            label: 'Teacher(s)',
            field: 'teachers'
          },
          {
            label: 'Ends At',
            field: 'ends_at'
          }
        ],
        rows: [
          {
            starts_at: '9:30 AM',
            class: `Teacher's Lounge/Brunch Kid's Free Play`,
            ages: 'all',
            teachers: 'All',
            ends_at: '10:00 AM'
          },
          {
            starts_at: '10:00 AM',
            class: `Gardening/Nature`,
            ages: 'all',
            teachers: 'Dave/Rotating',
            ends_at: '10:30 AM'
          },
          {
            starts_at: '11:00 AM',
            class: `Math`,
            ages: 'all',
            teachers: 'Dave/Kerry',
            ends_at: '12:00 AM'
          }
        ]
      }
    }
  }
}
</script>
