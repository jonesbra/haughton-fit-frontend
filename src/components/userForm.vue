<template>
  <div style="margin-top: 5vh">
    <b-container style="max-width: 90%; margin: auto">
        <b-row>
            <b-col style="font-family: Rajdhani; font-size: 5vh; border-bottom: 1px solid black"> General Data </b-col>
        </b-row>
        <b-row style="margin-top: 2vh; text-align: left">
          <b-col>
            <b-form-group horizontal
                          :label-cols="2"
                          label-size="sm"
                          label="First Name:"
                          label-for="firstNameInput">
              <b-form-input id="firstNameInput" size="sm" v-model="userData.firstName" type="text"></b-form-input>
            </b-form-group>
            <b-form-group horizontal
                          :label-cols="2"
                          label-size="sm"
                          label="Gender:"
                          label-for="genderInput">
              <b-form-select v-model="userData.gender" size="sm" id="genderInput">
                <option :value="null" disabled>Please select an option</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </b-form-select>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group horizontal
                          :label-cols="2"
                          label-size="sm"
                          label="Last Name:"
                          label-for="lastNameInput">
              <b-form-input id="lastNameInput" size="sm" v-model="userData.lastName" type="text"></b-form-input>
            </b-form-group>

            <b-form-group horizontal
                          :label-cols="2"
                          label-size="sm"
                          label="Birthday:"
                          label-for="birthdayInput"
                          description="We only use your birthday to calculate your age">
              <b-form-input id="birthdayInput" size="sm" v-model="userData.birthday" type="date"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  props: ['userData'],
  data () {
    return {
      selected: ''
    }
  },
  methods: {

  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Rajdhani');
  @import url('https://fonts.googleapis.com/css?family=News+Cycle');

</style>

<!-- alert-1.vue -->
