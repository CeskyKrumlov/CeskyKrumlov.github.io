(window.webpackJsonp=window.webpackJsonp||[]).push([[354],{1006:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/26-b2880109536640daee7fd06de6273bba.png"},1007:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/11-3daec2775514efc319582a8a965a3713.gif"},410:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return b}));var r=t(2),a=t(6),o=(t(0),t(490)),i={id:"13.swaggerGroupAndNote",title:"Swagger\u5206\u7ec4\u4e0e\u63a5\u53e3\u6ce8\u91ca",hide_title:!0},p={unversionedId:"springboot/13.swaggerGroupAndNote",id:"springboot/13.swaggerGroupAndNote",isDocsHomePage:!1,title:"Swagger\u5206\u7ec4\u4e0e\u63a5\u53e3\u6ce8\u91ca",description:"\u914d\u7f6eAPI\u6587\u6863\u5206\u7ec4",source:"@site/docs/springboot/13.\u5206\u7ec4\u4e0e\u63a5\u53e3\u6ce8\u91ca.md",slug:"/springboot/13.swaggerGroupAndNote",permalink:"/docs/springboot/13.swaggerGroupAndNote",version:"current",sidebar:"someSidebar",previous:{title:"Swagger\u914d\u7f6e\u626b\u63cf\u63a5\u53e3\u4e0e\u5f00\u5173",permalink:"/docs/springboot/13.annotationEnable"},next:{title:"\u5f02\u6b65\u4efb\u52a1",permalink:"/docs/springboot/14.asynTask"}},c=[{value:"\u914d\u7f6eAPI\u6587\u6863\u5206\u7ec4",id:"\u914d\u7f6eapi\u6587\u6863\u5206\u7ec4",children:[]},{value:"\u914d\u7f6e\u6587\u6863\u6ce8\u91ca",id:"\u914d\u7f6e\u6587\u6863\u6ce8\u91ca",children:[{value:"@Api",id:"api",children:[]},{value:"@ApiModel + @ApiModelProperty",id:"apimodel--apimodelproperty",children:[]},{value:"@ApiOperation + @ApiParam",id:"apioperation--apiparam",children:[]}]},{value:"\u4f7f\u7528Swagger\u6d4b\u8bd5\u63a5\u53e3",id:"\u4f7f\u7528swagger\u6d4b\u8bd5\u63a5\u53e3",children:[]}],l={rightToc:c};function b(e){var n=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,i,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"\u914d\u7f6eapi\u6587\u6863\u5206\u7ec4"},"\u914d\u7f6eAPI\u6587\u6863\u5206\u7ec4"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'.groupName("bsx")\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u5982\u4f55\u914d\u7f6e\u591a\u4e2a\u7ec4\u2014\u2014\u914d\u7f6e\u591a\u4e2aDocket")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'//\u914d\u7f6eSwagger2 Docket Bean\u5b9e\u4f8b\n@Bean\npublic Docket docket(Environment environment) {\n    //\u83b7\u53d6\u5f53\u524d\u73af\u5883\n    Profiles profiles = Profiles.of("dev", "test");\n    boolean flag = environment.acceptsProfiles(profiles);\n\n    return new Docket(DocumentationType.SWAGGER_2)\n        .apiInfo(apiInfo())\n        .groupName("bsx")\n        //\u5173\u95edswagger\n        .enable(flag)\n        .select()\n        //.paths(PathSelectors.ant("/test/**"))\n        .apis(RequestHandlerSelectors.basePackage("com.bsx.springboot07swagger.controller")).build();\n}\n\n@Bean\npublic Docket dokcet1() {\n    return new Docket(DocumentationType.SWAGGER_2).groupName("group 1");\n}\n\n@Bean\npublic Docket dokcet2() {\n    return new Docket(DocumentationType.SWAGGER_2).groupName("group 2");\n}\n')),Object(o.b)("img",{src:t(1006).default,style:{zoom:"100%",boxShadow:"5px 7px 28px #333333"}}),Object(o.b)("br",null),Object(o.b)("h1",{id:"\u914d\u7f6e\u6587\u6863\u6ce8\u91ca"},"\u914d\u7f6e\u6587\u6863\u6ce8\u91ca"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u53ea\u8981\u63a5\u53e3\u8fd4\u56de\u503c\u4e2d\u5b58\u5728\u5b9e\u4f53\u7c7b\uff0c\u4ed6\u5c31\u4f1a\u62a5\u626b\u63cf\u5230Swagger\u4e2d")),Object(o.b)("h2",{id:"api"},"@Api"),Object(o.b)("p",null,"\u4e00\u822c\u52a0\u5728\u6a21\u5757\u4e0a"),Object(o.b)("h2",{id:"apimodel--apimodelproperty"},"@ApiModel + @ApiModelProperty"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"@ApiModel"),"\u2014\u2014\u52a0\u5728\u5b9e\u4f53\u7c7b\u4e0a\u7684\u6ce8\u91ca"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"@ApiModelProperty"),"\u2014\u2014\u52a0\u5728\u5b9e\u4f53\u7c7b\u5c5e\u6027\u4e0a\u7684\u6ce8\u91ca")),Object(o.b)("h2",{id:"apioperation--apiparam"},"@ApiOperation + @ApiParam"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"@ApiOperation"),"\u2014\u2014\u52a0\u5728Controller\u65b9\u6cd5\u4e0a\u7684\u6ce8\u91ca"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"@ApiParam"),"\u2014\u2014\u52a0\u5728Controller\u5f62\u53c2\u4e0a\u7684\u6ce8\u91ca")),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"\u5927\u5751")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u5751\uff01\u7528\u4e86\u8fd9\u4e2a\u4f1a\u4f7fPOST\u65b9\u5f0f\u53d8\u4e3aGET"))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Api("hello\u63a7\u5236\u7c7b")\n@RestController\npublic class HelloController {\n\n    @GetMapping("/hello")\n    public String hello() {\n        return "hello";\n    }\n\n    @ApiOperation("\u8f93\u51fa\u4e00\u4e2aAlice\u7528\u6237\u7684\u63a5\u53e3")\n    @PostMapping("/user")\n    public User user() {\n        return new User("Alice", "123456");\n    }\n\n    @ApiOperation("\u8f93\u5165\u540d\u5b57\u7684\u63a5\u53e3")\n    @PostMapping("/username")\n    public String username(String username){\n        return username;\n    }\n}\n')),Object(o.b)("h1",{id:"\u4f7f\u7528swagger\u6d4b\u8bd5\u63a5\u53e3"},"\u4f7f\u7528Swagger\u6d4b\u8bd5\u63a5\u53e3"),Object(o.b)("img",{src:t(1007).default,style:{zoom:"100%",boxShadow:"5px 7px 28px #333333"}}),Object(o.b)("br",null))}b.isMDXComponent=!0},490:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),b=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=b(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=b(t),d=r,m=s["".concat(i,".").concat(d)]||s[d]||u[d]||o;return t?a.a.createElement(m,p(p({ref:n},l),{},{components:t})):a.a.createElement(m,p({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);