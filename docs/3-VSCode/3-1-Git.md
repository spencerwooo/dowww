# Git within WSL

> Use Git installed in Bash on Windows/Windows Subsystem for Linux (WSL) from Windows and Visual Studio Code (VSCode)

:::tip
这里的配置是为了让 VSCode 使用 WSL 内的 `git` 进行版本控制。

有关 `git` 在 WSL 中的下载安装与配置，见 > [开发工具 | git、ssh](/2-Toolchain/2-2-DevTools.html#git)
:::

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