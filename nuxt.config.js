export default {
  head: {
    title: 'Hiure Queiroz',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'hiure',
        content: 'Sou físico, mas gosto mesmo é de fuçar e aprender coisas novas, aqui eu conto um pouco mais da minha história...'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }]
  },
  seo: {
    baseUrl: 'https://hiurequeiroz.github.io',
    name: 'Hiure Queiroz',
    templateTitle: '%name% — %title%',
    description: "Hi I am Hiure, and I am a physicist, but I really like to dig and learn new things, here I tell you a little more of my story... .",
    keywords: 'redes comunitárias, developer, network',
    canonical: 'auto',
    isForcedTrailingSlash: false,
    author: 'Hiure Queiroz',
    openGraph: {
      image: {
      url: 'https://hiurequeiroz.github.io/_nuxt/img/perfil-colors.ed7a5e3.png',
      }
    },
  },
  target: 'static',
  router: {
    base: '/'
  },
  css: ['node_modules/lite-youtube-embed/src/lite-yt-embed.css'],
  plugins: [
    '@/plugins/vimg.js',
    '~/plugins/youtube.client.js'
  ],
  env: {
    tileServer: process.env.TILE_SERVER || "https://api-mapa.janeraka.org",
  },
  modules: ["@nuxt/content", "nuxt-i18n"],
  i18n: {},
  buildModules: [
    "nuxt-windicss",
    "@nuxtjs/pwa",
    "@nuxtjs/localforage",
    "@nuxtjs/svg",
  ],
  components: true,
 
  server: {
    host: "0.0.0.0",
  },

};
