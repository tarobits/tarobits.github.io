<template>
    <div class="w-full h-fit flex flex-col bg-gray-700/50 text-gray-100 p-5 rounded-2xl gap-5">
        <div class="flex gap-5">
            <img v-if="project.icon" :src="project.icon" class="aspect-square h-full">
            <div class="flex flex-col w-full">
                <div class="flex flex-col lg:flex-row gap-3 w-full h-full">
                <span class="text-2xl w-fit h-fit text-nowrap">{{ project.title }}</span>
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
                <p v-else-if="version.substring(0,2) === 'v0'" class="text-yellow-300">Version: {{ version }} {{$t('page.projects.pre-release')}}</p>
                <p v-else class="text-green-300">Version: {{ version }}</p>
            </div>
        </div>
        <p class="text-xl text-wrap">{{ project.description }}</p>
        <div v-if="project.links" class="mt-auto w-full h-fit flex items-center gap-3">
            <ProjectLink v-for="l,i in project.links" :key="l.text" :next="project.links[i+1]" :link="l" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, toRef } from 'vue';
import { ProjectType } from '../types/project';
import LicenseComponent from './LicenseComponent.vue';
import SourceTagComponent from './SourceTagComponent.vue';
import PLangaugeComponent from './PLangaugeComponent.vue';
import ProjectLink from './ProjectLink.vue';
import axios from 'axios';

const version = ref<string>("");


const props = defineProps<{
    project: ProjectType
}>();

const project = toRef(props.project);

async function latestNPMVersion(packageName: string): Promise<string> {
    return axios
        .get('https://registry.npmjs.org/' + packageName + '/latest')
        .then(res => res.data.version);
}

onMounted(async () => {
    if (project.value.released === true) {
        switch (project.value.versionType) {
            case 'npm':
                version.value = "v" + await latestNPMVersion(project.value.version)
                break;
            case 'static':
                version.value = project.value.version;
                break;
        }
    }
})
</script>

<style scoped></style>