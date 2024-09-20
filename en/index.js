import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export const en = defineConfig({
    title: 'Nacosvel',
    description: 'Exploring the Elegant Implementation of Microservices in PHP',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: { src: '/vite-boilerplate.svg', width: 24, height: 24 },
        nav: [
            { text: 'Home', link: '/en/' },
            { text: 'Examples', link: '/en/markdown-examples' },
        ],

        sidebar: [
            {
                text: 'Examples',
                items: [
                    { text: 'Markdown Examples', link: '/en/markdown-examples' },
                    { text: 'Runtime API Examples', link: '/en/api-examples' },
                ],
            },
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/nacosvel' },
        ],
    },
});
