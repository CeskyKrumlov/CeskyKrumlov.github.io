(window.webpackJsonp=window.webpackJsonp||[]).push([[322],{378:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),c=(n(0),n(482)),i={id:"6.discovery",title:"\u670d\u52a1\u53d1\u73b0 Discovery",hide_title:!0},o={unversionedId:"springcloud/\u670d\u52a1\u6ce8\u518c\u4e0e\u53d1\u73b0/eureka/6.discovery",id:"springcloud/\u670d\u52a1\u6ce8\u518c\u4e0e\u53d1\u73b0/eureka/6.discovery",isDocsHomePage:!1,title:"\u670d\u52a1\u53d1\u73b0 Discovery",description:"\u670d\u52a1\u53d1\u73b0 Discovery",source:"@site/docs/springcloud/\u670d\u52a1\u6ce8\u518c\u4e0e\u53d1\u73b0/eureka/6.\u670d\u52a1\u53d1\u73b0discovery.md",slug:"/springcloud/\u670d\u52a1\u6ce8\u518c\u4e0e\u53d1\u73b0/eureka/6.discovery",permalink:"/docs/springcloud/\u670d\u52a1\u6ce8\u518c\u4e0e\u53d1\u73b0/eureka/6.discovery",version:"current",sidebar:"someSidebar",previous:{title:"Actuator \u5fae\u670d\u52a1\u4fe1\u606f\u5b8c\u5584",permalink:"/docs/springcloud/\u670d\u52a1\u6ce8\u518c\u4e0e\u53d1\u73b0/eureka/5.actuator"},next:{title:"Eureka \u81ea\u6211\u4fdd\u62a4",permalink:"/docs/springcloud/\u670d\u52a1\u6ce8\u518c\u4e0e\u53d1\u73b0/eureka/7.eurekaSelfProtection"}},l=[{value:"\u670d\u52a1\u53d1\u73b0 Discovery",id:"\u670d\u52a1\u53d1\u73b0-discovery",children:[{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",children:[]}]}],p={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"\u670d\u52a1\u53d1\u73b0-discovery"},"\u670d\u52a1\u53d1\u73b0 Discovery"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u5bf9\u4e8e\u6ce8\u518c\u8fdb Eureka \u91cc\u9762\u7684\u5fae\u670d\u52a1\uff0c\u53ef\u4ee5\u901a\u8fc7\u670d\u52a1\u53d1\u73b0\u6765\u83b7\u53d6\u8be5\u5fae\u670d\u52a1\u7684\u4fe1\u606f")),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u8fd9\u91cc\u662f\u9762\u5411 ",Object(c.b)("inlineCode",{parentName:"li"},"\u5ba2\u6237\u7aef")," \u800c\u8a00\u7684"))),Object(c.b)("br",null),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u6b65\u9aa4")),Object(c.b)("ol",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"provider-payment8001")," \u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"Controller")," \u4e2d\uff0c\u6ce8\u5165 ",Object(c.b)("inlineCode",{parentName:"p"},"org.springframework.cloud.client.discovery.DiscoveryClient")," \u5bf9\u8c61")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"\u5199\u4e00\u4e2a controller \u65b9\u6cd5 ",Object(c.b)("inlineCode",{parentName:"p"},"discover()"),"\uff0c\u8fd4\u56de ",Object(c.b)("inlineCode",{parentName:"p"},"Object")," \u7c7b\u578b\uff0curl \u4e3a ",Object(c.b)("inlineCode",{parentName:"p"},"/payment/discovery")),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u83b7\u53d6 Eureka \u6ce8\u518c\u4e2d\u5fc3\u6240\u6709\u670d\u52a1\u540d\u79f0\u7684\u5217\u8868"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'// \u83b7\u53d6 Eureka \u6ce8\u518c\u4e2d\u5fc3\u4e2d\u7684 \u670d\u52a1\u540d\u79f0\u5217\u8868\nList<String> services = discoveryClient.getServices();\nfor (String service : services) {\n    log.info("********* service: [" + service + "] *********");\n}\n'))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",Object(c.b)("em",{parentName:"p"},"\u5177\u4f53\u670d\u52a1\u540d\u79f0")," \u83b7\u53d6\u5176\u5bf9\u5e94\u7684\u6240\u6709\u8282\u70b9\u5b9e\u4f8b"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'// \u901a\u8fc7\u670d\u52a1\u540d\u83b7\u53d6\u5176\u5bf9\u5e94\u7684\u6240\u6709\u670d\u52a1\u8282\u70b9\nList<ServiceInstance> instances = discoveryClient.getInstances("CLOUD-PAYMENT-SERVICE");\n'))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"Controller")," \u6dfb\u52a0\u7684\u4ee3\u7801"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java",metastring:'title="PaymentController"',title:'"PaymentController"'}),'// ... \u7701\u7565\n@Resource // \u670d\u52a1\u53d1\u73b0 Discovery\nprivate DiscoveryClient discoveryClient;\n\n@GetMapping("/payment/discovery")\npublic Object discovery() {\n    // \u83b7\u53d6 Eureka \u6ce8\u518c\u4e2d\u5fc3\u4e2d\u7684 \u670d\u52a1\u540d\u79f0\u5217\u8868\n    List<String> services = discoveryClient.getServices();\n    for (String service : services) {\n        log.info("********* service: [" + service + "] *********");\n\n    }\n    // \u901a\u8fc7\u670d\u52a1\u540d\u83b7\u53d6\u5176\u5bf9\u5e94\u7684\u6240\u6709\u670d\u52a1\u8282\u70b9\n    List<ServiceInstance> instances = discoveryClient.getInstances("CLOUD-PAYMENT-SERVICE");\n    for (ServiceInstance instance : instances) {\n        // id \u4e3b\u673a\u540d \u7aef\u53e3\u53f7 URI\n        log.info("********* " + instance.getInstanceId() +\n                "\\t" + instance.getHost() +\n                "\\t " + instance.getPort() +\n                "\\t" + instance.getUri() + " *********");\n    }\n    // \u8fd4\u56de\u5f53\u524d\u7684 discoveryClient \u5bf9\u8c61\n    return this.discoveryClient;\n}\n// ... \u7701\u7565\n'))))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"\u5728\u4e3b\u542f\u52a8\u7c7b\u4e0a\u6dfb\u52a0 ",Object(c.b)("inlineCode",{parentName:"p"},"@EnableDiscoveryClient")," \u6ce8\u89e3"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"@SpringBootApplication\n@EnableEurekaClient\n@EnableDiscoveryClient\npublic class PaymentMain8001 {\n    public static void main(String[] args) {\n        SpringApplication.run(PaymentMain8001.class, args);\n    }\n}\n"))))),Object(c.b)("h2",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u91cd\u542f ",Object(c.b)("inlineCode",{parentName:"p"},"cloud-provider-payment8001")," "),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u8bbf\u95ee ",Object(c.b)("inlineCode",{parentName:"li"},"http://localhost:8081/payment/discovery"))),Object(c.b)("pre",{parentName:"blockquote"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "order": 0,\n    "services": [\n        "cloud-order-service",\n        "cloud-payment-service"\n    ]\n}\n')),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u540c\u65f6 ",Object(c.b)("inlineCode",{parentName:"li"},"payment8001")," \u7684\u540e\u53f0\u6253\u5370\u4e86\u76f8\u5173\u65e5\u5fd7\u4fe1\u606f")),Object(c.b)("pre",{parentName:"blockquote"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"})," ********* service: [cloud-order-service] *********\n ********* service: [cloud-payment-service] *********\n ********* payment8001  192.168.0.101    8081   http://192.168.0.101:8081 *********\n ********* payment8002  192.168.0.101    8082   http://192.168.0.101:8082 *********\n"))))}b.isMDXComponent=!0},482:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),m=r,d=s["".concat(i,".").concat(m)]||s[m]||u[m]||c;return n?a.a.createElement(d,o(o({ref:t},p),{},{components:n})):a.a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<c;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);