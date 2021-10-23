export default function () {
  let options = { threshold: 0.5 };
  const main = document.querySelector(".navbar");
  const projects = document.querySelector(".projects");
  const aboutmesect = document.querySelector(".aboutme");
  const contactme = document.querySelector(".contactme");
  const that = this;
  // Code could be better
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
  }, options);

  observer2.observe(projects);

  let observer5 = new IntersectionObserver(function (e) {
    if (e[0].isIntersecting) {
      that.changeIndicator("four");
    }
  }, options);

  observer5.observe(contactme);

  document.querySelectorAll(".indicator").forEach((circle) => {
    circle.addEventListener("click", function () {
        document.querySelector("." + circle.dataset.scrollto).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
