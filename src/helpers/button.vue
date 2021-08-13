<template>
  <button class="mainbtn" :style="{ background: bgcolor, color: textcolor }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "mainbtn",
  props: ["bgcolor", "textcolor"],
};
</script>

<style lang="scss" scoped>
.mainbtn {
  height: 46px;
  font-size: 17px;
  border: none;
  width: auto;
  font-family: "Agency FB";
  padding: 0px 25px;
  cursor: pointer;
  transition: all 1s ease-in-out;
}
</style>
