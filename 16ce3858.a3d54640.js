(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{106:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return a})),t.d(e,"metadata",(function(){return c})),t.d(e,"rightToc",(function(){return s})),t.d(e,"default",(function(){return p}));var r=t(2),i=t(6),o=(t(0),t(490)),a={id:"5.levelSelector",title:"\u5c42\u7ea7\u9009\u62e9\u5668",hide_title:!0},c={unversionedId:"front/js/5.levelSelector",id:"front/js/5.levelSelector",isDocsHomePage:!1,title:"\u5c42\u7ea7\u9009\u62e9\u5668",description:"\u5c42\u7ea7\u9009\u62e9\u5668",source:"@site/docs/front/js/5.\u5c42\u7ea7\u9009\u62e9\u5668.md",slug:"/front/js/5.levelSelector",permalink:"/docs/front/js/5.levelSelector",version:"current",sidebar:"someSidebar",previous:{title:"\u5c5e\u6027\u9009\u62e9\u5668",permalink:"/docs/front/js/5.attributeSelector"},next:{title:"\u8fc7\u6ee4\u9009\u62e9\u5668",permalink:"/docs/front/js/5.filterSelector"}},s=[{value:"\u5c42\u7ea7\u9009\u62e9\u5668",id:"\u5c42\u7ea7\u9009\u62e9\u5668",children:[]}],l={rightToc:s};function p(n){var e=n.components,t=Object(i.a)(n,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"\u5c42\u7ea7\u9009\u62e9\u5668"},"\u5c42\u7ea7\u9009\u62e9\u5668"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">\n<html>\n<head>\n    <title>\u5c42\u6b21\u9009\u62e9\u5668</title>\n    <meta http-equiv="content-type" content="text/html; charset=UTF-8">\n    <script src="https://code.jquery.com/jquery-3.1.1.min.js"><\/script>\n    <style type="text/css">\n        div, span {\n            width: 180px;\n            height: 180px;\n            margin: 20px;\n            background: #9999CC;\n            border: #000 1px solid;\n            float: left;\n            font-size: 17px;\n            font-family: Roman;\n        }\n\n        div .mini {\n            width: 50px;\n            height: 50px;\n            background: #CC66FF;\n            border: #000 1px solid;\n            font-size: 12px;\n            font-family: Roman;\n        }\n\n        div .mini01 {\n            width: 50px;\n            height: 50px;\n            background: #CC66FF;\n            border: #000 1px solid;\n            font-size: 12px;\n            font-family: Roman;\n        }\n\n    </style>\n    <script type="text/javascript">\n        $(function () {\n            /*\n            *    <input type="button" value="\u4fdd\u5b58"  class="mini" name="ok"  class="mini" />\n            * */\n\n            //<input type="button" value=" \u6539\u53d8 <body> \u5185\u6240\u6709 <div> \u7684\u80cc\u666f\u8272\u4e3a\u7ea2\u8272"  id="b1"/>\n            //\u513f -> \u5b59 -> \u91cd\u5b59..\n            $("#b1").click(function () {\n                $("body div").css("backgroundColor", "pink");\n            });\n\n            //<input type="button" value=" \u6539\u53d8 <body> \u5185\u5b50 <div> \u7684\u80cc\u666f\u8272\u4e3a \u7ea2\u8272"  id="b2"/>\n            //\u53ea\u6709\u513f\n            $("#b2").click(function () {\n                $("body > div").css("backgroundColor", "pink");\n            });\n\n        })\n    <\/script>\n\n</head>\n<body>\n<input type="button" value="\u4fdd\u5b58" class="mini" name="ok" class="mini"/>\n<input type="button" value=" \u6539\u53d8 <body> \u5185\u6240\u6709 <div> \u7684\u80cc\u666f\u8272\u4e3a\u7ea2\u8272" id="b1"/>\n<input type="button" value=" \u6539\u53d8 <body> \u5185\u5b50 <div> \u7684\u80cc\u666f\u8272\u4e3a \u7ea2\u8272" id="b2"/>\n\n<h1>\u6709\u4e00\u79cd\u5947\u8ff9\u53eb\u575a\u6301</h1>\n<h2>\u81ea\u4fe1\u6e90\u4e8e\u52aa\u529b</h2>\n\n<div id="one">\n    id\u4e3aone\n\n</div>\n\n<div id="two" class="mini">\n    id\u4e3atwo class\u662f mini\n    <div class="mini">class\u662f mini</div>\n</div>\n\n<div class="one">\n    class\u662f one\n    <div class="mini">class\u662f mini</div>\n    <div class="mini">class\u662f mini</div>\n</div>\n<div class="one">\n    class\u662f one\n    <div class="mini01">class\u662f mini01</div>\n    <div class="mini">class\u662f mini</div>\n</div>\n\n<span class="spanone">\n    span\n</span>\n</body>\n</html>\n')))}p.isMDXComponent=!0},490:function(n,e,t){"use strict";t.d(e,"a",(function(){return d})),t.d(e,"b",(function(){return f}));var r=t(0),i=t.n(r);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var l=i.a.createContext({}),p=function(n){var e=i.a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},d=function(n){var e=p(n.components);return i.a.createElement(l.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return i.a.createElement(i.a.Fragment,{},e)}},m=i.a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,a=n.parentName,l=s(n,["components","mdxType","originalType","parentName"]),d=p(t),m=r,f=d["".concat(a,".").concat(m)]||d[m]||u[m]||o;return t?i.a.createElement(f,c(c({ref:e},l),{},{components:t})):i.a.createElement(f,c({ref:e},l))}));function f(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,a=new Array(o);a[0]=m;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=n,c.mdxType="string"==typeof n?n:r,a[1]=c;for(var l=2;l<o;l++)a[l]=t[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);