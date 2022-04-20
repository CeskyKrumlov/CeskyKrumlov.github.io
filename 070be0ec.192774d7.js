(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{576:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return u}));var b=a(0),n=a.n(b);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,b)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,b,n=function(e,t){if(null==e)return{};var a,b,n={},c=Object.keys(e);for(b=0;b<c.length;b++)a=c[b],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(b=0;b<c.length;b++)a=c[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),p=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},O=function(e){var t=p(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=n.a.forwardRef((function(e,t){var a=e.components,b=e.mdxType,c=e.originalType,r=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),O=p(a),j=b,u=O["".concat(r,".").concat(j)]||O[j]||m[j]||c;return a?n.a.createElement(u,l(l({ref:t},i),{},{components:a})):n.a.createElement(u,l({ref:t},i))}));function u(e,t){var a=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var c=a.length,r=new Array(c);r[0]=j;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:b,r[1]=l;for(var i=2;i<c;i++)r[i]=a[i];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},81:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return p}));var b=a(2),n=a(6),c=(a(0),a(576)),r={id:"15.doubleWriteConsistency",title:"\u53cc\u5199\u4e00\u81f4\u6027",hide_title:!0},l={unversionedId:"redis/15.doubleWriteConsistency",id:"redis/15.doubleWriteConsistency",isDocsHomePage:!1,title:"\u53cc\u5199\u4e00\u81f4\u6027",description:"\u53cc\u5199\u4e00\u81f4\u6027\u95ee\u9898",source:"@site/docs/redis/\u53cc\u5199\u4e00\u81f4\u6027.md",slug:"/redis/15.doubleWriteConsistency",permalink:"/docs/redis/15.doubleWriteConsistency",version:"current",sidebar:"someSidebar",previous:{title:"Redis\u5206\u5e03\u5f0f\u9501",permalink:"/docs/redis/14.redisLock"},next:{title:"\u57fa\u672c\u64cd\u4f5c\u4e0e\u77e9\u9635\u8f93\u5165",permalink:"/docs/matlab/1.matlabBasic"}},o=[{value:"\u53cc\u5199\u4e00\u81f4\u6027\u95ee\u9898",id:"\u53cc\u5199\u4e00\u81f4\u6027\u95ee\u9898",children:[{value:"\u5148\u66f4\u65b0\u6570\u636e\u5e93\uff0c\u518d\u66f4\u65b0\u7f13\u5b58 \uff08\xd7\uff09",id:"\u5148\u66f4\u65b0\u6570\u636e\u5e93\uff0c\u518d\u66f4\u65b0\u7f13\u5b58-\uff08\xd7\uff09",children:[]},{value:"\u5148\u5220\u9664\u7f13\u5b58\uff0c\u518d\u66f4\u65b0\u6570\u636e\u5e93",id:"\u5148\u5220\u9664\u7f13\u5b58\uff0c\u518d\u66f4\u65b0\u6570\u636e\u5e93",children:[{value:"\u5ef6\u65f6\u53cc\u5220\u7b56\u7565",id:"\u5ef6\u65f6\u53cc\u5220\u7b56\u7565",children:[]},{value:"\u4f7f\u7528\u4e86 MySQL \u8bfb\u5199\u5206\u79bb\u67b6\u6784\u7684\u573a\u666f",id:"\u4f7f\u7528\u4e86-mysql-\u8bfb\u5199\u5206\u79bb\u67b6\u6784\u7684\u573a\u666f",children:[]}]},{value:"\u5148\u66f4\u65b0\u6570\u636e\u5e93\uff0c\u518d\u5220\u9664\u7f13\u5b58\uff08Cache-Aside Pattern\uff09",id:"\u5148\u66f4\u65b0\u6570\u636e\u5e93\uff0c\u518d\u5220\u9664\u7f13\u5b58\uff08cache-aside-pattern\uff09",children:[]},{value:"\u5982\u679c\u5220\u9664\u7f13\u5b58\u64cd\u4f5c\u5931\u8d25\uff0c\u5982\u4f55\u5904\u7406",id:"\u5982\u679c\u5220\u9664\u7f13\u5b58\u64cd\u4f5c\u5931\u8d25\uff0c\u5982\u4f55\u5904\u7406",children:[]}]}],i={rightToc:o};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(b.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("br",null),Object(c.b)("h1",{id:"\u53cc\u5199\u4e00\u81f4\u6027\u95ee\u9898"},"\u53cc\u5199\u4e00\u81f4\u6027\u95ee\u9898"),Object(c.b)("p",null,Object(c.b)("a",Object(b.a)({parentName:"p"},{href:"https://blog.csdn.net/sanyaoxu_2/article/details/79472465"}),"\u5e94\u5bf9\u7f13\u5b58\u51fb\u7a7f\u7684\u89e3\u51b3\u65b9\u6cd5",Object(c.b)("em",{parentName:"a"},"xusanyao\u7684\u535a\u5ba2-CSDN\u535a\u5ba2"),"\u7f13\u5b58\u51fb\u7a7f\u89e3\u51b3\u65b9\u6848")),Object(c.b)("p",null,Object(c.b)("a",Object(b.a)({parentName:"p"},{href:"https://www.jianshu.com/p/5f8501447de2"}),"\u7f13\u5b58\u51fb\u7a7f\u89e3\u51b3\u65b9\u6848 - \u7b80\u4e66 (jianshu.com)")),Object(c.b)("p",null,Object(c.b)("a",Object(b.a)({parentName:"p"},{href:"https://mp.weixin.qq.com/s?__biz=MzI2MTk1NDY0Mw==&mid=2247483764&idx=1&sn=bd56c0af21e5c0ea0f712c9acc130f27&chksm=ea53cc48dd24455ea6a4f9b1825361f591c63cc71998fddaf34f07c743390c1f5b090d662254&scene=21#wechat_redirect"}),"\u4f60\u4e00\u5b9a\u8981\u638c\u63e1\u8fd9\u79cd\u7f13\u5b58\u8bfb\u5199\u7b56\u7565\uff0c\u5f00\u53d1\u5fc5\u5907 ")),Object(c.b)("p",null,Object(c.b)("a",Object(b.a)({parentName:"p"},{href:"https://blog.csdn.net/Linuxhus/article/details/119804654"}),"\u4f60\u771f\u7684\u61c2Redis\u4e0eMySQL\u53cc\u5199\u4e00\u81f4\u6027\u5982\u4f55\u4fdd\u8bc1\u5417\uff1f_Linuxhus\u7684\u535a\u5ba2-CSDN\u535a\u5ba2")),Object(c.b)("p",null,"\u770bfacebook\u76843\u7bc7paper\uff0cscaling memcache at facebook, tao, \u8fd8\u6709flighttracker, \u770b\u5b8c\u5c31\u77e5\u9053\u6ee1\u8db3ryw\u4e00\u81f4\u6027\uff0c\u9ad8\u53ef\u7528\u7684\u7f13\u5b58\u548b\u8bbe\u8ba1\u4e86"),Object(c.b)("h2",{id:"\u5148\u66f4\u65b0\u6570\u636e\u5e93\uff0c\u518d\u66f4\u65b0\u7f13\u5b58-\uff08\xd7\uff09"},"\u5148\u66f4\u65b0\u6570\u636e\u5e93\uff0c\u518d\u66f4\u65b0\u7f13\u5b58 \uff08\xd7\uff09"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u7ebf\u7a0b\u5b89\u5168\u89d2\u5ea6")),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u7ebf\u7a0b A \u66f4\u65b0\u6570\u636e\u5e93"),Object(c.b)("li",{parentName:"ul"},"\u7ebf\u7a0b B \u66f4\u65b0\u6570\u636e\u5e93"),Object(c.b)("li",{parentName:"ul"},"\u7531\u4e8e\u79cd\u79cd\u539f\u56e0\uff0c\u7ebf\u7a0b B \u7387\u5148\u66f4\u65b0\u4e86 \u7f13\u5b58"),Object(c.b)("li",{parentName:"ul"},"\u7ebf\u7a0b A \u66f4\u65b0\u7f13\u5b58")),Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u5bfc\u81f4\u7f13\u5b58\u6570\u636e\u4e0e\u6570\u636e\u5e93\u6570\u636e\u4e0d\u4e00\u81f4")),Object(c.b)("hr",{parentName:"blockquote"}),Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u4e1a\u52a1\u573a\u666f")),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u66f4\u65b0\u7684\u6570\u636e\u672a\u5fc5\u6709\u4eba\u4f1a\u8bfb\u53d6"),Object(c.b)("li",{parentName:"ul"},"\u5982\u679c\u7f13\u5b58\u66f4\u65b0\u4f9d\u8d56\u6570\u636e\u5e93\u91cd\u590d\u65e0\u610f\u4e49\u7684\u805a\u5408\u51fd\u6570\u8c03\u7528\uff0c\u76f8\u5f53\u4e8e\u6d6a\u8d39\u8d44\u6e90"))),Object(c.b)("h2",{id:"\u5148\u5220\u9664\u7f13\u5b58\uff0c\u518d\u66f4\u65b0\u6570\u636e\u5e93"},"\u5148\u5220\u9664\u7f13\u5b58\uff0c\u518d\u66f4\u65b0\u6570\u636e\u5e93"),Object(c.b)("blockquote",null,Object(c.b)("ol",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ol"},"\u8bf7\u6c42A ",Object(c.b)("inlineCode",{parentName:"li"},"\u5199")," \u64cd\u4f5c\uff0c\u7b2c\u4e00\u6b65\u5148 ",Object(c.b)("inlineCode",{parentName:"li"},"\u5220\u9664\u7f13\u5b58")),Object(c.b)("li",{parentName:"ol"},"\u8bf7\u6c42B \u67e5\u7f13\u5b58\uff0c\u53d1\u73b0\u4e3a\u7a7a"),Object(c.b)("li",{parentName:"ol"},"\u8bf7\u6c42B \u67e5\u8be2\u6570\u636e\u5e93\uff0c\u5f97\u5230\u65e7\u503c"),Object(c.b)("li",{parentName:"ol"},"\u8bf7\u6c42B \u5c06",Object(c.b)("inlineCode",{parentName:"li"},"\u65e7\u503c"),"\u5199\u5165",Object(c.b)("inlineCode",{parentName:"li"},"\u7f13\u5b58")),Object(c.b)("li",{parentName:"ol"},"\u8bf7\u6c42A \u5c06",Object(c.b)("inlineCode",{parentName:"li"},"\u65b0\u503c"),"\u5199\u5165",Object(c.b)("inlineCode",{parentName:"li"},"\u6570\u636e\u5e93")))),Object(c.b)("h3",{id:"\u5ef6\u65f6\u53cc\u5220\u7b56\u7565"},"\u5ef6\u65f6\u53cc\u5220\u7b56\u7565"),Object(c.b)("blockquote",null,Object(c.b)("ol",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ol"},"\u5148\u5220\u9664\u7f13\u5b58"),Object(c.b)("li",{parentName:"ol"},"\u518d\u5199\u6570\u636e\u5e93"),Object(c.b)("li",{parentName:"ol"},Object(c.b)("strong",{parentName:"li"},"\u4f11\u7720 1 \u79d2\uff0c\u518d\u5220\u9664\u7f13\u5b58"))),Object(c.b)("p",{parentName:"blockquote"},"\u5728\u4f11\u7720\u671f\u95f4\u7f13\u5b58\u4e0e\u6570\u636e\u5e93\u4e0d\u4e00\u81f4"),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\u5982\u4f55\u786e\u5b9a\u4f11\u7720\u65f6\u957f"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u81ea\u884c\u8bc4\u4f30\u81ea\u5df1\u9879\u76ee\u7684\u8bfb\u6570\u636e\u4e1a\u52a1\u903b\u8f91\u8017\u65f6\uff0c\u5199\u6570\u636e\u7684\u4f11\u7720\u65f6\u95f4\u5e94\u5f53\u5728\u8bfb\u6570\u636e\u4e1a\u52a1\u903b\u8f91\u7684\u8017\u65f6\u57fa\u7840\u4e0a\uff0c\u52a0\u51e0\u767ems\u5373\u53ef")))),Object(c.b)("h2",Object(b.a)({parentName:"blockquote"},{id:"\u5982\u679c\u7b2c\u4e8c\u6b21\u5220\u9664\u7f13\u5b58\u5931\u8d25\u600e\u4e48\u529e"}),"\u5982\u679c\u7b2c\u4e8c\u6b21\u5220\u9664\u7f13\u5b58\u5931\u8d25\u600e\u4e48\u529e"),Object(c.b)("ol",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ol"},"\u8bf7\u6c42A\u8fdb\u884c\u5199\u64cd\u4f5c\uff0c\u5148\u5220\u9664\u7f13\u5b58"),Object(c.b)("li",{parentName:"ol"},"\u8bf7\u6c42B\u67e5\u8be2\u53d1\u73b0\u7f13\u5b58\u4e3a\u7a7a"),Object(c.b)("li",{parentName:"ol"},"\u8bf7\u6c42B\u67e5\u8be2\u6570\u636e\u5e93\u5f97\u5230\u65e7\u503c"),Object(c.b)("li",{parentName:"ol"},"\u8bf7\u6c42B\u5c06\u65e7\u503c\u5199\u5165\u7f13\u5b58"),Object(c.b)("li",{parentName:"ol"},"\u8bf7\u6c42A\u5c06\u65b0\u503c\u5199\u5165\u6570\u636e\u5e93"),Object(c.b)("li",{parentName:"ol"},Object(c.b)("strong",{parentName:"li"},"\u8bf7\u6c42A\u5c1d\u8bd5\u5c06\u65b0\u503c\u5199\u5165\u7f13\u5b58\uff0c\u4f46\u5931\u8d25\u4e86"))),Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u89e3\u51b3\uff1a\u5fc5\u987b\u4f7f\u7528\u5176\u4ed6\u7b56\u7565 \uff08\u5148\u66f4\u65b0\u6570\u636e\u5e93\uff0c\u518d\u5220\u9664\u7f13\u5b58\uff09"))),Object(c.b)("h3",{id:"\u4f7f\u7528\u4e86-mysql-\u8bfb\u5199\u5206\u79bb\u67b6\u6784\u7684\u573a\u666f"},"\u4f7f\u7528\u4e86 MySQL \u8bfb\u5199\u5206\u79bb\u67b6\u6784\u7684\u573a\u666f"),Object(c.b)("blockquote",null,Object(c.b)("h2",Object(b.a)({parentName:"blockquote"},{id:"\u53d1\u751f\u6570\u636e\u4e0d\u4e00\u81f4\u7684\u573a\u666f\u518d\u73b0"}),"\u53d1\u751f\u6570\u636e\u4e0d\u4e00\u81f4\u7684\u573a\u666f\u518d\u73b0"),Object(c.b)("ol",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ol"},"\u8bf7\u6c42A \u8fdb\u884c\u4e86\u5199\u64cd\u4f5c\uff0c\u5220\u9664\u7f13\u5b58"),Object(c.b)("li",{parentName:"ol"},"\u8bf7\u6c42A \u5c06\u6570\u636e\u5199\u5165\u6570\u636e\u5e93"),Object(c.b)("li",{parentName:"ol"},"\u8bf7\u6c42B \u67e5\u8be2\u7f13\u5b58\uff0c\u53d1\u73b0\u7f13\u5b58\u4e3a\u7a7a"),Object(c.b)("li",{parentName:"ol"},"\u8bf7\u6c42B \u53bb ",Object(c.b)("inlineCode",{parentName:"li"},"\u4ece\u5e93\u8bfb")," \uff0c\u8fd9\u65f6\uff0c\u8fd8\u6ca1\u6709\u5b8c\u6210\u4e3b\u4ece\u540c\u6b65\uff0c\u56e0\u6b64\u8bfb\u53d6\u5230 ",Object(c.b)("inlineCode",{parentName:"li"},"\u65e7\u503c")),Object(c.b)("li",{parentName:"ol"},"\u8bf7\u6c42B \u5c06\u65e7\u503c\u5199\u5165\u7f13\u5b58"),Object(c.b)("li",{parentName:"ol"},"\u6570\u636e\u5e93\u5b8c\u6210\u4e3b\u4ece\u540c\u6b65\uff0c\u4ece\u5e93\u53d8\u4e3a\u65b0\u503c")),Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u89e3\u51b3\uff1a\u4f9d\u7136\u91c7\u7528 ",Object(c.b)("inlineCode",{parentName:"strong"},"\u5ef6\u8fdf\u53cc\u5220"))),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u7761\u7720\u65f6\u95f4\uff1a\u5728 ",Object(c.b)("inlineCode",{parentName:"li"},"\u4e3b\u4ece\u540c\u6b65")," \u7684\u5ef6\u65f6\u65f6\u95f4\u57fa\u7840\u4e0a\u52a0\u51e0\u767e ms")),Object(c.b)("h2",Object(b.a)({parentName:"blockquote"},{id:"\u91c7\u7528\u5ef6\u65f6\u53cc\u5220\uff0c\u964d\u4f4e\u4e86\u541e\u5410\u91cf\uff0c\u600e\u4e48\u529e\uff08\u5f02\u6b65\u5ef6\u65f6\u53cc\u5220\uff09"}),"\u91c7\u7528\u5ef6\u65f6\u53cc\u5220\uff0c\u964d\u4f4e\u4e86\u541e\u5410\u91cf\uff0c\u600e\u4e48\u529e\uff08\u5f02\u6b65\u5ef6\u65f6\u53cc\u5220\uff09"),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u5c06\u7b2c\u4e8c\u6b21\u5220\u9664\u64cd\u4f5c\u6539\u4e3a ",Object(c.b)("inlineCode",{parentName:"li"},"\u5f02\u6b65"),"\uff0c\u81ea\u5df1\u521b\u5efa\u4e00\u4e2a\u7ebf\u7a0b\uff0c\u5f02\u6b65\u5220\u9664\uff0c\u8fd9\u6837\u5c31\u4e0d\u9700\u8981\u7761\u7720\u4e86"))),Object(c.b)("h2",{id:"\u5148\u66f4\u65b0\u6570\u636e\u5e93\uff0c\u518d\u5220\u9664\u7f13\u5b58\uff08cache-aside-pattern\uff09"},"\u5148\u66f4\u65b0\u6570\u636e\u5e93\uff0c\u518d\u5220\u9664\u7f13\u5b58\uff08Cache-Aside Pattern\uff09"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"Cache-Aside Pattern")," \u4e2d\u6307\u51fa"),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\u5931\u6548\uff1a"),"\u5e94\u7528\u7a0b\u5e8f\u5148\u4ece cache \u4e2d\u53d6\u6570\u636e\uff0c\u6ca1\u6709\u5f97\u5230\uff0c\u5219\u4ece\u6570\u636e\u5e93\u4e2d\u53d6\u6570\u636e\uff0c\u6210\u529f\u540e\uff0c\u653e\u5230\u7f13\u5b58\u4e2d"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\u547d\u4e2d\uff1a"),"\u7a0b\u5e8f\u4ece cache \u4e2d\u53d6\u6570\u636e\uff0c\u53d6\u5230\u540e\u8fd4\u56de"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\u66f4\u65b0\uff1a"),"\u5148\u628a\u6570\u636e\u5b58\u5230\u6570\u636e\u5e93\u4e2d\uff0c\u6210\u529f\u540e\uff0c\u518d\u8ba9\u7f13\u5b58\u5931\u6548")),Object(c.b)("hr",{parentName:"blockquote"}),Object(c.b)("p",{parentName:"blockquote"},"\u5728 FaceBook \u8bba\u6587 ",Object(c.b)("inlineCode",{parentName:"p"},"Scaling Memcache at Facebook")," \u4e2d\u63d0\u51fa\uff0c\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"\u5148\u66f4\u65b0\u6570\u636e\u5e93\u540e\u5220\u9664\u7f13\u5b58")," \u7684\u7b56\u7565"),Object(c.b)("hr",{parentName:"blockquote"}),Object(c.b)("h2",Object(b.a)({parentName:"blockquote"},{id:"\u662f\u5426\u5b58\u5728\u5e76\u53d1\u95ee\u9898"}),"\u662f\u5426\u5b58\u5728\u5e76\u53d1\u95ee\u9898"),Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u4e0d\u5b58\u5728"),"\uff0c\u60c5\u666f\u518d\u73b0\uff1a"),Object(c.b)("ol",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ol"},"\u7f13\u5b58\u521a\u597d\u5931\u6548"),Object(c.b)("li",{parentName:"ol"},"\u8bf7\u6c42A\u67e5\u8be2\u6570\u636e\u5e93\uff0c\u5f97\u5230\u4e00\u4e2a\u65e7\u503c"),Object(c.b)("li",{parentName:"ol"},"\u8bf7\u6c42B\u5c06\u65b0\u503c\u5199\u5165\u6570\u636e\u5e93"),Object(c.b)("li",{parentName:"ol"},"\u8bf7\u6c42B\u5220\u9664\u7f13\u5b58"),Object(c.b)("li",{parentName:"ol"},"\u8bf7\u6c42A\u5c06\u67e5\u5230\u7684\u65e7\u503c\u5199\u5165\u7f13\u5b58")),Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u4e0a\u8ff0\u60c5\u51b5\u4f1a\u4ea7\u751f\u810f\u6570\u636e\uff0c\u4f46\u662f\u53d1\u751f\u6982\u7387\u5f88\u4f4e")),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u56e0\u4e3a\u6b65\u9aa43\u5199\u6570\u636e\u5e93\u6bd4\u6b65\u9aa42\u8bfb\u6570\u636e\u5e93\u66f4\u5feb\uff0c\u624d\u6709\u53ef\u80fd\u8ba9\u6b65\u9aa44\u5148\u4e8e\u6b65\u9aa45\uff0c\u4f46\u662f\u8bfb\u80af\u5b9a\u6bd4\u5199\u5feb"),Object(c.b)("li",{parentName:"ul"},"\u5982\u679c\u4e00\u5b9a\u8981\u89e3\u51b3\uff1a\u8fd8\u662f\u7528\u5ef6\u65f6\u53cc\u5220\uff0c\u53ef\u4ee5\u7528\u5f02\u6b65\u7684"))),Object(c.b)("h2",{id:"\u5982\u679c\u5220\u9664\u7f13\u5b58\u64cd\u4f5c\u5931\u8d25\uff0c\u5982\u4f55\u5904\u7406"},"\u5982\u679c\u5220\u9664\u7f13\u5b58\u64cd\u4f5c\u5931\u8d25\uff0c\u5982\u4f55\u5904\u7406"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u65b9\u6848\u4e00")),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u5c06\u5220\u9664\u5931\u8d25\u7684 ",Object(c.b)("inlineCode",{parentName:"li"},"\u7f13\u5b58\u952e"),"\uff0c\u5b58\u5165 ",Object(c.b)("inlineCode",{parentName:"li"},"\u6d88\u606f\u961f\u5217"),"\uff0c\u7f16\u5199\u4e1a\u52a1\u4ee3\u7801\u5904\u7406\u6d88\u606f\u961f\u5217\u4e2d\u7684\u5185\u5bb9\uff0c\u5728\u540e\u7eed\u7684\u903b\u8f91\u4e2d\u5c1d\u8bd5\u518d\u6b21\u5220\u9664"),Object(c.b)("li",{parentName:"ul"},"\u7f3a\u70b9\uff1a\u4e0e\u4e1a\u52a1\u903b\u8f91\u4ee3\u7801\u8026\u5408\u5ea6\u9ad8")),Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u65b9\u6848\u4e8c")),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u4f7f\u7528\u4e2d\u95f4\u4ef6 \u963f\u91cc ",Object(c.b)("inlineCode",{parentName:"li"},"canal")),Object(c.b)("li",{parentName:"ul"},"\u6309\u7167\u5148\u66f4\u65b0\u6570\u636e\u5e93\uff0c\u518d\u5220\u9664\u7f13\u5b58\u6765\u505a",Object(c.b)("ol",{parentName:"li"},Object(c.b)("li",{parentName:"ol"},"\u5148\u6267\u884c\u66f4\u65b0\u6570\u636e\u5e93\u64cd\u4f5c\uff0c\u4ea7\u751f\u5bf9\u5e94\u7684 MySQL Binlog"),Object(c.b)("li",{parentName:"ol"},"\u57fa\u4e8e canal \u7684 binlog \u8ba2\u9605\u7a0b\u5e8f\uff0c\u63d0\u53d6\u51fa\u64cd\u4f5c\u7684\u6570\u636e\u4ee5\u53ca key"),Object(c.b)("li",{parentName:"ol"},"\u5c1d\u8bd5\u5220\u9664\u7f13\u5b58"),Object(c.b)("li",{parentName:"ol"},"\u57fa\u4e8e canal \u5c06\u6570\u636e\u4e0e key \u5b58\u5165\u6d88\u606f\u961f\u5217"),Object(c.b)("li",{parentName:"ol"},"\u57fa\u4e8e canal \u5904\u7406\u6d88\u606f\u961f\u5217\u4e2d\u7684\u5185\u5bb9\uff0c\u5c1d\u8bd5\u518d\u6b21\u5220\u9664"))))))}p.isMDXComponent=!0}}]);