<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        default:'Заголовок' 
    }
})
</script>


<template>
<div class=" flex py-5 flex-col gap-3 justify-start  ">
    <h3 class=" text-stone-950 t-xl">{{ props.title }}</h3>
    <slot></slot>
</div>
</template>
