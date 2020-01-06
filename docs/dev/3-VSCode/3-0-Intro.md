# Visual Studio Code

![](https://i.loli.net/2019/05/13/5cd96b08b7f1f38773.png)

:::callout 👓 本章内容
Visual Studio Code 是一款介乎于 Text Editor（文本编辑器）和 IDE（集成开发环境）之间的一款强大的代码编辑器。（后文以 VS Code 称呼。）借助于 VS Code 和 WSL 环境，我们可以在 Windows 环境下配置一个 Linux 风格的、用 Linux 工具的、符合 Linux 规范的开发环境。本章将对 VS Code 的安装以及让 VS Code 在 WSL 环境下运行进行介绍。
:::

VS Code 是一款强大的代码编辑器，也可能是市面上最受欢迎的代码编辑器。2019 年 6 月的今天，我不仅因为 [这里陈述的理由](https://sspai.com/post/47719) 推荐 VS Code，更因为 VS Code Stable 已经通过 Remote 插件家族直接支持了 WSL 下的开发调试。**一句话：如果你希望使用 WSL 作为你的主要开发环境，请直接考虑 VS Code。**

## 下载安装

你可以在 VS Code 官网下载安装 Windows 版本的 VS Code：[Visual Studio Code | Code editing. Redefined.](https://code.visualstudio.com/)

::: danger DANGER
在 Windows 文件夹与文件中出现的名字不能有（包括 Emoji 在内的）特殊符号，否则会出现无法打开终端、无法直接进入相应文件夹的问题。
:::

请注意，安装 Windows 版本 VS Code 的时候，需要：

1. 安装至 C 盘（否则会有路径与访问权限的问题）
2. 在「选择其他任务」界面勾选「其他」下的全部四个选项（为了后面在 WSL 中直接调用 `code` 命令来打开 Visual Studio Code 打下基础。）

如果没有出现问题，那么你可以通过开始菜单点击打开 VS Code，也可以在 WSL 环境或 Windows PowerShell 环境的终端下，使用下面的命令用 VS Code 打开某个目录（某个文件夹）：

```bash
code {DIRECTORY_PATH}
```

另外，你也可以用下面的命令用 VS Code 打开当前文件夹：

```bash
code .
```

## 功能简介

![](https://i.loli.net/2020/01/06/avGVL54ceIBFhxR.png)

VS Code 的界面清晰易懂，主界面由：

- Activity Bar：功能栏
- Sidebar：侧边栏
- Editor：编辑器
- Terminal：集成终端
- Status Bar：状态栏

五个区域构成。默认环境下 VS Code 拥有：文件管理、搜索管理、版本管理（Git）、调试窗口以及插件管理这五个功能区域。在功能栏可以分别唤起这几个功能。使用快捷键 ``Ctrl + ` `` 可以唤起 VS Code 的集成终端。

更多关于 VS Code 的使用方法，请参考：[Visual Studio Code - Docs](https://code.visualstudio.com/docs)。在接下来的文档里，我们将对利用 WSL 作为主要开发环境并让 VS Code 直接连接至 WSL 环境的配置工作进行介绍。
