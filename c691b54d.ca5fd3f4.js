(window.webpackJsonp=window.webpackJsonp||[]).push([[403],{1152:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/1-079abd67ab8121048dfbd943c586030c.png"},460:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return d}));var r=t(2),a=t(6),i=(t(0),t(576)),o=t(580),l=t(581),c={id:"1.sleuth",title:"Sleuth \u6982\u8ff0",hide_title:!0},p={unversionedId:"springcloud/\u8bf7\u6c42\u94fe\u8def\u8ddf\u8e2a/1.sleuth",id:"springcloud/\u8bf7\u6c42\u94fe\u8def\u8ddf\u8e2a/1.sleuth",isDocsHomePage:!1,title:"Sleuth \u6982\u8ff0",description:"Sleuth \u6982\u8ff0",source:"@site/docs/springcloud/\u8bf7\u6c42\u94fe\u8def\u8ddf\u8e2a/1.sleuth.mdx",slug:"/springcloud/\u8bf7\u6c42\u94fe\u8def\u8ddf\u8e2a/1.sleuth",permalink:"/docs/springcloud/\u8bf7\u6c42\u94fe\u8def\u8ddf\u8e2a/1.sleuth",version:"current",sidebar:"someSidebar",previous:{title:"\u5206\u7ec4\u6d88\u8d39\u4e0e\u6301\u4e45\u5316",permalink:"/docs/springcloud/\u6d88\u606f\u9a71\u52a8/4.groupConsumePersistence"},next:{title:"Spring Cloud Alibaba \u6982\u8ff0",permalink:"/docs/springcloudalibaba/1.springcloudalibaba"}},u=[{value:"Sleuth \u6982\u8ff0",id:"sleuth-\u6982\u8ff0",children:[]},{value:"zipkin \u642d\u5efa",id:"zipkin-\u642d\u5efa",children:[]},{value:"\u6574\u5408 Sleuth",id:"\u6574\u5408-sleuth",children:[{value:"cloud-provider-payment8001",id:"cloud-provider-payment8001",children:[{value:"POM",id:"pom",children:[]},{value:"YAML",id:"yaml",children:[]},{value:"controller",id:"controller",children:[]}]},{value:"cloud-consumer-order80",id:"cloud-consumer-order80",children:[{value:"POM",id:"pom-1",children:[]},{value:"YAML",id:"yaml-1",children:[]},{value:"controller",id:"controller-1",children:[]}]}]},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",children:[]}],b={rightToc:u};function d(e){var n=e.components,c=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,c,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"sleuth-\u6982\u8ff0"},"Sleuth \u6982\u8ff0"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u8981\u89e3\u51b3\u7684\u95ee\u9898")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u5728\u5fae\u670d\u52a1\u6846\u67b6\u4e2d\uff0c\u4e00\u4e2a\u7531\u5ba2\u6237\u7aef\u53d1\u8d77\u7684\u8bf7\u6c42\u5728\u540e\u7aef\u7cfb\u7edf\u4e2d\u4f1a\u7ecf\u8fc7\u591a\u4e2a\u4e0d\u540c\u7684\u670d\u52a1\u8282\u70b9\u8c03\u7528\u6765\u534f\u8c03\u4ea7\u751f\u6700\u7ec8\u7684\u8bf7\u6c42\u7ed3\u679c"),Object(i.b)("li",{parentName:"ul"},"\u6bcf\u4e2a\u524d\u7aef\u8bf7\u6c42\u90fd\u4f1a\u5f62\u6210\u5206\u5e03\u5f0f\u670d\u52a1\u8c03\u7528\u94fe\u8def\uff0c\u94fe\u8def\u4e2d\u7684\u4efb\u4f55\u4e00\u73af\u51fa\u73b0\u9ad8\u5ef6\u65f6\u6216\u9519\u8bef\u90fd\u4f1a\u5f15\u8d77\u6574\u4e2a\u8bf7\u6c42\u6700\u7ec8\u5931\u8d25"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Spring Cloud Sleuth")," \u63d0\u4f9b\u4e86\u4e00\u5957\u5b8c\u6574\u7684\u670d\u52a1\u8ddf\u8e2a\u89e3\u51b3\u65b9\u6848\uff0c\u4e14\u652f\u6301\u517c\u5bb9 ",Object(i.b)("inlineCode",{parentName:"li"},"zipkin")," (\u5c55\u793a\u7aef)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Sleuth")," \u5c06\u94fe\u8def\u4fe1\u606f\u53d1\u9001\u7ed9 ",Object(i.b)("inlineCode",{parentName:"li"},"Zipkin")," \uff0c\u901a\u8fc7 ",Object(i.b)("inlineCode",{parentName:"li"},"Zipkin")," \u8fdb\u884c\u5c55\u793a"))),Object(i.b)("br",null),Object(i.b)("h1",{id:"zipkin-\u642d\u5efa"},"zipkin \u642d\u5efa"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://dl.bintray.com/openzipkin/maven/io/zipkin/java/zipkin-server/"}),"http://dl.bintray.com/openzipkin/maven/io/zipkin/java/zipkin-server/")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u9009\u62e9 ",Object(i.b)("inlineCode",{parentName:"li"},"2.12.9")," \u7248\u672c\u4e0b\u8f7d"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"zipkin-server-2.12.9-exec.jar")),Object(i.b)("li",{parentName:"ul"},"\u7ec8\u7aef\u8fdb\u5165 ",Object(i.b)("inlineCode",{parentName:"li"},"jar")," \u5305\u6240\u5728\u8def\u5f84\uff0c\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"li"},"java -jar zipkin-server-2.12.9-exec.jar")," \u547d\u4ee4\u8fd0\u884c\u5373\u53ef"),Object(i.b)("li",{parentName:"ul"},"\u8bbf\u95ee ",Object(i.b)("inlineCode",{parentName:"li"},"http://localhost:9411/zipkin/"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4e00\u6761\u94fe\u8def\u7531\u4e00\u4e2a ",Object(i.b)("inlineCode",{parentName:"li"},"Trace ID")," ",Object(i.b)("strong",{parentName:"li"},"\u552f\u4e00"),"\u6807\u8bc6"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Span")," \u6807\u8bc6\u53d1\u8d77\u7684\u8bf7\u6c42"),Object(i.b)("li",{parentName:"ul"},"\u5404\u4e2a ",Object(i.b)("inlineCode",{parentName:"li"},"Span")," \u901a\u8fc7 ",Object(i.b)("inlineCode",{parentName:"li"},"Parent ID")," \u5173\u8054\u8d77\u6765"),Object(i.b)("li",{parentName:"ul"},"\u8bf4\u767d\u4e86\u5c31\u8ddf\u4e2a ",Object(i.b)("inlineCode",{parentName:"li"},"\u6811")," \u5dee\u4e0d\u591a")))),Object(i.b)("br",null),Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u540d\u8bcd\u89e3\u91ca")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"Trace"),"\uff1a"),"\u7c7b\u4f3c\u4e8e\u6811\u7ed3\u6784\u7684 ",Object(i.b)("inlineCode",{parentName:"li"},"Span")," \u96c6\u5408\uff0c\u8868\u793a\u4e00\u6761\u8c03\u7528\u94fe\u8def\uff0c\u5b58\u5728\u552f\u4e00\u6807\u8bc6"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"Span"),"\uff1a"),"\u6807\u8bc6\u8c03\u7528\u94fe\u8def\u6765\u6e90\uff0c\u901a\u4fd7\u7684\u7406\u89e3 ",Object(i.b)("inlineCode",{parentName:"li"},"Span")," \u5c31\u662f\u4e00\u6b21\u8bf7\u6c42"))),Object(i.b)("br",null),Object(i.b)("h1",{id:"\u6574\u5408-sleuth"},"\u6574\u5408 Sleuth"),Object(i.b)("h2",{id:"cloud-provider-payment8001"},"cloud-provider-payment8001"),Object(i.b)("h3",{id:"pom"},"POM"),Object(i.b)(o.a,{defaultValue:"1",values:[{label:"Sleuth Zipkin \u4f9d\u8d56",value:"1"},{label:"8001 \u5b8c\u6574\u4f9d\u8d56",value:"2"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"1",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"\x3c!-- \u5305\u542b\u4e86sleuth zipkin \u6570\u636e\u94fe\u8def\u8ffd\u8e2a--\x3e\n<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-zipkin</artifactId>\n</dependency>\n"))),Object(i.b)(l.a,{value:"2",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<dependencies>\n    \x3c!-- \u5305\u542b\u4e86sleuth zipkin \u6570\u636e\u94fe\u8def\u8ffd\u8e2a--\x3e\n    <dependency>\n        <groupId>org.springframework.cloud</groupId>\n        <artifactId>spring-cloud-starter-zipkin</artifactId>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-web</artifactId>\n    </dependency>\n    \x3c!--\u76d1\u63a7--\x3e\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-actuator</artifactId>\n    </dependency>\n    <dependency>\n        <groupId>org.mybatis.spring.boot</groupId>\n        <artifactId>mybatis-spring-boot-starter</artifactId>\n    </dependency>\n    <dependency>\n        <groupId>com.alibaba</groupId>\n        <artifactId>druid-spring-boot-starter</artifactId>\n        <version>1.1.16</version>\n        \x3c!--\u5982\u679c\u6ca1\u5199\u7248\u672c,\u4ece\u7236\u5c42\u9762\u627e,\u627e\u5230\u4e86\u5c31\u76f4\u63a5\u7528,\u5168\u5c40\u7edf\u4e00--\x3e\n    </dependency>\n    \x3c!--mysql-connector-java--\x3e\n    <dependency>\n        <groupId>mysql</groupId>\n        <artifactId>mysql-connector-java</artifactId>\n        <version>5.1.47</version>\n        <scope>compile</scope>\n    </dependency>\n    \x3c!--jdbc--\x3e\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-jdbc</artifactId>\n    </dependency>\n    \x3c!--\u70ed\u90e8\u7f72--\x3e\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-devtools</artifactId>\n        <scope>runtime</scope>\n        <optional>true</optional>\n    </dependency>\n    <dependency>\n        <groupId>org.projectlombok</groupId>\n        <artifactId>lombok</artifactId>\n        <optional>true</optional>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-test</artifactId>\n        <scope>test</scope>\n    </dependency>\n    <dependency>\n        <groupId>org.example</groupId>\n        <artifactId>cloud-api-commons</artifactId>\n        <version>1.0-SNAPSHOT</version>\n    </dependency>\n    \x3c!--eureka client--\x3e\n    <dependency>\n        <groupId>org.springframework.cloud</groupId>\n        <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>\n    </dependency>\n</dependencies>\n")))),Object(i.b)("h3",{id:"yaml"},"YAML"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u6dfb\u52a0 ",Object(i.b)("inlineCode",{parentName:"li"},"zipkin"),"\u3001",Object(i.b)("inlineCode",{parentName:"li"},"sleuth")," \u914d\u7f6e")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"server:\n  port: 8081\n\nspring:\n  application:\n    name: cloud-payment-service\n  datasource:\n    username: root\n    password: root\n    url: jdbc:mysql://localhost:3306/springcloud?serverTimezone=UTC&useUnicode=true&characterEncoding=utf-8\n    driver-class-name: com.mysql.jdbc.Driver\n    type: com.alibaba.druid.pool.DruidDataSource\n  zipkin:\n    base-url: http://localhost:9411\n  sleuth:\n    sampler:\n      #\u91c7\u6837\u53d6\u503c\u4ecb\u4e8e 0\u52301\u4e4b\u95f4\uff0c1\u5219\u8868\u793a\u5168\u90e8\u6536\u96c6\n      probability: 1\n\nmybatis:\n  mapper-locations: classpath:mapper/*.xml\n  configuration:\n    map-underscore-to-camel-case: true       #\u9a7c\u5cf0\u6620\u5c04\n    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl   #\u8c03\u8bd5\u6253\u5370SQL\n\neureka:\n  client:\n    #\u8868\u793a\u662f\u5426\u5c06\u81ea\u5df1\u6ce8\u518c\u8fdbEurekaServer\u9ed8\u8ba4\u4e3atrue\n    register-with-eureka: true\n    #\u662f\u5426\u4eceEurekaServer\u6293\u53d6\u5df2\u6709\u7684\u6ce8\u518c\u6d88\u606f\uff0c\u9ed8\u8ba4\u4e3atrue\uff0c\u5355\u8282\u70b9\u65e0\u6240\u8c13\uff0c\u96c6\u7fa4\u5fc5\u987b\u8bbe\u7f6e\u4e3atrue\u624d\u80fd\u914d\u5408ribbon\u4f7f\u7528\u8d1f\u8f7d\u5747\u8861\n    fetch-registry: true\n    service-url:\n      #\u96c6\u7fa4\u7248\n      #defaultZone: http://eureka7001.com:7001/eureka/,http://eureka7002.com:7002/eureka/\n      #\u5355\u673a\u7248 \u5165\u9a7b\u5230\u8fd9\u4e2a\u5730\u5740\uff08\u5c31\u662f\u6ce8\u518c\u4e2d\u5fc3\u5730\u5740\uff09\n      defaultZone: http://127.0.0.1:7001/eureka/\n  instance: # \u7528\u6765\u4fee\u6539\u670d\u52a1\u540d\u79f0\uff0c\u9632\u6b62\u66b4\u9732\u5f53\u524d\u670d\u52a1\u5668\u4e3b\u673a\n    instance-id: payment8001\n    prefer-ip-address: true # \u53ef\u4ee5\u9884\u89c8 ip \u5730\u5740\n    #lease-renewal-interval-in-seconds: 1 # Eureka \u5ba2\u6237\u7aef\u5411\u670d\u52a1\u7aef\u53d1\u9001\u5fc3\u8df3\u4fe1\u53f7\u7684\u65f6\u95f4\u95f4\u9694\n    #lease-expiration-duration-in-seconds: 2 # Eureka \u670d\u52a1\u7aef\u5728\u53d7\u5230\u6700\u540e\u4e00\u6b21\u5fc3\u8df3\u540e\u7b49\u5f85\u7684\u65f6\u95f4\u4e0a\u7ebf\n")),Object(i.b)("h3",{id:"controller"},"controller"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u968f\u4fbf\u5199\u4e00\u4e2a\u63a5\u53e3\uff0c\u8ba9\u5fae\u670d\u52a1\u80fd\u88ab\u8bbf\u95ee\uff0c\u4ece\u800c\u53ef\u4ee5\u88ab\u76d1\u63a7\u5230\u94fe\u8def\u8c03\u7528")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@GetMapping(value="/payment/zipkin")\npublic String paymentZipkin() {\n    return "hello,i am paymentZipkin server fallback,O(\u2229_\u2229)O\u54c8\u54c8~";\n}\n')),Object(i.b)("h2",{id:"cloud-consumer-order80"},"cloud-consumer-order80"),Object(i.b)("h3",{id:"pom-1"},"POM"),Object(i.b)("p",null,"\u5f15\u5165 zipkin Maven \u5750\u6807"),Object(i.b)("h3",{id:"yaml-1"},"YAML"),Object(i.b)("p",null,"\u76f8\u540c\u7684\u914d\u7f6e"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"server:\n  port: 80\n\nspring:\n  application:\n    name: cloud-order-service\n  zipkin:\n    base-url: http://localhost:9411\n  sleuth:\n    sampler:\n      #\u91c7\u6837\u53d6\u503c\u4ecb\u4e8e 0\u52301\u4e4b\u95f4\uff0c1\u5219\u8868\u793a\u5168\u90e8\u6536\u96c6\n      probability: 1\n      \neureka:\n  client:\n    #\u8868\u793a\u662f\u5426\u5c06\u81ea\u5df1\u6ce8\u518c\u8fdbEurekaServer\u9ed8\u8ba4\u4e3atrue\n    register-with-eureka: true\n    #\u662f\u5426\u4eceEurekaServer\u6293\u53d6\u5df2\u6709\u7684\u6ce8\u518c\u6d88\u606f\uff0c\u9ed8\u8ba4\u4e3atrue\uff0c\u5355\u8282\u70b9\u65e0\u6240\u8c13\uff0c\u96c6\u7fa4\u5fc5\u987b\u8bbe\u7f6e\u4e3atrue\u624d\u80fd\u914d\u5408ribbon\u4f7f\u7528\u8d1f\u8f7d\u5747\u8861\n    fetch-registry: true\n    service-url:\n      # \u5355\u673a\u7248\u672c\n      defaultZone: http://localhost:7001/eureka\n      # \u96c6\u7fa4\u7248\n      # defaultZone: http://eureka7001.com:7001/eureka/,http://eureka7002.com:7002/eureka/\n")),Object(i.b)("h3",{id:"controller-1"},"controller"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"RestTemplate \u8fdc\u7a0b\u8c03\u7528 ",Object(i.b)("inlineCode",{parentName:"li"},"payment8001"))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@GetMapping(value = "/consumer/payment/zipkin")\npublic String paymentZipkin() {\n    return restTemplate.getForObject( "http://localhost:8081/payment/zipkin/", String.class);\n}\n')),Object(i.b)("br",null),Object(i.b)("h1",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u542f\u52a8\u6ce8\u518c\u4e2d\u5fc3 ",Object(i.b)("inlineCode",{parentName:"li"},"7001")),Object(i.b)("li",{parentName:"ul"},"\u542f\u52a8 ",Object(i.b)("inlineCode",{parentName:"li"},"8001"),"\u3001",Object(i.b)("inlineCode",{parentName:"li"},"80")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"80")," \u8c03\u7528 ",Object(i.b)("inlineCode",{parentName:"li"},"8001")," \u51e0\u6b21\uff0c\u901a\u8fc7\u8bbf\u95ee ",Object(i.b)("inlineCode",{parentName:"li"},"http://localhost:80/consumer/payment/zipkin")," \u5b9e\u73b0"),Object(i.b)("li",{parentName:"ul"},"\u767b\u5f55 ",Object(i.b)("inlineCode",{parentName:"li"},"http://localhost:9411"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u70b9\u5f00\u53ef\u4ee5\u770b\u5230\u6bcf\u6b21\u5206\u90e8\u8c03\u7528\u7684\u8017\u65f6"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dependencies")," \u53ef\u4ee5\u4ee5\u56fe\u7684\u5f62\u5f0f\u5c55\u73b0\u5fae\u670d\u52a1\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb")))),Object(i.b)("img",{src:t(1152).default,style:{zoom:"100%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(i.b)("br",null))}d.isMDXComponent=!0},576:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=u(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=u(t),s=r,m=b["".concat(o,".").concat(s)]||b[s]||d[s]||i;return t?a.a.createElement(m,l(l({ref:n},p),{},{components:t})):a.a.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},577:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},578:function(e,n,t){"use strict";var r=t(0);const a=Object(r.createContext)(void 0);n.a=a},579:function(e,n,t){"use strict";var r=t(0),a=t(578);n.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},580:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(579),o=t(577),l=t(47),c=t.n(l);const p=37,u=39;n.a=function(e){const{block:n,children:t,defaultValue:l,values:b,groupId:d}=e,{tabGroupChoices:s,setTabGroupChoices:m}=Object(i.a)(),[O,j]=Object(r.useState)(l),[g,f]=Object(r.useState)(!1);if(null!=d){const e=s[d];null!=e&&e!==O&&b.some(n=>n.value===e)&&j(e)}const y=e=>{j(e),null!=d&&m(d,e)},h=[],v=e=>{e.metaKey||e.altKey||e.ctrlKey||f(!0)},k=()=>{f(!1)};return Object(r.useEffect)(()=>{window.addEventListener("keydown",v),window.addEventListener("mousedown",k)},[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n})},b.map(({value:e,label:n})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===e,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===e}),style:g?{}:{outline:"none"},key:e,ref:e=>h.push(e),onKeyDown:e=>{((e,n,t)=>{switch(t.keyCode){case u:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case p:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(h,e.target,e),v(e)},onFocus:()=>y(e),onClick:()=>{y(e),f(!1)},onPointerDown:()=>f(!1)},n))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(t).filter(e=>e.props.value===O)[0]))}},581:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){return a.a.createElement("div",null,e.children)}}}]);