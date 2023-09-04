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
        text: '大江南北游记',
        link: '/column/Travel/' // 表示docs/column/Travel/index.md
      },
      {
        text: '所思·所想',
        link: '/column/Growing/' // 表示docs/column/Growing/index.md
      }
    ]
  },
  {
    text: '📽️ 日记',
    items: [
      { text: 'Github', link: 'https://github.com/Jacqueline712' },
      {
        text: '掘金',
        link: 'https://juejin.cn/user/3131845139247960/posts'
      },
      {
        text: '飞书社区',
        link: 'https://pzfqk98jn1.feishu.cn/wiki/space/7193915595975491587?ccm_open_type=lark_wiki_spaceLink'
      }
    ]
  }
];
