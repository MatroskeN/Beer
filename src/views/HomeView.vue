<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/beer.jpg">
    <h1>Choose your beer</h1>
    <router-link to="/about">
      <button class="animate__animated animate__swing" @click="GET_BEER_FROM_API">
        Click
      </button>
    </router-link>
    <p>And then look it up on your personal page</p>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex'
import 'animate.css';
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
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
      max-width: 720px;
      width: 100%;
      padding: 0 10px;
      border-radius: 30px;
    }
    button{
      background: #42b983;
      border: 1px solid #2c2c2c;
      border-radius: 10px;
      font-size: 18px;
      color: #FFFFFF;
      padding: 5px 15px;
      cursor: pointer;
      transition: all 0.4s;
      &:hover{
        background: #FFFFFF;
        color: #42b983;
      }
      &:focus{
        background: #2c2c2c;
      }
    }
  }
</style>
