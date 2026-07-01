// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://xinran1005.github.io',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    routing: {
      prefixDefaultLocale: false,
    },
  }, 
  prefetch: {
    defaultStrategy: 'viewport'
  },
  fonts: [{
    provider: fontProviders.local(),
    name: "Lumios Marker",
    cssVariable: "--handwritten",
    options: {
      variants: [{
        src: ['./src/assets/Lumios Marker.otf'],
        weight: 'normal',
        style: 'normal'
      }]
    }
  }]
});