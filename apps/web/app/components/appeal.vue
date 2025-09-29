<script setup lang="ts">
const props =  defineProps({
  title: {
    type: String,
    default: 'Заголовок'
  },
  description: {
    type: String,
    default: 'Текст'
  },
  number: {
    type: Number,
    default: 0
  },
  svg: {
    type: String,
    default:'assets/vectors/house.svg'
  }
})
</script>

<template>
    <div class="main-frame">
        <div class="block-frame">
            <div class="icon">
                <img src="assets/vectors/house.svg" alt="eror">
            </div>
            <div class="text-frame">
                <h4 class="title">{{ props.title }} </h4>
                <p class="description">{{ props.description }}</p>
            </div>
        </div>
        <div class="number-frame">
            <span class="number">{{ props.number }}</span>
        </div>
    </div>
</template>


<style scoped>
.main-frame {
    display: flex;
    position: relative;
    flex-direction: row;
    padding: 20px 10px ;
    justify-content: space-between;
    align-items: center;
    /* border:solid 1px ; */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    background-color: white;
    border-radius: 10px;
}
.block-frame {
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 15px;

}
.icon {
    display: inline-flex;
    width: 50px;
    height: 50px;
    background-color: #DBEAFE;
    border-radius: 100%;
    align-items: center;
    justify-content: center;
}
.text-frame {
    display: inline-flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
}
.title {
    margin: 0;
    color: #000000;
    font-size:15px;
    font-weight:600;
}
.description {
    margin: 0;
    color: #757575;
    font-size:14px;
    font-weight:500;
}
.number-frame {
    border-radius: 10px;
    display: flex;
    padding:2px 7px ;
    justify-content: center;
    align-items: center;
    background-color: #DBEAFE ;
}
.number { 
    font-size: 15px;
    font-weight: 600;
    color: #155DFC;
}

</style>