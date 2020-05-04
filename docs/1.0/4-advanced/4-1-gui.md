# GUI 图形化窗口

<!-- <div align="center"><img src="https://i.loli.net/2018/10/17/5bc6e46095239.png" alt="GUI" width="20%"/></div> -->

:::callout 🍋 本文内容
WSL 是一个完全的「终端」命令行环境，默认情况下是没有窗口程序的。但并不是所有在 WSL 上运行的应用程序都能在「无窗口」环境下运行，也不是所有的开发工具都能像 VS Code 一样利用 Remote 远程开发插件连接，从而提供一个近似原生的开发体验。这时候，**我们就需要为 WSL 提供一个 GUI 环境**，来运行需要窗口的应用程序。
:::

## 安装 XServer for windows

- 推荐安装 [VcXsrv Windows X Server](https://sourceforge.net/projects/vcxsrv/)，并以这样的配置打开：

![](https://i.loli.net/2018/10/01/5bb1c9d292ce0.jpg)

- 在 WSL 中安装必要组件：

```bash
sudo apt install libgtk2.0-0 libxss1 libasound2
```

- 配置 WSL 参数：

```bash
echo 'export DISPLAY=:0.0' >> .profile
```

- 安装一个小眼睛，看看图形窗口安装成功没有：

```bash
sudo apt install x11-apps -y && xeyes
```

![](https://i.loli.net/2018/10/01/5bb1cc9565f02.png)

如果出现了这样的小眼睛盯着你的鼠标看，那么说明我们的 XServer 安装成功了。

## 在 WSL 环境中安装 VS Code

- 添加 Visual Studio Code 库：

```bash
curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg
sudo mv microsoft.gpg /etc/apt/trusted.gpg.d/microsoft.gpg
sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'
```

- 安装 Visual Studio Code：

```bash
sudo apt update && sudo apt upgrade
sudo apt install code
```

- 打开 XServer 窗口，在 WSL 终端执行 `code`，应该就可以看到 WSL 中的 VS Code 窗口启动了
- 如果出现运行 `code` 命令报错，提示缺少 `libx11-xcb1` 库，那么按照下面的方法安装即可：

```bash
sudo apt install libx11-xcb1
```

![](https://i.loli.net/2020/01/06/inUPZt7eWjxYNAX.png)

## 其他应用

上面安装 VS Code 仅仅是一个 Proof of concept，来证明我们能够真的从 WSL 环境下启动「窗口程序」。接下来，我们可以借助于 XServer 来让 WSL 中安装的任意其他工具拥有 GUI 窗口。比如：Intellij IDEA、Android Studio 等程序。
