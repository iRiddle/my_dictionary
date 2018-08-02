<template>
  <b-container fluid no-gutters>
    <b-row no-gutters>
      <b-col>
        <b-navbar toggleable="md" type="dark" variant="primary" class="view-bar bd-navbar sticky">
          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
          <b-navbar-brand to="/main">{{dataName}}</b-navbar-brand>
            <b-navbar-nav class="ml-auto">
              <b-nav-item to = "/">
                <span class="white" @click="logout">Log Out</span>
              </b-nav-item>
            </b-navbar-nav>
        </b-navbar>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <nav class="drawer-background col-xl-2 sidebar">
          <div class="sticky-nav">
            <ul class="nav flex-column">
              <li class="item-nav">
                <b-link to="/foo" class="nav-link">Statistics</b-link>
              </li>
              <li class="item-nav">
                <b-link to="/words" class="nav-link">Words</b-link>
              </li>
              <li class="item-nav">
                <b-link to="/foo" class="nav-link">Check</b-link>
              </li>
              <li class="item-nav">
                <b-link to="/foo" class="nav-link">Texts</b-link>
              </li>
              <li class="item-nav">
                <b-link to="/foo" class="nav-link">Games</b-link>
              </li>
            </ul>
          </div>
        </nav>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import firebase from 'firebase'
export default {
  data () {
    return {
      dataName: 'Dictionary'
    }
  },
  methods: {
    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('description')
      })
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
.drawer-background {
  background-color: #F8F9FA
}
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  padding: 62px 0 0 0
}
.view-bar {
  z-index: 10000;
}
.sticky {
  width: 100%;
  position: fixed;
  top: 0;
}
.sticky-nav {
  top: 0;
  height: calc(100vh - 48px);
  padding-top: .4rem;
  overflow-x: hidden;
  overflow-y: auto;
}
.item-nav {
  list-style-type: none;
  padding: 0px 0px 25px 0px;
}
.nav {
  display: inline;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
flex-column {
  -ms-flex-direction: column!important;
  flex-direction: column!important;
}
.nav-link {
  display: block;
  padding: .5rem 1rem;
}
.sidebar .nav-link {
  font-weight: 600;
  color: #333
}
</style>
