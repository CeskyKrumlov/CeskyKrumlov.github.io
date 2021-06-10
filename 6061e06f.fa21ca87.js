(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{162:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return l})),r.d(n,"metadata",(function(){return c})),r.d(n,"rightToc",(function(){return o})),r.d(n,"default",(function(){return s}));var t=r(2),a=r(6),i=(r(0),r(336)),l={id:"3.springmvc",title:"\u6574\u5408SpringMVC",hide_title:!0},c={unversionedId:"ssm/3.springmvc",id:"ssm/3.springmvc",isDocsHomePage:!1,title:"\u6574\u5408SpringMVC",description:"\u6574\u5408SpringMVC",source:"@site/docs/ssm/3.\u6574\u5408SpringMVC.md",permalink:"/docs/ssm/3.springmvc",sidebar:"someSidebar",previous:{title:"\u914d\u7f6espring",permalink:"/docs/ssm/2.spring"},next:{title:"\u6574\u5408\u5c0f\u9879\u76ee",permalink:"/docs/ssm/4.littleProject"}},o=[{value:"\u6574\u5408SpringMVC",id:"\u6574\u5408springmvc",children:[{value:"web.xml",id:"webxml",children:[]},{value:"spring-mvc.xml",id:"spring-mvcxml",children:[]}]},{value:"\u5c06\u914d\u7f6e\u6587\u4ef6\u6574\u5408",id:"\u5c06\u914d\u7f6e\u6587\u4ef6\u6574\u5408",children:[{value:"applicationContext.xml",id:"applicationcontextxml",children:[]}]}],p={rightToc:o};function s(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},p,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u6574\u5408springmvc"},"\u6574\u5408SpringMVC"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u914d\u7f6e\u9879\u76eeWEB\u652f\u6301",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Project Structure -> Artifact -> lib"),Object(i.b)("li",{parentName:"ul"},"Tomcat\u90e8\u7f72")))),Object(i.b)("h2",{id:"webxml"},"web.xml"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dispatcherServlet"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"load-on-startup"),Object(i.b)("li",{parentName:"ul"},"init-param\u914d\u7f6espringMVC\u914d\u7f6e\u6587\u4ef6"))),Object(i.b)("li",{parentName:"ul"},"\u4e71\u7801\u8fc7\u6ee4\u2014\u2014",Object(i.b)("inlineCode",{parentName:"li"},"CharacterEncodingFilter"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u914d\u7f6e",Object(i.b)("inlineCode",{parentName:"li"},"encoding"),"\u4e3a",Object(i.b)("inlineCode",{parentName:"li"},"utf-8"))))),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml"}),"\x3c!--    \u4e71\u7801\u8fc7\u6ee4--\x3e\n<filter>\n    <filter-name>characterEncoding</filter-name>\n    <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>\n    <init-param>\n        <param-name>encoding</param-name>\n        <param-value>utf-8</param-value>\n    </init-param>\n</filter>\n<filter-mapping>\n    <filter-name>characterEncoding</filter-name>\n    <url-pattern>/*</url-pattern>\n</filter-mapping>\n\x3c!--    dispatcherServlet--\x3e\n<servlet>\n    <servlet-name>dispatcherServlet</servlet-name>\n    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>\n    <init-param>\n        <param-name>contextConfigLocation</param-name>\n        <param-value>classpath:applicationContext.xml</param-value>\n    </init-param>\n    <load-on-startup>1</load-on-startup>\n</servlet>\n<servlet-mapping>\n    <servlet-name>dispatcherServlet</servlet-name>\n    <url-pattern>/</url-pattern>\n</servlet-mapping>\n")),Object(i.b)("h2",{id:"spring-mvcxml"},"spring-mvc.xml"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u6ce8\u89e3\u9a71\u52a8"),Object(i.b)("li",{parentName:"ul"},"\u9ed8\u8ba4Handler\u9759\u6001\u8d44\u6e90\u8fc7\u6ee4"),Object(i.b)("li",{parentName:"ul"},"\u5f00\u542fController\u5c42\u5305\u626b\u63cf"),Object(i.b)("li",{parentName:"ul"},"\u89c6\u56fe\u89e3\u6790\u5668",Object(i.b)("inlineCode",{parentName:"li"},"InternalResourceViewResolver"))),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!--    \u6ce8\u89e3\u9a71\u52a8--\x3e\n<mvc:annotation-driven/>\n\x3c!--    handler--\x3e\n<mvc:default-servlet-handler/>\n\x3c!--Controller\u5c42\u5305\u626b\u63cf--\x3e\n<context:component-scan base-package="com.bsx.controller"/>\n\x3c!--    \u89c6\u56fe\u89e3\u6790\u5668--\x3e\n<bean class="org.springframework.web.servlet.view.InternalResourceViewResolver"\n      id="viewResolver">\n    <property name="prefix" value="/WEB-INF/jsp/"/>\n    <property name="suffix" value=".jsp"/>\n</bean>\n')),Object(i.b)("h1",{id:"\u5c06\u914d\u7f6e\u6587\u4ef6\u6574\u5408"},"\u5c06\u914d\u7f6e\u6587\u4ef6\u6574\u5408"),Object(i.b)("h2",{id:"applicationcontextxml"},"applicationContext.xml"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans\n       http://www.springframework.org/schema/beans/spring-beans.xsd">\n\n    <import resource="spring-mvc.xml"/>\n    <import resource="spring-dao.xml"/>\n    <import resource="spring-service.xml"/>\n\n</beans>\n')))}s.isMDXComponent=!0},336:function(e,n,r){"use strict";r.d(n,"a",(function(){return m})),r.d(n,"b",(function(){return d}));var t=r(0),a=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var n=a.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},m=function(e){var n=s(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(r),u=t,d=m["".concat(l,".").concat(u)]||m[u]||b[u]||i;return r?a.a.createElement(d,c(c({ref:n},p),{},{components:r})):a.a.createElement(d,c({ref:n},p))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,l=new Array(i);l[0]=u;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:t,l[1]=c;for(var p=2;p<i;p++)l[p]=r[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);