---
prev: false
next: /2-Toolchain/
---

![Run Linux on Windows 10](https://i.loli.net/2018/10/01/5bb1d3f780d16.jpg)

# 准备工作

## Windows 10 💡

1. 需要保证 Windows 10 至少为 Windows 10 Fall Creators Update 及之后的版本。
2. 安装之前必须保证为 Windows 10 开启了「Windows Subsystem for Linux」的可选功能。
3. Windows 用户名不能有空格。（有空格会对 WSL 环境造成影响。）
4. **Windows 用户名不能为中文。（两个系统下的编码格式不一样，会对 VSCode 的调试功能造成影响。）**

::: danger 注意
在任何情况下都不要在 Windows 侧对 Linux 文件进行修改，否则会出现严重问题，甚至会对 Linux 子系统造成不可逆转的破坏与影响。
:::

## WSL - Windows Subsystem for Linux

直接从微软商店下载。

官方支持的 Linux 发行版有：

- Ubuntu
- Debian
- OpenSUSE / SUSE Enterprise Linux
- Kali Linux

具体下载安装过程见 > [微软官方支持文档](https://docs.microsoft.com/zh-cn/windows/wsl/install-win10)。

下文以 Ubuntu 18.04 发行版为例。