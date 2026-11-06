export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Jetroh Salazar | Web Designer',
      meta: [
        {
          name: 'description',
          content: 'A personal web designer portfolio.'
        }
      ]
    }
  }
})
