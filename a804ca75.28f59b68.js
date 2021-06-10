(window.webpackJsonp=window.webpackJsonp||[]).push([[338],{394:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return b}));var r=t(2),i=t(6),a=(t(0),t(561)),c={id:"4.openFeignLog",title:"OpenFeign \u65e5\u5fd7\u589e\u5f3a",hide_title:!0},o={unversionedId:"springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/openFeign/4.openFeignLog",id:"springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/openFeign/4.openFeignLog",isDocsHomePage:!1,title:"OpenFeign \u65e5\u5fd7\u589e\u5f3a",description:"OpenFeign \u65e5\u5fd7\u589e\u5f3a",source:"@site/docs/springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/openFeign/4.openFeignLog.md",slug:"/springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/openFeign/4.openFeignLog",permalink:"/docs/springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/openFeign/4.openFeignLog",version:"current",sidebar:"someSidebar",previous:{title:"OpenFeign \u8d85\u65f6\u63a7\u5236",permalink:"/docs/springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/openFeign/3.openFeignTimeOut"},next:{title:"Hystrix \u6982\u8ff0",permalink:"/docs/springcloud/\u5bb9\u9519\u9650\u6d41/hystrix/1.hystrix"}},l=[{value:"OpenFeign \u65e5\u5fd7\u589e\u5f3a",id:"openfeign-\u65e5\u5fd7\u589e\u5f3a",children:[]},{value:"\u5f00\u542f\u65e5\u5fd7\u589e\u5f3a",id:"\u5f00\u542f\u65e5\u5fd7\u589e\u5f3a",children:[]}],p={rightToc:l};function b(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"openfeign-\u65e5\u5fd7\u589e\u5f3a"},"OpenFeign \u65e5\u5fd7\u589e\u5f3a"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"\u8be6\u7ec6\u6253\u5370 OpenFeign \u8fdc\u7a0b\u670d\u52a1\u8c03\u7528\u7684\u5404\u79cd\u4fe1\u606f")),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"OpenFeign \u652f\u6301\u7684\u65e5\u5fd7\u7ea7\u522b")),Object(a.b)("table",{parentName:"blockquote"},Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u7ea7\u522b"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u542b\u4e49"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"NONE")),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u9ed8\u8ba4\uff1a\u4e0d\u663e\u793a\u4efb\u4f55\u65e5\u5fd7")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"BASIC")),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u4ec5\u8bb0\u5f55\u8bf7\u6c42\u65b9\u6cd5\u3001URL\u3001\u54cd\u5e94\u72b6\u6001\u7801\u53ca\u6267\u884c\u65f6\u95f4")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"HEADERS")),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u9664\u4e86 ",Object(a.b)("inlineCode",{parentName:"td"},"BASIC")," \u4e2d\u5b9a\u4e49\u7684\u4fe1\u606f\u4e4b\u5916\uff0c\u8fd8\u5305\u62ec\u8bf7\u6c42\u548c\u54cd\u5e94\u7684\u5934\u4fe1\u606f")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"FULL")),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u9664\u4e86 ",Object(a.b)("inlineCode",{parentName:"td"},"HEADERS")," \u4e2d\u5b9a\u4e49\u7684\u4fe1\u606f\u4e4b\u5916\uff0c\u8fd8\u6709\u8bf7\u6c42\u548c\u54cd\u5e94\u7684\u6b63\u6587\u53ca\u5143\u6570\u636e"))))),Object(a.b)("br",null),Object(a.b)("h1",{id:"\u5f00\u542f\u65e5\u5fd7\u589e\u5f3a"},"\u5f00\u542f\u65e5\u5fd7\u589e\u5f3a"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u5728 ",Object(a.b)("inlineCode",{parentName:"p"},"consumer-feign-order80")," \u4e2d"),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"\u5b9a\u4e49\u4e00\u4e2a Spring \u914d\u7f6e\u7c7b\uff0c",Object(a.b)("inlineCode",{parentName:"li"},"FeignConfig")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"\u6ce8\u610f\uff1a"),"\u5f15\u5165\u7684\u662f ",Object(a.b)("inlineCode",{parentName:"li"},"feign.Logger"))),Object(a.b)("pre",{parentName:"blockquote"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"@Configuration\npublic class FeignConfig {\n    @Bean\n    Logger.Level feignLoggerLevel() {\n        return Logger.Level.FULL;\n    }\n}\n")),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"application.yaml")," \u6dfb\u52a0\u65e5\u5fd7\u8bbe\u7f6e\uff1a\u6307\u5b9a\u4ee5 ",Object(a.b)("em",{parentName:"li"},"\u4ec0\u4e48\u7ea7\u522b")," \u76d1\u542c ",Object(a.b)("em",{parentName:"li"},"\u54ea\u4e2a\u63a5\u53e3"))),Object(a.b)("pre",{parentName:"blockquote"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"server:\n  port: 80\n\n#\u8fd9\u91cc\u53ea\u628afeign\u505a\u5ba2\u6237\u7aef\u7528\uff0c\u4e0d\u6ce8\u518c\u8fdbeureka\neureka:\n  client:\n    #\u8868\u793a\u662f\u5426\u5c06\u81ea\u5df1\u6ce8\u518c\u8fdbEurekaServer\u9ed8\u8ba4\u4e3atrue\n    register-with-eureka: false\n    service-url:\n      #defaultZone: http://localhost:7001/eureka\n      defaultZone: http://eureka7001.com:7001/eureka/,http://eureka7002.com:7002/eureka/\n\n#\u8bbe\u7f6efeign\u5ba2\u6237\u7aef\u8d85\u65f6\u65f6\u95f4\uff08OpenFeign\u9ed8\u8ba4\u652f\u6301ribbon\uff09\nribbon:\n  #\u6307\u7684\u662f\u5efa\u7acb\u8fde\u63a5\u540e\u4ece\u670d\u52a1\u5668\u8bfb\u53d6\u5230\u53ef\u7528\u8d44\u6e90\u6240\u7528\u7684\u65f6\u95f4\n  ReadTimeout: 5000\n  #\u6307\u7684\u662f\u5efa\u7acb\u8fde\u63a5\u6240\u7528\u7684\u65f6\u95f4\uff0c\u9002\u7528\u4e8e\u7f51\u7edc\u72b6\u51b5\u6b63\u5e38\u7684\u60c5\u51b5\u4e0b\uff0c\u4e24\u7aef\u8fde\u63a5\u6240\u7528\u7684\u5b9e\u9645\n  ConnectTimeout: 5000\n\nlogging:\n  level:\n    #feign\u65e5\u5fd7\u4ee5\u4ec0\u4e48\u7ea7\u522b\u76d1\u63a7\u90a3\u4e2a\u63a5\u53e3\n    com.bsx.springcloud.service.PaymentFeignService: debug\n"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u91cd\u542f\uff0c\u8bbf\u95ee ",Object(a.b)("inlineCode",{parentName:"li"},"http://127.0.0.1:80/consumer/payment/get/2"))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js",metastring:'title="Spring Boot \u540e\u53f0\u65e5\u5fd7"',title:'"Spring',Boot:!0,'\u540e\u53f0\u65e5\u5fd7"':!0}),'2021-01-09 20:23:23.849 DEBUG 49168 --- [p-nio-80-exec-1] c.b.s.service.PaymentFeignService        : [PaymentFeignService#getPaymentById] ---\x3e GET http://CLOUD-PAYMENT-SERVICE/payment/get/2 HTTP/1.1\n2021-01-09 20:23:23.851 DEBUG 49168 --- [p-nio-80-exec-1] c.b.s.service.PaymentFeignService        : [PaymentFeignService#getPaymentById] ---\x3e END HTTP (0-byte body)\n2021-01-09 20:23:24.130  INFO 49168 --- [p-nio-80-exec-1] c.netflix.config.ChainedDynamicProperty  : Flipping property: CLOUD-PAYMENT-SERVICE.ribbon.ActiveConnectionsLimit to use NEXT property: niws.loadbalancer.availabilityFilteringRule.activeConnectionsLimit = 2147483647\n2021-01-09 20:23:24.185  INFO 49168 --- [p-nio-80-exec-1] c.n.u.concurrent.ShutdownEnabledTimer    : Shutdown hook installed for: NFLoadBalancer-PingTimer-CLOUD-PAYMENT-SERVICE\n2021-01-09 20:23:24.186  INFO 49168 --- [p-nio-80-exec-1] c.netflix.loadbalancer.BaseLoadBalancer  : Client: CLOUD-PAYMENT-SERVICE instantiated a LoadBalancer: DynamicServerListLoadBalancer:{NFLoadBalancer:name=CLOUD-PAYMENT-SERVICE,current list of Servers=[],Load balancer stats=Zone stats: {},Server stats: []}ServerList:null\n2021-01-09 20:23:24.201  INFO 49168 --- [p-nio-80-exec-1] c.n.l.DynamicServerListLoadBalancer      : Using serverListUpdater PollingServerListUpdater\n2021-01-09 20:23:24.307  INFO 49168 --- [p-nio-80-exec-1] c.netflix.config.ChainedDynamicProperty  : Flipping property: CLOUD-PAYMENT-SERVICE.ribbon.ActiveConnectionsLimit to use NEXT property: niws.loadbalancer.availabilityFilteringRule.activeConnectionsLimit = 2147483647\n2021-01-09 20:23:24.310  INFO 49168 --- [p-nio-80-exec-1] c.n.l.DynamicServerListLoadBalancer      : DynamicServerListLoadBalancer for client CLOUD-PAYMENT-SERVICE initialized: DynamicServerListLoadBalancer:{NFLoadBalancer:name=CLOUD-PAYMENT-SERVICE,current list of Servers=[192.168.0.101:8081],Load balancer stats=Zone stats: {defaultzone=[Zone:defaultzone;  Instance count:1;   Active connections count: 0;    Circuit breaker tripped count: 0;   Active connections per server: 0.0;]\n},Server stats: [[Server:192.168.0.101:8081;    Zone:defaultZone;   Total Requests:0;   Successive connection failure:0;    Total blackout seconds:0;   Last connection made:Thu Jan 01 08:00:00 CST 1970;  First connection made: Thu Jan 01 08:00:00 CST 1970;    Active Connections:0;   total failure count in last (1000) msecs:0; average resp time:0.0;  90 percentile resp time:0.0;    95 percentile resp time:0.0;    min resp time:0.0;  max resp time:0.0;  stddev resp time:0.0]\n]}ServerList:org.springframework.cloud.netflix.ribbon.eureka.DomainExtractingServerList@367a83c4\n2021-01-09 20:23:24.552 DEBUG 49168 --- [p-nio-80-exec-1] c.b.s.service.PaymentFeignService        : [PaymentFeignService#getPaymentById] <--- HTTP/1.1 200 (701ms)\n2021-01-09 20:23:24.552 DEBUG 49168 --- [p-nio-80-exec-1] c.b.s.service.PaymentFeignService        : [PaymentFeignService#getPaymentById] connection: keep-alive\n2021-01-09 20:23:24.553 DEBUG 49168 --- [p-nio-80-exec-1] c.b.s.service.PaymentFeignService        : [PaymentFeignService#getPaymentById] content-type: application/json\n2021-01-09 20:23:24.553 DEBUG 49168 --- [p-nio-80-exec-1] c.b.s.service.PaymentFeignService        : [PaymentFeignService#getPaymentById] date: Sat, 09 Jan 2021 12:23:24 GMT\n2021-01-09 20:23:24.553 DEBUG 49168 --- [p-nio-80-exec-1] c.b.s.service.PaymentFeignService        : [PaymentFeignService#getPaymentById] keep-alive: timeout=60\n2021-01-09 20:23:24.553 DEBUG 49168 --- [p-nio-80-exec-1] c.b.s.service.PaymentFeignService        : [PaymentFeignService#getPaymentById] transfer-encoding: chunked\n2021-01-09 20:23:24.553 DEBUG 49168 --- [p-nio-80-exec-1] c.b.s.service.PaymentFeignService        : [PaymentFeignService#getPaymentById] \n2021-01-09 20:23:24.555 DEBUG 49168 --- [p-nio-80-exec-1] c.b.s.service.PaymentFeignService        : [PaymentFeignService#getPaymentById] {"code":200,"message":"\u67e5\u8be2\u6210\u529f\uff0c\u7aef\u53e3\u53f7: 8081","data":{"id":2,"serial":"\u957f\u5927002"}}\n2021-01-09 20:23:24.555 DEBUG 49168 --- [p-nio-80-exec-1] c.b.s.service.PaymentFeignService        : [PaymentFeignService#getPaymentById] <--- END HTTP (92-byte body)\n2021-01-09 20:23:25.205  INFO 49168 --- [erListUpdater-0] c.netflix.config.ChainedDynamicProperty  : Flipping property: CLOUD-PAYMENT-SERVICE.ribbon.ActiveConnectionsLimit to use NEXT property: niws.loadbalancer.availabilityFilteringRule.activeConnectionsLimit = 2147483647\n')))}b.isMDXComponent=!0},561:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return u}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),b=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=b(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},g=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(t),g=r,u=s["".concat(c,".").concat(g)]||s[g]||m[g]||a;return t?i.a.createElement(u,o(o({ref:n},p),{},{components:t})):i.a.createElement(u,o({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=g;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<a;p++)c[p]=t[p];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);