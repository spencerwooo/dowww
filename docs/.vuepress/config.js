module.exports = {
  title: 'Dev on Windows with WSL 👨‍💻',
  description: '在 Windows 上面用 WSL 优雅开发',
  base: '/Dev-on-Windows-with-WSL/',
  head: [
    ['link', {
      rel: 'icon',
      href: 'https://i.loli.net/2018/10/17/5bc6e7ca735bb.png'
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
            text: '终端环境',
            link: '/2-Toolchain/2-1-TerminalEnv'
          },
          {
            text: '开发工具',
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
          text: 'Git on WSL',
          link: '/3-VSCode/3-1-Git'
        },
        {
          text: 'Python',
          link: '/3-VSCode/3-2-Python'
        },
        {
          text: 'Help Needed',
          link: '/3-VSCode/3-3-HelpNeeded'
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
        text: 'GitHub',
        link: 'https://github.com/spencerwoo98/Dev-on-Windows-with-WSL'
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
        '3-1-Git',
        '3-2-Python',
        '3-3-HelpNeeded'
      ],
      '/4-GUI/': [''],
      '/5-Experience/': [''],
      '/6-Reference/': [''],
      '/': ['']
    },
    lastUpdated: 'Last Updated'
  }
}