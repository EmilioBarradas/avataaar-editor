import preprocess from 'svelte-preprocess';
import path from 'path';
import { fileURLToPath } from 'url';
import vercel from "@sveltejs/adapter-vercel";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		}),
	],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
        adapter: vercel(),
        vite: {
            resolve: {
                alias: {
                    '@components': path.resolve(__dirname, 'src/components'),
                    '@scripts': path.resolve(__dirname, 'src/scripts'),
                },
            },
        },
	},
};

export default config;
