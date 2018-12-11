# LaTeX

用WSL下的TeXLive和Visual Studio Code的LaTeX Workshop可以完全配置好一个可用的Windows LaTeX环境， 摆脱蛋疼的Windows的TexLive安装包

## 安装TeXLive

在WSL下使用包管理器安装`texlive-full`，比如：

```bash
sudo apt install -y texlive-full
```

这个安装过程会十分漫长，但是我十分强烈建议使用这个完整包。

## 安装和配置LaTeX Workshop

在VSCode的插件中心搜索`LaTeX`， 安装LaTeX Workshop, 然后在`settings.json`添加以下设置：

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
}],
```

就这样配置成功了，以下是效果：

！[](https://i.loli.net/2018/12/11/5c0fc821c5aed.jpg)