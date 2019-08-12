<template>
  <div class="top mt-4">
    <h1 class="text-center">Homeschool Enrichment Program</h1>
    <h2 class="text-center">Fall 2019 Schedule</h2>
    <h4 class="text-center">Classes begin August 19th</h4>
    <hr />
    <br />
    <h5>Filter by Age Group</h5>
    <select class="browser-default custom-select">
      <option
        v-for="(ages, index) in ageGroups"
        :key="index"
        :selected="index === 0 ? true : false"
        @click="setSelected(index)"
      >
        {{ ages === '4-17' ? 'All Ages' : ages }}
      </option>
    </select>
    <hr />
    <div v-for="(ageGroup, index) in ageGroups" :key="index">
      <div
        v-for="(day, dayIndex) in getDaysClassesHeld(filteredClasses)"
        v-show="selected === index"
        :key="dayIndex"
      >
        <h4>{{ day }}s</h4>
        <mdb-datatable
          :class="'pt-4'"
          :data="{
            columns,
            rows: getClassesOn(day, classesByAgeGroup(ageGroups[index]))
          }"
          responsive
          striped
          bordered
          :searching="false"
          :pagination="false"
          :sorting="false"
          :tfoot="false"
          :max-height="'600px'"
        />
        <hr />
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { mdbDatatable } from 'mdbvue'
export default {
  name: 'DatatablePage',
  components: {
    mdbDatatable
  },
  data() {
    return {
      daysClassesHeld: [],
      columns: [
        {
          label: 'Starts At',
          field: 'starts_at'
        },
        {
          label: 'Activity/Class',
          field: 'name'
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
      filteredClasses: [],
      allClasses: [],
      ageGroups: ['4-17', '4-7', '8-11', '12-17'],
      selected: 0
    }
  },
  computed: {},
  watch: {
    selected: function() {
      // this.filteredClasses = this.classesByAgeGroup()
      // // eslint-disable-next-line
      // console.log('yo wazz', this.selected)
    }
  },
  mounted() {
    // const url = 'http://localhost:1337/'
    // const url = 'https://gb-strapi.herokuapp.com/'
    // return axios.get(url + 'classes').then(res => {
    return this.getClasses()
  },
  methods: {
    classesByAgeGroup: function(ages) {
      const minAge = ages.split('-')[0]
      const maxAge = ages.split('-')[1]
      const filtered = this.allClasses.filter(course => {
        const courseMinAge = course.ages.split('-')[0]
        const courseMaxAge = course.ages.split('-')[1]
        const thing =
          // eslint-disable-next-line
          ((courseMinAge >= minAge && minAge <= courseMaxAge) && (maxAge <= courseMaxAge && maxAge >= courseMinAge)) ||
          courseMinAge === minAge ||
          ages === course.ages ||
          ages === this.ageGroups[0] ||
          course.ages === 'All'
        // eslint-disable-next-line
        // console.log(
        //   'ages: ' + ages,
        //   // '\nselectedAges: ' + this.ageGroups[this.selected],
        //   '\nthing: ' + thing,
        //   '\nminAge: ' + minAge,
        //   '\nmaxAge: ' + maxAge,
        //   '\ncourseMinAge: ' + courseMinAge,
        //   '\ncourseMaxAge: ' + courseMaxAge
        // )
        return thing
      })
      // eslint-disable-next-line
      // console.log('filtered--', filtered)
      return filtered
    },
    getClasses: function() {
      return axios.get('/data/classes.json').then(res => {
        const classes = res.data
        const formattedClasses = []
        for (let i = 0; i < classes.length; i++) {
          const course = classes[i]
          formattedClasses.push({
            _id: course._id,
            name: course.name,
            starts_at: course.starts_at,
            ages: course.ages || 'All',
            teachers: this.getNamesArray(course.teachers)
              .toString()
              .replace(/,/g, ', '),
            ends_at: course.ends_at,
            days: this.getNamesArray(course.days)
          })
        }
        this.filteredClasses = formattedClasses
        this.allClasses = formattedClasses
      })
    },
    setSelected: function(selected) {
      this.selected = selected
      // eslint-disable-next-line
      // console.log('selected', this.selected, this.ageGroups[this.selected])
    },
    getDaysClassesHeld: function(classes) {
      const daysClassesHeld = []
      classes.forEach(course => {
        course.days.forEach(day => {
          if (!daysClassesHeld.includes(day)) {
            daysClassesHeld.push(day)
          }
        })
      })
      return daysClassesHeld
    },
    getClassesOn: function(day, filterClasses) {
      const classes = filterClasses.filter(el => el.days.includes(day))
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
    },
    getNamesArray: objList => {
      const names = objList.map(obj => obj.name)
      return names
    }
  }
}
</script>

<style scoped>
.top {
  padding-top: 35px;
}
</style>
