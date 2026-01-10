<template>
    <DefaultLayout>
        <div class="flex flex-col items-center pt-15 w-full h-full">
            <span class="text-7xl text-gray-200 z-2 overflow-hidden">{{ $t('title') }}</span>
            <span class="text-2xl md:text-5xl text-gray-400 z-2 text-center">{{ $t('page.home.userdesc') }}</span>
            <div class="bg-gray-800/80 z-2 w-fit h-fit p-5 md:p-10 rounded-2xl">
                <p class="text-gray-100 text-center">{{ $t('page.home.welcometext') }}</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5 md:mt-20">
                    <div class="h-fit w-full grid grid-cols-2 gap-4">
                        <p class="text-gray-200 text-3xl text-center col-span-2 font-bold">{{ $t('page.home.frameworks') }}</p>
                        <div class=" h-fit w-full rounded-2xl p-4 text-center text-2xl font-semibold" style="background-color: #35495E;color: #42B883;">Vue.js</div>
                        <div class=" h-fit w-full rounded-2xl p-4 text-center text-2xl font-semibold" style="background-color: #FFFFFF; color: #FF2D20;">Laravel</div>
                    </div>
                    <div class="h-fit w-full grid grid-cols-2 gap-4">
                        <p class="text-gray-200 text-3xl text-center col-span-2 font-bold">{{ $t('page.home.planguages') }}</p>
                        <div class=" h-fit w-full rounded-2xl p-4 text-center text-2xl font-semibold" style="background-color: #3178C6;color: #FFFFFF;">TypeScript</div>
                        <div class=" h-fit w-full rounded-2xl p-4 text-center text-2xl font-semibold" style="background-color: #777BB4; color: #000000;">PHP</div>
                        <div class=" h-fit w-full rounded-2xl p-4 text-center text-2xl font-semibold" style="background-color: #F7DF1E; color: #000000;">JavaScript</div>
                        <div class=" h-fit w-full rounded-2xl p-4 text-center text-2xl font-semibold" style="background-color: #3776AB; color: #FFD43B;">Python</div>
                    </div>
                </div>
            </div>
        </div>
    </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '../layouts/DefaultLayout.vue';

</script>

<style scoped>

</style>