(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{180:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),o=(r(0),r(571)),i={slug:"charStreamAndByteStream",title:"\u5b57\u7b26\u6d41\u4e0e\u5b57\u8282\u6d41\u5c0f\u7ed3",author:"Ban",author_title:"ChangAn University",author_url:"https://ceskykrumlov.gitee.io",author_image_url:"/img/avatar.jpg",tags:["java","io"]},c={permalink:"/blog/charStreamAndByteStream",source:"@site/blog/2020-09-03-\u5b57\u7b26\u6d41\u4e0e\u5b57\u8282\u6d41.md",description:"\u5b57\u8282\u6d41\u7ee7\u627f\u4e8eInputStream OutputStream\uff0c\u5b57\u7b26\u6d41\u7ee7\u627f\u4e8eInputStreamReader OutputStreamWriter",date:"2020-09-03T00:00:00.000Z",tags:[{label:"java",permalink:"/blog/tags/java"},{label:"io",permalink:"/blog/tags/io"}],title:"\u5b57\u7b26\u6d41\u4e0e\u5b57\u8282\u6d41\u5c0f\u7ed3",readingTime:.215,truncated:!1,prevItem:{title:"tar\u6307\u4ee4\u7684\u7528\u6cd5",permalink:"/blog/linuxTar"},nextItem:{title:"\u6570\u7406\u7edf\u8ba1\u4e0e\u968f\u673a\u8fc7\u7a0b\u603b\u7ed3",permalink:"/blog/statisticsAndRandomProcess"}},p=[],u={rightToc:p};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u5b57\u8282\u6d41\u7ee7\u627f\u4e8eInputStream OutputStream\uff0c\u5b57\u7b26\u6d41\u7ee7\u627f\u4e8eInputStreamReader OutputStreamWriter"),Object(o.b)("p",{parentName:"div"},"\u540e\u7f00\u662fStream\u7684\u90fd\u662f\u5b57\u8282\u6d41\uff0c\u5176\u4ed6\u7684\u90fd\u662f\u5b57\u7b26\u6d41"),Object(o.b)("p",{parentName:"div"},"\u53ef\u4ee5\u7406\u89e3\u4e3a\u5b57\u7b26\u6d41=\u5b57\u8282\u6d41+\u7f16\u7801\u96c6"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u5b57\u8282\u6d41\uff1a")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:'language-title="\u5b57\u8282\u6d41"'}),"InputStream \n|-- FileInputStream (\u57fa\u672c\u6587\u4ef6\u6d41\uff09 \n|-- BufferedInputStream \n|-- DataInputStream \n|-- ObjectInputStream\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u5b57\u7b26\u6d41")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:'language-title="\u5b57\u7b26\u6d41"'}),"Reader \n|-- InputStreamReader (byte->char \u6865\u6881\uff09 \n|-- BufferedReader (\u5e38\u7528\uff09 \nWriter \n|-- OutputStreamWriter (char->byte \u6865\u6881\uff09 \n|-- BufferedWriter \n|-- PrintWriter \uff08\u5e38\u7528\uff09\n")))}l.isMDXComponent=!0},571:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(r),s=n,d=m["".concat(i,".").concat(s)]||m[s]||b[s]||o;return r?a.a.createElement(d,c(c({ref:t},u),{},{components:r})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);