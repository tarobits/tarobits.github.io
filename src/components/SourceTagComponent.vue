<template>
    <div :style="tagStyle" class="px-3 text-[1rem] rounded-md h-fit order-999 items-center flex w-fit">
        <span>{{ tagStyles[props.tag].text }}</span>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const tagStyles: Record<'open' | 'closed', {
    textColor: string,
    backgroundColor: string,
    text: string
}> = {
    'open': {
        textColor: '#ffffff',
        backgroundColor: '#22c55e',
        text: 'Open-Source'
    },
    'closed': {
        textColor: '#ffffff',
        backgroundColor: '#ef4444',
        text: 'Closed-Source'
    }
}


const props = defineProps<{
    tag: 'open' | 'closed'
}>();

const tagStyle = computed(() => ({
    'background-color': tagStyles[props.tag].backgroundColor,
    'color': tagStyles[props.tag].textColor
}));
</script>

<style scoped>

</style>