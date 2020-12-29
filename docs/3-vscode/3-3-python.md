# Python <a href="https://github.com/spencerwooo"><Badge text="@SpencerWoo"/></a>

## 安装 VS Code 插件

![](https://cdn.spencer.felinae98.cn/github/2020/09/200902_221536.png)

安装 Visual Studio Code [官方 Python 插件](https://marketplace.visualstudio.com/items?itemName=ms-python.python)。

## 安装 Python

在 WSL 环境中安装 Python：

- 使用 APT 安装最新版本的 Python 3：

  ```bash
  # 安装最新版本的 Python 3
  $ sudo apt install python-is-python3
  ```

- 安装 Python 包管理 `pip` 工具：

  ```bash
  $ sudo apt install python3-pip
  ```

- 更新 `pip` 包管理源为清华大学 TUNA 镜像源：^[[pypi 镜像使用帮助 - TUNA](https://mirror.tuna.tsinghua.edu.cn/help/pypi/)]

  ```bash
  # 使用 TUNA 镜像源更新 pip
  $ pip install -i https://pypi.tuna.tsinghua.edu.cn/simple pip -U

  # 将 pip 源设置为 TUNA
  $ pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
  ```

## 安装代码优化工具

::: callout 🥝 注意
在上面安装完成 VS Code 的 Python 插件之后，如果顺利，那么 VS Code 应该提示你缺少 Python 代码检查工具（Python linter），如果你尝试格式化文档，那么 VS Code 还会提示你缺少 Python 代码格式化工具（Python code formatter）。我们需要手动安装这些组件。
:::

- 安装 Python 代码检查工具，VS Code 支持 Pylint（默认）、Flake8、mypy 等多个 Python linter，我更推荐大家使用 [Flake8](https://flake8.pycqa.org/en/latest/)：

  ```bash
  $ pip install flake8
  ```

- 安装 Python 格式化代码工具，VS Code 支持 autopep8（默认）、yapf 和 black，我更推荐大家使用 [black](https://black.readthedocs.io/en/stable/) 来格式化代码：

  ```bash
  $ pip install black
  ```

## 用 Poetry 管理 Python 项目

> Poetry -- Python packaging and dependency management made easy.^[[Poetry: Official website.](https://python-poetry.org/)]

::: callout 🌽 注意
熟悉 Python 项目开发的同学可能知道，Python 需要利用虚拟环境工具 `virtualenv` 来创建虚拟环境运行 Python 项目，也需要 `pip` 包管理工具来安装 Python 依赖。使用两个单独的工具管理一个项目可能会出现诸多问题，同时 `requirements.txt` 的管理也相当不优雅。因此我们用 Poetry 作为统一管理 Python 环境和依赖的工具。Poetry 之于 Python 就如 yarn / npm 之于 Node.js、cargo 之于 Rust、composer 之于 PHP……
:::

### 安装 Poetry

在 WSL 中安装 Poetry：

```bash
$ curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python
```

将 Tab 补全加入我们所使用的 Shell 环境，比如 zsh 中：

```bash
$ poetry completions zsh > ~/.zfunc/_poetry
```

### 基本使用

我们可以用 Poetry 直接新建一个模板 Python 项目，比如叫做 `poetry-demo`：

```bash
$ poetry new poetry-demo
```

这一命令会在 `poetry-demo` 目录下生成如下的文件内容：

::: tree
`poetry-demo`
├── pyproject.toml
├── README.rst
├── `poetry_demo`
│   └── \_\_init\_\_.py
└── `tests`
<span>    </span>├── \_\_init\_\_.py
<span>    </span>└── test_poetry_demo.py
:::

其中的 `pyproject.toml` 文件就是定义我们当前 Python 项目所使用依赖库的文件。

我们可以用下面的命令安装一个新的 Python 依赖：

```bash
# 安装一个依赖
$ poetry add requests

# 安装一个仅在开发中使用的依赖（比如格式化工具 black）
$ poetry add black --dev # 或 -D
```

对于一个已定义 `pyproject.toml` 的项目，我们可以用下面的命令安装所有依赖：

```bash
# 安装所有依赖
$ poetry install

# 安装除了仅限开发使用的依赖外的所有依赖库
$ poetry install --no-dev
```

使用 remove 关键词来移除某个依赖：

```bash
$ poetry remove requests
```

> 更多 Poetry 命令行工具的使用，推荐大家参考 Poetry 官方文档：[Poetry - Commands](https://python-poetry.org/docs/cli/).

## 更多内容

有关利用 VS Code 开发 Python 项目的配置，请大家参考：[Getting Started with Python in VS Code - Visual Studio Code Docs](https://code.visualstudio.com/docs/python/python-tutorial)
