module.exports = {
  title: "blog-xc",
  tagline: "Memory is like an orgasm. It’s a lot better if you don’t have to fake it.",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "xc", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans','en'],
  },
  themeConfig: {
    image: 'img/king.jpg',
    navbar: {
      title: "My Blog",
      logo: {
        alt: "Logo",
        src: "img/logo.svg",
      },
      items: [
        // {
        //   to: "docs/doc1",
        //   activeBasePath: "docs",
        //   label: "Docs",
        //   position: "left",
        // },
        {
          type: 'doc',
          docId: 'docusaurus/intro',
          position: 'left',
          label: 'Docs',
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com",
          label: "GitHub",
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
              label: "HTML 教程",
              href: "https://www.w3school.com.cn/html/index.asp",
            },
            {
              label: "CSS 教程",
              href: "https://www.w3school.com.cn/css/index.asp",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        // blog: {
        //   path: "./blog",
        //   routeBasePath: "/",
        // },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
