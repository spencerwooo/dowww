# 终端 Terminal

Terminal，即「终端模拟器」。我们需要一个终端去和我们的 `shell` 进行交互。你可能看到了，在下载好 Ubuntu 的时候，在开始菜单有一个 Ubuntu 的 Logo，这就是 Windows 为 WSL 准备的默认终端模拟器的入口。从 2018 年 8 月，Windows 正式引入了 ConPTY 这个工具，即：Windows Pseudo Console。详细请见 Windows 官方博客 > [Windows Command-Line: Introducing the Windows Pseudo Console (ConPTY)](https://blogs.msdn.microsoft.com/commandline/2018/08/02/windows-command-line-introducing-the-windows-pseudo-console-conpty/)。

ConPTY 的引入意味着 Windows 命令行环境有了更多的现代终端应具备的功能，比如：

- 支持 256 颜色
- 输出 UTF-8 格式的文本

等等。这是个好兆头，至少 Windows 开始对 CLI 环境的使用体验开始重视了。我们先来讲讲如何把 WSL 默认的终端变美。

## 默认的 WSL 终端模拟器

:::tip
感谢 [Issue #16](https://github.com/spencerwooo/dowww/issues/16) 中，[@12101111](https://github.com/12101111) 提醒我介绍默认终端的配置。

虽然 [下面的下面](/2-Toolchain/2-1-TerminalEnv.html#terminus)，我提到了两个基于 Electron、更加方便自定义、从某种程度上也更好看的终端模拟器，但是 **它们都没有原生的 Windows 默认终端性能快**。因此，如果你追求性能高过美丽，也可以通过下面的方法稍微让 Windows 默认终端好看一些。

下文中，**「Windows 默认的终端模拟器」指 PowerShell 开启的终端或点击开始菜单中的 Ubuntu 图标开启的终端**。其中，如果你用 PowerShell 开启终端，可以直接用 `wsl` 命令进入 WSL 环境。
:::

### 字体

由于中文的大环境，默认的 Windows 终端字体是新宋体。相信你和我一样，对这个模糊不清的字体深恶痛绝。但是由于 Windows 默认终端是一个极为底层的应用，没有使用通用 UI 渲染层，因此它对字体有着严格的要求，支持这一要求的字体（在中文环境下）只有 [Sarasa Gothic](https://github.com/be5invis/Sarasa-Gothic)。下载安装这个字体之后，你就可以在 Windows 默认终端的设置项目下设置这个字体了。特别的，`Sarasa Mono T SC`（或者中文叫等距更纱黑体）是我们编码所需的等宽字体。

![](https://i.loli.net/2019/05/26/5cea07d5e7c9387041.png)

### 配色

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

![](https://i.loli.net/2019/05/26/5cea085a8972c33685.png)


- 之后，我们就可以通过 `ColorTool.exe <主题名称>` 命令来预览我们当前使用的终端主题，比如：

```powershell
ColorTool.exe solarized_dark.itermcolors
```

![](https://i.loli.net/2019/05/26/5cea092e0236268278.png)

- 使用下面的命令应用主题：

```powershell
ColorTool.exe -d <主题名称>
```

**推荐阅读：**[告别 Windows 终端的难看难用，从改造 PowerShell 的外观开始](https://sspai.com/post/52868)

ColorTool 自带了两个常见的主题供我们直接使用，你也可以从这里下载更多的 iTerm 主题配置文件：[iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes) 来使用。

当然，你并不一定要使用 Windows 给 WSL 准备的默认终端模拟器。下面推荐几个更好看的，一些是基于 Electron 技术的 Terminal。得益于优秀现代的前端技术，他们都很「美丽」，任选一个就可以。

## Windows Terminal <Badge text="new"/>

在前几天 Microsoft Build 2019 大会上，微软发布了新一代 Windows 终端工具：Windows Terminal。其令人惊艳的 Fluent UI 设计、亚克力半透明材质的背景和对 UTF-8、Emoji 等特殊字符的支持让大家赞叹不已。详见：[Introducing Windows Terminal](https://devblogs.microsoft.com/commandline/introducing-windows-terminal/)

![](https://i.loli.net/2019/05/12/5cd7c30fd3dd3.png)

Windows Terminal 将于今年（2019 年）中发布第一个测试版本，其开源地址位于：[microsoft/Terminal](https://github.com/microsoft/Terminal)，**请大家期待一下。**

## Fluent Terminal <Badge text="new"/>

在 Windows Terminal 发布之前，我们先可以用 Fluent Terminal 来缓解一下 Windows 下终端的使用体验。Fluent Terminal 是目前相对稳定的非 Electron 构建的终端。得益于 UWP 技术，Fluent Terminal 能够同样拥有美丽的亚克力半透明背景，同时也支持 iTerm2 色彩主题。

![](https://i.loli.net/2019/05/12/5cd7c2f1daee9.png)

Fluent Terminal 开源在 [felixse/FluentTerminal](https://github.com/felixse/FluentTerminal)，详细的安装过程请直接参考其官方 Wiki。

## Terminus

Terminus 是基于 Electron 的 Terminal，是本次我更加推荐的终端。因为相比下文推荐的 Hyper 终端，同样是 Electron 技术搭建的情况下，Terminus 优化的相对更好，启动快速，设置界面也是 GUI 形式而非直接修改配置文件。体验更加爽快。👍

![](https://i.loli.net/2018/12/13/5c11e99587274.png)

### 下载 Terminus

下载 Terminus 终端：

- [Terminus 官网](https://eugeny.github.io/terminus/)
- [Terminus 项目主页](https://github.com/Eugeny/terminus)
- [Terminus Release 下载页面](https://github.com/Eugeny/terminus/releases/latest)

### 配置 Terminus

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

## Hyper 终端

Hyper 是基于 Electron 的 Terminal，也可能是目前 Windows 上面可定制化程度最高的终端模拟器了。当然，Hyper 也支持 macOS 和 Linux。有关 macOS 终端美化的具体方法可以参考这篇文章 > [HOW TO | 让自己的终端漂亮得不像实力派](https://spencerwoo.com/2018/06/16/Terminal/)

![](https://i.loli.net/2018/10/01/5bb1aa3bc42fa.png)

### 下载 Hyper

下载 Hyper 终端：

- [Hyper 终端官网](https://hyper.is/)
- [Hyper 终端下载地址](https://hyper.is/#installation)

安装一些主题：

- [Awesome Hyper](https://github.com/bnb/awesome-hyper) - 有趣的与 Hyper 相关的内容、项目，可以找到合适的主题配置、字体、插件和 Hyper 的使用指南。

### 配置 Hyper 终端

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

- 重启 Hyper 即可。

:::tip
参考配置文件：[.hyper.js](https://github.com/spencerwooo/dotfiles/blob/master/_hyper.js)
:::

禁用令人闹心的终端提示音：

- 在 Hyper 中打开位于 Linux 文件系统根目录的 `.bashrc` 并添加以下代码:

```bash
# Disable the bell sound on backspace
set bell-style none
```

- 加载设置：`source ~/.bashrc`
