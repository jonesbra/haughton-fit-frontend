<template>
  <div>
    <b-container class="section">
      <b-row><b-col><div class="header">Contact Me</div></b-col></b-row>
      <b-row class="body">
        <b-col>
          Feel free to send me a comment addressing any questions, issues, or concerns you have. Just fill
          out the form below, and I will receive an email with your comment.
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
                              size="sm"
                              @input="commentChange">
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
                              size="sm"
                              @input="commentChange">
                </b-form-input>
              </b-form-group>

            </b-form>
          </b-col>

          <b-col style="text-align: left">
            <b-form-group id="textarea1"
                          label="Comment:"
                          label-for="textarea1"
                          style="height: 100%">
              <b-form-textarea id="textarea1"
                               v-model="commentForm.comment"
                               placeholder="Enter your comment"
                               :rows="3"
                               :max-rows="6"
                               size="sm"
                               style="position: absolute; height: 80%; max-width: 70%"
                               @input="commentChange">
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
        <b-row>
          <b-col>
            <b-button style="width: 75%" variant="primary" size="sm" @click="sendComment" :disabled="!(validComment)">Submit</b-button>
          </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
const urljoin = require('url-join')
const backendUrl = 'http://localhost:3000'

export default {
  data () {
    return {
      validComment: false,
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
    commentChange: function () {
      this.validateCommentForm()
    },
    validateCommentForm: function () {
      for (var key in this.commentForm) {
        if (!(this.commentForm[key].trim())) {
          this.validComment = false
          return
        }
      }
      this.validComment = true
    },
    sendComment () {
      var self = this

      var url = urljoin(backendUrl, 'email', 'comment')
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
      for (var key in this.commentForm) {
        this.commentForm[key] = ''
      }
      this.commentChange()
    }
  }
}
</script>
