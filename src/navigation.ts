import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '功能介绍',
      href: '#features',
      icon: '✨'
    },
    {
      text: '创作展示',
      href: '#showcase',
      icon: '🎨'
    },
    {
      text: '会员特权',
      href: '#pro',
      icon: '👑'
    },
  ],
  actions: [
    {
      text: '立即下载',
      href: '#download',
      class: 'bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full'
    },
  ],
};

export const footerData = {
  links: [
    {
      title: '关于',
      links: [
        { text: '关于我们', href: 'https://twitter.com/moecard_app' },
        { text: '联系我们', href: 'https://twitter.com/moecard_app' },
      ],
    },
  ],
  secondaryLinks: [
    { text: '使用条款', href: getPermalink('/terms') },
    { text: '隐私政策', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/moecard_app', target: '_blank' },
  ],
  footNote: `
    Made with ❤️ by MoeCard · All rights reserved.
  `,
};
