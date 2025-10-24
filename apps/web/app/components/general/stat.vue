<script setup lang="ts">
const props = withDefaults( defineProps<{
  numder?: number,
  text?: string,

}>(),{
  text: "решено в этом месяце",
  numder: 12.343,
})
</script>



<template>
    <div class="flex  flex-col  py-2.25 px-2.5 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md  saturate-200 contrast-90">
      <span class="text-white font-bold text-3xl">{{ props.numder }}</span>
      <span class="text-center text-[#DBEAFE] text-nowrap t-base">{{ props.text }}</span>
    </div>
</template>









