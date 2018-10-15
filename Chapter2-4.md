# GUI 图形化窗口

> 虽然上面的方案有时候能够解决问题，但是最为深度整合的方案是：在 WSL 侧的 Linux 环境下安装 VSCode 并从 Linux 侧打开，这样就一定能保证 VSCode 使用的工具链全部是 WSL 侧工具链了。
> 
> 方案：安装一个 XServer 来让 Linux 侧 GUI 程序有窗口显示。

## 安装 XServer for windows

- 推荐安装 [VcXsrv Windows X Server](https://sourceforge.net/projects/vcxsrv/)，并以这样的配置打开：

![img](https://i.loli.net/2018/10/01/5bb1c9d292ce0.jpg)

- 在 WSL 中安装必要组件：

```shell
sudo apt install libgtk2.0-0 libxss1 libasound2
```

- 配置 WSL 参数：

```shell
echo 'export DISPLAY=:0.0' >> .profile
```

- 安装一个小眼睛，看看图形窗口安装成功没有：

```shell
sudo apt install x11-apps -y && xeyes
```

![img](https://i.loli.net/2018/10/01/5bb1cc9565f02.png)

如果出现了这样的小眼睛盯着你的鼠标看，那么说明我们的 XServer 安装成功了。

## 在 WSL 侧安装 Visual Studio Code

- 添加 Visual Studio Code 库：

```shell
curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg
sudo mv microsoft.gpg /etc/apt/trusted.gpg.d/microsoft.gpg
sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'
```

- 安装 Visual Studio Code：

```shell
sudo apt update && sudo apt upgrade
sudo apt install code
```

- 打开 XServer 窗口，在 WSL 终端执行 `code`，应该就可以看到 WSL 中的 VSCode 窗口启动了。