module.exports = {
  title: 'Dev on Windows with WSL',
  description: '在 Windows 上用 WSL 优雅开发',
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }],
    ['meta', {
      name: 'theme-color',
      content: '#00ABE9'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black'
    }],
    ['link', {
      rel: 'apple-touch-icon',
      href: '/favicon.ico'
    }],
    ['meta', {
      name: 'msapplication-TileImage',
      content: '/favicon.ico'
    }],
    ['meta', {
      name: 'msapplication-TileColor',
      content: '#06BDFF'
    }]
  ],
  themeConfig: {
    nav: [
      {
        text: '文档目录',
        items: [
          {
            text: '准备工作', items: [
              {
                text: '准备工作',
                link: '/1-Preparations/'
              }
            ]
          }, {
            text: '工具链', items: [
              {
                text: '概要',
                link: '/2-Toolchain/'
              },
              {
                text: '终端环境',
                link: '/2-Toolchain/2-1-TerminalEnv'
              },
              {
                text: '开发工具',
                link: '/2-Toolchain/2-2-DevTools'
              }
            ]
          }, {
            text: 'Visual Studio Code', items: [
              {
                text: '概要',
                link: '/3-VSCode/'
              },
              {
                text: '集成终端',
                link: '/3-VSCode/3-0-Terminal'
              },

              {
                text: 'Git',
                link: '/3-VSCode/3-1-Git'
              },
              {
                text: 'Code Runner',
                link: '/3-VSCode/3-2-Code-Runner'
              },
              {
                text: 'Python',
                link: '/3-VSCode/3-3-Python'
              }, {
                text: 'C/C++',
                link: '/3-VSCode/3-4-C_Cpp'
              }, {
                text: 'LaTeX',
                link: '/3-VSCode/3-5-LaTeX'
              }, {
                text: 'Node.js',
                link: '/3-VSCode/3-6-NodeJS'
              },
              {
                text: '.Net Core',
                link: '/3-VSCode/3-7-DotNetCore'
              }, {
                text: '帮助完善',
                link: '/3-VSCode/HelpNeeded'
              }
            ]
          }, {
            text: '高阶操作', items: [
              {
                text: '概要',
                link: '/4-Advanced/',
              }, {
                text: 'GUI',
                link: '/4-Advanced/4-1-GUI'
              }, {
                text: 'LxRunOffline',
                link: '/4-Advanced/4-2-LxRunOffline'
              }
            ]
          }, {
            text: '体验与参考', items: [
              { text: '概要', link: '/5-Experience/' }
            ]
          }
        ]
      }, {

        text: '版本', items: [
          {
            text: '最新', items: [
              { text: 'new', link: 'https://dowww.spencerwoo.com/' },
            ]
          },
          {
            text: '历史版本', items: [
              { text: 'v0.x', link: 'https://v0-dowww.spencerwoo.com/' }
            ]
          }
        ]

      },
      {
        text: '了解更多',
        items: [
          {
            text: '联系', items: [
              { text: '反馈 / 提问', link: 'https://github.com/spencerwooo/dowww/issues/new/choose' },
              { text: 'GitHub', link: 'https://github.com/spencerwooo/dowww' }
            ]
          },
          {
            text: '加入讨论', items: [
              { text: 'Telegram Channel', link: '' }
            ]
          },
        ]
      }],
    sidebar: {
      '/1-Preparations/': [''],
      '/2-Toolchain/': [
        '',
        '2-1-TerminalEnv',
        '2-2-DevTools'
      ],
      '/3-VSCode/': [
        '',
        '3-0-Terminal',
        '3-1-Git',
        '3-2-Code-Runner',
        '3-3-Python',
        '3-4-C_Cpp',
        '3-5-LaTeX',
        '3-6-NodeJS',
        '3-7-DotNetCore',
        'HelpNeeded'
      ],
      '/4-Advanced/': [
        '',
        '4-1-GUI',
        '4-2-LxRunOffline'
      ],
      '/5-Experience/': [''],
      '/': ['']
    },
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
    ]
  ]
}
