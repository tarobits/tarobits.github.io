<template>
    <div :style="tagStyle" class="px-3 text-[1rem] rounded-md h-fit order-999 items-center flex w-fit">
        <span>{{ (props.type === 'frontend' ? 'Frontend: ' : props.type === 'backend' ? 'Backend: ' : '') +  tagStyles[props.tag].text }}</span>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { BackendFrameworks, FrontendFrameworks, ProgrammingLanguage } from '../types/project';

const tagStyles: Record<BackendFrameworks|FrontendFrameworks|ProgrammingLanguage, {
    textColor: string,
    backgroundColor: string,
    text: string
}> = {
    'laravel': {
        textColor: '#ff2d20',
        backgroundColor: '#ffffff',
        text: 'Laravel'
    },
    'vue': {
        textColor: '#42B883',
        backgroundColor: '#35495E',
        text: 'Vue.js'
    },
    'js': {
        textColor: '#ffffff',
        backgroundColor: '#F7DF1E',
        text: 'JavaScript'
    },
    'ts': {
        textColor: '#ffffff',
        backgroundColor: '#3178C6',
        text: 'TypeScript'
    },
    'python': {
        textColor: '#FFD43B',
        backgroundColor: '#3776AB',
        text: 'Python'
    },
    'php': {
        textColor: '#ffffff',
        backgroundColor: '#777BB4',
        text: 'PHP'
    }
}


const props = defineProps<{
    tag: BackendFrameworks | FrontendFrameworks | ProgrammingLanguage,
    type?: 'backend' | 'frontend'
}>();

const tagStyle = computed(() => ({
    'background-color': tagStyles[props.tag].backgroundColor,
    'color': tagStyles[props.tag].textColor
}));
</script>

<style scoped>

</style>