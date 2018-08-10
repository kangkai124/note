(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{148:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"vue-源码学习"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue-源码学习","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue 源码学习")]),n("h2",{attrs:{id:"_1-vue-的本质"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-vue-的本质","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. Vue 的本质")]),n("p",[t._v("runtime-only 版的 vue.js 的构建入口文件是 "),n("code",[t._v("src/platforms/web/entry-runtime.js")]),t._v("，runtime + compile 版的 vue.js 的构建入口文件是 "),n("code",[t._v("src/platforms/web/entry-runtime-with-compile.js")]),t._v("。在文件中顺着 Vue 的引入层层往上找，就会找到定义 Vue 的文件，"),n("code",[t._v("src/core/instance/index.js")]),t._v("。Vue 的定义如下：")]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" initMixin "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'./init'")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" stateMixin "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'./state'")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" renderMixin "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'./render'")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" eventsMixin "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'./events'")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" lifecycleMixin "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'./lifecycle'")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" warn "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'../util/index'")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("Vue")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'production'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n    "),n("span",{attrs:{class:"token operator"}},[t._v("!")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("warn")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'Vue is a constructor and should be called with the `new` keyword'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("_init")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token function"}},[t._v("initMixin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vue"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("stateMixin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vue"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("eventsMixin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vue"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("lifecycleMixin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vue"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("renderMixin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vue"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" Vue\n")])])]),n("p",[t._v("Vue 就是一个用 function 实现的类，通过 new Vue 去实例化它。用函数的方式定义类而不是用 es6 的 class 方法，是因为下面会有一些函数（如上），他们会在 Vue 的 prototype 上扩展一些方法。"),n("em",[t._v("Vue 按功能把这些扩展分散到多个模块（文件）中去实现，非常方便代码的维护和管理")]),t._v("，但是这样用 class 是很难实现的，因此使用了函数的定义。")]),n("h2",{attrs:{id:"_2-new-vue-的时候发生了什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-new-vue-的时候发生了什么","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. new Vue 的时候发生了什么")]),n("p",[t._v("从上面 Vue 类的定义看到，new 一个实例时会调用 "),n("code",[t._v("this._init")]),t._v(" 方法，这个方法是通过 "),n("code",[t._v("inITMixin（Vue）")]),t._v(" 挂在到 Vue 原型上的，代码在 "),n("code",[t._v("src/core/instance/init.js")]),t._v(" 。")])])}],!1,null,null,null);s.default=e.exports}}]);