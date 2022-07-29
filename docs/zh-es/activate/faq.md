# FAQ

## The Software Licensing Service reported that license consumption failed

Error code: 0xC004E015

Solution

---

Automatic operation: Rebuild activation token, you can find the option in the Toolbox page. Then retry to activate Office.

---

Manual operation: Stop `Software Protection` service, delete dat files on `C:\Windows\System32\spp\store\2.0` (On Windows Insider, the folder name is store_test). Then retry to activate Office.

After installed Office licenses, wait three minutes. Then continue your operation.

**If the problem is not resolved, you may need to try again.**

## The Software Licensing Service reported that a token in the Token Store contains an invalid hash

Error code: 0x8004E108

Solution is same as the previous item.
