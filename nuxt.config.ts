// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs',
        semi: true
      }
    }
  },
  future: {
    compatibilityVersion: 4
  },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts'
  ],
  srcDir: 'app',
  serverDir: 'server',
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'first' }],
    configPath: 'tailwind.config.js',
    exposeConfig: {
      level: 2
    },
    viewer: true
  },
  vite: {
    server: {
      hmr: {
        protocol: 'ws',
        host: 'localhost'
      }
    },
    css: {
      devSourcemap: false
    }
  },
  fonts: {
    experimental: {
      processCSSVariables: true
    },
    families: [
      {
        name: 'Gentium Book Plus',
        provider: 'google'
      },
      {
        name: 'Rouge Script',
        provider: 'google'
      },
      {
        name: 'Tangerine',
        provider: 'google',
        weights: [400, 700]
      },
      {
        name: 'Smooch Sans',
        provider: 'google',
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900]
      }
    ]
  }
});
