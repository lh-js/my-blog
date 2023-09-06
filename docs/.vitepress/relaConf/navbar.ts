import { DefaultTheme } from 'vitepress';
export const nav: DefaultTheme.NavItem[] = [
  {
    text: '首页',
    link: '/' // 表示docs/index.md
  },
  {
    text: '👨‍💻 博客',
    items: [
      {
        text: 'vue',
        link: '/blog/vue/'
      },
      {
        text: 'react',
        link: '/blog/react/'
      },
      {
        text: 'js',
        link: '/blog/js/apply-call-bind'
      },
    ]
  },
  {
    text: '📽️ 日记',
    items: [
      { text: '开发日记', link: '/diary/dev/' },
      {
        text: '生活日记',
        link: '/diary/life/'
      },
    ]
  }
];
