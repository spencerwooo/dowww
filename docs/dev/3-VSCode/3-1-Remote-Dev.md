# Remote 开发

VS Code 远程开发组件包（VS Code Remote Development）允许 VS Code 将一个远程服务器上的环境、一个虚拟化容器中的环境或我们的 WSL 环境作为一个「全功能的开发环境」来使用。这里，我们将重点关注利用 VS Code 远程开发组件包让 VS Code 和 WSL 连接并直接开发的配置方法。

![](https://i.loli.net/2020/01/06/8rZI9xgOyQ6kHM7.png)

## 安装 Remote 开发插件

![](https://i.loli.net/2020/01/06/CuDTF2EIO59Hl68.png)

VS Code 远程开发组件包由：

- [Remote - WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl)：将 VS Code 连接至 WSL 环境中进行开发
- [Remote - SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh)：利用 SSH 将 VS Code 连接至远程服务器进行开发
- [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)：将 VS Code 连接至虚拟容器环境进行开发

三个插件组成。我们可以直接搜索 Remote Development 一起安装，或者如果我们只安装 Remote - WSL 也可以。安装之后，我们就会看到 VS Code 左下角出现了 <code><sub>></sub><sup><</sup></code> - Open a remote window 的按钮。

![](https://i.loli.net/2020/01/06/wI8Oh7NVWUfK2z3.png)

如果你在左下角选择 Remote 环境中选择了「Remote-WSL: New Window」，VS Code 会默认开启一个 Remote 环境的新窗口，之后会在其中下载必要的 VS Code Server，用来沟通 Remote 环境和本机环境。

![](https://i.loli.net/2019/05/13/5cd960502089983105.png)

上面就是 VS Code Server 在 WSL 环境中的下载过程，之后我们 VS Code 的新窗口就处于 WSL 环境中了。

## 在 WSL 环境中安装插件

需要了解的重要的一点是：**VS Code 在 Remote 插件下的使用和在本机下的使用实际上是两个环境**，大部分插件并不共享。因此，我们在 VS Code 中进入 WSL 的 Remote 环境下之后，所下载的插件也都是在这个环境下才能使用的。

![](https://i.loli.net/2020/01/06/xUhZR1kXcBqPVKG.png)

可以看到，Beautify 这一插件我在 Windows 的 Local 环境下已经安装，但是并未在 WSL 环境下安装，因此插件上出现了 Install on WSL: Arch 的选项。

同时，在 VS Code 插件侧边栏中：VS Code 为我们区分了本机 Local 环境中安装的插件，和 WSL Remote 环境下安装的插件。不过，值得注意的是，本地安装的配色、图标主题等插件我们也是可以直接使用的。

## 访问 WSL 环境中的项目

连接到 WSL 环境下的 VS Code 可以直接打开 Linux 文件系统中的文件夹、目录、文件等。进入 WSL 环境中之后，我们可以点击 VS Code 左上角 File > Open File 或 Open Folder，之后在弹出的下拉菜单中选择 Linux 文件系统里面的目录、文件……即可。

![](https://i.loli.net/2020/01/06/73QW6smYNVSpOkg.png)

最新的 Remote 开发组件包还包括了 Remote Explorer，在 VS Code 的 Activity Bar - 功能栏中，我们可以点击 Remote Explorer 直接访问远程资源。（也就是 WSL 文件资源。）

![](https://i.loli.net/2020/01/06/bOnuUMg8HZYKBa6.png)

VS Code 同样支持在 WSL 环境下的终端中直接用命令 `code` 打开的文件、文件夹，这种方法会直接唤起连接至相应 WSL 环境的 VS Code 实例。

![](https://i.loli.net/2020/01/06/o5jgCDsabk2icZS.png)

## 环境集成

![](https://i.loli.net/2020/01/06/GCJnxcVNBylX2TM.png)

### 集成终端

在 WSL 环境下打开的 VS Code 集成终端唤起的是 WSL 默认 Shell，无需配置即可直接使用。^[[Dev on Windows with WSL - Shell 环境](/dev/2-Toolchain/2-2-Shell.html)]

### 版本控制

同样，WSL 环境中打开的 VS Code 使用的版本控制 Git 也是 WSL 中的 Git，无需配置即可直接使用。^[[Dev on Windows with WSL - 版本控制](/dev/2-Toolchain/2-3-Others.html#版本控制)]
