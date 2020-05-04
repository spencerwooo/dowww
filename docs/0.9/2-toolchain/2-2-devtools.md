# 开发工具

:::tip
日常运行 `sudo apt update && sudo apt upgrade` 来保证所安装的组件最新。
:::

## git

`git`：版本控制系统，安装：

- `sudo apt install git`

配置 `git` 使用代理：

```bash
git config --global http.proxy 'socks5://127.0.0.1:$端口号'
git config --global https.proxy 'socks5://127.0.0.1:$端口号'
```

其中 `$端口号` 为所使用的代理在本地的监听端口，一般默认为 1080 端口。

取消 `git` 代理：

```bash
git config --global --unset http.proxy
git config --global --unset https.proxy
```

为了方便使用，可以将上面两个命令设置为 `alias`，即别名。在 `.zshrc` 中添加如下内容：

```bash
alias fuckgit="git config --global http.proxy 'socks5://127.0.0.1:1080' && git config --global https.proxy 'socks5://127.0.0.1:1080'"
alias unfuckgit="git config --global --unset http.proxy && git config --global --unset https.proxy"
```

然后执行 `source .zshrc` 加载配置文件。

更多有趣的 `alias` 可以参考我的配置文件：[`awesome-alias`](https://github.com/spencerwooo/awesome-alias)

## ssh

`ssh`：与远程服务器沟通的渠道，配置与 GitHub 链接的 SSH 钥匙 🔑：

- 按照 [GitHub 官方给出的教程](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#platform-linux)在 Linux 下生成钥匙对，并将之添加到你的 SSH agent 中；
- 查看公钥：`cat ~/.ssh/id_rsa.pub`；
- 将公钥复制并添加到 GitHub 账户密钥里面。

## [wsl-open](https://github.com/4U6U57/wsl-open)

`wsl-open` 是类似于 macOS 里面 `open` 命令的程序。它能够在 WSL 中用 Windows 文件资源管理器打开文件夹，用 Windows 默认照片打开图片等等，方便开发。

<div align="center"><img src="https://i.loli.net/2018/10/01/5bb1b57c6f8ee.gif" alt="wsl-open" /></div>

下载：

- 如果还没安装 npm 的话：

```bash
sudo apt-get install -yqq npm
```

- 然后安装 wsl-open：

```bash
sudo npm install -g wsl-open
```
