(window.webpackJsonp=window.webpackJsonp||[]).push([[414],{470:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(496)),o={id:"1.binarySearchAlgorithm",title:"\u4e8c\u5206\u67e5\u627e\u6cd5",hide_title:!0},c={unversionedId:"sf/\u4e8c\u5206\u67e5\u627e/1.binarySearchAlgorithm",id:"sf/\u4e8c\u5206\u67e5\u627e/1.binarySearchAlgorithm",isDocsHomePage:!1,title:"\u4e8c\u5206\u67e5\u627e\u6cd5",description:"\u4e8c\u5206\u67e5\u627e\u6cd5",source:"@site/datastructure/sf/\u4e8c\u5206\u67e5\u627e/\u4e8c\u5206\u67e5\u627e.md",slug:"/sf/\u4e8c\u5206\u67e5\u627e/1.binarySearchAlgorithm",permalink:"/datastructure/sf/\u4e8c\u5206\u67e5\u627e/1.binarySearchAlgorithm",version:"current",sidebar:"docs2",previous:{title:"\u53cc\u6307\u9488\u7b97\u6cd5",permalink:"/datastructure/sf/\u53cc\u6307\u9488/1.duoPoint"},next:{title:"\u6ed1\u52a8\u7a97\u53e3\u6cd5",permalink:"/datastructure/sf/\u6ed1\u52a8\u7a97\u53e3/1.slidingWindowAlgorithm"}},l=[{value:"\u4e8c\u5206\u67e5\u627e\u6cd5",id:"\u4e8c\u5206\u67e5\u627e\u6cd5",children:[]}],b={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u4e8c\u5206\u67e5\u627e\u6cd5"},"\u4e8c\u5206\u67e5\u627e\u6cd5"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u5f15\u4f8b\uff1a"),Object(i.b)("p",{parentName:"blockquote"},"\u5bf9\u4e8e",Object(i.b)("inlineCode",{parentName:"p"},"\u6709\u5e8f"),"\u6570\u7ec4",Object(i.b)("inlineCode",{parentName:"p"},"a = [1, 2, 3, 4, 5, 6, 7, 8, 9]"),"\uff0c\u5728\u5176\u4e2d\u641c\u7d22\u5143\u7d20",Object(i.b)("inlineCode",{parentName:"p"},"6")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u987a\u5e8f\u904d\u5386\u6cd5\uff1a\u65f6\u95f4\u590d\u6742\u5ea6\u663e\u7136\u4e3a",Object(i.b)("inlineCode",{parentName:"li"},"O(n)")),Object(i.b)("li",{parentName:"ul"},"\u4e8c\u5206\u67e5\u627e\uff1a\u6839\u636e",Object(i.b)("inlineCode",{parentName:"li"},"\u6709\u5e8f"),"\uff0c\u627e\u5230\u4e2d\u95f4\u503c\uff0c\u5224\u65ad\u4e2d\u95f4\u503c\u4e0e\u641c\u7d22\u503c\u7684\u5927\u5c0f\uff0c\u4e2d\u95f4\u503c\u6bd4\u641c\u7d22\u503c\u5927\uff0c\u53bb\u5de6\u8fb9\u7684\u4e2d\u95f4\u503c\uff0c\u91cd\u590d\uff1b\u53cd\u4e4b\u4ea6\u7136\u3002\u6839\u636e\u6298\u534a\u6027\uff0c\u663e\u7136\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a",Object(i.b)("inlineCode",{parentName:"li"},"O(logn)")))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u9898\u76ee")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"leetcode\u9898\u76ee\uff1a"),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"704 \u4e8c\u5206\u67e5\u627e"),Object(i.b)("li",{parentName:"ul"},"35 \u641c\u7d22\u63d2\u5165\u4f4d\u7f6e"),Object(i.b)("li",{parentName:"ul"},"162 \u5bfb\u627e\u5cf0\u503c"),Object(i.b)("li",{parentName:"ul"},"74 \u641c\u7d22\u4e8c\u7ef4\u77e9\u9635")))))}p.isMDXComponent=!0},496:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(n),s=r,d=u["".concat(o,".").concat(s)]||u[s]||m[s]||i;return n?a.a.createElement(d,c(c({ref:t},b),{},{components:n})):a.a.createElement(d,c({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var b=2;b<i;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);