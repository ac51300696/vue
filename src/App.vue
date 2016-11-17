<template>
  <div id="app">
    <headercop></headercop>
    <footbar> </footbar> 
  </div>
</template>

<script>
import headercop from './components/headercop'
import footbar from './components/footbar'
export default {
  name: 'app',
  components: {
    headercop,
    footbar
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
}

</style>
