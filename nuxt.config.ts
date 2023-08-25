// https://nuxt.com/docs/api/configuration/nuxt-config
const config = {
    ssr:process.env.SSR === 'true',
    head: {
        title: 'Nuxt 3 custom install',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''},
            {name: 'format-detection', content: 'telephone=no'},
        ],
        bodyAttrs: {
            class: 'rbt-header-sticky'
        },
        // link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
    },
    css: [
        // "~/assets/css/_colors.scss",
        '~/assets/scss/style.scss',
        // '~/assets/scss/style.scss',
    ],
    // styleResources: {
    //     scss: ["~/assets/css/_colors.scss"],
    // },
    modules: [
        // ['@nuxt-alt/auth', {
        //     redirect: {
        //         login: '/?modal=login',
        //         logout: '/',
        //         home: '/'
        //     },
        //     strategies: {
        //         laravelSanctum: {
        //             redirectPath: null,
        //             user: {
        //                 property: false,
        //                 // autoFetch: false
        //             },
        //             provider: 'laravel/sanctum',
        //             url: process.env.API_URL,
        //             endpoints: {
        //                 login: {
        //                     url: `/v1/login`,
        //                     method: 'post',
        //
        //                 },
        //                 refresh: {
        //                     url: `/auth/refresh`,
        //                     method: 'post'
        //                 },
        //                 user: {
        //                     url: `/v1/user`,
        //                     method: 'get'
        //                 },
        //                 logout: {
        //                     url: `/v1/logout`,
        //                     method: 'post'
        //                 }
        //             }
        //         },
        //     }
        // }],
        // 'nuxt-snackbar',
        '@pinia/nuxt',
       // '@nuxtjs/sentry'
    ],
    // sentry: {
    //     dsn: "https://4bb8bbbf847b05d5b6b2a0a04c5f1dc7@o4505743398010880.ingest.sentry.io/4505743483076608",
    //     disableClientSide: false,
    //     disableServerSide: false,
    //     lazy: true,
    //     config: {
    //         // Дополнительные настройки Sentry
    //         // Например, имя вашего приложения
    //         release: 'my-app@1.0.0'
    //     }
    // },
    // snackbar: {
    //     top: true,
    //     right: true,
    //     duration: 3000
    // },
    components: [
        {
            path: '~/components',
            pathPrefix: false,
            ignore: ['**/*.stories.js'],
            extensions: ['vue'],
        },
    ],
    publicRuntimeConfig: {
        API_URL: process.env.API_URL,
        APP_ENV: process.env.APP_ENV,
    },
    runtimeConfig: {
        public: {
            API_URL: process.env.API_URL || 'http://localhost/api',
            PUSHER_PORT: process.env.PUSHER_PORT,
            PUSHER_APP_ID: process.env.PUSHER_APP_ID,
            PUSHER_APP_KEY: process.env.PUSHER_APP_KEY,
            PUSHER_APP_SECRET: process.env.PUSHER_APP_SECRET,
            PUSHER_HOST: process.env.PUSHER_HOST,
            PUSHER_SCHEME: process.env.PUSHER_SCHEME,
            PUSHER_APP_CLUSTER: process.env.PUSHER_APP_CLUSTER,
            BROADCASTER_DRIVER: process.env.BROADCASTER_DRIVER,
            PUSHER_ENABLED_TRANSPORTS: process.env.PUSHER_ENABLED_TRANSPORTS,
            PUSHER_ENABLED_FORCE_TLS: process.env.PUSHER_ENABLED_FORCE_TLS,
            APP_ENV: process.env.APP_ENV,
            APP_DSN: process.env.APP_DSN,
            LOG_URL: process.env.LOG_URL,
        },
    },
    env: {
        // API_URL: process.env.API_URL || 'http://localhost:3000' // provide a default value
    },
    // plugins: [
    //     '~/plugins/maska.js',
    //     '~/plugins/echo.client.js',
    //     '~/plugins/sentry.client.js'
    // ],
    //'~/plugins/map.client.js'
    app: {
        baseURL: '/games/', // baseURL: '/<repository>/'
        buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
    }
}

export default defineNuxtConfig(config)
// export default config
