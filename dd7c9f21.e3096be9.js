(window.webpackJsonp=window.webpackJsonp||[]).push([[450],{506:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return s}));var r=t(2),o=t(6),a=(t(0),t(576)),i={id:"13.swaggerConfig",title:"\u914d\u7f6eSwagger\u4fe1\u606f",hide_title:!0},c={unversionedId:"springboot/13.swaggerConfig",id:"springboot/13.swaggerConfig",isDocsHomePage:!1,title:"\u914d\u7f6eSwagger\u4fe1\u606f",description:"\u914d\u7f6eSwagger\u4fe1\u606f",source:"@site/docs/springboot/13.\u914d\u7f6eSwagger\u4fe1\u606f.md",slug:"/springboot/13.swaggerConfig",permalink:"/docs/springboot/13.swaggerConfig",version:"current",sidebar:"someSidebar",previous:{title:"Swagger",permalink:"/docs/springboot/13.swagger"},next:{title:"Swagger\u914d\u7f6e\u626b\u63cf\u63a5\u53e3\u4e0e\u5f00\u5173",permalink:"/docs/springboot/13.annotationEnable"}},p=[{value:"\u914d\u7f6eSwagger\u4fe1\u606f",id:"\u914d\u7f6eswagger\u4fe1\u606f",children:[]}],g={rightToc:p};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},g,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"\u914d\u7f6eswagger\u4fe1\u606f"},"\u914d\u7f6eSwagger\u4fe1\u606f"),Object(a.b)("p",null,"Swagger\u7684bean\u5b9e\u4f8b",Object(a.b)("inlineCode",{parentName:"p"},"Docket")),Object(a.b)("p",null,"\u5982\u4f55\u914d\u7f6e",Object(a.b)("inlineCode",{parentName:"p"},"Docket"),"?"),Object(a.b)("p",null,"\u5728SwaggerConfig\u914d\u7f6e\u7c7b\u4e2d\uff0c\u914d\u7f6eSwagger2 Docket Bean\u5b9e\u4f8b"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Configuration\n@EnableSwagger2  //\u5f00\u542fSwagger2\npublic class SwaggerConfig {\n\n    //\u914d\u7f6eSwagger2 Docket Bean\u5b9e\u4f8b\n    @Bean\n    public Docket docket() {\n        return new Docket(DocumentationType.SWAGGER_2)\n                .apiInfo(apiInfo());\n    }\n\n    //\u914d\u7f6eSwagger\u4fe1\u606f\n    @Bean\n    public ApiInfo apiInfo() {\n        //\u4f5c\u8005\u4fe1\u606f\n        Contact concat = new Contact("bsx", "http://ceskykrumlov.gitee.io", "11@qq.com");\n        List<VendorExtension> vendorExtensions = new ArrayList<>();\n\n        return new ApiInfo("Api Title",\n                "description: this is my document",\n                "1.0",\n                "http://ceskykrumlov.gitee.io/book",\n                concat,\n                "license",\n                "licenseUrl",\n                vendorExtensions\n        );\n    }\n}\n')))}s.isMDXComponent=!0},576:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var g=o.a.createContext({}),s=function(e){var n=o.a.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=s(e.components);return o.a.createElement(g.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),l=s(t),b=r,f=l["".concat(i,".").concat(b)]||l[b]||u[b]||a;return t?o.a.createElement(f,c(c({ref:n},g),{},{components:t})):o.a.createElement(f,c({ref:n},g))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var g=2;g<a;g++)i[g]=t[g];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);