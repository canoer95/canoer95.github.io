(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{1124:function(s,t,a){s.exports=a.p+"assets/img/image-20230625022124638.3d683f49.png"},1125:function(s,t,a){s.exports=a.p+"assets/img/image-20230625021940301.34173def.png"},1126:function(s,t,a){s.exports=a.p+"assets/img/image-20230625022837052.0cefc522.png"},1645:function(s,t,a){"use strict";a.r(t);var n=a(1),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"概述与安装"}},[s._v("概述与安装")]),s._v(" "),t("h3",{attrs:{id:"php-概述"}},[s._v("PHP 概述")]),s._v(" "),t("p",[s._v("PHP（Hypertext Preprocessor），超文本预处理器，原名 Personal Home Page，是一种创建动态交互性站点的强有力的服务器端的开源脚本语言")]),s._v(" "),t("ul",[t("li",[s._v("PHP 文件可包含文本、HTML、JavaScript代码和 PHP 代码")]),s._v(" "),t("li",[s._v("PHP 代码在服务器上执行，结果以纯 HTML 形式返回给浏览器")])]),s._v(" "),t("p",[s._v("有点像 JS？但功能更强大，可以面向过程和对象，属 C 语言系，内核为 C，效率不错")]),s._v(" "),t("h3",{attrs:{id:"安装和配置"}},[s._v("安装和配置")]),s._v(" "),t("blockquote",[t("p",[s._v("在windows下将Apache+PHP+Mysql 集成环境，拥有简单的图形和菜单安装和配置环境。PHP扩展、Apache模块，开启/关闭鼠标点点就搞定，再也不用亲自去修改配置文件了，WAMP它会去做。再也不用到处询问php的安装问题了，wampserver一切都搞定了。这个软件是完全免费的，可以在其官方网站下载到最新的版本。本文中使用的版本是WampServer 2.0f（发布日期2008年12月16日），其中包括Apache 2.2.11，PHP 5.2.8，MySQL 5.1.30")])]),s._v(" "),t("p",[s._v("PHP 服务器组件：Windows 系统可以使用 WampServer，下载地址：http://www.wampserver.com/，支持32位和64位系统，根据自己的系统选择版本")]),s._v(" "),t("p",[s._v("下载完成后，启动 wampmanager.exe，这时将启动一系列服务")]),s._v(" "),t("img",{attrs:{src:a(1124)}}),s._v(" "),t("p",[s._v("通过"),t("code",[s._v("localhost/index.php")]),s._v("将可以访问到 wamp 根目录 www 目录下的动态 html 文件（php 文件通过 apache 服务器渲染结果）")]),s._v(" "),t("p",[s._v("IDE：PhpStorm，下载地址：http://www.jetbrains.com/phpstorm/download/，收费")]),s._v(" "),t("p",[s._v("或者用 VSCode，相关插件")]),s._v(" "),t("img",{attrs:{src:a(1125)}}),s._v(" "),t("p",[s._v("它甚至内置了 MySQL，是不是意味着我根本不需要再装了？我 Java 也用这个数据库就是了，这么舒服？")]),s._v(" "),t("h2",{attrs:{id:"基础语法"}},[s._v("基础语法")]),s._v(" "),t("p",[s._v("就是在 HTML 页面里面嵌入 PHP 代码")]),s._v(" "),t("p",[s._v("test_mysql.php")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token php language-php"}},[t("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'<h1><center>NMSL<center></h1>'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'root'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$password")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$database")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$port")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NULL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$mysqli")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("mysqli")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'127.0.0.1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$user")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$password")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$database")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$port")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$mysqli")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("connect_error")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("die")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'Connect Error ('")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$mysqli")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("connect_errno")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("') '")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$mysqli")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("connect_error")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'<p>Connection OK '")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$mysqli")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("host_info")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'</p>'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'<p>Server '")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$mysqli")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("server_info")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'</p>'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'<p>Initial charset: '")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$mysqli")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("character_set_name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'</p>'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$mysqli")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("close")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("?>")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("img",{attrs:{src:a(1126)}}),s._v(" "),t("h2",{attrs:{id:"php-webshell"}},[s._v("PHP-WebShell")])])}),[],!1,null,null,null);t.default=r.exports}}]);