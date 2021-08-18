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
            @click="scrollDown('projects')"
            >My Works</mainbtn
          >

          <mainbtn
            bgcolor="#white"
            textcolor="black"
            @click="scrollDown(contactme)"
            >Contact Me</mainbtn
          >
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
      <div tabindex="8" class="indicator three" data-scrollto="projects"></div>
      <div tabindex="9" class="indicator four" data-scrollto="contactme"></div>
    </div>
  </div>

  <section class="aboutme">
    <aboutme></aboutme>
  </section>
  <section class="projects" id="projects">
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
      <section class="project2" style="display: none">
        <div class="iframes">
          <img
            src="../assets/perishabl.png"
            alt="Project 2 Perishabl example"
            class="project1image project2image"
          />
          <iframe
            width="1135px"
            height="750px"
            src="https://hungry-yonath-796229.netlify.app"
            style="transform: scale(0.55) translate(-195px, -80px)"
            frameborder="0"
          ></iframe>
        </div>
        <div class="projectdescr">
          <img src="../assets/icons8-arrow-60.png" alt="" class="backarrow" />
          <h3 style="font-size: 33px; margin-bottom: -1px">Perishabl</h3>
          <h3 class="languagesused">HTML | CSS | Javascript</h3>
          <div class="divider2"></div>
          <h3
            class="projectdesc"
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

          <a href="https://hungry-yonath-796229.netlify.app" target="_blank"
            ><mainbtn bgcolor="white" textcolor="black">Demo</mainbtn></a
          >
          <a href="https://github.com/Ara-O/Perishabl" target="_blank">
            <mainbtn bgcolor="white" textcolor="black" style="margin-left: 20px"
              >Github</mainbtn
            ></a
          >
        </div>
      </section>
    </div>
  </section>
  <section class="contactsection">
    <contactpage></contactpage>
  </section>
</template>
<script>
import mainbtn from "../helpers/button.vue";
import contactpage from "./contactspage";
import project from "./projects";
import aboutme from "./aboutme";
import arrowClickHandle from "../modules/handleArrowClick";
import indicatorHandle from "../modules/handleIndicators";
export default {
  name: "Home",
  components: { mainbtn, project, contactpage, aboutme },
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

    scrollDown(section) {
      document.querySelector("#" + section).scrollIntoView({
        behavior: "smooth",
      });
    },
  },

  mounted() {
    arrowClickHandle();
    indicatorHandle.call(this);
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
