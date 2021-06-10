(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{171:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(2),o=t(6),a=(t(0),t(492)),c={id:"8.mockjs",title:"MockJs\u6a21\u62df\u540e\u7aef\u6570\u636e",hide_title:!0},i={unversionedId:"front/vuecli/8.mockjs",id:"front/vuecli/8.mockjs",isDocsHomePage:!1,title:"MockJs\u6a21\u62df\u540e\u7aef\u6570\u636e",description:"mockjs\u6a21\u62df\u540e\u7aef\u6570\u636e",source:"@site/docs/front/vuecli/8.mockjs.md",slug:"/front/vuecli/8.mockjs",permalink:"/docs/front/vuecli/8.mockjs",version:"current",sidebar:"someSidebar",previous:{title:"Vue\u8de8\u57df",permalink:"/docs/front/vuecli/7.crossOrigin"},next:{title:"\u73af\u5883\u642d\u5efa\u4e0e\u9700\u6c42",permalink:"/docs/security_Oauth2_JWT/1.basicEnv"}},l=[{value:"mockjs\u6a21\u62df\u540e\u7aef\u6570\u636e",id:"mockjs\u6a21\u62df\u540e\u7aef\u6570\u636e",children:[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[]},{value:"\u4f7f\u7528mockjs",id:"\u4f7f\u7528mockjs",children:[]}]}],p={rightToc:l};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"mockjs\u6a21\u62df\u540e\u7aef\u6570\u636e"},"mockjs\u6a21\u62df\u540e\u7aef\u6570\u636e"),Object(a.b)("p",null,"\u5728\u540e\u7aef\u9879\u76ee\u4e0d\u5b58\u5728\u7684\u60c5\u51b5\u4e0b\uff0c\u4e3a\u4e86\u5f00\u53d1\u524d\u7aef\u9879\u76ee\uff0c\u53ef\u4ee5\u4f7f\u7528mockjs\u4f2a\u9020\u540e\u7aef\u670d\u52a1\u5668\u7684\u54cd\u5e94\u6570\u636e"),Object(a.b)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install mockjs --save\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u62e6\u622a\u8bf7\u6c42\uff0c\u5e76\u7ed9\u51fa\u54cd\u5e94")),Object(a.b)("p",null," \u5728",Object(a.b)("inlineCode",{parentName:"p"},"/api/data.js"),"\u4e2d\uff0c\u518d\u5199\u4e00\u4e2a\u8bf7\u6c42\u540e\u7aef\u7684\u65b9\u6cd5"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'import axios from \'@/api/axios\'\n\nexport const getBannerData = () => {\n    return axios.request({\n        url:"banner",\n        method:\'get\'\n    })\n}\n\n// \u65b0\u5199\u7684\u65b9\u6cd5\nexport const getUserData = () => {\n    return axios.request({\n        url:"username",\n        method:"get"\n    })\n}\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u5728\u7ec4\u4ef6\u4e2d\u8c03\u7528")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// ... \u5bfc\u5165\u7701\u7565\n\nasync mounted(){ // \u751f\u547d\u5468\u671f\u51fd\u6570\n    let result = await getUserData();\n    console.log(result);\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u56e0\u4e3a\u6ca1\u540e\u7aef\uff0c\u6240\u4ee5\u4f1a404")),Object(a.b)("h2",{id:"\u4f7f\u7528mockjs"},"\u4f7f\u7528mockjs"),Object(a.b)("p",null,"\u4fee\u6539\u9879\u76ee\u7684",Object(a.b)("inlineCode",{parentName:"p"},"main.js"),"\uff0c\u914d\u7f6e\u5f00\u53d1\u73af\u5883\u52a0\u8f7dmock.js"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import Vue from 'vue'\nimport App from './App.vue'\nimport router from './router'\nimport store from './store'\nimport '@/config/rem'\n\nVue.config.productionTip = false\n// \u5728\u5f00\u53d1\u73af\u5883\u4e0b\uff0c\u5bfc\u5165Mock.js , api\u76ee\u5f55\u4e0b\u7684mock.js\nif(process.env.NODE_ENV == 'development') require('@/api/mock')\n\nnew Vue({\n  router,\n  store,\n  render: h => h(App)\n}).$mount('#app')\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u65b0\u5efa",Object(a.b)("inlineCode",{parentName:"li"},"/api/mock.js"))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import Mock from \'mockjs\';\n\n// \u914d\u7f6e\u6a21\u62df\u7f51\u7edc\u5ef6\u8fdf\nMock.setUp({\n    timeout: 1000 // 1\u79d2\u5ef6\u8fdf\n})\n\n// \u5339\u914d\u4e00\u4e2a\u8bf7\u6c42\u8def\u5f84\uff0c \u8fd8\u53ef\u4ee5\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u5b9e\u73b0\u591a\u5339\u914d\nMock.mock(\'/api/username\', { \n    // \u5047\u54cd\u5e94\uff0c\u5199\u6b7b\u7684\n    username:"\u6211\u662f\u540d\u5b57",\n    age: 18,\n    gender: "\u7537"\n})\n\n// \u518d\u5199\u4e00\u4e2a\u53ef\u4ee5\u751f\u6210\u968f\u673a\u5047\u54cd\u5e94\u7684mock\nMock.mock(/\\/api\\/user/igs,{\n    username:"\u8001\u9648",\n    "mtime":"@datetime", // \u968f\u673a\u65f6\u95f4\n    "score|1-800":800,  // \u968f\u673a1~800\n    "rank|1-100":100,\n    "nickname":"@cname", // \u968f\u673a\u751f\u6210\u4e2d\u6587\u540d\u5b57\n    "address":"@url",  // \u968f\u673a\u751f\u6210\u5730\u5740\n    "imgUrl":"@image",  // \u968f\u673a\u56fe\u7247\n    \'email\':"@email" // \u968f\u673a\u90ae\u7bb1\n})\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u8fd8\u53ef\u4ee5\u5c06\u5047\u6570\u636e\u5b9a\u4e49\u5728\u4e00\u4e2ajs\u6587\u4ef6\u4e2d")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"position.js")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'export default { "address": "\u5e7f\u4e1c\u7701\u5e7f\u5dde\u5e02\u6d77\u73e0\u533a\u9605\u6c5f\u897f\u8def222\u53f7", "city": "\u5e7f\u4e1c\u7701", "geohash": "23.10647,113.32446", "latitude": "23.10647", "longitude": "113.32446", "name": "\u6d77\u73e0\u533a\u8d64\u5c97\u6c47\u793c\u8f69\u5546\u573a(\u6ee8\u6c5f\u4e1c\u8def\u535750\u7c73)" }\n')),Object(a.b)("p",null,"\u7136\u540e\u5728mock.js\u4e2d\u5f15\u5165"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"mock.js")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import Mock from 'mockjs';\nimport position from '@/api/mockServerData/position'\n\n//\u914d\u7f6e\u8bf7\u6c42\u5ef6\u65f6\nMock.setup({\n    timeout:1000\n})\n\nMock.mock('/api/posi',position)\n")),Object(a.b)("p",null,"\u8fd9\u6837\u5728\u8bf7\u6c42\u65f6\uff0c\u5c31\u53ef\u4ee5\u5f97\u5230\u5047\u54cd\u5e94\u4e86"))}u.isMDXComponent=!0},492:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return j}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),b=r,j=s["".concat(c,".").concat(b)]||s[b]||m[b]||a;return t?o.a.createElement(j,i(i({ref:n},p),{},{components:t})):o.a.createElement(j,i({ref:n},p))}));function j(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=b;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);