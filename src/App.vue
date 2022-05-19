<template>
  <MainComponent />
</template>

<style lang="scss">
@import "./assets/styles/vars.scss";

*,
:after,
:before {
  box-sizing: border-box;
}
body,
html,
#app {
  height: 100%;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  background: #fff;
  color: #000;
  min-height: 100%;
}
body,
hr {
  padding: 0;
}
</style>

<script>
import MainComponent from "@/components/MainComponent";

export default {
  name: "MainView",
  components: {
    MainComponent,
  },
};
</script>
