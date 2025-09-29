<script setup lang="ts">

const props =  defineProps({
  title: {
    type: String,
    default: 'Не работает отопление в подъезде'
  },
  adress: {
    type: String,
    default: 'Волжский, ул. Ленина, д. 15'
  },
  date: {
    type: String,
    default: '15.01.2025'
  },
  status: {
    type: String,
    default:'в работе'
  }
})


</script>

<template>
    <div class="main-frame">
        <div class="title-frame">
            <p class="title">{{ props.title }}</p>
            <div class="status-frame">
                <span class="status">
                    {{ props.status  }}
                </span>
            </div>
        </div>
        <div class="description-frame">
            <img src="assets/vectors/map-pin.svg" alt="">
            <p>{{ props.adress }}</p>
            <img src="assets/vectors/dot.svg" alt="*">
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
.status-frame {
    display: inline-flex;
    padding: 6px 8px ;
    border-radius:7px ;
    background-color: #EFF6FF ;
    border: solid 1px #BEDBFF;
    flex-wrap: nowrap;
}
.status {
    color: #155DFC ;
    font-size: 14px;
    font-weight: 500;
    text-wrap: nowrap;
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