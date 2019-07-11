<template>
  <div class="top mt-4">
    <h1 class="text-center">Homeschool Enrichment Program</h1>
    <h2 class="text-center">Spring 2019 Schedule</h2>
    <hr />
    <div
      v-for="(day, index) in getDaysClassesHeld()"
      :key="`getDaysClassesHeld-${index}`"
    >
      <h4>{{ day }}s</h4>
      <mdb-datatable
        class="pt-4"
        :data="{ columns: classes.columns, rows: getClassesOn(day) }"
        responsive
        striped
        bordered
        :searching="false"
        :pagination="false"
        :sorting="false"
        :tfoot="false"
        :maxHeight="'490px'"
      />
      <hr
        v-if="`getDaysClassesHeld-${index}` !== getDaysClassesHeld().length"
      />
    </div>
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
      daysClassesHeld: [],
      classes: {
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
            ends_at: '10:00 AM',
            daysClassHeld: ['Tuesday', 'Wednesday']
          },
          {
            starts_at: '10:00 AM',
            class: `Gardening/Nature`,
            ages: 'all',
            teachers: 'Dave/Rotating',
            ends_at: '11:00 AM',
            daysClassHeld: ['Tuesday']
          },
          {
            starts_at: '11:00 AM',
            class: `Math`,
            ages: 'all',
            teachers: 'Dave/Kerry',
            ends_at: '12:00 AM',
            daysClassHeld: ['Tuesday']
          },
          {
            starts_at: '12:00 PM',
            class: `Lunch`,
            ages: 'all',
            teachers: '',
            ends_at: '1:00 PM',
            daysClassHeld: ['Tuesday']
          },
          {
            starts_at: '1:00 PM',
            class: `Social Studies`,
            ages: '10-17',
            teachers: 'Dave',
            ends_at: '1:30 PM',
            daysClassHeld: ['Tuesday']
          },
          {
            starts_at: '1:40 PM',
            class: `Science`,
            ages: '13-17',
            teachers: 'Kerry',
            ends_at: '3:00 PM',
            daysClassHeld: ['Tuesday']
          },
          {
            starts_at: '3:00 PM',
            class: `Music`,
            ages: '10-17',
            teachers: 'Dave',
            ends_at: '4:00 PM',
            daysClassHeld: ['Tuesday']
          },
          {
            starts_at: '4:00 PM',
            class: `English`,
            ages: '10-17',
            teachers: 'Dave',
            ends_at: '5:00 PM',
            daysClassHeld: ['Tuesday']
          },
          {
            starts_at: '10:00 AM',
            class: `Math`,
            ages: '7-17',
            teachers: 'Dave/Kerry',
            ends_at: '12:00 PM',
            daysClassHeld: ['Wednesday']
          },
          {
            starts_at: '12:00 PM',
            class: `Lunch/Cooking`,
            ages: '7-17',
            teachers: '',
            ends_at: '1:30 PM',
            daysClassHeld: ['Wednesday']
          },
          {
            starts_at: '1:40 PM',
            class: `Science`,
            ages: '8-17',
            teachers: 'Kerry',
            ends_at: '3:00 PM',
            daysClassHeld: ['Wednesday']
          },
          {
            starts_at: '3:00 PM',
            class: `Art`,
            ages: 'all',
            teachers: 'Jojo',
            ends_at: '4:00 PM',
            daysClassHeld: ['Wednesday']
          },
          {
            starts_at: '4:00 PM',
            class: `English`,
            ages: '10-17',
            teachers: 'Dave',
            ends_at: '5:00 PM',
            daysClassHeld: ['Wednesday']
          }
        ]
      }
    }
  },
  beforeMount() {
    this.daysClassesHeld = this.getDaysClassesHeld
  },
  methods: {
    getDaysClassesHeld: function() {
      const daysClassesHeld = []
      this.classes.rows.forEach(course => {
        course.daysClassHeld.forEach(day => {
          if (!daysClassesHeld.includes(day)) {
            daysClassesHeld.push(day)
          }
        })
      })
      return daysClassesHeld
    },
    getClassesOn: function(day) {
      const classes = this.classes.rows.filter(el =>
        el.daysClassHeld.includes(day)
      )
      return classes.sort(this.sortByEarliest)
    },
    sortByEarliest: function(a, b) {
      return this.getSortableTime(a) > this.getSortableTime(b)
    },
    getSortableTime: function(course) {
      let sortableTime = parseInt(
        course.starts_at.slice(0, -3).replace(':', '')
      )
      if (parseInt(sortableTime) < 700) {
        sortableTime = sortableTime + 1200
      }
      return sortableTime
    }
  }
}
</script>

<style scoped>
.top {
  padding-top: 35px;
}
</style>
