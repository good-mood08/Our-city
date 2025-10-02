<script setup lang="ts">
import type { Status } from '~/assets/typescript/types';


const props =  withDefaults(defineProps<{
  title?: string,
  adress?: string,
  date?: string,
  status_variant?: Status
}>(),{
    title: 'Не работает отопление в подъезде',
    adress:  'Волжский, ул. Ленина, д. 15',
    date: '15.01.2025',
    variant: 'blue',
})


</script>

<template>
    <div class="py-5 px-3.75 content-center items-center bg-amber-50 shadow-sm shadow-stone-400 rounded-xl">
        <div class="flex flex-row justify-between items-center gap-2.5" >
            <p class="text-stone-950 font-medium text-sm text-balance">{{ props.title }}</p>
            <status :variant="props.status_variant" v-bind="$attrs"/>
        </div>
        <div class="flex flex-row items-center gap-0.5 text-sm font-medium text-zinc-500">
            <img src="/vectors/map-pin.svg" alt="">
            <p>{{ props.adress }}</p>
            <img src="/vectors/dot.svg" alt="*">
            <span>{{ props.date }}</span>
        </div>
    </div>
</template>
