(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{284:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(571)),o={id:"6.sentinelSystemAutoFlowLimit",title:"Sentinel \u7cfb\u7edf\u81ea\u9002\u5e94\u9650\u6d41",hide_title:!0},c={unversionedId:"springcloudalibaba/\u6d41\u91cf\u536b\u5175/6.sentinelSystemAutoFlowLimit",id:"springcloudalibaba/\u6d41\u91cf\u536b\u5175/6.sentinelSystemAutoFlowLimit",isDocsHomePage:!1,title:"Sentinel \u7cfb\u7edf\u81ea\u9002\u5e94\u9650\u6d41",description:"Sentinel \u7cfb\u7edf\u81ea\u9002\u5e94\u9650\u6d41",source:"@site/docs/springcloudalibaba/\u6d41\u91cf\u536b\u5175/6.\u7cfb\u7edf\u81ea\u9002\u5e94\u9650\u6d41.md",slug:"/springcloudalibaba/\u6d41\u91cf\u536b\u5175/6.sentinelSystemAutoFlowLimit",permalink:"/docs/springcloudalibaba/\u6d41\u91cf\u536b\u5175/6.sentinelSystemAutoFlowLimit",version:"current",sidebar:"someSidebar",previous:{title:"Sentinel \u70ed\u70b9\u9650\u6d41",permalink:"/docs/springcloudalibaba/\u6d41\u91cf\u536b\u5175/5.sentinelHotKey"},next:{title:"SentinelResource \u6ce8\u89e3",permalink:"/docs/springcloudalibaba/\u6d41\u91cf\u536b\u5175/7.sentinelResource"}},l=[{value:"Sentinel \u7cfb\u7edf\u81ea\u9002\u5e94\u9650\u6d41",id:"sentinel-\u7cfb\u7edf\u81ea\u9002\u5e94\u9650\u6d41",children:[]}],b={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"sentinel-\u7cfb\u7edf\u81ea\u9002\u5e94\u9650\u6d41"},"Sentinel \u7cfb\u7edf\u81ea\u9002\u5e94\u9650\u6d41"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/alibaba/Sentinel/wiki/%E7%B3%BB%E7%BB%9F%E8%87%AA%E9%80%82%E5%BA%94%E9%99%90%E6%B5%81"}),"Sentinel \u7cfb\u7edf\u81ea\u9002\u5e94\u9650\u6d41\u6587\u6863")),Object(i.b)("h2",Object(r.a)({parentName:"blockquote"},{id:"\u7cfb\u7edf\u89c4\u5219"}),"\u7cfb\u7edf\u89c4\u5219"),Object(i.b)("p",{parentName:"blockquote"},"\u7cfb\u7edf\u4fdd\u62a4\u89c4\u5219\u662f\u4ece\u5e94\u7528\u7ea7\u522b\u7684\u5165\u53e3\u6d41\u91cf\u8fdb\u884c\u63a7\u5236\uff0c\u4ece\u5355\u53f0\u673a\u5668\u7684 load\u3001CPU \u4f7f\u7528\u7387\u3001\u5e73\u5747 RT\u3001\u5165\u53e3 QPS \u548c\u5e76\u53d1\u7ebf\u7a0b\u6570\u7b49\u51e0\u4e2a\u7ef4\u5ea6\u76d1\u63a7\u5e94\u7528\u6307\u6807\uff0c\u8ba9\u7cfb\u7edf\u5c3d\u53ef\u80fd\u8dd1\u5728\u6700\u5927\u541e\u5410\u91cf\u7684\u540c\u65f6\u4fdd\u8bc1\u7cfb\u7edf\u6574\u4f53\u7684\u7a33\u5b9a\u6027\u3002"),Object(i.b)("p",{parentName:"blockquote"},"\u7cfb\u7edf\u4fdd\u62a4\u89c4\u5219\u662f\u5e94\u7528\u6574\u4f53\u7ef4\u5ea6\u7684\uff0c\u800c\u4e0d\u662f\u8d44\u6e90\u7ef4\u5ea6\u7684\uff0c\u5e76\u4e14",Object(i.b)("strong",{parentName:"p"},"\u4ec5\u5bf9\u5165\u53e3\u6d41\u91cf\u751f\u6548"),"\u3002\u5165\u53e3\u6d41\u91cf\u6307\u7684\u662f\u8fdb\u5165\u5e94\u7528\u7684\u6d41\u91cf\uff08",Object(i.b)("inlineCode",{parentName:"p"},"EntryType.IN"),"\uff09\uff0c\u6bd4\u5982 Web \u670d\u52a1\u6216 Dubbo \u670d\u52a1\u7aef\u63a5\u6536\u7684\u8bf7\u6c42\uff0c\u90fd\u5c5e\u4e8e\u5165\u53e3\u6d41\u91cf\u3002"),Object(i.b)("p",{parentName:"blockquote"},"\u7cfb\u7edf\u89c4\u5219\u652f\u6301\u4ee5\u4e0b\u7684\u6a21\u5f0f\uff1a"),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Load \u81ea\u9002\u5e94"),"\uff08\u4ec5\u5bf9 Linux/Unix-like \u673a\u5668\u751f\u6548\uff09\uff1a\u7cfb\u7edf\u7684 load1 \u4f5c\u4e3a\u542f\u53d1\u6307\u6807\uff0c\u8fdb\u884c\u81ea\u9002\u5e94\u7cfb\u7edf\u4fdd\u62a4\u3002\u5f53\u7cfb\u7edf load1 \u8d85\u8fc7\u8bbe\u5b9a\u7684\u542f\u53d1\u503c\uff0c\u4e14\u7cfb\u7edf\u5f53\u524d\u7684\u5e76\u53d1\u7ebf\u7a0b\u6570\u8d85\u8fc7\u4f30\u7b97\u7684\u7cfb\u7edf\u5bb9\u91cf\u65f6\u624d\u4f1a\u89e6\u53d1\u7cfb\u7edf\u4fdd\u62a4\uff08BBR \u9636\u6bb5\uff09\u3002\u7cfb\u7edf\u5bb9\u91cf\u7531\u7cfb\u7edf\u7684 ",Object(i.b)("inlineCode",{parentName:"li"},"maxQps * minRt")," \u4f30\u7b97\u5f97\u51fa\u3002\u8bbe\u5b9a\u53c2\u8003\u503c\u4e00\u822c\u662f ",Object(i.b)("inlineCode",{parentName:"li"},"CPU cores * 2.5"),"\u3002"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"CPU usage"),"\uff081.5.0+ \u7248\u672c\uff09\uff1a\u5f53\u7cfb\u7edf CPU \u4f7f\u7528\u7387\u8d85\u8fc7\u9608\u503c\u5373\u89e6\u53d1\u7cfb\u7edf\u4fdd\u62a4\uff08\u53d6\u503c\u8303\u56f4 0.0-1.0\uff09\uff0c\u6bd4\u8f83\u7075\u654f\u3002"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u5e73\u5747 RT"),"\uff1a\u5f53\u5355\u53f0\u673a\u5668\u4e0a\u6240\u6709\u5165\u53e3\u6d41\u91cf\u7684\u5e73\u5747 RT \u8fbe\u5230\u9608\u503c\u5373\u89e6\u53d1\u7cfb\u7edf\u4fdd\u62a4\uff0c\u5355\u4f4d\u662f\u6beb\u79d2\u3002"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u5e76\u53d1\u7ebf\u7a0b\u6570"),"\uff1a\u5f53\u5355\u53f0\u673a\u5668\u4e0a\u6240\u6709\u5165\u53e3\u6d41\u91cf\u7684\u5e76\u53d1\u7ebf\u7a0b\u6570\u8fbe\u5230\u9608\u503c\u5373\u89e6\u53d1\u7cfb\u7edf\u4fdd\u62a4\u3002"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u5165\u53e3 QPS"),"\uff1a\u5f53\u5355\u53f0\u673a\u5668\u4e0a\u6240\u6709\u5165\u53e3\u6d41\u91cf\u7684 QPS \u8fbe\u5230\u9608\u503c\u5373\u89e6\u53d1\u7cfb\u7edf\u4fdd\u62a4\u3002"))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u63d0\u793a")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u4e00\u822c\u6765\u8bf4\u8fd8\u662f\u5e0c\u671b\u4f7f\u7528\u7ec6\u7c92\u5ea6\u7684\u914d\u7f6e\u89c4\u5219"))))}p.isMDXComponent=!0},571:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(o,".").concat(m)]||u[m]||s[m]||i;return n?a.a.createElement(d,c(c({ref:t},b),{},{components:n})):a.a.createElement(d,c({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var b=2;b<i;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);