<template>
  <mdb-container>
    <br />
    <covid />
  </mdb-container>
</template>

<script>
import Covid from '@/components/Covid'
import { mdbContainer } from 'mdbvue'

export default {
  components: { Covid, mdbContainer },
  data() {
    return {
      //   yo: 'wazzuh'
    }
  }
}
</script>
