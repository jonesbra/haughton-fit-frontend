<template>
  <div style="margin-top: 10vh">
    <b-container style="max-width: 90%; margin: auto">
        <b-row>
            <b-col style="font-family: Rajdhani; font-size: 5vh; border-bottom: 1px solid black"> Contact Me </b-col>
        </b-row>

        <b-row style="margin-top: 2vh">
          <b-col style="text-align: left; font-family: News Cycle; font-size: 2.5vh">
            <p>
              Feel free to send me a comment addressing any questions, issues, or concerns you have. Just fill
              out the form below, and I will receive an email with your comment.
            </p>
          </b-col>
        </b-row>

        <b-row style="font-size: 2.5vh; font-family: Rajdhani; margin-top: 2vh">
          <b-col style="text-align: left">
            <b-form>
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

              <b-button variant="primary" size="lg" @click="sendComment">Submit</b-button>
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

        <b-row style="margin-top: 2vh">
          <b-alert variant="success"
                   dismissible
                   :show="showSuccess"
                   style="width: 100%"
                   @dismissed="showSuccess=false">
            Comment Submitted!
          </b-alert>
          <b-alert variant="danger"
                   dismissible
                   :show="showFailure"
                   style="width: 100%"
                   @dismissed="showFailure=true">
            Failed to submit comment!
          </b-alert>
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
        comment: ''
      },
      showSuccess: false,
      showFailure: false
    }
  },
  methods: {
    sendComment () {
      var self = this

      var url = 'http://138.197.3.36:3000/email/comment'
      self.$http.post(url, self.commentForm).then(response => {
        console.log('RESPONSE (GET):' + response.body)
        self.showSuccess = true
      }, response => {
        console.log('ERROR (GET): ' + url)
        self.showFailure = true
      })

      self.resetCommentForm()
    },

    resetCommentForm () {
      this.commentForm.email = this.commentForm.name = this.commentForm.comment = ''
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Rajdhani');
  @import url('https://fonts.googleapis.com/css?family=News+Cycle');

</style>

<!-- alert-1.vue -->
