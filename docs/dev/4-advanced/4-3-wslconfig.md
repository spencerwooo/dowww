# 配置 WSL 2 全局选项 <a href="https://github.com/Diffumist"><BlueBadge text="@Diffumist" vertical="middle"/></a>

::: callout 📟 版本限制
请注意，这些配置可在 Windows Build 19041 及以后版本中使用，且仅限 WSL 2。
:::

你可以通过将 `.wslconfig` 文件放置在用户文件夹的根目录下（即 `C:\Users\<YourUserName>\.wslconfig`）来配置全局 WSL 选项。此文件中许多配置与 WSL 2 有关，你需要运行 `wsl --shutdown` 来关闭 WSL 2 虚拟机，重启 WSL 2 ，以确保这些配置生效。

一个 `.wslconfig` 文件的示例：

```ini
[wsl2]
# 自定义 Linux 内核的绝对路径
kernel=<path>
# 给 WSL 2 虚拟机分配的内存大小
memory=<size>
# 为 WSL 2 虚拟机分配的处理器核心数量
processors=<number>
# 为 WSL 2 虚拟机分配的交换空间，0 表示没有交换空间
swap=<size>
# 自定义交换虚拟磁盘 vhd 的绝对路径
swapFile=<path>
# 是否允许将 WSL 2 的端口转发到主机（默认为 true）
localhostForwarding=<bool>

# `<path>` 必须是带反斜杠的绝对路径，例如 `C:\\Users\\kernel`
# `<size>` 必须在后面加上单位，例如 8 GB 或 512 MB
```

可以自行写入需要的配置，不需要的配置即为默认值，以下是该文件所包含的配置选项，这些设置会影响所有的 WSL 2 发行版。

| 键 | 值类型 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- |
| kernel | string | 微软默认提供的 WSL 内核 | 连接到自定义 Linux 内核的绝对路径 |
| memory | size | Windows 总内存的 80% | 给 WSL 2 虚拟机分配的内存大小 |
| processors | number | 在 Windows 上的处理器核心数量相同 | 为 WSL 2 虚拟机分配的处理器核心数量 |
| localhostForwarding | boolean | `true` | 是否通过 localhost:port 将绑定到 WSL 2 虚拟机中的通配符或 localhost 的端口连接到主机 (允许 WSL 2 的端口转发到主机) |
| kernelCommandLine | string | 无参数 | 额外的内核命令行参数 |
| swap | size | Windows 上内存大小的 25% | 为 WSL 2 虚拟机分配的交换空间，0 表示没有交换空间 |
| swapFile | string | `%USERPROFILE%\AppData\Local\Temp\swap.vhdx` | 交换虚拟磁盘 vhd 的绝对路径 |

更多有关 `.wslconfig` 的配置，请参考官方文档：[Configure global options with .wslconfig](https://docs.microsoft.com/en-us/windows/wsl/wsl-config#configure-global-options-with-wslconfig).
