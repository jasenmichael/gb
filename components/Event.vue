<template>
  <mdb-container class="container mt-3">
    <small>
      <nuxt-link class="back" :to="'/events'">back to EVENTS</nuxt-link>
    </small>
    <h4>About this Event:</h4>
    <div id="category">
      <h5>
        Category:
        <span>
          {{ event.category_name
          }}{{ !event.category_id ? '' : ' / ' + event.subcategory_name }}
        </span>
      </h5>
    </div>
    <div
      class="content"
      v-html="
        event.description.html
          .replace(event.description.text, '')
          .replace(
            /<img/g,
            '<img class=\'img-fluid event-image z-depth-1-half\' align=\'left\''
          )
      "
    ></div>
    <hr />
    <hr />
    <div>
      <!-- <pre>{{ event }}</pre> -->
    </div>
  </mdb-container>
</template>

<script>
import { mdbContainer } from 'mdbvue'

export default {
  components: {
    mdbContainer
  },
  props: {
    event: {
      type: Object,
      default() {},
      useDefaultForNull: true
    }
  },
  mounted() {
    const imgs = document.getElementsByClassName('event-image')
    for (let index = 0; index < imgs.length; index++) {
      const img = imgs[index]
      if (index % 2 === 0) {
        // alert("Even Number");
        img.classList.add('img-right')
        // img.parentNode.classList.add('img-max')
        // img.parentNode.classList.add('img-left')
      } // else {
      // alert("Odd Number");
      // img.classList.add('img-right')
      // img.parentNode.classList.add('img-max')
      // img.parentNode.classList.add('img-right')
      // }
    }
  }
}
</script>

<style scoped>
.back {
  color: blue;
}
</style>

<style>
.event-image {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  /* max-width: 95%; */
}

@media only screen and (min-width: 750px) {
  .event-image {
    /* max-width: 40vw; */
    clear: both;
    display: block;
    max-height: 300px;
    max-width: 100%;
    border-radius: 2px;
    /* padding: 0.4rem; */
    margin-right: 1rem;
    margin-left: 0.5rem;
    margin-bottom: 1rem;
    /* padding-top: 0.4rem; */
  }

  .img-right {
    float: none;
    /* display: block; */
    display: inline-block;
  }
}
.content {
  /* max-width: 100%; */
  /* clear: both; */
  /* display: block; */
  overflow: auto;
}
</style>
