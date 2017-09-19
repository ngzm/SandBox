import Vue from 'vue';
import myComponent from './my-component';

const helloApp = Vue.extend({
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
  template: `
    <myComponent v-bind:message="message"
      v-bind:custom-message="customMessage"
      v-bind:on-load="onChildLoaded"
      v-on:upVal="updateValue"
    />
  `,
  components: { myComponent },
});

new Vue({
  el: '#app',
  template: '<helloApp />',
  components: { helloApp },
});
