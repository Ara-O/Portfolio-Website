<template>
  <div class="iframes">
    <img
      :src="showPreview(`${previewurl}`)"
      alt="Project 1 Anime finder example"
      class="project1image"
    />
    <iframe
      width="1135px"
      height="750px"
      :src="iframeurl"
      style="transform: scale(0.55) translate(-195px, -80px)"
      tabindex="-1"
      frameborder="0"
    ></iframe>
  </div>
  <div class="projectdescr">
    <img src="../assets/icons8-arrow-60.png" alt="" class="nextarrow" />
    <h3 style="font-size: 33px; margin-bottom: -1px;">
      <slot name="projectname"></slot>
    </h3>
    <h3 style="letter-spacing: 0.7px" class="languagesused">
      <slot name="toolsused"></slot>
    </h3>
    <div class="divider2"></div>
    <h3
      style="width: 361px; line-height: 28px; font-weight: 100; font-size: 20px"
      class="projectdesc"
    >
      <slot name="description"></slot>
    </h3>
    <br />
    <a :href="demourl" target="_blank"
      ><mainbtn bgcolor="white" textcolor="black">Demo</mainbtn></a
    >
    <a :href="githuburl" target="_blank">
      <mainbtn bgcolor="white" textcolor="black" style="margin-left: 20px"
        >Github</mainbtn
      ></a
    >
  </div>
</template>

<script>
import mainbtn from "../helpers/button.vue";
export default {
  props: ["iframeurl", "demourl", "githuburl", "previewurl"],
  components: {
    mainbtn,
  },

  methods: {
    // Used to render image using props
    showPreview(img){
      return require(`../assets/${img}`)
    }
  }
};
</script>
