<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/beer.jpg">
    <h1>Choose your beer</h1>
    <button @click="GET_BEER_FROM_API">
      Click
    </button>
    <p>And then look it up on your personal page</p>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex'
export default {
  name: 'HomeView',
  methods: {
    ...mapActions([
      'GET_BEER_FROM_API'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .home{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
