(window.webpackJsonp=window.webpackJsonp||[]).push([[492],{548:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(2),o=t(6),a=(t(0),t(564)),i={id:"20.log4j2",title:"\u65e5\u5fd7\u6846\u67b6",hide_title:!0},l={unversionedId:"springboot/20.log4j2",id:"springboot/20.log4j2",isDocsHomePage:!1,title:"\u65e5\u5fd7\u6846\u67b6",description:"\u65e5\u5fd7\u6846\u67b6\u2014\u2014Log4j2",source:"@site/docs/springboot/20.\u65e5\u5fd7.md",slug:"/springboot/20.log4j2",permalink:"/docs/springboot/20.log4j2",version:"current",sidebar:"someSidebar",previous:{title:"\u6574\u5408Mybatis",permalink:"/docs/springboot/10.mybatis"},next:{title:"SpringSecurity",permalink:"/docs/springboot/11.springsecurity"}},c=[{value:"\u65e5\u5fd7\u6846\u67b6\u2014\u2014Log4j2",id:"\u65e5\u5fd7\u6846\u67b6log4j2",children:[{value:"\u5bfc\u5165\u4f9d\u8d56",id:"\u5bfc\u5165\u4f9d\u8d56",children:[]},{value:"\u7f16\u5199Log4j\u914d\u7f6e\u6587\u4ef6",id:"\u7f16\u5199log4j\u914d\u7f6e\u6587\u4ef6",children:[]},{value:"\u5728SpringBoot\u914d\u7f6e\u4e2d\u5f00\u542f",id:"\u5728springboot\u914d\u7f6e\u4e2d\u5f00\u542f",children:[]}]}],p={rightToc:c};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"\u65e5\u5fd7\u6846\u67b6log4j2"},"\u65e5\u5fd7\u6846\u67b6\u2014\u2014Log4j2"),Object(a.b)("h2",{id:"\u5bfc\u5165\u4f9d\u8d56"},"\u5bfc\u5165\u4f9d\u8d56"),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"\u8981\u4f7f\u7528Log4j2\uff0c\u9700\u8981\u5c06SpringBoot\u7684\u9ed8\u8ba4\u65e5\u5fd7\u67d0\u5757\u79fb\u9664\uff0c\u540c\u65f6\u5bfc\u5165Log4j2\u7684\u4f9d\u8d56"))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'}),"<dependency>\n  <groupId>org.springframework.boot</groupId>\n  <artifactId>spring-boot-starter-web</artifactId>\n  <exclusions>\n    <exclusion>\n      <groupId>org.springframework.boot</groupId>\n      <artifactId>spring-boot-starter-logging</artifactId>\n    </exclusion>\n  </exclusions>\n</dependency>\n\n<dependency>\n  <groupId>org.springframework.boot</groupId>\n  <artifactId>spring-boot-starter-log4j2</artifactId>\n</dependency>\n")),Object(a.b)("h2",{id:"\u7f16\u5199log4j\u914d\u7f6e\u6587\u4ef6"},"\u7f16\u5199Log4j\u914d\u7f6e\u6587\u4ef6"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml",metastring:'title="log4j2.xml"',title:'"log4j2.xml"'}),'<?xml version="1.0" encoding="UTF-8"?>\n<configuration>\n    <Appenders>\n        <Console name="CONSOLE" target="SYSTEM_OUT">\n            <PatternLayout charset="UTF-8" pattern="[%-5p] %d %c - %m%n" />\n        </Console>\n\n        <RollingFile name="runtimeFile" fileName="./logs/boot-launch.log" filePattern="./logs/boot-launch-%d{yyyy-MM-dd}.log"\n                     append="true">\n            <PatternLayout pattern="%d{yyyy-MM-dd HH:mm:ss.SSS Z}\\t%level\\t%class\\t%line\\t%thread\\t%msg%n"/>\n            <Policies>\n                <TimeBasedTriggeringPolicy/>\n            </Policies>\n            \x3c!-- \u6b64\u884c\u4ee5\u4e0b\u4e3a\u81ea\u52a8\u6e05\u7406\u65e5\u5fd7\u7684\u914d\u7f6e --\x3e\n            <DefaultRolloverStrategy>\n                <Delete basePath="./logs">\n                    \x3c!-- glob \u9879\u4e3a\u9700\u8981\u81ea\u52a8\u6e05\u7406\u65e5\u5fd7\u7684pattern --\x3e\n                    <IfFileName glob="*.log"/>\n                    \x3c!-- 30d \u8868\u793a\u81ea\u52a8\u6e05\u7406\u638930\u5929\u4ee5\u524d\u7684\u65e5\u5fd7\u6587\u4ef6 --\x3e\n                    <IfLastModified age="30d"/>\n                </Delete>\n            </DefaultRolloverStrategy>\n            \x3c!-- \u6b64\u884c\u4ee5\u4e0a\u4e3a\u81ea\u52a8\u6e05\u7406\u65e5\u5fd7\u7684\u914d\u7f6e --\x3e\n        </RollingFile>\n\n    </Appenders>\n\n    <Loggers>\n        <root level="info">\n            <AppenderRef ref="CONSOLE" />\n            <AppenderRef ref="runtimeFile" />\n        </root>\n    </Loggers>\n</configuration>\n')),Object(a.b)("h2",{id:"\u5728springboot\u914d\u7f6e\u4e2d\u5f00\u542f"},"\u5728SpringBoot\u914d\u7f6e\u4e2d\u5f00\u542f"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="application.xml"',title:'"application.xml"'}),"mybatis:\n  mapper-locations: classpath:mapper/*.xml\n  configuration:\n    map-underscore-to-camel-case: true       #\u9a7c\u5cf0\u6620\u5c04\n    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl   #\u8c03\u8bd5\u6253\u5370SQL\n    \nlogging:\n  config: classpath:log4j2.xml    \n")))}s.isMDXComponent=!0},564:function(e,n,t){"use strict";t.d(n,"a",(function(){return g})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},g=function(e){var n=s(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),g=s(t),u=r,b=g["".concat(i,".").concat(u)]||g[u]||d[u]||a;return t?o.a.createElement(b,l(l({ref:n},p),{},{components:t})):o.a.createElement(b,l({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);