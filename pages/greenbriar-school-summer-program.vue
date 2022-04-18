<template>
  <mdb-container>
    <div class="h-100 d-inline-block mt-5">
      <h1 class="text-center">Greenbriar School Summer Program 2022</h1>
      <h2 class="text-center">June 16 - June 28</h2>
      <div
        class="pt-4 text-center"
        style="max-width: 800px; max-height: 600px;"
      >
        <img
          src="/images/greenbriar-school-summer-program-2022.jpg"
          class="img-fluid lazyload z-depth-1-half mb-4 center"
          alt="Greenbriar School Summer Program 2022 flier image"
        />
      </div>
      <p class="P1">June 14-16</p>
      <p class="P2">STEM/Building Week</p>
      <p class="Standard">Engineering</p>
      <p class="Standard">Bamboo Forts</p>
      <p class="Standard">Legos</p>
      <p class="Standard">Tool Usage/Safety</p>
      <p class="Standard">
        Collective Project: Fort village or solar dehydrator
      </p>

      <hr />

      <p class="P1">June 21-23</p>
      <p class="P2">Nature Immersion Week</p>
      <p class="Standard">Wildlife tracking - making plaster casts</p>
      <p class="Standard">Cordage</p>
      <p class="Standard">Weaving pine needle baskets</p>
      <p class="Standard">Bush knife use and safety</p>
      <p class="Standard">Fire making</p>
      <p class="Standard">Plant Identification</p>

      <hr />

      <p class="P1">June 28-30</p>
      <p class="P2">Art Week - Exploring different art mediums</p>
      <p class="Standard">Sculpture - harvesting clay</p>
      <p class="Standard">Painting, Drawing</p>
      <p class="Standard">Mosaics</p>
      <p class="Standard">
        End of week - collective art project (mural and/or sculpture)
      </p>
      <p class="Standard"></p>
      <p class="P1">July 12-14</p>
      <p class="P2">Music Week</p>
      <p class="Standard">Music theory</p>
      <p class="Standard">Music in nature</p>
      <p class="Standard">Making instruments</p>
      <p class="Standard">End of week - collective music production</p>

      <hr />

      <p class="P1">July 19-21</p>
      <p class="P2">Homesteading Week</p>
      <p class="Standard">Food production</p>
      <p class="Standard">Livestock</p>
      <p class="Standard">Food preservation - canning/dehydrating/jerky</p>
      <p class="Standard">Plant medicine making</p>
      <p class="Standard">Students will get to take home what they make</p>

      <hr />

      <p class="P1">July 26-28</p>
      <p class="P2">Game Week</p>
      <p class="Standard">Both indoor outdoor games</p>
      <p class="Standard">Nature Games</p>
      <p class="Standard">Board games</p>
      <p class="Standard pb-8">
        End of week - creative game made by students
      </p>
    </div>
  </mdb-container>
</template>

<script>
import { mdbContainer } from 'mdbvue'

export default {
  components: {
    mdbContainer
  }
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
}
td,
th {
  vertical-align: top;
  font-size: 12pt;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  clear: both;
}
ol,
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
span.footnodeNumber {
  padding-right: 1em;
}
span.annotation_style_by_filter {
  /* font-size: 95%; */
  /* font-family: Arial; */
  /* background-color: #fff000; */
  margin: 0;
  border: 0;
  padding: 0;
}
span.heading_numbering {
  margin-right: 0.8rem;
}
/* * {
  margin: 0;
} */
.P1 {
  /* font-size: 12pt; */
  /* font-family: 'Liberation Serif'; */
  writing-mode: horizontal-tb;
  direction: ltr;
  font-weight: bold;
  margin-top: 2rem;
}
.P2 {
  /* font-size: 12pt; */
  /* font-family: 'Liberation Serif'; */
  writing-mode: horizontal-tb;
  direction: ltr;
  text-decoration: underline;
  font-weight: bold;
}
.Standard {
  /* font-size: 12pt; */
  /* font-family: 'Liberation Serif'; */
  writing-mode: horizontal-tb;
  direction: ltr;
}
/* ODF styles with no properties representable as CSS:
     { } */
</style>
