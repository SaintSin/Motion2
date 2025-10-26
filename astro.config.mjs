// @ts-check

import sitemap from '@astrojs/sitemap';
import playformCompress from '@playform/compress';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	experimental: {
		fonts: [
			{
				provider: fontProviders.google(),
				name: 'Roboto',
				weights: [400],
				styles: ['normal'],
				subsets: ['latin'],
				cssVariable: '--font-roboto',
			},
		],
	},
	image: {
		responsiveStyles: true,
	},
	integrations: [
		sitemap(),
		(await import('@playform/compress')).default({
			CSS: true,
			HTML: false,
			Image: false,
			JavaScript: true,
			SVG: true,
		}),
	],
	site: 'http://localhost/',
});
