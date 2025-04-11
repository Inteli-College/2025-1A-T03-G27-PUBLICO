// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'F-ARM',
  tagline: 'Agricultural Remote Monitoring',
  favicon: 'img/favicon.ico',

  url: 'https://inteli-college.github.io', // URL do GitHub Pages
  baseUrl: '/2025-1A-T03-G27-PUBLICO/', // Nome do repositório com barra no final

  organizationName: 'Inteli-College', // Nome da conta no GitHub
  projectName: '2025-1A-T03-G27-PUBLICO', // Nome do repositório
  deploymentBranch: 'gh-pages',

  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic', // Uso explícito do preset
      {
        docs: {
          path: 'docs',
          routeBasePath: '/', // Servir docs na raiz
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'F-ARM',
      items: [
        {
          to: '/', // Link para a documentação
          label: 'Documentação',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} F-ARM.`,
    },
  },
};

module.exports = config;