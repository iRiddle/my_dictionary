<template>
  <b-container fluid no-gutters>
    <b-row no-gutters>
      <b-col>
        <b-navbar toggleable="md" type="dark" variant="primary">
          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
          <b-navbar-brand to="/">{{dataName}}</b-navbar-brand>
            <b-navbar-nav class="ml-auto">
              <b-nav-item to = "/signin">
                <span class="white">Sign In</span>
              </b-nav-item>
              <b-nav-item to="/signup">
                <span class="white">Sign Up</span>
              </b-nav-item>
            </b-navbar-nav>
        </b-navbar>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <description></description> <!-- delete -->
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      dataName: 'Dictionary'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-fluid {
  padding: 0;
}
.white {
 color: #ffffff
}
</style>
