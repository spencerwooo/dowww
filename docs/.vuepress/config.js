module.exports = {
  title: 'Dev on Windows with WSL 💡',
  description: '在 Windows 上用 WSL 优雅开发',
  base: '/dowww/',
  head: [
    ['link', {
      rel: 'icon',
      href: 'https://i.loli.net/2018/10/17/5bc6e7ca735bb.png'
    }],
    ['meta', {
      name: 'theme-color',
      content: '#3eaf7c'
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
      href: `https://i.loli.net/2018/10/17/5bc6e7ca735bb.png`
    }],
    ['meta', {
      name: 'msapplication-TileImage',
      content: 'https://i.loli.net/2018/10/17/5bc6e7ca735bb.png'
    }],
    ['meta', {
      name: 'msapplication-TileColor',
      content: '#000000'
    }]
  ],
  themeConfig: {
    nav: [{
        text: '准备工作',
        link: '/1-Preparations/'
      },
      {
        text: '工具链',
        items: [{
            text: '概要',
            link: '/2-Toolchain/'
          },
          {
            text: '终端环境 zsh、Hyper',
            link: '/2-Toolchain/2-1-TerminalEnv'
          },
          {
            text: '开发工具 git、ssh',
            link: '/2-Toolchain/2-2-DevTools'
          }
        ]
      },
      {
        text: 'Visual Studio Code',
        items: [{
            text: '概要',
            link: '/3-VSCode/'
          },
          {
            text: '集成终端',
            link: '/3-VSCode/3-0-Terminal'
          },
          
          {
            text: 'Git on WSL',
            link: '/3-VSCode/3-1-Git'
          },
          {
            text: 'Code Runner',
            link: '/3-VSCode/3-2-Code-Runner'
          },
          {
            text: 'Python',
            link: '/3-VSCode/3-3-Python'
          },{
            text: 'C/C++',
            link: '/3-VSCode/3-4-C_Cpp'
          },{
            text: '帮助完善',
            link: '/3-VSCode/HelpNeeded'
          }
        ]
      },
      {
        text: 'GUI',
        link: '/4-GUI/'
      },
      {
        text: '体验与参考',
        link: '/5-Experience/'
      },
      {
        text: '反馈',
        link: 'https://github.com/spencerwooo/dowww/issues/new/choose'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/spencerwooo/dowww'
      },
    ],
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
        'HelpNeeded'
      ],
      '/4-GUI/': [''],
      '/5-Experience/': [''],
      '/6-Reference/': [''],
      '/': ['']
    },
    lastUpdated: 'Last Updated'
  }
}