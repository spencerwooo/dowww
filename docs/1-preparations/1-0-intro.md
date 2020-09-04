# 序论 <Badge text="New"/>

![](https://cdn.spencer.felinae98.cn/github/2020/09/200902_220309.png)

::: callout 🍳 本章内容
欢迎来到 **Dev on Windows with WSL —— 可能是市面上最详尽的中文 WSL 开发环境配置指南** 的文档现场，本章我们将对 WSL 本身、WSL 近期更新和 WSL 的优越特性进行简单介绍，带领你熟悉利用 WSL 在 Windows 上面开发学习的基础知识。
:::

## 什么是 WSL

WSL 的全称叫做：Windows Subsystem for Linux，即「适用于 Linux 的 Windows 子系统」。WSL 的诞生让 Windows 用户（开发人员）按原样运行 GNU/Linux 环境 —— 包括大多数命令行工具、实用工具和应用程序 —— 且不会产生虚拟机开销。

## 用 WSL 可以做什么？

> 什么鬼？你上面那一大堆东西说的都是啥？能讲中文吗？(╬▔ 皿 ▔)╯

好的，在 Windows 上用 WSL 我们到底能干什么呢？[^1]

- 你可以在 Windows 上「安装」你喜欢的 GNU/Linux 发行版
- 你可以直接在 Windows 上运行 `grep`、`awk`、`sed` 等 Linux 原生可执行文件
- 你可以在 Windows 上直接使用 Vim、Emacs 等工具，直接使用 Linux 版本的 Javascript/Node.js、Ruby、Python、C/C++、Rust、Go 等语言进行开发，直接运行 MySQL、Apache 等 Linux 原生应用和服务等

最为重要的是，利用 WSL 我们可以直接在 **不抛弃 Windows 全部优秀工具的前提下**，**在没有因为虚拟机开销而牺牲太多性能的情况下**，直接运行使用完整的 Linux 系统。

在 [README 的前言](https://github.com/spencerwooo/dowww#%E5%89%8D%E8%A8%80)中，我提到了：

> Windows 给编程初学者带来了很大的困难。比如缺乏好用的包管理系统、终端环境难看难用、环境变量不易配置等等，这些都让 Windows 在开发体验上难以匹敌 Linux 甚至 macOS。

WSL 的超能力，就是为我们扫清了 Windows 对开发人员不友好的障碍，让我们在 Windows 上同样享受 Linux 等 Unix 风格系统的开发特色。

## WSL 与 WSL 2

::: callout 💡 背景知识
WSL 是微软 2016 年春天发布的适用于 Linux 的 Windows 子系统 1.0 版本，WSL 2 是 2019 年春天微软为了解决一系列 WSL 在 1.0 版本中出现的问题而开发的新「框架」。二者都能够满足我们在 Windows 上面进行 Linux 原生开发环境部署的需求，**但是 WSL 2 的基因更为优秀**，能够避免 WSL 在 1.0 版本中体现出的种种局限性。接下来我们简单介绍 WSL 与 WSL 2 各自的特点和优势。
:::

从技术层面来说，WSL 实质上就是让 Linux 原生的 ELF64 二进制文件能够在 Windows 上面运行。但是目前 WSL 和 WSL 2 在实现这一功能的方法上大有不同。

### WSL 诞生之初的实现手段

在 WSL 时代（也就是 WSL 1.0 版本），这一切都是通过 WSL 兼容层来实现的。WSL 在 1.0 版本中，是一系列保证 Linux ELF64 二进制文件能够在 Windows 上面运行的组件的集合[^2]，这其中包含了「用户态」和「核心态」的组件，主要由以下内容构成：

- 用户态会话进程维持服务（User mode session manager service），用于维护 Linux 实例的生命周期
- Pico 进程驱动 —— Pico provider drivers（包括 `lxss.sys`、`lxcore.sys`），**通过直接翻译「Linux 系统调用」来模拟一个 Linux 内核**
- Pico 进程本体 —— Pico processes[^3]，用于托管（Host）原生 Linux 用户态进程（比如 `/bin/bash` 等）

![](https://i.loli.net/2020/01/04/b6OrutxehGVWRKI.png)^[[Windows for Linux Nerds](https://blog.jessfraz.com/post/windows-for-linux-nerds/)]

最为重要的就是 WSL 中间兼容层：Pico provider drivers，正是这一层让 WSL 能够将 Linux 进程中请求的系统调用转换为 Windows 系统调用。

### WSL 2 中采用的新措施

WSL 的 1.0 版本确实为 Windows 带来了新鲜的血液，但是 WSL 自发布以来就伴随着用户对「应用性能」以及「I/O 速度」的抱怨，这些都是由于兼容层的缘故，使得 WSL 在 1.0 时代牺牲了很多性能。另外 WSL 在 1.0 时代也不支持 Docker 等虚拟化技术。通过强行「翻译」Linux 系统调用带来的局限性在 WSL 1.0 中体现的淋漓尽致。

WSL 2 是 WSL 发展历史中的突破性进步，上述问题在 WSL 2 中得到了根本性的解决。

![](https://cdn.spencer.felinae98.cn/github/2020/09/200902_220309-1.png)

在 WSL 2 中，微软直接将一个完整的 Linux 内核放在 WSL 的架构之中[^4]，通过 Hyper-V 的技术为 WSL 构造一个轻量级、几乎不消耗额外系统开销的虚拟环境，从而让 WSL 2 实现了：

- 在 Windows 上实现完整的 Linux 原生系统调用（Full System Call Compatibility）
- 用 WSL 执行曾经 1.0 版本无法运行的 Linux 原生程序，比如依赖虚拟化技术的 Docker 容器
- 极大的突破了 WSL 1.0 中出现的 I/O 性能瓶颈：WSL 2 中，`git clone`、`npm install`、`apt update`、`apt upgrade` 等依赖文件系统性能的操作和命令的速度都有显著提高

另外，虽然 WSL 2 使用了虚拟化技术，但是官方宣称：

> WSL 2 uses the latest and greatest in virtualization technology to run its Linux kernel inside of a lightweight utility virtual machine (VM).
>
> WSL 2 使用的是最新、最厉害的虚拟化技术，让 Linux 内核在一个非常轻量级的虚拟机中运行。

实际使用中，你几乎不会察觉到和 WSL 1.0 版本有特别大的区别，不过 WSL 2 还是有一些和 WSL 1 不一样的地方：

- 如果你在 WSL 2 中运行 Web 服务器，你会发现映射到 Windows 中的端口并不一样。不过这一不同并无大碍
- 你会发现 WSL 2 中在 Windows 侧和 Linux 侧之间相互移动文件的速度会比 WSL 的 1.0 版本慢。因此，为了尽可能保证我们 WSL 文件系统的存储速度，**我们应该将在 Linux 中使用的文件全部放在 Linux 文件系统下**[^6]
- WSL 2 目前对硬件的支持有限，因此你无法在 WSL 2 中直接访问 GPU、串口或 USB 接口[^5]
- WSL 2 对 VMware 等虚拟机软件也有一些要求，也就是：你无法在运行 WSL 2 的情况下直接运行 VMware 或旧版本的 Virtual Box。这是因为 WSL 2 中的虚拟化技术依赖于 Hyper-V，而 VMware 和 6.0 版本之前的 Virtual Box 都和 Hyper-V 不兼容[^5]

除此之外，WSL 2 就没有其他特别大的问题或局限性了。在接下来的安装中，我会继续介绍如何安装某个 Linux 发行版、如何初始化一个 Linux 发行版环境、发行版如何在 WSL 1 和 WSL 2 之间进行切换等等。同学们可以按照自己的需要，在 WSL 1 和 WSL 2 之间进行选择。**当然，我这里更推荐大家使用性能更好的 WSL 2。**

[^1]: [Windows Subsystem for Linux Documentation - Microsoft Docs](https://docs.microsoft.com/en-us/windows/wsl/about)
[^2]: [Windows Subsystem for Linux Overview - Microsoft Developer Blog](https://blogs.msdn.microsoft.com/wsl/2016/04/22/windows-subsystem-for-linux-overview)
[^3]: [Pico Process Overview - Microsoft Developer Blog](https://blogs.msdn.microsoft.com/wsl/2016/05/23/pico-process-overview/)
[^4]: [Shipping a Linux Kernel with Windows - Windows Command Line](https://devblogs.microsoft.com/commandline/shipping-a-linux-kernel-with-windows/)
[^5]: [WSL 2 Post BUILD FAQ - Windows Command Line](https://devblogs.microsoft.com/commandline/wsl-2-post-build-faq/)
[^6]: [User Experience Changes Between WSL 1 and WSL 2 - Microsoft Docs](https://docs.microsoft.com/en-us/windows/wsl/wsl2-ux-changes)
