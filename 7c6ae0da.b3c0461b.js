(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{316:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return a})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(2),o=t(6),i=(t(0),t(572)),c={id:"4.styleControl",title:"\u6837\u5f0f\u63a7\u5236",hide_title:!0},a={unversionedId:"front/js/4.styleControl",id:"front/js/4.styleControl",isDocsHomePage:!1,title:"\u6837\u5f0f\u63a7\u5236",description:"\u63a7\u5236\u6837\u5f0f",source:"@site/docs/front/js/4.\u63a7\u5236\u6837\u5f0f.md",slug:"/front/js/4.styleControl",permalink:"/docs/front/js/4.styleControl",version:"current",sidebar:"someSidebar",previous:{title:"innerHTML\u83b7\u53d6\u548c\u4fee\u6539\u6807\u7b7e\u5185\u5bb9",permalink:"/docs/front/js/4.innerHtml"},next:{title:"\u4e8b\u4ef6\u7ed1\u5b9a|\u5165\u53e3\u51fd\u6570|\u6837\u5f0f\u63a7\u5236",permalink:"/docs/front/js/5.helloJqeury"}},l=[{value:"\u63a7\u5236\u6837\u5f0f",id:"\u63a7\u5236\u6837\u5f0f",children:[{value:"\u65b9\u5f0f\u4e00",id:"\u65b9\u5f0f\u4e00",children:[]},{value:"\u65b9\u5f0f\u4e8c",id:"\u65b9\u5f0f\u4e8c",children:[]}]}],d={rightToc:l};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u63a7\u5236\u6837\u5f0f"},"\u63a7\u5236\u6837\u5f0f"),Object(i.b)("h2",{id:"\u65b9\u5f0f\u4e00"},"\u65b9\u5f0f\u4e00"),Object(i.b)("p",null,"\u4f7f\u7528\u5143\u7d20\u7684Style\u5c5e\u6027\uff0c\u6309\u7167css\u5b57\u6bb5\u8bbe\u7f6e"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'div1.style.border = "1px solid red";\n')),Object(i.b)("h2",{id:"\u65b9\u5f0f\u4e8c"},"\u65b9\u5f0f\u4e8c"),Object(i.b)("p",null,"\u63d0\u524d\u5b9a\u4e49\u597d\u7c7b\u9009\u62e9\u5668\u7684\u6837\u5f0f\uff0c\u901a\u8fc7\u5143\u7d20\u7684className\u5c5e\u6027\u6765\u8bbe\u7f6e\u5176class\u5c5e\u6027\u503c\uff0c\u5957\u7528CSS\u7c7b\u9009\u62e9\u5668"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>\u63a7\u5236\u5143\u7d20\u6837\u5f0f</title>\n\n    <style>\n        .d1 {\n            border: 1px solid red;\n            width: 100px;\n            height: 100px;\n        }\n\n        .d2 {\n            border: 1px solid blue;\n            width: 100px;\n            height: 100px;\n        }\n    </style>\n</head>\n\n<body>\n\n<div id="div1">\n    divdivdiv\n</div>\n\n<hr/>\n\n<div id="div2">\n    divdivdiv\n</div>\n<hr/>\n<script>\n    //\u83b7\u53d6div1\n    var div1 = document.getElementById("div1");\n    var div2 = document.getElementById("div2");\n\n    div1.onclick = function () {\n        //\u4fee\u6539\u6837\u5f0f\u65b9\u5f0f1\n\n        div1.style.border = \'1px dashed red\';\n        div1.style.width = \'200px\';\n\n        div1.style.fontSize = \'20px\';\n    }\n\n    div2.onclick = function () {\n        //\u65b9\u5f0f2\uff0c\u4f5c\u7528\u6837\u5f0f\uff0c\u8bbe\u7f6e\u5c5e\u6027\u503cclass=xxx\n        div2.className = \'d1\';\n    }\n\n<\/script>\n</body>\n</html>\n')))}s.isMDXComponent=!0},572:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=o.a.createContext({}),s=function(e){var n=o.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return o.a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(t),b=r,f=p["".concat(c,".").concat(b)]||p[b]||u[b]||i;return t?o.a.createElement(f,a(a({ref:n},d),{},{components:t})):o.a.createElement(f,a({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=b;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var d=2;d<i;d++)c[d]=t[d];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);