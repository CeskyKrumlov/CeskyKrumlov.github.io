(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{306:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(2),a=r(6),c=(r(0),r(565)),i={id:"1.thread",title:"\u591a\u7ebf\u7a0b\u6982\u8ff0",hide_title:!0},o={unversionedId:"juc/1.thread",id:"juc/1.thread",isDocsHomePage:!1,title:"\u591a\u7ebf\u7a0b\u6982\u8ff0",description:"\u591a\u7ebf\u7a0b\u6982\u8ff0",source:"@site/docs/juc/1.\u591a\u7ebf\u7a0b\u6982\u8ff0.md",slug:"/juc/1.thread",permalink:"/docs/juc/1.thread",version:"current",sidebar:"someSidebar",previous:{title:"GC",permalink:"/docs/jvm/7.gc"},next:{title:"\u5b9e\u73b0\u591a\u7ebf\u7a0b\u7684\u4e09\u79cd\u65b9\u5f0f",permalink:"/docs/juc/2.threadRealize"}},l=[{value:"\u591a\u7ebf\u7a0b\u6982\u8ff0",id:"\u591a\u7ebf\u7a0b\u6982\u8ff0",children:[]},{value:"\u8fdb\u7a0b\u4e0e\u7ebf\u7a0b",id:"\u8fdb\u7a0b\u4e0e\u7ebf\u7a0b",children:[]},{value:"\u672c\u7ae0\u6838\u5fc3\u6982\u5ff5",id:"\u672c\u7ae0\u6838\u5fc3\u6982\u5ff5",children:[]}],u={rightToc:l};function b(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,i,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"\u591a\u7ebf\u7a0b\u6982\u8ff0"},"\u591a\u7ebf\u7a0b\u6982\u8ff0"),Object(c.b)("p",null,Object(c.b)("img",{src:r(970).default})),Object(c.b)("p",null,Object(c.b)("img",{alt:"image-20200611212253382",src:r(971).default})),Object(c.b)("h1",{id:"\u8fdb\u7a0b\u4e0e\u7ebf\u7a0b"},"\u8fdb\u7a0b\u4e0e\u7ebf\u7a0b"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Process & Thread")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"\u7a0b\u5e8f"),"\uff1a\u6307\u4ee4\u548c\u6570\u636e\u7684\u6709\u5e8f\u96c6\u5408\uff0c\u5176\u672c\u8eab\u6ca1\u6709\u4efb\u4f55\u7684\u542b\u4e49\uff0c\u662f\u4e00\u4e2a\u9759\u6b62\u7684\u6982\u5ff5")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"\u8fdb\u7a0b"),"\uff1a\u7a0b\u5e8f\u4e2d\u7684\u4e00\u6b21\u6267\u884c\u8fc7\u7a0b\uff0c\u662f\u4e00\u4e2a\u52a8\u6001\u7684\u6982\u5ff5\u3002\u662f\u7cfb\u7edf\u8d44\u6e90\u5206\u914d\u7684\u5355\u4f4d")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"\u7ebf\u7a0b"),"\uff1a\u901a\u5e38",Object(c.b)("strong",{parentName:"p"},"\u4e00\u4e2a\u8fdb\u7a0b\u4e2d\u53ef\u4ee5\u5305\u542b\u591a\u4e2a\u7ebf\u7a0b"),"\uff0c\u5f53\u7136\u4e00\u4e2a\u8fdb\u7a0b\u4e2d\u81f3\u5c11\u6709\u4e00\u4e2a\u7ebf\u7a0b\uff0c\u4e0d\u7136\u6ca1\u6709\u5b58\u5728\u7684\u610f\u4e49\u3002"),Object(c.b)("p",{parentName:"li"},"\u7ebf\u7a0b\u662fCPU\u8c03\u5ea6\u548c\u6267\u884c\u7684\u5355\u4f4d"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"[\u6ce8\u610f]","\uff1a"),"\u5f88\u591a\u591a\u7ebf\u7a0b\u662f\u6a21\u62df\u51fa\u6765\u7684\uff0c\u771f\u6b63\u7684\u591a\u7ebf\u7a0b\u662f\u6307\u591a\u4e2aCPU\uff0c\u5373\u591a\u6838\uff0c\u5982\u670d\u52a1\u5668\u3002\u5982\u679c\u662f\u6a21\u62df\u51fa\u6765\u7684\u591a\u7ebf\u7a0b\uff0c\u5373\u5728\u4e00\u4e2aCPU\u7684\u60c5\u51b5\u4e0b\uff0c\u5728\u540c\u4e00\u4e2a\u65f6\u95f4\u70b9\uff0cCPU\u53ea\u80fd\u6267\u884c\u4e00\u4e2a\u4ee3\u7801\uff0c\u56e0\u4e3a\u5207\u6362\u7684\u5f88\u5feb\uff0c\u6240\u4ee5\u6709\u540c\u65f6\u6267\u884c\u7684\u9519\u89c9"),Object(c.b)("h1",{id:"\u672c\u7ae0\u6838\u5fc3\u6982\u5ff5"},"\u672c\u7ae0\u6838\u5fc3\u6982\u5ff5"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u7ebf\u7a0b\u5c31\u662f\u72ec\u7acb\u7684\u6267\u884c\u8def\u5f84"),Object(c.b)("li",{parentName:"ul"},"\u5728\u7a0b\u5e8f\u8fd0\u884c\u65f6\uff0c\u5373\u4f7f\u6ca1\u6709\u81ea\u5df1\u521b\u5efa\u7ebf\u7a0b\uff0c\u540e\u53f0\u4e5f\u4f1a\u6709\u591a\u4e2a\u7ebf\u7a0b\uff0c\u5982\u4e3b\u7ebf\u7a0b\uff0cGC\u7ebf\u7a0b"),Object(c.b)("li",{parentName:"ul"},"main()\u79f0\u4e4b\u4e3a\u4e3b\u7ebf\u7a0b\uff0c\u4e3a\u7cfb\u7edf\u7684\u5165\u53e3\uff0c\u7528\u4e8e\u6267\u884c\u6574\u4e2a\u7a0b\u5e8f"),Object(c.b)("li",{parentName:"ul"},"\u5728\u4e00\u4e2a\u8fdb\u7a0b\u4e2d\uff0c\u5982\u679c\u5f00\u8f9f\u4e86\u591a\u4e2a\u7ebf\u7a0b\uff0c\u7ebf\u7a0b\u7684\u8fd0\u884c\u7531\u8c03\u5ea6\u5668\u5b89\u6392\u8c03\u5ea6\uff0c\u8c03\u5ea6\u5668\u4e0e\u64cd\u4f5c\u7cfb\u7edf\u5bc6\u5207\u76f8\u5173\uff0c\u5148\u540e\u987a\u5e8f\u662f\u4e0d\u80fd\u4eba\u4e3a\u5e72\u9884"),Object(c.b)("li",{parentName:"ul"},"\u5bf9\u540c\u4e00\u4efd\u8d44\u6e90\u64cd\u4f5c\u65f6\uff0c\u4f1a\u5b58\u5728\u8d44\u6e90\u62a2\u593a\u95ee\u9898\uff0c\u9700\u8981\u52a0\u5165\u5e76\u53d1\u63a7\u5236"),Object(c.b)("li",{parentName:"ul"},"\u7ebf\u7a0b\u4f1a\u5e26\u6765\u989d\u5916\u5f00\u9500\uff0c\u5982CPU\u8c03\u5ea6\u65f6\u95f4\uff0c\u5e76\u53d1\u63a7\u5236\u5f00\u9500"),Object(c.b)("li",{parentName:"ul"},"\u6bcf\u4e2a\u7ebf\u7a0b\u5728\u81ea\u5df1\u7684\u5de5\u4f5c\u5185\u5b58\u4ea4\u4e92\uff0c\u5185\u5b58\u63a7\u5236\u4e0d\u5f53\u4f1a\u9020\u6210\u6570\u636e\u4e0d\u4e00\u81f4")))}b.isMDXComponent=!0},565:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=b(r),m=n,d=p["".concat(i,".").concat(m)]||p[m]||s[m]||c;return r?a.a.createElement(d,o(o({ref:t},u),{},{components:r})):a.a.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<c;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},970:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/3-cb8831b21a82965a2f86e32b08b9538e.png"},971:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/1-cd1c080316f23682f00f741a93d2a261.png"}}]);