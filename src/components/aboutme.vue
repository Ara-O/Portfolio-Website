<template>
  <div class="aboutme--left">
    <h2 class="aboutmetext">About Me</h2>
    <h4 class="aboutmedesc">
      I am a sophomore studying Computer Science at the University of Detroit
      Mercy. I am passionate about Front-end development and UX/UI design. I
      have worked as a teaching assistant and have software development
      experience through various internships I have had with JOURNi, Accenture,
      Google, and the Kapor Center.I have experience with HTML, CSS ( and a
      little bit of SASS ), Javascript and Vue.js. Along with experience in
      Firebase and Squarespace
    </h4>
  </div>
  <div class="divider-div"><div class="divider"></div></div>
  <div class="aboutme--right">
    <h2 style="font-size: 39px">TL;DR</h2>
    <h4 class="tldr">Name: Eyiara "Ara" Oladipo</h4>
    <h4 class="tldr">Education Level: Sophomore</h4>
    <h4 class="tldr">Skills: HTML | CSS | JS | Vue.js | Firebase</h4>
    <h4 class="tldr">Interests: UX/UI design, Front End development</h4>
    <br />
    <a
      href="https://www.linkedin.com/in/eyiara-oladipo-2b5ba2180/"
      target="_blank"
    >
      <mainbtn
        bgcolor="linear-gradient(136deg, #790000, #da0000)"
        textcolor="white"
        >LinkedIn Profile</mainbtn
      >
    </a>
  </div>
</template>

<script>
import mainbtn from "../helpers/button.vue";

export default {
  components: { mainbtn },
};
</script>
