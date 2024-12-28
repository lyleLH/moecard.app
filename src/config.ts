import type { MetaData } from '~/types';

export const SITE = {
  name: 'Your Site Name',
  title: 'Your Site Title',
  description: 'Your site description',
  baseUrl: 'https://astrowind.vercel.app',
  // ... 其他配置
};

export const METADATA: MetaData = {
  title: {
    default: SITE.title,
    template: '%s — ' + SITE.name,
  },
  description: SITE.description,
  // ... 其他元数据配置
};

// 导出其他必要的配置
export const CONFIG = {
  // ... 你的配置
};

export default {
  SITE,
  METADATA,
  CONFIG,
}; 