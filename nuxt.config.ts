useServerSeoMeta({
    title: 'krissh',
    ogTitle: 'krissh',
    description: 'smartest man on earth',
    ogDescription: 'smartest man on earth',
    ogImage: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg',
    twitterCard: 'summary_large_image',
})
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=device-width, initial-scale=1',
            title: 'krissh',
            meta: [
                // <meta name="description" content="My amazing site">
                { name: 'smartest man on earth', content: 'the inner workings of a genius' }
            ],
        }
    }
})  