<template>
  <div>
    <mdb-row>
      <mdb-col col="md-3">
        <h5 class="mt-2 pt-1">Filter by Age Group</h5>
      </mdb-col>
      <mdb-col col="md-3 pl-0">
        <mdb-dropdown>
          <mdb-dropdown-toggle
            slot="toggle"
            class="btn btn-lg btn-block z-depth-0"
            hoverable="false"
            size="lg"
          >
            {{
              ageGroups[selected] === '4-17'
                ? 'All Ages'
                : `AGES ${ageGroups[selected]}`
            }}
          </mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item
              v-for="(ages, index) in ageGroups"
              :key="index"
              :selected="index === 0 ? true : false"
              @click.native.prevent="setSelected(index)"
            >
              {{ ages === '4-17' ? 'ALL AGES' : ages }}
            </mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
      </mdb-col>
    </mdb-row>
    <!-- <select class="custom-select">
      <option
        v-for="(ages, index) in ageGroups"
        :key="index"
        :selected="index === 0 ? true : false"
        @click="setSelected(index)"
      >
        {{ ages === '4-17' ? 'All Ages' : ages }}
      </option>
    </select>-->
    <hr />
    <div v-for="(ageGroup, index) in ageGroups" :key="index">
      <div
        v-for="(day, dayIndex) in getDaysClassesHeld(classes)"
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
          :max-height="'800px'"
        />
        <hr />
      </div>
    </div>
  </div>
</template>
<script>
// import axios from 'axios'
import {
  mdbDatatable,
  mdbRow,
  mdbCol,
  mdbDropdown,
  mdbDropdownItem,
  mdbDropdownMenu,
  mdbDropdownToggle
} from 'mdbvue'
export default {
  name: 'DatatablePage',
  components: {
    mdbDatatable,
    mdbRow,
    mdbCol,
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbDropdownToggle
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
      unFormattedClasses: this.$store.state.classes.list,
      classes: [],
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
  beforeMount() {
    this.getClasses()
  },
  methods: {
    classesByAgeGroup: function(ages) {
      const minAge = Number(ages.split('-')[0])
      const maxAge = Number(ages.split('-')[1])
      const filtered = this.classes.filter(course => {
        const courseMinAge = Number(course.ages.split('-')[0])
        const courseMaxAge = Number(course.ages.split('-')[1])
        const classAgeGroup =
          // eslint-disable-next-line
          (courseMinAge >= minAge &&
            minAge <= courseMaxAge &&
            (maxAge <= courseMaxAge && maxAge >= courseMinAge)) ||
          courseMinAge === minAge ||
          courseMaxAge === maxAge ||
          ages === this.ageGroups[0] ||
          course.ages === 'All'
        return classAgeGroup
      })
      // eslint-disable-next-line
      // console.log('filtered--', filtered)
      return filtered
    },
    getClasses: function() {
      const classes = this.unFormattedClasses
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
      this.classes = formattedClasses
      // })
    },
    setSelected: function(selected) {
      this.selected = selected
      // // eslint-disable-next-line
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
