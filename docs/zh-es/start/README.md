# Welcome

## Introduction

Office Tool Plus is a powerful and useful tool for Office Deployment.

Office Tool Plus is made based on [Office Deployment Tool](https://docs.microsoft.com/en-us/deployoffice/overview-office-deployment-tool) and [OSPP](https://docs.microsoft.com/en-us/DeployOffice/vlactivation/tools-to-manage-volume-activation-of-office). It can deploy Office easily. It has integrated the Thunder download engine so that you can download Office faster. Certainly, you can use the little functions provided by Office Tool Plus to manage and activate Office.

The following products are supported:

- Microsoft 365.
- Office 2016, 2019, 2021.
- Visio 2016, 2019, 2021 and Online Plan 2.
- Project 2016, 2019, 2021 and Online Desktop Client.

No matter what, Office Tool Plus is always your best helper.

## Features

- Create Office installation configuration. The config can be exported to local, or imported from local or web.
- Download Office, supporting `ALL` Office channels and `ALL` Office languages.
- Install Office or modify the existing Office, such as adding new products and applications, or uninstalling products and applications.
- Create Office ISO, supports default installation config and silent installation config.
- Activate Office. Support online activation, phone activation and KMS activation.
- Support Office activation management, including license management, key management and KMS management.
- Change Office update channel, support upgrading/downgrading Office without reinstalling Office.
- Remove Office. Force remove Office while it can’t be uninstalled in normal way, support Office from Office 2003 to the latest Office version.
- Integrated Office tools, including resetting settings, fixing Office problems.
- Convert Office documents, based on Office COM. it's fast and stable.
- Personalize theme, you can build your special Office Tool Plus.
- Advanced settings allow you to use more advanced features, such as Office internal channels.

::: warning Attention

1. Office documents converter may not be capable with 64-bit of Office, we will try to fix this problem in future releases. Before this issue gets fixed, please only use this function on 32-bit of Office.
2. Office Tool Plus only provides activation management. You need to have a genuine license to activate your products.

:::

::: details About convert retail to volume edition
Office license can coexist now, which means we can have more than one license at a time.

You can install a volume license besides the existing activated retail license. If you activate the volume license, Office will show both the retail activation information and the volume activation information.
:::

## Components and Structure

``` txt
Office Tool
├── Office Tool Plus.exe (main program)
├── hostfxr.dll (.NET Host)
├── shared (.NET Runtimes)
└── files
    ├── setup.exe (Microsoft Office Deployment Tool)
    ├── activate (OSPP and other relating files)
    │   └── OSPP.VBS (Office Software Protection Platform)
    ├── clean
    │   ├── x64 (Office Activation cleaner for x64 system)
    │   └── x86 (Office Activation cleaner for x86 system)
    ├── preferences (Office applications settings related data, provided by Microsoft)
    └── Thunder (files related to Thunder download acceleration)
```

Usually, Office Tool Plus will download the needed components and keep it the latest version automatically.

If some of the components are lost or cannot be downloaded automatically, we suggest you to re-download Office Tool Plus to fix this problem.
