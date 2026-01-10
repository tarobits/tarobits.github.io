<template>
    <div class="min-h-full max-h-svh w-full flex flex-col overflow-hidden">
        <div class="w-full h-fit py-5 px-10 z-999 bg-gray-900 rounded-b-2xl flex flex-col lg:flex-row gap-x-10 gap-y-2 shadow-md shadow-gray-950"> 
            <span class="text-3xl z-1 text-gray-200 overflow-hidden text-center">{{ $t('title') }}</span>
            <div class="w-full h-fit overflow-hidden flex flex-1 flex-wrap gap-3 lg:gap-5">
                <button class="h-full text-gray-400 bg-gray-900 hover:text-gray-200 hover:bg-gray-800 disabled:text-gray-200 disabled:bg-gray-800 rounded-xl py-2 px-4 lg:px-5 cursor-pointer text-sm lg:text-[1rem]" @click="router.push('/')" :disabled="$route.path === '/'">{{ $t('nav.home') }}</button>
                <button class="h-full text-gray-400 bg-gray-900 hover:text-gray-200 hover:bg-gray-800 disabled:text-gray-200 disabled:bg-gray-800 rounded-xl py-2 px-5 cursor-pointer text-sm lg:text-[1rem]" @click="router.push('/projects/')" :disabled="$route.path.match(/^\/projects\/?.*?/) !== null">{{ $t('nav.projects') }}</button>
                <div class="w-fit h-full ml-0 lg:ml-auto flex gap-2 items-center order-999">
                    <button class="text-gray-400 bg-gray-900 hover:text-gray-200 hover:bg-gray-800 disabled:text-gray-200 disabled:bg-gray-800 rounded-xl p-2 cursor-pointer text-sm lg:text-[1rem]" :disabled="locale === 'de'" @click="setLang('de')">🇩🇪 Deutsch</button>
                    <span class="text-gray-400 text-2xl">|</span>
                    <button class="text-gray-400 bg-gray-900 hover:text-gray-200 hover:bg-gray-800 disabled:text-gray-200 disabled:bg-gray-800 rounded-xl p-2 cursor-pointer text-sm lg:text-[1rem]" @click="setLang('en')" :disabled="locale === 'en'">🇬🇧/🇺🇸 English</button>
                </div>
            </div>
        </div>
        <div class="w-full h-full flex-1 grid relative bg-gray-800 overflow-hidden">
            <canvas class="z-2 absolute h-full w-full inset-0" ref="canvas"></canvas>
            <div class="w-full h-full p-5 overflow-hidden">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import router from '../router';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

function setLang(lang: string) {
    locale.value = lang;
    localStorage.setItem('language', lang);
}

const canvas = ref<HTMLCanvasElement>();

type Pixel = {
    x: number,
    y: number,
    vx: number,
    vy: number,
    size: number,
    color: string
}

onMounted(() => {
    locale.value = localStorage.getItem('language') ?? navigator.language.substring(0,2);

    const c = canvas.value;
    if (!c) return;
    const ctx = c.getContext("2d");

    c.width = c.offsetWidth;
    c.height = c.offsetHeight;

    let i = 0;
    const colors = [
        "#fed700",
        "#c241bb",
        "#66ffff",
        "#00bfff",
        "#4b78ed",
        "#6a5acd",
        "#8b67f6",
        "#6f00c1",
        "#a966da",
        "#8c33cd",
        "#6f00c1",
        "#530091",
        "#380061"
    ]

    const pixels: Pixel[] = Array.from({ length: 500 }, (): Pixel => ({
        x: Math.random() * c.width,
        y: Math.random() * c.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: (Math.random() + 0.5) * 3.5,
        color: getColor()
    }));

    function getColor() {
        i++;
        if (i > colors.length) i = 0;
        return colors[i];
    }

    function randomizeVelociy(p: Pixel) {
        p.vx = (Math.random() - 0.5) * 0.4;
        p.vy = (Math.random() - 0.5) * 0.4;
        return p;
    } 

    function animate() {
        if (ctx === null || !c) return;
        ctx.clearRect(0, 0, c.width, c.height);

        pixels.forEach(p => {
            p.x += p.vx
            p.y += p.vy

            if (p.x <= 0) {
                p.x = c.width-1;
                if (Math.random() > 0.5) {
                 p = randomizeVelociy(p);
                }
            }
            if (p.x >= c.width) {
                p.x = 1;
                if (Math.random() > 0.5) {
                 p = randomizeVelociy(p);
                }
            }
            if (p.y <= 0) {
                p.y = c.height-1;
                if (Math.random() > 0.5) {
                 p = randomizeVelociy(p);
                }
            }
            if (p.y >= c.height) {
                p.y = 1;
                p = randomizeVelociy(p);
                if (Math.random() > 0.5) {
                 p = randomizeVelociy(p);
                }
            }

            ctx.fillStyle = p.color;
            ctx.fillRect(p.x, p.y, p.size, p.size)
        })

        requestAnimationFrame(animate)
    }

    animate();

    window.addEventListener('mousemove', (ev) => {
        pixels.forEach(p => {
            const dx = (ev.clientX - (window.innerWidth - c.width)) - p.x;
            const dy = (ev.clientY - (window.innerHeight - c.height)) - p.y;
            const dist = Math.sqrt(dx*dx + dy*dy);

            if (dist < 40) {
                p.vx -= dx / dist * 0.2;
                p.vy -= dy / dist * 0.2;
            }
        })
    })
})
</script>

<style scoped>

</style>