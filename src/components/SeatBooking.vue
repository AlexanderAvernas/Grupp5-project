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
        <select v-model="selectedOption" name="guests">
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
    <div class="button-container">
      <button type="button">VIDARE TILL MENYN</button>
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
      selectedOption: 0,
    };
  },
  watch: {
    selectedOption(val) {
      if (val === 1) {
        this.tablesRight[1].available = true;
      } else {
        this.tablesRight[1].available = false;
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
@import url("https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap");
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  margin: 0 auto;
  border: 10px solid;
  background-color: #1c1c1c;
  height: 36.188rem;
  width: 49.938rem;
  border-radius: 25px;
  place-content: center;
}
/* TABLE CENTER ROUND TABLES  */
.tableCenter-container {
  grid-column: 3 / 4;
  grid-row: 1;
  place-self: center;
  height: 18.125rem;
}
#centerSeat > div {
  border-radius: 100%;
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
  margin-top: 6rem;
}
div.tableCenterL-container > div:nth-child(1) > div {
  width: 6rem;
}
div.tableCenterL-container > div:nth-child(2) > div {
  width: 6rem;
}
/* TABLE LEFT START */
.tableLeft-container {
  grid-column: 1 / 2;
  grid-row: 1;
  display: fleX;
  flex-direction: column;
  align-items: center;
  margin-top: 3.125rem;
}
.tableLeft-container > div:nth-child(3) > div {
  height: 6rem;
}
/* TABLE RIGHT START */
.tablesRight-container {
  grid-column: 4/5;
  grid-row: 1;
  display: fleX;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  margin-top: 5.625rem;
}
div.tablesRight-container > div:nth-child(1) {
  border-top: 6px solid #6e6e6e;
  border-bottom: 6px solid #6e6e6e;
}
div.tablesRight-container > div:nth-child(2) {
  border-bottom: 6px solid #6e6e6e;
}
div.tablesRight-container > div:nth-child(1) > div {
  width: 6rem;
}
div.tablesRight-container > div:nth-child(2) > div {
  width: 6rem;
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
  height: 3rem;
  width: 3rem;
  left: 18.75rem;
  top: 39.75rem;
  margin: 2rem;
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
  height: 180vh;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.text-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* TEXT TILL BORDSBOKNING */
.bordsbokning {
  position: absolute;
  width: 20.7rem;
  height: 3.813rem;
  top: 3.75rem;
  font-family: "Amiko", sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 3rem;
  color: #ffffff;
  text-align: center;
}
.text {
  position: absolute;
  width: 31.188rem;
  top: 7.688rem;
  font-family: "Amiko", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.5rem;
  text-align: center;
  color: #ffffff;
}
.input-container {
  display: flex;
  padding-top: 12.5rem;
  height: 18.75rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.form {
  width: fit-content;
  height: 2rem;
  font-family: "Amiko", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.5rem;
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
  height: 3.375rem;
  margin: 2rem auto;
}
/* BUTTON VIDARE TILL MENY */
button {
  width: 15.438rem;
  height: 3.375rem;
  color: #fff;
  background-color: #221109;
  border: 2px solid #ad8e6d;
  border-radius: 27px;
  font-family: "Amiko" sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1.125rem;
}
button:hover {
  transform: scale(1.1);
}

/* MOBILE DEVICE CSS */

@media screen and (max-width: 600px) {
  .text {
    position: absolute;
    width: fit-content;
    top: 7.688rem;
    font-family: "Amiko", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;

    text-align: center;
  }
  .container {
    display: grid;
    grid-template-columns: 5rem 5rem 5rem auto;
    grid-template-rows: auto;
    margin: 10vh 0 10vh auto;
    width: 100%;
    height: fit-content;
  }
  .tableCenterL-container {
    grid-column: 2 / 3;
    grid-row: 1;
    margin-top: 6rem;
  }
  div.tableCenterL-container > div:nth-child(1) > div {
    width: 4rem;
    height: 2rem;
  }
  div.tableCenterL-container > div:nth-child(2) > div {
    width: 4rem;
    height: 2rem;
  }
  div.tableCenterL-container > div:nth-child(3) > div {
    width: 2rem;
    height: 2rem;
  }
  .tableCenter-container {
    grid-column: 3/4;
    margin-top: 8rem;
  }
  #centerSeat > div {
    height: 2rem;
    width: 2rem;
  }
  .tablesRight-container {
    grid-column: 4/5;
    justify-content: center;
    align-items: end;
    width: fit-content;
  }
  div.tablesRight-container > div:nth-child(1) > div {
    height: 2rem;
    width: 4rem;
  }
  div.tablesRight-container > div:nth-child(2) > div {
    height: 2rem;
    width: 4rem;
    text-align: center;
  }
  .tableBottom-container {
    grid-column: 3 / 5;
    grid-row: 2;
    justify-content: end;
  }
  #app
    > main
    > div.background-image
    > div.container
    > div.tableBottom-container
    > div:nth-child(1)
    > div {
    height: 2rem;
    width: 2rem;
  }
  #app
    > main
    > div.background-image
    > div.container
    > div.tableBottom-container
    > div:nth-child(2)
    > div {
    height: 2rem;
    width: 2rem;
  }
  .tableLeft-container {
    grid-column: 1 / 1;
    grid-row: 1;
    align-items: center;
    margin-top: 4.3rem;
  }
  .tableLeft-container > div:nth-child(3) > div {
    height: 4rem;
    width: 2rem;
  }
  .tableLeft-container > div:nth-child(2) > div {
    height: 2rem;
    width: 2rem;
  }
  .tableLeft-container > div:nth-child(1) > div {
    height: 2rem;
    width: 2rem;
  }
}

    padding-top: 19.5rem;
    height: 19.75rem;
  }
}
.logo {
  margin: 9px;
  width: 23px;
  height: 23px;
  left: 1135px;
  top: 1185px;
} */
</style>
