<script></script>

<template>
    <div class="order-container">
        <h2>BESTÄLLNING</h2>
        <ul id="order-list">
            <li id="order-item">Lorem ipsum x2</li>
        </ul>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amiko:wght@400;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Grape+Nuts&f&display=swap');

.order-container {
    background-color: #d9d9d9;
    color: #1c1c1c;
    width: 446px;
    height: 503px;
    margin: 1.5rem;
}

.order-container > h2 {
    display: flex;
    justify-content: center;
    font-family: "Amiko", sans-serif;
    font-size: 30px;
    margin-top: 5vh;
}

#order-list {
    display: flex;
    justify-content: center;
    list-style: none;
    font-family: 'Grape Nuts', cursive;
    font-size: 30px;
    margin-top: 1.5rem;
    padding: 0;
}

@media only screen and (max-width: 446px) {
.order-container {
    width: 100%;
}
}
</style>
