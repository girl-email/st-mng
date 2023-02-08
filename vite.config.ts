import { normalizePath } from 'vite';
import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import viteEslint from 'vite-plugin-eslint';
import StylelintPlugin from 'vite-plugin-stylelint';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 5123,
		proxy: {
			'/api': {
				target: 'http://st.mawenqing.net',
				changeOrigin: true,
			}
		}
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		},
		extensions: ['.js', '.json', '.ts', '.tsx']
	},
	css: {
		postcss: {
			plugins: [
				{
					postcssPlugin: 'internal:charset-removal',
					AtRule: {
						charset: (atRule) => {
							if (atRule.name === 'charset') {
								atRule.remove();
							}
						},
					},
				},
			],
		},
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
				additionalData: '@import "@/assets/style/var.less";'
			},
		}
	},
	plugins: [
		react(),
		viteEslint(),
		StylelintPlugin(),
	]
});
