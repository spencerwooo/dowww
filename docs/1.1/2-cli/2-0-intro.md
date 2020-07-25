# 概要 <Badge text="New" vertical="middle"/>

![](https://i.loli.net/2020/01/07/NnuHrlqRUDfdG3b.png)

::: callout 🍳 本章内容
欢迎来到 **Dev on Windows with WSL** 文档的第二部分 —— WSL 命令行 CLI 环境的配置。本章我们将对 WSL 中开发学习涉及到的工具的配置方法进行介绍，这其中包括：终端工具、终端环境、Shell 的配置以及其他工具的配置。
:::

## 背景知识

为了在命令行界面下使用 WSL，我们需要一个 Terminal —— 终端模拟器。为了在 WSL 下能够正常的与 Linux 环境进行无界面的命令行交互，我们需要一个 Shell —— 命令行解释器。为了搞清楚接下来我将介绍的内容，我先来简单讲解一下「Console、Terminal 和 Shell 这三者的区别」。在我们当前的讨论范畴内：

- 我们打开 Windows 的那个「小黑框」（Command Prompt），实际上就是打开了一个终端（Terminal）
- 在终端里面「输入命令，得到结果」的交互程序，就是命令行解释器（Shell）

也正因如此，Windows 最新的 Shell 叫 PowerShell。（控制台 Console 则是相对古老的概念，是大型机物理意义上面的独立终端，我们在这里先不探讨这个话题。）使用 macOS 和 Linux 的同学如果听说过 `bash` 和 `zsh` 的话，它们同样也是 Shell。

![](https://i.loli.net/2020/01/02/CXukNvPpoziL9ZF.png)

**推荐阅读：**[告别 Windows 终端的难看难用，从改造 PowerShell 的外观开始 - 少数派](https://sspai.com/post/52868)

## 主要内容

接下来的几篇文章中，我将具体介绍下面的工具、环境的配置方法，包括但不限于：

- Terminal 工具：Windows Terminal、Fluent Terminal、Hyper、Terminus……
- Shell 环境：`bash`、`zsh`、`fish`……
- Ubuntu 包管理工具：`apt` - Ubuntu's Advanced Packaging Tool
- 版本控制工具：Git
- 远程登陆工具：SSH - Secure Shell、Mosh - the mobile shell
- Windows 和 WSL 文件互访的方法
- ……

本章内容将聚焦于 WSL 在命令行界面上的使用，不会涉及到 VS Code 或其他图形界面的工具。
