<template>
  <div id="app">
    <div>
    <ym-radio :label="1" v-model="value">备注1</ym-radio>
    <ym-radio :label="2" v-model="value">备注2</ym-radio>
    <ym-radio :label="3" v-model="value">备注3</ym-radio>
    <ym-radio :label="4" v-model="value" disabled>备注4</ym-radio>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
value: ''
    }
  }
  // components: {
  //   HelloWorld
  // }
}
</script>

<style lang="scss">
#box {
  p {
    color: red;
  }
  h1 {
    color: blue
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
