(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{194:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(2),o=t(6),a=(t(0),t(389)),c={id:"3.location",title:"location\u5bf9\u8c61",hide_title:!0},i={unversionedId:"front/js/3.location",id:"front/js/3.location",isDocsHomePage:!1,title:"location\u5bf9\u8c61",description:"location\u5bf9\u8c61",source:"@site/docs/front/js/3.location\u5bf9\u8c61.md",slug:"/front/js/3.location",permalink:"/docs/front/js/3.location",version:"current",sidebar:"someSidebar",previous:{title:"history\u5bf9\u8c61",permalink:"/docs/front/js/3.history"},next:{title:"RegExp\u6b63\u5219\u8868\u8fbe\u5f0f\u5bf9\u8c61",permalink:"/docs/front/js/3.reg"}},l=[{value:"location\u5bf9\u8c61",id:"location\u5bf9\u8c61",children:[{value:"\u521b\u5efa",id:"\u521b\u5efa",children:[]},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]}]},{value:"\u6848\u4f8b\u2014\u2014\u81ea\u52a8\u8df3\u8f6c\u9996\u9875",id:"\u6848\u4f8b\u81ea\u52a8\u8df3\u8f6c\u9996\u9875",children:[]}],u={rightToc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"location\u5bf9\u8c61"},"location\u5bf9\u8c61"),Object(a.b)("h2",{id:"\u521b\u5efa"},"\u521b\u5efa"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"window.location\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"location\n")),Object(a.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"reload()"),"\u2014\u2014\u91cd\u65b0\u52a0\u8f7d\u5f53\u524d\u9875\u9762")),Object(a.b)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"href()"),"\u2014\u2014\u8bbe\u7f6e\u6216\u8fd4\u56de\u5b8c\u6574\u7684URL")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<body>\n<input type="button" value="\u5237\u65b0" id="btn1"/>\n<input type="button" value="\u53bb\u767e\u5ea6" id="btn2"/>\n<script>\n    {\n        //reload\u65b9\u6cd5,\u5b9a\u4e49\u4e00\u4e2a\u6309\u94ae\uff0c \u70b9\u51fb\u6309\u94ae\u5237\u65b0\u5f53\u524d\u9875\u9762\n        var button1 = document.getElementById(\'btn1\');\n        button1.onclick = function () {\n            location.reload();\n        }\n\n        //\u83b7\u53d6href\u5c5e\u6027\n        var href = location.href;\n        document.write("\u5f53\u524d\u8def\u5f84\uff1a" + href + "<br/>");\n\n        var button2 = document.getElementById("btn2");\n        btn2.onclick = function () {\n            location.href = "https://www.baidu.com";\n        }\n    }\n<\/script>\n</body>\n')),Object(a.b)("h1",{id:"\u6848\u4f8b\u81ea\u52a8\u8df3\u8f6c\u9996\u9875"},"\u6848\u4f8b\u2014\u2014\u81ea\u52a8\u8df3\u8f6c\u9996\u9875"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<head>\n    <meta charset="UTF-8">\n    <title>\u81ea\u52a8\u8df3\u8f6c\u9996\u9875</title>\n\n    <style>\n        span {\n            color: red;\n        }\n\n        p {\n            text-align: center;\n        }\n    </style>\n</head>\n<body>\n    <p>\n        <span id="time">5</span>\u79d2\u4e4b\u540e\uff0c\u81ea\u52a8\u8df3\u8f6c\u5230\u9996\u9875...\n    </p>\n    <script>\n        var i = 5;\n        var time = document.getElementById("time");\n\n        function fun() {\n            i--;\n            time.innerText = i + "";\n\n            if (i <= 0) {\n                location.href = \'https://www.baidu.com\';\n            }\n        }\n        setInterval(fun, 1000);\n    <\/script>\n</body>\n')))}p.isMDXComponent=!0},389:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},s=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(t),s=r,f=b["".concat(c,".").concat(s)]||b[s]||d[s]||a;return t?o.a.createElement(f,i(i({ref:n},u),{},{components:t})):o.a.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=s;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);