(window.webpackJsonp=window.webpackJsonp||[]).push([[349],{405:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),o=(n(0),n(472)),c={id:"3.paymentMicroService",title:"\u652f\u4ed8\u6a21\u5757\u6784\u5efa",hide_title:!0},i={unversionedId:"springcloud/3.paymentMicroService",id:"springcloud/3.paymentMicroService",isDocsHomePage:!1,title:"\u652f\u4ed8\u6a21\u5757\u6784\u5efa",description:"\u652f\u4ed8\u6a21\u5757\u6784\u5efa",source:"@site/docs/springcloud/3.\u652f\u4ed8\u6a21\u5757\u6784\u5efa.md",slug:"/springcloud/3.paymentMicroService",permalink:"/docs/springcloud/3.paymentMicroService",version:"current",sidebar:"someSidebar",previous:{title:"\u5fae\u670d\u52a1\u805a\u5408\u7236\u5de5\u7a0b",permalink:"/docs/springcloud/2.fatherProject"},next:{title:"devtools \u70ed\u90e8\u7f72",permalink:"/docs/springcloud/4.devtools"}},p=[{value:"\u652f\u4ed8\u6a21\u5757\u6784\u5efa",id:"\u652f\u4ed8\u6a21\u5757\u6784\u5efa",children:[{value:"pom",id:"pom",children:[]},{value:"application.yaml",id:"applicationyaml",children:[]},{value:"\u4e3b\u542f\u52a8",id:"\u4e3b\u542f\u52a8",children:[]},{value:"\u4e1a\u52a1\u7c7b",id:"\u4e1a\u52a1\u7c7b",children:[]}]}],l={rightToc:p};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"\u652f\u4ed8\u6a21\u5757\u6784\u5efa"},"\u652f\u4ed8\u6a21\u5757\u6784\u5efa"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u6784\u5efa\u4e24\u4e2a\u5fae\u670d\u52a1\u6a21\u5757\uff1a",Object(o.b)("inlineCode",{parentName:"p"},"\u6d88\u8d39\u8005\u8ba2\u5355\u6a21\u5757"),"\u3001",Object(o.b)("inlineCode",{parentName:"p"},"\u652f\u4ed8\u6a21\u5757")),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"\u6d88\u8d39\u8005\u8ba2\u5355\u6a21\u5757")," \u8c03\u7528 ",Object(o.b)("inlineCode",{parentName:"li"},"\u652f\u4ed8\u6a21\u5757")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"\u5fae\u670d\u52a1\u63d0\u4f9b\u8005\u652f\u4ed8Module\u6a21\u5757"),"\u2014\u2014 ",Object(o.b)("inlineCode",{parentName:"li"},"cloud-provider-payment8001")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"\u5fae\u670d\u52a1\u6d88\u8d39\u8005\u8ba2\u5355Module\u6a21\u5757"),"\u2014\u2014 ",Object(o.b)("inlineCode",{parentName:"li"},"cloud-consumer-order80"))),Object(o.b)("br",null),Object(o.b)("p",{parentName:"blockquote"},"\u70ed\u90e8\u7f72 ",Object(o.b)("inlineCode",{parentName:"p"},"Devtools"))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"\u6784\u5efa\u5fae\u670d\u52a1\u6a21\u5757")),Object(o.b)("ol",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ol"},"\u521b\u5efa module"),Object(o.b)("li",{parentName:"ol"},"\u6539 pom"),Object(o.b)("li",{parentName:"ol"},"\u5199 yaml \u914d\u7f6e"),Object(o.b)("li",{parentName:"ol"},"\u4e3b\u542f\u52a8"),Object(o.b)("li",{parentName:"ol"},"\u4e1a\u52a1\u7c7b"))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u65b0\u5efa module \uff0c\u547d\u540d\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"cloud-provider-payment8001")),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u521b\u5efa\u5b8c\u6bd5\u540e\uff0c\u67e5\u770b\u7236\u5de5\u7a0b\u7684 pom \uff0c\u4f1a\u53d1\u73b0\u591a\u4e86 ",Object(o.b)("inlineCode",{parentName:"p"},"modules")," \u6807\u7b7e\uff0c\u5176\u4e2d\u6709\u4e00\u4e2a ",Object(o.b)("inlineCode",{parentName:"p"},"module")," \u6807\u7b7e\uff0c\u5185\u5bb9\u4e3a\u521a\u521a\u521b\u5efa\u7684\u5b50\u6a21\u5757"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),"<modules>\n    <module>cloud-provider-payment8001</module>\n</modules>\n"))))),Object(o.b)("h2",{id:"pom"},"pom"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:'title="\u5b50\u6a21\u5757 pom"',title:'"\u5b50\u6a21\u5757','pom"':!0}),'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <parent>\n        <artifactId>cloud2021</artifactId>\n        <groupId>org.example</groupId>\n        <version>1.0-SNAPSHOT</version>\n    </parent>\n    <modelVersion>4.0.0</modelVersion>\n\n    \x3c!--    g\u3001v \u90fd\u7ee7\u627f--\x3e\n    <artifactId>cloud-provider-payment8001</artifactId>\n\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-web</artifactId>\n        </dependency>\n        \x3c!--\u76d1\u63a7--\x3e\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-actuator</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.mybatis.spring.boot</groupId>\n            <artifactId>mybatis-spring-boot-starter</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>com.alibaba</groupId>\n            <artifactId>druid-spring-boot-starter</artifactId>\n            <version>1.1.16</version>\n            \x3c!--\u5982\u679c\u6ca1\u5199\u7248\u672c,\u4ece\u7236\u5c42\u9762\u627e,\u627e\u5230\u4e86\u5c31\u76f4\u63a5\u7528,\u5168\u5c40\u7edf\u4e00--\x3e\n        </dependency>\n        \x3c!--mysql-connector-java--\x3e\n        <dependency>\n            <groupId>mysql</groupId>\n            <artifactId>mysql-connector-java</artifactId>\n            <version>5.1.47</version>\n            <scope>compile</scope>\n        </dependency>\n        \x3c!--jdbc--\x3e\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-jdbc</artifactId>\n        </dependency>\n        \x3c!--\u70ed\u90e8\u7f72--\x3e\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-devtools</artifactId>\n            <scope>runtime</scope>\n            <optional>true</optional>\n        </dependency>\n        <dependency>\n            <groupId>org.projectlombok</groupId>\n            <artifactId>lombok</artifactId>\n            <optional>true</optional>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-test</artifactId>\n            <scope>test</scope>\n        </dependency>\n    </dependencies>\n</project>\n')),Object(o.b)("h2",{id:"applicationyaml"},"application.yaml"),Object(o.b)("blockquote",null,Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u53e3\u53f7"),Object(o.b)("li",{parentName:"ul"},"\u670d\u52a1\u540d\u79f0\uff1a",Object(o.b)("inlineCode",{parentName:"li"},"cloud-payment-service")),Object(o.b)("li",{parentName:"ul"},"\u6570\u636e\u6e90"),Object(o.b)("li",{parentName:"ul"},"Mybatis\uff1amapper \u6587\u4ef6\u8def\u5f84"))),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"\u6ce8\u610f")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u8fd9\u91cc\u7aef\u53e3\u6211\u81ea\u5df1\u5199\u9519\u4e86\uff0c\u628a 8001 \u5199\u6210\u4e86 8081"),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"\u540e\u9762\u5168\u90fd\u5199\u6210 8081 \u4e86\uff0c\u6240\u4ee5\u5e72\u8106\u5c06\u9519\u5c31\u9519")))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"server:\n  port: 8081\n\nspring:\n  application:\n    name: cloud-payment-service\n  datasource:\n    username: root\n    password: root\n    url: jdbc:mysql://localhost:3306/springcloud?serverTimezone=UTC&useUnicode=true&characterEncoding=utf-8\n    driver-class-name: com.mysql.jdbc.Driver\n    type: com.alibaba.druid.pool.DruidDataSource\n\nmybatis:\n  mapper-locations: classpath:mapper/*.xml\n  configuration:\n    map-underscore-to-camel-case: true       #\u9a7c\u5cf0\u6620\u5c04\n    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl   #\u8c03\u8bd5\u6253\u5370SQL\n")),Object(o.b)("h2",{id:"\u4e3b\u542f\u52a8"},"\u4e3b\u542f\u52a8"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u65b0\u5efa\u7c7b\uff1a",Object(o.b)("inlineCode",{parentName:"p"},"com.bsx.springcloud.PaymentMain8001")),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"\u6dfb\u52a0 ",Object(o.b)("inlineCode",{parentName:"li"},"@SpringBootApplication")," \u6ce8\u89e3"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"main")," \u65b9\u6cd5\uff0c",Object(o.b)("inlineCode",{parentName:"li"},"SpringApplication.run(\u7c7b.class, args)")))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u4e3b\u542f\u52a8\u7c7b"',title:'"\u4e3b\u542f\u52a8\u7c7b"'}),"@SpringBootApplication\npublic class PaymentMain8001 {\n    public static void main(String[] args) {\n        SpringApplication.run(PaymentMain8001.class,args);\n    }\n}\n")),Object(o.b)("h2",{id:"\u4e1a\u52a1\u7c7b"},"\u4e1a\u52a1\u7c7b"),Object(o.b)("blockquote",null,Object(o.b)("ol",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ol"},"\u5efa\u6570\u636e\u5e93\u8868"),Object(o.b)("li",{parentName:"ol"},"entities"),Object(o.b)("li",{parentName:"ol"},"dao"),Object(o.b)("li",{parentName:"ol"},"service"),Object(o.b)("li",{parentName:"ol"},"controller"))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"\u5efa\u8868 payment")),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE `payment` (\n  `id` bigint(20) NOT NULL AUTO_INCREMENT,\n  `serial` varchar(200) DEFAULT '',\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n"))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"\u5b9e\u4f53\u7c7b entities.Payment")),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u5b9e\u4f53\u7c7b"',title:'"\u5b9e\u4f53\u7c7b"'}),"@Data\n@NoArgsConstructor\n@AllArgsConstructor\npublic class Payment implements Serializable {\n    private long id;\n    private String serial;\n}\n"))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"\u5b9e\u4f53\u7c7b entities.CommonResult")," \u2014\u2014 \u63d0\u4f9b\u7ed9\u524d\u7aef\u7684\u7edf\u4e00\u54cd\u5e94"),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"\u72b6\u6001\u7801"),Object(o.b)("li",{parentName:"ul"},"\u4fe1\u606f")),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:'title="CommonResult"',title:'"CommonResult"'}),"/**\n * \u7edf\u4e00\u54cd\u5e94\n */\n@Data\n@NoArgsConstructor\n@AllArgsConstructor\npublic class CommonResult<T> {\n    private Integer code; // \u72b6\u6001\u7801\n    private String message; // \u4fe1\u606f\n    private T data; // \u6570\u636e\u5b9e\u4f53\n\n    public CommonResult(Integer code, String message) {\n        // \u7a7a\u6570\u636e\u7684\u6784\u9020\u65b9\u6cd5\n        this(code, message, null);\n    }\n}\n"))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"dao.PaymentDao \u63a5\u53e3")),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u6301\u4e45\u5c42\u63a5\u53e3"',title:'"\u6301\u4e45\u5c42\u63a5\u53e3"'}),'@Mapper\npublic interface PaymentDao {\n    int create(Payment payment); // \u6dfb\u52a0\u4e00\u6761payment\u8bb0\u5f55\n\n    Payment getPaymentById(@Param("id") Long id); // \u6839\u636eid\u67e5\u8be2payment\n}\n')),Object(o.b)("br",null),Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"mapper.xml")),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8" ?>\n<!DOCTYPE mapper\n        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"\n        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n\n<mapper namespace="com.bsx.springcloud.dao.PaymentDao">\n\n    <insert id="create" parameterType="com.bsx.springcloud.entities.Payment" useGeneratedKeys="true" keyProperty="id">\n        INSERT INTO payment (id, serial) VALUES (NULL, #{serial});\n    </insert>\n\n    <select id="getPaymentById" resultMap="BaseResultMap" parameterType="Long">\n        SELECT * FROM payment WHERE id = #{id}\n    </select>\n\n    <resultMap id="BaseResultMap" type="com.bsx.springcloud.entities.Payment">\n        <id column="id" property="id"/>\n        <result column="serial" property="serial"/>\n    </resultMap>\n</mapper>\n'))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"service.PaymentService \u63a5\u53e3")),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:'title="service \u63a5\u53e3"',title:'"service','\u63a5\u53e3"':!0}),'public interface PaymentService {\n    int create(Payment payment); // \u6dfb\u52a0\u4e00\u6761payment\u8bb0\u5f55\n\n    Payment getPaymentById(@Param("id") Long id); // \u6839\u636eid\u67e5\u8be2payment\n}\n')),Object(o.b)("p",{parentName:"blockquote"},"\u5b9e\u73b0\u7c7b"),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:'title="service \u5b9e\u73b0\u7c7b"',title:'"service','\u5b9e\u73b0\u7c7b"':!0}),"@Service\npublic class PaymentServiceImpl implements PaymentService {\n    @Resource\n    private PaymentDao paymentDao;\n\n    @Override\n    public int create(Payment payment) {\n        return paymentDao.create(payment);\n    }\n\n    @Override\n    public Payment getPaymentById(Long id) {\n        return paymentDao.getPaymentById(id);\n    }\n}\n"))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Controller")),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:'title="PaymentController"',title:'"PaymentController"'}),'@Slf4j\n@RestController\npublic class PaymentController {\n\n    @Resource\n    private PaymentService paymentService;\n\n    @PostMapping("/payment/create")\n    public CommonResult<Integer> create(@RequestBody Payment payment) {\n        int result = paymentService.create(payment);\n        log.info("=====\u63d2\u5165\u7ed3\u679c\uff1a" + result);\n\n        return result > 0 ? new CommonResult<>(200, "\u63d2\u5165\u6210\u529f", result)\n                : new CommonResult<>(444, "\u63d2\u5165\u5931\u8d25", null);\n    }\n\n    @GetMapping("/payment/get/{id}")\n    public CommonResult<Payment> getPaymentById(@PathVariable("id") Long id) {\n        Payment payment = paymentService.getPaymentById(id);\n        return payment != null ? new CommonResult<>(200, "\u67e5\u8be2\u6210\u529f", payment) :\n                new CommonResult<>(444, "\u67e5\u8be2\u5931\u8d25", null);\n    }\n}\n'))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u81ea\u5df1\u7528 PostMan \u6d4b\u4e00\u4e0b")))}b.isMDXComponent=!0},472:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=b(n),d=a,u=m["".concat(c,".").concat(d)]||m[d]||s[d]||o;return n?r.a.createElement(u,i(i({ref:t},l),{},{components:n})):r.a.createElement(u,i({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);