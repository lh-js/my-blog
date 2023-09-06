import { defineConfig } from 'vitepress'
import { nav } from './relaConf';
import { sidebar } from './relaConf'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "小宏同学的个人博客",
  description: "A Persional Blog",
  base: process.env.NODE_ENV === 'production' ? '/my-blog/' : '/',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/avatar.png',
    nav: nav,
    sidebar: sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lh-js/my-blog' }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Released under the MIT License.',
      // copyright: 'Copyright © 2023-present Evan You'
    },
  },
  markdown: {
    lineNumbers: true,
  }
})
