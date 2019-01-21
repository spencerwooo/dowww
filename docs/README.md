---
home: true
heroImage: /hero.png
actionText: 入坑指南 →
actionLink: /1-Preparations/
features:
- title: 🍳
  details: Windows 开发，解决那令人烦恼的非 Unix 终端环境。
- title: 💡
  details: Windows Subsystem for Linux，近似原生 Unix 的体验，又有着 Windows 强大的生产力。
- title: 🎉
  details: 与 Visual Studio Code 联合，打造最为健壮的 Windows 开发环境。
footer: 2018 ©Spencer Woo. Released under the CC BY-NC-ND 4.0 International License.
---

[![Backers on Open Collective](https://img.shields.io/opencollective/backers/dowww.svg?colorB=brightgreen&style=flat-square)](#backers-支持者)
[![Sponsors on Open Collective](https://img.shields.io/opencollective/sponsors/dowww.svg?colorB=brightgreen&style=flat-square)](#sponsors-赞助商)
[![GitHub stars](https://img.shields.io/github/stars/spencerwooo/dowww.svg?style=flat-square&label=⭐%20Stars)](https://github.com/spencerwoo/dowww)
![love](https://img.shields.io/badge/Made%20with-love-ff69b4.svg?style=flat-square)
![Windows](https://img.shields.io/badge/Windows-♥-FFE411.svg?logo=windows&style=flat-square)
[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-03A9F4.svg?style=flat-square)](http://creativecommons.org/licenses/by-nc-nd/4.0/)

## 前言

> 在 [少数派 | 在 Windows 上用 WSL 开发的操作体验指北](https://sspai.com/post/47719) 上阅读更多。

首先达成一个共识：Windows 给 **编程初学者** 带来了很大的困难。比如 **缺乏好用的包管理系统**、**终端环境难看难用** 和 **环境变量不易配置** 等等，这些都让 Windows 在开发体验上难以匹敌 Linux 甚至 macOS。

![](https://i.loli.net/2019/01/05/5c300ed174fec.png)

WSL 的出现似乎缓解了这些烦恼。WSL —— Windows Subsystem for Linux，即适用于 Linux 的 Windows 子系统，是一个为在 Windows 10 上能够原生运行 Linux 二进制可执行文件的兼容层。WSL 的出现意味着我们可以借助它来给我们的 Windows 配置一个美观可用的 **学习编程的开发环境**，包括：

- 💻 Unix style 终端环境：`zsh` 和 `oh-my-zsh`
- 🔨 与 macOS 的 Homebrew 一样原理的包管理器：`apt`（针对 Ubuntu）
- 📰 与 Visual Studio Code 配合的编辑调试环境

如果你对这些内容感兴趣，那么 [**直接进入文档**](https://spencerwoo.com/dowww/)，放飞自我，尽情折腾。\\(￣︶￣*\\))

## Changelog 更新日志

<img src="https://i.loli.net/2019/01/05/5c3016a926a14.png" alt="watch-repo" width="40%" align="right">

Star and watch，时刻掌握最新教程。💪

- [2019-1-3]:
  - 更新了 [VSCode 参考配置内容](https://spencerwoo.com/dowww/3-VSCode/#%E5%8F%82%E8%80%83%E9%85%8D%E7%BD%AE)
- [2019-1-1]:
  - 完善了 C/Cpp 部分的环境配置指南
  - 更新了 C/Cpp 部分的配图
- [2018-12-30]：
  - 新增了 [ESLint 的配置](https://spencerwoo.com/dowww/3-VSCode/3-6-NodeJS.html#配置-eslint)
  - 完善了 [Node.js 调试的配置](https://spencerwoo.com/dowww/3-VSCode/3-6-NodeJS.html#调试-node-js-程序)
  - 完善了各部分作者的信息
- [2018-12-26]：
  - 新增了 [`wslgit` 的加速方法指南](https://spencerwoo.com/dowww/3-VSCode/3-1-Git.html#提升-git-on-wsl-的性能)
  - 新增了 [ArchWSL 入教指南](https://spencerwoo.com/dowww/3-VSCode/3-1-Git.html#提升-git-on-wsl-的性能)
- [2018-12-22]：增加了 VSCode 中 Node.js 环境的配置，[PR #11](https://github.com/spencerwooo/dowww/pull/11)
- [2018-12-13]：新增了 Terminus 终端的推荐
- [2018-12-11]：增加了 VSCode 中 LaTeX 环境的配置，[PR #10](https://github.com/spencerwooo/dowww/pull/10)
- ...

## Contributing 贡献

### Contributors 贡献者

感谢参与这个项目的所有贡献者。

This project exists thanks to all the people who contribute.

<a href="https://github.com/spencerwooo/dowww/graphs/contributors"><img src="https://opencollective.com/dowww/contributors.svg?button=false" /></a>

### How to contribute 贡献规范

目前来讲，Dev on Windows with WSL 仍然有很多地方需要完善，当然 WSL 本身也有很多小 bug，希望有经验的同学前来帮我共同完善本项目，鞠躬。

在你着手准备给这个项目提交一些新内容前，请务必阅读「贡献」相关内容说明与规范 > [CONTRIBUTING.md](https://github.com/spencerwooo/dowww/blob/master/.github/CONTRIBUTING.md)

## Sponsoring 赞助

> 谢谢金主爸爸们，我们通过 Open Collective 平台接受赞助。

### Backers 支持者

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/dowww#backer)]

<a href="https://opencollective.com/dowww#backers" target="_blank"><img src="https://opencollective.com/dowww/backers.svg?width=890"></a>

### Sponsors 赞助商

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/dowww#sponsor)]

<a href="https://opencollective.com/dowww/sponsor/0/website" target="_blank"><img src="https://opencollective.com/dowww/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/dowww/sponsor/1/website" target="_blank"><img src="https://opencollective.com/dowww/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/dowww/sponsor/2/website" target="_blank"><img src="https://opencollective.com/dowww/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/dowww/sponsor/3/website" target="_blank"><img src="https://opencollective.com/dowww/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/dowww/sponsor/4/website" target="_blank"><img src="https://opencollective.com/dowww/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/dowww/sponsor/5/website" target="_blank"><img src="https://opencollective.com/dowww/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/dowww/sponsor/6/website" target="_blank"><img src="https://opencollective.com/dowww/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/dowww/sponsor/7/website" target="_blank"><img src="https://opencollective.com/dowww/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/dowww/sponsor/8/website" target="_blank"><img src="https://opencollective.com/dowww/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/dowww/sponsor/9/website" target="_blank"><img src="https://opencollective.com/dowww/sponsor/9/avatar.svg"></a>

### 小额赞助

感谢您考虑赞助我们的项目。我们同样接受以下形式的小额赞助：

- [微信](https://i.loli.net/2018/03/13/5aa7ae214b63f.jpg)
- [支付宝](https://i.loli.net/2018/03/13/5aa7ae11339cd.jpg)

## License 许可 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></a>

本作品采用<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议</a>进行许可。

本著作係採用<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">創用 CC 姓名標示-非商業性-相同方式分享 4.0 國際 授權條款</a>授權。

This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

---

💡 **Dev on Windows with WSL** ©Spencer Woo. Released under the CC BY-NC-SA 4.0 International License.

Authored and maintained by Spencer Woo.

[@Blog](https://spencerwoo.com/) · [ⒿJike](https://web.okjike.com/user/4DDA0425-FB41-4188-89E4-952CA15E3C5E/post) · [@GitHub](https://github.com/spencerwooo)