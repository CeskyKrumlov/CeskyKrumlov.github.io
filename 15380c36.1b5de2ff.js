(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return m}));var r=n(2),o=n(6),a=(n(0),n(492)),c={id:"4.element",title:"Element\u5bf9\u8c61",hide_title:!0},i={unversionedId:"front/js/4.element",id:"front/js/4.element",isDocsHomePage:!1,title:"Element\u5bf9\u8c61",description:"Element\u5bf9\u8c61",source:"@site/docs/front/js/4.element\u5bf9\u8c61.md",slug:"/front/js/4.element",permalink:"/docs/front/js/4.element",version:"current",sidebar:"someSidebar",previous:{title:"Document\u5bf9\u8c61",permalink:"/docs/front/js/4.document"},next:{title:"Node\u5bf9\u8c61",permalink:"/docs/front/js/4.node"}},l=[{value:"Element\u5bf9\u8c61",id:"element\u5bf9\u8c61",children:[{value:"\u83b7\u53d6",id:"\u83b7\u53d6",children:[]},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[]}]}],u={rightToc:l};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"element\u5bf9\u8c61"},"Element\u5bf9\u8c61"),Object(a.b)("h2",{id:"\u83b7\u53d6"},"\u83b7\u53d6"),Object(a.b)("p",null,"\u901a\u8fc7",Object(a.b)("inlineCode",{parentName:"p"},"document"),"\u5bf9\u8c61\u83b7\u53d6"),Object(a.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"removeAttribute();")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"setAttribute();"))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<body>\n<a>\u70b9\u6211\u8bd5\u4e00\u8bd5</a>\n<input type="button" value="\u7ed9a\u6807\u7b7e\u8bbe\u7f6e\u5c5e\u6027" id="btn_set"/>\n<input type="button" value="\u5220\u9664\u5c5e\u6027" id="btn_remove"/>\n\n<script>\n    //1.\u83b7\u53d6a\u6807\u7b7e\n\n    var btn1 = document.getElementById("btn_set");\n    var btn2 = document.getElementById("btn_remove");\n\n    btn1.onclick = function () {\n        var element_a = document.getElementsByTagName("a")[0];\n        element_a.setAttribute("href", "https://www.baidu.com");\n    }\n\n    btn2.onclick = function () {\n        var element_a = document.getElementsByTagName("a")[0];\n        element_a.removeAttribute("href");\n    }\n\n<\/script>\n</body>\n')))}m.isMDXComponent=!0},492:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),m=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=m(n),d=r,s=p["".concat(c,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(s,i(i({ref:t},u),{},{components:n})):o.a.createElement(s,i({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);