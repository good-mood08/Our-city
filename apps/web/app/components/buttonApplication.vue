<script setup lang="ts">

import type { ButtonColorApplication } from '~/assets/typescript/types';

const props = withDefaults(defineProps<{
  title?: string,
  description?: string,
  color?: ButtonColorApplication
}>(), {
  title: 'Кнопка',
  description: 'Описание',
  color: 'blue'
})

const icons = {
  blue: '/vectors/doc.svg',
  red: '/vectors/warning.svg'
}

const colors = {
  red: {
    bg: 'bg-[#FB2C36]',
  },
  blue: {
    bg: 'bg-[#155DFC]',
  }
}
</script>

<template>
  <button
    class="flex flex-col items-center rounded-[10px] shadow shadow-[rgb(0,0,0,0.25)] bg-white py-2.5 w-44.25 flex-1 gap-[15px]"
  >
    <div
      class="w-15 h-15 flex items-center justify-center rounded-full"
      :class="colors[color].bg"
    >
      <img :src="icons[color]" alt="icon" class="w-9.25 h-9.25 " />
    </div>
    <div>
      <p class="text-base font-medium text-[#000000]">{{ props.title }}</p>
      <span class="text-sm font-medium text-[#757575]">{{ props.description }}</span>
    </div>
  </button>
</template>
