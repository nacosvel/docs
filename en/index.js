import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export const en = defineConfig({
    title: 'Nacosvel',
    description: 'Exploring the Elegant Implementation of Microservices in PHP',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: { src: '/vite-boilerplate.svg', width: 24, height: 24 },
        nav: [
            { text: 'Guide', link: '/guide/markdown', activeMatch: '/guide/' },
            { text: 'Reference', link: '/reference/api', activeMatch: '/reference/' },
        ],

        sidebar: {
            '/guide/': {
                base: '/guide/',
                items: [{
                    text: 'Guide',
                    collapsed: true,
                    items: [
                        { text: 'Markdown Guide', link: 'markdown' },
                        { text: 'Runtime API Guide', link: 'api' },
                    ],
                }],
            },
            '/reference/': {
                base: '/reference/',
                items: [{
                    text: 'Reference',
                    collapsed: true,
                    items: [
                        { text: 'Markdown Reference', link: 'markdown' },
                        { text: 'Runtime API Reference', link: 'api' },
                    ],
                }],
            },
        },

        footer: {
            copyright: 'Copyright © 2024 Nacosvel',
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/nacosvel' },
        ],
    },
});
