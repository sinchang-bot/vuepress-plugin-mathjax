(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{53:function(t,a,s){"use strict";s.r(a);var r=s(0),e=Object(r.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("h3",{attrs:{id:"global-installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#global-installation","aria-hidden":"true"}},[t._v("#")]),t._v(" Global Installation")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g vuepress-plugin-mathjax\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OR")]),t._v("\nyarn global add vuepress-plugin-mathjax\n")])])]),s("h3",{attrs:{id:"local-installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#local-installation","aria-hidden":"true"}},[t._v("#")]),t._v(" Local Installation")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" vuepress-plugin-mathjax\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OR")]),t._v("\nyarn add vuepress-plugin-mathjax\n")])])]),s("h3",{attrs:{id:"add-to-config-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-to-config-js","aria-hidden":"true"}},[t._v("#")]),t._v(" Add to "),s("code",[t._v("config.js")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mathjax'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'svg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      macros"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\times'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("or")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mathjax"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chtml'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      presets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\def\\\\lr#1#2#3{\\\\left#1#2\\\\right#3}'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("See detailed configurations "),s("router-link",{attrs:{to:"/guide/config.html"}},[t._v("here")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax","aria-hidden":"true"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),s("h3",{attrs:{id:"inline"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inline","aria-hidden":"true"}},[t._v("#")]),t._v(" Inline")]),t._v(" "),s("p",[t._v("Surround your LaTeX with a single "),s("code",[t._v("$")]),t._v(" on each side for inline rendering.")]),t._v(" "),s("p",[s("strong",[t._v("Input:")])]),t._v(" "),s("pre",{staticClass:"math-block"},[t._v("Euler's identity $e^{i\\pi}+1=0$ is a beautiful formula in $\\mathbb{R}^2$.\n")]),t._v(" "),s("p",[s("strong",[t._v("Output:")])]),t._v(" "),s("div",{staticClass:"math-block"},[s("p",[t._v("Euler's identity "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:" MJX-TEX"},[s("mjx-msup",[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"e"}})],1),s("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[s("mjx-TeXAtom",{attrs:{size:"s"}},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"i"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"3C0"}})],1)],1)],1)],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[s("mjx-c",{attrs:{c:"+"}})],1),s("mjx-mn",{staticClass:"mjx-n",attrs:{space:"3"}},[s("mjx-c",{attrs:{c:"1"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"="}})],1),s("mjx-mn",{staticClass:"mjx-n",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"0"}})],1)],1)],1),t._v(" is a beautiful formula in "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:" MJX-TEX"},[s("mjx-msup",[s("mjx-TeXAtom",[s("mjx-mi",{staticClass:"mjx-ds"},[s("mjx-c",{attrs:{c:"R"}})],1)],1),s("mjx-script",{staticStyle:{"vertical-align":"0.41em"}},[s("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[s("mjx-c",{attrs:{c:"2"}})],1)],1)],1)],1)],1),t._v(".")],1)]),t._v(" "),s("h3",{attrs:{id:"block"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#block","aria-hidden":"true"}},[t._v("#")]),t._v(" Block")]),t._v(" "),s("p",[t._v("Use two ($$) for block rendering. This mode uses bigger symbols and centers the result.")]),t._v(" "),s("p",[s("strong",[t._v("Input:")])]),t._v(" "),s("pre",{staticClass:"math-block"},[t._v("$$\\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right) \n= \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left\\{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right\\}$$\n")]),t._v(" "),s("p",[s("strong",[t._v("Output:")])]),t._v(" "),s("div",{staticClass:"math-block"},[s("p"),s("p",[s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[s("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[s("mjx-mfrac",[s("mjx-frac",{attrs:{type:"d"}},[s("mjx-num",[s("mjx-nstrut",{attrs:{type:"d"}}),s("mjx-msup",[s("mjx-mi",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"2202"}})],1),s("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[s("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[s("mjx-c",{attrs:{c:"r"}})],1)],1)],1)],1),s("mjx-dbox",[s("mjx-dtable",[s("mjx-line",{attrs:{type:"d"}}),s("mjx-row",[s("mjx-den",[s("mjx-dstrut",{attrs:{type:"d"}}),s("mjx-mrow",[s("mjx-mi",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"2202"}})],1),s("mjx-msup",[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"3C9"}})],1),s("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[s("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[s("mjx-c",{attrs:{c:"r"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),s("mjx-mrow",[s("mjx-mo",{staticClass:"mjx-s3"},[s("mjx-c",{attrs:{c:"("}})],1),s("mjx-mfrac",[s("mjx-frac",{attrs:{type:"d"}},[s("mjx-num",[s("mjx-nstrut",{attrs:{type:"d"}}),s("mjx-msup",[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"y"}})],1),s("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[s("mjx-TeXAtom",{attrs:{size:"s"}},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"3C9"}})],1)],1)],1)],1)],1),s("mjx-dbox",[s("mjx-dtable",[s("mjx-line",{attrs:{type:"d"}}),s("mjx-row",[s("mjx-den",[s("mjx-dstrut",{attrs:{type:"d"}}),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"3C9"}})],1)],1)],1)],1)],1)],1)],1),s("mjx-mo",{staticClass:"mjx-s3"},[s("mjx-c",{attrs:{c:")"}})],1)],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"="}})],1),s("mjx-mrow",{attrs:{space:"4"}},[s("mjx-mo",{staticClass:"mjx-s3"},[s("mjx-c",{attrs:{c:"("}})],1),s("mjx-mfrac",[s("mjx-frac",{attrs:{type:"d"}},[s("mjx-num",[s("mjx-nstrut",{attrs:{type:"d"}}),s("mjx-msup",[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"y"}})],1),s("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[s("mjx-TeXAtom",{attrs:{size:"s"}},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"3C9"}})],1)],1)],1)],1)],1),s("mjx-dbox",[s("mjx-dtable",[s("mjx-line",{attrs:{type:"d"}}),s("mjx-row",[s("mjx-den",[s("mjx-dstrut",{attrs:{type:"d"}}),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"3C9"}})],1)],1)],1)],1)],1)],1)],1),s("mjx-mo",{staticClass:"mjx-s3"},[s("mjx-c",{attrs:{c:")"}})],1)],1),s("mjx-mrow",[s("mjx-mo",{staticClass:"mjx-s4"},[s("mjx-c",{attrs:{c:"{"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"("}})],1),s("mjx-mi",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"l"}}),s("mjx-c",{attrs:{c:"o"}}),s("mjx-c",{attrs:{c:"g"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"2061"}})],1),s("mjx-mi",{staticClass:"mjx-i",attrs:{space:"2"}},[s("mjx-c",{attrs:{c:"y"}})],1),s("mjx-msup",[s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:")"}})],1),s("mjx-script",{staticStyle:{"vertical-align":"0.413em"}},[s("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[s("mjx-c",{attrs:{c:"r"}})],1)],1)],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[s("mjx-c",{attrs:{c:"+"}})],1),s("mjx-munderover",{attrs:{space:"3"}},[s("mjx-over",{staticStyle:{"padding-bottom":"0.192em","padding-left":"0.563em"}},[s("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[s("mjx-c",{attrs:{c:"r"}})],1)],1),s("mjx-box",[s("mjx-munder",[s("mjx-row",[s("mjx-base",[s("mjx-mo",{staticClass:"mjx-lop"},[s("mjx-c",{attrs:{c:"2211"}})],1)],1)],1),s("mjx-row",[s("mjx-under",{staticStyle:{"padding-top":"0.167em","padding-left":"0.148em"}},[s("mjx-TeXAtom",{attrs:{size:"s"}},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"i"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"="}})],1),s("mjx-mn",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"1"}})],1)],1)],1)],1)],1)],1)],1),s("mjx-mfrac",{attrs:{space:"2"}},[s("mjx-frac",{attrs:{type:"d"}},[s("mjx-num",[s("mjx-nstrut",{attrs:{type:"d"}}),s("mjx-mrow",[s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"("}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"2212"}})],1),s("mjx-mn",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"1"}})],1),s("mjx-msup",[s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:")"}})],1),s("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[s("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[s("mjx-c",{attrs:{c:"i"}})],1)],1)],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"r"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"2"}},[s("mjx-c",{attrs:{c:"22EF"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"2"}},[s("mjx-c",{attrs:{c:"("}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"r"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[s("mjx-c",{attrs:{c:"2212"}})],1),s("mjx-mi",{staticClass:"mjx-i",attrs:{space:"3"}},[s("mjx-c",{attrs:{c:"i"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[s("mjx-c",{attrs:{c:"+"}})],1),s("mjx-mn",{staticClass:"mjx-n",attrs:{space:"3"}},[s("mjx-c",{attrs:{c:"1"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:")"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"("}})],1),s("mjx-mi",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"l"}}),s("mjx-c",{attrs:{c:"o"}}),s("mjx-c",{attrs:{c:"g"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"2061"}})],1),s("mjx-mi",{staticClass:"mjx-i",attrs:{space:"2"}},[s("mjx-c",{attrs:{c:"y"}})],1),s("mjx-msup",[s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:")"}})],1),s("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[s("mjx-TeXAtom",{attrs:{size:"s"}},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"r"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"2212"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"i"}})],1)],1)],1)],1)],1)],1),s("mjx-dbox",[s("mjx-dtable",[s("mjx-line",{attrs:{type:"d"}}),s("mjx-row",[s("mjx-den",[s("mjx-dstrut",{attrs:{type:"d"}}),s("mjx-msup",[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"3C9"}})],1),s("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[s("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[s("mjx-c",{attrs:{c:"i"}})],1)],1)],1)],1)],1)],1)],1)],1)],1),s("mjx-mo",{staticClass:"mjx-s4"},[s("mjx-c",{attrs:{c:"}"}})],1)],1)],1)],1)],1),s("p")]),t._v(" "),s("h3",{attrs:{id:"conventions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conventions","aria-hidden":"true"}},[t._v("#")]),t._v(" Conventions")]),t._v(" "),s("p",[t._v("Math parsing in markdown is designed to agree with the conventions set by "),s("a",{attrs:{href:"http://pandoc.org/MANUAL.html#math",target:"_blank",rel:"noopener noreferrer"}},[t._v("pandoc"),s("OutboundLink")],1),t._v(":")]),t._v(" "),s("blockquote",[s("p",[t._v("Anything between two $ characters will be treated as TeX math. The opening $ must have a non-space character immediately to its right, while the closing $ must have a non-space character immediately to its left, and must not be followed immediately by a digit. Thus, $20,000 and $30,000 won’t parse as math. If for some reason you need to enclose text in literal $ characters, backslash-escape them and they won’t be treated as math delimiters.")])]),t._v(" "),s("h2",{attrs:{id:"features"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[t._v("#")]),t._v(" Features")]),t._v(" "),s("h3",{attrs:{id:"using-macros"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-macros","aria-hidden":"true"}},[t._v("#")]),t._v(" Using Macros")]),t._v(" "),s("p",[t._v("This is part of "),s("code",[t._v("config.js")]),t._v(" of this project:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mathjax"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      macros"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\Z'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\mathbb{Z}'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Input:")])]),t._v(" "),s("pre",{staticClass:"math-block"},[t._v("We have $a>n <=> a>=n+1$, if $a, n\\in\\Z$.\n")]),t._v(" "),s("p",[s("strong",[t._v("Output:")])]),t._v(" "),s("div",{staticClass:"math-block"},[s("p",[t._v("We have "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:" MJX-TEX"},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"a"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:">"}})],1),s("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"n"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"21D4"}})],1),s("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"a"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"2A7E"}})],1),s("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"n"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[s("mjx-c",{attrs:{c:"+"}})],1),s("mjx-mn",{staticClass:"mjx-n",attrs:{space:"3"}},[s("mjx-c",{attrs:{c:"1"}})],1)],1)],1),t._v(", if "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:" MJX-TEX"},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"a"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:","}})],1),s("mjx-mi",{staticClass:"mjx-i",attrs:{space:"2"}},[s("mjx-c",{attrs:{c:"n"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"2208"}})],1),s("mjx-TeXAtom",{attrs:{space:"4"}},[s("mjx-mi",{staticClass:"mjx-ds"},[s("mjx-c",{attrs:{c:"Z"}})],1)],1)],1)],1),t._v(".")],1)]),t._v(" "),s("h3",{attrs:{id:"using-presets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-presets","aria-hidden":"true"}},[t._v("#")]),t._v(" Using Presets "),s("Badge",{attrs:{text:"vuepress 1.0.0-alpha.39+"}})],1),t._v(" "),s("p",[t._v("This is the frontmatter of this page:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sidebarDepth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mathjax")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("presets")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\def\\lr#1#2#3{\\left#1#2\\right#3}'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Input:")])]),t._v(" "),s("pre",{staticClass:"math-block"},[t._v("$$\\frac\\partial{\\partial t} \\lr({\\frac{y^t}t})$$\n")]),t._v(" "),s("p",[s("strong",[t._v("Output:")])]),t._v(" "),s("div",{staticClass:"math-block"},[s("p"),s("p",[s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[s("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[s("mjx-mfrac",[s("mjx-frac",{attrs:{type:"d"}},[s("mjx-num",[s("mjx-nstrut",{attrs:{type:"d"}}),s("mjx-mi",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"2202"}})],1)],1),s("mjx-dbox",[s("mjx-dtable",[s("mjx-line",{attrs:{type:"d"}}),s("mjx-row",[s("mjx-den",[s("mjx-dstrut",{attrs:{type:"d"}}),s("mjx-mrow",[s("mjx-mi",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"2202"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"t"}})],1)],1)],1)],1)],1)],1)],1)],1),s("mjx-mrow",[s("mjx-mo",{staticClass:"mjx-s3"},[s("mjx-c",{attrs:{c:"("}})],1),s("mjx-mfrac",[s("mjx-frac",{attrs:{type:"d"}},[s("mjx-num",[s("mjx-nstrut",{attrs:{type:"d"}}),s("mjx-msup",[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"y"}})],1),s("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[s("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[s("mjx-c",{attrs:{c:"t"}})],1)],1)],1)],1),s("mjx-dbox",[s("mjx-dtable",[s("mjx-line",{attrs:{type:"d"}}),s("mjx-row",[s("mjx-den",[s("mjx-dstrut",{attrs:{type:"d"}}),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"t"}})],1)],1)],1)],1)],1)],1)],1),s("mjx-mo",{staticClass:"mjx-s3"},[s("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1)],1),s("p")]),t._v(" "),s("h2",{attrs:{id:"miscellaneous"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#miscellaneous","aria-hidden":"true"}},[t._v("#")]),t._v(" Miscellaneous")]),t._v(" "),s("h3",{attrs:{id:"dependencies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dependencies","aria-hidden":"true"}},[t._v("#")]),t._v(" Dependencies")]),t._v(" "),s("p",[t._v("This plugin uses "),s("a",{attrs:{href:"https://github.com/mathjax/mathjax-v3",target:"_blank",rel:"noopener noreferrer"}},[t._v("mathjax-v3"),s("OutboundLink")],1),t._v(" (Early beta) which is not ready for production.")]),t._v(" "),s("h3",{attrs:{id:"related-libraries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#related-libraries","aria-hidden":"true"}},[t._v("#")]),t._v(" Related Libraries")]),t._v(" "),s("p",[t._v("This plugin is inspired by some other libraries, thank you!")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/zlliang/vuepress-plugin-latex",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-plugin-latex"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/waylonflinn/markdown-it-katex",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it-katex"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/goessner/markdown-it-texmath",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it-texmath"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/classeur/markdown-it-mathjax",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it-mathjax"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/yamavol/markdown-it-mathjax-chtml",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it-mathjax-chtml"),s("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=e.exports}}]);