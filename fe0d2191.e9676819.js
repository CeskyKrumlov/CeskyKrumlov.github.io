(window.webpackJsonp=window.webpackJsonp||[]).push([[513],{569:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return p}));var a=t(2),r=t(6),o=(t(0),t(576)),l={id:"13.annotationEnable",title:"Swagger\u914d\u7f6e\u626b\u63cf\u63a5\u53e3\u4e0e\u5f00\u5173",hide_title:!0},c={unversionedId:"springboot/13.annotationEnable",id:"springboot/13.annotationEnable",isDocsHomePage:!1,title:"Swagger\u914d\u7f6e\u626b\u63cf\u63a5\u53e3\u4e0e\u5f00\u5173",description:"Swagger\u914d\u7f6e\u626b\u63cf\u63a5\u53e3",source:"@site/docs/springboot/13.\u914d\u7f6e\u626b\u63cf\u63a5\u53e3\u4e0e\u5f00\u5173.md",slug:"/springboot/13.annotationEnable",permalink:"/docs/springboot/13.annotationEnable",version:"current",sidebar:"someSidebar",previous:{title:"\u914d\u7f6eSwagger\u4fe1\u606f",permalink:"/docs/springboot/13.swaggerConfig"},next:{title:"Swagger\u5206\u7ec4\u4e0e\u63a5\u53e3\u6ce8\u91ca",permalink:"/docs/springboot/13.swaggerGroupAndNote"}},i=[{value:"Swagger\u914d\u7f6e\u626b\u63cf\u63a5\u53e3",id:"swagger\u914d\u7f6e\u626b\u63cf\u63a5\u53e3",children:[]},{value:"\u914d\u7f6e\u662f\u5426\u542f\u52a8Swagger",id:"\u914d\u7f6e\u662f\u5426\u542f\u52a8swagger",children:[]}],b={rightToc:i};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"swagger\u914d\u7f6e\u626b\u63cf\u63a5\u53e3"},"Swagger\u914d\u7f6e\u626b\u63cf\u63a5\u53e3"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Docket.select().apis(RequestHandlerSelectors).build()"),"\u65b9\u6cd5"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"RequestHandlerSelectors"),Object(o.b)("strong",{parentName:"p"},"\u6307\u5b9a\u8981\u626b\u63cf\u7684\u65b9\u5f0f")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"basePackge()"),"\u2014\u2014\u6307\u5b9a\u626b\u63cf\u5305")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"any()"),"\u2014\u2014\u626b\u63cf\u5168\u90e8"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"none()"),"\u2014\u2014\u90fd\u4e0d\u626b\u63cf"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"withClassAnnotation(\u6ce8\u89e3.class)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"withMethodAnnotation(\u6ce8\u89e3.class)"))),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Docket.select().paths(PathSelectors).build()"),"\u65b9\u6cd5"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"PathSelectors"),Object(o.b)("strong",{parentName:"p"},"\u6307\u5b9a\u8981\u8fc7\u6ee4\u7684\u8def\u7531")),Object(o.b)("p",null,"\u6307\u5b9a\u8981\u8fc7\u6ee4\u7684\u8def\u7531"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"ant()"),"\u2014\u2014\u6307\u5b9a\u8def\u7531")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"any()"),"\u2014\u2014\u626b\u63cf\u5168\u90e8"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"none()"),"\u2014\u2014\u90fd\u4e0d\u626b\u63cf"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"regex"),"\u2014\u2014\u6b63\u5219\u8868\u8fbe\u5f0f")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Configuration\n@EnableSwagger2  //\u5f00\u542fSwagger2\npublic class SwaggerConfig {\n\n    //\u914d\u7f6eSwagger2 Docket Bean\u5b9e\u4f8b\n    @Bean\n    public Docket docket() {\n        return new Docket(DocumentationType.SWAGGER_2)\n                .apiInfo(apiInfo())\n                .select()\n                .paths(PathSelectors.ant("/test/**"))\n                .apis(RequestHandlerSelectors.basePackage("com.bsx.springboot07swagger.controller")).build();\n\n    }\n\n    //\u914d\u7f6eSwagger\u4fe1\u606f\n    @Bean\n    public ApiInfo apiInfo() {\n        //\u4f5c\u8005\u4fe1\u606f\n        Contact concat = new Contact("bsx", "http://ceskykrumlov.gitee.io", "11@qq.com");\n        List<VendorExtension> vendorExtensions = new ArrayList<>();\n\n        return new ApiInfo("Api Title",\n                "description: this is my document",\n                "1.0",\n                "http://ceskykrumlov.gitee.io/book",\n                concat,\n                "license",\n                "licenseUrl",\n                vendorExtensions\n        );\n    }\n}\n')),Object(o.b)("h1",{id:"\u914d\u7f6e\u662f\u5426\u542f\u52a8swagger"},"\u914d\u7f6e\u662f\u5426\u542f\u52a8Swagger"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),".enable(false)\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'//\u914d\u7f6eSwagger2 Docket Bean\u5b9e\u4f8b\n@Bean\npublic Docket docket() {\n    return new Docket(DocumentationType.SWAGGER_2)\n        .apiInfo(apiInfo())\n        //\u5173\u95edswagger\n        .enable(false)\n        .select()\n        //.paths(PathSelectors.ant("/test/**"))\n        .apis(RequestHandlerSelectors.basePackage("com.bsx.springboot07swagger.controller")).build();\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u9898\uff1a")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u53ea\u5e0c\u671b\u5728\u751f\u4ea7\u73af\u5883\u4f7f\u7528Swagger\uff0c\u5728\u53d1\u5e03\u7248\u672c\u4e0d\u4f7f\u7528")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5224\u65ad\u662f\u4e0d\u662f\u751f\u4ea7\u73af\u5883"),Object(o.b)("li",{parentName:"ul"},"\u6ce8\u5165",Object(o.b)("inlineCode",{parentName:"li"},"enable"),"\u503c")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"\u83b7\u53d6\u9879\u76ee\u73af\u5883\uff0c\u5224\u65ad\u662f\u5426\u5904\u5728\u81ea\u5df1\u8bbe\u5b9a\u7684\u67d0\u79cd\u73af\u5883"),Object(o.b)("li",{parentName:"ol"},"\u5728",Object(o.b)("inlineCode",{parentName:"li"},"enable"),"\u4e2d\u8bbe\u7f6e\u5224\u65ad\u5f97\u5230\u7684boolean\u503c")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'//\u914d\u7f6eSwagger2 Docket Bean\u5b9e\u4f8b\n@Bean\npublic Docket docket(Environment environment) {\n    //\u83b7\u53d6\u5f53\u524d\u73af\u5883\n    Profiles profiles = Profiles.of("dev","test");\n    boolean flag = environment.acceptsProfiles(profiles);\n\n    return new Docket(DocumentationType.SWAGGER_2)\n        .apiInfo(apiInfo())\n        //\u5173\u95edswagger\n        .enable(flag)\n        .select()\n        //.paths(PathSelectors.ant("/test/**"))\n       .apis(RequestHandlerSelectors.basePackage("com.bsx.springboot07swagger.controller")).build();\n}\n')))}p.isMDXComponent=!0},576:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),p=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},g=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=p(t),g=a,m=s["".concat(l,".").concat(g)]||s[g]||u[g]||o;return t?r.a.createElement(m,c(c({ref:n},b),{},{components:t})):r.a.createElement(m,c({ref:n},b))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=g;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var b=2;b<o;b++)l[b]=t[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);