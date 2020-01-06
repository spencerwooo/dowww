# Node.js <a href="https://github.com/suyanhanx"><BlueBadge text="@suyanhanx" vertical="middle"/></a>

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

## 配置 ESLint <a href="https://github.com/spencerwooo"><Badge text="Updated by @SpencerWoo" vertical="middle"/></a>

> A fully pluggable tool for identifying and reporting on patterns in JavaScript.

**ESLint 是 JavaScript 强大的代码实时风格检测与错误纠正工具**。我们可以直接利用 WSL 环境下的 ESLint 与 VSCode 中的 ESLint 插件配合工作。

- 下载 VSCode 的 ESLint 插件：[ESLint | Integrates ESLint JavaScript into VS Code.](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
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

![](https://i.loli.net/2018/12/30/5c284ff7e19c0.png)

:::warning
下面这些配置内容在 2019 年 6 月，VS Code 官方团队实现了 Remote-WSL 插件之后基本不需要了。更多内容请参考：[Remote-WSL 环境下 VS Code 的配置与特性](https://dowww.spencerwoo.com/3-VSCode/#remote-wsl-%E6%8F%92%E4%BB%B6)
:::

<details>

- 让 ESLint 和 VSCode 的 ESLint 插件配合：
  - 在 Windows 用户根目录下创建 `.vscode_wsl/node.bat`
  - 在 `node.bat` 中加入以下内容：

  ```
  @echo off
  set v_params=%*
  set v_params=%v_params:\=/%
  set v_params=%v_params:c:=/mnt/c%
  set v_params=%v_params:"=\"%
  wsl.exe -c "node %v_params%"
  ```

  - 在 VSCode 中配置 ESLint 的 node 路径为刚刚的 `node.bat`

  ```json
  "eslint.nodePath": "C:\\Users\\$用户名\\.vscode_wsl\\node.bat"
  ```

需要注意的是，这种解决方法虽然确实能让 VSCode 中的 ESLint 插件正确的实时识别错误、检测风格，但是并不完美，有时候还会报一些如下的错误。(#｀-_ゝ-)

![](https://i.loli.net/2018/12/30/5c2850d9813fd.png)

不过实际使用的时候，这些错误并不影响开发体验。

</details>

## 调试 `Node.js` 程序 <a href="https://github.com/spencerwooo"><Badge text="Modified by @SpencerWoo"/></a>

在 Remote-WSL 诞生之后，使用 WSL 环境进行开发调试就不需要特殊的配置了。

:::warning
下面这些配置内容在 2019 年 6 月，VS Code 官方团队实现了 Remote-WSL 插件之后基本不需要了。更多内容请参考：[Remote-WSL 环境下 VS Code 的配置与特性](https://dowww.spencerwoo.com/3-VSCode/#remote-wsl-%E6%8F%92%E4%BB%B6)
:::

<details>

:::warning 注意
在最新的 Node.js 插件中，开发组引入了 `useWSL` 这一参数，以方便我们在 WSL 中对 Node.js 程序进行调试。实际配置下来，几乎是没有用处的。因为 `useWSL` 会先 `cd` 一个 Windows style 的路径，之后 `bash.exe -c $你的命令`。而我们使用 WSL 开发的同学，几乎都会偏向于将默认终端配置成为 WSL 环境，这让 debug 无法进行。

**下面的 remote debugger 方法更加适合我们环境的调试开发。**
:::

我们利用 [Node.js Remote debugger](https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_remote-debugging) 来实现在 WSL 上的调试。

- 下载插件：[WSL workspaceFolder](https://marketplace.visualstudio.com/items?itemName=lfurzewaddock.vscode-wsl-workspacefolder)，来保证下一步 `launch.json` 中路径的正确配置。
- 配置 `.vscode/launch.json`：

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Attach to Remote",
      "address": "localhost",
      "port": 9229,
      "sourceMaps": false,
      "localRoot": "${workspaceFolder}",
      "remoteRoot": "${command:extension.vscode-wsl-workspaceFolder}",
    }
  ]
}
```

其中 `port` 参数为默认 debugger 监听端口。（即：`--inspect-brk` 参数的默认端口）

**开启一次调试：**

- 以调试模式运行你的程序（以 `app.js` 为例）：

```bash
node --inspect-brk app.js
```

- 将调试进程链接至 VSCode Remote Debugger：快捷键 `F5` (Start debugging)

**更加方便的：**

- 配置 `package.json` 中的 debug 脚本选项（入口程序以 `app.js` 为例）：

```json
"scripts": {
  "debug": "node --inspect-brk app.js"
}
```

- 以调试模式运行程序：

```bash
yarn debug
```

- 开启 VSCode 的调试进程：快捷键 `F5`

![](https://ws1.sinaimg.cn/large/e264e10ely1fyosaj40reg21wk13ze81.gif)

经过这样的配置，我们就可以方便的利用 VSCode 强大的调试功能对我们的 Node.js 程序调试开发了。🍻

</details>

## `NativeModule` 的再编译

大部分模块即使在 Windows 中被安装也能在 WSL 中使用，反之亦然。
但有些模块是分不同系统平台的。切换系统需要重新编译。可以在项目根目录下载 Windows 命令行里执行以下命令：

```bash
npm install
bash -i -c "npm rebuild"
```

当然直接 WSL 里执行 `npm rebuild` 也是可以的。

👌 到此就已经全部结束了，在 VSCode 里安装需要使用的插件吧！
