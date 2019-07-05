<template>
  <div class="z-depth-5">
    <!-- <pre>{{ $mq }}</pre> -->
    <!-- eslint-disable-next-line -->
    <mdb-navbar dark color="teal darken-3" class="white-text z-depth-5" scrolling :scrollingOffset='20'  animated animation="3">
      <mdb-navbar-brand to="/">
        <!-- eslint-disable-next-line -->
        <picture v-if="$mq === 'sm' ? true : false">
          <source data-srcset="icon.png?webp" type="image/webp" />
          <source data-srcset="icon.png" type="image/png" />
          <!-- eslint-disable-next-line -->
          <!-- <img data-src="icon.png" class="lazyload" alt="an image of a greenbriar vine" /> -->
          <img
            id="icon"
            style="color:transparent;"
            src="icon.png"
            height="30"
            alt="an image of a greenbriar vine"
            class="lazyload"
          />
        </picture>
        <picture v-else>
          <source data-srcset="icon.png?webp" type="image/webp" />
          <source data-srcset="icon.png" type="image/png" />
          <!-- eslint-disable-next-line -->
          <!-- <img data-src="icon.png" class="lazyload" alt="an image of a greenbriar vine" /> -->
          <img
            id="icon"
            style="color:transparent;"
            src="icon.png"
            height="80"
            alt="an image of a greenbriar vine"
            class="lazyload"
          />
        </picture>
        <strong id="brand">
          Greenbriar Community School
        </strong>
      </mdb-navbar-brand>
      <mdb-navbar-toggler class="menu">
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
a.navbar-brand {
  outline: 0;
  font-family: 'Domine', serif;
}
#brand {
  font-size: 90%;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.69);
  transition: all 0.5s ease-in-out;
}
#icon {
  transition: all 0.5s ease-in-out;
  padding-left: 0rem;
}

.link {
  transition: all 0.2s ease-in-out;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.69);
}

@media only screen and (min-width: 992px) {
  #brand {
    font-size: 150%;
  }
  #icon {
    padding-left: 3rem;
  }
  .link {
    margin-left: 10px;
    margin-right: 10px;
  }
  .link:hover {
    transform: scale(1.3);
  }
}
@media only screen and (max-width: 366px) {
  #brand {
    font-size: 70%;
  }
  .animated-icon3 {
    font-size: 8%;
  }
}
</style>
