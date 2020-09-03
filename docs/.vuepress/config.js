module.exports = {
  title: 'Dev on Windows with WSL',
  description: '在 Windows 上用 WSL 优雅开发',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
    ],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
  ],
  theme: 'book',
  themeConfig: {
    repo: 'spencerwooo/dowww',
    docsDir: 'docs/',
    nav: [
      {
        text: '文档首页',
        link: '/1-preparations/1-0-intro',
      },
      {
        text: '捐赠',
        link: '/5-others/5-1-donating',
      },
      {
        text: '贡献指南',
        link: '/contributing/',
      },
      {
        text: '更新日志',
        link: '/changelog/',
      },

      {
        text: '联系',
        items: [
          {
            text: 'GitHub',
            items: [
              {
                text: '反馈提问',
                link: 'https://github.com/spencerwooo/dowww/issues/new/choose',
              },
            ],
          },
          {
            text: '关于作者',
            items: [
              { text: '个人主页', link: 'https://spencerwoo.com' },
              { text: 'Telegram 频道', link: 'https://t.me/realSpencerWoo' },
            ],
          },
        ],
      },
    ],
    algolia: {
      apiKey: '6534c856e645507d6cf52052fdfd5611',
      indexName: 'dowww',
    },
    searchPlaceholder: '搜索',
    sidebar: [
      {
        title: 'Preparations 准备工作',
        collapsable: false,
        children: [
          '1-preparations/1-0-intro',
          '1-preparations/1-1-installation',
        ],
      },
      {
        title: 'CLI 命令行环境',
        collapsable: false,
        children: [
          '2-cli/2-0-intro',
          '2-cli/2-1-terminal',
          '2-cli/2-2-shell',
          '2-cli/2-3-cli-tools',
          '2-cli/2-4-others',
        ],
      },
      {
        title: 'Visual Studio Code',
        collapsable: false,
        children: [
          '3-vscode/3-0-intro',
          '3-vscode/3-1-remote-dev',
          '3-vscode/3-2-code-runner',
          '3-vscode/3-3-python',
          '3-vscode/3-4-c_cpp',
          '3-vscode/3-5-latex',
          '3-vscode/3-6-nodejs',
          '3-vscode/3-7-dotnetcore',
        ],
      },
      {
        title: 'Advanced 附加内容',
        collapsable: false,
        children: [
          '4-advanced/4-0-intro',
          '4-advanced/4-1-gui',
          '4-advanced/4-2-lxrunoffline',
          '4-advanced/4-3-wslconfig',
          '4-advanced/4-4-usb',
        ],
      },
      {
        title: 'Experience 体验与参考',
        collapsable: false,
        children: ['5-others/5-0-intro', '5-others/5-1-donating'],
      },
    ],
    lastUpdated: 'Last updated',
    logo: '/hero.png',
    smoothScroll: true,
  },
  plugins: [
    ['@vuepress/medium-zoom'],
    [
      'vuepress-plugin-container',
      {
        type: 'callout',
        before: info => `<div class="callout"><p class="title">${info}</p>`,
        after: '</div>',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'tree',
        before: `<pre class="tree"><code>`,
        after: `</code></pre>`,
      },
    ],
    ['@vuepress/back-to-top'],
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-111664763-3',
      },
    ],
  ],
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-footnote'))
    },
  },
}
