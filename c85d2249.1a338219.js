(window.webpackJsonp=window.webpackJsonp||[]).push([[346],{403:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(6),l=(t(0),t(496)),c={id:"8.springAnnotation",title:"Spring\u6ce8\u89e3\u5f00\u53d1"},i={unversionedId:"spring/8.springAnnotation",id:"spring/8.springAnnotation",isDocsHomePage:!1,title:"Spring\u6ce8\u89e3\u5f00\u53d1",description:"\u5728Spring4\u4e4b\u540e\uff0c\u8981\u4f7f\u7528\u6ce8\u89e3\u5f00\u53d1\uff0c\u5fc5\u987b\u8981\u4fdd\u8bc1AOP\u7684\u5305\u5df2\u7ecf\u5bfc\u5165",source:"@site/docs/spring/8.Spring\u6ce8\u89e3\u5f00\u53d1.md",slug:"/spring/8.springAnnotation",permalink:"/docs/spring/8.springAnnotation",version:"current",sidebar:"someSidebar",previous:{title:"Bean\u81ea\u52a8\u88c5\u914d",permalink:"/docs/spring/7.autowire"},next:{title:"Spring\u914d\u7f6e\u7c7b",permalink:"/docs/spring/9.configClass"}},o=[{value:"bean",id:"bean",children:[{value:"@Component",id:"component",children:[]}]},{value:"\u5c5e\u6027\u6ce8\u5165",id:"\u5c5e\u6027\u6ce8\u5165",children:[{value:"@Value(&quot;xxx&quot;)",id:"valuexxx",children:[]}]},{value:"\u884d\u751f\u6ce8\u89e3",id:"\u884d\u751f\u6ce8\u89e3",children:[{value:"@Repository",id:"repository",children:[]},{value:"@Service",id:"service",children:[]},{value:"@Controller",id:"controller",children:[]}]},{value:"\u81ea\u52a8\u6ce8\u5165",id:"\u81ea\u52a8\u6ce8\u5165",children:[{value:"@Autowired",id:"autowired",children:[]},{value:"@Qualifier",id:"qualifier",children:[]},{value:"@Resource",id:"resource",children:[]}]},{value:"\u4f5c\u7528\u57df",id:"\u4f5c\u7528\u57df",children:[{value:"@Scope",id:"scope",children:[]}]},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",children:[]}],b={rightToc:o};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u5728Spring4\u4e4b\u540e\uff0c\u8981\u4f7f\u7528\u6ce8\u89e3\u5f00\u53d1\uff0c\u5fc5\u987b\u8981\u4fdd\u8bc1AOP\u7684\u5305\u5df2\u7ecf\u5bfc\u5165\n\u4f7f\u7528\u6ce8\u89e3\u9700\u8981\u5bfc\u5165context\u7ea6\u675f\uff0c\u589e\u52a0\u6ce8\u89e3\u7684\u652f\u6301"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"bean (applicationContext.xml)"),Object(l.b)("li",{parentName:"ol"},"\u5c5e\u6027\u5982\u4f55\u6ce8\u5165"),Object(l.b)("li",{parentName:"ol"},"\u884d\u751f\u6ce8\u89e3"),Object(l.b)("li",{parentName:"ol"},"\u81ea\u52a8\u6ce8\u5165\uff08\u5df2\u8bb2\uff09"),Object(l.b)("li",{parentName:"ol"},"\u4f5c\u7528\u57df"),Object(l.b)("li",{parentName:"ol"},"\u5c0f\u7ed3")),Object(l.b)("h1",{id:"bean"},"bean"),Object(l.b)("p",null,"\u65b0\u5efamaven\u6a21\u5757spring-06-annotation"),Object(l.b)("h2",{id:"component"},"@Component"),Object(l.b)("p",null,"\u7ec4\u4ef6\u6ce8\u89e3\uff0c\u653e\u5728\u7c7b\u4e0a\uff0c\u7528\u6765\u4ee3\u66ff",Object(l.b)("inlineCode",{parentName:"p"},"bean"),"\u6807\u7b7e\uff0c\u8bf4\u660e\u7c7b\u88abSpring\u7ba1\u7406\u4e86\uff0c\u5c31\u662fbean\uff0c\u9ed8\u8ba4\u6ce8\u518cbean id\u4e3a\u7c7b\u7684\u5c0f\u5199\u5f62\u5f0f"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"applicationContext.xml"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xmlns:context="http://www.springframework.org/schema/context"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans\n        https://www.springframework.org/schema/beans/spring-beans.xsd \n        http://www.springframework.org/schema/context \n        https://www.springframework.org/schema/context/spring-context.xsd">\n    \n    <context:component-scan base-package="com.bsx.pojo"/>\n\n</beans>\n'))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"User.java"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Component\npublic class User {\n    public String name = "bb";\n}\n'))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u6d4b\u8bd5"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void testComponent() {\n    ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext" +\n                                                                    ".xml");\n    User user = context.getBean("user", User.class);\n    System.out.println(user.name);\n}\n')))),Object(l.b)("h1",{id:"\u5c5e\u6027\u6ce8\u5165"},"\u5c5e\u6027\u6ce8\u5165"),Object(l.b)("h2",{id:"valuexxx"},'@Value("xxx")'),Object(l.b)("p",null,"\u52a0\u5728\u5c5e\u6027\u6216set\u65b9\u6cd5\u4e0a\uff0c\u7528\u6765\u6ce8\u5165\u5c5e\u6027\u7684\u503c\u3002\u76f8\u5f53\u4e8e",Object(l.b)("inlineCode",{parentName:"p"},"bean"),"\u6807\u7b7e\u4e0b\u7684",Object(l.b)("inlineCode",{parentName:"p"},"property"),"\u6807\u7b7e"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"User.java"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Component\npublic class User {\n\n    @Value("Alice")\n    public String name;\n}\n')))),Object(l.b)("p",null,"\u6ce8\u610f\uff1a\u5982\u679c\u6ce8\u5165\u60c5\u51b5\u5f88\u590d\u6742\uff0c\u5e94\u5f53\u7528\u914d\u7f6e\u6587\u4ef6\u7684\u65b9\u5f0f"),Object(l.b)("h1",{id:"\u884d\u751f\u6ce8\u89e3"},"\u884d\u751f\u6ce8\u89e3"),Object(l.b)("p",null,"@Component\u6709\u51e0\u4e2a\u884d\u751f\u6ce8\u89e3\uff0c\u529f\u80fd\u5b8c\u5168\u4e00\u6837\uff0c\u90fd\u7528\u6765\u5c06\u7c7b\u6ce8\u518c\u5230Spring\u5bb9\u5668\u4e2d\uff0c\u53ea\u662f\u6211\u4eec\u5728web\u5f00\u53d1\u4e2d\uff0c\u4f1a\u6309\u7167mvc\u4e09\u5c42\u67b6\u6784\u5206\u5c42"),Object(l.b)("p",null,"\u6ce8\u610f\u4fee\u6539\u5305\u626b\u63cf\u7684\u4f5c\u7528\u8303\u56f4"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<context:component-scan base-package="com.bsx"/>\n')),Object(l.b)("h2",{id:"repository"},"@Repository"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"dao\u5c42")),Object(l.b)("h2",{id:"service"},"@Service"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"service\u5c42")),Object(l.b)("h2",{id:"controller"},"@Controller"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"controller(web\u5c42\u3001servlet\u5c42)")),Object(l.b)("h1",{id:"\u81ea\u52a8\u6ce8\u5165"},"\u81ea\u52a8\u6ce8\u5165"),Object(l.b)("h2",{id:"autowired"},"@Autowired"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"@Autowired(required == true || false)"),Object(l.b)("li",{parentName:"ul"},"@Nullable")),Object(l.b)("h2",{id:"qualifier"},"@Qualifier"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},'Qualifier("xxx")')),Object(l.b)("h2",{id:"resource"},"@Resource"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"@Resource"),Object(l.b)("li",{parentName:"ul"},'@Resource(name = "xxx")')),Object(l.b)("h1",{id:"\u4f5c\u7528\u57df"},"\u4f5c\u7528\u57df"),Object(l.b)("h2",{id:"scope"},"@Scope"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5355\u4f8b",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},'@Scope("singleton")'))),Object(l.b)("li",{parentName:"ul"},"\u539f\u578b",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},'@Scope("prototype")')))),Object(l.b)("h1",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),Object(l.b)("p",null,"xml\u4e0e\u6ce8\u89e3\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"xml\u66f4\u52a0\u7075\u6d3b\uff0c\u9002\u7528\u4e8e\u4efb\u4f55\u573a\u5408\uff0c\u7ef4\u62a4\u7b80\u5355\u65b9\u4fbf"),Object(l.b)("li",{parentName:"ul"},"\u6ce8\u89e3 \u8de8\u7c7b\u4e0d\u7075\u6d3b\uff0c\u7ef4\u62a4\u76f8\u5bf9\u590d\u6742")),Object(l.b)("p",null,"\u4e8c\u8005\u7ed3\u5408\u624d\u662f\u738b\u9053"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"xml\u7528\u6765\u7ba1\u7406bean"),Object(l.b)("li",{parentName:"ul"},"\u6ce8\u89e3\u53ea\u8d1f\u8d23\u5b8c\u6210\u5c5e\u6027\u6ce8\u5165")),Object(l.b)("p",null,"\u6ce8\u610f\u914d\u7f6e\u5f00\u542f\u6ce8\u89e3"))}p.isMDXComponent=!0},496:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return O}));var r=t(0),a=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),p=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,O=u["".concat(c,".").concat(m)]||u[m]||s[m]||l;return t?a.a.createElement(O,i(i({ref:n},b),{},{components:t})):a.a.createElement(O,i({ref:n},b))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,c=new Array(l);c[0]=m;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var b=2;b<l;b++)c[b]=t[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);