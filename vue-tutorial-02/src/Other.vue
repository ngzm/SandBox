<template>
<section>
  <h2 class="other-app">other template</h2>
  <p>message : {{ message }}</p>
  <p>
    <router-link to="/other">lists</router-link>
    <router-link to="/other/detail">detail</router-link>
  </p>
  <div>
    <router-view></router-view>
  </div>
</section>
</template>

<script>
export default {
  data() { return { message: 'other Hello!!' }; },
};
</script>

<style>
h2.other-app {
  color: pink;
}
</style>
