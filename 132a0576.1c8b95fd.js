(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{417:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=p(r),f=n,s=b["".concat(i,".").concat(f)]||b[f]||m[f]||o;return r?a.a.createElement(s,l(l({ref:t},u),{},{components:r})):a.a.createElement(s,l({ref:t},u))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},89:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(0),r(417)),i={slug:"leetCodeQueue",title:"LeetCode\u6808\u3001\u961f\u5217\u4e0e\u5806",author:"Ban",author_title:"ChangAn University",author_url:"https://ceskykrumlov.gitee.io",author_image_url:"/img/avatar.jpg",tags:["\u7b97\u6cd5","\u6570\u636e\u7ed3\u6784"]},l={permalink:"/blog/leetCodeQueue",source:"@site/blog/2020-03-08-\u6808_\u961f\u5217_\u5806.md",description:"- 225:\u4f7f\u7528\u961f\u5217\u5b9e\u73b0\u6808(Easy)\uff08\u6808\u3001\u961f\u5217\uff09",date:"2020-03-08T00:00:00.000Z",tags:[{label:"\u7b97\u6cd5",permalink:"/blog/tags/\u7b97\u6cd5"},{label:"\u6570\u636e\u7ed3\u6784",permalink:"/blog/tags/\u6570\u636e\u7ed3\u6784"}],title:"LeetCode\u6808\u3001\u961f\u5217\u4e0e\u5806",readingTime:8.56,truncated:!0,prevItem:{title:"\u79bb\u7ebfAPI\u5de5\u5177Zeal\u4e0eAPI\u6587\u6863\u79bb\u7ebf\u5b89\u88c5",permalink:"/blog/zeal"},nextItem:{title:"LeetCode\u94fe\u8868",permalink:"/blog/leetcodeLinked"}},c=[],u={rightToc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:""}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"225:\u4f7f\u7528\u961f\u5217\u5b9e\u73b0\u6808(Easy)\uff08\u6808\u3001\u961f\u5217\uff09"),Object(o.b)("li",{parentName:"ul"},"\u4f7f\u7528\u6808\u5b9e\u73b0\u961f\u5217(East)(\u6808\u3001\u961f\u5217)"),Object(o.b)("li",{parentName:"ul"},"\u5305\u542bmin\u51fd\u6570\u7684\u6808(Easy)(\u6808)"),Object(o.b)("li",{parentName:"ul"},"\u5408\u6cd5\u7684\u51fa\u6808\u5e8f\u5217(Medium)\uff08\u6808\u3001\u961f\u5217\uff09"),Object(o.b)("li",{parentName:"ul"},"\u7b80\u5355\u7684\u8ba1\u7b97\u5668(hard)\uff08\u6808\uff09"),Object(o.b)("li",{parentName:"ul"},"\u6570\u7ec4\u4e2d\u7b2cK\u5927\u7684\u6570(Easy)\uff08\u5806\uff09"),Object(o.b)("li",{parentName:"ul"},"\u5bfb\u627e\u4e2d\u4f4d\u6570(hard)\uff08\u5806\uff09")))}p.isMDXComponent=!0}}]);