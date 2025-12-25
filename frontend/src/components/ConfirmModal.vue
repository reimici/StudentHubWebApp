<script setup>
defineProps({
    show: {
        type: Boolean,
        required: true
    },
    title: {
        type: String,
        default: 'Conferma Azione'
    },
    message: {
        type: String,
        default: ''
    }
})

defineEmits(['confirm', 'cancel'])
</script>

<template>
    <div v-if="show" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" @click="$emit('cancel')"></div>
        
        <!-- Modal Content -->
        <div class="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 transform transition-all scale-100 animate-fade-in-down">
            <div class="text-center">
                <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
                    <svg class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h3 class="text-lg leading-6 font-bold text-gray-900 mb-2">{{ title }}</h3>
                <p class="text-sm text-gray-500 mb-6 font-medium">
                    {{ message }}
                </p>
            </div>
            <div class="flex gap-3 justify-center">
                <button 
                    @click="$emit('cancel')"
                    class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition focus:outline-none"
                >
                    Annulla
                </button>
                <button 
                    @click="$emit('confirm')"
                    class="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg font-bold shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 focus:outline-none"
                >
                    Conferma
                </button>
            </div>
        </div>
    </div>
</template>
