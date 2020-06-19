<template>
  <mdb-container class="top mt-4 pt-4">
    <div style="margin-top:2rem">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSf5bXk3U39vt9zzGYgLBEh1ZSAZ11lEhJGydH6ubOgScv_NLg/viewform?embedded=true"
        width="100%"
        height="2700"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </div>
    <nuxt-link to="/homeschool">
      <mdb-btn>Back to Homeschool Enrichment Program</mdb-btn>
    </nuxt-link>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbBtn } from 'mdbvue'
export default {
  components: {
    mdbContainer,
    mdbBtn
  },
  data() {
    return {}
  }
}
</script>
