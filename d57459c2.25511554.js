(window.webpackJsonp=window.webpackJsonp||[]).push([[377],{433:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return b})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(2),i=t(6),a=(t(0),t(511)),b={id:"1.openFeign",title:"OpenFeign \u6982\u8ff0",hide_title:!0},o={unversionedId:"springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/openFeign/1.openFeign",id:"springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/openFeign/1.openFeign",isDocsHomePage:!1,title:"OpenFeign \u6982\u8ff0",description:"OpenFeign",source:"@site/docs/springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/openFeign/1.openFeign.md",slug:"/springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/openFeign/1.openFeign",permalink:"/docs/springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/openFeign/1.openFeign",version:"current",sidebar:"someSidebar",previous:{title:"\u8f6e\u8be2\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5",permalink:"/docs/springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/ribbon/3.roundRobin"},next:{title:"OpenFeign \u670d\u52a1\u8c03\u7528",permalink:"/docs/springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/openFeign/2.openFeign"}},l=[{value:"OpenFeign",id:"openfeign",children:[{value:"Feign \u80fd\u505a\u4ec0\u4e48",id:"feign-\u80fd\u505a\u4ec0\u4e48",children:[]}]},{value:"Feign \u4e0e OpenFeign \u7684\u533a\u522b",id:"feign-\u4e0e-openfeign-\u7684\u533a\u522b",children:[]}],c={rightToc:l};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"openfeign"},"OpenFeign"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"\u58f0\u660e\u5f0f\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528")),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Feign")," \u662f\u4e00\u4e2a",Object(a.b)("strong",{parentName:"li"},"\u58f0\u660e\u5f0f ",Object(a.b)("inlineCode",{parentName:"strong"},"WebService")," \u5ba2\u6237\u7aef"),"\uff0c\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"li"},"Feign")," \u53ef\u4ee5\u8ba9\u7f16\u5199 ",Object(a.b)("inlineCode",{parentName:"li"},"Web Service")," \u5ba2\u6237\u7aef\u66f4\u52a0\u7b80\u5355"),Object(a.b)("li",{parentName:"ul"},"\u4f7f\u7528\u65b9\u6cd5\uff1a",Object(a.b)("strong",{parentName:"li"},"\u5b9a\u4e49\u4e00\u4e2a\u670d\u52a1\u5668\u63a5\u53e3\uff0c\u7136\u540e\u5728\u4e0a\u9762\u6dfb\u52a0\u6ce8\u89e3")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Feign")," \u652f\u6301\u53ef\u63d2\u62d4\u5f0f\u7f16\u7801\u5668\u548c\u89e3\u7801\u5668"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Spring Cloud")," \u5bf9 ",Object(a.b)("inlineCode",{parentName:"li"},"Feign")," \u8fdb\u884c\u4e86\u5c01\u88c5\uff0c\u4f7f\u5176\u652f\u6301 ",Object(a.b)("inlineCode",{parentName:"li"},"Spring MVC")," \u6807\u51c6\u6ce8\u89e3\u548c ",Object(a.b)("inlineCode",{parentName:"li"},"HttpMessageConverters"),"\uff0c\u5f62\u6210 ",Object(a.b)("inlineCode",{parentName:"li"},"OpenFeign")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Feign")," \u53ef\u4ee5\u4e0e ",Object(a.b)("inlineCode",{parentName:"li"},"Eureka"),"\u3001",Object(a.b)("inlineCode",{parentName:"li"},"Ribbon")," \u7ec4\u5408\u4f7f\u7528\u4ee5\u652f\u6301\u8d1f\u8f7d\u5747\u8861"))),Object(a.b)("h2",{id:"feign-\u80fd\u505a\u4ec0\u4e48"},"Feign \u80fd\u505a\u4ec0\u4e48"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Feign \u80fd\u505a\u4ec0\u4e48")),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"\u76ee\u7684\u662f\u4f7f\u7f16\u5199 ",Object(a.b)("inlineCode",{parentName:"li"},"Java Http")," \u5ba2\u6237\u7aef\u53d8\u5f97\u66f4\u5bb9\u6613"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Ribbon")," + ",Object(a.b)("inlineCode",{parentName:"li"},"RestTemplate"),"\uff1a\u5229\u7528 RestTemplate \u5bf9 HTTP \u8bf7\u6c42\u7684\u5c01\u88c5\u5904\u7406\uff0c\u5f62\u6210\u4e86\u4e00\u5957\u6a21\u5757\u5316\u7684\u8c03\u7528\u65b9\u6cd5\uff0c\u4f46\u662f\u5b9e\u9645\u5f00\u53d1\u4e2d\uff0c\u7531\u4e8e\u5bf9\u670d\u52a1\u4f9d\u8d56\u7684\u8c03\u7528\u4e0d\u6b62\u4e00\u5904\uff0c",Object(a.b)("strong",{parentName:"li"},"\u5f80\u5f80\u4e00\u4e2a\u63a5\u53e3\u4f1a\u88ab\u591a\u5904\u8c03\u7528\uff0c\u6240\u4ee5\u901a\u5e38\u90fd\u4f1a\u9488\u5bf9\u6bcf\u4e2a\u5fae\u670d\u52a1\u81ea\u884c\u5c01\u88c5\u4e00\u4e9b\u5ba2\u6237\u7aef\u7c7b\u6765\u5305\u88c5\u8fd9\u4e9b\u4f9d\u8d56\u670d\u52a1\u7684\u8c03\u7528")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Feign")," \u5728\u4e0a\u8ff0\u6a21\u5f0f\u7684\u57fa\u7840\u4e0a\u8fdb\u4e00\u6b65\u5c01\u88c5\uff0c\u7531\u5b83\u6765\u5e2e\u52a9\u5f00\u53d1\u8005\u5b9a\u4e49\u548c\u5b9e\u73b0\u4f9d\u8d56\u670d\u52a1\u63a5\u53e3\u7684\u5b9a\u4e49"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"\u53ea\u9700\u521b\u5efa\u4e00\u4e2a\u63a5\u53e3\uff0c\u5e76\u4f7f\u7528\u6ce8\u89e3\u7684\u65b9\u5f0f\u6765\u914d\u7f6e\u5b83"),"\uff0c\u5373\u53ef\u5b8c\u6210\u5bf9\u670d\u52a1\u63d0\u4f9b\u65b9\u7684\u63a5\u53e3\u7ed1\u5b9a\uff0c\u7b80\u5316\u4e86\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"li"},"Ribbon")," \u65f6\uff0c\u81ea\u52a8\u5c01\u88c5\u670d\u52a1\u8c03\u7528\u5ba2\u6237\u7aef\u7684\u5f00\u53d1\u91cf"))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"Feign")," \u96c6\u6210\u4e86 ",Object(a.b)("inlineCode",{parentName:"strong"},"Ribbon"))),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"\u5229\u7528 ",Object(a.b)("inlineCode",{parentName:"li"},"Ribbon")," \u7ef4\u62a4\u4e86 ",Object(a.b)("inlineCode",{parentName:"li"},"Payment")," \u7684\u670d\u52a1\u5217\u8868\u4fe1\u606f\uff0c\u5e76\u4e14\u901a\u8fc7\u8f6e\u8be2\u5b9e\u73b0\u4e86\u5ba2\u6237\u7aef\u7684\u8d1f\u8f7d\u5747\u8861"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"\u4e0e ",Object(a.b)("inlineCode",{parentName:"strong"},"Ribbon")," \u4e0d\u540c\u7684\u662f\uff1a\u901a\u8fc7 ",Object(a.b)("inlineCode",{parentName:"strong"},"Feign")," \u53ea\u9700\u8981\u5b9a\u4e49\u670d\u52a1\u7ed1\u5b9a\u63a5\u53e3\u4e14\u4ee5\u58f0\u660e\u5f0f\u7684\u65b9\u6cd5"),"\uff0c\u4f18\u96c5\u800c\u7b80\u5355\u7684\u5b9e\u73b0\u4e86\u670d\u52a1\u8c03\u7528"))),Object(a.b)("br",null),Object(a.b)("h1",{id:"feign-\u4e0e-openfeign-\u7684\u533a\u522b"},"Feign \u4e0e OpenFeign \u7684\u533a\u522b"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Feign"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"OpenFeign"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(a.b)("br",null),"Spring Cloud \u4e2d\u7684\u4e00\u4e2a\u8f7b\u91cf\u7ea7 RESTFul HTTP \u670d\u52a1\u5ba2\u6237\u7aef\uff0c\u5185\u7f6e\u4e86 Ribbon\uff0c\u7528\u6765\u505a\u5ba2\u6237\u7aef\u8d1f\u8f7d\u5747\u8861\uff0c\u53bb\u8c03\u7528\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u7684\u670d\u52a1",Object(a.b)("br",null),Object(a.b)("br",null),"Feign\u7684\u4f7f\u7528\u65b9\u5f0f\u662f\uff1a\u4f7f\u7528Feign\u7684\u6ce8\u89e3\u5b9a\u4e49\u63a5\u53e3\uff0c\u8c03\u7528\u8fd9\u4e2a\u63a5\u53e3\uff0c\u5c31\u53ef\u4ee5\u8c03\u7528\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u7684\u670d\u52a1"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Spring Cloud \u5728 Feign \u7684\u57fa\u7840\u4e0a\u652f\u6301\u4e86 Spring MVC \u7684\u6ce8\u89e3",Object(a.b)("br",null),Object(a.b)("br",null),"OpenFeign \u7684 ",Object(a.b)("inlineCode",{parentName:"td"},"@FeignClient")," \u53ef\u4ee5\u89e3\u6790 SpringMVC \u7684 ",Object(a.b)("inlineCode",{parentName:"td"},"@RequestMapping")," \u6ce8\u89e3\u4e0b\u7684\u63a5\u53e3\uff0c\u5e76\u901a\u8fc7\u52a8\u6001\u4ee3\u7406\u65b9\u5f0f\u4ea7\u751f\u5b9e\u73b0\u7c7b\uff0c\u5b9e\u73b0\u7c7b\u5de6\u8d1f\u8f7d\u5747\u8861\u5e76\u8c03\u7528\u5176\u4ed6\u670d\u52a1")))))}p.isMDXComponent=!0},511:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),p=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},O={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},g=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,b=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),g=r,m=u["".concat(b,".").concat(g)]||u[g]||O[g]||a;return t?i.a.createElement(m,o(o({ref:n},c),{},{components:t})):i.a.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,b=new Array(a);b[0]=g;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,b[1]=o;for(var c=2;c<a;c++)b[c]=t[c];return i.a.createElement.apply(null,b)}return i.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);