<template>
  <mdb-container class="container mt-3">
    <small>
      <nuxt-link class="back" :to="'/events'">back to EVENTS</nuxt-link>
    </small>
    <h4>About this Event:</h4>
    <div id="category">
      <h5>
        Category:
        <span>{{ event.category_name }} / {{ event.subcategory_name }}</span>
      </h5>
    </div>
    <div
      class="content"
      v-html="
        event.description.html
          .replace(event.description.text, '')
          .replace(/<img/g, '<img class=\'img-fluid\'')
      "
    ></div>
    <hr />
    <hr />
    <div>
      <pre>{{ event }}</pre>
    </div>
  </mdb-container>
</template>

<script>
import { mdbContainer } from 'mdbvue'

export default {
  props: {
    event: {
      type: Object,
      default() {},
      useDefaultForNull: true
    }
  },
  components: {
    mdbContainer
  },
  mounted: function() {
    const imgs = document.getElementsByClassName('img-fluid')
    for (let index = 0; index < imgs.length; index++) {
      const img = imgs[index]
      if (index % 2 === 0) {
        // alert("Even Number");
        img.classList.add('img-left')
        img.parentNode.classList.add('img-max')
        img.parentNode.classList.add('img-left')
      } else {
        // alert("Odd Number");
        img.classList.add('img-right')
        img.parentNode.classList.add('img-max')
        img.parentNode.classList.add('img-right')
      }
    }
  }
}
</script>

<style>
.back {
  color: blue;
}
.img-left {
  /* padding-right: 1rem; */
  float: left;
  clear: left;
}

.img-right {
  /* padding-left: 1rem; */
  float: right;
  clear: right;
}

.img-max {
  max-width: 550px;
  max-height: auto;
  padding: 0.8rem;
}
</style>

<style scoped>
img {
  border-radius: 8px;
  padding-bottom: 0.4rem;
  padding-top: 0.4rem;
}
</style>
