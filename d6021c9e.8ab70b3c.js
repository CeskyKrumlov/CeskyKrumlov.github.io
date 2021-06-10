(window.webpackJsonp=window.webpackJsonp||[]).push([[362],{418:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),l=(n(0),n(490)),i={id:"5.filter",title:"Filter \u8fc7\u6ee4\u5668",hide_title:!0},o={unversionedId:"springcloud/\u670d\u52a1\u7f51\u5173/springcloudgateway/5.filter",id:"springcloud/\u670d\u52a1\u7f51\u5173/springcloudgateway/5.filter",isDocsHomePage:!1,title:"Filter \u8fc7\u6ee4\u5668",description:"Filter \u8fc7\u6ee4\u5668",source:"@site/docs/springcloud/\u670d\u52a1\u7f51\u5173/springcloudgateway/5.filter\u8fc7\u6ee4\u5668.md",slug:"/springcloud/\u670d\u52a1\u7f51\u5173/springcloudgateway/5.filter",permalink:"/docs/springcloud/\u670d\u52a1\u7f51\u5173/springcloudgateway/5.filter",version:"current",sidebar:"someSidebar",previous:{title:"Predicate \u65ad\u8a00",permalink:"/docs/springcloud/\u670d\u52a1\u7f51\u5173/springcloudgateway/4.predicate"},next:{title:"Config \u914d\u7f6e\u4e2d\u5fc3\u6982\u8ff0",permalink:"/docs/springcloud/\u914d\u7f6e\u4e2d\u5fc3/1.springcloudconfig"}},c=[{value:"Filter \u8fc7\u6ee4\u5668",id:"filter-\u8fc7\u6ee4\u5668",children:[]},{value:"\u81ea\u5b9a\u4e49\u8fc7\u6ee4\u5668",id:"\u81ea\u5b9a\u4e49\u8fc7\u6ee4\u5668",children:[]}],b={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"filter-\u8fc7\u6ee4\u5668"},"Filter \u8fc7\u6ee4\u5668"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u5141\u8bb8\u5728\u7f51\u5173\u8def\u7531\u8f6c\u53d1\u4e4b\u524d\u3001\u4e4b\u540e\u505a\u989d\u5916\u5904\u7406"),Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"\u751f\u547d\u5468\u671f\uff1a",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"pre")," \u8f6c\u53d1\u524d"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"post")," \u8f6c\u53d1\u540e"))),Object(l.b)("li",{parentName:"ul"},"\u79cd\u7c7b\uff1a",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"GatewayFilter")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"GlobalFilter")))))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u4f8b\uff1a\u4fee\u6539\u5339\u914d\u7684\u8bf7\u6c42\uff0c\u7ed9\u5176\u589e\u52a0\u4e00\u4e2a\u8bf7\u6c42\u5934\uff0c\u540d\u79f0\u4e3a ",Object(l.b)("inlineCode",{parentName:"p"},"X-Request-ID"),"\uff0c\u503c\u4e3a ",Object(l.b)("inlineCode",{parentName:"p"},"1024")),Object(l.b)("pre",{parentName:"blockquote"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"routes:\n  - id: payment_route2\n    #uri: http://localhost:8081\n    uri: lb://cloud-payment-service\n    predicates:\n      - Path=/payment/lb/** #\u65ad\u8a00,\u8def\u5f84\u76f8\u5339\u914d\u7684\u8fdb\u884c\u8def\u7531\n      #- After=2020-03-12T15:44:15.064+08:00[Asia/Shanghai] # \u5728\u8fd9\u4e2a\u65f6\u95f4\u4e4b\u540e\u624d\u505a\u8def\u7531\u6620\u5c04\n      #- Cookie=username,bsx   #\u5e26Cookie\uff0c\u5e76\u4e14username\u7684\u503c\u4e3absx\n      #- Header=X-Request-Id,\\d+ #\u8bf7\u6c42\u5934\u8981\u6709 X-Request-Id\u5c5e\u6027\u5e76\u4e14\u503c\u4e3a\u6574\u6570\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\n      #- Method=GET # \u5fc5\u987b\u662f GET \u8bf7\u6c42\n    filters:\n      - AddRequestParameter = X-Request-Id,1024 # \u4fee\u6539\u5339\u914d\u7684\u8bf7\u6c42\uff0c\u7ed9\u5176\u589e\u52a0\u4e00\u4e2a\u8bf7\u6c42\u5934\uff0c\u540d\u79f0\u4e3a `X-Request-ID`\uff0c\u503c\u4e3a `1024`\n")),Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"\u5176\u4ed6\u9ed8\u8ba4\u7528\u6cd5\u53bb\u6587\u6863\u67e5"))),Object(l.b)("br",null),Object(l.b)("h1",{id:"\u81ea\u5b9a\u4e49\u8fc7\u6ee4\u5668"},"\u81ea\u5b9a\u4e49\u8fc7\u6ee4\u5668"),Object(l.b)("blockquote",null,Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"\u5b9e\u73b0\u4e24\u4e2a\u63a5\u53e3\uff1a",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"GlabalFilter")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Ordered"),"\uff1a\u52a0\u8f7d\u8fc7\u6ee4\u5668\u7684\u987a\u5e8f\uff0c\u6570\u7ec4\u8d8a\u5c0f\u4f18\u5148\u7ea7\u8d8a\u9ad8"))))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"\u6848\u4f8b\uff1a\u5168\u5c40\u65e5\u5fd7\u8fc7\u6ee4\u5668")),Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"\u65b0\u5efa ",Object(l.b)("inlineCode",{parentName:"li"},"filter.MyLogGatewayFilter")),Object(l.b)("li",{parentName:"ul"},"\u5b9e\u73b0 ",Object(l.b)("inlineCode",{parentName:"li"},"GlobalFilter"),"\u3001",Object(l.b)("inlineCode",{parentName:"li"},"Ordered")," \u63a5\u53e3"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"getOrder")," \u65b9\u6cd5\u8bbe\u7f6e\u8fc7\u6ee4\u5668\u4f18\u5148\u7ea7"),Object(l.b)("li",{parentName:"ul"},"\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u8fc7\u6ee4\u5668",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5fc5\u987b\u6709 ",Object(l.b)("inlineCode",{parentName:"li"},"uname")," \u53c2\u6570\u624d\u80fd\u901a\u8fc7\u8fc7\u6ee4\u5668")))),Object(l.b)("pre",{parentName:"blockquote"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Component\n@Slf4j\npublic class MyLogGatewayFilter implements GlobalFilter, Ordered {\n    @Override\n    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {\n        log.info("****** come in MyLogGateWayFilter: " + new Date());\n\n        String uname = exchange.getRequest().getQueryParams().getFirst("uname");\n        if (uname == null) {\n            log.info("*****\u7528\u6237\u540d\u4e3anull\uff0c\u975e\u6cd5\u7528\u6237\uff0co(\u2565\ufe4f\u2565)o");\n            exchange.getResponse().setStatusCode(HttpStatus.NOT_ACCEPTABLE);\n            return exchange.getResponse().setComplete();\n        }\n        return chain.filter(exchange);\n    }\n\n    /**\n     * \u52a0\u8f7d\u8fc7\u6ee4\u5668\u7684\u987a\u5e8f\uff0c\u6570\u5b57\u8d8a\u5c0f\uff0c\u4f18\u5148\u7ea7\u8d8a\u9ad8\n     */\n    @Override\n    public int getOrder() {\n        return 0;\n    }\n}\n'))))}u.isMDXComponent=!0},490:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,s=p["".concat(i,".").concat(d)]||p[d]||m[d]||l;return n?a.a.createElement(s,o(o({ref:t},b),{},{components:n})):a.a.createElement(s,o({ref:t},b))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var b=2;b<l;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);