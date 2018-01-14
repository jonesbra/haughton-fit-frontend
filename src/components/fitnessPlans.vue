<template>
  <div style="margin-top: 10vh">
    <b-container style="max-width: 90%; margin: auto">
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
            <b-card  bg-variant="white" text-variant="dark" title="8 Weeks" style="box-shadow: 1vh 1vh grey">
              <p class="card-text" style="text-align: left; font-size: 2vh">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <b-btn v-b-modal.modal1 variant="primary">Start Here</b-btn>
            </b-card>

            <b-modal id="modal1" title="8 Week Program">
              <p class="my-4">Hello from modal!</p>
            </b-modal>
          </b-col>

          <b-col style="margin-bottom: 2.5vh">
            <b-card  bg-variant="white" text-variant="dark" title="16 Weeks" style="box-shadow: 1vh 1vh grey">
              <p class="card-text" style="text-align: left; font-size: 2vh">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <b-btn v-b-modal.modal2 variant="primary">Start Here</b-btn>
            </b-card>

            <b-modal id="modal2" title="16 Week Program">
              <p class="my-4">Hello from modal!</p>
            </b-modal>
          </b-col>

          <b-col>
            <b-card  bg-variant="white" text-variant="dark" title="24 Weeks" style="box-shadow: 1vh 1vh grey">
              <p class="card-text" style="text-align: left; font-size: 2vh">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <b-btn v-b-modal.modal3 variant="primary">Start Here</b-btn>
            </b-card>

            <b-modal id="modal3" title="24 Week Program">
              <p class="my-4">Hello from modal!</p>
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
