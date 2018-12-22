# Node.js

> Authored by [@suyanhanx](https://github.com/suyanhanx/), via [PR #11](https://github.com/spencerwooo/dowww/pull/11).

# 安装 Node.js

强烈建议使用 `nvm` 来管理 `Node.js` ，便于切换版本和快捷安装。

- 安装 `nvm`

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

- 一般来说上一步的脚本会添加以下内容到命令行的 profile 里，可以先 `source` 一次( `~/.bash_profile`, `~/.zshrc`, `~/.profile`, 或 `~/.bashrc`)。如果确定没有的话，自行添加以下内容到 profile 再执行 `source`

```
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
```

- 安装 `Node.js` 和 `NPM`

```bash
    # 安装当前的稳定版
    nvm install stable
    # 等待安装完毕后，激活该版本
    nvm use stable
```

### Tips:

- 如果出现 `sudo npm` 找不到命令问题，这里可以做一下软链接：

```bash
sudo ln -s $(which node) /usr/bin/node
sudo ln -s $(which npm) /usr/bin/npm
```

- 切换 `nvm` 镜像源
  设置 `~/.zshrc`（bash 同理，bash_profile）

```
export NVM_NODEJS_ORG_MIRROR="Node.js Mirror"
windows nvm 安装目录 添加 node_mirror=Node.js Mirror
```

- 给 `NPM` 下的模块命令添加权限
  **重要** 没有权限会很容易在安装某些需要编译的模块发生失败

```bash
sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}
```

单独的 `npm` 目录权限修改，避免 `sudo` 找不到命令而直接运行安装又权限不够的问题

- 解决 yarn 进度条显示错误的问题
  在命令行 profile 文件中输出环境变量

```
$LANG=en.us-utf8
```

# 在`VSCode`里调试`Node.js`

只需要简单在 `VSCode` 的调试配置 `launch.json` 中添加下面一行属性：

```
"useWSL": true
```

这样 `VSCode` 就会使用 `WSL` 来运行 `Node.js` 。

**注意**：当 `Windows` 版本早于 `Windows 10, build 15063` 时，可能会遇到 `Error 0x80070057` 报错，这个时候可以尝试添加 `"console": "integratedTerminal"` 或者 `"console": "externalTerminal"` 到 `launch.json` 里.

# `NativeModule` 的再编译

大部分模块即使在 `Windows` 中被安装也能在 `WSL` 中使用，反之亦然。
但有些模块是分不同系统平台的。切换系统需要重新编译。可以在项目根目录下载 `Windows` 命令行里执行以下命令：

```
npm install
bash -i -c "npm rebuild"
```

当然直接 `WSL` 里执行 `npm rebuild` 也是可以的。

&nbsp;
&nbsp;

到此就已经全部结束了。在 `VSCode` 里安装需要使用的插件吧！
