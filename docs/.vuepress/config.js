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
            text: '最新分支版本', items: [
              { text: 'Dev', link: 'https://dowww.spencerwoo.com/' },
            ]
          },
          {
            text: '历史版本', items: versioning.linksFor('1-Preparations/1-0-Intro.md')
          }
        ]
      },{
        text: '联系', items: [
          { text: '反馈 / 提问', link: 'https://github.com/spencerwooo/dowww/issues/new/choose' },
          { text: 'GitHub', link: 'https://github.com/spencerwooo/dowww' }
        ]
      },{
        text: '加入讨论', items: [
          { text: 'Telegram Channel', link: 'https://t.me/realSpencerWoo' }
        ]
      }],
    sidebar: versioning.sidebars,
    lastUpdated: 'Last Updated',
    logo: '/hero.png',
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
    [
      'vuepress-plugin-medium-zoom',
      {
        delay: 1000,
        options: {
          margin: 24,
          background: '#0f2440',
          scrollOffset: 0,
        },
      },
    ]
  ]
}
