(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{159:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return o})),t.d(e,"metadata",(function(){return a})),t.d(e,"rightToc",(function(){return l})),t.d(e,"default",(function(){return p}));var i=t(2),r=(t(0),t(362));const o={id:"5.formFilterSelector",title:"\u8868\u5355\u8fc7\u6ee4\u9009\u62e9\u5668",hide_title:!0},a={unversionedId:"front/js/5.formFilterSelector",id:"front/js/5.formFilterSelector",isDocsHomePage:!1,title:"\u8868\u5355\u8fc7\u6ee4\u9009\u62e9\u5668",description:"\u8868\u5355\u8fc7\u6ee4\u9009\u62e9\u5668",source:"@site/docs/front/js/5.\u8868\u5355\u8fc7\u6ee4\u9009\u62e9\u5668.md",slug:"/front/js/5.formFilterSelector",permalink:"/docs/front/js/5.formFilterSelector",version:"current",sidebar:"someSidebar",previous:{title:"\u8fc7\u6ee4\u9009\u62e9\u5668",permalink:"/docs/front/js/5.filterSelector"},next:{title:"JQury DOM\u64cd\u4f5c",permalink:"/docs/front/js/5.domJqeury"}},l=[{value:"\u8868\u5355\u8fc7\u6ee4\u9009\u62e9\u5668",id:"\u8868\u5355\u8fc7\u6ee4\u9009\u62e9\u5668",children:[]}],c={rightToc:l};function p({components:n,...e}){return Object(r.b)("wrapper",Object(i.a)({},c,e,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"\u8868\u5355\u8fc7\u6ee4\u9009\u62e9\u5668"},"\u8868\u5355\u8fc7\u6ee4\u9009\u62e9\u5668"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">\n<html>\n<head>\n    <title>\u8868\u5355\u5c5e\u6027\u8fc7\u6ee4\u9009\u62e9\u5668</title>\n    <meta http-equiv="content-type" content="text/html; charset=UTF-8">\n    <script src="https://code.jquery.com/jquery-3.1.1.min.js"><\/script>\n    <style type="text/css">\n        div, span {\n            width: 180px;\n            height: 180px;\n            margin: 20px;\n            background: #9999CC;\n            border: #000 1px solid;\n            float: left;\n            font-size: 17px;\n            font-family: Roman;\n        }\n\n        div .mini {\n            width: 50px;\n            height: 50px;\n            background: #CC66FF;\n            border: #000 1px solid;\n            font-size: 12px;\n            font-family: Roman;\n        }\n\n        div .mini01 {\n            width: 50px;\n            height: 50px;\n            background: #CC66FF;\n            border: #000 1px solid;\n            font-size: 12px;\n            font-family: Roman;\n        }\n\n        #job {\n            margin: 20px;\n        }\n\n        #edu {\n            margin-top: -70px;\n        }\n\n    </style>\n    <script type="text/javascript">\n        $(function () {\n            // <input type="button" value=" \u5229\u7528 jQuery \u5bf9\u8c61\u7684 val() \u65b9\u6cd5\u6539\u53d8\u8868\u5355\u5185\u53ef\u7528 <input> \u5143\u7d20\u7684\u503c"  id="b1"/>\n            $("#b1").click(function () {\n                $("input[type=\'text\']:enabled").val("aaa");\n            });\n\n            // <input type="button" value=" \u5229\u7528 jQuery \u5bf9\u8c61\u7684 val() \u65b9\u6cd5\u6539\u53d8\u8868\u5355\u5185\u4e0d\u53ef\u7528 <input> \u5143\u7d20\u7684\u503c"  id="b2"/>\n            $("#b2").click(function () {\n                $("input[type=\'text\']:disabled").val("aaa");\n            });\n\n            // <input type="button" value=" \u5229\u7528 jQuery \u5bf9\u8c61\u7684 length \u5c5e\u6027\u83b7\u53d6\u590d\u9009\u6846\u9009\u4e2d\u7684\u4e2a\u6570"  id="b3"/>\n            $("#b3").click(function () {\n                alert($("input[type=\'checkbox\']:checked").length);\n            });\n\n            // <input type="button" value=" \u5229\u7528 jQuery \u5bf9\u8c61\u7684 length \u5c5e\u6027\u83b7\u53d6\u4e0b\u62c9\u6846\u9009\u4e2d\u7684\u4e2a\u6570"  id="b4"/>\n            $("#b4").click(function () {\n                alert($("#job > option:selected").length);\n            });\n\n        })\n    <\/script>\n</head>\n<body>\n<input type="button" value="\u4fdd\u5b58" class="mini" name="ok" class="mini"/>\n<input type="button" value=" \u5229\u7528 jQuery \u5bf9\u8c61\u7684 val() \u65b9\u6cd5\u6539\u53d8\u8868\u5355\u5185\u53ef\u7528 <input> \u5143\u7d20\u7684\u503c" id="b1"/>\n<input type="button" value=" \u5229\u7528 jQuery \u5bf9\u8c61\u7684 val() \u65b9\u6cd5\u6539\u53d8\u8868\u5355\u5185\u4e0d\u53ef\u7528 <input> \u5143\u7d20\u7684\u503c" id="b2"/>\n<input type="button" value=" \u5229\u7528 jQuery \u5bf9\u8c61\u7684 length \u5c5e\u6027\u83b7\u53d6\u590d\u9009\u6846\u9009\u4e2d\u7684\u4e2a\u6570" id="b3"/>\n<input type="button" value=" \u5229\u7528 jQuery \u5bf9\u8c61\u7684 length \u5c5e\u6027\u83b7\u53d6\u4e0b\u62c9\u6846\u9009\u4e2d\u7684\u4e2a\u6570" id="b4"/>\n<br><br>\n<input type="text" value="\u4e0d\u53ef\u7528\u503c1" disabled="disabled">\n<input type="text" value="\u53ef\u7528\u503c1">\n<input type="text" value="\u4e0d\u53ef\u7528\u503c2" disabled="disabled">\n<input type="text" value="\u53ef\u7528\u503c2">\n<br><br>\n<input type="checkbox" name="items" value="\u7f8e\u5bb9">\u7f8e\u5bb9\n<input type="checkbox" name="items" value="IT">IT\n<input type="checkbox" name="items" value="\u91d1\u878d">\u91d1\u878d\n<input type="checkbox" name="items" value="\u7ba1\u7406">\u7ba1\u7406\n<br><br>\n<input type="radio" name="sex" value="\u7537">\u7537\n<input type="radio" name="sex" value="\u5973">\u5973\n<br><br>\n<select name="job" id="job" multiple="multiple" size=4>\n    <option>\u7a0b\u5e8f\u5458</option>\n    <option>\u4e2d\u7ea7\u7a0b\u5e8f\u5458</option>\n    <option>\u9ad8\u7ea7\u7a0b\u5e8f\u5458</option>\n    <option>\u7cfb\u7edf\u5206\u6790\u5e08</option>\n</select>\n\n<select name="edu" id="edu">\n    <option>\u672c\u79d1</option>\n    <option>\u535a\u58eb</option>\n    <option>\u7855\u58eb</option>\n    <option>\u5927\u4e13</option>\n</select>\n<br/>\n<div id="two" class="mini">\n    id\u4e3atwo class\u662f mini div\n    <div class="mini">class\u662f mini</div>\n</div>\n\n<div class="one">\n    class\u662f one\n    <div class="mini">class\u662f mini</div>\n    <div class="mini">class\u662f mini</div>\n</div>\n<div class="one">\n    class\u662f one\n    <div class="mini01">class\u662f mini01</div>\n    <div class="mini">class\u662f mini</div>\n</div>\n</body>\n</html>\n')))}p.isMDXComponent=!0},362:function(n,e,t){"use strict";t.d(e,"a",(function(){return s})),t.d(e,"b",(function(){return m}));var i=t(0),r=t.n(i);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},o=Object.keys(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var p=r.a.createContext({}),u=function(n){var e=r.a.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},s=function(n){var e=u(n.components);return r.a.createElement(p.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.a.createElement(r.a.Fragment,{},e)}},b=r.a.forwardRef((function(n,e){var t=n.components,i=n.mdxType,o=n.originalType,a=n.parentName,p=c(n,["components","mdxType","originalType","parentName"]),s=u(t),b=i,m=s["".concat(a,".").concat(b)]||s[b]||d[b]||o;return t?r.a.createElement(m,l(l({ref:e},p),{},{components:t})):r.a.createElement(m,l({ref:e},p))}));function m(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var o=t.length,a=new Array(o);a[0]=b;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=n,l.mdxType="string"==typeof n?n:i,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);