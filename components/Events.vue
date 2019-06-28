<template>
  <mdb-card-group>
    <mdb-card>
      <mdb-card-body>
        <mdb-card-title tag="h5">Panel title</mdb-card-title>
        <mdb-card-text>
          This is a wider panel with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </mdb-card-text>
        <mdb-card-text small muted>Last updated 3 mins ago</mdb-card-text>
      </mdb-card-body>
    </mdb-card>
    <mdb-card>
      <mdb-card-body>
        <mdb-card-title tag="h5">Panel title</mdb-card-title>
        <mdb-card-text>
          This panel has supporting text below as a natural lead-in to
          additional content.
        </mdb-card-text>
        <mdb-card-text small muted>Last updated 3 mins ago</mdb-card-text>
      </mdb-card-body>
    </mdb-card>
    <mdb-card>
      <mdb-card-body>
        <mdb-card-title tag="h5">Panel title</mdb-card-title>
        <mdb-card-text>
          This is a wider panel with supporting text below as a natural lead-in
          to additional content. This panel has even longer content than the
          first to show that equal height action.
        </mdb-card-text>
        <mdb-card-text small muted>Last updated 3 mins ago</mdb-card-text>
      </mdb-card-body>
    </mdb-card>
  </mdb-card-group>
</template>

<script>
import {
  mdbCard,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbCardGroup
} from 'mdbvue'

export default {
  components: {
    mdbCard,
    mdbCardBody,
    mdbCardGroup,
    mdbCardTitle,
    mdbCardText
  }
}
</script>
