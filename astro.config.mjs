import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';
import icon from "astro-icon";

export default defineConfig({
  site: 'https://astrowind.vercel.app',
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
    compress(),
    icon({
      include: {
        tabler: ["*"],
        'flat-color-icons': ["*"],
      },
    }),
  ],
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
    resolve: {
      alias: {
        '~/': '/src/',
        'astrowind:config': '/src/config.ts',
      },
    },
    ssr: {
      noExternal: ["astro-icon"],
    },
  },
}); 