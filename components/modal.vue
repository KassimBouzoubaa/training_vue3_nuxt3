<template>
  <!-- Modal toggle -->
  <button
    @click="modal = !modal"
    v-if="modal"
    data-modal-target="authentication-modal"
    data-modal-toggle="authentication-modal"
    class="block mx-auto mt-4 text-white bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    type="button"
  >
    Ajouter une cryptomonnaie
  </button>

  <!-- Main modal -->

  <div
    v-else="(modal = false)"
    id="authentication-modal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed flex justify-center items-center z-30 mx-auto w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="fixed inset-0 bg-black opacity-50"></div>
    <div class="relative w-full max-w-md max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow">
        <button
          @click="modal = !modal"
          type="button"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          data-modal-hide="authentication-modal"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="px-6 py-6 lg:px-8">
          <h3
            class="mb-4 text-xl text-center font-medium text-gray-900 dark:text-white"
          >
            Ajouter une crypto
          </h3>

          <div>
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Nom de la crypto</label
            >
            <input
              v-if="selected"
              v-model="inputValue"
              type="text"
              name="name"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="bitcoin"
              required
              @keyup.enter="changeCoin"
            />
            <div
              v-else
              class="menu-el-js flex items-center px-3 cursor-default py-2 duration-150 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50"
            >
              <img class="mr-4" :src="coinSelected.thumb" alt="logoCrypto" />
              <span class="mr-4">{{ coinSelected.name + " " }}</span>
              ({{ coinSelected.id }})
            </div>
            <searchCrypto
              v-if="selected"
              v-for="(crypto, index) in filteredArray"
              @click="updateSelectedCoin(crypto)"
              :key="index"
              :crypto="crypto"
            />
          </div>
          <div>
            <label
              for="quantity"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Quantité</label
            >
            <input
              v-model="quantity"
              type="number"
              name="quantity"
              id="quantity"
              placeholder="0"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div>
            <label
              for="price"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Prix d'achat</label
            >
            <input
              v-model="costPrice"
              type="number"
              name="price"
              id="price"
              placeholder="0"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <button
            type="submit"
            @click="adCoin"
            class="mt-10 w-full text-white bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Ajouter à mon portfolio
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { addCrypto } = crypto();

const modal = ref(true);
const selected = ref(true);
const inputValue = ref("");
const coin = ref("");
const costPrice = ref(0);
const quantity = ref(0);
let coinSelected = ref({
  id: "",
  name: "",
  thumb: "",
});
let newCoin = ref({
  name: "",
  costPrice: 0,
  quantity: 0,
});

function changeCoin() {
  coin.value = inputValue.value;
  fetchData();
}
function updateSelectedCoin(coinId: any) {
  coinSelected.value = coinId;
  selected.value = false;
}
async function adCoin() {
  newCoin.value = {
    name: coinSelected.value.name,
    costPrice: costPrice.value,
    quantity: quantity.value,
  };
  try {
    await addCrypto(
      newCoin.value.name,
      newCoin.value.costPrice,
      newCoin.value.quantity
    );
  } catch (error: any) {
    console.log(error);
  }
  coinSelected.value = {
    id: "",
    name: "",
    thumb: "",
  };
  costPrice.value = 0;
  quantity.value = 0;
}

const API_URL = `https://api.coingecko.com/api/v3/search?query=`;

async function fetchData() {
  const url = `${API_URL}${coin.value}`;
  commits.value = await (await fetch(url)).json();
  if (commits.value) {
    filteredArray.value = commits.value.coins;
  }
  console.log(filteredArray);
}

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
</script>
