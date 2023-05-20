import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import glsl from 'vite-plugin-glsl';
import { webSocketServer } from './src/lib/webSocket.js';

export default defineConfig({
	plugins: [sveltekit(), glsl(), webSocketServer],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		host: true
	},
	build: {
		target: 'esnext'
	}
});
