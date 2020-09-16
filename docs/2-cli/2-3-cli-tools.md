# 命令行工具

::: callout 🍊 本文内容
本文将对 WSL 上使用 Git 进行版本控制，使用 GPG 为 Git commit 签名，设置 WSL 代理以及 WSL 中访问远程服务器等内容进行介绍和说明。接下来的内容为了方便介绍，我将以 zsh 为 WSL 的默认 Shell 进行讲述。
:::

## WSL 2 中的网络访问问题 <Badge text="WSL 2"/>

:::danger 🚨 使用 WSL 2 时需注意的 IP 地址问题
由于 WSL 2 实际上是一个 Linux 内核运行在 Hyper-V 虚拟机中，因此 WSL 2 目前并不能和 Windows 共享 localhost（也就是下文中涉及到的 `127.0.0.1`）。
:::

目前，WSL 2 在和本机 Windows 互相访问的时候，有这样的两种情况：

- 从 Windows 主机一侧访问 WSL 中的服务：比如在 WSL 中运行一个 HTTP 服务器并监听 3000 端口，在 Windows 侧用浏览器打开 `http://<WSL IP 地址>:3000` 这一 URL 来访问这一 HTTP 服务器；
- 从 WSL 一侧访问 Windows 中部署的服务：比如在 Windows 中运行 HTTP / SOCKS5 代理，并让 WSL 中的网络请求也经由 Windows 中启动的代理；

其中，前者 WSL 官方已经进行了完善的支持，我们可以直接在 Windows 中通过通用的 `127.0.0.1` 来访问 WSL 中启动的服务。但是对于后者来说，有时候需要我们手动在 WSL 中获取 Windows 主机的 IP 地址才能正确进行代理配置、网络访问等。为了方便下文表述，我们在文档中使用 `<Windows 主机的 IP 地址>` 来表示你在 WSL 中访问 Windows 主机的 IP 地址：

- 如果你正在使用 WSL 2 环境进行开发工作，**那么下文提到的所有 `<Windows 主机的 IP 地址>` 都是需要我们用下面介绍的方法手动获取的 Windows 主机 IP 地址。**
- 如果你仍使用 WSL 1，那么下面的配置中的 `<Windows 主机的 IP 地址>` 即为 `127.0.0.1`。

你可以使用下面的命令来在 WSL 中获取 Windows 主机的 IP 地址：

