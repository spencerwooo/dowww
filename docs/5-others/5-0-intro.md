# 后记 <Badge text="New" vertical="middle"/>

![](https://i.loli.net/2020/01/07/J6hx2UTlX3yDbgS.png)

::: callout 🍓 结束语
Dev on Windows with WSL 到这里基本介绍完成，我们将使用 WSL 中可能涉及到的一些问题、配置方法都进行了详细的介绍，对 WSL 的工作原理也进行了大致的讲解。本章主要介绍一些使用 WSL 进行开发的体验，文档涉及到的参考资料等内容。
:::

## 体验

事实上，从一个学生的角度来说，WSL 完完全全是可以胜任我们日常学习开发工作的。无论是在 ACM 中使用 C/C++ 编写算法，还是在学校课程中在 Linux 环境下进行软件开发，WSL 都 more than enough。特别是在 VS Code 能够借助于 Remote 远程开发组件包直接连接到 WSL 环境上之后，在 Windows 上用 VS Code 在原生 Windows 环境下开发和连接到 WSL 环境下开发的体验是几乎完全一致的。

WSL 为我们在 Windows 系统中提供了一个近乎原生的 Linux 环境，让我们能在不折腾、尽量少折腾的情况下，运行完整的 Linux 发行版。这不论是对 Linux 开发者还是 Windows 开发者来说，都是一大利好。

## 参与贡献

2018 年的时候，Dev on Windows with WSL 仅仅是我一个个人的项目，而且仅仅是一篇文章。到今天，我和几位 Contributors 已经撰写了超过 5 个部分的 20 章内容。现在，希望有经验的同学前来与我共同完善本项目，不论是增加一门语言在 WSL 下的配置方法，还是增加一些高级的 WSL 使用操作，任何内容都是欢迎的。

在你着手准备给这个项目提交一些新内容前，请务必阅读「贡献」相关内容说明与规范：[贡献指南](/contributing/)。

## 参考资料

感谢前辈总结的经验，没有以下这些文章我不可能总结出这些东西：

- [lloydstubber/my-wsl-setup](https://github.com/lloydstubber/my-wsl-setup)
- [Voronoff/wsl_setup.md](https://gist.github.com/Voronoff/059c50f9fd354386c305c55af1f3a61f#install-and-set-up-python-to-work-with-vscode-and-wsl)
- [Running VS Code for Linux in WSL #2760](https://github.com/Microsoft/WSL/issues/2760)
- [sirredbeard/Awesome-WSL](https://github.com/sirredbeard/Awesome-WSL)
- [ethanhs/WSL-Programs](https://github.com/ethanhs/WSL-Programs)
- [如何在 Windows Subsystem for Linux (WSL) 上运行 Linux GUI 软件](<http://www.yuan-ji.me/%E5%A6%82%E4%BD%95%E5%9C%A8Windows-Subsystem-for-Linux-(WSL)-%E4%B8%8A%E8%BF%90%E8%A1%8CLinux-GUI-%E8%BD%AF%E4%BB%B6/>)
- [在 WSL 下启动 VS Code](https://zhuanlan.zhihu.com/p/33226830)
- [Setting proxy in git](https://gist.github.com/laispace/666dd7b27e9116faece6)
