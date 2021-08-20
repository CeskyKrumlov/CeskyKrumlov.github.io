(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{149:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return b}));var a=t(2),r=t(6),i=(t(0),t(566)),c={id:"9.configClass",title:"Spring\u914d\u7f6e\u7c7b"},o={unversionedId:"spring/9.configClass",id:"spring/9.configClass",isDocsHomePage:!1,title:"Spring\u914d\u7f6e\u7c7b",description:"\u5e72\u6389applicationContext.xml",source:"@site/docs/spring/9.JavaConfig\u5b9e\u73b0\u914d\u7f6e.md",slug:"/spring/9.configClass",permalink:"/docs/spring/9.configClass",version:"current",sidebar:"someSidebar",previous:{title:"Spring\u6ce8\u89e3\u5f00\u53d1",permalink:"/docs/spring/8.springAnnotation"},next:{title:"\u4ee3\u7406\u6a21\u5f0f",permalink:"/docs/spring/10.proxyPatterm"}},p=[{value:"AppConfig\u7c7b",id:"appconfig\u7c7b",children:[]},{value:"@Configuration",id:"configuration",children:[]},{value:"@Bean",id:"bean",children:[]},{value:"@Component + @ComponentScan",id:"component--componentscan",children:[]},{value:"@ Import(xxx.class)",id:"-importxxxclass",children:[]}],l={rightToc:p};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u5e72\u6389applicationContext.xml"))),Object(i.b)("p",null,"\u5b8c\u5168\u4f7f\u7528java\u7684\u65b9\u5f0f\u914d\u7f6eSpring"),Object(i.b)("p",null,"JavaConfig\u65f6Spring\u7684\u4e00\u4e2a\u5b50\u9879\u76ee\uff0c\u5728Spring4\u4e4b\u540e\uff0c\u5b83\u6210\u4e3a\u4e86\u4e00\u4e2a\u6838\u5fc3\u529f\u80fd"),Object(i.b)("h1",{id:"appconfig\u7c7b"},"AppConfig\u7c7b"),Object(i.b)("p",null,"\u65b0\u5efamaven\u6a21\u5757,spring-07-appconfig\uff0c\u65b0\u5efa\u4e00\u4e2a\u5305com.bsx.config"),Object(i.b)("p",null,"\u65b0\u5efa\u4e00\u4e2a\u7c7b\u540d\u5b57\u968f\u4fbf"),Object(i.b)("h1",{id:"configuration"},"@Configuration"),Object(i.b)("p",null,"\u7528\u6765\u5c06\u4e00\u4e2a\u7c7b\u6807\u8bb0\u4e3a\u914d\u7f6e\u7c7b\uff0c\u76f8\u5f53\u4e8eapplicationContext"),Object(i.b)("h1",{id:"bean"},"@Bean"),Object(i.b)("p",null,"\u7528\u6765\u6ce8\u89e3\u88ab",Object(i.b)("inlineCode",{parentName:"p"},"@Configuration"),"\u6ce8\u89e3\u7684\u7c7b\u4e0b\u7684\u65b9\u6cd5"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'@Bean("xxx")\u7528\u6765\u6307\u5b9abean id'),Object(i.b)("li",{parentName:"ul"},"@Bean -> \u6b64\u65f6\u6ce8\u89e3\u7684",Object(i.b)("inlineCode",{parentName:"li"},"\u65b9\u6cd5\u540d"),"\u5c31\u662fbean id")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"User.java"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Data\npublic class User {\n    @Value("\u6211\u7684\u540d\u5b57")\n    private String name;\n}\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"AppConfig.java"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Configuration\npublic class AppConfig {\n    \n    @Bean("user")\n    public User getUser(){\n        return new User();\n    }   \n}\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u6d4b\u8bd5"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void testAppConfig(){\n    ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);\n    User user = context.getBean("user", User.class);\n    System.out.println(user);\n}\n')))),Object(i.b)("h1",{id:"component--componentscan"},"@Component + @ComponentScan"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"@Component"),"\u52a0\u5728User\u7c7b\u4e0a",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'@Component("id")')," \u7528\u6765\u6307\u5b9abean id \uff0c \u9ed8\u8ba4\u4e3a\u7c7b\u540d\u5c0f\u5199"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'@ComponentScan("com.bsx")'),"\u52a0\u8f7d\u914d\u7f6e\u7c7b\u4e0a\uff0c\u5f00\u542f\u5305\u626b\u63cf")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"User.java"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Data\n@Component\npublic class User {\n    @Value("\u6211\u7684\u540d\u5b57")\n    private String name;\n}\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"AppConfig.java"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Configuration\n@ComponentScan("com.bsx")\npublic class AppConfig {\n\n}\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u6d4b\u8bd5"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void testAppConfig(){\n    ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);\n    User user = context.getBean("user", User.class);\n    System.out.println(user);\n}\n')))),Object(i.b)("h1",{id:"-importxxxclass"},"@ Import(xxx.class)"),Object(i.b)("p",null,"\u7528\u6765\u5728\u4e00\u4e2a\u914d\u7f6e\u7c7b\u91cc\u5f15\u5165\u53e6\u4e00\u4e2a\u4e86\u914d\u7f6e\u7c7b\uff0c\u4f20\u5165\u914d\u7f6e\u7c7b\u7684class\u6587\u4ef6"))}b.isMDXComponent=!0},566:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return j}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),b=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=b(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(t),m=a,j=s["".concat(c,".").concat(m)]||s[m]||u[m]||i;return t?r.a.createElement(j,o(o({ref:n},l),{},{components:t})):r.a.createElement(j,o({ref:n},l))}));function j(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=t[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);