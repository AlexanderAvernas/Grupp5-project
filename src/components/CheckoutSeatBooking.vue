<script>
</script>

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
      <li class="booking__para--orders--list" v-for= "(appetizer, index) in $store.state.chosenAppetizers" :key="appetizer.id">
        <div class="booking__para--variables">
          <p class="booking__para">{{ appetizer }}</p>
        </div>
        <div class="booking__change">
          <p class="booking__para">{{$store.state.chosenAppetizersPrice[index]}}kr</p>
        </div>
      </li>
      <div class="booking__change minimum__width margin__top displayflex">
        <p class="booking__para border__bottom textdecor">Lägg Till/Ta Bort</p>
        <p class="booking__para">Total: {{$store.state.appetizerTotalPrice}}kr</p>
      </div>
    </div>
  </div>
  <h1 class="booking__title">Går våran quiz och få rabatt redan idag!</h1>
  <div class="button">
    <h1 class="booking__title button__title">quiza och få rabatt</h1>
  </div>

  <div class="booking__container height__third margin__bot--none">
    <h1 class="booking__title">personuppgifter:</h1>
    <div class="booking__para--container flexdirection">
      <div class="input__field--container">
        <p class="booking__para margin__fix">Förnamn:</p>

        <input
          type="text"
          required
          placeholder="Förnamn"
          name="Förnamn"
          class="cred__input"
        />

        <p class="booking__para margin__fix margin__fix--two">Efternamn:</p>

        <input
          type="text"
          required
          placeholder="Efternamn"
          name="Efternamn"
          class="cred__input length__fix--two"
        />
      </div>
      <div class="input__field--container pos__fix">
        <p class="booking__para margin__fix pos__fix--two">E-Mail:</p>

        <input
          type="email"
          required
          placeholder="E-Mail"
          name="E-Mail"
          class="cred__input length__fix margin__fix--three"
        />

        <p class="booking__para margin__fix margin__fix--two">Tel:</p>

        <input
          type="tel"
          required
          placeholder="Tel"
          name="Tel"
          class="cred__input"
        />
      </div>
    </div>
    <h1 class="booking__title position__fix--five">Betalningsmetod:</h1>
  </div>
  <div class="booking__container height__third margin__top--none color__fix">
    <div class="booking__container--checkboxes">
      <div class="checkbox">
        <div class="checkbox__container">
          <input type="checkbox" />
          <div class="checkbox__paras">
            <p class="checkbox__para para__top">swish</p>
            <p class="checkbox__para para__bot">Betala direkt</p>
          </div>
        </div>
        <div class="checkbox__method">
          <p class="method__para">0Kr</p>
          <img
            src="../assets/pics/swishlogo.png"
            class="image size__fix"
            alt=""
          />
        </div>
      </div>

      <div class="checkbox">
        <div class="checkbox__container">
          <input type="checkbox" />
          <div class="checkbox__paras">
            <p class="checkbox__para para__top">BANKÖVERFÖRING</p>
            <p class="checkbox__para para__bot">Betala direkt</p>
          </div>
        </div>
        <div class="checkbox__method">
          <p class="method__para">0Kr</p>
          <img
            src="../assets/pics/bankid logo.svg"
            class="image size__fix"
            alt=""
          />
        </div>
      </div>
      <div class="checkbox">
        <div class="checkbox__container">
          <input type="checkbox" />
          <div class="checkbox__paras">
            <p class="checkbox__para para__top">Klarna Faktura</p>
            <p class="checkbox__para para__bot">Ät nu - betala sen</p>
          </div>
        </div>
        <div class="checkbox__method">
          <p class="method__para">29Kr</p>
          <img src="../assets/pics/klarnalogo.jpg" class="image" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div class="button width__fix button__margin">
    <h1 class="booking__title button__title">Betala</h1>
  </div>
</template>
<style>
input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}

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
.button {
  width: 266px;
  height: 54px;
  background-color: #221109;
  border-radius: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #ad8e6d;
  margin-top: 20px;
}
.button__title {
  font-size: 18px;
  margin-bottom: 0;
}
.height__third {
  margin-top: 127px;
  height: 233px;
}
.cred__input {
  width: 100%;
  max-width: 185px;
  height: 25px;
  background: #d9d9d9;
  border-radius: 5px;
  border: none;
  margin-left: 5px;
}

.margin__fix {
  margin-top: 1rem;
}
.margin__fix--two {
  margin-left: 15px;
}
.input__field--container {
  display: flex;
  align-items: center;
}

.length__fix {
  width: 100%;
  max-width: 281px;
}
.pos__fix {
  position: relative;
  top: -15px;
}
.margin__fix--three {
  margin-left: 26px;
}
.length__fix--two {
  max-width: 215px;
}
.position__fix--five {
  position: relative;
  top: 80px;
}
.margin__top--none {
  margin-top: 0px;
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;
}
.margin__bot--none {
  margin-bottom: 0px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}
.color__fix {
  background: rgba(28, 28, 28, 0.7);
}
.booking__container--checkboxes {
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
}
.checkbox {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 17px;
}
.checkbox__paras {
  display: flex;
  flex-direction: column;
  margin-left: 21px;
}
.checkbox__para {
  margin: 0 !important;
  color: white;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 1px;

  font-style: normal;
  height: 15px;
}
.para__top {
  font-weight: normal;
  font-size: 18px;
  text-transform: uppercase;
}
.para__bot {
  font-size: 12px;
  margin-top: 5px !important;
}
.checkbox__container {
  display: flex;
}
.image {
  width: 40px;
  height: 40px;
}
.checkbox__method {
  display: flex;
  align-items: center;
}
.method__para {
  color: white;
  margin-right: 10px;
  font-weight: 400;

  letter-spacing: 1px;
  font-style: normal;
}
.width__fix {
  width: 130px;
}
.button__margin {
  margin-bottom: 170px;
}
</style>
