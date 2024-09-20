import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export const zh = defineConfig({
    title: 'Nacosvel',
    description: 'Exploring the Elegant Implementation of Microservices in PHP',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: { src: '/vite-boilerplate.svg', width: 24, height: 24 },
        nav: [
            { text: '指南', link: '/zh/guide/markdown', activeMatch: '/zh/guide/' },
            { text: '参考', link: '/zh/reference/api', activeMatch: '/zh/reference/' },
        ],

        sidebar: {
            '/zh/guide/': {
                base: '/zh/guide/',
                items: [{
                    text: '概述',
                    collapsed: true,
                    items: [
                        { text: 'Markdown Guide', link: 'markdown' },
                        { text: 'Runtime API Guide', link: 'api' },
                    ],
                }],
            },
            '/zh/reference/': {
                base: '/zh/reference/',
                items: [{
                    text: '简介',
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
