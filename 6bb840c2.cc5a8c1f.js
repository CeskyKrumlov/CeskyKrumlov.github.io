(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{280:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return b}));var a=t(2),r=t(6),i=(t(0),t(570)),l=(t(574),t(575),{id:"9.sentinelPersistence",title:"Sentinel \u89c4\u5219\u6301\u4e45\u5316",hide_title:!0}),c={unversionedId:"springcloudalibaba/\u6d41\u91cf\u536b\u5175/9.sentinelPersistence",id:"springcloudalibaba/\u6d41\u91cf\u536b\u5175/9.sentinelPersistence",isDocsHomePage:!1,title:"Sentinel \u89c4\u5219\u6301\u4e45\u5316",description:"Sentinel \u89c4\u5219\u6301\u4e45\u5316",source:"@site/docs/springcloudalibaba/\u6d41\u91cf\u536b\u5175/9.\u89c4\u5219\u6301\u4e45\u5316.md",slug:"/springcloudalibaba/\u6d41\u91cf\u536b\u5175/9.sentinelPersistence",permalink:"/docs/springcloudalibaba/\u6d41\u91cf\u536b\u5175/9.sentinelPersistence",version:"current",sidebar:"someSidebar",previous:{title:"Sentinel \u670d\u52a1\u7194\u65ad",permalink:"/docs/springcloudalibaba/\u6d41\u91cf\u536b\u5175/8.sentinelBreaker"},next:{title:"Seata \u6982\u8ff0",permalink:"/docs/springcloudalibaba/\u5206\u5e03\u5f0f\u4e8b\u52a1/1.seata"}},o=[{value:"Sentinel \u89c4\u5219\u6301\u4e45\u5316",id:"sentinel-\u89c4\u5219\u6301\u4e45\u5316",children:[{value:"\u6b65\u9aa4",id:"\u6b65\u9aa4",children:[{value:"POM",id:"pom",children:[]},{value:"application.yaml",id:"applicationyaml",children:[]},{value:"Nacos \u6dfb\u52a0\u914d\u7f6e",id:"nacos-\u6dfb\u52a0\u914d\u7f6e",children:[]},{value:"Sentinel \u67e5\u770b\u89c4\u5219",id:"sentinel-\u67e5\u770b\u89c4\u5219",children:[]}]}]}],s={rightToc:o};function b(e){var n=e.components,l=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,l,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"sentinel-\u89c4\u5219\u6301\u4e45\u5316"},"Sentinel \u89c4\u5219\u6301\u4e45\u5316"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u95ee\u9898")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u4e00\u65e6\u91cd\u542f\u5fae\u670d\u52a1\uff0c\u5728 Sentinel \u4e2d\u914d\u7f6e\u7684\u5404\u79cd\u89c4\u5219\u5c31\u4f1a\u6d88\u5931"))),Object(i.b)("blockquote",null,Object(i.b)("h2",Object(a.a)({parentName:"blockquote"},{id:"\u89e3\u51b3"}),"\u89e3\u51b3"),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u4ee5 ",Object(i.b)("inlineCode",{parentName:"li"},"sentinel-service8401")," \u4e3a\u4f8b"),Object(i.b)("li",{parentName:"ul"},"\u5c06\u9650\u6d41\u914d\u7f6e\u89c4\u5219\u6301\u4e45\u5316\u8fdb ",Object(i.b)("inlineCode",{parentName:"li"},"Nacos")," \u8fdb\u884c\x01\u4fdd\u5b58\uff0c\u53ea\u8981\u5237\u65b0 8401 \u67d0\u4e2a REST \u5730\u5740\uff0cSentinel \u63a7\u5236\u53f0\u7684\u6d41\u91cf\u89c4\u5219\u5c31\u80fd\u770b\u5230"),Object(i.b)("li",{parentName:"ul"},"\u53ea\u8981 Nacos \u91cc\u7684\u914d\u7f6e\u4e0d\u5220\u9664\uff0c\u9488\u5bf9 8401 \u7684 Sentinel \u6d41\u63a7\u89c4\u5219\u5c31\u6301\u7eed\u6709\u6548"))),Object(i.b)("h2",{id:"\u6b65\u9aa4"},"\u6b65\u9aa4"),Object(i.b)("h3",{id:"pom"},"POM"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5f15\u5165 ",Object(i.b)("inlineCode",{parentName:"li"},"sentinel-datasource-nacos")," \u6765\u652f\u6301\u6301\u4e45\u5316")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),"\x3c!-- SpringCloud ailibaba sentinel-datasource-nacos \u6301\u4e45\u5316\u9700\u8981\u7528\u5230--\x3e\n<dependency>\n    <groupId>com.alibaba.csp</groupId>\n    <artifactId>sentinel-datasource-nacos</artifactId>\n</dependency>\n")),Object(i.b)("h3",{id:"applicationyaml"},"application.yaml"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u6dfb\u52a0 ",Object(i.b)("inlineCode",{parentName:"li"},"datasource")," \u914d\u7f6e")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"server:\n  port: 8401\n\nspring:\n  application:\n    name: cloudalibaba-sentinel-service\n  cloud:\n    nacos:\n      discovery:\n        #Nacos\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u5730\u5740\n        server-addr: localhost:8848\n    sentinel:\n      transport:\n        #\u914d\u7f6eSentin dashboard\u5730\u5740\n        dashboard: localhost:8080\n        # \u9ed8\u8ba48719\u7aef\u53e3\uff0c\u5047\u5982\u88ab\u5360\u7528\u4e86\u4f1a\u81ea\u52a8\u4ece8719\u7aef\u53e3+1\u8fdb\u884c\u626b\u63cf\uff0c\u76f4\u5230\u627e\u5230\u672a\u88ab\u5360\u7528\u7684 \u7aef\u53e3\n        port: 8719\n      datasource:\n        ds1:\n          nacos:\n            server-addr: localhost:8848\n            dataId: cloudalibaba-sentinel-service\n            groupId: DEFAULT_GROUP\n            data-type: json\n            rule-type: flow\n\nmanagement:\n  endpoints:\n    web:\n      exposure:\n        include: '*'\n\nfeign:\n  sentinel:\n    enabled: true #\u6fc0\u6d3bSentinel \u5bf9Feign\u7684\u652f\u6301\n")),Object(i.b)("h3",{id:"nacos-\u6dfb\u52a0\u914d\u7f6e"},"Nacos \u6dfb\u52a0\u914d\u7f6e"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"DataId")," \u4e0e yaml \u6587\u4ef6\u4e2d\u7684 ",Object(i.b)("inlineCode",{parentName:"li"},"dataId")," \u4e00\u81f4"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Group")," \u4e0e yaml \u4e2d\u7684 ",Object(i.b)("inlineCode",{parentName:"li"},"groupId")," \u4e00\u81f4"),Object(i.b)("li",{parentName:"ul"},"\u914d\u7f6e\u683c\u5f0f ",Object(i.b)("inlineCode",{parentName:"li"},"JSON")," \u4e0e yaml \u4e2d\u7684 ",Object(i.b)("inlineCode",{parentName:"li"},"data-type")," \u4e00\u81f4")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "resource": "/rateLimit/byUrl", // \u8d44\u6e90\u540d\u79f0\n    "limitApp": "default", // \u6765\u6e90\u5e94\u7528\n    "grade": 1, // \u9608\u503c\u7c7b\u578b 0 \u8868\u793a\u7ebf\u7a0b\u6570, 1 \u8868\u793a QPS\n    "count": 1, // \u5355\u673a\u9608\u503c\n    "strategy": 0, // \u6d41\u63a7\u6a21\u5f0f: | 0 \u76f4\u63a5 | 1 \u5173\u8054 | 2 \u94fe\u8def\n    "controlBehavior": 0, // \u6d41\u63a7\u6548\u679c\uff1a | 0 \u5feb\u901f\u5931\u8d25 | 1 \u9884\u70ed | 2 \u6392\u961f\u7b49\u5f85\n    "clusterMode": false // \u662f\u5426\u4e3a\u96c6\u7fa4\n  }\n]\n')),Object(i.b)("img",{src:t(947).default,style:{zoom:"100%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(i.b)("br",null),Object(i.b)("h3",{id:"sentinel-\u67e5\u770b\u89c4\u5219"},"Sentinel \u67e5\u770b\u89c4\u5219"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u542f\u52a8 ",Object(i.b)("inlineCode",{parentName:"li"},"8401")),Object(i.b)("li",{parentName:"ul"},"\u8bbf\u95ee ",Object(i.b)("inlineCode",{parentName:"li"},"http://localhost:8401/rateLimit/byUrl")),Object(i.b)("li",{parentName:"ul"},"\u5237\u65b0 ",Object(i.b)("inlineCode",{parentName:"li"},"Sentinel")," \u53d1\u73b0\u4e86\u521a\u624d\u914d\u7f6e\u7684\u4e1a\u52a1\u89c4\u5219")),Object(i.b)("br",null),Object(i.b)("img",{src:t(948).default,style:{zoom:"100%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(i.b)("br",null))}b.isMDXComponent=!0},570:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),b=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=b(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=b(t),p=a,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||i;return t?r.a.createElement(m,c(c({ref:n},s),{},{components:t})):r.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=p;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<i;s++)l[s]=t[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},571:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},572:function(e,n,t){"use strict";var a=t(0);const r=Object(a.createContext)(void 0);n.a=r},573:function(e,n,t){"use strict";var a=t(0),r=t(572);n.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},574:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(573),l=t(571),c=t(47),o=t.n(c);const s=37,b=39;n.a=function(e){const{block:n,children:t,defaultValue:c,values:u,groupId:d}=e,{tabGroupChoices:p,setTabGroupChoices:m}=Object(i.a)(),[O,f]=Object(a.useState)(c),[j,v]=Object(a.useState)(!1);if(null!=d){const e=p[d];null!=e&&e!==O&&u.some(n=>n.value===e)&&f(e)}const y=e=>{f(e),null!=d&&m(d,e)},g=[],h=e=>{e.metaKey||e.altKey||e.ctrlKey||v(!0)},N=()=>{v(!1)};return Object(a.useEffect)(()=>{window.addEventListener("keydown",h),window.addEventListener("mousedown",N)},[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n})},u.map(({value:e,label:n})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===e,className:Object(l.a)("tabs__item",o.a.tabItem,{"tabs__item--active":O===e}),style:j?{}:{outline:"none"},key:e,ref:e=>g.push(e),onKeyDown:e=>{((e,n,t)=>{switch(t.keyCode){case b:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case s:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(g,e.target,e),h(e)},onFocus:()=>y(e),onClick:()=>{y(e),v(!1)},onPointerDown:()=>v(!1)},n))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(t).filter(e=>e.props.value===O)[0]))}},575:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){return r.a.createElement("div",null,e.children)}},947:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/25-247a076190c0a2b661b951e75e26fad0.png"},948:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/26-56a3b0050e8ffd57fe936e91d0507ab4.png"}}]);