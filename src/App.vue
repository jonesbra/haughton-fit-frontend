<template>
  <div style="text-align: center; margin-bottom: 10vh">
    <b-navbar type="dark" style="height: 15vh; font-size: 3vh; background-color: black!important; opacity: 0.89; border-bottom: 5px solid #51BD4A">
      <b-navbar-brand href="#" style="font-size: 5vh">
        <img src="./assets/haughtonFitLogo.png" style="width: 30vh">
      </b-navbar-brand>
    </b-navbar>

    <!--
    <div style="text-align: center; background-color: #1D1D1D">
      <img src="./assets/dillonWideEdited.jpg" style="width: 90%; border-radius: 25px; margin: 2vh">
    </div>
    -->

    <about-me></about-me>
    <fitness-plans></fitness-plans>
    <contact-me></contact-me>
    <videos></videos>
  </div>
</template>

<script>
import aboutMe from "./components/aboutMe.vue"
import fitnessPlans from "./components/fitnessPlans.vue"
import videos from "./components/videos.vue"
import contactMe from "./components/contactMe.vue"

export default {
    components: {
    'about-me': aboutMe,
    'fitness-plans': fitnessPlans,
    'videos': videos,
    'contact-me': contactMe
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Rajdhani');

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
