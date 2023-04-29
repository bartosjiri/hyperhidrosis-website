import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from '@zerodevx/svelte-img/vite'

export default defineConfig({
	plugins: [sveltekit(), imagetools()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/styles/_styles.scss" as *;'
			}
		}
	}
});
