(window.webpackJsonp=window.webpackJsonp||[]).push([[395],{1143:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/16-cdbbd929fbabdab04ec7d6e80afb19a6.png"},451:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return d}));var n=r(2),a=r(6),i=(r(0),r(576)),c={id:"11.bridgePatterm",title:"\u6865\u63a5\u6a21\u5f0f",hide_title:!0},o={unversionedId:"designPattern/11.bridgePatterm",id:"designPattern/11.bridgePatterm",isDocsHomePage:!1,title:"\u6865\u63a5\u6a21\u5f0f",description:"Bridge\u6865\u63a5\u6a21\u5f0f",source:"@site/datastructure/designPattern/11.\u6865\u63a5\u6a21\u5f0f.md",slug:"/designPattern/11.bridgePatterm",permalink:"/datastructure/designPattern/11.bridgePatterm",version:"current",sidebar:"docs2",previous:{title:"\u88c5\u9970\u8005\u6a21\u5f0f",permalink:"/datastructure/designPattern/10.decorator"},next:{title:"\u5916\u89c2\u6a21\u5f0f",permalink:"/datastructure/designPattern/12.facade"}},u=[{value:"Bridge\u6865\u63a5\u6a21\u5f0f",id:"bridge\u6865\u63a5\u6a21\u5f0f",children:[]},{value:"\u6e90\u53d1\u95ee\u9898",id:"\u6e90\u53d1\u95ee\u9898",children:[]},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",children:[]},{value:"UML\u7c7b\u56fe",id:"uml\u7c7b\u56fe",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u4f18\u7f3a\u70b9",id:"\u4f18\u7f3a\u70b9",children:[]}],l={rightToc:u};function d(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"bridge\u6865\u63a5\u6a21\u5f0f"},"Bridge\u6865\u63a5\u6a21\u5f0f"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"\u5b9a\u4e49\uff1a\u5c06\u62bd\u8c61\u90e8\u5206\u4e0e\u5b83\u7684\u5b9e\u73b0\u90e8\u5206\u5206\u79bb\uff0c\u4f7f\u5b83\u4eec\u90fd\u53ef\u4ee5\u72ec\u7acb\u5730\u53d8\u5316")),Object(i.b)("h1",{id:"\u6e90\u53d1\u95ee\u9898"},"\u6e90\u53d1\u95ee\u9898"),Object(i.b)("p",null,"\u5728\u62bd\u8c61\u7c7b\u7684\u6d3e\u751f\u4f53\u7cfb\u4e2d\uff0c\u5982\u679c\u65e2\u5b9a\u4e49\u4e86\u5177\u6709\u529f\u80fd\u4f7f\u7528\u903b\u8f91\u7684\u62bd\u8c61\u65b9\u6cd5\uff0c\u53c8\u5b9a\u4e49\u4e86\u529f\u80fd\u5b9e\u73b0\u7684\u62bd\u8c61\u65b9\u6cd5\uff0c\u8fd9\u79cd\u7ed3\u6784\u4f1a\u56e0\u4e8c\u8005\u7ec4\u5408\u53d8\u5316\u8ba9\u6d3e\u751f\u7c7b\u6570\u76ee\u6fc0\u589e\u3002\u5982\u679c\u4e00\u4e2a\u62bd\u8c61\u7c7b\u5177\u6709\u4e8c\u7ef4\u53d8\u5316\u7279\u6027\uff0c\u8fd9\u5c06\u5bfc\u81f4\u6d3e\u751f\u7c7b\u6570\u76ee\u6fc0\u589e"),Object(i.b)("h1",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),Object(i.b)("p",null,"\u5c06\u529f\u80fd\u4f7f\u7528\u90e8\u5206\u548c\u5b9e\u73b0\u90e8\u5206\u7684\u62bd\u8c61\u5b9a\u4e49\u5206\u79bb\uff0c\u4f7f\u4e8c\u8005\u53ef\u4ee5\u72ec\u7acb\u53d8\u5316\u3002\u5728\u7c7b\u56fe\u4e2d\uff0c\u5047\u8bbe\u62bd\u8c61\u7c7bAbstraction\u5b9a\u4e49\u4e86\u5982\u4f55\u7ed8\u5236\u6587\u5b57\u548c\u6587\u5b57\u8fb9\u6846\u7684\u529f\u80fd\uff0c\u800c\u5728\u62bd\u8c61\u7c7bImplementor\u5f53\u4e2d\u5219\u5bf9\u8be5\u7a97\u53e3\u5728\u4e0d\u540c\u5e73\u53f0\u4e0b\u6587\u5b57\u548c\u8fb9\u6846\u5982\u4f55\u7ed8\u5236\u7ed9\u51fa\u5b9a\u4e49\uff0c\u4ed6\u4eec\u4e4b\u95f4\u901a\u8fc7\u5173\u8054\u8fde\u63a5\u5230\u4e00\u8d77\u3002"),Object(i.b)("p",null,"\u5982\u679cImplementor\u4e2d\u7684\u62bd\u8c61\u65b9\u6cd5\u5b9a\u4e49\u5728Abstraction\u4e2d\uff0c\u5219\u529f\u80fd\u7684\u4f7f\u7528\u62bd\u8c61\u5b9a\u4e49\u548c\u5b9e\u73b0\u62bd\u8c61\u5b9a\u4e49\u6df7\u5728\u4e00\u8d77\uff0c\u9020\u6210Abstraction\u6d3e\u751f\u5b50\u7c7b\u6570\u91cf\u4e0a\u7684\u6fc0\u589e\u3002"),Object(i.b)("h1",{id:"uml\u7c7b\u56fe"},"UML\u7c7b\u56fe"),Object(i.b)("p",null,Object(i.b)("img",{alt:"image-20200414214806932",src:r(1143).default})),Object(i.b)("h1",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(i.b)("h1",{id:"\u4f18\u7f3a\u70b9"},"\u4f18\u7f3a\u70b9"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u4f18\u70b9\n\u5c06\u529f\u80fd\u7684\u4f7f\u7528\u548c\u5b9e\u73b0\u4e24\u79cd\u62bd\u8c61\u5b9a\u4e49\u5206\u5f00\uff0c\u53d8\u7ee7\u627f\u65b9\u5f0f\u4e3a\u5173\u8054\u7ec4\u5408\u65b9\u5f0f\uff0c\u4ece\u800c\u4f7f\u5b83\u4eec\u90fd\u53ef\u4ee5\u72ec\u7acb\u53d8\u5316\uff0c\u53ef\u4ee5\u5728\u7a0b\u5e8f\u8fd0\u884c\u65f6\u523b\u5bf9\u5b83\u4eec\u8fdb\u884c\u9009\u62e9\u3001\u5207\u6362\u548c\u7ec4\u5408\uff0c\u7cfb\u7edf\u7684\u7ed3\u6784\u5c42\u6b21\u66f4\u52a0\u6e05\u6670"),Object(i.b)("li",{parentName:"ul"},"\u7f3a\u70b9\n\u529f\u80fd\u5b9e\u73b0\u901a\u8fc7\u7ee7\u627f\u62bd\u8c61\u7c7bImplementor\u6765\u8fdb\u884c\u3002\u8fd9\u79cd\u65b9\u5f0f\u7075\u6d3b\u6027\u4e0d\u591f\uff0c\u56e0\u4e3a\u529f\u80fd\u5f80\u5f80\u9700\u8981\u6269\u5145\uff0c\u4ece\u800c\u5f15\u8d77Implementor\u63a5\u53e3\u7684\u53d8\u5316")))}d.isMDXComponent=!0},576:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=d(r),s=n,m=b["".concat(c,".").concat(s)]||b[s]||p[s]||i;return r?a.a.createElement(m,o(o({ref:t},l),{},{components:r})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);