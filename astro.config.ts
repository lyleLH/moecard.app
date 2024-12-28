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
      minify: 'esbuild',
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['astro', '@astrojs/tailwind'],
            'icons': ['astro-icon'],
            'utils': ['./src/utils/'],
          },
          inlineDynamicImports: false,
        },
        treeshake: {
          moduleSideEffects: false,
          propertyReadSideEffects: false,
          tryCatchDeoptimization: false
        }
      }
    },
    optimizeDeps: {
      exclude: ['@astrojs/mdx', 'astro-compress', '@astrojs/partytown']
    },
    ssr: {
      noExternal: ['@astrojs/mdx', 'astro-compress', '@astrojs/partytown']
    }
  },
});
