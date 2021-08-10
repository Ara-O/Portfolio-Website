<template>
  <div style="display: block">
    <div class="blend">
      <img src="../assets/background.jpg" class="bg-img" />
    </div>
    <div class="hero--header">
      <div class="arrange">
        <h5 class="intro">Hi, I am</h5>
        <h3 class="name">
          Eyiara Olad<span><span class="letteri">i</span></span
          >po
        </h3>
        <h5 class="my--desc">
          Freshman at the University of Detroit Mercy studying Computer Science
        </h5>
        <div class="CTAS">
          <mainbtn
            bgcolor="#DA0000"
            textcolor="white"
            btntext="My Works"
          ></mainbtn>
          <button class="mainbtn-1">Contact Me</button>
        </div>
      </div>
    </div>
    <div class="threedots">
      <div tabindex="6" class="indicator indicator one"></div>
      <div tabindex="7" class="indicator two"></div>
      <div tabindex="8" class="indicator three"></div>
    </div>
  </div>
  <section class="aboutme">
    <div class="aboutme--left">
      <h2>About Me</h2>
      <h4>
        I am a freshman studying Computer Science at the University of Detroit
        Mercy. I am passionate about Front-end development and UX/UI design. I
        have worked as a teaching assistant and have software development
        experience through various internships I have had with JOURNi,
        Accenture, Google, and the Kapor Center.I have experience with HTML, CSS
        ( and a little bit of SASS ), Javascript and Vue.js. Along with
        experience in firebase and squarespace
      </h4>
    </div>
    <div></div>
  </section>
</template>

<script>
import mainbtn from "../helpers/button.vue";
export default {
  name: "Home",
  components: {
    mainbtn,
  },
  data() {
    return {};
  },

  mounted() {
    const aboutmesect = document.querySelector(".aboutme");
    let options = {
      threshold: 0.5,
    };

    let observer = new IntersectionObserver(function (e) {
      if (e[0].isIntersecting) {
        document.querySelector(".mainbtn-1").classList.add("minimized");
      }
      if (!e[0].isIntersecting) {
        document.querySelector(".mainbtn-1").classList.remove("minimized");
      }
    }, options);
    observer.observe(aboutmesect);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../styles/home.scss" lang="scss"></style>

<style scoped>
.mainbtn-1 {
  cursor: pointer;

  height: 46px;
  font-size: 17px;
  border: none;
  font-family: "Agency FB";
  position: sticky;
  top: 87px;
  left: 998px;
  z-index: 900;
  padding: 0px 25px;
  background: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: auto;
  flex: 0 auto;
  transition: all 1s ease;
  text-align: center;
}

.minimized {
  transform: translate3d(26vw, 80vh, 0px) scale3d(0.85, 0.85, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
  position: fixed;
  bottom: 0;
}
</style>
