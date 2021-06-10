(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return i}));var r=n(2),a=n(6),o=(n(0),n(472)),c={id:"5.order80",title:"\u8ba2\u5355\u6a21\u5757\u6784\u5efa",hide_title:!0},b={unversionedId:"springcloud/5.order80",id:"springcloud/5.order80",isDocsHomePage:!1,title:"\u8ba2\u5355\u6a21\u5757\u6784\u5efa",description:"\u8ba2\u5355\u6a21\u5757\u6784\u5efa",source:"@site/docs/springcloud/5.\u8ba2\u5355\u6a21\u5757\u6784\u5efa.md",slug:"/springcloud/5.order80",permalink:"/docs/springcloud/5.order80",version:"current",sidebar:"someSidebar",previous:{title:"devtools \u70ed\u90e8\u7f72",permalink:"/docs/springcloud/4.devtools"},next:{title:"\u62bd\u53d6\u516c\u5171\u5b50\u6a21\u5757",permalink:"/docs/springcloud/6.commonModule"}},l=[{value:"\u8ba2\u5355\u6a21\u5757\u6784\u5efa",id:"\u8ba2\u5355\u6a21\u5757\u6784\u5efa",children:[{value:"\u4e1a\u52a1\u7c7b",id:"\u4e1a\u52a1\u7c7b",children:[]},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",children:[]}]}],p={rightToc:l};function i(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"\u8ba2\u5355\u6a21\u5757\u6784\u5efa"},"\u8ba2\u5355\u6a21\u5757\u6784\u5efa"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u65b0\u5efa module \uff0c\u547d\u540d\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"cloud-consumer-order80"))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"pom.xml")),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"\u4e0d\u9700\u8981\u6301\u4e45\u5c42\u76f8\u5173\u7684\u6a21\u5757\uff0c\u5982 jdbc\u3001druid\u3001mybatis")),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'}),"<dependencies>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-web</artifactId>\n    </dependency>\n    \x3c!--\u76d1\u63a7--\x3e\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-actuator</artifactId>\n    </dependency>\n    \x3c!--\u70ed\u90e8\u7f72--\x3e\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-devtools</artifactId>\n        <scope>runtime</scope>\n        <optional>true</optional>\n    </dependency>\n    <dependency>\n        <groupId>org.projectlombok</groupId>\n        <artifactId>lombok</artifactId>\n        <optional>true</optional>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-test</artifactId>\n        <scope>test</scope>\n    </dependency>\n</dependencies>\n"))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"application.yaml"),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"\u9762\u5411\u7528\u6237\uff0c\u4e00\u822c\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"li"},"80")," \u7aef\u53e3")),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="application.yaml"',title:'"application.yaml"'}),"server:\n  port: 80\n"))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"\u4e3b\u542f\u52a8")),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"@SpringBootApplication\npublic class OrderMain80 {\n    public static void main(String[] args) {\n        SpringApplication.run(OrderMain80.class, args);\n    }\n}\n"))),Object(o.b)("h2",{id:"\u4e1a\u52a1\u7c7b"},"\u4e1a\u52a1\u7c7b"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"\u5b9e\u4f53\u7c7b\uff1a"),"\u5077\u61d2\u76f4\u63a5\u590d\u5236\u4e4b\u524d entities \u4e0b\u7684\u4e24\u4e2a\u7c7b")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Controller")),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"\u8981\u5b9e\u73b0 ",Object(o.b)("strong",{parentName:"li"},"\u8ba2\u5355\u6a21\u5757")," \u5bf9 ",Object(o.b)("strong",{parentName:"li"},"\u652f\u4ed8\u6a21\u5757")," \u7684\u8c03\u7528"),Object(o.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"li"},"Http Client"),"\uff0c\u6b64\u5904\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"li"},"RestTemplate"),"\uff0c\u5b83\u662f\u5bf9\u524d\u8005\u7684\u5c01\u88c5")),Object(o.b)("br",null),Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"RestTemplate")),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"\u63d0\u4f9b\u4e86\u591a\u79cd\u8fb9\u754c\u8bbf\u95ee\u8fdc\u7a0b Http \u670d\u52a1\u7684\u65b9\u6cd5"),Object(o.b)("li",{parentName:"ul"},"\u662f\u4e00\u79cd\u7b80\u5355\u4fbf\u6377\u7684\u8bbf\u95ee restful \u670d\u52a1\u7684\u6a21\u677f\u7c7b\uff0c\u662f Spring \u63d0\u4f9b\u7684\u7528\u4e8e\u8bbf\u95ee Rest \u670d\u52a1\u7684 ",Object(o.b)("inlineCode",{parentName:"li"},"\u5ba2\u6237\u7aef\u6a21\u677f\u5de5\u5177\u96c6"))),Object(o.b)("br",null),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"\u4f7f\u7528 RestTemplate \u8bbf\u95ee restful \u63a5\u53e3\u975e\u5e38\u7b80\u5355\u7c97\u66b4")),Object(o.b)("table",{parentName:"blockquote"},Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u53c2\u6570"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u610f\u4e49"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"url")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"REST \u8bf7\u6c42\u5730\u5740")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"requestMap")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u8bf7\u6c42\u53c2\u6570")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"ResponseBean.class")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"HTTP \u54cd\u5e94\u8f6c\u6362\u6210\u7684\u5bf9\u8c61")))),Object(o.b)("br",null),Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"SpringBoot \u4f7f\u7528 RestTemplate")),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"\u4f7f\u7528\u914d\u7f6e\u7c7b\u6ce8\u5165 Bean"),Object(o.b)("li",{parentName:"ul"},"\u65b0\u5efa ",Object(o.b)("inlineCode",{parentName:"li"},"config.ApplicationContextConfig")," \u7c7b")),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java",metastring:'title="spring\u914d\u7f6e\u7c7b"',title:'"spring\u914d\u7f6e\u7c7b"'}),"@Configuration\npublic class ApplicationContextConfig {\n    @Bean\n    public RestTemplate getRestTemplate() {\n        return new RestTemplate();\n    }\n}\n")),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"\u7f16\u5199 ",Object(o.b)("inlineCode",{parentName:"li"},"OrderController")," \u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"li"},"restTemplate.postForObject(..)")," \u65b9\u6cd5\u53d1\u9001 POST \u8bf7\u6c42\uff0c",Object(o.b)("inlineCode",{parentName:"li"},".getForObject()")," \u65b9\u6cd5\u53d1\u9001 GET \u8bf7\u6c42\uff0c\u5206\u522b\u8c03\u7528 ",Object(o.b)("strong",{parentName:"li"},"\u652f\u4ed8\u6a21\u5757")," \u7684\u4e24\u4e2a Controller \u65b9\u6cd5")),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u8ba2\u5355\u6a21\u5757 Controller"',title:'"\u8ba2\u5355\u6a21\u5757','Controller"':!0}),'@RestController\n@Slf4j\npublic class OrderController {\n    private static final String PAYMENT_URL = "http://localhost:8081";\n\n    @Resource\n    private RestTemplate restTemplate;\n\n    /**\n     * \u8c03\u7528 \u652f\u4ed8\u6a21\u5757 \u7684 create \u65b9\u6cd5\n     *\n     * @param payment\n     * @return \u8c03\u7528\u7ed3\u679c\n     */\n    @GetMapping("/consumer/payment/create")\n    public CommonResult<Integer> create(Payment payment) {\n        return restTemplate.postForObject(PAYMENT_URL + "/payment/create",\n                payment,\n                CommonResult.class);\n    }\n\n    @GetMapping("/consumer/payment/get/{id}")\n    public CommonResult<Payment> getPayment(@PathVariable("id") Long id) {\n        return restTemplate.getForObject(PAYMENT_URL + "/payment/get/" + id,\n                CommonResult.class);\n    }\n}\n'))),Object(o.b)("h2",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),Object(o.b)("blockquote",null,Object(o.b)("ol",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"\u542f\u52a8\u4e24\u4e2a Spring Boot \u9879\u76ee")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"\u901a\u8fc7 POSTMAN \u8bbf\u95ee ",Object(o.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:80/consumer/payment/get/2")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:'title="\u54cd\u5e94"',title:'"\u54cd\u5e94"'}),'{\n    "code": 200,\n    "message": "\u67e5\u8be2\u6210\u529f",\n    "data": {\n        "id": 2,\n        "serial": "\u957f\u5927002"\n    }\n}\n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"\u901a\u8fc7 POSTMAN \u8bbf\u95ee ",Object(o.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:80/consumer/payment/create?serial=\u957f\u8fbe003")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:'title="\u54cd\u5e94"',title:'"\u54cd\u5e94"'}),'{\n    "code": 200,\n    "message": "\u63d2\u5165\u6210\u529f",\n    "data": 1\n}\n'))))),Object(o.b)("p",null,"\u53ef\u89c1 ",Object(o.b)("inlineCode",{parentName:"p"},"order80")," \u6a21\u5757\u6210\u529f\u8c03\u7528\u4e86 ",Object(o.b)("inlineCode",{parentName:"p"},"payment8001")," \u6a21\u5757"))}i.isMDXComponent=!0},472:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),i=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},m=function(e){var t=i(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=i(n),s=r,d=m["".concat(c,".").concat(s)]||m[s]||u[s]||o;return n?a.a.createElement(d,b(b({ref:t},p),{},{components:n})):a.a.createElement(d,b({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=s;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:r,c[1]=b;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);