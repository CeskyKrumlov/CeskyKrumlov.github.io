(window.webpackJsonp=window.webpackJsonp||[]).push([[302],{358:function(n,t,e){"use strict";e.r(t),e.d(t,"frontMatter",(function(){return c})),e.d(t,"metadata",(function(){return a})),e.d(t,"rightToc",(function(){return l})),e.d(t,"default",(function(){return d}));var i=e(2),r=e(6),o=(e(0),e(496)),c={id:"5.filterSelector",title:"\u8fc7\u6ee4\u9009\u62e9\u5668",hide_title:!0},a={unversionedId:"front/js/5.filterSelector",id:"front/js/5.filterSelector",isDocsHomePage:!1,title:"\u8fc7\u6ee4\u9009\u62e9\u5668",description:"\u8fc7\u6ee4\u9009\u62e9\u5668",source:"@site/docs/front/js/5.\u8fc7\u6ee4\u9009\u62e9\u5668.md",slug:"/front/js/5.filterSelector",permalink:"/docs/front/js/5.filterSelector",version:"current",sidebar:"someSidebar",previous:{title:"\u5c42\u7ea7\u9009\u62e9\u5668",permalink:"/docs/front/js/5.levelSelector"},next:{title:"\u8868\u5355\u8fc7\u6ee4\u9009\u62e9\u5668",permalink:"/docs/front/js/5.formFilterSelector"}},l=[{value:"\u8fc7\u6ee4\u9009\u62e9\u5668",id:"\u8fc7\u6ee4\u9009\u62e9\u5668",children:[]}],u={rightToc:l};function d(n){var t=n.components,e=Object(r.a)(n,["components"]);return Object(o.b)("wrapper",Object(i.a)({},u,e,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"\u8fc7\u6ee4\u9009\u62e9\u5668"},"\u8fc7\u6ee4\u9009\u62e9\u5668"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">\n<html>\n<head>\n    <title>\u57fa\u672c\u8fc7\u6ee4\u9009\u62e9\u5668</title>\n    <meta http-equiv="content-type" content="text/html; charset=UTF-8">\n    <script src="https://code.jquery.com/jquery-3.1.1.min.js"><\/script>\n    <style type="text/css">\n        div, span {\n            width: 180px;\n            height: 180px;\n            margin: 20px;\n            background: #9999CC;\n            border: #000 1px solid;\n            float: left;\n            font-size: 17px;\n            font-family: Roman;\n        }\n\n        div .mini {\n            width: 50px;\n            height: 50px;\n            background: #CC66FF;\n            border: #000 1px solid;\n            font-size: 12px;\n            font-family: Roman;\n        }\n\n        div .mini01 {\n            width: 50px;\n            height: 50px;\n            background: #CC66FF;\n            border: #000 1px solid;\n            font-size: 12px;\n            font-family: Roman;\n        }\n    </style>\n    <script type="text/javascript">\n        $(function () {\n            // <input type="button" value=" \u6539\u53d8\u7b2c\u4e00\u4e2a div \u5143\u7d20\u7684\u80cc\u666f\u8272\u4e3a \u7ea2\u8272"  id="b1"/>\n            $("#b1").click(function () {\n                $("div:first").css("backgroundColor", "pink");\n            });\n\n            // <input type="button" value=" \u6539\u53d8\u6700\u540e\u4e00\u4e2a div \u5143\u7d20\u7684\u80cc\u666f\u8272\u4e3a \u7ea2\u8272"  id="b2"/>\n            $("#b2").click(function () {\n                $("div:last").css("backgroundColor", "pink");\n            });\n\n            // <input type="button" value=" \u6539\u53d8class\u4e0d\u4e3a one \u7684\u6240\u6709 div \u5143\u7d20\u7684\u80cc\u666f\u8272\u4e3a \u7ea2\u8272"  id="b3"/>\n            $("#b3").click(function () {\n                $("div:not(\'.one\')").css("backgroundColor", "pink");\n            });\n\n            // <input type="button" value=" \u6539\u53d8\u7d22\u5f15\u503c\u4e3a\u5076\u6570\u7684 div \u5143\u7d20\u7684\u80cc\u666f\u8272\u4e3a \u7ea2\u8272"  id="b4"/>\n            $("#b4").click(function () {\n                $("div:even").css("backgroundColor", "pink");\n            });\n\n            // <input type="button" value=" \u6539\u53d8\u7d22\u5f15\u503c\u4e3a\u5947\u6570\u7684 div \u5143\u7d20\u7684\u80cc\u666f\u8272\u4e3a \u7ea2\u8272"  id="b5"/>\n            $("#b5").click(function () {\n                $("div:odd").css("backgroundColor", "pink");\n            });\n\n            // <input type="button" value=" \u6539\u53d8\u7d22\u5f15\u503c\u4e3a\u5927\u4e8e 3 \u7684 div \u5143\u7d20\u7684\u80cc\u666f\u8272\u4e3a \u7ea2\u8272"  id="b6"/>\n            $("#b6").click(function () {\n                $("div:eq(3)").css("backgroundColor", "pink");\n            });\n\n            // <input type="button" value=" \u6539\u53d8\u7d22\u5f15\u503c\u4e3a\u7b49\u4e8e 3 \u7684 div \u5143\u7d20\u7684\u80cc\u666f\u8272\u4e3a \u7ea2\u8272"  id="b7"/>\n            $("#b7").click(function () {\n                $("div:gt(3)").css("backgroundColor", "pink");\n            });\n\n            // <input type="button" value=" \u6539\u53d8\u7d22\u5f15\u503c\u4e3a\u5c0f\u4e8e 3 \u7684 div \u5143\u7d20\u7684\u80cc\u666f\u8272\u4e3a \u7ea2\u8272"  id="b8"/>\n            $("#b8").click(function () {\n                $("div:lt(3)").css("backgroundColor", "pink");\n            });\n\n            // <input type="button" value=" \u6539\u53d8\u6240\u6709\u7684\u6807\u9898\u5143\u7d20\u7684\u80cc\u666f\u8272\u4e3a \u7ea2\u8272"  id="b9"/>\n            $("#b9").click(function () {\n                $(":header").css("backgroundColor", "pink");\n            });\n        })\n    <\/script>\n</head>\n\n<body>\n\n<input type="button" value="\u4fdd\u5b58" class="mini" name="ok" class="mini"/>\n<input type="button" value=" \u6539\u53d8\u7b2c\u4e00\u4e2a div \u5143\u7d20\u7684\u80cc\u666f\u8272\u4e3a \u7ea2\u8272" id="b1"/>\n<input type="button" value=" \u6539\u53d8\u6700\u540e\u4e00\u4e2a div \u5143\u7d20\u7684\u80cc\u666f\u8272\u4e3a \u7ea2\u8272" id="b2"/>\n<input type="button" value=" \u6539\u53d8class\u4e0d\u4e3a one \u7684\u6240\u6709 div \u5143\u7d20\u7684\u80cc\u666f\u8272\u4e3a \u7ea2\u8272" id="b3"/>\n<input type="button" value=" \u6539\u53d8\u7d22\u5f15\u503c\u4e3a\u5076\u6570\u7684 div \u5143\u7d20\u7684\u80cc\u666f\u8272\u4e3a \u7ea2\u8272" id="b4"/>\n<input type="button" value=" \u6539\u53d8\u7d22\u5f15\u503c\u4e3a\u5947\u6570\u7684 div \u5143\u7d20\u7684\u80cc\u666f\u8272\u4e3a \u7ea2\u8272" id="b5"/>\n<input type="button" value=" \u6539\u53d8\u7d22\u5f15\u503c\u4e3a\u5927\u4e8e 3 \u7684 div \u5143\u7d20\u7684\u80cc\u666f\u8272\u4e3a \u7ea2\u8272" id="b6"/>\n<input type="button" value=" \u6539\u53d8\u7d22\u5f15\u503c\u4e3a\u7b49\u4e8e 3 \u7684 div \u5143\u7d20\u7684\u80cc\u666f\u8272\u4e3a \u7ea2\u8272" id="b7"/>\n<input type="button" value=" \u6539\u53d8\u7d22\u5f15\u503c\u4e3a\u5c0f\u4e8e 3 \u7684 div \u5143\u7d20\u7684\u80cc\u666f\u8272\u4e3a \u7ea2\u8272" id="b8"/>\n<input type="button" value=" \u6539\u53d8\u6240\u6709\u7684\u6807\u9898\u5143\u7d20\u7684\u80cc\u666f\u8272\u4e3a \u7ea2\u8272" id="b9"/>\n\n<h1>\u6709\u4e00\u79cd\u5947\u8ff9\u53eb\u575a\u6301</h1>\n<h2>\u81ea\u4fe1\u6e90\u4e8e\u52aa\u529b</h2>\n\n<div id="one">\n    id\u4e3aone\n</div>\n\n<div id="two" class="mini">\n    id\u4e3atwo class\u662f mini\n    <div class="mini">class\u662f mini</div>\n</div>\n\n<div class="one">\n    class\u662f one\n    <div class="mini">class\u662f mini</div>\n    <div class="mini">class\u662f mini</div>\n</div>\n<div class="one">\n    class\u662f one\n    <div class="mini01">class\u662f mini01</div>\n    <div class="mini">class\u662f mini</div>\n</div>\n</body>\n</html>\n')))}d.isMDXComponent=!0},496:function(n,t,e){"use strict";e.d(t,"a",(function(){return s})),e.d(t,"b",(function(){return v}));var i=e(0),r=e.n(i);function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function c(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,i)}return e}function a(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?c(Object(e),!0).forEach((function(t){o(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function l(n,t){if(null==n)return{};var e,i,r=function(n,t){if(null==n)return{};var e,i,r={},o=Object.keys(n);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var u=r.a.createContext({}),d=function(n){var t=r.a.useContext(u),e=t;return n&&(e="function"==typeof n?n(t):a(a({},t),n)),e},s=function(n){var t=d(n.components);return r.a.createElement(u.Provider,{value:t},n.children)},p={inlineCode:"code",wrapper:function(n){var t=n.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(n,t){var e=n.components,i=n.mdxType,o=n.originalType,c=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),s=d(e),b=i,v=s["".concat(c,".").concat(b)]||s[b]||p[b]||o;return e?r.a.createElement(v,a(a({ref:t},u),{},{components:e})):r.a.createElement(v,a({ref:t},u))}));function v(n,t){var e=arguments,i=t&&t.mdxType;if("string"==typeof n||i){var o=e.length,c=new Array(o);c[0]=b;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=n,a.mdxType="string"==typeof n?n:i,c[1]=a;for(var u=2;u<o;u++)c[u]=e[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,e)}b.displayName="MDXCreateElement"}}]);