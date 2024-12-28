import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import astrowind from './vendor/integration';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  output: 'static',

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),
    astrowind({
      config: './src/config.yaml',
    }),
  ],

  image: {
    domains: ['i.postimg.cc'],
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  },

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
    build: {
      cssCodeSplit: false,
      minify: false,
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          inlineDynamicImports: false,
        },
        treeshake: true,
      }
    },
    optimizeDeps: {
      exclude: ['@astrojs/mdx', 'astro-compress', '@astrojs/partytown']
    }
  },
});
