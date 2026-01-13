<template>
    <a class="flex items-center gap-2 text-white hover:text-gray-400" target="_blank" :href="props.link.url"><img v-if="props.link.icon" :src="GitHub" class="h-4 aspect-square" /><span class="h-fit">{{ props.link.text }}</span></a><div v-if="props.next !== undefined" class="w-px h-[80%] bg-white"></div>
</template>

<script setup lang="ts">

import GitHub from '../assets/github-mark-white.png';

const props = defineProps<{
    link: {
        url: string,
        text: string,
        icon?: 'github'
    },
    next: undefined | Object
}>();

</script>

<style scoped>

</style>