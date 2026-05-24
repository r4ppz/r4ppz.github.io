// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	site: 'https://r4ppz.dev',
	integrations: [svelte(), icon()],
});
