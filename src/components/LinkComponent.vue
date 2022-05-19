/*компонент для ссылки */
<template>
  <a
    href="#"
    class="main__link"
    v-bind:class="[anotherClass]"
    v-on:click="$emit('handleClick', $event)"
  >
    <span v-bind:id="[id]">{{ title }}</span>
  </a>
</template>

<script>
export default {
  name: "LinkComponent",
  props: {
    title: String,
    anotherClass: String,
    id: String,
  },
  emits: ["handleClick"],
};
</script>

<style scoped lang="scss">
@import "../assets/styles/vars.scss";

.main__link {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: 500;

  color: $denim;

  :hover {
    color: #f90;
  }
  :visited {
    color: $steel;
  }
}
</style>
