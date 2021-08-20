(window.webpackJsonp=window.webpackJsonp||[]).push([[433],{489:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return b}));var r=t(2),a=t(6),o=(t(0),t(565)),i={id:"4.configManuellyRefresh",title:"Config \u624b\u52a8\u5237\u65b0",hide_title:!0},c={unversionedId:"springcloud/\u914d\u7f6e\u4e2d\u5fc3/4.configManuellyRefresh",id:"springcloud/\u914d\u7f6e\u4e2d\u5fc3/4.configManuellyRefresh",isDocsHomePage:!1,title:"Config \u624b\u52a8\u5237\u65b0",description:"Config \u624b\u52a8\u5237\u65b0",source:"@site/docs/springcloud/\u914d\u7f6e\u4e2d\u5fc3/4.config\u624b\u52a8\u5237\u65b0.md",slug:"/springcloud/\u914d\u7f6e\u4e2d\u5fc3/4.configManuellyRefresh",permalink:"/docs/springcloud/\u914d\u7f6e\u4e2d\u5fc3/4.configManuellyRefresh",version:"current",sidebar:"someSidebar",previous:{title:"\u914d\u7f6e\u5ba2\u6237\u7aef\u642d\u5efa",permalink:"/docs/springcloud/\u914d\u7f6e\u4e2d\u5fc3/3.configClientConstruct"},next:{title:"Bus \u6d88\u606f\u603b\u7ebf\u6982\u8ff0",permalink:"/docs/springcloud/\u914d\u7f6e\u4e2d\u5fc3/5.springcloudBus"}},l=[{value:"Config \u624b\u52a8\u5237\u65b0",id:"config-\u624b\u52a8\u5237\u65b0",children:[]},{value:"\u81ea\u52a8\u5237\u65b0",id:"\u81ea\u52a8\u5237\u65b0",children:[]}],p={rightToc:l};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"config-\u624b\u52a8\u5237\u65b0"},"Config \u624b\u52a8\u5237\u65b0"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u5728\u8fdc\u7a0b Git \u4ed3\u5e93\u66f4\u65b0\u914d\u7f6e\u4e4b\u540e"),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"\u907f\u514d ",Object(o.b)("inlineCode",{parentName:"li"},"Config Client 3355")," \u6bcf\u6b21\u90fd\u8981\u91cd\u542f\u624d\u80fd\u5e94\u7528\u65b0\u914d\u7f6e\u7684\u95ee\u9898"),Object(o.b)("li",{parentName:"ul"},"\u786e\u4fdd ",Object(o.b)("inlineCode",{parentName:"li"},"Config Client 3355")," \u5f15\u5165\u4e86 ",Object(o.b)("inlineCode",{parentName:"li"},"actuator"),"  Maven \u4f9d\u8d56"),Object(o.b)("li",{parentName:"ul"},"\u4fee\u6539 YML\uff0c\u66b4\u9732 actuator \u76d1\u63a7\u7aef\u53e3")),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="bootstrap.yml"',title:'"bootstrap.yml"'}),'server:\n  port: 3355\n\nspring:\n  application:\n    name: config-client\n  cloud:\n    #Config\u5ba2\u6237\u7aef\u914d\u7f6e\n    config:\n      label: master #\u5206\u652f\u540d\u79f0\n      name: config #\u914d\u7f6e\u6587\u4ef6\u540d\u79f0\n      profile: dev #\u8bfb\u53d6\u540e\u7f00\u540d\u79f0 \u4e0a\u8bc93\u4e2a\u7efc\u5408\u5c31\u662f master\u5206\u652f\u4e0a config-dev.yml\n      uri: http://localhost:3344 # spring cloud config server uri\n\neureka:\n  client:\n    service-url:\n      defaultZone: http://eureka7001.com:7001/eureka/\n\n#\u66b4\u9732 actuator \u76d1\u63a7\u7aef\u70b9 \u8ba9\u914d\u7f6e\u4fee\u6539\u53ef\u4ee5\u88ab\u76d1\u63a7\nmanagement:\n  endpoints:\n    web:\n      exposure:\n        include: "*"\n')),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"\u4fee\u6539 Controller\uff0c\u6dfb\u52a0 ",Object(o.b)("inlineCode",{parentName:"li"},"@RefreshScope")," \u6ce8\u89e3")),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java",metastring:'title="Controller"',title:'"Controller"'}),'@RestController\n@RefreshScope\npublic class ConfigClientController {\n    @Value("${config.info}") // \u4e0e\u8fdc\u7a0b git \u4ed3\u5e93\u4e0a yml \u6587\u4ef6\u4e2d\u7684\u5c5e\u6027\u4e00\u81f4\uff0c\u5c31\u8bfb\u53d6\u8fd9\u4e2a\u914d\u7f6e\u5c5e\u6027\n    private String configInfo;\n\n    @GetMapping("/configInfo")\n    public String getConfigInfo() {\n        return configInfo;\n    }\n}\n'))),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"\u624b\u52a8\u5237\u65b0")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u505a\u4e86\u8fd9\u4e9b\u4ee5\u540e\uff0c3355 \u4f9d\u7136\u4e0d\u80fd\u52a8\u6001\u5237\u65b0\u8fdc\u7a0b Git \u4ed3\u5e93\u4e0a\u7684\u65b0\u914d\u7f6e"),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"\u9700\u8981\u6709\u4eba\u7528 ",Object(o.b)("inlineCode",{parentName:"li"},"POST")," \u8bf7\u6c42\u624b\u52a8\u5237\u65b0 3355"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Post")," \u8bf7\u6c42 ",Object(o.b)("inlineCode",{parentName:"li"},"http://localhost:3355/actuator/refresh"))))),Object(o.b)("br",null),Object(o.b)("h1",{id:"\u81ea\u52a8\u5237\u65b0"},"\u81ea\u52a8\u5237\u65b0"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u624b\u52a8\u5237\u65b0\u592a\u8822\u4e86"),Object(o.b)("li",{parentName:"ul"},"\u95ee\u9898\u4e00\uff1a\u6709 100 \u4e2a\u5fae\u670d\u52a1\uff0c\u5237\u5230\u5410"),Object(o.b)("li",{parentName:"ul"},"\u95ee\u9898\u4e8c\uff1a\u66f4\u65b0 ",Object(o.b)("em",{parentName:"li"},"\u90e8\u5206")," \u5fae\u670d\u52a1\u7684\u914d\u7f6e\uff0c\u624b\u52a8\u6311\u9009\u51fa\u8fd9\u4e9b\u5fae\u670d\u52a1\uff0c\u6311\u5410\u4e86"),Object(o.b)("li",{parentName:"ul"},"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898\uff0c\u9700\u8981\u4f7f\u7528\uff1a",Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"Spring Cloud Bus \u6d88\u606f\u603b\u7ebf")))))}b.isMDXComponent=!0},565:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),b=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=b(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(t),m=r,f=u["".concat(i,".").concat(m)]||u[m]||s[m]||o;return t?a.a.createElement(f,c(c({ref:n},p),{},{components:t})):a.a.createElement(f,c({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);