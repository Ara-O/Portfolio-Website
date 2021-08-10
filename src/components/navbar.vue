<template>
  <nav id="nav">
    <ul class="navbar">
      <span>
        <div class="red"></div>
        <li>About Me</li>
      </span>
      <span>
        <div class="red"></div>
        <li>Skills</li>
      </span>
      <span>
        <div class="red"></div>
        <li>Contact Me</li>
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
  },
};
</script>
