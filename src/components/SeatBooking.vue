<template>
  <div class="background-image">
    <!-- TEXT FIELDS -->
    <div class="text-container">
      <div class="bordsbokning"><h1>BORDSBOKNING</h1></div>
      <div class="text">
        <p>
          Börja med att välja datum och tid för erat besök sedan väljer ni det
          antal ni blir i sällskapet och därefter väljer ni bord genom att
          klicka på den plats ni önskar
        </p>
      </div>
    </div>
    <!-- INPUT FIELDS -->
    <div class="input-container">
      <form class="form">
        <label for="date">Datum:</label>
        <input type="date" name="date" value="" />
        <label for="time">TID:</label>
        <input type="time" step="3600000" name="time" value="14:00" />
        <label for="guests">Antal:</label>
        <select v-model="selectedOption" name="guests" id="Guests">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </form>
    </div>

    <!-- TABLE LAYOUT -->
    <div class="container">
      <div class="tablesRight-container">
        <div
          v-for="tableRight in tablesRight"
          :key="tableRight.id"
          @click="selectSeat(tableRight)"
        >
          <div v-if="tableRight.available" class="seat available">
            {{ tableRight.id }}
          </div>
          <div v-else class="seat unavailable">
            {{ tableRight.id }}
          </div>
        </div>
      </div>
      <div class="tableLeft-container">
        <div
          v-for="tableLeft in tablesLeft"
          :key="tableLeft.id"
          @click="selectSeat(tableLeft)"
        >
          <div v-if="tableLeft.available" class="seat available">
            {{ tableLeft.id }}
          </div>
          <div v-else class="seat unavailable">
            {{ tableLeft.id }}
          </div>
        </div>
      </div>
      <div class="tableBottom-container">
        <div
          v-for="tableBottom in tablesBottom"
          :key="tableBottom.id"
          @click="selectSeat(tableBottom)"
        >
          <div v-if="tableBottom.available" class="seat available">
            {{ tableBottom.id }}
          </div>
          <div v-else class="seat unavailable">
            {{ tableBottom.id }}
          </div>
        </div>
      </div>
      <div class="tableCenter-container">
        <div
          id="centerSeat"
          v-for="tableCenter in tablesCenter"
          :key="tableCenter.id"
          @click="selectSeat(tableCenter)"
        >
          <div v-if="tableCenter.available" class="seat available">
            {{ tableCenter.id }}
          </div>
          <div v-else class="seat unavailable">
            {{ tableCenter.id }}
          </div>
        </div>
      </div>
      <div class="tableCenterL-container">
        <div
          v-for="tableCenterL in tablesCenterL"
          :key="tableCenterL.id"
          @click="selectSeat(tableCenterL)"
        >
          <div v-if="tableCenterL.available" class="seat available">
            {{ tableCenterL.id }}
          </div>
          <div v-else class="seat unavailable">
            {{ tableCenterL.id }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="button-container">
    <button type="button">VIDARE TILL MENYN</button>
  </div>
  <!-- FOOTER -->
  <div class="footer-container">
    <div id="item1"><p>© 2023 GRUPP 5</p></div>
    <div id="item2">
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
</template>

<script>
export default {
  data() {
    return {
      tablesLeft: [
        { id: 1, available: true },
        { id: 2, available: true },
        { id: 3, available: true },
      ],
      tablesCenterL: [
        { id: 4, available: true },
        { id: 5, available: true },
        { id: 6, available: false },
      ],
      tablesCenter: [
        { id: 7, available: true },
        { id: 8, available: true },
        { id: 9, available: true },
      ],
      tablesRight: [
        { id: 10, available: false },
        { id: 11, available: true },
      ],
      tablesBottom: [
        { id: 12, available: true },
        { id: 13, available: true },
      ],
    };
  },
  watch: {
    selectedOption(val) {
      if (val === 1) {
        this.tablesBottom[0].available = true;
      } else {
        this.seats[0].available = false;
        console.log("object");
      }
    },
  },
  methods: {
    selectSeat: (seat) => {
      if (seat.available) {
        seat.available = false;
      } else {
        seat.available = false;
        alert("Not available");
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;

  margin: 20% auto;
  border: 10px solid;
  background-color: #1c1c1c;
  height: 579px;
  width: 799px;
  border-radius: 25px;
  place-content: center;
}
/* TABLE CENTER ROUND TABLES  */
.tableCenter-container {
  grid-column: 3 / 4;
  grid-row: 1;
  place-self: center;
  height: 290px;
}
#centerSeat > div {
  border-radius: 100px;
}
/* TABLES CENTER LEFT */
.tableCenterL-container {
  grid-column: 2/3;
  grid-row: 1;
  border-bottom: 6px solid #6e6e6e;
  border-left: 6px solid #6e6e6e;
  display: fleX;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
}
div.tableCenterL-container > div:nth-child(1) > div {
  width: 96px;
}
div.tableCenterL-container > div:nth-child(2) > div {
  width: 96px;
}

/* TABLE LEFT START */
.tableLeft-container {
  grid-column: 1 / 2;
  grid-row: 1;
  display: fleX;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}
.tableLeft-container > div:nth-child(3) > div {
  height: 96px;
}
/* TABLE RIGHT START */
.tablesRight-container {
  grid-column: 4/5;
  grid-row: 1;
  display: fleX;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  margin-top: 90px;
}
div.tablesRight-container > div:nth-child(1) {
  border-top: 6px solid #6e6e6e;
  border-bottom: 6px solid #6e6e6e;
}
div.tablesRight-container > div:nth-child(2) {
  border-bottom: 6px solid #6e6e6e;
}
div.tablesRight-container > div:nth-child(1) > div {
  width: 96px;
}
div.tablesRight-container > div:nth-child(2) > div {
  width: 96px;
  text-align: center;
}

/* TABLE BOTTOM START */
.tableBottom-container {
  display: flex;
  flex-direction: row;
  grid-column: 4 / 4;
  grid-row: 2;
}

.seat {
  height: 48px;
  width: 48px;
  left: 300px;
  top: 636px;
  margin: 2em;
  border: 1px solid #ccc;
  text-align: center;
  cursor: pointer;
  background-color: #d9d9d9;
}

.seat.available:hover {
  background-color: #1a630e;
  color: #fff;
  transform: scale(1.1);
}

.unavailable {
  background-color: #ad1c1c;
  color: white;
}
/* Background image */
.background-image {
  background-image: url("../assets/pics/booking_page.jpg");
  height: 1487px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
}

.text-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* TEXT TILL BORDSBOKNING */
@import url("https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap");
.bordsbokning {
  position: absolute;
  width: 305px;
  height: 61px;
  top: 62px;
  font-family: "Amiko", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 47px;
  color: #ffffff;
  text-align: center;
}
.text {
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
.input-container {
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.form {
  position: absolute;
  width: fit-content;
  height: 31px;
  top: 264px;
  font-family: "Amiko", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
}
input {
  background-color: #d9d9d9;
  border-radius: 6px;
}
/* BUTTON VIDARE TILL MENY */
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* BUTTON VIDARE TILL MENY */
button {
  position: absolute;
  width: 247px;
  height: 54px;
  top: 1150px;
  color: #fff;
  background-color: #221109;
  border: 2px solid #ad8e6d;
  border-radius: 27px;
  font-family: "Amiko" sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
}
button:hover {
  transform: scale(1.1);
}
/* FOOTER */
.footer-container {
  display: flex;
  position: absolute;
  width: 100%;
  height: 52px;

  top: 1435px;
  background: rgba(28, 28, 28, 0.8);
}
#item1 {
  padding-top: 1em;
  padding-left: 2em;
  color: #ffffff;
}
#item2 {
  padding-top: 0.5em;
  padding-right: 2em;
  margin: 0 0 0 auto;
}
.logo {
  margin: 9px;
  width: 23px;
  height: 23px;
  left: 1135px;
  top: 1185px;
}
</style>
