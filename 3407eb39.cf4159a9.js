(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{159:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return d})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(2),i=t(6),a=(t(0),t(561)),o={id:"4.node",title:"Node\u5bf9\u8c61",hide_title:!0},d={unversionedId:"front/js/4.node",id:"front/js/4.node",isDocsHomePage:!1,title:"Node\u5bf9\u8c61",description:"Node\u5bf9\u8c61",source:"@site/docs/front/js/4.node\u5bf9\u8c61.md",slug:"/front/js/4.node",permalink:"/docs/front/js/4.node",version:"current",sidebar:"someSidebar",previous:{title:"Element\u5bf9\u8c61",permalink:"/docs/front/js/4.element"},next:{title:"\u6848\u4f8b\u2014\u2014\u52a8\u6001\u8868\u683c",permalink:"/docs/front/js/4.dynamicTable"}},c=[{value:"Node\u5bf9\u8c61",id:"node\u5bf9\u8c61",children:[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]}]}],l={rightToc:c};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"node\u5bf9\u8c61"},"Node\u5bf9\u8c61"),Object(a.b)("p",null,"\u5143\u7d20\u8282\u70b9\u3001\u5c5e\u6027\u8282\u70b9\u3001\u6587\u672c\u8282\u70b9"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u7279\u70b9\uff1a\u6240\u6709DOM\u5bf9\u8c61\u90fd\u53ef\u4ee5\u770b\u4f5c\u662fNode")),Object(a.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"CRUD DOM\u6811",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"appendChild()"),"     \u5411\u672b\u5c3e\u6dfb\u52a0\u65b0\u7684\u5b50\u8282\u70b9"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"removeChild()"),"     \u5220\u9664\u5f53\u524d\u8282\u70b9\u6307\u5b9a\u7684\u5b50\u8282\u70b9"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"replaceChild()"),"    \u66ff\u6362\u5f53\u524d\u8282\u70b9\u6307\u5b9a\u7684\u5b50\u8282\u70b9"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"getXxx()"),"       ")))),Object(a.b)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"parentNode"),":           \u83b7\u53d6\u7236\u8282\u70b9")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<body>\n<div id="div1">\n    <div id="div2">\n        div1\n    </div>\n</div>\n\n\x3c!--\n    \u8d85\u94fe\u63a5\uff1a\n        1. \u53ef\u4ee5\u88ab\u70b9\u51fb\n        2. \u70b9\u51fb\u540e\u8df3\u8f6c\u5230href\u6307\u5b9a\u7684url\n\n    \u9700\u6c42\uff1a\n        \u4fdd\u75591\u529f\u80fd\uff0c\u53bb\u96642\u529f\u80fd\n        href = "javascript:void(0);"\n--\x3e\n<a href="javascript:void(0);" id="delete">\u5220\u9664div\u7684\u5b50\u8282\u70b9</a>\n<a href="javascript:void(0);" id="add">\u7ed9div\u6dfb\u52a0\u5b50\u8282\u70b9</a>\n\n<script>\n    //\u5220\u9664div\u8282\u70b9\u5185\u7684\u6587\u672c\u8282\u70b9\u5185\u5bb9\n    //\u83b7\u53d6\u8d85\u94fe\u63a5\n    var element_a = document.getElementById("delete");\n    //\u7ed1\u5b9a\u5355\u51fb\u4e8b\u4ef6\n    element_a.onclick = function () {\n        var div1 = document.getElementById("div1");\n        div1.removeChild(div2);\n    }\n\n    var element_add = document.getElementById("add");\n    //\u7ed1\u5b9a\u5355\u51fb\u4e8b\u4ef6\n    element_add.onclick = function () {\n        var div1 = document.getElementById("div1");\n        //\u521b\u5efadiv\u8282\u70b9\n        var div3 = document.createElement("div");\n        div3.setAttribute("id","div3");\n\n        div1.appendChild(div3);\n    }\n\n    var div = document.getElementById("div2");\n    document.write("\u7236\u8282\u70b9\uff1a" + div.parentNode);\n\n<\/script>\n</body>\n')))}u.isMDXComponent=!0},561:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return v}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),u=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},p=function(e){var n=u(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,v=p["".concat(o,".").concat(m)]||p[m]||b[m]||a;return t?i.a.createElement(v,d(d({ref:n},l),{},{components:t})):i.a.createElement(v,d({ref:n},l))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var d={};for(var c in n)hasOwnProperty.call(n,c)&&(d[c]=n[c]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var l=2;l<a;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);