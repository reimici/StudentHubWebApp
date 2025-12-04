<script setup>
import NavBar from '../components/NavBar.vue' // Se vuoi la navbar utente
// Se non vuoi la NavBar utente ma solo l'header statico, rimuovi l'import
</script>

<template>
  <div class="flex-grow flex flex-col font-sans">
    
    <header class="bg-[#151e2b] text-white py-4 px-8 shadow-md flex items-center">
      <div class="flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
          <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
        </svg>
        <span class="text-2xl font-bold tracking-wide">StudentHub</span>
      </div>
    </header>    

    <main class="flex-grow container mx-auto px-4 py-12 max-w-4xl">
      
      <div class="mb-8">
        <router-link to="/" class="inline-flex items-center gap-2 text-gray-600 hover:text-[#3b76ad] transition font-bold text-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Torna alla Home
        </router-link>
      </div>
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-extrabold text-[#3b76ad] mb-4">Chi Siamo</h1>
        <p class="text-xl text-gray-600">
          Il team di ingegneri dietro <span class="font-bold text-[#151e2b]">StudentHub</span>.
        </p>
      </div>

      <div class="space-y-12">
        <div class="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
          <h2 class="text-3xl font-bold text-[#151e2b] mb-6">Diego Andruccioli</h2>
          <div class="flex flex-col md:flex-row gap-8 items-start">
            <div class="w-40 h-40 md:w-48 md:h-48 bg-gray-300 rounded-xl flex-shrink-0 overflow-hidden border-4 border-[#3b76ad]">
              <div class="w-full h-full flex items-center justify-center text-gray-500 font-bold bg-gray-200">FOTO</div>
            </div>
            <div class="flex-grow">
              <p class="text-gray-700 text-lg leading-relaxed">
                Studente di Ingegneria e Sistemi Web presso l'Università di Bologna...
              </p>
            </div>
          </div>
        </div>
        <div class="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
          <h2 class="text-3xl font-bold text-[#151e2b] mb-6">Rei Mici</h2>
          <div class="flex flex-col md:flex-row gap-8 items-start">
            <div class="w-40 h-40 md:w-48 md:h-48 bg-gray-300 rounded-xl flex-shrink-0 overflow-hidden border-4 border-[#3b76ad]">
              <div class="w-full h-full flex items-center justify-center text-gray-500 font-bold bg-gray-200">FOTO</div>
            </div>
            <div class="flex-grow">
              <p class="text-gray-700 text-lg leading-relaxed">Designer e sviluppatore Frontend...</p>
            </div>
          </div>
        </div>
         <div class="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
          <h2 class="text-3xl font-bold text-[#151e2b] mb-6">Giovanni Morelli</h2>
          <div class="flex flex-col md:flex-row gap-8 items-start">
            <div class="w-40 h-40 md:w-48 md:h-48 bg-gray-300 rounded-xl flex-shrink-0 overflow-hidden border-4 border-[#3b76ad]">
              <div class="w-full h-full flex items-center justify-center text-gray-500 font-bold bg-gray-200">FOTO</div>
            </div>
            <div class="flex-grow">
              <p class="text-gray-700 text-lg leading-relaxed">Full Stack Developer...</p>
            </div>
          </div>
        </div>
      </div>

    </main>
  </div>
</template>