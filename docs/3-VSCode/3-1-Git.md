# Git

> Use Git installed in Bash on Windows/Windows Subsystem for Linux (WSL) from Windows and Visual Studio Code (VSCode)

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