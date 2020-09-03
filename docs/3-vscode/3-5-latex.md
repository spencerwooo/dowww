# LaTeX <a href="https://patrickwu.space"><Badge text="@patrick330602"/></a>

用 WSL 下的 TeXLive 和 Visual Studio Code 的 LaTeX Workshop 可以完全配置好一个可用的 Windows LaTeX 环境，摆脱 Windows 下蛋疼的 TexLive 安装包。

## 安装 TeXLive

在 WSL 下使用包管理器安装 `texlive-full`：

```bash
$ sudo apt install -y texlive-full
```

TeXLive 完整安装下来大概有 3GB 左右，这个安装过程会十分漫长，但是我十分强烈建议使用这个完整包。

## 安装 LaTeX Workshop

在 VS Code 的插件中心搜索 `LaTeX Workshop` 并安装：

![](https://cdn.spencer.felinae98.cn/github/2020/09/200902_221903.png)

当我们的 VS Code 使用 Remote 远程开发组件包连接 WSL 环境，并在 WSL 环境下直接编写 LaTeX 文档的时候，我们无需过多配置，使用 LaTeX Workshop 自带的几个编译命令（Recipe）即可。

::: callout 🍑 注意
如果在 LaTeX 文档中使用中文等 CJK 字符，那么推荐使用 `xelatex` 的命令进行编译。
:::

这样我们就基本配置成功了，以下是效果：

![](https://cdn.spencer.felinae98.cn/github/2020/09/200902_221903-1.jpg)

更多有关 LaTeX Workshop 插件的配置，请参考：[James-Yu/LaTeX-Workshop - Wiki](https://github.com/James-Yu/LaTeX-Workshop/wiki)
