<template>
  <heder />
  <hero />
  <div class="flex flex-col g-4 p-5">
    
  <div class="flex flex-row gap-4">
    <buttonApplication 
      title="Подать заявку" 
      description="Сообщить о проблеме" 
      color="red"
    />
    <buttonApplication 
      title="Мои заявки" 
      description="Сообщить о проблеме" 
      color="blue"
    />
  </div>


    <selection>
      <appeal :number="100" v-for="value in 4"/>
    </selection>
    <selection>
      <request status_variant="red" v-for="value in 4"></request>
    </selection>

   
  </div>
</template>

