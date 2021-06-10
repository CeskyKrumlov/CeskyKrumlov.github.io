(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{251:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return d})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var a=t(2),r=t(6),i=(t(0),t(561)),o=t(565),c=t(566),l={id:"2.sentinelDashboard",title:"Sentinel \u521d\u59cb\u5316\u76d1\u63a7",hide_title:!0},d={unversionedId:"springcloudalibaba/\u6d41\u91cf\u536b\u5175/2.sentinelDashboard",id:"springcloudalibaba/\u6d41\u91cf\u536b\u5175/2.sentinelDashboard",isDocsHomePage:!1,title:"Sentinel \u521d\u59cb\u5316\u76d1\u63a7",description:"Sentinel \u521d\u59cb\u5316\u76d1\u63a7",source:"@site/docs/springcloudalibaba/\u6d41\u91cf\u536b\u5175/2.sentinel\u521d\u59cb\u5316\u76d1\u63a7.md",slug:"/springcloudalibaba/\u6d41\u91cf\u536b\u5175/2.sentinelDashboard",permalink:"/docs/springcloudalibaba/\u6d41\u91cf\u536b\u5175/2.sentinelDashboard",version:"current",sidebar:"someSidebar",previous:{title:"Sentinel \u6982\u8ff0",permalink:"/docs/springcloudalibaba/\u6d41\u91cf\u536b\u5175/1.sentinel"},next:{title:"Sentinel \u6d41\u91cf\u63a7\u5236",permalink:"/docs/springcloudalibaba/\u6d41\u91cf\u536b\u5175/3.sentinelFlowControl"}},s=[{value:"Sentinel \u521d\u59cb\u5316\u76d1\u63a7",id:"sentinel-\u521d\u59cb\u5316\u76d1\u63a7",children:[]},{value:"cloudalibaba-sentinel-service8401",id:"cloudalibaba-sentinel-service8401",children:[{value:"POM",id:"pom",children:[]},{value:"YAML",id:"yaml",children:[]},{value:"\u4e3b\u542f\u52a8",id:"\u4e3b\u542f\u52a8",children:[]},{value:"\u4e1a\u52a1\u7c7b",id:"\u4e1a\u52a1\u7c7b",children:[{value:"Controller",id:"controller",children:[]}]},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",children:[]}]}],b={rightToc:s};function p(e){var n=e.components,l=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,l,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"sentinel-\u521d\u59cb\u5316\u76d1\u63a7"},"Sentinel \u521d\u59cb\u5316\u76d1\u63a7"),Object(i.b)("blockquote",null,Object(i.b)("ol",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ol"},"\u542f\u52a8 Nacos 8848"),Object(i.b)("li",{parentName:"ol"},"\u65b0\u5efa\u4e00\u4e2a\u5fae\u670d\u52a1 ",Object(i.b)("inlineCode",{parentName:"li"},"cloudalibaba-sentinel-service8401")),Object(i.b)("li",{parentName:"ol"},"\u542f\u52a8 ",Object(i.b)("inlineCode",{parentName:"li"},"Sentinel8080")),Object(i.b)("li",{parentName:"ol"},"\u542f\u52a8 ",Object(i.b)("inlineCode",{parentName:"li"},"8401")),Object(i.b)("li",{parentName:"ol"},"\u901a\u8fc7 Sentinel \u63a7\u5236\u53f0\u76d1\u63a7 ",Object(i.b)("inlineCode",{parentName:"li"},"8401")," \u5fae\u670d\u52a1"))),Object(i.b)("br",null),Object(i.b)("h1",{id:"cloudalibaba-sentinel-service8401"},"cloudalibaba-sentinel-service8401"),Object(i.b)("h2",{id:"pom"},"POM"),Object(i.b)(o.a,{defaultValue:"1",values:[{label:"Nacos & Sentinel \u4f9d\u8d56",value:"1"},{label:"\u5b8c\u6574\u4f9d\u8d56",value:"2"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"1",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),"\x3c!-- SpringCloud ailibaba nacos--\x3e\n<dependency>\n    <groupId>com.alibaba.cloud</groupId>\n    <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>\n</dependency>\n\x3c!-- SpringCloud ailibaba sentinel-datasource-nacos \u6301\u4e45\u5316\u9700\u8981\u7528\u5230--\x3e\n<dependency>\n    <groupId>com.alibaba.csp</groupId>\n    <artifactId>sentinel-datasource-nacos</artifactId>\n</dependency>\n\x3c!-- SpringCloud ailibaba sentinel--\x3e\n<dependency>\n    <groupId>com.alibaba.cloud</groupId>\n    <artifactId>spring-cloud-starter-alibaba-sentinel</artifactId>\n</dependency>\n"))),Object(i.b)(c.a,{value:"2",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),"<dependencies>\n    \x3c!-- SpringCloud ailibaba nacos--\x3e\n    <dependency>\n        <groupId>com.alibaba.cloud</groupId>\n        <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>\n    </dependency>\n    \x3c!-- SpringCloud ailibaba sentinel-datasource-nacos \u6301\u4e45\u5316\u9700\u8981\u7528\u5230--\x3e\n    <dependency>\n        <groupId>com.alibaba.csp</groupId>\n        <artifactId>sentinel-datasource-nacos</artifactId>\n    </dependency>\n    \x3c!-- SpringCloud ailibaba sentinel--\x3e\n    <dependency>\n        <groupId>com.alibaba.cloud</groupId>\n        <artifactId>spring-cloud-starter-alibaba-sentinel</artifactId>\n    </dependency>\n    <dependency>\x3c!-- \u5f15\u7528\u81ea\u5df1\u5b9a\u4e49\u7684api\u901a\u7528\u5305\uff0c\u53ef\u4ee5\u4f7f\u7528Payment\u652f\u4ed8Entity --\x3e\n        <groupId>org.example</groupId>\n        <artifactId>cloud-api-commons</artifactId>\n        <version>1.0-SNAPSHOT</version>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework.cloud</groupId>\n        <artifactId>spring-cloud-starter-openfeign</artifactId>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-web</artifactId>\n    </dependency>\n    \x3c!--\u76d1\u63a7--\x3e\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-actuator</artifactId>\n    </dependency>\n    \x3c!--\u70ed\u90e8\u7f72--\x3e\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-devtools</artifactId>\n        <scope>runtime</scope>\n        <optional>true</optional>\n    </dependency>\n    <dependency>\n        <groupId>org.projectlombok</groupId>\n        <artifactId>lombok</artifactId>\n        <optional>true</optional>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-test</artifactId>\n        <scope>test</scope>\n    </dependency>\n</dependencies>\n")))),Object(i.b)("h2",{id:"yaml"},"YAML"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Sentinel 8719 \u7aef\u53e3\u7528\u6765\u4e0e Dashboard \u7684 8080 \u901a\u4fe1\uff0c\u5c06\u76d1\u63a7\u6570\u636e\u53d1\u9001\u5230 Dashboard \u4f9b\u5f00\u53d1\u8005\u67e5\u770b")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="application.yaml"',title:'"application.yaml"'}),"server:\n  port: 8401\n\nspring:\n  application:\n    name: cloudalibaba-sentinel-service\n  cloud:\n    nacos:\n      discovery:\n        #Nacos\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u5730\u5740\n        server-addr: localhost:8848\n    sentinel:\n      transport:\n        #\u914d\u7f6eSentin dashboard\u5730\u5740\n        dashboard: localhost:8080\n        # \u9ed8\u8ba48719\u7aef\u53e3\uff0c\u5047\u5982\u88ab\u5360\u7528\u4e86\u4f1a\u81ea\u52a8\u4ece8719\u7aef\u53e3+1\u8fdb\u884c\u626b\u63cf\uff0c\u76f4\u5230\u627e\u5230\u672a\u88ab\u5360\u7528\u7684 \u7aef\u53e3\n        port: 8719\n#      datasource:\n#        ds1:\n#          nacos:\n#            server-addr: localhost:8848\n#            dataId: cloudalibaba-sentinel-service\n#            groupId: DEFAULT_GROUP\n#            data-type: json\n#            rule-type: flow\n\nmanagement:\n  endpoints:\n    web:\n      exposure:\n        include: '*'\n\n#feign:\n#  sentinel:\n#    enabled: true #\u6fc0\u6d3bSentinel \u5bf9Feign\u7684\u652f\u6301\n")),Object(i.b)("h2",{id:"\u4e3b\u542f\u52a8"},"\u4e3b\u542f\u52a8"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"@SpringBootApplication\n@EnableDiscoveryClient\npublic class SentinelServiceMain8401 {\n    public static void main(String[] args) {\n        SpringApplication.run(SentinelServiceMain8401.class, args);\n    }\n}\n")),Object(i.b)("h2",{id:"\u4e1a\u52a1\u7c7b"},"\u4e1a\u52a1\u7c7b"),Object(i.b)("h3",{id:"controller"},"Controller"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:'title="FlowLimitController"',title:'"FlowLimitController"'}),'@RestController\n@Slf4j\npublic class FlowLimitController {\n    @GetMapping("/testA")\n    public String testA() {\n        return "----testA";\n    }\n\n    @GetMapping("/testB")\n    public String testB() {\n        return "----testB";\n    }\n}\n')),Object(i.b)("h2",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u6b65\u9aa4"),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u542f\u52a8 Nacos 8848"),Object(i.b)("li",{parentName:"ul"},"\u542f\u52a8 Sentinel 8080 \uff08\u4e0b\u8f7d\u597d\u7684 Jar \u5305\uff09"),Object(i.b)("li",{parentName:"ul"},"\u542f\u52a8\u5fae\u670d\u52a1 8401"),Object(i.b)("li",{parentName:"ul"},"\u8bbf\u95ee localhost:8080 \u67e5\u770b Sentinel \u63a7\u5236\u53f0"))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u95ee\u9898")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u4f1a\u53d1\u73b0 Sentinel \u91cc\u5565\u4e5f\u6ca1\u6709"),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"\u8fd9\u662f\u56e0\u4e3a Sentinel \u91c7\u7528\u61d2\u52a0\u8f7d\u673a\u5236"),Object(i.b)("li",{parentName:"ul"},"\u6267\u884c\u4e00\u6b21\u5fae\u670d\u52a1\u8bbf\u95ee\u5373\u53ef",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u8bbf\u95ee ",Object(i.b)("inlineCode",{parentName:"li"},"http://localhost:8401/testA")),Object(i.b)("li",{parentName:"ul"},"\u8bbf\u95ee ",Object(i.b)("inlineCode",{parentName:"li"},"http://localhost:8401/testB"))))))),Object(i.b)("img",{src:t(921).default,style:{zoom:"100%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(i.b)("br",null))}p.isMDXComponent=!0},561:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),s=function(e){var n=r.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=s(e.components);return r.a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),b=s(t),u=a,m=b["".concat(o,".").concat(u)]||b[u]||p[u]||i;return t?r.a.createElement(m,c(c({ref:n},d),{},{components:t})):r.a.createElement(m,c({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var d=2;d<i;d++)o[d]=t[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},562:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},563:function(e,n,t){"use strict";var a=t(0);const r=Object(a.createContext)(void 0);n.a=r},564:function(e,n,t){"use strict";var a=t(0),r=t(563);n.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},565:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(564),o=t(562),c=t(47),l=t.n(c);const d=37,s=39;n.a=function(e){const{block:n,children:t,defaultValue:c,values:b,groupId:p}=e,{tabGroupChoices:u,setTabGroupChoices:m}=Object(i.a)(),[f,g]=Object(a.useState)(c),[O,j]=Object(a.useState)(!1);if(null!=p){const e=u[p];null!=e&&e!==f&&b.some(n=>n.value===e)&&g(e)}const v=e=>{g(e),null!=p&&m(p,e)},y=[],h=e=>{e.metaKey||e.altKey||e.ctrlKey||j(!0)},I=()=>{j(!1)};return Object(a.useEffect)(()=>{window.addEventListener("keydown",h),window.addEventListener("mousedown",I)},[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n})},b.map(({value:e,label:n})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":f===e}),style:O?{}:{outline:"none"},key:e,ref:e=>y.push(e),onKeyDown:e=>{((e,n,t)=>{switch(t.keyCode){case s:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case d:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(y,e.target,e),h(e)},onFocus:()=>v(e),onClick:()=>{v(e),j(!1)},onPointerDown:()=>j(!1)},n))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(t).filter(e=>e.props.value===f)[0]))}},566:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){return r.a.createElement("div",null,e.children)}},921:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/2-d6c4b4adc49c003867910589f8d2b0d3.png"}}]);