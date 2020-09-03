# 安装

::: callout 🍫 本文内容
在安装 WSL 之前，有一些对 Windows 的配置工作必不可少，也有一些常识性的问题需要知道。本章主要介绍 Windows 方面的准备工作、WSL 的安装方法以及注意事项。
:::

## Windows 10

### 确认 Windows 版本

只有 Windows 10 才能安装使用 WSL。Windows 7、8 或之前的任何版本都无法使用，请及时将系统版本更新至最新。

只有 Windows 10 版本 16215 或以后的版本才能够正常运行 WSL。你可以在「Windows 设置 > 系统 > 关于」处找到你的 Windows 10 操作系统版本。

**只有 Windows 10 版本 18362 或 18363 以及以后的版本，或小版本号为 1049 的版本，才能够正常运行 WSL 2**。需要明确，WSL 2 目前只能在 Windows 10 版本 1903、1909 和 2004 中使用（其中 1903 和 1909 仅支持 **x64 系统**），因此你需要将自己的 Windows 系统进行升级至合适的版本，才能使用正确的 Windows 10 版本安装 WSL 2。

> 见 WSL 2 向前兼容 Windows 10 版本 1903、1909 的博客文章：[WSL 2 Support is coming to Windows 10 Versions 1903 and 1909](https://devblogs.microsoft.com/commandline/wsl-2-support-is-coming-to-windows-10-versions-1903-and-1909/).

### 开启「适用于 Linux 的 Windows 子系统」的附加功能

无论使用 WSL 1 还是 WSL 2，我们都需要开启「适用于 Linux 的 Windows 子系统」的附加功能：

- 以管理员身份打开 PowerShell 终端
- 运行下面的命令：

```powershell
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
```

- 按照提示重启电脑

## WSL

::: callout 🍰 Linux 发行版
市面上基于 WSL 有很多 Linux 发行版，有广受大家欢迎的 Ubuntu、备受黑客喜爱的 Kali Linux、以及极客们都说好的 Arch Linux。大家可以根据自己的选择进行安装。如果没有特殊的需求，那么直接[安装 Ubuntu 最新版](https://www.microsoft.com/store/productId/9NBLGGH4MSV6)准没错。如果你像我一样，喜欢滚动更新的 Arch Linux 发行版，那么[安装 Arch WSL](https://github.com/yuk7/ArchWSL) 即可。
:::

### 官方版本 WSL

微软官方支持的 WSL Linux 发行版可以直接从微软商店下载。

官方支持的 Linux 发行版有：

- Ubuntu: [最新版](https://www.microsoft.com/store/productId/9NBLGGH4MSV6)，[16.04 LTS](https://www.microsoft.com/store/productId/9PJN388HP8C9) 和 [18.04 LTS](https://www.microsoft.com/store/productId/9N9TNGVNDL3Q)
- OpenSUSE Leap: [42](https://www.microsoft.com/store/productId/9NJVJTS82TJX), [15.0](https://www.microsoft.com/store/productId/9N1TB6FPVJ8C)
- SUSE Linux Enterprise Server: [12](https://www.microsoft.com/store/productId/9P32MWBH6CNS), [15](https://www.microsoft.com/store/productId/9PMW35D7FNLX)
- [Debian GNU/Linux](https://www.microsoft.com/store/productId/9MSVKQC78PK6)
- [Kali Linux](https://www.microsoft.com/store/productId/9PKR34TNCV07)
- [Pengwin](https://www.microsoft.com/store/productId/9NV1GV1PXZ6P) - [GitHub | WhitewaterFoundry/Pengwin](https://github.com/WhitewaterFoundry/Pengwin)<Badge text="付费"/>
- [Alpine WSL](https://www.microsoft.com/store/productId/9P804CRF0395) - [GitHub | agowa338/WSL-DistroLauncher-Alpine](https://github.com/agowa338/WSL-DistroLauncher-Alpine)
- [Fedora Remix for WSL](https://www.microsoft.com/en-us/p/fedora-remix-for-wsl/9n6gdm4k2hnc) - [GitHub | WhitewaterFoundry/Fedora-Remix-for-WSL](https://github.com/WhitewaterFoundry/Fedora-Remix-for-WSL) <Badge text="付费"/>

### 社区支持的 WSL

另外也有社区支持的 WSL Linux 发行版，社区支持的第三方 WSL 发行版：

- [Arch Linux](https://github.com/yuk7/ArchWSL)
- [Alpine Linux](https://github.com/yuk7/AlpineWSL)

第三方支持的发行版需要按照其官方使用说明进行安装。有需要的同学请自行查看。

## WSL 的安装

![](https://cdn.spencer.felinae98.cn/github/2020/09/200902_220319.png)

在 [开启「适用于 Linux 的 Windows 子系统」的附加功能](#开启「适用于-linux-的-windows-子系统」的附加功能) 之后，我们以 Ubuntu 最新版为例，在微软商店中点击安装即可。

<a href='//www.microsoft.com/store/apps/9nblggh4msv6?cid=storebadge&ocid=badge'><img src='https://assets.windowsphone.com/85864462-9c82-451e-9355-a3d5f874397a/English_get-it-from-MS_InvariantCulture_Default.png' alt='English badge' style='width: 160px;'/></a>

下载成功后，我们需要对刚刚这一发行版进行初始化。在开始菜单中，没有意外的话，你应该看到刚刚下载完成的 Ubuntu 快捷方式，我们点击打开 Ubuntu，等待初始化完成即可。（初始化过程会将下载好的 Linux 发行版的文件解压缩，并存储在电脑上供你使用，往往会需要 1 分钟甚至更多。）

![](https://cdn.spencer.felinae98.cn/github/2020/09/200902_220319-1.png)

初始化完成之后，Linux 会提示你输入一个 UNIX 用户名并为之设置一个 UNIX 密码。这一用户名和密码与你的 Windows 登录账号密码完全无关，你可以任意设置。完成之后，你的 Ubuntu 发行版就安装成功了。

## WSL 2 的安装

::: callout 🧊 注意
WSL 2 需要在 WSL 已经安装完毕的基础之上才能进行安装。
:::

### 开启支持 WSL 2 的可选组件

如果你希望安装 WSL 2，你需要确保你已安装「适用于 Linux 的 Windows 子系统」和「虚拟机平台」这两个可选组件。[^1]同样：

- 以管理员身份打开 PowerShell 终端
- 运行下面的命令：

```powershell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

- 根据提示重启电脑

### 使用命令行设置需要由 WSL 2 支持的发行版

同样，用管理员身份打开 PowerShell 终端：

- 执行下面命令找到你当前安装的 Linux 发行版及其名字：

```powershell
wsl --list
```

- 之后，执行下面的命令将你需要的发行版设置为由 WSL 2 支持，将其中的 `<Distro>` 修改为 Linux 发行版名称：

```powershell
wsl --set-version <Distro> 2
```

- 另外，你也可以通过下面的命令将之后新安装的发行版均设置为默认由 WSL 2 支持：

```powershell
wsl --set-default-version 2
```

- 执行下面的命令，如果发现最后一列的 `VERSION` 数为 2，说明你的配置是成功的：

```powershell
wsl --list --verbose
```

![](https://cdn.spencer.felinae98.cn/github/2020/09/200902_220319-2.png)

到这里，你应该已经成功安装完成了 WSL 的某个发行版，并成功设置了 UNIX 用户名和密码，登入 WSL 系统。接下来，我将以 Ubuntu 为例子，从终端工具、Visual Studio Code 开发环境以及更高阶的操作功能这三个角度，具体介绍如何对 WSL 进行配置，使之更加「开发环境友好」。

## 遇到问题？

如果你在安装过程中遇到了一些问题，请查阅微软官方提供的 WSL 疑难排查文档：[排查适用于 Linux 的 Windows 子系统问题 - Microsoft Docs](https://docs.microsoft.com/zh-cn/windows/wsl/troubleshooting)

[^1]: [Installation Instructions for WSL 2 - Microsoft Docs](https://docs.microsoft.com/en-us/windows/wsl/wsl2-install)
