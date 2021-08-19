(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{535:function(s,t,a){"use strict";a.r(t);var n=a(16),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"控制器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#控制器"}},[s._v("#")]),s._v(" 控制器")]),s._v(" "),a("p",[a("code",[s._v("苹果cms")]),s._v("插件中的控制器和"),a("code",[s._v("ThinkPHP5")]),s._v("的控制器类似，请查看"),a("code",[s._v("ThinkPHP5")]),s._v("控制器章节")]),s._v(" "),a("ul",[a("li",[s._v("请参考："),a("a",{attrs:{href:"https://www.kancloud.cn/manual/thinkphp5/118047",target:"_blank",rel:"noopener noreferrer"}},[s._v("thinkphp5控制器"),a("OutboundLink")],1)])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("特别提醒")]),s._v(" "),a("p",[s._v("苹果cms 插件控制器和"),a("code",[s._v("ThinkPHP5")]),s._v("控制器不同之处主要有以下几点")])]),s._v(" "),a("h2",{attrs:{id:"基类不同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基类不同"}},[s._v("#")]),s._v(" 基类不同")]),s._v(" "),a("ul",[a("li",[s._v("插件控制器基类为："),a("code",[s._v("\\think\\addons\\Controller")])]),s._v(" "),a("li",[s._v("ThinkPHP5控制器基类为："),a("code",[s._v("\\think\\Controller")])])]),s._v(" "),a("h2",{attrs:{id:"请求url不同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求url不同"}},[s._v("#")]),s._v(" 请求URL不同")]),s._v(" "),a("ul",[a("li",[s._v("插件控制器请求方法为："),a("code",[s._v("http://www.da.com/addons/mydemo/控制器名/方法")])]),s._v(" "),a("li",[s._v("ThinkPHP5控制器请求方法为："),a("code",[s._v("http://www.da.com/模块名/控制器名/方法")])])]),s._v(" "),a("h2",{attrs:{id:"当使用层级控制器时"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#当使用层级控制器时"}},[s._v("#")]),s._v(" 当使用层级控制器时")]),s._v(" "),a("ul",[a("li",[s._v("插件控制器请求方法为："),a("code",[s._v("http://www.da.com/addons/mydemo/目录名.控制器名/方法")])]),s._v(" "),a("li",[s._v("ThinkPHP5控制器请求方法为："),a("code",[s._v("http://www.da.com/模块名/目录名.控制器名/方法")])]),s._v(" "),a("li",[s._v("插件控制器必须继承"),a("code",[s._v("\\think\\addons\\Controller")]),s._v("这个基类控制器。")])]),s._v(" "),a("h2",{attrs:{id:"控制器定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#控制器定义"}},[s._v("#")]),s._v(" 控制器定义")]),s._v(" "),a("p",[s._v("一个典型的控制器代码如下：")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[s._v("addons"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("mydemo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("controller")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[s._v("think"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("addons"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Controller")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[s._v("Index")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Controller")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"当前插件暂无前台页面"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("ul",[a("li",[s._v("其文件位置位于"),a("code",[s._v("addons/mydemo/Index.php")]),s._v("。")])]),s._v(" "),a("h2",{attrs:{id:"控制器请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#控制器请求"}},[s._v("#")]),s._v(" 控制器请求")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("http://www.da.com/addons/mydemo/控制器名/控制器方法\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"基类控制器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基类控制器"}},[s._v("#")]),s._v(" 基类控制器")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("苹果cms 的基类控制器"),a("code",[s._v("\\think\\addons\\Controller")]),s._v("位于"),a("code",[s._v("vendor/karsonzhang/fastadmin-addons/src/addons/Controller.php")]),s._v("。")])]),s._v(" "),a("li",[a("p",[s._v("基类控制器是FastAdmin插件系统的一部分，在基类控制器进行了一系列的操作，包括插件控制器权限检查、语言包加载、布局设定、配置加载等操作。")])]),s._v(" "),a("li",[a("p",[s._v("同时基类控制器也是继承自"),a("code",[s._v("\\think\\Controller")]),s._v("，此控制器基类是ThinkPHP5自带的基类控制器，因此也可以实现绝大多数"),a("code",[s._v("ThinkPHP5")]),s._v("官方文档控制器章节的功能。")])])]),s._v(" "),a("h2",{attrs:{id:"基类属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基类属性"}},[s._v("#")]),s._v(" 基类属性")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$addon")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//插件名称")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$controller")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//控制器名称")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$action")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//方法名称")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 无需登录的方法,同时也就不需要鉴权了\n * @var array\n */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$noNeedLogin")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 无需鉴权的方法,但需要登录\n * @var array\n */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$noNeedRight")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 权限Auth，如果用户是登录状态，可以直接从中读取用户信息\n * @var Auth\n */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$auth")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 布局模板，默认不启用\n * @var string\n */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$layout")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);