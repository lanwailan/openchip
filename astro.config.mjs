// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
				site: 'https://example.com',
				integrations: [
					starlight({
												title: 'OpenChip',
												pagefind: true,
												social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
				defaultLocale: 'en',
				locales: {
					en: {
						label: 'English',
						lang: 'en-US',
					},
					zh: {
						label: '简体中文',
						lang: 'zh-CN',
					},
				},
			}),
		],
});
