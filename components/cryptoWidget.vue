<template>
  <div class="mt-[55px]">
    <coingecko-coin-price-marquee-widget
      :coin-ids="myCoins"
      currency="usd"
      background-color="#ffffff"
      locale="fr"
    ></coingecko-coin-price-marquee-widget>
  </div>
  <portfolio/>
  <titreSection titre="Rechercher une crypto" />
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
      <searchCrypto
        v-for="(crypto, index) in filteredArray"
        @click="updateSelectedCoin(crypto.id)"
        :key="index"
        :crypto="crypto"
      />
    </div>
  </form>
  <div class="w-1/2 mx-auto">
    <titreSection titre="Calculer le change" />
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
    <titreSection titre="Où acheter ma crypto" />
    <coingecko-coin-market-ticker-list-widget
      :coin-id="coinSelected"
      currency="usd"
      locale="fr"
      class="mt-4"
    ></coingecko-coin-market-ticker-list-widget>
  </div>
</template>

<script lang="ts" setup>

const inputValue = ref("");
const coin = ref("");
let coinSelected = ref("bitcoin");
let myCoins = ref("treeb,bitcoin,cosmos,kujira");

interface Coin {
  api_symbol: string;
  id: string;
  large: string;
  market_cap_rank: string;
  name: string;
  symbol: string;
  thumb: string;
}

let filteredArray: Ref<null | Coin[]> = ref(null);

interface Commit {
  categories: [];
  coins: [];
  exchanges: [];
  icos: [];
  nfts: [];
}

const commits: Ref<null | Commit> = ref(null);

function changeCoin() {
  coin.value = inputValue.value;
  fetchData();
}

function updateSelectedCoin(coinId: string) {
    coinSelected.value = coinId;
    myCoins.value += "," + coinId;
}

const API_URL = `https://api.coingecko.com/api/v3/search?query=`;

async function fetchData() {
  const url = `${API_URL}${coin.value}`;
  commits.value = await (await fetch(url)).json();
  if (commits.value) {
    filteredArray.value = commits.value.coins;
  }
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
