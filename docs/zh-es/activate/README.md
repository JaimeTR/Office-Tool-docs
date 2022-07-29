# Function introduction

Users who have already bought Office from Microsoft can activate by login Microsoft account to Office applications.

If you have activated Office before, you can clear the Office activation to avoid problems. Go to "License management" or "Key management" to find "Clear activation".

## Licenses description

### Retail licenses

Retail licenses can only be activated with a key. For Microsoft 365 (_formerly Office 365_) product, they can only be activated by logging into a Microsoft account with a genuine license.

Most retail licenses are linked to a Microsoft account.

### Volume licenses

Volume licenses can be activated using a key, or using KMS.

- Multiple Activation Key has a maximum number of activations, you can use and activate Office multiple times.
- Key Management Service activation requires the use of GVLK and the setup of a KMS host.

Activation with MAK is permanent if the activation information is not lost.

The KMS renewal settings is determined by the KMS host. Typically, an activation is valid for 180 days and is renewed every 7 days.

## License management

If you didn't install Office, or the existing version of Office is too old, Office Tool Plus will NOT read the Office license information, and will NOT show the license in the drop-down list.

### Install licenses

You can find the license you need in the license drop-down list, and then click "install license" to start the operation.

Office Tools Plus has integrated default keys for the retail licenses, and GVLK for the volume licenses. As a result, you can use KMS to activate your Office just after you installed the volume license without additionally installing GVLK.

When you are installing a license, the original licenses will NOT be covered, the licenses will coexist.

### Install other licenses

You can install other licenses if you need. Usually, Office licenses is stored at `C:\Program Files\Microsoft Office\root\Licenses16`, you can copy it to other computers. This feature will NOT install keys. You need to install it by yourself.

### Reset license status

This function will reset the license status. You can choose to reset all licenses or a certain license.

### Clear all licenses

This function will remove all Office licenses on your computer, but it will NOT delete the keys.

## Key management

### Install key

Installs a product key (replaces existing key) with a provided product key. If you get a message "Product SKU is not found" when installing a key, please install the correct license first.

An example of the key: XXXXX-XXXXX-XXXXX-XXXXX-XXXXX

### Uninstall key

Uninstalls an installed product key with the last five digits of the product key to uninstall, you can use "Display activation information" to find the key.

### View Installation ID (IID)

This function will display Installation ID for offline activation.

### Install Confirm ID (CID)

You can activate product with provided Confirmation ID.

## KMS management

KMS host can be a hostname，or an IP address.
For example：`kms.example.com` or `192.168.123.1`

The default port of the KMS host is 1688，You may choose the custom port if necessary.

You can only apply the port, or apply the port with the host address. If the KMS port is not empty, clicking "Set KMS host" will also save the port setting.

## Clear activation

This function will delete all Office licenses and keys on your system. Your Office Activation status will be lost. And if you don't install new licenses, Office applications will report an error at the first time it starts.

## Activation steps

### Key activation (online activation)

Type in your Office product key in "Key management" and click "install key", and click "activate".

If it reports a "product SKU not found" error,  install the correct license first.

### Phone activation (offline activation)

After you make sure you have installed the right key, click "view installation ID" in the menu of "key management", and install the CID you finally get.

If it reports a "product SKU not found" error,  install the correct license first.

### KMS activation (Internet connection required)

Choose and install a volume license in "license management". Then set a KMS host in "KMS management". Click on "set KMS host" and then click "activate".

## Display activation information

This function will show the information of all the keys and licenses installed on your computer, including SKU ID, key information, and license(s) status. If you use KMS licenses, it will also show the information of the KMS host.

## Display licenses information

This function will show all the existing licenses on your computer, regardless of whether the license has a key installed.
