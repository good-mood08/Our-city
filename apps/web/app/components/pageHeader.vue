<script setup lang="ts">
withDefaults(defineProps<{
    text?:string
}>(),{
    text: 'Вход в систему'
})
</script>

<template>
    <div class="sticky top-0 px-5 h-17.5 items-center flex  gap-6.25 shadow shadow-[rgb(0,0,0,0.25)]">
        <button class="w-[24px] h-[24px]"><img src="/vectors/arrow-left.svg" alt=""></button>
        <span class="text-lg text-black ">{{ text }}</span>
    </div>
</template>