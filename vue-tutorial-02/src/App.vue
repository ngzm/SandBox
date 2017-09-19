<template>
<div id="app">
  <myComponent v-bind:message="message"
    v-bind:custom-message="customMessage"
    v-bind:on-load="onChildLoaded"
    v-on:upVal="updateValue"
  />
</div>
</template>

<script>
import myComponent from './MyComponent.vue';

export default {
  data: function () {
    return {
      message: 'Hello World',
    };
  },
  computed: {
    customMessage: function() {
      return `This is Custom from ${this.message}`;
    },
  },
  methods: {
    updateValue: function(value) {
      this.message = value;
    },
    onChildLoaded: function (msg) {
      console.log(msg);
    },
  },
  components: { myComponent },
};
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
