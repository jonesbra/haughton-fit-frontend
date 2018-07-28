<template>
  <div style="margin-top: 5vh">
    <b-container style="max-width: 90%; margin: auto">
        <b-row>
            <b-col style="font-family: Rajdhani; font-size: 4vh; border-bottom: 1px solid black"> Body Metrics </b-col>
        </b-row>

        <b-row style="margin-top: 2vh; text-align: left">
          <b-col>
            <b-form-group horizontal
                          :label-cols="2"
                          label-size="sm"
                          label="Body Weight:"
                          label-for="bodyWeightInput">
              <b-form-input id="bodyWeightInput" size="sm" @input="bodyWeightUpdate" v-model="userData.weight" type="number"></b-form-input>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group horizontal
                          :label-cols="2"
                          label-size="sm"
                          label="Body Fat:"
                          label-for="bodyFatInput">
              <b-form-input id="bodyFatInput" size="sm" @input="bodyFatUpdate" type="number"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row style="margin-top: 2vh">
            <b-col style="font-family: Rajdhani; font-size: 4vh; border-bottom: 1px solid black"> Comments </b-col>
        </b-row>

        <b-row style="margin-bottom: 2vh">
          <b-col style="font-family: News Cycle; margin-top: 2vh; font-size: 2.5vh; text-align: left">
            Please let me know if you have any comments on todays workout!
          </b-col>
        </b-row>

        <b-row>
          <b-col style="text-align: left">
            <b-form-group id="textarea1"
                          style="height: 20vh">
              <b-form-textarea id="textarea1"
                               v-model="commentForm.comment"
                               placeholder="Enter your comment"
                               :rows="3"
                               :max-rows="6"
                               size="sm"
                               style="height: 70%;">
              </b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row style="margin-bottom: 2vh">
            <b-col>
              <b-button variant="success" style="float: right" @click="update">Update</b-button>
            </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: ['user', 'userData', 'firebaseApp'],
  data () {
    return {
      selected: '',
      commentForm: {
        comment: ''
      }
    }
  },
  methods: {
    update: function () {
      var updates = {}
      updates['/users/' + this.user.uid] = this.userData

      console.log(this.firebaseApp)
      this.firebaseApp.database().ref().update(updates)
    },
    bodyWeightUpdate: function () {

    },
    bodyFatUpdate: function () {
      console.log('body fat update')
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Rajdhani');
  @import url('https://fonts.googleapis.com/css?family=News+Cycle');

</style>

<!-- alert-1.vue -->
