<template>
    <div class="w-full h-fit bg-gray-700/50 text-gray-100 p-5 rounded-2xl">
        <div class="flex gap-5">
            <img v-if="project.icon" :src="project.icon" class="aspect-square h-full">
            <div class="flex flex-col w-full">
                <div class="flex flex-col lg:flex-row gap-3 w-full h-full">
                <span class="text-2xl w-fit h-fit text-nowrap">{{ $t(`projects.${project.name}.title`) }}</span>
                <div class="flex flex-col lg:flex-row gap-3 w-full h-full flex-wrap pb-5 lg:pb-0">
                    <SourceTagComponent :tag="project.source" />
                    <LicenseComponent v-if="project.source === 'open'" :license="project.license" />
                    <PLangaugeComponent v-if="project.framework && (typeof project.framework === 'string')" :tag="project.framework" />
                    <PLangaugeComponent v-if="project.framework && (typeof project.framework !== 'string') && project.framework.frontend" :tag="project.framework.frontend" type="frontend" />
                    <PLangaugeComponent v-if="project.framework && (typeof project.framework !== 'string') && project.framework.backend" :tag="project.framework.backend" type="backend" />
                    <PLangaugeComponent v-for="l in project.languages" :key="l" :tag="l" />
                </div>
            </div>
                <p v-if="!project.released" class="text-gray-400">{{ $t('components.projectcomponent.notreleased') }}</p>
                <p v-else-if="project.version.substring(0,1) === '0'" class="text-yellow-300">{{ project.version }}</p>
                <p v-else class="text-green-300">{{ project.version }}</p>
            </div>
        </div>
        <p class="mt-5 text-xl text-wrap">{{ $t(`projects.${project.name}.description`) }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref, toRef } from 'vue';
import { ProjectType } from '../types/project';
import LicenseComponent from './LicenseComponent.vue';
import SourceTagComponent from './SourceTagComponent.vue';
import PLangaugeComponent from './PLangaugeComponent.vue';


const props = defineProps<{
    project: ProjectType
}>();

const project = toRef(props.project);
</script>

<style scoped></style>