---
prev: /2-Toolchain/
next:
sidebarDepth: 4
---

![](https://i.loli.net/2019/05/13/5cd96b08b7f1f38773.png)

# Visual Studio Code

:::tip TIP
以下步骤适用于 Windows 这边安装的 Visual Studio Code。2019 年 6 月的今天，我不仅因为 [这里陈述的理由](https://sspai.com/post/47719) 推荐 VS Code，更因为 VS Code Stable 已经通过 Remote 插件家族直接支持了 WSL 下的开发调试。一句话：如果你希望使用 WSL 作为你的主要开发环境，请直接考虑 VS Code。
:::

## 下载

::: warning WARNING
请注意，在 Windows 侧安装过程中务必：

1. 安装至 C 盘（否则会有路径与访问权限的问题）
2. 在「选择其他任务」界面勾选「其他」下的全部四个选项（为了后面在 WSL 中直接调用 `code` 命令来打开 Visual Studio Code 打下基础。）
:::

::: danger DANGER
在 Windows 文件夹与文件中出现的名字不能有特殊符号，包括 Emoji，否则会出现无法识别 WSL 中的 Git 路径和无法打开终端直接进入相应文件夹的问题。
:::

下载安装 Visual Studio Code 在这里 > [Visual Studio Code | Code editing.
Redefined.](https://code.visualstudio.com/)

## Remote-WSL 插件 <Badge text="new" vertical="middle"/>

前些天，VS Code 官方团队终于放出了正式的对 WSL 环境下利用 VS Code 开发的组件包：Visual Studio Code Remote - WSL，详见：[Developing in WSL](https://code.visualstudio.com/docs/remote/wsl#_debugging-in-wsl)。

Remote-WSL 组件包已经正式上线 VS Code Stable 版本。可以正常使用。

### 安装并启动 Remote-WSL 插件 <Badge text="new" vertical="middle"/>

在 VS Code 插件中搜索「Remote - WSL」之后即可下载安装。

![](https://i.loli.net/2019/05/13/5cd9614ee52a165502.png)

如果你在左下角选择 Remote 环境中选择了「Remote-WSL: New Window」，VS Code 会默认开启一个 Remote 环境的新窗口，之后会在其中下载必要的 VS Code Server，用来沟通 Remote 环境和本机环境。

![](https://i.loli.net/2019/05/13/5cd960502089983105.png)

上面就是 VS Code Server 在 WSL 环境中的下载过程，之后我们 VS Code 的新窗口就处于 WSL 环境中了。

### 在 WSL 环境中安装 VS Code 插件 <Badge text="new" vertical="middle"/>

需要了解的重要的一点是：**VS Code 在 Remote 插件下的使用和在本机下的使用实际上是两个环境**，插件系统并不共享。因此，我们一旦开启了 WSL 的 Remote 环境，所下载的插件也都是在这个环境下才能使用的。

![](https://i.loli.net/2019/05/13/5cd96250991ec71091.png)

以 Go 语言的开发环境插件为例子：如上图，可以看到，在 WSL 的 Remote 环境下下载的插件都主动标明了「Install on WSL」的标签。

![](https://i.loli.net/2019/05/13/5cd962da8d67558603.png)

同时，如上图侧边栏中显示的已安装插件：VS Code 为我们区分了本地安装的插件，和 WSL Remote 环境下安装的插件。当然，本地安装的插件（比如配色主题和图标主题等等）我们也是可以直接使用的。

### 打开 WSL 环境下的文件 <Badge text="new" vertical="middle"/>

打开文件这里应该是 Remote 环境和本地环境最不同的地方所在了。现在 WSL 下的全部文件我们都可以直接用 VS Code 打开并修改，比如曾经在 Linux 分区（以 `/home/spencer/` 为例）在 Remote-WSL 的插件下就可以直接显示并打开，下图是一个例子：

![](https://i.loli.net/2019/05/13/5cd965adeb6f377829.png)

当然，我们也可以通过 `/mnt/C/Users/..` 来访问 Windows 用户文件夹下的内容，如下图例子：

![](https://i.loli.net/2019/05/13/5cd965aeaf68710972.png)

### 默认的 WSL 终端 <Badge text="new" vertical="middle"/>

![](https://i.loli.net/2019/05/13/5cd965adcbe5b68941.png)


在 WSL 环境下的 VS Code 打开的终端默认就是 `bash`，也就是 WSL 的终端环境。

## 问题（不存在了！）<Badge text="deprecated" type="error" vertical="middle"/>

:::danger
这些问题在 2019 年 5 月，VS Code 官方团队实现了 Remote-WSL 插件之后基本不复存在了。
:::

<details>

~~目前存在的一个问题是：VSCode 和 WSL 侧的工具链兼容性都很糟糕（除了 Node.js），都需要一定的配置才能丝滑工作。这也是一个当前微软 VSCode 各大语言插件组和 WSL 开发组都知道并在解决的问题（参考 [VSCode Python 插件 Issue #67](https://github.com/Microsoft/vscode-python/issues/67)）。~~

~~由于 WSL 是一个 Runtime 环境，而 VSCode 只和 Windows 侧的组件进行沟通，因此当前一个比较好的解决方法是：在 Windows 侧手动创建一些脚本帮助 VSCode 和 WSL 侧安装的组件沟通。[详见 Python 配置板块。](/3-VSCode/3-3-Python.html)~~

</details>

## 参考配置 <Badge text="deprecated" type="error" vertical="middle"/>

:::tip
VS Code 配色方案因人而异，大家都有自己不同的喜好，这里仅仅留作参考。
:::

<details>

![](https://i.loli.net/2019/01/01/5c2aecf7acc1d.png)

为了方便参考，我使用的 Visual Studio Code 具体配置如下：

- 字体：

  - 附带有 Cursive 的字体叫做 Operator Mono，它是一个 $200 的付费字体，需要单独购买。
  - 推荐免费开源的字体 - 下载地址：[Sarasa Gothic / 更纱黑体 / 更紗黑體 / 更紗ゴシック](https://github.com/be5invis/Sarasa-Gothic)

```json
{
    "editor.fontFamily": "'Operator Mono', 'Iosevka', 'Sarasa Mono T SC', monospace"
}
```

- 主题配色：

  - [Cobalt2 Theme for VS Code](https://github.com/wesbos/cobalt2-vscode)

```json
{
    "workbench.colorTheme": "Cobalt2"
}
```

- 图标方案：

```json
{
    "workbench.iconTheme": "material-icon-theme"
}
```

</details>
