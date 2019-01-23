---
sidebarDepth: 4
---

# 终端环境

## 准备

为了加速 Ubuntu 18.04 软件包在中国大陆的下载速度，我们将包管理工具 `apt` 源更换至中科大镜像源：

::: warning 注意
替换内容前记得备份文件：

```bash
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bac
```
:::

将 `/etc/apt/sources.list` 文件内容前面添加如下内容：

```bash
deb https://mirrors.ustc.edu.cn/ubuntu/ bionic main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic main restricted universe multiverse

deb https://mirrors.ustc.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-security main restricted universe multiverse

deb https://mirrors.ustc.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse

deb https://mirrors.ustc.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse

## Not recommended
# deb https://mirrors.ustc.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
# deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
```

然后更新缓存：`sudo apt update && sudo apt upgrade`

更多详细内容请见：[LUG@USTC | Ubuntu 镜像使用帮助](https://lug.ustc.edu.cn/wiki/mirrors/help/ubuntu)

## bash

下载安装的 Windows Subsystem for Linux 默认就是 `bash` 的终端环境。`bash` 是 `Unix shell` 的一种，是我们开发环境的基础。

> 参考：[Shell、Terminal 和 Console 的区别。](https://unix.stackexchange.com/questions/4126/what-is-the-exact-difference-between-a-terminal-a-shell-a-tty-and-a-con)

## 终端 Terminal

Terminal，即「终端模拟器」。我们需要一个终端去和我们的 `shell` 进行交互。你可能看到了，在下载好 Ubuntu 的时候，在开始菜单有一个 Ubuntu 的 Logo，这就是 Windows 为 WSL 准备的默认终端模拟器的入口。从 2018 年 8 月，Windows 正式引入了 ConPTY 这个工具，即：Windows Pseudo Console。详细请见 Windows 官方博客 > [Windows Command-Line: Introducing the Windows Pseudo Console (ConPTY)](https://blogs.msdn.microsoft.com/commandline/2018/08/02/windows-command-line-introducing-the-windows-pseudo-console-conpty/)。

ConPTY 的引入意味着 Windows 命令行环境有了更多的现代终端应具备的功能，比如：

- 支持 256 颜色
- 输出 UTF-8 格式的文本

等等。这是个好兆头，至少 Windows 开始对 CLI 环境的使用体验开始重视了。我们先来讲讲如何把 WSL 默认的终端变美。

### 默认的 WSL 终端模拟器

:::tip
感谢 [Issue #16](https://github.com/spencerwooo/dowww/issues/16) 中，[@12101111](https://github.com/12101111) 提醒我介绍默认终端的配置。

虽然 [下面的下面](/2-Toolchain/2-1-TerminalEnv.html#terminus)，我提到了两个基于 Electron、更加方便自定义、从某种程度上也更好看的终端模拟器，但是 **它们都没有原生的 Windows 默认终端性能快**。因此，如果你追求性能高过美丽，也可以通过下面的方法稍微让 Windows 默认终端好看一些。

下文中，**「Windows 默认的终端模拟器」指 PowerShell 开启的终端或点击开始菜单中的 Ubuntu 图标开启的终端**。其中，如果你用 PowerShell 开启终端，可以直接用 `wsl` 命令进入 WSL 环境。
:::

#### 字体

由于中文的大环境，默认的 Windows 终端字体是新宋体。相信你和我一样，对这个模糊不清的字体深恶痛绝。但是由于 Windows 默认终端是一个极为底层的应用，没有使用通用 UI 渲染层，因此它对字体有着严格的要求，支持这一要求的字体（在中文环境下）只有 [Sarasa Gothic](https://github.com/be5invis/Sarasa-Gothic)。下载安装这个字体之后，你就可以在 Windows 默认终端的设置项目下设置这个字体了。特别的，`Sarasa Mono T SC`（或者中文叫等距更纱黑体）是我们编码所需的等宽字体。

![](https://wx3.sinaimg.cn/large/e264e10ely1fzgxtcb4taj21rc0tgjun.jpg)

#### 配色

在 [Microsoft/console](https://github.com/Microsoft/console) 这个仓库里面，微软为我们提供了一个方便更改默认终端配色的工具：[ColorTool](https://github.com/Microsoft/console/tree/master/tools/ColorTool)，我们可以通过这个工具方便的对我们默认终端的配色进行更改，同时这个工具也支持读取 iTerm 主题文件。

- 首先，我们在这里 > <https://github.com/Microsoft/console/releases> 下载 ColorTool 至本地，并解压
- 然后，打开 Windows 默认终端模拟器，定位至刚刚解压好有 `ColorTool.exe` 的下载文件夹
- 首先我们通过这个命令来看看默认有哪些自带的主题供我们使用：

```powershell
ColorTool.exe -s
```

:::tip
是的，不需要怀疑自己，你可以直接在 WSL 里面执行 `exe` 程序，只是需要输全程序名称包括 `exe` 程序后缀。但是如果你在 WSL 的默认终端里面运行 ColorTool，可能能正常显示主题有哪些，但是可能没办法设置主题。
:::

![](https://wx4.sinaimg.cn/large/e264e10ely1fzgxu3h1bdj21620cpdhc.jpg)


- 之后，我们就可以通过 `ColorTool.exe $主题名称` 命令来更新我们当前使用的终端主题，比如：

```powershell
ColorTool.exe solarized_dark
```

![](https://ws3.sinaimg.cn/large/e264e10ely1fzgy1scz8oj21cb0jpwhh.jpg)

- 然后，在终端的菜单栏右键 > 属性 > 颜色，点击确定来应用主题

![](https://wx4.sinaimg.cn/large/e264e10ely1fzgyeqxig3j21f30w8jww.jpg)

ColorTool 自带了两个常见的主题供我们直接使用，你也可以从这里下载更多的 iTerm 主题配置文件：[iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes) 来使用。

当然，你并不一定要使用 Windows 给 WSL 准备的默认终端模拟器。下面推荐两个支持全平台的，基于 Electron 技术的 Terminal，得益于优秀现代的前端技术，他们都很「好看」，任选一个就可以。

### Terminus

Terminus 是基于 Electron 的 Terminal，是本次我更加推荐的终端。因为相比下文推荐的 Hyper 终端，同样是 Electron 技术搭建的情况下，Terminus 优化的相对更好，启动快速，设置界面也是 GUI 形式而非直接修改配置文件。并且 Terminus 是 Windows 上唯一支持 Fluent Design 里 Vibrancy 色彩的稳定终端。总之体验更加爽快。👍

![](https://i.loli.net/2018/12/13/5c11e99587274.png)

#### 下载 Terminus

下载 Terminus 终端：

- [Terminus 官网](https://eugeny.github.io/terminus/)
- [Terminus 项目主页](https://github.com/Eugeny/terminus)
- [Terminus Release 下载页面](https://github.com/Eugeny/terminus/releases/latest)

#### 配置 Terminus

在设置中将默认 Shell 设置为「WSL / Default distro」即可默认每次打开 WSL 环境，如下：

![](https://i.loli.net/2018/12/13/5c11e8a6eee87.png)

Terminus 的设置是 GUI 界面的，配置简单友好，这里就不做过多描述了，如果要达到截图中的效果：

- **字体**：[Iosevka Nerd Font](https://github.com/ryanoasis/nerd-fonts/tree/master/patched-fonts/Iosevka)
- **配色**：ayu
- **Terminus 设置：**
  - **Theme**: Standard
  - **Acrylic background**: ✅
  - **Background Type**: Fluent
  - **Custom CSS**:

```css
::-webkit-scrollbar { 
    display: none;
}
```

Terminus 有很大的可玩性，不必拘泥于我的配置，尽情放飞自己 (づ￣ 3￣)づ

### Hyper 终端

Hyper 是基于 Electron 的 Terminal，也可能是目前 Windows 上面可定制化程度最高的终端模拟器了。当然，Hyper 也支持 macOS 和 Linux。有关 macOS 终端美化的具体方法可以参考这篇文章 > [HOW TO | 让自己的终端漂亮得不像实力派](https://spencerwoo.com/2018/06/16/Terminal/)

![](https://i.loli.net/2018/10/01/5bb1aa3bc42fa.png)

#### 下载 Hyper

下载 Hyper 终端：

- [Hyper 终端官网](https://hyper.is/)
- [Hyper 终端下载地址](https://hyper.is/#installation)

安装一些主题：

- [Awesome Hyper](https://github.com/bnb/awesome-hyper) - 有趣的与 Hyper 相关的内容、项目，可以找到合适的主题配置、字体、插件和 Hyper 的使用指南。

#### 配置 Hyper 终端

> 感谢 [@printempw](https://github.com/printempw) 对唤起 WSL 的 Shell 环境方式进行反馈建议，参考 [Issue #6](https://github.com/spencerwooo/dowww/issues/6)。

配置 Hyper 终端默认使用 WSL 的 `bash`：

- 打开 Hyper，快捷键 `Ctrl` + `,`：开启配置文件；
- 将配置文件的这几项进行这样的配置：

``` js
config: {
    shell: 'C:\\Windows\\System32\\wsl.exe',
    shellArgs: [],
    env: {}
}
```

- 重启 Hyper。

> 💎 参考配置文件：[.hyper.js](https://gist.github.com/spencerwooo/f90d1ce8a24e7fc0fe6a3a7aab097f6e)

禁用令人闹心的终端提示音：

- 在 Hyper 中打开位于 Linux 文件系统根目录的 `.bashrc` 并添加以下代码:

```bash
# Disable the bell sound on backspace
set bell-style none
```

- 加载设置：`source ~/.bashrc`

## zsh & oh-my-zsh

### 配置 zsh

下载安装 `zsh` 代替自动补全功能欠缺的 `bash`：

- 利用 Ubuntu 的包管理器安装 `zsh`：`sudo apt install zsh`
- 使用 `zsh` 作为默认的 Shell 环境：

```bash
sudo chsh -s $(which zsh)
```

下载安装 [`oh-my-zsh`](https://ohmyz.sh/)，一个好用的 `zsh` 配置管理工具：

- 运行命令下载安装：`sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"`

### 解决光标位置无法正确显示的问题

由于 Windows 下所有终端都尚未很好的 **支持全角（Double width）的 Unicode 字体**，因此 `oh-my-zsh` 默认主题 `robbyrussell` 在 Hyper 终端下会出现光标位置不正确的问题（见 [Issue #5](https://github.com/spencerwooo/dowww/issues/5))。解决方法：

- 在 `~/.oh-my-zsh/themes` 目录下打开 `oh-my-zsh` 默认主题文件：`robbyrussell.zsh-theme`，将其中的全角 Unicode 字符「➜」更改为其他字符（比如「>」或者「→」）
- 加载设置：`source ~/.zshrc`

需要注意的是，很多 `oh-my-zsh` 主题（包括 [更加酷炫的 `Powerlevel9k` 主题包](https://github.com/bhilburn/powerlevel9k)）都用到了上文提到的 Powerline Fonts 和 Nerd Fonts，而这些字形在 Windows 任何终端下都没有很好的支持，因此目前一个很好的解决方法是：

- 将酷炫的命令前部分放在一行单独显示
- 将需要输入的带有光标的命令部分放在第二行显示

![](https://user-images.githubusercontent.com/32114380/50538113-00a78a00-0ba5-11e9-8a7a-db8d709e8d88.png)

比如：如果你使用了 [`Powerlevel9k` 主题包](https://github.com/bhilburn/powerlevel9k)，可以考虑将下面的内容加入 `.zshrc` 来实现命令单独在第二行的显示：

```shell
# 让命令主体单独在第二行显示
POWERLEVEL9K_PROMPT_ON_NEWLINE=true
# 让右侧命令不显示（右侧命令同样无法正常在 Windows 下渲染）
POWERLEVEL9K_DISABLE_RPROMPT=true
# 上文截图中的两行命令前部字符的配置
POWERLEVEL9K_MULTILINE_FIRST_PROMPT_PREFIX="╭"
POWERLEVEL9K_MULTILINE_LAST_PROMPT_PREFIX="╰\u276F\u276F\u276F "
```

这样配置之后，终端中的光标位置就不会出现错位问题了，同时也不影响终端的炫酷和易用。🍻

更多配置可以参考我的 [`dotfiles`](https://github.com/spencerwooo/dotfiles) 里面 [`_wsl_zshrc`](https://github.com/spencerwooo/dotfiles/blob/master/_wsl_zshrc) 的部分内容。折腾愉快！

## 解决 `ls` 和 `cd` 命令后背景色问题

简单来说，由于 DrvFs 文件系统的权限问题，导致了 Windows 原有 NTFS 文件系统中的文件到 WSL 下权限全部变成 0777。这样在 WSL 中执行 `ls` 和 `cd` 命令之后，显示出来的结果背景色就会出现问题。

> 感谢 [@printempw](https://github.com/printempw) 提供的从根源解决这个问题的方式。由于 DrvFs 文件权限问题导致出现有问题的背景色根本原因在于这里 > [DrvFs 文件权限问题](https://blessing.studio/wsl-guide/#6-6-DrvFs-%E6%96%87%E4%BB%B6%E6%9D%83%E9%99%90%E9%97%AE%E9%A2%98)。

### 如果不想对文件系统的权限进行修改

- 可以在 `.zshrc` 最尾部添加如下代码

```bash
# Change ls colours
LS_COLORS="ow=01;36;40" && export LS_COLORS

# make cd use the ls colours
zstyle ':completion:*' list-colors "${(@s.:.)LS_COLORS}"
autoload -Uz compinit
compinit
```

- 加载设置：`source ~/.zshrc`

### 如果希望从根本上解决 DrvFs 文件系统的权限问题

> 以下内容来自 [@printempw](https://github.com/printempw) 提供的这篇文章 > [DrvFs 文件权限问题](https://blessing.studio/wsl-guide/#6-6-DrvFs-%E6%96%87%E4%BB%B6%E6%9D%83%E9%99%90%E9%97%AE%E9%A2%98)。

- 在 WSL 中创建 `/etc/wsl.conf`，在其中填写如下内容：

```
[automount]
enabled = true
root = /mnt/
options = "metadata,umask=22,fmask=111"
mountFsTab = true
```

- 重启终端，所有的盘符就会使用上面的配置自动挂载（可以使用 `mount -l` 查看）

另外，如果你想要给不同的盘符设定不同的挂载参数（上面的方法对所有盘符都有效，如果你想在 WSL 中运行 Windows 下的应用程序，就得每次都 `chmod +x` 一下，所以我一般都会把 C: 排除掉），就需要手动修改 `/etc/fstab`。首先确保 `wsl.conf` 中的 `mountFsTab` 为 `true`，然后编辑 `/etc/fstab`，添加如下内容：

```
# 不在此列表中的盘符会使用 wsl.conf 中的参数挂载
# 格式可以自己去查 fstab 的帮助文档
E: /mnt/e drvfs rw,relatime,uid=1000,gid=1000,metadata,umask=22,fmask=111 0 0
```

基本的终端环境就到这里了。

💡 推荐安装 `zsh` 组件：[zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)。