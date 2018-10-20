# Python

::: tip
目前存在的一个问题是：VSCode Python 插件和 WSL 侧的工具链兼容性很糟糕，都需要一定的配置才能丝滑工作。这也是一个当前微软 VSCode 各大语言插件组和 WSL 开发组都知道并在解决的问题（参考 [VSCode Python 插件 Issue #67](https://github.com/Microsoft/vscode-python/issues/67)）。

在此之前，下面的解决方法是一个 work-around，请严格按照下面讲述的步骤进行操作，否则很大概率不会成功。
:::

## 安装插件

::: warning 注意
请先从 `WSL` 的终端环境中打开 Visual Studio Code：`code &`
:::

安装 Visual Studio Code [官方 Python 插件](https://marketplace.visualstudio.com/items?itemName=ms-python.python)。

然后重启 Visual Studio Code.

## 安装 Python

在 WSL 侧安装 Python：

- 安装必备工具：`sudo apt install -y make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev libncursesw5-dev xz-utils tk-dev`

- 安装 Python 3（或者你想要的 Python 版本）：`sudo apt install python3`

## 让 VSCode 集成 WSL 侧 Python

::: warning 注意
以下步骤需要全部在 WSL 中进行，包括创建文件、创建文件夹和写入文件内容。在 Windows 文件资源管理器中创建文件夹与文件会造成 Visual Studio Code 无法识别相应的批处理文件，导致 Python 插件无法正常进行代码实时检查、代码美化与快速定位等功能。
:::

- 在 WSL 终端中进入 Windows 系统用户根目录（即：`/mnt/c/Users/$Windows 用户名$`）
- 创建文件夹：`mkdir .vscode_bats`
- 进入文件夹 `cd .vscode_bats`，**⚠ 用 VSCode 创建文件 `code python.bat &`**
- 将下面内容 **在 VSCode 中** 加入文件 `python.bat`：

```bat
@echo off
set v_params=%*
set v_params=%v_params:\=/%
set v_params=%v_params:c:=/mnt/c%
set v_params=%v_params:"=\"%
bash.exe -c "/usr/bin/python3 %v_params%"
```

- 在 VSCode 设置中加入：

```json
"python.pythonPath": "C:\\Users\\$用户名$\\.vscode_bats\\python3.bat",
```

官方 Python 插件集成了实时代码风格检查工具 `pylint`，快速定位工具 `ctags` 和代码美化插件 `autopep8`。这些同样也可以在 WSL 侧安装并从 Windows VSCode 侧调用。

- 安装 Python 包管理器 `pip`：`sudo apt install python3-pip`
- 安装 `pylint`：`pip3 install pylint`
- 安装 `exuberant ctags`：`sudo apt install exuberant-ctags`
- 安装 `autopep8`：`pip3 install autopep8`
- 在刚刚创建的 `.vscode_bats` 文件夹下**用 VSCode 创建** `pylint.bat`：`code pylint.bat &` 并加入以下内容：

```bat
@echo off
set v_params=%*
set v_params=%v_params:\=/%
set v_params=%v_params:c:=/mnt/c%
set v_params=%v_params:"=\"%
bash.exe -c "/usr/bin/pylint %v_params%"
```

- 在刚刚创建的 `.vscode_bats` 文件夹下**用 VSCode 创建** `ctags.bat`：`code ctags.bat &` 并加入以下内容：

```bat
@echo off
set v_params=%*
set v_params=%v_params:\=/%
set v_params=%v_params:c:=/mnt/c%
set v_params=%v_params:"=\"%
bash.exe -c "ctags %v_params%"
```

- 在刚刚创建的 `.vscode_bats` 文件夹下**用 VSCode 创建** `autopep8.bat`：`code autopep8.bat &` 并加入以下内容：

```bat
@echo off
set v_params=%*
set v_params=%v_params:\=/%
set v_params=%v_params:c:=/mnt/c%
set v_params=%v_params:"=\"%
bash.exe -c "autopep8 %v_params%"
```

- 在 VSCode 设置中加入：

```json
"python.linting.pylintPath": "C:\\Users\\$用户名$\\.vscode_bats\\pylint.bat",
"python.workspaceSymbols.ctagsPath": "C:\\Users\\$用户名$\\.vscode_bats\\ctags.bat",
"python.formatting.autopep8Path": "C:\\Users\\$用户名$\\.vscode_bats\\autopep8.bat"
```

那么现在拿 VSCode 写 Python 项目的时候应该可以自动代码补全、IntelliSense、跳转定义和自动美化了。👍