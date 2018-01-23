<template>
  <div style="text-align: center; margin-bottom: 10vh">

    <!-- Main Navbar -->
    <b-navbar type="dark" style="height: 15vh; font-size: 3vh; background-color: black!important; border-bottom: 5px solid #0E7E12">
      <b-navbar-brand href="#" style="font-size: 5vh">
        <img src="./assets/haughtonFitLogo.png" style="width: 30vh">
      </b-navbar-brand>
    </b-navbar>

    <!-- Log In / Sign Up Navbar (Only if user signed in)-->
    <b-navbar toggleable v-if="!userData" style="background-color: black!important">
      <b-navbar-toggle target="nav_dropdown_collapse" type="light"></b-navbar-toggle>
      <b-collapse is-nav id="nav_dropdown_collapse">
        <b-navbar-nav style="font-family: Rajdhani">
          <b-nav-item><b-button variant="success" type="submit" size="md" v-b-modal.logInModal>Log In</b-button></b-nav-item>
          <b-nav-item><b-button variant="success" type="submit" size="md" v-b-modal.signUpModal>Sign Up</b-button></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!-- Name / Log Out Navbar (Only if user signed in) -->
    <b-navbar v-if="userData" type="dark" style="background-color: black!important">
      <b-navbar-brand style="font-family: Rajdhani; font-size: 2vh"> {{ userData.firstName }} {{ userData.lastName }} </b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item><b-button variant="danger" size="sm" type="submit" @click="logOut">Log Out</b-button></b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <!-- Log In Modal -->
    <b-modal id="logInModal" title="Log In" ok-title="Log In" @ok="signInWithEmailAndPassword" @cancel="resetLoginForm" style="position: absolute">
      <b-form>
        <b-form-group id="group1"
                      label="Email address:"
                      label-for="logInEmailInput"
                      description="We'll never share your email with anyone else.">
          <b-form-input id="logInEmailInput"
                        type="email"
                        v-model="logInForm.email"
                        required
                        placeholder="Enter email"
                        size="lg">
          </b-form-input>
        </b-form-group>

        <b-form-group id="group2"
                      label="Password"
                      label-for="logInPasswordInput"
                      description="We'll never share your password with anyone else.">
          <b-form-input id="logInPasswordInput"
                        type="password"
                        v-model="logInForm.password"
                        required
                        placeholder="Enter password"
                        size="lg">
          </b-form-input>
        </b-form-group>
      </b-form>
    </b-modal>

    <!-- Log Out Modal -->
    <b-modal id="signUpModal" title="Sign Up" ok-title="Sign Up" @ok="signUpWithEmailAndPassword" @cancel="resetSignUpForm">
      <b-form>
        <b-form-group id="group1"
                      label="First Name:"
                      label-for="signUpFirstNameInput">
          <b-form-input id="signUpFirstNameInput"
                        type="text"
                        v-model="signUpForm.firstName"
                        required
                        placeholder="Enter your first name">
          </b-form-input>
        </b-form-group>

        <b-form-group id="group2"
                      label="Last Name:"
                      label-for="signUpLastNameInput">
          <b-form-input id="signUpLastNameInput"
                        type="text"
                        v-model="signUpForm.lastName"
                        required
                        placeholder="Enter your last name">
          </b-form-input>
        </b-form-group>

        <b-form-group id="group3"
                      label="Email address:"
                      label-for="signUpEmailInput"
                      description="We'll never share your email with anyone else.">
          <b-form-input id="signUpEmailInput"
                        type="email"
                        v-model="signUpForm.email"
                        required
                        placeholder="Enter email">
          </b-form-input>
        </b-form-group>

        <b-form-group id="group4"
                      label="Password"
                      label-for="signUpPasswordInput"
                      description="We'll never share your password with anyone else.">
          <b-form-input id="signUpPasswordInput"
                        type="password"
                        v-model="signUpForm.password"
                        required
                        placeholder="Enter password">
          </b-form-input>
        </b-form-group>

        <b-form-group id="group5"
                      label="Verify Password"
                      label-for="logInVerifyPasswordInput">
          <b-form-input id="logInVerifyPasswordInput"
                        type="password"
                        v-model="signUpForm.verifyPassword"
                        required
                        placeholder="Verify password">
          </b-form-input>
        </b-form-group>
      </b-form>
    </b-modal>

    <!-- Public View Modal -->
    <div v-if="!user">
      <about-me></about-me>
      <fitness-plans></fitness-plans>
      <contact-me></contact-me>
      <videos></videos>
    </div>

    <!-- User View Modal -->
    <div v-if="userData">
      <user-form :userData=userData></user-form>
      <user-update :userData=userData></user-update>
    </div>

    <!-- Bottom Navbar -->
    <b-navbar fixed="bottom" type="dark" variant="success">
      <b-navbar-nav>
        <b-nav-text>Produced and Powered by <strong>B Jones</strong></b-nav-text>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import aboutMe from "./components/aboutMe.vue"
