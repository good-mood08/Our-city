<script setup lang="ts">

</script>

<template>
  <section class="hero">

      <div class="text-block">
        <h1 class="title">Вместе мы делаем город лучше</h1>
        <p class="subtitle">Электронные услуги администрации города Волжский</p>
      </div>
      <stat/>

  </section>
</template>

<style scoped>

.hero {

  margin-top: 65px;

  /* width: 100%; */
  /* height: 269px; */
  background: linear-gradient(to bottom right, #8231DF, #324AC0, #8231DF);
  color: white;
  padding: 30px 20px;
}




/* .hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  


  background: linear-gradient(135deg, #7B2FF7 0%, #00C6FF 100%);
  color: white;
} */

.text-block {
  margin-bottom: 20px;
}

.title {
  margin: 0;
  font-size: 25px;
  font-weight: 600;
  line-height: 1.3;
}

.subtitle {
  margin: 5px 0 0 0;
  font-size: 14px;
  font-weight: 500;
  opacity: 0.9;
}


.label {
  font-size: 13px;
  font-weight: 500;
  opacity: 0.95;
}
</style>