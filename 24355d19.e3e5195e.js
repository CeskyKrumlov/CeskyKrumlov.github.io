(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{106:function(n,t,e){"use strict";e.r(t),e.d(t,"frontMatter",(function(){return c})),e.d(t,"metadata",(function(){return l})),e.d(t,"rightToc",(function(){return a})),e.d(t,"default",(function(){return d}));var i=e(2),r=e(6),o=(e(0),e(366)),c={id:"5.attributeSelector",title:"\u5c5e\u6027\u9009\u62e9\u5668",hide_title:!0},l={unversionedId:"front/js/5.attributeSelector",id:"front/js/5.attributeSelector",isDocsHomePage:!1,title:"\u5c5e\u6027\u9009\u62e9\u5668",description:"\u5c5e\u6027\u9009\u62e9\u5668",source:"@site/docs/front/js/5.\u5c5e\u6027\u9009\u62e9\u5668.md",slug:"/front/js/5.attributeSelector",permalink:"/docs/front/js/5.attributeSelector",version:"current",sidebar:"someSidebar",previous:{title:"\u57fa\u672c\u9009\u62e9\u5668",permalink:"/docs/front/js/5.basicSelector"},next:{title:"\u5c42\u7ea7\u9009\u62e9\u5668",permalink:"/docs/front/js/5.levelSelector"}},a=[{value:"\u5c5e\u6027\u9009\u62e9\u5668",id:"\u5c5e\u6027\u9009\u62e9\u5668",children:[]}],s={rightToc:a};function d(n){var t=n.components,e=Object(r.a)(n,["components"]);return Object(o.b)("wrapper",Object(i.a)({},s,e,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"\u5c5e\u6027\u9009\u62e9\u5668"},"\u5c5e\u6027\u9009\u62e9\u5668"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">\n<html>\n<head>\n    <title>\u5c5e\u6027\u8fc7\u6ee4\u9009\u62e9\u5668</title>\n    <meta http-equiv="content-type" content="text/html; charset=UTF-8">\n    <script src="https://code.jquery.com/jquery-3.1.1.min.js"><\/script>\n    <style type="text/css">\n        div, span {\n            width: 180px;\n            height: 180px;\n            margin: 20px;\n            background: #9999CC;\n            border: #000 1px solid;\n            float: left;\n            font-size: 17px;\n            font-family: Roman;\n        }\n\n        div .mini {\n            width: 50px;\n            height: 50px;\n            background: #CC66FF;\n            border: #000 1px solid;\n            font-size: 12px;\n            font-family: Roman;\n        }\n\n        div .mini01 {\n            width: 50px;\n            height: 50px;\n            background: #CC66FF;\n            border: #000 1px solid;\n            font-size: 12px;\n            font-family: Roman;\n        }\n\n        div.visible {\n            display: none;\n        }\n    </style>\n    <script type="text/javascript">\n        $(function () {\n            // <input type="button" value=" \u542b\u6709\u5c5e\u6027title \u7684div\u5143\u7d20\u80cc\u666f\u8272\u4e3a\u7ea2\u8272"  id="b1"/>\n            $("#b1").click(function () {\n                $("div[title]").css("backgroundColor", "pink");\n            });\n\n            // <input type="button" value=" \u5c5e\u6027title\u503c\u7b49\u4e8etest\u7684div\u5143\u7d20\u80cc\u666f\u8272\u4e3a\u7ea2\u8272"  id="b2"/>\n            $("#b2").click(function () {\n                $("div[title=\'test\']").css("backgroundColor", "pink");\n            });\n\n            // <input type="button" value=" \u5c5e\u6027title\u503c\u4e0d\u7b49\u4e8etest\u7684div\u5143\u7d20(\u6ca1\u6709\u5c5e\u6027title\u7684\u4e5f\u5c06\u88ab\u9009\u4e2d)\u80cc\u666f\u8272\u4e3a\u7ea2\u8272"  id="b3"/>\n            $("#b3").click(function () {\n                $("div[title!=\'test\']").css("backgroundColor", "pink");\n            });\n\n            // <input type="button" value=" \u5c5e\u6027title\u503c \u4ee5te\u5f00\u59cb \u7684div\u5143\u7d20\u80cc\u666f\u8272\u4e3a\u7ea2\u8272"  id="b4"/>\n            $("#b4").click(function () {\n                $("div[title^=\'te\']").css("backgroundColor", "pink");\n            });\n\n            // <input type="button" value=" \u5c5e\u6027title\u503c \u4ee5est\u7ed3\u675f \u7684div\u5143\u7d20\u80cc\u666f\u8272\u4e3a\u7ea2\u8272"  id="b5"/>\n            $("#b5").click(function () {\n                $("div[title$=\'est\']").css("backgroundColor", "pink");\n            });\n\n            // <input type="button" value="\u5c5e\u6027title\u503c \u542b\u6709es\u7684div\u5143\u7d20\u80cc\u666f\u8272\u4e3a\u7ea2\u8272"  id="b6"/>\n            $("#b6").click(function () {\n                $("div[title*=\'es\']").css("backgroundColor", "pink");\n            });\n\n            // <input type="button" value="\u9009\u53d6\u6709\u5c5e\u6027id\u7684div\u5143\u7d20\uff0c\u7136\u540e\u5728\u7ed3\u679c\u4e2d\u9009\u53d6\u5c5e\u6027title\u503c\u542b\u6709\u201ces\u201d\u7684 div \u5143\u7d20\u80cc\u666f\u8272\u4e3a\u7ea2\u8272"  id="b7"/>\n            $("#b7").click(function () {\n                $("div[id][title*=\'es\']").css("backgroundColor", "pink");\n            });\n\n        })\n    <\/script>\n</head>\n\n<body>\n\n<input type="button" value="\u4fdd\u5b58" class="mini" name="ok" class="mini"/>\n<input type="button" value=" \u542b\u6709\u5c5e\u6027title \u7684div\u5143\u7d20\u80cc\u666f\u8272\u4e3a\u7ea2\u8272" id="b1"/>\n<input type="button" value=" \u5c5e\u6027title\u503c\u7b49\u4e8etest\u7684div\u5143\u7d20\u80cc\u666f\u8272\u4e3a\u7ea2\u8272" id="b2"/>\n<input type="button" value=" \u5c5e\u6027title\u503c\u4e0d\u7b49\u4e8etest\u7684div\u5143\u7d20(\u6ca1\u6709\u5c5e\u6027title\u7684\u4e5f\u5c06\u88ab\u9009\u4e2d)\u80cc\u666f\u8272\u4e3a\u7ea2\u8272" id="b3"/>\n<input type="button" value=" \u5c5e\u6027title\u503c \u4ee5te\u5f00\u59cb \u7684div\u5143\u7d20\u80cc\u666f\u8272\u4e3a\u7ea2\u8272" id="b4"/>\n<input type="button" value=" \u5c5e\u6027title\u503c \u4ee5est\u7ed3\u675f \u7684div\u5143\u7d20\u80cc\u666f\u8272\u4e3a\u7ea2\u8272" id="b5"/>\n<input type="button" value="\u5c5e\u6027title\u503c \u542b\u6709es\u7684div\u5143\u7d20\u80cc\u666f\u8272\u4e3a\u7ea2\u8272" id="b6"/>\n<input type="button" value="\u9009\u53d6\u6709\u5c5e\u6027id\u7684div\u5143\u7d20\uff0c\u7136\u540e\u5728\u7ed3\u679c\u4e2d\u9009\u53d6\u5c5e\u6027title\u503c\u542b\u6709\u201ces\u201d\u7684 div \u5143\u7d20\u80cc\u666f\u8272\u4e3a\u7ea2\u8272" id="b7"/>\n\n<div id="one">\n    id\u4e3aone div\n</div>\n\n<div id="two" class="mini" title="test">\n    id\u4e3atwo class\u662f mini div title="test"\n    <div class="mini">class\u662f mini</div>\n</div>\n\n<div class="visible">\n    class\u662f one\n    <div class="mini">class\u662f mini</div>\n    <div class="mini">class\u662f mini</div>\n</div>\n<div class="one" title="test02">\n    class\u662f one title="test02"\n    <div class="mini01">class\u662f mini01</div>\n    <div class="mini" style="margin-top:0px;">class\u662f mini</div>\n</div>\n\n<div class="visible">\n    \u8fd9\u662f\u9690\u85cf\u7684\n</div>\n\n<div class="one">\n\n</div>\n\n<div id="mover">\n    \u52a8\u753b\n</div>\n\n<input type="text" value="zhang" id="username" name="username">\n</body>\n</html>\n')))}d.isMDXComponent=!0},366:function(n,t,e){"use strict";e.d(t,"a",(function(){return u})),e.d(t,"b",(function(){return b}));var i=e(0),r=e.n(i);function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function c(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,i)}return e}function l(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?c(Object(e),!0).forEach((function(t){o(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function a(n,t){if(null==n)return{};var e,i,r=function(n,t){if(null==n)return{};var e,i,r={},o=Object.keys(n);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var s=r.a.createContext({}),d=function(n){var t=r.a.useContext(s),e=t;return n&&(e="function"==typeof n?n(t):l(l({},t),n)),e},u=function(n){var t=d(n.components);return r.a.createElement(s.Provider,{value:t},n.children)},p={inlineCode:"code",wrapper:function(n){var t=n.children;return r.a.createElement(r.a.Fragment,{},t)}},v=r.a.forwardRef((function(n,t){var e=n.components,i=n.mdxType,o=n.originalType,c=n.parentName,s=a(n,["components","mdxType","originalType","parentName"]),u=d(e),v=i,b=u["".concat(c,".").concat(v)]||u[v]||p[v]||o;return e?r.a.createElement(b,l(l({ref:t},s),{},{components:e})):r.a.createElement(b,l({ref:t},s))}));function b(n,t){var e=arguments,i=t&&t.mdxType;if("string"==typeof n||i){var o=e.length,c=new Array(o);c[0]=v;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=n,l.mdxType="string"==typeof n?n:i,c[1]=l;for(var s=2;s<o;s++)c[s]=e[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,e)}v.displayName="MDXCreateElement"}}]);