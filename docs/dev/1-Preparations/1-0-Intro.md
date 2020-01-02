# 序论 <BlueBadge text="New" vertical="top"/>

![Run Linux on Windows 10](https://i.loli.net/2018/10/01/5bb1d3f780d16.jpg)

:::callout 🍳 本章内容
欢迎来到 **Dev on Windows with WSL —— 可能是市面上最详尽的中文 WSL 开发环境配置指南** 的文档现场，本章我们将对 WSL 本身、WSL 近期更新和 WSL 的优越特性进行简单介绍，带领你熟悉利用 WSL 在 Windows 上面开发学习的基础知识。
:::

## 什么是 WSL

WSL 的全称叫做：Windows Subsystem for Linux，即「适用于 Linux 的 Windows 子系统」。WSL 的诞生让 Windows 用户（开发人员）按原样运行 GNU/Linux 环境 —— 包括大多数命令行工具、实用工具和应用程序 —— 且不会产生虚拟机开销。

## 用 WSL 可以做什么？

> 什么鬼？你上面那一大堆东西说的都是啥？能讲中文吗？(╬▔皿▔)╯

好的，在 Windows 上用 WSL 我们到底能干什么呢？

- 你可以在 Windows 上「安装」你喜欢的 GNU/Linux 发行版
- 你可以直接在 Windows 上运行 `grep`、`awk`、`sed` 等 Linux 原生可执行文件
- 你可以在 Windows 上直接使用 Vim、Emacs 等工具，直接使用 Linux 版本的 Javascript/Node.js、Ruby、Python、C/C++、Rust、Go 等语言进行开发，直接运行 MySQL、Apache 等 Linux 原生应用和服务等

最为重要的是，利用 WSL 我们可以直接在 **不抛弃 Windows 全部优秀工具的前提下**，**在没有因为虚拟机开销而牺牲太多性能的情况下**，直接运行使用完整的 Linux 系统。

在[前言](/#前言)中我提到了：

> Windows 给 **编程初学者** 带来了很大的困难。比如 **缺乏好用的包管理系统**、**终端环境难看难用** 和 **环境变量不易配置** 等等，这些都让 Windows 在开发体验上难以匹敌 Linux 甚至 macOS。

WSL 的超能力，就是为我们扫清了 Windows 对开发人员不友好的障碍，让我们在 Windows 上同样享受 Linux 等 Unix 风格系统的开发特色。

## WSL 与 WSL 2

从技术层面来说，WSL 实质上就是让 Linux 原生的 ELF64 二进制文件能够在 Windows 上面运行。但是目前 WSL 和 WSL 2 在实现这一功能的方法上大有不同。

### WSL 诞生之初的实现手段

在 WSL 时代（也就是 WSL 1.0 版本），这一切都是通过 WSL 兼容层来实现的。WSL 在 1.0 版本中，是一系列保证 Linux ELF64 二进制文件能够在 Windows 上面运行的组件的集合，这其中包含了「用户态」和「核心态」的组件，主要由以下内容构成：

- 用户态会话进程维持服务（User mode session manager service），用于维护 Linux 实例的生命周期
- Pico 进程驱动 —— Pico provider drivers（包括 `lxss.sys`、`lxcore.sys`），**通过直接翻译「Linux 系统调用」来模拟一个 Linux 内核**
- Pico 进程本体 —— Pico processes，用于托管（Host）原生 Linux 用户态进程（比如 `/bin/bash` 等）

最为重要的就是 WSL 中间兼容层：Pico provider drivers，正是这一层让 WSL 能够将 Linux 进程中请求的系统调用转换为 Windows 系统调用。

### WSL 2 中的新措施

WSL 的 1.0 版本确实为 Windows 带来了新鲜的血液，但是 WSL 自发布以来就伴随着用户对「应用性能」以及「I/O 速度」的抱怨，这些都是由于兼容层的缘故，使得 WSL 在 1.0 时代牺牲了很多性能。另外 WSL 在 1.0 时代也不支持 Docker 等虚拟化技术。通过强行「翻译」Linux 系统调用带来的局限性在 WSL 1.0 中体现的淋漓尽致。

WSL 2 是 WSL 发展历史中的突破性进步，上述问题在 WSL 2 中得到了根本性的解决。
