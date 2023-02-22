<template>
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
  margin-top: 10em;
  border: 3px solid;
  background-color: #1c1c1c;
  height: 529px;
  width: 799px;
  left: 240px;
  top: 398px;
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

/* .seat:hover {

  background-color: #1a630e;
} */
.seat.available:hover {
  background-color: #1a630e;
  color: #fff;
  transform: scale(1.1);
}

.unavailable {
  background-color: #ad1c1c;
  color: white;
}
</style>
