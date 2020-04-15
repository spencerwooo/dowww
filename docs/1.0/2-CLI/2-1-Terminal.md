# 终端 Terminal

::: callout 🎮 本文内容
本文中，除了默认 WSL 终端，我们还将介绍由微软官方开发的 Windows Terminal、Windows 上面第一个 UWP 终端 Fluent Terminal、跨平台的终端 Hyper 和 Terminus 的配置。在这里面，**我更加推荐 Windows Terminal**，因为这一终端是由 WSL 项目组自己开发的原生 Windows 终端，拥有最好的性能、最美的外观和最强的定制性。
:::

## Windows Terminal <BlueBadge text="best"/>

在 Microsoft Build 2019 大会上，微软发布了新一代 Windows 终端工具：Windows Terminal。其令人惊艳的 Fluent UI 设计、亚克力半透明材质的背景和对 UTF-8、Emoji 等特殊字符的支持让大家赞叹不已。^[[Introducing Windows Terminal - Windows Command Line](https://devblogs.microsoft.com/commandline/introducing-windows-terminal/)]目前，Windows Terminal 已经可以直接从 Microsoft Store 中直接下载。

<a href='//www.microsoft.com/store/apps/9n0dx20hk701?cid=storebadge&ocid=badge'><img src='https://assets.windowsphone.com/85864462-9c82-451e-9355-a3d5f874397a/English_get-it-from-MS_InvariantCulture_Default.png' alt='English badge' style='width: 120px;'/></a>

安装成功之后，Windows Terminal 就应该直接识别出来我们本机上面安装的全部 WSL 环境、PowerShell 环境和 Command Prompt 环境。点击下拉菜单，我们就可以看到 Windows Terminal 唤起的「环境」，可以看到，我安装的 Ubuntu 和 Arch WSL 均被识别成功。

![](https://i.loli.net/2020/01/03/JwyxRAO67jF3ls8.png)

Windows Terminal 的配置文件是 `JSON` 的格式，如果你安装有 VS Code，那么你可以直接点击 Settings（或者快捷键 `Ctrl + ,`）唤起 VS Code 打开设置文件。

![](https://i.loli.net/2020/01/03/OicSBRreyPmYufx.png)

在 VS Code 中打开 Windows Terminal 配置文件进行设置的时候，是可以直接自动补全的。我们对 Windows Terminal 的字体、配色、快捷键和 Profile 等一系列设置项目均在这一 `JSON` 文件中配置。其中：

- 如果希望始终保持 Windows Terminal 的主题颜色为暗色方案，而不跟随 Windows 系统亮暗主题：可以在 `globals` 项目下的 `requestedTheme` 属性中这样配置：

```json {4}
{
  "globals":
  {
    "requestedTheme": "dark",
  }
}
```

- 如果希望将 Ubuntu WSL 设置为 Windows Terminal 打开唤起的默认环境：可以复制 Ubuntu WSL Profile 中的 `guid`，将之粘贴至 `globals` 项目下的 `defaultProfile` 属性，类似这样：

```json {4,10}
{
  "globals":
  {
    "defaultProfile": "{d317d852-8b6a-4936-b241-58c11be8aeb2}",
    // …
  },
  "profiles": 
  [
    {
      "guid": "{d317d852-8b6a-4936-b241-58c11be8aeb2}",
      "name": "Ubuntu",
      "source": "Windows.Terminal.Wsl"
    }
    // …
  ]
}
```
- 如果希望将 Dracula 的配色方案添加进入 Windows Terminal：可以到 [iTerm2-Color-Scheme - Windows Terminal](https://github.com/mbadolato/iTerm2-Color-Schemes/tree/master/windowsterminal) 仓库下找到自己想要使用的配色方案，将 `JSON` 格式的配色复制进入 Windows Terminal 配置文件即可。比如我希望添加 Dracula 配色方案，只需要访问 [Dracula.json](https://github.com/mbadolato/iTerm2-Color-Schemes/blob/master/windowsterminal/Dracula.json)，将代码部分复制，并粘贴到 Windows Terminal `JSON` 配置文件中：

```json {6}
{
  // …
  "schemes" : 
  [
    {
      "name" : "Dracula",
      "background" : "#282A36",
      "foreground" : "#F8F8F2",
      "black" : "#21222C",
      // …
    }
  ]
}
```


- 如果希望更改 Arch WSL Profile 的字体和配色方案为 FuraCode NF 和 Dracula（FuraCode NF 是 Fira Code 的 Nerd Font 变种），并为之开启 Fluent Design 的亚克力透明背景效果：在 `commandline` 项为 `wsl.exe -d Arch` 的 Profile 中修改
  - 将 `fontFace` 设置为 `FuraCode NF`
  - 将 `colorScheme` 设置为 `Dracula`
  - 将 `useAcrylic` 设置为 `true`
  - 将 `acrylicOpacity` 设置为 `0.95`

```json {5-6,8-9,11-12}
{
  "profiles":
  [
    {
      "acrylicOpacity" : 0.95,
      "useAcrylic" : true,
      "closeOnExit" : true,
      "colorScheme" : "Dracula",
      "commandline" : "wsl.exe -d Arch",
      // …
      "fontFace" : "FuraCode NF",
      "fontSize" : 12,
      // …
    }
    // …
  ]
}
```

配置项目相对较多，这里不一一列举，如果有更多配置需求的同学请参考我的 Dotfile^[[spencerwooo/dotfiles - wt_profiles.json](https://github.com/spencerwooo/dotfiles/blob/master/Windows/wt_profiles.json)]。

## WSL 默认终端

我们下载好 Ubuntu 的之后，点击开始菜单 Ubuntu 的 Logo，就可以打开 WSL 默认的终端。

### 字体

由于中文的大环境，默认的 Windows 终端字体是新宋体。相信你和我一样，对这个模糊不清的字体深恶痛绝。但是由于 Windows 默认终端是一个极为底层的应用，没有使用通用 UI 渲染层，因此它对字体有着严格的要求，支持这一要求的字体（在中文环境下）只有 [Sarasa Gothic](https://github.com/be5invis/Sarasa-Gothic)。下载安装这个字体之后，你就可以在 Windows 默认终端的设置项目下设置这个字体了。特别的，`Sarasa Mono T SC`（或者中文叫等距更纱黑体）是我们编码所需的等宽字体。

![](https://i.loli.net/2020/01/03/kKqJ6LB1vdC8igx.png)

### 配色

微软为我们提供了一个方便更改默认终端配色的工具：[ColorTool](https://github.com/microsoft/terminal/tree/master/src/tools/ColorTool)，我们可以通过这个工具方便的对我们默认终端的配色进行更改，**这不仅包括 WSL 默认终端的配色更改，还包括 PowerShell 终端的配色更改**。另外，这个工具也支持读取 iTerm 主题文件。

- 首先，我们在 [ColorTool 在 GitHub 的 Release 页面](https://github.com/microsoft/terminal/releases/tag/1904.29002) 下载 ColorTool 至本地，并解压
- 然后，打开 Windows 默认终端，定位至刚刚解压好有 `ColorTool.exe` 的下载文件夹
- 首先我们通过这个命令来看看默认有哪些自带的主题供我们使用：

```powershell
ColorTool.exe -s
```

::: callout 🤗 没关系
是的，不需要怀疑自己，你可以直接在 WSL 里面执行 `exe` 程序，只是需要输全程序名称包括 `exe` 程序后缀。
:::

![](https://i.loli.net/2020/01/03/wkxhMoglQs12mqN.png)


- 之后，我们就可以通过 `ColorTool.exe <主题名称>` 命令来预览我们当前使用的终端主题，比如：

```powershell
ColorTool.exe solarized_dark.itermcolors
```

- 使用下面的命令应用主题：

```powershell
ColorTool.exe -d <主题名称>
```

![](https://i.loli.net/2020/01/03/eKE1WhpvlVqrJQU.png)

**推荐阅读：**[告别 Windows 终端的难看难用，从改造 PowerShell 的外观开始](https://sspai.com/post/52868)

ColorTool 自带了一些常见的主题供我们直接使用，你也可以从这里下载更多的 iTerm 主题配置文件 — [iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)  — 来使用。

## Fluent Terminal

Fluent Terminal 是目前相对稳定的非 Electron 构建的终端。得益于 UWP 技术，Fluent Terminal 能够同样拥有美丽的亚克力半透明背景，同时也支持 iTerm2 色彩主题。

![](https://i.loli.net/2019/05/12/5cd7c2f1daee9.png)

Fluent Terminal 开源在 [felixse/FluentTerminal](https://github.com/felixse/FluentTerminal)，由于种种原因，Fluent Terminal 并没有上架 Microsoft Store。这里推荐大家使用 Windows 上可能是最好的「包管理工具」— [Scoop](https://scoop.sh/) — 进行安装。

**推荐阅读：**[「一行代码」搞定软件安装卸载，用 Scoop 管理你的 Windows 软件](https://sspai.com/post/52496)

安装 Scoop 之后，我们在 PowerShell 中执行下面的命令，即可安装 Fluent Terminal：

```powershell
scoop bucket add nonportable
scoop install fluent-terminal-np
```

拥有图形化设置界面的 Fluent Terminal 配置非常直观简单，这里就不再赘述。

## Terminus

Terminus 是基于 Electron 的 Terminal。相比下文推荐的 Hyper 终端，同样是 Electron 技术搭建的情况下，Terminus 优化的相对更好，启动快速，设置界面也是 GUI 形式而非直接修改配置文件，更用户友好。

![](https://i.loli.net/2018/12/13/5c11e99587274.png)

你可以在这里下载 Terminus 终端：

- [Terminus 官网](https://eugeny.github.io/terminus/)
- [Terminus 项目主页](https://github.com/Eugeny/terminus)
- [Terminus Release 下载页面](https://github.com/Eugeny/terminus/releases/latest)

安装 Terminus 之后，在设置中将默认 Shell 设置为「WSL / Default distro」即可默认每次打开 WSL 环境，如下：

![](https://i.loli.net/2018/12/13/5c11e8a6eee87.png)

Terminus 的设置是 GUI 界面的，配置简单友好，这里就不做过多描述了，如果要达到截图中的效果：

| 设置项 | 参数 / 属性 |
|:-:|:-:|
| 字体 | [Iosevka Nerd Font](https://github.com/ryanoasis/nerd-fonts/tree/master/patched-fonts/Iosevka) |
| 配色 | [ayu](https://github.com/mbadolato/iTerm2-Color-Schemes/blob/master/schemes/ayu.itermcolors) |
| Terminus 主题 | Standard |
| Terminus Acrylic background | ✔ |
| Terminus Background Type | Fluent |

## Hyper

Hyper 是基于 Electron 的 Terminal，也可能是目前 Windows 上面可定制化程度最高的终端。

**推荐阅读：**[HOW TO | 让自己的终端漂亮得不像实力派](https://sspai.com/post/45332)

![](https://i.loli.net/2018/10/01/5bb1aa3bc42fa.png)

下载 Hyper 终端：

- [Hyper 终端官网](https://hyper.is/)
- [Hyper 终端下载地址](https://hyper.is/#installation)

安装一些主题、插件：

- [Awesome Hyper](https://github.com/bnb/awesome-hyper) - 有趣的与 Hyper 相关的内容、项目，可以找到合适的主题配置、字体、插件和 Hyper 的使用指南。

配置 Hyper 终端默认打开 WSL 环境：

- 打开 Hyper，快捷键 `Ctrl + ,` 开启配置文件；
- 将配置文件的这几项进行这样的配置：

``` js
config: {
    shell: 'C:\\Windows\\System32\\wsl.exe',
    shellArgs: [],
    env: {}
}
```

- 重启 Hyper 即可

禁用令人闹心的终端提示音：

- 在 Hyper 中打开位于 Linux 文件系统根目录的 `.bashrc` 并添加以下代码:

```bash
# Disable the bell sound on backspace
set bell-style none
```

- 加载设置：`source ~/.bashrc`

其他有关 Hyper 终端的配置，请参考我的 [Dotfiles](https://github.com/spencerwooo/dotfiles)。
