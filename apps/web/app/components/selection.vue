<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        default:'Заголовок' 
    },
        svg: {
        type:String,
        
    }
})
</script>


<template>
<div class=" flex py-5 flex-col gap-3 justify-start  ">
    <div class="flex gap-2.5">
        <img :src="props.svg" alt="" class="w-5">
        <h3 class=" text-stone-950 t-xl">{{ props.title }}</h3>
    </div>
    <slot></slot>
</div>
</template>
