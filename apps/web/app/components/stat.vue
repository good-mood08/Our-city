<script setup lang="ts">
const props = defineProps({
  solved: {
    type: Number,
    default: 124
  },
  inProgress: {
    type: Number,
    default: 16
  }
})
</script>



<template>
  <div class="stats">
    <div class="stat">
      <span class="number">{{ props.solved }}</span>
      <span class="label">решено в этом месяце</span>
    </div>
    <div class="stat">
      <span class="number">{{ props.inProgress }}</span>
      <span class="label">решается сейчас</span>
    </div>
  </div>
</template>






<style scoped>

.stats {
  display: flex;
  flex-direction: row;
  gap: 12px;
}

.stat {
  flex: 1;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 12px;
  text-align: center;
}



.number {
  display: block;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 4px;
}


</style>






