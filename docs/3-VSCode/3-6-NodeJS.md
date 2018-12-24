# Node.js <a href="https://github.com/suyanhanx"><Badge text="@suyanhanx"/></a><a href="https://github.com/spencerwooo/dowww/pull/11"><Badge text="PR #11" type="warn"/></a>

:::tip ⏰ 一些概念：
- `Node.js` - a JavaScript runtime built on Chrome's V8 JavaScript engine：一个 JavaScript 运行环境
- `nvm` Node Version Manager - Simple bash script to manage multiple active node.js versions：是 `Node.js` 的版本管理工具
- `npm`、`yarn` 分别是不同的 `Node.js` 包管理工具，推荐使用 `yarn`
:::

## 安装 Node.js

强烈建议使用 `nvm` 来管理与安装 `Node.js`，便于切换版本和快捷安装。

- 安装 `nvm`

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

- 一般来说上一步的脚本会添加以下内容（`nvm` 的环境变量）到命令行的用户配置文件 profile 里，可以通过 `source ~/.zshrc` 等类似的方法重新加载用户配置使之生效。

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
```

如果重新加载配置后还是没有 `nvm` 的相关命令，也可以自行添加上面的内容到 profile 中再加载配置文件。

- 安装 `Node.js` 和 `npm`

```bash
# 安装当前的稳定版
nvm install stable
# 等待安装完毕后，激活该版本
nvm use stable
```

**Tips**:

- 如果出现 `sudo npm` 找不到命令问题，这里可以做一下软链接：

```bash
sudo ln -s $(which node) /usr/bin/node
sudo ln -s $(which npm) /usr/bin/npm
```

- 更换 `nvm` 镜像（如更换为淘宝镜像源），在终端用户配置文件（如：`~/.zshrc`）中加入下面内容：

```bash
export NVM_NODEJS_ORG_MIRROR="https://npm.taobao.org/mirrors/node"
```

## 配置 Node.js 的包管理工具

- 加速在中国大陆地区 `npm` 的下载速度：
  - 考虑将 `npm` 更换源至淘宝镜像（推荐）：
  
  ```bash
  npm set registry https://registry.npm.taobao.org
  ```

  - 或直接安装 `cnpm`，一个阿里官方的 Node.js 包管理工具，默认源为淘宝镜像源：

  ```bash
  npm install -g cnpm --registry=https://registry.npm.taobao.org
  ```

- 给 `npm` 下的模块命令添加权限：
  
:::tip 重要
没有权限会很容易在安装某些需要编译的模块发生失败。
:::

```bash
sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}
```

上面是单独的 `npm` 目录权限修改，避免 `sudo` 找不到命令而直接运行安装又权限不够的问题。

- 推荐安装 `yarn`，一个更加现代、科学的 `Node.js` 包管理工具：
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

## 在 VSCode 里调试 `Node.js`

只需要简单在 VSCode 的调试配置 `launch.json` 中添加下面一行属性：

```json
"useWSL": true
```

这样 VSCode 就会使用 WSL 来运行 `Node.js` 。

**注意**：当 Windows 版本早于 `Windows 10, build 15063` 时，可能会遇到 `Error 0x80070057` 报错，这个时候可以尝试添加 `"console": "integratedTerminal"` 或者 `"console": "externalTerminal"` 到 `launch.json` 里。

## `NativeModule` 的再编译

大部分模块即使在 Windows 中被安装也能在 WSL 中使用，反之亦然。
但有些模块是分不同系统平台的。切换系统需要重新编译。可以在项目根目录下载 Windows 命令行里执行以下命令：

```bash
npm install
bash -i -c "npm rebuild"
```

当然直接 WSL 里执行 `npm rebuild` 也是可以的。

👌 到此就已经全部结束了，在 VSCode 里安装需要使用的插件吧！
