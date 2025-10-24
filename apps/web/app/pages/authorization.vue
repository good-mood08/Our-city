
<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'

const items = [
  {
    label: 'Вход',
    slot: 'login' as const
  },
  {
    label: 'Регистрация',
    slot: 'auth' as const
  }
] satisfies TabsItem[]

const state = reactive({
  email: '',
  password: '',
  name:'',
  tel:'',
  newEmail: '',
  newPassword: '',
  confirmPassword: ''
})


</script>




<template >
    <pageHeader></pageHeader>
    
    
    <div class="px-5 py-5 flex flex-col gap-5 " >
        <!-- <ClientOnly > -->
        <div class="shadow-base rounded-[15px] px-5 py-5 bg-white flex flex-col gap-6.25">
            <div class="flex flex-col justify-center items-center gap-5">
                <img src="/vectors/logo.svg" alt="">
                <span class="t-lg text-center">Требуется авторизация</span>
                <p class="t-base text-[#757575] text-center text-wrap">Для подачи заявки необходимо войти в систему или зарегистрироваться</p>
            </div>
            <ClientOnly>
                <UTabs
                    :items="items" 
                    variant="pill" 
                    class="gap-4 w-full"
                    :ui="{
                        list: 'rounded-[20px] ',
                        indicator: 'rounded-[20px]  bg-white', 
                        label: 'text-black t-base',  
                    }"
                    size="sm"
                >
                    <template #login>

                        <UForm :state="state" class="flex flex-col gap-4">
                        <UFormField label="Email" name="email">
                            <UInput icon="lucide:mail" v-model="state.email" class="w-full" color="info" size="lg" type="email" />
                        </UFormField>
                        <UFormField label="Пароль" name="password">
                            <UInput icon="lucide:lock" v-model="state.password" color="info" size="lg" class="w-full" type="password" />
                        </UFormField>

                        <UButton label="Войти" type="submit" variant="solid" class="w-full justify-center py-4 rounded-[10px] bg-[#155DFC] active:bg-accented hover:bg-[#155DFC] "  
                        />
                        </UForm>
                    </template>

                    <template #auth>


                        <UForm :state="state" class="flex flex-col gap-4">
                        <UFormField label="Полное имя" name="name" required>
                            <UInput icon="lucide:user" v-model="state.name" type="text" color="info" size="lg" required class="w-full" />
                        </UFormField>
                        <UFormField label="Email" name="new email" required>
                            <UInput icon="lucide:mail" v-model="state.newEmail" required class="w-full" color="info" size="lg" type="email" />
                        </UFormField>
                        <UFormField  label="Телефон" name="tel" required>
                            <UInput icon="lucide:phone" v-model="state.tel" type="tel" color="info" size="lg" required class="w-full" />
                        </UFormField>
                        <UFormField label="Пароль" name="new" required>
                            <UInput  icon="lucide:lock" v-model="state.newPassword" type="password" color="info" size="lg" required class="w-full " />
                        </UFormField>
                        <UFormField label="Подтвердите пароль" name="confirm" required>
                            <UInput icon="lucide:lock-keyhole" v-model="state.confirmPassword" type="password" color="info" size="lg" required class="w-full" />
                        </UFormField>

                        <UButton label="Зарегистрироваться" type="submit" variant="solid" activeColor="info" class="w-full justify-center py-4 rounded-[10px] bg-[#155DFC] active:bg-accented hover:bg-[#155DFC] " 
                        />
                        </UForm>
                    </template>
                </UTabs>
            </ClientOnly> 
        </div>

        <div class="px-6.25 py-5 flex flex-col gap-2.5 justify-center items-center text-[#193CB8] bg-[#EFF6FF] shadow-base rounded-[15px]" >
            <span class="t-lg">Зачем регистрироваться?</span>
            <p class="t-base text-center">Отслеживайте статус заявок, получайте уведомления и ведите историю обращений.</p>
        </div>
    <!-- </ClientOnly> -->
    </div>
</template>