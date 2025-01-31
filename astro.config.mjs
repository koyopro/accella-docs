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
      defaultLocale: "root",
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        'ja': {
          label: '日本語',
        },
      },
      sidebar: [
        {
          label: "Start a new project",
          items: ["guides/installation", "guides/database"],
        },
        // {
        // 	label: 'Reference',
        // 	autogenerate: { directory: 'reference' },
        // },
      ],
    }),
  ],
});
