export default defineNuxtPlugin((nuxt) => {
    const colorMode = useColorMode()

    nuxt.hook('app:mounted', () => {
        colorMode.preference = 'light'
        colorMode.value = 'light'
    })
})