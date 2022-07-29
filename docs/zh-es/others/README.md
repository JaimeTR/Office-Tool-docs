# More

## Application Settings

### Save settings to local

Check it will save application settings, such as language, theme and background image settings.

### Language display name

By default, Office Tool Plus displays the native name of languages.

- Normal: Display in default format.
- Native name: Display the native name of languages.
- English name: Display the languages name in English.
- Localized name: Display according to the system language setting. If your system language is English, all of the languages will display in English.

Language names are data provided by Windows and may be displayed differently by different versions of Windows.

::: tip Tip
To change the language display name to normal, you need to restart application to take effect.
:::

### Advanced features

By checking it, Office Tool Plus will loading the internel channels and products, such as Dogfood channel and Mondo 2016 product.

## Office Tool Plus shortcut keys

### V9

- <kbd>F1</kbd>: Help.
- <kbd>F5</kbd>: Refresh Office information and reset deploy settings (on deploy page).
- <kbd>Ctrl + 1</kbd>: Switch to home page.
- <kbd>Ctrl + 2</kbd>: Switch to deploy page.
- <kbd>Ctrl + 3</kbd>: Switch to activate page.
- <kbd>Ctrl + 4</kbd>: Switch to toolbox page.
- <kbd>Ctrl + 5</kbd>: Switch to documents converter.
- <kbd>Ctrl + T</kbd>: Display setting page.
- <kbd>Ctrl + B</kbd>: Display about page.
- <kbd>Ctrl + L</kbd>: Install iSlide (on deploy page).
- <kbd>Ctrl + Shift + D</kbd>: Ignore errors or warnings, force start deploy (on deploy page).

### V8

- <kbd>Esc</kbd>: Back.
- <kbd>F1</kbd>: Help.
- <kbd>F5</kbd>: Refresh Office information and reset deploy settings (on deploy page).
- <kbd>Ctrl + 1</kbd>: Switch to deploy page.
- <kbd>Ctrl + 2</kbd>: Switch to activate page.
- <kbd>Ctrl + 3</kbd>: Switch to toolbox page.
- <kbd>Ctrl + 4</kbd>: Switch to documents converter.
- <kbd>Ctrl + T</kbd>: Display setting page.
- <kbd>Ctrl + B</kbd>: Display about page.
- <kbd>Ctrl + L</kbd>: Install iSlide (on deploy page).
- <kbd>Ctrl + Shift + D</kbd>: Ignore errors or warnings, force start deploy (on deploy page).

## Office Tool Plus In-application commands

The commands are case-insensitive and are executed in the order they are entered. If the path contains spaces, use "" (double quotes) to include the path.

### Office Tool Plus Console Helper

Office Tool Plus.Console is a command line program. By default, when executing a command through Office Tool Plus, the CMD will return immediately and will not wait for Office Tool Plus to exit. Office Tool Plus.Console will wait for the program to exit and supports outputting the log when executing commands.

Here is a example to enable logging output for Office Tool Plus:

``` batch
"Office Tool Plus.Console" /enableLog
```

Here is a example to install Office 2021 Pro Plus (online installation):

``` batch
"Office Tool Plus.Console" deploy /addProduct ProPlus2021Volume_zh-cn_Access,Outlook,OneNote /channel PerpetualVL2021
```

If you want to install Office using offline installation, use */sourcePath* to specify the location of Office installation, use */version* to specify the Office version:

``` batch
"Office Tool Plus.Console" deploy /addProduct ProPlus2021Volume_zh-cn_Access,Outlook,OneNote /channel PerpetualVL2021 /sourcePath "D:\Office Tool" /version 16.0.00000.00000
```

Here is a example to activate Office 2021 Pro Plus via KMS:

``` batch
"Office Tool Plus.Console" ospp /insLicID ProPlus2021Volume /sethst:kms.example.com /setprt:1688 /act
```

You can run deploy commands first, then ospp commands. The Office will be installed and activated automated.

::: tip Tip
The deploy and ospp commands enable logging by default, you do not need to specify the /enableLog parameter again. deploy and ospp commands cannot be mixed with other commands, or they will not be recognized.
:::

