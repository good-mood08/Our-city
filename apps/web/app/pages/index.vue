<template>
      <div class="flex flex-col g-4 p-5">
    
    
    <selection>
      <appeal :number="100" v-for="value in 4"/>
    </selection>
    <selection>
      <request status_variant="red" v-for="value in 4"></request>
    </selection>

   
  </div>
</template>

