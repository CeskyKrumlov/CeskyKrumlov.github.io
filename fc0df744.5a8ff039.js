(window.webpackJsonp=window.webpackJsonp||[]).push([[323],{378:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),c=(n(0),n(386)),o={id:"2.vtext",title:"v-text\u548cv-html",hide_title:!0},i={unversionedId:"front/vue/2.vtext",id:"front/vue/2.vtext",isDocsHomePage:!1,title:"v-text\u548cv-html",description:"2. v-text\u548cv-html",source:"@site/docs/front/vue/2.v-text\u4e0ev-html.md",slug:"/front/vue/2.vtext",permalink:"/docs/front/vue/2.vtext",version:"current",sidebar:"someSidebar",previous:{title:"\u7b80\u4ecb",permalink:"/docs/front/vue/1.helloVue"},next:{title:"\u4e8b\u4ef6\u5b9a\u4e49\u4e0e\u4f7f\u7528 v-on",permalink:"/docs/front/vue/3.von"}},l=[{value:"2. v-text\u548cv-html",id:"2-v-text\u548cv-html",children:[{value:"2.1 v-text",id:"21-v-text",children:[]},{value:"2.2 v-html",id:"22-v-html",children:[]}]}],p={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"2-v-text\u548cv-html"},"2. v-text\u548cv-html"),Object(c.b)("h2",{id:"21-v-text"},"2.1 v-text"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"v-text"),"\u7528\u6765\u83b7\u53d6data\u4e2d\u7684\u6570\u636e\uff0c\u5c06\u6570\u636e\u4ee5\u6587\u672c\u7684\u5f62\u5f0f\uff0c\u6e32\u67d3\u5230\u6307\u5b9a\u6807\u7b7e\u5185\u90e8\uff0c\u7c7b\u4f3c\u4e8eJavaScript\u4e2d\u7684",Object(c.b)("inlineCode",{parentName:"p"},"innerHTML"))),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<span v-text="message"></span>\n')),Object(c.b)("p",null,"\u4f7f\u7528",Object(c.b)("inlineCode",{parentName:"p"},"v-text"),"\u65e0\u9700\u5199",Object(c.b)("strong",{parentName:"p"},"{","{","}","}"),"\uff0c\u53ef\u4ee5\u76f4\u63a5\u83b7\u53d6",Object(c.b)("inlineCode",{parentName:"p"},"data"),"\u6570\u636e"),Object(c.b)("p",null,"\u5728",Object(c.b)("inlineCode",{parentName:"p"},"v-text"),"\u4e2d\u4e5f\u53ef\u4ee5\u4f7f\u7528\u8868\u8fbe\u5f0f"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="utf-8">\n        <title></title>\n    </head>\n    <body>\n        <div id="app">\n            <span>{{message}} </span>\n            <span v-text="message"></span>\n        </div>\n        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>\n        <script type="text/javascript">\n            const app = new Vue({\n                el: "#app",\n                data: {\n                    message: "abc"\n                }\n            })\n        <\/script>\n    </body>\n</html>\n')),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"v-text"),"\u548c",Object(c.b)("inlineCode",{parentName:"p"},"{ {\u8868\u8fbe\u5f0f} }"),"\u7684\u533a\u522b\uff1a"),Object(c.b)("ol",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ol"},"\u4f7f\u7528",Object(c.b)("inlineCode",{parentName:"li"},"v-text"),"\u53d6\u503c\uff0c\u4f1a\u5c06\u6807\u7b7e\u4e2d\u539f\u6709\u7684\u6570\u636e\u8986\u76d6\uff1b\u4f7f\u7528",Object(c.b)("inlineCode",{parentName:"li"},"{ {\u8868\u8fbe\u5f0f} }"),"\u63d2\u503c\u8868\u8fbe\u5f0f\u7684\u5f62\u5f0f\u53d6\u503c\u3002\u4e0d\u4f1a\u8986\u76d6\u6807\u7b7e\u4e2d\u539f\u6709\u7684\u6570\u636e"),Object(c.b)("li",{parentName:"ol"},"\u4f7f\u7528",Object(c.b)("inlineCode",{parentName:"li"},"v-text"),"\u53ef\u4ee5\u907f\u514d\u5728\u7f51\u7edc\u73af\u5883\u8f83\u5dee\u7684\u73af\u5883\u4e0b\uff0c\u51fa\u73b0\u63d2\u503c\u95ea\u70c1\n",Object(c.b)("strong",{parentName:"li"},"\u63d2\u503c\u95ea\u70c1"),"\uff1a\u5728\u6570\u636e\u672a\u52a0\u8f7d\u5b8c\u6bd5\u524d\uff0c\u7528\u6237\u53ef\u4ee5\u770b\u5230\u63d2\u503c\u8868\u8fbe\u5f0f",Object(c.b)("inlineCode",{parentName:"li"},"{ {\u8868\u8fbe\u5f0f} }")))),Object(c.b)("h2",{id:"22-v-html"},"2.2 v-html"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"v-html"),"\u7528\u6765\u83b7\u53d6data\u4e2d\u7684\u6570\u636e\uff0c\u5c06\u6570\u636e\u4e2d\u542b\u6709\u7684html\u6807\u7b7e\u5148\u89e3\u6790\uff0c\u518d\u6e32\u67d3\u5230\u6307\u5b9a\u6807\u7b7e\u5185\u90e8\u3002\u7c7b\u4f3c\u4e8eJavaScript\u4e2d\u7684",Object(c.b)("inlineCode",{parentName:"p"},"innerHTML")),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"v-html"),"\u4e5f\u4f1a\u8986\u76d6\u539f\u6709\u6807\u7b7e\u4e2d\u7684\u5185\u5bb9"))),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="utf-8">\n        <title></title>\n    </head>\n    <body>\n        <div id="app">\n            <span v-html="message"></span><br>\n            <span v-text="message">\u54c8\u54c8\u54c8</span>\n        </div>\n        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>\n        <script type="text/javascript">\n            const app = new Vue({\n                el: "#app",\n                data: {\n                    message: "<a href=\'#\'>\u4e00\u4e2a\u8d85\u94fe\u63a5</a>"\n                }\n            })\n        <\/script>\n    </body>\n</html>\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"\u4e00\u4e2a\u8d85\u94fe\u63a5\n<a href='#'>\u4e00\u4e2a\u8d85\u94fe\u63a5</a>\n")))}b.isMDXComponent=!0},386:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return v}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(n),m=r,v=u["".concat(o,".").concat(m)]||u[m]||s[m]||c;return n?a.a.createElement(v,i(i({ref:t},p),{},{components:n})):a.a.createElement(v,i({ref:t},p))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<c;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);