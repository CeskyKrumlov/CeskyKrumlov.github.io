(window.webpackJsonp=window.webpackJsonp||[]).push([[374],{1027:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/1-c310aca41d9eb3e9cb8dbb9012a54819.png"},1028:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/2-3bdee50f16293a1e1a5d7394b78652db.png"},1029:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/3-ca85d2a9fbcf0829a20628d344bcd8d3.png"},430:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return o}));var r=n(2),a=n(6),l=(n(0),n(496)),c={id:"1.javaweb",title:"\u56de\u987eJavaWeb",hide_title:!0},p={unversionedId:"springmvc/1.javaweb",id:"springmvc/1.javaweb",isDocsHomePage:!1,title:"\u56de\u987eJavaWeb",description:"1. \u56de\u987eMVC",source:"@site/docs/springmvc/1.JavaWeb\u56de\u987e.md",slug:"/springmvc/1.javaweb",permalink:"/docs/springmvc/1.javaweb",version:"current",sidebar:"someSidebar",previous:{title:"Mybatis\u64cd\u4f5cOracle\u8e29\u5751",permalink:"/docs/mybatis/oracle"},next:{title:"Hello SpringMVC",permalink:"/docs/springmvc/2.helloSpringMVC"}},i=[{value:"1. \u56de\u987eMVC",id:"1-\u56de\u987emvc",children:[]},{value:"2. \u56de\u987eServlet",id:"2-\u56de\u987eservlet",children:[]},{value:"3. MVC\u6846\u67b6\u8981\u505a\u90a3\u4e9b\u4e8b\u60c5",id:"3-mvc\u6846\u67b6\u8981\u505a\u90a3\u4e9b\u4e8b\u60c5",children:[]},{value:"4. \u4e3a\u4ec0\u4e48\u5b66\u4e60SpringMVC",id:"4-\u4e3a\u4ec0\u4e48\u5b66\u4e60springmvc",children:[]}],b={rightToc:i};function o(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,c,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"1-\u56de\u987emvc"},"1. \u56de\u987eMVC"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"MVC\u662f(Model)\u3001\u89c6\u56fe(View)\u3001\u63a7\u5236\u5668(Controller)\u7684\u7b80\u5199\uff0c\u662f\u4e00\u79cd\u8f6f\u4ef6\u8bbe\u8ba1\u89c4\u8303"),Object(l.b)("li",{parentName:"ul"},"\u91c7\u7528\u5c06\u4e1a\u52a1\u903b\u8f91\u3001\u6570\u636e\u3001\u663e\u793a\u5206\u79bb\u7684\u65b9\u6cd5\u6765\u7ec4\u7ec7\u4ee3\u7801"),Object(l.b)("li",{parentName:"ul"},"MVC\u4e3b\u8981\u4f5c\u7528\u662f",Object(l.b)("strong",{parentName:"li"},"\u964d\u4f4e\u4e86\u89c6\u56fe\u4e0e\u4e1a\u52a1\u903b\u8f91\u95f4\u7684\u53cc\u5411\u8026\u5408")),Object(l.b)("li",{parentName:"ul"},"MVC\u4e0d\u662f\u4e00\u79cd\u8bbe\u8ba1\u6a21\u5f0f\uff0cMVC\u662f\u4e00\u79cd\u6846\u67b6\u6a21\u5f0f\uff0c\u4e0d\u540c\u7684MVC\u5b58\u5728\u5dee\u5f02")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Model(\u6a21\u578b)"),"\uff1a\u6570\u636e\u6a21\u578b\uff0c\u63d0\u4f9b\u8981\u5c55\u793a\u7684\u6570\u636e\uff0c\u56e0\u6b64\u5305\u542b\u6570\u636e\u548c\u884c\u4e3a\uff0c\u53ef\u4ee5\u8ba4\u4e3a\u662f\u9886\u57df\u6a21\u578b\u6216JavaBean\u7ec4\u4ef6\uff0c\u4e0d\u8fc7\u73b0\u5728\u4e00\u822c\u90fd\u5206\u79bb\u5f00\u6765:Value Object (\u6570\u636eDao)\u548c\u670d\u52a1\u5c42(\u884c\u4e3aService)\u3002\u4e5f\u5c31\u662f\u6a21\u578b\u63d0\u4f9b\u4e86\u6a21\u578b\u6570\u636e\u67e5\u8be2\u548c\u6a21\u578b\u6570\u636e\u7684\u72b6\u6001\u66f4\u65b0\u7b49\u529f\u80fd\uff0c\u5305\u62ec\u6570\u636e\u548c\u4e1a\u52a1"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"View(\u89c6\u56fe)"),"\uff1a\u8d1f\u8d23\u8fdb\u884c\u6a21\u578b\u7684\u5c55\u793a\uff0c\u4e00\u822c\u5c31\u662f\u6211\u4eec\u89c1\u5230\u7684\u7528\u6237\u754c\u9762\uff0c\u5ba2\u6237\u60f3\u770b\u5230\u7684\u4e1c\u897f"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Controller(\u63a7\u5236\u5668)"),"\u201c\uff1a\u63a5\u6536\u7528\u6237\u8bf7\u6c42\uff0c\u59d4\u6258\u7ed9\u6a21\u578b\u8fdb\u884c\u5904\u7406(\u72b6\u6001\u6539\u53d8)\uff0c\u5904\u7406\u5b8c\u6bd5\u540e\u628a\u8fd4\u56de\u7684\u6a21\u578b\u6570\u636e\u8fd4\u56de\u7ed9\u89c6\u56fe\uff0c\u7531\u89c6\u56fe\u8d1f\u8d23\u5c55\u793a\u3002\u4e5f\u5c31\u662f\u8bf4\u63a7\u5236\u5668\u505a\u4e86\u4e2a\u8c03\u5ea6\u5458\u7684\u5de5\u4f5c\u3002"),Object(l.b)("h1",{id:"2-\u56de\u987eservlet"},"2. \u56de\u987eServlet"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u65b0\u5efaMaven\u9879\u76ee\uff0c\u628asrc\u5220\u4e86"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"junit"),Object(l.b)("li",{parentName:"ul"},"Spring"),Object(l.b)("li",{parentName:"ul"},"Servlet"),Object(l.b)("li",{parentName:"ul"},"JSTL\u548cEL"),Object(l.b)("li",{parentName:"ul"},"JSP")),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<dependencies>\n    <dependency>\n        <groupId>junit</groupId>\n        <artifactId>junit</artifactId>\n        <version>4.12</version>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework</groupId>\n        <artifactId>spring-webmvc</artifactId>\n        <version>5.1.9.RELEASE</version>\n    </dependency>\n    <dependency>\n        <groupId>javax.servlet</groupId>\n        <artifactId>servlet-api</artifactId>\n        <version>2.5</version>\n    </dependency>\n    <dependency>\n        <groupId>javax.servlet.jsp</groupId>\n        <artifactId>jsp-api</artifactId>\n        <version>2.2</version>\n    </dependency>\n    <dependency>\n        <groupId>javax.servlet</groupId>\n        <artifactId>jstl</artifactId>\n        <version>1.2</version>\n    </dependency>\n</dependencies>\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u65b0\u5efa\u7a7amaven\u6a21\u5757\uff0cspringmvc-01-servlet"))),Object(l.b)("img",{src:n(1027).default,style:{zoom:"100%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(l.b)("br",null),Object(l.b)("img",{src:n(1028).default,style:{zoom:"100%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(l.b)("br",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u7f16\u5199Servlet\u7c7b"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class HelloServlet extends HttpServlet {\n    @Override\n    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {\n        //1.\u83b7\u53d6\u524d\u7aef\u53c2\u6570\n\n        String method = req.getParameter("method");\n        if ("add".equals(method)) {\n            req.getSession().setAttribute("msg", "\u6267\u884c\u4e86add\u65b9\u6cd5");\n        }\n        if ("delete".equals(method)) {\n            req.getSession().setAttribute("msg", "\u6267\u884c\u4e86delete\u65b9\u6cd5");\n        }\n        //2.\u8c03\u7528\u4e1a\u52a1\u5c42\n\n        //3.\u89c6\u56fe\u8f6c\u53d1\u6216\u8005\u91cd\u5b9a\u5411\n        req.getRequestDispatcher("/WEB-INF/jsp/test.jsp").forward(req, resp);\n    }\n\n    @Override\n    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {\n        doGet(req, resp);\n    }\n}\n'))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"web.xml\u6ce8\u518cservlet"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<servlet>\n    <servlet-name>hello</servlet-name>\n    <servlet-class>com.bsx.servlet.HelloServlet</servlet-class>\n</servlet>\n\n<servlet-mapping>\n    <servlet-name>hello</servlet-name>\n    <url-pattern>/hello</url-pattern>\n</servlet-mapping>\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"test.jsp\u548cform.jsp"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"form.jsp"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsp"}),'<%@ page contentType="text/html;charset=UTF-8" language="java" %>\n<html>\n<head>\n    <title>Title</title>\n</head>\n<body>\n\n<form action="/hello" method="post">\n    <input type="text" name="method"/>\n    <input type="submit"/>\n</form>\n\n</body>\n</html>\n'))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"test.jsp"))),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsp"}),'<%@ page contentType="text/html;charset=UTF-8" language="java" %>\n<html>\n  <head>\n      <title>Title</title>\n  </head>\n  <body>\n          ${msg}\n  </body>\n  </html>\n'))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u914d\u7f6eTomcat")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u8bbf\u95eehttp://localhost:8080/hello?method=add"))),Object(l.b)("h1",{id:"3-mvc\u6846\u67b6\u8981\u505a\u90a3\u4e9b\u4e8b\u60c5"},"3. MVC\u6846\u67b6\u8981\u505a\u90a3\u4e9b\u4e8b\u60c5"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"\u5c06url\u6620\u5c04\u5230java\u7c7b\u6216java\u7c7b\u7684\u65b9\u6cd5"),Object(l.b)("li",{parentName:"ol"},"\u5c01\u88c5\u7528\u6237\u63d0\u4ea4\u7684\u6570\u636e"),Object(l.b)("li",{parentName:"ol"},"\u5904\u7406\u5668\u8bf7\u6c42\uff0c\u8c03\u7528\u76f8\u5173\u7684\u4e1a\u52a1\u5904\u7406\uff0c\u5c01\u88c5\u54cd\u5e94\u6570\u636e"),Object(l.b)("li",{parentName:"ol"},"\u5c06\u54cd\u5e94\u7684\u6570\u636e\u8fdb\u884c\u6e32\u67d3\u3002 jsp/html\u7b49\u8868\u793a\u5c42\u6570\u636e")),Object(l.b)("p",null,"MVC -> MVVM ( Model View ViewMidel\u53cc\u5411\u7ed1\u5b9a)"),Object(l.b)("h1",{id:"4-\u4e3a\u4ec0\u4e48\u5b66\u4e60springmvc"},"4. \u4e3a\u4ec0\u4e48\u5b66\u4e60SpringMVC"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"\u8f7b\u91cf\u7ea7\uff0c\u7b80\u5355\u6613\u5b66"),Object(l.b)("li",{parentName:"ol"},"\u9ad8\u6548\uff0c\u57fa\u4e8e\u8bf7\u6c42\u54cd\u5e94\u7684MVC\u6846\u67b6"),Object(l.b)("li",{parentName:"ol"},"\u4e0eSpring\u517c\u5bb9\u6027\u597d\uff0c\u65e0\u7f1d\u7ed3\u5408"),Object(l.b)("li",{parentName:"ol"},"\u7ea6\u5b9a\u4f18\u4e8e\u914d\u7f6e"),Object(l.b)("li",{parentName:"ol"},"\u529f\u80fd\u5f3a\u5927\uff1aRESTful\u3001\u6570\u636e\u9a8c\u8bc1\u3001\u683c\u5f0f\u5316\u3001\u672c\u5730\u5316\u3001\u4e3b\u9898\u7b49"),Object(l.b)("li",{parentName:"ol"},"\u7b80\u6d01\u7075\u6d3b")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Spring\u7684Web\u6846\u67b6\u56f4\u7ed5",Object(l.b)("inlineCode",{parentName:"strong"},"DispatcherServlet"),"\uff08\u8c03\u5ea6Servlet\uff09\u8bbe\u8ba1"),"\uff0c\u5176\u4f5c\u7528\u662f\u5c06\u8bf7\u6c42\u5206\u53d1\u5230\u4e0d\u540c\u7684\u5904\u7406\u5668"),Object(l.b)("img",{src:n(1029).default,style:{zoom:"100%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(l.b)("br",null))}o.isMDXComponent=!0},496:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),o=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=o(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=o(n),m=r,u=s["".concat(c,".").concat(m)]||s[m]||d[m]||l;return n?a.a.createElement(u,p(p({ref:t},b),{},{components:n})):a.a.createElement(u,p({ref:t},b))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var b=2;b<l;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);