import { defineConfig } from 'vitepress'
import sidebar from './sidebar.mjs';
import nav from './nav.mjs';
// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "阿辰的文档库",
    description: "Richard-学习&&编程&&生活&&游戏",
    head: [["link", { rel: 'icon', href: "/head.ico" }]],
    markdown: {
        lineNumbers: true, //显示代码行数
        container: {
            tipLabel: '提示',
            warningLabel: '警告',
            dangerLabel: '危险',
            infoLabel: '信息',
            detailsLabel: '详细信息',
        },
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: 'logo.png',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '返回顶部',
        darkModeSwitchLabel: '外观',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        returnToTopLabel: '返回顶部',
        externalLinkIcon:true,
        // 导航栏
        nav: nav,
        // 侧边栏
        sidebar: sidebar,
        // 导航搜索

        search: {
            provider: 'local',
            options: {
                translations: {
                    button: {
                        buttonText: '搜索文档',
                        buttonAriaLabel: '搜索文档',
                    },
                    modal: {
                        noResultsText: '无法找到相关结果',
                        resetButtonTitle: '清除查询条件',
                        footer: {
                            selectText: '选择',
                            navigateText: '切换',
                            closeText: '关闭',
                        },
                    },
                },
            },
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/Richard233n' },
            {
                icon: 'npm',
                link: 'https://github.com/Richard233n'
            },
        ],
        lastUpdated: {
            text: '上次更新',
            formatOptions: {
                dateStyle: "medium",
                timeStyle: "short",
            },
        },
        outlineTitle: '在本页中',
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        footer: {
            message: 'RichardStudio官方文档库.',

            copyright: 'Copyright © 2025-power by Richard工程实验室'
        }
    },
    srcDir: 'docs',
})
