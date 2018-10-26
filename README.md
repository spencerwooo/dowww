<div align="center"><img src="https://i.loli.net/2018/10/17/5bc6e7ca735bb.png" alt="Icon Badge" width="40%" /></div>

<h1 align="center">💡 Dev on Windows with WSL</h1>

[![Build Status](https://img.shields.io/travis/spencerwooo/dowww.svg?style=flat-square)](https://travis-ci.org/spencerwooo/dowww)
[![GitHub stars](https://img.shields.io/github/stars/spencerwooo/dowww.svg?style=flat-square&label=⭐%20Stars)](https://github.com/spencerwoo/dowww)
![love](https://img.shields.io/badge/Made%20with-love-ff69b4.svg?style=flat-square)
![Windows](https://img.shields.io/badge/Windows-♥-FFE411.svg?logo=windows&style=flat-square)
[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-03A9F4.svg?style=flat-square)](http://creativecommons.org/licenses/by-nc-nd/4.0/)

> [直达链接 > 💡 在 Windows 上用 WSL 优雅开发](https://spencerwoo.com/dowww/)

# 前言

首先达成一个共识：**Windows 给编程初学者带来了很大的困难**。比如缺乏好用的包管理系统、终端环境难看难用和环境变量不易配置等等，这些都让 Windows 在开发体验上难以匹敌 Linux 甚至 macOS（不包括一定需要 IDE 支持的语言，比如 Java 和 .NET 等等）。然而 Linux 桌面环境虽然在 2018 年的今天有很大的改善，但是相比 Windows 还是有很大的差距，程序假死、卡住、崩掉的情况数不胜数。（还有 Linux 每一个发行版几乎都没有很好的支持 Emoji 啊！😫）

WSL 的出现似乎缓解了这些烦恼。我们可以在 Windows 上借助 Windows Subsystem for Linux 来给我们的 Windows 配置一个可用的开发环境，包括：Linux 终端环境 `zsh`、Linux 下的包管理器 `apt`、Visual Studio Code 开发环境等等。这篇文章的意义即此。🎉🎉🎉

# 你在这里能学到什么？

- 💡 一套比 Windows 原生开发工具体验更好的 Unix 开发环境
- 🎈 [一个可能是 Windows 上可定制化程度最高的终端模拟器与终端环境](https://spencerwoo.com/dowww/2-Toolchain/)
- 🍗 [一些利用 Visual Studio Code 在 Windows 上与 WSL 中的工具配合进行开发和调试的 Tips](https://spencerwoo.com/dowww/3-VSCode/)（包括 Python 和 C/C++ 的开发）
- 🍳 [利用 X-Server 直接打开 Linux 上的 GUI 窗口程序进行原生开发的操作指北](https://spencerwoo.com/dowww/4-GUI/)

# 但是在这里我不想详细介绍这些内容：

- 如何配置 Visual Studio Code 更好看
- [如何配置 Windows 下的终端环境更好看](https://sspai.com/post/45332)
- [如何配置 Windows 更好看](https://sspai.com/post/45742)

这些问题太过主观，在这里我最想解决的是如何让 WSL 下的工具能够更加 Seamlessly 的与 Windows 开发工具配合，来提高我们的开发效率。🎁 **如有需求，可以查看我的往期文章（上面链接）进行自行查看甄别与折腾**。鞠躬。

# 为什么我极力推荐 Visual Studio Code?

这个问题可以这样来理解：Visual Studio Code 与其他诸如 Atom, Sublime Text 3 和 Notepad++ 等等现代化代码编辑器相比，有哪里体验更加优质？

**简单的说，Visual Studio Code:**

开源、免费、生态庞大、支持完善、调试便捷、定制化程度高。

**具体讲，Visual Studio Code:**

- 开源，是目前微软开源项目中最受欢迎的一个。
- 社区支持，有着成千上万的插件、主题、拓展来把它定制成为我们想要的样子。
- 内置非常完善的机制与 Git 集成版本控制工具集成，开发体验极佳。
- 内置调试工具能够力压其他任何编辑器，在我使用过程中从未见过调试功能有 Visual Studio Code 强大的编辑器。

而与此同时，Atom 虽然也很好看，但是由于优化问题其性能远比不上 Visual Studio Code；而 Sublime Text 3 是闭源软件，需要付费购买，就如曾经 Sublime Text 可能是最受欢迎的主题 Material Theme 的作者所说（[详见 Deprecation Note](https://github.com/equinusocio/material-theme#deprecation-note)）：

> 它是一个：80$ commercial software that is 80% cracked or used in free mode.

这样看来，我推荐使用 Visual Studio Code 就更加有理由了。🤭

# 相关信息

本仓库由 [VuePress](https://github.com/vuejs/vuepress) 生成，已经发布于：🔗 [Spencer Woo | Dev on Win with WSL](https://spencerwoo.com/dowww/)

目前仍然有很多地方需要完善，当然 WSL 本身也有很多小 bug，希望有经验的同学前来帮我共同完善本项目。鞠躬。

详细请见 > [💗💗💗 Help needed.](https://spencerwoo.com/dowww/3-VSCode/HelpNeeded.html)

# License 许可

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="創用 CC 授權條款" style="border-width:0; padding-top:10px;" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a>

本著作係採用<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">創用 CC 姓名標示-非商業性-禁止改作 4.0 國際 授權條款</a>授權。

---

💡 **Dev on Windows with WSL** ©Spencer Woo. Released under the CC BY-NC-ND 4.0 International License.

Authored and maintained by Spencer Woo.

[@Blog](https://spencerwoo.com/) · [ⒿJike](https://web.okjike.com/user/4DDA0425-FB41-4188-89E4-952CA15E3C5E/post) · [@GitHub](https://github.com/spencerwooo)