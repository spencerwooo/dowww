# 其他工具

::: callout 🍊 本文内容
本文将对 WSL 上常用命令、常见工具、常见使用场景等内容进行介绍和说明。接下来的内容为了方便介绍，我将以 zsh 为 WSL 的默认 Shell 进行讲述。
:::

## WSL 2 中的网络访问问题 <Badge text="WSL 2"/>

:::danger 🚨 使用 WSL 2 时需注意的 IP 地址问题
由于 WSL 2 实际上是一个 Linux 内核运行在 Hyper-V 虚拟机中，因此 WSL 2 目前并不能和 Windows 共享 localhost（也就是下文中涉及到的 `127.0.0.1`）。
:::

目前，WSL 2 在和本机 Windows 互相访问的时候，有时候需要我们手动使用 WSL 虚拟机映射出来的 IP 地址才能正确进行代理配置、网络访问等。为了方便下文表述，我们在文档中使用 `<WSL IP 地址>` 来表示你的 WSL 侧的 IP 地址：

- 如果你正在使用 WSL 2 环境进行开发工作，**那么下文提到的所有 `<WSL IP 地址>` 都是需要我们用下面介绍的方法手动获取的 WSL 2 的 IP 地址。**
- 如果你仍使用 WSL 1，那么下面的配置中的 `<WSL IP 地址>` 即为 `127.0.0.1`。

你可以使用下面的命令来获取当前 WSL 2 的 IP 地址：

