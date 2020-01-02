# Shell 环境

## 准备

为了加速 Ubuntu 18.04 软件包在中国大陆的下载速度，我们将包管理工具 `apt` 源更换至中科大镜像源：

::: warning 注意
替换内容前记得备份文件：

```bash
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bac
```
:::

将 `/etc/apt/sources.list` 文件内容前面添加如下内容：

```bash
deb https://mirrors.ustc.edu.cn/ubuntu/ bionic main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic main restricted universe multiverse

deb https://mirrors.ustc.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-security main restricted universe multiverse

deb https://mirrors.ustc.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse

deb https://mirrors.ustc.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse

## Not recommended
# deb https://mirrors.ustc.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
# deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
```

然后更新缓存：`sudo apt update && sudo apt upgrade`

更多详细内容请见：[LUG@USTC | Ubuntu 镜像使用帮助](https://lug.ustc.edu.cn/wiki/mirrors/help/ubuntu)

## bash

下载安装的 Windows Subsystem for Linux 默认就是 `bash` 的终端环境。`bash` 是 `Unix shell` 的一种，是我们开发环境的基础。

> 参考：[Shell、Terminal 和 Console 的区别。](https://unix.stackexchange.com/questions/4126/what-is-the-exact-difference-between-a-terminal-a-shell-a-tty-and-a-con)

## zsh & oh-my-zsh

### 配置 zsh

下载安装 `zsh` 代替自动补全功能欠缺的 `bash`：

- 利用 Ubuntu 的包管理器安装 `zsh`：`sudo apt install zsh`
- 使用 `zsh` 作为默认的 Shell 环境：

```bash
sudo chsh -s $(which zsh)
```

下载安装 [`oh-my-zsh`](https://ohmyz.sh/)，一个好用的 `zsh` 配置管理工具：

- 运行命令下载安装：`sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"`

### 解决光标位置无法正确显示的问题

由于 Windows 下所有终端都尚未很好的 **支持全角（Double width）的 Unicode 字体**，因此 `oh-my-zsh` 默认主题 `robbyrussell` 在 Hyper 终端下会出现光标位置不正确的问题（见 [Issue #5](https://github.com/spencerwooo/dowww/issues/5))。解决方法：

#### 1. 修改终端显示内容

- 在 `~/.oh-my-zsh/themes` 目录下打开 `oh-my-zsh` 默认主题文件：`robbyrussell.zsh-theme`，将其中的全角 Unicode 字符「➜」更改为其他字符（比如「>」或者「→」）
- 加载设置：`source ~/.zshrc`

需要注意的是，很多 `oh-my-zsh` 主题（包括 [更加酷炫的 `Powerlevel9k` 主题包](https://github.com/bhilburn/powerlevel9k)）都用到了上文提到的 Powerline Fonts 和 Nerd Fonts，而这些字形在 Windows 任何终端下都没有很好的支持，因此目前一个很好的解决方法是：

- 将酷炫的命令前部分放在一行单独显示
- 将需要输入的带有光标的命令部分放在第二行显示

![](https://user-images.githubusercontent.com/32114380/50538113-00a78a00-0ba5-11e9-8a7a-db8d709e8d88.png)

比如：如果你使用了 [Powerlevel9k 主题包](https://github.com/bhilburn/powerlevel9k)，可以考虑将下面的内容加入 `.zshrc` 来实现命令单独在第二行的显示：

```shell
# 让命令主体单独在第二行显示
POWERLEVEL9K_PROMPT_ON_NEWLINE=true
# 让右侧命令不显示（右侧命令同样无法正常在 Windows 下渲染）
POWERLEVEL9K_DISABLE_RPROMPT=true
# 上文截图中的两行命令前部字符的配置
POWERLEVEL9K_MULTILINE_FIRST_PROMPT_PREFIX="╭"
POWERLEVEL9K_MULTILINE_LAST_PROMPT_PREFIX="╰\u276F\u276F\u276F "
```

这样配置之后，终端中的光标位置就不会出现错位问题了，同时也不影响终端的炫酷和易用。🍻

#### 2. 修改 Windows 终端为 UTF-8 环境

Windows 终端输出错位、光标错位的根本原因在于 Windows 终端默认并非是 UTF-8 的环境（至少中文默认环境下不是）。我们可以通过下面的方法保证 Windows 终端环境为 UTF-8 的编码方式：

- 首先，在「控制面板 → 区域」，选择「非 Unicode 程序语言设置」，更改为「英语」，并勾选下方「Beta：使用 Unicode UTF-8 支持全球语言」的选项

![](https://i.loli.net/2019/04/08/5cab126f55e54.png)

- 之后，在 PowerShell 终端中输入 `chcp 65001`，切换为 UTF-8 代码页

理论上，你就可以成功将 Windows 全部终端环境切换为 UTF-8 的编码格式了。也就是说，就算是下面带有左右 Prompt 的 Powerlevel9k 配置，你的终端显示都是正确无误的，光标位置也是符合预期的。

![](https://i.loli.net/2019/04/08/5cab1506db02b.png)

但是这种方法比较玄学，因此如果你并没有成功解决问题，还请使用第一种办法。

更多配置可以参考我的 [`dotfiles`](https://github.com/spencerwooo/dotfiles) 里面 [`_wsl_zshrc`](https://github.com/spencerwooo/dotfiles/blob/master/_wsl_zshrc) 的部分内容。折腾愉快！

## 解决 `ls` 和 `cd` 命令后背景色问题

简单来说，由于 DrvFs 文件系统的权限问题，导致了 Windows 原有 NTFS 文件系统中的文件到 WSL 下权限全部变成 0777。这样在 WSL 中执行 `ls` 和 `cd` 命令之后，显示出来的结果背景色就会出现问题。

> 感谢 [@printempw](https://github.com/printempw) 提供的从根源解决这个问题的方式。由于 DrvFs 文件权限问题导致出现有问题的背景色根本原因在于这里 > [DrvFs 文件权限问题](https://blessing.studio/wsl-guide/#6-6-DrvFs-%E6%96%87%E4%BB%B6%E6%9D%83%E9%99%90%E9%97%AE%E9%A2%98)。

### 如果不想对文件系统的权限进行修改

- 可以在 `.zshrc` 最尾部添加如下代码

```bash
# Change ls colours
LS_COLORS="ow=01;36;40" && export LS_COLORS

# make cd use the ls colours
zstyle ':completion:*' list-colors "${(@s.:.)LS_COLORS}"
autoload -Uz compinit
compinit
```

- 加载设置：`source ~/.zshrc`

### 如果希望从根本上解决 DrvFs 文件系统的权限问题

> 以下内容来自 [@printempw](https://github.com/printempw) 提供的这篇文章 > [DrvFs 文件权限问题](https://blessing.studio/wsl-guide/#6-6-DrvFs-%E6%96%87%E4%BB%B6%E6%9D%83%E9%99%90%E9%97%AE%E9%A2%98)。

- 在 WSL 中创建 `/etc/wsl.conf`，在其中填写如下内容：

```
[automount]
enabled = true
root = /mnt/
options = "metadata,umask=22,fmask=111"
mountFsTab = true
```

- 重启终端，所有的盘符就会使用上面的配置自动挂载（可以使用 `mount -l` 查看）

另外，如果你想要给不同的盘符设定不同的挂载参数（上面的方法对所有盘符都有效，如果你想在 WSL 中运行 Windows 下的应用程序，就得每次都 `chmod +x` 一下，所以我一般都会把 C: 排除掉），就需要手动修改 `/etc/fstab`。首先确保 `wsl.conf` 中的 `mountFsTab` 为 `true`，然后编辑 `/etc/fstab`，添加如下内容：

```
# 不在此列表中的盘符会使用 wsl.conf 中的参数挂载
# 格式可以自己去查 fstab 的帮助文档
E: /mnt/e drvfs rw,relatime,uid=1000,gid=1000,metadata,umask=22,fmask=111 0 0
```

基本的终端环境就到这里了。

💡 推荐安装 `zsh` 组件：[zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)。
