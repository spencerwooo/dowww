# Git <a href="https://github.com/spencerwooo"><Badge text="@SpencerWoo" vertical="middle"/></a>

> Use Git installed in Bash on Windows/Windows Subsystem for Linux (WSL) from Windows and Visual Studio Code (VSCode)

## 使用 Remote-WSL 环境下的 Git

![](https://i.loli.net/2019/06/06/5cf8b4da946f923275.png)

Remote-WSL 环境下开启的 Git 版本控制默认使用的就是 WSL 下安装的 Git。无需过多的配置即可直接使用。

:::warning
下面这些配置内容在 2019 年 6 月，VS Code 官方团队实现了 Remote-WSL 插件之后基本不需要了。更多内容请参考：[Remote-WSL 环境下 VS Code 的配置与特性](https://dowww.spencerwoo.com/3-VSCode/#remote-wsl-%E6%8F%92%E4%BB%B6)
:::

<details>

:::tip
这里的配置是为了让 VSCode 使用 WSL 内的 `git` 进行版本控制。

有关 `git` 在 WSL 中的下载安装与配置，见 > [开发工具 | git、ssh](/2-Toolchain/2-2-DevTools.html#git)
:::

## `Git` on WSL for VSCode

[wslgit](https://github.com/andy-5/wslgit) 提供了一个小巧的转换工具，让 Linux 侧的 `git` 能够直接被 Visual Studio Code 版本控制工具识别到。

- 下载：[`wslgit` release.](https://github.com/andy-5/wslgit/releases)

- 使用：
    - 将 `wslgit.exe` 文件放到一个合适的地方，并复制路径；
    - 在 VSCode 设置中添加：

```json
{
    "git.path": "C:\\$更换为 wslgit.exe 的路径$\\wslgit.exe"
}
```

:::danger
在涉及到 `wslgit.exe` 的文件夹路径中尽量不要出现 **中文和空格**。同样，在你的项目文件夹的路径中也最好不要出现。**中文字符和空格** 在一些情况下都无法正常的被 `wslgit.exe` 转换、识别，从而导致 VS Code 的版本控制出现问题。
:::

## 提升 `Git` on WSL 的性能

很多情况下，如果你发现在使用 `Git` on WSL 的时候，`Git` 实在太过缓慢（包括 VSCode 集成版本控制的模块那部分），大多是因为：

- 你使用的发行版太过冗杂（对，说的就是 Ubuntu）
- 你给 Shell 配置了太多的「版本控制显示模块」加载项（比如你使用了 `zsh`、`oh-my-zsh` 和 `powerlevel9k` 模块）

我们可以通过配置 Windows 环境变量，来让 `wslgit` 唤起 `Git` 的时候：

> Execute git via a non-interactive bash session.

从而尽可能减少 `Git` 加载用户配置文件的时间，提升 `Git` 效率。

**你所需要做的唯一事情就是：在 Windows 下配置环境变量 `WSLGIT_USE_INTERACTIVE_SHELL` 为 0 或 false。**

![](https://i.loli.net/2018/12/26/5c231334cb26d.png)

这样我们就可以让 `wslgit` 以「非交互模式」加载 `bash`：*force wslgit to start bash in non-interactive mode.*

## 进一步提升 WSL 全局系统性能

如果你对上面的改进还是不太满足，那么你可以试一试 [Arch WSL](https://github.com/yuk7/ArchWSL)。

Arch Linux 是一个高度可定制的 Linux 发行版，轻量、精简。但是由于微软商店并没有明确支持 Arch Linux 发行版的 WSL 版本，因此安装过程比较复杂。**你可以选择以下三种方法中的任意一个进行安装：**

- 手动安装：
  - [Arch Linux Wiki | Install on WSL](https://wiki.archlinux.org/index.php/Install_on_WSL_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87))
- 参考 [`ArchWSL` - 一个 Arch Linux WSL 社区维护的版本教程](https://github.com/yuk7/ArchWSL#install) 进行安装
- 使用 [`scoop` - Windows 上的包管理工具](https://github.com/lukesampson/scoop) 进行安装（在 PowerShell 中执行以下命令）：
  - 安装 `scoop`：`iex (new-object net.webclient).downloadstring('https://get.scoop.sh')`
  - 添加 `scoop-extras`：`scoop bucket add extras`
  - 安装 `ArchWSL`：`scoop install archwsl`

由于 Arch Linux for WSL 不是官方维护的版本，因此可能会遇到一些莫名的问题，安装与否还请自行斟酌。不过使用之后我觉得性能还是有着不小的提升。

</details>