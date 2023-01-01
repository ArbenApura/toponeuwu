import { sveltekit } from '@sveltejs/kit/vite';
import * as path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$styles: path.resolve('./src/styles'),
			$components: path.resolve('./src/components'),
			$utils: path.resolve('./src/utils'),
			$types: path.resolve('./src/types')
		}
	}
};

export default config;
