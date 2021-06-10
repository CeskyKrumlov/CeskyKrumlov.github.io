(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{110:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return b}));var r=t(2),a=t(6),l=(t(0),t(353)),i={id:"4.annotation",title:"SpringMVC\u6ce8\u89e3\u5f00\u53d1",hide_title:!0},c={unversionedId:"springmvc/4.annotation",id:"springmvc/4.annotation",isDocsHomePage:!1,title:"SpringMVC\u6ce8\u89e3\u5f00\u53d1",description:"SpringMVC\u6ce8\u89e3\u5f00\u53d1",source:"@site/docs/springmvc/4.SpringMVC\u6ce8\u89e3\u5f00\u53d1.md",slug:"/springmvc/4.annotation",permalink:"/docs/springmvc/4.annotation",version:"current",sidebar:"someSidebar",previous:{title:"SpringMVC\u6267\u884c\u539f\u7406",permalink:"/docs/springmvc/3.process"},next:{title:"RESTFul",permalink:"/docs/springmvc/5.restful"}},p=[{value:"SpringMVC\u6ce8\u89e3\u5f00\u53d1",id:"springmvc\u6ce8\u89e3\u5f00\u53d1",children:[{value:"\u73af\u5883\u642d\u5efa",id:"\u73af\u5883\u642d\u5efa",children:[]},{value:"1. \u6ce8\u89e3\u5f00\u53d1",id:"1-\u6ce8\u89e3\u5f00\u53d1",children:[{value:"1.1 web.xml",id:"11-webxml",children:[]},{value:"1.2 springmvc-servlet.xml",id:"12-springmvc-servletxml",children:[]},{value:"1.3 Controller",id:"13-controller",children:[]}]},{value:"SpringMVC\u5fc5\u987b\u914d\u7f6e\u7684\u4e09\u5927\u4ef6",id:"springmvc\u5fc5\u987b\u914d\u7f6e\u7684\u4e09\u5927\u4ef6",children:[]}]}],o={rightToc:p};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"springmvc\u6ce8\u89e3\u5f00\u53d1"},"SpringMVC\u6ce8\u89e3\u5f00\u53d1"),Object(l.b)("h2",{id:"\u73af\u5883\u642d\u5efa"},"\u73af\u5883\u642d\u5efa"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u65b0\u5efamaven\u6a21\u5757\uff0cspringmvc-04-annotation")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u89e3\u51b3maven\u5bfc\u51fa\u5305\u95ee\u9898"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<build>\n    <resources>\n        <resource>\n            <directory>src/main/resources</directory>\n            <includes>\n                <include>**/*.properties</include>\n                <include>**/*.xml</include>\n            </includes>\n            <filtering>true</filtering>\n        </resource>\n        <resource>\n            <directory>src/main/java</directory>\n            <includes>\n                <include>**/*.properties</include>\n                <include>**/*.xml</include>\n            </includes>\n            <filtering>true</filtering>\n        </resource>\n    </resources>\n</build>\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u7ed9maven\u9879\u76ee\u6dfb\u52a0web4.0\u652f\u6301")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u7ed9\u9879\u76eeartifact\u6dfb\u52a0lib\u4f9d\u8d56"))),Object(l.b)("h2",{id:"1-\u6ce8\u89e3\u5f00\u53d1"},"1. \u6ce8\u89e3\u5f00\u53d1"),Object(l.b)("h3",{id:"11-webxml"},"1.1 web.xml"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u6ce8\u518cDispatchrtServlet"),Object(l.b)("li",{parentName:"ul"},"\u5173\u8054SpringMVC\u914d\u7f6e\u6587\u4ef6"),Object(l.b)("li",{parentName:"ul"},"\u8bbe\u7f6e\u670d\u52a1\u5668\u542f\u52a8\u65f6\u542f\u52a8"),Object(l.b)("li",{parentName:"ul"},"\u8bbe\u7f6e\u6620\u5c04\u8def\u5f84\u4e3a/")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"\x3c!--    \u6ce8\u518cDispatchrtServlet--\x3e\n<servlet>\n    <servlet-name>dispatcherServlet</servlet-name>\n    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>\n    \x3c!--    \u5173\u8054SpringMVC\u914d\u7f6e\u6587\u4ef6--\x3e\n    <init-param>\n        <param-name>contextConfigLocation</param-name>\n        <param-value>classpath:springmvc-servlet.xml</param-value>\n    </init-param>\n    \x3c!--    \u8bbe\u7f6e\u670d\u52a1\u5668\u542f\u52a8\u65f6\u542f\u52a8--\x3e\n    <load-on-startup>1</load-on-startup>\n</servlet>\n\x3c!--    \u8bbe\u7f6e\u6620\u5c04\u8def\u5f84\u4e3a/--\x3e\n<servlet-mapping>\n    <servlet-name>dispatcherServlet</servlet-name>\n    <url-pattern>/</url-pattern>\n</servlet-mapping>\n")),Object(l.b)("h3",{id:"12-springmvc-servletxml"},"1.2 springmvc-servlet.xml"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u8bbe\u7f6e\u81ea\u52a8\u626b\u63cf\u5305\uff0c\u8ba9\u6307\u5b9a\u5305\u4e0b\u7684\u6ce8\u89e3\u751f\u6548\uff0c\u7531IOC\u5bb9\u5668\u7edf\u4e00\u7ba1\u7406"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<context:component-scan base-package="com.bsx.controller"/>\n'))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u8bbe\u7f6e\u8ba9SpringMVC\u4e0d\u5904\u7406\u9759\u6001\u8d44\u6e90\ncss\u3001jsp\u3001html\u7b49"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<mvc:default-servlet-handler/>\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u8bbe\u7f6e\u5f00\u542fmvc\u6ce8\u89e3\u9a71\u52a8\n\u5728Spring\u4e2d\u4e00\u822c\u91c7\u7528",Object(l.b)("inlineCode",{parentName:"p"},"@RequestMapping"),"\u6ce8\u89e3\u6765\u5b8c\u6210\u6620\u5c04\u5173\u7cfb\n\u8981\u60f3\u4f7f",Object(l.b)("inlineCode",{parentName:"p"},"RequestMapping"),"\u6ce8\u89e3\u751f\u6548\n\u5fc5\u987b\u5411\u4e0a\u4e0b\u6587\u4e2d\u6ce8\u518c",Object(l.b)("inlineCode",{parentName:"p"},"DefaultAnnotationHandlerMapping"),"\n\u548c\u4e00\u4e2a",Object(l.b)("inlineCode",{parentName:"p"},"AnnotationMethodHandlerAdapter"),"\u5b9e\u4f8b"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u81ea\u52a8\u521b\u5efa\u548c\u6ce8\u5165",Object(l.b)("inlineCode",{parentName:"li"},"HandlerMapping")),Object(l.b)("li",{parentName:"ul"},"\u81ea\u52a8\u521b\u5efa\u548c\u6ce8\u5165",Object(l.b)("inlineCode",{parentName:"li"},"HandlerAdapter"))),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<mvc:annotation-driven/>\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u914d\u7f6e\u89c6\u56fe\u89e3\u6790\u5668"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<bean class="org.springframework.web.servlet.view.InternalResourceViewResolver"\n      id="internalResourceViewResolver">\n    <property name="prefix" value="/WEB-INF/jsp/"/>\n    <property name="suffix" value=".jsp"/>\n</bean>\n')))),Object(l.b)("h3",{id:"13-controller"},"1.3 Controller"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"@Controller\n\u6807\u8bb0Controller\uff0c\u914d\u5408\u5305\u626b\u63cf\u4ea4\u7531Spring\u5bb9\u5668\u7ba1\u7406",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u63a7\u5236\u5668\u8d1f\u8d23\u63d0\u4f9b\u8bbf\u95ee\u5e94\u7528\u7a0b\u5e8f\u7684\u884c\u4e3a\uff0c\u901a\u5e38\u901a\u8fc7\u63a5\u53e3\u5b9a\u4e49\u6216\u6ce8\u89e3\u5b9a\u4e49\u4e24\u79cd\u65b9\u5f0f\u5b9e\u73b0"),Object(l.b)("li",{parentName:"ul"},"\u63a7\u5236\u5668\u8d1f\u8d23\u89e3\u6790\u7528\u6237\u7684\u8bf7\u6c42\u5e76\u5c06\u5176\u8f6c\u6362\u4e3a\u4e00\u4e2a\u6a21\u578b"),Object(l.b)("li",{parentName:"ul"},"\u5728Spring MVC\u4e2d\u4e00\u4e2a\u63a7\u5236\u5668\u7c7b\u53ef\u4ee5\u5305\u542b\u591a\u4e2a\u65b9\u6cd5"),Object(l.b)("li",{parentName:"ul"},"\u5728Spring MVC\u4e2d\uff0c\u7531\u591a\u79cdController\u7684\u914d\u7f6e\u65b9\u5f0f"))),Object(l.b)("li",{parentName:"ul"},"@RequestMapping\n\u6307\u5b9a\u89e3\u6790\u5730\u5740",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u7528\u4e8e\u6620\u5c04url\u5230\u63a7\u5236\u5668\u7c7b\u6216\u4e00\u4e2a\u7279\u5b9a\u7684\u5904\u7406\u7a0b\u5e8f\u65b9\u6cd5\u3002\u53ef\u7528\u4e8e\u7c7b\u6216\u65b9\u6cd5\u4e0a\u3002\u7528\u4e8e\u7c7b\u4e0a\uff0c\u8868\u793a\u7c7b\u4e2d\u7684\u6240\u6709\u54cd\u5e94\u8bf7\u6c42\u7684\u65b9\u6cd5\u90fd\u662f\u4ee5\u5730\u5740\u4f5c\u4e3a\u7236\u8def\u5f84")))),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Controller\n@RequestMapping("/springmvcAnnotation")\npublic class HelloController {\n\n    //\u8bbf\u95ee\u5730\u5740\u4e3a \u865a\u62df\u76ee\u5f55/springmvcAnnotation/hello\n    @RequestMapping("/hello")\n    public String hello(Model model){\n\n        //\u5c01\u88c5\u6570\u636e,\u5411\u6a21\u578b\u4e2d\u6dfb\u52a0\u5c5e\u6027\uff0c\u53ef\u4ee5\u5728jsp\u9875\u9762\u4e2d\u53d6\u51fa\u5e76\u6e32\u67d3\n        model.addAttribute("msg","SpringMVC Annotation");\n        //\u8fd4\u56de\u503c\u4f1a\u88ab\u89c6\u56fe\u89e3\u6790\u5668\u5904\u7406\uff0c\u62fc\u4e0a\u524d\u540e\u7f00/WEB-INF/jsp/hello.jsp\n        return "hello";\n    }\n}\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u6d4b\u8bd5\n\u542f\u52a8Tomcat\uff0c\u8bbf\u95eelocalhost:8080/springmvcAnnotation/hello")),Object(l.b)("h2",{id:"springmvc\u5fc5\u987b\u914d\u7f6e\u7684\u4e09\u5927\u4ef6"},"SpringMVC\u5fc5\u987b\u914d\u7f6e\u7684\u4e09\u5927\u4ef6"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5904\u7406\u5668\u6620\u5c04\u5668",Object(l.b)("inlineCode",{parentName:"li"},"HandlerMapping")),Object(l.b)("li",{parentName:"ul"},"\u5904\u7406\u5668\u9002\u914d\u5668",Object(l.b)("inlineCode",{parentName:"li"},"HandlerAdapter")),Object(l.b)("li",{parentName:"ul"},"\u89c6\u56fe\u89e3\u6790\u5668",Object(l.b)("inlineCode",{parentName:"li"},"ViewResolver"))),Object(l.b)("p",null,"\u901a\u5e38\u53ea\u9700\u8981\u624b\u52a8\u914d\u7f6e\u89c6\u56fe\u89e3\u6790\u5668\uff0c\u800c\u5904\u7406\u5668\u6620\u5c04\u5668\u548c\u5904\u7406\u5668\u9002\u914d\u5668\u8457\u9700\u8981\u5f00\u542f",Object(l.b)("strong",{parentName:"p"},"\u6ce8\u89e3\u9a71\u52a8"),"\u5373\u53ef\uff0c\u800c\u7701\u53bb\u4e86\u5927\u91cfxml\u914d\u7f6e"))}b.isMDXComponent=!0},353:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=a.a.createContext({}),b=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=b(e.components);return a.a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),m=b(t),s=r,d=m["".concat(i,".").concat(s)]||m[s]||u[s]||l;return t?a.a.createElement(d,c(c({ref:n},o),{},{components:t})):a.a.createElement(d,c({ref:n},o))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=s;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var o=2;o<l;o++)i[o]=t[o];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);