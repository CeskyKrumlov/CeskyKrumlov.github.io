(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{191:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),c=(n(0),n(565)),b={id:"1.dfs",title:"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u2014\u2014DFS",hide_title:!0},i={unversionedId:"sf/dfs/1.dfs",id:"sf/dfs/1.dfs",isDocsHomePage:!1,title:"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u2014\u2014DFS",description:"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u2014\u2014DFS",source:"@site/datastructure/sf/dfs/dfs.md",slug:"/sf/dfs/1.dfs",permalink:"/datastructure/sf/dfs/1.dfs",version:"current",sidebar:"docs2",previous:{title:"\u5927\u6570\u4e58\u6cd5\u95ee\u9898",permalink:"/datastructure/sf/\u52a8\u6001\u89c4\u5212/2.hugeNumberTimes"},next:{title:"\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u2014\u2014BFS",permalink:"/datastructure/sf/bfs/1.bfs"}},o=[{value:"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u2014\u2014DFS",id:"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22dfs",children:[]}],l={rightToc:o};function p(e){var t=e.components,b=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,b,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22dfs"},"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u2014\u2014DFS"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u4e3b\u8981\u5e94\u7528\uff1a\u4e8c\u53c9\u6811\u3001\u56fe")),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u5f88\u591a\u6392\u5217\u7ec4\u5408\u76f8\u5173\u7684\u95ee\u9898\uff0c\u90fd\u53ef\u4ee5\u901a\u8fc7 DFS \u89e3\u51b3"))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u5f15\u4f8b LeetCode 78.\u5b50\u96c6")),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u7ed9\u5b9a\u6570\u5217",Object(c.b)("inlineCode",{parentName:"li"},"[1, 2, 3]"),"\uff0c\u5b50\u96c6\u957f\u5ea6",Object(c.b)("inlineCode",{parentName:"li"},"0, 1, 2, 3"),"\uff0c\u8fd4\u56de\u6240\u6709\u53ef\u80fd\u7684\u5b50\u96c6")),Object(c.b)("table",{parentName:"blockquote"},Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5b50\u96c6\u957f\u5ea6"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5b50\u96c6"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"0"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"[]"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"1"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"[1]"),", ",Object(c.b)("inlineCode",{parentName:"td"},"[2]"),", ",Object(c.b)("inlineCode",{parentName:"td"},"[3]"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"2"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"[1, 2]"),", ",Object(c.b)("inlineCode",{parentName:"td"},"[1, 3]"),", ",Object(c.b)("inlineCode",{parentName:"td"},"[2, 3]"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"3"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"[1, 2, 3]")))))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"DFS\u6cd5\u6c42\u89e3")),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(c.b)("inlineCode",{parentName:"li"},"\u4e8c\u53c9\u6811"),"\u7684",Object(c.b)("inlineCode",{parentName:"li"},"\u524d\u5e8f\u904d\u5386"),"\u3001",Object(c.b)("inlineCode",{parentName:"li"},"\u4e2d\u5e8f\u904d\u5386"),"\u3001",Object(c.b)("inlineCode",{parentName:"li"},"\u540e\u5e8f\u904d\u5386")))),Object(c.b)("p",null,Object(c.b)("img",{alt:"image-20201207155815495",src:n(781).default})),Object(c.b)("hr",null),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"leetcode\u9898\u76ee")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("ul",{parentName:"div"},Object(c.b)("li",{parentName:"ul"},"78.\u5b50\u96c6"),Object(c.b)("li",{parentName:"ul"},"144.\u4e8c\u53c9\u6811\u7684\u524d\u5e8f\u904d\u5386"),Object(c.b)("li",{parentName:"ul"},"94.\u4e8c\u53c9\u6811\u7684\u4e2d\u5e8f\u904d\u5386"),Object(c.b)("li",{parentName:"ul"},"145.\u4e8c\u53c9\u6811\u7684\u540e\u7eed\u904d\u5386")))))}p.isMDXComponent=!0},565:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,O=d["".concat(b,".").concat(u)]||d[u]||m[u]||c;return n?r.a.createElement(O,i(i({ref:t},l),{},{components:n})):r.a.createElement(O,i({ref:t},l))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,b=new Array(c);b[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var l=2;l<c;l++)b[l]=n[l];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},781:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/1-e2175b9ff38c40d17916b8fc6c4f6461.png"}}]);