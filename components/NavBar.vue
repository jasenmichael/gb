<template>
  <div>
    <mdb-container>
      <!-- eslint-disable-next-line -->
      <mdb-navbar dark color="green darken-2" gradient='green' class="white-text" animated animation="3">
        <mdb-navbar-brand v-if="this.$route.path === '/' ? true : false" to="/">
          <!-- eslint-disable-next-line -->
          <img
            src="/icon.png"
            height="60"
            alt="an image of a greenbriar vine"
          />
          <strong id="brand">
            Greenbriar Community School
          </strong>
        </mdb-navbar-brand>
        <mdb-navbar-brand v-else to="/">
          <img
            src="/icon.png"
            height="60"
            alt="an image of a greenbriar vine"
          />
          <strong id="brand">
            Greenbriar Community School
          </strong>
        </mdb-navbar-brand>
        <mdb-navbar-toggler>
          <mdb-navbar-nav center>
            <!-- eslint-disable-next-line -->
            <mdb-nav-item :class="isActive('/about') + ' link'" anchor-class="white-text" to="/about">
              About
            </mdb-nav-item>
            <!-- eslint-disable-next-line -->
            <mdb-nav-item :class="isActive('/contact') + ' link'" anchor-class="white-text" to="/contact">
              Contact
            </mdb-nav-item>
            <!-- eslint-disable-next-line -->
            <mdb-nav-item :class="isActive('/events') + ' link'" anchor-class="white-text" to="/events">
              Events & Workshops
            </mdb-nav-item>
          </mdb-navbar-nav>
        </mdb-navbar-toggler>
      </mdb-navbar>
    </mdb-container>
    <!-- <pre>{{ this.$route.path }}</pre> -->
  </div>
</template>

<script>
import {
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem
} from 'mdbvue'

export default {
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem
  },

  data() {
    return {
      active: 'active'
    }
  },
  computed: {
    // isHome() {
    //   return this.$route.path === '/' ? true : false
    // }
  },
  mounted: function() {},
  methods: {
    isActive(page) {
      return page === this.$route.path ? 'active' : ''
    }
  }
}
</script>

<style>
#brand {
  font-size: 110%;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.69);
}

.link {
  transition: all 0.2s ease-in-out;
}
@media only screen and (min-width: 992px) {
  .link:hover {
    transform: scale(1.3);
    margin-left: 2px;
    margin-right: 2px;
  }
}
</style>
