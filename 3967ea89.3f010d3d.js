(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{160:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return a})),t.d(e,"metadata",(function(){return c})),t.d(e,"rightToc",(function(){return s})),t.d(e,"default",(function(){return p}));var i=t(2),r=t(6),o=(t(0),t(492)),a={id:"5.basicSelector",title:"\u57fa\u672c\u9009\u62e9\u5668",hide_title:!0},c={unversionedId:"front/js/5.basicSelector",id:"front/js/5.basicSelector",isDocsHomePage:!1,title:"\u57fa\u672c\u9009\u62e9\u5668",description:"\u57fa\u672c\u9009\u62e9\u5668",source:"@site/docs/front/js/5.\u57fa\u672c\u9009\u62e9\u5668.md",slug:"/front/js/5.basicSelector",permalink:"/docs/front/js/5.basicSelector",version:"current",sidebar:"someSidebar",previous:{title:"\u4e8b\u4ef6\u7ed1\u5b9a|\u5165\u53e3\u51fd\u6570|\u6837\u5f0f\u63a7\u5236",permalink:"/docs/front/js/5.helloJqeury"},next:{title:"\u5c5e\u6027\u9009\u62e9\u5668",permalink:"/docs/front/js/5.attributeSelector"}},s=[{value:"\u57fa\u672c\u9009\u62e9\u5668",id:"\u57fa\u672c\u9009\u62e9\u5668",children:[]}],l={rightToc:s};function p(n){var e=n.components,t=Object(r.a)(n,["components"]);return Object(o.b)("wrapper",Object(i.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"\u57fa\u672c\u9009\u62e9\u5668"},"\u57fa\u672c\u9009\u62e9\u5668"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">\n<html>\n<head>\n    <title>\u57fa\u672c\u9009\u62e9\u5668</title>\n    <meta http-equiv="content-type" content="text/html; charset=UTF-8">\n    <script src="https://code.jquery.com/jquery-3.1.1.min.js"><\/script>\n    <style type="text/css">\n        div, span {\n            width: 180px;\n            height: 180px;\n            margin: 20px;\n            background: #9999CC;\n            border: #000 1px solid;\n            float: left;\n            font-size: 17px;\n            font-family: Roman;\n        }\n\n        div .mini {\n            width: 50px;\n            height: 50px;\n            background: #CC66FF;\n            border: #000 1px solid;\n            font-size: 12px;\n            font-family: Roman;\n        }\n\n        div .mini01 {\n            width: 50px;\n            height: 50px;\n            background: #CC66FF;\n            border: #000 1px solid;\n            font-size: 12px;\n            font-family: Roman;\n        }\n\n    </style>\n    <script type="text/javascript">\n\n        /*\n        *    <input type="button" value="\u4fdd\u5b58"  class="mini" name="ok"  class="mini" />\n        * */\n\n        $(function () {\n            //<input type="button" value="\u6539\u53d8 id \u4e3a one \u7684\u5143\u7d20\u7684\u80cc\u666f\u8272\u4e3a \u7ea2\u8272"  id="b1"/>\n            $("#b1").click(function () {\n                $("#one").css("backgroundColor", "pink");\n            })\n\n            //<input type="button" value=" \u6539\u53d8\u5143\u7d20\u540d\u4e3a <div> \u7684\u6240\u6709\u5143\u7d20\u7684\u80cc\u666f\u8272\u4e3a \u7ea2\u8272"  id="b2"/>\n            $("#b2").click(function () {\n                $("div").css("backgroundColor", "pink");\n            })\n\n            //<input type="button" value=" \u6539\u53d8 class \u4e3a mini \u7684\u6240\u6709\u5143\u7d20\u7684\u80cc\u666f\u8272\u4e3a \u7ea2\u8272"  id="b3"/>\n            $("#b3").click(function () {\n                $(".mini").css("backgroundColor", "pink");\n            })\n\n            //<input type="button" value=" \u6539\u53d8\u6240\u6709\u7684<span>\u5143\u7d20\u548c id \u4e3a two \u7684\u5143\u7d20\u7684\u80cc\u666f\u8272\u4e3a\u7ea2\u8272"  id="b4"/>\n            $("#b4").click(function () {\n                $("span,#two").css("backgroundColor", "pink");\n            })\n        })\n\n    <\/script>\n\n</head>\n\n<body>\n\n<input type="button" value="\u4fdd\u5b58" class="mini" name="ok" class="mini"/>\n<input type="button" value="\u6539\u53d8 id \u4e3a one \u7684\u5143\u7d20\u7684\u80cc\u666f\u8272\u4e3a \u7ea2\u8272" id="b1"/>\n<input type="button" value=" \u6539\u53d8\u5143\u7d20\u540d\u4e3a <div> \u7684\u6240\u6709\u5143\u7d20\u7684\u80cc\u666f\u8272\u4e3a \u7ea2\u8272" id="b2"/>\n<input type="button" value=" \u6539\u53d8 class \u4e3a mini \u7684\u6240\u6709\u5143\u7d20\u7684\u80cc\u666f\u8272\u4e3a \u7ea2\u8272" id="b3"/>\n<input type="button" value=" \u6539\u53d8\u6240\u6709\u7684<span>\u5143\u7d20\u548c id \u4e3a two \u7684\u5143\u7d20\u7684\u80cc\u666f\u8272\u4e3a\u7ea2\u8272" id="b4"/>\n\n<h1>\u6709\u4e00\u79cd\u5947\u8ff9\u53eb\u575a\u6301</h1>\n<h2>\u81ea\u4fe1\u6e90\u4e8e\u52aa\u529b</h2>\n\n<div id="one">\n    id\u4e3aone\n</div>\n\n<div id="two" class="mini">\n    id\u4e3atwo class\u662f mini\n    <div class="mini">class\u662f mini</div>\n</div>\n\n<div class="one">\n    class\u662f one\n    <div class="mini">class\u662f mini</div>\n    <div class="mini">class\u662f mini</div>\n</div>\n<div class="one">\n    class\u662f one\n    <div class="mini01">class\u662f mini01</div>\n    <div class="mini">class\u662f mini</div>\n</div>\n\n<span class="spanone">class\u4e3aspanone\u7684span\u5143\u7d20</span>\n<span class="mini">class\u4e3amini\u7684span\u5143\u7d20</span>\n\n<input type="text" value="zhang" id="username" name="username">\n\n</body>\n</html>\n')))}p.isMDXComponent=!0},492:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"b",(function(){return b}));var i=t(0),r=t.n(i);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},o=Object.keys(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var l=r.a.createContext({}),p=function(n){var e=r.a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},u=function(n){var e=p(n.components);return r.a.createElement(l.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.a.createElement(r.a.Fragment,{},e)}},m=r.a.forwardRef((function(n,e){var t=n.components,i=n.mdxType,o=n.originalType,a=n.parentName,l=s(n,["components","mdxType","originalType","parentName"]),u=p(t),m=i,b=u["".concat(a,".").concat(m)]||u[m]||d[m]||o;return t?r.a.createElement(b,c(c({ref:e},l),{},{components:t})):r.a.createElement(b,c({ref:e},l))}));function b(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var o=t.length,a=new Array(o);a[0]=m;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=n,c.mdxType="string"==typeof n?n:i,a[1]=c;for(var l=2;l<o;l++)a[l]=t[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);