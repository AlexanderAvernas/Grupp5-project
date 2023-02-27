<script setup>
import FooterPage from "../components/FooterPage.vue";
</script>
<template>
  <div class="main">
    <h1 class="landing-title">Lorem Ipsum</h1>
    <h2>Tack För Din Bokning!</h2>
    <p>Kvitto och bokningsbekräftelse har skickats till din e-post</p>
    <p>Vid frågor vänligen kontakta oss</p>
    <div id="contact-icons">
      <img
        class="logo"
        src="../assets/pics/logos/facebook.png"
        alt="facebook logo"
      />
      <img
        class="logo"
        src="../assets/pics/logos/insta.png"
        alt="instagram logo"
      />
      <img
        class="logo"
        src="../assets/pics/logos/tiktok.png"
        alt="tiktok logo"
      />
    </div>
  </div>
  <FooterPage />
</template>
<style scoped>
.main {
  background-image: url("../assets/pics/landing_page.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  text-align: center;
}
.landing-title {
  margin-bottom: 5rem;
  font-family: "Mrs Sheppards";
  font-style: normal;
  font-weight: 400;
  font-size: 7.5rem;
  line-height: 9.5rem;
  text-align: center;
  color: #fff;
  text-shadow: -8px 7px 4px #000000;
}
h2 {
  font-family: "Amiko", sans-serif;
  font-style: normal;
  font-weight: 400;
  color: #fff;
}
p {
  font-family: "Amiko", sans-serif;
  font-style: normal;
  font-weight: 400;
  color: #fff;
}

.contact-logo {
  width: 40vw;
  margin: auto;
}
.logo {
  max-height: 2rem;
  margin: 1rem;
}
</style>
