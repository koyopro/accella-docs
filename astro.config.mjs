// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'never',
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
          label: "English",
          lang: "en",
        },
        ja: {
          label: "日本語",
        },
      },
      sidebar: [
        {
          label: "Introduction",
          translations: {
            'ja': 'はじめに'
          },
          items: ["introduction/why-accella", "introduction/code-overview"],
        },
        {
          label: "Start a New Project",
          translations: {
            'ja': '新しいプロジェクトを始める'
          },
          items: [
            "guides/installation",
            "guides/project-structure",
            "guides/database",
            "guides/models",
            "guides/add-page",
            "guides/testing",
            "guides/deploy",
          ],
        },
        {
          label: "Guides",
          translations: {
            'ja': 'ガイド'
          },
          items: [
            "guides/validation",
            "guides/flexible-search",
            "guides/session",
            "guides/pagination",
            "guides/form_and_parameters",
            "guides/internationalization",
            "guides/csrf_protection",
            "guides/password-authentication",
            "guides/form-objects",
            "guides/frontend",
            "guides/cli",
          ],
        },
        {
          label: "Recipes",
          translations: {
            'ja': 'レシピ'
          },
          items: [
            "recipes/list-users",
            "recipes/new-user",
            "recipes/show-user",
            "recipes/edit-user",
            "recipes/delete-user",
            "recipes/search-users",
            "recipes/signin",
          ],
        },
        {
          label: "Topics on Types",
          translations: {
            'ja': '型に関するトピック'
          },
          items: [
            "guides/model-types",
            "guides/prisma-schema-and-field-types",
            "guides/type-safe-template-rendering",
          ],
        }
        // {
        // 	label: 'Reference',
        // 	autogenerate: { directory: 'reference' },
        // },
      ],
    }),
  ],
});
