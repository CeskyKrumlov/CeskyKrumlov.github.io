(window.webpackJsonp=window.webpackJsonp||[]).push([[344],{1096:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/7-8863e5da21e202edcf0d2554b001d49e.png"},1097:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/8-c9bb02d959a3e1cdb08e23f5b42c690d.png"},1098:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/9-b9731ee07de5b1f2872e0b57d975c1ec.png"},1099:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/10-c0575dd64156a100274520a393d035d2.png"},1100:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/11-7cfacc26dcd5fe253e032ca3e2588c4c.png"},400:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),c=(r(0),r(576)),i={id:"8.process",title:"Mybatis\u6267\u884c\u6d41\u7a0b\u5256\u6790",hide_title:!0},o={unversionedId:"mybatis/8.process",id:"mybatis/8.process",isDocsHomePage:!1,title:"Mybatis\u6267\u884c\u6d41\u7a0b\u5256\u6790",description:"Mybatis\u6267\u884c\u6d41\u7a0b\u5256\u6790",source:"@site/docs/mybatis/8.Mybatis\u6267\u884c\u6d41\u7a0b\u5256\u6790.md",slug:"/mybatis/8.process",permalink:"/docs/mybatis/8.process",version:"current",sidebar:"someSidebar",previous:{title:"\u6ce8\u89e3\u5f00\u53d1",permalink:"/docs/mybatis/7.annotation"},next:{title:"\u591a\u5bf9\u4e00",permalink:"/docs/mybatis/9.multiToOne"}},p=[{value:"Mybatis\u6267\u884c\u6d41\u7a0b\u5256\u6790",id:"mybatis\u6267\u884c\u6d41\u7a0b\u5256\u6790",children:[{value:"\u6d41\u7a0b\u56fe",id:"\u6d41\u7a0b\u56fe",children:[]},{value:"xml\u6587\u4ef6\u5bf9\u5e94Mapper\u63a5\u53e3\uff0c\u8fd9\u4e2aMapper\u63a5\u53e3\u7684\u5de5\u4f5c\u539f\u7406\u662f\u4ec0\u4e48",id:"xml\u6587\u4ef6\u5bf9\u5e94mapper\u63a5\u53e3\uff0c\u8fd9\u4e2amapper\u63a5\u53e3\u7684\u5de5\u4f5c\u539f\u7406\u662f\u4ec0\u4e48",children:[]}]}],s={rightToc:p};function l(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"mybatis\u6267\u884c\u6d41\u7a0b\u5256\u6790"},"Mybatis\u6267\u884c\u6d41\u7a0b\u5256\u6790"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Resources\u83b7\u53d6\u52a0\u8f7d\u5168\u5c40\u914d\u7f6e\u6587\u4ef6\uff0c\u5b9e\u4f8b\u5316SqlSessionFactoryBuilder")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'Resources.getResourceAsStream("mybatis-config.xml");\nSqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Build()\u65b9\u6cd5\u89e3\u6790\u914d\u7f6e\u6587\u4ef6\u6d41\uff0c\u8c03\u7528XMLConfigBuilder")),Object(c.b)("img",{src:r(1096).default,style:{zoom:"100%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(c.b)("br",null),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"XMLConfigBuilder\u5bf9\u8c61\u8c03\u7528parse()\u65b9\u6cd5\u89e3\u6790\u4e3aConfiguration\u5bf9\u8c61")),Object(c.b)("img",{src:r(1097).default,style:{zoom:"100%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(c.b)("br",null),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"SqlSessionFactory\u5b9e\u4f8b\u5316")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"SqlSession sqlSession = sqlSessionFactory.openSession();\n")),Object(c.b)("img",{src:r(1098).default,style:{zoom:"100%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(c.b)("br",null),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u83b7\u53d6Transaction\u4e8b\u52a1\u7ba1\u7406\u5668\uff0c\u83b7\u53d6Executor\u6267\u884c\u5668")),Object(c.b)("img",{src:r(1099).default,style:{zoom:"100%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(c.b)("br",null),Object(c.b)("h2",{id:"\u6d41\u7a0b\u56fe"},"\u6d41\u7a0b\u56fe"),Object(c.b)("p",null,Object(c.b)("img",{alt:"image-20200317150213742",src:r(1100).default})),Object(c.b)("h2",{id:"xml\u6587\u4ef6\u5bf9\u5e94mapper\u63a5\u53e3\uff0c\u8fd9\u4e2amapper\u63a5\u53e3\u7684\u5de5\u4f5c\u539f\u7406\u662f\u4ec0\u4e48"},"xml\u6587\u4ef6\u5bf9\u5e94Mapper\u63a5\u53e3\uff0c\u8fd9\u4e2aMapper\u63a5\u53e3\u7684\u5de5\u4f5c\u539f\u7406\u662f\u4ec0\u4e48"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"xml\u6587\u4ef6\u4e2d\u7684",Object(c.b)("inlineCode",{parentName:"li"},"namespace"),"\u503c\u5199\u7684\u5c31\u662fmapper\u63a5\u53e3\u7684\u5168\u9650\u5b9a\u540d"),Object(c.b)("li",{parentName:"ul"},"\u63a5\u53e3\u65b9\u6cd5\u5185\u8bbe\u7f6e\u7684\u53c2\u6570\uff0c\u5c31\u662f\u8981\u4f20\u9012\u7ed9sql\u8bed\u53e5\u7684\u53c2\u6570"),Object(c.b)("li",{parentName:"ul"},"Mapper\u63a5\u53e3\u6ca1\u6709\u5b9e\u73b0\u7c7b"),Object(c.b)("li",{parentName:"ul"},"\u5f53\u8c03\u7528\u63a5\u53e3\u65b9\u6cd5\u65f6\uff0c\u63a5\u53e3\u5168\u9650\u5b9a\u540d+\u65b9\u6cd5\u540d\u62fc\u63a5\u5b57\u7b26\u4e32\u4f5c\u4e3akey\u503c\uff0c\u53ef\u4ee5\u552f\u4e00\u5b9a\u4f4d\u4e00\u4e2aMappedStatement",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"xml\u91cc\u7684select\u3001insert\u6807\u7b7e\u7b49\uff0c\u6bcf\u4e2a\u90fd\u4f1a\u88ab\u89e3\u6790\u4e3a\u4e00\u4e2aMappedStatement\u5bf9\u8c61"))),Object(c.b)("li",{parentName:"ul"},"Mapper\u63a5\u53e3\u4e2d\u7684\u65b9\u6cd5\u4e0d\u80fd\u88ab\u91cd\u8f7d\uff0c\u56e0\u4e3a\u8981\u4f7f\u7528\u63a5\u53e3\u5168\u9650\u5b9a\u540d+\u65b9\u6cd5\u540d\u7684\u65b9\u5f0f",Object(c.b)("strong",{parentName:"li"},"\u552f\u4e00"),"\u786e\u5b9a\u4e00\u4e2aMappedStatement"),Object(c.b)("li",{parentName:"ul"},"Mapper\u63a5\u53e3\u7684\u5de5\u4f5c\u539f\u7406\u662f",Object(c.b)("strong",{parentName:"li"},"JDK\u52a8\u6001\u4ee3\u7406"),"\uff0cMybatis\u8fd0\u884c\u671f\u4f1a\u4f7f\u7528JDK\u52a8\u6001\u4ee3\u7406\u4e3aMapper\u63a5\u53e3\u751f\u6210\u4ee3\u7406\u5bf9\u8c61\uff0c\u4ee3\u7406\u5bf9\u8c61\u4f1a\u62e6\u622a\u63a5\u53e3\u65b9\u6cd5\uff0c\u8f6c\u800c\u6267\u884cMappedStatemnt\u4e2d\u7684SQL\u8bed\u53e5\uff0c\u7136\u540e\u5c06SQL\u6267\u884c\u7ed3\u679c\u8fd4\u56de")))}l.isMDXComponent=!0},576:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||c;return r?a.a.createElement(d,o(o({ref:t},s),{},{components:r})):a.a.createElement(d,o({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<c;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);