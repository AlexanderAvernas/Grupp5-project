<script>
import useValidate from "@vuelidate/core";
import { required, email, numeric, alpha } from "@vuelidate/validators";
export default {
  data() {
    return {
      date: this.$store.getters.date,
      time: this.$store.getters.time,
      guests: this.$store.getters.guests,
      v$: useValidate(),
      Förnamn: "",
      Efternamn: "",
      Email: "",
      Tel: "",

      shadow: "0 0 10px red",
    };
  },
  methods: {
    submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        alert("Form successfully submitted.");
      }
    },
  },
  validations() {
    return {
      Förnamn: { required, alpha },
      Efternamn: { required, alpha },
      Email: { required, email },
      Tel: { required, numeric },
    };
  },
};
</script>
<template>
  <div class="booking__container">
    <h1 class="booking__title">Bordsbokning:</h1>
    <div class="booking__para--container">
      <div class="booking__para--variables">
        <div v-if="$store.state.time && $store.state.date" class="v-if">
          <p class="booking__para">{{ $store.state.time }}</p>
          <p class="booking__para">Bord: {{}}</p>
          <p class="booking__para">{{ $store.state.date }}</p>
        </div>

        <div v-else class="v-else">
          <p class="booking__para">Bord: Välj</p>
          <p class="booking__para">Tid: Välj</p>
          <p class="booking__para">Datum: Välj</p>
        </div>
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
          <p class="booking__para">
            {{ $store.state.food.product.toString().split(",").join("\n") }}
          </p>
        </div>
        <div class="booking__change">
          <p class="booking__para">
            {{ $store.state.food.price.toString().split(",").join("\n") }}
          </p>
        </div>
      </div>

      <div class="booking__change minimum__width margin__top displayflex">
        <p class="booking__para border__bottom textdecor">Lägg Till/Ta Bort</p>
        <p class="booking__para">
          Total: {{ $store.state.food.price.reduce((a, b) => a + b, 0) }}kr
        </p>
      </div>
    </div>
  </div>
  <h1 class="booking__title">Går våran quiz och få rabatt redan idag!</h1>

  <RouterLink class="nav__link" to="/Quiz">
    <div class="button">
      <h1 class="booking__title button__title">quiza och få rabatt</h1>
    </div>
  </RouterLink>
  <div class="booking__container height__third margin__bot--none">
    <h1 class="booking__title">personuppgifter:</h1>
    <div class="booking__para--container flexdirection">
      <div class="input__field--container">
        <p class="booking__para margin__fix">Förnamn:</p>

        <input
          v-model="Förnamn"
          type="text"
          required
          placeholder="Förnamn"
          name="Förnamn"
          class="cred__input"
          errorFörnamn
          :style="{ boxShadow: v$.Förnamn.$error ? shadow : null }"
        />

        <p class="booking__para margin__fix margin__fix--two">Efternamn:</p>

        <input
          v-model="Efternamn"
          type="text"
          required
          placeholder="Efternamn"
          name="Efternamn"
          class="cred__input length__fix--two"
          :style="{ boxShadow: v$.Efternamn.$error ? shadow : null }"
        />
      </div>
      <div class="input__field--container pos__fix">
        <p class="booking__para margin__fix pos__fix--two">E-Mail:</p>

        <input
          v-model="Email"
          type="email"
          required
          placeholder="E-mail"
          :style="{ boxShadow: v$.Email.$error ? shadow : null }"
          name="E-Mail"
          class="cred__input length__fix margin__fix--three"
        />

        <p class="booking__para margin__fix margin__fix--two">Tel:</p>

        <input
          v-model="Tel"
          type="tel"
          required
          placeholder="Tel"
          name="Tel"
          class="cred__input"
          :style="{ boxShadow: v$.Tel.$error ? shadow : null }"
        />
      </div>
    </div>
    <h1 class="booking__title position__fix--five">Betalningsmetod:</h1>
  </div>

  <div class="booking__container height__third margin__top--none color__fix">
    <div class="booking__container--checkboxes">
      <div class="checkbox">
        <div class="checkbox__container">
          <input type="radio" name="methodpay" checked />
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
          <input type="radio" name="methodpay" />
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
          <input type="radio" name="methodpay" />
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
  <div @click="submitForm" class="button width__fix button__margin">
    <h1 @click="submitForm" class="booking__title button__title">Betala</h1>
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
.v-if,
.v-else {
  display: flex;
  justify-content: space-between;
  width: 100%;
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
  cursor: pointer;
}
.button__title {
  font-size: 18px;
  margin-bottom: 0;
  cursor: pointer;
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
  margin-left: 5px;
  border: 2px solid transparent;
  transition: all 300ms ease;
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
.nav__link {
  text-decoration: none;
}
</style>
