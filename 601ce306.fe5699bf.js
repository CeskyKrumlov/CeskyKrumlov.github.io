(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{177:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),c=(n(0),n(389)),r={id:"6.issueMate",title:"\u4e8b\u4ef6\u4fee\u9970\u7b26",hide_title:!0},l={unversionedId:"front/vue/6.issueMate",id:"front/vue/6.issueMate",isDocsHomePage:!1,title:"\u4e8b\u4ef6\u4fee\u9970\u7b26",description:"6. \u4e8b\u4ef6\u4fee\u9970\u7b26",source:"@site/docs/front/vue/6.\u4e8b\u4ef6\u4fee\u9970\u7b26.md",slug:"/front/vue/6.issueMate",permalink:"/docs/front/vue/6.issueMate",version:"current",sidebar:"someSidebar",previous:{title:"v-model",permalink:"/docs/front/vue/5.vmodel"},next:{title:"\u6309\u952e\u4fee\u9970\u7b26",permalink:"/docs/front/vue/7.btnMate"}},b=[{value:"6. \u4e8b\u4ef6\u4fee\u9970\u7b26",id:"6-\u4e8b\u4ef6\u4fee\u9970\u7b26",children:[{value:"6.1 stop\u4e8b\u4ef6\u4fee\u9970\u7b26",id:"61-stop\u4e8b\u4ef6\u4fee\u9970\u7b26",children:[]},{value:"6.2 prevent\u4e8b\u4ef6\u4fee\u9970\u7b26",id:"62-prevent\u4e8b\u4ef6\u4fee\u9970\u7b26",children:[]},{value:"6.3 self\u4e8b\u4ef6\u4fee\u9970\u7b26",id:"63-self\u4e8b\u4ef6\u4fee\u9970\u7b26",children:[]},{value:"6.4 once\u4e8b\u4ef6\u4fee\u9970\u7b26",id:"64-once\u4e8b\u4ef6\u4fee\u9970\u7b26",children:[]}]}],o={rightToc:b};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"6-\u4e8b\u4ef6\u4fee\u9970\u7b26"},"6. \u4e8b\u4ef6\u4fee\u9970\u7b26"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"\u4fee\u9970\u7b26"),"\u5728\u4e8b\u4ef6\u4e0a\u52a0\u4fee\u9970\uff0c\u4e0e\u4e8b\u4ef6\u914d\u5408\uff0c\u6307\u660e\u4e8b\u4ef6\u89e6\u53d1\u6761\u4ef6\u6216\u963b\u6b62\u4e8b\u4ef6\u7684\u89e6\u53d1\u673a\u5236"),Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"\u4fee\u9970\u7b26"),"\u53ef\u4ee5\u4e32\u8054\u4e66\u5199"),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},".stop"),"\t\u963b\u6b62\u4e8b\u4ef6\u7ee7\u7eed\u4f20\u64ad"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},".prevent"),"  \u4e8b\u4ef6\u4e0d\u518d\u91cd\u8f7d\u9875\u9762"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},".capture"),"   \u6dfb\u52a0\u4e8b\u4ef6\u76d1\u542c\u5668\u65f6\u4f7f\u7528\u4e8b\u4ef6\u6355\u83b7\u6a21\u5f0f\uff0c\u5373\u5185\u90e8\u5143\u7d20\u89e6\u53d1\u7684\u4e8b\u4ef6\u5148\u5728\u6b64\u5904\u7406\uff0c\u7136\u540e\u624d\u4ea4\u7531\u5185\u90e8\u5143\u7d20\u8fdb\u884c\u5904\u7406 "),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},".self"),"    \u53ea\u5f53\u5728 event.target \u662f\u5f53\u524d\u5143\u7d20\u81ea\u8eab\u65f6\u89e6\u53d1\u5904\u7406\u51fd\u6570 \uff0c\u5373\u4e8b\u4ef6\u4e0d\u662f\u4ece\u5185\u90e8\u5143\u7d20\u89e6\u53d1\u7684"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},".once")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},".passive")))),Object(c.b)("h2",{id:"61-stop\u4e8b\u4ef6\u4fee\u9970\u7b26"},"6.1 stop\u4e8b\u4ef6\u4fee\u9970\u7b26"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u7528\u6765\u963b\u6b62\u4e8b\u4ef6\u5192\u6ce1"),Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u4ec0\u4e48\u662f\u4e8b\u4ef6\u5192\u6ce1\uff1f")),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u5728\u9875\u9762\u4e0a\u5199\u4e00\u4e2a",Object(c.b)("inlineCode",{parentName:"li"},"div"),"\uff0c",Object(c.b)("inlineCode",{parentName:"li"},"div"),"\u91cc\u653e\u4e00\u4e2a",Object(c.b)("inlineCode",{parentName:"li"},"button")),Object(c.b)("li",{parentName:"ul"},"\u5206\u522b\u5728",Object(c.b)("inlineCode",{parentName:"li"},"div"),"\u548c",Object(c.b)("inlineCode",{parentName:"li"},"button"),"\u4e0a\u8bbe\u7f6e\u5355\u51fb\u4e8b\u4ef6"),Object(c.b)("li",{parentName:"ul"},"\u5f53\u70b9\u51fb",Object(c.b)("inlineCode",{parentName:"li"},"button"),"\u65f6\uff0c",Object(c.b)("inlineCode",{parentName:"li"},"div"),"\u4e0a\u7684\u5355\u51fb\u4e8b\u4ef6\u4e5f\u88ab\u89e6\u53d1\u4e86")),Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u5f53\u70b9\u51fb\u5185\u5c42\u5143\u7d20\u65f6\uff0c\u5185\u5c42\u5143\u7d20\u4e8b\u4ef6\u89e6\u53d1\uff0c\u968f\u540e\u4f1a\u5411\u5916\u5c42\u5192\u6ce1\uff0c\u5982\u679c\u5185\u5916\u5143\u7d20\u4e8b\u4ef6\u7c7b\u578b\u76f8\u540c\uff0c\u5bfc\u81f4\u5916\u5c42\u5143\u7d20\u4e8b\u4ef6\u4e5f\u88ab\u89e6\u53d1"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="utf-8">\n        <title>v-for</title>\n        <style type="text/css">\n            .aa {\n                background-color: red;\n                width: 300px;\n                height: 300px;\n            }\n        </style>\n    </head>\n    <body>\n        <div id="app">\n            <div class="aa" @click="divClick">\n                <input type="button" value="\u6309\u94ae" @click="btnClick" />\n            </div>\n        </div>\n        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>\n        <script>\n            const vue = new Vue({\n                el: "#app",\n                data: {\n\n                },\n                methods: {\n                    btnClick() {\n                        alert("\u6309\u94ae\u88ab\u70b9\u51fb\u4e86");\n                    },\n                    divClick() {\n                        alert("div\u88ab\u70b9\u51fb\u4e86");\n                    }\n                }\n            })\n        <\/script>\n    </body>\n</html>\n')),Object(c.b)("p",null,Object(c.b)("img",{src:n(618).default})),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u901a\u8fc7\u5728\u5185\u5c42\u5143\u7d20\u4e8b\u4ef6\u4e0a\u589e\u52a0",Object(c.b)("inlineCode",{parentName:"p"},".stop"),"\u4fee\u9970\u7b26\uff0c\u6765\u963b\u6b62\u5185\u5c42\u4e8b\u4ef6\u5411\u5916\u5c42\u5143\u7d20\u4f20\u64ad")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="utf-8">\n        <title>v-for</title>\n        <style type="text/css">\n            .aa {\n                background-color: red;\n                width: 300px;\n                height: 300px;\n            }\n        </style>\n    </head>\n    <body>\n        <div id="app">\n            <div class="aa" @click="divClick">\n                <input type="button" value="\u6309\u94ae" @click.stop="btnClick" />\n            </div>\n        </div>\n        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>\n        <script>\n            const vue = new Vue({\n                el: "#app",\n                data: {\n\n                },\n                methods: {\n                    btnClick() {\n                        alert("\u6309\u94ae\u88ab\u70b9\u51fb\u4e86");\n                    },\n                    divClick() {\n                        alert("div\u88ab\u70b9\u51fb\u4e86");\n                    }\n                }\n            })\n        <\/script>\n    </body>\n</html>\n')),Object(c.b)("p",null,Object(c.b)("img",{src:n(619).default})),Object(c.b)("h2",{id:"62-prevent\u4e8b\u4ef6\u4fee\u9970\u7b26"},"6.2 prevent\u4e8b\u4ef6\u4fee\u9970\u7b26"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u7528\u6765\u963b\u6b62\u6807\u7b7e\u7684\u9ed8\u8ba4\u884c\u4e3a"),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u7ed9",Object(c.b)("inlineCode",{parentName:"li"},"\u8d85\u94fe\u63a5"),"\u589e\u52a0\u4e00\u4e2a\u5355\u51fb\u4e8b\u4ef6\uff0c\u5e76\u4e14\u963b\u6b62",Object(c.b)("inlineCode",{parentName:"li"},"\u8d85\u94fe\u63a5"),"\u9ed8\u8ba4\u7684\u9875\u9762\u8df3\u8f6c\u884c\u4e3a"),Object(c.b)("li",{parentName:"ul"},"\u963b\u6b62\u8868\u5355\u9ed8\u8ba4\u63d0\u4ea4\u884c\u4e3a"))),Object(c.b)("p",null,Object(c.b)("img",{src:n(620).default})),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="utf-8">\n        <title>v-for</title>\n        <style type="text/css">\n        </style>\n    </head>\n    <body>\n        <div id="app">\n            <a href="http://www.baidu.com" @click.prevent="clicked">\u8d85\u94fe\u63a5</a>\n        </div>\n        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>\n        <script>\n            const vue = new Vue({\n                el: "#app",\n                data: {\n\n                },\n                methods: {\n                    clicked() {\n                        alert("\u88ab\u70b9\u4e86");\n                    }\n                }\n            })\n        <\/script>\n    </body>\n</html>\n')),Object(c.b)("p",null,"\u53d1\u73b0\u8d85\u94fe\u63a5\u4e0d\u518d\u8df3\u8f6c"),Object(c.b)("p",null,Object(c.b)("img",{src:n(621).default})),Object(c.b)("h2",{id:"63-self\u4e8b\u4ef6\u4fee\u9970\u7b26"},"6.3 self\u4e8b\u4ef6\u4fee\u9970\u7b26"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u53ea\u76d1\u542c\u81ea\u5df1\u6807\u7b7e\u4e0a\u7684\u4e8b\u4ef6\uff0c\u4e0d\u76d1\u542c\u5192\u6ce1")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u6848\u4f8b\uff1a"),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u5728\u9875\u9762\u4e0a\u653e\u7f6e",Object(c.b)("inlineCode",{parentName:"li"},"div"),"\uff0c",Object(c.b)("inlineCode",{parentName:"li"},"div"),"\u4e0a\u653e\u4e24\u4e2a\u6309\u94ae\uff0c\u5982\u679c\u4e0d\u60f3\u8ba9\u6309\u94ae\u7684\u4e8b\u4ef6\u5192\u6ce1\uff0c\u82e5\u4f7f\u7528",Object(c.b)("inlineCode",{parentName:"li"},".stop"),"\u4fee\u9970\u7b26\uff0c\u5219\u9700\u8981\u5728\u6bcf\u4e2a\u6309\u94ae\u4e0a\u90fd\u6dfb\u52a0",Object(c.b)("inlineCode",{parentName:"li"},".stop"),"\u4fee\u9970\u7b26"),Object(c.b)("li",{parentName:"ul"},"\u76f4\u63a5\u5728",Object(c.b)("inlineCode",{parentName:"li"},"div"),"\u4e8b\u4ef6\u4e0a\u52a0",Object(c.b)("inlineCode",{parentName:"li"},".self"),"\u4fee\u9970\u7b26\uff0c\u5219",Object(c.b)("inlineCode",{parentName:"li"},"div"),"\u53ea\u76d1\u542c\u81ea\u5df1\u88ab\u5355\u51fb\u4e8b\u4ef6\uff0c\u4e0d\u76d1\u542c\u6309\u94ae\u5355\u51fb\u4e8b\u4ef6\u4f20\u64ad\u4e0a\u6765"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="utf-8">\n        <title>v-for</title>\n        <style type="text/css">\n            .aa{\n                background-color: red;\n                width: 300px;\n                height: 300px;\n            }\n        </style>\n    </head>\n    <body>\n        <div id="app">\n            <div id="click" class="aa" @click.self="divClick">\n                <input type="button" value="\u6309\u94ae1" @click="btnClick1" />\n                <input type="button" value="\u6309\u94ae2" @click="btnClick2" />\n            </div>\n        </div>\n        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>\n        <script>\n            const vue = new Vue({\n                el: "#app",\n                data: {\n\n                },\n                methods: {\n                    btnClick1(){\n                        alert("btn1\u88ab\u70b9\u4e86")\n                    },\n                    btnClick2(){\n                        alert("btn2\u88ab\u70b9\u4e86")\n                    },\n                    divClick(){\n                        alert("div\u88ab\u70b9\u4e86");\n                    }\n                }\n            })\n        <\/script>\n    </body>\n</html>\n')),Object(c.b)("p",null,Object(c.b)("img",{src:n(622).default})),Object(c.b)("h2",{id:"64-once\u4e8b\u4ef6\u4fee\u9970\u7b26"},"6.4 once\u4e8b\u4ef6\u4fee\u9970\u7b26"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u4ee4\u6307\u5b9a\u4e8b\u4ef6\u53ea\u6267\u884c\u4e00\u6b21")))}p.isMDXComponent=!0},389:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=i.a.createContext({}),p=function(e){var t=i.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,r=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=p(n),s=a,m=u["".concat(r,".").concat(s)]||u[s]||d[s]||c;return n?i.a.createElement(m,l(l({ref:t},o),{},{components:n})):i.a.createElement(m,l({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,r=new Array(c);r[0]=s;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var o=2;o<c;o++)r[o]=n[o];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},618:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/5-77cee488731261ead81d806905238e91.gif"},619:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/6-59ce75b417b221354a67bcadc5df32e9.gif"},620:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/7-362287097ea6c0b34af00ebe257d74de.gif"},621:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/8-8187fe884de460efefbd21a4db3d4b46.gif"},622:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/9-36dd939ea1f1a5b3ab9a0d841382ee05.gif"}}]);