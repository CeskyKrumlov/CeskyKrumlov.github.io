(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{299:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(496)),o={id:"1.divideAndConquer",title:"\u5206\u6cbb\u6cd5",hide_title:!0},b={unversionedId:"sf/\u5206\u6cbb/1.divideAndConquer",id:"sf/\u5206\u6cbb/1.divideAndConquer",isDocsHomePage:!1,title:"\u5206\u6cbb\u6cd5",description:"\u5206\u6cbb\u6cd5",source:"@site/datastructure/sf/\u5206\u6cbb/\u5206\u6cbb\u6cd5.md",slug:"/sf/\u5206\u6cbb/1.divideAndConquer",permalink:"/datastructure/sf/\u5206\u6cbb/1.divideAndConquer",version:"current",sidebar:"docs2",previous:{title:"\u5c3e\u9012\u5f52",permalink:"/datastructure/sf/\u9012\u5f52/4.tailRecursion"},next:{title:"\u56de\u6eaf\u6cd5",permalink:"/datastructure/sf/\u56de\u6eaf/1.backtracking"}},c=[{value:"\u5206\u6cbb\u6cd5",id:"\u5206\u6cbb\u6cd5",children:[{value:"\u4e3b\u5b9a\u7406\uff08Master Theorem\uff09",id:"\u4e3b\u5b9a\u7406\uff08master-theorem\uff09",children:[]}]},{value:"\u5f52\u5e76\u6392\u5e8f",id:"\u5f52\u5e76\u6392\u5e8f",children:[]}],l={rightToc:c};function p(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u5206\u6cbb\u6cd5"},"\u5206\u6cbb\u6cd5"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u5c06\u5927\u95ee\u9898",Object(i.b)("inlineCode",{parentName:"p"},"\u5206\u89e3"),"\u6210\u82e5\u5e72\u4e2a\u5c0f\u95ee\u9898\uff0c\u5206\u522b\u6c42\u89e3\uff0c\u518d\u8bb2\u5c0f\u95ee\u9898\u7684\u89e3",Object(i.b)("inlineCode",{parentName:"p"},"\u5408\u5e76"),"\u4e3a\u5927\u95ee\u9898\u7684\u89e3")),Object(i.b)("img",{src:n(882).default,style:{zoom:"45%",border:"0px black solid"}}),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Leetcode\u9898\u76ee")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"169.\u591a\u6570\u5143\u7d20"),Object(i.b)("li",{parentName:"ul"},"53.\u6700\u5927\u5b50\u5e8f\u548c"),Object(i.b)("li",{parentName:"ul"},"215.\u6570\u7ec4\u4e2dk\u5927\u5143\u7d20")))),Object(i.b)("h2",{id:"\u4e3b\u5b9a\u7406\uff08master-theorem\uff09"},"\u4e3b\u5b9a\u7406\uff08Master Theorem\uff09"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"\u4e3b\u5b9a\u7406")," \u662f\u5206\u6cbb\u6cd5\u901a\u5e38\u9075\u5b88\u7684\u4e00\u79cd\u901a\u7528\u6a21\u5f0f")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u89e3\u51b3\u89c4\u6a21\u4e3a ",Object(i.b)("inlineCode",{parentName:"li"},"n")," \u7684\u95ee\u9898\uff0c\u5206\u89e3\u6210 ",Object(i.b)("inlineCode",{parentName:"li"},"a")," \u4e2a\u89c4\u6a21\u4e3a ",Object(i.b)("inlineCode",{parentName:"li"},"n / b")," \u7684\u5b50\u95ee\u9898\uff0c\u7136\u540e\u5728 ",Object(i.b)("inlineCode",{parentName:"li"},"O(n ^ d)")," \u65f6\u95f4\u5185\u5c06\u5b50\u95ee\u9898\u7684\u89e3\u5408\u5e76\u8d77\u6765"),Object(i.b)("li",{parentName:"ul"},"\u7b97\u6cd5\u8fd0\u884c\u65f6\u95f4\u4e3a\uff1a",Object(i.b)("inlineCode",{parentName:"li"},"T(n) = aT(n / b) + O(n ^ d); a > 0; b > 1; d \u2265 0"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5f53",Object(i.b)("inlineCode",{parentName:"li"},"d > log_b (a)"),"\uff0c\u5219",Object(i.b)("inlineCode",{parentName:"li"},"T(n) = O(n ^ d)")),Object(i.b)("li",{parentName:"ul"},"\u5f53",Object(i.b)("inlineCode",{parentName:"li"},"d = log_b (a)"),"\uff0c\u5219",Object(i.b)("inlineCode",{parentName:"li"},"T(n) = O(n ^ d * logn)")),Object(i.b)("li",{parentName:"ul"},"\u5f53",Object(i.b)("inlineCode",{parentName:"li"},"d < log_b (a)"),"\uff0c\u5219",Object(i.b)("inlineCode",{parentName:"li"},"T(n) = O(n ^ (log_b (a)))")))),Object(i.b)("li",{parentName:"ul"},"\u4f8b\u5982 ",Object(i.b)("inlineCode",{parentName:"li"},"\u5f52\u5e76\u6392\u5e8f")," \uff0c",Object(i.b)("inlineCode",{parentName:"li"},"T(n) = 2T(n / 2) + O(n)"),"\uff0ca = 2\uff0cb = 2\uff0cd = 1\uff0c\u5373",Object(i.b)("inlineCode",{parentName:"li"},"d = log_b (a)"),"\uff0c\u5219",Object(i.b)("inlineCode",{parentName:"li"},"T(n) = O(n ^ d * logn)")," = ",Object(i.b)("inlineCode",{parentName:"li"},"O(nlogn)")))),Object(i.b)("br",null),Object(i.b)("h1",{id:"\u5f52\u5e76\u6392\u5e8f"},"\u5f52\u5e76\u6392\u5e8f"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u5f52\u5e76\u6392\u5e8f\u662f\u7ecf\u5178\u7684\u5206\u6cbb\u6cd5\u5b9e\u8df5\u7b97\u6cd5")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u5bf9\u4e8e\u6570\u5217",Object(i.b)("inlineCode",{parentName:"li"},"7 8 4 1 6 5 2 3"),"\uff0c\u5c06\u5176\u6309\u4ece\u5c0f\u5230\u5927\u6392\u5e8f"),Object(i.b)("li",{parentName:"ul"},"\u5c06\u6570\u5217\u4e0d\u65ad\u4e8c\u5206\uff0c\u5bf9\u6bcf\u4e2a\u5b50\u6570\u5217\u8fdb\u884c\u6392\u5e8f\uff0c",Object(i.b)("inlineCode",{parentName:"li"},"\u9012\u5f52")),Object(i.b)("li",{parentName:"ul"},"\u76f4\u5230\u5206\u89e3\u5230",Object(i.b)("inlineCode",{parentName:"li"},"\u5355\u4e2a\u6570\u5b57"),"\uff0c\u7136\u540e\u5411\u4e0a",Object(i.b)("inlineCode",{parentName:"li"},"\u5408\u5e76")),Object(i.b)("li",{parentName:"ul"},"\u9010\u5c42\u6392\u5e8f\uff0c\u7136\u540e\u5408\u5e76\uff0c\u76f4\u5230\u9876\u5c42\uff0c\u6574\u4e2a\u6570\u5217\u6392\u5e8f\u5b8c\u6bd5"))))}p.isMDXComponent=!0},496:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,O=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return n?a.a.createElement(O,b(b({ref:t},l),{},{components:n})):a.a.createElement(O,b({ref:t},l))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:r,o[1]=b;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},882:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/1-81dc72e15b107b20bfd5435e0c5f0d9a.png"}}]);