(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{163:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return d}));var n=r(2),a=r(6),c=(r(0),r(347)),i={id:"12.facade",title:"\u5916\u89c2\u6a21\u5f0f",hide_title:!0},o={unversionedId:"designPattern/12.facade",id:"designPattern/12.facade",isDocsHomePage:!1,title:"\u5916\u89c2\u6a21\u5f0f",description:"Facade\u5916\u89c2\u6a21\u5f0f",source:"@site/datastructure/designPattern/12.\u5916\u89c2\u6a21\u5f0f.md",slug:"/designPattern/12.facade",permalink:"/datastructure/designPattern/12.facade",version:"current",sidebar:"docs2",previous:{title:"\u6865\u63a5\u6a21\u5f0f",permalink:"/datastructure/designPattern/11.bridgePatterm"},next:{title:"\u4eab\u5143\u6a21\u5f0f",permalink:"/datastructure/designPattern/13.flyWeight"}},u=[{value:"Facade\u5916\u89c2\u6a21\u5f0f",id:"facade\u5916\u89c2\u6a21\u5f0f",children:[]},{value:"\u6e90\u53d1\u95ee\u9898",id:"\u6e90\u53d1\u95ee\u9898",children:[]},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",children:[]},{value:"UML\u7c7b\u56fe",id:"uml\u7c7b\u56fe",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u4f18\u7f3a\u70b9",id:"\u4f18\u7f3a\u70b9",children:[]}],l={rightToc:u};function d(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"facade\u5916\u89c2\u6a21\u5f0f"},"Facade\u5916\u89c2\u6a21\u5f0f"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"\u5b9a\u4e49\uff1a\u4e3a\u5b50\u7cfb\u7edf\u4e2d\u7684\u4e00\u7ec4\u63a5\u53e3\u63d0\u4f9b\u4e00\u4e2a\u4e00\u81f4\u7684\u754c\u9762\uff0cFacade\u6a21\u5f0f\u5b9a\u4e49\u4e86\u4e00\u4e2a\u9ad8\u7ea7\u63a5\u53e3\uff0c\u8fd9\u4e2a\u63a5\u53e3\u4f7f\u5f97\u8fd9\u4e00\u5b50\u7cfb\u7edf\u66f4\u52a0\u5bb9\u6613\u4f7f\u7528\u3002")),Object(c.b)("h1",{id:"\u6e90\u53d1\u95ee\u9898"},"\u6e90\u53d1\u95ee\u9898"),Object(c.b)("p",null,"\u5ba2\u6237\u7aef\u4f7f\u7528\u4e00\u4e2a\u590d\u6742\u5b50\u7cfb\u7edf\u529f\u80fd\u65f6\uff0c\u5982\u679c\u662f\u9488\u5bf9\u5b50\u7cfb\u7edf\u4e2d\u7684\u6bcf\u4e2a\u7c7b\u7684\u63a5\u53e3\u8fdb\u884c\u8c03\u7528\uff0c\u5219\u4f1a\u4e0e\u5b50\u7cfb\u7edf\u5f62\u6210\u590d\u6742\u7684\u8026\u5408\u5173\u7cfb"),Object(c.b)("h1",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),Object(c.b)("p",null,"\u5b9a\u4e49\u4e00\u4e2a\u5916\u89c2\u7c7bFacade\uff0c\u5ba2\u6237\u4ee3\u7801\u901a\u8fc7\u5b83\u4e0e\u5b50\u7cfb\u7edf\u8fdb\u884c\u4ea4\u4e92\uff0c\u5916\u89c2\u7c7b\u4f5c\u4e3a\u5ba2\u6237\u7aef\u7684\u8c03\u7528\u63d0\u4f9b\u7edf\u4e00\u7684\u63a5\u53e3"),Object(c.b)("h1",{id:"uml\u7c7b\u56fe"},"UML\u7c7b\u56fe"),Object(c.b)("p",null,Object(c.b)("img",{alt:"image-20200414215847750",src:r(529).default})),Object(c.b)("h1",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(c.b)("h1",{id:"\u4f18\u7f3a\u70b9"},"\u4f18\u7f3a\u70b9"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u4f18\u70b9\n\u4e3a\u5b50\u7cfb\u7edf\u63d0\u4f9b\u4e00\u81f4\u7684\u8bbf\u95ee\u5165\u53e3\uff0c\u8fd9\u4e2a\u5165\u53e3\u4f7f\u5f97\u8fd9\u4e00\u5b50\u7cfb\u7edf\u66f4\u52a0\u5bb9\u6613\u4f7f\u7528\uff0c\u5e76\u4e14\u5c4f\u853d\u4e86\u5b50\u7cfb\u7edf\u5185\u90e8\u7684\u590d\u6742\u903b\u8f91\uff0c\u4ece\u800c\u5b9e\u73b0\u4e86\u5b50\u7cfb\u7edf\u548c\u5ba2\u6237\u7aef\u4ee3\u7801\u7684\u5f31\u8026\u5408"),Object(c.b)("li",{parentName:"ul"},"\u7f3a\u70b9\nFacade\u6709\u53ef\u80fd\u53d8\u4e3a\u80d6\u63a5\u53e3\u800c\u4e0e\u63a5\u53e3\u9694\u79bb\u539f\u5219\u76f8\u6096")))}d.isMDXComponent=!0},347:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=d(r),f=n,s=p["".concat(i,".").concat(f)]||p[f]||b[f]||c;return r?a.a.createElement(s,o(o({ref:t},l),{},{components:r})):a.a.createElement(s,o({ref:t},l))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<c;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},529:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/17-7029578570d42d5e8d332808f004af6d.png"}}]);