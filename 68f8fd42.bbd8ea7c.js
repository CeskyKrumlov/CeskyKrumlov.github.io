(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{270:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),i=(n(0),n(571)),c={id:"4.multiBag",title:"\u591a\u91cd\u80cc\u5305\u95ee\u9898",hide_title:!0},o={unversionedId:"sf/\u52a8\u6001\u89c4\u5212/4.multiBag",id:"sf/\u52a8\u6001\u89c4\u5212/4.multiBag",isDocsHomePage:!1,title:"\u591a\u91cd\u80cc\u5305\u95ee\u9898",description:"\u591a\u91cd\u80cc\u5305\u95ee\u9898",source:"@site/datastructure/sf/\u52a8\u6001\u89c4\u5212/\u591a\u91cd\u80cc\u5305.md",slug:"/sf/\u52a8\u6001\u89c4\u5212/4.multiBag",permalink:"/datastructure/sf/\u52a8\u6001\u89c4\u5212/4.multiBag",version:"current",sidebar:"docs2",previous:{title:"\u5b8c\u5168\u80cc\u5305\u95ee\u9898",permalink:"/datastructure/sf/\u52a8\u6001\u89c4\u5212/3.completeBag"},next:{title:"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u2014\u2014DFS",permalink:"/datastructure/sf/dfs/1.dfs"}},l=[{value:"\u591a\u91cd\u80cc\u5305\u95ee\u9898",id:"\u591a\u91cd\u80cc\u5305\u95ee\u9898",children:[{value:"\u591a\u91cd\u80cc\u5305\u7684\u4e8c\u8fdb\u5236\u4f18\u5316",id:"\u591a\u91cd\u80cc\u5305\u7684\u4e8c\u8fdb\u5236\u4f18\u5316",children:[]}]}],u={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u591a\u91cd\u80cc\u5305\u95ee\u9898"},"\u591a\u91cd\u80cc\u5305\u95ee\u9898"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u591a\u91cd\u80cc\u5305\u95ee\u9898")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u7b2c i \u79cd\u7269\u54c1\u6700\u591a\u6709 ",Object(i.b)("inlineCode",{parentName:"li"},"n[i]")," \u4ef6\u53ef\u7528"))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u6734\u7d20\u601d\u7ef4")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u628a n","[i]"," \u4e2a i \u79cd\u7269\u54c1\u5206\u4e3a n \u4efd\uff0c\u5bf9\u7740 n \u4efd\u7269\u54c1\u770b\u505a 01 \u80cc\u5305\u95ee\u9898\u89e3\u51b3"),Object(i.b)("li",{parentName:"ul"},"\u4f8b\u5982\u6709 n \u4e2a a \u7269\u54c1\uff0c\u5c31\u628a\u4ed6\u4eec\u5206\u4e3a a1\u3001a2\u3001a3... an\uff0c\u7136\u540e\u7528 01 \u80cc\u5305\u89e3\u51b3"),Object(i.b)("li",{parentName:"ul"},"\u5728 01 \u80cc\u5305\u4ee3\u7801\u7684\u57fa\u7840\u4e0a\uff0c\u6dfb\u52a0 \u7b2c\u4e09\u4e2a for \u5faa\u73af k",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5faa\u73af\u9000\u51fa\u6761\u4ef6\u4e3a ",Object(i.b)("inlineCode",{parentName:"li"},"k <= n[i]")," \u5c0f\u4e8e\u7269\u54c1\u6570\u76ee"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"\u4e14")," ",Object(i.b)("inlineCode",{parentName:"li"},"k * w[i] <= j")," \u5f53\u524d\u5269\u4f59\u5bb9\u91cf\u653e\u5f97\u4e0b")))),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u591a\u91cd\u80cc\u5305\u95ee\u9898"',title:'"\u591a\u91cd\u80cc\u5305\u95ee\u9898"'}),"for (int i = 1; i <= n; i++) {\n    for (int j = m; j >=0; j--) {\n        for (int k = 1; k <= nums[i] && k * w[i] <= j; k++) {\n            dp[j] = Math.max(dp[j], dp[j - k * w[i]] + k * v[i]);\n        }\n    }\n}\n"))),Object(i.b)("h2",{id:"\u591a\u91cd\u80cc\u5305\u7684\u4e8c\u8fdb\u5236\u4f18\u5316"},"\u591a\u91cd\u80cc\u5305\u7684\u4e8c\u8fdb\u5236\u4f18\u5316"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u5f15\u4f8b\uff1a\u6709 1000 \u4e2a\u82f9\u679c\uff0c10 \u4e2a\u7bb1\u5b50\uff0c\u8981\u60f3\u4e0d\u8bba\u62ff\u591a\u5c11\u4e2a\u82f9\u679c\uff0c\u90fd\u80fd\u6210\u7bb1\u6210\u7bb1\u7684\u62ff\uff0c\u5e94\u8be5\u5982\u4f55\u653e\u7f6e")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u6309\u7167\u4e8c\u8fdb\u5236\u8bbe\u7f6e"),Object(i.b)("li",{parentName:"ul"},"\u7b2c\u4e00\u4e2a\u7bb1\u5b50\u653e 1\uff0c\u7b2c\u4e8c\u4e2a\u7bb1\u5b50\u653e2\uff0c\u7b2c\u4e09\u4e2a\u7bb1\u5b50\u653e4\uff0c\u7b2c\u56db\u4e2a\u7bb1\u5b50\u653e8..."),Object(i.b)("li",{parentName:"ul"},"\u90a3\u4e48\u603b\u662f\u6210\u7bb1\u6210\u7bb1\u7684\u62ff\uff0c\u56e0\u4e3a\u4e8c\u8fdb\u5236\u80fd\u8868\u793a\u4efb\u4f55\u81ea\u7136\u6570"))))}b.isMDXComponent=!0},571:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=b(n),s=r,f=p["".concat(c,".").concat(s)]||p[s]||m[s]||i;return n?a.a.createElement(f,o(o({ref:t},u),{},{components:n})):a.a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var u=2;u<i;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);