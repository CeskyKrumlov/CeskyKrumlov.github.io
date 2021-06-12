(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),o=(n(0),n(490)),i=n(494),c=n(495),l={id:"6.dashboard",title:"\u56fe\u5f62\u5316\u670d\u52a1\u76d1\u63a7 Dashboard",hide_title:!0},d={unversionedId:"springcloud/\u5bb9\u9519\u9650\u6d41/hystrix/6.dashboard",id:"springcloud/\u5bb9\u9519\u9650\u6d41/hystrix/6.dashboard",isDocsHomePage:!1,title:"\u56fe\u5f62\u5316\u670d\u52a1\u76d1\u63a7 Dashboard",description:"\u56fe\u5f62\u5316\u670d\u52a1\u76d1\u63a7 Dashboard",source:"@site/docs/springcloud/\u5bb9\u9519\u9650\u6d41/hystrix/6.\u56fe\u5f62\u5316\u670d\u52a1\u76d1\u63a7.md",slug:"/springcloud/\u5bb9\u9519\u9650\u6d41/hystrix/6.dashboard",permalink:"/docs/springcloud/\u5bb9\u9519\u9650\u6d41/hystrix/6.dashboard",version:"current",sidebar:"someSidebar",previous:{title:"\u670d\u52a1\u7194\u65ad Break",permalink:"/docs/springcloud/\u5bb9\u9519\u9650\u6d41/hystrix/5.microServiceBreak"},next:{title:"Spring Cloud Gateway \u6982\u8ff0",permalink:"/docs/springcloud/\u670d\u52a1\u7f51\u5173/springcloudgateway/1.springcloudgateway"}},s=[{value:"\u56fe\u5f62\u5316\u670d\u52a1\u76d1\u63a7 Dashboard",id:"\u56fe\u5f62\u5316\u670d\u52a1\u76d1\u63a7-dashboard",children:[]},{value:"Cloud-consumer-hystrix-dashboard9001",id:"cloud-consumer-hystrix-dashboard9001",children:[{value:"pom",id:"pom",children:[]},{value:"yaml",id:"yaml",children:[]},{value:"\u4e3b\u542f\u52a8\u7c7b",id:"\u4e3b\u542f\u52a8\u7c7b",children:[]}]},{value:"\u670d\u52a1\u7aef Provider",id:"\u670d\u52a1\u7aef-provider",children:[{value:"Pom",id:"pom-1",children:[]},{value:"yaml",id:"yaml-1",children:[]}]},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",children:[]}],p={rightToc:s};function b(e){var t=e.components,l=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,l,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"\u56fe\u5f62\u5316\u670d\u52a1\u76d1\u63a7-dashboard"},"\u56fe\u5f62\u5316\u670d\u52a1\u76d1\u63a7 Dashboard"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"\u51c6\u5b9e\u65f6\u8c03\u7528\u76d1\u63a7 ",Object(o.b)("inlineCode",{parentName:"strong"},"Hystrix Dashboard"))),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"Hystrix \u4f1a\u6301\u7eed\u8bb0\u5f55\u6240\u6709\u901a\u8fc7 Hystrix \u53d1\u8d77\u7684\u8bf7\u6c42\u7684\u6267\u884c\u4fe1\u606f\uff0c\u4ee5\u540c\u7ea7\u62a5\u8868\u548c\u56fe\u5f62\u7684\u5f62\u5f0f\u5c55\u793a\u7ed9\u7528\u6237"),Object(o.b)("li",{parentName:"ul"},"\u5305\u62ec ",Object(o.b)("inlineCode",{parentName:"li"},"\u6bcf\u79d2\u6267\u884c\u8bf7\u6c42\u6570"),"\u3001",Object(o.b)("inlineCode",{parentName:"li"},"\u8bf7\u6c42\u6210\u529f\u6570"),"\u3001",Object(o.b)("inlineCode",{parentName:"li"},"\u8bf7\u6c42\u5931\u8d25\u6570")),Object(o.b)("li",{parentName:"ul"},"Netfix \u901a\u8fc7 ",Object(o.b)("inlineCode",{parentName:"li"},"hystrix-metrics-event-stream")," \u9879\u76ee\u5b9e\u73b0\u5bf9\u4ee5\u4e0a\u6307\u6807\u7684\u76d1\u63a7"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Spring Cloud")," \u63d0\u4f9b\u4e86\u5bf9 ",Object(o.b)("inlineCode",{parentName:"li"},"Hystrix Dashboard")," \u7684\u6574\u5408"))),Object(o.b)("br",null),Object(o.b)("h1",{id:"cloud-consumer-hystrix-dashboard9001"},"Cloud-consumer-hystrix-dashboard9001"),Object(o.b)("h2",{id:"pom"},"pom"),Object(o.b)(i.a,{defaultValue:"1",values:[{label:"\u6838\u5fc3\u4f9d\u8d56",value:"1"},{label:"\u5b8c\u6574\u4f9d\u8d56",value:"2"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"1",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-netflix-hystrix-dashboard</artifactId>\n</dependency>\n"))),Object(o.b)(c.a,{value:"2",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<dependencies>\n    <dependency>\x3c!-- \u5f15\u7528\u81ea\u5df1\u5b9a\u4e49\u7684api\u901a\u7528\u5305\uff0c\u53ef\u4ee5\u4f7f\u7528Payment\u652f\u4ed8Entity --\x3e\n        <groupId>org.example</groupId>\n        <artifactId>cloud-api-commons</artifactId>\n        <version>1.0-SNAPSHOT</version>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-web</artifactId>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework.cloud</groupId>\n        <artifactId>spring-cloud-starter-netflix-hystrix-dashboard</artifactId>\n    </dependency>\n    \x3c!--\u76d1\u63a7--\x3e\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-actuator</artifactId>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework.cloud</groupId>\n        <artifactId>spring-cloud-starter-netflix-hystrix</artifactId>\n    </dependency>\n    \x3c!--eureka client--\x3e\n    <dependency>\n        <groupId>org.springframework.cloud</groupId>\n        <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>\n    </dependency>\n    \x3c!--\u70ed\u90e8\u7f72--\x3e\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-devtools</artifactId>\n        <scope>runtime</scope>\n        <optional>true</optional>\n    </dependency>\n    <dependency>\n        <groupId>org.projectlombok</groupId>\n        <artifactId>lombok</artifactId>\n        <optional>true</optional>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-test</artifactId>\n        <scope>test</scope>\n    </dependency>\n</dependencies>\n")))),Object(o.b)("h2",{id:"yaml"},"yaml"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="application.yaml"',title:'"application.yaml"'}),"server:\n  port: 9001\n\nspring:\n  application:\n    name: cloud-provider-hystrix-payment\n\n#\u8fd9\u91cc\u53ea\u628afeign\u505a\u5ba2\u6237\u7aef\u7528\uff0c\u4e0d\u6ce8\u518c\u8fdbeureka\neureka:\n  client:\n    #\u8868\u793a\u662f\u5426\u5c06\u81ea\u5df1\u6ce8\u518c\u8fdbEurekaServer\u9ed8\u8ba4\u4e3atrue\n    register-with-eureka: true\n    service-url:\n      defaultZone: http://localhost:7001/eureka\n      #defaultZone: http://eureka7001.com:7001/eureka/\n")),Object(o.b)("h2",{id:"\u4e3b\u542f\u52a8\u7c7b"},"\u4e3b\u542f\u52a8\u7c7b"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u6dfb\u52a0 ",Object(o.b)("inlineCode",{parentName:"li"},"@EnableHystrixDashboard")," \u6ce8\u89e3")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"@SpringBootApplication\n@EnableHystrixDashboard\npublic class HystrixDashboardMain9001 {\n    public static void main(String[] args) {\n        SpringApplication.run(HystrixDashboardMain9001.class, args);\n    }\n}\n")),Object(o.b)("br",null),Object(o.b)("h1",{id:"\u670d\u52a1\u7aef-provider"},"\u670d\u52a1\u7aef Provider"),Object(o.b)("h2",{id:"pom-1"},"Pom"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u6ce8\u610f")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u6240\u6709\u7684 Provider \u5fae\u670d\u52a1\uff088001\u30018002 \u7b49\uff09 \u90fd\u9700\u8981\u76d1\u63a7\u4f9d\u8d56\u914d\u7f6e"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"\x3c!--\u76d1\u63a7--\x3e\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-actuator</artifactId>\n</dependency>\n")))),Object(o.b)("h2",{id:"yaml-1"},"yaml"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u9700\u8981\u8bbe\u7f6e ",Object(o.b)("inlineCode",{parentName:"li"},'management.endpoints.web.exposure.include: "*"'))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'server:\n  port: 8001\n\nspring:\n  application:\n    name: cloud-provider-hystrix-payment\n\neureka:\n  client:\n    register-with-eureka: true\n    fetch-registry: true\n    service-url:\n      #defaultZone: http://localhost:7001/eureka\n      defaultZone: http://eureka7001.com:7001/eureka/ # \u914d\u7f6e\u5728\u672c\u673a\u5668 host \u6587\u4ef6\u91cc\n\nmanagement:\n  endpoints:\n    web:\n      exposure:\n        include: "*"\n')),Object(o.b)("br",null),Object(o.b)("h1",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u8fd0\u884c ",Object(o.b)("inlineCode",{parentName:"li"},"Cloud-consumer-hystrix-dashboard9001")," \u9879\u76ee"),Object(o.b)("li",{parentName:"ul"},"\u8bbf\u95ee ",Object(o.b)("inlineCode",{parentName:"li"},"http://localhost:9001/hystrix")," \u51fa\u73b0\u7f51\u9875\u5373\u8868\u793a dashboard \u8fd0\u884c\u6210\u529f")),Object(o.b)("img",{src:n(646).default,style:{zoom:"100%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(o.b)("br",null),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u542f\u52a8\u6ce8\u518c\u4e2d\u5fc3 ",Object(o.b)("inlineCode",{parentName:"li"},"7001")),Object(o.b)("li",{parentName:"ul"},"\u542f\u52a8 ",Object(o.b)("inlineCode",{parentName:"li"},"provider8001"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u8bbf\u95ee ",Object(o.b)("inlineCode",{parentName:"li"},"http://127.0.0.1:8001/payment/circuit/2"),"\u3001",Object(o.b)("inlineCode",{parentName:"li"},"http://127.0.0.1:8001/payment/circuit/-2"),"\uff0c\u5236\u9020\u4e00\u4e9b\u6d41\u91cf"))),Object(o.b)("li",{parentName:"ul"},"\u8bbf\u95ee ",Object(o.b)("inlineCode",{parentName:"li"},"localhost:9001/hystrix"),"\uff0c\u5728\u9875\u9762\u7684\u8f93\u5165\u6846\u8f93\u5165\u8981\u76d1\u63a7\u7684\u5fae\u670d\u52a1\uff0c\u4f8b\u5982\u8981\u76d1\u63a7 ",Object(o.b)("inlineCode",{parentName:"li"},"8001"),"\uff0c\u5219\u8f93\u5165",Object(o.b)("inlineCode",{parentName:"li"},"http://127.0.0.1:8001/actuator/hystrix.stream"),"\uff0c\u70b9 ",Object(o.b)("inlineCode",{parentName:"li"},"Monitor Stream")," \u6309\u94ae")),Object(o.b)("img",{src:n(647).default,style:{zoom:"60%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(o.b)("br",null))}b.isMDXComponent=!0},490:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),s=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,m=p["".concat(i,".").concat(u)]||p[u]||b[u]||o;return n?a.a.createElement(m,c(c({ref:t},d),{},{components:n})):a.a.createElement(m,c({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},491:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},492:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},493:function(e,t,n){"use strict";var r=n(0),a=n(492);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},494:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(493),i=n(491),c=n(47),l=n.n(c);const d=37,s=39;t.a=function(e){const{block:t,children:n,defaultValue:c,values:p,groupId:b}=e,{tabGroupChoices:u,setTabGroupChoices:m}=Object(o.a)(),[f,g]=Object(r.useState)(c),[O,y]=Object(r.useState)(!1);if(null!=b){const e=u[b];null!=e&&e!==f&&p.some(t=>t.value===e)&&g(e)}const j=e=>{g(e),null!=b&&m(b,e)},h=[],v=e=>{e.metaKey||e.altKey||e.ctrlKey||y(!0)},x=()=>{y(!1)};return Object(r.useEffect)(()=>{window.addEventListener("keydown",v),window.addEventListener("mousedown",x)},[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":f===e}),style:O?{}:{outline:"none"},key:e,ref:e=>h.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case s:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case d:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(h,e.target,e),v(e)},onFocus:()=>j(e),onClick:()=>{j(e),y(!1)},onPointerDown:()=>y(!1)},t))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter(e=>e.props.value===f)[0]))}},495:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},646:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/7-7782b3d965fe4efa970846fd125200d7.png"},647:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/8-7d1e1dd7c3845004a00c954aaeddc803.png"}}]);