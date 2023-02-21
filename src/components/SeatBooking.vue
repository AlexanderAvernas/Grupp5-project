<template>
  <div class="container">
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
    <h1>{{ seats[0].id }}</h1>
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
        { id: 6, available: false },
        { id: 7, available: false },
        { id: 8, available: false },
        { id: 9, available: false },
        { id: 10, available: false },
        { id: 11, available: true },
      ],
    };
  },
  methods: {
    selectSeat: (seat) => {
      if (seat.available) {
        seat.available = false;
      } else {
        seat.available = true;
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
}
.seat-container {
  display: flex;
  flex-direction: column;
}
.seat {
  width: 1em;
  height: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  line-height: 50px;
  margin: 1em;
  cursor: pointer;
}
.seat:hover {
  transform: scale(1.2);
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
