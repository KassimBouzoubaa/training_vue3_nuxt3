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
        v-model="inputValue"
        class="shadow w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
        type="text"
        autofocus
        placeholder="Rechercher une cryptomonnaie"
      />
    </div>
    <div
      class="shadow max-h-32 mt-2 overflow-y-auto border-b border-r border-l"
    >
      <li
        v-for="(crypto, index) in filteredArray"
        class="menu-el-js flex items-center px-3 cursor-default py-2 duration-150 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50"
        @click="updateSelectedCoin(crypto.id)"
      >
        <img class="mr-4" :src="crypto.thumb" alt="logoCrypto" />
        <span class="mr-4">{{ crypto.name + " " }}</span>
        ({{ crypto.id }})
      </li>
    </div>
  </form>
  <div class="w-1/2 mx-auto">
    <h2
      class="my-[15px] text-center font-bold md:text-[44px] text-[20px] text-black"
    >
      Calculer le change
    </h2>
    <coingecko-coin-converter-widget
      :coin-id="coinSelected"
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
      :coin-id="coinSelected"
      currency="usd"
      locale="fr"
      class="mt-4"
    ></coingecko-coin-market-ticker-list-widget>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
const inputValue = ref("");
const coin = ref("");
let coinSelected = ref("bitcoin");
let myCoins = ref("treeb,bitcoin,cosmos,kujira");
const myBag = [
  { id: 1, name: "cosmos", quantity: 10, buyPrice: 5, actualPrice: 12 },
  { id: 2, name: "treeb", quantity: 1030, buyPrice: 0.5, actualPrice: 0.02 },
  { id: 3, name: "bitcoin", quantity: 2, buyPrice: 19000, actualPrice: 29000 },
  { id: 4, name: "kujira", quantity: 34, buyPrice: 0.1, actualPrice: 0.002 },
];
let filteredArray = ref(null);
function changeCoin() {
  coin.value = inputValue.value;
  fetchData();
}
const API_URL = `https://api.coingecko.com/api/v3/search?query=`;

watchEffect(() => {
  fetchData();
});
const commits = ref(null);

function updateSelectedCoin(coinId) {
  coinSelected.value = coinId;
  myCoins.value += "," + coinId;
}

async function fetchData() {
  const url = `${API_URL}${coin.value}`;
  commits.value = await (await fetch(url)).json();
  filteredArray.value = commits.value.coins;
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
