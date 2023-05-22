<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
}
</script>
<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
div,
input,
p,
i,
span,
h1,
h2,
h3,
h4 {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-style: normal;
  border: 0;
}
#app {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
</style>
