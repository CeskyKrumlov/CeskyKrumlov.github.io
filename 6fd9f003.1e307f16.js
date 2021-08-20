(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{284:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),b=(n(0),n(565)),c={id:"2.ribbonLB",title:"Ribbon \u8d1f\u8f7d\u5747\u8861",hide_title:!0},i={unversionedId:"springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/ribbon/2.ribbonLB",id:"springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/ribbon/2.ribbonLB",isDocsHomePage:!1,title:"Ribbon \u8d1f\u8f7d\u5747\u8861",description:"Ribbon \u8d1f\u8f7d\u5747\u8861",source:"@site/docs/springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/ribbon/2.ribbonLB.md",slug:"/springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/ribbon/2.ribbonLB",permalink:"/docs/springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/ribbon/2.ribbonLB",version:"current",sidebar:"someSidebar",previous:{title:"Ribbon \u6982\u8ff0",permalink:"/docs/springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/ribbon/1.ribbon"},next:{title:"\u8f6e\u8be2\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5",permalink:"/docs/springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/ribbon/3.roundRobin"}},o=[{value:"Ribbon \u8d1f\u8f7d\u5747\u8861",id:"ribbon-\u8d1f\u8f7d\u5747\u8861",children:[]},{value:"Ribbon \u81ea\u5e26\u8d1f\u8f7d\u5747\u8861\u7b56\u7565",id:"ribbon-\u81ea\u5e26\u8d1f\u8f7d\u5747\u8861\u7b56\u7565",children:[]},{value:"\u66f4\u6539\u8d1f\u8f7d\u5747\u8861\u7b56\u7565",id:"\u66f4\u6539\u8d1f\u8f7d\u5747\u8861\u7b56\u7565",children:[]}],l={rightToc:o};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"ribbon-\u8d1f\u8f7d\u5747\u8861"},"Ribbon \u8d1f\u8f7d\u5747\u8861"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Ribbon \u4e2d\u5b9a\u4e49\u4e86\u4e00\u4e2a ",Object(b.b)("inlineCode",{parentName:"p"},"IRule")," \u63a5\u53e3"),Object(b.b)("pre",{parentName:"blockquote"},Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"package com.netflix.loadbalancer;\n\npublic interface IRule {\n    Server choose(Object var1);\n\n    void setLoadBalancer(ILoadBalancer var1);\n\n    ILoadBalancer getLoadBalancer();\n}\n")),Object(b.b)("p",{parentName:"blockquote"},"\u663e\u7136\uff0c\u5176\u7528\u6765\u9009\u62e9\u5177\u4f53\u7684\u8d1f\u8f7d\u5747\u8861\u7b56\u7565")),Object(b.b)("br",null),Object(b.b)("h1",{id:"ribbon-\u81ea\u5e26\u8d1f\u8f7d\u5747\u8861\u7b56\u7565"},"Ribbon \u81ea\u5e26\u8d1f\u8f7d\u5747\u8861\u7b56\u7565"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"IRule")," \u5728 Ribbon \u4e2d\u5b58\u5728\u7684 ",Object(b.b)("inlineCode",{parentName:"strong"},"7")," \u4e2a\u5b9e\u73b0\u7c7b\uff1a")),Object(b.b)("table",{parentName:"blockquote"},Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5b9e\u73b0\u7c7b"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u8d1f\u8f7d\u5747\u8861\u7b56\u7565"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"com.netfix.loadbalancer.RoundRobinRule")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u8f6e\u8be2")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"com.netfix.loadbalancer.RandomRule")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u968f\u673a")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"com.netfix.loadbalancer.RetryRule")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5148\u6309\u7167 ",Object(b.b)("inlineCode",{parentName:"td"},"\u8f6e\u8be2")," \u83b7\u53d6\u670d\u52a1\uff0c\u5982\u679c\u83b7\u53d6\u670d\u52a1\u5931\u8d25\u5219\u5728\u6307\u5b9a\u65f6\u95f4\u5185\u8fdb\u884c\u91cd\u8bd5\uff0c\u83b7\u53d6\u53ef\u7528\u670d\u52a1")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"WeightedResponseTimeRule")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5bf9 ",Object(b.b)("inlineCode",{parentName:"td"},"\u8f6e\u8be2")," \u7684\u6269\u5c55\uff0c\u54cd\u5e94\u901f\u5ea6\u8d8a\u5feb\u7684\u5b9e\u4f8b\u9009\u62e9\u53bb\u90a3\u79cd\u8d8a\u5927\uff0c\u8d8a\u5bb9\u6613\u88ab\u9009\u62e9")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"BestAvailableRule")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u4f1a\u5148\u8fc7\u6ee4\u6389\u7531\u4e8e\u591a\u6b21\u8bbf\u95ee\u6545\u969c\u4ece\u800c\u5904\u4e8e\u65ad\u8def\u5668\u8df3\u95f8\u72b6\u6001\u7684\u670d\u52a1\uff0c\u7136\u540e\u9009\u62e9\u4e00\u4e2a\u5e76\u53d1\u91cf\u6700\u5c0f\u7684\u670d\u52a1")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"AvailabilityFilteringRule")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5148\u8fc7\u6ee4\u6389\u6545\u969c\u5b9e\u4f8b\uff0c\u518d\u9009\u62e9\u5e76\u53d1\u8f83\u5c0f\u7684\u5b9e\u4f8b")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"ZoneAvoidanceRule")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u590d\u5408\u5224\u65ad ",Object(b.b)("inlineCode",{parentName:"td"},"server")," \u6240\u5728\u533a\u57df\u7684\u6027\u80fd\u548c ",Object(b.b)("inlineCode",{parentName:"td"},"server")," \u7684\u53ef\u7528\u6027\u9009\u62e9\u670d\u52a1\u5668"))))),Object(b.b)("br",null),Object(b.b)("h1",{id:"\u66f4\u6539\u8d1f\u8f7d\u5747\u8861\u7b56\u7565"},"\u66f4\u6539\u8d1f\u8f7d\u5747\u8861\u7b56\u7565"),Object(b.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(b.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(b.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"\u6ce8\u610f")),Object(b.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"\u81ea\u5b9a\u4e49\u914d\u7f6e\u7c7b\u4e0d\u80fd\u653e\u5728 ",Object(b.b)("inlineCode",{parentName:"p"},"@ComponentScan")," \u6240\u626b\u63cf\u7684\u5f53\u524d\u5305\u53ca\u5176\u5b50\u5305\u4e0b\uff0c\u5426\u5219\u81ea\u5b9a\u4e49\u914d\u7f6e\u4f1a\u88ab\u6240\u6709 Ribbon \u5ba2\u6237\u7aef\u5171\u4eab\uff0c\u8fbe\u4e0d\u5230\u7279\u6b8a\u5316\u5b9a\u5236\u7684\u76ee\u7684"))),Object(b.b)("div",{className:"admonition admonition-info alert alert--info"},Object(b.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u63d0\u793a")),Object(b.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"\u5148\u6062\u590d\u73af\u5883"),Object(b.b)("ul",{parentName:"div"},Object(b.b)("li",{parentName:"ul"},"\u4f7f\u7528 Eureka \u4f5c\u4e3a\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\uff0c\u6062\u590d\u4e3a Eureka Server \u96c6\u7fa4\uff0c\u5f00\u542f\u4fdd\u62a4\u6a21\u5f0f\uff0c\u6062\u590d\u9ed8\u8ba4\u5fc3\u8df3\u65f6\u95f4\uff0c\u8d85\u65f6\u65f6\u95f4"),Object(b.b)("li",{parentName:"ul"},"\u5c06 ",Object(b.b)("inlineCode",{parentName:"li"},"8001"),"\u3001",Object(b.b)("inlineCode",{parentName:"li"},"8002")," \u90fd\u6ce8\u518c\u5230\u6ce8\u518c\u4e2d\u5fc3")))),Object(b.b)("p",null,"\u5728SpringBoot\u4e2d\uff0c\u9ed8\u8ba4 ",Object(b.b)("inlineCode",{parentName:"p"},"@ComponentScan")," \u626b\u7684\u5c31\u662f ",Object(b.b)("strong",{parentName:"p"},"\u4e3b\u542f\u52a8\u7c7b")," \u6240\u5728\u7684\u5305\u53ca\u5176\u5b50\u5305\uff0c\u56e0\u6b64\uff0c\u8981\u8df3\u5230\u4e3b\u542f\u52a8\u7c7b\u6240\u5728\u5305\u5916\u9762\u53bb\u5efa\u4e00\u4e2a\u65b0\u5305"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"\u5728 ",Object(b.b)("inlineCode",{parentName:"strong"},"order80")," \u65b0\u5efa ",Object(b.b)("inlineCode",{parentName:"strong"},"com.bsx.myrule")," \u5305")),Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u65b0\u5efa ",Object(b.b)("inlineCode",{parentName:"p"},"MySelfRule")," \u8d1f\u8f7d\u5747\u8861\u89c4\u5219\u7c7b\uff0c\u5176\u5b9e\u4e00\u4e2a Spring \u914d\u7f6e\u7c7b"),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"/**\n * \u81ea\u5b9a\u4e49 Ribbon \u8d1f\u8f7d\u5747\u8861\u89c4\u5219\n */\n@Configuration\npublic class MySelfRule {\n    @Bean\n    public IRule myRule() {\n        return new RandomRule(); // \u968f\u673a\u8282\u70b9\u7b56\u7565\n    }\n}\n"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"\u5728\u4e3b\u542f\u52a8\u7c7b\u6dfb\u52a0 ",Object(b.b)("inlineCode",{parentName:"strong"},"@RibbonClient")," \u6ce8\u89e3")),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"name"),"\uff1a",Object(b.b)("inlineCode",{parentName:"li"},"CLOUD-PAYMENT-SERVICE"),"\uff0cEureka Server \u4e2d\u7684\u670d\u52a1\u540d"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"configuration"),"\uff1a\u586b\u5199\u81ea\u5b9a\u4e49\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u7c7b ",Object(b.b)("inlineCode",{parentName:"li"},"MySelfRule.class"))),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@SpringBootApplication\n@EnableEurekaClient\n@RibbonClient(name = "CLOUD-PAYMENT-SERVICE", configuration = MySelfRule.class)\npublic class OrderMain80 {\n    public static void main(String[] args) {\n        SpringApplication.run(OrderMain80.class, args);\n    }\n}\n'))))),Object(b.b)("p",null,"\u6b64\u65f6\uff0c\u591a\u6b21\u8bbf\u95ee ",Object(b.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:80/consumer/payment/get/2"),"\uff0c\u4f1a\u53d1\u73b0\u7aef\u53e3\u53f7\u968f\u673a\u53d8\u5316"))}p.isMDXComponent=!0},565:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(n),O=a,j=d["".concat(c,".").concat(O)]||d[O]||m[O]||b;return n?r.a.createElement(j,i(i({ref:t},l),{},{components:n})):r.a.createElement(j,i({ref:t},l))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,c=new Array(b);c[0]=O;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<b;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);