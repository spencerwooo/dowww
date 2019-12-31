<div align="center">
<img src="docs/.vuepress/public/hero.png" alt="icon" width="180px"/>

<h1>Dev on Windows with WSL</h1>

<strong>在 Windows 上面用 WSL 优雅开发</strong>

<h3>
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

[![Contributors on Open Collective](https://flat.badgen.net/opencollective/contributors/dowww)](#contributing-贡献)
[![Sponsors on Open Collective](https://flat.badgen.net/opencollective/backers/dowww)](#sponsoring-赞助)
[![Windows](https://flat.badgen.net/badge/Windows/❤%20Linux/pink?icon=windows)](https://cloudblogs.microsoft.com/windowsserver/2015/05/06/microsoft-loves-linux/)
[![License: CC BY-SA 4.0](https://flat.badgen.net/badge/license/CC%20BY-SA%204.0/03A9F4)](http://creativecommons.org/licenses/by-sa/4.0/)
[![GitHub stars](https://flat.badgen.net/github/stars/spencerwooo/dowww?icon=github&color=orange)](https://github.com/spencerwooo/dowww)

</div>

<div align="center"><img alt="demo screenshot" src="https://i.loli.net/2019/12/31/jm5fChvuENwR1ae.png" width="80%" /></div>

<h6>🚀 重构进行时：Dev on Windows with WSL 正在进行重构优化，文档撰写工作正在进行，大家敬请期待。</h6>

首先达成一个共识：Windows 给 **编程初学者** 带来了很大的困难。比如 **缺乏好用的包管理系统**、**终端环境难看难用** 和 **环境变量不易配置** 等等，这些都让 Windows 在开发体验上难以匹敌 Linux 甚至 macOS。

WSL 的出现似乎缓解了这些烦恼。WSL —— Windows Subsystem for Linux，即适用于 Linux 的 Windows 子系统。在 2019 年的夏天，微软官方推出了 [WSL 2：基于最新虚拟化技术的 WSL 引擎。](https://docs.microsoft.com/en-us/windows/wsl/wsl2-about)强大的 WSL 2 直接将一个 Linux 内核放入 WSL 架构中，使得 Linux 子系统的 I/O 效率急速提升，也让 Linux 子系统能真正执行「全部 Linux 原生的系统调用（Full System Call Compatibility）」。无论是 WSL 还是 WSL 2，我们都可以借助之来给我们的 Windows 配置一个美观可用的 **学习编程的开发环境**，包括：

- 原汁原味 Unix 风格的终端环境和开发环境
- 一行命令管理所有软件包的 APT 包管理工具（Ubuntu's Advanced Packaging Tool）
- 在 Visual Studio Code 中直接编写、开发、调试你的项目

如果你对这些内容感兴趣，那么 [**直接进入文档**](https://dowww.spencerwoo.com/)，放飞自我，尽情折腾。\\(￣︶￣*\\))

## Changelog 更新日志

🌟 Star and watch，时刻掌握最新教程。更新日志在 [CHANGELOG.md](https://github.com/spencerwooo/dowww/blob/master/CHANGELOG.md) 中维护，请直接参考链接内容进行查看。

## Contributing 贡献

### Contributors 贡献者

感谢参与这个项目的所有贡献者。

This project exists thanks to all the people who contribute.

<a href="https://github.com/spencerwooo/dowww/graphs/contributors"><img src="https://opencollective.com/dowww/contributors.svg?button=false" /></a>

### How to contribute 贡献规范

目前来讲，Dev on Windows with WSL 仍然有很多地方需要完善，当然 WSL 本身也有很多小 bug，希望有经验的同学前来帮我共同完善本项目，鞠躬。

在你着手准备给这个项目提交一些新内容前，请务必阅读「贡献」相关内容说明与规范 > [CONTRIBUTING.md](https://github.com/spencerwooo/dowww/blob/master/.github/CONTRIBUTING.md)

## Sponsoring 赞助

谢谢金主爸爸们，我们通过 Open Collective 平台接受赞助。

|                                                              Backers 支持者                                                              |                                                                            Sponsors 赞助商                                                                             |
| :--------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Support this project by becoming a backer. Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/dowww#backer)] | Support this project by becoming a sponsor. Your logo will show up here with a link to your website. 🌏 [[Become a sponsor](https://opencollective.com/dowww#sponsor)] |
|     <a href="https://opencollective.com/dowww#backers" target="_blank"><img src="https://opencollective.com/dowww/backers.svg"></a>      |           <a href="https://opencollective.com/dowww/sponsor/0/website" target="_blank"><img src="https://opencollective.com/dowww/sponsor/0/avatar.svg"></a>           |

另外，我们同样接受以下形式的小额赞助，感谢您考虑赞助我们的项目：

|                                        微信支付                                        |                                       支付宝支付                                       |
| :------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: |
| <img src="https://i.loli.net/2018/03/13/5aa7ae214b63f.jpg" alt="微信支付" width="40%"> | <img src="https://i.loli.net/2018/03/13/5aa7ae11339cd.jpg" alt="微信支付" width="40%"> |

## License 许可

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png" /></a>

本作品采用 [知识共享署名-相同方式共享 4.0 国际许可协议](https://creativecommons.org/licenses/by-sa/4.0/) 进行许可。

本著作係採用 [創用 CC 姓名標示-相同方式分享 4.0 國際 授權條款](https://creativecommons.org/licenses/by-sa/4.0/) 授權.

This work is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).

---

📟 **Dev on Windows with WSL** ©Spencer Woo. Released under the CC BY-SA 4.0 International License.

Authored and maintained by Spencer Woo.

[@Portfolio](https://spencerwoo.com/) · [@Blog](https://blog.spencerwoo.com/) · [@GitHub](https://github.com/spencerwooo)
