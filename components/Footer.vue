<template>
  <!-- Footer -->
  <mdb-footer color="primary-color-dark" class="page-footer font-small mt-0">
    <div style="backgroundcolor: #00695c" class="z-depth-3">
      <hr class="clearfix w-100 m-0" />
      <mdb-container class="text-center">
        <PayPal />
      </mdb-container>
    </div>
    <div class="z-depth-4">
      <hr class="clearfix w-100 m-0" />
    </div>
    <mdb-container class="text-left">
      <mdb-row>
        <mdb-col md="6">
          <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">
            Get in touch
          </h5>
          <ul class="list-unstyled">
            <li>
              <mdb-icon icon="map-marked-alt" size="2x" class="mr-2" />
              Greenbriar Community School
            </li>
            <li class="ml-4 pl-3">&nbsp;1411 Old Sayers Rd.</li>
            <li class="ml-4 mb-3 pl-3">&nbsp;Bastrop Tx, 78602</li>
            <li>
              <mdb-icon icon="phone" size="2x" class="mr-2 mb-2" />
              <a href="tel:+1-512-535-5532"> 512-535-5532 </a>
            </li>
            <li>
              <mdb-icon icon="envelope" size="2x" class="mr-2" />
              <a href="mail:thegreenbriarschool@gmail.com"> Contact Us </a>
            </li>
            <li>
              <mdb-icon fab icon="facebook-square" size="2x" class="mr-2" />
              <!-- <i class="fab fa-facebook white-text"></i> -->
              <!-- <mdb-icon icon="facebook" class="mr-2" /> -->
              <a
                target="_blank"
                href="https://www.facebook.com/greenbriarcommunityschool/"
                rel="noopener"
              >
                &nbsp;Follow us on Facebook
              </a>
            </li>
          </ul>
          <div>
            <nuxt-link to="/contact">
              <mdb-btn block color="primary">Contact Form</mdb-btn>
            </nuxt-link>
            <!-- <br />
            <nuxt-link to="/student-interest-form">
              <mdb-btn block color="secondary">Student Interest Form</mdb-btn>
            </nuxt-link> -->
          </div>
          <br />
        </mdb-col>
        <hr class="clearfix w-100 d-md-none" />
        <mdb-col md="6">
          <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">
            Community Network
          </h5>
          <ul class="list-unstyled">
            <li
              v-for="(link, index) in communityLinks"
              :key="index"
              class="mb-2"
            >
              <a
                :href="link.href"
                :title="link.title"
                target="_blank"
                rel="noopener"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
          <!-- <img
            class="wp-image-179897 alignright"
            src="http://www.ic.org/wp-content/uploads/2015/02/5.jpg"
            alt="FIC Membership"
            srcset="
              https://www.ic.org/wp-content/uploads/2015/02/5.jpg         288w,
              https://www.ic.org/wp-content/uploads/2015/02/5-200x180.jpg 200w,
              https://www.ic.org/wp-content/uploads/2015/02/5-75x67.jpg    75w
            "
            sizes="(max-width: 218px) 100vw, 218px"
            width="218"
            height="196"
          /> -->
        </mdb-col>
        <hr class="clearfix w-100 d-md-none" />
        <!-- <mdb-col md="3">
          <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">
            Upcoming Events
          </h5>
          <ul v-if="upcomingEvents.length !== 0" class="list-unstyled">
            <li
              v-for="event in upcomingEvents.slice(0, 6)"
              :key="event.id"
              class="mb-2"
            >
              <nuxt-link :to="'/event/' + event.urlPath">
                {{ event.name.html }}
              </nuxt-link>
            </li>
          </ul>
          <div v-else>No upcoming events, check back later.</div>
          <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">Past Events</h5>
          <ul class="list-unstyled">
            <li
              v-for="event in pastEvents.slice(0, 6).reverse()"
              :key="event.id"
              class="mb-2"
            >
              <nuxt-link :to="'/event/' + event.urlPath">
                {{ event.name.html }}
              </nuxt-link>
            </li>
          </ul>
        </mdb-col> -->
      </mdb-row>
    </mdb-container>
    <hr class="clearfix w-100 m-0" />
    <div class="p-4 z-depth-5" style="backgroundcolor: #00695c">
      <mdb-container class="text-center">
        <p class="text-center">
          Greenbriar Community School does not and shall not discriminate on the
          basis of race, color, religion (creed), gender, gender expression,
          age, national origin (ancestry), disability, marital status, sexual
          orientation, or military status, in any of its activities or
          operations. These activities include, but are not limited to, hiring
          and firing of staff, selection of students, volunteers, and provision
          of services. We are committed to providing an inclusive and welcoming
          environment for all members of our faculty, staff, students, clients,
          and volunteers.
        </p>
      </mdb-container>
    </div>
    <div
      class="footer-copyright text-center py-3 z-depth-5"
      style="backgroundcolor: #004d40"
    >
      <mdb-container fluid>
        &copy; {{ new Date().getFullYear() }} Copyright:
        <a href="https://greenbriarschool.org">Greenbriar Community School</a>
      </mdb-container>
    </div>
    <!-- <pre>{{ upcomingEvents }}</pre> -->
  </mdb-footer>
  <!-- Footer -->
</template>

<script>
import PayPal from '@/components/PayPal'
import {
  mdbFooter,
  mdbContainer,
  mdbBtn,
  mdbRow,
  mdbCol,
  mdbIcon
} from 'mdbvue'
export default {
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbBtn,
    PayPal
  },
  data() {
    return {
      communityLinks: [
        {
          href: 'https://www.ic.org/directory/greenbriar/',
          title: 'Foundation for Intentional Community',
          label: 'Foundation for Intentional Community'
        },
        {
          href: 'http://earthaven.org',
          title:
            'an intentional community based in North Carolina near Ashville, with many natural buildings, Earthhaven is off-the-grid also incorporating many other sustainable living systems.',
          label: 'Earthaven Ecovillage'
        },
        {
          href: 'http://schoolofintegratedliving.org',
          title:
            'The mission of SOIL is to inspire and empower people to live responsible and creative lives by providing experiential education in integrated living and regenerative systems.',
          label: 'School of Integrated Living - SOIL'
        },
        {
          href: 'http://www.thefarm.org',
          title: 'The Farm in Tennessee',
          label: 'The Farm'
        },
        {
          href: 'http://dancingrabbit.org',
          title:
            'Dancing Rabbit is an ecovillage and intentional community of about 70 people set amid the hills and prairies of rural northeastern Missouri. Our goal is to live ecologically sustainable and socially rewarding lives, and to share the skills and ideas behind that lifestyle. - See more at: http://www.dancingrabbit.org/#sthash.I2U5NokQ.dpuf',
          label: 'Dancing Rabbit Ecovillage'
        },
        {
          href: 'http://ecovillage.org',
          title:
            'inspiring examples of how people and communities can live healthy, cooperative, genuinely happy and meaningful lifestyles.',
          label: 'Global Ecovillage Network'
        }
      ],
      upcomingEvents: [], // this.$store.state.events.list.filter(
      // event => event.status === 'live'
      // ),
      pastEvents: [] // this.$store.state.events.list.filter(
      // event => event.status === 'completed'
      // )
    }
  }
}
</script>

<style>
.dummy {
  background-color: #0d5235;
}
.page-footer {
  margin-top: 0px;
}
</style>
