(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{259:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return a})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(2),o=t(6),i=(t(0),t(353)),c={id:"5.helloJqeury",title:"\u4e8b\u4ef6\u7ed1\u5b9a|\u5165\u53e3\u51fd\u6570|\u6837\u5f0f\u63a7\u5236",hide_title:!0},a={unversionedId:"front/js/5.helloJqeury",id:"front/js/5.helloJqeury",isDocsHomePage:!1,title:"\u4e8b\u4ef6\u7ed1\u5b9a|\u5165\u53e3\u51fd\u6570|\u6837\u5f0f\u63a7\u5236",description:"\u4e8b\u4ef6\u7ed1\u5b9a\u3001\u5165\u53e3\u51fd\u6570\u3001\u6837\u5f0f\u63a7\u5236",source:"@site/docs/front/js/5.\u4e8b\u4ef6\u7ed1\u5b9a_\u5165\u53e3\u51fd\u6570_\u6837\u5f0f\u63a7\u5236.md",slug:"/front/js/5.helloJqeury",permalink:"/docs/front/js/5.helloJqeury",version:"current",sidebar:"someSidebar",previous:{title:"\u6837\u5f0f\u63a7\u5236",permalink:"/docs/front/js/4.styleControl"},next:{title:"\u57fa\u672c\u9009\u62e9\u5668",permalink:"/docs/front/js/5.basicSelector"}},l=[{value:"\u4e8b\u4ef6\u7ed1\u5b9a\u3001\u5165\u53e3\u51fd\u6570\u3001\u6837\u5f0f\u63a7\u5236",id:"\u4e8b\u4ef6\u7ed1\u5b9a\u3001\u5165\u53e3\u51fd\u6570\u3001\u6837\u5f0f\u63a7\u5236",children:[]}],u={rightToc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u4e8b\u4ef6\u7ed1\u5b9a\u3001\u5165\u53e3\u51fd\u6570\u3001\u6837\u5f0f\u63a7\u5236"},"\u4e8b\u4ef6\u7ed1\u5b9a\u3001\u5165\u53e3\u51fd\u6570\u3001\u6837\u5f0f\u63a7\u5236"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>\u5bf9\u8c61\u8f6c\u6362</title>\n    \x3c!--    \u5f15\u5165JQuery--\x3e\n    <script src="https://code.jquery.com/jquery-3.1.1.min.js"><\/script>\n    <script>\n        //\u5165\u53e3\u51fd\u6570\n        $(function () {\n            //\u7ed9btn1\u6dfb\u52a0\u5355\u51fb\u4e8b\u4ef6\n\n            //\u83b7\u53d6\u6309\u94ae\n            $("#btn1").click(function () {\n                // alert("abc");\n            });\n\n            //\u8ba9div1\u7684\u80cc\u666f\u8272\u53d8\u4e3a\u7ea2\u8272\n            // $("#div1").css("background-color", "red");\n            $("#div1").css("backgroundColor","red");\n\n        })\n\n        /*\n        *   window.onload\u548c $(function)\u7684\u533a\u522b\n        *   window.onlaod\u53ea\u80fd\u5b9a\u4e49\u4e00\u6b21\n        * */\n    <\/script>\n</head>\n<body>\n\n<div id="div1">div1...</div>\n<div id="div2">div2...</div>\n<input type="button" id="btn1" value="\u70b9\u6211">\n\n</body>\n</html>\n')))}p.isMDXComponent=!0},353:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),f=r,b=s["".concat(c,".").concat(f)]||s[f]||d[f]||i;return t?o.a.createElement(b,a(a({ref:n},u),{},{components:t})):o.a.createElement(b,a({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=f;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var u=2;u<i;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);