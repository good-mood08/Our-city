<script setup lang="ts">
import type { Status } from '~/assets/typescript/types';

const props = withDefaults(defineProps <{
    variant?: Status
}>(), {
    variant: 'blue'
})
const text = ref('в работе')
const text_color = ref('#155DFC')
const frame_back_color = ref('#EFF6FF')
const frame_border_color = ref('#BEDBFF')
if (props.variant === "red") {
    frame_border_color.value = '#FFD7A8'
    frame_back_color.value = '#FFF7ED'
    text_color.value = '#CE4100'
    text.value = 'рассмативается'
}
if (props.variant === 'green') {
    frame_border_color.value = '#B9F8CF'
    frame_back_color.value = '#F0FDF4'
    text_color.value = '#008236'
    text.value = 'решено'
}
</script>


<template>
    <div class="status-frame">
            <span class="status">
                {{ text }}
            </span>
        </div>
</template>


<style scoped>
.status-frame {
    display: inline-flex;
    padding: 6px 8px ;
    border-radius:7px ;
    background-color: v-bind(frame_back_color) ;
    border: solid 1px v-bind(frame_border_color);
    flex-wrap: nowrap;
    
}
.status {
    color: v-bind(text_color) ;
    font-size: 14px;
    font-weight: 500;
    text-wrap: nowrap;
}
</style>