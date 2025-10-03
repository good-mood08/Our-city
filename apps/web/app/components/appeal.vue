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
    <div class=" flex flex-row py-5 px-2.5 justify-between items-center shadow shadow-[rgb(0,0,0,0.25)] bg-[#ffffff] rounded-xl">
        <div class=" flex justify-center items-center gap-3.75 ">
            <div class=" w-12.5 h-12.5 flex justify-center items-center gap-3.75 bg-[#DBEAFE] rounded-[100%]">
                <img :src="props.svg" alt="eror">
            </div>
            <div class="  flex flex-col justify-center">
                <h4 class=" text-[#000000] t-base">{{ props.title }} </h4>
                <p class=" text-[#757575] t-base">{{ props.description }}</p>
            </div>
        </div>
        <div class=" rounded-xl flex justify-center items-center px-1.5 py-0.5 bg-[#DBEAFE] ">
            <span class=" font-semibold text-sm text-[#155DFC]">{{ props.number }}</span>
        </div>
    </div>
</template>

