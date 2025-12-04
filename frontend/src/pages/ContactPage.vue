<script setup>
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

    <main class="flex-grow container mx-auto px-4 py-12 max-w-5xl">
      
      <div class="mb-8">
        <router-link to="/" class="inline-flex items-center gap-2 text-gray-600 hover:text-[#3b76ad] transition font-bold text-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Torna alla Home
        </router-link>
      </div>
      <div class="text-center mb-12">
        <h1 class="text-4xl font-extrabold text-[#3b76ad] mb-4">Contatti del Team</h1>
        <p class="text-xl text-gray-600">
          Hai bisogno di contattare uno degli sviluppatori? <br>
          Ecco i nostri riferimenti ufficiali.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div class="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition text-center group">
          <div class="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center border-4 border-white shadow-sm group-hover:border-[#3b76ad] transition">
            <span class="text-2xl font-bold text-gray-400">DA</span>
          </div>
          <h3 class="text-xl font-bold text-[#151e2b]">Diego Andruccioli</h3>
          <p class="text-sm text-[#3b76ad] font-bold mb-4">Backend Developer</p>
          <div class="space-y-3 text-sm">
             <a href="mailto:diego.andruccioli@studio.unibo.it" class="block bg-gray-50 py-2 px-4 rounded-lg text-gray-700 hover:bg-[#3b76ad] hover:text-white transition truncate">diego.andruccioli@...</a>
          </div>
        </div>
        <div class="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition text-center group">
          <div class="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center border-4 border-white shadow-sm group-hover:border-[#3b76ad] transition">
            <span class="text-2xl font-bold text-gray-400">RM</span>
          </div>
          <h3 class="text-xl font-bold text-[#151e2b]">Rei Mici</h3>
          <p class="text-sm text-[#3b76ad] font-bold mb-4">Frontend & Design</p>
          <div class="space-y-3 text-sm">
             <a href="mailto:rei.mici@studio.unibo.it" class="block bg-gray-50 py-2 px-4 rounded-lg text-gray-700 hover:bg-[#3b76ad] hover:text-white transition truncate">rei.mici@studio.unibo.it</a>
          </div>
        </div>
         <div class="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition text-center group">
          <div class="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center border-4 border-white shadow-sm group-hover:border-[#3b76ad] transition">
            <span class="text-2xl font-bold text-gray-400">GM</span>
          </div>
          <h3 class="text-xl font-bold text-[#151e2b]">Giovanni Morelli</h3>
          <p class="text-sm text-[#3b76ad] font-bold mb-4">Full Stack & Security</p>
          <div class="space-y-3 text-sm">
             <a href="mailto:giovanni.morelli@studio.unibo.it" class="block bg-gray-50 py-2 px-4 rounded-lg text-gray-700 hover:bg-[#3b76ad] hover:text-white transition truncate">giovanni.morelli@...</a>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <h2 class="text-2xl font-bold text-[#151e2b] mb-4">Supporto Tecnico</h2>
        <div class="bg-[#151e2b] text-white p-6 rounded-2xl inline-block shadow-lg max-w-lg w-full">
          <p class="mb-4 text-gray-300">Per segnalazioni di bug o problemi con la piattaforma:</p>
          <a href="mailto:support@studenthub.unibo.it" class="text-2xl font-bold text-[#3b76ad] hover:text-white transition">
            support@studenthub.unibo.it
          </a>
        </div>
      </div>

    </main>
  </div>
</template>