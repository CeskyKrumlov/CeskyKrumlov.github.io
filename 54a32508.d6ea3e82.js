(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{218:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return b})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),i=(r(0),r(572)),l={id:"1.hystrix",title:"Hystrix \u6982\u8ff0",hide_title:!0},b={unversionedId:"springcloud/\u5bb9\u9519\u9650\u6d41/hystrix/1.hystrix",id:"springcloud/\u5bb9\u9519\u9650\u6d41/hystrix/1.hystrix",isDocsHomePage:!1,title:"Hystrix \u6982\u8ff0",description:"Hystrix \u6982\u8ff0",source:"@site/docs/springcloud/\u5bb9\u9519\u9650\u6d41/hystrix/1.hystrix.md",slug:"/springcloud/\u5bb9\u9519\u9650\u6d41/hystrix/1.hystrix",permalink:"/docs/springcloud/\u5bb9\u9519\u9650\u6d41/hystrix/1.hystrix",version:"current",sidebar:"someSidebar",previous:{title:"OpenFeign \u65e5\u5fd7\u589e\u5f3a",permalink:"/docs/springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/openFeign/4.openFeignLog"},next:{title:"Hystrix \u652f\u4ed8\u6a21\u5757\u6784\u5efa",permalink:"/docs/springcloud/\u5bb9\u9519\u9650\u6d41/hystrix/2.hystrixProvider"}},c=[{value:"Hystrix \u6982\u8ff0",id:"hystrix-\u6982\u8ff0",children:[]},{value:"\u91cd\u8981\u6982\u5ff5",id:"\u91cd\u8981\u6982\u5ff5",children:[{value:"\u670d\u52a1\u964d\u7ea7 Fallback",id:"\u670d\u52a1\u964d\u7ea7-fallback",children:[]},{value:"\u670d\u52a1\u7194\u65ad Break",id:"\u670d\u52a1\u7194\u65ad-break",children:[]},{value:"\u670d\u52a1\u9650\u6d41 Flowlimit",id:"\u670d\u52a1\u9650\u6d41-flowlimit",children:[]}]}],o={rightToc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"hystrix-\u6982\u8ff0"},"Hystrix \u6982\u8ff0"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u5206\u5e03\u5f0f\u7cfb\u7edf\u9762\u4e34\u7684\u95ee\u9898")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u590d\u6742\u5206\u5e03\u5f0f\u4f53\u7cfb\u7ed3\u6784\u4e2d\uff0c\u5e94\u7528\u7a0b\u5e8f\u4e4b\u95f4\u6709\u6570\u5341\u4e2a\u4e0a\u767e\u4e2a\u4f9d\u8d56\u5173\u7cfb\uff0c\u6bcf\u4e2a\u4f9d\u8d56\u5173\u7cfb\u90fd\u4f1a\u5728\u67d0\u4e9b\u65f6\u523b\u4e0d\u53ef\u907f\u514d\u7684\u51fa\u73b0\u5931\u8d25"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u6247\u51fa\u6548\u5e94\uff1a"),"\u591a\u4e2a\u5fae\u670d\u52a1\u4e4b\u95f4\u8c03\u7528\u65f6\uff0c",Object(i.b)("inlineCode",{parentName:"li"},"A")," \u8c03\u7528\u4e86 ",Object(i.b)("inlineCode",{parentName:"li"},"B")," \u548c ",Object(i.b)("inlineCode",{parentName:"li"},"C"),"\uff0c",Object(i.b)("inlineCode",{parentName:"li"},"B")," \u548c ",Object(i.b)("inlineCode",{parentName:"li"},"C")," \u53c8\u8c03\u7528\u4e86\u5176\u4ed6\u5fae\u670d\u52a1\uff0c\u4ee5\u6b64\u7c7b\u63a8"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u670d\u52a1\u96ea\u5d29\uff1a"),"\u6247\u51fa\u7684\u94fe\u8def\u4e0a\u67d0\u4e2a\u5fae\u670d\u52a1\u7684\u8c03\u7528\u54cd\u5e94\u65f6\u95f4\u8fc7\u957f\u6216\u8005\u4e0d\u53ef\u7528\uff0c\u5bf9\u5fae\u670d\u52a1 ",Object(i.b)("inlineCode",{parentName:"li"},"A")," \u7684\u8c03\u7528\u5c31\u4f1a\u5360\u7528\u8d8a\u6765\u8d8a\u591a\u7684\u7cfb\u7edf\u8d44\u6e90\uff0c\u8fdb\u800c\u5f15\u8d77\u7cfb\u7edf\u5d29\u6e83",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5bf9\u4e8e\u9ad8\u6d41\u91cf\u7684\u5f15\u7528\u800c\u8a00\uff0c\u5355\u4e00\u540e\u7aef\u4f9d\u8d56\u53ef\u80fd\u5bfc\u81f4",Object(i.b)("strong",{parentName:"li"},"\u6240\u6709\u670d\u52a1\u5668\u4e0a\u7684\u6240\u6709\u8d44\u6e90\u90fd\u5728\u51e0\u5206\u949f\u5185\u9971\u548c")),Object(i.b)("li",{parentName:"ul"},"\u6bd4\u5931\u8d25\u66f4\u7cdf\u7cd5\u7684\u662f\uff0c\u8fd9\u4e9b\u5e94\u7528\u7a0b\u5e8f\u8fd8\u53ef\u80fd\u5bfc\u81f4\u670d\u52a1\u4e4b\u95f4\u7684\u5ef6\u8fdf\u589e\u52a0\uff0c\u5907\u4efd\u961f\u5217\uff0c\u7ebf\u7a0b\u548c\u5176\u4ed6\u7cfb\u7edf\u8d44\u6e90\u7d27\u5f20\uff0c\u5bfc\u81f4\u6574\u4e2a\u7cfb\u7edf\u53d1\u751f\u66f4\u591a\u7ea7\u8054\u6545\u969c"),Object(i.b)("li",{parentName:"ul"},"\u9700\u8981\u5bf9\u6545\u969c\u548c\u5ef6\u8fdf\u505a\u9694\u79bb\u548c\u7ba1\u7406\uff0c\u4ee5\u9632\u5355\u4e2a\u4f9d\u8d56\u5173\u7cfb\u7684\u5931\u8d25\uff0c\u5bfc\u81f4\u6574\u4e2a\u7cfb\u7edf\u5d29\u6e83"),Object(i.b)("li",{parentName:"ul"},"\u901a\u5e38\u4f1a\u53d1\u751f\u67d0\u4e2a\u6a21\u5757\u4e0b\u7684\u67d0\u4e2a\u5b9e\u4f8b\u5931\u8d25\u540e\uff0c\u6a21\u5757\u4f9d\u7136\u5728\u63a5\u6536\u6d41\u91cf\uff0c\u5e76\u4e14\u8fd8\u5728\u8c03\u7528\u5176\u4ed6\u6a21\u5757\uff0c\u4ea7\u751f\u7ea7\u8054\u6545\u969c\uff0c\u79f0\u4e3a",Object(i.b)("strong",{parentName:"li"},"\u96ea\u5d29")))))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Hystrix")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u662f\u4e00\u4e2a\u7528\u4e8e\u5904\u7406\u5206\u5e03\u5f0f\u7cfb\u7edf ",Object(i.b)("inlineCode",{parentName:"li"},"\u5ef6\u8fdf")," \u548c ",Object(i.b)("inlineCode",{parentName:"li"},"\u5bb9\u9519")," \u7684\u5f00\u6e90\u5e93"),Object(i.b)("li",{parentName:"ul"},"\u5728\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e2d\uff0c\u8bb8\u591a\u4f9d\u8d56\u4e0d\u53ef\u907f\u514d\u7684\u4f1a\u8c03\u7528\u5931\u8d25\uff0c\u6bd4\u5982\u8d85\u65f6\u3001\u5f02\u5e38\u7b49"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Hystrix")," \u53ef\u4ee5\u4fdd\u8bc1\u5728\u4e00\u4e2a\u4f9d\u8d56\u51fa\u73b0\u95ee\u9898\u7684\u60c5\u51b5\u4e0b\uff0c",Object(i.b)("strong",{parentName:"li"},"\u4e0d\u4f1a\u5bfc\u81f4\u6574\u4e2a\u670d\u52a1\u5931\u8d25\uff0c\u907f\u514d\u7ea7\u8054\u6545\u969c\uff0c\u4ee5\u63d0\u9ad8\u5206\u5e03\u5f0f\u7cfb\u7edf\u7684\u5f39\u6027")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"\u65ad\u8def\u5668"),"\uff1a\u672c\u8eab\u662f\u4e00\u79cd\u5f00\u5173\u88c5\u7f6e\uff0c\u5f53\u67d0\u4e2a\u670d\u52a1\u5355\u5143\u53d1\u751f\u6545\u969c\u540e\uff0c\u901a\u8fc7\u65ad\u8def\u5668\u7684\u6545\u969c\u76d1\u63a7\uff08\u7c7b\u4f3c\u4fdd\u9669\u4e1d\uff09\uff0c",Object(i.b)("strong",{parentName:"li"},"\u5411\u8c03\u7528\u65b9\u8fd4\u56de\u4e00\u4e2a\u7b26\u5408\u9884\u671f\u7684\u3001\u53ef\u5904\u7406\u7684 ",Object(i.b)("inlineCode",{parentName:"strong"},"\u5907\u9009\u54cd\u5e94\uff08Fallback\uff09"),"\uff0c\u800c\u4e0d\u662f\u957f\u65f6\u95f4\u7684\u7b49\u5f85\u6216\u629b\u51fa\u8c03\u7528\u65b9\u65e0\u6cd5\u5904\u7406\u7684\u5f02\u5e38"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4fdd\u8bc1\u4e86\u670d\u52a1\u8c03\u7528\u65b9\u7684\u7ebf\u7a0b\u4e0d\u4f1a\u88ab\u957f\u65f6\u95f4\u3001\u4e0d\u5fc5\u8981\u7684\u5360\u7528"),Object(i.b)("li",{parentName:"ul"},"\u907f\u514d\u4e86\u6545\u969c\u5728\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e2d\u8513\u5ef6\uff0c\u751a\u81f3\u5f15\u53d1\u96ea\u5d29"))))),Object(i.b)("br",null),Object(i.b)("h1",{id:"\u91cd\u8981\u6982\u5ff5"},"\u91cd\u8981\u6982\u5ff5"),Object(i.b)("h2",{id:"\u670d\u52a1\u964d\u7ea7-fallback"},"\u670d\u52a1\u964d\u7ea7 Fallback"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"\u201c\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u201d"),"\uff0c\u4e0d\u8ba9\u5ba2\u6237\u7aef\u7b49\u5f85\u5e76\u7acb\u523b\u8fd4\u56de\u4e00\u4e2a\u53cb\u597d\u63d0\u793a")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u54ea\u4e9b\u60c5\u51b5\u4f1a\u89e6\u53d1\u670d\u52a1\u964d\u7ea7")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u7a0b\u5e8f\u8fd0\u884c\u5f02\u5e38"),Object(i.b)("li",{parentName:"ul"},"\u8d85\u65f6"),Object(i.b)("li",{parentName:"ul"},"\u670d\u52a1\u7194\u65ad\u89e6\u53d1\u670d\u52a1\u964d\u7ea7"),Object(i.b)("li",{parentName:"ul"},"\u7ebf\u7a0b\u6c60 / \u4fe1\u53f7\u91cf\u6253\u6ee1\u4e5f\u4f1a\u5bfc\u81f4\u670d\u52a1\u964d\u7ea7"))),Object(i.b)("h2",{id:"\u670d\u52a1\u7194\u65ad-break"},"\u670d\u52a1\u7194\u65ad Break"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u7c7b\u6bd4\u4fdd\u9669\u4e1d\u8fbe\u5230\u6700\u5927\u670d\u52a1\u8bbf\u95ee\u540e\uff0c\u76f4\u63a5\u62d2\u7edd\u8bbf\u95ee\uff0c\u62c9\u95f8\u9650\u7535\uff0c\u7136\u540e\u8c03\u7528 ",Object(i.b)("em",{parentName:"li"},"\u670d\u52a1\u964d\u7ea7")," \u7684\u65b9\u6cd5\u8fd4\u56de\u53cb\u597d\u63d0\u793a")),Object(i.b)("h2",{id:"\u670d\u52a1\u9650\u6d41-flowlimit"},"\u670d\u52a1\u9650\u6d41 Flowlimit"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u79d2\u6740\u3001\u9ad8\u5e76\u53d1\u7b49\u64cd\u4f5c\uff0c\u4e25\u7981\u4e00\u7a9d\u8702\u62e5\u6324\uff0c\u91c7\u7528\u6392\u961f\u7684\u65b9\u5f0f\uff0c\u4e00\u79d2\u949f\u8fdb N \u4e2a\uff0c\u6709\u5e8f\u8fdb\u884c\uff0c\u524a\u5cf0")))}p.isMDXComponent=!0},572:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=p(r),O=n,s=u["".concat(l,".").concat(O)]||u[O]||m[O]||i;return r?a.a.createElement(s,b(b({ref:t},o),{},{components:r})):a.a.createElement(s,b({ref:t},o))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=O;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,l[1]=b;for(var o=2;o<i;o++)l[o]=r[o];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);