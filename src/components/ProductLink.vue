/*компонент для отображения ссылок на дополнительные товары */
<template>
  <a href="#" class="url--link">{{ linkText }}</a>
</template>

<script>
export default {
  name: "FooterComponent",
  props: {
    linkText: String,
  },
};
</script>

<style scoped lang="scss">
@import "../assets/styles/vars.scss";
</style>
