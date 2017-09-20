<template>
<div>
  <h1>Hellp App2</h1>
  <p>{{ message }}!!</p>
  <p>{{ customMessage }}!!</p>
</div>
</template>

<script>
export default {
  data() {
    return { message: 'Hello World' };
  },
  computed: {
    customMessage: function() {
      return `This is Custom from ${this.message}`;
    },
  },
};
</script>

<style>
h1 {
  color: red;
}
</style>
