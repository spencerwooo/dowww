# Node.js <a href="https://github.com/suyanhanx"><Badge text="@suyanhanx" vertical="middle"/></a>

首先，明确几个概念：

| 工具 / 名词 | 概念                                                                                  | 作用                                           |
| :---------- | :------------------------------------------------------------------------------------ | :--------------------------------------------- |
| Node.js     | A JavaScript runtime built on Chrome's V8 JavaScript engine.                          | 一个 JavaScript 运行环境                       |
| nvm         | Node Version Manager - Simple bash script to manage multiple active node.js versions. | 一个简单的 Node.js 的版本管理工具              |
| npm、yarn   | Node Package Managers                                                                 | 分别是不同的 Node.js 包管理工具，推荐使用 yarn |

## 安装 Node.js

强烈建议使用 `nvm` 来管理与安装 Node.js，便于切换版本和快捷安装。

- 安装 `nvm`：

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

- 一般来说上一步的脚本会添加以下内容（`nvm` 的环境变量）到命令行的用户 Shell 配置文件 profile（对 zsh 来说就是 `.zshrc`）里，可以通过 `source ~/.zshrc` 等类似的方法重新加载用户配置使之生效：

  ```bash
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
  ```

  如果重新加载配置后还是没有 `nvm` 的相关命令，也可以自行添加上面的内容到 profile 中再加载配置文件。

- 安装 Node.js 和 `npm`：

```bash
# 安装当前的稳定版
nvm install stable

# 等待安装完毕后，激活该版本
nvm use stable
```

注意：

- 如果出现 `sudo npm` 找不到命令问题，这里可以做一下软链接：

```bash
sudo ln -s $(which node) /usr/bin/node
sudo ln -s $(which npm) /usr/bin/npm
```

- 更换 `nvm` 镜像（如更换为淘宝镜像源），在用户 Shell 配置文件 profile 中加入下面内容：

```bash
export NVM_NODEJS_ORG_MIRROR="https://npm.taobao.org/mirrors/node"
```

## 配置 Node.js 包管理工具

首先，Node.js 自带了 `npm` 包管理工具。为了加速在中国大陆地区 `npm` 包的下载速度，我们为之更换镜像源。

- 考虑将 `npm` 更换源至淘宝镜像（推荐）：

```bash
npm set registry https://registry.npm.taobao.org
```

- 或直接安装 `cnpm`，一个阿里官方的 Node.js 包管理工具，默认源为淘宝镜像源：

```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

给 `npm` 下的模块命令添加权限：

:::callout 🥑 注意
没有权限会很容易在安装某些需要编译的模块发生失败。
:::

```bash
sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}
```

上面是单独的 `npm` 目录权限修改，避免 `sudo` 找不到命令而直接运行安装又权限不够的问题。

接下来，我们安装 `yarn`。推荐大家安装使用 `yarn` —— 这个更加现代、科学的 Node.js 包管理工具：

- 配置 `yarn` 下载仓库：

```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```

- 安装 `yarn`：

```bash
sudo apt-get update && sudo apt-get install yarn
```

- 考虑更换 `yarn` 下载源至淘宝镜像：

```bash
yarn set registry https://registry.npm.taobao.org
```

- 解决 `yarn` 进度条显示错误的问题，在命令行 profile 文件中输出环境变量：

```bash
$LANG=en.us-utf8
```

## 配置 ESLint <a href="https://github.com/spencerwooo"><Badge text="Updated by @SpencerWoo" vertical="middle"/></a>

> A fully pluggable tool for identifying and reporting on patterns in JavaScript.

**ESLint 是 JavaScript 强大的代码实时风格检测与错误纠正工具**。利用 ESLint 我们可以保证 JavaScript 代码的正确、合理，符合规范。

- 下载 VS Code 的 ESLint 插件：[ESLint | Integrates ESLint JavaScript into VS Code.](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- 在当前开发环境中加入 ESLint 模块：

```bash
yarn add eslint
```

- 初始化 ESLint 模块：

```bash
# 如果 PATH 中有 eslint
eslint --init
# 如果没识别到 eslint
./node_modules/.bin/eslint --init
```

![](https://cdn.spencer.felinae98.cn/github/2020/09/200902_221830.png)

之后，VS Code 的 ESLint 插件便可以跟我们安装的 ESLint 工具协调运行，帮助我们保证自己的 JavaScript 项目代码的干净整洁。

## NativeModule 的再编译

大部分模块即使在 Windows 中被安装也能在 WSL 中使用，反之亦然。但有些模块是分不同系统平台的。切换系统需要重新编译。可以在项目根目录下载 Windows 命令行里执行以下命令：

```bash
npm install
bash -i -c "npm rebuild"
```

当然直接 WSL 里执行 `npm rebuild` 也是可以的。

有关在 VS Code 中开发 Node.js 程序的方法，更多请参考：[Node.js tutorial in Visual Studio Code - Visual Studio Code Docs](https://code.visualstudio.com/docs/nodejs/working-with-javascript)
