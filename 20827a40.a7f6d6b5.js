(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{131:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return b}));var r=t(2),a=t(6),i=(t(0),t(554)),o={id:"2.openFeign",title:"OpenFeign \u670d\u52a1\u8c03\u7528",hide_title:!0},c={unversionedId:"springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/openFeign/2.openFeign",id:"springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/openFeign/2.openFeign",isDocsHomePage:!1,title:"OpenFeign \u670d\u52a1\u8c03\u7528",description:"OpenFeign \u670d\u52a1\u8c03\u7528",source:"@site/docs/springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/openFeign/2.openFeign.md",slug:"/springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/openFeign/2.openFeign",permalink:"/docs/springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/openFeign/2.openFeign",version:"current",sidebar:"someSidebar",previous:{title:"OpenFeign \u6982\u8ff0",permalink:"/docs/springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/openFeign/1.openFeign"},next:{title:"OpenFeign \u8d85\u65f6\u63a7\u5236",permalink:"/docs/springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/openFeign/3.openFeignTimeOut"}},l=[{value:"OpenFeign \u670d\u52a1\u8c03\u7528",id:"openfeign-\u670d\u52a1\u8c03\u7528",children:[]},{value:"POM",id:"pom",children:[]},{value:"application.yaml",id:"applicationyaml",children:[]},{value:"\u4e3b\u542f\u52a8\u7c7b",id:"\u4e3b\u542f\u52a8\u7c7b",children:[]},{value:"\u4e1a\u52a1\u7c7b",id:"\u4e1a\u52a1\u7c7b",children:[]},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",children:[]}],p={rightToc:l};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"openfeign-\u670d\u52a1\u8c03\u7528"},"OpenFeign \u670d\u52a1\u8c03\u7528"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Open Feign \u4f7f\u7528\u6b65\u9aa4")),Object(i.b)("ol",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"\u63a5\u53e3 + \u6ce8\u89e3\uff1a")," ",Object(i.b)("inlineCode",{parentName:"li"},"\u5fae\u670d\u52a1\u8c03\u7528\u63a5\u53e3")," + ",Object(i.b)("inlineCode",{parentName:"li"},"@FeignClient")),Object(i.b)("li",{parentName:"ol"},"\u65b0\u5efa ",Object(i.b)("inlineCode",{parentName:"li"},"cloud-consumer-feign-order80")))),Object(i.b)("br",null),Object(i.b)("h1",{id:"pom"},"POM"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml",metastring:'titl="openFeign\u5750\u6807"',titl:'"openFeign\u5750\u6807"'}),"\x3c!-- openfeign --\x3e\n<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-openfeign</artifactId>\n</dependency>\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml",metastring:'title="\u5b8c\u6574pom\u4f9d\u8d56"',title:'"\u5b8c\u6574pom\u4f9d\u8d56"'}),"<dependencies>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-web</artifactId>\n    </dependency>\n    \x3c!--\u76d1\u63a7--\x3e\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-actuator</artifactId>\n    </dependency>\n    \x3c!--\u70ed\u90e8\u7f72--\x3e\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-devtools</artifactId>\n        <scope>runtime</scope>\n        <optional>true</optional>\n    </dependency>\n    <dependency>\n        <groupId>org.projectlombok</groupId>\n        <artifactId>lombok</artifactId>\n        <optional>true</optional>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-test</artifactId>\n        <scope>test</scope>\n    </dependency>\n    <dependency>\n        <groupId>org.example</groupId>\n        <artifactId>cloud-api-commons</artifactId>\n        <version>1.0-SNAPSHOT</version>\n    </dependency>\n    \x3c!--eureka client--\x3e\n    <dependency>\n        <groupId>org.springframework.cloud</groupId>\n        <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>\n    </dependency>\n    \x3c!-- openfeign --\x3e\n    <dependency>\n        <groupId>org.springframework.cloud</groupId>\n        <artifactId>spring-cloud-starter-openfeign</artifactId>\n    </dependency>\n</dependencies>\n")),Object(i.b)("br",null),Object(i.b)("h1",{id:"applicationyaml"},"application.yaml"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"server:\n  port: 80\n\n#\u8fd9\u91cc\u53ea\u628afeign\u505a\u5ba2\u6237\u7aef\u7528\uff0c\u4e0d\u6ce8\u518c\u8fdbeureka\neureka:\n  client:\n    #\u8868\u793a\u662f\u5426\u5c06\u81ea\u5df1\u6ce8\u518c\u8fdbEurekaServer\u9ed8\u8ba4\u4e3atrue\n    register-with-eureka: false\n    service-url:\n      #defaultZone: http://localhost:7001/eureka\n      defaultZone: http://eureka7001.com:7001/eureka/,http://eureka7002.com:7002/eureka/\n")),Object(i.b)("br",null),Object(i.b)("h1",{id:"\u4e3b\u542f\u52a8\u7c7b"},"\u4e3b\u542f\u52a8\u7c7b"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u6dfb\u52a0\u6ce8\u89e3"),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"@EnableFeignClients"))),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"@SpringBootApplication\n@EnableFeignClients\npublic class OrderFeignMain80 {\n    public static void main(String[] args) {\n        SpringApplication.run(OrderFeignMain80.class, args);\n    }\n}\n"))),Object(i.b)("br",null),Object(i.b)("h1",{id:"\u4e1a\u52a1\u7c7b"},"\u4e1a\u52a1\u7c7b"),Object(i.b)("blockquote",null,Object(i.b)("ol",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ol"},"\u4e1a\u52a1\u903b\u8f91\u63a5\u53e3 + ",Object(i.b)("inlineCode",{parentName:"li"},"@FeignClient")," \u914d\u7f6e\u8c03\u7528 provider \u670d\u52a1"),Object(i.b)("li",{parentName:"ol"},"\u65b0\u5efa ",Object(i.b)("inlineCode",{parentName:"li"},"PaymentFeignService")," \u63a5\u53e3\uff0c\u5e76\u65b0\u589e\u6ce8\u89e3 ",Object(i.b)("inlineCode",{parentName:"li"},"@FeignClient")),Object(i.b)("li",{parentName:"ol"},"\u7f16\u5199 Controller"))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u6b63\u5e38\u521b\u5efa Service \u5c42\u7684\u63a5\u53e3 ",Object(i.b)("inlineCode",{parentName:"strong"},"PaymentFeignService"))),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'@FeignClient(value = "\u8981\u8c03\u7528\u7684\u670d\u52a1\u540d\u79f0"')," \u6ce8\u89e3"),Object(i.b)("li",{parentName:"ul"},"\u7528 ",Object(i.b)("inlineCode",{parentName:"li"},"GetMapping"),"\u3001",Object(i.b)("inlineCode",{parentName:"li"},"PostMapping")," \u6307\u5b9a\u5bf9\u65b9\u5fae\u670d\u52a1 Controller \u66b4\u9732\u7684\u8def\u7531\u5730\u5740\u5373\u53ef\uff08\u76f4\u63a5\u8c03\u5bf9\u65b9 Service \u65b9\u6cd5\u4e5f\u884c\uff09\uff0c\u4e0e Spring MVC \u753b\u98ce\u4e00\u81f4")),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java",metastring:'title="Service \u5c42\u63a5\u53e3"',title:'"Service','\u5c42\u63a5\u53e3"':!0}),'@FeignClient(value = "CLOUD-PAYMENT-SERVICE")\npublic interface PaymentFeignService {\n\n    @GetMapping(value = "/payment/get/{id}")\n    CommonResult<Payment> getPaymentById(@PathVariable("id") Long id);\n}\n'))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Controller")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u6ce8\u5165 Service \u5c42")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u4e66\u5199Controller\u65b9\u6cd5\uff0c\u901a\u8fc7 OpenFeign \u53bb Eureka \u6ce8\u518c\u4e2d\u5fc3\u627e\u5177\u4f53\u5fae\u670d\u52a1\u8282\u70b9\uff0c\u7136\u540e\u8c03\u7528\u8fd9\u4e2a\u8282\u70b9\u7684 Controller \u65b9\u6cd5"))),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@RestController\n@Slf4j\npublic class OrderFeignController {\n\n    @Resource\n    private PaymentFeignService paymentFeignService;\n\n    @GetMapping("/consumer/payment/get/{id}")\n    public CommonResult<Payment> getPaymentById(@PathVariable("id") Long id) {\n        // \u901a\u8fc7 openFeign \u53bb Eureka \u627e\u5fae\u670d\u52a1\uff0c\u8c03\u90a3\u4e2a\u5fae\u670d\u52a1\u7684 Controller \u63a5\u53e3\n        return paymentFeignService.getPaymentById(id);\n    }\n}\n'))),Object(i.b)("br",null),Object(i.b)("h1",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),Object(i.b)("blockquote",null,Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u542f\u52a8 Eureka \u6ce8\u518c\u4e2d\u5fc3\u8282\u70b9 ",Object(i.b)("inlineCode",{parentName:"li"},"7001"),"\u3001",Object(i.b)("inlineCode",{parentName:"li"},"7002")),Object(i.b)("li",{parentName:"ul"},"\u542f\u52a8 ",Object(i.b)("inlineCode",{parentName:"li"},"provider8001"),"\u3001",Object(i.b)("inlineCode",{parentName:"li"},"provider8002")),Object(i.b)("li",{parentName:"ul"},"\u542f\u52a8 ",Object(i.b)("inlineCode",{parentName:"li"},"consumer-feign-order80")),Object(i.b)("li",{parentName:"ul"},"\u8bbf\u95ee ",Object(i.b)("inlineCode",{parentName:"li"},"localhost:80/consumer/payment/get/2")))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:'title="\u54cd\u5e94"',title:'"\u54cd\u5e94"'}),'{\n    "code": 200,\n    "message": "\u67e5\u8be2\u6210\u529f\uff0c\u7aef\u53e3\u53f7: 8081",\n    "data": {\n        "id": 2,\n        "serial": "\u957f\u5927002"\n    }\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u591a\u6b21\u8bbf\u95ee\uff0c\u53ef\u4ee5\u53d1\u73b0\u7aef\u53e3\u53f7\u662f\u8f6e\u8be2\u7684\uff0c",Object(i.b)("inlineCode",{parentName:"li"},"8001"),"\u3001",Object(i.b)("inlineCode",{parentName:"li"},"8002")," \u4ea4\u66ff"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Feign \u81ea\u5e26\u8d1f\u8f7d\u5747\u8861\u914d\u7f6e\u9879"))))}b.isMDXComponent=!0},554:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),b=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=b(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},g=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(t),g=r,m=u["".concat(o,".").concat(g)]||u[g]||d[g]||i;return t?a.a.createElement(m,c(c({ref:n},p),{},{components:t})):a.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=g;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);