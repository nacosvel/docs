import { defineConfig } from 'vitepress';
import { en } from '../en';
import { zh } from '../zh';
// https://vitepress.dev/reference/site-config
export default defineConfig({
    cleanUrls: true,
    rewrites: {
        'en/:rest*': ':rest*',
    },
    locales: {
        root: { label: 'English', lang: 'en-US', ...en },
        zh: { label: '简体中文', lang: 'zh-CN', ...zh },
    },
});
