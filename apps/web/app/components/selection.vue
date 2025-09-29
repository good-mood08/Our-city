<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        default:'Заголовок' 
    }
})
</script>


<template>
<div class="select-frame">
    <h3 class="title">{{ props.title }}</h3>
    <slot></slot>
</div>
</template>


<style scoped>
.select-frame {
    display: flex;
    padding: 20px 0;
    flex-direction: column;
    gap: 12px;
    justify-content: start;
}
.title {
    font-size: 20px;
    font-weight: 500;

}
</style>