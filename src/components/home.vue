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
          <mainbtn
            bgcolor="#white"
            textcolor="black"
            btntext="Contact Me"
          ></mainbtn>
        </div>
      </div>
    </div>
    <div class="threedots">
      <div
        tabindex="6"
        class="indicator indicator one"
        data-scrollto="hero--header"
      ></div>
      <div tabindex="7" class="indicator two" data-scrollto="aboutme"></div>
      <div tabindex="8" class="indicator three" data-scrollto="aboutme"></div>
    </div>
  </div>
  <section class="aboutme">
    <div class="aboutme--left">
      <h2 class="aboutmetext">About Me</h2>
      <h4 class="aboutmedesc">
        I am a freshman studying Computer Science at the University of Detroit
        Mercy. I am passionate about Front-end development and UX/UI design. I
        have worked as a teaching assistant and have software development
        experience through various internships I have had with JOURNi,
        Accenture, Google, and the Kapor Center.I have experience with HTML, CSS
        ( and a little bit of SASS ), Javascript and Vue.js. Along with
        experience in firebase and squarespace
      </h4>
    </div>
    <div class="divider-div">
      <div class="divider"></div>
    </div>
    <div class="aboutme--right">
      <h2 style="font-size: 39px">TL;DR</h2>
      <h4 style="font-size: 21px">Name: Eyiara "Ara" Oladipo</h4>
      <h4 style="font-size: 21px">Age: 16 years old</h4>
      <h4 style="font-size: 21px">
        SKills: HTML | CSS | JS | Vue.js | Firebase
      </h4>
    </div>
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
  methods: {
    changeIndicator(prev, current) {
      document.querySelector("." + prev).style.background =
        "rgb(160, 160, 160)";
      document.querySelector("." + current).style.background = "#da0000";
    },
  },

  mounted() {
    const aboutmesect = document.querySelector(".aboutme");
    let options = {
      threshold: 0.5,
    };
    const that = this;

    let observer = new IntersectionObserver(function (e) {
      if (e[0].isIntersecting) {
        // document.querySelector(".mainbtn-1").classList.add("minimized");
        that.changeIndicator("one", "two");
      }
      if (!e[0].isIntersecting) {
        // document.querySelector(".mainbtn-1").classList.remove("minimized");
        that.changeIndicator("two", "one");
      }
    }, options);
    observer.observe(aboutmesect);

    document.querySelectorAll(".indicator").forEach((circle) => {
      circle.addEventListener("click", function () {
        console.log(circle.dataset.scrollto);
      });
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../styles/home.scss" lang="scss"></style>

<style scoped>
/* .mainbtn-1 {
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
} */

/* .minimized {
  transform: translate3d(26vw, 80vh, 0px) scale3d(0.85, 0.85, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
  position: fixed;
  bottom: 0;
} */
</style>
