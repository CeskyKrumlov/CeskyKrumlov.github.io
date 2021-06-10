(window.webpackJsonp=window.webpackJsonp||[]).push([[394],{451:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return p})),r.d(n,"metadata",(function(){return c})),r.d(n,"rightToc",(function(){return i})),r.d(n,"default",(function(){return s}));var t=r(2),a=r(6),l=(r(0),r(554)),p={id:"2.helloSpringMVC",title:"Hello SpringMVC",hide_title:!0},c={unversionedId:"springmvc/2.helloSpringMVC",id:"springmvc/2.helloSpringMVC",isDocsHomePage:!1,title:"Hello SpringMVC",description:"Hello SpringMVC",source:"@site/docs/springmvc/2.\u7b2c\u4e00\u4e2aSpringMVC\u7a0b\u5e8f.md",slug:"/springmvc/2.helloSpringMVC",permalink:"/docs/springmvc/2.helloSpringMVC",version:"current",sidebar:"someSidebar",previous:{title:"\u56de\u987eJavaWeb",permalink:"/docs/springmvc/1.javaweb"},next:{title:"SpringMVC\u6267\u884c\u539f\u7406",permalink:"/docs/springmvc/3.process"}},i=[{value:"Hello SpringMVC",id:"hello-springmvc",children:[]},{value:"1. \u57fa\u4e8e\u914d\u7f6e",id:"1-\u57fa\u4e8e\u914d\u7f6e",children:[]}],o={rightToc:i};function s(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(t.a)({},o,r,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"hello-springmvc"},"Hello SpringMVC"),Object(l.b)("h1",{id:"1-\u57fa\u4e8e\u914d\u7f6e"},"1. \u57fa\u4e8e\u914d\u7f6e"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u65b0\u5efaMaven\u6a21\u5757\uff0cspringmvc-02-hello")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u914d\u7f6eweb.xml\uff0c\u6ce8\u518c",Object(l.b)("inlineCode",{parentName:"p"},"DispatcherServlet")),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml"}),"<servlet>\n    <servlet-name>springmvc</servlet-name>\n    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>\n    \x3c!--    \u5173\u8054\u4e00\u4e2aSprigMVC\u7684\u6cea\u75e3\u6587\u4ef6 [serlvet-name]-servlet.xml--\x3e\n    <init-param>\n        <param-name>contextConfigLocation</param-name>\n        <param-value>classpath:springmvc-servlet.xml</param-value>\n    </init-param>\n    \x3c!--        \u542f\u52a8\u7ea7\u522b1--\x3e\n    <load-on-startup>1</load-on-startup>\n</servlet>\n\n\x3c!--    / \u5339\u914d\u6240\u6709\u8bf7\u6c42(\u4e0d\u5305\u62ec.jsp)--\x3e\n\x3c!--    /* \u5339\u914d\u6240\u6709\u8bf7\u6c42(\u5305\u62ec.jsp)--\x3e\n<servlet-mapping>\n    <servlet-name>springmvc</servlet-name>\n    <url-pattern>/</url-pattern>\n</servlet-mapping>\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u5728resources\u76ee\u5f55\u4e0b\u7f16\u5199SpringMVC\u914d\u7f6e\u6587\u4ef6 ","[servletname]","-servlet.xml"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n   xsi:schemaLocation="http://www.springframework.org/schema/beans\n   http://www.springframework.org/schema/beans/spring-beans.xsd">\n\n</beans>\n'))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u6dfb\u52a0 \u5904\u7406\u6620\u5c04\u5668"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml"}),'<bean class="org.springframework.web.servlet.handler.BeanNameUrlHandlerMapping"/>\n'))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u6dfb\u52a0 \u5904\u7406\u5668\u9002\u914d\u5668"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml"}),'<bean class="org.springframework.web.servlet.mvc.SimpleControllerHandlerAdapter"/>\n'))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u6dfb\u52a0 \u89c6\u56fe\u89e3\u6790\u5668"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!--\u89c6\u56fe\u89e3\u6790\u5668:DispatcherServlet\u7ed9\u4ed6\u7684ModelAndView--\x3e\n<bean class="org.springframework.web.servlet.view.InternalResourceViewResolver" id="InternalResourceViewResolver">\n   \x3c!--\u524d\u7f00--\x3e\n   <property name="prefix" value="/WEB-INF/jsp/"/>\n   \x3c!--\u540e\u7f00--\x3e\n   <property name="suffix" value=".jsp"/>\n</bean>\n'))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u7f16\u5199\u4e1a\u52a1Controller"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u65b9\u5f0f\u4e00\uff1a\u5b9e\u73b0Controller\u63a5\u53e3"),Object(l.b)("li",{parentName:"ul"},"\u65b9\u5f0f\u4e8c\uff1a\u4f7f\u7528\u6ce8\u89e3"),Object(l.b)("li",{parentName:"ul"},"\u8fd4\u56de\u4e00\u4e2aModelAndView\uff0c\u88c5\u6570\u636e\u3001\u5c01\u89c6\u56fe")),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),'public class HelloController implements Controller {\n\n   public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {\n       //ModelAndView \u6a21\u578b\u548c\u89c6\u56fe\n       ModelAndView mv = new ModelAndView();\n\n       //\u5c01\u88c5\u5bf9\u8c61\uff0c\u653e\u5728ModelAndView\u4e2d\u3002Model\n       mv.addObject("msg","HelloSpringMVC!");\n       //\u5c01\u88c5\u8981\u8df3\u8f6c\u7684\u89c6\u56fe\uff0c\u653e\u5728ModelAndView\u4e2d\n       mv.setViewName("hello"); //: /WEB-INF/jsp/hello.jsp\n       return mv;\n  }\n}\n'))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u5c06\u7c7b\u6ce8\u518c\u5230SpringIOC\u5bb9\u5668"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml"}),'<bean id="/hello" class="com.bsx.controller.HelloController"/>\n'))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u8bbe\u7f6ehello.jsp"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsp"}),'<%@ page contentType="text/html;charset=UTF-8" language="java" %>\n<html>\n<head>\n    <title>Title</title>\n</head>\n<body>\n     ${msg}\n</body>\n</html>\n')))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u5982\u679c\u9047\u5230404:")," \uff08\u6240\u4ee5\u5efa\u6a21\u5757\u7684\u65f6\u5019\u8fd8\u662f\u9009maven\u7684web-app\u6a21\u677f\u5427 - .  -\uff09"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Project Structure -> Artifacts -> \u5728WEB-INF\u4e0b\u65b0\u5efalib\u76ee\u5f55"),Object(l.b)("li",{parentName:"ul"},'\u5355\u673a "+" \u6dfb\u52a0\u6240\u6709maven\u4f9d\u8d56\u5305')))}s.isMDXComponent=!0},554:function(e,n,r){"use strict";r.d(n,"a",(function(){return b})),r.d(n,"b",(function(){return g}));var t=r(0),a=r.n(t);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function p(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?p(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=a.a.createContext({}),s=function(e){var n=a.a.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},b=function(e){var n=s(e.components);return a.a.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,p=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),b=s(r),u=t,g=b["".concat(p,".").concat(u)]||b[u]||m[u]||l;return r?a.a.createElement(g,c(c({ref:n},o),{},{components:r})):a.a.createElement(g,c({ref:n},o))}));function g(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,p=new Array(l);p[0]=u;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:t,p[1]=c;for(var o=2;o<l;o++)p[o]=r[o];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);