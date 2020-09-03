# 让 WSL 2 支持 USB <Badge text="WSL 2"/>

::: callout 📟 版本限制
请注意，本文方法需要 Windows Build 19041 及以后版本，且仅限 WSL 2 使用。本部分参考了这一 GitHub 仓库中的介绍：[Adding USB support to WSL 2](https://github.com/rpasek/usbip-wsl2-instructions).
:::

本文介绍的办法能够通过 Windows 侧安装的 USBIP 来将 USB 数据包转发至 Linux 侧的 USBIP，从而让 WSL 2 支持 USB 设备。默认情况下，WSL 2 的 Linux 内核并不支持 USB，本文将介绍如何向 WSL 2 的 Linux 内核中添加 USB 功能，以及如何用 USBIP 将 USB 设备连接至 Linux 上。

## USBIP-Win

:::warning 🔧 手动编译
如果你需要最新版本的 USBIP-Win，那么你需要手动编译这一程序。
:::

### 手动编译（最新版）

将 USBIP-Win 仓库源代码通过 Git 克隆至本地：

```shell
$ git clone https://github.com/cezuni/usbip-win.git
```

根据 USBIP-Win 仓库 README 编译步骤来编译 USBIP-Win，我们需要安装 Visual Studio、Windows SDK 以及 Windows Driver Kit，**一定按照 README 中给出的顺序依次安装，不要同时安装多个组件，否则编译会出现问题。**

### 下载安装预编译二进制文件 ![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/cezanne/usbip-win?include_prereleases)

当然，我们也可也从 GitHub Release 中下载可能不是最新版本的 USBIP-Win 预编译文件：

> [cezuni/usbip-win/releases](https://github.com/cezuni/usbip-win/releases).

## 向 Linux 侧添加 USB 支持

:::warning 🔧 手动编译
这里我们将手动编译 Linux 内核，请注意可能出现的任何问题。
:::

在 WSL 中，下载安装编译 Linux 内核所需要的库和工具：

```shell
$ sudo apt install build-essential flex bison libssl-dev libelf-dev libncurses-dev autoconf libudev-dev libtool
```

找到我们当前所使用的 Linux 内核名称：

```shell
$ uname -r

4.19.43-microsoft-standard
```

:::callout 🌏 名称提示
这里我们得到的 `4.19.43-microsoft-standard` 即为 WSL 的 Linux 内核名称。下文命令中将以此作为命令中所使用的内核名称，因此请将下文中涉及到这一内容的部分替换为你自己的内核版本名称。
:::

将当前的 WSL 内核克隆至本地，Linux 内核源码一般放置在 `/usr/src/<内核名称>` 路径下。克隆完成后进入这一目录：

```shell
$ sudo git clone https://github.com/microsoft/WSL2-Linux-Kernel.git /usr/src/4.19.43-microsoft-standard
$ cd /usr/src/4.19.43-microsoft-standard
```

将 Git 分支 checkout 至我们的内核版本分支（这里是 `v4.19.43`）：

```shell
$ sudo git checkout v4.19.43
```

将我们当前的内核设置复制进去：

```shell
$ sudo cp /proc/config.gz config.gz
$ sudo gunzip config.gz
$ sudo mv config .config
```

运行 menuconfig 来选择我们想要添加的内核模块：

```shell
$ sudo make menuconfig
```

在 menuconfig 中选定我们想要添加的 USB 内核模块，以下这些模块就满足了我自己的个人需要，你可以根据你自己的需要选定不同的模块：

```
Device Drivers->USB support[*]
Device Drivers->USB support->Support for Host-side USB[M]
Device Drivers->USB support->Enable USB persist by default[*]
Device Drivers->USB support->USB Modem (CDC ACM) support[M]
Device Drivers->USB support->USB Mass Storage support[M]
Device Drivers->USB support->USB/IP support[M]
Device Drivers->USB support->VHCI hcd[M]
Device Drivers->USB support->VHCI hcd->Number of ports per USB/IP virtual host controller(8)
Device Drivers->USB support->Number of USB/IP virtual host controllers(1)
Device Drivers->USB support->USB Serial Converter support[M]
Device Drivers->USB support->USB Serial Converter support->USB FTDI Single Port Serial Driver[M]
Device Drivers->USB support->USB Physical Layer drivers->NOP USB Transceiver Driver[M]
Device Drivers->Network device support->USB Network Adapters[M]
Device Drivers->Network device support->USB Network Adapters->[Deselect everything you don't care about]
Device Drivers->Network device support->USB Network Adapters->Multi-purpose USB Networking Framework[M]
Device Drivers->Network device support->USB Network Adapters->CDC Ethernet support (smart devices such as cable modems)[M]
Device Drivers->Network device support->USB Network Adapters->Multi-purpose USB Networking Framework->Host for RNDIS and ActiveSync devices[M]
```

开始编译内核！如果你的电脑拥有多个 CPU 核心，可以通过命令行设置 `-j <核心数量>` 来执行多核编译，大大加快编译速度。这一步骤将会持续较长时间，下面命令中我们使用的核心数量为 12：

```shell
sudo make -j 12 && sudo make modules_install -j 12 && sudo make install -j 12
```

编译完成后我们将会看到我们都安装了哪些内核模块，我自己的模块列表如下：

```
INSTALL drivers/hid/hid-generic.ko
INSTALL drivers/hid/hid.ko
INSTALL drivers/hid/usbhid/usbhid.ko
INSTALL drivers/net/mii.ko
INSTALL drivers/net/usb/cdc_ether.ko
INSTALL drivers/net/usb/rndis_host.ko
INSTALL drivers/net/usb/usbnet.ko
INSTALL drivers/usb/class/cdc-acm.ko
INSTALL drivers/usb/common/usb-common.ko
INSTALL drivers/usb/core/usbcore.ko
INSTALL drivers/usb/serial/ftdi_sio.ko
INSTALL drivers/usb/phy/phy-generic.ko
INSTALL drivers/usb/serial/usbserial.ko
INSTALL drivers/usb/storage/usb-storage.ko
INSTALL drivers/usb/usbip/usbip-core.ko
INSTALL drivers/usb/usbip/vhci-hcd.ko
DEPMOD  4.19.43-microsoft-standard
```

编译 USBIP 工具：

```shell
$ cd tools/usb/usbip
$ sudo ./autogen.sh
$ sudo ./configure
$ sudo make install -j 12
```

将 USBIP 工具库复制到 USBIP 可以访问到的位置：

```shell
$ sudo cp libsrc/.libs/libusbip.so.0 /lib/libusbip.so.0
```

在我们的个人文件夹 `$HOME` 下新建一个脚本叫做 `startusb.sh` 用来 modprobe 全部驱动，**确保先 modprobe `usbcore` 和 `usb-common` 这两个模块：**

```bash
#!/bin/bash
sudo modprobe usbcore
sudo modprobe usb-common
sudo modprobe hid-generic
sudo modprobe hid
sudo modprobe usbnet
sudo modprobe cdc_ether
sudo modprobe rndis_host
sudo modprobe usbserial
sudo modprobe usb-storage
sudo modprobe cdc-acm
sudo modprobe ftdi_sio
sudo modprobe usbip-core
sudo modprobe vhci-hcd
echo $(cat /etc/resolv.conf | grep nameserver | awk '{print $2}')
```

其中，最后一行告诉我们 Windows 主机的 IP 地址，这一 IP 地址在我们向 Windows 设备中插入 USB 设备时会起到作用。另外，如果你遇到类似 `/bin/bash^M: bad interpreter: No such file or directory` 的报错信息，可能是因为你的脚本文件的换行符是 CRLF 而非 LF。

把我们新建的脚本文件赋予可执行权限：

```shell
$ sudo chmod +x startusb.sh
```

在 Windows PowerShell 中重启 WSL：

```powershell
$ wsl --shutdown
```

再次进入 WSL，并执行刚刚的脚本：

```shell
$ ./startusb.sh
```

在 `dmesg` 中检测确保我们所有的 USB 驱动都载入成功：

```shell
$ sudo dmesg
```

好了，太棒了我的老弟，你成功给 WSL 添加了 USB 支持。

## 使用 USBIP-Win 和 Linux 侧的 USBIP

首先在 Windows 侧，在 PowerShell 中执行下面的命令将列出 Windows 设备上插入的 USB 设备列表：

```powershell
$ usbip list -l
```

我想要绑定的 USB 设备的 `busid` 是 1-220，我们可以用下面的命令将 1-220 设备绑定给 USBIP：

```powershell
$ usbip bind --busid=1-220
```

之后我们启动 USBIP 守护程序（USBIP daemon）：

```powershell
# 开启 debug 模式与否都可以，用 --debug 开启 debug 模式可以查看更多日志信息
$ usbipd --debug
```

接下来，在 WSL 中，使用下面的命令来查看可供使用的 USB 设备列表，其中的 `172.30.64.1` 即为前面我们拿到的 Windows 主机的 IP 地址：

```shell
$ sudo usbip list --remote=172.30.64.1
```

我们想要连接的 USB 设备的 `busid` 依旧是 1-220，用以下命令连接：

```shell
$ sudo usbip attach --remote=172.30.64.1 --busid=1-220
```

经过上面的操作，我们就应该在 WSL 侧成功连接 Windows 上插入的 USB 设备了。用 `dmesg` 检测一切正常工作：

```shell
$ sudo dmesg
```

## FAQ

### 本文的方法有什么限制？

以上介绍的方法：

- 是无法直接绑定组合设备的子设备的，我们如果连接组合设备的话，需要直接绑定主设备；
- 是无法连接 USB Hub 的，各种 USB 集线器都无法使用；

### 我如何重新在 Windows 上访问我的 USB 设备？

如果我们要断开 WSL 侧的 USB 设备绑定（来重新在 Windows 侧访问 USB 设备），则需要：

- 在 Windows 中进入「设备管理器」；
- 找到系统设备下的 USB/IP STUB 设备；
- 右键点击，选择「更新驱动」；
- 点击「浏览我的电脑以查找驱动程序」；
- 选择「让我从计算机上的可用驱动程序列表中选取」；
- 最后选择我们之前在 Windows 上连接 USB 设备用的驱动；

### USBIP-Win 无法连接我的 USB 设备怎么办？

有的时候 USBIP 在 Windows 上面无法连接一个 USB 设备，这时候我们可以尝试将这一设备更换一个插口，重新用 USBIP 连接绑定。绑定之后我们可以将 USB 设备插回原先的插口，因为「USBIP 的绑定关系」在连接、断开的生命周期中是持久化的。

### USBIP-Win 不显示我的 USB 组合设备怎么办？

我之前出现过这样的情况：在 Windows 侧无法在 USBIP 的列表中显示组合设备，此时我们可以用下面的方法解决：

- 下载安装 [Zadig](https://zadig.akeo.ie/)；
- 进入设置并选择「显示全部设备 List All Devices」，并取消选择「忽略 Hub 或组合设备主设备 Ignore Hubs or Composite Parents」；
- 选择我们连接的 USB 组合设备；
- 安装 libusbK 驱动；
- 之后我们就可以在 USBIP 列表中看到我们的设备了；

我也不知道这个情况具体是什么导致的，可能是因为 Windows 默认的 USB 驱动拿到的 USB 组合设备无法让 USBIP-Win 访问，但是安装 libusbK 可以解决这个问题。USBIP-Win 本质上会用 USBIP-Win 的驱动覆盖掉 libusbK 驱动，所以我们可以选择任何 USB 驱动（而非 libusbK 单独一个驱动）。不论是什么原因，这个问题都是 USBIP-Win 需要解决的 bug。
