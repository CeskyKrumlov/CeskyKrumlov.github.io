(window.webpackJsonp=window.webpackJsonp||[]).push([[367],{423:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return d})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),o=(r(0),r(561)),c={id:"4.predicate",title:"Predicate \u65ad\u8a00",hide_title:!0},i={unversionedId:"springcloud/\u670d\u52a1\u7f51\u5173/springcloudgateway/4.predicate",id:"springcloud/\u670d\u52a1\u7f51\u5173/springcloudgateway/4.predicate",isDocsHomePage:!1,title:"Predicate \u65ad\u8a00",description:"Predicate \u65ad\u8a00",source:"@site/docs/springcloud/\u670d\u52a1\u7f51\u5173/springcloudgateway/4.predicate\u65ad\u8a00.md",slug:"/springcloud/\u670d\u52a1\u7f51\u5173/springcloudgateway/4.predicate",permalink:"/docs/springcloud/\u670d\u52a1\u7f51\u5173/springcloudgateway/4.predicate",version:"current",sidebar:"someSidebar",previous:{title:"Gateway \u8def\u7531\u914d\u7f6e",permalink:"/docs/springcloud/\u670d\u52a1\u7f51\u5173/springcloudgateway/3.gatewayConstruct"},next:{title:"Filter \u8fc7\u6ee4\u5668",permalink:"/docs/springcloud/\u670d\u52a1\u7f51\u5173/springcloudgateway/5.filter"}},d=[{value:"Predicate \u65ad\u8a00",id:"predicate-\u65ad\u8a00",children:[]}],u={rightToc:d};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"predicate-\u65ad\u8a00"},"Predicate \u65ad\u8a00"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u89c2\u5bdf\u7f51\u5173 ",Object(o.b)("inlineCode",{parentName:"p"},"9527")," \u542f\u52a8\u65e5\u5fd7\uff0c\u53ef\u4ee5\u53d1\u73b0\u5982\u4e0b\u5185\u5bb9")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),": Loaded RoutePredicateFactory [After]\n: Loaded RoutePredicateFactory [Before]\n: Loaded RoutePredicateFactory [Between]\n: Loaded RoutePredicateFactory [Cookie]\n: Loaded RoutePredicateFactory [Header]\n: Loaded RoutePredicateFactory [Host]\n: Loaded RoutePredicateFactory [Method]\n: Loaded RoutePredicateFactory [Path]\n: Loaded RoutePredicateFactory [Query]\n: Loaded RoutePredicateFactory [ReadBodyPredicateFactory]\n: Loaded RoutePredicateFactory [RemoteAddr]\n: Loaded RoutePredicateFactory [Weight]\n: Loaded RoutePredicateFactory [CloudFoundryRouteService]\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"\u5148\u524d\u5728 9527 YAML \u4e2d\u914d\u7f6e\u7684\u8def\u7531\u5217\u8868\u4e2d\uff0c\u65ad\u8a00 predicates \u5c5e\u6027\u5c31\u4f9d\u636e\u4e0a\u8ff0 RoutePredicateFactory \u7684\u5185\u5bb9\u6765\u5199"))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"routes:\n  - id: payment_route # \u8def\u7531\u7684id,\u6ca1\u6709\u89c4\u5b9a\u89c4\u5219\u4f46\u8981\u6c42\u552f\u4e00,\u5efa\u8bae\u914d\u5408\u670d\u52a1\u540d\n    #\u5339\u914d\u540e\u63d0\u4f9b\u670d\u52a1\u7684\u8def\u7531\u5730\u5740\n    #uri: http://localhost:8081\n    uri: lb://cloud-payment-service\n    predicates:\n      - Path=/payment/get/** # \u65ad\u8a00\uff0c\u8def\u5f84\u76f8\u5339\u914d\u7684\u8fdb\u884c\u8def\u7531\n\n  - id: payment_route2\n    #uri: http://localhost:8081\n    uri: lb://cloud-payment-service\n    predicates:\n      - Path=/payment/lb/** #\u65ad\u8a00,\u8def\u5f84\u76f8\u5339\u914d\u7684\u8fdb\u884c\u8def\u7531\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u53ef\u89c1\u4e4b\u524d\u53ea\u7528\u5230\u4e86 ",Object(o.b)("inlineCode",{parentName:"li"},"Path")," \u65ad\u8a00\uff0c\u73b0\u5728\u6765\u770b\u770b\u5176\u4ed6\u7684\u65ad\u8a00",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"After\uff1a\u5728\u6307\u5b9a\u65f6\u95f4\u540e\u624d\u8fdb\u884c\u8def\u7531\u8f6c\u53d1")))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u83b7\u53d6\u5f53\u524d\u65f6\u95f4\u53ef\u4ee5\u7528\u4ee5\u4e0b Java \u7a0b\u5e8f\u5b9e\u73b0"',title:'"\u83b7\u53d6\u5f53\u524d\u65f6\u95f4\u53ef\u4ee5\u7528\u4ee5\u4e0b',Java:!0,'\u7a0b\u5e8f\u5b9e\u73b0"':!0}),"public static void main(String[] args) {\n  ZonedDateTime time = ZonedDateTime.now(); // \u9ed8\u8ba4\u65f6\u533a\n  System.out.println(time);\n} \n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Cookie\uff1a\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f Cookie \u7684\u540d\u5b57\uff0c\u7b2c\u4e8c\u4e2a\u662f ",Object(o.b)("inlineCode",{parentName:"li"},"\u6b63\u5219\u8868\u8fbe\u5f0f")," \u5fc5\u987b\u5339\u914d\u4e0a\u624d\u8fd4\u56de true"),Object(o.b)("li",{parentName:"ul"},"Header\uff1a\u8bf7\u6c42\u5934\uff0c\u548c Cookie \u683c\u5f0f\u4e00\u6837"),Object(o.b)("li",{parentName:"ul"},"Method\uff1a\u8bf7\u6c42\u65b9\u6cd5")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"routes: \n    - id: payment_route2\n      #uri: http://localhost:8081\n      uri: lb://cloud-payment-service\n      predicates:\n        - Path=/payment/lb/** #\u65ad\u8a00,\u8def\u5f84\u76f8\u5339\u914d\u7684\u8fdb\u884c\u8def\u7531\n        #- After=2020-03-12T15:44:15.064+08:00[Asia/Shanghai] # \u5728\u8fd9\u4e2a\u65f6\u95f4\u4e4b\u540e\u624d\u505a\u8def\u7531\u6620\u5c04\n        #- Cookie=username,bsx   #\u5e26Cookie\uff0c\u5e76\u4e14username\u7684\u503c\u4e3absx\n        #- Header=X-Request-Id,\\d+ #\u8bf7\u6c42\u5934\u8981\u6709 X-Request-Id\u5c5e\u6027\u5e76\u4e14\u503c\u4e3a\u6574\u6570\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\n        #- Method=GET # \u5fc5\u987b\u662f GET \u8bf7\u6c42\n")))}l.isMDXComponent=!0},561:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=l(r),b=n,m=p["".concat(c,".").concat(b)]||p[b]||s[b]||o;return r?a.a.createElement(m,i(i({ref:t},u),{},{components:r})):a.a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);