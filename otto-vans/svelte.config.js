import adapter from '@sveltejs/adapter-auto';
import appengine from "svelte-adapter-appengine";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: appengine(),
	}
};

export default config;
