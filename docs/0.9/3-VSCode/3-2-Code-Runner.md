# Code Runner <a href="https://github.com/spencerwooo"><Badge text="@SpencerWoo" vertical="middle"/></a>

:::tip
Code Runner 是一个能够一键执行编译运行的 VSCode 插件，支持多达 44 种语言。

支持在代码工作区右键选择 `Run Code`、在 Command Palette (`Ctrl + Shift + P`) 输入 Run Code、或者直接快捷键 `Ctrl + Alt + N` 快速编译执行代码。无论哪种语言的开发环境，我都推荐安装。
:::

## 下载安装

下载安装 Code Runner 插件：[Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner).

并在 Visual Studio Code 设置中将 Code Runner 设置为在终端中运行：

```json
{
    "code-runner.runInTerminal": true
}
```

:::warning
下面这些配置内容在 2019 年 6 月，VS Code 官方团队实现了 Remote-WSL 插件之后基本不需要了。更多内容请参考：[Remote-WSL 环境下 VS Code 的配置与特性](https://dowww.spencerwoo.com/3-VSCode/#remote-wsl-%E6%8F%92%E4%BB%B6)
:::

<details>

配置路径为 WSL 路径（感谢 [江枫同学 @jiangbianyiye](https://github.com/jiangbianyiye) 的补充，见 [Issue #1](https://github.com/spencerwooo/Dev-on-Windows-with-WSL/issues/1)）：

```json
{
    "code-runner.terminalRoot": "/mnt/"
}
```

## 具体语言的适配 <Badge text="deprecated" type="error" vertical="middle"/>

- [Python](/3-VSCode/3-3-Python.html#code-runner)
- [C/C++](/3-VSCode/3-4-C_Cpp.html#一键编译运行)

</details>