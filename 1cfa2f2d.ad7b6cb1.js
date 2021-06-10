(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{118:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(2),a=t(6),c=(t(0),t(511)),i={id:"5.vfor",title:"v-for",hide_title:!0},o={unversionedId:"front/vue/5.vfor",id:"front/vue/5.vfor",isDocsHomePage:!1,title:"v-for",description:"5. v-for",source:"@site/docs/front/vue/5.v-for.md",slug:"/front/vue/5.vfor",permalink:"/docs/front/vue/5.vfor",version:"current",sidebar:"someSidebar",previous:{title:"v-show|v-if|v-bind",permalink:"/docs/front/vue/4.vshow"},next:{title:"v-model",permalink:"/docs/front/vue/5.vmodel"}},l=[{value:"5. v-for",id:"5-v-for",children:[{value:"5.1 v-for\u904d\u5386\u5bf9\u8c61",id:"51-v-for\u904d\u5386\u5bf9\u8c61",children:[]},{value:"5.2 v-for\u904d\u5386\u5bf9\u8c61\u4e2d\u7684\u5c5e\u6027",id:"52-v-for\u904d\u5386\u5bf9\u8c61\u4e2d\u7684\u5c5e\u6027",children:[]},{value:"5.3 v-for\u904d\u5386\u5bf9\u8c61\u6570\u7ec4",id:"53-v-for\u904d\u5386\u5bf9\u8c61\u6570\u7ec4",children:[]},{value:"5.4 v-for\u904d\u5386\u6570\u7ec4",id:"54-v-for\u904d\u5386\u6570\u7ec4",children:[]},{value:"5.5 \u7ef4\u62a4\u72b6\u6001",id:"55-\u7ef4\u62a4\u72b6\u6001",children:[]}]}],p={rightToc:l};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"5-v-for"},"5. v-for"),Object(c.b)("h2",{id:"51-v-for\u904d\u5386\u5bf9\u8c61"},"5.1 v-for\u904d\u5386\u5bf9\u8c61"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"v-for"),"\uff1a\u7528\u6765\u5bf9\u5bf9\u8c61\u8fdb\u884c\u904d\u5386")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="utf-8">\n        <title>v-for</title>\n        <style type="text/css">\n\n        </style>\n    </head>\n    <body>\n        <div id="app">\n            <span v-for="u in user">\n                <span v-text="u"></span>\n            </span>\n        </div>\n        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>\n        <script>\n            const vue = new Vue({\n                el: "#app",\n                data: {\n                    user: {\n                        name: "Alice",\n                        age: 23\n                    }\n                }\n            })\n        <\/script>\n    </body>\n</html>\n')),Object(c.b)("h2",{id:"52-v-for\u904d\u5386\u5bf9\u8c61\u4e2d\u7684\u5c5e\u6027"},"5.2 v-for\u904d\u5386\u5bf9\u8c61\u4e2d\u7684\u5c5e\u6027"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="utf-8">\n        <title>v-for</title>\n        <style type="text/css">\n\n        </style>\n    </head>\n    <body>\n        <div id="app">\n            <span v-for="(value, key, index) in user">\n                \u7d22\u5f15\uff1a{ {index} } | Key: { {key} } | Value: { {value} } <br>\n            </span>\n        </div>\n        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>\n        <script>\n            const vue = new Vue({\n                el: "#app",\n                data: {\n                    user: {\n                        name: "Alice",\n                        age: 23\n                    }\n                }\n            })\n        <\/script>\n    </body>\n</html>\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"\u7d22\u5f15\uff1a0 | Key: name | Value: Alice\n\u7d22\u5f15\uff1a1 | Key: age | Value: 23\n")),Object(c.b)("h2",{id:"53-v-for\u904d\u5386\u5bf9\u8c61\u6570\u7ec4"},"5.3 v-for\u904d\u5386\u5bf9\u8c61\u6570\u7ec4"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n   <head>\n       <meta charset="utf-8">\n       <title>v-for</title>\n       <style type="text/css">\n\n       </style>\n   </head>\n   <body>\n       <div id="app">\n           <span v-for="(value, key, index) in users">\n               \u7d22\u5f15\uff1a{ {index} } | Key: { {key} } | Value: { {value} } <br>\n           </span>\n       </div>\n       <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>\n       <script>\n           const vue = new Vue({\n               el: "#app",\n               data: {\n                   users: [{name: "Alice",age: 23}, {name:"bob",age:16}]\n               }\n           })\n       <\/script>\n   </body>\n</html>\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'\u7d22\u5f15\uff1a | Key: 0 | Value: { "name": "Alice", "age": 23 }\n\u7d22\u5f15\uff1a | Key: 1 | Value: { "name": "bob", "age": 16 }\n')),Object(c.b)("hr",null),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="utf-8">\n        <title>v-for</title>\n        <style type="text/css">\n\n        </style>\n    </head>\n    <body>\n        <div id="app">\n            <span v-for="u in users">\n                { {u.name} } : { {u.age} } <br>\n            </span>\n        </div>\n        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>\n        <script>\n            const vue = new Vue({\n                el: "#app",\n                data: {\n                    users: [{name: "Alice",age: 23}, {name:"bob",age:16}]\n                }\n            })\n        <\/script>\n    </body>\n</html>\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"Alice : 23\nbob : 16\n")),Object(c.b)("h2",{id:"54-v-for\u904d\u5386\u6570\u7ec4"},"5.4 v-for\u904d\u5386\u6570\u7ec4"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="utf-8">\n        <title>v-for</title>\n        <style type="text/css">\n\n        </style>\n    </head>\n    <body>\n        <div id="app">\n            <ul>\n                <li v-for="a in arr">{{a}}</li>\n            </ul>\n        </div>\n        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>\n        <script>\n            const vue = new Vue({\n                el: "#app",\n                data: {\n                    arr: [\n                        "\u5317\u4eac",\n                        "\u4e0a\u6d77",\n                        "\u897f\u5b89"\n                    ]\n                }\n            })\n        <\/script>\n    </body>\n</html>\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"\u5317\u4eac\n\u4e0a\u6d77\n\u897f\u5b89\n")),Object(c.b)("h2",{id:"55-\u7ef4\u62a4\u72b6\u6001"},"5.5 \u7ef4\u62a4\u72b6\u6001"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u5f53 Vue \u6b63\u5728\u66f4\u65b0\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"v-for")," \u6e32\u67d3\u7684\u5143\u7d20\u5217\u8868\u65f6\uff0c\u5b83\u9ed8\u8ba4\u4f7f\u7528\u201c\u5c31\u5730\u66f4\u65b0\u201d\u7684\u7b56\u7565\u3002\u5982\u679c\u6570\u636e\u9879\u7684\u987a\u5e8f\u88ab\u6539\u53d8\uff0cVue \u5c06\u4e0d\u4f1a\u79fb\u52a8 DOM \u5143\u7d20\u6765\u5339\u914d\u6570\u636e\u9879\u7684\u987a\u5e8f\uff0c\u800c\u662f\u5c31\u5730\u66f4\u65b0\u6bcf\u4e2a\u5143\u7d20\uff0c\u5e76\u4e14\u786e\u4fdd\u5b83\u4eec\u5728\u6bcf\u4e2a\u7d22\u5f15\u4f4d\u7f6e\u6b63\u786e\u6e32\u67d3\u3002\u8fd9\u4e2a\u7c7b\u4f3c Vue 1.x \u7684 ",Object(c.b)("inlineCode",{parentName:"p"},'track-by="$index"'),"\u3002"),Object(c.b)("p",{parentName:"blockquote"},"\u8fd9\u4e2a\u9ed8\u8ba4\u7684\u6a21\u5f0f\u662f\u9ad8\u6548\u7684\uff0c\u4f46\u662f",Object(c.b)("strong",{parentName:"p"},"\u53ea\u9002\u7528\u4e8e\u4e0d\u4f9d\u8d56\u5b50\u7ec4\u4ef6\u72b6\u6001\u6216\u4e34\u65f6 DOM \u72b6\u6001 (\u4f8b\u5982\uff1a\u8868\u5355\u8f93\u5165\u503c) \u7684\u5217\u8868\u6e32\u67d3\u8f93\u51fa"),"\u3002"),Object(c.b)("p",{parentName:"blockquote"},"\u4e3a\u4e86\u7ed9 Vue \u4e00\u4e2a\u63d0\u793a\uff0c\u4ee5\u4fbf\u5b83\u80fd\u8ddf\u8e2a\u6bcf\u4e2a\u8282\u70b9\u7684\u8eab\u4efd\uff0c\u4ece\u800c\u91cd\u7528\u548c\u91cd\u65b0\u6392\u5e8f\u73b0\u6709\u5143\u7d20\uff0c\u4f60\u9700\u8981\u4e3a\u6bcf\u9879\u63d0\u4f9b\u4e00\u4e2a\u552f\u4e00 ",Object(c.b)("inlineCode",{parentName:"p"},"key")," attribute\uff1a")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<div v-for="item in items" v-bind:key="item.id">\n  \x3c!-- \u5185\u5bb9 --\x3e\n</div>\n')),Object(c.b)("p",null,"\u5efa\u8bae\u5c3d\u53ef\u80fd\u5728\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"v-for")," \u65f6\u63d0\u4f9b ",Object(c.b)("inlineCode",{parentName:"p"},"key")," attribute\uff0c\u9664\u975e\u904d\u5386\u8f93\u51fa\u7684 DOM \u5185\u5bb9\u975e\u5e38\u7b80\u5355\uff0c\u6216\u8005\u662f\u523b\u610f\u4f9d\u8d56\u9ed8\u8ba4\u884c\u4e3a\u4ee5\u83b7\u53d6\u6027\u80fd\u4e0a\u7684\u63d0\u5347\u3002"),Object(c.b)("p",null,"\u56e0\u4e3a\u5b83\u662f Vue \u8bc6\u522b\u8282\u70b9\u7684\u4e00\u4e2a\u901a\u7528\u673a\u5236\uff0c",Object(c.b)("inlineCode",{parentName:"p"},"key")," \u5e76\u4e0d\u4ec5\u4e0e ",Object(c.b)("inlineCode",{parentName:"p"},"v-for")," \u7279\u522b\u5173\u8054\u3002\u540e\u9762\u6211\u4eec\u5c06\u5728\u6307\u5357\u4e2d\u770b\u5230\uff0c\u5b83\u8fd8\u5177\u6709\u5176\u5b83\u7528\u9014\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u4e0d\u8981\u4f7f\u7528\u5bf9\u8c61\u6216\u6570\u7ec4\u4e4b\u7c7b\u7684\u975e\u57fa\u672c\u7c7b\u578b\u503c\u4f5c\u4e3a ",Object(c.b)("inlineCode",{parentName:"p"},"v-for")," \u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"key"),"\u3002\u8bf7\u7528\u5b57\u7b26\u4e32\u6216\u6570\u503c\u7c7b\u578b\u7684\u503c\u3002")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="utf-8">\n        <title>v-for</title>\n        <style type="text/css">\n\n        </style>\n    </head>\n    <body>\n        <div id="app">\n            <span v-for="u in users" v-bind:key="u.id">\n                {{u.name}} : {{u.age}} <br>\n            </span>\n        </div>\n        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>\n        <script>\n            const vue = new Vue({\n                el: "#app",\n                data: {\n                    users: [{id:1,name: "Alice",age: 23}, {id:2,name:"bob",age:16}]\n                }\n            })\n        <\/script>\n    </body>\n</html>\n')))}s.isMDXComponent=!0},511:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return v}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},b=function(e){var n=s(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(t),d=r,v=b["".concat(i,".").concat(d)]||b[d]||u[d]||c;return t?a.a.createElement(v,o(o({ref:n},p),{},{components:t})):a.a.createElement(v,o({ref:n},p))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<c;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);