> 来自：[WSL2 的一些网络访问问题 - 获取主机的 IP](https://lengthmin.me/posts/wsl2-network-tricks/#%E8%8E%B7%E5%8F%96%E4%B8%BB%E6%9C%BA%E7%9A%84-ip)。

```bash
ip route | grep default | awk '{print $3}'
# 或者
cat /etc/resolv.conf | grep nameserver | awk '{ print $2 }'
```

![](https://cdn.spencer.felinae98.cn/github/2020/09/200903_131940.png)

## 版本控制

Git 是目前版本控制工具的典范、代表，如果你使用 GitHub，那么我相信你已经非常了解 Git 及其使用原理和方法了。

### 安装 Git

我们可以使用 Ubuntu 包管理工具 APT 安装 Git：

```bash
sudo apt install git
```

### 配置 Git 使用代理

:::callout 🍐 剧情预告
这里介绍 Git 使用代理，以及下面介绍 ssh 通过代理登录 GitHub，重点为了让各位熟悉命令。在「[#自动化执行代理配置](#自动化执行代理配置)」部分我们将介绍通过脚本自动化执行配置过程的方法，避免每次需要手动获取 WSL 的 IP 地址并为每个工具设定代理。
:::

配置 Git 访问 GitHub 时使用代理：

```bash
git config --global http.https://github.com.proxy 'http://<WSL IP 地址>:<代理端口>'
```

取消 Git 代理：

```bash
git config --global --unset http.https://github.com.proxy
```

### 使用 ssh 与 Git 登录管理 GitHub 仓库

我们可以使用 ssh 在不输入 GitHub 账户密码的情况下将 Git 仓库内容推送至 GitHub 远程仓库。ssh 是我们与远程服务器认证沟通的工具，详见下一节：[远程登录 - ssh](#远程登录)。

接下来，我们配置与 GitHub 连接的 SSH 密钥：^[[Generating a new SSH key and adding it to the ssh-agent - GitHub Help](https://help.github.com/cn/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)]

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

- 将复制好的公钥添加到 GitHub 账户密钥里面：[Adding a new SSH key to your GitHub account - GitHub Help](https://help.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account).

### 让 ssh 登录 GitHub 也经由代理

上面配置了 Git 使用代理，但并没有配置 ssh 通过代理的登录过程，因此我们可能遇到 ssh 认证过程无法连接的情况。为了解决这一问题，我们需要继续对 ssh 连接登录 GitHub 的认证过程进行配置。

ssh 默认的配置文件位于 `~/.ssh/config`，在此文件中，我们可以配置 ssh 访问某个主机时经由代理访问，因此我们可以配置当访问 `github.com` 主机时通过代理，来加速 ssh 登录过程。

在 WSL 大部分 Linux 发行版中都有 `netcat` 这一工具，`netcat` 即 `nc`，是一个 Linux 上用于执行和 TCP、UDP 或其他网络协议相关操作的工具，我们可以使用 `nc` 来让 ssh 登录过程通过代理登录。

> The nc (or netcat) utility is used for just about anything under the sun involving TCP, UDP, or UNIX-domain sockets.  It can open TCP connections, send UDP packets, listen on arbitrary TCP and UDP ports, do port scanning, and deal with both IPv4 and IPv6.^[[nc — arbitrary TCP and UDP connections and listens](http://manpages.ubuntu.com/manpages/bionic/man1/nc_openbsd.1.html)]

ssh 登录 GitHub 时：

- 我们的主机名称 Host 为 `github.com`；
- 我们的 ssh 用户 User 为 `git`；
- 我们需要用这一命令让 ssh 登录过程经由代理：`nc -X 5 -x <WSL IP 地址>:<代理端口> %h %p`；

我们将以上配置用如下的语法写入 `~/.ssh/config`：

```
Host github.com
  User git
  ProxyCommand nc -X 5 -x <WSL IP 地址>:<代理端口> %h %p
```

之后我们即可通过代理登录 GitHub 了。我们可以通过命令 `ssh -T git@github.com` 来测试我们是否能够登录成功。

![](https://cdn.spencer.felinae98.cn/github/2020/09/200903_152333.png)

## 代理配置

上面介绍的方法仅能对 Git 开启代理访问功能，如果我们希望 WSL 中的工具均能经由代理，那么需要通过环境变量 `http_proxy` 和 `https_proxy` 进行配置。

### 基础配置

使用下面的命令将当前 session（会话）的代理进行配置：

```bash
export http_proxy=http://<WSL IP 地址>:<代理端口>
export https_proxy=http://<WSL IP 地址>:<代理端口>
```

使用下面的命令取消代理：

```bash
unset http_proxy https_proxy
```

我们可以使用下面的命令检测自己的对外端口：

```bash
# 一个接口
curl ipinfo.io

# 另一个接口
curl cip.cc
```

### 自动化执行代理配置

不难发现，上面的配置非常繁琐，对于不同的工具需要不同的命令手段，使用 WSL 2 还需要手动获取 IP，为了自动化整个过程，实现一行命令设置代理，我们可以在 `~/.zshrc` 或你使用的 Shell 的配置文件中添加这样的内容，来自动化配置代理：

```bash
# Fetch WSL 2 ip address
WSL_IP=$(ip route | grep default | awk '{print $3}')
PROXY_HTTP="http://${WSL_IP}:<代理端口>"
PROXY_SOCKS5="${WSL_IP}:<代理端口>"

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

- 第一行 `WSL_IP=$(ip route | grep default | awk '{print $3}')` 让我们使用 WSL 2 时可以自动获取最新的 WSL IP 地址，WSL 1 可以直接将 `WSL_IP` 设置为 `127.0.0.1`；
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
  sudo chmod 400 ~/.ssh/{SSH_KEY_FILENAME}.pem
  ```

- 之后，登录服务器就只需要执行类似下面的命令：

  ```bash
  # 以 {USERNAME} 的身份登录地址（或 IP）位于 {HOST_IP_OR_URL} 的远程服务器
  ssh -i ~/.ssh/{SSH_KEY_FILENAME}.pem {USERNAME}@{HOST_IP_OR_URL}
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
[WSL 2 架构](/dev/1-Preparations/1-0-Intro.html#wsl-2-中采用的新措施)允许我们通过 [Plan 9 文件系统协议（9P protocol server）](<https://en.wikipedia.org/wiki/9P_(protocol)>)来从 Windows 侧访问 Linux 文件，与访问网络资源类似。这不意味着你可以直接通过 AppData 文件目录去访问 Linux 文件，如果你这样做，依旧会对 WSL 造成不可逆的影响。
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

![](https://cdn.spencer.felinae98.cn/github/2020/09/200902_220808-2.png)

日后，为了方便我们直接访问 WSL 文件系统中的用户根目录，我们甚至可以直接将这一路径固定在「快速访问」中，完全没有任何问题。WSL 环境中的文件可以被 Windows 直接无障碍访问，用正常 Windows 应用程序打开，没有问题。

![](https://cdn.spencer.felinae98.cn/github/2020/09/200902_220808-3.png)

事实上，Windows 的 `explorer.exe` 命令能够将任意文件按照默认打开方式打开。也就是说，我们也可以直接在 WSL 中用 `explorer.exe` 打开图片、Markdown 文件、音频、视频等。比如，我们在 WSL 环境下进入 Linux 文件系统中的某个目录，希望用 Windows 的「照片」应用打开其中的一张 PNG 图片，那么我们可以直接：

```bash
explorer.exe {IMAGE_PATH}/{IMAGE_NAME}.png
```

![](https://cdn.spencer.felinae98.cn/github/2020/09/200902_220808-4.png)

### 命令执行

在 WSL 环境下执行 Windows 侧的命令非常直接易懂，就是在 Windows 命令后面加上可执行文件后缀 `exe`。比如：

- 执行 `explorer.exe` 打开文件资源管理器，和上面的介绍类似
- 工具 `clip.exe` 是 Windows 侧的剪贴板，我们可以将 WSL 侧的命令输出利用 `clip.exe` 导入 Windows 剪贴板。比如：

```bash
uname -r | clip.exe
```

![](https://cdn.spencer.felinae98.cn/github/2020/09/200902_220808-5.png)

在 Windows 侧（PowerShell 中）执行 WSL 的命令也同样相似，我们只需要在命令之前加上 `wsl` 即可。比如：

```powershell
# 查看 WSL 内核版本
wsl uname -a

# 查看 WSL 发行版信息
wsl cat /etc/os-release
```

![](https://cdn.spencer.felinae98.cn/github/2020/09/200902_220808-6.png)

### 优化 WSL 2 虚拟磁盘占用空间

WSL 2 使用 [VHDX](https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/boot-to-vhd--native-boot--add-a-virtual-hard-disk-to-the-boot-menu) 格式的虚拟磁盘储存文件，磁盘大小会在需要时自动扩容，长时间使用可能会占用较大的磁盘空间。我们可以通过 [`Optimize-VHD`](https://docs.microsoft.com/en-us/powershell/module/hyper-v/optimize-vhd?view=win10-ps) 命令来优化其占用空间。

该命令是 Hyper-V 功能的一部分，我们需要在 [Windows 功能](https://jingyan.baidu.com/article/a378c960cb5b39b328283092.html)中启用 **Hyper-V » Hyper-V 管理工具 » Windows PowerShell 的 Hyper-V 模块** 以及 **Hyper-V » Hyper-V 平台 » Hyper-V 服务**：

![](https://cdn.spencer.felinae98.cn/github/2020/09/200902_220808-7.png)

也可以参照[开启「适用于 Linux 的 Windows 子系统」的附加功能](../1-Preparations/1-1-Installation.md#开启「适用于-linux-的-windows-子系统」的附加功能)一节，通过运行命令开启：

```
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V-Management-PowerShell
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V-Services
```

然后以管理员权限执行 `Optimize-VHD -Path <VHDX 文件路径> -Mode Full` 即可。如果不清楚存储路径，可以打开[注册表编辑器](https://support.microsoft.com/help/4027573/windows-10-open-registry-editor)，在 `HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Lxss\{随机 GUID}\BasePath` 下找到。

WSL 命令行方面的配置、工具、操作和问题异常处理等内容基本介绍完毕。接下来的一章，我们将对利用 Visual Studio Code 和 WSL 配合进行工作开发的内容进行介绍。