### Application commands

| Command | Description |  |
| :-- | :-- | :-- |
| /setImage value | Set background image. | value: path, support PNG or JPG. Support local or HTTP path. |
| /getKey value | Get product default key. | value: product ID. |
| /getBWP | Get Bing wallpaper. |  |
| /resetNotif | Reset notifications to show closed notifications again. | |
| /loadConfig value | Load XML config from web. | value: url. |

::: warning Warning
/getkey command was removed on V9, please visit [products information](https://www.coolhub.top/tech-articles/products.html) to get the keys.
:::

### Deploy commands

deploy [options]

When using the deploy command, you need to specify it as deploy and then write the parameters, for example, the following is a simple deploy command.

``` batch
deploy /addProduct O365ProPlusRetail
```

| Command | Description |  |
| :-- | :-- | :-- |
| /addProduct value | Add product. | value: productID_language_excludeApps_MAK<br>productID is required.<br>See deploy examples below for details. |
| /removeProduct value | Uninstall product. | value: productID_language<br>Same as /addProduct |
| /removeAll | Uninstall all products. |  |
| /channel value | Set channel. | value: channel ID, [see more](https://docs.microsoft.com/en-us/deployoffice/office-deployment-tool-configuration-options#channel-attribute-part-of-add-element). |
| /clientEdition value | Set architecture. | value: 32 or 64。 |
| /migrateArch | Migrate architecture. |  |
| /version value | Set Office version | value: Office version. |
| /sourcePath value | Set source path. | value: path, support local or SMB path. |
| /display value | Display office installation interface. | value: true (Visible)，false (Hidden) |
| /acceptEULA | Accept EULA for users. |  |
| /module value | Set installation module. | value: 0 or 1。<br>0: Office Deployment Tool, 1: Office Tool Plus. |
| /downloadFirst | Set install after download. |  |
| /createShortcuts | Create desktop shortcuts. |  |

::: warning Warning
/display and / acceptEULA commands only available on V9.
:::

#### Deploy Office examples

Deploy English edition of Office 2021 Pro Plus - Volume，excludes Access, Outlook, OneNote:

``` batch
deploy /addProduct ProPlus2021Volume_en-us_Access,Outlook,OneNote /channel PerpetualVL2021
```

If you want to set MAK, you can do like that:

``` batch
deploy /addProduct ProPlus2021Volume_en-us_Access,Outlook,OneNote_XXXXX-XXXXX-XXXXX-XXXXX-XXXXX /channel PerpetualVL2021
```

To ignore some attributes, leave blank like that:

``` batch
deploy /addProduct ProPlus2021Volume__Access,Outlook,OneNote /channel PerpetualVL2021
```

When specifying multiple applications or languages, you need to use commas to separate them. Such as Access,Lync or zh-cn,en-us.

If you need to add more than one product, specify multiple addProduct parameters.

If you need to add a language pack or proofreading tool, please use **LanguagePack** or **ProofingTools** as the product ID.

### OSPP commands

ospp [options]

When using the OSPP command, you need to specify it as OSPP and then write the parameters, for example, the following is a simple OSPP command.

``` batch
ospp /insLicID ProPlus2021Volume /inpkey:XXXXX-XXXXX-XXXXX-XXXXX-XXXXX /act
```

| Command | Description | Usage |
| :-- | :-- | :-- |
| /insLicID value | Installs licenses with user-provided product ID. | /insLicID ProPlus2021Volume |
| /inpkey:value | Installs a product key. | /inpkey:XXXXX-XXXXX-XXXXX-XXXXX-XXXXX |
| /unpkey:value | Uninstalls an installed product key. | /unpkey:XXXXX |
| /sethst:value | Sets a KMS host name. | /sethst:kms.example.com |
| /setprt:value | Sets a KMS port, normal value is 1688. | /setprt:1688 |
| /act | Activates installed Office product keys. | /act |

For more information please visit [OSPP documentation](https://docs.microsoft.com/en-us/deployoffice/vlactivation/tools-to-manage-volume-activation-of-office).
