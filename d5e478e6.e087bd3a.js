(window.webpackJsonp=window.webpackJsonp||[]).push([[345],{401:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(0),r(472)),c={id:"3.date",title:"Date\u6570\u7ec4\u5bf9\u8c61",hide_title:!0},i={unversionedId:"front/js/3.date",id:"front/js/3.date",isDocsHomePage:!1,title:"Date\u6570\u7ec4\u5bf9\u8c61",description:"Date\u5bf9\u8c61",source:"@site/docs/front/js/3.Date\u5bf9\u8c61.md",slug:"/front/js/3.date",permalink:"/docs/front/js/3.date",version:"current",sidebar:"someSidebar",previous:{title:"Array\u6570\u7ec4\u5bf9\u8c61",permalink:"/docs/front/js/3.array"},next:{title:"Global\u6570\u7ec4\u5bf9\u8c61",permalink:"/docs/front/js/3.global"}},l=[{value:"Date\u5bf9\u8c61",id:"date\u5bf9\u8c61",children:[{value:"\u521b\u5efa",id:"\u521b\u5efa",children:[]},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[]}]}],u={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"date\u5bf9\u8c61"},"Date\u5bf9\u8c61"),Object(o.b)("h2",{id:"\u521b\u5efa"},"\u521b\u5efa"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"var date = new Date();\n")),Object(o.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"toLocalString()"),": \u8fd4\u56de\u5f53\u524ddate\u5bf9\u8c61\u5bf9\u5e94\u7684\u672c\u5730\u65f6\u95f4\u5b57\u7b26\u4e32\u683c\u5f0f"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"getTime()"),":\u83b7\u53d6\u6beb\u79d2\u503c\uff0c\u8fd4\u56de\u5f53\u524d\u65e5\u671f\u5bf9\u8c61\u8fd4\u56de\u65f6\u95f4\u548c1970\u5e741\u67081\u65e50\u70b9\u7684\u6beb\u79d2\u503c\u5dee")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'var date = new Date();\ndocument.write(date + "<br/>");\ndocument.write(date.toLocaleString() + "<br/>");\ndocument.write(date.getTime() + "<br/>");\n')))}p.isMDXComponent=!0},472:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),s=n,f=d["".concat(c,".").concat(s)]||d[s]||b[s]||o;return r?a.a.createElement(f,i(i({ref:t},u),{},{components:r})):a.a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);