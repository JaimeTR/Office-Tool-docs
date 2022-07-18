# 歡迎使用 Office Tool Plus

## 介紹

Office Tool Plus 是一個多功能集於一身的 Office 部署工具。

Office Tool Plus 是基於[Office 部署工具](https://aka.ms/ODT)和 [OSPP](https://docs.microsoft.com/en-us/DeployOffice/vlactivation/tools-to-manage-volume-activation-of-office) 開發的，可以使您更加便利的部署 Microsoft Office，其內建的 Thunder 下載引擎更能加速您下載 Microsoft Office 安裝文件。我們還有開發許多小工具，方便您更加輕鬆、快速地管理、啟用 Office 喔！

我們支援以下產品的管理和其他功能：

- Microsoft 365
- Office 2016, 2019, 2021
- Visio 2016, 2019, 2021 & Online Plan 2
- Project 2016, 2019, 2021 & Online Desktop Client

無論你是個體還是團隊，Office Tool Plus 都是你的得力小幫手。

## 特色功能

- 建立 Office 安裝設定檔: 支援匯出到您的電腦，或是從電腦、網路位址匯入 Office Tool Plus。
- 下載 Office: 支援所有更新頻道的 Office 和所有 Office 語言套件的下載。
- 安裝 Office: 支援對已安裝的 Office 進行管理，例如新增/移除產品或應用程式。
- 建立 Office ISO 檔案: 支援預設安裝設定、安靜安裝設定。
- 啟用 Office: 支援線上啟用、電話啟用、KMS 啟用和更多方式。
- 支援 Office 授權管理: 例如授權管理、金鑰管理和 KMS 管理。
- 修改 Office 更新頻道: 支援在不重新安裝 Office 的情況下，進行升級/降級 Office。
- 移除 Office: 在 Office 無法正常移除的情況下，透過自主開發的工具，強制解除安裝 Office。(支援 2003-最新版本的 Office)
- 內建實用工具箱: 包括重設設定、修復範本設定、啟用問題等實用工具。
- 轉檔 Office 文件: 基於 Office COM，穩定可靠。
- 自訂介面主題: 打造你自己的專屬 Office Tool Plus。
- 進階設定能夠讓您使用更加進階的部署設定，例如 Office 的內部頻道。

::: warning 注意事項

1. Office 文件轉換功能，可能無法相容 64 位元的 Office 版本，我們正在嘗試解決這個問題。在問題解決之前，請在 32 位元的 Office 中使用此功能。
2. Office Tool Plus 提供啟用管理功能，但您必須擁有正版授權，才能啟用 Office。

:::

::: details 關於零售版、大量授權版的互轉
Office 授權不限於零售版或大量授權版，都可以同時存在。

在零售版的基礎上再安裝大量授權版的授權，並且將其啟用，Office 將會同時顯示零售版和大量授權版的啟用資訊。
:::

## 模組與結構

``` txt
Office Tool
├── Office Tool Plus.exe (主程式)
├── hostfxr.dll (.NET Host)
├── shared (.NET Runtimes)
└── files
    ├── setup.exe (Microsoft Office 部署工具)
    ├── activate (包含 OSPP 以及相關檔案)
    │   └── OSPP.VBS (Office Software Protection Platform)
    ├── clean
    │   ├── x64 (64 位元系統專用的 Office 啟用資訊清理工具)
    │   └── x86 (32 位元系統專用的 Office 啟用資訊清理工具)
    ├── preferences (Office 應用程式喜好設定的相關數據，由 Microsoft 提供)
    └── Thunder (Thunder加速開放平臺相關文件)
```

在正常情況下，Office Tool Plus 會自動下載缺失的模組，並自動更新至最新版本。如果某些模組丟失或無法自動下載，建議您重新至官網下載 Office Tool Plus 以解決問題。
