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
      // sidebar: [
      // 	{
      // 		label: 'Guides',
      // 		items: [
      // 			// Each item here is one entry in the navigation menu.
      // 			{ label: 'Example Guide', slug: 'guides/example' },
      // 		],
      // 	},
      // 	{
      // 		label: 'Reference',
      // 		autogenerate: { directory: 'reference' },
      // 	},
      // ],
    }),
  ],
});
