import { DefaultTheme } from 'vitepress';
export const sidebar: DefaultTheme.Sidebar = {
  '/blog/vue/': [
    {
      text: '基础问题',
      items: [
        {
          text: '栈-深拷贝和浅拷贝',
          link: '/blog/vue/'
        },
        {
          text: '队列-事件循环',
          link: '/blog/vue/'
        }
      ]
    },
    // 第二部分
    {
      text: '开发文档',
      items: [
        {
          text: '字典和集合-Set和Map',
          link: '/column/Algorithm/003_Dictionary'
        },
        {
          text: '树-深/广度优先遍历',
          link: '/column/Algorithm/004_Tree'
        }
      ]
    }
  ]
};

