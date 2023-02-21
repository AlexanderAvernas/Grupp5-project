<template>
  <div class="container">
    <h1> hej {{ seat }}</h1>
    <div class="seat-container">
      <div v-for="seat in seats" :key="seat.id" @click="selectSeat(seat)">
        <div v-if="seat.available" class="seat available">
          {{ seat.id }}
        </div>
        <div v-else class="seat unavailable">
          {{ seat.id }}
        </div>
      </div>
    </div>
    <div class="seat-container">
      <div v-for="seat in seats" :key="seat.id" @click="selectSeat(seat)">
        <div v-if="seat.available" class="seat available">
          {{ seat.id }}
        </div>
        <div v-else class="seat unavailable">
          {{ seat.id }}
        </div>
      </div>
    </div>
    <div class="table-container">
      <div v-for="table in tables" :key="table.id" @click="selectSeat(table)">
        <div v-if="table.available" class="table available">
          {{ table.id }}
        </div>
        <div v-else class="table unavailable">
          {{ table.id }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seats: [
        { id: 1, available: true },
        { id: 2, available: true },
        { id: 3, available: false },
        { id: 4, available: true },
        { id: 5, available: false },
        { id: 6, available: true },
        { id: 7, available: true },
        { id: 8, available: true },
        { id: 9, available: true },
        { id: 10, available: true },
        { id: 11, available: true },
      ],
      tables: [
        { id: 2, available: true },
        { id: 23, available: true },
        { id: 24, available: false },
        { id: 25, available: true },
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  margin-top: 10em;
  border: 1px solid black;
}
.seat-container {
  display: flex;
}

.table-container {
    display: flex;
    flex-direction: column;
}

.table {
    margin: 1em;
}
.seat {
  width: 2em;
  height: 2em;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  line-height: 50px;
  margin: 3em;
  cursor: pointer;
}
.available {
  background-color: #90ca82;
  color: #fff;
}
.available:hover {
  background-color: #2fff00;
  color: #fff;
}

.unavailable {
  background-color: #dd9191;
  color: #fff;
}
</style>
