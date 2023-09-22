import { DefaultTheme } from 'vitepress';
export const sidebar: DefaultTheme.Sidebar = {
  '/blog/vue/': [
    {
      text: '基础问题',
      items: [

      ]
    },
    // 第二部分
    {
      text: '疑难问题',
      items: [

      ]
    }
  ],
  '/blog/js/': [
    {
      text: '基础知识',
      items: [
        {
          text: 'apply、call、bind的作用',
          link: '/blog/js/apply-call-bind'
        },
        {
          text: '数组去重方法',
          link: '/blog/js/array-deduplication'
        },
      ]
    },
    // 第二部分
    {
      text: '疑难问题',
      items: [

      ]
    }
  ]
};

