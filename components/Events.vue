<template>
  <events-tabs />
</template>

<script>
import EventsTabs from '@/components/EventsTabs'

export default {
  components: { EventsTabs },
  data() {
    return {
      eventLogo: '/banner.jpg'
    }
  }
}
</script>
