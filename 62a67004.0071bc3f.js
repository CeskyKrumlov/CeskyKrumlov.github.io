(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{246:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return d}));var r=t(2),a=t(6),i=(t(0),t(548)),o=t(552),c=t(553),l={id:"2.streamProvider",title:"\u6d88\u606f\u9a71\u52a8\u751f\u4ea7\u8005",hide_title:!0},s={unversionedId:"springcloud/\u6d88\u606f\u9a71\u52a8/2.streamProvider",id:"springcloud/\u6d88\u606f\u9a71\u52a8/2.streamProvider",isDocsHomePage:!1,title:"\u6d88\u606f\u9a71\u52a8\u751f\u4ea7\u8005",description:"\u6848\u4f8b\u8bbe\u8ba1",source:"@site/docs/springcloud/\u6d88\u606f\u9a71\u52a8/2.streamProvider.mdx",slug:"/springcloud/\u6d88\u606f\u9a71\u52a8/2.streamProvider",permalink:"/docs/springcloud/\u6d88\u606f\u9a71\u52a8/2.streamProvider",version:"current",sidebar:"someSidebar",previous:{title:"Stream \u6982\u8ff0",permalink:"/docs/springcloud/\u6d88\u606f\u9a71\u52a8/1.stream"},next:{title:"\u6d88\u606f\u9a71\u52a8\u6d88\u8d39\u8005",permalink:"/docs/springcloud/\u6d88\u606f\u9a71\u52a8/3.streamConsumer"}},b=[{value:"\u6848\u4f8b\u8bbe\u8ba1",id:"\u6848\u4f8b\u8bbe\u8ba1",children:[]},{value:"\u6d88\u606f\u9a71\u52a8\u751f\u4ea7\u8005",id:"\u6d88\u606f\u9a71\u52a8\u751f\u4ea7\u8005",children:[{value:"POM",id:"pom",children:[]},{value:"YAML",id:"yaml",children:[]},{value:"\u4e3b\u542f\u52a8\u7c7b",id:"\u4e3b\u542f\u52a8\u7c7b",children:[]},{value:"\u4e1a\u52a1\u7c7b",id:"\u4e1a\u52a1\u7c7b",children:[{value:"\u53d1\u9001\u6d88\u606f Service \u5c42",id:"\u53d1\u9001\u6d88\u606f-service-\u5c42",children:[]},{value:"Controller",id:"controller",children:[]}]},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",children:[]}]}],u={rightToc:b};function d(e){var n=e.components,l=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,l,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u6848\u4f8b\u8bbe\u8ba1"},"\u6848\u4f8b\u8bbe\u8ba1"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u521b\u5efa\u4e09\u4e2a\u5fae\u670d\u52a1"),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u4e00\u4e2a\u6d88\u606f\u9a71\u52a8\u751f\u4ea7\u8005\uff1a",Object(i.b)("inlineCode",{parentName:"li"},"cloud-stream-rabbitmq-provider8801")),Object(i.b)("li",{parentName:"ul"},"\u4e24\u4e2a\u6d88\u606f\u9a71\u52a8\u6d88\u8d39\u8005\uff1a",Object(i.b)("inlineCode",{parentName:"li"},"cloud-stream-rabbitmq-consumer8802"),"\u548c  ",Object(i.b)("inlineCode",{parentName:"li"},"8803")))),Object(i.b)("br",null),Object(i.b)("h1",{id:"\u6d88\u606f\u9a71\u52a8\u751f\u4ea7\u8005"},"\u6d88\u606f\u9a71\u52a8\u751f\u4ea7\u8005"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u65b0\u5efa ",Object(i.b)("inlineCode",{parentName:"strong"},"cloud-stream-rabbitmq-provider8801")," \u5fae\u670d\u52a1"))),Object(i.b)("h2",{id:"pom"},"POM"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<dependencies>\n    \x3c!--stream rabbit --\x3e\n    <dependency>\n        <groupId>org.springframework.cloud</groupId>\n        <artifactId>spring-cloud-starter-stream-rabbit</artifactId>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-web</artifactId>\n    </dependency>\n    \x3c!--\u76d1\u63a7--\x3e\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-actuator</artifactId>\n    </dependency>\n    \x3c!--eureka client--\x3e\n    <dependency>\n        <groupId>org.springframework.cloud</groupId>\n        <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>\n    </dependency>\n    \x3c!--\u70ed\u90e8\u7f72--\x3e\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-devtools</artifactId>\n        <scope>runtime</scope>\n        <optional>true</optional>\n    </dependency>\n    <dependency>\n        <groupId>org.projectlombok</groupId>\n        <artifactId>lombok</artifactId>\n        <optional>true</optional>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-test</artifactId>\n        <scope>test</scope>\n    </dependency>\n</dependencies>\n")),Object(i.b)("h2",{id:"yaml"},"YAML"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u63d0\u793a")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u8fd9\u91cc\u914d\u7f6e\u6587\u4ef6\u7206\u7ea2\u662f\u6ca1\u6709\u5f71\u54cd\u7684\uff0c\u5c1d\u8bd5\u8fc7\u4e00\u4e9b\u5176\u4ed6\u5199\u6cd5\uff0c\u53ef\u4ee5\u4ee4 \u751f\u4ea7\u8005Provider \u6210\u529f\u542f\u52a8\u6267\u884c\uff0c\u4f46\u540e\u7eed\u7684\u6d88\u8d39\u8005\u9879\u76ee\u4e0d\u80fd\u63a5\u6536\u5230\u751f\u4ea7\u8005\u7684\u6d88\u606f"))),Object(i.b)(o.a,{defaultValue:"local",values:[{label:"\u672c\u5730RabbitMQ",value:"local"},{label:"\u8fdc\u7a0bRabbitMQ",value:"remote"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"local",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"server:\n  port: 8801\n\nspring:\n  application:\n    name: cloud-stream-provider\n  cloud:\n    stream:\n      binders: #\u5728\u6b64\u5904\u914d\u7f6e\u8981\u7ed1\u5b9a\u7684rabbitmq\u7684\u670d\u52a1\u4fe1\u606f\n        defaultRabbit: #\u8868\u793a\u5b9a\u4e49\u7684\u540d\u79f0\uff0c\u7528\u4e8ebinding\u6574\u5408\n          type: rabbit #\u6d88\u606f\u7ec4\u4ef6\u7c7b\u578b\n          environment: #\u8bbe\u7f6erabbitmq\u7684\u76f8\u5173\u73af\u5883\u914d\u7f6e\n            spring:\n              rabbitmq:\n                host: localhost\n                port: 5672\n                username: guest\n                password: guest\n      bindings: #\u670d\u52a1\u7684\u6574\u5408\u5904\u7406\n        output: #\u8fd9\u4e2a\u540d\u5b57\u662f\u4e00\u4e2a\u901a\u9053\u7684\u540d\u79f0\n          destination: studyExchange #\u8868\u793a\u8981\u4f7f\u7528\u7684Exchange\u540d\u79f0\u5b9a\u4e49\n          content-type: application/json #\u8bbe\u7f6e\u6d88\u606f\u7c7b\u578b\uff0c\u672c\u6b21\u4e3ajson\uff0c\u672c\u6587\u8981\u8bbe\u7f6e\u4e3a\u201ctext/plain\u201d\n          binder: defaultRabbit #\u8bbe\u7f6e\u8981\u7ed1\u5b9a\u7684\u6d88\u606f\u670d\u52a1\u7684\u5177\u4f53\u8bbe\u7f6e\n\neureka:\n  client:\n    service-url:\n      defaultZone: http://localhost:7001/eureka\n  instance:\n    lease-renewal-interval-in-seconds: 2 #\u8bbe\u7f6e\u5fc3\u8df3\u7684\u65f6\u95f4\u95f4\u9694\uff08\u9ed8\u8ba4\u662f30S)\n    lease-expiration-duration-in-seconds: 5 #\u5982\u679c\u8d85\u8fc75S\u95f4\u9694\u5c31\u6ce8\u9500\u8282\u70b9 \u9ed8\u8ba4\u662f90s\n    instance-id: send-8801.com #\u5728\u4fe1\u606f\u5217\u8868\u65f6\u663e\u793a\u4e3b\u673a\u540d\u79f0\n    prefer-ip-address: true #\u8bbf\u95ee\u7684\u8def\u5f84\u53d8\u4e3aIP\u5730\u5740\n"))),Object(i.b)(c.a,{value:"remote",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"server:\n  port: 8801\n\nspring:\n  application:\n    name: microservice-stream-provider-service\n  rabbitmq:\n    host: aliyun\n    port: 5672\n    username: guest\n    password: guest\n  cloud:\n    stream:\n      binders:\n        defaultRabbit:\n          type: rabbit\n      bindings:\n        output:\n          destination: cruiiExchange\n          content-type: application/json\n          binder: defaultRabbit\n\neureka:\n  client:\n    service-url:\n      defaultZone: http://localhost:7001/eureka\n  instance:\n    lease-renewal-interval-in-seconds: 2 #\u8bbe\u7f6e\u5fc3\u8df3\u7684\u65f6\u95f4\u95f4\u9694\uff08\u9ed8\u8ba4\u662f30S)\n    lease-expiration-duration-in-seconds: 5 #\u5982\u679c\u8d85\u8fc75S\u95f4\u9694\u5c31\u6ce8\u9500\u8282\u70b9 \u9ed8\u8ba4\u662f90s\n    instance-id: send-8801.com #\u5728\u4fe1\u606f\u5217\u8868\u65f6\u663e\u793a\u4e3b\u673a\u540d\u79f0\n    prefer-ip-address: true #\u8bbf\u95ee\u7684\u8def\u5f84\u53d8\u4e3aIP\u5730\u5740\n")))),Object(i.b)("h2",{id:"\u4e3b\u542f\u52a8\u7c7b"},"\u4e3b\u542f\u52a8\u7c7b"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"@SpringBootApplication\n@EnableEurekaClient\npublic class StreamMQMain8801 {\n    public static void main(String[] args) {\n        SpringApplication.run(StreamMQMain8801.class, args);\n    }\n}\n")),Object(i.b)("h2",{id:"\u4e1a\u52a1\u7c7b"},"\u4e1a\u52a1\u7c7b"),Object(i.b)("h3",{id:"\u53d1\u9001\u6d88\u606f-service-\u5c42"},"\u53d1\u9001\u6d88\u606f Service \u5c42"),Object(i.b)(o.a,{defaultValue:"1",values:[{label:"Service \u63a5\u53e3",value:"1"},{label:"Service \u5b9e\u73b0\u7c7b",value:"2"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"1",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"public interface IMessageProvider {\n    /**\n     * \u53d1\u9001\u6d88\u606f\n     */\n    String send();\n}\n"))),Object(i.b)(c.a,{value:"2",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'import org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.beans.factory.annotation.Qualifier;\nimport org.springframework.cloud.stream.annotation.EnableBinding;\nimport org.springframework.cloud.stream.messaging.Source;\nimport org.springframework.integration.support.MessageBuilder;\nimport org.springframework.messaging.MessageChannel;\n\nimport java.util.UUID;\n\n\n/**\n * \u4e0e RabbitMQ \u4ea4\u4e92\u7684 Service \u5b9e\u73b0\u7c7b\n * \u57fa\u4e8e Stream Binder \u8fdb\u884c\u4ea4\u4e92\n */\n@EnableBinding(Source.class) // \u5f15\u5165 cloud.stream \u7684 Source\uff0c\u8868\u793a\u751f\u4ea7\u8005\npublic class MessageProviderImpl implements IMessageProvider {\n\n    @Autowired\n    // @Qualifier("nullChannel")\n    private MessageChannel output; // \u6d88\u606f\u53d1\u9001\u7ba1\u9053\n\n    @Override\n    public String send() {\n        String serialNum = UUID.randomUUID().toString();\n        output.send(MessageBuilder.withPayload(serialNum).build());\n        System.out.println("serialNum = " + serialNum);\n        return serialNum;\n    }\n}\n')))),Object(i.b)("h3",{id:"controller"},"Controller"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@RestController\npublic class SendMessageController {\n\n    @Resource\n    private IMessageProvider messageProvider;\n\n    @GetMapping("/sendMessage")\n    public String sendMessage() {\n        return messageProvider.send();\n    }\n}\n')),Object(i.b)("h2",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u542f\u52a8\u6ce8\u518c\u4e2d\u5fc3 ",Object(i.b)("inlineCode",{parentName:"li"},"7001")),Object(i.b)("li",{parentName:"ul"},"\u542f\u52a8 ",Object(i.b)("inlineCode",{parentName:"li"},"rabbitmq")),Object(i.b)("li",{parentName:"ul"},"\u542f\u52a8 ",Object(i.b)("inlineCode",{parentName:"li"},"8801")),Object(i.b)("li",{parentName:"ul"},"\u75af\u72c2\u8bbf\u95ee\uff1a",Object(i.b)("inlineCode",{parentName:"li"},"http://localhost:8801/sendMessage"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u540e\u53f0\u770b\u5230\u4e00\u5806 UUID"),Object(i.b)("li",{parentName:"ul"},"\u8fd4\u56de\u54cd\u5e94\u4e86\u4e00\u5806 UUID"))),Object(i.b)("li",{parentName:"ul"},"\u767b\u5f55 RabbitMQ \u63a7\u5236\u9762\u677f\uff0c",Object(i.b)("inlineCode",{parentName:"li"},"localhost:15672"),"\uff0c\u67e5\u770b Overview \u9762\u677f\uff0c\u53ef\u4ee5\u770b\u5230\u6709\u6d41\u91cf\u8fdb\u5165")),Object(i.b)("img",{src:t(900).default,style:{zoom:"60%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(i.b)("br",null))}d.isMDXComponent=!0},548:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),b=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=b(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(t),p=r,m=u["".concat(o,".").concat(p)]||u[p]||d[p]||i;return t?a.a.createElement(m,c(c({ref:n},s),{},{components:t})):a.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},549:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},550:function(e,n,t){"use strict";var r=t(0);const a=Object(r.createContext)(void 0);n.a=a},551:function(e,n,t){"use strict";var r=t(0),a=t(550);n.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},552:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(551),o=t(549),c=t(47),l=t.n(c);const s=37,b=39;n.a=function(e){const{block:n,children:t,defaultValue:c,values:u,groupId:d}=e,{tabGroupChoices:p,setTabGroupChoices:m}=Object(i.a)(),[g,f]=Object(r.useState)(c),[v,O]=Object(r.useState)(!1);if(null!=d){const e=p[d];null!=e&&e!==g&&u.some(n=>n.value===e)&&f(e)}const j=e=>{f(e),null!=d&&m(d,e)},y=[],h=e=>{e.metaKey||e.altKey||e.ctrlKey||O(!0)},w=()=>{O(!1)};return Object(r.useEffect)(()=>{window.addEventListener("keydown",h),window.addEventListener("mousedown",w)},[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n})},u.map(({value:e,label:n})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===e,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":g===e}),style:v?{}:{outline:"none"},key:e,ref:e=>y.push(e),onKeyDown:e=>{((e,n,t)=>{switch(t.keyCode){case b:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case s:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(y,e.target,e),h(e)},onFocus:()=>j(e),onClick:()=>{j(e),O(!1)},onPointerDown:()=>O(!1)},n))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(t).filter(e=>e.props.value===g)[0]))}},553:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){return a.a.createElement("div",null,e.children)}},900:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/3-cffbb551e6e6a4b8b320e06a3c9209fa.png"}}]);