# Deployment Examples

When deploying Office, installation and uninstallation can occur simultaneously, so you can combine multiple steps without having to perform them separately.

::: tip Tip
**The following examples are for learning only. For actual deployment, please configure according to your needs or actual situation.**
:::

## Fresh install

### Install Microsoft 365 Family

- Add product and select Microsoft 365 (Family & Personal).
- Add language and select English.

Start deploy.

### Install Office 2019 Volume (2021 is the same)

- Add product and select Office Pro Plus 2019 - Volume.
- Add language and select English.
- Change channel to Office 2019 Perpetual Enterprise.

Start deploy.

### Install Office 2019 Volume with Visio (2021 is the same)

- Add product and select Office Pro Plus 2019 - Volume.
- Add product and select Visio Pro 2019 - Volume.
- Add language and select English.
- Change channel to Office 2019 Perpetual Enterprise.

Start deploy.

## Adding products to an existing Office installation

### Adding Visio (Project is the same)

- Add product and select Visio Pro 2019 - Volume.

You can also choose a retail version and activate it with an account or a key.

Start deploy.

## Modifying products

### Migrate from Microsoft 365 (Family & Personal) to Microsoft 365 Apps for Enterprise

- Mark Microsoft 365 (Family & Personal) as uninstall.
- Add product and select Microsoft 365 Apps for Enterprise.

Start deploy.

## Languages

Same as adding/modifying product.

## Modifying applications

Check an application that you want to install. Uncheck an application that you want to uninstall.

Keep others that you don't want to change.

Start deploy.

If the applications does not have the items you want, such as Access, add a new product and select Access.

## Upgrade Office

If the client can not connect to Internet, you can download Office installation from another PC, then make an ISO or copy the files to the client, add the same products as installed products, finally start deploy.

## Migration architecture

Office Deployment Tool supports changing Office from 32-bit to 64-bit (or 64-bit to 32-bit) automatically.

First change the architecture to the one you want. If you want to migrate to 64-bit Office, then select 64-bit now.

Check *Advanced settings - upgrade settings - migrate architecture*, then start deploy.

Office Deployment Tool will first uninstall your Office and then install the 64-bit Office.
