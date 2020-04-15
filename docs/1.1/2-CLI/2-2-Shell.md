# Shell 环境

::: callout 🍌 本文内容
本文中我们将对 WSL 的 Shell 环境进行配置。这里面包括默认 `bash` 的配置，更用户友好的 `zsh`、`fish` 的配置以及一些常见问题的解决办法等。
:::


## 更换软件源镜像

为了加速 Ubuntu 软件包在中国大陆的下载速度，我们将包管理工具 `apt` 源更换至清华 TUNA 软件源镜像。Ubuntu 的软件源配置文件是 `/etc/apt/sources.list`。将系统自带的该文件做个备份，将该文件替换为下面内容，即可使用 TUNA 的软件源镜像。

- 备份原文件：

```bash
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bac
```

- 在配置文件 `/etc/apt/sources.list` 最前面添加下面的内容：

```bash
# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-security main restricted universe multiverse

# 预发布软件源，不建议启用
# deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
```

- 更新缓存：

```bash
sudo apt update && sudo apt upgrade
```

更多内容请参考：[Ubuntu 镜像使用帮助 - 清华大学开源软件镜像站](https://mirror.tuna.tsinghua.edu.cn/help/ubuntu/)

## APT

APT - Ubuntu's Advanced Packaging Tool 是 Ubuntu 默认包管理工具。使用 Ubuntu 等 Linux 发行版时，我们往往都会使用 APT 等相似的包管理工具来安装、更新我们的软件包。命令 `apt` 和 `apt-get` 与 APT 不同，它们是用来和 APT 进行交互的高层命令执行工具。请大家清楚二者的区别。

其中，在 Ubuntu 16.04 中 Ubuntu 引入了 `apt` 命令来代替曾经老用户熟悉的 `apt-get`，提供了更用户友好的操作和命令行界面，对软件包 cache 缓存的处理也更为优雅。这里我推荐大家使用 `apt` 命令来与 APT 包管理工具交互，安装、管理和更新软件和依赖，接下来的文档中，我也都会使用 `apt` 命令进行介绍。

**推荐阅读：**[Difference Between apt and apt-get Explained - It's FOSS](https://itsfoss.com/apt-vs-apt-get-difference/)

## bash

下载安装的 Windows Subsystem for Linux 默认就是 `bash` 的 Shell 环境。`bash` 是 Unix shell 的一种，是我们开发环境的基础。不过 `bash` 本身仅提供一个非常基础的命令行交互功能，没有类似 `zsh` 或 `fish` 等 Shell 的自动补全、命令提示等高阶功能。因此，这里推荐大家继续阅读，安装 `zsh` 或 `fish` 来替代 `bash`。

`zsh` 和 `fish`，都是 Unix-like 系统中不可或缺的好 Shell，它们都极大的拓展了我们命令行界面的交互体验。在命令行的世界中：

- `fish` 更加注重「开箱即用」的体验，让我们安装完成即拥有一个包含了命令高亮、自动补全等强大功能的 Shell 环境
- `zsh` 则更加重视拓展性，借助于社区中优秀的 `zsh` 插件系统 oh-my-zsh 以及无数优秀的插件，`zsh` 同样能有比肩 `fish` 甚至比 `fish` 更高阶的功能和体验

同学们可以根据自己实际情况，在这两个 Shell 中二选一即可。**在之后的文档中，我会用 zsh 作为默认的 Shell 进行介绍。**

**推荐阅读：**[为什么说 zsh 是 shell 中的极品？ - 韦易笑的回答 - 知乎](https://www.zhihu.com/question/21418449/answer/300879747)。

## zsh

### 安装、配置

安装 `zsh` 并将之设置为默认 Shell：

- 利用 apt 安装 `zsh`

```bash
sudo apt install zsh
```

下载安装 [oh-my-zsh](https://ohmyz.sh/)，可能是市面上最好的 `zsh` 配置管理工具：

- 运行命令下载安装

```bash
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

![](https://i.loli.net/2020/01/04/eExvWYtpKfNmwA5.png)

- 将 `zsh` 作为默认的 Shell 环境（如果刚刚安装脚本没有这样做的话）：

```bash
chsh -s $(which zsh)
```

### 插件、主题模板推荐

`zsh` 拥有相当丰富的主题、插件等拓展内容，这里我仅列举一些我常用的配置插件和主题模板：

#### 插件

![](https://i.loli.net/2020/01/04/ji165ZrSAFhWeGQ.png)

- [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)：为 `zsh` 提供基于输入历史的自动命令提示
- [autojump](https://github.com/wting/autojump)：快速跳转不同的目录、路径、文件夹
- [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting)：为 `zsh` 命令提供色彩高亮

#### 主题模板

![](https://i.loli.net/2020/01/04/gaIPd2Zkmxw9yUp.png)

- [starship - The cross-shell prompt for astronauts](https://starship.rs/)
- [powerlevel10k - A fast reimplementation of Powerlevel9k ZSH theme](https://github.com/romkatv/powerlevel10k)

主题模板和插件的安装在它们各自的文档中都有详细的介绍，这里不再赘述。

## fish

开箱即用的 `fish` 无需安装以上 `zsh` 中繁琐的插件就能拥有几乎全部上面提到的功能。如果你觉得 `zsh` 的配置繁琐无趣，那么 `fish` 可能更符合你的口味。

### 安装 fish

同样使用 Ubuntu 包管理工具安装 `fish`：

```bash
sudo apt install fish
```

将 `fish` 作为默认 Shell：

```bash
chsh -s $(which fish)
```

### 配置

![](https://i.loli.net/2020/01/04/R7uBaJeKgznVqcf.png)

未经任何配置的 `fish` 即直接支持了诸多优秀的命令行交互特性。上图的例子中，我们可以看到 `fish` 开箱自带的几个功能：

- 输入命令的实时高亮，错误命令标红
- 历史命令的记忆，对输入命令的实时补全
- 对 `*.png` 等通配符（Wildcard character）的支持
- 相对 decent 的命令提示符（Prompt）

`fish` 的配置文件位于 `~/.config/fish/config.fish`，这一文件之于 `fish` 就像 `.zshrc` 之于 `zsh`、`.bashrc` 之于 `bash` 一样。

有关 `fish` 的配置方法推荐大家查看其官方文档：[fish tutorial - fish shell](https://fishshell.com/docs/current/tutorial.html)

## 常见问题

### 解决字符渲染问题

由于 Windows 下的终端们，除了微软自己开发的 Windows Terminal 外，都尚未很好的支持全角（Double width）的 Unicode 字体渲染，因此 oh-my-zsh 默认主题 robbyrussell 在某些终端（比如 Hyper）下会出现光标位置不正确的问题（见 [Issue #5](https://github.com/spencerwooo/dowww/issues/5))。目前有这样的几种解决方法：

#### 使用 Windows Terminal

最方便、理智、没有妥协的方法：使用 Windows Terminal。🤣

![](https://i.loli.net/2020/01/04/eIiLFwgWKGay1U8.png)

最新的 Windows Terminal 在底层修改了字符的渲染方式，采取最新的渲染引擎，拥有最好的性能和最美的 UI，能够支持几乎全部字符的渲染（甚至包括 Emoji），我认为没有不选择直接使用 Windows Terminal 的理由。

如果你一定要使用非 Windows Terminal 的终端来进入 WSL 的话，下面两个方法可能可以解决你的问题。

#### 修改终端显示内容

对 oh-my-zsh 默认主题文件 robbyrussell 来说：

- 在 `~/.oh-my-zsh/themes` 目录下打开 oh-my-zsh 默认主题文件：`robbyrussell.zsh-theme`，将其中的全角 Unicode 字符「➜」更改为其他字符（比如「>」或者「→」）
- 加载设置：`source ~/.zshrc`

需要注意的是，很多 `oh-my-zsh` 主题（包括 [更加酷炫的 `Powerlevel9k` 主题包](https://github.com/bhilburn/powerlevel9k)）都用到了上文提到的 Powerline Fonts 和 Nerd Fonts，而这些字形在 Windows 任何终端下都没有很好的支持，因此目前一个很好的解决方法是：

- 将酷炫的命令前部分放在一行单独显示
- 将需要输入的带有光标的命令部分放在第二行显示

![](https://user-images.githubusercontent.com/32114380/50538113-00a78a00-0ba5-11e9-8a7a-db8d709e8d88.png)

比如：如果你使用了 [Powerlevel9k 主题包](https://github.com/bhilburn/powerlevel9k)，可以考虑将下面的内容加入 `.zshrc` 来实现命令单独在第二行的显示：

```bash
# 让命令主体单独在第二行显示
POWERLEVEL9K_PROMPT_ON_NEWLINE=true
# 让右侧命令不显示（右侧命令同样无法正常在 Windows 下渲染）
POWERLEVEL9K_DISABLE_RPROMPT=true
# 上文截图中的两行命令前部字符的配置
POWERLEVEL9K_MULTILINE_FIRST_PROMPT_PREFIX="╭"
POWERLEVEL9K_MULTILINE_LAST_PROMPT_PREFIX="╰\u276F\u276F\u276F "
```

这样配置之后，终端中的光标位置就不会出现错位问题了，同时也不影响终端的炫酷和易用。🍻

#### 修改 Windows 终端为 UTF-8 环境

Windows 终端输出错位、光标错位的根本原因在于 Windows 终端默认并非是 UTF-8 的环境（至少中文默认环境下不是）。我们可以通过下面的方法保证 Windows 终端环境为 UTF-8 的编码方式：

- 首先，在「控制面板 → 区域」，选择「非 Unicode 程序语言设置」，更改为「英语」，并勾选下方「Beta：使用 Unicode UTF-8 支持全球语言」的选项

![](https://i.loli.net/2019/04/08/5cab126f55e54.png)

- 之后，在 PowerShell 终端中输入 `chcp 65001`，切换为 UTF-8 代码页

理论上，你就可以成功将 Windows 全部终端环境切换为 UTF-8 的编码格式了。也就是说，就算是在 Fluent Terminal 中显示下面带有左右 Prompt 的 Powerlevel9k 配置，你的终端显示都是正确无误的，光标位置也是符合预期的。

![](https://i.loli.net/2019/04/08/5cab1506db02b.png)

但是这种方法比较玄学，因此如果你并没有成功解决问题，还请使用第一种办法。与此同时，这种方法也可能对中文环境下的一些程序造成显示乱码的问题，就我遇到的问题来说：TIM（QQ 办公简洁版客户端）的输入框显示字体从微软雅黑变成了中易宋体，另外一些个人开发者的应用程序（比如酷安 @晨钟酱 开发的多亲 AI 工具箱）完全乱码。请大家谨慎操作。

### 解决 `ls` 命令背景色问题

::: callout 🔋 贡献
感谢 [@printempw](https://github.com/printempw) 提供的从根源解决这个问题的方式。由于 DrvFs 文件权限问题导致出现有问题的背景色根本原因在于这里：[DrvFs 文件权限问题](https://printempw.github.io/wsl-guide/#6-6-DrvFs-%E6%96%87%E4%BB%B6%E6%9D%83%E9%99%90%E9%97%AE%E9%A2%98)。
:::

![](https://i.loli.net/2020/01/04/YT6ISrf7Nd2eHjM.png)

可以发现，上面我们在 Linux 自己的文件系统中时，`ls` 命令的输出没什么问题，但是当我们在 WSL 中进入 Windows 文件系统中时，`ls` 命令输出则变成了白底绿色背景。简单来说，这是由于 DrvFs 文件系统的权限问题，导致 Windows 原有 NTFS 文件系统中的文件到 WSL 下权限全部变成 0777。这样在 WSL 中执行 `ls` 和 `cd` 命令之后，显示出来的结果背景色就会出现「问题」。（不过，事实上这是有意而为之的。）

#### 如果不想对文件系统的权限进行修改

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

#### 如果希望从根本上解决 DrvFs 文件系统的权限问题

> 以下内容来自 [@printempw](https://github.com/printempw) 提供的这篇文章 > [DrvFs 文件权限问题](https://printempw.github.io/wsl-guide/#6-6-DrvFs-%E6%96%87%E4%BB%B6%E6%9D%83%E9%99%90%E9%97%AE%E9%A2%98)。

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
