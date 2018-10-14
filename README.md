![1.jpg](https://i.loli.net/2018/10/01/5bb1d3f780d16.jpg)

<h1 align="center">💎 Dev on Windows with WSL 👨‍💻</h1>

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/spencerwoo98/Dev-on-Windows-with-WSL/blob/master/LICENSE)
![love](https://img.shields.io/badge/Made%20with-love-ff69b4.svg)
![windows](https://img.shields.io/badge/Perfect-Windows-orange.svg)

> 在 Windows 上面用 WSL 优雅开发

- [前言](#前言)
- [准备工作](#准备工作)
    - [Windows 10 💻](#windows-10-)
    - [WSL - Windows Subsystem for Linux](#wsl---windows-subsystem-for-linux)
- [工具链](#工具链)
    - [终端环境](#终端环境)
        - [bash](#bash)
        - [Hyper 终端](#hyper-终端)
- [Disable the bell sound on backspace](#disable-the-bell-sound-on-backspace)
        - [zsh & oh-my-zsh](#zsh--oh-my-zsh)
- [Change ls colours](#change-ls-colours)
- [make cd use the ls colours](#make-cd-use-the-ls-colours)
    - [开发工具](#开发工具)
        - [git](#git)
        - [ssh](#ssh)
        - [wsl-open](#wsl-open)
- [Get npm if you don't have it already](#get-npm-if-you-dont-have-it-already)
- [Install](#install)
    - [使用 Visual Studio Code 作为主要代码编辑工具](#使用-visual-studio-code-作为主要代码编辑工具)
        - [让 VSCode 使用 WSL 内的 `git` 进行版本控制](#让-vscode-使用-wsl-内的-git-进行版本控制)
        - [Python](#python)
        - [其他语言 期待补充 💗💗💗](#其他语言-期待补充-)
    - [GUI 图形化窗口](#gui-图形化窗口)
        - [安装 XServer for windows](#安装-xserver-for-windows)
        - [在 WSL 侧安装 Visual Studio Code](#在-wsl-侧安装-visual-studio-code)
- [后记与使用](#后记与使用)
    - [终端](#终端)
    - [VSCode + WSL 工具链](#vscode--wsl-工具链)
- [参考资料](#参考资料)

# 前言

首先达成一个共识：**Windows 给编程初学者带来了很大的困难**。比如缺乏好用的包管理系统、终端环境难看难用和环境变量不易配置等等，这些都让 Windows 在开发体验上难以匹敌 Linux 甚至 macOS（不包括一定需要 IDE 支持的语言，比如 Java 和 .NET 等等）。然而 Linux 桌面环境虽然在 2018 年的今天有很大的改善，但是相比 Windows 还是有很大的差距，程序假死、卡住、崩掉的情况数不胜数。（还有 Linux 每一个发行版几乎都没有很好的支持 Emoji 啊！😫）

WSL 的出现似乎缓解了这些烦恼。我们可以在 Windows 上借助 Windows Subsystem for Linux 来给我们的 Windows 配置一个可用的开发环境，包括：Linux 终端环境 `zsh`、Linux 下的包管理器 `apt`、Visual Studio Code 开发环境等等。这篇文章的意义即此。🎉🎉🎉

# 准备工作

![img](https://i.loli.net/2018/09/30/5bb0d9c859392.png)

## Windows 10 💻

1. 需要保证 Windows 10 至少为 Windows 10 Fall Creators Update 及之后的版本。
2. 安装之前必须保证为 Windows 10 开启了「Windows Subsystem for Linux」的可选功能。
3. Windows 用户名不能有空格。（有空格会对 WSL 环境造成影响。）

## WSL - Windows Subsystem for Linux

直接从微软商店下载。

官方支持的 Linux 发行版有：

- Ubuntu
- Debian
- OpenSUSE / SUSE Enterprise Linux
- Kali Linux

具体下载安装过程见 > [微软官方支持文档](https://docs.microsoft.com/zh-cn/windows/wsl/install-win10)。

下文以 Ubuntu 18.04 发行版为例。

# 工具链

## 终端环境

> 💎 按照安装顺序介绍：

### bash

下载安装的 Windows Subsystem for Linux 自带。`bash` 是 `Unix shell` 的一种，是我们开发环境的基础。

> 参考：[Shell、Terminal 和 Console 的区别。](https://unix.stackexchange.com/questions/4126/what-is-the-exact-difference-between-a-terminal-a-shell-a-tty-and-a-con)

### Hyper 终端

Hyper 是基于 Electron 的 Terminal（我们需要一个「终端模拟器」去和我们的 `shell` 进行交互），也可能是目前 Windows 上面可定制化程度最高的终端模拟器了。当然，Hyper 也支持 macOS 和 Linux。

首先，下载 [Node.js for Windows](https://nodejs.org/en/download/) 并安装。

然后，下载 Hyper 终端：

- [Hyper 终端官网](https://hyper.is/)
- [Hyper 终端下载地址](https://hyper.is/#installation)

安装一些主题：

- [Awesome Hyper](https://github.com/bnb/awesome-hyper) - 有趣的与 Hyper 相关的内容、项目，可以找到合适的主题配置、字体、插件和 Hyper 的使用指南。

配置 Hyper 终端默认使用 WSL 的 `bash`：

- 打开 Hyper，快捷键 `Ctrl` + `,`：开启配置文件；
- 找到 `Shell` 选项，将其改成：`C:\\Windows\\System32\\bash.exe`
- 重启 Hyper。

> 💎 参考配置文件：[我的 `.hyper.js` 长这样儿。🎈🎈🎈](https://gist.github.com/spencerwoo98/f90d1ce8a24e7fc0fe6a3a7aab097f6e)

禁用令人闹心的终端提示音：

- 在 Hyper 中打开位于 Linux 文件系统根目录的 `.bashrc` 并添加以下代码:

```shell
# Disable the bell sound on backspace
set bell-style none
```

- 加载设置：`source ~/.bashrc`

### zsh & oh-my-zsh

下载安装 `zsh` 代替自动补全功能欠缺的 `bash`：

- 利用 Ubuntu 的包管理器安装 `zsh`：`sudo apt install zsh`
- 修改 `.bashrc` 加入以下代码，使得默认 `shell` 变成 `zsh`：

```shell
if [ -t 1 ]; then
exec zsh
fi
```

- 加载设置：`source ~/.bashrc`

下载安装 [`oh-my-zsh`](https://ohmyz.sh/)，一个好用的 `zsh` 配置管理工具：

- 运行命令下载安装：`sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"` （提醒没有什么就安装什么。比如：没有 `curl` 的话，运行 `sudo apt-get install curl` 安装。然后再执行上述语句。）

去除 `ls` 和 `cd` 命令之后背景色出现的问题：

- 修改 `.zshrc`，添加如下代码

```shell
# Change ls colours
LS_COLORS="ow=01;36;40" && export LS_COLORS

# make cd use the ls colours
zstyle ':completion:*' list-colors "${(@s.:.)LS_COLORS}"
autoload -Uz compinit
compinit
```

- 加载设置：`source ~/.zshrc`

基本的终端环境就到这里了。推荐安装 `zsh` 组件：[zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)。

<div align="center"><img src="https://i.loli.net/2018/10/01/5bb1aa3bc42fa.png" width="60%"></div>

最后成品大概是这样的。🎉🎉🎉

## 开发工具

> 💎 日常运行 `sudo apt update && sudo apt upgrade` 来保证所安装的组件最新。

### git

`git`：版本控制系统，安装：

- `sudo apt install git`

### ssh

`ssh`：与远程服务器沟通的渠道，配置与 GitHub 链接的 SSH 钥匙 🔑：

- 按照 [GitHub 官方给出的教程](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#platform-linux)在 Linux 下生成钥匙对，并将之添加到你的 SSH agent 中；
- 查看公钥：`cat ~/.ssh/id_rsa.pub`；
- 将公钥复制并添加到 GitHub 账户密钥里面。

### [wsl-open](https://github.com/4U6U57/wsl-open)

`wsl-open` 是类似于 macOS 里面 `open` 命令的程序。它能够在 WSL 中用 Windows 文件资源管理器打开文件夹，用 Windows 默认照片打开图片等等，方便开发。

<div align="center"><img src="https://i.loli.net/2018/10/01/5bb1b57c6f8ee.gif" alt="wsl-open gif" width="80%"></div>

下载：

- 如果还没安装 npm 的话：

```shell
# Get npm if you don't have it already
sudo apt-get install -yqq npm
```

- 然后安装 wsl-open：

```shell
# Install
sudo npm install -g wsl-open
```

## 使用 Visual Studio Code 作为主要代码编辑工具

> 💎 以下步骤适用于 Windows 这边安装的 Visual Studio Code。
> 
> 💎 目前存在的一个问题是：VSCode 和 WSL 侧的工具链兼容性都很糟糕（除了 Node.js），都需要一定的配置才能丝滑工作。这也是一个当前微软 VSCode 各大语言插件组和 WSL 开发组都知道并在解决的问题（参考 [VSCode Python 插件 Issue #67](https://github.com/Microsoft/vscode-python/issues/67)），由于 WSL 是一个 Runtime 环境，而 VSCode 只和 Windows 侧的组件进行沟通，因此当前一个比较好的解决方法是：在 Windows 侧手动创建一些脚本帮助 VSCode 和 WSL 侧安装的组件沟通。

### 让 VSCode 使用 WSL 内的 `git` 进行版本控制

> Use Git installed in Bash on Windows/Windows Subsystem for Linux (WSL) from Windows and Visual Studio Code (VSCode)

为了不浪费资源、方便开发，我们从这一步开始试图将 WSL(Linux) 侧的工具链全部整合到 Windows 侧的 Visual Studio Code。[wslgit](https://github.com/andy-5/wslgit) 提供了一个小巧的转换工具，让 Linux 侧的 `git` 能够直接被 Visual Studio Code 版本控制工具识别到。

- 下载：[`wslgit` release.](https://github.com/andy-5/wslgit/releases)

- 使用：
    - 将 `wslgit.exe` 文件放到一个合适的地方，并复制路径；
    - 在 VSCode 设置中添加：

```json
"git.path": "C:\\$更换为 wslgit.exe 的路径$\\wslgit.exe"
```

### Python

首先安装 Visual Studio Code [官方 Python 插件](https://marketplace.visualstudio.com/items?itemName=ms-python.python)。

在 WSL 侧安装 Python：

- 安装必备工具：`sudo apt install -y make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev libncursesw5-dev xz-utils tk-dev`

- 安装 Python 3（或者你想要的 Python 版本）：`sudo apt install python3`

让 VSCode 集成 WSL 侧 Python：

- 在 WSL 终端中进入 Windows 系统用户根目录（即：`/mnt/c/Users/$Windows 用户名$`）
- 创建文件夹：`mkdir .vscode_bats`
- 进入文件夹 `cd .vscode_bats`，**⚠ 用 VSCode 创建文件 `code python.bat &`**
- 将下面内容 **在 VSCode 中** 加入文件 `python.bat`：

```bat
@echo off
set v_params=%*
set v_params=%v_params:\=/%
set v_params=%v_params:c:=/mnt/c%
set v_params=%v_params:"=\"%
bash.exe -c "/usr/bin/python3 %v_params%"
```

- 在 VSCode 设置中加入：

```json
"python.pythonPath": "C:\\Users\\$用户名$\\.vscode_bats\\python3.bat",
```

官方 Python 插件集成了实时代码风格检查工具 `pylint`，快速定位工具 `ctags` 和代码美化插件 `autopep8`。这些同样也可以在 WSL 侧安装并从 Windows VSCode 侧调用。

- 安装 Python 包管理器 `pip`：`sudo apt install python3-pip`
- 安装 `pylint`：`pip3 install pylint`
- 安装 `exuberant ctags`：`sudo apt install exuberant-ctags`
- 安装 `autopep8`：`pip3 install autopep8`
- 在刚刚创建的 `.vscode_bats` 文件夹下**用 VSCode 创建** `pylint.bat`：`code pylint.bat &` 并加入以下内容：

```bat
@echo off
set v_params=%*
set v_params=%v_params:\=/%
set v_params=%v_params:c:=/mnt/c%
set v_params=%v_params:"=\"%
bash.exe -c "/usr/bin/pylint %v_params%"
```

- 在刚刚创建的 `.vscode_bats` 文件夹下**用 VSCode 创建** `ctags.bat`：`code ctags.bat &` 并加入以下内容：

```bat
@echo off
set v_params=%*
set v_params=%v_params:\=/%
set v_params=%v_params:c:=/mnt/c%
set v_params=%v_params:"=\"%
bash.exe -c "ctags %v_params%"
```

- 在刚刚创建的 `.vscode_bats` 文件夹下**用 VSCode 创建** `autopep8.bat`：`code autopep8.bat &` 并加入以下内容：

```bat
@echo off
set v_params=%*
set v_params=%v_params:\=/%
set v_params=%v_params:c:=/mnt/c%
set v_params=%v_params:"=\"%
bash.exe -c "autopep8 %v_params%"
```

- 在 VSCode 设置中加入：

```json
"python.linting.pylintPath": "C:\\Users\\$用户名$\\.vscode_bats\\pylint.bat",
"python.workspaceSymbols.ctagsPath": "C:\\Users\\$用户名$\\.vscode_bats\\ctags.bat",
"python.formatting.autopep8Path": "C:\\Users\\$用户名$\\.vscode_bats\\autopep8.bat"
```

那么现在拿 VSCode 写 Python 项目的时候应该可以自动代码补全、IntelliSense、跳转定义和自动美化了。👍

### 其他语言 期待补充 💗💗💗

> 💨 深坑待补：C/C++、Javascript/Node.js、Typescript、Golang...
> 
> 💨 任何有经验的同学欢迎来这里添加补充内容。Fork > PR > Review > Merge 一条龙。💗

## GUI 图形化窗口

> 虽然上面的方案有时候能够解决问题，但是最为深度整合的方案是：在 WSL 侧的 Linux 环境下安装 VSCode 并从 Linux 侧打开，这样就一定能保证 VSCode 使用的工具链全部是 WSL 侧工具链了。
> 
> 方案：安装一个 XServer 来让 Linux 侧 GUI 程序有窗口显示。

### 安装 XServer for windows

- 推荐安装 [VcXsrv Windows X Server](https://sourceforge.net/projects/vcxsrv/)，并以这样的配置打开：

![img](https://i.loli.net/2018/10/01/5bb1c9d292ce0.jpg)

- 在 WSL 中安装必要组件：

```shell
sudo apt install libgtk2.0-0 libxss1 libasound2
```

- 配置 WSL 参数：

```shell
echo 'export DISPLAY=:0.0' >> .profile
```

- 安装一个小眼睛，看看图形窗口安装成功没有：

```shell
sudo apt install x11-apps -y && xeyes
```

![img](https://i.loli.net/2018/10/01/5bb1cc9565f02.png)

如果出现了这样的小眼睛盯着你的鼠标看，那么说明我们的 XServer 安装成功了。

### 在 WSL 侧安装 Visual Studio Code

- 添加 Visual Studio Code 库：

```shell
curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg
sudo mv microsoft.gpg /etc/apt/trusted.gpg.d/microsoft.gpg
sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'
```

- 安装 Visual Studio Code：

```shell
sudo apt update && sudo apt upgrade
sudo apt install code
```

- 打开 XServer 窗口，在 WSL 终端执行 `code`，应该就可以看到 WSL 中的 VSCode 窗口启动了。

# 后记与使用

## 终端

WSL + Hyper 终端的环境是完全可用的一个完美 Linux 环境。美观、稳定、可定制化程度高。完美。👌

## VSCode + WSL 工具链

还是有诸多不完美的地方。代码实时风格检查正常使用，代码美化正常执行，IntelliSense 有时候会抽风，但是跳转定义很多情况会出现问题。

# 参考资料

感谢前辈总结的经验，没有以下这些文章我不可能总结出这些东西。

- [lloydstubber/my-wsl-setup](https://github.com/lloydstubber/my-wsl-setup)
- [Voronoff/wsl_setup.md](https://gist.github.com/Voronoff/059c50f9fd354386c305c55af1f3a61f#install-and-set-up-python-to-work-with-vscode-and-wsl)
- [Running VSCode for Linux in WSL #2760](https://github.com/Microsoft/WSL/issues/2760)
- [sirredbeard/Awesome-WSL](https://github.com/sirredbeard/Awesome-WSL)
- [ethanhs/WSL-Programs](https://github.com/ethanhs/WSL-Programs)
- [如何在 Windows Subsystem for Linux (WSL) 上运行 Linux GUI 软件](http://www.yuan-ji.me/%E5%A6%82%E4%BD%95%E5%9C%A8Windows-Subsystem-for-Linux-(WSL)-%E4%B8%8A%E8%BF%90%E8%A1%8CLinux-GUI-%E8%BD%AF%E4%BB%B6/)
- [在 WSL 下启动 VSCode](https://zhuanlan.zhihu.com/p/33226830)

---

**👨‍💻 Dev on Windows with WSL** ©Spencer Woo. Released under the MIT License.

Authored and maintained by Spencer Woo.

[@Blog](https://spencerwoo.com/) · [ⒿJike](https://web.okjike.com/user/4DDA0425-FB41-4188-89E4-952CA15E3C5E/post) · [@GitHub](https://github.com/spencerwoo98)
