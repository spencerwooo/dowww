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

### WSL 的介绍与使用

由少数派作者 @[化学心情下2](https://sspai.com/user/78/posts) 介绍的有关具体的 WSL 安装使用参考阅读：[不用装双系统，直接在 Windows 上体验 Linux：Windows Subsystem for Linux](https://sspai.com/post/43813)

### WSL 的下载与安装

直接从微软商店下载。

官方支持的 Linux 发行版有：

- Ubuntu: [最新版](https://www.microsoft.com/store/productId/9NBLGGH4MSV6)，[16.04 LTS](https://www.microsoft.com/store/productId/9PJN388HP8C9) 和 [18.04 LTS](https://www.microsoft.com/store/productId/9N9TNGVNDL3Q)
- OpenSUSE Leap: [42](https://www.microsoft.com/store/productId/9NJVJTS82TJX), [15.0](https://www.microsoft.com/store/productId/9N1TB6FPVJ8C)
- SUSE Linux Enterprise Server: [12](https://www.microsoft.com/store/productId/9P32MWBH6CNS), [15](https://www.microsoft.com/store/productId/9PMW35D7FNLX)
- [Debian GNU/Linux](https://www.microsoft.com/store/productId/9MSVKQC78PK6)
- [Kali Linux](https://www.microsoft.com/store/productId/9PKR34TNCV07)
- WLinux: [普通版](https://www.microsoft.com/store/productId/9NV1GV1PXZ6P)，[企业版](https://www.microsoft.com/store/productId/9N8LP0X93VCP)
- [Alpine WSL](https://www.microsoft.com/store/productId/9P804CRF0395)
- [WSL Arch Linux](https://www.microsoft.com/zh-cn/p/wsl-arch-linux/9p2s3qr49vnn) <Badge text="new"/>

社区支持的第三方WSL发行版：
- [ArchWSL](https://github.com/yuk7/ArchWSL)
- [AlpineWSL](https://github.com/yuk7/AlpineWSL)

具体下载安装过程见 > [微软官方支持文档](https://docs.microsoft.com/zh-cn/windows/wsl/install-win10)。

下文以 Ubuntu 18.04 发行版为例。
