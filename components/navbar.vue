<template>
    <div>
<nav class="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div class=" max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
  
  <div class="flex md:order-2">
      <button data-collapse-toggle="navbar-sticky" type="button" class=" inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
      <li>
        <nuxt-link to="/" class="block py-2 pl-3 pr-4 text-white rounded md:text-white md:p-0 md:dark:text-white" aria-current="page">Acceuil</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/todo" class="block py-2 pl-3 pr-4 text-white rounded md:text-white md:p-0 md:dark:text-white" aria-current="page">TodoList</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/crypto" class="block py-2 pl-3 pr-4 text-white rounded md:text-white md:p-0 md:dark:text-white" aria-current="page">Crypto</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/todo" class="block py-2 pl-3 pr-4 text-white rounded md:text-white md:p-0 md:dark:text-white" aria-current="page">TodoList</nuxt-link>
      </li>
     
    </ul>
  </div>
  </div>
</nav>

    </div>
</template>


