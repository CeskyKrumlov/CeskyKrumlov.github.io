(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{325:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(2),a=t(6),o=(t(0),t(564)),i=(t(568),t(569),{id:"3.streamConsumer",title:"\u6d88\u606f\u9a71\u52a8\u6d88\u8d39\u8005",hide_title:!0}),c={unversionedId:"springcloud/\u6d88\u606f\u9a71\u52a8/3.streamConsumer",id:"springcloud/\u6d88\u606f\u9a71\u52a8/3.streamConsumer",isDocsHomePage:!1,title:"\u6d88\u606f\u9a71\u52a8\u6d88\u8d39\u8005",description:"\u6d88\u606f\u9a71\u52a8\u6d88\u8d39\u8005",source:"@site/docs/springcloud/\u6d88\u606f\u9a71\u52a8/3.streamConsumer.mdx",slug:"/springcloud/\u6d88\u606f\u9a71\u52a8/3.streamConsumer",permalink:"/docs/springcloud/\u6d88\u606f\u9a71\u52a8/3.streamConsumer",version:"current",sidebar:"someSidebar",previous:{title:"\u6d88\u606f\u9a71\u52a8\u751f\u4ea7\u8005",permalink:"/docs/springcloud/\u6d88\u606f\u9a71\u52a8/2.streamProvider"},next:{title:"\u5206\u7ec4\u6d88\u8d39\u4e0e\u6301\u4e45\u5316",permalink:"/docs/springcloud/\u6d88\u606f\u9a71\u52a8/4.groupConsumePersistence"}},s=[{value:"\u6d88\u606f\u9a71\u52a8\u6d88\u8d39\u8005",id:"\u6d88\u606f\u9a71\u52a8\u6d88\u8d39\u8005",children:[{value:"POM",id:"pom",children:[]},{value:"YAML",id:"yaml",children:[]},{value:"\u4e3b\u542f\u52a8",id:"\u4e3b\u542f\u52a8",children:[]},{value:"\u4e1a\u52a1\u7c7b",id:"\u4e1a\u52a1\u7c7b",children:[{value:"Controller",id:"controller",children:[]}]},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",children:[]}]}],l={rightToc:s};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"\u6d88\u606f\u9a71\u52a8\u6d88\u8d39\u8005"},"\u6d88\u606f\u9a71\u52a8\u6d88\u8d39\u8005"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"cloud-stream-rabbitmq-consumer8802")))),Object(o.b)("h2",{id:"pom"},"POM"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<dependencies>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-web</artifactId>\n    </dependency>\n    \x3c!--\u76d1\u63a7--\x3e\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-actuator</artifactId>\n    </dependency>\n    \x3c!--eureka client--\x3e\n    <dependency>\n        <groupId>org.springframework.cloud</groupId>\n        <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>\n    </dependency>\n    \x3c!--stream rabbit --\x3e\n    <dependency>\n        <groupId>org.springframework.cloud</groupId>\n        <artifactId>spring-cloud-starter-stream-rabbit</artifactId>\n    </dependency>\n    \x3c!--\u70ed\u90e8\u7f72--\x3e\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-devtools</artifactId>\n        <scope>runtime</scope>\n        <optional>true</optional>\n    </dependency>\n    <dependency>\n        <groupId>org.projectlombok</groupId>\n        <artifactId>lombok</artifactId>\n        <optional>true</optional>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-test</artifactId>\n        <scope>test</scope>\n    </dependency>\n</dependencies>\n")),Object(o.b)("h2",{id:"yaml"},"YAML"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"server:\n  port: 8802\n\nspring:\n  application:\n    name: cloud-stream-consumer\n  cloud:\n    stream:\n      binders: #\u5728\u6b64\u5904\u914d\u7f6e\u8981\u7ed1\u5b9a\u7684rabbitmq\u7684\u670d\u52a1\u4fe1\u606f\n        defaultRabbit: #\u8868\u793a\u5b9a\u4e49\u7684\u540d\u79f0\uff0c\u7528\u4e8ebinding\u6574\u5408\n          type: rabbit #\u6d88\u606f\u7ec4\u4ef6\u7c7b\u578b\n          environment: #\u8bbe\u7f6erabbitmq\u7684\u76f8\u5173\u73af\u5883\u914d\u7f6e\n            spring:\n              rabbitmq:\n                host: localhost\n                port: 5672\n                username: guest\n                password: guest\n      bindings: #\u670d\u52a1\u7684\u6574\u5408\u5904\u7406\n        - input: #\u8fd9\u4e2a\u540d\u5b57\u662f\u4e00\u4e2a\u901a\u9053\u7684\u540d\u79f0\n            destination: studyExchange #\u8868\u793a\u8981\u4f7f\u7528\u7684Exchange\u540d\u79f0\u5b9a\u4e49\n            content-type: application/json #\u8bbe\u7f6e\u6d88\u606f\u7c7b\u578b\uff0c\u672c\u6b21\u4e3ajson\uff0c\u672c\u6587\u8981\u8bbe\u7f6e\u4e3a\u201ctext/plain\u201d\n            binder: defaultRabbit #\u8bbe\u7f6e\u8981\u7ed1\u5b9a\u7684\u6d88\u606f\u670d\u52a1\u7684\u5177\u4f53\u8bbe\u7f6e\n            # group: bsxA #\u7ed1\u5b9a\u5206\u7ec4 \u9632\u6b62\u6d88\u606f\u91cd\u590d\u6d88\u8d39\neureka:\n  client:\n    service-url:\n      defaultZone: http://localhost:7001/eureka\n  instance:\n    lease-renewal-interval-in-seconds: 2 #\u8bbe\u7f6e\u5fc3\u8df3\u7684\u65f6\u95f4\u95f4\u9694\uff08\u9ed8\u8ba4\u662f30S)\n    lease-expiration-duration-in-seconds: 5 #\u5982\u679c\u8d85\u8fc75S\u95f4\u9694\u5c31\u6ce8\u9500\u8282\u70b9 \u9ed8\u8ba4\u662f90s\n    instance-id: receive-8802.com #\u5728\u4fe1\u606f\u5217\u8868\u65f6\u663e\u793a\u4e3b\u673a\u540d\u79f0\n    prefer-ip-address: true #\u8bbf\u95ee\u7684\u8def\u5f84\u53d8\u4e3aIP\u5730\u5740\n")),Object(o.b)("h2",{id:"\u4e3b\u542f\u52a8"},"\u4e3b\u542f\u52a8"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"@SpringBootApplication\n@EnableEurekaClient\npublic class StreamMQMain8802 {\n    public static void main(String[] args) {\n        SpringApplication.run(StreamMQMain8802.class, args);\n    }\n}\n")),Object(o.b)("h2",{id:"\u4e1a\u52a1\u7c7b"},"\u4e1a\u52a1\u7c7b"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u6d88\u8d39\u8005\u53ea\u6709 Controller")),Object(o.b)("h3",{id:"controller"},"Controller"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'import org.springframework.beans.factory.annotation.Value;\nimport org.springframework.cloud.stream.annotation.EnableBinding;\nimport org.springframework.cloud.stream.annotation.StreamListener;\nimport org.springframework.cloud.stream.messaging.Sink;\nimport org.springframework.messaging.Message;\nimport org.springframework.stereotype.Component;\n\n@Component\n@EnableBinding(Sink.class)\npublic class ReceiverMessageListenerController {\n\n    @Value("${server.port}")\n    private String serverPort;\n\n    @StreamListener(Sink.INPUT)\n    public void input(Message<String> message) {\n        System.out.println("\u6d88\u8d39\u80051\u53f7\uff0c -----\x3e \u63a5\u53d7\u5230\u7684\u6d88\u606f\uff1a " + message.getPayload()\n                + "\\t port: " + serverPort);\n    }\n}\n')),Object(o.b)("h2",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u542f\u52a8 ",Object(o.b)("inlineCode",{parentName:"li"},"7001"),"\u3001",Object(o.b)("inlineCode",{parentName:"li"},"8801"),"\u3001",Object(o.b)("inlineCode",{parentName:"li"},"8802")),Object(o.b)("li",{parentName:"ul"},"\u8bbf\u95ee ",Object(o.b)("inlineCode",{parentName:"li"},"http://localhost:8801/sendMessage")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"8802")," \u63a7\u5236\u53f0\u53ef\u4ee5\u770b\u5230\u4ece\u6d88\u606f\u4e2d\u95f4\u4ef6\u4e2d\u8bfb\u53d6\u5230\u7684\u6570\u636e")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"\u6d88\u8d39\u80051\u53f7\uff0c -----\x3e \u63a5\u53d7\u5230\u7684\u6d88\u606f\uff1a 26dec863-11da-43aa-ab4a-0716fce5663f   port: 8802\n\u6d88\u8d39\u80051\u53f7\uff0c -----\x3e \u63a5\u53d7\u5230\u7684\u6d88\u606f\uff1a 9e974b57-26bf-451a-bdfe-4401c3603a30   port: 8802\n\u6d88\u8d39\u80051\u53f7\uff0c -----\x3e \u63a5\u53d7\u5230\u7684\u6d88\u606f\uff1a e1ab7d59-c5f8-4122-b905-9c8d3720ede5   port: 8802\n")))}u.isMDXComponent=!0},564:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return t?a.a.createElement(m,c(c({ref:n},l),{},{components:t})):a.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},565:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},566:function(e,n,t){"use strict";var r=t(0);const a=Object(r.createContext)(void 0);n.a=a},567:function(e,n,t){"use strict";var r=t(0),a=t(566);n.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},568:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(567),i=t(565),c=t(47),s=t.n(c);const l=37,u=39;n.a=function(e){const{block:n,children:t,defaultValue:c,values:p,groupId:d}=e,{tabGroupChoices:b,setTabGroupChoices:m}=Object(o.a)(),[g,f]=Object(r.useState)(c),[O,y]=Object(r.useState)(!1);if(null!=d){const e=b[d];null!=e&&e!==g&&p.some(n=>n.value===e)&&f(e)}const j=e=>{f(e),null!=d&&m(d,e)},v=[],h=e=>{e.metaKey||e.altKey||e.ctrlKey||y(!0)},w=()=>{y(!1)};return Object(r.useEffect)(()=>{window.addEventListener("keydown",h),window.addEventListener("mousedown",w)},[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n})},p.map(({value:e,label:n})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===e,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":g===e}),style:O?{}:{outline:"none"},key:e,ref:e=>v.push(e),onKeyDown:e=>{((e,n,t)=>{switch(t.keyCode){case u:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case l:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(v,e.target,e),h(e)},onFocus:()=>j(e),onClick:()=>{j(e),y(!1)},onPointerDown:()=>y(!1)},n))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(t).filter(e=>e.props.value===g)[0]))}},569:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){return a.a.createElement("div",null,e.children)}}}]);