const versioning = require('./lib/versioning.js')

module.exports = {
  title: 'Dev on Windows with WSL',
  description: '在 Windows 上用 WSL 优雅开发',
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }]
  ],
  themeConfig: {
    nav: [{
      text: '版本', items: [
        {
          text: 'Dev 分支版本', items: [
            { text: 'Dev', link: '/dev/1-Preparations/1-0-Intro' }
          ]
        },
        { text: '历史版本', items: versioning.linksFor('1-Preparations/1-0-Intro.md') }
      ]
    }, {
      text: '联系', items: [
        { text: 'GitHub', link: 'https://github.com/spencerwooo/dowww' },
        { text: '反馈 / 提问', link: 'https://github.com/spencerwooo/dowww/issues/new/choose' },
        { text: '贡献规范', link: 'https://github.com/spencerwooo/dowww/blob/master/.github/CONTRIBUTING.md'}
      ]
    }, {
      text: '加入讨论', items: [
        { text: 'Telegram Channel', link: 'https://t.me/realSpencerWoo' }
      ]
    }, { text: '作者', link: 'https://spencerwoo.com' }],
    sidebar: versioning.sidebars,
    lastUpdated: 'Last Updated',
    logo: '/hero.png',
    sidebarDepth: 2,
    smoothScroll: true
  },
  plugins: [
    [
      'vuepress-plugin-container',
      {
        type: 'callout',
        before: info => `<div class="callout"><p class="title">${info}</p>`,
        after: '</div>'
      }
    ],
    ['@vuepress/back-to-top'],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-111664763-3'
      }
    ],
    ['@vuepress/medium-zoom'],
    ['@markspec/vuepress-plugin-footnote']
  ]
}
