// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Form Fate',
  tagline: 'Declarative form generation with logic, validation, and customization built-in.',
  favicon: 'img/icon.png',

  // Set the production url of your site here
  url: 'https://form-fate-doc.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'proxym', // Usually your GitHub org/user name.
  projectName: 'Form Fate', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // editUrl:'https://github.com/mazenhadjali/form-fate-doc/tree/main/',
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/mazenhadjali/react-form-fate',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/Logo.png',
      navbar: {
        title: 'Form Fate',
        logo: {
          alt: 'My Site Logo',
          src: 'img/icon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://form-fate-builder.vercel.app/',
            position: 'left',
            label: 'Builder Tool',
          },
          {
            href: 'https://github.com/mazenhadjali/react-form-fate',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs & Tools',
            items: [
              {
                label: 'Form Fate Builder',
                href: 'https://form-fate-builder.vercel.app/',
              },
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Organization',
            items: [
              {
                label: 'Website',
                href: 'https://www.proxym-group.com/',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/proxym',
              },
            ],
          },
          {
            title: 'Contrubutors',
            items: [
              {
                label: 'Mazen Hadj Ali',
                href: 'https://www.linkedin.com/in/hadjalimazen/',
              },
              {
                label: 'Yassine Mrad',
                href: 'https://www.linkedin.com/in/yassine-mrad/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Form Fate, Proxym Group.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
