<script setup lang="ts">

</script>

<template>
  <header class="header">
    <div class="logo-frame">
      <img src="/vectors/logo.svg" alt="logo" class="logo"/>
      <div class="text-frame">
        <h2 class="title">Волжские</h2>
        <p class="subtitle">Городские услуги</p>
      </div>
    </div>
    <button class="action-btn">Войти</button>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 9px 20px;
  background-color: #ffffff;
  box-shadow: 0 3px 4px rgba(0,0,0,0.25);

}

.logo-frame {
  display: flex;
  align-items: center;
  gap: 12px;
  
}

.logo {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.text-frame {
  display: flex;
  flex-direction: column;
}

.title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #000000;
}

.subtitle {
  margin: 0;
  font-size: 13px;
  font-weight: 500;
  color: #6C6C6C;
}

.action-btn {
  background: none;
  border: none;
  font-size: 14px;
  font-weight: 600;
  color: #155DFC;
  cursor: pointer;
}
</style>