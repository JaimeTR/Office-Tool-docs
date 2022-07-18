# 建立 Office ISO

透過建立 Office ISO 檔案，您可以輕鬆與他人共享 Office 安裝文件，適合公司用於大量、多次部署。

為了確保您得到最佳體驗，請確保您始終從我們的 [官方網站](https://otp.landian.vip/) 下載了最新的 with runtime 版本的 Office Tool Plus。

另外，我們也建議您在**每月的第二個星期二**更新一次 Office ISO 文件，使得 Office 能處在最新版本中。

Office ISO 建立完成後，我們建議您檢查 ISO 檔案，以確保檔案能與您預期一樣正常使用。

::: tip 提醒
with runtime 版本的 Office Tool Plus 允許您在沒有安裝 .NET Desktop Runtime 函式庫的情況下直接執行程式，這對於大量部署非常有幫助。
:::

## 建立包含預設配置的 Office ISO

開啟 Office Tool Plus，在 [部署] 功能頁，切換 [部署模式] 到 [建立 ISO 檔案]，并點選 [下載後再部署]。

新增產品，按需求選擇 (例如 Office 2021 專業增強版 (大量授權) )。

新增語言套件，按需求選擇。如不新增，安裝時可能需要連線網際網路。

根據需求修改架構、頻道設定，和其他進階設定。

**為了確保 Office 安裝檔案的完整性，我們建議您勾選 「下載設定」 -> [下載完成後驗證 Office 安裝文件]。**

::: tip 提醒
如果您需要為不同版本的 Windows 下載 Office (例如在 Windows 10 中下載 Office 安裝文件供 Windows 7 使用)，請變更 *「下載設定」 -> [系統標示]*，以對應目標 Windows 版本。
:::

確認設定無誤後，點擊 [開始部署] 即可。

使用此方式所建立的 Office ISO 將會包含預設配置，在 ISO 中執行 Office Tool Plus 時，會詢問用戶是否直接開始 Office 的安裝。

掛載 Office ISO 後，如果您需要直接開始安裝，您可以在 CD-ROM 右鍵選單中點選 [立即安裝] 按鈕。

## 建立不含預設配置的 Office ISO

開啟 Office Tool Plus，在 [部署] 功能頁，切換 [部署模式] 到 [下載]。

新增產品，按需求選擇 (例如 Office 2021 專業增強版 (大量授權) )。

新增語言套件，按需求選擇。如不新增，安裝時可能需要連線網際網路。

根據需求修改架構、頻道設定，和其他進階設定。

**為了確保 Office 安裝檔案的完整性，我們建議您勾選 「下載設定」 -> [下載完成後驗證 Office 安裝文件]。**

::: tip 提醒
如果您需要為不同版本的 Windows 下載 Office (例如在 Windows 10 中下載 Office 安裝文件供 Windows 7 使用)，請變更 *「下載設定」 -> [系統標示]*，以對應目標 Windows 版本。
:::

確認設定無誤後，點擊 [開始部署] 即可。

下載完成後，按下 F5 鍵重設所有選項，亦可以在 [檢視代碼] 的子選單中找到 [重設] 選項。

然後切換 「部署模式」 > [建立 ISO 檔案]，點擊 [開始部署] 即可。

## 更多資訊

### 如何同時下載 32 位元和 64 位元的 Office？

在下載 Office 安裝文件時，將 [架構] 從 [32 位元] 改選擇成 [64 位元] (反之亦然)，然後再次點選 [開始部署]，Office Tool Plus 會在目前的下載任務中，新增一項新下載任務，32 位元和 64 位元的 Office 會同時下載完畢。您也可以在下載完第一項位元版本後，再行下載另一項位元版本，Office Tool Plus 會自動略過已存在的檔案，僅下載缺失的檔案。

### Windows 沒有啟用自動播放的狀態下，如何使用一鍵安裝功能？

在某些情況下，客戶端上的 Windows 可能沒有啟用自動播放功能，或其功能無法正常執行。為了使一鍵安裝功能執行順暢，您可能需要自行撰寫 BAT 文件，並將其儲存在 Office Tool Plus 的根目錄中，以便 Office Tool Plus 建立 ISO 檔時能將其一同納入。

::: tip 提示
BAT 檔案不可使用非英文字元命名，否則將無法正常納入至 Office ISO 中。

ConfigForISO.xml 是在建立 Office ISO 時，由 Office Tool Plus 自動產生，您需要確保建立包含預設配置的 Office ISO。
:::

正常情況下，如果您只建立單項版本的 Office ISO (例如 32 位元)，則我們可以撰寫以下的 BAT 檔案:

**Setup.bat:**

```batch
@echo off

"Office Tool Plus.exe" /isoInstall
```

執行以上命令時，Office Tool Plus 會自動尋找 ConfigForISO.xml 檔案，並自動對應系統環境以進行安裝。

如果建立了 32 位元和 64 位元二合一的 Office 版本，則可以分別使用以下命令啟動安裝程式：

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

執行以上命令時，Office Tool Plus 會根據參數尋找對應的 XML 載入，然後依指定的參數變更架構和來源路徑值以啟動安裝程式。

_注意：如果沒有特別需求，以上命令中的參數不需要使用雙引號包括，否則可能會因為字符串轉義而發生無法預料的問題。_
