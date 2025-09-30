<script setup lang="ts">

</script>

<template>
  <heder />

    <hero />

  <div class="gap">
      <selection>
        <appeal v-for="value in 4" />
      </selection>
      <selection>
        <request status_variant="red" v-for="value in 4" />
      </selection>
  </div>
</template>

<style scoped>
.gap {
  display: grid;
  gap: 15px;
  
  padding: 20px;
}




</style>


