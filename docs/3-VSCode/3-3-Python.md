# Python <a href="https://github.com/spencerwooo"><Badge text="@SpencerWoo" vertical="middle"/></a>

::: tip
目前存在的一个问题是：VSCode Python 插件和 WSL 侧的工具链兼容性很糟糕，都需要一定的配置才能丝滑工作。这也是一个当前微软 VSCode 各大语言插件组和 WSL 开发组都知道并在解决的问题（参考 [VSCode Python 插件 Issue #67](https://github.com/Microsoft/vscode-python/issues/67)）。

在此之前，下面的解决方法是一个 work-around，请严格按照下面讲述的步骤进行操作，否则很大概率不会成功。
:::

## 安装插件

安装 Visual Studio Code [官方 Python 插件](https://marketplace.visualstudio.com/items?itemName=ms-python.python)。

然后重启 Visual Studio Code.

## 安装 Python

在 WSL 侧安装 Python：

- 安装一些必备工具：`sudo apt install -y make build-essential libssl-dev libffi-dev python3-dev`
- 安装 Python 3.7（或者你想要的 Python 版本）：`sudo apt install python3.7`
- 安装 Python 包管理 `pip`：`sudo apt install python3-pip`
- 更新 `pip` 包管理源地址至清华大学 TUNA 站点：
  - 在根目录下创建文件：`~/.pip/pip.conf`
  - 在其中加入如下内容：

```
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
```

## 让 VSCode 集成 WSL 侧 Python

> 以下内容、解决方案、代码和可执行文件来自 [plusls - VSCode using Python in WSL](http://blog.plusls.cn/windows/vscode-using-python-in-wsl/)，致谢。

首先从 [这里](http://blog.plusls.cn/windows/vscode-using-python-in-wsl/wsl.zip) 下载由 plusls 编译的一些工具，下载的文件内容有：

```
.
├── LocalDebugClient.js
├── completion.py
├── pydevd_file_utils.py
└── wsl-tools
    ├── autopep8.exe
    ├── ctags.exe
    ├── pylint.exe
    ├── python.exe
    ├── python2.exe
    └── python3.exe

1 directory, 9 files

```

将下载文件解压至本地目录下，留作后续使用。

### 让 VSCode Python 插件识别到 WSL 环境下的 Python

::: tip TIP
以下内容以 Python 3 为例，其他版本的 Python 原理相同。
:::

在 VSCode 中设置如下：

```json
"python.pythonPath": "C:\\$更换为 python3.exe 的路径$\\python3.exe",
```

### 让 Python 插件直接使用 WSL 侧的工具

官方 Python 插件集成了实时代码风格检查工具 `pylint`，快速定位工具 `ctags` 和代码美化插件 `autopep8`。这些同样也可以在 WSL 侧安装并从 Windows VSCode 侧调用。

- 安装 `pylint`：`pip3 install pylint`
- 安装 `exuberant ctags`：`sudo apt install exuberant-ctags`
- 安装 `autopep8`：`pip3 install autopep8`
- 在 VSCode 设置中加入：

```json
"python.linting.pylintPath": "C:\\$更换为 pylint.exe 的路径$\\pylint.exe",
"python.workspaceSymbols.ctagsPath": "C:\\$更换为 ctags.exe 的路径$\\ctags.exe",
"python.formatting.autopep8Path": "C:\\$更换为 autopep8.exe 的路径$\\autopep8.exe"
```

那么现在拿 VSCode 写 Python 项目的时候应该可以自动代码补全、IntelliSense 和自动美化了。👍

### 跳转定义、调试等内容的配置

这部分内容由于涉及到修改 VSCode Python 官方插件代码，因此不建议进行配置。同时，随着插件的更新，修改的代码会失效，修改方法也不近相同，如果有需要可以考虑 [查看原文内容](http://blog.plusls.cn/windows/vscode-using-python-in-wsl/) 自行配置。

## Code Runner

> 基础配置详见 > [Code Runner](/3-VSCode/3-2-Code-Runner.html)

无需特殊配置，单个文件可以直接右键 `Run Code` 执行。