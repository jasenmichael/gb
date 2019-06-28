<template>
  <mdb-container>
    <div class="h-100 d-inline-block mt-5">
      <h1>A little about Greenbriar..</h1>
      <p>
        <a href="https://marsalom.com" target="_blank">Marsalom Inc.</a>
        / Greenbriar School was established in 1969.
        <br />
      </p>
      <p>
        Greenbriar School is operated for educational purposes within the
        meaning of Section 501(c)(3) of the Internal Revenue Code.
      </p>
      <p class="mb-4">
        We are an intentional community and a model for sustainable community
        living by consensus decision making. Our land stewardship program
        maintains and provides a space for a variety of workshops and events.
        Participation in community life is an integral part of our learning
        process.
      </p>
      <h5>Educational Workshops:</h5>
      <p>Our workshops include topics such as:</p>
      <ul class="mb-1">
        <li>Communal living</li>
        <li>Organic gardening</li>
        <li>Permaculture</li>
        <li>Natural building</li>
        <li>Land management</li>
        <li>Native and invasive species</li>
        <li>Natural habitat</li>
      </ul>
      <span class="ml-4">
        check out upcoming events and workshops
        <nuxt-link to="/events">here</nuxt-link>
      </span>
      <h5 class="mt-4">Homeschool Enrichment Program:</h5>
      <p>
        Our "Homeschool Enrichment Program" is a space for parents to homeschool
        together in a community environment, we have a regular schedule and
        program. For more information
        <nuxt-link to="/contact">contact us</nuxt-link>
        .
      </p>
      <p>
        Life at Greenbriar is about simplicity with awareness that every action
        will effect future generations. We strive to live more consciously in
        our interactions with one another, the world and our environment.
      </p>
    </div>
  </mdb-container>
</template>

<script>
import { mdbContainer } from 'mdbvue'

export default {
  components: { mdbContainer }
}
</script>
