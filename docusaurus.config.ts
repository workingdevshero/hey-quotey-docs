import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Hey Quotey",
  tagline: "Create fun unique images from your favorite quotes",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://docs.heyquotey.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "workingdevshero", // Usually your GitHub org/user name.
  projectName: "hey-quotey-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
          editUrl:
            "https://github.com/workingdevshero/hey-quotey-docs/tree/main/",
          routeBasePath: "/", // Make docs the main page
          docItemComponent: "@theme/ApiItem", // Add this line
        },
        blog: false, // Disable the blog
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: ["@bobbyg603/docusaurus-theme-openapi-docs"],

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "api",
        docsPluginId: "classic",
        config: {
          developers: {
            specPath: "hey-quotey-openapi.yaml",
            outputDir: "docs/developers/api",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        },
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/og-image.png",
    navbar: {
      title: "Hey Quotey",
      logo: {
        alt: "Hey Quotey Logo",
        src: "img/logo.png",
      },
      items: [
        {
          href: "https://heyquotey.app",
          label: "Login",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Home",
              to: "/",
            },
          ],
        },
        {
          title: "Follow Us",
          items: [
            {
              label: "Instagram",
              href: "https://www.instagram.com/heyquotey",
            },
            {
              label: "X",
              href: "https://x.com/heyquotey",
            },
          ],
        },
        {
          title: "About",
          items: [
            {
              label: "Privacy",
              href: "https://heyquotey.com/privacy",
            },
            {
              label: "Terms",
              href: "https://heyquotey.com/terms",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Working Dev's Hero LLC. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
