(window.webpackJsonp=window.webpackJsonp||[]).push([[459],{515:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(6),d=(t(0),t(567)),o={id:"4.dynamicTable",title:"\u6848\u4f8b\u2014\u2014\u52a8\u6001\u8868\u683c",hide_title:!0},i={unversionedId:"front/js/4.dynamicTable",id:"front/js/4.dynamicTable",isDocsHomePage:!1,title:"\u6848\u4f8b\u2014\u2014\u52a8\u6001\u8868\u683c",description:"\u6848\u4f8b\u2014\u2014\u52a8\u6001\u8868\u683c",source:"@site/docs/front/js/4.\u6848\u4f8b\u52a8\u6001\u8868\u683c.md",slug:"/front/js/4.dynamicTable",permalink:"/docs/front/js/4.dynamicTable",version:"current",sidebar:"someSidebar",previous:{title:"Node\u5bf9\u8c61",permalink:"/docs/front/js/4.node"},next:{title:"innerHTML\u83b7\u53d6\u548c\u4fee\u6539\u6807\u7b7e\u5185\u5bb9",permalink:"/docs/front/js/4.innerHtml"}},c=[{value:"\u6848\u4f8b\u2014\u2014\u52a8\u6001\u8868\u683c",id:"\u6848\u4f8b\u52a8\u6001\u8868\u683c",children:[]}],l={rightToc:c};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(d.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(d.b)("h1",{id:"\u6848\u4f8b\u52a8\u6001\u8868\u683c"},"\u6848\u4f8b\u2014\u2014\u52a8\u6001\u8868\u683c"),Object(d.b)("pre",null,Object(d.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>\u52a8\u6001\u8868\u683c</title>\n\n    <style>\n        table {\n            border: 1px solid;\n            margin: auto;\n            width: 500px;\n        }\n\n        td, th {\n            text-align: center;\n            border: 1px solid;\n        }\n\n        div {\n            text-align: center;\n            margin: 50px;\n        }\n    </style>\n\n</head>\n<body>\n\n<div>\n    <input type="text" id="id" placeholder="\u8bf7\u8f93\u5165\u7f16\u53f7">\n    <input type="text" id="name" placeholder="\u8bf7\u8f93\u5165\u59d3\u540d">\n    <input type="text" id="gender" placeholder="\u8bf7\u8f93\u5165\u6027\u522b">\n    <input type="button" value="\u6dfb\u52a0" id="btn_add">\n\n</div>\n\n<table>\n    <caption>\u5b66\u751f\u4fe1\u606f\u8868</caption>\n    <tr>\n        <th>\u7f16\u53f7</th>\n        <th>\u59d3\u540d</th>\n        <th>\u6027\u522b</th>\n        <th>\u64cd\u4f5c</th>\n    </tr>\n\n    <tr>\n        <td>1</td>\n        <td>\u4ee4\u72d0\u51b2</td>\n        <td>\u7537</td>\n        <td><a href="javascript:void(0);" onclick="delTr(this);">\u5220\u9664</a></td>\n    </tr>\n\n    <tr>\n        <td>2</td>\n        <td>\u4efb\u6211\u884c</td>\n        <td>\u7537</td>\n        <td><a href="javascript:void(0); " onclick="delTr(this);">\u5220\u9664</a></td>\n    </tr>\n\n    <tr>\n        <td>3</td>\n        <td>\u5cb3\u4e0d\u7fa4</td>\n        <td>?</td>\n        <td><a href="javascript:void(0);" onclick="delTr(this);">\u5220\u9664</a></td>\n    </tr>\n\n</table>\n\n<script>\n    /*\n    * 1.\u6dfb\u52a0\n    *   1.1 \u7ed9\u6dfb\u52a0\u6309\u94ae\u7ed1\u5b9a\u5355\u673a\u4e8b\u4ef6\n    *   1.2 \u83b7\u53d6\u6587\u672c\u6846\u5185\u5bb9\n    *   1.3 \u521b\u5efatd\uff0c\u8bbe\u7f6etd\u7684\u6587\u672c\u5185\u5bb9\u4e3a\u6587\u672c\u6846\u7684\u5185\u5bb9\n    *   1.4 \u521b\u5efatr\n    *   1.5 \u5c06td\u6dfb\u52a0\u5230tr\u4e2d\n    *   1.6 \u83b7\u53d6table\uff0c\u5c06tr\u6dfb\u52a0\u5230table\u4e2d\n    *\n    *\n    * 2.\u5220\u9664\n    *   2.1 \u786e\u5b9a\u70b9\u51fb\u7684\u662f\u54ea\u4e00\u4e2a\u8d85\u94fe\u63a5\n    *       <a href="javascript:void(0); " onclick="delTr(this);">\u5220\u9664</a>\n    *   2.2 \u5982\u4f55\u5220\u9664\u5bf9\u5e94\u884c\n    *       removeChild):\u901a\u8fc7\u7236\u8282\u70b9\u5220\u9664\u5b50\u8282\u70b9\n    *\n    * */\n\n    var btn_add = document.getElementById("btn_add").onclick = function () {\n        //\u83b7\u53d6\u6587\u672c\u6846\u7684\u5185\u5bb9\n        var id = document.getElementById("id").value;\n        var name = document.getElementById("name").value;\n        var gender = document.getElementById("gender").value;\n\n        //\u521b\u5efatd\uff0c\u8d4b\u503ctd\u7684\u6807\u7b7e\u4f53\n        var td_id = document.createElement("td");\n        var td_name = document.createElement("td");\n        var td_gender = document.createElement("td");\n        var td_a = document.createElement("td");\n        var ele_a = document.createElement("a");\n\n        ele_a.setAttribute("href", "javascript:void(0);");\n        ele_a.setAttribute("onclick","delTr(this);");\n\n        var text_id = document.createTextNode(id);\n        var text_name = document.createTextNode(name);\n        var text_gender = document.createTextNode(gender);\n        var text_a = document.createTextNode("\u5220\u9664");\n\n        td_id.appendChild(text_id);\n        td_name.appendChild(text_name);\n        td_gender.appendChild(text_gender);\n        ele_a.appendChild(text_a);\n        td_a.appendChild(ele_a);\n\n        //\u521b\u5efatr\n        var tr = document.createElement("tr");\n\n        //\u6dfb\u52a0td\u5230tr\u4e2d\n        tr.appendChild(td_id);\n        tr.appendChild(td_name);\n        tr.appendChild(td_gender);\n        tr.appendChild(td_a);\n\n        //\u83b7\u53d6table\uff0c\u5c06tr\u6dfb\u52a0\u5230table\n        var table = document.getElementsByTagName(\'table\')[0];\n        table.appendChild(tr);\n    };\n\n    //\u5220\u9664\u65b9\u6cd5\n    function delTr(obj){\n        //\u5f53\u524d\u8d85\u94fe\u63a5\u5bf9\u8c61\n        obj.parentNode.parentNode.parentNode.removeChild(obj.parentNode.parentNode);\n    }\n\n<\/script>\n</body>\n</html>\n')))}p.isMDXComponent=!0},567:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){d(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},d=Object.keys(e);for(r=0;r<d.length;r++)t=d[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)t=d[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,d=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),s=r,b=u["".concat(o,".").concat(s)]||u[s]||m[s]||d;return t?a.a.createElement(b,i(i({ref:n},l),{},{components:t})):a.a.createElement(b,i({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var d=t.length,o=new Array(d);o[0]=s;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<d;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);