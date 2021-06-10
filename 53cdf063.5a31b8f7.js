(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{211:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(548)),c={id:"6.static",title:"Web\u9759\u6001\u8d44\u6e90\u5904\u7406",hide_title:!0},o={unversionedId:"springboot/6.static",id:"springboot/6.static",isDocsHomePage:!1,title:"Web\u9759\u6001\u8d44\u6e90\u5904\u7406",description:"Web\u5f00\u53d1\u63a2\u7a76",source:"@site/docs/springboot/6.Web\u9759\u6001\u8d44\u6e90\u5904\u7406.md",slug:"/springboot/6.static",permalink:"/docs/springboot/6.static",version:"current",sidebar:"someSidebar",previous:{title:"JSR303\u6570\u636e\u6821\u9a8c",permalink:"/docs/springboot/4.jsr303"},next:{title:"\u9996\u9875\u4e0e\u56fe\u6807\u5b9a\u4e49",permalink:"/docs/springboot/7.pageAndIcon"}},s=[{value:"Web\u5f00\u53d1\u63a2\u7a76",id:"web\u5f00\u53d1\u63a2\u7a76",children:[{value:"\u9759\u6001\u8d44\u6e90\u5904\u7406",id:"\u9759\u6001\u8d44\u6e90\u5904\u7406",children:[{value:"\u9759\u6001\u8d44\u6e90\u6620\u5c04\u89c4\u5219\u4e00",id:"\u9759\u6001\u8d44\u6e90\u6620\u5c04\u89c4\u5219\u4e00",children:[]},{value:"\u9759\u6001\u8d44\u6e90\u6620\u5c04\u914d\u7f6e\u4e8c",id:"\u9759\u6001\u8d44\u6e90\u6620\u5c04\u914d\u7f6e\u4e8c",children:[]},{value:"\u81ea\u5b9a\u4e49\u9759\u6001\u8d44\u6e90\u8def\u5f84",id:"\u81ea\u5b9a\u4e49\u9759\u6001\u8d44\u6e90\u8def\u5f84",children:[]}]}]}],b={rightToc:s};function p(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"web\u5f00\u53d1\u63a2\u7a76"},"Web\u5f00\u53d1\u63a2\u7a76"),Object(i.b)("h2",{id:"\u9759\u6001\u8d44\u6e90\u5904\u7406"},"\u9759\u6001\u8d44\u6e90\u5904\u7406"),Object(i.b)("h3",{id:"\u9759\u6001\u8d44\u6e90\u6620\u5c04\u89c4\u5219\u4e00"},"\u9759\u6001\u8d44\u6e90\u6620\u5c04\u89c4\u5219\u4e00"),Object(i.b)("p",null,"SpringBoot\u9879\u76ee\u7684\u6253\u5305\u65b9\u5f0f\u65f6jar\u5305\uff0cSpringBoot\u5bf9\u4e8e\u9759\u6001\u8d44\u6e90\u653e\u7f6e\u7684\u4f4d\u7f6e\uff0c\u662f\u6709\u7ea6\u5b9a\u7684"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u9759\u6001\u8d44\u6e90\u6620\u5c04\u89c4\u5219\uff1a")),Object(i.b)("p",null,"SpringBoot\u4e2d\uff0cSpringMVC\u7684web\u914d\u7f6e\u90fd\u5b9a\u4e49\u5728",Object(i.b)("inlineCode",{parentName:"p"},"WebMvcAutoConfiguration"),"\u8fd9\u4e2a\u914d\u7f6e\u7c7b\u91cc\u9762"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"WebMvcAutoConfigurationAdapter"),"\u4e2d\u6709\u5f88\u591a\u914d\u7f6e\u65b9\u6cd5\uff0c\u5176\u4e2d\u5305\u542b",Object(i.b)("inlineCode",{parentName:"p"},"addResourceHandlers"),"\u6dfb\u52a0\u8d44\u6e90\u5904\u7406"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public void addResourceHandlers(ResourceHandlerRegistry registry) {\n    if (!this.resourceProperties.isAddMappings()) {\n        //\u7981\u7528\u9ed8\u8ba4\u8d44\u6e90\u5904\u7406\n        logger.debug("Default resource handling disabled");\n    } else {\n        //webjars\u914d\u7f6e\n        if (!registry.hasMappingForPattern("/webjars/**")) {\n            ResourceHandlerRegistration registration = registry.addResourceHandler(new String[]{"/webjars/**"}).addResourceLocations(new String[]{"classpath:/META-INF/resources/webjars/"});\n            //\u7f13\u5b58\u63a7\u5236\n            this.configureResourceCaching(registration);\n            this.customizeResourceHandlerRegistration(registration);\n        }\n        //\u9759\u6001\u8d44\u6e90\u914d\u7f6e\n        String staticPathPattern = this.webFluxProperties.getStaticPathPattern();\n        if (!registry.hasMappingForPattern(staticPathPattern)) {\n            ResourceHandlerRegistration registration = registry.addResourceHandler(new String[]{staticPathPattern}).addResourceLocations(this.resourceProperties.getStaticLocations());\n            this.configureResourceCaching(registration);\n            this.customizeResourceHandlerRegistration(registration);\n        }\n    }\n}\n')),Object(i.b)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u663e\u793a\uff0c\u6240\u6709\u7684",Object(i.b)("inlineCode",{parentName:"p"},"/webjars/**"),"\u90fd\u88ab\u6620\u5c04\u5230\u4e86",Object(i.b)("inlineCode",{parentName:"p"},"classpath:/META-INF/resources/webjars/"),"\u627e\u5bf9\u5e94\u8d44\u6e90"),Object(i.b)("h4",{id:"\u4ec0\u4e48\u662fwebjars"},"\u4ec0\u4e48\u662fwebjars"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"webjars\u7684\u672c\u8d28\uff0c\u5c31\u662f\u4ee5jar\u5305\u7684\u65b9\u5f0f\u5f15\u5165\u9759\u6001\u8d44\u6e90"),"\uff0c\u4ee5\u524d\u8981\u5bfc\u5165\u4e00\u4e2a\u9759\u6001\u8d44\u6e90\u6587\u4ef6\uff0c\u76f4\u63a5\u5bfc\u5165\u5373\u53ef"),Object(i.b)("p",null,"\u5728SpringBoot\u4e2d\u5219\u9700\u8981\u4f7f\u7528webjars"),Object(i.b)("p",null,"webjars\u7f51\u7ad9\uff1a",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.webjars.org"}),"https://www.webjars.org")," "),Object(i.b)("p",null,"\u6bd4\u5982\u60f3\u8981\u4f7f\u7528JQuery\uff0c\u9996\u5148\u5bfc\u5165JQuery maven\u5750\u6807"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>org.webjars</groupId>\n    <artifactId>jquery</artifactId>\n    <version>3.4.1</version>\n</dependency>\n")),Object(i.b)("p",null,"\u4e4b\u540e\uff0c\u5728maven\u4e0b\u8f7d\u597d\u7684JQuery jar\u5305\u4e2d\uff0c\u53ef\u4ee5\u627e\u5230",Object(i.b)("inlineCode",{parentName:"p"},"classpath:/META-INF/resources/webjars/"),"\u76ee\u5f55\uff0c\u5176\u4e2d\u5c31\u5305\u542b\u4e86",Object(i.b)("inlineCode",{parentName:"p"},"jquery.js"),"\u9759\u6001js\u8d44\u6e90\u6587\u4ef6"),Object(i.b)("img",{src:n(791).default,style:{zoom:"80%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(i.b)("br",null),Object(i.b)("p",null,"\u8981\u8bbf\u95ee\u9759\u6001\u8d44\u6e90\uff0c\u5c31\u8bbf\u95ee\u5bf9\u5e94\u7684",Object(i.b)("inlineCode",{parentName:"p"},"/webjars"),"\u8def\u7531\u3002"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u8bbf\u95ee",Object(i.b)("inlineCode",{parentName:"strong"},"http://localhost:8080/webjars/jquery/3.4.1/jquery.js")),"\uff0c\u5373\u53ef\u8bbf\u95ee\u5230\u9759\u6001\u8d44\u6e90"),Object(i.b)("img",{src:n(792).default,style:{zoom:"60%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(i.b)("br",null),Object(i.b)("h3",{id:"\u9759\u6001\u8d44\u6e90\u6620\u5c04\u914d\u7f6e\u4e8c"},"\u9759\u6001\u8d44\u6e90\u6620\u5c04\u914d\u7f6e\u4e8c"),Object(i.b)("p",null,"\u5bf9\u4e8e\u9879\u76ee\u4e2d\u81ea\u5df1\u7684\u9759\u6001\u8d44\u6e90\uff1a\u5728",Object(i.b)("inlineCode",{parentName:"p"},"staticPathPattern"),"\u4e2d\u53ef\u4ee5\u53d1\u73b0\u7b2c\u4e8c\u79cd\u6620\u5c04\u89c4\u5219:",Object(i.b)("inlineCode",{parentName:"p"},"/**"),"\uff0c\u8bbf\u95ee\u5f53\u524d\u9879\u76ee\u4efb\u610f\u8d44\u6e90\uff0c\u90fd\u4f1a\u627e\u5230",Object(i.b)("inlineCode",{parentName:"p"},"resourceProperties"),"\u7c7b\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'// \u8fdb\u5165\u65b9\u6cd5\npublic String[] getStaticLocations() {\n    return this.staticLocations;\n}\n// \u627e\u5230\u5bf9\u5e94\u7684\u503c\nprivate String[] staticLocations = CLASSPATH_RESOURCE_LOCATIONS;\n// \u627e\u5230\u8def\u5f84\nprivate static final String[] CLASSPATH_RESOURCE_LOCATIONS = { \n    "classpath:/META-INF/resources/",\n    "classpath:/resources/", \n    "classpath:/static/", \n    "classpath:/public/" \n};\n')),Object(i.b)("p",null,"\u7531\u6b64\u53ef\u4ee5\u5f97\u51fa\u7ed3\u8bba\uff0c\u4ee5\u4e0b\u56db\u4e2a\u76ee\u5f55\u5b58\u653e\u7684\u9759\u6001\u8d44\u6e90\u53ef\u4ee5\u88abSpringBoot\u8bc6\u522b\u5230\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'"classpath:/META-INF/resources/",\n"classpath:/resources/", \n"classpath:/static/", \n"classpath:/public/" \n')),Object(i.b)("p",null,"\u76f4\u63a5\u8bbf\u95ee",Object(i.b)("inlineCode",{parentName:"p"},"http://localhost:8080/\u9759\u6001\u8d44\u6e90\u6587\u4ef6\u540d"),"\uff0cSpringBoot\u5c31\u4f1a\u53bb\u8fd9\u56db\u4e2a\u6587\u4ef6\u5939\u5bfb\u627e\u9759\u6001\u8d44\u6e90\u6587\u4ef6"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u4f18\u5148\u7ea7\uff1a")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"resources > static > public")),Object(i.b)("h3",{id:"\u81ea\u5b9a\u4e49\u9759\u6001\u8d44\u6e90\u8def\u5f84"},"\u81ea\u5b9a\u4e49\u9759\u6001\u8d44\u6e90\u8def\u5f84"),Object(i.b)("p",null,"\u53ef\u4ee5\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e\u9759\u6001\u8d44\u6e90\u6587\u4ef6\u8def\u5f84"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="application.yaml"',title:'"application.yaml"'}),"spring:\n  resources:\n    static-locations: classpath:/css, classpath:/js\n")),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u4e00\u65e6\u5b9a\u4e49\u4e86\u9759\u6001\u6587\u4ef6\u5939\u7684\u8def\u5f84\uff0c\u539f\u6765\u7684\u81ea\u52a8\u914d\u7f6e\u5c31\u4f1a\u5931\u6548"))))}p.isMDXComponent=!0},548:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return j}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),l=p(n),d=r,j=l["".concat(c,".").concat(d)]||l[d]||u[d]||i;return n?a.a.createElement(j,o(o({ref:t},b),{},{components:n})):a.a.createElement(j,o({ref:t},b))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var b=2;b<i;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},791:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/6-7509c3240f19b5a78349d0b855c776a1.png"},792:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/7-b935688cb1747cc322ff452053979fb2.png"}}]);