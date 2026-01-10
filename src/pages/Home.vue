<template>
    <DefaultLayout>
        <div class="flex flex-col items-center pt-10 gap-20 w-full h-full">
            <span class="text-7xl p-5 text-gray-200 overflow-hidden">{{ $t('title') }}</span>
            <div class="bg-gray-800/80 z-2 w-fit h-fit p-10 rounded-2xl">
                <p class="text-gray-100 text-center">{{ $t('page.home.welcometext') }}</p>
            </div>
        </div>
    </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '../layouts/DefaultLayout.vue';

</script>

<style scoped>

</style>