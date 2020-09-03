# 杂项

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
$ cd /home/spencer

# 用 Windows 文件资源管理器打开目录
$ explorer.exe .
```

![](https://cdn.spencer.felinae98.cn/github/2020/09/200902_220808-2.png)

日后，为了方便我们直接访问 WSL 文件系统中的用户根目录，我们甚至可以直接将这一路径固定在「快速访问」中，完全没有任何问题。WSL 环境中的文件可以被 Windows 直接无障碍访问，用正常 Windows 应用程序打开，没有问题。

![](https://cdn.spencer.felinae98.cn/github/2020/09/200902_220808-3.png)

事实上，Windows 的 `explorer.exe` 命令能够将任意文件按照默认打开方式打开。也就是说，我们也可以直接在 WSL 中用 `explorer.exe` 打开图片、Markdown 文件、音频、视频等。比如，我们在 WSL 环境下进入 Linux 文件系统中的某个目录，希望用 Windows 的「照片」应用打开其中的一张 PNG 图片，那么我们可以直接：

```bash
$ explorer.exe {IMAGE_PATH}/{IMAGE_NAME}.png
```

![](https://cdn.spencer.felinae98.cn/github/2020/09/200902_220808-4.png)

### 命令执行

在 WSL 环境下执行 Windows 侧的命令非常直接易懂，就是在 Windows 命令后面加上可执行文件后缀 `exe`。比如：

- 执行 `explorer.exe` 打开文件资源管理器，和上面的介绍类似
- 工具 `clip.exe` 是 Windows 侧的剪贴板，我们可以将 WSL 侧的命令输出利用 `clip.exe` 导入 Windows 剪贴板。比如：

```bash
$ uname -r | clip.exe
```

![](https://cdn.spencer.felinae98.cn/github/2020/09/200902_220808-5.png)

在 Windows 侧（PowerShell 中）执行 WSL 的命令也同样相似，我们只需要在命令之前加上 `wsl` 即可。比如：

```powershell
# 查看 WSL 内核版本
$ wsl uname -a

# 查看 WSL 发行版信息
$ wsl cat /etc/os-release
```

![](https://cdn.spencer.felinae98.cn/github/2020/09/200902_220808-6.png)

### 优化 WSL 2 虚拟磁盘占用空间

WSL 2 使用 [VHDX](https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/boot-to-vhd--native-boot--add-a-virtual-hard-disk-to-the-boot-menu) 格式的虚拟磁盘储存文件，磁盘大小会在需要时自动扩容，长时间使用可能会占用较大的磁盘空间。我们可以通过 [`Optimize-VHD`](https://docs.microsoft.com/en-us/powershell/module/hyper-v/optimize-vhd?view=win10-ps) 命令来优化其占用空间。

该命令是 Hyper-V 功能的一部分，我们需要在 [Windows 功能](https://jingyan.baidu.com/article/a378c960cb5b39b328283092.html)中启用 **Hyper-V » Hyper-V 管理工具 » Windows PowerShell 的 Hyper-V 模块** 以及 **Hyper-V » Hyper-V 平台 » Hyper-V 服务**：

![](https://cdn.spencer.felinae98.cn/github/2020/09/200902_220808-7.png)

也可以参照[开启「适用于 Linux 的 Windows 子系统」的附加功能](../1-Preparations/1-1-Installation.md#开启「适用于-linux-的-windows-子系统」的附加功能)一节，通过运行命令开启：

```powershell
$ Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V-Management-PowerShell
$ Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V-Services
```

然后以管理员权限执行 `Optimize-VHD -Path <VHDX 文件路径> -Mode Full` 即可。如果不清楚存储路径，可以打开[注册表编辑器](https://support.microsoft.com/help/4027573/windows-10-open-registry-editor)，在 `HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Lxss\{随机 GUID}\BasePath` 下找到。

WSL 命令行方面的配置、工具、操作和问题异常处理等内容基本介绍完毕。接下来的一章，我们将对利用 Visual Studio Code 和 WSL 配合进行工作开发的内容进行介绍。
