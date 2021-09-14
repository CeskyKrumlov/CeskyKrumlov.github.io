(window.webpackJsonp=window.webpackJsonp||[]).push([[315],{1042:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/2-b6008d69e44b49d28e253a5b6ae995be.png"},1043:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/3-1a436f885c3d3a0eae2adbda8ece9283.png"},372:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),o=(n(0),n(570)),i={id:"3.gatewayConstruct",title:"Gateway \u8def\u7531\u914d\u7f6e",hide_title:!0},c={unversionedId:"springcloud/\u670d\u52a1\u7f51\u5173/springcloudgateway/3.gatewayConstruct",id:"springcloud/\u670d\u52a1\u7f51\u5173/springcloudgateway/3.gatewayConstruct",isDocsHomePage:!1,title:"Gateway \u8def\u7531\u914d\u7f6e",description:"Gateway \u642d\u5efa",source:"@site/docs/springcloud/\u670d\u52a1\u7f51\u5173/springcloudgateway/3.gateway\u642d\u5efa.md",slug:"/springcloud/\u670d\u52a1\u7f51\u5173/springcloudgateway/3.gatewayConstruct",permalink:"/docs/springcloud/\u670d\u52a1\u7f51\u5173/springcloudgateway/3.gatewayConstruct",version:"current",sidebar:"someSidebar",previous:{title:"Spring Cloud Gateway \u5de5\u4f5c\u6d41\u7a0b",permalink:"/docs/springcloud/\u670d\u52a1\u7f51\u5173/springcloudgateway/2.gatewayWorkFlow"},next:{title:"Predicate \u65ad\u8a00",permalink:"/docs/springcloud/\u670d\u52a1\u7f51\u5173/springcloudgateway/4.predicate"}},l=[{value:"Gateway \u642d\u5efa",id:"gateway-\u642d\u5efa",children:[{value:"POM",id:"pom",children:[]},{value:"YAML",id:"yaml",children:[]},{value:"\u4e3b\u542f\u52a8\u7c7b",id:"\u4e3b\u542f\u52a8\u7c7b",children:[]}]},{value:"\u8def\u7531\u6620\u5c04",id:"\u8def\u7531\u6620\u5c04",children:[{value:"YAML",id:"yaml-1",children:[]},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",children:[]}]},{value:"\u8def\u7531\u7f51\u5173\u7684\u4e24\u79cd\u914d\u7f6e\u65b9\u5f0f",id:"\u8def\u7531\u7f51\u5173\u7684\u4e24\u79cd\u914d\u7f6e\u65b9\u5f0f",children:[]},{value:"\u52a8\u6001\u8def\u7531\u914d\u7f6e",id:"\u52a8\u6001\u8def\u7531\u914d\u7f6e",children:[{value:"YAML",id:"yaml-2",children:[]},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5-1",children:[]}]}],b={rightToc:l};function p(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"gateway-\u642d\u5efa"},"Gateway \u642d\u5efa"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"cloud-gateway-gateway9527")))),Object(o.b)("h2",{id:"pom"},"POM"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u6838\u5fc3\u662f ",Object(o.b)("inlineCode",{parentName:"li"},"gateway")," \u548c ",Object(o.b)("inlineCode",{parentName:"li"},"eureka-client"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),"\x3c!--gateway--\x3e\n<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-gateway</artifactId>\n</dependency>\n\x3c!--eureka client--\x3e\n<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>\n</dependency>\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u63d0\u793a")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u4e0d\u8981\u5f15\u5165 springboot web \u548c actuator\uff0c\u5426\u5219 Spring Cloud Gateway \u4f1a\u62a5\u9519"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:'title="\u5b8c\u6574pom\u4f9d\u8d56"',title:'"\u5b8c\u6574pom\u4f9d\u8d56"'}),"<dependencies>\n    <dependency>\x3c!-- \u5f15\u7528\u81ea\u5df1\u5b9a\u4e49\u7684api\u901a\u7528\u5305\uff0c\u53ef\u4ee5\u4f7f\u7528Payment\u652f\u4ed8Entity --\x3e\n        <groupId>org.example</groupId>\n        <artifactId>cloud-api-commons</artifactId>\n        <version>1.0-SNAPSHOT</version>\n    </dependency>\n    \x3c!--gateway--\x3e\n    <dependency>\n        <groupId>org.springframework.cloud</groupId>\n        <artifactId>spring-cloud-starter-gateway</artifactId>\n    </dependency>\n    \x3c!--eureka client--\x3e\n    <dependency>\n        <groupId>org.springframework.cloud</groupId>\n        <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>\n    </dependency>\n    \x3c!--\u70ed\u90e8\u7f72--\x3e\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-devtools</artifactId>\n        <scope>runtime</scope>\n        <optional>true</optional>\n    </dependency>\n    <dependency>\n        <groupId>org.projectlombok</groupId>\n        <artifactId>lombok</artifactId>\n        <optional>true</optional>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-test</artifactId>\n        <scope>test</scope>\n    </dependency>\n</dependencies>\n")),Object(o.b)("h2",{id:"yaml"},"YAML"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="application.yaml"',title:'"application.yaml"'}),"server:\n  port: 9527\n\nspring:\n  application:\n    name: cloud-gateway\n\neureka:\n  instance:\n    hostname: cloud-gateway-service\n  client:\n    fetch-registry: true\n    register-with-eureka: true\n    service-url:\n      defaultZone: http://eureka7001.com:7001/eureka/ # \u4ece\u672c\u673a host \u8bfb\u53d6 ip \u5730\u5740\n")),Object(o.b)("h2",{id:"\u4e3b\u542f\u52a8\u7c7b"},"\u4e3b\u542f\u52a8\u7c7b"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"@SpringBootApplication\n@EnableEurekaClient\npublic class GatewayMain9527 {\n    public static void main(String[] args) {\n        SpringApplication.run(GatewayMain9527.class, args);\n    }\n}\n")),Object(o.b)("br",null),Object(o.b)("h1",{id:"\u8def\u7531\u6620\u5c04"},"\u8def\u7531\u6620\u5c04"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"9527 \u7f51\u5173\u5982\u4f55\u505a\u8def\u7531\u6620\u5c04")),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"cloud-provider-payment8001")," \u67e5\u770b ",Object(o.b)("inlineCode",{parentName:"p"},"controller")," \u7684\u8def\u7531"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:'title="8001 \u5fae\u670d\u52a1\u7684 Controller \u63a5\u53e3"',title:'"8001',"\u5fae\u670d\u52a1\u7684":!0,Controller:!0,'\u63a5\u53e3"':!0}),'@GetMapping("/payment/get/{id}")\npublic CommonResult<Payment> getPaymentById(@PathVariable("id") Long id) {\n    Payment payment = paymentService.getPaymentById(id);\n    return payment != null ? new CommonResult<>(200, "\u67e5\u8be2\u6210\u529f\uff0c\u7aef\u53e3\u53f7: " + serverPort, payment) :\n            new CommonResult<>(444, "\u67e5\u8be2\u5931\u8d25", null);\n}\n\n@GetMapping("/payment/lb")\npublic String getPaymentLB() {\n    return serverPort;\n}\n'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u4e0d\u5e0c\u671b\u76f4\u63a5\u66b4\u9732 ",Object(o.b)("inlineCode",{parentName:"p"},"8001"),"\uff0c\u5e0c\u671b\u5728\u5916\u9762\u5957\u4e00\u5c42\u7f51\u5173 ",Object(o.b)("inlineCode",{parentName:"p"},"9527"))))),Object(o.b)("h2",{id:"yaml-1"},"YAML"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u6dfb\u52a0 Spring Cloud Gateway \u8def\u7531\u914d\u7f6e"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"\u56e0\u4e3a\u6211\u7684 8001 \u9879\u76ee\u7aef\u53e3\u5199\u9519\u4e86\uff0c\u5199\u6210\u4e86 ",Object(o.b)("inlineCode",{parentName:"strong"},"8081")," \uff0c\u56e0\u6b64\u5c06\u9519\u5c31\u9519\u914d\u7f6e\u6210 ",Object(o.b)("inlineCode",{parentName:"strong"},"8081")))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="\u6dfb\u52a0\u4e86\u7f51\u5173\u914d\u7f6e\u7684YAML"',title:'"\u6dfb\u52a0\u4e86\u7f51\u5173\u914d\u7f6e\u7684YAML"'}),"server:\n  port: 9527\n\nspring:\n  application:\n    name: cloud-gateway\n  cloud:\n    gateway:\n      discovery:\n        locator:\n          enabled: true # \u5f00\u542f\u4ece\u6ce8\u518c\u4e2d\u5fc3\u52a8\u6001\u521b\u5efa\u8def\u7531\u7684\u529f\u80fd\uff0c\u5229\u7528\u5fae\u670d\u52a1\u540d\u79f0\u8fdb\u884c\u8def\u7531\n      routes:\n        - id: payment_route # \u8def\u7531\u7684id,\u6ca1\u6709\u89c4\u5b9a\u89c4\u5219\u4f46\u8981\u6c42\u552f\u4e00,\u5efa\u8bae\u914d\u5408\u670d\u52a1\u540d\n          #\u5339\u914d\u540e\u63d0\u4f9b\u670d\u52a1\u7684\u8def\u7531\u5730\u5740\n          uri: http://localhost:8081\n          predicates:\n            - Path=/payment/get/** # \u65ad\u8a00\uff0c\u8def\u5f84\u76f8\u5339\u914d\u7684\u8fdb\u884c\u8def\u7531 \u6839\u636e8001\u7684Controller\u5199\u7684\n\n        - id: payment_route2\n          uri: http://localhost:8081\n          predicates:\n            - Path=/payment/lb/** #\u65ad\u8a00,\u8def\u5f84\u76f8\u5339\u914d\u7684\u8fdb\u884c\u8def\u7531 \u6839\u636e8001\u7684Controller\u5199\u7684\n\neureka:\n  instance:\n    hostname: cloud-gateway-service\n  client:\n    fetch-registry: true\n    register-with-eureka: true\n    service-url:\n      defaultZone: http://eureka7001.com:7001/eureka/\n")),Object(o.b)("h2",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u542f\u52a8 ",Object(o.b)("inlineCode",{parentName:"li"},"7001"),"\u3001\u542f\u52a8 ",Object(o.b)("inlineCode",{parentName:"li"},"8001")),Object(o.b)("li",{parentName:"ul"},"\u542f\u52a8 ",Object(o.b)("inlineCode",{parentName:"li"},"9257")," \u7f51\u5173"),Object(o.b)("li",{parentName:"ul"},"\u8bbf\u95ee Eureka Server \u6ce8\u518c\u4e2d\u5fc3\uff0c\u53ef\u4ee5\u770b\u5230 ",Object(o.b)("inlineCode",{parentName:"li"},"8001")," \u548c ",Object(o.b)("inlineCode",{parentName:"li"},"9527")," \u7f51\u5173\u90fd\u6ce8\u518c\u5230\u4e86\u6ce8\u518c\u4e2d\u5fc3")),Object(o.b)("img",{src:n(1042).default,style:{zoom:"100%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(o.b)("br",null),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u8bbf\u95ee ",Object(o.b)("inlineCode",{parentName:"li"},"http://localhost:8081/payment/get/2")," \u53ef\u4ee5\u6b63\u5e38\u5f97\u5230\u76f8\u5e94"),Object(o.b)("li",{parentName:"ul"},"\u8bbf\u95ee ",Object(o.b)("inlineCode",{parentName:"li"},"http://localhost:9527/payment/get/2"),"\uff0c\u53ef\u4ee5\u83b7\u5f97\u76f8\u540c\u7684\u54cd\u5e94\uff0c\u7f51\u5173\u5c06\u8def\u7531\u4ece ",Object(o.b)("inlineCode",{parentName:"li"},"9527")," \u6620\u5c04\u5230\u4e86 ",Object(o.b)("inlineCode",{parentName:"li"},"8081"))),Object(o.b)("img",{src:n(1043).default,style:{zoom:"50%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("h1",{id:"\u8def\u7531\u7f51\u5173\u7684\u4e24\u79cd\u914d\u7f6e\u65b9\u5f0f"},"\u8def\u7531\u7f51\u5173\u7684\u4e24\u79cd\u914d\u7f6e\u65b9\u5f0f"),Object(o.b)("blockquote",null,Object(o.b)("ol",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ol"},"\u5728 ",Object(o.b)("inlineCode",{parentName:"li"},"application.yaml")," \u4e2d\u914d\u7f6e"),Object(o.b)("li",{parentName:"ol"},"\u4ee3\u7801\u6ce8\u5165 ",Object(o.b)("inlineCode",{parentName:"li"},"RouteLocator")," \u7684 ",Object(o.b)("inlineCode",{parentName:"li"},"Bean")))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"\u6848\u4f8b")),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"\u5229\u7528\u672c\u5730 ",Object(o.b)("inlineCode",{parentName:"li"},"9527")," \u7f51\u5173\uff0c\u5c06\u672c\u5730\u8def\u7531\u6620\u5c04\u5230 ",Object(o.b)("inlineCode",{parentName:"li"},"\u767e\u5ea6\u65b0\u95fb")," \u7684\u516c\u5f00\u4e07\u7ef4\u7f51\u7f51\u5740\u4e0a"),Object(o.b)("li",{parentName:"ul"},"\u91c7\u7528\u5199\u914d\u7f6e\u7c7b\u6ce8\u5165 ",Object(o.b)("inlineCode",{parentName:"li"},"Bean")," \u7684\u65b9\u5f0f"))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"GatewayConfig"))),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Configuration\npublic class GatewayConfig {\n    /**\n     * \u914d\u7f6e\u4e86\u4e00\u4e2aid\u4e3aroute-name\u7684\u8def\u7531\u89c4\u5219\n     * \u5f53\u8bbf\u95ee\u5730\u5740 http://localhost:9527/guonei\u65f6\u4f1a\u81ea\u52a8\u8f6c\u53d1\u5230\u5730\u5740\uff1a http://news.baidu.com/guonei\n     *\n     * @param builder\n     * @return\n     */\n    @Bean\n    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {\n        RouteLocatorBuilder.Builder routes = builder.routes();\n        routes.route("path_route_baidu1",\n                r -> r.path("/guonei")\n                        .uri("http://news.baidu.com/guonei")).build();\n        return routes.build();\n    }\n\n    @Bean\n    public RouteLocator customRouteLocator2(RouteLocatorBuilder builder) {\n        RouteLocatorBuilder.Builder routes = builder.routes();\n        routes.route("path_route_baidu2",\n                r -> r.path("/guoji")\n                        .uri("http://news.baidu.com/guoji")).build();\n        return routes.build();\n    }\n}\n'))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u73b0\u5728\uff0c\u5f53\u8bbf\u95ee\u5730\u5740 http://localhost:9527/guonei\u65f6\u4f1a\u81ea\u52a8\u8f6c\u53d1\u5230\u5730\u5740\uff1a ",Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"http://news.baidu.com/guonei"}),"http://news.baidu.com/guonei"))),Object(o.b)("br",null),Object(o.b)("h1",{id:"\u52a8\u6001\u8def\u7531\u914d\u7f6e"},"\u52a8\u6001\u8def\u7531\u914d\u7f6e"),Object(o.b)("blockquote",null,Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b Gateway \u4f1a\u6839\u636e\u6ce8\u518c\u4e2d\u5fc3\u7684\u6ce8\u518c\u670d\u52a1\u5217\u8868\uff0c\u4ee5\u6ce8\u518c\u4e2d\u5fc3\u4e0a ",Object(o.b)("inlineCode",{parentName:"li"},"\u5fae\u670d\u52a1\u540d")," \u4e3a\u8def\u5f84\u521b\u5efa ",Object(o.b)("strong",{parentName:"li"},"\u52a8\u6001\u8def\u7531")," \u8fdb\u884c\u8f6c\u53d1\uff0c\u4ece\u800c\u5b9e\u73b0\u52a8\u6001\u8def\u7531\u7684\u529f\u80fd"),Object(o.b)("li",{parentName:"ul"},"\u4e3a\u4e86\u89c2\u5bdf\u52a8\u6001\u8def\u7531\uff0c\u9700\u8981\u81f3\u5c11\u4e24\u4e2a\u670d\u52a1\u7aef\u5fae\u670d\u52a1\uff0c\u5373 \u6ce8\u518c\u4e2d\u5fc3 ",Object(o.b)("inlineCode",{parentName:"li"},"7001")," + \u4e24\u4e2a\u670d\u52a1\u7aef\u5fae\u670d\u52a1 ",Object(o.b)("inlineCode",{parentName:"li"},"8001 + 8002")))),Object(o.b)("h2",{id:"yaml-2"},"YAML"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u4fee\u6539 ",Object(o.b)("inlineCode",{parentName:"p"},"9527")," \u7f51\u5173 YAML \u914d\u7f6e\uff0c\u5b9e\u73b0\u52a8\u6001\u8def\u7531\x01"),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"\u9700\u8981\u6ce8\u610f\u7684\u662f URI \u7684\u534f\u8bae\u4e3a ",Object(o.b)("inlineCode",{parentName:"strong"},"lb"),"\uff0c\u8868\u793a\u542f\u7528 Gateway \u8d1f\u8f7d\u5747\u8861\u529f\u80fd\uff08\u57fa\u4e8e Ribbon\uff09")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"lb://serviceName")," \u662fSpring Cloud Gateway \u5728\u5fae\u670d\u52a1\u4e2d\u81ea\u52a8\u4e3a\u6211\u4eec\u521b\u5efa\u7684\u8d1f\u8f7d\u5747\u8861 URI",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"uri: http://localhost:8081")," \u6539\u4e3a ",Object(o.b)("inlineCode",{parentName:"li"},"uri: lb://cloud-payment-service")))))),Object(o.b)("h2",{id:"\u6d4b\u8bd5-1"},"\u6d4b\u8bd5"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u591a\u6b21\u8bbf\u95ee ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:9527/payment/lb")," \uff0c\u53ef\u4ee5\u770b\u5230\u5fae\u670d\u52a1\u7aef\u53e3\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"8001")," \u4e0e ",Object(o.b)("inlineCode",{parentName:"p"},"8002")," \u95f4\u5207\u6362")))}p.isMDXComponent=!0},570:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,s=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?r.a.createElement(s,c(c({ref:t},b),{},{components:n})):r.a.createElement(s,c({ref:t},b))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);