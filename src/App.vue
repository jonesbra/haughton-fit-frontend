<template>
  <div style="text-align: center">

    <!-- Main Navbar -->
    <b-navbar
      type="dark"
      variant="info"
      toggleable="md"
      v-if="showHeader"
      style="background-color: black; max-width: 100%; margin: 0"
      id="mainNavBar">

      <b-navbar-brand href="#" style="font-size: 5vh">
        <img src="./assets/haughtonFitLogo.png" style="height: 8vh">
      </b-navbar-brand>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item right><a href="#" @click="href(url.instagram)"><i class="fa fa-instagram"></i></a></b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item right><a href="#" @click="href(url.twitter)"><i class="fa fa-twitter"></i></a></b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item right><a href="#" @click="href(url.facebook)"><i class="fa fa-facebook"></i></a></b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <!-- Components -->
    <div class="main">
      <about-me></about-me>
      <fitness-plans></fitness-plans>
      <contact-me></contact-me>
    </div>

    <!-- Bottom Navbar -->
    <b-navbar fixed="bottom" type="dark" variant="success" v-if="showFooter">
      <b-navbar-nav>
        <b-nav-text>Produced and Powered by <strong>B Jones</strong></b-nav-text>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import aboutMe from "./components/aboutMe.vue"
import fitnessPlans from "./components/fitnessPlans.vue"
import contactMe from "./components/contactMe.vue"

var $ = require("jquery")

export default {
    components: {
    'about-me': aboutMe,
    'fitness-plans': fitnessPlans,
    'contact-me': contactMe
  },
  data () {
    return {
      url: {
        instagram: 'http://www.instagram.com/brandonj241',
        facebook: 'https://www.facebook.com/brandonj241',
        twitter: 'https://twitter.com/brandon_D3jones'
      },
      showFooter: false,
      showHeader: true,
      platform: this.getOS()
    }
  },
  methods: {
    href: function (url) {
      window.open(url)
    },
    getOS: function () {
      var userAgent = window.navigator.userAgent,
          platform = window.navigator.platform,
          macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
          windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
          iosPlatforms = ['iPhone', 'iPad', 'iPod'],
          os = null

      if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'Mac OS'
      } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'iOS'
      } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows'
      } else if (/Android/.test(userAgent)) {
        os = 'Android'
      } else if (!os && /Linux/.test(platform)) {
        os = 'Linux'
      }

      return os
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Rajdhani');
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
  @import url('https://fonts.googleapis.com/css?family=Jura');
  @import url('https://fonts.googleapis.com/css?family=Racing+Sans+One');

  .main {
    margin-bottom: 10vh;
  }

  .section {
    max-width: 90%;
    margin: auto;
  }

  .section .header {
    margin-top: 10vh;
    font-family: Rajdhani;
    font-size: 5vh;
    padding-bottom: 1vh;
    border-bottom: 1px solid black;
    width: 100%;
  }

  .section .body {
    font-family: News Cycle;
    margin-top: 2vh;
    font-size: 2.5vh;
    text-align: left;
  }

  .fa {
    font-size : 4vw;
    color: white;
    margin-right: 1vw;
  }

  .fa-instagram {
    color: #517fa4!important;
  }

  .fa-twitter {
    color: #00aced!important;
  }

  .fa-facebook {
    color: #3b5998!important;
  }

  #mainNavBar {
    height: 15vh;
    font-size: 3vh;
    background-color: black!important;
    opacity: 1;
  }
</style>

<!-- alert-1.vue -->
