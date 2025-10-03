<script setup lang="ts">
import type { Status } from '~/assets/typescript/types';

const props = withDefaults(defineProps <{
    variant?: Status
}>(), {
    variant: 'blue'
})
</script>


<template>
    <div v-if="variant ==='blue'" class=" flex py-1.5 px-2 rounded-[7px] dg-[#EFF6FF] border-1 border-[#BEDBFF]">
        <span  class=" text-nowrap t-base text-[#155DFC]">
            в работе
        </span>
    </div>
    <div v-if="variant ==='red'" class=" flex py-1.5 px-2 rounded-[7px] bg-[#FFF7ED] border-1 border-[#FFD7A8]">
        <span  class="text-nowrap t-base text-[#CE4100]">
            рассмативается
        </span>
    </div>
    <div v-if="variant ==='green'" class=" flex py-1.5 px-2 rounded-[7px] bg-[#F0FDF4] border-1 border-[#B9F8CF]">
        <span class="text-nowrap t-base text-[#008236]">
            решено
        </span>
    </div>
</template>


