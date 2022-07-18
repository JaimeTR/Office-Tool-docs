# 配置選項

## 產品

- 購買了 Microsoft 365 的用戶，新增產品的時候，選取 Microsoft 365 相關的產品即可，具體視你所擁有的授權，而選擇家用版、個人版或企業版。

- 購買了 Office 2019/2021 的用戶，按照自己購買的版本選擇即可，例如家用版、個人版、專業增強版。

- 如果需要使用 KMS 或 MAK 啟用，請安裝大量授權版產品，例如 Office 2019 大量授權版或 Office 2021 大量授權版。

> 不確定自己是否擁有 Office 授權？個人帳戶請[從這裡查詢](https://account.microsoft.com/services/)，企業用戶可以[從這裡查詢](https://portal.office.com/account/?ref=MeControl#subscriptions)。

::: details Office 365 產品對照表
| 訂閱版本        | 產品 ID  |
| ------------- |:-------------:|
| Microsoft 365 Apps 企業版 | O365ProPlusRetail |
| Office 365 企業版 E3 | O365ProPlusRetail |
| Office 365 企業版 E4 | O365ProPlusRetail |
| Office 365 企業版 E5 | O365ProPlusRetail |
| Office 365 中小型企業版 | O365ProPlusRetail |
| Office 365 商務版 | O365BusinessRetail |
| Office 365 商務進階版 | O365BusinessRetail |
| Office 365 小型企業進階版 | O365SmallBusPremRetail |
| Microsoft 365 E3 | O365ProPlusRetail |
| Microsoft 365 E5 | O365ProPlusRetail |
| Microsoft 365 商務版 | O365BusinessRetail |
:::

## 語言套件

按下 [新增套件] 後，Office Tool Plus 將會預設選取目前系統語言，若預設選取的並不正確，或是需要使用其他語言，請手動變更。

您可以設定多個語言套件，而新增的首項套件類型為 **完整** 的語言，將定義 Shell UI 區域性 (例如 捷徑、右鍵功能表、工具提示語言)。欲在安裝完成後變更 Shell UI 語言，請移除並重新安裝 Office。

如果您沒有配置語言套件，安裝 Office 時會自動對應您系統的使用語言，若無法對應系統語言，則會以 *「進階設定」 > 「安裝設定」 > <備用語言>」*

如果您勾選了 [僅部署校訂工具]，則該語言將以校訂工具類型進行安裝，不會安裝 Office 顯示語言。

### 套件類型區別

| 套件類型　　　　　　　| 說明 |
| :------------------ | :--- |
| 完整　　　　　　　　　| 語言套件中包含顯示語言和校訂工具 |
| 部分　　　　　　　　　| 語言套件中包含部分 Office 顯示語言，以及完整校訂工具 |
| 部分但不包含校訂工具  | 語言套件中包含部分 Office 顯示語言，但不包含校對工具 |
| 校對工具　　　　　　　| 語言包僅包含校閱工具 |

## 應用程式

應用程式會隨你選擇的產品不同而顯示不同的內容。

Groove 代表的是 OneDrive for Business, Lync 代表的是 Skype for Business。某些應用程式 (例如 Teams, OneDrive) 可能需要重新開機才能完成安裝。

Bing 是一個用於 Chrome 和 Edge 的擴充程式。如要瞭解更多，請參閱「[Bing 專用 Microsoft 搜尋和 Microsoft 365 應用程式企業版](https://docs.microsoft.com/zh-tw/deployoffice/microsoft-search-bing)」。

選取 Visio 或 Project 等產品時，由於其本身為一個不可選組件，因此不會出現在應用程式列表中。請從「產品」中選取它們。

有關產品和應用程式的資訊，請參閱「[Office Products Information](https://www.coolhub.top/tech-articles/products.html)」。

## 頻道

大多數情況下，建議選取 [目前通道] 或者 [半年企業通道] 即可，下表列出了各通道之間的區別：

| 頻道                   | 發布頻率                       | 功能更新            |
| --------------------- | ------------------------------ | ------------------- |
| 目前頻道               | 每個月至少一次 (可能更頻繁)  | 同發布頻率             |
| 半年企業通道           | 每個月一次，每月的第二個星期二 | 一年兩次(一月和七月) |
| 企業用每月通道         | 每個月一次，每月的第二個星期二 | 同發布頻率            |
| Office 2019 永久企業版 | 每個月一次，每月的第二個星期二 | 無                    |
| Office 2021 永久企業版 | 每個月一次，每月的第二個星期二 | 無                    |

> 永久企業版頻道是 Office 2019/2021 大量授權版的專用頻道。

表中列出的所有頻道皆為穩定頻道，非測試頻道，因此皆可日常使用。

每個頻道都會在每個月的第二個星期二發布安全更新 (如果需要)，這是既定計劃。

如果需要瞭解詳細資訊，請參閱 「[Microsoft 365 Apps 更新通道的概觀](https://docs.microsoft.com/zh-tw/deployoffice/overview-update-channels)」。

## 架構

**正常情況下，我們推薦您安裝 32 位元的 Office**，但如果存在下列情況，則推薦安裝 64 位元的 Office:

- 處理大型資料集，例如有複雜計算的企業規模 Excel 活頁簿、許多樞紐分析表、外部資料庫的資料連線、Power Pivot、3D 地圖、Power View 或取得及轉換。在這些情況下，64 位元版本的 Office 效能會更好。
- 在 PowerPoint 中使用了大量的圖片、影片或動畫。 64 位元版本的 Office 可能更適合用來處理這些複雜的投影片組。
- 在 Project 中使用的檔案超過 2 GB；如果專案中有許多子專案，您就更需要使用此版本的 Office。
- 開發內部作業 Office 解決方案，例如增益集或文件層級自訂。使用 64 位元版本的 Office 可讓您提供這些解決方案給 64 位元版本和 32 位元版本。
- 在 Access 中處理大型數字資料類型，雖然此資料類型受 32 位元 Access 支援，執行使用原生 32 位元 VBA 程式庫的程式碼或運算式時，可能會看到非預期的結果。

如果需要瞭解詳細資訊，請參閱「[選擇 64 位元或 32 位元版的 Office](https://support.microsoft.com/zh-tw/office/%E9%80%89%E6%8B%A9-64-%E4%BD%8D%E6%88%96-32-%E4%BD%8D%E7%89%88%E6%9C%AC%E7%9A%84-office-2dee7807-8f95-4d0c-b5fe-6c6f49b8d261)」。

## 部署模式

| 模式          | 說明 |
| ------------- | ----- |
| 編輯設定      | 僅用於建立/修改 XML 配置文件，不能進行部署   |
| 下載          | 僅下載 Office 安裝文件，不會也不能啟動安裝程式 |
| 安裝          | 可以在電腦上上進行安裝、移除、修改 Office 等操作 |
| 建立 ISO 檔案 | 將 Office 安裝檔案與 Office Tool Plus 綑綁成 ISO 檔，如果有安裝配置，則連同配置一起寫入 ISO 中 |

Office 安裝文件包含 Office、Visio 和 Project，由 Microsoft 提供，無法精簡。

## 安裝模組

### Office 部署工具

Office 部署工具是 Microsoft 官方工具，提供了部署 Office 的完整支援，適合所有人使用。

### Office Tool Plus

這個模組是我們自行開發的，可以實現 Office 部署工具的大多數功能，且還有 Office 部署工具無法做到的功能，但不支援部分部署功能。

下表列出了兩者之間的區別：

| 功能 | Office 部署工具 | Office Tool Plus |
| :-- | --- | --- |
| 更新截止時間                 | ✓ | × |
| 強制更新 Office              | ✓ | × |
| 移除電腦中的 MSI 版本 | ✓ | × |
| 安裝與 MSI 版本相同的語言    | ✓ | × |
| 使用 Office 內部通道         | × | ✓ |
| 安裝内部產品                 | × | ✓ |

我們建議優先使用 Office 部署工具，如果 Office 部署工具出現了無法修復的問題，或者有特殊需求，才應該選擇 Office Tool Plus 作為安裝模組。

## 下載設定

下載設定僅在 [下載] 模式，或者在勾選 [下載後再部署] 的情況下生效。

下載引擎的區別：

| 引擎                   | 顯示下載信息 | Proxy 支援 | 暫停 & 繼續 | 取消 |
| :--------------------- | --- | --- | --- | --- | --- |
| Thunder                  | ✓ | ✓ | ✓ | ✓ |
| Office Tool Plus       | ✓ | × | × | ✓ |
| Office 部署工具         | × | × | × | × |

通常情況下，使用 Thunder 下載引擎是一個不錯的選擇，它不僅能夠提供多種功能，下載速度也會變得更快，此功能並非使用 P2P，而是傳統的 HTTP 協議。

當 Office Tool Plus 找不到 Thunder 模組時，將會使用 Office Tool Plus 作為下載引擎。

### 系統標示設定 (UA)

預設情況下，Office Tool Plus 會自動偵測你的 Windows 版本，然後為你下載合適的 Office 版本。

如果您需要為其他的 Windows 版本下載 Office 安裝檔案，你可以修改 [系統標示] 成特定的 Windows 版本。

## 安裝檔案管理

預設情況下，當你從 Office Tool Plus 下載 Office 安裝檔案後，Office Tool Plus 會自動識別 Office 安裝資訊並顯示在此處。

如果你有本地安裝檔案，你可以點選 [*選擇檔案*]，然後選取 Office 安裝文件中任意一個 CAB 檔案。

Office ISO 映像應先掛載或者解壓縮後，再選取其中內含的 CAB 檔案。

點選列表中的 <版本編號>，即可刪除該版本的 Office 安裝檔案；點選 <語言> 則可以刪除該版本編號下的特定語言。

如果安裝包顯示錯誤，則不應該繼續部署 Office。檢查問題所在，解決問題後再繼續部署操作。

點選 [重設] 可重設安裝檔案資訊，恢復來源路徑屬性預設值，相當於不再使用本地安裝檔案進行部署。

## 版本

此設置位於 *「進階設定」 > 「安裝設定」* 中。

預設安裝 Office 可用的最新版本，您無需再設定 Office 的版本編號。

如果您需要安裝 Office 的歷史版本，你可以點選右側的 [重新載入]，Office Tool Plus 將從 Microsoft Office 伺服器，擷取所有可用的 Office 版本，每個通道都會有不同的 Office 歷史版本。

如果你下載了 Office 安裝檔案，則此處會顯示相應通道下所有 Office 安裝檔案的版本。

## 來源路徑

此設置位於 *「進階設定」 > 「安裝設定」* 中。

預設情況下，使用線上安裝 Office 時，Office 安裝程式會從 Office CDN 伺服器上擷取 Office 安裝文件。若您在本地已有 Office 安裝文件，則應在「安裝檔案管理」區中選取檔案，而不是在此處填入路徑。

如果使用了 SMB 共用 Office 安裝文件，則可以在此處寫入 SMB 共用路徑，同時，亦應指定 Office 的版本編號。

使用現有的安裝檔案時，應確保通道與 Office 安裝檔案對應，您不能夠使用目前通道的安裝檔案，而指定半年企業通道作為安裝頻道。

**在下載模式，來源路徑屬性用於指定應將 Office 安裝檔案儲存在何處。**

## 應用程式喜好設定

`應用程式喜好設定是由 Microsoft 提供數據，其文字均為機器翻譯，可能存在某些語法錯誤，請以英文版本的為準。`

應用程式喜好設定使你可以在部署 Office 前，修改 Office 應用程式內的喜好設定，例如 VBA 巨集通知、預設文件儲存位址和預設檔案格式。

除此之外，你還可以將應用程式喜好設定，套用到現有的 Office 中。配置完畢後，在 [*檢視代碼*] 的子選單中點選 [*套用 Office 喜好設定*] 即可，Office 部署工具將自動套用設定。

您定義的應用程式喜好設定，將套用於裝置的所有現有使用者，包括未來所新增的。如果在套用喜好設定時，Office 應用程式處於執行狀態，則新的喜好設定，將在下次 Office 應用程式執行時生效。

## 其他選項

其他選項介紹以及用法在「[Office 部署工具的設定選項](https://docs.microsoft.com/zh-tw/deployoffice/office-deployment-tool-configuration-options)」中有詳細介紹，使用方法相同，在這裡不再贅述。
