require('dotenv').config()

module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: "nuxt-pwa",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                hid: "description",
                name: "description",
                content: "Nuxt.js project"
            }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            {
                rel: "stylesheet",
                href:
                    "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
            },
            { rel: "manifest", href: "/manifest.json" }
        ]
    },

    /*
     ** Customize the progress bar color
     */
    loading: { color: "#FF4500" },
    /*
     ** Build configuration
     */
    modules: [
        '@nuxtjs/dotenv',
        [
            "nuxt-fontawesome",
            {
                component: "fa",
                imports: [
                    // import whole set
                    {
                        set: "@fortawesome/free-solid-svg-icons",
                        icons: ["fas"]
                    }
                ]
            }
        ],
        ['nuxt-validate', {
            lang: 'en',
        }],
        ['nuxt-i18n', {
            locales: [
                {
                    code: 'en',
                    iso: 'en-US',
                    name: 'English',
                    // langFile: 'en-US.json'
                    file: 'en-US.json'
                },
                {
                    code: 'fr',
                    iso: 'fr-FR',
                    name: 'Français',
                    // langFile: 'fr-FR.json'
                    file: 'fr-FR.json'
                },
                {
                    code: 'de',
                    iso: 'de-DE',
                    name: 'Deutsch',
                    // langFile: 'de-DE.json'
                    file: 'de-DE.json'
                }
            ],
            // loadLanguagesAsync: true,
            lazy: true,
            langDir: 'lang/',
            defaultLocale: 'en',
            seo: false
        }]
    ],
    plugins: [
        { src: "~/plugins/vuetify.js", ssr: true },
        { src: "~/plugins/firebase-client-init.js", ssr: false },
        { src: "~/plugins/auth-cookie.js", ssr: false },
        { src: "~/plugins/vuex-persist", ssr: false },
        { src: "~/plugins/vue-moment", ssr: false },
        { src: "~/plugins/async-computed.js", ssr: false },
        { src: '~/plugins/vue-notifications.js', ssr: false },
        { src: '~/plugins/vue-swal.js', ssr: false }
    ],
    serverMiddleware: [
        "~/serverMiddleware/validateFirebaseIdToken",
        { 
            path: "/admin",
            handler: "~/serverMiddleware/authAdmin"
        },
        {
            path: "/register-new-user",
            handler: "~/serverMiddleware/registerNewUser"
        },
        {
            path: "/subscriptions/fetch-subscriptions",
            handler: "~/serverMiddleware/subscriptions/fetchSubscriptions"
        },
        {
            path: "/subscriptions/create-subscription",
            handler: "~/serverMiddleware/subscriptions/createSubscription"
        },
        {
            path: "/update-user-tokens",
            handler: "~/serverMiddleware/updateUserTokens"
        },
        {
            path: "/move-old-events",
            handler: "~/serverMiddleware/moveOldEvents"
        },
        {
            path: "/subscriptions/send-notifications",
            handler: "~/serverMiddleware/subscriptions/sendNotifications"
        },
        // {
        //     path: "/api/fetch-past-premier-league-matches",
        //     handler: "~/serverMiddleware/api/fetchPastPremierLeagueMatches"
        // },
        // {
        //     path: "/api/fetch-next-premier-league-matches",
        //     handler: "~/serverMiddleware/api/fetchNextPremierLeagueMatches"
        // },
        {
            path: "/api/fetch-league-matches", // POST request with league_id as body data
            handler: "~/serverMiddleware/api/fetchLeagueMatches"
        },
        {
            path: "/api/fetch-next-matches", // GET request
            handler: "~/serverMiddleware/api/fetchNextMatches"
        },
        {
            path: "/api/fetch-all-standings", // GET request
            handler: "~/serverMiddleware/api/fetchAllStandings"
        },
        {
            path: "/api/fetch-live-score", // GET request
            handler: "~/serverMiddleware/api/fetchLiveScore"
        },
        {
            path: "/api/fetch-live-events", // GET request
            handler: "~/serverMiddleware/api/fetchLiveEvents"
        },
        {
            path: "/api/fetch-ending-matches", // GET request
            handler: "~/serverMiddleware/api/fetchEndingMatches"
        }
        // {
        //     path: "/api/fetch-league-standing",
        //     handler: "~/serverMiddleware/api/fetchLeagueStanding"
        // }
    ],
    css: ["~/assets/style/app.styl"],
    build: {
        /*
         ** Run ESLint on save
         */
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: "pre",
                    test: /\.(js|vue)$/,
                    loader: "eslint-loader",
                    exclude: /(node_modules)/
                })
            }
        }
    },
    dev: (process.env.NODE_ENV !== 'production'),
}
