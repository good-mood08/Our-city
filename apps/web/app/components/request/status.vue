<script setup lang="ts">
import type { Status } from '~/assets/typescript/types'

const props = withDefaults(defineProps<{
  variant?: Status
}>(), {
  variant: 'blue'
})

const variants = {
  blue: {
    text: 'в работе',
    bg: 'bg-[#EFF6FF]',
    border: 'border-[#BEDBFF]',
    color: 'text-[#155DFC]',
  },
  red: {
    text: 'рассматривается',
    bg: 'bg-[#FFF7ED]',
    border: 'border-[#FFD7A8]',
    color: 'text-[#CE4100]',
  },
  green: {
    text: 'решено',
    bg: 'bg-[#F0FDF4]',
    border: 'border-[#B9F8CF]',
    color: 'text-[#008236]',
  },
}

</script>

<template>
  <div
    class="flex py-1.5 px-2 rounded-[7px] border "
    :class="variants[variant].bg, variants[props.variant].border"
  >
    <span class="text-nowrap t-base" :class="variants[props.variant].color">
        {{ variants[variant].text }}
    </span>
  </div>
</template>




