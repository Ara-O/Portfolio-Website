export default function () {
  document.querySelector(".nextarrow").addEventListener("click", function () {
    document.querySelector(".bothprojects").style.transform =
      "translateX(-125vw)";
    document.querySelector(".project2").style.display = "flex";
  });
  document.querySelector(".backarrow").addEventListener("click", function () {
    document.querySelector(".bothprojects").style.transform = "translateX(0vw)";
    setTimeout(function () {
      document.querySelector(".project2").style.display = "none";
    }, 1000);
  });
}
