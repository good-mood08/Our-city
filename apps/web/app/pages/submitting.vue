
<script setup lang="ts">
const items = ref(['Backlog', 'Todo', 'In Progress', 'Done'])
const categ = ref(['Apple', 'Banana', 'Blueberry', 'Grapes', 'Pineapple'])
const value = ref('')


const state = reactive({
  email: '',
  password: '',
  value: ''
})

const toast = useToast()
async function onSubmit(event:any) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
}
</script>

<template>
    <div class="px-5 py-5 ">
        <UForm :state="state" class="flex flex-col gap-2.5 " @submit="onSubmit">
            <selection title="msdmdsad" svg="/vectors/circle-alert.svg" >
                <UFormField label="Email" name="email"  class="w-full">
                  <USelectMenu v-model="value" :items="categ" class="w-full"/>
                </UFormField>
                  <UFormField label="Name" name="name"  class="w-full">
                    <UTextarea v-model="state.value" autoresize  class="w-full"/>
                  </UFormField>
                <UFormField label="Password" name="password" class="w-full">
                   <UInput v-model="state.password" type="password" class="w-full" />
                </UFormField>
                <UFormField label="Name" name="name"  class="w-full">
                  <USelectMenu placeholder="Select status" :items="items" class="w-full" />
                </UFormField>
            </selection>
    
            <UButton type="submit">
               Submit
            </UButton>
        </UForm>

    </div>
</template>