> 来自：[WSL2 的一些网络访问问题 - 获取主机的 IP](https://lengthmin.me/posts/wsl2-network-tricks/#%E8%8E%B7%E5%8F%96%E4%B8%BB%E6%9C%BA%E7%9A%84-ip)。

```bash
# 一种方法
$ ip route | grep default | awk '{print $3}'
# 或者另一种方法
$ cat /etc/resolv.conf | grep nameserver | awk '{print $2}'
```

![](https://cdn.spencer.felinae98.cn/github/2020/09/200916_094051.png)

另外，[@implic](https://github.com/implic) 发现 `<主机名>.mshome.net` 这一特殊的 URL 可以用来在 WSL 2 中访问 Windows 主机（其中的 `<主机名>` 即为「Windows 设置 » 系统 » 关于」中所设置的设备名称的小写）。

![](https://cdn.spencer.felinae98.cn/github/2020/09/200916_094137.png)

## 版本控制

Git 是目前版本控制工具的典范、代表，如果你使用 GitHub，那么我相信你已经非常了解 Git 及其使用原理和方法了。

### 安装 Git

我们可以使用 Ubuntu 包管理工具 APT 安装 Git：

```bash
$ sudo apt install git
```

### 配置 Git 使用代理

:::callout 🍐 剧情预告
这里介绍 Git 使用代理，以及下面介绍 ssh 通过代理登录 GitHub，重点为了让各位熟悉命令。在「[#自动化执行代理配置](#自动化执行代理配置)」部分我们将介绍通过脚本自动化执行配置过程的方法，避免每次需要手动获取 WSL 的 IP 地址并为每个工具设定代理。
:::

配置 Git 访问 GitHub 时使用代理：

```bash
$ git config --global http.https://github.com.proxy 'http://<Windows 主机的 IP 地址>:<代理端口>'
```

取消 Git 代理：

```bash
$ git config --global --unset http.https://github.com.proxy
```

### 使用 ssh 与 Git 登录管理 GitHub 仓库

我们可以使用 ssh 在不输入 GitHub 账户密码的情况下将 Git 仓库内容推送至 GitHub 远程仓库。ssh 是我们与远程服务器认证沟通的工具，详见下一节：[远程登录 - ssh](#远程登录)。

接下来，我们配置与 GitHub 连接的 SSH 密钥：^[[Generating a new SSH key and adding it to the ssh-agent - GitHub Help](https://help.github.com/cn/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)]

- 在 WSL 下生成 SSH 公钥 — 私钥对（将邮箱替换为你的邮箱），此时生成的 SSH 密钥默认位于 `~/.ssh` 路径下，公钥为 `id_rsa.pub`，私钥为 `id_rsa`：

  ```bash
  $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
  ```

- 打开 ssh-agent 使之在后台运行：

  ```bash
  $ eval "$(ssh-agent -s)"
  ```

- 将私钥添加到 ssh-agent 之中：

  ```bash
  $ ssh-add ~/.ssh/id_rsa
  ```

- 查看公钥并将之复制到剪贴板：

  ```bash
  # 查看公钥内容
  $ cat ~/.ssh/id_rsa.pub

  # 将公钥复制到剪贴板
  $ cat ~/.ssh/id_rsa.pub | clip.exe
  ```

- 将复制好的公钥添加到 GitHub 账户密钥里面：[Adding a new SSH key to your GitHub account - GitHub Help](https://help.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account).

### 让 ssh 登录 GitHub 也经由代理

上面配置了 Git 使用代理，但并没有配置 ssh 通过代理的登录过程，因此我们可能遇到 ssh 认证过程无法连接的情况。为了解决这一问题，我们需要继续对 ssh 连接登录 GitHub 的认证过程进行配置。

ssh 默认的配置文件位于 `~/.ssh/config`，在此文件中，我们可以配置 ssh 访问某个主机时经由代理访问，因此我们可以配置当访问 `github.com` 主机时通过代理，来加速 ssh 登录过程。

在 WSL 大部分 Linux 发行版中都有 `netcat` 这一工具，`netcat` 即 `nc`，是一个 Linux 上用于执行和 TCP、UDP 或其他网络协议相关操作的工具，我们可以使用 `nc` 来让 ssh 登录过程通过代理登录。

> The nc (or netcat) utility is used for just about anything under the sun involving TCP, UDP, or UNIX-domain sockets.  It can open TCP connections, send UDP packets, listen on arbitrary TCP and UDP ports, do port scanning, and deal with both IPv4 and IPv6.^[[nc — arbitrary TCP and UDP connections and listens](http://manpages.ubuntu.com/manpages/bionic/man1/nc_openbsd.1.html)]

ssh 登录 GitHub 时：

- 我们的主机名称 Host 为 `github.com`；
- 我们的 ssh 用户 User 为 `git`；
- 我们需要用这一命令让 ssh 登录过程经由代理：`nc -X 5 -x <Windows 主机的 IP 地址>:<代理端口> %h %p`；

我们将以上配置用如下的语法写入 `~/.ssh/config`：

```
Host github.com
  User git
  ProxyCommand nc -X 5 -x <Windows 主机的 IP 地址>:<代理端口> %h %p
```

之后我们即可通过代理登录 GitHub 了。我们可以通过命令 `ssh -T git@github.com` 来测试我们是否能够登录成功。

![](https://cdn.spencer.felinae98.cn/github/2020/09/200903_152333.png)

## 使用 GPG 为 Git commit 签名

:::callout 🎫 Why GPG?
明明前面的配置内容已经完全足够我们使用 Git 来管理发布 GitHub 仓库了，为什么我们还需要使用 GPG 签名？**因为伪造一个 Git commit 的作者和邮箱轻而易举，任何人都可能用你的身份伪造一份 Git commit，来栽赃于你。**

GPG 全称为 GNU Privacy Guard，GPG 通过非对称加密来帮助我们从密码学的角度在互联网上证明「我是我」，也从而证明「这不一定真的是我」。为了防止出现我这篇文章中讲述的事情：[震惊！竟然有人在 GitHub 上冒充我的身份！](https://blog.spencerwoo.com/2020/08/wait-this-is-not-my-commit/)，推荐所有人使用 GPG 为自己的 commit 签名。
:::

### 生成 GPG 密钥对

首先，大部分 Linux 发行版已经安装有 GPG 工具了，在 WSL 中执行 `gpg --version` 即可查看当前 GPG 工具的安装情况：

```bash
$ gpg --version

gpg (GnuPG) 2.2.19
libgcrypt 1.8.5
Copyright (C) 2019 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <https://gnu.org/licenses/gpl.html>
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Home: /home/spencer/.gnupg
Supported algorithms:
Pubkey: RSA, ELG, DSA, ECDH, ECDSA, EDDSA
Cipher: IDEA, 3DES, CAST5, BLOWFISH, AES, AES192, AES256, TWOFISH,
        CAMELLIA128, CAMELLIA192, CAMELLIA256
Hash: SHA1, RIPEMD160, SHA256, SHA384, SHA512, SHA224
Compression: Uncompressed, ZIP, ZLIB, BZIP2
```

同时，请注意并记住 GPG 存储根目录：即输出内容中的 Home 目录。此例子中的目录为：`/home/spencer/.gnupg`。

之后，我们就可以用下面的命令来为自己生成一个 GPG 公钥和私钥：

```bash
$ gpg --full-generate-key
```

- 在密钥种类处：选择默认 RSA and DSA 即可；
- 在密钥长度选项处：按照 GitHub 的要求选择 4096 bits；
- 在密钥过期时间处：按照自己的需要选择，默认为永不过期；
- 在我们的用户 ID 和 GPG key 签名邮箱处：填写我们的常用用户名，并填入 GitHub 上面认证过的邮箱；
- 最后，为密钥设置一个安全的密码，并一定记住这一密码。

这样，我们就生成了我们的第一对 GPG 密钥！我们可以用这样的命令查看当前我们拥有的所有 GPG key：

```bash
$ gpg --list-secret-keys --keyid-format LONG

/home/spencer/.gnupg/pubring.kbx
--------------------------------
sec   rsa4096/24CD550268849CA0 2020-08-29 [SC]
      9433E1B6807DE7C15E20DC3B24CD550268849CA0
uid                 [ultimate] Spencer Woo (My GPG key) <my@email.com>
ssb   rsa4096/EB754D2B2409E9FE 2020-08-29 [E]
```

其中，sec 一行的 `rsa4096/24CD550268849CA0` 就是我们的 GPG 私钥，其中的 `24CD550268849CA0` 即为我们的 GPG 私钥 ID。

### 配置 Git 默认使用 GPG 对 commit 签名

生成了 GPG 密钥，并拿到了我们的 GPG 私钥 ID 后，我们即可让 Git 用这一 GPG key 为我们的 commit 进行签名：

```bash
$ git config --global user.signingkey 24CD550268849CA0
$ git config --global commit.gpgsign true
```

这样设置后，如果没有问题，之后的 commit 中 Git 就会自动为我们用这一 GPG 私钥进行签名。我们可以用这一命令确认签名的存在：

```bash
$ git log --show-signature

commit c407d4efc980cbee981da50d714a751999b19ddf (HEAD -> master)
gpg: Signature made Sun Aug 30 17:16:18 2020 CST
gpg:                using RSA key 9433E1B6807DE7C15E20DC3B24CD550268849CA0
gpg: Good signature from "Spencer Woo (My GPG key) <my@email.com>" [ultimate]
Author: spencerwooo <my@email.com>
Date:   Sun Aug 30 17:16:18 2020 +0800

    Signed by GPG
```

另外，此时我们再次用之前查看 commit 详细信息的命令查看本次 commit，我们会发现 GPG 签名已经直接保存于这一 commit 之中了：

```bash
$ git cat-file -p c407d4e
```

![](https://cdn.spencer.felinae98.cn/github/2020/09/200903_194423.png)

最后，我们需要告诉 GitHub 我们使用的 GPG 公钥。对于刚刚我们拿到的私钥 ID：24CD550268849CA0，我们使用下面的命令即可导出我们的 GPG 公钥：

```bash
$ gpg --armor --export 24CD550268849CA0
```

将输出粘贴进入 GitHub 的 [Settings » SSH and GPG keys » New GPG key](https://github.com/settings/keys)，并保存。之后，我们就可以开始在 GitHub 上享受 Verified 被钦定的感觉！

### 错误排查

首先，由于 WSL 没有图形界面，因此在 WSL 中使用 GPG 在全新的配置环境下很可能出现问题。在出现问题时，我们可以使用 `--debug-all` 来让 GPG 输出更多错误日志，从而找到问题所在。我们可以用下面的命令来在不必每次都需要建立一个 commit 的情况下复现 GPG 签名中出现的问题：

```bash
$ echo "test" | gpg --clear-sign --debug-all
```

首先，你可能发现了我们每次使用 GPG 密钥签发 commit 时，都需要输入一次 GPG 密码。此时，如果我们在 Windows 上，那么会弹出 Pinentry 这个图形化的密码输入窗口，但是 WSL 并没有图形界面，因此如果我们不设置 Pinentry 的具体程序，那么每次使用 GPG 签名都会失败。这里我们有两种解决办法：

- 在 WSL 中设置 `GPG_TTY` 环境变量：在 `~/.zshrc` 中加入 `export GPG_TTY="$(tty)"`，从而让 GPG 知道当前的输出终端，从而弹出命令行界面的 `pinentry-curses` 来输入 GPG 密码。但是，我个人发现这种办法偶尔在第一次启动 WSL 的时候无法设置 `GPG_TTY`（即使我将其放在 `.zshrc` 里面），也就是当我执行 `echo $GPG_TTY` 时出现 not a tty 的错误信息，此时我们就需要第二种方法；
- 让 WSL 中的 GPG 使用 Windows 的 Pinentry 窗口程序：如果我们在 Windows 中也安装了 GPG 程序（可以通过 scoop 安装），那么我们应该在 GPG 的安装目录下找到叫做 `pinentry-basic.exe` 的程序。是的，**WSL 中安装的 GPG 同样可以使用 Windows 中的 Pinentry 来输入密码**！我们在 WSL 里面，在前面提到的 GPG 的 Home 目录（默认 `~/.gnupg`）中创建名为 `gpg-agent.conf` 的文件，并在其中写入：

  ```
  pinentry-program /mnt/c/<PATH_TO_GPG_INSTALLATION_DIRECTORY>/pinentry-basic.exe
  ```

  其中 `PATH_TO_GPG_INSTALLATION_DIRECTORY` 就是 GPG 工具在 Windows 上的安装目录，这样设置后，WSL 中的 GPG 每次进行签名，都会调用 Windows 的 Pinentry GUI，从而避免了我们 WSL 没有图形界面的尴尬局面，这一解决方法也能够避免 VS Code 在 Remote-WSL 环境下直接进行 Git commit 时由于无法开启命令行界面导致无法启动 Pinentry 的问题。

另外，在使用 Git 进行 commit 的时候，如果出现类似 Error: “signing failed: No secret key” 的报错信息，可能是 Git 使用的 GPG 命令行工具跟我们生成密钥使用的不一致。我们可以首先用 `which gpg` 来找到我们所使用的 GPG 工具的具体地址，比如 `/usr/bin/gpg`，之后告诉 Git 使用这一 GPG binary 即可：

```bash
$ git config --global gpg.program /usr/bin/gpg
```

## 代理配置

上面介绍的方法仅能对 Git 开启代理访问功能，如果我们希望 WSL 中的工具均能经由代理，那么需要通过环境变量 `http_proxy` 和 `https_proxy` 进行配置。

### 基础配置

使用下面的命令将当前 session（会话）的代理进行配置：

```bash
$ export http_proxy=http://<Windows 主机的 IP 地址>:<代理端口>
$ export https_proxy=http://<Windows 主机的 IP 地址>:<代理端口>
```

使用下面的命令取消代理：

```bash
$ unset http_proxy https_proxy
```

我们可以使用下面的命令检测自己的对外端口：

```bash
# 一个接口
$ curl ipinfo.io

# 另一个接口
$ curl cip.cc
```

### 自动化执行代理配置

不难发现，上面的配置非常繁琐，对于不同的工具需要不同的命令手段，使用 WSL 2 还需要手动获取 IP，为了自动化整个过程，实现一行命令设置代理，我们可以在 `~/.zshrc` 或你使用的 Shell 的配置文件中添加这样的内容，来自动化配置代理：

```bash
# Fetch Windows ip address inside WSL environment
WINDOWS_IP=$(ip route | grep default | awk '{print $3}')
PROXY_HTTP="http://${WINDOWS_IP}:<代理端口>"
PROXY_SOCKS5="${WINDOWS_IP}:<代理端口>"

# Git & SSH for Git proxy
proxy_git () {
  git config --global http.https://github.com.proxy ${PROXY_HTTP}
  if ! grep -qF "Host github.com" ~/.ssh/config ; then
    echo "Host github.com" >> ~/.ssh/config
    echo "  User git" >> ~/.ssh/config
    echo "  ProxyCommand nc -X 5 -x ${PROXY_SOCKS5} %h %p" >> ~/.ssh/config
  else
    lino=$(($(awk '/Host github.com/{print NR}'  ~/.ssh/config)+2))
    sed -i "${lino}c\  ProxyCommand nc -X 5 -x ${PROXY_SOCKS5} %h %p" ~/.ssh/config
  fi
}

# Set proxy
set_proxy () {
  export http_proxy="${PROXY_HTTP}"
  export https_proxy="${PROXY_HTTP}"
  proxy_git
}

# Unset proxy
unset_proxy () {
  unset http_proxy
  unset https_proxy
  git config --global --unset http.https://github.com.proxy
}

# Set alias
alias proxy=set_proxy
alias deproxy=unset_proxy
```

其中：

- 第一行 `WINDOWS_IP=$(ip route | grep default | awk '{print $3}')` 让我们使用 WSL 2 时可以自动获取最新的 WSL IP 地址，WSL 1 可以直接将 `WINDOWS_IP` 设置为 `127.0.0.1`；
- 之后的 `PROXY_HTTP` 和 `PROXY_SOCKS5` 分别是我们代理的 HTTP 协议地址和 SOCKS5 地址；
- 函数 `proxy_git()` 让我们直接设置 Git 自己的代理和 ssh 登录 GitHub 的代理；
- 后续的 `set_proxy()` 和 `unset_proxy()` 就分别是设定 Git 代理和环境变量，以及取消 Git 代理、删除环境变量；

最后，我们使用命令 `proxy` 和 `deproxy` 即可开启、关闭 WSL 中工具使用代理的功能。

## 远程登录

### ssh

ssh — Secure Shell 工具是与远程服务器沟通的渠道。我们不仅可以使用 ssh 登录远程服务器，还可以利用 ssh 在不输入 GitHub 账户密码的情况下将 Git 仓库内容推送至 GitHub 远程仓库。上面我们已经配置好了 ssh 登录 GitHub 的功能，接下来我们配置在 WSL 中登录远程服务器的功能。

一般远程服务器都会为你提供上传 SSH 密钥的功能，或者提供生成 SSH 密钥对供你下载使用的功能。这里以阿里云服务器为例子，阿里云为我提供了一个 `.pem` 的密钥，这一密钥就是我们的「私钥」，在执行 ssh 登录的时候，我们将以命令行参数的形式用「密钥」进行身份认证：

- 一般情况下，我们会将 SSH 密钥（公钥和私钥）存储在 `~/.ssh` 目录下。为了安全且符合 ssh 工具标准，我们需要为密钥先赋予正确的权限：

  ```bash
  # 赋予只读权限
  $ sudo chmod 400 ~/.ssh/{SSH_KEY_FILENAME}.pem
  ```

- 之后，登录服务器就只需要执行类似下面的命令：

  ```bash
  # 以 {USERNAME} 的身份登录地址（或 IP）位于 {HOST_IP_OR_URL} 的远程服务器
  $ ssh -i ~/.ssh/{SSH_KEY_FILENAME}.pem {USERNAME}@{HOST_IP_OR_URL}
  ```

  ![](https://cdn.spencer.felinae98.cn/github/2020/09/200902_220808-1.png)

另外，我们可以配置将 Windows 侧和 WSL 2 的 SSH 密钥共享使用。详见：[Sharing SSH keys between Windows and WSL 2 - Windows Command Line](https://devblogs.microsoft.com/commandline/sharing-ssh-keys-between-windows-and-wsl-2/)

### Mosh

[Mosh](https://mosh.org/) 是新一代远程登录工具。Mosh 全新的「服务器 —— 客户端」沟通方式让我们客户端不再需要因为「延迟」或「切换网络」而需要重新登录服务器、重建 session，而丢失工作进度。Mosh 让远程服务器的连接能「持久化」，从而让我们能长时间、多网络保持同一个 session 不变。

::: callout 🍧 注意
Windows 原生环境下没有 Mosh 的可安装、可执行版本，因此如果我们想使用最先进的远程登录技术 —— Mosh，或者我们需要安装 Chrome 版本的 Mosh，或者我们就需要使用 WSL。
:::

在本机 WSL 环境下安装 Mosh：

```bash
$ sudo apt install mosh
```

ssh 登录远程服务器之后，在服务器上面同时安装 Mosh。我的服务器是 CentOS 7 系统，以 CentOS 为例：

```bash
$ sudo yum install mosh
```

由于 Mosh 在建立 SSH 连接之后，会使用 60000 - 61000 之间的某个端口，因此我们需要为服务器防火墙打开 60000 - 61000 端口的 UDP 转发服务：

```bash
$ sudo firewall-cmd --zone=public --permanent --add-port=60000-61000/udp
```

之后，我们在本机通过 Mosh 就可以直接登录远程服务器：

```bash
$ mosh {USERNAME}@{HOST_IP_OR_URL} --ssh="ssh -i ~/.ssh/{SSH_KEY_FILENAME}.pem"
```
