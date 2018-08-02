<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <navigation></navigation>
      </b-col>
    </b-row>
    <b-row class="text-center">
      <b-col>
        <h1>Welcome</h1>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="2">
        <b-card border-variant="primary"
          class="cardStyle"
          header="Primary"
          header-bg-variant="primary"
          header-text-variant="white">
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </b-card>
      </b-col>
      <b-col cols="2">
        <b-card border-variant="primary"
          class="cardStyle"
          header="Primary"
          header-bg-variant="primary"
          header-text-variant="white">
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </b-card>
      </b-col>
      <b-col cols="2">
        <b-card border-variant="primary"
          class="cardStyle"
          header="Primary"
          header-bg-variant="primary"
          header-text-variant="white">
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </b-card>
      </b-col>
    </b-row>
    <b-row align-h="center mt-4">
      <b-col cols="2">
        <b-card border-variant="primary"
          class="cardStyle"
          header="Primary"
          header-bg-variant="primary"
          header-text-variant="white">
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </b-card>
      </b-col>
      <b-col cols="2">
        <b-card border-variant="primary"
          class="cardStyle"
          header="Primary"
          header-bg-variant="primary"
          header-text-variant="white">
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </b-card>
      </b-col>
      <b-col cols="2">
        <b-card border-variant="primary"
          class="cardStyle"
          header="Primary"
          header-bg-variant="primary"
          header-text-variant="white">
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </b-card>
      </b-col>
    </b-row>
    <b-row align-h="center mt-4">
      <b-col cols="2">
        <b-card border-variant="primary"
          class="cardStyle"
          header="Primary"
          header-bg-variant="primary"
          header-text-variant="white">
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </b-card>
      </b-col>
      <b-col cols="2">
        <b-card border-variant="primary"
          class="cardStyle"
          header="Primary"
          header-bg-variant="primary"
          header-text-variant="white">
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </b-card>
      </b-col>
      <b-col cols="2">
        <b-card border-variant="primary"
          class="cardStyle"
          header="Primary"
          header-bg-variant="primary"
          header-text-variant="white">
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </b-card>
      </b-col>
    </b-row>
</b-container>
</template>

<script>
import Navigation from '@/components/Navigation/Navigation'
export default {
  components: {
    Navigation
  }
}
</script>

<style>
.cardStyle {
  max-width: 20rem
}
.container-fluid {
  padding: 0;
}
</style>
