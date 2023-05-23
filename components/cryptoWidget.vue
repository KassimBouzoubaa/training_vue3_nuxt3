<template>
  <div class="mt-[55px]">
    <coingecko-coin-price-marquee-widget
      :coin-ids="myCoins"
      currency="usd"
      background-color="#ffffff"
      locale="fr"
    ></coingecko-coin-price-marquee-widget>
  </div>
  <h1
    class="mt-[15px] text-center font-bold md:text-[44px] text-[20px] text-black"
  >
    Rechercher une crypto
  </h1>
  <form class="max-w-md px-4 mx-auto m-4" @submit.prevent="changeCoin">
    <div class="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="{2}"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        v-model="todo"
        class="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
        type="text"
        autofocus
        placeholder="Ajouter une nouvelle tâche"
      />
    </div>
  </form>
  <div class="w-1/2 mx-auto">
          <h2
            class="my-[15px] text-center font-bold md:text-[44px] text-[20px] text-black"
          >
            Calculer le change
          </h2>
          <coingecko-coin-converter-widget
            :coin-id="coin"
            currency="usd"
            background-color="#ffffff"
            font-color="#4c4c4c"
            locale="fr"
            class="mr-4"
          ></coingecko-coin-converter-widget>
        </div>
    <div class="w-1/2 mx-auto">
      <h2
        class="my-[15px] text-center font-bold md:text-[44px] text-[20px] text-black"
      >
        Où acheter ma crypto
      </h2>
      <coingecko-coin-market-ticker-list-widget
        :coin-id="coin"
        currency="usd"
        locale="fr"
        class="mt-4"
      ></coingecko-coin-market-ticker-list-widget>
    </div>
  
</template>

<script setup>
import { ref } from "vue";
const todo = ref("");
const coin = ref("bitcoin");
const myCoins = ref("treeb,bitcoin,cosmos,kujira");

function changeCoin() {
  coin.value = todo.value;
  myCoins.value += "," + todo.value;
  console.log(myCoins);
  console.log("todo", todo);
  console.log("coin", coin);
}

useHead({
  script: [
    {
      src: "https://widgets.coingecko.com/coingecko-coin-converter-widget.js",
    },
    {
      src: "https://widgets.coingecko.com/coingecko-coin-market-ticker-list-widget.js",
    },
    {
      src: "https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js",
    },
    {
      src: "https://widgets.coingecko.com/coingecko-coin-price-chart-widget.js",
    },
  ],
});


</script>
