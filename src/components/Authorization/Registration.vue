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
                label="Email address:"
                label-for="enterEmail">
              <b-form-input id="enterEmail"
                type="email"
                v-model="enterEmail"
                required
                placeholder="Enter email">
              </b-form-input>
            </b-form-group>
            <b-form-group id="nameId"
                label="Name:"
                label-for="enterName">
              <b-form-input id="enterName"
                type="text"
                required
                placeholder="Enter your name">
              </b-form-input>
            </b-form-group>
            <b-form-group id="passwordId"
                label="Password:"
                label-for="enterPassword">
              <b-form-input id="enterPassword"
                type="password"
                required
                v-model="enterPassword"
                placeholder="Enter password">
              </b-form-input>
            </b-form-group>
              <b-form-group id="confirmId"
                  label="Confirm password:"
                  label-for="confirmPassword">
                <b-form-input id="confirmPassword"
                  type="password"
                  required
                  v-model="confirmPassword"
                  :state = "comparePasswords"
                  aria-describedby="compPass"
                  placeholder="Enter password">
                </b-form-input>
                <b-form-invalid-feedback id="compPass">
                  Passwords don't match
                </b-form-invalid-feedback>
              </b-form-group>
            <b-row align-h="end">
              <b-col cols="6" sm="8" md="8" lg="4" class="text-center">
                <b-button type="submit" variant="primary" @click="onSignUp()">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
                <b-button type="submit" variant="info" @click="checkAddingData()">Check</b-button>
              </b-col>
              <!--<b-col cols="6" sm="4" md="4" lg="4">
                <router-link to="/signin" class="link">Do you already have an account?</router-link>
              </b-col> -->
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
      enterEmail: '',
      enterPassword: '',
      confirmPassword: '',
      enterName: ''
    }
  },
  methods: {
    onSignUp () {
      firebase.auth().createUserWithEmailAndPassword(this.enterEmail, this.enterPassword)
        .then((user) => {
          this.$router.replace('words')
        },
        (err) => {
          alert(err.message)
        })
    },
    checkAddingData () {
      firebase.database().ref().push().set('dsds')
    }
  },
  computed: {
    comparePasswords () {
      return this.enterPassword === this.confirmPassword
    }
  }
}
</script>

<style>
.container-fluid {
  padding: 0;
}
.formSet {
  max-width: 100vw;
}
</style>
