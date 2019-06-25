<template>
  <!-- Footer -->
  <mdb-footer
    color="stylish-color-dark"
    class="page-footer font-small pt-4 mt-4"
  >
    <mdb-container class="text-left">
      <mdb-row>
        <mdb-col md="6">
          <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">
            Footer Content
          </h5>
          <p>wazza</p>
        </mdb-col>
        <hr class="clearfix w-100 d-md-none" />
        <mdb-col md="2">
          <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
          <ul class="list-unstyled">
            <li>
              <a href="#">Link 1</a>
            </li>
            <li>
              <a href="#">Link 2</a>
            </li>
            <li>
              <a href="#">Link 3</a>
            </li>
            <li>
              <a href="#">Link 4</a>
            </li>
          </ul>
        </mdb-col>
        <hr class="clearfix w-100 d-md-none" />
        <mdb-col md="2">
          <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
          <ul class="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
            <li>
              <a href="#!">Link 3</a>
            </li>
            <li>
              <a href="#!">Link 4</a>
            </li>
          </ul>
        </mdb-col>
        <hr class="clearfix w-100 d-md-none" />
        <mdb-col md="2">
          <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
          <ul class="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
            <li>
              <a href="#!">Link 3</a>
            </li>
            <li>
              <a href="#!">Link 4</a>
            </li>
          </ul>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <hr />
    <div class="text-center py-3">
      <ul class="list-unstyled list-inline mb-0">
        <li class="list-inline-item">
          <h5 class="mb-1">Register for free</h5>
        </li>
        <li class="list-inline-item">
          <a href="#" class="btn btn-danger btn-rounded">Sign up!</a>
        </li>
      </ul>
    </div>
    <hr />
    <div class="text-center">
      <ul class="list-unstyled list-inline">
        <li class="list-inline-item">
          <a class="btn-floating btn-sm btn-fb mx-1">
            <i class="fab fa-facebook"></i>
          </a>
        </li>
        <li class="list-inline-item">
          <a class="btn-floating btn-sm btn-tw mx-1">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li class="list-inline-item">
          <a class="btn-floating btn-sm btn-gplus mx-1">
            <i class="fab fa-google-plus"></i>
          </a>
        </li>
        <li class="list-inline-item">
          <a class="btn-floating btn-sm btn-li mx-1">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li class="list-inline-item">
          <a class="btn-floating btn-sm btn-dribbble mx-1">
            <i class="fab fa-dribbble"></i>
          </a>
        </li>
      </ul>
    </div>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; 2019 Copyright:
        <a href="https://greenbriarschool.org">
          Greenbriar Community School
        </a>
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue'
export default {
  name: 'FooterPage',
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol
  }
}
</script>
