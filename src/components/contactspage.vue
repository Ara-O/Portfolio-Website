<template>
  <main class="contactme" id="contactme">
    <section class="form-section">
      <h3 class="contactme">Contact Me</h3>
      <form>
        <label for="organization" class="label">Name/Organization</label>
        <input
          type="text"
          id="organization"
          class="organization"
          placeholder="Type Name/Organization"
        />
        <label for=" message" class="label">Message</label>
        <textarea
          type="text"
          id="message"
          class="message"
          placeholder="Send me a message"
        />
      </form>
      <br />
      <mainbtn bgcolor="red" textcolor="white" class="sendemail"
        >Send Message</mainbtn
      >
    </section>
    <section class="businesscard">
      <h3 style="font-size: 38px; letter-spacing: 0.7px">Eyiara Oladipo</h3>

      <h3 class="extras">Email: Oladipoeyiara@gmail.com</h3>

      <h3 class="extras">
        <a
          href="https://www.linkedin.com/in/eyiara-oladipo-2b5ba2180/"
          target="_blank"
          >LinkedIn: Oladipo Eyiara</a
        >
      </h3>
      <h3 class="extras">
        <a href="https://github.com/Ara-O" target="_blank">Github: Ara-O</a>
      </h3>
      <img
        src="../assets/aralogo--white_png.png"
        loading="lazy"
        alt="My logo"
        class="mylogo"
      />
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  height: 100vh;
  background: linear-gradient(85deg, black 80%, #454545 132%);
  color: white;
  display: flex;
  padding-top: 90px;
  column-gap: 250px;
}

.contactme {
  margin-top: 0px;
  font-size: 45px;
}

.form-section {
  margin-left: 194px;
}

.label {
  display: block;
  letter-spacing: 0.7px;
  font-size: 19px;
}

#organization {
  height: 55px;
  width: 314px;
  letter-spacing: 0.7px;
  margin-top: 17px;
  padding-left: 24px;
  font-size: 18px;
  margin-bottom: 30px;
}

#message {
  margin: 0px;
  width: 344px;
  padding: 24px;
  font-size: 19px;
  height: 156px;
  margin-top: 17px;
  letter-spacing: 0.7px;
}

.businesscard {
  margin-top: 9%;
  height: 285px;
  background: linear-gradient(45deg, #262626, #585858);
  width: 408px;
  border: solid 1px #474747;
  border-radius: 4px;
  padding: 20px 50px;
  overflow: hidden;
  position: relative;
  transform: rotate3d(92, 0, -81, 74deg);
  transition: all 750ms ease-in-out;
}

.businesscard:hover {
  transform: rotate3d(1, 1, 1, 360deg);
}
.extras {
  font-size: 21px;
  letter-spacing: 0.7px;
  font-weight: 100;
}

.mylogo {
  position: absolute;
  width: 242px;
  right: -43px;
  bottom: -5px;
  filter: contrast(6.5) brightness(3.5);
}

.businesscard h3 a {
  color: white;
  text-decoration: none;
  transition: all 500ms linear;
}

.businesscard h3 a:hover {
  text-decoration: underline;
}
@media (max-width: 1250px) {
  .contactme {
    display: none;
  }
}
</style>

<script>
import mainbtn from "../helpers/button.vue";
import emailjs from "emailjs-com";
export default {
  components: {
    mainbtn,
  },

  mounted() {
    emailjs.init("user_wE7Et0B04Z2GFOvM9I8vS");

    document.querySelector(".sendemail").addEventListener("click", function () {
      const organization = document.querySelector("#organization").value;
      const message = document.querySelector("#message").value;
      emailjs.send("service_w07j94a", "template_o0zl6j9", {
        from_name: organization,
        to_name: "Ara",
        message: message,
      });
    });
  },
};
</script>
