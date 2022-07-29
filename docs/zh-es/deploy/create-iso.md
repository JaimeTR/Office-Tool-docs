# Create Office ISO

Creating Office ISO files allows you to share Office with others, or use it for multiple installations.

For a better experience, please make sure you always download the latest version of Office Tool Plus which `includes runtime`.

We recommend that you update your Office ISO once a month, in line with the Office update frequency.

Anyway, it's suggested to test the ISO file by yourself when finished creating.

::: tip Tip
Using the version of Office Tool Plus which includes runtime allows you to run without the .NET Desktop Runtime installed, which is very helpful for multiple installations.
:::

## Create Office ISO with default configuration

Open Office Tool Plus, on deploy page, change deployment mode to `Create ISO file`, also check `Download first, then deploy`.

Add products as you want, such as Office Pro Plus 2021 - Volume License.

Add languages as you want, if not, you need to connected to Internet when installing Office.

Change other settings if needed.

**To verify the Office installation, check "Verify Office installations files after download." on "Download settings"**.

::: tip Tip
If you want to download Office for another version of Windows, for example, to download Office on Windows 10 for Windows 7, change *Download Settings - UA* to the corresponding system version.
:::

Click "start deploy".

The Office ISO created using this method contains the default configuration and asks the user to start the Office installation when opening Office Tool Plus.

After mounted the Office ISO, you can find the "Install now" option in the context menu of the CD-ROM. This operation will start installation immediately.

## Create Office ISO without configuration

Open Office Tool Plus, on deploy page, change deployment mode to `Download`.

Add products as you want, such as Office Pro Plus 2021 - Volume License.

Add languages as you want, if not, you need to connected to Internet when installing Office.

Change other settings if needed.

**To verify the Office installation, check "Verify Office installations files after download." on "Download settings"**.

::: tip Tip
If you want to download Office for another version of Windows, for example, to download Office on Windows 10 for Windows 7, change *Download Settings - UA* to the corresponding system version.
:::

Click "start deploy".

When finished downloading, press F5 to clear all configurations, also you can "refresh" on the submenu of "view XML code". After that, all products and languages should be clear.

Finally change deployment mode to `Create ISO file`, then start deploy.

## More information

### How to download both 32-bit and 64-bit of Offce?

When downloading Office, switch architecture from 32-bit to 64-bit, then click "start deploy" again. Also you can download 32-bit of Office first, then download 64-bit of Office. Office Tool Plus will skip to download the existing files.

### How can I use one-click installation without autoplay enabled?

In some cases, the autoplay may not be enabled on the Windows client or it may not work properly. To use one-click installation, we need to create batch file and save it to the root directory of Office Tool Plus. Office Tool Plus will pack up the files when creating Office ISO.

::: tip Tip
You MUST save the batch files using English name. Non-English characters is not allowed.

ConfigForISO.xml created by Office Tool Plus, make sure you are creating Office ISO with default configuration.
:::

For single edition of Office ISO (such as 32-bit)，we can create the batch file:

**Setup.bat:**

```batch
@echo off

"Office Tool Plus.exe" /isoInstall
```

When the above command is executed, Office Tool Plus will look for `ConfigForISO.xml` and automatically start the installation.

For 32-bit and 64-bit, using these commands:

**Setup-32.bat:**

```batch
@echo off

:: For 32-bit
"Office Tool Plus.exe" /loadConfig %~dp0ConfigForISO.xml /SourcePath %~dp0 /edition 32
```

**Setup-64.bat:**

```batch
@echo off

:: For 64-bit
"Office Tool Plus.exe" /loadConfig %~dp0ConfigForISO.xml /SourcePath %~dp0 /edition 64
```

When the above command is executed, Office Tool Plus will load the `ConfigForISO.xml`, and modifies the architecture and source path attribute values according to the specified parameters in order to start the installation.

_Note: If there is no special requirement, the parameters in the above commands do not need to be included with double quotes, otherwise unpredictable problems may occur._
