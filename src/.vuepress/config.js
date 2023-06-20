module.exports = {
    title: '道教之家',
    description: '道教之家CMS开源项目',
    base: "/",
    head: [
        ['meta',{ name: '360-site-verification', content: '922c3def288ce1ba4c43650447e41344'}],
        ['meta',{ name: 'baidu-site-verification', content: 'code-ZDiREwhsHN'}],
        ['meta',{ name: 'author', content: '盘龙阁权益保护委员会'}],
        ['meta',{ name: 'keywords', content: '道教,道学,道家,云道商,云道家,云道乐,云道航,云搜道,云之道,伍林堂,道教IT,道教技术,中网道研,道教互联网,道教大数据,道教研究,道教研究中心,伍林堂工作室,云之道数据,道教网站建设,道教网站开发,道教网站设计,道教网站管理,道教管理系统,道教网站源码'}],
        ['link', {rel: 'icon', href: `/favicon.ico`}],
        ['link', {rel: 'dns-prefetch', href: `https://www.isosou.cn/`}],
        ['link', {rel: 'dns-prefetch', href: `https://www.abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba.cn/`}],
        ['script',{src: '/js/jquery-3.5.1.min.js' }],
        ["script",{src: "/js/autopush-baidu.js"}],
        ["script",{src: "/js/autopush-360.js"}],
        ["script",{src: "/js/autopush-51la.js"}],
        ['script', { src: 'https://www.abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba.cn/daohang/html/js/jquery.cookie.js' }],
        ['script', { src: 'https://www.abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba.cn/daohang/html/js/jquery.fixed.js' }],
        ['script', { src: 'https://www.abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba.cn/daohang/html/js/init.fixed.js' }],
	['script', { 'async' src: 'https://tongji.wulintang.cn/wulintang' data-website-id='e86f591c-0f58-48e9-abcc-be7a5f52904e'}],    
        ['link', {rel: 'manifest', href: `/manifest.json`}],
        ['link', { rel: 'stylesheet', type: 'text/css', href: 'https://www.abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba.cn/ziti/font.css' }],
        ['link', { rel: 'stylesheet', type: 'text/css', href: 'https://www.abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba.cn/ziti/icon/chndao.css' }],
        ['link', { rel: 'stylesheet', type: 'text/css', href: 'https://www.abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba.cn/daohang/html/css/fixed.css' }],
    ],
    dest: './src/.vuepress/dist',
    markdown: {
     lineNumbers: true,   
      externalLinks: { class:'url',target: '_blank', rel: 'nofollow noopener noreferrer' }
    },
    evergreen: true,
    locales: {
    '/': {
      lang: 'zh-CN', 
    }
  },
    themeConfig: { 
    lastUpdated: '上次更新',    
    displayAllHeaders: false,
    smoothScroll: true,
    nextLinks: true,
    prevLinks: true,
        logo: '/logo.png',
        nav: [
          { text: '首页', link: '/' },
          { text: '指南', link: '/guide/' },
          { text: '配置', link: '/config/' },
          { text: '插件', link: '/plugin/' },
          {
            text: '关于我们',
            items: [
          { text: '关于我们', link: '/about/' },
          { text: '友情链接', link: '/about/link/' }
            ]
          },
        ],
        sidebar: 'auto',
        sidebarDepth: 4,
    },
 plugins: {
    'vuepress-plugin-comment-plus':{
	choosen: 'waline',    
        options: {
        el: '#valine-vuepress-comment',
        serverURL: 'https://api.taoisms.org.cn',
	lang: 'zh-CN',
        reaction: true,
	search: false,	
        avatar:'retro',
        meta: ['nick', 'mail', 'link'],
        requiredFields:['nick', 'mail', 'link'],
        emoji: [
      '//unpkg.com/@waline/emojis@1.1.0/alus',
      '//unpkg.com/@waline/emojis@1.1.0/bilibili',
      '//unpkg.com/@waline/emojis@1.1.0/bmoji',
      '//unpkg.com/@waline/emojis@1.1.0/qq',
      '//unpkg.com/@waline/emojis@1.1.0/tieba',
      '//unpkg.com/@waline/emojis@1.1.0/tw-emoji',
      '//unpkg.com/@waline/emojis@1.1.0/tw-flag',
      '//unpkg.com/@waline/emojis@1.1.0/weibo',
    ],	
         }
      },
    '@vuepress/back-to-top': true, 
    '@vuepress/search': {
        search: true,
        searchMaxSuggestions: 10 // 默认是5
        },
    '@vuepress/nprogress':true, //默认为true，设置为false可以关闭进度条
    '@vuepress-reco/vuepress-plugin-bgm-player':  // BGM播放器
      {
        audios: [
          {name: '太极韵',artist: '孟圆辉',url: '/music/tjy.mp3',cover: 'https://p3.music.126.net/gZ4epOefhp8hY9R4sPPZsA==/109951164767613459.jpg'},
          {name: '澄清韵',artist: '孟圆辉',url: '/music/cqy.mp3',cover: 'https://p3.music.126.net/gZ4epOefhp8hY9R4sPPZsA==/109951164767613459.jpg'},
          {name: '无上玉皇心印妙经',artist: '邓道成',url: '/music/xymj.mp3',cover: 'https://p3.music.126.net/jcJWP3exih4ALIggFoAE5Q==/109951165319490239.jpg'},
          {name: '停科偈',artist: '邓道成',url: '/music/tkj.mp3',cover: 'https://p3.music.126.net/pERZ94EIemRc6_i_Wn4fVw==/109951165349721088.jpg'},
        ],
        autoShrink: true,
      },
    '@vuepress/medium-zoom': {
        selector: '.content__default img',
        delay: 1000,
        options: {
          margin: 24,
          background: 'rgba(25,18,25,0.9)',
          scrollOffset: 40
      }
    },
   '@vuepress/active-header-links':{
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
        } ,
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: '有新内容更新啦~',
        buttonText: '盘它'
      }
    },    
   'social-share':{
    networks: ['qq', 'weibo', 'douban','twitter', 'facebook', 'reddit', 'telegram','whatsapp','line','skype'],  
    fallbackImage: '/logo.png',
   }, 
     'copyright':
      {
        noCopy: true, // 选中的文字将无法被复制
        minLength: 100, // 如果长度超过 100 个字符
      },
     'robots': {
        host: "https://www.taoisms.org.cn",
        disallowAll: false,
        allowAll: true,      
        sitemap: "/sitemap.xml",
        policies: [
            {
                userAgent: '*',
                disallow: [
                    '/admin','/login'
                ],
                allow: [    // Optional: Allowed paths. 
                    'products','blog'
                ]
            }
        ]
    },
    'sitemap': {
      hostname: "https://www.taoisms.org.cn",
      // 排除无实际内容的页面
      exclude: ["/404.html"]
    },
    "vuepress-plugin-tags": {
      type: 'rainbow',
      selector: '.page .content__default h1',
      rainbows: [ // 将你要随机的标签样式组在这里定义
        {
          color: '#f4e0a7',  // 标签字体颜色
          border: '1px solid #d14836', // 标签边框颜色
          backgroundColor: '#d14836', // 标签背景颜色
        },
        {
          color: '#f4e0a7',  // 标签字体颜色
          border: '1px solid #000000', // 标签边框颜色
          backgroundColor: '#000000', // 标签背景颜色
        }
      ]
    },
   'vuepress-plugin-code-copy':true,  
   'vuepress-plugin-baidu-tongji-analytics':{
      key: 'bf525547fcd10751ac58cd1e30ab6814',
      open:'true'
    },
   'qrcode':{
        labelText:'手机浏览',
        size:'small'
    },
   'vuepress-plugin-sponsor':
      {
        theme: 'simple',
        alipay: '/dashang/zhifubao.png',
        wechat: '/dashang/weixin.png',
        qq: '/dashang/qq.png',
        paypal: 'https://paypal.me/wulintang',
        duration: 2000
      },
   'vuepress-plugin-rss':
        {
          base_url: '/', // required
          site_url: 'https://www.taoisms.org.cn', // required
          copyright: '道教之家 版权所有', // optional
          // filter some post
          filter: (frontmatter) => { return [true|false] },
          // How much articles
          count: 20
        },
 }
}
