<script setup>
import { RouterLink, RouterView } from "vue-router";
import OrderNote from "../components/OrderNote.vue";
import OrderMenu from "../components/OrderMenu.vue";
import Footer from "../components/FooterPage.vue";
</script>

<template>
  <div class="ordering-background">
    <div class="h1-container">
      <div id="h1"><h1>MENY</h1></div>
      <div id="description">
        <p>
          Här beställer ni den mat och dryck ni önskar för erat besök genom att
          trycka på plus-symbolen bredvid måltiden eller drycken i menyn.
        </p>
      </div>
    </div>
    <div class="content-container">
      <OrderMenu />
      <div class="ordering-setup">
        <OrderNote />
        <p>
          Önskas något mer under besöket så går det självklart bra att göra
          ytterligare beställningar med våra servitriser på plats.
        </p>
        <RouterLink to="/checkout"
          ><button id="ordering-btn">VIDARE TILL KASSAN</button></RouterLink
        >
      </div>
    </div>
    <Footer />
  </div>
  <RouterView />
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Amiko:wght@400;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap");

.ordering-background {
  background-image: url("../assets/pics/menu_page.jpg");
  background-position: top center;
  background-size: cover;
  background-attachment: fixed;
}

/* Rubrik */

.h1-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

#h1 {
  position: absolute;
  text-align: center;
  width: 305px;
  height: 61px;
  top: 62px;
  font-family: "Amiko", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 47px;
  color: #ffffff;
}

#description {
  position: absolute;
  width: 499px;
  top: 123px;
  font-family: "Amiko", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
}

/* Sidans innehåll */

.content-container {
  display: flex;
  justify-content: center;
  margin-top: 17rem;
  padding-bottom: 6rem;
}

/* Beställning */

.ordering-setup {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ordering-setup > p {
  width: 446px;
  color: #ffffff;
  font-family: "Amiko", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  margin-left: 1.5rem;
}

#ordering-btn {
  width: 247px;
  height: 54px;
  color: #ffffff;
  background-color: #221109;
  border: 2px solid #ad8e6d;
  border-radius: 27px;
  font-family: "Amiko" sans-serif;
  font-size: 18px;
  letter-spacing: 1px;
  margin-top: 1.5rem;
}

@media only screen and (max-width: 1100px) {
  .ordering-background {
    background-attachment: fixed;
  }
  .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

@media only screen and (max-width: 499px) {
  #description {
    width: auto;
    padding: 10px;
  }

  .ordering-setup > p {
    width: auto;
  }
}
</style>
