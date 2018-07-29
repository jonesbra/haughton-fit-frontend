<template>
  <div>
    <b-container class="section">
      <b-row><b-col><div class="header">Fitness Plans</div></b-col></b-row>

        <b-row>
          <b-col style="font-family: News Cycle; margin-top: 2vh; font-size: 2.5vh; text-align: left">
            Check out some of my plans! They are each 19.99 and can help you reach all of your fitness goals. I have three different options, each that are developed with a specific goal in mind.
          </b-col>
        </b-row>

        <b-row style="margin-top: 3vh">
          <b-col style="margin-bottom: 2.5vh">
            <b-card  bg-variant="white" text-variant="dark" header="Bodybuilding Program" header-bg-variant="light" class="program"
              header-border-variant="success"
              img-src="./src/assets/pullup.jpg"
              img-alt="Image"
              img-top>
              <p class="card-text" style="text-align: left; font-size: 2vh">
                This program is designed to get you <strong>BIG AND LEAN</strong>. All workouts are designed around
                the idea of building muscle, and burning fat.
              </p>
              <b-btn v-b-modal.modal1 variant="success" @click="planForm.selectedPlan='Bodybuilding'" style="font-family: Jura">Start Here</b-btn>
            </b-card>
          </b-col>

          <b-col style="margin-bottom: 2.5vh">
            <b-card  bg-variant="white" text-variant="dark" header="Powerlifting Program" header-bg-variant="light" class="program"
              header-border-variant="success"
              img-src="./src/assets/seatedPress.jpg"
              img-alt="Image"
              img-top>
              <p class="card-text" style="text-align: left; font-size: 2vh">
                This program will be focused on <strong>BUILDING YOUR STRENGTH</strong>. These workouts do not focus on building muscle
                as much as they do for building strength.
              </p>
              <b-btn v-b-modal.modal1 variant="success" @click="planForm.selectedPlan='Powerlifting'" style="font-family: Jura">Start Here</b-btn>
            </b-card>
          </b-col>

          <b-col>
            <b-card  bg-variant="white" text-variant="dark" header="Hybrid Program" header-bg-variant="light" class="program"
              header-border-variant="success"
              img-src="./src/assets/dip.jpg"
              img-alt="Image"
              img-top>
              <p class="card-text" style="text-align: left; font-size: 2vh">
                I have designed hybrid programs that will focus on both <strong>BUILDING MUSCLE AND STRENGTH</strong>. If you want to build muscle and get
                strong, this is the program for you!
              </p>
              <b-btn v-b-modal.modal1 variant="success" @click="planForm.selectedPlan='Hybrid'" style="font-family: Jura">Start Here</b-btn>
            </b-card>
          </b-col>
        </b-row>

        <b-modal id="modal1" :title="planForm.selectedPlan + ' Program'" style="text-align: left" size="lg" ok-title="Submit" @ok="sendPlan">
          <p class="my-4">
            This is the {{ planForm.selectedPlan }} program.
            <br><br>
            All programs are custom designed by me to maximize your fitness progress.
            Please enter the following information so that I may review it. Once you submit, I will receive an email
            that contains your information and I will get in touch with you!
          </p>

          <b-row style="font-size: 2.5vh; font-family: Rajdhani; margin-top: 2vh">
            <b-col>
              <b-form>
                <b-form-group id="group1"
                              label="Email address:"
                              label-for="emailInput"
                              description="We'll never share your email with anyone else.">
                  <b-form-input id="emailInput"
                                type="email"
                                v-model="planForm.email"
                                required
                                placeholder="Enter email"
                                size="lg">
                  </b-form-input>
                </b-form-group>

                <b-form-group id="group2"
                              label="Your Name:"
                              label-for="nameInput">
                  <b-form-input id="nameInput"
                                type="text"
                                v-model="planForm.name"
                                required
                                placeholder="Enter name"
                                size="lg">
                  </b-form-input>
                </b-form-group>

                <b-form-group id="group3"
                              label="Your Phone Number:"
                              label-for="numberInput">
                  <b-form-input id="numberInput"
                                type="text"
                                v-model="planForm.number"
                                required
                                placeholder="Enter Phone"
                                size="lg">
                  </b-form-input>
                </b-form-group>
              </b-form>
            </b-col>
          </b-row>
        </b-modal>
    </b-container>
  </div>
</template>

<script>
const urljoin = require('url-join')
const backendUrl = 'http://localhost:3000'

export default {
  data () {
    return {
      planForm: {
        email: '',
        name: '',
        number: '',
        selectedPlan: null
      },
      showSuccess: false,
      showFailure: false
    }
  },
  methods: {
    sendPlan () {
      var self = this

      var url = urljoin(backendUrl, 'email', 'plan')
      self.$http.post(url, self.planForm).then(response => {
        console.log('RESPONSE (GET):' + response.body)
        self.showSuccess = true
      }, response => {
        console.log('ERROR (GET): ' + url)
        self.showFailure = true
      })

      self.resetPlanForm()
    },

    resetPlanForm () {
      this.planForm.email = this.planForm.name = this.planForm.number = ''
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Rajdhani');
  @import url('https://fonts.googleapis.com/css?family=News+Cycle');

  .program {
    box-shadow: 1vh 1vh grey;
    font-family: Rajdhani;
    height: 90vh;
  }

</style>

<!-- alert-1.vue -->
