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
        link: '/blog/vue/' // 表示docs/column/Travel/index.md
      },
      {
        text: 'react',
        link: '/blog/react/' // 表示docs/column/Growing/index.md
      }
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
