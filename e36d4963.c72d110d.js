(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{326:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return b}));var r=t(2),a=(t(0),t(362));const o={id:"3.global",title:"Global\u6570\u7ec4\u5bf9\u8c61",hide_title:!0},c={unversionedId:"front/js/3.global",id:"front/js/3.global",isDocsHomePage:!1,title:"Global\u6570\u7ec4\u5bf9\u8c61",description:"Global\u5bf9\u8c61",source:"@site/docs/front/js/3.Global\u5bf9\u8c61.md",slug:"/front/js/3.global",permalink:"/docs/front/js/3.global",version:"current",sidebar:"someSidebar",previous:{title:"Date\u6570\u7ec4\u5bf9\u8c61",permalink:"/docs/front/js/3.date"},next:{title:"history\u5bf9\u8c61",permalink:"/docs/front/js/3.history"}},i=[{value:"Global\u5bf9\u8c61",id:"global\u5bf9\u8c61",children:[]}],l={rightToc:i};function b({components:e,...n}){return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"global\u5bf9\u8c61"},"Global\u5bf9\u8c61"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u7279\u70b9\n\u5168\u5c40\u5bf9\u8c61\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u5c01\u88c5\u7684\u65b9\u6cd5\uff0c\u4e0d\u9700\u8981\u5bf9\u8c61\u5c31\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528\uff0c\u65b9\u6cd5\u540d();\uff0c\u4e0d\u9700\u8981\u5199",Object(a.b)("inlineCode",{parentName:"p"},"Global"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u65b9\u6cd5"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"encodeURI()")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"decodeURI()"))),Object(a.b)("p",{parentName:"li"},"\ud83d\udc47\u4e0b\u9762\u7684\u4e24\u4e2a\u65b9\u6cd5\uff0c\u7f16\u7801\u7684\u5b57\u7b26\u66f4\u591a\uff0c\u659c\u6760\u3001\u95ee\u53f7\u90fd\u4f1a\u88ab\u7f16\u7801"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"encodeURIComponent()"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"}," decodeURIComponent()")))))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"parseInt()"),":\u5c06\u5b57\u7b26\u4e32\u8f6c\u5316\u6210\u6570\u5b57\n\u6309\u4f4d\u9010\u4e00\u5224\u65ad\u6bcf\u4e00\u4e2a\u5b57\u7b26\u662f\u5426\u662f\u6570\u5b57\uff0c\u76f4\u5230\u4e0d\u662f\u6570\u5b57\u4e3a\u6b62\uff0c\u5c06\u524d\u9762\u6570\u5b57\u90e8\u5206\u8f6c\u4e3anumber")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"isNan()"),"\uff1a\u5224\u65ad\u4e00\u4e2a\u503c\u662f\u5426\u4e3aNaN\n",Object(a.b)("strong",{parentName:"p"},"NaN\u516d\u4eb2\u4e0d\u8ba4\uff0c\u8fde\u81ea\u5df1\u90fd\u4e0d\u8ba4\u8bc6\uff0cNaN\u53c2\u4e0e\u7684==\u6bd4\u8f83\u5168\u90e8\u4e3afalsed")," (\u90a3\u8fd9\u4e2a\u65b9\u6cd5\u6709\u9e1f\u7528\uff1f)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"eval()"),"\uff1a\u5c06JavaScript\u5b57\u7b26\u4e32\u8f6c\u4e3a\u4ee3\u7801\u6267\u884c"))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'var str = "\u6211\u7684\u4e56";\nvar encodeUri = encodeURI(str);\n\nvar s = decodeURI(encodeUri);\ndocument.write(encodeUri + "<br/>");\ndocument.write(s + "<br/>");\ndocument.write("<hr/>");\ndocument.write("<br/>");\n\nvar str1 = "\u6211\u7684\u4e56\u4e56";\nvar encodeUri1 = encodeURIComponent(str1);\nvar s1 = decodeURIComponent(encodeUri1);\ndocument.write(encodeUri1 + "<br/>");\ndocument.write(s + "<br/>");\n\n//\u6309\u4f4d\u9010\u4e00\u5224\u65ad\u6bcf\u4e00\u4e2a\u5b57\u7b26\u662f\u5426\u662f\u6570\u5b57\uff0c\u76f4\u5230\u4e0d\u662f\u6570\u5b57\u4e3a\u6b62\uff0c\u5c06\u524d\u9762\u6570\u5b57\u90e8\u5206\u8f6c\u4e3anumber\nvar str2 = "123abc";\nvar number = parseInt(str2);\ndocument.write(number + 1 + "<br/>");\n\nvar a = NaN;\ndocument.write(a == NaN + "<br/>");\ndocument.write(isNaN(a) + "<br/>");\n\n//\u901a\u8fc7eval()\u5c06\u5b57\u7b26\u4e32\u89e3\u6790\u4e3ajs\u4ee3\u7801\nvar jscode = "alert(123)";\neval(jscode)\n')))}b.isMDXComponent=!0},362:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return s}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),p=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,s=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return t?a.a.createElement(s,i(i({ref:n},b),{},{components:t})):a.a.createElement(s,i({ref:n},b))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var b=2;b<o;b++)c[b]=t[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);