(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var b=n(2),r=n(6),a=(n(0),n(511)),o={id:"1.ribbon",title:"Ribbon \u6982\u8ff0",hide_title:!0},i={unversionedId:"springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/ribbon/1.ribbon",id:"springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/ribbon/1.ribbon",isDocsHomePage:!1,title:"Ribbon \u6982\u8ff0",description:"Ribbon \u6982\u8ff0",source:"@site/docs/springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/ribbon/1.ribbon.md",slug:"/springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/ribbon/1.ribbon",permalink:"/docs/springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/ribbon/1.ribbon",version:"current",sidebar:"someSidebar",previous:{title:"Eureka \u81ea\u6211\u4fdd\u62a4",permalink:"/docs/springcloud/\u670d\u52a1\u6ce8\u518c\u4e0e\u53d1\u73b0/eureka/7.eurekaSelfProtection"},next:{title:"Ribbon \u8d1f\u8f7d\u5747\u8861",permalink:"/docs/springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/ribbon/2.ribbonLB"}},l=[{value:"Ribbon \u6982\u8ff0",id:"ribbon-\u6982\u8ff0",children:[]},{value:"\u8d1f\u8f7d\u5747\u8861",id:"\u8d1f\u8f7d\u5747\u8861",children:[]},{value:"Ribbon \u7684\u4f7f\u7528",id:"ribbon-\u7684\u4f7f\u7528",children:[]},{value:"RestTemplate",id:"resttemplate",children:[]}],c={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(b.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"ribbon-\u6982\u8ff0"},"Ribbon \u6982\u8ff0"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"\u8ba4\u8bc6Ribbon")),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"Spring Cloud Ribbon \u662f\u57fa\u4e8e Netfix Ribbon \u5b9e\u73b0\u7684\u4e00\u5957 ",Object(a.b)("inlineCode",{parentName:"li"},"\u5ba2\u6237\u7aef \u8d1f\u8f7d\u5747\u8861"),"  \u5de5\u5177"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Ribbon")," \u662f ",Object(a.b)("inlineCode",{parentName:"li"},"Netfix")," \u53d1\u5e03\u7684\u5f00\u6e90\u9879\u76ee\uff0c\u4e3b\u8981\u529f\u80fd\u662f ",Object(a.b)("strong",{parentName:"li"},"\u5ba2\u6237\u7aef\u7684\u8f6f\u4ef6\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5\u548c\u670d\u52a1\u8c03\u7528")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Ribbon")," \u5ba2\u6237\u7aef\u7ec4\u4ef6\u63d0\u4f9b\u4e00\u4e9b\u5217\u5b8c\u5584\u7684\u914d\u7f6e\u9879\uff0c\u5982 ",Object(a.b)("em",{parentName:"li"},"\u8fde\u63a5\u8d85\u65f6"),"\u3001",Object(a.b)("em",{parentName:"li"},"\u91cd\u8bd5")," \u7b49"),Object(a.b)("li",{parentName:"ul"},"\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u5217\u51fa ",Object(a.b)("inlineCode",{parentName:"li"},"Load Balancer")," (aka ",Object(a.b)("inlineCode",{parentName:"li"},"LB"),") \u540e\u9762\u6240\u6709\u7684\u673a\u5668\uff0cRibbon \u4f1a\u81ea\u52a8\u57fa\u4e8e\u67d0\u79cd\u8d1f\u8f7d\u5747\u8861\u89c4\u5219 \uff08\u5982\u7b80\u5355\u8f6e\u8be2\u3001\u968f\u673a\u8fde\u63a5\u7b49\uff09\u8fde\u63a5\u8fd9\u4e9b\u673a\u5668"),Object(a.b)("li",{parentName:"ul"},"\u5f00\u53d1\u4eba\u5458\u5f88\u5bb9\u6613\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"li"},"Ribbon")," \u5b9e\u73b0\u81ea\u5b9a\u4e49\u7684\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5"))),Object(a.b)("br",null),Object(a.b)("h1",{id:"\u8d1f\u8f7d\u5747\u8861"},"\u8d1f\u8f7d\u5747\u8861"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Load Balance \u8d1f\u8f7d\u5747\u8861")),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"\u5c06\u7528\u6237\u7684\u8bf7\u6c42\u5e73\u644a\u5206\u914d\u5230\u591a\u4e2a\u670d\u52a1\u4e0a\uff0c\u4ece\u800c\u8fbe\u5230\u7cfb\u7edf\u7684 HA \uff08\u9ad8\u53ef\u7528\uff09"),Object(a.b)("li",{parentName:"ul"},"\u5e38\u89c1\u7684\u8d1f\u8f7d\u5747\u8861\u8f6f\u4ef6\uff1a",Object(a.b)("inlineCode",{parentName:"li"},"Nginx"),"\u3001",Object(a.b)("inlineCode",{parentName:"li"},"LVS"),"\uff1b\u786c\u4ef6\uff1a",Object(a.b)("inlineCode",{parentName:"li"},"F5")," \u7b49"))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"\u672c\u5730\u8d1f\u8f7d\u5747\u8861\uff08\u8fdb\u7a0b\u5185LB\uff09 VS \u670d\u52a1\u7aef\u8d1f\u8f7d\u5747\u8861\uff08\u96c6\u4e2d\u5f0fLB\uff09")),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"\u96c6\u4e2d\u5f0fLB\uff1a"),"\u5728\u670d\u52a1\u7684\u6d88\u8d39\u65b9\u548c\u63d0\u4f9b\u65b9\u4e4b\u95f4\u4f7f\u7528\u72ec\u7acb\u7684 LB \u8bbe\u65bd\uff08\u786c\u4ef6\u3001\u8f6f\u4ef6\uff09\uff0c\u7531\u8be5\u8bbe\u65bd\u8d1f\u8d23\u628a\u8bbf\u95ee\u8bf7\u6c42\u901a\u8fc7\u67d0\u79cd\u7b56\u7565\u53d1\u9001\u81f3\u670d\u52a1\u63d0\u4f9b\u65b9",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"Nginx")," \u662f\u670d\u52a1\u7aef\u8d1f\u8f7d\u5747\u8861\uff1a"),"\u5ba2\u6237\u7aef\u6240\u6709\u8bf7\u6c42\u90fd\u4ea4\u7ed9 Nginx\uff0c\u7136\u540e\u53c8 Nginx \u5b9e\u73b0\u8bf7\u6c42\u8f6c\u53d1\u3002\u5373\u8d1f\u8f7d\u5747\u8861\u662f\u7531\u670d\u52a1\u7aef\u5b9e\u73b0\u7684"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"\u8fdb\u7a0b\u5185LB\uff1a"),"\u5c06\u8d1f\u8f7d\u5747\u8861\u903b\u8f91\u96c6\u6210\u5230\u6d88\u8d39\u65b9\uff0c\u6d88\u8d39\u65b9\u4ece\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u83b7\u77e5\u54ea\u4e9b\u5730\u5740\u53ef\u7528\uff0c\u7136\u540e\u81ea\u5df1\u4ece\u8fd9\u4e9b\u5730\u5740\u4e2d\u9009\u51fa\u4e00\u4e2a\u5408\u9002\u7684\u670d\u52a1\u5668\u8fdb\u884c RPC",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"Ribbon")," \u662f\u672c\u5730\u8d1f\u8f7d\u5747\u8861\uff1a"),"\u5728\u8c03\u7528\u5fae\u670d\u52a1\u63a5\u53e3\u7684\u65f6\u5019\uff0c\u4f1a\u5728\u6ce8\u518c\u4e2d\u5fc3\u4e0a\u83b7\u53d6\u6ce8\u518c\u4fe1\u606f\u670d\u52a1\u5217\u8868\uff0c\u7136\u540e\u5c06\u5176\u7f13\u5b58\u5230 JVM \u672c\u5730\uff0c\u4ece\u800c\u5728\u672c\u5730\u5b9e\u73b0 RPC \u8fdc\u7a0b\u670d\u52a1\u8c03\u7528"))))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Ribbon \u7684\u4e00\u53e5\u8bdd\u89e3\u91ca")),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"\u8d1f\u8f7d\u5747\u8861 LB")," + ",Object(a.b)("inlineCode",{parentName:"li"},"RestTemplate \u8c03\u7528")))),Object(a.b)("br",null),Object(a.b)("h1",{id:"ribbon-\u7684\u4f7f\u7528"},"Ribbon \u7684\u4f7f\u7528"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Ribbon \u662f\u4e00\u4e2a\u8f6f\u8d1f\u8f7d\u5747\u8861\u7684\u5ba2\u6237\u7aef\u7ec4\u4ef6")),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u4e0e\u5176\u4ed6\u6240\u9700\u8bf7\u6c42\u7684\u5ba2\u6237\u7aef\u7ed3\u5408\u4f7f\u7528\uff0c\u548c Eureka \u7ed3\u5408\u77e5\u8bc6\u5176\u4e2d\u4e00\u79cd\u5b9e\u73b0\u65b9\u5f0f"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"\u628a ",Object(a.b)("inlineCode",{parentName:"strong"},"Ribbon")," \u96c6\u6210\u5230 ",Object(a.b)("inlineCode",{parentName:"strong"},"consumer")," \u5fae\u670d\u52a1\u4e2d"),"\uff0c\u67e5\u8be2\u6ce8\u518c\u4e2d\u5fc3\u4e2d\u7684\u53ef\u7528\u4e3b\u673a\uff0c\u7136\u540e\u5728\u672c\u5730\u51b3\u5b9a\u5408\u9002\u7684 RPC \u5bf9\u8c61"))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Ribbon \u7684\u5de5\u4f5c\u6b65\u9aa4")),Object(a.b)("ol",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ol"},"\u9009\u62e9\u5408\u9002\u7684 ",Object(a.b)("inlineCode",{parentName:"li"},"Eureka Server"),"\uff08\u6ce8\u518c\u4e2d\u5fc3\uff09\uff0c\u5b83\u4f18\u5148\u9009\u62e9\u5728\u540c\u4e00\u4e2a\u533a\u57df\u5185\u8d1f\u8f7d\u8f83\u5c11\u7684 server"),Object(a.b)("li",{parentName:"ol"},"\u6839\u636e\u7528\u6237\u7684\u6307\u5b9a\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\uff0c\u518d\u4ece ",Object(a.b)("inlineCode",{parentName:"li"},"Eureka Server")," \u53d6\u5230\u7684\u670d\u52a1\u5217\u8868\u9009\u53d6\u4e00\u4e2a\u5408\u9002\u7684\u5730\u5740\uff0c\u8fdb\u884c\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528")),Object(a.b)("p",{parentName:"blockquote"},"Ribbon \u63d0\u4f9b\u4e86\u591a\u79cd\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\uff1a\u8f6e\u8be2\u3001\u968f\u673a\u3001\u6839\u636e\u54cd\u5e94\u65f6\u95f4\u52a0\u6743")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"\u4e3a\u4ec0\u4e48\u5148\u524d\u6ca1\u6709\u5bfc\u5165 Ribbon \u7684Maven\u5750\u6807\u4e5f\u80fd\u4f7f\u7528\u8d1f\u8f7d\u5747\u8861\u529f\u80fd\uff1f")),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u56e0\u4e3a\u73b0\u5728\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"Eureka Client")," \u7ec4\u4ef6\u5df2\u7ecf\u9ed8\u8ba4\u5305\u542b\u4e86 ",Object(a.b)("inlineCode",{parentName:"p"},"Ribbon"),"\uff0c\u4e4b\u524d\u5728 ",Object(a.b)("inlineCode",{parentName:"p"},"Order80")," \u5fae\u670d\u52a1\u4e2d\uff0c\u5df2\u7ecf\u4f7f\u7528\u4e86 ",Object(a.b)("inlineCode",{parentName:"p"},"Eureka Client"),"\uff0c\u56e0\u6b64\u5b83\u53ef\u4ee5\u4f7f\u7528 Ribbon \u7684\u8d1f\u8f7d\u5747\u8861"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(b.a)({parentName:"pre"},{className:"language-xml"}),"\x3c!--eureka client--\x3e\n<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>\n</dependency>\n"))))),Object(a.b)("br",null),Object(a.b)("h1",{id:"resttemplate"},"RestTemplate"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"getForObject")," \u4e0e ",Object(a.b)("inlineCode",{parentName:"strong"},"getForEntity")," \u65b9\u6cd5")),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"xxxObject"),"\u65b9\u6cd5\uff1a\u8fd4\u56de\u5bf9\u8c61\u4e3a ",Object(a.b)("inlineCode",{parentName:"li"},"\u54cd\u5e94\u4f53")," \u4e2d\u6570\u636e\u8f6c\u5316\u6210\u7684\u5bf9\u8c61\uff0c\u57fa\u672c\u4e0a\u53ef\u4ee5\u7406\u89e3\u4e3a ",Object(a.b)("inlineCode",{parentName:"li"},"JSON")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"xxxEntity"),"\u65b9\u6cd5\uff1a\u8fd4\u56de\u5bf9\u8c61\u4e3a ",Object(a.b)("inlineCode",{parentName:"li"},"ResponseEntity")," \u5bf9\u8c61\uff0c\u5305\u542b\u4e86\u54cd\u5e94\u4e2d\u7684\u91cd\u8981\u4fe1\u606f\uff0c\u5982 ",Object(a.b)("inlineCode",{parentName:"li"},"\u54cd\u5e94\u5934"),"\u3001",Object(a.b)("inlineCode",{parentName:"li"},"\u54cd\u5e94\u72b6\u6001\u7801"),"\u3001",Object(a.b)("inlineCode",{parentName:"li"},"\u54cd\u5e94\u4f53")," \u7b49"))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"\u5728 ",Object(a.b)("inlineCode",{parentName:"strong"},"order80")," \u7684 ",Object(a.b)("inlineCode",{parentName:"strong"},"Controller")," \u4e2d\u6dfb\u52a0\u4e00\u4e2a\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"strong"},"getForEntity")," \u7684\u65b9\u6cd5")),Object(a.b)("pre",{parentName:"blockquote"},Object(a.b)("code",Object(b.a)({parentName:"pre"},{className:"language-java"}),'@GetMapping("/consumer/payment/getForEntity/{id}")\npublic CommonResult<Payment> getPayment2(@PathVariable("id") Long id) {\n    ResponseEntity<CommonResult> entity = restTemplate.getForEntity(PAYMENT_URL + "/payment/get/" + id, CommonResult.class);\n    if (entity.getStatusCode().is2xxSuccessful()) // \u5982\u679c\u662f 200 \u7cfb\u5217\u54cd\u5e94\u7801\n        return entity.getBody(); // \u8fd4\u56de\u8bf7\u6c42\u4f53\n    else\n        return new CommonResult<>(444, "\u83b7\u53d6\u5931\u8d25");\n}\n')),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"\u6d4b\u4e00\u4e0b\uff0c\u8bbf\u95ee ",Object(a.b)("inlineCode",{parentName:"li"},"http://127.0.0.1:80/consumer/payment/getForEntity/4")))))}p.isMDXComponent=!0},511:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var b=n(0),r=n.n(b);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,b)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,b,r=function(e,t){if(null==e)return{};var n,b,r={},a=Object.keys(e);for(b=0;b<a.length;b++)n=a[b],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(b=0;b<a.length;b++)n=a[b],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,b=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),O=b,j=u["".concat(o,".").concat(O)]||u[O]||m[O]||a;return n?r.a.createElement(j,i(i({ref:t},c),{},{components:n})):r.a.createElement(j,i({ref:t},c))}));function j(e,t){var n=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var a=n.length,o=new Array(a);o[0]=O;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:b,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);