import fitnessPlans from "./components/fitnessPlans.vue"
import videos from "./components/videos.vue"
import contactMe from "./components/contactMe.vue"
import userForm from "./components/userForm.vue"
import userUpdate from "./components/userUpdate.vue"

import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyAatQUSpNY6nhueZD7dEt7rfHs0_kwuubc",
  authDomain: "haughton-fit.firebaseapp.com",
  databaseURL: "https://haughton-fit.firebaseio.com",
  projectId: "haughton-fit",
  storageBucket: "",
  messagingSenderId: "1069945483539"
}
var firebaseApp = firebase.initializeApp(config)
var db = firebaseApp.database()

export default {
    components: {
    'about-me': aboutMe,
    'fitness-plans': fitnessPlans,
    'videos': videos,
    'contact-me': contactMe,
    'user-form': userForm,
    'user-update': userUpdate
  },
  data () {
    return {
      user: null,
      userData: null,
      logInForm: {
        email: '',
        password: ''
      },
      signUpForm: {
        email: '',
        password: '',
        verifyPassword: '',
        firstName: '',
        lastName: ''
      }
    }
  },
  methods: {
    getUserData: function (user) {
      return new Promise(function(resolve, reject) {
        firebase.database().ref('/users/' + user.uid).once('value')
        .then(function(snapshot) {
          resolve(snapshot.val())
        })
        .catch(function(err) {
          reject(err)
        })
      })
    },
    addUser: function (user) {
      var data = {
        firstName: this.signUpForm.firstName,
        lastName: this.signUpForm.lastName,
        email: user.email,
        birthday: null,
        gender: null
      }

      var updates = {}
      updates['/users/' + user.uid] = data

      return firebase.database().ref().update(updates)
    },
    signUpWithEmailAndPassword: function () {
      var self = this

      if (self.signUpForm.password !== self.signUpForm.verifyPassword) {
        self.resetSignUpForm()
      } else {
        firebase.auth().createUserWithEmailAndPassword(self.signUpForm.email, self.signUpForm.password)
        .then(function(user) {
          console.log(user)
          self.user = user
          self.addUser(user)
          self.resetSignUpForm()
          self.getUserData(user)
            .then(function(response) {
              self.userData = response
              console.log(self.userData)
            })
            .catch(function(error) {
              console.log(err)
            })
        })
        .catch(function(error) {
          console.log(error)
        })
      }
    },
    resetSignUpForm: function () {
      this.signUpForm = {
        email: '',
        password: ''
      }
    },
    resetUser: function () {
      this.user = this.userData = null
    },
    logOut: function () {
      this.resetUser()
      this.resetLoginForm()
    },
    resetLoginForm: function () {
      this.logInForm = {
        email: '',
        password: ''
      }
    },
    signInWithEmailAndPassword: function () {
      var self = this

      firebase.auth().signInWithEmailAndPassword(self.logInForm.email, self.logInForm.password)
      .then(function(firebaseUser) {
        self.user = firebaseUser

        self.getUserData(firebaseUser)
          .then(function(userData) {
            self.userData = userData
          })
          .catch(function(error) {
            console.log(error)
          })
      })
      .catch(function(error) {
        console.log(error)
      })
    }
  },
  beforeCreate: function() {

  },
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Rajdhani');
  @import url('https://fonts.googleapis.com/css?family=Jura');

  b-modal {
    position: absolute;
    width: 100%
  }

  button.navbar-toggler {
    background-color: white;
  }

  .nav {
    font-family: Rajdhani;
    padding: 1%;
  }
  .logo {
    font-size: 4vh;
  }
  .item {
    color: red;
    font-size: 50px;
  }
</style>

<!-- alert-1.vue -->
