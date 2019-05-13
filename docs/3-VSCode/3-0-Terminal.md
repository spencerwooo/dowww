# 集成终端使用 WSL <a href="https://github.com/spencerwooo"><Badge text="@SpencerWoo" vertical="middle"/></a>

> 配置 VSCode 终端默认使用 WSL 的 bash

为了不浪费资源、方便开发，我们从这一步开始试图将 WSL(Linux) 侧的工具链全部整合到 Windows 侧的 Visual Studio Code。

## 配置

> 感谢 [@printempw](https://github.com/printempw) 对唤起 WSL 的 Shell 环境方式进行反馈建议，参考 [Issue #6](https://github.com/spencerwooo/dowww/issues/6)。

在 Visual Studio Code 设置中新增如下内容：

```json
{
    "terminal.integrated.shell.windows": "C:\\Windows\\System32\\wsl.exe"
}
```
重启 VSCode 终端，唤起的终端环境就是 WSL 的 shell 环境了。

更多详细内容请看下方说明。👇

## 说明

如果下载的 WSL 是经由微软商店下载的最新版本：

- 如果要调用 32 位进程，需要配置使用 Sysnative：`C:\\Windows\\sysnative\\bash.exe`
- 如果 VSCode 是 64 位版本，可以直接使用：`C:\\WINDOWS\\System32\\bash.exe` 或者 `C:\\WINDOWS\\System32\\wsl.exe`

> - 参考 VSCode 内置终端配置文档 > [VSCode Integrated Terminal Configuration](https://code.visualstudio.com/docs/editor/integrated-terminal#_configuration)
> 
> - 参考默认使用 WSL bash 作为 VSCode 集成终端 > [Use Windows Subsystem for Linux as integrated terminal](https://github.com/Microsoft/vscode/issues/22317)