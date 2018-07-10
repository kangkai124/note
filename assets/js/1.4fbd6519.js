(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{144:function(t,s,a){t.exports={example:"example_1g94-agb"}},146:function(t,s,a){"use strict";var e=a(144),n=a.n(e);s.default=n.a},168:function(t,s,a){"use strict";a.r(s);var e={mounted:function(){document.querySelector(".".concat(this.$style.example)).textContent="这个块是被内联的脚本渲染的，样式也采用了内联样式。"}},n=a(146),r=a(0);var c=Object(r.a)(e,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),a("p",[t._v("当你在开发一个 VuePress 应用时，由于所有的页面在生成静态 HTML 时都需要通过 Node.js 服务端渲染，因此所有的 Vue 相关代码都应当遵循 "),a("a",{attrs:{href:"https://ssr.vuejs.org/zh/universal.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("编写通用代码"),a("OutboundLink")],1),t._v(" 的要求。简而言之，请确保只在 "),a("code",[t._v("beforeMount")]),t._v(" 或者 "),a("code",[t._v("mounted")]),t._v(" 访问浏览器 / DOM 的 API。")]),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),a("div",{staticClass:"language-text"},[a("pre",[a("code",[t._v(t._s(2))])])]),t._m(12),a("p",[t._v("同样地，也可以使用指令:")]),t._m(13),t._m(14),t._m(15),a("div",{staticClass:"language-text"},[a("pre",[a("code",t._l(3,function(s){return a("span",[t._v(t._s(s)+" ")])}))])]),t._m(16),a("p",[t._v("编译后的组件没有私有数据，但可以访问 "),a("router-link",{attrs:{to:"./custom-themes.html#网站和页面的元数据"}},[t._v("网站的元数据")]),t._v("，举例来说：")],1),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27),t._m(28),t._m(29),a("p",[t._v("你可以直接使用这些组件在任意的 Markdown 文件中（组件名是通过文件名取到的）：")]),t._m(30),a("demo-1"),a("OtherComponent"),a("Foo-Bar"),t._m(31),t._m(32),t._m(33),t._m(34),a("p",[t._v("然后你就可以在 Markdown 或是组件中使用如下代码：")]),t._m(35),t._m(36),t._m(37),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._m(38),a("p",[t._v("对于那些没有内置的预处理器，除了安装对应的依赖，你还需要 "),a("router-link",{attrs:{to:"./../config/#configurewebpack"}},[t._v("拓展内部的 Webpack 配置")]),t._v("。")],1)]),t._m(39),t._m(40),a("p",{staticClass:"demo",class:t.$style.example}),t._m(41),a("h3",{attrs:{id:"outboundlink"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outboundlink","aria-hidden":"true"}},[t._v("#")]),t._v(" OutboundLink "),a("Badge",{attrs:{text:"stable"}})],1),a("p",[t._v("("),a("OutboundLink"),t._v(") 用来表明当前是一个外部链接。在 VuePress 中这个组件会紧跟在每一个外部链接后面。")],1),a("h3",{attrs:{id:"clientonly"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clientonly","aria-hidden":"true"}},[t._v("#")]),t._v(" ClientOnly "),a("Badge",{attrs:{text:"stable"}})],1),t._m(42),a("h3",{attrs:{id:"content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#content","aria-hidden":"true"}},[t._v("#")]),t._v(" Content "),a("Badge",{attrs:{text:"beta",type:"warn"}})],1),t._m(43),a("p",[t._v("当前的 "),a("code",[t._v(".md")]),t._v(" 文件渲染的内容，当你在使用 "),a("router-link",{attrs:{to:"./../default-theme-config/#特定页面的自定义布局"}},[t._v("自定义布局")]),t._v(" 时，它将非常有用。")],1),t._m(44),t._m(45),a("ul",[a("li",[a("router-link",{attrs:{to:"./custom-themes.html#获取渲染内容"}},[t._v("自定义主题 > 获取渲染内容")])],1)]),a("h3",{attrs:{id:"badge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#badge","aria-hidden":"true"}},[t._v("#")]),t._v(" Badge "),a("Badge",{attrs:{text:"beta",type:"warn"}}),a("Badge",{attrs:{text:"0.10.1+"}})],1),t._m(46),a("p",[t._v("你可以在标题文本的末尾，使用这个组件来为某些 API 添加一些状态：")]),t._m(47)],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"在-markdown-中-使用-vue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-markdown-中-使用-vue","aria-hidden":"true"}},[this._v("#")]),this._v(" 在 Markdown 中 使用 Vue")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"浏览器的-api-访问限制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的-api-访问限制","aria-hidden":"true"}},[this._v("#")]),this._v(" 浏览器的 API 访问限制")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果你正在使用，或者需要展示一个对于 SSR 不怎么友好的组件（比如包含了自定义指令），你可以将它们包裹在内置的 "),s("code",[this._v("<ClientOnly>")]),this._v(" 组件中：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ClientOnly")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("NonSSRFriendlyComponent")]),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ClientOnly")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("请注意，这并不能解决一些组件或库在"),s("strong",[this._v("导入")]),this._v("时就试图访问浏览器 API 的问题 —— 如果需要使用这样的组件或库，你需要在合适的生命周期钩子中"),s("strong",[this._v("动态导入")]),this._v("它们：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}},[t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("mounted")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'./lib-that-access-window-on-import'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("then")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("module "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token comment"}},[t._v("// use code")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"模板语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模板语法","aria-hidden":"true"}},[this._v("#")]),this._v(" 模板语法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"插值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插值","aria-hidden":"true"}},[this._v("#")]),this._v(" 插值")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("每一个 Markdown 文件将首先被编译成 HTML，接着作为一个 Vue 组件传入 "),s("code",[this._v("vue-loader")]),this._v("，这意味着你可以在文本中使用 Vue 风格的插值：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Input")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[this._v("{{ 1 + 1 }}\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Output")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指令","aria-hidden":"true"}},[this._v("#")]),this._v(" 指令")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Input")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("v-for")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("i in 3"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ i }} "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Output")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"访问网站以及页面的数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#访问网站以及页面的数据","aria-hidden":"true"}},[this._v("#")]),this._v(" 访问网站以及页面的数据")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Input")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[this._v("{{ $page }}\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Output")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"path"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"/using-vue.html"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"title"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Using Vue in Markdown"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"frontmatter"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"escaping"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#escaping","aria-hidden":"true"}},[this._v("#")]),this._v(" Escaping")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("默认情况下，块级 (block) 的代码块将会被自动包裹在 "),s("code",[this._v("v-pre")]),this._v(" 中。如果你想要在内联 (inline) 的代码块或者普通文本中显示原始的大括号，或者一些 Vue 特定的语法，你需要使用自定义容器 "),s("code",[this._v("v-pre")]),this._v(" 来包裹：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Input")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[this._v("::: v-pre\n"),s("span",{attrs:{class:"token code keyword"}},[this._v("`{{ This will be displayed as-is }}`")]),this._v("\n:::\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Output")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{pre:!0},[s("p",[s("code",[this._v("{{ This will be displayed as-is }}")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用组件","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用组件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("所有在 "),s("code",[this._v(".vuepress/components")]),this._v(" 中找到的 "),s("code",[this._v("*.vue")]),this._v(" 文件将会自动地被注册为全局的异步组件，如：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v(".\n└─ .vuepress\n   └─ components\n      ├─ demo-1.vue\n      ├─ OtherComponent.vue\n      └─ Foo\n         └─ Bar.vue\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("demo-1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("OtherComponent")]),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Foo-Bar")]),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("重要！")]),s("p",[this._v("请确保一个自定义组件的名字包含连接符或者是 PascalCase，否则，它将会被视为一个内联元素，并被包裹在一个 "),s("code",[this._v("<p>")]),this._v(" 标签中，这将会导致 HTML 渲染紊乱，因为 HTML 标准规定， "),s("code",[this._v("<p>")]),this._v(" 标签中不允许放置任何块级元素。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用预处理器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用预处理器","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用预处理器")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("VuePress 对以下预处理器已经内置相关的 webpack 配置："),a("code",[t._v("sass")]),t._v("、"),a("code",[t._v("scss")]),t._v("、"),a("code",[t._v("less")]),t._v("、"),a("code",[t._v("stylus")]),t._v(" 和 "),a("code",[t._v("pug")]),t._v("。要使用它们你只需要在项目中安装对应的依赖即可。例如，要使用 "),a("code",[t._v("sass")]),t._v("，需要安装：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("yarn add -D sass-loader node-sass\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("lang")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("sass"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token style language-css"}},[t._v("\n  .title\n    "),a("span",{attrs:{class:"token property"}},[t._v("font-size")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("要在组件中使用 "),s("code",[this._v('<template lang="pug">')]),this._v("，则需要安装 "),s("code",[this._v("pug")]),this._v(" 和 "),s("code",[this._v("pug-plain-loader")]),this._v(":")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("yarn add -D pug pug-plain-loader\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("需要指出的是，如果你是一个 "),s("code",[this._v("stylus")]),this._v(" 用户，你并不需要在你的项目中安装 "),s("code",[this._v("stylus")]),this._v(" 和 "),s("code",[this._v("stylus-loader")]),this._v("，因为 VuePress 已经内置了它们。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"脚本和样式提升"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#脚本和样式提升","aria-hidden":"true"}},[this._v("#")]),this._v(" 脚本和样式提升")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("有时，你可以只想在当前页面应用一些 JavaScript 或者 CSS，在这种情况下，你可以直接在 Markdown 文件中使用原生的 "),a("code",[t._v("<script>")]),t._v(" 或者 "),a("code",[t._v("<style>")]),t._v(" 标签，它们将会从编译后的 HTML 文件中提取出来，并作为生成的 Vue 单文件组件的 "),a("code",[t._v("<script>")]),t._v(" 和 "),a("code",[t._v("<style>")]),t._v(" 标签。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"内置的组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内置的组件","aria-hidden":"true"}},[this._v("#")]),this._v(" 内置的组件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("参考 "),s("a",{attrs:{href:"#%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84-api-%E8%AE%BF%E9%97%AE%E9%99%90%E5%88%B6"}},[this._v("浏览器的 API 访问限制")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[s("strong",[this._v("Props")]),this._v(":")]),s("ul",[s("li",[s("code",[this._v("custom")]),this._v(" - boolean")])])]),s("li",[s("p",[s("strong",[this._v("用法")]),this._v("：")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("<")]),this._v("Content")]),s("span",{attrs:{class:"token punctuation"}},[this._v("/>")])]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("参考:")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("p",[a("strong",[t._v("Props")]),t._v(":")]),a("ul",[a("li",[a("code",[t._v("text")]),t._v(" - string")]),a("li",[a("code",[t._v("type")]),t._v(" - string, 可选值： "),a("code",[t._v('"tip"|"warn"|"error"')]),t._v("，默认值是： "),a("code",[t._v('"tip"')])]),a("li",[a("code",[t._v("vertical")]),t._v(" - string, 可选值： "),a("code",[t._v('"top"|"middle"')]),t._v("，默认值是： "),a("code",[t._v('"top"')])])])]),a("li",[a("p",[a("strong",[t._v("Usage")]),t._v(":")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[s("span",{attrs:{class:"token title important"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("###")]),this._v(' Badge <Badge text="beta" type="warn"/> <Badge text="0.10.1+"/>')]),this._v("\n")])])])}],!1,function(t){this.$style=n.default.locals||n.default},null,null);s.default=c.exports}}]);