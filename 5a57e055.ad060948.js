(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{152:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return a})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(2),o=t(6),i=(t(0),t(350)),c={id:"4.issue",title:"\u4e8b\u4ef6",hide_title:!0},a={unversionedId:"front/js/4.issue",id:"front/js/4.issue",isDocsHomePage:!1,title:"\u4e8b\u4ef6",description:"\u4e8b\u4ef6",source:"@site/docs/front/js/4.\u4e8b\u4ef6.md",slug:"/front/js/4.issue",permalink:"/docs/front/js/4.issue",version:"current",sidebar:"someSidebar",previous:{title:"window\u5bf9\u8c61",permalink:"/docs/front/js/3.window"},next:{title:"Document\u5bf9\u8c61",permalink:"/docs/front/js/4.document"}},l=[{value:"\u4e8b\u4ef6",id:"\u4e8b\u4ef6",children:[{value:"\u5982\u4f55\u7ed1\u5b9a\u4e8b\u4ef6",id:"\u5982\u4f55\u7ed1\u5b9a\u4e8b\u4ef6",children:[]}]}],u={rightToc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u4e8b\u4ef6"},"\u4e8b\u4ef6"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u529f\u80fd\uff1a\u67d0\u4e9b\u7ec4\u4ef6\u88ab\u6267\u884c\u4e86\u67d0\u4e9b\u64cd\u4f5c\u540e\uff0c\u7136\u540e\u51fa\u53d1\u67d0\u4e9b\u4ee3\u7801\u7684\u6267\u884c\u3002")),Object(i.b)("h2",{id:"\u5982\u4f55\u7ed1\u5b9a\u4e8b\u4ef6"},"\u5982\u4f55\u7ed1\u5b9a\u4e8b\u4ef6"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u76f4\u63a5\u5728HTML\u6807\u7b7e\u4e0a\u6307\u5b9a\u4e8b\u4ef6\u5c5e\u6027\uff0c\u5c5e\u6027\u503c\u5c31\u662fjs\u4ee3\u7801"),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"onClick -> \u5355\u51fb\u4e8b\u4ef6"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u901a\u8fc7js\u83b7\u53d6\u5143\u7d20\u5bf9\u8c61\uff0c\u6307\u5b9a\u4e8b\u4ef6\u5c5e\u6027\uff0c\u8bbe\u5b9a\u4e00\u4e2a\u51fd\u6570"))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<body>\n\n<img id="light1" src="../../image/off.gif" onclick="fun();"/>\n<img id="light2" src="../../image/off.gif"/>\n\n<script>\n    function fun() {\n        alert("\u6211\u88ab\u7535\u4e86");\n    }\n\n    function fun2() {\n        alert("\u65b9\u6cd5\u4e8c");\n    }\n\n    //1.\u83b7\u53d6light2\u5bf9\u8c61\n    var l2 = document.getElementById("light2");\n    l2.onclick = fun2;\n<\/script>\n</body>\n')))}p.isMDXComponent=!0},350:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),b=r,d=s["".concat(c,".").concat(b)]||s[b]||f[b]||i;return t?o.a.createElement(d,a(a({ref:n},u),{},{components:t})):o.a.createElement(d,a({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=b;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var u=2;u<i;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);