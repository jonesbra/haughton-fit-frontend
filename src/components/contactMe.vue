<template>
  <div style="margin-top: 10vh">
    <b-container style="max-width: 90%; margin: auto">
        <b-row>
            <b-col style="font-family: Rajdhani; font-size: 5vh; border-bottom: 1px solid black"> Contact Me </b-col>
        </b-row>

        <b-row style="margin-top: 2vh">
          <b-col style="text-align: left; font-family: News Cycle; font-size: 2.5vh">
            <p>
              Please let me know if you have any questions with this form!
              Please let me know if you have any questions with this form!
              Please let me know if you have any questions with this form!
              Please let me know if you have any questions with this form!
              Please let me know if you have any questions with this form!
              Please let me know if you have any questions with this form!
              Please let me know if you have any questions with this form!
            </p>
          </b-col>
        </b-row>

        <b-row style="font-size: 2.5vh; font-family: Rajdhani; margin-top: 2vh">
          <b-col style="text-align: left">
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <b-form-group id="exampleInputGroup1"
                            label="Email address:"
                            label-for="exampleInput1"
                            description="We'll never share your email with anyone else.">
                <b-form-input id="exampleInput1"
                              type="email"
                              v-model="commentForm.email"
                              required
                              placeholder="Enter email"
                              size="lg">
                </b-form-input>
              </b-form-group>

              <b-form-group id="exampleInputGroup2"
                            label="Your Name:"
                            label-for="exampleInput2">
                <b-form-input id="exampleInput2"
                              type="text"
                              v-model="commentForm.name"
                              required
                              placeholder="Enter name"
                              size="lg">
                </b-form-input>
              </b-form-group>

              <b-button type="submit" variant="primary" size="lg" @click="sendComment">Submit</b-button>
            </b-form>
          </b-col>

          <b-col style="text-align: left">
            <b-form-group id="textarea1"
                          label="Comment:"
                          label-for="textarea1">
              <b-form-textarea id="textarea1"
                               v-model="commentForm.comment"
                               placeholder="Enter your comment"
                               :rows="3"
                               :max-rows="6"
                               size="lg">
              </b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  data () {
    return {
      commentForm: {
        email: '',
        name: '',
        comment: '',
      },

      text: '',
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [
        { text: 'Select One', value: null },
        'Carrots', 'Beans', 'Tomatoes', 'Corn'
      ],
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    },

    sendComment () {
      var self = this

      var url = 'http://localhost:3000/email/comment'
      self.$http.post(url, self.commentForm).then(response => {
        console.log('RESPONSE (GET):' + response.body)
      }, response => {
        console.log('ERROR (GET): ' + url)
      })

    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Rajdhani');
  @import url('https://fonts.googleapis.com/css?family=News+Cycle');

</style>

<!-- alert-1.vue -->
