<script></script>
<template>
  <div class="booking__container">
    <h1 class="booking__title">Bordsbokning:</h1>
    <div class="booking__para--container">
      <div class="booking__para--variables">
        <p class="booking__para">Bord: 3</p>
        <p class="booking__para">18:00</p>
        <p class="booking__para">17/3 - 2023</p>
      </div>
      <div class="booking__change">
        <p class="booking__para border__bottom textdecor">Ändra</p>
      </div>
    </div>
  </div>
  <div class="booking__container minimum__height">
    <h1 class="booking__title">beställning:</h1>
    <div class="booking__para--container flexdirection height__auto">
      <div class="booking__para--orders--list">
        <div class="booking__para--variables">
          <p class="booking__para">Lorem Ipsum</p>
        </div>
        <div class="booking__change">
          <p class="booking__para">00kr</p>
        </div>
      </div>
      <div class="booking__para--orders--list">
        <div class="booking__para--variables">
          <p class="booking__para">Lorem Ipsum</p>
        </div>
        <div class="booking__change">
          <p class="booking__para">00kr</p>
        </div>
      </div>
      <div class="booking__para--orders--list">
        <div class="booking__para--variables">
          <p class="booking__para">Lorem Ipsum</p>
        </div>
        <div class="booking__change">
          <p class="booking__para">00kr</p>
        </div>
      </div>
      <div class="booking__para--orders--list">
        <div class="booking__para--variables">
          <p class="booking__para">Lorem Ipsum</p>
        </div>
        <div class="booking__change">
          <p class="booking__para">00kr</p>
        </div>
      </div>

      <div class="booking__change minimum__width margin__top displayflex">
        <p class="booking__para border__bottom textdecor">Lägg Till/Ta Bort</p>
        <p class="booking__para">Total: 00kr</p>
      </div>
    </div>
  </div>
</template>
<style>
.displayflex {
  display: flex;
  justify-content: space-between;
}
.margin__top {
  margin-top: 15px;
}
.minimum__width {
  width: 100%;
}
.height__auto {
  height: auto !important;
}
.flexdirection {
  flex-direction: column;
}
h1,
p {
  cursor: default;
}
.textdecor {
  cursor: pointer;
}
.booking__container {
  border-radius: 10px;
  margin-bottom: 47px;
  width: 100%;
  max-width: 674px;
  height: 115px;
  background-color: #1c1c1c;
  padding-left: 32px;
  padding-top: 20px;
  padding-right: 32px;
}
.booking__title {
  font-size: 20px;
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  line-height: 25px;

  font-family: "Amiko";
  font-style: normal;
  letter-spacing: 1px;
  line-height: 27px;
}
.booking__para--container {
  width: 100%;
  max-width: 611px;
  height: 48px;
  display: flex;
  justify-content: space-between;
}
.booking__para {
  margin-top: 10px;
  color: white;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 1px;
  font-family: "Amiko";
  font-style: normal;
}
.booking__para--variables {
  display: flex;
  justify-content: space-between;
  width: 50%;
}
.border__bottom {
  border-bottom: 2px solid white;
}
.minimum__height {
  min-height: 275px;
  height: auto !important;
  padding-bottom: 20px;
}
.minimum__height--two {
  height: auto !important;
}
.booking__para--orders--list {
  display: flex;
  width: 100%;
  max-width: 611px;
  justify-content: space-between;
  height: 25px;
}
</style>
