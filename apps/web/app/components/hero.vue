<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "Вместе мы делаем город лучше"
  },
  subtitle: {
    type: String,
    default: "Электронные услуги администрации города Волжский"
  },
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
  <section class="hero">
    <div class="content">
      <div class="text-block">
        <h1 class="title">{{ props.title }}</h1>
        <p class="subtitle">{{ props.subtitle }}</p>
      </div>

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
    </div>
  </section>
</template>

<style scoped>

.hero {
  margin-top: 65px;
  width: 100%;
  /* height: 269px; */
  background: linear-gradient(to bottom right, #8231DF, #324AC0, #8231DF);
  color: white;
  padding: 30px 0px;
}

.content {

  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
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

.label {
  font-size: 13px;
  font-weight: 500;
  opacity: 0.95;
}
</style>






