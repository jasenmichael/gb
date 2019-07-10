<template>
  <div>
    <mdb-card
      class="card-image"
      :style="{
        // eslint-disable-next-line
        background: '#fff url(' + 'banner.jpg?webp' + ') no-repeat center center'
      }"
    >
      <div class="text-white text-center rgba-stylish-light py-5 px-4">
        <div>
          <h1 class="pt-4 mb-4 font-bold display-4 eventtitle">
            <strong>Contact Us</strong>
          </h1>
          <h4
            class="mx-4 mb-4 font-bold eventdescription"
            v-html="'Drop a line if you have any questions...'"
          ></h4>
        </div>
      </div>
    </mdb-card>
    <mdb-container>
      <div class="d-flex justify-content-center">
        <!-- <form :class="'contact-form ' + sending" @submit.prevent="sendEmail"> -->
        <form :class="'contact-form ' + sending" @submit.prevent="onSubmit">
          <!-- <p class="h4 text-center mb-4">Write to us</p> -->
          <div class="grey-text">
            <mdb-input
              v-model="first_name"
              label="First Name*"
              icon="user"
              group
              type="text"
              validate
              error="wrong"
              success="right"
            />
            <mdb-input
              v-model="last_name"
              label="Last Name*"
              icon="blank"
              group
              type="text"
              validate
              error="wrong"
              success="right"
            />
            <mdb-input
              v-model="email"
              label="Email*"
              icon="envelope"
              group
              type="email"
              validate
              error="wrong"
              success="right"
            />
            <mdb-input
              v-model="tel"
              label="Phone Number"
              icon="mobile-alt"
              group
              type="text"
              error="wrong"
              success="right"
            />
            <mdb-input
              v-model="subject"
              label="Subject*"
              class="capitalize"
              icon="tag"
              group
              :disabled="subectDisabled"
              type="text"
              validate
              error="wrong"
              success="right"
            />
            <mdb-textarea
              v-model="message"
              :rows="2"
              label="Message*"
              icon="pencil-alt"
            />
          </div>
          <p v-if="error" class="text-center red-text">
            Missing or invalid information..
          </p>
          <p v-else>{{ '&nbsp;' }}</p>
          <div class="text-center">
            <recaptcha
              style="display:inline-block;"
              @error="onError"
              @success="onSuccess"
              @expired="onExpired"
            />
          </div>
        </form>
        <mdb-modal :show="modal" centered @close="closeModal()">
          <mdb-modal-header>
            <mdb-modal-title>Message sent</mdb-modal-title>
          </mdb-modal-header>
          <mdb-modal-body>
            Thanks for reaching out, we will get back with you
          </mdb-modal-body>
          <mdb-modal-footer>
            <mdb-btn color="secondary" @click.native="closeModal()">
              Close
            </mdb-btn>
          </mdb-modal-footer>
        </mdb-modal>
      </div>
      <div class="text-center">
        <!-- <div class="text-center"> -->
        <mdb-btn
          outline="primary"
          :disabled="sendDisabled"
          :class="sending"
          @click.native="sendEmail"
        >
          <mdb-icon icon="paper-plane" class="ml-1" />
          {{ sendTxt }}
        </mdb-btn>
      </div>
    </mdb-container>
    <!-- <pre>{{ this.$route.query.subject }}</pre> -->
  </div>
</template>

<script>
// import VueProgrammaticInvisibleGoogleRecaptcha from 'vue-programmatic-invisible-google-recaptcha'
// import VueRecaptcha from 'vue-recaptcha'
import {
  mdbInput,
  mdbBtn,
  mdbTextarea,
  mdbIcon,
  mdbContainer,
  mdbModal,
  mdbModalHeader,
  mdbModalTitle,
  mdbModalBody,
  mdbModalFooter,
  mdbCard
} from 'mdbvue'

export default {
  components: {
    mdbInput,
    mdbBtn,
    mdbTextarea,
    mdbIcon,
    mdbContainer,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbCard
  },
  data() {
    return {
      first_name: '',
      last_name: '',
      email: '',
      tel: '',
      subject: this.$route.query.subject
        ? this.$route.query.subject
            .split('-')
            .map(w => w.substring(0, 1).toUpperCase() + w.substring(1))
            .join(' ')
            .replace(/Homeschool/g, 'Homeschool Enrichment Program')
        : '',
      subectDisabled:
        this.$route.query.subject ===
        ('facilities-usage' | 'volunteer' | 'homeschool'),
      message: '',
      // misc
      sending: '',
      sendTxt: 'Send',
      sendDisabled: true,
      sent: false,
      error: false,
      modal: false
    }
  },
  head() {
    return {
      title: 'Get in touch',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'Contact Greenbriar Community School'
        }
      ],
      script: [
        {
          src: 'https://www.google.com/recaptcha/api.js?render=explicit',
          async: true,
          defer: true
        }
      ]
    }
  },
  async mounted() {
    this.sending = ''
    await this.$recaptcha.init()
    // eslint-disable-next-line
    // console.log(process.env.contactApiTest)
  },
  methods: {
    reset: function() {
      // eslint-disable-next-line
      // console.log('resetting')
      this.first_name = ''
      this.last_name = ''
      this.email = ''
      this.tel = ''
      this.subject = ''
      this.message = ''
      this.sendTxt = 'Send'
      this.sending = ''
      this.$router.push('/')
    },
    showModal: function() {
      this.modal = true
    },
    closeModal: function() {
      this.modal = false
      this.reset()
    },
    showError: function() {
      this.error = true
      this.sendTxt = 'Send'
      this.sending = ''
      setTimeout(this.hideError, 4000)
    },
    hideError: function() {
      this.error = false
    },
    onError(error) {
      // eslint-disable-next-line
      console.log('Error happened:', error)
    },
    async onSubmit() {
      try {
        const token = await this.$recaptcha.execute('login')
        // eslint-disable-next-line
        console.log('ReCaptcha token:', token)
      } catch (error) {
        // eslint-disable-next-line
        console.log('Login error:', error)
      }
    },
    onSuccess(token) {
      // eslint-disable-next-line
      console.log('Succeeded:', token)
      this.sendDisabled = false
    },
    onExpired() {
      // eslint-disable-next-line
      console.log('Expired')
      this.sendDisabled = true
    },
    sendEmail: async function() {
      const url = process.env.contactApi
      const config = {
        'Content-Type': 'application/json'
      }
      // const snip = '\\n\\n'
      const formData = {
        from: 'ready-builder.com',
        first_name: this.first_name !== '' ? this.first_name : null,
        last_name: this.last_name !== '' ? this.last_name : null,
        email: this.email !== '' ? this.email : null,
        tel: this.tel,
        subject: this.subject !== '' ? this.subject : null,
        message: this.message !== '' ? this.message : null
      }
      this.sendTxt = 'Sending..'
      this.sending = 'disabled'
      const email = await this.$axios({
        method: 'post',
        url,
        data: formData,
        headers: config
      }).then(res => {
        // eslint-disable-next-line
        // console.log('DATA-', res.data)
        if (res.data.success) {
          setTimeout(this.showModal, 3000)
        }
        if (res.data.error) {
          this.showError()
        }
      })
      return email
    }
  }
}
</script>

<style>
.contact-form {
  width: 900px;
  margin-left: 18px;
  margin-right: 18px;
}

.eventtitle {
  text-shadow: 2px 2px 12px rgba(0, 0, 0, 0.7);
}

.eventdescription {
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.9);
}

.capitalize {
  text-transform: capitalize;
}

@media only screen and (max-width: 900px) {
  .contact-form {
    width: 95vw;
  }
}
</style>
