(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{395:function(t,s,a){"use strict";a.r(s);var e=a(44),i=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"创建-office-iso"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-office-iso"}},[t._v("#")]),t._v(" 创建 Office ISO")]),t._v(" "),a("p",[t._v("创建 Office ISO 文件允许你与其他人分享 Office，或者用于大批量、多次安装。")]),t._v(" "),a("p",[t._v("为了获得更好的体验，请确保你始终从"),a("a",{attrs:{href:"https://otp.landian.vip/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方网站"),a("OutboundLink")],1),t._v("下载了最新的 with runtime 版本的 Office Tool Plus，有时候我们会更新 Runtime 文件夹和 RunMe.bat 文件，这些文件不会随着 Office Tool Plus 的自动升级而更新，需要手动重新下载。")]),t._v(" "),a("p",[t._v("我们建议您一个月更新一次 Office ISO，与 Office 更新频率保持一致，每个月的第二个星期二为 Office 固定的补丁日。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("使用 with runtime 版本的 Office Tool Plus 允许你在没有安装 .NET Desktop Runtime 的情况下直接运行程序，并且还可以设置参数，这对大批量安装非常有帮助。")])]),t._v(" "),a("h2",{attrs:{id:"下载-office-安装文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载-office-安装文件"}},[t._v("#")]),t._v(" 下载 Office 安装文件")]),t._v(" "),a("p",[t._v("确保自己使用的版本无误后，双击 RunMe.bat 打开 Office Tool Plus.")]),t._v(" "),a("p",[t._v("在部署页面，切换部署模式为“下载”。")]),t._v(" "),a("p",[t._v("添加产品，按需选择，比如 Office 2021 专业增强版 - 批量版。")]),t._v(" "),a("p",[t._v("添加语言，按需选择，如果一个都不加，安装的时候依然需要联网。")]),t._v(" "),a("p",[t._v("根据需要修改体系结构和通道设置，其他设置可以按需更改。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("如果你需要为其他版本的 Windows 下载 Office，例如在 Windows 10 中下载 Office 安装包给 Windows 7 使用，请更改 "),a("em",[t._v("下载设置 - UA")]),t._v(" 为对应系统版本，反之亦然。")])]),t._v(" "),a("p",[t._v("确认所有设置无误后，点击“开始部署”。待下载完成后，继续下一步操作。")]),t._v(" "),a("h2",{attrs:{id:"创建-office-iso-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-office-iso-文件"}},[t._v("#")]),t._v(" 创建 Office ISO 文件")]),t._v(" "),a("p",[t._v("下载完成后，确认“安装文件管理”中能加载并正确识别 Office 安装包信息。")]),t._v(" "),a("p",[t._v("切换部署模式为“创建 ISO 文件”，在这三种方式中，你可以选择任意一种方式进行：")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("创建包含默认配置的 Office ISO")]),t._v(" "),a("p",[t._v("保持刚才的设置不变，点击“开始部署”，选择文件保存路径以及文件名即可。")]),t._v(" "),a("p",[t._v("此模式下的 Office Tool Plus 会自动适配安装文件路径，因此你无须清空或者更改源路径属性。")])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("创建不含默认配置的 Office ISO")]),t._v(" "),a("p",[t._v("按下 F5，或者手动清空产品和语言，点击“开始部署”，选择文件保存路径以及文件名即可。")])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("创建自动安装的 Office ISO")]),t._v(" "),a("div",{staticClass:"language-txt extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("注意，该模式下的 Office Tool Plus 无法使用以下功能：\n- 安装完成后创建桌面快捷方式。\n- 安装完成后安装 iSlide 插件。\n- 安装完成后注销/关机/重启。\n- 使用 Office Tool Plus 作为安装模块。\n\n如有以上需求，请选择前两个方式创建 Office ISO 文件。\n")])])]),a("p",[t._v("保持刚才的设置不变。")]),t._v(" "),a("p",[t._v("用记事本或者 Visual Studio Code 等编辑器打开 RunMe.bat，修改 22 行内容如下：")]),t._v(" "),a("div",{staticClass:"language-batch extra-class"},[a("pre",{pre:!0,attrs:{class:"language-batch"}},[a("code",[a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("start")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Office Tool Plus.exe"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[t._v("/loadConfig")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%~dp0ConfigForISO.xml"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[t._v("/SourcePath")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%~dp0"')])]),t._v("\n")])])]),a("p",[t._v("保存 RunMe.bat，回到 Office Tool Plus，点击“开始部署”，选择文件保存路径以及文件名即可。")]),t._v(" "),a("p",[t._v("创建 ISO 完毕后，将 RunMe.bat 内容改为原来的样子，否则你将不能再次打开 Office Tool Plus.")]),t._v(" "),a("p",[t._v("原来的样子：")]),t._v(" "),a("div",{staticClass:"language-batch extra-class"},[a("pre",{pre:!0,attrs:{class:"language-batch"}},[a("code",[a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("start")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Office Tool Plus.exe"')])]),t._v("\n")])])])]),t._v(" "),a("p",[t._v("创建完成后，你应该测试一下 Office ISO 是否和你预期的一样工作。")])])}),[],!1,null,null,null);s.default=i.exports}}]);