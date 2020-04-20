<template>
  <div id="app">
    <div @click="go(index)" v-for="(item, index) in 3">页面{{index}}</div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    go(index) {
      if (index == 0) {
        this.$router.push('/')
      } else {
        this.$router.push('/HelloWorld' + index)
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
