<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <navigation></navigation>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Navigation from '@/components/App/NavigationApp'
export default {
  components: {
    Navigation
  },
  data () {
    return {
    }
  }
}
</script>

<style>
.container-fluid {
 /* padding: 0; */
}
</style>
