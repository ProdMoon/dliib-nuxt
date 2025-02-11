// https://nuxt.com/docs/api/configuration/nuxt-config

// for production
const BASE_URL = 'https://dliibapi.azurewebsites.net';

// for local development
// const BASE_URL = 'http://localhost:5214';

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@sidebase/nuxt-auth'],

  runtimeConfig: {
    public: {
      baseURL: BASE_URL,
    },
  },

  app: {
    head: {
      title: '드립 : dliib',
      meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      htmlAttrs: {
        lang: 'ko',
      },
    },
  },

  auth: {
    baseURL: BASE_URL + '/api/auth',
    provider: {
      type: 'refresh',
      endpoints: {
        signIn: { path: '/login', method: 'post' },
        signOut: { path: '/logout', method: 'post' },
        signUp: { path: '/signup', method: 'post' },
        getSession: { path: '/getSession', method: 'get' },
        refresh: { path: '/refresh', method: 'post' },
      },
      pages: {
        login: '/account/login',
      },
      token: { signInResponseTokenPointer: '/accessToken', maxAgeInSeconds: 3600 },
      refreshToken: { signInResponseRefreshTokenPointer: '/refreshToken', maxAgeInSeconds: 3600 * 24 * 30 },
      sessionDataType: { email: 'string' },
    },
  },

  compatibilityDate: '2025-02-11',
});