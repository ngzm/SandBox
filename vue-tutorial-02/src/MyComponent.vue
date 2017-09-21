<template>
<section>
  <h2 class="my">my template</h2>
    <p>message : {{ message }}</p>
    <p>custom : {{ customMessage }}</p>
    <p><input :value="message" @input="upmes($event.target.value)"></p>
</section>
</template>

<script>
export default {
  props: ['message', 'customMessage', 'onLoad'],
  mounted: function () {
    this.onLoad('message from child!');
  },
  methods: {
    upmes: function(value) {
      this.onLoad(`value = ${value}`);
      this.$emit('upVal', value);
    },
  },
};
</script>

<style>
h2.my {
  color : blue;
}
</style>
