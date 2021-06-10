(window.webpackJsonp=window.webpackJsonp||[]).push([[413],{469:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return m}));var r=t(2),a=t(6),o=(t(0),t(492)),i={id:"21.commonYaml",title:"\u5178\u578b\u914d\u7f6e\u6587\u4ef6",hide_title:!0},l={unversionedId:"springboot/21.commonYaml",id:"springboot/21.commonYaml",isDocsHomePage:!1,title:"\u5178\u578b\u914d\u7f6e\u6587\u4ef6",description:"\u5178\u578b\u914d\u7f6e\u6587\u4ef6",source:"@site/docs/springboot/21.\u5178\u578b\u914d\u7f6e.md",slug:"/springboot/21.commonYaml",permalink:"/docs/springboot/21.commonYaml",version:"current",sidebar:"someSidebar",previous:{title:"yaml\u914d\u7f6e",permalink:"/docs/springboot/3.yaml"},next:{title:"\u591a\u73af\u5883\u5207\u6362",permalink:"/docs/springboot/5.multiEnv"}},c=[{value:"\u5178\u578b\u914d\u7f6e\u6587\u4ef6",id:"\u5178\u578b\u914d\u7f6e\u6587\u4ef6",children:[]}],s={rightToc:c};function m(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"\u5178\u578b\u914d\u7f6e\u6587\u4ef6"},"\u5178\u578b\u914d\u7f6e\u6587\u4ef6"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u5305\u542b\u4e86\u5e38\u7528\u914d\u7f6e\u9879\u76ee\u7684\u5178\u578b\u914d\u7f6e\u6587\u4ef6"),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"Datasource\uff1a\u6570\u636e\u5e93"),Object(o.b)("li",{parentName:"ul"},"jackson\uff1aSpringBoot\u81ea\u5e26Json\u5de5\u5177"),Object(o.b)("li",{parentName:"ul"},"mybatis\uff1a\u914d\u7f6emapper.xml\u626b\u63cf\u8def\u5f84\uff0c\u5f00\u542f\u9a7c\u5cf0\u6620\u5c04\uff0c\u5f00\u542f\u65e5\u5fd7\u6253\u5370"),Object(o.b)("li",{parentName:"ul"},"server.port\uff1a\u8bbf\u95ee\u7aef\u53e3"),Object(o.b)("li",{parentName:"ul"},"logging\uff1a\u914d\u7f6e\u65e5\u5fd7\u6846\u67b6"),Object(o.b)("li",{parentName:"ul"},"JWT\uff1a",Object(o.b)("strong",{parentName:"li"},"\u8fd9\u90e8\u5206\u4e0d\u7528\u5199"),"\uff0c\u53ea\u6709\u7528\u5230JWT\u7684\u9879\u76ee\u624d\u5199")))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="application.yaml"',title:'"application.yaml"'}),"spring:\n  datasource:\n    username: root\n    password: root\n    url: jdbc:mysql://localhost:3306/oauth?serverTimezone=UTC&useUnicode=true&characterEncoding=utf-8\n    driver-class-name: com.mysql.jdbc.Driver\n    type: com.alibaba.druid.pool.DruidDataSource\n\n    initialSize: 5\n    minIdle: 5\n    maxActive: 20\n    maxWait: 60000\n    timeBetweenEvictionRunsMillis: 60000\n    minEvictableIdleTimeMillis: 300000\n    validationQuery: SELECT 1 FROM DUAL\n    testWhileIdle: true\n    testOnBorrow: false\n    testOnReturn: false\n    poolPreparedStatements: true\n\n    filters: stat,wall,log4j\n    maxPoolPreparedStatementPerConnectionSize: 20\n    useGlobalDataSourceStat: true\n    connectionProperties: druid.stat.mergeSql=true;druid.stat.slowSqlMillis=500\n\n  jackson: # SpringBoot\u5185\u90e8\u9ed8\u8ba4\u4f7f\u7528\u7684JSON\u5de5\u5177\u662fjackson\uff0c\u5b83\u9ed8\u8ba4\u7684\u65e5\u671f\u683c\u5f0f\u4e0d\u662f\u4e2d\u56fd\u4eba\u719f\u6089\u7684\u6a21\u5f0f\n    date-format: yyyy-MM-dd HH:mm:ss\n    time-zone: GMT+8\n\nmybatis:\n  mapper-locations: classpath:mapper/*.xml\n  configuration:\n    map-underscore-to-camel-case: true       #\u9a7c\u5cf0\u6620\u5c04\n    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl   #\u8c03\u8bd5\u6253\u5370SQL\n\nserver:\n  port: 8081\n\nlogging: # \u914d\u7f6eLog4j2\u914d\u7f6e\u6587\u4ef6\n  config: classpath:log4j2.xml\n  \njwt:\n  enabled: true # \u5f00\u542f\n  secret: fjkfaf;afa # Jwt\u5bc6\u6587\n  expiration: 3600000\n  header: JWTHeaderName # \u5934\u540d\u79f0\n  userParamName: username # \u524d\u7aef\u7ec4\u4ef6\u540d\u79f0\n  pwdParamName: password  # \u524d\u7aef\u7ec4\u4ef6\u540d\u79f0\n  useDefaultController: true # \u4f7f\u7528\u9ed8\u8ba4Controller\n  corsAllowedOrigins:  # \u8bbe\u7f6e\u5141\u8bb8\u8de8\u57df\u7684\u5730\u5740\n    - http://localhost:8888\n    - http://localhost:8080\n  corsAllowedMethods:  # \u5141\u8bb8\u7684\u8bf7\u6c42\u65b9\u5f0f\n    - GET\n    - POST\n  csrfDisabled: true # \u662f\u5426\u5f00\u542fCSRF\u9632\u5fa1\n  permitAllURI:  # \u603b\u662f\u5141\u8bb8\u8bbf\u95ee\u7684\u8def\u5f84\uff0c\u65e0\u5e8fJWT\n    - /authentication\n    - /refreshtoken\n  #    - /roles\n  devOpeningURI:  # \u5f00\u53d1\u65f6\u4e34\u65f6\u5141\u8bb8\u8bbf\u95ee\u7684url\u5730\u5740\n    - /sysuser/info\n    - /sysorg/tree\n#    - /authentication\n#    - /refreshtoken\n#    - /roles\n")))}m.isMDXComponent=!0},492:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),m=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=m(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=m(t),d=r,b=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return t?a.a.createElement(b,l(l({ref:n},s),{},{components:t})):a.a.createElement(b,l({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);