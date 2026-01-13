<template>
    <DefaultLayout>
        <div class="flex flex-col items-center pt-10 gap-5 w-full h-full">
            <span class="text-5xl lg:text-7xl z-2 p-5 h-fit text-gray-200 overflow-hidden">{{ $t('nav.projects') }}</span>
            <div class="bg-gray-800/80 z-2 w-fit max-w-[80%] h-fit p-10 rounded-2xl flex flex-col gap-5 overflow-x-hidden overflow-y-scroll">
                <ProjectComponent v-for="p in projects" :key="p.name" :project="p" />
            </div>
        </div>
    </DefaultLayout>
</template>

<script setup lang="ts">
import ProjectComponent from '../components/ProjectComponent.vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import { ProjectType } from '../types/project';
import { useI18n } from 'vue-i18n';

const i18n = useI18n();

const projects: ProjectType[] = [
    {
        name: 'bookorganizer',
        title: i18n.t('projects.bookorganizer.title'),
        description: i18n.t('projects.bookorganizer.description'),
        released: false,
        source: 'open',
        license: 'AGPL',
        framework: {
            frontend: 'vue',
            backend: 'laravel'
        },
    },
    {
        name: 'shelfrenderingengine',
        title: i18n.t('projects.shelfrenderingengine.title'),
        description: i18n.t('projects.shelfrenderingengine.description'),
        released: true,
        versionType: 'npm',
        version: '@tarobits/shelf-rendering-engine',
        source: 'open',
        license: 'MPL',
        framework: 'vue',
        links: [
            {
                url: 'https://github.com/tarobits/shelf-rendering-engine',
                text: i18n.t('page.projects.view-on-github'),
                icon: 'github'
            },
            {
                url: 'https://www.npmjs.com/package/@tarobits/shelf-rendering-engine',
                text: i18n.t('page.projects.available-on-npm')
            }
        ]
    }
]

</script>

<style scoped>

</style>