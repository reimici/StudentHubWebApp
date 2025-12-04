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
    <NavBar />

    <main class="flex-grow container mx-auto px-4 py-12 max-w-4xl">
      
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
              <div class="w-full h-full flex items-center justify-center text-gray-500 font-bold bg-gray-200">
                FOTO
              </div>
            </div>
            
            <div class="flex-grow">
              <p class="text-gray-700 text-lg leading-relaxed">
                Studente di Ingegneria e Sistemi Web presso l'Università di Bologna. 
                Appassionato di sviluppo Backend e architetture software. 
                In questo progetto si è occupato principalmente della gestione del database e delle API.
              </p>
            </div>
          </div>
        </div>

        <div class="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
          <h2 class="text-3xl font-bold text-[#151e2b] mb-6">Rei Mici</h2>
          
          <div class="flex flex-col md:flex-row gap-8 items-start">
            <div class="w-40 h-40 md:w-48 md:h-48 bg-gray-300 rounded-xl flex-shrink-0 overflow-hidden border-4 border-[#3b76ad]">
              <div class="w-full h-full flex items-center justify-center text-gray-500 font-bold bg-gray-200">
                FOTO
              </div>
            </div>
            
            <div class="flex-grow">
              <p class="text-gray-700 text-lg leading-relaxed">
                Designer e sviluppatore Frontend del gruppo. Ha curato l'intera User Experience (UX) 
                e l'interfaccia utente (UI), trasformando i mockup in codice Vue.js reattivo.
                Il suo obiettivo è rendere l'università meno stressante con un design pulito.
              </p>
            </div>
          </div>
        </div>

        <div class="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
          <h2 class="text-3xl font-bold text-[#151e2b] mb-6">Giovanni Morelli</h2>
          
          <div class="flex flex-col md:flex-row gap-8 items-start">
            <div class="w-40 h-40 md:w-48 md:h-48 bg-gray-300 rounded-xl flex-shrink-0 overflow-hidden border-4 border-[#3b76ad]">
              <div class="w-full h-full flex items-center justify-center text-gray-500 font-bold bg-gray-200">
                FOTO
              </div>
            </div>
            
            <div class="flex-grow">
              <p class="text-gray-700 text-lg leading-relaxed">
                Full Stack Developer con un focus sull'integrazione dei sistemi. 
                Ha lavorato sulla logica di calcolo delle statistiche e sulla sicurezza dell'autenticazione.
                Sempre pronto a risolvere bug complessi e ottimizzare le performance.
              </p>
            </div>
          </div>
        </div>

      </div>

    </main>

 

  </div>
</template>