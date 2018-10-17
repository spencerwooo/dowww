---
prev: /2-Toolchain/
next: 
---

# 使用 Visual Studio Code 作为主要代码编辑工具

💎 以下步骤适用于 Windows 这边安装的 Visual Studio Code。

💎 目前存在的一个问题是：VSCode 和 WSL 侧的工具链兼容性都很糟糕（除了 Node.js），都需要一定的配置才能丝滑工作。这也是一个当前微软 VSCode 各大语言插件组和 WSL 开发组都知道并在解决的问题（参考 [VSCode Python 插件 Issue #67](https://github.com/Microsoft/vscode-python/issues/67)）。

由于 WSL 是一个 Runtime 环境，而 VSCode 只和 Windows 侧的组件进行沟通，因此当前一个比较好的解决方法是：在 Windows 侧手动创建一些脚本帮助 VSCode 和 WSL 侧安装的组件沟通。