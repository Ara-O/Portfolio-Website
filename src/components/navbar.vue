<template>
  <nav id="nav">
    <ul class="navbar">
      <span>
        <div class="red"></div>
        <li tabindex="1" data-scrollto=".aboutme">About Me</li>
      </span>
      <span>
        <div class="red"></div>
        <li tabindex="2" data-scrollto=".projects">Projects</li>
      </span>
      <span>
        <div class="red"></div>
        <li tabindex="3" data-scrollto=".contactme">Contact Me</li>
      </span>
    </ul>
  </nav>
</template>

<style src="../styles/navbar.scss" lang="scss"></style>

<style scoped></style>
<script>
export default {
  mounted() {
    document.querySelectorAll("li").forEach((list) => {
      list.addEventListener("mouseover", function (e) {
        e.target.previousSibling.style.width = "40px";
      });
      list.addEventListener("mouseleave", function (e) {
        e.target.previousSibling.style.width = "23px";
      });
    });

    document.querySelector(".navbar").addEventListener("click", function (e) {
      document.querySelector(e.target.dataset.scrollto).scrollIntoView({
        behavior: "smooth",
      });
    });
  },
};
</script>
