<div align="center"><img src="https://raw.githubusercontent.com/spencerwooo/dowww/master/docs/.vuepress/public/hero.png" alt="Icon Badge" width="30%" /></div> 


<h1 align="center">Dev on Windows with WSL</h1>

<h3 align="center">🍳💡🎉</h3>

<p align="center">
<strong>在 Windows 上面用 WSL 优雅开发</strong><br>
优秀的 Unix style 开发环境、包管理、迅捷稳定的开发调试环境、美丽养眼的开发工具与更多
</p>

<div align="center">

[![Build Status](https://img.shields.io/travis/spencerwooo/dowww.svg?style=flat-square)](https://travis-ci.org/spencerwooo/dowww)
[![GitHub stars](https://img.shields.io/github/stars/spencerwooo/dowww.svg?style=flat-square&label=⭐%20Stars)](https://github.com/spencerwoo/dowww)
![love](https://img.shields.io/badge/Made%20with-love-ff69b4.svg?style=flat-square)
![Windows](https://img.shields.io/badge/Windows-♥-FFE411.svg?logo=windows&style=flat-square)
[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-03A9F4.svg?style=flat-square)](http://creativecommons.org/licenses/by-nc-nd/4.0/)

</div>

<h3 align="center">
    <a href="https://spencerwoo.com/dowww/">入坑指北</a>
    <span> · </span>
    <a href="https://spencerwoo.com/dowww/1-Preparations/">准备工作</a>
    <span> · </span>
    <a href="https://spencerwoo.com/dowww/2-Toolchain/">工具链</a>
    <span> · </span>
    <a href="https://spencerwoo.com/dowww/3-VSCode/">Visual Studio Code</a>
    <span> · </span>
    <a href="https://spencerwoo.com/dowww/4-GUI/">图形界面 GUI</a>
    <span> · </span>
    <a href="https://spencerwoo.com/dowww/5-Experience/">体验与参考</a>
</h3>


# 前言

> 在 [少数派 | 在 Windows 上用 WSL 开发的操作体验指北](https://sspai.com/post/47719) 上阅读更多。

首先达成一个共识：Windows 给 **编程初学者** 带来了很大的困难。比如 **缺乏好用的包管理系统**、**终端环境难看难用** 和 **环境变量不易配置** 等等，这些都让 Windows 在开发体验上难以匹敌 Linux 甚至 macOS。

![](https://i.loli.net/2018/12/13/5c11e99587274.png)

WSL 的出现似乎缓解了这些烦恼。WSL —— Windows Subsystem for Linux，即适用于 Linux 的 Windows 子系统，是一个为在 Windows 10 上能够原生运行 Linux 二进制可执行文件的兼容层。WSL 的出现意味着我们可以借助它来给我们的 Windows 配置一个美观可用的 **学习编程的开发环境**，包括：

- 💻 Unix style 终端环境：`zsh` 和 `oh-my-zsh`
- 🔨 与 macOS 的 Homebrew 一样原理的包管理器：`apt`（针对 Ubuntu）
- 📰 与 Visual Studio Code 配合的编辑调试环境

如果你对这些内容感兴趣，那么 [**直接进入文档**](https://spencerwoo.com/dowww/)，放飞自我，尽情折腾。\(￣︶￣*\))

# Changelog

- [2018-12-13]：新增了 Terminus 终端的推荐
- [2018-12-11]：增加了 VSCode 中 LaTeX 环境的配置，[PR #10](https://github.com/spencerwooo/dowww/pull/10)
- ...

# 我都介绍了什么？

- 如何搭建一套比 Windows 原生开发工具体验更好的 Unix 开发环境
- 如何配置一个可能是 Windows 上可定制化程度最高的终端模拟器与终端环境
- 一些利用 Visual Studio Code 在 Windows 上与 WSL 中的工具配合进行开发和调试的 Tips（包括 Python 和 C/C++ 的开发）
- 利用 X-Server 直接打开 Linux 上的 GUI 窗口程序进行原生开发的操作指北
 
**配置简单、扫清障碍、专为学习、高效开发。** 🎉🎉🎉

但是还有一些内容，比如：

- 如何配置 Visual Studio Code 更好看
- 如何配置 Windows 下（或是 macOS 下）的终端环境更好看
- 如何配置 Windows 更好看

这些问题太过主观，在这里我最想解决的是如何让 WSL 下的工具能够更加丝滑的与 Windows 开发工具配合，来提高我们的开发效率。并且说实话，**教程中介绍的工具无需进一步的配置就足够美观了**。如有需求，可以查看我的往期文章（上面链接）进行自行查看甄别与折腾。

# 体验

目前仍然有很多地方需要完善，当然 WSL 本身也有很多小 bug，希望有经验的同学前来帮我共同完善本项目。鞠躬。

# License 许可

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="創用 CC 授權條款" style="border-width:0; padding-top:10px;" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a>

本著作係採用<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">創用 CC 姓名標示-非商業性-禁止改作 4.0 國際 授權條款</a>授權。

---

💡 **Dev on Windows with WSL** ©Spencer Woo. Released under the CC BY-NC-ND 4.0 International License.

Authored and maintained by Spencer Woo.

[@Blog](https://spencerwoo.com/) · [ⒿJike](https://web.okjike.com/user/4DDA0425-FB41-4188-89E4-952CA15E3C5E/post) · [@GitHub](https://github.com/spencerwooo)