(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{286:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(482)),l={id:"6.bPlusTree",title:"B+\u6811",hide_title:!0},b={unversionedId:"sf/\u6811/6.bPlusTree",id:"sf/\u6811/6.bPlusTree",isDocsHomePage:!1,title:"B+\u6811",description:"B+ \u6811",source:"@site/datastructure/sf/\u6811/b+\u6811.md",slug:"/sf/\u6811/6.bPlusTree",permalink:"/datastructure/sf/\u6811/6.bPlusTree",version:"current",sidebar:"docs2",previous:{title:"\u5e73\u8861\u4e8c\u53c9\u641c\u7d22\u6811\u2014\u2014\u7ea2\u9ed1\u6811",permalink:"/datastructure/sf/\u6811/5.redBlackTree"},next:{title:"\u54c8\u5e0c\u8868",permalink:"/datastructure/sf/\u54c8\u5e0c/1.hashTableDataStructure"}},c=[{value:"B+ \u6811",id:"b-\u6811",children:[]},{value:"MySQL\u5e95\u5c42\u7d22\u5f15\u4e3a\u4f55\u4f7f\u7528 B+ \u6811",id:"mysql\u5e95\u5c42\u7d22\u5f15\u4e3a\u4f55\u4f7f\u7528-b-\u6811",children:[]},{value:"B* \u6811",id:"b-\u6811-1",children:[]}],o={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"b-\u6811"},"B+ \u6811"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"B+\u6811\u65f6B\u6811\u7684\u53d8\u4f53\uff0c\u5e38\u7528\u8bed\u6570\u636e\u5e93\u4e0e\u64cd\u4f5c\u7cfb\u7edf\u7684\u6587\u4ef6\u7cfb\u7edf\u4e2d")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"MySQL")," \u6570\u636e\u5e93\u7684 ",Object(i.b)("inlineCode",{parentName:"li"},"\u7d22\u5f15")," \u5c31\u662f\u57fa\u4e8e ",Object(i.b)("inlineCode",{parentName:"li"},"B+\u6811")," \u5b9e\u73b0\u7684"))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"B+\u6811\u7684\u7279\u70b9")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u5206\u4e3a ",Object(i.b)("inlineCode",{parentName:"li"},"\u5185\u90e8\u8282\u70b9\uff08\u975e\u53f6\u5b50\uff09"),"\u3001",Object(i.b)("inlineCode",{parentName:"li"},"\u53f6\u5b50\u8282\u70b9")," \u4e24\u79cd\u8282\u70b9",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u5185\u90e8\u8282\u70b9\uff08\u975e\u53f6\u5b50\uff09\uff1a"),"\u53ea\u5b58\u50a8 ",Object(i.b)("inlineCode",{parentName:"li"},"key"),"\uff0c\u4e0d\u5b58\u50a8\u5177\u4f53\u6570\u636e"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u53f6\u5b50\u8282\u70b9\uff1a"),"\u5b58\u50a8 ",Object(i.b)("inlineCode",{parentName:"li"},"key")," \u548c ",Object(i.b)("inlineCode",{parentName:"li"},"value")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u6240\u6709\u7684 ",Object(i.b)("inlineCode",{parentName:"strong"},"\u53f6\u5b50\u8282\u70b9")," \u4f1a\u5f62\u6210\u4e00\u6761 ",Object(i.b)("inlineCode",{parentName:"strong"},"\u6709\u5e8f\u94fe\u8868"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"m")," \u9636 B+ \u6811\u975e\u6839\u8282\u70b9\u7684\u5143\u7d20\u6570\u91cf\u4e3a ",Object(i.b)("inlineCode",{parentName:"li"},"x"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5219\u6ee1\u8db3 ",Object(i.b)("inlineCode",{parentName:"li"},"\u5411\u4e0b\u53d6\u6574(m/2) \u2264 x \u2264 m")),Object(i.b)("li",{parentName:"ul"},"\u76f4\u89c2\u89e3\u91ca\uff1a",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"B\u6811\uff1a\u67d0\u4e2a\u8282\u70b9\u91cc\u9762\u6709 ",Object(i.b)("inlineCode",{parentName:"li"},"3")," \u4e2a\u5143\u7d20\uff0c\u90a3\u4e48\u8fd9\u4e2a\u8282\u70b9\u4e00\u822c\u6709 ",Object(i.b)("inlineCode",{parentName:"li"},"4")," \u4e2a\u5b50\u8282\u70b9\uff0c\u56e0\u4e3a\u5b83\u80fd\u5206\u51fa ",Object(i.b)("inlineCode",{parentName:"li"},"4")," \u4e2a\u53c9"),Object(i.b)("li",{parentName:"ul"},"B+\u6811\uff1a\u67d0\u4e2a\u8282\u70b9\u91cc\u9762\u6709 ",Object(i.b)("inlineCode",{parentName:"li"},"3")," \u4e2a\u5143\u7d20\uff0c\u90a3\u4e48\u8fd9\u4e2a\u8282\u70b9\u4e00\u822c\u5c31\u6709 ",Object(i.b)("inlineCode",{parentName:"li"},"3")," \u4e2a\u5b50\u8282\u70b9"))))))),Object(i.b)("br",null),Object(i.b)("h1",{id:"mysql\u5e95\u5c42\u7d22\u5f15\u4e3a\u4f55\u4f7f\u7528-b-\u6811"},"MySQL\u5e95\u5c42\u7d22\u5f15\u4e3a\u4f55\u4f7f\u7528 B+ \u6811"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u4e3a\u4e86\u51cf\u5c11IO\u64cd\u4f5c\u6b21\u6570\uff0c\u4e00\u822c\u628a\u4e00\u4e2a\u8282\u70b9\u7684\u5927\u5c0f\u8bbe\u8ba1\u6210\u6700\u5c0f\u8bfb\u5199\u5355\u4f4d\u7684\u5927\u5c0f\uff0c\u4e0e\u64cd\u4f5c\u7cfb\u7edfIO\u5b9e\u73b0\u4e0e\u7269\u7406IO\u5b9e\u8df5\u76f8\u5339\u914d",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"MySQL\u7684\u5b58\u50a8\u5f15\u64ceInnoDB\u7684\u6700\u5c0f\u8bfb\u5199\u5355\u4f4d\u662f ",Object(i.b)("inlineCode",{parentName:"li"},"16KB")),Object(i.b)("li",{parentName:"ul"},"\u4e3a\u4e86\u505a\u5230\u8fd9\u4e00\u70b9\uff0c\u5c31\u4f1a\u5728\u4e00\u4e2a\u8282\u70b9\u91cc\uff0c\u653e\u975e\u5e38\u591a\u7684\u5143\u7d20"),Object(i.b)("li",{parentName:"ul"},"\u7531\u4e8e\u6811\u4e2d\u5b58\u50a8\u7684\u662f ",Object(i.b)("inlineCode",{parentName:"li"},"Key-Value")," \u7c7b\u578b\u7684\u6570\u636e\uff0c\u800c\u5728\u6570\u636e\u5e93\u573a\u666f\u4e0b\uff0c",Object(i.b)("inlineCode",{parentName:"li"},"value")," \u672c\u8eab\u662f\u6bd4\u8f83\u5927\u7684\uff0c\u91c7\u7528 ",Object(i.b)("inlineCode",{parentName:"li"},"B\u6811")," \u5219\u6bcf\u4e2a\u8282\u70b9\u90fd\u4f1a\u5b58\u50a8 ",Object(i.b)("inlineCode",{parentName:"li"},"value"),"\uff0c\u4f7f\u5f97\u5355\u4e2a\u8282\u70b9\u80fd\u591f\u5b58\u50a8\u7684\u5143\u7d20\u6570\u76ee\u4e0b\u964d"))),Object(i.b)("li",{parentName:"ul"},"\u5bf9\u6bd4 ",Object(i.b)("inlineCode",{parentName:"li"},"B\u6811"),"\uff0c",Object(i.b)("inlineCode",{parentName:"li"},"B+\u6811")," \u7684\u4f18\u52bf\u662f\uff1a",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6bcf\u4e2a\u975e\u53f6\u5b50\u8282\u70b9\u5b58\u50a8\u7684 ",Object(i.b)("inlineCode",{parentName:"li"},"key")," \u6570\u91cf\u66f4\u591a\uff0c\u610f\u5473\u7740\u6bcf\u4e2a\u8282\u70b9\u7684\u5206\u652f\u4e5f\u66f4\u591a\uff0c\u6811\u7684\u9ad8\u5ea6\u66f4\u4f4e"),Object(i.b)("li",{parentName:"ul"},"\u6240\u6709\u5177\u4f53\u6570\u636e\u90fd\u5b58\u50a8\u5728\u53f6\u5b50\u8282\u70b9\u4e0a\uff0c\u6240\u4ee5\u6bcf\u6b21\u67e5\u8be2\u90fd\u8981\u5230\u8fbe\u53f6\u5b50\u8282\u70b9\uff0c\u67e5\u8be2\u901f\u5ea6\u6bd4\u8f83\u7a33\u5b9a"),Object(i.b)("li",{parentName:"ul"},"\u6240\u6709\u53f6\u5b50\u8282\u70b9\u6784\u6210\u4e00\u4e2a ",Object(i.b)("inlineCode",{parentName:"li"},"\u6709\u5e8f\u94fe\u8868"),"\uff0c\u505a\u533a\u95f4\u67e5\u8be2\u66f4\u52a0\u65b9\u4fbf\uff1b\u5bf9\u4e8e ",Object(i.b)("inlineCode",{parentName:"li"},"B\u6811")," \u5219\u9700\u8981\u4f7f\u7528\u6811\u7684\u4e2d\u5e8f\u904d\u5386")))),Object(i.b)("br",null),Object(i.b)("h1",{id:"b-\u6811-1"},"B* \u6811"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"B* \u6811\u65f6 B+ \u6811\u7684\u8fa9\u9898\uff1a\u7ed9\u5185\u90e8\u8282\u70b9\u589e\u52a0\u4e86\u6307\u5411 ",Object(i.b)("inlineCode",{parentName:"strong"},"\u5144\u5f1f\u8282\u70b9")," \u7684\u6307\u9488")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"m")," \u9636 B* \u6811\u7684\u975e\u6839\u8282\u70b9\u5143\u7d20\u6570\u91cf\u4e3a ",Object(i.b)("inlineCode",{parentName:"li"},"x"),"\uff0c\u5219\u6ee1\u8db3 ",Object(i.b)("inlineCode",{parentName:"li"},"\u5411\u4e0b\u53d6\u6574(2m/3) \u2264 x \u2264 m"))))}p.isMDXComponent=!0},482:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=p(n),O=r,j=u["".concat(l,".").concat(O)]||u[O]||m[O]||i;return n?a.a.createElement(j,b(b({ref:t},o),{},{components:n})):a.a.createElement(j,b({ref:t},o))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=O;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:r,l[1]=b;for(var o=2;o<i;o++)l[o]=n[o];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);