(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{236:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return s})),r.d(n,"rightToc",(function(){return i})),r.d(n,"default",(function(){return l}));var t=r(2),a=r(6),o=(r(0),r(492)),c={id:"2.spring",title:"\u914d\u7f6espring",hide_title:!0},s={unversionedId:"ssm/2.spring",id:"ssm/2.spring",isDocsHomePage:!1,title:"\u914d\u7f6espring",description:"\u914d\u7f6eSpring",source:"@site/docs/ssm/2.\u914d\u7f6eSpring.md",slug:"/ssm/2.spring",permalink:"/docs/ssm/2.spring",version:"current",sidebar:"someSidebar",previous:{title:"\u6574\u5408mybatis",permalink:"/docs/ssm/1.mybatis"},next:{title:"\u6574\u5408SpringMVC",permalink:"/docs/ssm/3.springmvc"}},i=[{value:"\u914d\u7f6eSpring",id:"\u914d\u7f6espring",children:[{value:"spring-dao.xml",id:"spring-daoxml",children:[]},{value:"spring-service.xml",id:"spring-servicexml",children:[]}]}],p={rightToc:i};function l(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},p,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"\u914d\u7f6espring"},"\u914d\u7f6eSpring"),Object(o.b)("h2",{id:"spring-daoxml"},"spring-dao.xml"),Object(o.b)("p",null,"\u65b0\u5efa\u4e00\u4e2aSpring\u914d\u7f6e\u6587\u4ef6,",Object(o.b)("inlineCode",{parentName:"p"},"spring-dao.xml")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5173\u8054\u6570\u636e\u5e93\u914d\u7f6e\u6587\u4ef6"),Object(o.b)("li",{parentName:"ul"},"\u914d\u7f6e\u6570\u636e\u5e93\u8fde\u63a5\u6c60"),Object(o.b)("li",{parentName:"ul"},"\u914d\u7f6eMybatis\u7684",Object(o.b)("inlineCode",{parentName:"li"},"sqlSessionFactory"),"\u5bf9\u8c61",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u7ed1\u5b9a\u6570\u636e\u6e90"),Object(o.b)("li",{parentName:"ul"},"\u7ed1\u5b9aMybatis\u914d\u7f6e\u6587\u4ef6"))),Object(o.b)("li",{parentName:"ul"},"\u914d\u7f6e\u626b\u63cfDao\u63a5\u53e3\u5305\uff0c\u52a8\u6001\u5b9e\u73b0Dao\u63a5\u53e3\u6ce8\u5165\u5230Spring\u5bb9\u5668\u4e2d\nService\u5c42\u7684\u5b9e\u73b0\u5217\u91cc\u9762\u7ec4\u5408\u4e86\u4e00\u4e2aMapper\u63a5\u53e3\u6210\u5458\u53d8\u91cf\uff0c\u5b83\u9700\u8981\u7531Spring\u5bb9\u5668\u521b\u5efa\u5bf9\u8c61\u5e76\u5b9e\u73b0\u6ce8\u5165\uff0c\u6240\u4ee5\u8981\u914d\u7f6e\u8fd9\u4e2aBean\uff0c\u53ef\u4ee5\u7528\u626b\u63cfDao\u63a5\u53e3\u5305\u7684\u65b9\u5f0f")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xmlns:context="http://www.springframework.org/schema/context"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans\n       http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd">\n\n    \x3c!--    1. \u5173\u8054\u6570\u636e\u5e93\u914d\u7f6e\u6587\u4ef6--\x3e\n    <context:property-placeholder location="classpath:database.properties"/>\n    \x3c!--    2.\u8fde\u63a5\u6c60--\x3e\n    <bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">\n        <property name="driverClass" value="${jdbc.driver}"/>\n        <property name="jdbcUrl" value="${jdbc.url}"/>\n        <property name="user" value="${jdbc.username}"/>\n        <property name="password" value="${jdbc.password}"/>\n\n        \x3c!-- c3p0\u8fde\u63a5\u6c60\u7684\u79c1\u6709\u5c5e\u6027 --\x3e\n        <property name="maxPoolSize" value="30"/>\n        <property name="minPoolSize" value="10"/>\n        \x3c!-- \u5173\u95ed\u8fde\u63a5\u540e\u4e0d\u81ea\u52a8commit --\x3e\n        <property name="autoCommitOnClose" value="false"/>\n        \x3c!-- \u83b7\u53d6\u8fde\u63a5\u8d85\u65f6\u65f6\u95f4 --\x3e\n        <property name="checkoutTimeout" value="10000"/>\n        \x3c!-- \u5f53\u83b7\u53d6\u8fde\u63a5\u5931\u8d25\u91cd\u8bd5\u6b21\u6570 --\x3e\n        <property name="acquireRetryAttempts" value="2"/>\n    </bean>\n    \x3c!--    3.sqlSessionFactory--\x3e\n    <bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">\n        <property name="dataSource" ref="dataSource"/>\n        \x3c!--        3.1 \u7ed1\u5b9aMybatis\u914d\u7f6e\u6587\u4ef6--\x3e\n        <property name="configLocation" value="classpath:mybatis-config.xml"/>\n    </bean>\n    \x3c!--    4. \u914d\u7f6e\u626b\u63cfDao\u63a5\u53e3\u5305\uff0c\u52a8\u6001\u5b9e\u73b0Dao\u63a5\u53e3\u6ce8\u5165\u5230Spring\u5bb9\u5668\u4e2d--\x3e\n    <bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">\n        <property name="sqlSessionFactoryBeanName" value="sqlSessionFactory"/>\n        <property name="basePackage" value="com.bsx.dao"/>\n    </bean>\n</beans>\n')),Object(o.b)("h2",{id:"spring-servicexml"},"spring-service.xml"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5f00\u542fService\u5305\u626b\u63cf"),Object(o.b)("li",{parentName:"ul"},"\u5c06Service\u5b9e\u73b0\u7c7b\u6ce8\u518c\u5230Spring\u5bb9\u5668"),Object(o.b)("li",{parentName:"ul"},"\u914d\u7f6e\u4e8b\u52a1\u7ba1\u7406\u5668",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u6ce8\u5165\u6570\u636e\u5e93\u8fde\u63a5\u6c60")))),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xmlns:context="http://www.springframework.org/schema/context"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans\n                           http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd">\n\n    \x3c!--    1. \u626b\u63cfservice\u4e0b\u7684\u5305--\x3e\n    <context:component-scan base-package="com.bsx.service"/>\n    \x3c!--    2. \u5c06\u6240\u6709ServiceImpl\u6ce8\u5165\u5230Spring\u5bb9\u5668--\x3e\n    \x3c!--    \u53ef\u4ee5\u76f4\u63a5\u7528@Service--\x3e\n    <bean id="bookServiceImpl" class="com.bsx.service.BookServiceImpl">\n        <property name="bookMapper" ref="bookMapper"/>\n    </bean>\n    \x3c!--3. \u58f0\u660e\u5f0f\u4e8b\u52a1\u914d\u7f6e--\x3e\n    <bean class="org.springframework.jdbc.datasource.DataSourceTransactionManager">\n        \x3c!--        3.1 \u914d\u7f6e\u6570\u636e\u6e90--\x3e\n        <property name="dataSource" ref="dataSource"/>\n    </bean>\n</beans>\n')))}l.isMDXComponent=!0},492:function(e,n,r){"use strict";r.d(n,"a",(function(){return m})),r.d(n,"b",(function(){return g}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var n=a.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},m=function(e){var n=l(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(r),u=t,g=m["".concat(c,".").concat(u)]||m[u]||b[u]||o;return r?a.a.createElement(g,s(s({ref:n},p),{},{components:r})):a.a.createElement(g,s({ref:n},p))}));function g(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,c=new Array(o);c[0]=u;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:t,c[1]=s;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);