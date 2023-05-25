<template>
  <TitreSection titre="Portefolio" />

  <div class=" ">
    <div
      class="flex text-center justify-between font-bold mx-20 my-10 border-b"
    >
      <span class="w-1/7">Cryptomonnaie</span>
      <span class="w-1/7">Prix d'achat</span>
      <span class="w-1/7">Quantité</span>
      <span class="w-1/7">Mkt Cap</span> <span class="w-1/7">Prix actuelle</span
      ><span class="w-1/7">Valeur actuelle</span>
      <span class="w-1/7">Pnl</span>
    </div>
    <div>
      <ul>
        <li
          v-for="(element, index) in myBag"
          :key="index"
          class="flex text-center justify-between font-bold mx-20 my-10 border-b"
        >
        <span class="w-1/7">Cryptomonnaie</span>
      <span class="w-1/7">Prix d'achat</span>
      <span class="w-1/7">Quantité</span>
      <span class="w-1/7">Mkt Cap</span> <span class="w-1/7">Prix actuelle</span
      ><span class="w-1/7">Valeur actuelle</span>
      <span class="w-1/7">Pnl</span>
        </li>
      </ul>
    </div>
  </div>
  <modal />
</template>

<script lang="ts" setup>
const myBag = [
  {
    id: 1,
    name: "cosmos",
    quantity: 10,
    buyPrice: 5,
    price: 12,
    mktCap: "12B",
  },
  {
    id: 2,
    name: "treeb",
    quantity: 1030,
    buyPrice: 0.5,
    price: 0.02,
    mktCap: "12B",
  },
  {
    id: 3,
    name: "bitcoin",
    quantity: 2,
    buyPrice: 19000,
    price: 29000,
    mktCap: "12B",
  },
  {
    id: 4,
    name: "kujira",
    quantity: 34,
    buyPrice: 0.1,
    price: 0.002,
    mktCap: "12B",
  },
];
</script>
