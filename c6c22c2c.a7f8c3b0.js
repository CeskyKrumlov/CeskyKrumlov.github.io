(window.webpackJsonp=window.webpackJsonp||[]).push([[401],{1148:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/4-bdd8899ee87412af725d948ea9fb0ed2.png"},1149:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/5-082c3ead41167b2a38ef959614148fd0.png"},1150:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/6-304a459c84776f3a22dc4aaf617701de.png"},458:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return o}));var r=n(2),a=n(6),l=(n(0),n(572)),i={id:"3.process",title:"SpringMVC\u6267\u884c\u539f\u7406",hide_title:!0},p={unversionedId:"springmvc/3.process",id:"springmvc/3.process",isDocsHomePage:!1,title:"SpringMVC\u6267\u884c\u539f\u7406",description:"SpringMVC\u6267\u884c\u539f\u7406",source:"@site/docs/springmvc/3.SpringMVC\u6267\u884c\u539f\u7406.md",slug:"/springmvc/3.process",permalink:"/docs/springmvc/3.process",version:"current",sidebar:"someSidebar",previous:{title:"Hello SpringMVC",permalink:"/docs/springmvc/2.helloSpringMVC"},next:{title:"SpringMVC\u6ce8\u89e3\u5f00\u53d1",permalink:"/docs/springmvc/4.annotation"}},c=[{value:"SpringMVC\u6267\u884c\u539f\u7406",id:"springmvc\u6267\u884c\u539f\u7406",children:[{value:"\u7b80\u8981\u6267\u884c\u6d41\u7a0b\u5206\u6790",id:"\u7b80\u8981\u6267\u884c\u6d41\u7a0b\u5206\u6790",children:[]},{value:"HandlerMapping",id:"handlermapping",children:[]},{value:"\u73af\u5883\u642d\u5efa",id:"\u73af\u5883\u642d\u5efa",children:[]}]}],b={rightToc:c};function o(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,i,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"springmvc\u6267\u884c\u539f\u7406"},"SpringMVC\u6267\u884c\u539f\u7406"),Object(l.b)("p",null,Object(l.b)("img",{alt:"image-20200407090504458",src:n(1148).default})),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u865a\u7ebf\u662f\u9700\u8981\u6211\u4eec\u7f16\u5199\u5b9e\u73b0\u7684"),Object(l.b)("li",{parentName:"ul"},"\u5b9e\u73b0\u662fSpringMVC\u5df2\u7ecf\u5b9e\u73b0\u7684")),Object(l.b)("h2",{id:"\u7b80\u8981\u6267\u884c\u6d41\u7a0b\u5206\u6790"},"\u7b80\u8981\u6267\u884c\u6d41\u7a0b\u5206\u6790"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"DispatcherServlet\u8868\u793a\u524d\u7aef\u63a7\u5236\u5668\uff0c\u662f\u6574\u4e2aSpringMVC\u7684\u63a7\u5236\u4e2d\u5fc3\u3002\u7528\u6237\u53d1\u51fa\u8bf7\u6c42\uff0cDispatcherServlet\u63a5\u6536\u8bf7\u6c42\u5e76\u62e6\u622a\u8bf7\u6c42",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5047\u8bbe\u8bf7\u6c42url\u4e3a http://localhost:8080/springmvc/hello"),Object(l.b)("li",{parentName:"ul"},"http://localhost:8080\u4e3a\u670d\u52a1\u5668\u57df\u540d\uff0c",Object(l.b)("inlineCode",{parentName:"li"},"http"),"\u4e3a\u534f\u8bae\uff0c",Object(l.b)("inlineCode",{parentName:"li"},"localhost"),"\u4e3a\u4e3b\u673a\uff0c",Object(l.b)("inlineCode",{parentName:"li"},"8080"),"\u4e3a\u7aef\u53e3"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"springmvc"),"\u8868\u793a\u90e8\u7f72\u5728\u670d\u52a1\u5668\u4e0a\u7684web\u7ad9\u70b9\u8def\u5f84\uff0c\u5373",Object(l.b)("inlineCode",{parentName:"li"},"path")),Object(l.b)("li",{parentName:"ul"},"hello\u8868\u793a\u63a7\u5236\u5668\uff0c\u5982\u679c\u662f\u5e38\u89c1\u7684GET\u8bf7\u6c42\u65b9\u5f0f\uff0c\u8fd8\u53ef\u4ee5\u643a\u5e26\u53c2\u6570\uff0c\u5373",Object(l.b)("inlineCode",{parentName:"li"},"query")),Object(l.b)("li",{parentName:"ul"},"url -> \u8bf7\u6c42\u4f4d\u4e8e\u670d\u52a1\u5668localhost:8080\u4e0a\u7684springmvc\u7ad9\u70b9\u7684hello\u63a7\u5236\u5668"))),Object(l.b)("li",{parentName:"ol"},"HandlerMapping\u4e3a\u5904\u7406\u5668\u6620\u5c04\u3002DispatcherServlet\u8c03\u7528HandlerMapping\uff0cHandlerMapping\u6839\u636e\u8bf7\u6c42url\u67e5\u627eHandler"),Object(l.b)("li",{parentName:"ol"},"HandlerExecution\u8868\u793a\u5177\u4f53\u7684Handler\uff0c\u5176\u4e3b\u8981\u4f5c\u7528\u662f\u6839\u636eurl\u67e5\u627e\u63a7\u5236\u5668\uff0c\u5982\u4e0aurl\u88ab\u67e5\u627e\u63a7\u5236\u5668\u4e3a\uff1ahello"),Object(l.b)("li",{parentName:"ol"},"HandlerExecution\u5c06\u89e3\u6790\u540e\u7684\u4fe1\u606f\u4f20\u9012\u7ed9DispatcherServlet\uff0c\u5982\u89e3\u6790\u63a7\u5236\u5668\u6620\u5c04\u7b49"),Object(l.b)("li",{parentName:"ol"},"HandlerAdapter\u8868\u793a\u5904\u7406\u5668\u9002\u914d\u5668\uff0c\u5176\u6309\u7167\u7279\u5b9a\u7684\u89c4\u5219\u53bb\u6267\u884cHandler"),Object(l.b)("li",{parentName:"ol"},"Handler\u8ba9\u5177\u4f53\u7684Controleer\u6267\u884c"),Object(l.b)("li",{parentName:"ol"},"Controller\u5c06\u5177\u4f53\u7684\u6267\u884c\u4fe1\u606f\u8fd4\u56de\u7ed9HandlerAdapter\uff0c\u5982ModelAndView"),Object(l.b)("li",{parentName:"ol"},"HandlerAdapter\u5c06\u89c6\u56fe\u903b\u8f91\u540d\u6216\u6a21\u578b\u4f20\u9012\u7ed9DispatcherServlet"),Object(l.b)("li",{parentName:"ol"},"DispatcherServlet\u8c03\u7528\u89c6\u56fe\u89e3\u6790\u5668(ViewResolver)\u6765\u89e3\u6790HandlerAdapter\u4f20\u9012\u7684\u903b\u8f91\u89c6\u56fe\u540d",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u83b7\u53d6ModelAndView\u7684\u6570\u636e"),Object(l.b)("li",{parentName:"ul"},"\u89e3\u6790ModelAndView\u7684\u89c6\u56fe\u540d\u5b57"),Object(l.b)("li",{parentName:"ul"},"\u62fc\u63a5\u89c6\u56fe\u540d\u5b57\uff08\u524d\u540e\u7f00\uff09\uff0c\u627e\u5230\u5bf9\u5e94\u7684\u89c6\u56fe /WEB-INF/jsp/"),Object(l.b)("li",{parentName:"ul"},"\u5c06\u6570\u636e\u6e32\u67d3\u5230\u8fd9\u4e2a\u89c6\u56fe\u4e0a"))),Object(l.b)("li",{parentName:"ol"},"\u89c6\u56fe\u89e3\u6790\u5668\u5c06\u89e3\u6790\u7684\u903b\u8f91\u89c6\u56fe\u540d\u4f20\u7ed9DispatcherServlet"),Object(l.b)("li",{parentName:"ol"},"DispatcherServlet\u6839\u636e\u89c6\u56fe\u89e3\u6790\u5668\u89e3\u6790\u7684\u89c6\u56fe\u7ed3\u679c\uff0c\u8c03\u7528\u5177\u4f53\u7684\u89c6\u56fe"),Object(l.b)("li",{parentName:"ol"},"\u6700\u7ec8\u89c6\u56fe\u5448\u73b0\u7ed9\u7528\u6237")),Object(l.b)("h2",{id:"handlermapping"},"HandlerMapping"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://blog.csdn.net/prince2270/article/details/5894456?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase"}),"SpringMVC HandlerMapping\u8be6\u89e3"))),Object(l.b)("h2",{id:"\u73af\u5883\u642d\u5efa"},"\u73af\u5883\u642d\u5efa"),Object(l.b)("img",{src:n(1149).default,style:{zoom:"90%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(l.b)("br",null),Object(l.b)("img",{src:n(1150).default,style:{zoom:"90%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(l.b)("br",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"web.xml"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u914d\u7f6eDispatcherServlet\nSpringMVC\u7684\u6838\u5fc3\uff0c\u8bf7\u6c42\u5206\u53d1\u5668\uff0c\u524d\u7aef\u63a7\u5236\u5668",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/"),"\uff1a\u53ea\u5339\u914d\u6240\u6709\u7684\u8bf7\u6c42\uff0c\u4e0d\u5339\u914djsp"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/*"),"\uff1a\u5339\u914d\u6240\u6709\u7684\u8bf7\u6c42\uff0c\u5305\u62ecjsp\n\u89c6\u56fe\u89e3\u6790\u5668\u4f1a\u62e6\u622a.jsp\u6587\u4ef6\u7136\u540e\u62fc\u540e\u7f00.jsp\uff0c\u4ece\u800c\u4ea7\u751f.jsp.jsp\u8fd9\u6837\u7684\u4e1c\u897f\uff0c\u5bfc\u81f4\u6b7b\u5faa\u73af"))),Object(l.b)("li",{parentName:"ul"},"\u5728DispatcherServlet\u91cc\u7ed1\u5b9aSpringMVC\u7684\u914d\u7f6e\u6587\u4ef6(\u4e00\u4e2aSpring\u914d\u7f6e\u6587\u4ef6)"),Object(l.b)("li",{parentName:"ul"},"\u8bbe\u7f6e\u5728\u670d\u52a1\u5668\u542f\u52a8\u65f6\u542f\u52a8")),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"\x3c!--    \u914d\u7f6eDispatcherServlet--\x3e\n<servlet>\n    <servlet-name>dispatcherServlet</servlet-name>\n    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>\n    \x3c!--        \u7ed1\u5b9aSpringMVC\u914d\u7f6e\u6587\u4ef6(\u4e00\u4e2aSpring\u914d\u7f6e\u6587\u4ef6)--\x3e\n    <init-param>\n        <param-name>contextConfigLocation</param-name>\n        <param-value>classpath:springmvc-servlet.xml</param-value>\n    </init-param>\n    \x3c!--        \u670d\u52a1\u5668\u5df2\u542f\u52a8\u5c31\u542f\u52a8--\x3e\n    <load-on-startup>1</load-on-startup>\n</servlet>\n<servlet-mapping>\n    <servlet-name>dispatcherServlet</servlet-name>\n    <url-pattern>/</url-pattern>\n</servlet-mapping>\n")))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"springmvc-servlet.xml\n\u771f\u5b9e\u5f00\u53d1\u4e0d\u7528\u914d\u7f6e\u4ee5\u4e0b\u4e24\u4e2a\u4e1c\u897f\uff0c\u4e3a\u4e86\u7406\u89e3\u539f\u7406\uff0c\u914d\u4e0a\n\u5bf9\u5e94\u539f\u7406\u56fe\uff0c\u4ee5\u4e0b\u4e09\u4e2a\u90e8\u4ef6\u4e3aSpringMVC\u7684\u4e09\u5927\u6838\u5fc3\u7ec4\u4ef6"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u5904\u7406\u5668\u6620\u5c04\u5668",Object(l.b)("inlineCode",{parentName:"p"},"HandlerMapping"),"\n\u8d1f\u8d23\u8bf7\u6c42\u5206\u53d1")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u5904\u7406\u5668\u9002\u914d\u5668",Object(l.b)("inlineCode",{parentName:"p"},"HandlerAdapter"),"\n\u8d1f\u8d23\u5728DispatcherServlet\u548c\u5177\u4f53\u4e1a\u52a1Controller\u4e4b\u95f4\u8fdb\u884c\u9002\u914d")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u89c6\u56fe\u89e3\u6790\u5668",Object(l.b)("inlineCode",{parentName:"p"},"ViewResolver"),"   \uff08\u4e0d\u53ef\u7701\u7565\uff09\n\u8d1f\u8d23\u6a21\u578b\u89c6\u56fe\u6e32\u67d3"),Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Spring\u539f\u751f\u3001Thymeleaf\u3001Freemarker")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u914d\u7f6e\u524d\u7f00",Object(l.b)("inlineCode",{parentName:"li"},"prefix")),Object(l.b)("li",{parentName:"ul"},"\u914d\u7f6e\u540e\u7f00",Object(l.b)("inlineCode",{parentName:"li"},"suffix")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u56e0\u4e3a\u4f7f\u7528\u4e86",Object(l.b)("inlineCode",{parentName:"p"},"BeanNameUrlHandlerMapping"),"\uff0c\u6240\u4ee5\u9700\u8981\u914d\u7f6e\u4e00\u4e2a\u5e26\u540d\u5b57\u7684bean"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"bean id\uff1a\u5c31\u8d77\u540d\u4e3a\u8981\u89e3\u6790\u7684\u5730\u5740"),Object(l.b)("li",{parentName:"ul"},"bean class: \u6307\u5b9a\u54ea\u4e2a\u7c7b\u6765\u5904\u7406\u8fd9\u4e2a\u5730\u5740\u4e0a\u7684\u8bf7\u6c42")))),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!--    \u5904\u7406\u5668\u6620\u5c04\u5668HandlerMapping--\x3e\n<bean class="org.springframework.web.servlet.handler.BeanNameUrlHandlerMapping"/>\n\x3c!--    \u5904\u7406\u5668\u9002\u914d\u5668HandlerAdapter--\x3e\n<bean class="org.springframework.web.servlet.mvc.SimpleControllerHandlerAdapter"/>\n\x3c!--    \u89c6\u56fe\u89e3\u6790\u5668ViewResolver--\x3e\n<bean class="org.springframework.web.servlet.view.InternalResourceViewResolver"\n      id="internalResourceViewResolver">\n    <property name="prefix" value="WEB-INF/jsp/"/>\n    <property name="suffix" value=".jsp"/>\n</bean>\n')))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Controller"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class HelloController implements Controller {\n    public ModelAndView handleRequest(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws Exception {\n        ModelAndView mv = new ModelAndView();\n\n        //\u4e1a\u52a1\u4ee3\u7801\n        //\u865a\u62df\u8fd4\u56de\u503c\n        String result = "Result form Service";\n\n        //\u89c6\u56fe\u8df3\u8f6c\n        mv.addObject("msg", result);\n        //\u53bb\u89c6\u56fe\u89e3\u6790\u5668\uff0c\u88ab\u89c6\u56fe\u89e3\u6790\u5668\u62fc\u63a5\u4e3aWEB-INF/jsp/test.jsp\n        mv.setViewName("test");\n\n        return mv;\n    }\n}\n')))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u6d4b\u8bd5",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u8bb0\u5f97\u5728project structure -> Artifact\u4e2d\u6dfb\u52a0lib\u76ee\u5f55\u5bfc\u5165\u6240\u6709\u4f9d\u8d56\u5305"),Object(l.b)("li",{parentName:"ul"},"\u8bb0\u5f97\u5c06Tomcat\u4e2d\u9879\u76ee\u865a\u62df\u76ee\u5f55\u8bbe\u7f6e\u4e3a",Object(l.b)("inlineCode",{parentName:"li"},"/"))))))}o.isMDXComponent=!0},572:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),o=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=o(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=o(n),u=r,d=s["".concat(i,".").concat(u)]||s[u]||m[u]||l;return n?a.a.createElement(d,p(p({ref:t},b),{},{components:n})):a.a.createElement(d,p({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var b=2;b<l;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);