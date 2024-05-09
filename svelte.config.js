import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-node only supports node environments, such as Replit Autoscale or Reserved VM.
    // If you'd like to change your Replit Deployment type, see https://kit.svelte.dev/docs/building-your-app
    // for more information on SvelteKit Adapters
		/*adapter: adapter({
      pages: 'build',
      strict: true,
    }),*/
    adapter: adapter({ fallback: '404.html' }),
    head: {
      title: 'Mi Aplicación SvelteKit', // Título de la página
      // Metadatos
    meta: [
        {
          name: 'description',
          content: 'Una increíble aplicación construida con SvelteKit',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0',
        },
      ],
      // Enlaces a hojas de estilo
      link: [
        {
          rel: 'stylesheet',
          href: 'styles/global.css',
        },
        {
          rel: 'icon',
          type: 'image/ico',
          href: 'favicon.ico',
        },
      ],
    },

	},
};


export default config;
