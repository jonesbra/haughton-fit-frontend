<template>
  <div style="text-align: center; margin-bottom: 10vh">

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
        <b-nav-item right><a href="#" @click="href(url.instagram)"><i class="fa fa-instagram" style="font-size : 5vw; color: white; margin-right: 1vw"></i></a></b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item right><a href="#" @click="href(url.twitter)"><i class="fa fa-twitter" style="font-size : 5vw; color: white; margin-right: 1vw"></i></a></b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item right><a href="#" @click="href(url.facebook)"><i class="fa fa-facebook" style="font-size : 5vw; color: white; margin-right: 1vw"></i></a></b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <!-- Public View -->
    <div class="mainBody">
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
    handleScroll: function () {
      //
      // Handle Header
      var disappearHeight = 150
      if (window.scrollY > disappearHeight) {
        this.showHeader = false
      } else {
        this.showHeader = true
        $('#mainNavBar').css('opacity', (disappearHeight - window.scrollY) / disappearHeight)
      }

      // Handle Footer
      if ((this.$el.clientHeight - window.scrollY) < 700 && (this.platform === 'Mac OS' || this.platform === 'Windows' || this.platform === 'Linux')) {
        this.showFooter = true
      } else if ((this.$el.clientHeight - window.scrollY) < 900 && (this.platform === 'Android' || this.platform === 'iOS')) {
        this.showFooter = true
      } else {
        this.showFooter = false
      }
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
  },
  beforeCreate: function() {

  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Rajdhani');
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
  @import url('https://fonts.googleapis.com/css?family=Jura');
  @import url('https://fonts.googleapis.com/css?family=Racing+Sans+One');

  b-modal {
    position: absolute;
    width: 100%
  }

  button.navbar-toggler {
    background-color: white;
  }

  #mainNavBar {
    height: 15vh;
    font-size: 3vh;
    background-color: black!important;
    margin-bottom: 100vh;
    opacity: 1;
  }

  .mainImage {
    position: relative;
    text-align: center;
  }

  .mainBody {
    margin-top: 10vh
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

  .centered {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .buttonLeft {
    margin: 1vw
  }
  .buttonRight {
    margin: 1vw
  }
</style>

<!-- alert-1.vue -->
