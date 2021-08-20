(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{282:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(6),l=(n(0),n(567)),c={id:"4.vshow",title:"v-show|v-if|v-bind",hide_title:!0},s={unversionedId:"front/vue/4.vshow",id:"front/vue/4.vshow",isDocsHomePage:!1,title:"v-show|v-if|v-bind",description:"4. v-show\u3001v-if\u3001v-bind",source:"@site/docs/front/vue/4.v-show,v-if\u548cv-bind.md",slug:"/front/vue/4.vshow",permalink:"/docs/front/vue/4.vshow",version:"current",sidebar:"someSidebar",previous:{title:"\u4e8b\u4ef6\u5b9a\u4e49\u4e0e\u4f7f\u7528 v-on",permalink:"/docs/front/vue/3.von"},next:{title:"v-for",permalink:"/docs/front/vue/5.vfor"}},r=[{value:"4. v-show\u3001v-if\u3001v-bind",id:"4-v-show\u3001v-if\u3001v-bind",children:[{value:"4.1 v-show",id:"41-v-show",children:[]},{value:"4.2 v-if",id:"42-v-if",children:[]},{value:"4.3 v-bind",id:"43-v-bind",children:[]},{value:"4.4 v-bind\u7b80\u5316\u5199\u6cd5",id:"44-v-bind\u7b80\u5316\u5199\u6cd5",children:[]}]}],o={rightToc:r};function b(e){var t=e.components,c=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,c,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"4-v-show\u3001v-if\u3001v-bind"},"4. v-show\u3001v-if\u3001v-bind"),Object(l.b)("h2",{id:"41-v-show"},"4.1 v-show"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u7528\u6765\u63a7\u5236\u9875\u9762\u4e0a\u67d0\u4e2a\u5143\u7d20\u662f\u5426\u663e\u793a\uff0c\u5e95\u5c42\u63a7\u5236\u7684\u662f\u6807\u7b7e\u7684display\u5c5e\u6027"),Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("inlineCode",{parentName:"p"},"v-show"),"\u63a5\u6536",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),"\u7c7b\u578b\u7684\u503c"),Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"true"),"\u663e\u793a")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"false"),"\u9690\u85cf")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u63a5\u6536",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),"\u7c7b\u578b\u7684\u53d8\u91cf")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u63a5\u6536\u903b\u8f91\u8868\u8fbe\u5f0f")))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="utf-8">\n        <title></title>\n    </head>\n    <body>\n        <div id="app">\n            <h2 v-show="showFlag">\u963f\u91cc\u5df4\u5df4\u6b22\u8fce\u4f60</h2>\n            <input type="button" value="\u663e\u793a" @click="show" />\n            <input type="button" value="\u9690\u85cf" @click="hide" />\n        </div>\n        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>\n        <script type="text/javascript">\n            const app = new Vue({\n                el: "#app",\n                data: {\n                    showFlag: false\n                },\n                methods: {\n                    show() {\n                        this.showFlag = true;\n                    },\n                    hide() {\n                        this.showFlag = false;\n                    }\n                }\n            })\n        <\/script>\n    </body>\n</html>\n')),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("inlineCode",{parentName:"p"},"v-show"),"\u8fd8\u53ef\u4ee5\u63a5\u53d7\u903b\u8f91\u8868\u8fbe\u5f0f"),Object(l.b)("p",{parentName:"blockquote"},"\u4f8b\u5982\uff1a\u6709\u4e00\u6bb5\u5185\u5bb9\uff0c\u53ea\u6709\u6210\u5e74\u4eba\u624d\u80fd\u89c2\u770b")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="utf-8">\n        <title></title>\n    </head>\n    <body>\n        <div id="app">\n            <h1 v-show="age>=18">\u6210\u5e74\u624d\u80fd\u89c2\u770b</h1>\n            <input type="button" value="\u957f\u5927\u523020\u5c81" @click="grow" />\n        </div>\n        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>\n        <script type="text/javascript">\n            const app = new Vue({\n                el: "#app",\n                data: {\n                    showFlag: false,\n                    age: 14\n                },\n                methods: {\n                    grow() {\n                        this.age = 20;\n                    }\n                }\n            })\n        <\/script>\n    </body>\n</html>\n')),Object(l.b)("h2",{id:"42-v-if"},"4.2 v-if"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("inlineCode",{parentName:"p"},"v-if"),"\u7528\u6765\u63a7\u5236\u9875\u9762\u5143\u7d20\u662f\u5426\u5c55\u793a\uff0c\u5e95\u5c42\u662f\u64cd\u4f5cDOM\u5143\u7d20")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="utf-8">\n        <title></title>\n    </head>\n    <body>\n        <div id="app">\n            <h2 v-if="true">\u663e\u793a\u62111</h2>\n            <h2 v-if="showFlag">\u663e\u793a\u62112</h2>\n        </div>\n        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>\n        <script type="text/javascript">\n            const app = new Vue({\n                el: "#app",\n                data: {\n                    showFlag: false,\n                },\n                methods: {\n                }\n            })\n        <\/script>\n    </body>\n</html>\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"v-show"),"\u548c",Object(l.b)("inlineCode",{parentName:"strong"},"v-if"),"\u770b\u8d77\u6765\u5e76\u6ca1\u6709\u4ec0\u4e48\u533a\u522b\uff0c\u90a3\u4e48\u5b83\u4eec\u6709\u533a\u522b\u5417?")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("inlineCode",{parentName:"p"},"v-show"),"\u548c",Object(l.b)("inlineCode",{parentName:"p"},"v-if"),"\u7684\u533a\u522b\uff1a"),Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"v-if")," \u662f\u201c\u771f\u6b63\u7684\u201d\u6761\u4ef6\u6e32\u67d3\uff0c\u56e0\u4e3a\u5b83\u4f1a\u786e\u4fdd\u5728\u5207\u6362\u8fc7\u7a0b\u4e2d\u6761\u4ef6\u5757\u5185\u7684\u4e8b\u4ef6\u76d1\u542c\u5668\u548c\u5b50\u7ec4\u4ef6\u9002\u5f53\u5730\u88ab\u9500\u6bc1\u548c\u91cd\u5efa\u3002",Object(l.b)("inlineCode",{parentName:"li"},"v-if")," \u4e5f\u662f\u60f0\u6027\u7684\uff1a\u5982\u679c\u5728\u521d\u59cb\u6e32\u67d3\u65f6\u6761\u4ef6\u4e3a\u5047\uff0c\u5219\u4ec0\u4e48\u4e5f\u4e0d\u505a\u2014\u2014\u76f4\u5230\u6761\u4ef6\u7b2c\u4e00\u6b21\u53d8\u4e3a\u771f\u65f6\uff0c\u624d\u4f1a\u5f00\u59cb\u6e32\u67d3\u6761\u4ef6\u5757\u3002"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"v-show")," \u4e0d\u7ba1\u521d\u59cb\u6761\u4ef6\u662f\u4ec0\u4e48\uff0c\u5143\u7d20\u603b\u662f\u4f1a\u88ab\u6e32\u67d3\uff0c\u5e76\u4e14\u53ea\u662f\u7b80\u5355\u5730\u57fa\u4e8e CSS \u8fdb\u884c\u5207\u6362\u3002"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"v-if")," \u6709\u66f4\u9ad8\u7684\u5207\u6362\u5f00\u9500\uff0c\u800c ",Object(l.b)("inlineCode",{parentName:"li"},"v-show")," \u6709\u66f4\u9ad8\u7684\u521d\u59cb\u6e32\u67d3\u5f00\u9500\u3002"),Object(l.b)("li",{parentName:"ul"},"\u5982\u679c\u9700\u8981\u975e\u5e38\u9891\u7e41\u5730\u5207\u6362\uff0c\u5219\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"v-show")," \u8f83\u597d\uff1b\u5982\u679c\u5728\u8fd0\u884c\u65f6\u6761\u4ef6\u4e0d\u592a\u53ef\u80fd\u6539\u53d8\uff0c\u5219\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"v-if")," \u8f83\u597d\u3002"))),Object(l.b)("h2",{id:"43-v-bind"},"4.3 v-bind"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("inlineCode",{parentName:"p"},"v-bind"),"\u7528\u6765\u7ed9\u6807\u7b7e\u7ed1\u5b9a\u76f8\u5e94\u5c5e\u6027\uff0c\u4ece\u800c\u901a\u8fc7vue\u52a8\u6001\u4fee\u6539\u6807\u7b7e\u7684\u5c5e\u6027")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="utf-8">\n        <title></title>\n        <style type="text/css">\n            .cls1{\n                border: 1px solid black;\n            }\n        </style>\n    </head>\n    <body>\n        <div id="app">\n            <img v-bind:title="mytitle" v-bind:class="css" src="https://tse1-mm.cn.bing.net/th/id/OIP.7UGWOO-RZmapid-oaCOLkwHaGa?w=187&h=160&c=7&o=5&pid=1.7" >\n        </div>\n        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>\n        <script>\n            const vue = new Vue({\n                el:"#app",\n                data:{\n                    mytitle: "!!!!!!!!!!!!!!!!!!!!!",\n                    css:"cls1"\n                },\n                methods:{}\n            })\n        <\/script>\n    </body>\n</html>\n')),Object(l.b)("p",null,Object(l.b)("img",{alt:"image-20200507230615529",src:n(946).default})),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u8fd8\u53ef\u4ee5\u4f20\u9012",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),"\u7c7b\u578b\u7684\u53d8\u91cf\uff0c\u903b\u8f91\u8868\u8fbe\u5f0f"),Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("inlineCode",{parentName:"p"},"v-bind:class=\"showCss?'cls1':''\" "))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="utf-8">\n        <title></title>\n        <style type="text/css">\n            .cls1{\n                border: 1px solid black;\n            }\n        </style>\n    </head>\n    <body>\n        <div id="app">\n            <img v-bind:title="mytitle" v-bind:class="showCss?\'cls1\':\'\'" src="https://tse1-mm.cn.bing.net/th/id/OIP.7UGWOO-RZmapid-oaCOLkwHaGa?w=187&h=160&c=7&o=5&pid=1.7" >\n        </div>\n        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>\n        <script>\n            const vue = new Vue({\n                el:"#app",\n                data:{\n                    mytitle: "!!!!!!!!!!!!!!!!!!!!!",\n                    showCss:false\n                },\n                methods:{}\n            })\n        <\/script>\n    </body>\n</html>\n')),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u8fd8\u53ef\u4ee5",Object(l.b)("inlineCode",{parentName:"p"},'v-bind:class="{cls1:showCssFlag}"'))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="utf-8">\n        <title></title>\n        <style type="text/css">\n            .cls1{\n                border: 1px solid black;\n            }\n        </style>\n    </head>\n    <body>\n        <div id="app">\n            <img v-bind:title="mytitle" v-bind:class="{cls1:showCssFlag}" src="https://tse1-mm.cn.bing.net/th/id/OIP.7UGWOO-RZmapid-oaCOLkwHaGa?w=187&h=160&c=7&o=5&pid=1.7" >\n        </div>\n        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>\n        <script>\n            const vue = new Vue({\n                el:"#app",\n                data:{\n                    mytitle: "!!!!!!!!!!!!!!!!!!!!!",\n                    showCssFlag:true\n                },\n                methods:{}\n            })\n        <\/script>\n    </body>\n</html>\n')),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u52a8\u6001\u63a7\u5236\u52a0\u5165\u6837\u5f0f")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="utf-8">\n        <title></title>\n        <style type="text/css">\n            .cls1 {\n                border: 1px solid black;\n            }\n        </style>\n    </head>\n    <body>\n        <div id="app">\n            <img v-bind:title="mytitle" v-bind:class="{cls1:showCssFlag}" src="https://tse1-mm.cn.bing.net/th/id/OIP.7UGWOO-RZmapid-oaCOLkwHaGa?w=187&h=160&c=7&o=5&pid=1.7">\n            <input type="button" value="\u52a8\u6001\u52a0\u5165\u6837\u5f0f" @click="changeCss" />\n        </div>\n        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>\n        <script>\n            const vue = new Vue({\n                el: "#app",\n                data: {\n                    mytitle: "!!!!!!!!!!!!!!!!!!!!!",\n                    showCssFlag: true\n                },\n                methods: {\n                    changeCss() {\n                        this.showCssFlag = !this.showCssFlag;\n                    }\n                }\n            })\n        <\/script>\n    </body>\n</html>\n')),Object(l.b)("p",null,Object(l.b)("img",{src:n(947).default})),Object(l.b)("h2",{id:"44-v-bind\u7b80\u5316\u5199\u6cd5"},"4.4 v-bind\u7b80\u5316\u5199\u6cd5"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("inlineCode",{parentName:"p"},"v-bind:\u5c5e\u6027\u540d")," --\x3e ",Object(l.b)("inlineCode",{parentName:"p"},":\u5c5e\u6027\u540d"))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="utf-8">\n        <title></title>\n        <style type="text/css">\n            .cls1 {\n                border: 1px solid black;\n            }\n        </style>\n    </head>\n    <body>\n        <div id="app">\n            <img :title="mytitle" :class="{cls1:showCssFlag}" src="https://tse1-mm.cn.bing.net/th/id/OIP.7UGWOO-RZmapid-oaCOLkwHaGa?w=187&h=160&c=7&o=5&pid=1.7">\n            <input type="button" value="\u52a8\u6001\u52a0\u5165\u6837\u5f0f" @click="changeCss" />\n        </div>\n        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>\n        <script>\n            const vue = new Vue({\n                el: "#app",\n                data: {\n                    mytitle: "!!!!!!!!!!!!!!!!!!!!!",\n                    showCssFlag: true\n                },\n                methods: {\n                    changeCss() {\n                        this.showCssFlag = !this.showCssFlag;\n                    }\n                }\n            })\n        <\/script>\n    </body>\n</html>\n')),Object(l.b)("p",null,"\u6548\u679c\u4e0d\u53d8"))}b.isMDXComponent=!0},567:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=i.a.createContext({}),b=function(e){var t=i.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,o=r(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(c,".").concat(u)]||p[u]||d[u]||l;return n?i.a.createElement(m,s(s({ref:t},o),{},{components:n})):i.a.createElement(m,s({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=u;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var o=2;o<l;o++)c[o]=n[o];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},946:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/1-e394f0609feede894f407ab929f2168b.png"},947:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/1-b0a58a25d0665c3c597293bfaef3fb22.gif"}}]);