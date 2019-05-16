---
next: /5-Experience/
---

# LxRunOffline <a href="https://github.com/llinfeng"><Badge text="@llinfeng" vertical="middle"/></a> <a href="https://github.com/ChungZH"><Badge text="@ChungZH" vertical="middle"/></a>

<!-- 大佬自由发挥！ -->

[LxRunOffline](https://github.com/DDoSolitary/LxRunOffline) 是一个 **Windows 命令行工具** 可以根据你的需要调度任何 Linux 发行版。遵循 WSL 的惯例，您可以自由选择任何 Linux 发行版。有关所有可能性的完整列表，[请访问这个链接](https://github.com/DDoSolitary/LxRunOffline/wiki).

## 快速开始

### 准备好 LxRunOffline

最好的方法是使用 `choco`。像在这个项目的主页中说的那样，选择 命令提示符 或 PowerShell 来执行以下安装命令：

```powershell
choco install lxrunoffline
```

注意，您还需要按一次“Y”键，以确认某些内容。

同时你也可以使用 `scoop`。同样的，选择 命令提示符 或 PowerShell 来执行以下安装命令：

```powershell
scoop bucket add extras
scoop install lxrunoffline
```

> 关于 Scoop，如果您还想了解更多，请阅读：
> - [「一行代码」搞定软件安装卸载，用 Scoop 管理你的 Windows 软件 - SpencerWoo](https://spencerwoo.com/posts/2019/01/12/scoop.html)
> - [ 给 Scoop 加上这些软件仓库，让它变成强大的 Windows 软件管理器 - SpencerWoo](https://spencerwoo.com/posts/2019/02/06/scoop-bucket.html)

或者您还可以直接下载二进制文件：

- Latest releases: https://github.com/DDoSolitary/LxRunOffline/releases
- Development builds: https://ci.appveyor.com/project/DDoSolitary/lxrunoffline > 选择第一个工作 > ARTIFACTS

### 下载并安装 Linux 镜像

<!-- but can be a bit overwhelming 这句翻译得可能有点问题 还有 Here goes a layman approach to getting a fully functional Linux 这句-->
[这个表格](https://github.com/DDoSolitary/LxRunOffline/wiki) 列出所有可能性，但可能有点压倒性。特别是，表中的大多数条目都是用于构建 docker，我对 docker 不太熟悉。这是一个获得功能 _齐全_ 的 Linux 的外行人方法。

1. 从这里下载镜像:
   <https://lxrunoffline.apphb.com/download/UbuntuFromMS/16>
2. 将刚刚下载的镜像存储在某一个地方，并运行以下的 `LxRunOffline` 命令，最好是在具有 Admin 权限的命令提示符窗口。（您可以按“Win + X”，然后按“A”来获取它。）

```powershell
LxRunOffline i -n UF -d c:\WSL\Full -f <c:\whereabouts_of_the_downloaded_image> -s
```

在填写 `16.04.2-server-cloudimg-amd64-root.tar.gz` 文件准确的绝对路径后，该命令将在目录 `c:\WSL\UFull` 中创建一个名为 UF 的分发。

:::tip TIP
**有关那些 "docker images" 的评论**: docker
意味着尽可能轻量级，而功能性 Linux 发行版的大小可能不到 20MB。然而，有了这些超轻量级的 Linux 发行版，有时侯你甚至连 `apt-get` 命令都没有。
:::

### 访问新安装的镜像

从任何控制台界面，无论是 PowerShell 还是 命令提示符，如果您遵循上面的命名约定，以下命令集将加载新创建的 Linux 发行版：

```powershell
Lx Run Offline run -n UF
```

其他常用命令包括：

* `LxRunOffline l`: 列出所有已安装的发行版；
* `LxRunOffline`: 用于欣赏可能的其他命令列表。

### 注意事项

1. `LxRunOffline i` 只能用 `root` 安装一个 Linux 发行版。
2. `LxRunOffline r -n Name_of_Distro` 将使您获得 root 访问权限。
3. 如果您愿意，我们需要创建您的用户帐户。
4. 目前，如果它们不共享相同的 Windows 内部版本号，则无法将安装在 PC-1 中的 Linux 发行版部署到 PC-2。 （我测试把在 Build 1809 上生成的文件夹复制到 Build 1803 机器，并得到了 `0x80070040` 错误。）

## 高级用法

这里列出了要添加的待处理项目的愿望清单，包括：
1. 让 X11 转发工作：
    1. 使用 Xming 的默认设置，打开端口 `：0` 进行显示
    2. 将以下设置添加到 `~/ .bashrc`（或 Fish / Zsh shell 的安装文件）中：
       ```bash
       export DISPLAY=:0
       ```
2. 从控制台模拟器（ConEmu，Hyper.is，
   Cmder）`LxRunOffline` 部署 WSL)。目前，首先需要访问命令提示符或 PowerShell，然后访问 root 用户，然后访问所需的用户。
    * 应该设置一些 `* .sh` 脚本来将非 `root` 用户设置为默认用户？有待这方面的指令。
   
