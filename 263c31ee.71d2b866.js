(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{135:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return o})),t.d(e,"metadata",(function(){return d})),t.d(e,"rightToc",(function(){return c})),t.d(e,"default",(function(){return p}));var r=t(2),a=t(6),i=(t(0),t(548)),o={id:"4.innerHtml",title:"innerHTML\u83b7\u53d6\u548c\u4fee\u6539\u6807\u7b7e\u5185\u5bb9",hide_title:!0},d={unversionedId:"front/js/4.innerHtml",id:"front/js/4.innerHtml",isDocsHomePage:!1,title:"innerHTML\u83b7\u53d6\u548c\u4fee\u6539\u6807\u7b7e\u5185\u5bb9",description:"innerHTML\u83b7\u53d6\u548c\u4fee\u6539\u6807\u7b7e\u5185\u5bb9",source:"@site/docs/front/js/4.innerHTML.md",slug:"/front/js/4.innerHtml",permalink:"/docs/front/js/4.innerHtml",version:"current",sidebar:"someSidebar",previous:{title:"\u6848\u4f8b\u2014\u2014\u52a8\u6001\u8868\u683c",permalink:"/docs/front/js/4.dynamicTable"},next:{title:"\u6837\u5f0f\u63a7\u5236",permalink:"/docs/front/js/4.styleControl"}},c=[{value:"innerHTML\u83b7\u53d6\u548c\u4fee\u6539\u6807\u7b7e\u5185\u5bb9",id:"innerhtml\u83b7\u53d6\u548c\u4fee\u6539\u6807\u7b7e\u5185\u5bb9",children:[]}],l={rightToc:c};function p(n){var e=n.components,t=Object(a.a)(n,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"innerhtml\u83b7\u53d6\u548c\u4fee\u6539\u6807\u7b7e\u5185\u5bb9"},"innerHTML\u83b7\u53d6\u548c\u4fee\u6539\u6807\u7b7e\u5185\u5bb9"),Object(i.b)("p",null,"\u5728\u9875\u9762\u8f93\u5165\u6846\u8f93\u5165\u4fe1\u606f\uff0c\u5355\u673a\u6dfb\u52a0\uff0c\u5185\u5bb9\u6dfb\u52a0\u5230\u8868\u683c\u540e\u9762"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Title</title>\n\n    <style>\n        table {\n            border: 1px solid;\n            margin: auto;\n            width: 500px;\n        }\n\n        td, th {\n            text-align: center;\n            border: 1px solid;\n        }\n\n        div {\n            text-align: center;\n            margin: 50px;\n        }\n    </style>\n</head>\n\n\x3c!--\n    - \u6807\u7b7e\u4f53\u7684\u8bbe\u7f6e\u548c\u83b7\u53d6\uff1ainnerHTML\n    - \u4f7f\u7528HTML\u5143\u7d20\u5bf9\u8c61\u7684\u5c5e\u6027\n    - \u8bbe\u7f6e\u6837\u5f0f\n--\x3e\n<body>\n\n<div>\n    <input type="text" id="id" placeholder="\u8bf7\u8f93\u5165\u7f16\u53f7">\n    <input type="text" id="name" placeholder="\u8bf7\u8f93\u5165\u59d3\u540d">\n    <input type="text" id="gender" placeholder="\u8bf7\u8f93\u5165\u6027\u522b">\n    <input type="button" value="\u6dfb\u52a0" id="btn_add">\n\n</div>\n\n<table>\n    <caption>\u5b66\u751f\u4fe1\u606f\u8868</caption>\n    <tr>\n        <th>\u7f16\u53f7</th>\n        <th>\u59d3\u540d</th>\n        <th>\u6027\u522b</th>\n        <th>\u64cd\u4f5c</th>\n    </tr>\n\n    <tr>\n        <td>1</td>\n        <td>\u4ee4\u72d0\u51b2</td>\n        <td>\u7537</td>\n        <td><a href="javascript:void(0);" onclick="delTr(this);">\u5220\u9664</a></td>\n    </tr>\n\n    <tr>\n        <td>2</td>\n        <td>\u4efb\u6211\u884c</td>\n        <td>\u7537</td>\n        <td><a href="javascript:void(0); " onclick="delTr(this);">\u5220\u9664</a></td>\n    </tr>\n\n    <tr>\n        <td>3</td>\n        <td>\u5cb3\u4e0d\u7fa4</td>\n        <td>?</td>\n        <td><a href="javascript:void(0);" onclick="delTr(this);">\u5220\u9664</a></td>\n    </tr>\n\n</table>\n\n<script>\n    document.getElementById("btn_add").onclick = function () {\n        var id = document.getElementById("id").value;\n        var name = document.getElementById("name").value;\n        var gender = document.getElementById("gender").value;\n\n        //\u83b7\u53d6table\n        var table = document.getElementsByTagName("table")[0];\n\n        //\u8ffd\u52a0\u4e00\u884c\n        table.innerHTML += "<tr>\\n" +\n            "        <td>" + id + "</td>\\n" +\n            "        <td>" + name + "</td>\\n" +\n            "        <td>" + gender + "</td>\\n" +\n            "        <td><a href=\\"javascript:void(0);\\" onclick=\\"delTr(this);\\">\u5220\u9664</a></td>\\n" +\n            "    </tr>"\n\n    };\n\n    function delTr(obj) {\n        obj.parentNode.parentNode.parentNode.removeChild(obj.parentNode.parentNode);\n    }\n\n<\/script>\n\n</body>\n</html>\n')))}p.isMDXComponent=!0},548:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function d(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var l=a.a.createContext({}),p=function(n){var e=a.a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):d(d({},e),n)),t},u=function(n){var e=p(n.components);return a.a.createElement(l.Provider,{value:e},n.children)},s={inlineCode:"code",wrapper:function(n){var e=n.children;return a.a.createElement(a.a.Fragment,{},e)}},m=a.a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,o=n.parentName,l=c(n,["components","mdxType","originalType","parentName"]),u=p(t),m=r,f=u["".concat(o,".").concat(m)]||u[m]||s[m]||i;return t?a.a.createElement(f,d(d({ref:e},l),{},{components:t})):a.a.createElement(f,d({ref:e},l))}));function f(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,o=new Array(i);o[0]=m;var d={};for(var c in e)hasOwnProperty.call(e,c)&&(d[c]=e[c]);d.originalType=n,d.mdxType="string"==typeof n?n:r,o[1]=d;for(var l=2;l<i;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);