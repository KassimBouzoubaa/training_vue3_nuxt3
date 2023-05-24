<template>
    <TitreSection titre="Portefolio"/>
    
  <div class=" ">
    <div
      class="flex text-center justify-between font-bold mx-20 my-10 border-b"
    >
      <span class="w-1/5">Coin</span> <span class="w-1/5">Price</span>
      <span class="w-1/5">Mkt Cap</span> <span class="w-1/5">Valeur</span>
      <span class="w-1/5">Pnl</span>
    </div>
    <div>
      <ul>
        <li
          v-for="(element, index) in myBag"
         :key="index"
          class="flex text-center justify-between font-bold mx-20 my-10 border-b"
        >
          <span class="w-1/5">{{ element.name }}</span>
          <span class="w-1/5">{{ element.price }}</span>
          <span class="w-1/5">{{ element.mktCap }}</span>
          <span class="w-1/5">Valeur</span> <span class="w-1/5">Pnl</span>
        </li>
      </ul>
    </div>

  </div>
  <modal/>
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
