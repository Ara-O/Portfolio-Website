<template>
  <div>
    <div class="blend">
      <img src="../assets/background.jpg" class="bg-img" />
    </div>
    <div class="hero--header">
      <div class="arrange">
        <h5 class="intro">Hi, I am</h5>
        <h3 class="name">Eyiara Oladipo</h3>
        <h5 class="my--desc">
          Freshman at the University of Detroit Mercy studying Computer Science
        </h5>
        <div class="CTAS">
          <mainbtn
            bgcolor="#DA0000"
            textcolor="white"
            btntext="My Works"
          ></mainbtn>
          <mainbtn
            bgcolor="white"
            textcolor="black"
            btntext="Contact Me"
          ></mainbtn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mainbtn from "../helpers/button.vue";
export default {
  name: "Home",
  components: {
    mainbtn,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../styles/home.scss" lang="scss"></style>
