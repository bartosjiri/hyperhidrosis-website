import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		preprocess({
			scss: {
				prependData: '@use "src/styles/_styles.scss" as *;'
			}
		})
	],
	kit: {
		adapter: adapter(),
		alias: {
			$assets: './static/assets',
			$lib: './src/lib',
			$modules: './src/modules',
			$util: './src/util'
		}
	}
};

export default config;
