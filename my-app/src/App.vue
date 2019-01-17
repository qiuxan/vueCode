<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <message>Hello there</message>

  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Message from './components/Message.vue'

export default {
  name: 'app',
  components: {
      Message

  }
}
</script>

<style>

</style>
