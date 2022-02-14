<template>
  <div style="display: block">
    <div class="blend">
      <iframe
        src="https://my.spline.design/untitled-29e7a58720caad55df89ef34c1581bbb/"
        frameborder="0"
        width="100%"
        height="100%"
      ></iframe>
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
            @click="scrollDown('contactme')"
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
    <h4 class="interaction-note">Interact with the demos to the left</h4>

    <!-- MAIN CAROUSEL -->

    <Carousel>
      <Slide v-for="slide in projects" :key="slide">
        <div class="carousel__item">
          <section class="carouselproject">
            <div class="iframes">
              <iframe
                width="1135px"
                height="750px"
                :src="slide.iframe"
                style="transform: scale(0.55) translate(-195px, -80px)"
                frameborder="0"
              ></iframe>
            </div>
            <div class="carouseldesc">
              <h3 style="font-size: 33px; margin-bottom: -1px">
                {{ slide.projectname }}
              </h3>
              <h3 class="languagesused">{{ slide.tools }}</h3>
              <div class="divider2"></div>
              <h3
                class="projectdesc"
                style="
                  width: 361px;
                  line-height: 28px;
                  font-weight: 100;
                  font-size: 20px;
                  text-align: left;
                "
              >
                {{ slide.desc }}
              </h3>
              <br />
              <div>
                <a :href="slide.demo" target="_blank"
                  ><mainbtn bgcolor="white" textcolor="black">Demo</mainbtn></a
                >
                <a :href="slide.github" target="_blank">
                  <mainbtn
                    bgcolor="white"
                    textcolor="black"
                    style="margin-left: 20px"
                    >Github</mainbtn
                  ></a
                >
              </div>
            </div>
          </section>
        </div>
      </Slide>
      <template #addons>
        <Pagination />
      </template>
    </Carousel>

    <!-- FOR SMALLER DISPLAYS -->

    <div class="bothprojects">
      <!-- First project -->
      <section class="project1" >
        <project
          githuburl="https://github.com/Ara-O/Anime_Finder"
          demourl="https://animesfinder.netlify.app/"
          iframeurl="https://animesfinder.netlify.app/"
          previewurl="project1-preview.png"
        >
          <template #projectname >Anime Finder</template>
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
        <project
          githuburl="https://github.com/Ara-O/Windows10-mock"
          demourl="https://windows10clone.netlify.app"
          iframeurl="https://windows10clone.netlify.app"
          previewurl="project2-preview.png"
        >
          <template #projectname>Windows 10 Clone</template>
          <template #toolsused>HTML | CSS | Javascript | Vue.js</template>
          <template #description>
            A clone of how Windows 10 looks like. From the lock screen and password page, to the home screen with moveable icons.
          </template>
        </project>
      </section>
      <!-- Third project -->
      <section class="project1">
        <project
          githuburl="https://github.com/Ara-O/Perishabl"
          demourl="https://hungry-yonath-796229.netlify.app"
          iframeurl="https://hungry-yonath-796229.netlify.app"
          previewurl="project3-preview.png"
        >
          <template #projectname>Perishabl</template>
          <template #toolsused>HTML | CSS | Javascript</template>
          <template #description>
            Simulated the landing page of a service designed to reduce food
            waste by alerting users whenever their grocery items are about to
            expire
          </template>
        </project>
      </section>
      <!-- FOURTH PROJECT -->
      <section class="project2">
        <project
          githuburl="https://github.com/Ara-O/Project_Fit"
          demourl="https://project-fit.netlify.app/"
          iframeurl="https://project-fit.netlify.app/"
          previewurl="project4-preview.png"
        >
          <template #projectname>Project Fit</template>
          <template #toolsused>HTML | CSS | Javascript| Vue.js</template>
          <template #description>
            Project Fit is a website that can be used to generate random exercises with sets and repetitions.
            The advanced variation provides the user to provide an option of selecting their rest time, number of exercises, and difficulty.
          </template>
        </project>
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
// import arrowClickHandle from "../modules/handleArrowClick";
import indicatorHandle from "../modules/handleIndicators";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";

export default {
  name: "Home",
  components: {
    mainbtn,
    project,
    contactpage,
    aboutme,
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      projects: [
        {
          iframe: "https://animesfinder.netlify.app/",
          projectname: "Anime Finder",
          tools: "HTML | CSS | Javascript | Vue.js",
          desc: "Used the Vue.js CLI, Javascript, and various API calls, to create a site where users can search for, and read more aboutdifferent anime shows",
          demo: "https://animesfinder.netlify.app",
          github: "https://github.com/Ara-O/Anime_Finder",
        },
         {
          iframe: "https://windows10clone.netlify.app",
          projectname: "Windows 10 Clone",
          tools: "HTML | CSS | Javascript | Vue.js",
          desc: " A clone of how Windows 10 looks like. From the lock screen and password page, to the home screen with moveable icons.",
          demo: "https://windows10clone.netlify.app",
          github: "https://windows10clone.netlify.app",
        },
        {
          iframe: "https://hungry-yonath-796229.netlify.app",
          projectname: "Perishabl",
          tools: "HTML | CSS | Javascript",
          desc: "Simulated the landing page of a service designed to reduce food waste  by alerting users whenever their grocery items are about to expire ",
          demo: "https://hungry-yonath-796229.netlify.app",
          github: "https://github.com/Ara-O/Perishabl",
        },
        {
          iframe: "https://project-fit.netlify.app/",
          projectname: "Project Fit",
          tools: "HTML | CSS | Javascript | Vue.js",
          desc: "Project Fit is a website that can be used to generate random exercises with sets and repetitions.The advanced variation provides the user to provide an option of selecting their rest time, number of exercises, and difficulty.",
          demo: "https://project-fit.netlify.app/",
          github: "https://github.com/Ara-O/Project_Fit",
        }
      ],
    };
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
    // arrowClickHandle();
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
 