(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),i=(n(0),n(350)),c={id:"4.document",title:"Document\u5bf9\u8c61",hide_title:!0},l={unversionedId:"front/js/4.document",id:"front/js/4.document",isDocsHomePage:!1,title:"Document\u5bf9\u8c61",description:"Document\u5bf9\u8c61",source:"@site/docs/front/js/4.document\u5bf9\u8c61.md",slug:"/front/js/4.document",permalink:"/docs/front/js/4.document",version:"current",sidebar:"someSidebar",previous:{title:"\u4e8b\u4ef6",permalink:"/docs/front/js/4.issue"},next:{title:"Element\u5bf9\u8c61",permalink:"/docs/front/js/4.element"}},o=[{value:"Document\u5bf9\u8c61",id:"document\u5bf9\u8c61",children:[{value:"\u521b\u5efa",id:"\u521b\u5efa",children:[]},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"\u83b7\u53d6ELement\u5bf9\u8c61",id:"\u83b7\u53d6element\u5bf9\u8c61",children:[]},{value:"\u83b7\u53d6\u5176\u4ed6DOM\u5bf9\u8c61",id:"\u83b7\u53d6\u5176\u4ed6dom\u5bf9\u8c61",children:[]}]}]}],u={rightToc:o};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"document\u5bf9\u8c61"},"Document\u5bf9\u8c61"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"DOM\uff1a \u6587\u6863\u5bf9\u8c61\u8bed\u8a00\uff0c\u53ef\u4ee5\u4f7f\u7528\u5176\u4e2d\u7684\u5bf9\u8c61\u5bf9\u6807\u8bb0\u8bed\u8a00\u6587\u6863\u8fdb\u884cCRUD\u64cd\u4f5c")),Object(i.b)("h2",{id:"\u521b\u5efa"},"\u521b\u5efa"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"window.document\n")),Object(i.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(i.b)("h3",{id:"\u83b7\u53d6element\u5bf9\u8c61"},"\u83b7\u53d6ELement\u5bf9\u8c61"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"getElementById()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"getElementsByTagName()"),"        \u6839\u636e\u5143\u7d20\u540d\u79f0\u83b7\u53d6\u5143\u7d20\u4eec\uff0c\u8fd4\u56de\u5143\u7d20\u6570\u7ec4"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"getElementsByClassName()"),"     \u6839\u636eclass\u5c5e\u6027\u503c\u83b7\u53d6\u5143\u7d20\u4eec\uff0c\u8fd4\u56de\u5143\u7d20\u6570\u7ec4"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"getElementsByName()"),"           \u6839\u636ename\u5c5e\u6027\u503c\u83b7\u53d6\u5143\u7d20\u5bf9\u8c61\u4eec\uff0c\u8fd4\u56de\u6570\u7ec4")),Object(i.b)("h3",{id:"\u83b7\u53d6\u5176\u4ed6dom\u5bf9\u8c61"},"\u83b7\u53d6\u5176\u4ed6DOM\u5bf9\u8c61"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"createAttribute(name)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"createComment()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"createElement()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"createTextNode()"))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<body>\n<div id="div1">div1</div>\n<div id="div2">div2</div>\n\n<div id="div3">div3</div>\n\n<div class="cls1">div4</div>\n<div class="cls1">div5</div>\n\n<input type="text" name="username"/>\n\n<script>\n\n    var divs = document.getElementsByTagName("div");\n    // alert(divs.length);\n\n    var div_cls = document.getElementsByClassName("cls1");\n    // alert(div_cls.length)\n\n    var ele_name = document.getElementsByName("username");\n    // alert(ele_name.length);\n\n    var table = document.createElement("table");\n    alert(table);\n\n<\/script>\n</body>\n')))}d.isMDXComponent=!0},350:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),d=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(n),p=r,s=m["".concat(c,".").concat(p)]||m[p]||b[p]||i;return n?a.a.createElement(s,l(l({ref:t},u),{},{components:n})):a.a.createElement(s,l({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var u=2;u<i;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);