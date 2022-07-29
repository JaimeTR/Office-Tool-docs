module.exports = {
	base: '/',
	title: 'Office Tool Plus Docs',
	description: 'Official Office Tool Plus documentation.',
	head: [
		['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
		['link', { rel: 'icon', href: '/assets/img/logo.ico' }],
		[
			'script',
			{
				async: true,
				src: 'https://www.googletagmanager.com/gtag/js?id=G-K4SGXHF07B',
			}
		],
		[
			'script',
			{},
			[
				"window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-K4SGXHF07B');",
			]
		]
	],
	locales: {
		'/': {
			lang: 'en-US',
			title: 'Office Tool Plus Docs',
			description: 'Office Tool Plus documentation.'
		},
		'/zh-cn/': {
			lang: 'zh-CN',
			title: 'Office Tool Plus Docs',
			description: 'Office Tool Plus 官方帮助文档。'
		},
		'/zh-tw/': {
			lang: 'zh-TW',
			title: 'Office Tool Plus Docs',
			description: 'Office Tool Plus 協助文件'
		},
		'/zh-es/': {
			lang: 'zh-ES',
			title: 'Office Tool Plus Docs',
			description: 'Office Tool Plus documentación.'
		}

	},
	themeConfig: {
		repo: 'YerongAI/Office-Tool',
		docsRepo: 'YerongAI/Office-Tool-docs',
		docsDir: 'docs',
		docsBranch: 'main',
		editLinks: true,
		smoothScroll: true,
		locales: {
			'/': {
				selectText: 'Languages',
				label: 'English',
				ariaLabel: 'Languages',
				editLinkText: 'Edit this page on GitHub',
				serviceWorker: {
					updatePopup: {
						message: "New content is available.",
						buttonText: "Refresh"
					}
				},
				nav: [
					{ text: 'Start', link: '/start/' },
					{ text: 'Deploy', link: '/deploy/' },
					{ text: 'Activate', link: '/activate/' },
					{ text: 'More', link: '/others/toolbox' },
					{ text: 'Blog (Chinese)', link: 'https://www.coolhub.top' },
					{
						text: 'Group', items: [
							{ text: 'Telegram', link: 'https://otp.landian.vip/grouplink/telegram.html' }
						]
					}
				],
				sidebar: {
					'/start/': [
						'',
						'download',
						'requirement'
					],
					'/deploy/': [
						'',
						'configuration-options',
						'create-iso',
						'faq'
					],
					'/activate/': [
						'',
						'faq'
					],
					'/others/': [
						'toolbox',
						'converter',
						''
					],
					'/': [
						''
					]
				}
			},
			'/zh-cn/': {
				selectText: '选择语言',
				label: '简体中文',
				editLinkText: '在 GitHub 上编辑此页',
				serviceWorker: {
					updatePopup: {
						message: "发现新内容可用.",
						buttonText: "刷新"
					}
				},
				nav: [
					{ text: '入门', link: '/zh-cn/start/' },
					{ text: '部署', link: '/zh-cn/deploy/' },
					{ text: '激活', link: '/zh-cn/activate/' },
					{ text: '更多', link: '/zh-cn/others/toolbox' },
					{ text: '官方博客', link: 'https://www.coolhub.top' },
					{
						text: '群组', items: [
							{ text: 'QQ: 713837704', link: 'https://otp.landian.vip/grouplink/qq.html' },
							{ text: 'Telegram', link: 'https://otp.landian.vip/grouplink/telegram.html' }
						]
					}
				],
				sidebar: {
					'/zh-cn/start/': [
						'',
						'requirement',
						'download'
					],
					'/zh-cn/deploy/': [
						'',
						'configuration-options',
						'create-iso',
						'faq'
					],
					'/zh-cn/activate/': [
						'',
						'faq'
					],
					'/zh-cn/others/': [
						'toolbox',
						'converter',
						''
					],
					'/zh-cn/': [
						''
					]
				}
			},
			'/zh-tw/': {
				selectText: '選擇語言',
				label: '繁體中文 (台灣)',
				editLinkText: '在 GitHub 編輯此頁',
				serviceWorker: {
					updatePopup: {
						message: "發現新版本可用",
						buttonText: "重新載入"
					}
				},
				nav: [
					{ text: '入門', link: '/zh-tw/start/' },
					{ text: '部署', link: '/zh-tw/deploy/' },
					{ text: '啟用', link: '/zh-tw/activate/' },
					{ text: '更多', link: '/zh-tw/others/toolbox' },
					{ text: '作者Blog', link: 'https://www.coolhub.top' },
					{ text: 'Cotpear', link: 'https://www.cotpear.com?utm_source=docs-otp-web' },
					{
						text: '社群', items: [
							{ text: 'Telegram 華人群組', link: 'https://otp.landian.vip/grouplink/telegram.html' },
							{ text: 'Telegram 台灣頻道', link: 'https://t.me/ot_channel_tw' },
							{ text: 'OTP 台灣管理團隊', link: 'https://go.cotpear.com/otp-tw' },
						]
					}
				],
				sidebar: {
					'/zh-tw/start/': [
						'',
						'requirement',
						'download'
					],
					'/zh-tw/deploy/': [
						'',
						'configuration-options',
						'create-iso',
						'faq'
					],
					'/zh-tw/activate/': [
						'',
						'faq'
					],
					'/zh-tw/others/': [
						'toolbox',
						'converter',
						''
					],
					'/zh-tw/': [
						''
					]
				}
			},
			'/zh-es/': {
				selectText: 'Selecciona el idioma',
				label: 'Español',
				editLinkText: 'Editar en GitHub',
				serviceWorker: {
					updatePopup: {
						message: "Se ha encontrado una nueva versión del sitio.",
						buttonText: "Actualizar"
					}
				},
				nav: [
					{ text: 'Introducción', link: '/zh-es/start/' },
					{ text: 'Deploy', link: '/zh-es/deploy/' },
					{ text: 'Activar', link: '/zh-es/activate/' },
					{ text: 'Más', link: '/zh-es/others/toolbox' },
					{ text: 'Blog', link: 'https://www.coolhub.top' },
					{
						text: 'Grupos', items: [
							{ text: 'Telegram', link: 'https://t.me/ot_channel_es' },
						]
					}
				],
				sidebar: {
					'/zh-es/start/': [
						'',
						'requirement',
						'download'
					],
					'/zh-es/deploy/': [
						'',
						'configuration-options',
						'create-iso',
						'faq'
					],
					'/zh-es/activate/': [
						'',
						'faq'
					],
					'/zh-es/others/': [
						'toolbox',
						'converter',
						''
					],
					'/zh-es/': [
						''
					]
				}
			},
		}
	}
}
