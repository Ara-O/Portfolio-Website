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
    <div class="divider-div"><div class="divider"></div></div>
    <div class="aboutme--right">
      <h2 style="font-size: 39px">TL;DR</h2>
      <h4 class="tldr">Name: Eyiara "Ara" Oladipo</h4>
      <h4 class="tldr">Age: 16 years old</h4>
      <h4 class="tldr">Skills: HTML | CSS | JS | Vue.js | Firebase</h4>
      <h4 class="tldr">Interests: UX/UI design, Front End development</h4>
      <br />
      <mainbtn
        bgcolor="linear-gradient(126deg, black, rgb(102 102 102))"
        textcolor="white"
        btntext="Resume"
      ></mainbtn>
      <mainbtn
        bgcolor="linear-gradient(136deg, #790000, #da0000)"
        textcolor="white"
        btntext="View Contact Info"
        style="margin-left: 20px"
      ></mainbtn>
    </div>
  </section>
  <section class="projects">
    <h2 style="margin-top: 0px">Projects</h2>
    <div class="bothprojects">
      <section class="project1">
        <div class="iframes">
          <iframe
            width="1181px"
            height="650px"
            src="https://animesfinder.netlify.app/"
            style="transform: scale(0.75) translate(-195px, -80px)"
          ></iframe>
        </div>
        <div class="projectdescr"></div>
      </section>
      <section class="project2"></section>
    </div>
  </section>
</template>
<script>
import mainbtn from "../helpers/button.vue";
export default {
  name: "Home",
  components: { mainbtn },
  data() {
    return {};
  },

  methods: {
    changeIndicator(current) {
      document.querySelectorAll(".indicator").forEach((circle) => {
        circle.style.background = "rgb(160, 160, 160)";
      });
      document.querySelector("." + current).style.background = "#da0000";
    },
  },

  mounted() {
    const main = document.querySelector(".navbar");
    let observer3 = new IntersectionObserver(function (e) {
      if (e[0].isIntersecting) {
        that.changeIndicator("one");
      }
    }, options);

    observer3.observe(main);

    //----------

    const aboutmesect = document.querySelector(".aboutme");
    let options = { threshold: 0.5 };
    const that = this;
    let observer = new IntersectionObserver(function (e) {
      if (e[0].isIntersecting) {
        that.changeIndicator("two");
      }
    }, options);

    observer.observe(aboutmesect);
    document.querySelectorAll(".indicator").forEach((circle) => {
      circle.addEventListener("click", function () {
        console.log(circle.dataset.scrollto);
      });
    });

    // --------

    const projects = document.querySelector(".projects");
    let options2 = { threshold: 0.5 };
    let observer2 = new IntersectionObserver(function (e) {
      if (e[0].isIntersecting) {
        that.changeIndicator("three");
      }

      if (!e[0].isIntersecting) {
        that.changeIndicator("two");
      }
    }, options2);

    observer2.observe(projects);
  },
};
</script>
<style src="../styles/home.scss" lang="scss"></style>
