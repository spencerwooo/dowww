# 其他工具

::: callout 🍊 本文内容
本文将对 WSL 上常用命令、常见工具、常见使用场景等内容进行介绍和说明。接下来的内容为了方便介绍，我将以 zsh 为 WSL 的默认 Shell 进行讲述。
:::

## 代理配置

使用下面的命令将当前 session（会话）的代理进行配置：

```bash
set http_proxy=http://127.0.0.1:{端口号}
set https_proxy=http://127.0.0.1:{端口号}
```

使用下面的命令取消代理，使用系统代理：

```bash
unset http_proxy https_proxy
```

可以使用下面的命令检测自己的对外端口：

```bash
# 一个接口
curl ipinfo.io

# 另一个接口
curl cip.cc
```

上面的命令可以通过 alias（别名）加入 `~/.zshrc` 中，方便快速输入。在 `~/.zshrc` 中添加如下内容：

```bash
# 出去
alias fuckgfw="set http_proxy=http://127.0.0.1:{端口号} && set https_proxy=http://127.0.0.1:{端口号}"
# 回来
alias unfuckgfw="unset http_proxy https_proxy"
# 测试 IP
alias myip="curl cip.cc"
```

然后执行 `source ~/.zshrc` 加载配置文件。

## 版本控制

Git 是目前版本控制工具的典范、代表，如果你使用 GitHub，那么我相信你已经非常了解 Git 及其使用原理和方法了。

使用 Ubuntu 的 apt 安装 Git：

```bash
sudo apt install git
```

配置 Git 使用代理：

```bash
git config --global http.proxy 'http://127.0.0.1:{端口号}'
git config --global https.proxy 'https://127.0.0.1:{端口号}'
```

取消 Git 代理：

```bash
git config --global --unset http.proxy
git config --global --unset https.proxy
```

为了方便使用，可以将上面两个命令设置为 alias，即别名。在 `~/.zshrc` 中添加如下内容：

```bash
alias fuckgit="git config --global http.proxy 'socks5://127.0.0.1:1080' && git config --global https.proxy 'socks5://127.0.0.1:1080'"
alias unfuckgit="git config --global --unset http.proxy && git config --global --unset https.proxy"
```

然后执行 `source ~/.zshrc` 加载配置文件。

## 远程登录

### ssh

ssh — Secure Shell 工具是与远程服务器沟通的渠道。我们不仅可以使用 ssh 登录远程服务器，还可以利用 ssh 在不输入 GitHub 账户密码的情况下将 Git 仓库内容推送至 GitHub 远程仓库。

#### ssh 登录 GitHub

