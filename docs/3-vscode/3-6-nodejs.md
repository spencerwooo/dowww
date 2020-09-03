# Node.js <a href="https://github.com/suyanhanx"><Badge text="@suyanhanx"/></a>

:::callout 🥂 版本更新
由于 VS Code 在支持 Remote-WSL 之后，在 WSL 中开发 Node.js 项目和正常无异，因此我（[@SpencerWoo](https://github.com/spencerwooo)）重新撰写了这部分内容，和 @suyanhanx 原先贡献的内容有较大变动。
:::

在开始之前，我先来介绍几个 Node.js 相关的概念：

- Node.js - A JavaScript runtime built on Chrome's V8 JavaScript engine 是一个不依赖浏览器的 JavaScript 运行环境，大部分前端项目比如 Vue、React 和后端项目比如 Express、Koa 均依赖于 Node.js 生态系统；
- `n` - Interactively Manage Your Node.js Versions：是一个 Node.js 版本管理工具，我们可以使用 `n` 来安装不同版本的 Node.js 环境；
- npm 和 yarn，分别是 Node.js 的包管理工具，其中我更推荐大家使用后者（yarn）来管理安装 Node.js 依赖；

接下来，我们将在 WSL 中使用 `n` 来安装 Node.js 环境，并配置包管理工具 yarn 来管理 Node.js 环境中的依赖。

## 安装 Node.js

建议大家使用 [`n`](https://github.com/tj/n) 来管理与安装 Node.js，便于切换版本和快捷安装。首先，我们使用 [n-install](https://github.com/mklement0/n-install) 安装 `n`：

```bash
$ curl -L https://git.io/n-install | bash
```

n-install（也就是上面的命令）默认会自动帮我们将 `n` 的重要环境变量 `PREFIX` 和 `N_PREFIX` 设置到 `$HOME/n`，并将 `n` 安装到 `$HOME/n/bin`。同时，n-install 会帮助我们更新当前我们所使用的 Shell（比如 zsh），在相应的配置文件中将 `$HOME/n/bin` 添加到 `PATH` 中。最后，n-install 会帮我们安装最新的 LTS 版本的 Node.js 环境。

> 更多关于 n-install 的使用，请参考 [n-install 的 README 文档](https://github.com/mklement0/n-install)。

使用 n-install 安装好 `n` 以及 Node.js 之后，我们可以通过下面的命令进行验证：

```bash
# 验证 n 的安装情况
$ n --version
6.7.0

# 验证 Node.js 的安装情况
$ node --version
v12.18.3

# 验证 npm 的安装情况
$ npm --version
6.14.6
```

另外，我们也可以用 `n` 下载其他版本的 Node.js：

```bash
# 下载最新的 LTS 版本 Node.js
$ n lts

# 下载特定版本的 Node.js
$ n 10.16.0
```

直接运行命令 `n` 也可以进入 interactive 界面，让我们选择使用某个版本的 Node.js。

> 有关使用 `n` 下载安装与使用 Node.js 的命令和方法，请参考 [n 的官方 README 文档](https://github.com/tj/n)。

## 配置 Node.js 包管理工具

接下来，我们安装 [yarn](https://yarnpkg.com/)，推荐大家安装使用 yarn：这个更加现代、科学的 Node.js 包管理工具。刚刚下载的 Node.js 中包含有 npm，因此我们可以直接用 npm 来安装 yarn：

```bash
$ npm install -g yarn
```

此时我们安装的 yarn 实际上是 1.22.0：

```bash
$ yarn --version

1.22.4
```

此时我们安装的是 yarn 1.0 版本，也就是比较传统的管理安装 Node.js 依赖的工具，跟 npm 比较类似。yarn 在 2.0+ 版本中经历了重大的变化，因此如果我们需要对某个项目开启 yarn 的 2.0 版本，需要使用下面的命令手动开启：

```bash
$ yarn set version berry
```

其中，yarn 2.0 所支持的 Plug and play - Plug'n'Play 功能是 yarn 2.0 的重磅功能，也是我们使用 yarn 2.0 的主要原因，Plug'n'Play 重点解决了 Node.js 的 `node_modules` 存在于每个项目中的问题，更多内容请见：[yarn - Plug'n'Play](https://yarnpkg.com/features/pnp)。需要注意的是，并非不是所有的 Node.js 库均支持 yarn 2.0，因此推荐预先查看你所使用的库是否支持 yarn 2.0：[Compatibility Table](https://yarnpkg.com/features/pnp#compatibility-table)。

> 如果你之前使用 yarn 1.0 版本，推荐查看 yarn 官方的 1.0 至 2.0 版本迁移指南：[Migrating from Yarn 1](https://yarnpkg.com/advanced/migration)。


有关在 VS Code 中开发 Node.js 项目的方法，更多请参考：[Node.js tutorial in Visual Studio Code - Visual Studio Code Docs](https://code.visualstudio.com/docs/nodejs/working-with-javascript)
