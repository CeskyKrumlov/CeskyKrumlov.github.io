(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),l=(n(0),n(565)),b={id:"1.sentinel",title:"Sentinel \u6982\u8ff0",hide_title:!0},i={unversionedId:"springcloudalibaba/\u6d41\u91cf\u536b\u5175/1.sentinel",id:"springcloudalibaba/\u6d41\u91cf\u536b\u5175/1.sentinel",isDocsHomePage:!1,title:"Sentinel \u6982\u8ff0",description:"Sentinel \u6982\u8ff0",source:"@site/docs/springcloudalibaba/\u6d41\u91cf\u536b\u5175/1.sentinel.md",slug:"/springcloudalibaba/\u6d41\u91cf\u536b\u5175/1.sentinel",permalink:"/docs/springcloudalibaba/\u6d41\u91cf\u536b\u5175/1.sentinel",version:"current",sidebar:"someSidebar",previous:{title:"Nacos \u96c6\u7fa4",permalink:"/docs/springcloudalibaba/\u670d\u52a1\u6ce8\u518c\u4e0e\u914d\u7f6e\u4e2d\u5fc3/7.nacosCluster"},next:{title:"Sentinel \u521d\u59cb\u5316\u76d1\u63a7",permalink:"/docs/springcloudalibaba/\u6d41\u91cf\u536b\u5175/2.sentinelDashboard"}},c=[{value:"Sentinel \u6982\u8ff0",id:"sentinel-\u6982\u8ff0",children:[]},{value:"Sentinel \u5b89\u88c5",id:"sentinel-\u5b89\u88c5",children:[]}],o={rightToc:c};function p(e){var t=e.components,b=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,b,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"sentinel-\u6982\u8ff0"},"Sentinel \u6982\u8ff0"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/alibaba/Sentinel/wiki/%E4%BB%8B%E7%BB%8D"}),"github \u5730\u5740")),Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"\u53ef\u7406\u89e3\u4e3a Hystrix \u963f\u91cc\u5df4\u5df4\u7248"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Hystrix\uff1a"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9700\u8981\u5f00\u53d1\u4eba\u5458\u624b\u52a8\u642d\u5efa\u76d1\u63a7\u5e73\u53f0"),Object(l.b)("li",{parentName:"ul"},"\u6ca1\u6709\u4e00\u5957 Web \u754c\u9762\u4f9b\u5f00\u53d1\u8005\u8fdb\u884c\u7ec6\u7c92\u5ea6\u5316\u914d\u7f6e",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6d41\u91cf\u63a7\u5236"),Object(l.b)("li",{parentName:"ul"},"\u901f\u7387\u63a7\u5236"),Object(l.b)("li",{parentName:"ul"},"\u670d\u52a1\u7194\u65ad"),Object(l.b)("li",{parentName:"ul"},"\u670d\u52a1\u964d\u7ea7"))))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Sentinel"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u72ec\u7acb\u7ec4\u4ef6"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u754c\u9762\u5316\u7ec6\u7c92\u5ea6\u7edf\u4e00\u914d\u7f6e"))))),Object(l.b)("blockquote",null,Object(l.b)("h2",Object(a.a)({parentName:"blockquote"},{id:"sentinel-\u662f\u4ec0\u4e48\uff1f"}),"Sentinel \u662f\u4ec0\u4e48\uff1f"),Object(l.b)("p",{parentName:"blockquote"},"\u968f\u7740\u5fae\u670d\u52a1\u7684\u6d41\u884c\uff0c\u670d\u52a1\u548c\u670d\u52a1\u4e4b\u95f4\u7684\u7a33\u5b9a\u6027\u53d8\u5f97\u8d8a\u6765\u8d8a\u91cd\u8981\u3002Sentinel \u4ee5\u6d41\u91cf\u4e3a\u5207\u5165\u70b9\uff0c\u4ece\u6d41\u91cf\u63a7\u5236\u3001\u7194\u65ad\u964d\u7ea7\u3001\u7cfb\u7edf\u8d1f\u8f7d\u4fdd\u62a4\u7b49\u591a\u4e2a\u7ef4\u5ea6\u4fdd\u62a4\u670d\u52a1\u7684\u7a33\u5b9a\u6027\u3002"),Object(l.b)("p",{parentName:"blockquote"},"Sentinel \u5177\u6709\u4ee5\u4e0b\u7279\u5f81:"),Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"\u4e30\u5bcc\u7684\u5e94\u7528\u573a\u666f"),"\uff1aSentinel \u627f\u63a5\u4e86\u963f\u91cc\u5df4\u5df4\u8fd1 10 \u5e74\u7684\u53cc\u5341\u4e00\u5927\u4fc3\u6d41\u91cf\u7684\u6838\u5fc3\u573a\u666f\uff0c\u4f8b\u5982\u79d2\u6740\uff08\u5373\u7a81\u53d1\u6d41\u91cf\u63a7\u5236\u5728\u7cfb\u7edf\u5bb9\u91cf\u53ef\u4ee5\u627f\u53d7\u7684\u8303\u56f4\uff09\u3001\u6d88\u606f\u524a\u5cf0\u586b\u8c37\u3001\u96c6\u7fa4\u6d41\u91cf\u63a7\u5236\u3001\u5b9e\u65f6\u7194\u65ad\u4e0b\u6e38\u4e0d\u53ef\u7528\u5e94\u7528\u7b49\u3002"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"\u5b8c\u5907\u7684\u5b9e\u65f6\u76d1\u63a7"),"\uff1aSentinel \u540c\u65f6\u63d0\u4f9b\u5b9e\u65f6\u7684\u76d1\u63a7\u529f\u80fd\u3002\u60a8\u53ef\u4ee5\u5728\u63a7\u5236\u53f0\u4e2d\u770b\u5230\u63a5\u5165\u5e94\u7528\u7684\u5355\u53f0\u673a\u5668\u79d2\u7ea7\u6570\u636e\uff0c\u751a\u81f3 500 \u53f0\u4ee5\u4e0b\u89c4\u6a21\u7684\u96c6\u7fa4\u7684\u6c47\u603b\u8fd0\u884c\u60c5\u51b5\u3002"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"\u5e7f\u6cdb\u7684\u5f00\u6e90\u751f\u6001"),"\uff1aSentinel \u63d0\u4f9b\u5f00\u7bb1\u5373\u7528\u7684\u4e0e\u5176\u5b83\u5f00\u6e90\u6846\u67b6/\u5e93\u7684\u6574\u5408\u6a21\u5757\uff0c\u4f8b\u5982\u4e0e Spring Cloud\u3001Dubbo\u3001gRPC \u7684\u6574\u5408\u3002\u60a8\u53ea\u9700\u8981\u5f15\u5165\u76f8\u5e94\u7684\u4f9d\u8d56\u5e76\u8fdb\u884c\u7b80\u5355\u7684\u914d\u7f6e\u5373\u53ef\u5feb\u901f\u5730\u63a5\u5165 Sentinel\u3002"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"\u5b8c\u5584\u7684 SPI \u6269\u5c55\u70b9"),"\uff1aSentinel \u63d0\u4f9b\u7b80\u5355\u6613\u7528\u3001\u5b8c\u5584\u7684 SPI \u6269\u5c55\u63a5\u53e3\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u5b9e\u73b0\u6269\u5c55\u63a5\u53e3\u6765\u5feb\u901f\u5730\u5b9a\u5236\u903b\u8f91\u3002\u4f8b\u5982\u5b9a\u5236\u89c4\u5219\u7ba1\u7406\u3001\u9002\u914d\u52a8\u6001\u6570\u636e\u6e90\u7b49\u3002")),Object(l.b)("img",{src:n(745).default,style:{zoom:"100%",boxShadow:"5px 7px 28px #FFFFFF",borderRadius:"10px"}})," ",Object(l.b)("br",null)),Object(l.b)("h1",{id:"sentinel-\u5b89\u88c5"},"Sentinel \u5b89\u88c5"),Object(l.b)("blockquote",null,Object(l.b)("h2",Object(a.a)({parentName:"blockquote"},{id:"\u4e0b\u8f7d"}),"\u4e0b\u8f7d"),Object(l.b)("p",{parentName:"blockquote"},"\u4e0b\u8f7d\u5730\u5740\uff1a",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/alibaba/Sentinel/releases"}),"https://github.com/alibaba/Sentinel/releases")),Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"\u662f\u4e00\u4e2a Jar \u5305"),Object(l.b)("li",{parentName:"ul"},"Sentinel \u5206\u4e3a\u4e24\u4e2a\u90e8\u5206:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6838\u5fc3\u5e93\uff08Java \u5ba2\u6237\u7aef\uff09\u4e0d\u4f9d\u8d56\u4efb\u4f55\u6846\u67b6/\u5e93\uff0c\u80fd\u591f\u8fd0\u884c\u4e8e\u6240\u6709 Java \u8fd0\u884c\u65f6\u73af\u5883\uff0c\u540c\u65f6\u5bf9 Dubbo / Spring Cloud \u7b49\u6846\u67b6\u4e5f\u6709\u8f83\u597d\u7684\u652f\u6301\u3002"),Object(l.b)("li",{parentName:"ul"},"\u63a7\u5236\u53f0\uff08Dashboard\uff09\u57fa\u4e8e Spring Boot \u5f00\u53d1\uff0c\u6253\u5305\u540e\u53ef\u4ee5\u76f4\u63a5\u8fd0\u884c\uff0c\u4e0d\u9700\u8981\u989d\u5916\u7684 Tomcat \u7b49\u5e94\u7528\u5bb9\u5668\u3002")))),Object(l.b)("h2",Object(a.a)({parentName:"blockquote"},{id:"\u542f\u52a8"}),"\u542f\u52a8"),Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"\u672c\u673a\u5df2\u914d\u7f6e JDK8 \u73af\u5883"),Object(l.b)("li",{parentName:"ul"},"8080 \u7aef\u53e3\u6ca1\u6709\u88ab\u5360\u7528",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"java -jar sentinel-dashboard-1.8.0.jar")))),Object(l.b)("li",{parentName:"ul"},"\u82e5\u8981\u6307\u5b9a\u7aef\u53e3\uff0c\u4f7f\u7528\uff1a",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"java -jar sentinel-dashboard-1.8.0.jar --server.port=8888")))),Object(l.b)("li",{parentName:"ul"},"\u8bbf\u95ee ",Object(l.b)("inlineCode",{parentName:"li"},"http://localhost:8080")),Object(l.b)("li",{parentName:"ul"},"\u8d26\u53f7\u5bc6\u7801\u5747\u4e3a ",Object(l.b)("inlineCode",{parentName:"li"},"sentinel")))))}p.isMDXComponent=!0},565:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,O=u["".concat(b,".").concat(m)]||u[m]||s[m]||l;return n?r.a.createElement(O,i(i({ref:t},o),{},{components:n})):r.a.createElement(O,i({ref:t},o))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var o=2;o<l;o++)b[o]=n[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},745:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/1-8549f453f607b774973dd522f253466f.png"}}]);