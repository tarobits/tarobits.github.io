<template>
    <div :style="licenseStyle" class="px-3 text-[1rem] rounded-md h-fit order-999 items-center flex w-fit">
        <span>{{$t('components.license') + ": " + props.license }}</span>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { License } from '../types/project';

const licenseStyles: Record<License, {
    textColor: string,
    backgroundColor: string
}> = {
    'MIT': {
        textColor: '#ffffff',
        backgroundColor: '#22c55e'
    },
    'Apache 2.0': {
        textColor: '#ffffff',
        backgroundColor: '#38bdf8'
    },
    'MPL': {
        textColor: '#ffffff',
        backgroundColor: '#a855f7'
    },
    'LGPL': {
        textColor: '#ffffff',
        backgroundColor: '#f59e0b'
    },
    'GPL': {
        textColor: '#ffffff',
        backgroundColor: '#ef4444'
    },
    'AGPL': {
        textColor: '#ffffff',
        backgroundColor: '#b91c1c'
    }
}


const props = defineProps<{
    license: License
}>();

const licenseStyle = computed(() => ({
    'background-color': licenseStyles[props.license].backgroundColor,
    'color': licenseStyles[props.license].textColor
}));
</script>

<style scoped>

</style>