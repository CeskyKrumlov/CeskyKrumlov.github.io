(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{182:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return b})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return u}));var a=t(2),r=t(6),c=(t(0),t(570)),o=t(574),i=t(575),l={id:"3.microserviceLoadBalance",title:"\u670d\u52a1\u6d88\u8d39\u8005\u6ce8\u518c\u4e0e\u8d1f\u8f7d\u5747\u8861",hide_title:!0},b={unversionedId:"springcloudalibaba/\u670d\u52a1\u6ce8\u518c\u4e0e\u914d\u7f6e\u4e2d\u5fc3/3.microserviceLoadBalance",id:"springcloudalibaba/\u670d\u52a1\u6ce8\u518c\u4e0e\u914d\u7f6e\u4e2d\u5fc3/3.microserviceLoadBalance",isDocsHomePage:!1,title:"\u670d\u52a1\u6d88\u8d39\u8005\u6ce8\u518c\u4e0e\u8d1f\u8f7d\u5747\u8861",description:"\u670d\u52a1\u6d88\u8d39\u8005\u6ce8\u518c",source:"@site/docs/springcloudalibaba/\u670d\u52a1\u6ce8\u518c\u4e0e\u914d\u7f6e\u4e2d\u5fc3/3.\u5fae\u670d\u52a1\u8d1f\u8f7d\u5747\u8861.mdx",slug:"/springcloudalibaba/\u670d\u52a1\u6ce8\u518c\u4e0e\u914d\u7f6e\u4e2d\u5fc3/3.microserviceLoadBalance",permalink:"/docs/springcloudalibaba/\u670d\u52a1\u6ce8\u518c\u4e0e\u914d\u7f6e\u4e2d\u5fc3/3.microserviceLoadBalance",version:"current",sidebar:"someSidebar",previous:{title:"\u670d\u52a1\u63d0\u4f9b\u8005\u6ce8\u518c",permalink:"/docs/springcloudalibaba/\u670d\u52a1\u6ce8\u518c\u4e0e\u914d\u7f6e\u4e2d\u5fc3/2.providerRegist"},next:{title:"\u5e38\u89c1\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u5bf9\u6bd4\u53ca CAP \u7406\u8bba",permalink:"/docs/springcloudalibaba/\u670d\u52a1\u6ce8\u518c\u4e0e\u914d\u7f6e\u4e2d\u5fc3/4.serviceRegistryCenters"}},p=[{value:"\u670d\u52a1\u6d88\u8d39\u8005\u6ce8\u518c",id:"\u670d\u52a1\u6d88\u8d39\u8005\u6ce8\u518c",children:[]},{value:"Cloudalibaba-consumer-nacos-order83",id:"cloudalibaba-consumer-nacos-order83",children:[{value:"POM",id:"pom",children:[]},{value:"YAML",id:"yaml",children:[]},{value:"\u4e3b\u542f\u52a8\u7c7b",id:"\u4e3b\u542f\u52a8\u7c7b",children:[]},{value:"\u4e1a\u52a1\u7c7b",id:"\u4e1a\u52a1\u7c7b",children:[]},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",children:[]}]},{value:"\u5fae\u670d\u52a1\u8d1f\u8f7d\u5747\u8861",id:"\u5fae\u670d\u52a1\u8d1f\u8f7d\u5747\u8861",children:[]}],s={rightToc:p};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"\u670d\u52a1\u6d88\u8d39\u8005\u6ce8\u518c"},"\u670d\u52a1\u6d88\u8d39\u8005\u6ce8\u518c"),Object(c.b)("h1",{id:"cloudalibaba-consumer-nacos-order83"},"Cloudalibaba-consumer-nacos-order83"),Object(c.b)("h2",{id:"pom"},"POM"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),"<dependencies>\n    \x3c!-- SpringCloud ailibaba nacos--\x3e\n    <dependency>\n        <groupId>com.alibaba.cloud</groupId>\n        <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>\n    </dependency>\n    <dependency>\x3c!-- \u5f15\u7528\u81ea\u5df1\u5b9a\u4e49\u7684api\u901a\u7528\u5305\uff0c\u53ef\u4ee5\u4f7f\u7528Payment\u652f\u4ed8Entity --\x3e\n        <groupId>org.example</groupId>\n        <artifactId>cloud-api-commons</artifactId>\n        <version>1.0-SNAPSHOT</version>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-web</artifactId>\n    </dependency>\n    \x3c!--\u76d1\u63a7--\x3e\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-actuator</artifactId>\n    </dependency>\n    \x3c!--\u70ed\u90e8\u7f72--\x3e\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-devtools</artifactId>\n        <scope>runtime</scope>\n        <optional>true</optional>\n    </dependency>\n    <dependency>\n        <groupId>org.projectlombok</groupId>\n        <artifactId>lombok</artifactId>\n        <optional>true</optional>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-test</artifactId>\n        <scope>test</scope>\n    </dependency>\n</dependencies>\n")),Object(c.b)("h2",{id:"yaml"},"YAML"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u901a\u8fc7 ",Object(c.b)("inlineCode",{parentName:"li"},"service-url.nacos-user-service: http:// {\u670d\u52a1\u63d0\u4f9b\u8005\u7684 spring.application.name}")," \u914d\u7f6e\u670d\u52a1\u6d88\u8d39\u8005\u8981\u8bbf\u95ee\u7684\u670d\u52a1\u63d0\u4f9b\u8005\u5fae\u670d\u52a1")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"server:\n  port: 83\n\nspring:\n  application:\n    name: nacos-order-consumer\n  cloud:\n    nacos:\n      discovery:\n        server-addr: localhost:8848 #\u914d\u7f6eNacos\u5730\u5740\n\n#\u6d88\u8d39\u8005\u5c06\u53bb\u8bbf\u95ee\u7684\u5fae\u670d\u52a1\u540d\u79f0\uff08\u6ce8\u518c\u6210\u529f\u8fdbnacos\u7684\u5fae\u670d\u52a1\u63d0\u4f9b\u8005\uff09\nservice-url:\n  nacos-user-service: http://nacos-payment-provider\n")),Object(c.b)("h2",{id:"\u4e3b\u542f\u52a8\u7c7b"},"\u4e3b\u542f\u52a8\u7c7b"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"@SpringBootApplication\n@EnableDiscoveryClient\npublic class OrderNacosMain83 {\n\n    public static void main(String[] args) {\n        SpringApplication.run(OrderNacosMain83.class,args);\n    }\n}\n")),Object(c.b)("h2",{id:"\u4e1a\u52a1\u7c7b"},"\u4e1a\u52a1\u7c7b"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u6b64\u5904\u901a\u8fc7 ",Object(c.b)("inlineCode",{parentName:"p"},"83")," \u8fdc\u7a0b\u8c03\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"9001"),"\u3001",Object(c.b)("inlineCode",{parentName:"p"},"9002"),"\uff0c\u53ef\u91c7\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"OpenFeign")," \u6216 ",Object(c.b)("inlineCode",{parentName:"p"},"RestTemplate"))),Object(c.b)(o.a,{groupId:"g1",defaultValue:"OpenFeign",values:[{label:"OpenFeign",value:"1"},{label:"RestTemplate",value:"2"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"1",mdxType:"TabItem"},Object(c.b)("blockquote",null,Object(c.b)("h2",Object(a.a)({parentName:"blockquote"},{id:"maven-\u4f9d\u8d56"}),"Maven \u4f9d\u8d56"),Object(c.b)("pre",{parentName:"blockquote"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),"\x3c!-- openfeign --\x3e\n<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-openfeign</artifactId>\n</dependency>\n")),Object(c.b)("h2",Object(a.a)({parentName:"blockquote"},{id:"openfeign-\u63a5\u53e3"}),"OpenFeign \u63a5\u53e3"),Object(c.b)("pre",{parentName:"blockquote"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@FeignClient("nacos-payment-provider")\npublic interface FeignService {\n    @GetMapping("payment/nacos/{id}")\n    String getPaymentById(@PathVariable("id") Integer id);\n}\n')),Object(c.b)("h2",Object(a.a)({parentName:"blockquote"},{id:"\u4e3b\u542f\u52a8"}),"\u4e3b\u542f\u52a8"),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u6dfb\u52a0 ",Object(c.b)("inlineCode",{parentName:"li"},"@EnableFeignClients")," \u6ce8\u89e3")),Object(c.b)("pre",{parentName:"blockquote"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"@SpringBootApplication\n@EnableDiscoveryClient\n@EnableFeignClients\npublic class OrderNacosMain83 {\n    public static void main(String[] args) {\n        SpringApplication.run(OrderNacosMain83.class, args);\n    }\n}\n")),Object(c.b)("h2",Object(a.a)({parentName:"blockquote"},{id:"controller"}),"Controller"),Object(c.b)("pre",{parentName:"blockquote"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'// ...\n@Resource\nprivate FeignService feignService;\n\n@GetMapping(value = "/consumer/payment/nacos/{id}")\npublic String paymentInfo(@PathVariable("id") Integer id) {\n    return feignService.getPaymentById(id);\n}\n')))),Object(c.b)(i.a,{value:"2",mdxType:"TabItem"},Object(c.b)("blockquote",null,Object(c.b)("h2",Object(a.a)({parentName:"blockquote"},{id:"config"}),"Config"),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u914d\u7f6e\u4e00\u4e2a ",Object(c.b)("inlineCode",{parentName:"li"},"RestTemplate")," Bean")),Object(c.b)("pre",{parentName:"blockquote"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"@Configuration\npublic class ApplicationContextConfig {\n    @Bean\n    @LoadBalanced\n    public RestTemplate restTemplate() {\n        return new RestTemplate();\n    }\n}\n")),Object(c.b)("h2",Object(a.a)({parentName:"blockquote"},{id:"controller-1"}),"Controller"),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u901a\u8fc7 ",Object(c.b)("inlineCode",{parentName:"li"},"RestTemplate")," \u8fdc\u7a0b\u8c03\u7528 ",Object(c.b)("inlineCode",{parentName:"li"},"\u5fae\u670d\u52a1\u63d0\u4f9b\u8005"),"\uff0c\u5177\u4f53 ",Object(c.b)("inlineCode",{parentName:"li"},"URL"),"  \u7531\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3 Nacos \u63d0\u4f9b")),Object(c.b)("pre",{parentName:"blockquote"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@RestController\n@Slf4j\npublic class OrderNacosController {\n\n    @Resource\n    private RestTemplate restTemplate;\n\n    @Value("${service-url.nacos-user-service}") // \u4ece\u914d\u7f6e\u6587\u4ef6\u8bfb\n    private String serverURL;\n\n    @GetMapping(value = "/consumer/payment/nacos/{id}")\n    public String paymentInfo(@PathVariable("id") Integer id) {\n        return restTemplate.getForObject(serverURL + "/payment/nacos/" + id,String.class);\n    }\n}\n'))))),Object(c.b)("h2",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u542f\u52a8 ",Object(c.b)("inlineCode",{parentName:"li"},"83")),Object(c.b)("li",{parentName:"ul"},"\u8bbf\u95ee ",Object(c.b)("inlineCode",{parentName:"li"},"http://localhost:83/consumer/payment/nacos/1"))),Object(c.b)("br",null),Object(c.b)("h1",{id:"\u5fae\u670d\u52a1\u8d1f\u8f7d\u5747\u8861"},"\u5fae\u670d\u52a1\u8d1f\u8f7d\u5747\u8861"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u9ed8\u8ba4\u5c31\u5f00\u542f\u4e86\u8d1f\u8f7d\u5747\u8861\uff0c\u4e0d\u8bba\u662f\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"RestTemplate")," \u8fd8\u662f ",Object(c.b)("inlineCode",{parentName:"p"},"OpenFeign"),"\uff0c\u591a\u6b21\u901a\u8fc7 ",Object(c.b)("inlineCode",{parentName:"p"},"83")," \u8c03\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"nacos-payment-provider")," \u670d\u52a1\uff0c\u53ef\u4ee5\u5728\u54cd\u5e94\u4fe1\u606f\u4e2d\u770b\u5230 ",Object(c.b)("inlineCode",{parentName:"p"},"9001")," \u4e0e ",Object(c.b)("inlineCode",{parentName:"p"},"9002")," \u4e24\u4e2a\u670d\u52a1\u8282\u70b9\u5728\u8fdb\u884c ",Object(c.b)("inlineCode",{parentName:"p"},"\u8f6e\u8be2")),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u6839\u636e\u4f9d\u8d56\u5173\u7cfb\uff0c\u53ef\u4ee5\u5f97\u77e5 Nacos \u4e5f\u662f\u57fa\u4e8e Ribbon \u6765\u5b9e\u73b0\u5ba2\u6237\u7aef\u8d1f\u8f7d\u5747\u8861\u7684"))))}u.isMDXComponent=!0},570:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),p=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(t),d=a,m=s["".concat(o,".").concat(d)]||s[d]||u[d]||c;return t?r.a.createElement(m,i(i({ref:n},b),{},{components:t})):r.a.createElement(m,i({ref:n},b))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var b=2;b<c;b++)o[b]=t[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},571:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},572:function(e,n,t){"use strict";var a=t(0);const r=Object(a.createContext)(void 0);n.a=r},573:function(e,n,t){"use strict";var a=t(0),r=t(572);n.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},574:function(e,n,t){"use strict";var a=t(0),r=t.n(a),c=t(573),o=t(571),i=t(47),l=t.n(i);const b=37,p=39;n.a=function(e){const{block:n,children:t,defaultValue:i,values:s,groupId:u}=e,{tabGroupChoices:d,setTabGroupChoices:m}=Object(c.a)(),[O,g]=Object(a.useState)(i),[j,f]=Object(a.useState)(!1);if(null!=u){const e=d[u];null!=e&&e!==O&&s.some(n=>n.value===e)&&g(e)}const v=e=>{g(e),null!=u&&m(u,e)},y=[],N=e=>{e.metaKey||e.altKey||e.ctrlKey||f(!0)},h=()=>{f(!1)};return Object(a.useEffect)(()=>{window.addEventListener("keydown",N),window.addEventListener("mousedown",h)},[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n})},s.map(({value:e,label:n})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===e,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===e}),style:j?{}:{outline:"none"},key:e,ref:e=>y.push(e),onKeyDown:e=>{((e,n,t)=>{switch(t.keyCode){case p:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case b:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(y,e.target,e),N(e)},onFocus:()=>v(e),onClick:()=>{v(e),f(!1)},onPointerDown:()=>f(!1)},n))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(t).filter(e=>e.props.value===O)[0]))}},575:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){return r.a.createElement("div",null,e.children)}}}]);