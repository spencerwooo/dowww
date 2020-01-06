# LaTeX <a href="https://patrickwu.space"><BlueBadge text="@patrick330602" vertical="middle"/></a>

用 WSL 下的 TeXLive 和 Visual Studio Code 的 LaTeX Workshop 可以完全配置好一个可用的 Windows LaTeX 环境，摆脱 Windows 下蛋疼的 TexLive 安装包。

## 安装 TeXLive

在 WSL 下使用包管理器安装 `texlive-full`，比如：

```bash
sudo apt install -y texlive-full
```

这个安装过程会十分漫长，但是我十分强烈建议使用这个完整包。

## 安装和配置 LaTeX Workshop

在 VSCode 的插件中心搜索 `LaTeX Workshop` 并安装，然后在 `settings.json` 添加以下设置：

```json
"latex-workshop.latex.recipes": [{
  "name": "Build using WSL",
  "tools": [
    "wsl-texlive"
  ]
}],
"latex-workshop.latex.tools": [{
  "name": "wsl-texlive",
  "command": "wsl",
  "args": [
    "latexmk",
    "-synctex=1",
    "-interaction=nonstopmode",
    "-pdf",
    "%DOCFILE%"
  ]
}]
```

就这样配置成功了，以下是效果：

![](https://i.loli.net/2018/12/11/5c0fc821c5aed.jpg)
