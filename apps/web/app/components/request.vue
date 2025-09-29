<script setup lang="ts">
import type { Status } from '~/assets/typescript/types';


const props =  withDefaults(defineProps<{
  title?: string,
  adress?: string,
  date?: string,
  status_variant?: Status
}>(),{
    title: 'Не работает отопление в подъезде',
    adress:  'Волжский, ул. Ленина, д. 15',
    date: '15.01.2025',
    variant: 'blue',
})


</script>

<template>
    <div class="main-frame">
        <div class="title-frame">
            <p class="title">{{ props.title }}</p>
            <status :variant="props.status_variant" v-bind="$attrs"/>
        </div>
        <div class="description-frame">
            <img src="/vectors/map-pin.svg" alt="">
            <p>{{ props.adress }}</p>
            <img src="/vectors/dot.svg" alt="*">
            <span>{{ props.date }}</span>
        </div>
    </div>
</template>

<style scoped>
.description-frame {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 1px;
    color: #6C6C6C;
    font-size: 14px;
    font-weight: 500;
}
.main-frame {
    padding:  20px 15px;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
}

.title-frame {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    column-gap: 10px;
}
.title {
    color: #000000;
    font-size: 14px;
    font-weight: 500;
    text-wrap:balance ;
}
</style>