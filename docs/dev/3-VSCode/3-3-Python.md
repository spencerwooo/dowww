# Python <a href="https://github.com/spencerwooo"><BlueBadge text="@SpencerWoo" vertical="middle"/></a>

## 安装 VS Code 插件

![](https://i.loli.net/2020/01/06/9aJgYSkujepmD4q.png)

安装 Visual Studio Code [官方 Python 插件](https://marketplace.visualstudio.com/items?itemName=ms-python.python)。

## 安装 Python

在 WSL 环境中安装 Python：

- 使用 APT 安装最新版本的 Python 3：

```bash
sudo apt install python3
```

- 安装 Python 包管理 `pip` 工具：

```bash
sudo apt install python3-pip
```

- 更新 `pip` 包管理源为清华大学 TUNA 镜像源：^[[pypi 镜像使用帮助 - TUNA](https://mirror.tuna.tsinghua.edu.cn/help/pypi/)]

```bash
# 使用 TUNA 镜像源更新 pip
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple pip -U

# 将 pip 源设置为 TUNA
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

## 安装代码优化工具

::: callout 🥝 注意
在上面安装完成 VS Code 的 Python 插件之后，如果顺利，那么 VS Code 应该提示你直接按照下面的 `pylint` 和 `autopep8` 两个组件，根据 VS Code 的提示直接点击安装即可。如果没有出现提示，那么可能需要手动安装下面两个组件。
:::

- 安装自动代码检查 `pylint`

```bash
pip install pylint
```

- 安装自动格式化代码工具 `autopep8`

```bash
pip install autopep8
```

## 用 pipenv 管理 Python 项目

> Pipenv -- Sacred Marriage of Pipfile, Pip, & Virtualenv.^[[Pipenv: Python Dev Workflow for Humans](https://pipenv.kennethreitz.org/en/latest/)]

::: callout 🌽 注意
熟悉 Python 项目开发的同学可能知道，Python 需要利用虚拟环境工具 `virtualenv` 来创建虚拟环境运行 Python 项目，也需要 `pip` 包管理工具来安装 Python 依赖。使用两个单独的工具管理一个项目可能会出现诸多问题，同时 `requirements.txt` 的管理也相当不优雅。因此我们用 `pipenv` 作为统一管理 Python 环境和依赖的工具。

`pipenv` 之于 Python 就如 `yarn` 之于 Node.js、`cargo` 之于 Rust、`composer` 之于 PHP……
:::

### 安装 pipenv

在 Ubuntu 中安装 pipenv：

```bash
sudo apt install pipenv
```

### 使用 pipenv 管理项目

默认情况下，pipenv 会将项目安装的依赖统一用 `Pipfile` 管理，并会利用 `Pipfile.lock` 来「锁住」依赖版本。

安装所有依赖：

```bash
pipenv install
```

安装某个 Python 库：

```bash
pipenv install {PYTHON_LIBRARY}
```

使用 pipenv 进入 Python 虚拟环境并运行 Python 文件：

```bash
# 进入虚拟环境
pipenv shell

# 执行 Python 文件 main.py
python main.py
```

有关利用 VS Code 开发 Python 项目的配置，请大家参考：[Getting Started with Python in VS Code - Visual Studio Code Docs](https://code.visualstudio.com/docs/python/python-tutorial)
