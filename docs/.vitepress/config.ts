import { defineConfig } from 'vitepress'
import { nav } from './relaConf';
import { sidebar } from './relaConf'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "小宏同学的个人博客",
  description: "A Persional Blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/avatar.jpg',
    nav: nav,
    sidebar: sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    search: {
      provider: 'local'
    }
  }
})
