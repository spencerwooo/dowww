# LxRunOffline <a href="https://github.com/llinfeng"><Badge text="@llinfeng" vertical="middle"/></a>

<!-- 大佬自由发挥！ -->

[LxRunOffline](https://github.com/DDoSolitary/LxRunOffline) is a **Windows command line tool** that can dispatch whatever Linux distributions, however you would like. Following the WSL tradition, you are free to pick from whatever Linux distributions. For a complete list of all possibilities, [visit this link](https://github.com/DDoSolitary/LxRunOffline/wiki).

## Quick start

### Get LxRunOffline ready

The best way to install is to use `choco`. As suggested in the project's home page, pick either Command Prompt or PowerShell to execud the following installation command:

```powershell
choco install lxrunoffline
```

Note, you will need to press `y` key, for once, to confirm something.

### Download and install the Linux image

[This table](https://github.com/DDoSolitary/LxRunOffline/wiki) details all possibilties, but can be a bit overwhelming. In particular, most of the entries in the table are meant for building dockers, which I know very little about. Here goes a layman approach to getting a _fully_ functional Linux.

1. Download the image from:
   <https://lxrunoffline.apphb.com/download/UbuntuFromMS/16>
2. Store it somewhere, and run the following `LxRunOffline` command through, preferrably, a Command Prompt window with Admin privilege. (You can press `Win + X`, and then `A`, to get it.)

```powershell
LxRunOffline i -n UF -d c:\WSL\Full -f <c:\whereabouts_of_the_downloaded_image> -s
```

Upon filling up the precise absolute path to the `16.04.2-server-cloudimg-amd64-root.tar.gz` file, the command shall create a distribution named as UF, in directory `c:\WSL\UFull`.

:::tip
**Comments about those "docker images"**: docker is meant to be as light-weight as possbile, and a functional Linux distribution may come in size of less than 20MB. Yet, with these skinny super-light-weight Linux distro, at times, you won't even have the `apt-get` command.
:::

### Accessing the newly installed image

From any console interface, be it PowerShell or Command Prompt, if you have followed the naming convention above, the following set of command will load the newly minted Linux distro:

```powershell
Lx Run Offline run -n UF
```

Other frequently commands include:

* `LxRunOffline l`: for listing all installed distributions;
* `LxRunOffline`: for admiring the list of possible other commands.

### Caveats

1. `LxRunOffline i` can only install a Linux distro with `root`.
2. `LxRunOffline r -n Name_of_Distro` will get you to the root access.
3. You will need to create your user account, if you prefer to have one.
4. For now, you cannot deploy the linux distribution you installed in PC-1 to PC-2, should they don't share the same Windows build number. (I tested to copy the folder generated on Build 1809 to a Build 1803 machine, and get a `0x80070040` error.)

## Advanced usage

Here goes a wish list of pending items to be added, including:
1. Getting X11 forwarding to work:
    1. Use the default settings for Xming, which open port `:0` for display
    2. Add the following setting into `~/.bashrc` (or the setup file for your Fish/Zsh shell):
       ```bash
       export DISPLAY=:0
       ```
2. Firing `LxRunOffline`-deployed WSL from a console emulator (ConEmu, Hyper.is,
   or Cmder). Currently, one will need to access the Comand Prompt or PowerShell first, then to the root user, then to the desired user.
    * It should be doable to put up some `*.sh` script to set the non-`root` user as the default user? Pending instruction on this.
