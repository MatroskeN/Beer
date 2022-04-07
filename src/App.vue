<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Personal Page</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
        'GET_USER_FROM_API'
    ])
  },
  mounted() {
    this.GET_USER_FROM_API()
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px 0;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    transition: all 0.4s;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
