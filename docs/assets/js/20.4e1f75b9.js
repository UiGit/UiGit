(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{498:function(a,_,t){"use strict";t.r(_);var e=t(16),s=Object(e.a)({},(function(){var a=this,_=a.$createElement,t=a._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"常见问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[a._v("#")]),a._v(" 常见问题")]),a._v(" "),t("h2",{attrs:{id:"为什么无法在线播放"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么无法在线播放"}},[a._v("#")]),a._v(" 为什么无法在线播放?")]),a._v(" "),t("p",[a._v("程序只提供数据管理功能，无法直接实现站内播放功能，如有需要请自行整合第三方提供的插件。")]),a._v(" "),t("h2",{attrs:{id:"上传失败常见问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#上传失败常见问题"}},[a._v("#")]),a._v(" 上传失败常见问题？")]),a._v(" "),t("p",[a._v("由于采用最新的TP框架，需要开启"),t("code",[a._v("php")]),a._v("的"),t("code",[a._v("fileinfo")]),a._v("支持库，"),t("code",[a._v("php.ini")]),a._v("里 "),t("code",[a._v("extension=php_fileinfo.dll；")]),a._v("宝塔等面板里直接安装开启 。\n上传失败问题请检查"),t("code",[a._v("php")]),a._v("临时文件目录权限和cms系统文件存储目录权限。\n"),t("code",[a._v("windows")]),a._v("一般是："),t("code",[a._v("C:/windows/temp，``linux")]),a._v("一般是"),t("code",[a._v("/var/tmp")]),a._v("。 "),t("code",[a._v("cms")]),a._v("存储目录"),t("code",[a._v("upload")]),a._v("。\n如果开启第三方存储，请检查三方存储配置信息。\n也可能是"),t("code",[a._v("php.ini")]),a._v("配置文件里"),t("code",[a._v("post")]),a._v("和"),t("code",[a._v("upload")]),a._v("大小限制，修改的值大一些即可。\n"),t("code",[a._v("upload_max_filesize = 8M")]),a._v(" "),t("code",[a._v("post_max_size = 10M")])]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("如果使用的是"),t("code",[a._v("php5.")]),a._v("6版本（php7版本不受影响），还需要设置"),t("code",[a._v("php.ini")]),a._v("开启"),t("code",[a._v("always_populate_raw_post_data = -1")]),a._v(" 这个选项，也就是去掉这项配置前面的分号即可。")])]),a._v(" "),t("h2",{attrs:{id:"运行安装页面出现空白页面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行安装页面出现空白页面"}},[a._v("#")]),a._v(" 运行安装页面出现空白页面")]),a._v(" "),t("ul",[t("li",[a._v("该情况一般为Runtime目录没有修改写入权限")])]),a._v(" "),t("h2",{attrs:{id:"提示-sqlstate-22001"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提示-sqlstate-22001"}},[a._v("#")]),a._v(" 提示 SQLSTATE_22001")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("SQLSTATE[22001]: String data, right truncated: 1406 Data too long for column '' at row 1  或者 Warning: 1265 Data truncated for column 类似错误")])]),a._v(" "),t("p",[a._v("该错误就插入字段长度超过设定的长度，一般程序会在数据库字段设置字符长度在插入之前程序很少会先判断数据长度和截取数据 这样会影响性能，所以你就需要修改你数据库的配置文件一般在"),t("code",[a._v("MYSQL")]),a._v(" 安装目录中的"),t("code",[a._v("my.ini")]),a._v("中 搜索"),t("code",[a._v('sql-mode sql-mode="STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION"')]),a._v("\n把其中的"),t("code",[a._v("STRICT_TRANS_TABLES")]),a._v(",去掉 建议使用该方法\n"),t("code",[a._v('sql-mode="NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION"')]),a._v("\n或者把\n"),t("code",[a._v('sql-mode="STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION"')]),a._v(" 直接删除")]),a._v(" "),t("h2",{attrs:{id:"数据库连接配置文件。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库连接配置文件。"}},[a._v("#")]),a._v(" 数据库连接配置文件。")]),a._v(" "),t("p",[a._v("RE:手动修改数据库连接信息，数据库密码等/application/database.php")]),a._v(" "),t("h2",{attrs:{id:"如何重装苹果cms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何重装苹果cms"}},[a._v("#")]),a._v(" 如何重装苹果cms？")]),a._v(" "),t("p",[a._v("RE:需要删除/application/data/install/install.lock")]),a._v(" "),t("h2",{attrs:{id:"采集资源为何播放不了"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#采集资源为何播放不了"}},[a._v("#")]),a._v(" 采集资源为何播放不了？")]),a._v(" "),t("p",[a._v("（资源类型是youku、tudou、iqiyi等等）第三方网址")]),a._v(" "),t("ul",[t("li",[a._v("方法1，整合资源站的播放器js文件。")]),a._v(" "),t("li",[a._v("方案2，开启全局解析或独立解析和播放器解析状态。")])]),a._v(" "),t("h2",{attrs:{id:"宝塔nginx环境404"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#宝塔nginx环境404"}},[a._v("#")]),a._v(" 宝塔Nginx环境404？")]),a._v(" "),t("p",[a._v("宝塔Nginx环境下，程序安装完毕后除非首页其他页面全部404的问题？\nRE:方法，进入宝塔软件设置，找到对应的php版本-设置，安装扩展，找到PATH_INFO这项，点击关闭，然后重新安装一下就ok了，这个可能是宝塔的bug。")]),a._v(" "),t("h2",{attrs:{id:"采集完数据后为何无法播放"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#采集完数据后为何无法播放"}},[a._v("#")]),a._v(" 采集完数据后为何无法播放？？？")]),a._v(" "),t("p",[a._v("RE:检查采集数据的播放地址，如果是完成的http地址，则需要开启播放器的解析状态用解析播放；如果采集的数据ID可会直接用本地播放器来播放。")]),a._v(" "),t("h2",{attrs:{id:"为何新增加了分类-前台页面进入提示没有权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为何新增加了分类-前台页面进入提示没有权限"}},[a._v("#")]),a._v(" 为何新增加了分类，前台页面进入提示没有权限？？？")]),a._v(" "),t("p",[a._v("RE:因为新加的分类默认所有会员组都是没有权限的，需要进入会员组里配置每个组的分类权限，保存一下即可。")]),a._v(" "),t("h2",{attrs:{id:"改乱了怎么办"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#改乱了怎么办"}},[a._v("#")]),a._v(" 改乱了怎么办？")]),a._v(" "),t("ul",[t("li",[a._v("路由规则改错了，页面权都打不开了，怎么恢复到默认的？？？")]),a._v(" "),t("li",[a._v("下载完整安装包，复制application/route.php 替换到网站里，就可以打开了，然后在后台重新修改下路由规则。")])]),a._v(" "),t("h2",{attrs:{id:"nginx下除了首页其他都是404怎么办"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx下除了首页其他都是404怎么办"}},[a._v("#")]),a._v(" nginx下除了首页其他都是404怎么办？")]),a._v(" "),t("p",[a._v("修改一下伪静态规则，一般都可以解决了。 如果修改了后台文件入口admin.php，则改为对应的文件名。")]),a._v(" "),t("div",{staticClass:"language-linux line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(" if (!-e $request_filename) {\n   rewrite ^/index.php(.*)$ /index.php?s=$1 last;\n   rewrite ^/admin.php(.*)$ /admin.php?s=$1 last;\n   rewrite ^/api.php(.*)$ /api.php?s=$1 last;\n   rewrite ^(.*)$ /index.php?s=$1 last;\n   break;\n}\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("h2",{attrs:{id:"页面提交数据后过段时间才生效"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#页面提交数据后过段时间才生效"}},[a._v("#")]),a._v(" 页面提交数据后过段时间才生效")]),a._v(" "),t("p",[a._v("这个一般是web服务配置了缓存导致的~~\n访问"),t("code",[a._v("phpinfo()")]),a._v(",看看是不是你开启了"),t("code",[a._v("ZendOpcache")]),a._v("之类的"),t("code",[a._v("opcode")]),a._v("缓存."),t("code",[a._v("ZendOpcache")]),a._v("里面有个过期时间配置,如"),t("code",[a._v("opcache")]),a._v("."),t("code",[a._v("revalidate_freq=60")]),a._v(",表示60秒后脚本再次被访问时会检测PHP文件的时间戳,有改变则更新opcode缓存,你可以设为0,这样每次访问都会检测文件时间戳,你的修改就能生效了.\n在"),t("code",[a._v("php.ini")]),a._v("文件中找到\n"),t("code",[a._v("opcache.enable=1")]),a._v("\n或\n"),t("code",[a._v("opcache.enable_cli=1")]),a._v("\n改为"),t("code",[a._v("0")]),a._v("，重启"),t("code",[a._v("php-fpm，done")])]),a._v(" "),t("h2",{attrs:{id:"为什么播放器不能全屏"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么播放器不能全屏"}},[a._v("#")]),a._v(" 为什么播放器不能全屏？")])])}),[],!1,null,null,null);_.default=s.exports}}]);