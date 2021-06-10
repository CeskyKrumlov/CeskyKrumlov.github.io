(window.webpackJsonp=window.webpackJsonp||[]).push([[390],{446:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),c=(n(0),n(492)),o={id:"4.deploy",title:"\u90e8\u7f72",hide_title:!0},l={unversionedId:"front/vuecli/4.deploy",id:"front/vuecli/4.deploy",isDocsHomePage:!1,title:"\u90e8\u7f72",description:"\u90e8\u7f72",source:"@site/docs/front/vuecli/4.\u90e8\u7f72.md",slug:"/front/vuecli/4.deploy",permalink:"/docs/front/vuecli/4.deploy",version:"current",sidebar:"someSidebar",previous:{title:"Vuex",permalink:"/docs/front/vuecli/3.vuex"},next:{title:"Vue3.0\u9879\u76ee\u521b\u5efa",permalink:"/docs/front/vuecli/5.vue3Create"}},p=[{value:"\u90e8\u7f72",id:"\u90e8\u7f72",children:[{value:"express\u90e8\u7f72",id:"express\u90e8\u7f72",children:[]}]}],i={rightToc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),Object(c.b)("p",null,"\u4fee\u6539\u76f8\u5bf9\u8def\u5f84\u7684\u53e6\u4e00\u79cd\u65b9\u6cd5"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u65b0\u5efa",Object(c.b)("inlineCode",{parentName:"p"},"vue.config.js"),"\u6587\u4ef6"),Object(c.b)("p",{parentName:"li"},"\u4ee5node\u5f62\u5f0f\u66b4\u9732"))),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"module.exports = {\n    publicPath: './'\n}\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u91cd\u65b0\u6253\u5305")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"vue run build\n")),Object(c.b)("h2",{id:"express\u90e8\u7f72"},"express\u90e8\u7f72"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markdown"}),"-- express\n-- app.js\n-- static\u6587\u4ef6\u5939\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"app.js")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"let express = requie('express')\nlet app = express()\n\napp.use(express.static('static'))\n\napp.listen(3000, () => {\n    console.log(\"\u670d\u52a1\u5668\u542f\u52a8:http://localhost:3000\")\n})\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u542f\u52a8")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cd express\n\nnode app.js\n")))}u.isMDXComponent=!0},492:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,f=s["".concat(o,".").concat(d)]||s[d]||b[d]||c;return n?a.a.createElement(f,l(l({ref:t},i),{},{components:n})):a.a.createElement(f,l({ref:t},i))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var i=2;i<c;i++)o[i]=n[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);