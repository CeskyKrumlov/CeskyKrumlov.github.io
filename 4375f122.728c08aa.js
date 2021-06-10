(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{187:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(2),r=a(6),l=(a(0),a(561)),b={id:"18.jwtCluster",title:"JWT\u96c6\u7fa4",hide_title:!0},i={unversionedId:"security_Oauth2_JWT/18.jwtCluster",id:"security_Oauth2_JWT/18.jwtCluster",isDocsHomePage:!1,title:"JWT\u96c6\u7fa4",description:"JWT\u90e8\u7f72\u96c6\u7fa4",source:"@site/docs/security_Oauth2_JWT/18.jwt\u96c6\u7fa4.md",slug:"/security_Oauth2_JWT/18.jwtCluster",permalink:"/docs/security_Oauth2_JWT/18.jwtCluster",version:"current",sidebar:"someSidebar",previous:{title:"CSRF\u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020\u653b\u51fb\u9632\u5fa1",permalink:"/docs/security_Oauth2_JWT/17.csrf"}},c=[{value:"JWT\u90e8\u7f72\u96c6\u7fa4",id:"jwt\u90e8\u7f72\u96c6\u7fa4",children:[{value:"\u8ba4\u8bc1\u670d\u52a1\u5668",id:"\u8ba4\u8bc1\u670d\u52a1\u5668",children:[]},{value:"\u670d\u52a1\u7f51\u5173",id:"\u670d\u52a1\u7f51\u5173",children:[]},{value:"\u8d44\u6e90\u670d\u52a1\u5668",id:"\u8d44\u6e90\u670d\u52a1\u5668",children:[]}]},{value:"\u57fa\u4e8e GateWay \u7684 Token \u8ba4\u8bc1\u670d\u52a1\u5668 + \u6a21\u5757\u6743\u9650\u67e5\u8be2",id:"\u57fa\u4e8e-gateway-\u7684-token-\u8ba4\u8bc1\u670d\u52a1\u5668--\u6a21\u5757\u6743\u9650\u67e5\u8be2",children:[{value:"GateWay \u7f51\u5173",id:"gateway-\u7f51\u5173",children:[]},{value:"\u535a\u5ba2\u6a21\u5757",id:"\u535a\u5ba2\u6a21\u5757",children:[{value:"\u4e0a\u4f20\u6587\u4ef6",id:"\u4e0a\u4f20\u6587\u4ef6",children:[]},{value:"\u4e0b\u8f7d\u6587\u4ef6\uff08\u9632\u76d7\u7528\uff09",id:"\u4e0b\u8f7d\u6587\u4ef6\uff08\u9632\u76d7\u7528\uff09",children:[]}]},{value:"\u4e8c\u7ea7\u8bc4\u8bba\u8868",id:"\u4e8c\u7ea7\u8bc4\u8bba\u8868",children:[]},{value:"\u9879\u76ee\u95ee\u9898",id:"\u9879\u76ee\u95ee\u9898",children:[{value:"\u8de8\u57df",id:"\u8de8\u57df",children:[]},{value:"GateWay \u57fa\u4e8e WebFlux \u4e0d\u80fd\u7528 Mybatis",id:"gateway-\u57fa\u4e8e-webflux-\u4e0d\u80fd\u7528-mybatis",children:[]},{value:"\u6743\u9650 Path \u548c\u7f51\u5173\u8f6c\u53d1 Path \u4e0d\u80fd\u9002\u914d\u643a\u5e26\u53c2\u6570 Param \u7684\u60c5\u51b5",id:"\u6743\u9650-path-\u548c\u7f51\u5173\u8f6c\u53d1-path-\u4e0d\u80fd\u9002\u914d\u643a\u5e26\u53c2\u6570-param-\u7684\u60c5\u51b5",children:[]}]}]},{value:"\u5b8c\u6574\u4ee3\u7801",id:"\u5b8c\u6574\u4ee3\u7801",children:[]}],o={rightToc:c};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"jwt\u90e8\u7f72\u96c6\u7fa4"},"JWT\u90e8\u7f72\u96c6\u7fa4"),Object(l.b)("hr",null),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u7531\u4e8eJWT\u662f\u65e0\u72b6\u6001\u7684\uff0c\u6240\u4ee5\u53ef\u4ee5\u8f7b\u6613\u7684\u62d3\u5c55\u5230\u96c6\u7fa4\u73af\u5883")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u53ea\u8981\u5404\u4e2a\u7ad9\u70b9\u4f7f\u7528\u7684\u7528\u6237\u6743\u9650\u4fe1\u606f\u4e00\u81f4"),Object(l.b)("li",{parentName:"ul"},"\u53ea\u8981\u5404\u4e2a\u7ad9\u70b9\u4f7f\u7528\u7684JWT Secret\u4fe1\u606f\u4e00\u81f4"),Object(l.b)("li",{parentName:"ul"},"Jwt\u76f8\u5173Filter\u662f\u4e00\u5957"),Object(l.b)("li",{parentName:"ul"},"Jwt\u76f8\u5173Controller\u662f\u4e00\u5957")),Object(l.b)("p",null,"\u5373\u53ef"),Object(l.b)("h2",{id:"\u8ba4\u8bc1\u670d\u52a1\u5668"},"\u8ba4\u8bc1\u670d\u52a1\u5668"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u65e2\u7136\u6bcf\u4e2a\u7ad9\u70b9\u7528\u7684Jwt Controller\u4e00\u6837\uff0c\u90a3\u53ef\u4ee5\u5427Controller\u5355\u72ec\u62bd\u51fa\u6765\u505a\u6210\u4e00\u4e2a\u7ad9\u70b9\uff0c\u7528\u6765\u751f\u6210Jwt Token\uff0c\u5c31\u662f\u8ba4\u8bc1\u670d\u52a1\u5668")),Object(l.b)("h2",{id:"\u670d\u52a1\u7f51\u5173"},"\u670d\u52a1\u7f51\u5173"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u8fd8\u53ef\u4ee5\u628aJwtFilter\u4e5f\u62bd\u51fa\u6765\uff0c\u505a\u6210\u4e00\u4e2a\u670d\u52a1\u7f51\u5173\uff0c\u53bb\u4e0d\u540c\u7ad9\u70b9\u7684\u8bf7\u6c42\u8d70\u540c\u4e00\u4e2aJwt\u8fc7\u6ee4\u5668"),Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"JwtFilter\u7684\u62bd\u53d6\u5e76\u4e0d\u7b80\u5355\uff0c\u56e0\u4e3a\u5b83\u8fd8\u6d89\u53ca\u5230\u8bf7\u6c42\u8f6c\u53d1\u7684\u95ee\u9898"))),Object(l.b)("h2",{id:"\u8d44\u6e90\u670d\u52a1\u5668"},"\u8d44\u6e90\u670d\u52a1\u5668"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"\u5728\u540e\u9762\u90fd\u662f\u6709\u5b9e\u9645\u4e1a\u52a1\u6570\u636e\u7684\u8d44\u6e90\u670d\u52a1\u5668"))),Object(l.b)("br",null),Object(l.b)("h1",{id:"\u57fa\u4e8e-gateway-\u7684-token-\u8ba4\u8bc1\u670d\u52a1\u5668--\u6a21\u5757\u6743\u9650\u67e5\u8be2"},"\u57fa\u4e8e GateWay \u7684 Token \u8ba4\u8bc1\u670d\u52a1\u5668 + \u6a21\u5757\u6743\u9650\u67e5\u8be2"),Object(l.b)("h2",{id:"gateway-\u7f51\u5173"},"GateWay \u7f51\u5173"),Object(l.b)("blockquote",null,Object(l.b)("ol",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ol"},"\u7528 GateWay \u4f5c\u4e3a\u5206\u5e03\u5f0f\u7cfb\u7edf\u7684\u7edf\u4e00\u8bbf\u95ee\u5165\u53e3"),Object(l.b)("li",{parentName:"ol"},"\u5728 GateWay \u4e0a\u505a Token \u7684\u7b7e\u53d1\u8ba4\u8bc1\uff08",Object(l.b)("strong",{parentName:"li"},"\u4f7f\u7528\u5168\u5c40\u8fc7\u6ee4\u5668 GlobalFilter -> \u81ea\u5b9a\u4e49JWTAuthCheckFilter"),"\uff09",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},"\u4ece\u914d\u7f6e\u6587\u4ef6\u52a0\u8f7d\u4e0d\u9700\u8981\u8ba4\u8bc1\u7684 Http Path\uff1a\u4f8b\u5982 \u767b\u5f55\u3001\u6ce8\u518c\u3001\u67e5\u770b\u5e16\u5b50\uff0c\u76f4\u63a5\u653e\u884c\uff08\u8fdb\u5165\u7f51\u5173\u8f6c\u53d1\u903b\u8f91\uff09"),Object(l.b)("li",{parentName:"ol"},"\u5176\u4ed6\u8def\u5f84\u4e00\u5f8b\u9700\u8981\u7f51\u5173\u7b7e\u53d1\u7684 Token \u624d\u80fd\u8bbf\u95ee",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},"\u5bf9\u4e8e\u672a\u8ba4\u8bc1\u7528\u6237\uff0c\u91cd\u5b9a\u5411\u5230\u767b\u5f55\u9875\u9762"),Object(l.b)("li",{parentName:"ol"},"\u5bf9\u4e8e\u5df2\u8ba4\u8bc1\u7528\u6237\uff0c\u5224\u65ad token \u662f\u5426\u8fc7\u671f\uff0c\u672a\u8fc7\u671f\uff0c\u4ece Token \u4e2d\u89e3\u6790\u51fa UserName\uff0c\u5b58\u5165\u8bf7\u6c42\u5934\u4e2d\uff0c\u8fdb\u884c\u8f6c\u53d1"))),Object(l.b)("li",{parentName:"ol"},"\u76f8\u5173\u6a21\u5757\u6839\u636e\u8bf7\u6c42\u5934\u4e2d\u7684 UserName\uff0c\u57fa\u4e8e RBAC \u7cfb\u7edf\u83b7\u53d6\u7528\u6237\u6743\u9650"))),Object(l.b)("li",{parentName:"ol"},"\u767b\u5f55\u903b\u8f91\uff1a\u672a\u7ecf\u8fc7\u8ba4\u8bc1\u3001\u8fd8\u6ca1\u6709 Token",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},"\u767b\u5f55\u8868\u5355\u63d0\u4ea4\u7528\u6237\u540d\u3001\u5bc6\u7801\uff0c\u901a\u8fc7 JPA \u67e5\u8be2\u6570\u636e\u5e93 \uff08WebFlux \u4e0d\u80fd\u7528 Mybatis\uff09\uff0c\u9a8c\u8bc1\u7528\u6237\u540d\u5bc6\u7801"),Object(l.b)("li",{parentName:"ol"},"\u9a8c\u8bc1\u5408\u6cd5\uff0c\u751f\u6210 Token\uff0c\u8fd4\u56de\u524d\u7aef Vue \u5b58\u50a8\u5230 Vuex\uff0c\u540e\u7eed\u6240\u6709\u8bf7\u6c42\u901a\u8fc7 Axios \u62e6\u622a\u5668\u6dfb\u52a0 token\uff08\u8bf7\u6c42\u5934\uff09"))),Object(l.b)("li",{parentName:"ol"},"GateWay \u8f6c\u53d1\u914d\u7f6e",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},"\u5728 YAML \u4e2d\u914d\u7f6e\u8f6c\u53d1\u89c4\u5219 id \u4e3a\u8def\u7531id\u3001uri \u4e3a\u6ce8\u518c\u4e2d\u5fc3\u4e2d\u7684\u670d\u52a1\u540d ",Object(l.b)("inlineCode",{parentName:"li"},"lb://aservice-rbac"),"\uff0clb \u524d\u7f00\u8868\u793a\u5f00\u542f\u8d1f\u8f7d\u5747\u8861\uff1b ",Object(l.b)("inlineCode",{parentName:"li"},"predicates.name:xxx")," \u4f1a\u627e\u5230 ",Object(l.b)("inlineCode",{parentName:"li"},"xxxRoutePredicateFactory")," \u7c7b"),Object(l.b)("li",{parentName:"ol"},"\u5728 ",Object(l.b)("inlineCode",{parentName:"li"},"xxxRoutePredicateFactory")," \u4e2d\u914d\u7f6e\u4e86 ",Object(l.b)("inlineCode",{parentName:"li"},'requestURI.startWith("/add")')," \u8868\u793a\u5339\u914d\u54ea\u4e9b Path \u8f6c\u53d1\u5230\u914d\u7f6e\u4e2d\u914d\u7684\u5bf9\u5e94\u5fae\u670d\u52a1"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"\u8de8\u57df"),"\uff1a",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528 CorsWebFilter \u8fc7\u6ee4\u5668\u5bf9 ",Object(l.b)("inlineCode",{parentName:"li"},"\u8bf7\u6c42\u6e90"),"\u3001",Object(l.b)("inlineCode",{parentName:"li"},"\u8bf7\u6c42\u5934"),"\u3001",Object(l.b)("inlineCode",{parentName:"li"},"\u8bf7\u6c42\u65b9\u6cd5")," \u8fdb\u884c\u8bbe\u7f6e"))))),Object(l.b)("h2",{id:"\u535a\u5ba2\u6a21\u5757"},"\u535a\u5ba2\u6a21\u5757"),Object(l.b)("h3",{id:"\u4e0a\u4f20\u6587\u4ef6"},"\u4e0a\u4f20\u6587\u4ef6"),Object(l.b)("blockquote",null,Object(l.b)("ol",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ol"},"\u521b\u5efa\u76ee\u5f55\u3001\u521b\u5efa\u6587\u4ef6\u3001\u590d\u5236\u5230\u672c\u5730\u6587\u4ef6"),Object(l.b)("li",{parentName:"ol"},"\u5c06\u4e0a\u4f20\u8bb0\u5f55\u6301\u4e45\u5316\u5230\u6570\u636e\u5e93\uff0c\u65b9\u4fbf\u5728\u67e5\u770b\u535a\u5ba2\u65f6\u67e5\u8be2\u5e76\u663e\u793a\u5bf9\u5e94\u6587\u4ef6"))),Object(l.b)("h3",{id:"\u4e0b\u8f7d\u6587\u4ef6\uff08\u9632\u76d7\u7528\uff09"},"\u4e0b\u8f7d\u6587\u4ef6\uff08\u9632\u76d7\u7528\uff09"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u4e3a\u4e86\u9632\u6b62\u8d44\u6e90\u88ab\u6ee5\u7528\uff08\u552e\u5356\uff09\uff0c\u751f\u6210\u6458\u8981\u3001\u52a0\u5bc6\uff0c\u6301\u4e45\u5316\u5230\u6570\u636e\u5e93\uff0c\u5e76\u5411\u6587\u4ef6\u4e2d\u5199\u6c34\u5370"),Object(l.b)("ol",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ol"},"\u6839\u636e\u6587\u4ef6\u7684\u5404\u79cd\u4fe1\u606f+\u76d0\u751f\u6210\u4e00\u4e2a\u4e32\uff0c\u628a\u8fd9\u4e2a\u4e32\u9006\u5e8f\uff0c\u518d\u548c\u539f\u4e32\u62fc\u8d77\u6765\uff0c\u5f62\u6210\u4e00\u4e2a\u56de\u6587\u4e32"),Object(l.b)("li",{parentName:"ol"},"\u8ba1\u7b97 sha256 \u6458\u8981\u957f\u5ea6 64"),Object(l.b)("li",{parentName:"ol"},"\u628a\u8fd9\u4e2a\u6458\u8981\u6301\u4e45\u5316\u5230\u6570\u636e\u5e93\uff0c\u4ee5\u540e\u9760\u6c34\u5370\u5c31\u80fd\u67e5\u5230\u662f\u8c01\u4e0b\u7684\u6587\u4ef6"),Object(l.b)("li",{parentName:"ol"},"\u628a\u8fd9\u4e2a\u6458\u8981\u4ee5\u6c34\u5370\u5f62\u5f0f\u5199\u5230PDF\u6587\u4ef6\u4e0a\u53bb"))),Object(l.b)("h2",{id:"\u4e8c\u7ea7\u8bc4\u8bba\u8868"},"\u4e8c\u7ea7\u8bc4\u8bba\u8868"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u6784\u5efa Model \u5bf9\u5e94\u7684 Node \u7c7b\uff0c\u5305\u542b\u4e86\u4e00\u4e2a\u5b50\u8282\u70b9\u7684 List\uff0c\u5e76\u4e14\u901a\u8fc7 getId()\u3001getParentId() \u63a5\u53e3\u65b9\u6cd5\uff0c\u5c01\u88c5\u6210\u4e00\u4e8c\u7ea7\u8bc4\u8bba\u6811"),Object(l.b)("li",{parentName:"ul"},"Partent_ID \u4e3a 0\u7684\uff0c\u8868\u793a\u4e00\u7ea7\u8bc4\u8bba\uff0c\u5426\u5219\u5c31\u662f\u4e8c\u7ea7\u8bc4\u8bba")),Object(l.b)("h2",{id:"\u9879\u76ee\u95ee\u9898"},"\u9879\u76ee\u95ee\u9898"),Object(l.b)("h3",{id:"\u8de8\u57df"},"\u8de8\u57df"),Object(l.b)("p",null,"\u7528 GateWay \u7684 CorsWebFilter \u5bf9 ",Object(l.b)("inlineCode",{parentName:"p"},"\u8bf7\u6c42\u6e90"),"\u3001",Object(l.b)("inlineCode",{parentName:"p"},"\u8bf7\u6c42\u5934"),"\u3001",Object(l.b)("inlineCode",{parentName:"p"},"\u8bf7\u6c42\u65b9\u6cd5")," \u8fdb\u884c\u8bbe\u7f6e"),Object(l.b)("h3",{id:"gateway-\u57fa\u4e8e-webflux-\u4e0d\u80fd\u7528-mybatis"},"GateWay \u57fa\u4e8e WebFlux \u4e0d\u80fd\u7528 Mybatis"),Object(l.b)("p",null,"GateWay \u57fa\u4e8e WebFlux \u4e0d\u80fd\u7528 Mybatis\uff0c\u6539\u7528 JPA"),Object(l.b)("h3",{id:"\u6743\u9650-path-\u548c\u7f51\u5173\u8f6c\u53d1-path-\u4e0d\u80fd\u9002\u914d\u643a\u5e26\u53c2\u6570-param-\u7684\u60c5\u51b5"},"\u6743\u9650 Path \u548c\u7f51\u5173\u8f6c\u53d1 Path \u4e0d\u80fd\u9002\u914d\u643a\u5e26\u53c2\u6570 Param \u7684\u60c5\u51b5"),Object(l.b)("p",null,"\u7528 startWith() \u548c \u6b63\u5219\u5339\u914d"),Object(l.b)("h1",{id:"\u5b8c\u6574\u4ee3\u7801"},"\u5b8c\u6574\u4ee3\u7801"),Object(l.b)("hr",null),Object(l.b)("p",null,"\u94fe\u63a5\uff1a",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://pan.baidu.com/s/1KGwp00TuHNzPQk3goEgu9A"}),"https://pan.baidu.com/s/1KGwp00TuHNzPQk3goEgu9A"),"\n\u63d0\u53d6\u7801\uff1a17la"))}u.isMDXComponent=!0},561:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),u=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=u(a),j=n,d=p["".concat(b,".").concat(j)]||p[j]||O[j]||l;return a?r.a.createElement(d,i(i({ref:t},o),{},{components:a})):r.a.createElement(d,i({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=j;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var o=2;o<l;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);