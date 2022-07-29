# Configuration options

## Products

If you have a genuine Office license, install your own purchased version of Office.

If you want to use KMS or MAK to activate Office, install volume license products, such as Office 2019 Volume License or Office 2021 Volume License.

> Not sure if you have a genuine Office license? Login your personal account [here](https://account.microsoft.com/services/) or login your enterprise account [here](https://portal.office.com/account/?ref=MeControl#subscriptions).

::: details Office 365 Plan
| Office 365 Plan                   | Product ID             |
| --------------------------------- | :--------------------: |
| Microsoft 365 Apps for enterprise | O365ProPlusRetail      |
| Office 365 Enterprise E3          | O365ProPlusRetail      |
| Office 365 Enterprise E4          | O365ProPlusRetail      |
| Office 365 Enterprise E5          | O365ProPlusRetail      |
| Office 365 Midsize                | O365ProPlusRetail      |
| Office 365 Business               | O365BusinessRetail     |
| Office 365 Business Premium       | O365BusinessRetail     |
| Office Small Business Premium     | O365SmallBusPremRetail |
| Microsoft 365 E3                  | O365ProPlusRetail      |
| Microsoft 365 E5                  | O365ProPlusRetail      |
| Microsoft 365 Business            | O365BusinessRetail     |
:::

## Languages

When you click `Add Language`, Office Tool Plus will match the current system language. If the match is incorrect or you need to select another language, change it manually.

You can add one or more languages that you want. The first language in the list determines the Shell UI culture, including shortcuts, right-click context menus, and tooltips. If you decide that you want to change the Shell UI language after an initial installation, you have to uninstall and reinstall Office.

If you do not add a language, Office will automatically match the system language when installing, or fall back to the language specified in *Advanced settings - Installation settings - Fallback language* if the system language cannot be matched.

If you check "Deploy proofing tools only", the language will be installed as proofing tools.

### Language Type

| Type                           | Description                                                                                                   |
| :----------------------------- | :------------------------------------------------------------------------------------------------------------ |
| Full                           | The language pack includes display language and proofing tools.                                               |
| Partial                        | The language pack includes display language for some Office applications and includes proofing tools.         |
| Partial without proofing tools | The language pack includes display language for some Office applications but does not include proofing tools. |
| Proofing tools                 | The language pack only include spell checker.                                                                 |

## Applications

The application will display different items depending on the products you selected.

`Groove` stands for **OneDrive for Business**, `Lync` stands for **Skype for Business**. Some applications, such as Teams and OneDrive, may require a system restart to complete the installation.

Bing is a extension for Chrome and Edge etc. For more information, visit [Microsoft Search in Bing and Microsoft 365 Apps for enterprise](https://docs.microsoft.com/en-us/deployoffice/microsoft-search-bing).

When you select a product such as Visio or Project, it does not appear in the list of applications.

For information on products and applications, you can view [Office Products Information](https://www.coolhub.top/tech-articles/products.html).

## Channels

In most cases, it is sufficient to select either the `Current Channel` or the `Semi-Annual Enterprise Channel`, the differences between which are listed in the following table.

| Channel                          | Release frequency                                 | Feature updates                     |
| :------------------------------- | :------------------------------------------------ | :---------------------------------- |
| Current Channel                  | At least once a month (likely more often).        | Same as release frequency.          |
| Semi-Annual Enterprise Channel   | Once a month, on the second Tuesday of the month. | Twice a year (in January and July). |
| Monthly Enterprise Channel       | Once a month, on the second Tuesday of the month. | Same as release frequency.          |
| Office 2019 Perpetual Enterprise | Once a month, on the second Tuesday of the month. | None.                               |
| Office 2021 Perpetual Enterprise | Once a month, on the second Tuesday of the month. | None.                               |

> For Office 2019/2021 Volume License products, the perpetual enterprise channel is the dedicated channel.

All the channels listed in the table are stable channels.

Each channel releases security updates (if needed) on the second Tuesday of each month, which is the set schedule.

For more information, see [Overview of update channels for Microsoft 365 Apps](https://docs.microsoft.com/en-us/deployoffice/overview-update-channels)。

## Architecture

**In general, we recommend that you install the 32-bit version of Office**, 64-bit is the right choice when:

- You’re working with large data sets, like enterprise-scale Excel workbooks with complex calculations, many pivot tables, data connections to external databases, Power Pivot, 3D Map, Power View, or Get & Transform. The 64-bit version of Office may perform better in these cases.
- You’re working with extremely large pictures, videos, or animations in PowerPoint. The 64-bit version of Office may be better suited to handle these complex slide decks.
- You’re working with files over 2 GB in Project, especially if the project has many sub-projects.
- You’re developing in-house Office solutions like add-ins or document-level customization. Using the 64-bit version of Office lets you deliver a 64-bit version of those solutions as well as a 32-bit version.
- You’re working with the Large Number data type in Access, and while this data type is supported by 32-bit Access, you may see unexpected results when executing code or expressions that use native 32-bit VBA libraries. 64-bit VBA provides the LongLong data type which fully supports large numbers.

For more information, see [Choose between the 64-bit or 32-bit version of Office](https://support.microsoft.com/en-us/office/choose-between-the-64-bit-or-32-bit-version-of-office-2dee7807-8f95-4d0c-b5fe-6c6f49b8d261).

## Deployment mode

| Mode            | Description                                                                               |
| :-------------- | :---------------------------------------------------------------------------------------- |
| Edit config     | Only for exporting/modifying XML configuration.                                           |
| Download        | Only for downloading Office installation.                                                 |
| Install         | You can install, uninstall, modify Office, etc.                                           |
| Create ISO file | Package the Office installation with Office Tool Plus. Write configuration if configured. |

The Office installation contains Office, Visio and Project, provided by Microsoft.

To create an ISO file, you must first download the Office installation.

## Installation module

### Office Deployment Tool

The Office Deployment Tool is an official Microsoft tool for deploying Office. Provides full support for deploying Office.

### Office Tool Plus

The module can do most of the features of the Office Deployment Tool, and also features that the Office Deployment Tool cannot do.

The following content shows the differences between them.

| Functions | Office Deployment Tool | Office Tool Plus |
| :-------  | :--------------------- | :--------------- |
| Update deadline.                   | ✓ | × |
| Force upgrade Office.              | ✓ | × |
| Remove existing MSI versions of Office.                | ✓ | × |
| Install the same language as the previous MSI version. | ✓ | × |
| Use Office internal channels       | × | ✓ |
| Install internal products          | × | ✓ |

We recommend that Office Deployment Tools be used first. If there is a problem with Office Deployment Tools that cannot be fixed, or if there are special needs, use Office Tool Plus as installation module.

## Download settings

Download settings only take effect in *download* mode, or if *Download first, then deploy* is checked.

The following content shows the differences between them.

| Engine                 | Display information | Set proxy | Pause & resume | Cancel |
| :--------------------- | ------------------- | --------- | -------------- | ------ |
| Thunder                | ✓ | ✓ | ✓ | ✓ |
| Office Tool Plus       | ✓ | × | × | ✓ |
| Office Deployment Tool | × | × | × | × |

When Office Tool Plus cannot find the Thunder component, will fall back to Office Tool Plus as the download engine.

### UA

By default, Office Tool Plus automatically detects your Windows version and then downloads the appropriate version of Office for you.

If you need to download the Office for another Windows version, you can change the UA to a specific Windows version.

## Installation files manage

When you download Office from Office Tool Plus, Office Tool Plus will automatically detected the Office installation and displays it here.

If you have local installations, you can click *Select file* and then specify any of the CAB files in the Office installation.

The Office ISO image should be mounted or extracted before selecting the CAB file contained within it.

You can click on the version number to delete an installation, or click on the language to delete a language pack.

If the installation shows an error, you should check and fix the problems before deploying.

Clicking `Reset` clears the information and resets the source path to default value, and no longer uses the local source for deployment.

## Office version

This setting is located in *Advanced settings - Installation settings*.

The latest available version of Office is installed by default.

If you need to install a historical version of Office, you can click the Refresh button on the right to get all available versions of Office.

If you have downloaded Office installations, the versions of all Office installations under the corresponding channel are displayed here.

## Source path

This setting is located in *Advanced settings - Installation settings*.

By default, the Office deployment tool fetches the Office installation files from the Office CDN. If you have the Office installation, you should select the file in the `Installation files manage` instead of writing the path here.

If you are using SMB to share Office installation, you can write the SMB path here, and you should also specify the version of Office.

When using an existing installation, you should also make sure that the channel corresponds to the Office installation.

**In download mode, this property is used to define where to save the files.**

## Application preferences

`Application preferences are data provided by Microsoft, these texts are machine translated and may contain some grammatical errors.`

The function allow you defines application preferences for Office Apps, including VBA Macro notifications, default file locations, and default file format.

You can apply new application preferences to client computers that already have Office installed. Click "Applying preferences for Office applications" in the "View XML code" submenu.

The app preferences are applied to all existing users of the device and any new users added to the device in the future. If you apply application preferences when Office apps are running, the preferences will be applied when Office is next restarted.

## Other options

The other options are described in detail in the [Microsoft docs](https://docs.microsoft.com/en-us/deployoffice/office-deployment-tool-configuration-options), they are used in the same way.
