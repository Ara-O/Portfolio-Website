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
          <mainbtn bgcolor="#DA0000" textcolor="white">My Works</mainbtn>
          <mainbtn bgcolor="#white" textcolor="black">Contact Me</mainbtn>
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
        >Resume</mainbtn
      >
      <mainbtn
        bgcolor="linear-gradient(136deg, #790000, #da0000)"
        textcolor="white"
        style="margin-left: 20px"
        >View Contact Info</mainbtn
      >
    </div>
  </section>
  <section class="projects">
    <h2 style="font-size: 50px; text-align: center; margin-bottom: -8px">
      Projects
    </h2>
    <div class="bothprojects">
      <section class="project1">
        <project
          githuburl="https://github.com/Ara-O/Anime_Finder"
          demourl="https://animesfinder.netlify.app/"
          iframeurl="https://animesfinder.netlify.app/"
        >
          <template #projectname>Anime Finder</template>
          <template #toolsused>HTML | CSS | Javascript | Vue.js</template>
          <template #description>
            Used the Vue.js CLI, Javascript, and various API calls, to create a
            site where users can search for, and read more about different anime
            shows</template
          >
        </project>
      </section>
      <!-- Second project -->
      <section class="project2">
        <div class="iframes">
          <iframe
            width="1135px"
            height="750px"
            src="https://animesfinder.netlify.app/"
            style="transform: scale(0.55) translate(-195px, -80px)"
          ></iframe>
        </div>
        <div class="projectdescr">
          <img src="../assets/icons8-arrow-60.png" alt="" class="backarrow" />
          <h3 style="font-size: 33px; margin-bottom: -1px">Perishabl</h3>
          <h3>HTML | CSS | Javascript</h3>
          <div class="divider2"></div>
          <h3
            style="
              width: 361px;
              line-height: 28px;
              font-weight: 100;
              font-size: 20px;
            "
          >
            Used the Vue.js CLI, Javascript, and various API calls, to create a
            site where users can search for, and read more about different anime
            shows
          </h3>
          <br />
          <a href="https://animesfinder.netlify.app/" target="_blank"
            ><mainbtn bgcolor="white" textcolor="black">Demo</mainbtn></a
          >
          <mainbtn bgcolor="white" textcolor="black" style="margin-left: 20px"
            >Github</mainbtn
          >
        </div>
      </section>
    </div>
  </section>
</template>
<script>
import mainbtn from "../helpers/button.vue";
import project from "./projects";
export default {
  name: "Home",
  components: { mainbtn, project },
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
    let options = { threshold: 0.5 };
    const main = document.querySelector(".navbar");
    const projects = document.querySelector(".projects");
    const aboutmesect = document.querySelector(".aboutme");
    const that = this;

    let observer = new IntersectionObserver(function (e) {
      if (e[0].isIntersecting) {
        that.changeIndicator("two");
      }
    }, options);
    observer.observe(aboutmesect);

    let observer3 = new IntersectionObserver(function (e) {
      if (e[0].isIntersecting) {
        that.changeIndicator("one");
      }
    }, options);
    observer3.observe(main);

    let observer2 = new IntersectionObserver(function (e) {
      if (e[0].isIntersecting) {
        that.changeIndicator("three");
      }

      if (!e[0].isIntersecting) {
        that.changeIndicator("two");
      }
    }, options);

    observer2.observe(projects);

    document.querySelectorAll(".indicator").forEach((circle) => {
      circle.addEventListener("click", function () {
        console.log(circle.dataset.scrollto);
      });
    });
    // NEXT PROJECT

    document.querySelector(".nextarrow").addEventListener("click", function () {
      document.querySelector(".bothprojects").style.transform =
        "translateX(-122vw)";
    });
    document.querySelector(".backarrow").addEventListener("click", function () {
      document.querySelector(".bothprojects").style.transform =
        "translateX(0vw)";
    });

    const tldr = document.querySelector(".aboutme--right");
    const aboutme = document.querySelector(".aboutme--left");
    let observer4 = new IntersectionObserver(
      function (e) {
        if (e[0].isIntersecting) {
          aboutme.classList.add("slide");
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer4.observe(tldr);
  },
};
</script>
<style src="../styles/home.scss" lang="scss"></style>
