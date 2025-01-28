// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Accella",
      social: {
        github: "https://github.com/koyopro/accella",
      },
      customCss: ["./src/styles/custom.css"],
      sidebar: [
      	{
      		label: 'Start a new project',
      		items: [
      			{ label: 'Installation', slug: 'guides/installation' },
      		],
      	},
      	// {
      	// 	label: 'Reference',
      	// 	autogenerate: { directory: 'reference' },
      	// },
      ],
    }),
  ],
});
