(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),i=(n(0),n(570)),c={id:"2.hystrixProvider",title:"Hystrix \u652f\u4ed8\u6a21\u5757\u6784\u5efa",hide_title:!0},o={unversionedId:"springcloud/\u5bb9\u9519\u9650\u6d41/hystrix/2.hystrixProvider",id:"springcloud/\u5bb9\u9519\u9650\u6d41/hystrix/2.hystrixProvider",isDocsHomePage:!1,title:"Hystrix \u652f\u4ed8\u6a21\u5757\u6784\u5efa",description:"Hystrix \u652f\u4ed8\u6a21\u5757\u6784\u5efa",source:"@site/docs/springcloud/\u5bb9\u9519\u9650\u6d41/hystrix/2.hystrixProvider.md",slug:"/springcloud/\u5bb9\u9519\u9650\u6d41/hystrix/2.hystrixProvider",permalink:"/docs/springcloud/\u5bb9\u9519\u9650\u6d41/hystrix/2.hystrixProvider",version:"current",sidebar:"someSidebar",previous:{title:"Hystrix \u6982\u8ff0",permalink:"/docs/springcloud/\u5bb9\u9519\u9650\u6d41/hystrix/1.hystrix"},next:{title:"\u9ad8\u5e76\u53d1\u538b\u529b\u6d4b\u8bd5",permalink:"/docs/springcloud/\u5bb9\u9519\u9650\u6d41/hystrix/3.highConcurrentTest"}},p=[{value:"Hystrix \u652f\u4ed8\u6a21\u5757\u6784\u5efa",id:"hystrix-\u652f\u4ed8\u6a21\u5757\u6784\u5efa",children:[]},{value:"cloud-provider-hystrix-payment8001",id:"cloud-provider-hystrix-payment8001",children:[{value:"pom",id:"pom",children:[]},{value:"YAML",id:"yaml",children:[]},{value:"\u4e3b\u542f\u52a8",id:"\u4e3b\u542f\u52a8",children:[]},{value:"\u4e1a\u52a1\u7c7b",id:"\u4e1a\u52a1\u7c7b",children:[{value:"Service \u63a5\u53e3\u4e0e\u5b9e\u73b0\u7c7b",id:"service-\u63a5\u53e3\u4e0e\u5b9e\u73b0\u7c7b",children:[]},{value:"Controller",id:"controller",children:[]}]},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",children:[]}]}],l={rightToc:p};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"hystrix-\u652f\u4ed8\u6a21\u5757\u6784\u5efa"},"Hystrix \u652f\u4ed8\u6a21\u5757\u6784\u5efa"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u9884\u5907\u5de5\u4f5c")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Eureka Server 7001")," \u6062\u590d\u5355\u673a\u7248\uff0c\u6539 YAML \u5b9e\u73b0")))),Object(i.b)("br",null),Object(i.b)("h1",{id:"cloud-provider-hystrix-payment8001"},"cloud-provider-hystrix-payment8001"),Object(i.b)("h2",{id:"pom"},"pom"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u6838\u5fc3\u5b9e\u9645\u4e0a\u5c31\u662f ",Object(i.b)("inlineCode",{parentName:"li"},"hystrix")," \u4f9d\u8d56")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'}),"<dependencies>\n    <dependency>\x3c!-- \u5f15\u7528\u81ea\u5df1\u5b9a\u4e49\u7684api\u901a\u7528\u5305\uff0c\u53ef\u4ee5\u4f7f\u7528Payment\u652f\u4ed8Entity --\x3e\n        <groupId>org.example</groupId>\n        <artifactId>cloud-api-commons</artifactId>\n        <version>1.0-SNAPSHOT</version>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-web</artifactId>\n    </dependency>\n    \x3c!--\u76d1\u63a7--\x3e\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-actuator</artifactId>\n    </dependency>\n    \x3c!--\u70ed\u90e8\u7f72--\x3e\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-devtools</artifactId>\n        <scope>runtime</scope>\n        <optional>true</optional>\n    </dependency>\n    <dependency>\n        <groupId>org.projectlombok</groupId>\n        <artifactId>lombok</artifactId>\n        <optional>true</optional>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-test</artifactId>\n        <scope>test</scope>\n    </dependency>\n    \x3c!-- hystrix--\x3e\n    <dependency>\n        <groupId>org.springframework.cloud</groupId>\n        <artifactId>spring-cloud-starter-netflix-hystrix</artifactId>\n    </dependency>\n    \x3c!--eureka client--\x3e\n    <dependency>\n        <groupId>org.springframework.cloud</groupId>\n        <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>\n    </dependency>\n</dependencies>\n")),Object(i.b)("h2",{id:"yaml"},"YAML"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u7aef\u53e3\u53f7"),Object(i.b)("li",{parentName:"ul"},"\u5e94\u7528\u540d"),Object(i.b)("li",{parentName:"ul"},"\u628a\u81ea\u5df1\u653e\u5230\u54ea\u4e2a\u6ce8\u518c\u4e2d\u5fc3")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="application.yaml"',title:'"application.yaml"'}),"server:\n  port: 8001\n\nspring:\n  application:\n    name: cloud-provider-hystrix-payment\n\neureka:\n  client:\n    register-with-eureka: true\n    fetch-registry: true\n    service-url:\n      #defaultZone: http://localhost:7001/eureka\n      defaultZone: http://eureka7001.com:7001/eureka/ # \u914d\u7f6e\u5728\u672c\u673a\u5668 host \u6587\u4ef6\u91cc\n")),Object(i.b)("h2",{id:"\u4e3b\u542f\u52a8"},"\u4e3b\u542f\u52a8"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"com.bsx.springcloud.PaymentHystrixMain8001"))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"@SpringBootApplication\n@EnableEurekaClient\npublic class PaymentHystrixMain8001 {\n    public static void main(String[] args) {\n        SpringApplication.run(PaymentHystrixMain8001.class, args);\n    }\n}\n")),Object(i.b)("h2",{id:"\u4e1a\u52a1\u7c7b"},"\u4e1a\u52a1\u7c7b"),Object(i.b)("h3",{id:"service-\u63a5\u53e3\u4e0e\u5b9e\u73b0\u7c7b"},"Service \u63a5\u53e3\u4e0e\u5b9e\u73b0\u7c7b"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5b9a\u4e49\u4e24\u4e2a\u65b9\u6cd5",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6b63\u5e38\u65b9\u6cd5"),Object(i.b)("li",{parentName:"ul"},"\u4f1a\u4ea7\u751f\u95ee\u9898\u7684\u65b9\u6cd5")))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u63a5\u53e3"',title:'"\u63a5\u53e3"'}),"public interface PaymentService {\n    String paymentInfo_OK(Integer id);\n\n    String paymentInfo_TimeOut(Integer id);\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u5b9e\u73b0\u7c7b"',title:'"\u5b9e\u73b0\u7c7b"'}),'@Service\npublic class PaymentServiceImpl implements PaymentService {\n    @Override\n    public String paymentInfo_OK(Integer id) {\n        return "\u7ebf\u7a0b\u6c60\uff1a" + Thread.currentThread().getName() +\n                "payment_OK, id\uff1a" + id + "\\tO(\u2229_\u2229)O\u54c8\u54c8~";\n    }\n\n    @Override\n    public String paymentInfo_TimeOut(Integer id) {\n        int timeNum = 3;\n        // \u5f3a\u884c\u77613\u79d2\u949f\n        try {\n            TimeUnit.SECONDS.sleep(timeNum);\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n        return "\u7ebf\u7a0b\u6c60\uff1a" + Thread.currentThread().getName() +\n                "payment_TimeOut, id\uff1a" + id + "\\tO(\u2229_\u2229)O\u54c8\u54c8~ \u8017\u65f6 " + timeNum + " \u79d2\u949f";\n    }\n}\n')),Object(i.b)("h3",{id:"controller"},"Controller"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@RestController\n@Slf4j\npublic class PaymentController {\n    @Value("${server.port}")\n    private String serverPort;\n\n    @Resource\n    private PaymentService paymentService;\n\n    @GetMapping("/payment/hystrix/ok/{id}")\n    public String paymentInfo_OK(@PathVariable("id") Integer id) {\n        return paymentService.paymentInfo_OK(id);\n    }\n\n    @GetMapping("/payment/hystrix/timeout/{id}")\n    public String paymentInfo_TimeOut(@PathVariable("id") Integer id) {\n        return paymentService.paymentInfo_TimeOut(id);\n    }\n}\n')),Object(i.b)("h2",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u542f\u52a8 ",Object(i.b)("inlineCode",{parentName:"p"},"Eureka Server 7001"),"\u3001\u542f\u52a8 ",Object(i.b)("inlineCode",{parentName:"p"},"cloud-provider-hystrix-payment8001"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u8bbf\u95ee ",Object(i.b)("inlineCode",{parentName:"p"},"localhost:8001/payment/hystrix/ok/2")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"\u7ebf\u7a0b\u6c60\uff1ahttp-nio-8001-exec-1payment_OK, id\uff1a2    O(\u2229_\u2229)O\u54c8\u54c8~\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u8bbf\u95ee ",Object(i.b)("inlineCode",{parentName:"p"},"localhost:8001/payment/hystrix/timeout/2")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"\u7ebf\u7a0b\u6c60\uff1ahttp-nio-8001-exec-2payment_TimeOut, id\uff1a2   O(\u2229_\u2229)O\u54c8\u54c8~ \u8017\u65f6 3 \u79d2\u949f\n")))))}d.isMDXComponent=!0},570:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=d(n),s=r,m=u["".concat(c,".").concat(s)]||u[s]||b[s]||i;return n?a.a.createElement(m,o(o({ref:t},l),{},{components:n})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);