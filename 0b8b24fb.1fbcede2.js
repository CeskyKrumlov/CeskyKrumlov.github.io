(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{492:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(c,".").concat(m)]||p[m]||s[m]||i;return n?a.a.createElement(d,o(o({ref:t},b),{},{components:n})):a.a.createElement(d,o({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var b=2;b<i;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),i=(n(0),n(492)),c={id:"1.recursion",title:"\u9012\u5f52\u6cd5",hide_title:!0},o={unversionedId:"sf/\u9012\u5f52/1.recursion",id:"sf/\u9012\u5f52/1.recursion",isDocsHomePage:!1,title:"\u9012\u5f52\u6cd5",description:"\u9012\u5f52\u6cd5",source:"@site/datastructure/sf/\u9012\u5f52/\u9012\u5f52\u6cd5.md",slug:"/sf/\u9012\u5f52/1.recursion",permalink:"/datastructure/sf/\u9012\u5f52/1.recursion",version:"current",sidebar:"docs2",previous:{title:"\u6ed1\u52a8\u7a97\u53e3\u6cd5",permalink:"/datastructure/sf/\u6ed1\u52a8\u7a97\u53e3/1.slidingWindowAlgorithm"},next:{title:"\u4e0a\u697c\u68af\u95ee\u9898",permalink:"/datastructure/sf/\u9012\u5f52/2.upstairs"}},l=[{value:"\u9012\u5f52\u6cd5",id:"\u9012\u5f52\u6cd5",children:[]},{value:"\u6c42n\u7684\u9636\u4e58",id:"\u6c42n\u7684\u9636\u4e58",children:[]}],b={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u9012\u5f52\u6cd5"},"\u9012\u5f52\u6cd5"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u81ea\u5df1\u8c03\u7528\u81ea\u5df1\u7684",Object(i.b)("inlineCode",{parentName:"strong"},"\u5faa\u73af")))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u9012\u5f52\u7cfb\u5217\u7b97\u6cd5\uff1a")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u9012\u5f52"),Object(i.b)("li",{parentName:"ul"},"\u56de\u6eaf\u6cd5\uff1aBackTracking"),Object(i.b)("li",{parentName:"ul"},"\u5206\u6cbb\u6cd5\uff1aDivide & Conquer"),Object(i.b)("li",{parentName:"ul"},"DFS\uff1a\u6df1\u5ea6\u4f18\u5148\u67e5\u627e"))),Object(i.b)("h1",{id:"\u6c42n\u7684\u9636\u4e58"},"\u6c42n\u7684\u9636\u4e58"),Object(i.b)("blockquote",null,Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u5b9a\u4e49\u4e00\u4e2a\u8ba1\u7b97\u9636\u4e58\u7684\u65b9\u6cd5"),Object(i.b)("li",{parentName:"ul"},"\u9996\u5148\u5224\u65ad",Object(i.b)("inlineCode",{parentName:"li"},"n"),"\u662f\u4e0d\u662f\u7b49\u4e8e",Object(i.b)("inlineCode",{parentName:"li"},"1"),"\uff0c\u7b49\u4e8e",Object(i.b)("inlineCode",{parentName:"li"},"1"),"\u76f4\u63a5\u8fd4\u56de",Object(i.b)("inlineCode",{parentName:"li"},"1")),Object(i.b)("li",{parentName:"ul"},"\u63a5\u7740\u76f4\u63a5\u8fd4\u56de",Object(i.b)("inlineCode",{parentName:"li"},"n * \u65b9\u6cd5(n - 1)")))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// \u6c42 n \u7684\u9636\u4e58\nprivate static int jieCheng(int n) {\n    return n == 1 ? 1 : (n * jieCheng(n - 1));\n}\n\npublic static void main(String[] args) {\n    int res = jieCheng(4);\n    System.out.println(res);\n}\n")),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"LeetCode\u9898\u76ee")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"509.\u6590\u6ce2\u90a3\u5951\u6570"),Object(i.b)("li",{parentName:"ul"},"50.pow(x, n)"),Object(i.b)("li",{parentName:"ul"},"938.\u4e8c\u53c9\u641c\u7d22\u6811\u8303\u56f4\u548c Range Sum Of BST")))))}u.isMDXComponent=!0}}]);