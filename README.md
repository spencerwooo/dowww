<div align="center"><img src="docs/.vuepress/public/hero.png" alt="icon" width="200px" /></div>

<h1 align="center">Dev on Windows with WSL</h1>

<h3 align="center">🍳💡🎉</h3>

<p align="center">
<strong>在 Windows 上面用 WSL 优雅开发</strong><br>
优秀的 Unix style 开发环境、包管理、迅捷稳定的开发调试环境、美丽养眼的开发工具与更多
</p>

<div align="center">

[![Backers on Open Collective](https://img.shields.io/opencollective/backers/dowww.svg?colorB=brightgreen&style=flat-square)](#backers)
[![Sponsors on Open Collective](https://img.shields.io/opencollective/sponsors/dowww.svg?colorB=brightgreen&style=flat-square)](#sponsors)
![love](https://img.shields.io/badge/Made%20with-love-ff69b4.svg?style=flat-square)
![Windows](https://img.shields.io/badge/Windows-♥-FFE411.svg?logo=windows&style=flat-square)
[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-03A9F4.svg?style=flat-square)](http://creativecommons.org/licenses/by-sa/4.0/)
[![GitHub stars](https://img.shields.io/github/stars/spencerwooo/dowww.svg?style=social)](https://github.com/spencerwooo/dowww)

<!-- [![Build Status](https://img.shields.io/travis/spencerwooo/dowww.svg?style=flat-square)](https://travis-ci.org/spencerwooo/dowww) -->

</div>

<h3 align="center">
    <a href="https://dowww.spencerwoo.com/1-Preparations/">准备工作</a>
    <span> · </span>
    <a href="https://dowww.spencerwoo.com/2-Toolchain/">工具链</a>
    <span> · </span>
    <a href="https://dowww.spencerwoo.com/3-VSCode/">Visual Studio Code</a>
    <span> · </span>
    <a href="https://dowww.spencerwoo.com/4-GUI/">图形界面</a>
    <span> · </span>
    <a href="https://dowww.spencerwoo.com/5-Experience/">体验与参考</a>
    <span> · </span>
    <a href="https://github.com/spencerwooo/dowww/blob/master/.github/CONTRIBUTING.md">参与贡献</a>
</h3>

> Remote-WSL 环境让 VS Code 可以直接在便捷可靠的 WSL Linux 环境下进行开发。目前 Remote-WSL 已经可以在 Stable 稳定版本的 VS Code 中下载使用。详细信息：[Remote-WSL 环境下 VS Code 的配置与特性](https://dowww.spencerwoo.com/3-VSCode/#remote-wsl-%E6%8F%92%E4%BB%B6)

## 前言

> 在 [少数派 | 在 Windows 上用 WSL 开发的操作体验指北](https://sspai.com/post/47719) 上阅读更多。

首先达成一个共识：Windows 给 **编程初学者** 带来了很大的困难。比如 **缺乏好用的包管理系统**、**终端环境难看难用** 和 **环境变量不易配置** 等等，这些都让 Windows 在开发体验上难以匹敌 Linux 甚至 macOS。

![](https://i.loli.net/2019/09/27/MjqbUi8QPRyG7Ym.png)

WSL 的出现似乎缓解了这些烦恼。WSL —— Windows Subsystem for Linux，即适用于 Linux 的 Windows 子系统，是一个为在 Windows 10 上能够原生运行 Linux 二进制可执行文件的兼容层。WSL 的出现意味着我们可以借助它来给我们的 Windows 配置一个美观可用的 **学习编程的开发环境**，包括：

- 💻 Unix style 终端环境：`zsh` 和 `oh-my-zsh`
- 🔨 与 macOS 的 Homebrew 一样原理的包管理器：`apt`（针对 Ubuntu）
- 📰 与 Visual Studio Code 配合的编辑调试环境

如果你对这些内容感兴趣，那么 [**直接进入文档**](https://dowww.spencerwoo.com/)，放飞自我，尽情折腾。\\(￣︶￣*\\))

## Changelog 更新日志

**Star and watch**，时刻掌握最新教程。💪

更新日志在 [CHANGELOG.md](https://github.com/spencerwooo/dowww/blob/master/CHANGELOG.md) 中维护，请直接参考链接内容进行查看。

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

<a href="https://opencollective.com/dowww#backers" target="_blank"><img src="https://opencollective.com/dowww/backers.svg"></a>

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

## License 许可 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png" /></a>

本作品采用 [知识共享署名-相同方式共享 4.0 国际许可协议](https://creativecommons.org/licenses/by-sa/4.0/) 进行许可。

本著作係採用 [創用 CC 姓名標示-相同方式分享 4.0 國際 授權條款](https://creativecommons.org/licenses/by-sa/4.0/) 授權.

This work is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).

---

📟 **Dev on Windows with WSL** ©Spencer Woo. Released under the [CC BY-SA 4.0 International License](./LICENSE).

Authored and maintained by Spencer Woo.

[@Portfolio](https://spencerwoo.com) · [@GitHub](https://github.com/spencerwooo) · [@BIT](http://www.bit.edu.cn/)
