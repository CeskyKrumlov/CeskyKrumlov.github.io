(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(2),i=n(6),a=(n(0),n(375)),c={id:"7.crossOrigin",title:"Vue\u8de8\u57df",hide_title:!0},o={unversionedId:"front/vuecli/7.crossOrigin",id:"front/vuecli/7.crossOrigin",isDocsHomePage:!1,title:"Vue\u8de8\u57df",description:"Vue\u5f00\u53d1\u6a21\u5f0f\u8de8\u57df\u4e0e\u4ee3\u7406\u670d\u52a1\u5668\u8bbe\u7f6e",source:"@site/docs/front/vuecli/7.vue\u8de8\u57df.md",slug:"/front/vuecli/7.crossOrigin",permalink:"/docs/front/vuecli/7.crossOrigin",version:"current",sidebar:"someSidebar",previous:{title:"Axios\u8bf7\u6c42\u4e0e\u54cd\u5e94\u62e6\u622a",permalink:"/docs/front/vuecli/6.axiosInterceptor"},next:{title:"MockJs\u6a21\u62df\u540e\u7aef\u6570\u636e",permalink:"/docs/front/vuecli/8.mockjs"}},p=[{value:"Vue\u5f00\u53d1\u6a21\u5f0f\u8de8\u57df\u4e0e\u4ee3\u7406\u670d\u52a1\u5668\u8bbe\u7f6e",id:"vue\u5f00\u53d1\u6a21\u5f0f\u8de8\u57df\u4e0e\u4ee3\u7406\u670d\u52a1\u5668\u8bbe\u7f6e",children:[{value:"\u8de8\u57df\u95ee\u9898",id:"\u8de8\u57df\u95ee\u9898",children:[]}]}],l={rightToc:p};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"vue\u5f00\u53d1\u6a21\u5f0f\u8de8\u57df\u4e0e\u4ee3\u7406\u670d\u52a1\u5668\u8bbe\u7f6e"},"Vue\u5f00\u53d1\u6a21\u5f0f\u8de8\u57df\u4e0e\u4ee3\u7406\u670d\u52a1\u5668\u8bbe\u7f6e"),Object(a.b)("h2",{id:"\u8de8\u57df\u95ee\u9898"},"\u8de8\u57df\u95ee\u9898"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u6d4f\u89c8\u5668\u4e0d\u5141\u8bb8\u8de8",Object(a.b)("strong",{parentName:"p"},"\u7aef\u53e3"),"\u8bf7\u6c42"),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"\u89e3\u51b3\u65b9\u5f0f1\uff1a"),"\u540e\u7aef\u5728\u54cd\u5e94\u5934\u91cc\u5141\u8bb8\u6d4f\u89c8\u5668\u8de8\u57df"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"\u89e3\u51b3\u65b9\u5f0f2\uff1a"),"\u524d\u7aef\u8bf7\u6c42\u81ea\u5df1\u7684\u524d\u7aef\u670d\u52a1\u7aef\u53e3\uff0c\u7531\u524d\u7aef\u670d\u52a1\u7aef\u53e3\u4ee3\u7406\u8bf7\u6c42\u5230\u540e\u7aef\u7aef\u53e3"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u5728\u6839\u76ee\u5f55\u65b0\u5efa",Object(a.b)("inlineCode",{parentName:"li"},"vue.config.js"))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"module.exports = { // node\u5bfc\u51fa\n    devServer:{  // \u5f00\u53d1\u6a21\u5f0f\u670d\u52a1\u5668\n        proxy:{ // \u4ee3\u7406\n            '/api':{  //\u8bbf\u95ee\u6240\u6709/api\u8def\u5f84\u7684\u8bf7\u6c42\u90fd\u7528\u4ee3\u7406\n                target:\"http://localhost:3000\", // \u76ee\u6807\u670d\u52a1\u5668URL\n                pathRewrite:{\n                    '^/api': \"\" \n                }\n            }\n        }\n    }\n}\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u4fee\u6539",Object(a.b)("inlineCode",{parentName:"li"},"/config/index.js"),"\uff0cdev\u4e0d\u518d\u8bbf\u95eeLocalhost:3000\uff0c\u800c\u662f",Object(a.b)("inlineCode",{parentName:"li"},"/api/"))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'export default {\n    title:"lcelm",\n    baseUrl:{\n        dev:"/api/",//\u5f00\u53d1\u7684\u65f6\u5019\u540e\u53f0\u63a5\u53e3\u7684\u5730\u5740 \u76f8\u5f53\u4e8elocalhost:8080/api/\n        pro:""//\u4e0a\u7ebf\u4ea7\u54c1\u53d1\u5e03\u4e4b\u540e\uff0c\u540e\u53f0\u63a5\u53e3\u7684\u5730\u5740\n    }\n}\n')),Object(a.b)("p",null,"\u7528\u4ee3\u7406, \u9996\u5148\u4f60",Object(a.b)("strong",{parentName:"p"},"\u5f97\u6709\u4e00\u4e2a\u6807\u8bc6"),", \u544a\u8bc9\u4ed6\u4f60\u8fd9\u4e2a\u8fde\u63a5\u8981\u7528\u4ee3\u7406. ",Object(a.b)("strong",{parentName:"p"},"\u4e0d\u7136\u7684\u8bdd"),", \u53ef\u80fd\u4f60\u7684 ",Object(a.b)("strong",{parentName:"p"},"html, css, js\u8fd9\u4e9b\u9759\u6001\u8d44\u6e90\u90fd\u8dd1\u53bb\u4ee3\u7406"),". \u6240\u4ee5\u6211\u4eec\u53ea\u8981\u63a5\u53e3\u7528\u4ee3\u7406, \u9759\u6001\u6587\u4ef6\u7528\u672c\u5730."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"'/iclient': {}"),", \u5c31\u662f\u544a\u8bc9",Object(a.b)("inlineCode",{parentName:"p"},"node"),", \u6211\u63a5\u53e3\u53ea\u8981\u662f",Object(a.b)("inlineCode",{parentName:"p"},"'/iclient'"),"\u5f00\u5934\u7684\u624d\u7528\u4ee3\u7406.\u6240\u4ee5\u4f60\u7684\u63a5\u53e3\u5c31\u8981\u8fd9\u4e48\u5199 ",Object(a.b)("inlineCode",{parentName:"p"},"/iclient/xx/xx"),".  \u6700\u540e\u4ee3\u7406\u7684\u8def\u5f84\u5c31\u662f ",Object(a.b)("inlineCode",{parentName:"p"},"http://xxx.xx.com/iclient/xx/xx"),". "),Object(a.b)("p",null,"\u53ef\u662f\u4e0d\u5bf9\u554a, \u6211\u6b63\u786e\u7684\u63a5\u53e3\u8def\u5f84\u91cc\u9762\u6ca1\u6709",Object(a.b)("inlineCode",{parentName:"p"},"/iclient"),"\u554a. ",Object(a.b)("strong",{parentName:"p"},"\u6240\u4ee5\u5c31\u9700\u8981 ",Object(a.b)("inlineCode",{parentName:"strong"},"pathRewrite"),",\u7528",Object(a.b)("inlineCode",{parentName:"strong"},"''^/iclient'':''"),", \u628a",Object(a.b)("inlineCode",{parentName:"strong"},"'/iclient'"),"\u53bb\u6389, \u8fd9\u6837\u65e2\u80fd\u6709\u6b63\u786e\u6807\u8bc6, \u53c8\u80fd\u5728\u8bf7\u6c42\u63a5\u53e3\u7684\u65f6\u5019\u53bb\u6389",Object(a.b)("inlineCode",{parentName:"strong"},"iclient"),".")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"'^/iclient'")," \u5176\u5b9e\u662f\u4e00\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u8be6\u89c1 http-proxy-middleware \u7684\u6587\u6863\u4e2d ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/chimurai/http-proxy-middleware#proxycontext-config"}),"option.pathRewrite")," \u7684\u90e8\u5206\u3002"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"'^/iclient'")," \u5e94\u8be5\u62c6\u5206\u6210",Object(a.b)("inlineCode",{parentName:"p"},"'^'")," \u548c",Object(a.b)("inlineCode",{parentName:"p"}," '/iclient'")," \u4e24\u4e2a\u5b57\u7b26\u4e32\uff0c\u5176\u4e2d",Object(a.b)("inlineCode",{parentName:"p"},"'^'"),"\u5339\u914d\u7684\u662f\u5b57\u7b26\u4e32\u6700\u5f00\u59cb\u7684\u4f4d\u7f6e\u3002"),Object(a.b)("p",null,"\u4e5f\u5c31\u662f\u8bf4\uff0caxios \u7684\u8bf7\u6c42URL\u5199\u6210\u4e86",Object(a.b)("inlineCode",{parentName:"p"},"'/iclient/myAPI/path'"),"\u7684\u8bdd\uff0c\u6700\u540e\u4f1a\u5728\u7ecf\u8fc7 http-proxy-middleware \u7684\u4ee3\u7406\u670d\u52a1\u5668\u65f6\uff0c\u4f1a\u53d8\u6210 ",Object(a.b)("inlineCode",{parentName:"p"},"'/myAPI/path'")," \uff0c\u7136\u540e\u4ee3\u7406\u5230 http://localhost:8080 \u8fd9\u4e2a\u4ee3\u7406\u670d\u52a1\u5668\u4e0b\u9762\u3002"),Object(a.b)("p",null,"\u53e6\u5916\u9644\u4e00\u5f20 ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://devhints.cn/regexp"}),"Regexp \u901f\u67e5\u8868")))}b.isMDXComponent=!0},375:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},O=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=b(n),O=r,m=u["".concat(c,".").concat(O)]||u[O]||s[O]||a;return n?i.a.createElement(m,o(o({ref:t},l),{},{components:n})):i.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=O;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<a;l++)c[l]=n[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);