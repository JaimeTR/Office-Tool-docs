# Bienvenidos

## Introduction

Office Tool Plus es una herramienta poderosa y útil para Office Deployment.

Office Tool Plus se basa en [Office Deployment Tool](https://docs.microsoft.com/en-us/deployoffice/overview-office-deployment-tool) y [OSPP](https://docs.microsoft.com/en-us/DeployOffice/vlactivation/tools-to-manage-volume-activation-of-office). Puede implementar Office fácilmente. Ha integrado el motor de descarga Thunder para que puedas descargar Office más rápido. Ciertamente, puede usar las pequeñas funciones proporcionadas por Office Tool Plus para administrar y activar Office.

Se admiten los siguientes productos:

- Microsoft 365.
- Office 2016, 2019, 2021.
- Visio 2016, 2019, 2021 and Online Plan 2.
- Project 2016, 2019, 2021 y Cliente de escritorio en línea.

Pase lo que pase, Office Tool Plus es siempre su mejor ayudante.

## Características

- Cree la configuración de instalación de Office. La configuración se puede exportar a local o importar desde local o web.
- Descargue Office, compatible con `ALL` los canales de `ALL` Office y los idiomas de Office.
- Instale Office o modifique el Office existente, como agregar nuevos productos y aplicaciones, o desinstalar productos y aplicaciones.
- Create Office ISO, admite la configuración de instalación predeterminada y la configuración de instalación silenciosa.
- Activa Oficina. Admite activación en línea, activación telefónica y activación KMS.
- Admite la gestión de activación de Office, incluida la gestión de licencias, la gestión de claves y la gestión de KMS.
- Cambie el canal de actualización de Office, admita la actualización o degradación de Office sin reinstalar Office.
- Eliminar oficina. Fuerce la eliminación de Office mientras no se pueda desinstalar de forma normal, admita Office desde Office 2003 hasta la última versión de Office.
- Herramientas de Office integradas, incluido el restablecimiento de la configuración y la solución de problemas de Office.
- Convierta documentos de Office, basados ​​en Office COM. es rápido y estable.
- Personalice el tema, puede crear su Office Tool Plus especial.
- La configuración avanzada le permite usar funciones más avanzadas, como los canales internos de Office.

::: warning Atención

1. Es posible que el convertidor de documentos de Office no sea compatible con Office de 64 bits; intentaremos solucionar este problema en versiones futuras. Antes de que se solucione este problema, use esta función solo en Office de 32 bits.
2. Office Tool Plus solo proporciona administración de activación. Debe tener una licencia genuina para activar sus productos.

:::

::: Acerca de la conversión de edición minorista a volumen
La licencia de Office puede coexistir ahora, lo que significa que podemos tener más de una licencia a la vez.

Puede instalar una licencia por volumen además de la licencia minorista activada existente. Si activa la licencia por volumen, Office mostrará tanto la información de activación minorista como la información de activación por volumen.
:::

## Componentes y Estructura

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

Por lo general, Office Tool Plus descargará los componentes necesarios y mantendrá la última versión automáticamente.

Si algunos de los componentes se pierden o no se pueden descargar automáticamente, le sugerimos que vuelva a descargar Office Tool Plus para solucionar este problema.
