(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{152:function(t,e,s){"use strict";s.r(e);var r=s(0),n=Object(r.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),s("blockquote",[s("p",[t._v("代码在"),s("a",{attrs:{href:"https://github.com/kangkai124/IdontknowJS/tree/master/projects/automated-workflow-with-npm-script",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("。")])]),t._m(1),t._m(2),s("p",[t._v("shell 命令修改默认配置：")]),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),s("p",[t._v("安利常用的 4 种代码检查：")]),s("ol",[s("li",[s("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Feslint.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint"),s("OutboundLink")],1),t._v("，可定制的 js 代码检查")]),s("li",[s("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Fstylelint.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("stylelint"),s("OutboundLink")],1),t._v("，可定制的样式文件检查，支持 css、less、scss")]),s("li",[s("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Fzaach%2Fjsonlint",target:"_blank",rel:"noopener noreferrer"}},[t._v("jsonlint"),s("OutboundLink")],1),t._v("，json 文件语法检查，踩过坑的同学会清楚，json 文件语法错误会知道导致各种失败")]),s("li",[s("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Figorshubovych%2Fmarkdownlint-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdownlint-cli"),s("OutboundLink")],1),t._v("，Markdown 文件最佳实践检查，个人偏好")])]),s("p",[t._v("单元测试：")]),s("ol",[s("li",[s("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Fmochajs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("mocha"),s("OutboundLink")],1),t._v("，测试用例组织，测试用例运行和结果收集的框架；")]),s("li",[s("a",{attrs:{href:"https://link.juejin.im/?target=http%3A%2F%2Fchaijs.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("chai"),s("OutboundLink")],1),t._v("，测试断言库，必要的时候可以结合 "),s("a",{attrs:{href:"https://link.juejin.im/?target=http%3A%2F%2Fsinonjs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("sinon"),s("OutboundLink")],1),t._v(" 使用；")])]),t._m(8),t._m(9),s("p",[t._v("串行执行的时候，如果前面的命令失败，后续的都会终止。")]),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),s("p",[s("a",{attrs:{href:"https://github.com/mysticatea/npm-run-all",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm-run-all"),s("OutboundLink")],1)]),t._m(16),s("p",[t._v("简单粗暴方法：")]),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),s("p",[t._v("举例来说，运行 npm run test 的时候，分 3 个阶段：")]),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27),t._m(28),t._m(29),t._m(30),t._m(31),t._m(32),t._m(33),t._m(34),t._m(35),t._m(36),t._m(37),t._m(38),s("p",[t._v("npm 自身提供了自动完成工具 "),s("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Fdocs.npmjs.com%2Fcli%2Fcompletion",target:"_blank",rel:"noopener noreferrer"}},[t._v("completion"),s("OutboundLink")],1),t._v("，将其集成到 "),s("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Fwww.gnu.org%2Fsoftware%2Fbash",target:"_blank",rel:"noopener noreferrer"}},[t._v("bash"),s("OutboundLink")],1),t._v(" 或者 "),s("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Frobbyrussell%2Foh-my-zsh",target:"_blank",rel:"noopener noreferrer"}},[t._v("zsh"),s("OutboundLink")],1),t._v(" 里也非常容易。")]),s("p",[t._v("官方文档里面的集成方法如下：")]),t._m(39),s("p",[t._v("如果你也有代码洁癖，为了保持 .zshrc 或者 .bashrc 文件的整洁，可以用下面的方法：")]),s("p",[t._v("第 1 步，把 npm completion 产生的那坨命令放在单独的文件中：")]),t._m(40),s("p",[t._v("第 2 步，在 .bashrc 或者 .zshrc 中引入这个文件：")]),t._m(41),t._m(42),t._m(43),s("p",[s("a",{attrs:{href:"https://github.com/lukechilds/zsh-better-npm-completion",target:"_blank",rel:"noopener noreferrer"}},[t._v("zsh-better-npm-completion"),s("OutboundLink")],1)]),s("p",[s("a",{attrs:{href:"https://github.com/mklabs/yarn-completions",target:"_blank",rel:"noopener noreferrer"}},[t._v("yarn-completions"),s("OutboundLink")],1)]),t._m(44),t._m(45),s("ul",[s("li",[s("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Fisaacs%2Frimraf",target:"_blank",rel:"noopener noreferrer"}},[t._v("rimraf"),s("OutboundLink")],1),t._v(" 或 "),s("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fdel-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("del-cli"),s("OutboundLink")],1),t._v("，用来删除文件和目录，实现类似于 "),s("code",[t._v("rm -rf")]),t._v(" 的功能")]),s("li",[s("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fcpr",target:"_blank",rel:"noopener noreferrer"}},[t._v("cpr"),s("OutboundLink")],1),t._v("，用于拷贝、复制文件和目录，实现类似于 "),s("code",[t._v("cp -r")]),t._v(" 的功能")]),s("li",[s("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fmake-dir-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("make-dir-cli"),s("OutboundLink")],1),t._v("，用于创建目录，实现类似于 "),s("code",[t._v("mkdir -p")]),t._v(" 的功能")])]),t._m(46),t._m(47),s("p",[t._v("Linux 下直接可以用 "),s("code",[t._v("$npm_package_name")]),t._v("，而 Windows 下必须使用 "),s("code",[t._v("%npm_package_name%")]),t._v("，我们可以使用 "),s("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fcross-var",target:"_blank",rel:"noopener noreferrer"}},[t._v("cross-var"),s("OutboundLink")],1),t._v(" 实现跨平台的变量引用:")]),t._m(48),t._m(49),s("p",[t._v("第 1 步，添加 cross-env 到开发依赖：")]),t._m(50),s("p",[t._v("第 2 步，改写使用了环境变量的 npm script：")]),t._m(51),t._m(52),s("p",[t._v("借助 "),s("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Ftestdouble%2Fscripty",target:"_blank",rel:"noopener noreferrer"}},[t._v("scripty"),s("OutboundLink")],1),t._v(" 我们可以将 npm script 剥离到单独的文件中。")]),t._m(53),s("p",[t._v("然后创建空白的脚本文件，因为有了单独的脚本，我们可以把原来的 precover、cover、postcover、cover:archive、cover:cleanup 合并到一个文件中。")]),t._m(54),t._m(55),t._m(56),t._m(57),t._m(58),t._m(59),s("p",[t._v("Node.js 本身是跨平台的，用它编写的脚本出现跨平台兼容问题的概率很小。")]),s("p",[t._v("需要用到 "),s("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fshelljs",target:"_blank",rel:"noopener noreferrer"}},[t._v("shelljs"),s("OutboundLink")],1),t._v(" 、 "),s("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fchalk",target:"_blank",rel:"noopener noreferrer"}},[t._v("chalk"),s("OutboundLink")],1),t._v(" 。")]),t._m(60),t._m(61),s("p",[t._v("安装 livereload http-server 到 dev 依赖。")]),t._m(62),s("p",[t._v("在 html 中嵌入 livereload 脚本：")]),t._m(63),t._m(64),s("p",[t._v("安装 "),s("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Ftypicode%2Fhusky",target:"_blank",rel:"noopener noreferrer"}},[t._v("husky"),s("OutboundLink")],1),s("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Fokonet%2Flint-staged",target:"_blank",rel:"noopener noreferrer"}},[t._v("lint-staged"),s("OutboundLink")],1),t._v(" 到项目 dev 依赖。")]),s("p",[t._v("lint-staged ，每个团队成员提交的时候，只检查当次改动的文件。")]),t._m(65),t._m(66),s("p",[t._v("在现代前端项目的交付工作流中，部署前最关键的环节就是构建，构建环节要完成的事情通常包括：")]),t._m(67)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"npm-scripts-打造前端工作流"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm-scripts-打造前端工作流","aria-hidden":"true"}},[this._v("#")]),this._v(" npm scripts 打造前端工作流")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"npm-script-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm-script-命令","aria-hidden":"true"}},[this._v("#")]),this._v(" npm script 命令")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("em",[this._v("npm init -y")]),this._v(" 或者 "),e("em",[this._v("npm init -f")]),this._v(" 跳过参数问答，快速生成 package.json。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('npm config set init.author.email "kkstrive0124@gmail.com"\nnpm config set init.author.name "kangkai"\nnpm config set init.author.url "https://github.com/kangkai124"\nnpm config set init.license "MIT"\nnpm config set init.version "0.1.0"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("em",[this._v("npm run")]),this._v(" 是 npm 内置的核心功能之一， 当运行 "),e("em",[this._v("npm run xx")]),this._v(" 时：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("从 package.json 文件中读取 scripts 对象里面的全部配置")]),e("li",[this._v("以 xx 为键，在 scripts 对象里获取对应的值做为接下来要执行的命令，没找到报错")]),e("li",[this._v("在 shell 中执行上述命令")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("执行 "),e("em",[this._v("npm run")]),this._v(" 不带任何参数，列出可执行的所有命令。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"运行多个-npm-script-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行多个-npm-script-命令","aria-hidden":"true"}},[this._v("#")]),this._v(" 运行多个 npm script 命令")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"多个-npm-script-串行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多个-npm-script-串行","aria-hidden":"true"}},[this._v("#")]),this._v(" 多个 npm script 串行")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{attrs:{class:"token property"}},[this._v('"test"')]),e("span",{attrs:{class:"token operator"}},[this._v(":")]),this._v(" "),e("span",{attrs:{class:"token string"}},[this._v('"npm run lint:js && npm run lint:css && npm run lint:json && npm run lint:markdown && mocha tests/"')]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"多个-npm-script-并行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多个-npm-script-并行","aria-hidden":"true"}},[this._v("#")]),this._v(" 多个 npm script 并行")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在严格串行的情况下，我们必须要确保代码中没有编码规范问题才能运行测试，在某些时候可能并不是我们想要的，因为我们真正需要的是，代码变更时同时给出测试结果和测试运行结果。这就需要把子命令的运行从串行改成并行，实现方式更简单，把连接多条命令的 "),e("strong",[this._v("&&")]),this._v(" 符号替换成 "),e("strong",[this._v("&")]),this._v(" 即可。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{attrs:{class:"token property"}},[this._v('"test"')]),e("span",{attrs:{class:"token operator"}},[this._v(":")]),this._v(" "),e("span",{attrs:{class:"token string"}},[this._v('"npm run lint:js & npm run lint:css & npm run lint:json & npm run lint:markdown & mocha tests/"')]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在命令的最后增加 "),e("strong",[this._v("& wait")]),this._v(" ，如果我们在任何子命令中启动了长时间运行的进程，比如启动了 mocha 的 "),e("strong",[this._v("—watch")]),this._v(" 配置，可以使用 "),e("strong",[this._v("Ctrl + c")]),this._v(" 结束进程。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{attrs:{class:"token property"}},[this._v('"test"')]),e("span",{attrs:{class:"token operator"}},[this._v(":")]),this._v(" "),e("span",{attrs:{class:"token string"}},[this._v('"npm run lint:js & npm run lint:css & npm run lint:json & npm run lint:markdown & mocha tests/ & wait"')]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"更好的管理方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更好的管理方式","aria-hidden":"true"}},[this._v("#")]),this._v(" 更好的管理方式")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"给-npm-script-传参"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#给-npm-script-传参","aria-hidden":"true"}},[this._v("#")]),this._v(" 给 npm script 传参")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token property"}},[t._v('"lint:js"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"eslint *.js"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{attrs:{class:"token property"}},[t._v('"lint:js:fix"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"eslint *.js --fix"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("当 "),e("em",[this._v("lint:js")]),this._v(" 命令变长之后，可能会忘记修改 "),e("em",[this._v("lint:js:fix")]),this._v(" ，所以更健壮的做法是，在运行 "),e("em",[this._v("npm script")]),this._v(" 是给定额外的参数。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token property"}},[t._v('"lint:js"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"eslint *.js"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{attrs:{class:"token property"}},[t._v('"lint:js:fix"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"npm run lint:js -- --fix"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("要格外注意 "),e("code",[this._v("--fix")]),this._v(" 参数前面的 "),e("code",[this._v("--")]),this._v(" 分隔符，意指要给 "),e("code",[this._v("npm run lint:js")]),this._v(" 实际指向的命令传递额外的参数。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"npm-script-钩子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm-script-钩子","aria-hidden":"true"}},[this._v("#")]),this._v(" npm script 钩子")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("em",[this._v("pre")]),this._v(" 和 "),e("em",[this._v("post")]),this._v(" ：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("检查 scripts 对象中是否存在 pretest 命令，如果有，先执行该命令")]),e("li",[this._v("检查是否有 test 命令，有的话运行 test 命令，没有的话报错")]),e("li",[this._v("检查是否存在 posttest 命令，如果有，执行 posttest 命令")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token property"}},[t._v('"precover"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"rm -rf coverage"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{attrs:{class:"token property"}},[t._v('"cover"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"nyc --reporter=html npm test"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{attrs:{class:"token property"}},[t._v('"postcover"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"rm -rf .nyc_output && opn coverage/index.html"')]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"在-npm-script-中使用变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在-npm-script-中使用变量","aria-hidden":"true"}},[this._v("#")]),this._v(" 在 npm script 中使用变量")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("通过运行 "),e("code",[this._v("npm run env")]),this._v(" 就能拿到完整的变量列表。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("npm run env | grep npm_package | sort")]),this._v(" 拿到部分排序后的预定义环境变量：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("// 作者信息...\nnpm_package_author_email=wangshijun2010@gmail.com\nnpm_package_author_name=wangshijun\nnpm_package_author_url=http://github.com/wangshijun\n// 依赖信息...\nnpm_package_devDependencies_markdownlint_cli=^0.5.0\nnpm_package_devDependencies_mocha=^4.0.1\nnpm_package_devDependencies_npm_run_all=^4.1.2\n// 各种 npm script\nnpm_package_scripts_lint=npm-run-all --parallel lint:*\nnpm_package_scripts_lint_css=stylelint *.less\nnpm_package_scripts_lint_js=eslint *.js\nnpm_package_scripts_lint_js_fix=npm run lint:js -- --fix\nnpm_package_scripts_lint_json=jsonlint --quiet *.json\n// 基本信息\nnpm_package_version=0.1.0\nnpm_package_gitHead=3796e548cfe406ec33ab837ac00bcbd6ee8a38a0\nnpm_package_license=MIT\nnpm_package_main=index.js\nnpm_package_name=hello-npm-script\nnpm_package_readmeFilename=README.md\n// 依赖的配置\nnpm_package_nyc_exclude_0=**/*.spec.js\nnpm_package_nyc_exclude_1=.*.js\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("变量的使用方法遵循 shell 里面的语法，直接在 npm script 给想要引用的变量前面加上 "),e("em",[this._v("$")]),this._v(" 符号即可。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token property"}},[t._v('"cover"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"nyc --reporter=html npm test"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{attrs:{class:"token property"}},[t._v('"cover:cleanup"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"rm -rf coverage && rm -rf .nyc_output"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{attrs:{class:"token property"}},[t._v('"cover:archive"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"mkdir -p coverage_archive/k-script-$npm_package_version && cp -r coverage/* coverage_archive/k-script-$npm_package_version"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{attrs:{class:"token property"}},[t._v('"postcover"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"npm run cover:archive && npm run cover:cleanup && opn coverage_archive/k-script-$npm_package_version/index.html"')]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("em",[this._v("cover:archive")]),this._v(" 做了 2 件事情：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[e("em",[this._v("mkdir -p coverage_archive/$npm_package_version")]),this._v(" 准备当前版本号的归档目录")]),e("li",[e("em",[this._v("cp -r coverage/")]),this._v(" coverage_archive/$npm_package_version*，直接复制文件来归档")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("而 "),e("em",[this._v("postcover")]),this._v(" 做了 3 件事情：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[e("em",[this._v("npm run cover:archive")]),this._v("，归档本次覆盖率报告")]),e("li",[e("em",[this._v("npm run cover:cleanup")]),this._v("，清理本次覆盖率报告")]),e("li",[e("em",[this._v("opn coverage_archive/$npm_package_version/index.html")]),this._v("，直接预览覆盖率报告")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"npm-命令行自动补全"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm-命令行自动补全","aria-hidden":"true"}},[this._v("#")]),this._v(" npm 命令行自动补全")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"npm-run-less"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm-run-less","aria-hidden":"true"}},[this._v("#")]),this._v(" npm run | less")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("使用 "),e("em",[this._v("/")]),this._v(" 进入搜索模式")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"npm-completion-集成到-shell-中"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm-completion-集成到-shell-中","aria-hidden":"true"}},[this._v("#")]),this._v(" npm completion 集成到 shell 中")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("npm completion >> ~/.bashrc\nnpm completion >> ~/.zshrc\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("npm completion >> ~/.npm-completion.bash\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('echo "[ -f ~/.npm-completion.bash ] && source ~/.npm-completion.bash;" >> ~/.bashrc\necho "[ -f ~/.npm-completion.bash ] && source ~/.npm-completion.bash;" >> ~/.zshrc\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("TIP：执行完上面的命令一定要记得 "),e("em",[this._v("source ~/.zshrc")]),this._v(" 或者 "),e("em",[this._v("source ~/.bashrc")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"更高级的自动补全"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更高级的自动补全","aria-hidden":"true"}},[this._v("#")]),this._v(" 更高级的自动补全")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"npm-script-跨平台兼容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm-script-跨平台兼容","aria-hidden":"true"}},[this._v("#")]),this._v(" npm script 跨平台兼容")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"文件系统操作的跨平台兼容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件系统操作的跨平台兼容","aria-hidden":"true"}},[this._v("#")]),this._v(" 文件系统操作的跨平台兼容")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("npm i rimraf cpr make-dir-cli -D\n# npm install rimraf cpr make-dir-cli --save-dev\n# yarn add rimraf cpr make-dir-cli -D\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"用-cross-var-引用变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用-cross-var-引用变量","aria-hidden":"true"}},[this._v("#")]),this._v(" 用 cross-var 引用变量")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-patch extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('"scripts": {\n     "cover:cleanup": "rm -rf coverage && rm -rf .nyc_output",\n-    "cover:archive": "mkdir -p coverage_archive/$npm_package_version && cp -r coverage/* coverage_archive/$npm_package_version",\n-    "cover:serve": "http-server coverage_archive/$npm_package_version -p $npm_package_config_port",\n-    "cover:open": "opn http://localhost:$npm_package_config_port",\n+    "cover:archive": "cross-var \\"mkdir -p coverage_archive/$npm_package_version && cp -r coverage/* coverage_archive/$npm_package_version\\"",\n+    "cover:serve": "cross-var http-server coverage_archive/$npm_package_version -p $npm_package_config_port",\n+    "cover:open": "cross-var opn http://localhost:$npm_package_config_port",\n     "postcover": "npm-run-all cover:archive cover:cleanup --parallel cover:serve cover:open"\n   }\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"用-cross-env-设置环境变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用-cross-env-设置环境变量","aria-hidden":"true"}},[this._v("#")]),this._v(" 用 cross-env 设置环境变量")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("npm i cross-env -D\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-patch extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v(' "scripts": {\n- "test": "NODE_ENV=test mocha tests/",\n+ "test": "cross-env NODE_ENV=test mocha tests/",\n  },\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"把庞大的-npm-script-拆到单独的文件中"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#把庞大的-npm-script-拆到单独的文件中","aria-hidden":"true"}},[this._v("#")]),this._v(" 把庞大的 npm script 拆到单独的文件中")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("npm i scripty -D\n\nmkdir -p scripts/cover\n\ntouch scripts/cover.sh\ntouch scripts/cover/serve.sh\ntouch scripts/cover/open.sh\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("按照 "),e("em",[this._v("scripty")]),this._v(" 的默认约定，npm script 命令和上面各文件的对应关系如下：")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("命令")]),s("th",[t._v("文件")]),s("th",[t._v("备注")])])]),s("tbody",[s("tr",[s("td",[t._v("cover")]),s("td",[t._v("scripts/cover.sh")]),s("td",[t._v("内含 precover、postcover 的逻辑")])]),s("tr",[s("td",[t._v("cover:serve")]),s("td",[t._v("scripts/cover/serve.sh")]),s("td",[t._v("启动服务")])]),s("tr",[s("td",[t._v("cover:open")]),s("td",[t._v("scripts/cover/open.sh")]),s("td",[t._v("打开预览")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("特别注意的是，给所有脚本增加可执行权限是必须的，否则 scripty 执行时会报错，")]),this._v(" 我们可以给所有的脚本增加可执行权限：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("chmod -R a+x scripts/*/.sh\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("脚本内容在"),e("a",{attrs:{href:"../../projects/automated-workflow-with-npm-script/scripts"}},[this._v("这里")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"nodejs-脚本代替复杂的-npm-script"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nodejs-脚本代替复杂的-npm-script","aria-hidden":"true"}},[this._v("#")]),this._v(" NodeJs 脚本代替复杂的 npm script")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('"cover": "node scripts/cover.js"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"livereload-自动刷新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#livereload-自动刷新","aria-hidden":"true"}},[this._v("#")]),this._v(" livereload 自动刷新")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-patch extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('+    "client": "npm-run-all --parallel client:*",\n+    "client:reload-server": "livereload client/",\n+    "client:static-server": "http-server client/"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-patch extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("<body>\n   <h2>LiveReload Demo</h2>\n+  <script>\n+    document.write('<script src=\"http://' + (location.host || 'localhost').split(':')[0] +\n+      ':35729/livereload.js?snipver=1\"></' + 'script>')\n+  <\/script>\n </body>\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"git-hooks-运行-npm-script"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-hooks-运行-npm-script","aria-hidden":"true"}},[this._v("#")]),this._v(" git hooks 运行 npm script")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-patch extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('"scripts": {\n-    "precommit": "npm run lint",\n+    "precommit": "lint-staged",\n     "prepush": "npm run test",\n     "lint": "npm-run-all --parallel lint:*",\n   },\n+  "lint-staged": {\n+    "*.js": "eslint",\n+    "*.less": "stylelint",\n+    "*.css": "stylelint",\n+    "*.json": "jsonlint --quiet",\n+    "*.md": "markdownlint --config .markdownlint.json"\n+  },\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"npm-script-实现构建流水线"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm-script-实现构建流水线","aria-hidden":"true"}},[this._v("#")]),this._v(" npm script 实现构建流水线")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("源代码预编译：比如 less、sass、typescript")]),e("li",[this._v("图片优化、雪碧图生成")]),e("li",[this._v("JS、CSS 合并、压缩")]),e("li",[this._v("静态资源加版本号和引用替换")]),e("li",[this._v("静态资源传 CDN 等")])])}],!1,null,null,null);e.default=n.exports}}]);