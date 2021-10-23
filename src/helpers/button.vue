<template>

 
  <!-- Setting the main color variable to the background color
so that the color of the hover effect is based on the button's background -->
  <button
    class="mainbtn"
    :style="{
      background: bgcolor,
      color: textcolor,
      '--maincolor': bgcolor,
    }"
  >
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
:root {
  --maincolor: rgb(218, 0, 0);
}

@mixin psuedostyle {
  content: "";
  position: absolute;
  height: 15px;
}

.mainbtn {
  height: 46px;
  font-size: 17px;
  border: none;
  width: auto;
  font-family: "Agency FB";
  padding: 0px 25px;
  letter-spacing: 0.7px;
  cursor: pointer;
  transition: all 1s ease-in-out;
  position: relative;
}

.mainbtn::after {
  @include psuedostyle;
  top: 0px;
  width: 15px;
  right: 0px;
  border: solid 0px var(--maincolor);
  transition: all 100ms ease-in-out;
}
.mainbtn::before {
  @include psuedostyle;
  left: -1px;
  top: 31px;
  width: 15px;
  border: solid 0px var(--maincolor);
  transition: all 100ms ease-in-out;
}
.mainbtn:hover::before {
  @include psuedostyle;
  border: solid 1px var(--maincolor);
  width: 15px;
  left: -4.1px;
  top: 35px;
  border-right: none;
  border-top: none;
}
.mainbtn:hover::after {
  @include psuedostyle;
  border: solid 1px var(--maincolor);
  top: -4.1px;
  width: 15px;
  right: -4.3px;
  border-left: none;
  border-bottom: none;
}
</style>