<script>
export default {
  created() {
    fetch("/menu.json")
      .then((response) => response.json())
      .then((result) => {
        this.appetizers = result[0].pre;
        this.mains = result[0].main;
        this.deserts = result[0].desert;
        this.drinks = result[0].drink;
      });
  },
  data() {
    return {
      appetizers: null,
      mains: null,
      deserts: null,
      drinks: null,
    };
  },
};
</script>

<template>
  <div class="menu-container">
    <h2>Meny</h2>
    <h3>Förrätter</h3>
    <ul class="menu-ul">
      <li class="menu-li" v-for="appetizer in appetizers" :key="appetizer.id">
        <p class="product">{{ appetizer.product }}</p>
        <p class="price">{{ appetizer.price }}kr</p>
        <button
          @click="
            $store.commit('addItem', {
              product: appetizer.product,
              price: appetizer.price,
            })
          "
          class="plus"
        ></button>
        <button @click="$store.commit('remItem')" class="minus"></button>
      </li>
    </ul>
    <h3>Varmrätter</h3>
    <ul class="menu-ul">
      <li class="menu-li" v-for="main in mains" :key="main.id">
        <p class="product">{{ main.product }}</p>
        <p class="price">{{ main.price }}kr</p>
        <button
          @click="
            $store.commit('addItem', {
              product: main.product,
              price: main.price,
            })
          "
          class="plus"
        ></button>
        <button @click="$store.commit('remItem')" class="minus"></button>
      </li>
    </ul>
    <h3>Deserter</h3>
    <ul class="menu-ul">
      <li class="menu-li" v-for="desert in deserts" :key="desert.id">
        <p class="product">{{ desert.product }}</p>
        <p class="price">{{ desert.price }}kr</p>
        <button
          @click="
            $store.commit('addItem', {
              product: desert.product,
              price: desert.price,
            })
          "
          class="plus"
        ></button>
        <button @click="$store.commit('remItem')" class="minus"></button>
      </li>
    </ul>
    <h3>Drycker</h3>
    <ul class="menu-ul">
      <li class="menu-li" v-for="drink in drinks" :key="drink.id">
        <p class="product">{{ drink.product }}</p>
        <p class="price">{{ drink.price }}kr</p>
        <button
          @click="
            $store.commit('addItem', {
              product: drink.product,
              price: drink.price,
            })
          "
          class="plus"
        ></button>
        <button @click="$store.commit('remItem')" class="minus"></button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.menu-container {
  background-color: #1c1c1c;
  color: #ffffff;
  font-family: "Cutive Mono", monospace;
  width: 564px;
  height: 722px;
  margin: 1.5rem;
  overflow: scroll;
  border-top: 2rem solid #1c1c1c;
  border-bottom: 2rem solid #1c1c1c;
}

.menu-container > h2 {
  display: flex;
  justify-content: center;
  font-size: 30px;
  margin-top: 3vh;
  margin-bottom: 2vh;
}

.menu-container > h3 {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  font-size: 20px;
}

.menu-ul {
  list-style: none;
  font-size: 20px;
  padding: 0;
}

.menu-li {
  display: flex;
  justify-content: center;
  margin: 0.8rem 0 0 0;
  height: 1.5rem;
}

.product {
  width: 60%;
}

.plus {
  background-color: #1c1c1c;
  background-image: url(../assets/pics/logos/plus.png);
  background-size: cover;
  height: 25px;
  width: 1.5rem;
  border: 0;
  margin-left: 8px;
}

.minus {
  background-color: #1c1c1c;
  background-image: url(../assets/pics/logos/minus.png);
  background-size: cover;
  height: 22px;
  width: 1.2rem;
  border: 0;
  margin-left: 8px;
}

@media only screen and (max-width: 564px) {
  .menu-container {
    width: 100%;
  }
}
</style>
