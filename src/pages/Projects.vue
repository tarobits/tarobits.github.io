<template>
    <DefaultLayout>
        <div class="flex flex-col items-center pt-10 gap-5 w-full h-full">
            <span class="text-7xl p-5 text-gray-200 overflow-hidden">{{ $t('nav.projects') }}</span>
            <div class="bg-gray-800/80 z-2 w-fit max-w-[80%] h-fit p-10 rounded-2xl flex flex-col gap-5 overflow-y-scroll">
                <ProjectComponent v-for="p in projects" :key="p.name" :project="p" />
            </div>
        </div>
    </DefaultLayout>
</template>

<script setup lang="ts">
import ProjectComponent from '../components/ProjectComponent.vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import { ProjectType } from '../types/project';

const projects: ProjectType[] = [
    {
        name: 'bookorganizer',
        released: false,
        source: 'open',
        license: 'AGPL',
        framework: {
            frontend: 'vue',
            backend: 'laravel'
        }
    },
    {
        name: 'shelfrenderingengine',
        released: false,
        source: 'open',
        license: 'MPL',
        framework: 'vue'
    }
]

</script>

<style scoped>

</style>