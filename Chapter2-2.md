# 开发工具

> 💎 日常运行 `sudo apt update && sudo apt upgrade` 来保证所安装的组件最新。

## git

`git`：版本控制系统，安装：

- `sudo apt install git`

## ssh

`ssh`：与远程服务器沟通的渠道，配置与 GitHub 链接的 SSH 钥匙 🔑：

- 按照 [GitHub 官方给出的教程](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#platform-linux)在 Linux 下生成钥匙对，并将之添加到你的 SSH agent 中；
- 查看公钥：`cat ~/.ssh/id_rsa.pub`；
- 将公钥复制并添加到 GitHub 账户密钥里面。

## [wsl-open](https://github.com/4U6U57/wsl-open)

`wsl-open` 是类似于 macOS 里面 `open` 命令的程序。它能够在 WSL 中用 Windows 文件资源管理器打开文件夹，用 Windows 默认照片打开图片等等，方便开发。

![](https://i.loli.net/2018/10/01/5bb1b57c6f8ee.gif)

下载：

- 如果还没安装 npm 的话：

```shell
sudo apt-get install -yqq npm
```

- 然后安装 wsl-open：

```shell
sudo npm install -g wsl-open
```