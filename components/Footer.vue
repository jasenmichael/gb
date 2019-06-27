<template>
  <!-- Footer -->
  <mdb-footer color="green darken-4" class="page-footer font-small">
    <div style="backgroundColor: #00695c">
      <mdb-container class="text-left text-center">
        <h6 class="mb-0 white-text p-4">
          Follow us on Facebook
          <a
            class="fb-ic ml-4"
            target="_blank"
            href="https://www.facebook.com/greenbriarcommunityschool/"
          >
            <i class="fab fa-facebook white-text mr-lg-4"></i>
          </a>
        </h6>
      </mdb-container>
    </div>
    <mdb-container class="text-left mt-4">
      <mdb-row>
        <mdb-col md="6">
          <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">
            Get in touch
          </h5>
          <ul class="list-unstyled">
            <li>Greenbriar Community School</li>
            <li>1411 Old Sayers Rd.</li>
            <li>Bastrop Tx, 78602</li>
            <li>Phone: 512-281-2661</li>
            <li>Email: contact@greenbriarschool.org</li>
          </ul>
        </mdb-col>
        <hr class="clearfix w-100 d-md-none" />
        <mdb-col md="3">
          <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">
            Community Network
          </h5>
          <ul class="list-unstyled">
            <li class="mb-2">
              <a
                href="http://earthaven.org"
                title="an intentional community based in North Carolina near Ashville, with many natural buildings, Earthhaven is off-the-grid also incorporating many other sustainable living systems."
              >
                Earthaven Ecovillage
              </a>
            </li>
            <li class="mb-2">
              <a
                href="http://schoolofintegratedliving.org"
                title="The mission of SOIL is to inspire and empower people to live responsible and creative lives by providing experiential education in integrated living and regenerative systems."
              >
                School of Integrated Living - SOIL
              </a>
            </li>
            <li class="mb-2">
              <a
                href="http://www.thefarm.org"
                target="_blank"
                title="The Farm in Tennessee"
              >
                The Farm
              </a>
            </li>
            <li class="mb-2">
              <a
                href="http://ic.org"
                target="_blank"
                title="Networking site for intentional communities"
              >
                Fellowship for Intentional Community
              </a>
            </li>
            <li class="mb-2">
              <a
                href="http://dancingrabbit.org"
                target="_blank"
                title="Dancing Rabbit is an ecovillage and intentional community of about 70 people set amid the hills and prairies of rural northeastern Missouri. Our goal is to live ecologically sustainable and socially rewarding lives, and to share the skills and ideas behind that lifestyle. - See more at: http://www.dancingrabbit.org/#sthash.I2U5NokQ.dpuf"
              >
                Dancing Rabbit Ecovillage
              </a>
            </li>
            <li class="mb-2">
              <a
                href="http://ecovillage.org"
                target="_blank"
                title=" inspiring examples of how people and communities can live healthy, cooperative, genuinely happy and meaningful lifestyles."
              >
                Global Ecovillage Network
              </a>
            </li>
          </ul>
        </mdb-col>
        <hr class="clearfix w-100 d-md-none" />
        <mdb-col md="3">
          <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">Sitemap</h5>
          <ul class="list-unstyled">
            <li v-for="event in upcomingEvents" :key="event.id">
              <nuxt-link :to="'/event/' + event.urlPath">
                {{ event.name.html }}
              </nuxt-link>
            </li>
          </ul>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <div class="p-4" style="backgroundColor: #00695c">
      <mdb-container class="text-center">
        <p class="text-center">
          Greenbriar Community School does not and shall not discriminate on the
          basis of race, color, religion (creed),gender, gender expression, age,
          national origin (ancestry), disability, marital status, sexual
          orientation, or military status, in any of its activities or
          operations. These activities include, but are not limited to, hiring
          and firing of staff, selection of students, volunteers, and provision
          of services. We are committed to providing an inclusive and welcoming
          environment for all members of our faculty, staff, students, clients,
          and volunteers.
        </p>
      </mdb-container>
    </div>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; 2019 Copyright:
        <a href="https://greenbriarschool.org">Greenbriar Community School</a>
      </mdb-container>
    </div>
    <!-- <pre>{{ upcomingEvents }}</pre> -->
  </mdb-footer>
  <!-- Footer -->
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue'
export default {
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol
  },
  data() {
    return {
      upcomingEvents: this.$store.state.events.list
    }
  }
}
</script>

<style>
.dummy {
  background-color: #0d5235;
}
</style>
