---
prev: /2-Toolchain/
next: 
---

<div align="center"><img src="https://i.loli.net/2018/10/17/5bc6e33f82174.png" alt="Visual Studio Code" width="40%"/></div>

# Visual Studio Code

:::tip 💎
以下步骤适用于 Windows 这边安装的 Visual Studio Code。
 
推荐使用 VSCode 的理由 > [💡 在 Windows 上用 WSL 开发的操作体验指北 | 为什么我这样推荐 Visual Studio Code？](https://sspai.com/post/47719)
:::

## 下载

::: warning
请注意，在 Windows 侧安装过程中务必：

1. 安装至 C 盘（否则会有路径与访问权限的问题）
2. 在「选择其他任务」界面勾选「其他」下的全部四个选项（为了后面在 WSL 中直接调用 `code` 命令来打开 Visual Studio Code 打下基础。）
:::

::: danger
在 Windows 文件夹与文件中出现的名字不能有特殊符号，包括 Emoji，否则会出现无法识别 WSL 中的 Git 路径和无法打开终端直接进入相应文件夹的问题。
:::

下载安装 Visual Studio Code 在这里 > [Visual Studio Code | Code editing.
Redefined.](https://code.visualstudio.com/)

## 问题

目前存在的一个问题是：VSCode 和 WSL 侧的工具链兼容性都很糟糕（除了 Node.js），都需要一定的配置才能丝滑工作。这也是一个当前微软 VSCode 各大语言插件组和 WSL 开发组都知道并在解决的问题（参考 [VSCode Python 插件 Issue #67](https://github.com/Microsoft/vscode-python/issues/67)）。

由于 WSL 是一个 Runtime 环境，而 VSCode 只和 Windows 侧的组件进行沟通，因此当前一个比较好的解决方法是：在 Windows 侧手动创建一些脚本帮助 VSCode 和 WSL 侧安装的组件沟通。[详见 Python 配置板块。](/3-VSCode/3-3-Python.html)

## 参考配置

![](https://i.loli.net/2019/01/01/5c2aecf7acc1d.png)

为了方便参考，我使用的 Visual Studio Code 具体配置如下：

- 字体：

  - 附带有 Cursive 的字体叫做 Operator Mono，它是一个 $200 的付费字体，需要单独购买。
  - 推荐免费开源的字体 - 下载地址：[Sarasa Gothic / 更纱黑体 / 更紗黑體 / 更紗ゴシック](https://github.com/be5invis/Sarasa-Gothic)

```json
{
    "editor.fontFamily": "'Operator Mono', 'Iosevka', 'Sarasa Mono T SC', monospace"
}
```

- 主题配色：

  - [Cobalt2 Theme for VS Code](https://github.com/wesbos/cobalt2-vscode)

```json
{
    "workbench.colorTheme": "Cobalt2"
}
```

- 图标方案：

```json
{
    "workbench.iconTheme": "material-icon-theme"
}
```