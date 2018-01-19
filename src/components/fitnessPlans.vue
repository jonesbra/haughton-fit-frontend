<template>
  <div style="margin-top: 10vh">
    <b-container style="max-width: 90%; margin: auto; font-size: 2.5vh">
        <b-row>
            <b-col style="font-family: Rajdhani; font-size: 5vh; border-bottom: 1px solid black"> Fitness Plans </b-col>
        </b-row>

        <b-row>
          <b-col style="font-family: News Cycle; margin-top: 2vh; font-size: 2.5vh; text-align: left">
            Check out some of my plans! They are each 19.99 and can help you reach all of your fitness goals. I have three different options, each that are developed with a specific goal in mind.
          </b-col>
        </b-row>

        <b-row style="margin-top: 3vh">
          <b-col style="margin-bottom: 2.5vh">
            <b-card  bg-variant="white" text-variant="dark" header="Bodybuilding Program" header-bg-variant="light" style="box-shadow: 1vh 1vh grey; font-family: Rajdhani"
              header-border-variant="success"
              img-src="./src/assets/Dillon1.png"
              img-alt="Image"
              img-top>
              <p class="card-text" style="text-align: left; font-size: 2vh">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <b-btn v-b-modal.modal1 variant="success" @click="planForm.selectedPlan='8'" style="font-family: Jura">Start Here</b-btn>
            </b-card>
          </b-col>

          <b-col style="margin-bottom: 2.5vh">
            <b-card  bg-variant="white" text-variant="dark" header="Powerlifting Program" header-bg-variant="light" style="box-shadow: 1vh 1vh grey; font-family: Rajdhani"
              header-border-variant="success"
              img-src="./src/assets/Dillon2.png"
              img-alt="Image"
              img-top>
              <p class="card-text" style="text-align: left; font-size: 2vh">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <b-btn v-b-modal.modal1 variant="success" @click="planForm.selectedPlan='16'" style="font-family: Jura">Start Here</b-btn>
            </b-card>
          </b-col>

          <b-col>
            <b-card  bg-variant="white" text-variant="dark" header="Hybrid Program" header-bg-variant="light" style="box-shadow: 1vh 1vh grey; font-family: Rajdhani"
              header-border-variant="success"
              img-src="./src/assets/Dillon3.png"
              img-alt="Image"
              img-top>
              <p class="card-text" style="text-align: left; font-size: 2vh">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <b-btn v-b-modal.modal1 variant="success" @click="planForm.selectedPlan='24'" style="font-family: Jura">Start Here</b-btn>
            </b-card>

            <b-modal id="modal1" :title="planForm.selectedPlan + ' Week Program'" style="text-align: left" size="lg" ok-title="Submit" @ok="sendPlan">
              <p class="my-4">
                This is the {{ planForm.selectedPlan }} week program. All programs are custom designed by me to maximize your fitness progress.
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
          </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>

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

      var url = 'http://localhost:3000/email/plan'
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

</style>

<!-- alert-1.vue -->
