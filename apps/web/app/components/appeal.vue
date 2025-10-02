<script setup lang="ts">
const props =  defineProps({
  title: {
    type: String,
    default: 'Заголовок'
  },
  description: {
    type: String,
    default: 'Текст'
  },
  number: {
    type: Number,
    default: 0
  },
  svg: {
    type: String,
    default:'/vectors/house.svg'
  }
})
</script>

<template>
    <div class="main-frame flex flex-row py-5 px-2.5 justify-between items-center shadow shadow-stone-400 bg-amber-50 rounded-xl">
        <div class="block-frame flex justify-center items-center gap-3.75 ">
            <div class="icon w-12.5 h-12.5 flex justify-center items-center gap-3.75 bg-blue-100 rounded-[100%]">
                <img :src="props.svg" alt="eror">
            </div>
            <div class="text-frame  flex flex-col justify-center">
                <h4 class="title text-stone-950 font-medium text-sm">{{ props.title }} </h4>
                <p class="description text-zinc-500 text-sm font-medium">{{ props.description }}</p>
            </div>
        </div>
        <div class="number-frame rounded-xl flex justify-center items-center px-1.5 py-0.5 bg-blue-100 ">
            <span class="number font-semibold text-sm text-[#155DFC]">{{ props.number }}</span>
        </div>
    </div>
</template>


<style scoped>
</style>