下面配置与 GitHub 连接的 SSH 密钥：^[[Generating a new SSH key and adding it to the ssh-agent - GitHub Help](https://help.github.com/cn/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)]

- 在 WSL 下生成 SSH 公钥 — 私钥对（将邮箱替换为你的邮箱），此时生成的 SSH 密钥默认位于 `~/.ssh` 路径下，公钥为 `id_rsa.pub`，私钥为 `id_rsa`：

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

- 打开 ssh-agent 使之在后台运行：

```bash
eval "$(ssh-agent -s)"
```

- 将私钥添加到 ssh-agent 之中：

```bash
ssh-add ~/.ssh/id_rsa
```

- 查看公钥并将之复制到剪贴板：

```bash
# 查看公钥内容
cat ~/.ssh/id_rsa.pub

# 将公钥复制到剪贴板
cat ~/.ssh/id_rsa.pub | clip.exe
```

- 将复制好的公钥添加到 GitHub 账户密钥里面^[[Adding a new SSH key to your GitHub account - GitHub Help](https://help.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)]

#### ssh 登录远程服务器

一般远程服务器都会为你提供上传 SSH 密钥的功能，或者提供生成 SSH 密钥对供你下载使用的功能。这里以阿里云服务器为例子，阿里云为我提供了一个 `.pem` 的密钥，这一密钥就是我们的「私钥」，在执行 ssh 登录的时候，我们将以命令行参数的形式用「密钥」进行身份认证：

- 一般情况下，我们会将 SSH 密钥（公钥和私钥）存储在 `~/.ssh` 目录下。为了安全且符合 ssh 工具标准，我们需要为密钥先赋予正确的权限：

```bash
# 赋予只读权限
sudo chmod 400 ~/.ssh/{SSH_KEY_FILENAME}.pem
```

- 之后，登录服务器就只需要执行类似下面的命令：

```bash
# 以 {USERNAME} 的身份登录地址（或 IP）位于 {HOST_IP_OR_URL} 的远程服务器
ssh -i ~/.ssh/{SSH_KEY_FILENAME}.pem {USERNAME}@{HOST_IP_OR_URL}
```

![](https://i.loli.net/2020/01/04/YW6m7wMkHt4dR2D.png)

另外，我们可以配置将 Windows 侧和 WSL 2 的 SSH 密钥共享使用。详见：[Sharing SSH keys between Windows and WSL 2 - Windows Command Line](https://devblogs.microsoft.com/commandline/sharing-ssh-keys-between-windows-and-wsl-2/)

### Mosh

[Mosh](https://mosh.org/) 是新一代远程登录工具。Mosh 全新的「服务器 —— 客户端」沟通方式让我们客户端不再需要因为「延迟」或「切换网络」而需要重新登录服务器、重建 session，而丢失工作进度。Mosh 让远程服务器的连接能「持久化」，从而让我们能长时间、多网络保持同一个 session 不变。

::: callout 🍧 注意
Windows 原生环境下没有 Mosh 的可安装、可执行版本，因此如果我们想使用最先进的远程登录技术 —— Mosh，或者我们需要安装 Chrome 版本的 Mosh，或者我们就需要使用 WSL。
:::

在本机 WSL 环境下安装 Mosh：

```bash
sudo apt install mosh
```

ssh 登录远程服务器之后，在服务器上面同时安装 Mosh。我的服务器是 CentOS 7 系统，以 CentOS 为例：

```bash
sudo yum install mosh
```

由于 Mosh 在建立 SSH 连接之后，会使用 60000 - 61000 之间的某个端口，因此我们需要为服务器防火墙打开 60000 - 61000 端口的 UDP 转发服务：

```bash
sudo firewall-cmd --zone=public --permanent --add-port=60000-61000/udp
```

之后，我们在本机通过 Mosh 就可以直接登录远程服务器：

```bash
mosh {USERNAME}@{HOST_IP_OR_URL} --ssh="ssh -i ~/.ssh/{SSH_KEY_FILENAME}.pem"
```

## Windows 和 WSL 之间互相访问

Windows 和 WSL 相互配合的一大利好就是能够直接在 Linux 中执行 Windows 可执行文件（`exe` 文件），也可以反过来在 Windows 中执行 Linux 可执行文件。同时，WSL 2 的出现让我们能够直接在 Windows 的文件资源管理器中访问 Linux 文件系统，而不会像 WSL 1.0 一样对 Linux 中的文件造成无法逆转的影响。

### 文件系统

::: callout ❗ 注意
[WSL 2 架构](/dev/1-Preparations/1-0-Intro.html#wsl-2-中采用的新措施)允许我们通过 [Plan 9 文件系统协议（9P protocol server）](https://en.wikipedia.org/wiki/9P_(protocol))来从 Windows 侧访问 Linux 文件，与访问网络资源类似。这不意味着你可以直接通过 AppData 文件目录去访问 Linux 文件，如果你这样做，依旧会对 WSL 造成不可逆的影响。
:::

在 WSL 环境中：

- Windows 目录往往位于 `/mnt/c/Users/{WINDOWS_USERNAME}` 下
- Linux 目录往往位于 `/home/{WSL_USERNAME}` 下

我们在 WSL 中可以通过下面的命令在文件资源管理器中打开 Linux 文件系统中的某个目录：

```bash
# 进入目标目录
cd /home/spencer

# 用 Windows 文件资源管理器打开目录
explorer.exe .
```

![](https://i.loli.net/2020/01/04/s1vB2WfHgmQ7ikU.png)

日后，为了方便我们直接访问 WSL 文件系统中的用户根目录，我们甚至可以直接将这一路径固定在「快速访问」中，完全没有任何问题。WSL 环境中的文件可以被 Windows 直接无障碍访问，用正常 Windows 应用程序打开，没有问题。

![](https://i.loli.net/2020/01/04/K9boPU2S5CwXeuk.png)

事实上，Windows 的 `explorer.exe` 命令能够将任意文件按照默认打开方式打开。也就是说，我们也可以直接在 WSL 中用 `explorer.exe` 打开图片、Markdown 文件、音频、视频等。比如，我们在 WSL 环境下进入 Linux 文件系统中的某个目录，希望用 Windows 的「照片」应用打开其中的一张 PNG 图片，那么我们可以直接：

```bash
explorer.exe {IMAGE_PATH}/{IMAGE_NAME}.png
```

![](https://i.loli.net/2020/01/04/NPO3zAcMSGgKnWQ.png)

### 命令执行

在 WSL 环境下执行 Windows 侧的命令非常直接易懂，就是在 Windows 命令后面加上可执行文件后缀 `exe`。比如：

- 执行 `explorer.exe` 打开文件资源管理器，和上面的介绍类似
- 工具 `clip.exe` 是 Windows 侧的剪贴板，我们可以将 WSL 侧的命令输出利用 `clip.exe` 导入 Windows 剪贴板。比如：

```bash
uname -r | clip.exe
```

![](https://i.loli.net/2020/01/04/yhBra9jMVXe3EDN.png)

在 Windows 侧（PowerShell 中）执行 WSL 的命令也同样相似，我们只需要在命令之前加上 `wsl` 即可。比如：

```powershell
# 查看 WSL 内核版本
wsl uname -a

# 查看 WSL 发行版信息
wsl cat /etc/os-release
```

![](https://i.loli.net/2020/01/04/DZfJjm9PUhxl1AI.png)

WSL 命令行方面的配置、工具、操作和问题异常处理等内容基本介绍完毕。接下来的一章，我们将对利用 Visual Studio Code 和 WSL 配合进行工作开发的内容进行介绍。
