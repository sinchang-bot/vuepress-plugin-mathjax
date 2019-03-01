(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{315:function(t,a,s){"use strict";s.r(a);var r=s(24),c=Object(r.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍","aria-hidden":"true"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),s("h3",{attrs:{id:"全局安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 全局安装")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g vuepress-plugin-mathjax\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或者")]),t._v("\nyarn global add vuepress-plugin-mathjax\n")])])]),s("h3",{attrs:{id:"局部安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#局部安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 局部安装")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" vuepress-plugin-mathjax\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或者")]),t._v("\nyarn add vuepress-plugin-mathjax\n")])])]),s("h3",{attrs:{id:"添加到-config-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加到-config-js","aria-hidden":"true"}},[t._v("#")]),t._v(" 添加到 "),s("code",[t._v("config.js")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mathjax'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'svg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      macros"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\times'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("或者")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mathjax"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chtml'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      presets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\def\\\\lr#1#2#3{\\\\left#1#2\\\\right#3}'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("在"),s("router-link",{attrs:{to:"/zh/guide/config.html"}},[t._v("这里")]),t._v("可以查看详细的配置。")],1),t._v(" "),s("h2",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法","aria-hidden":"true"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),s("h3",{attrs:{id:"行内语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#行内语法","aria-hidden":"true"}},[t._v("#")]),t._v(" 行内语法")]),t._v(" "),s("p",[t._v("使用单个 "),s("code",[t._v("$")]),t._v(" 围绕一段 TeX 语法进行内联渲染。")]),t._v(" "),s("p",[s("strong",[t._v("输入:")])]),t._v(" "),s("pre",{staticClass:"math-block"},[t._v("Euler's identity $e^{i\\pi}+1=0$ is a beautiful formula in $\\mathbb{R}^2$.\n")]),t._v(" "),s("p",[s("strong",[t._v("输出:")])]),t._v(" "),s("div",{staticClass:"math-block"},[s("p",[t._v("Euler's identity "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:" MJX-TEX"},[s("mjx-msup",[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"e"}})],1),s("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[s("mjx-TeXAtom",{attrs:{size:"s"}},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"i"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"3C0"}})],1)],1)],1)],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[s("mjx-c",{attrs:{c:"+"}})],1),s("mjx-mn",{staticClass:"mjx-n",attrs:{space:"3"}},[s("mjx-c",{attrs:{c:"1"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"="}})],1),s("mjx-mn",{staticClass:"mjx-n",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"0"}})],1)],1)],1),t._v(" is a beautiful formula in "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:" MJX-TEX"},[s("mjx-msup",[s("mjx-TeXAtom",[s("mjx-mi",{staticClass:"mjx-ds"},[s("mjx-c",{attrs:{c:"R"}})],1)],1),s("mjx-script",{staticStyle:{"vertical-align":"0.41em"}},[s("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[s("mjx-c",{attrs:{c:"2"}})],1)],1)],1)],1)],1),t._v(".")],1)]),t._v(" "),s("h3",{attrs:{id:"块语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#块语法","aria-hidden":"true"}},[t._v("#")]),t._v(" 块语法")]),t._v(" "),s("p",[t._v("块语法使用两个符号 "),s("code",[t._v("$$")]),t._v("，它将会带来更大的符号和居中显示。")]),t._v(" "),s("p",[s("strong",[t._v("输入:")])]),t._v(" "),s("pre",{staticClass:"math-block"},[t._v("$$\\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right) \n= \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left\\{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right\\}$$\n")]),t._v(" "),s("p",[s("strong",[t._v("输出:")])]),t._v(" "),s("div",{staticClass:"math-block"},[s("p"),s("p",[s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[s("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[s("mjx-mfrac",[s("mjx-frac",{attrs:{type:"d"}},[s("mjx-num",[s("mjx-nstrut",{attrs:{type:"d"}}),s("mjx-msup",[s("mjx-mi",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"2202"}})],1),s("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[s("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[s("mjx-c",{attrs:{c:"r"}})],1)],1)],1)],1),s("mjx-dbox",[s("mjx-dtable",[s("mjx-line",{attrs:{type:"d"}}),s("mjx-row",[s("mjx-den",[s("mjx-dstrut",{attrs:{type:"d"}}),s("mjx-mrow",[s("mjx-mi",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"2202"}})],1),s("mjx-msup",[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"3C9"}})],1),s("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[s("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[s("mjx-c",{attrs:{c:"r"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),s("mjx-mrow",[s("mjx-mo",{staticClass:"mjx-s3"},[s("mjx-c",{attrs:{c:"("}})],1),s("mjx-mfrac",[s("mjx-frac",{attrs:{type:"d"}},[s("mjx-num",[s("mjx-nstrut",{attrs:{type:"d"}}),s("mjx-msup",[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"y"}})],1),s("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[s("mjx-TeXAtom",{attrs:{size:"s"}},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"3C9"}})],1)],1)],1)],1)],1),s("mjx-dbox",[s("mjx-dtable",[s("mjx-line",{attrs:{type:"d"}}),s("mjx-row",[s("mjx-den",[s("mjx-dstrut",{attrs:{type:"d"}}),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"3C9"}})],1)],1)],1)],1)],1)],1)],1),s("mjx-mo",{staticClass:"mjx-s3"},[s("mjx-c",{attrs:{c:")"}})],1)],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"="}})],1),s("mjx-mrow",{attrs:{space:"4"}},[s("mjx-mo",{staticClass:"mjx-s3"},[s("mjx-c",{attrs:{c:"("}})],1),s("mjx-mfrac",[s("mjx-frac",{attrs:{type:"d"}},[s("mjx-num",[s("mjx-nstrut",{attrs:{type:"d"}}),s("mjx-msup",[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"y"}})],1),s("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[s("mjx-TeXAtom",{attrs:{size:"s"}},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"3C9"}})],1)],1)],1)],1)],1),s("mjx-dbox",[s("mjx-dtable",[s("mjx-line",{attrs:{type:"d"}}),s("mjx-row",[s("mjx-den",[s("mjx-dstrut",{attrs:{type:"d"}}),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"3C9"}})],1)],1)],1)],1)],1)],1)],1),s("mjx-mo",{staticClass:"mjx-s3"},[s("mjx-c",{attrs:{c:")"}})],1)],1),s("mjx-mrow",[s("mjx-mo",{staticClass:"mjx-s4"},[s("mjx-c",{attrs:{c:"{"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"("}})],1),s("mjx-mi",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"l"}}),s("mjx-c",{attrs:{c:"o"}}),s("mjx-c",{attrs:{c:"g"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"2061"}})],1),s("mjx-mi",{staticClass:"mjx-i",attrs:{space:"2"}},[s("mjx-c",{attrs:{c:"y"}})],1),s("mjx-msup",[s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:")"}})],1),s("mjx-script",{staticStyle:{"vertical-align":"0.413em"}},[s("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[s("mjx-c",{attrs:{c:"r"}})],1)],1)],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[s("mjx-c",{attrs:{c:"+"}})],1),s("mjx-munderover",{attrs:{space:"3"}},[s("mjx-over",{staticStyle:{"padding-bottom":"0.192em","padding-left":"0.563em"}},[s("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[s("mjx-c",{attrs:{c:"r"}})],1)],1),s("mjx-box",[s("mjx-munder",[s("mjx-row",[s("mjx-base",[s("mjx-mo",{staticClass:"mjx-lop"},[s("mjx-c",{attrs:{c:"2211"}})],1)],1)],1),s("mjx-row",[s("mjx-under",{staticStyle:{"padding-top":"0.167em","padding-left":"0.148em"}},[s("mjx-TeXAtom",{attrs:{size:"s"}},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"i"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"="}})],1),s("mjx-mn",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"1"}})],1)],1)],1)],1)],1)],1)],1),s("mjx-mfrac",{attrs:{space:"2"}},[s("mjx-frac",{attrs:{type:"d"}},[s("mjx-num",[s("mjx-nstrut",{attrs:{type:"d"}}),s("mjx-mrow",[s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"("}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"2212"}})],1),s("mjx-mn",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"1"}})],1),s("mjx-msup",[s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:")"}})],1),s("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[s("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[s("mjx-c",{attrs:{c:"i"}})],1)],1)],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"r"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"2"}},[s("mjx-c",{attrs:{c:"22EF"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"2"}},[s("mjx-c",{attrs:{c:"("}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"r"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[s("mjx-c",{attrs:{c:"2212"}})],1),s("mjx-mi",{staticClass:"mjx-i",attrs:{space:"3"}},[s("mjx-c",{attrs:{c:"i"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[s("mjx-c",{attrs:{c:"+"}})],1),s("mjx-mn",{staticClass:"mjx-n",attrs:{space:"3"}},[s("mjx-c",{attrs:{c:"1"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:")"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"("}})],1),s("mjx-mi",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"l"}}),s("mjx-c",{attrs:{c:"o"}}),s("mjx-c",{attrs:{c:"g"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"2061"}})],1),s("mjx-mi",{staticClass:"mjx-i",attrs:{space:"2"}},[s("mjx-c",{attrs:{c:"y"}})],1),s("mjx-msup",[s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:")"}})],1),s("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[s("mjx-TeXAtom",{attrs:{size:"s"}},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"r"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"2212"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"i"}})],1)],1)],1)],1)],1)],1),s("mjx-dbox",[s("mjx-dtable",[s("mjx-line",{attrs:{type:"d"}}),s("mjx-row",[s("mjx-den",[s("mjx-dstrut",{attrs:{type:"d"}}),s("mjx-msup",[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"3C9"}})],1),s("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[s("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[s("mjx-c",{attrs:{c:"i"}})],1)],1)],1)],1)],1)],1)],1)],1)],1),s("mjx-mo",{staticClass:"mjx-s4"},[s("mjx-c",{attrs:{c:"}"}})],1)],1)],1)],1)],1),s("p")]),t._v(" "),s("h3",{attrs:{id:"一些约定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一些约定","aria-hidden":"true"}},[t._v("#")]),t._v(" 一些约定")]),t._v(" "),s("p",[t._v("markdown 文件中的 TeX 语法将遵循 "),s("a",{attrs:{href:"http://pandoc.org/MANUAL.html#math",target:"_blank",rel:"noopener noreferrer"}},[t._v("pandoc"),s("OutboundLink")],1),t._v(" 制定的准则：")]),t._v(" "),s("blockquote",[s("p",[t._v("两个 $ 之间的任何内容都将被视为 TeX 语法。开头的 $ 必须在其右边有一个非空格字符，而结尾的 $ 必须在其左边有一个非空格字符，并且不能立即跟随一个数字。因此 $20,000 和 $30,000 将不会解析为 TeX。如果由于某种原因你需要将文本置于 $ 字符中，则使用反斜杠转义它们即可。")])]),t._v(" "),s("h2",{attrs:{id:"特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特性","aria-hidden":"true"}},[t._v("#")]),t._v(" 特性")]),t._v(" "),s("h3",{attrs:{id:"使用宏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用宏","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用宏")]),t._v(" "),s("p",[t._v("这是这个项目的 "),s("code",[t._v("config.js")]),t._v(" 中的插件部分：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mathjax"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      macros"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\Z'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\mathbb{Z}'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("输入:")])]),t._v(" "),s("pre",{staticClass:"math-block"},[t._v("若 $a, n\\in\\Z$，则 $a>n <=> a>=n+1$。\n")]),t._v(" "),s("p",[s("strong",[t._v("输出:")])]),t._v(" "),s("div",{staticClass:"math-block"},[s("p",[t._v("若 "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:" MJX-TEX"},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"a"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:","}})],1),s("mjx-mi",{staticClass:"mjx-i",attrs:{space:"2"}},[s("mjx-c",{attrs:{c:"n"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"2208"}})],1),s("mjx-TeXAtom",{attrs:{space:"4"}},[s("mjx-mi",{staticClass:"mjx-ds"},[s("mjx-c",{attrs:{c:"Z"}})],1)],1)],1)],1),t._v("，则 "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:" MJX-TEX"},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"a"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:">"}})],1),s("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"n"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"21D4"}})],1),s("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"a"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"2A7E"}})],1),s("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"n"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[s("mjx-c",{attrs:{c:"+"}})],1),s("mjx-mn",{staticClass:"mjx-n",attrs:{space:"3"}},[s("mjx-c",{attrs:{c:"1"}})],1)],1)],1),t._v("。")],1)]),t._v(" "),s("h3",{attrs:{id:"使用预设"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用预设","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用预设 "),s("Badge",{attrs:{text:"vuepress 1.0.0-alpha.39+"}})],1),t._v(" "),s("p",[t._v("这是这个页面的 frontmatter:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sidebarDepth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mathjax")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("presets")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\def\\lr#1#2#3{\\left#1#2\\right#3}'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n")])])]),s("p",[s("strong",[t._v("输入:")])]),t._v(" "),s("pre",{staticClass:"math-block"},[t._v("$$\\frac\\partial{\\partial t} \\lr({\\frac{y^t}t})$$\n")]),t._v(" "),s("p",[s("strong",[t._v("输出:")])]),t._v(" "),s("div",{staticClass:"math-block"},[s("p"),s("p",[s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[s("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[s("mjx-mfrac",[s("mjx-frac",{attrs:{type:"d"}},[s("mjx-num",[s("mjx-nstrut",{attrs:{type:"d"}}),s("mjx-mi",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"2202"}})],1)],1),s("mjx-dbox",[s("mjx-dtable",[s("mjx-line",{attrs:{type:"d"}}),s("mjx-row",[s("mjx-den",[s("mjx-dstrut",{attrs:{type:"d"}}),s("mjx-mrow",[s("mjx-mi",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"2202"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"t"}})],1)],1)],1)],1)],1)],1)],1)],1),s("mjx-mrow",[s("mjx-mo",{staticClass:"mjx-s3"},[s("mjx-c",{attrs:{c:"("}})],1),s("mjx-mfrac",[s("mjx-frac",{attrs:{type:"d"}},[s("mjx-num",[s("mjx-nstrut",{attrs:{type:"d"}}),s("mjx-msup",[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"y"}})],1),s("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[s("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[s("mjx-c",{attrs:{c:"t"}})],1)],1)],1)],1),s("mjx-dbox",[s("mjx-dtable",[s("mjx-line",{attrs:{type:"d"}}),s("mjx-row",[s("mjx-den",[s("mjx-dstrut",{attrs:{type:"d"}}),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"t"}})],1)],1)],1)],1)],1)],1)],1),s("mjx-mo",{staticClass:"mjx-s3"},[s("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1)],1),s("p")]),t._v(" "),s("h2",{attrs:{id:"其他"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他","aria-hidden":"true"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),s("h3",{attrs:{id:"依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#依赖","aria-hidden":"true"}},[t._v("#")]),t._v(" 依赖")]),t._v(" "),s("p",[t._v("这个插件目前使用 "),s("a",{attrs:{href:"https://github.com/mathjax/mathjax-v3",target:"_blank",rel:"noopener noreferrer"}},[t._v("mathjax-v3"),s("OutboundLink")],1),t._v("（早期测试版），因此可能不适合生产环境。")]),t._v(" "),s("h3",{attrs:{id:"相关工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关工具","aria-hidden":"true"}},[t._v("#")]),t._v(" 相关工具")]),t._v(" "),s("p",[t._v("这个插件的部分灵感来自其他一些库，谢谢你们！")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/zlliang/vuepress-plugin-latex",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-plugin-latex"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/waylonflinn/markdown-it-katex",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it-katex"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/goessner/markdown-it-texmath",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it-texmath"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/classeur/markdown-it-mathjax",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it-mathjax"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/yamavol/markdown-it-mathjax-chtml",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it-mathjax-chtml"),s("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=c.exports}}]);