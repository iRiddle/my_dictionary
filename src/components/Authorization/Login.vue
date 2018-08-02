<template>
<b-container fluid>
    <b-row>
      <b-col>
        <navigation></navigation>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="10" sm="10" md="10" lg="10" xl="6" class="mt-5">
        <b-card class="formSet">
          <b-form>
            <b-form-group id="emailId"
                label="Email:"
                label-for="enterEmail">
              <b-form-input id="enterEmail"
                type="email"
                required
                v-model="email"
                placeholder="Enter email">
              </b-form-input>
            </b-form-group>
            <b-form-group id="passwordId"
                label="Password:"
                label-for="enterPassword">
              <b-form-input id="enterPassword"
                type="password"
                v-model="password"
                required
                placeholder="Enter password">
              </b-form-input>
            </b-form-group>
            <b-row align-h="end">
              <b-col align="center" cols="6" sm="8" md="8" lg="12" class="text-center">
                <b-button type="submit" variant="primary" @click="signin()">Login</b-button>
              </b-col>
            </b-row>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Navigation from '@/components/Navigation/Navigation'
import firebase from 'firebase'
export default {
  components: {
    Navigation
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signin () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            this.$router.replace('words')
          },
          (err) => {
            alert(err)
          }
        )
    }
  }
}
</script>

<style>
.container-fluid {
  padding: 0;
}
</style>
