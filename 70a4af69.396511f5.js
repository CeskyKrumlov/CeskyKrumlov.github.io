(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{204:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return s}));var r=t(2),a=t(6),l=(t(0),t(386)),o={id:"1.basicEnv",title:"\u73af\u5883\u642d\u5efa\u4e0e\u9700\u6c42",hide_title:!0},c={unversionedId:"security_Oauth2_JWT/1.basicEnv",id:"security_Oauth2_JWT/1.basicEnv",isDocsHomePage:!1,title:"\u73af\u5883\u642d\u5efa\u4e0e\u9700\u6c42",description:"\u9700\u6c42",source:"@site/docs/security_Oauth2_JWT/1.\u73af\u5883.md",slug:"/security_Oauth2_JWT/1.basicEnv",permalink:"/docs/security_Oauth2_JWT/1.basicEnv",version:"current",sidebar:"someSidebar",previous:{title:"MockJs\u6a21\u62df\u540e\u7aef\u6570\u636e",permalink:"/docs/front/vuecli/8.mockjs"},next:{title:"HttpBasic\u4e0eFormLogin\u767b\u5f55\u8ba4\u8bc1\u65b9\u5f0f",permalink:"/docs/security_Oauth2_JWT/2.springsecurityLogin"}},i=[{value:"\u9700\u6c42",id:"\u9700\u6c42",children:[]},{value:"\u73af\u5883",id:"\u73af\u5883",children:[]}],p={rightToc:i};function s(e){var n=e.components,o=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,o,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"\u9700\u6c42"},"\u9700\u6c42"),Object(l.b)("p",null,Object(l.b)("img",{alt:"image-20200722104326355",src:t(591).default})),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u65e5\u5fd7\u7ba1\u7406\u548c\u7528\u6237\u7ba1\u7406\u53ea\u6709\u7ba1\u7406\u5458\u624d\u6709\u6743\u9650\u67e5\u770b"),Object(l.b)("li",{parentName:"ul"},"\u666e\u901a\u7528\u6237\u53ea\u80fd\u8bbf\u95ee\u4e1a\u52a11\u548c\u4e1a\u52a12")),Object(l.b)("hr",null),Object(l.b)("h1",{id:"\u73af\u5883"},"\u73af\u5883"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"SpringBoot 2.0"),Object(l.b)("li",{parentName:"ul"},"\u96c6\u6210Mybatis\u3001lombok")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Controller")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Controller\npublic class BizpageController {\n\n    @PostMapping("/login")\n    public String login(String username, String password) {\n        return "index";\n    }\n\n    @GetMapping("/index")\n    public String index() {\n        return "index";\n    }\n\n    @GetMapping("/syslog")\n    public String syslog() {\n        return "syslog";\n    }\n\n    @GetMapping("/sysuser")\n    public String sysuser() {\n        return "sysuser";\n    }\n\n    @GetMapping("/biz1")\n    public String biz1() {\n        return "biz1";\n    }\n\n    @GetMapping("/biz2")\n    public String biz2() {\n        return "biz2";\n    }\n}\n')),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u9875\u9762")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"/public/login.html")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>\u767b\u5f55</title>\n</head>\n<body>\n<form action="/index">\n    <span>\u7528\u6237\u540d\uff1a<input type="text" name="username"/></span>\n   <span>\u5bc6\u7801\uff1a<input type="password" name="password"/></span>\n    <input type="submit" value="\u767b\u5f55">\n</form>\n</body>\n</html>\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"/template/syslog.html")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>\u7cfb\u7edf\u65e5\u5fd7</title>\n</head>\n<body>\n<h1>\u7cfb\u7edf\u65e5\u5fd7</h1>\n</body>\n</html>\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"/template/sysuser.html")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>\u7528\u6237\u7ba1\u7406</title>\n</head>\n<body>\n<h1>\u7528\u6237\u7ba1\u7406</h1>\n</body>\n</html>\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"/template/index.html")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>\u9996\u9875</title>\n</head>\n<body>\n<h1>\u9996\u9875</h1>\n    <a href="/syslog">\u7cfb\u7edf\u65e5\u5fd7</a>\n    <a href="/sysuser">\u7528\u6237\u7ba1\u7406</a>\n    <a href="/biz1">\u4e1a\u52a11</a>\n    <a href="/biz2">\u4e1a\u52a12</a>\n</body>\n</html>\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"/template/biz1.html")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>\u4e1a\u52a11</title>\n</head>\n<body>\n<h1>\u4e1a\u52a11</h1>\n</body>\n</html>\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"/template/biz2.html")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>\u4e1a\u52a12</title>\n</head>\n<body>\n<h1>\u4e1a\u52a12</h1>\n</body>\n</html>\n')),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"pom.xml")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<dependencies>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-web</artifactId>\n    </dependency>\n\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-freemarker</artifactId>\n    </dependency>\n\n    <dependency>\n        <groupId>com.alibaba</groupId>\n        <artifactId>druid</artifactId>\n        <version>1.1.21</version>\n    </dependency>\n\n    <dependency>\n        <groupId>mysql</groupId>\n        <artifactId>mysql-connector-java</artifactId>\n        <version>5.1.47</version>\n        <scope>runtime</scope>\n    </dependency>\n\n    <dependency>\n        <groupId>org.mybatis.spring.boot</groupId>\n        <artifactId>mybatis-spring-boot-starter</artifactId>\n        <version>2.1.1</version>\n    </dependency>\n\n    <dependency>\n        <groupId>org.projectlombok</groupId>\n        <artifactId>lombok</artifactId>\n        <version>1.18.8</version>\n        <scope>provided</scope>\n    </dependency>\n    \n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-security</artifactId>\n    </dependency>\n\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-test</artifactId>\n        <scope>test</scope>\n        <exclusions>\n            <exclusion>\n                <groupId>org.junit.vintage</groupId>\n                <artifactId>junit-vintage-engine</artifactId>\n            </exclusion>\n        </exclusions>\n    </dependency>\n</dependencies>\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"application.yaml")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"spring:\n  freemarker:\n    cache: false # \u7f13\u5b58\u914d\u7f6e \u5f00\u53d1\u9636\u6bb5\u5e94\u8be5\u914d\u7f6e\u4e3afalse \u56e0\u4e3a\u7ecf\u5e38\u4f1a\u6539\n    suffix: .html # \u6a21\u7248\u540e\u7f00\u540d \u9ed8\u8ba4\u4e3aftl  / \u8fd8\u662f\u7528ftl\u5427\uff0chtml\u6ca1freemarker\u8bed\u6cd5\u63d0\u793a\n    charset: UTF-8 # \u6587\u4ef6\u7f16\u7801\n    template-loader-path: classpath:/templates/\n\n  datasource:\n    username: root\n    password: root\n    #?serverTimezone=UTC\u89e3\u51b3\u65f6\u533a\u7684\u62a5\u9519\n    url: jdbc:mysql://localhost:3306/oauth?serverTimezone=UTC&useUnicode=true&characterEncoding=utf-8\n    driver-class-name: com.mysql.jdbc.Driver\n    type: com.alibaba.druid.pool.DruidDataSource # \u914d\u7f6e\u4f7f\u7528Druid\u6570\u636e\u6e90\n\n    #Spring Boot \u9ed8\u8ba4\u662f\u4e0d\u6ce8\u5165\u8fd9\u4e9b\u5c5e\u6027\u503c\u7684\uff0c\u9700\u8981\u81ea\u5df1\u7ed1\u5b9a\n    #druid \u6570\u636e\u6e90\u4e13\u6709\u914d\u7f6e\n    initialSize: 5\n    minIdle: 5\n    maxActive: 20\n    maxWait: 60000\n    timeBetweenEvictionRunsMillis: 60000\n    minEvictableIdleTimeMillis: 300000\n    validationQuery: SELECT 1 FROM DUAL\n    testWhileIdle: true\n    testOnBorrow: false\n    testOnReturn: false\n    poolPreparedStatements: true\n\n    #\u914d\u7f6e\u76d1\u63a7\u7edf\u8ba1\u62e6\u622a\u7684filters\uff0cstat:\u76d1\u63a7\u7edf\u8ba1\u3001log4j\uff1a\u65e5\u5fd7\u8bb0\u5f55\u3001wall\uff1a\u9632\u5fa1sql\u6ce8\u5165\n    #\u5982\u679c\u5141\u8bb8\u65f6\u62a5\u9519  java.lang.ClassNotFoundException: org.apache.log4j.Priority\n    #\u5219\u5bfc\u5165 log4j \u4f9d\u8d56\u5373\u53ef\uff0cMaven \u5730\u5740\uff1attps://mvnrepository.com/artifact/log4j/log4j\n    filters: stat,wall,log4j\n    maxPoolPreparedStatementPerConnectionSize: 20\n    useGlobalDataSourceStat: true\n    connectionProperties: druid.stat.mergeSql=true;druid.stat.slowSqlMillis=500\n\n# \u914d\u7f6eMybatis\n# \u4e5f\u53ef\u4ee5\u4e0d\u914d\u7f6e\uff0c\u4f7f\u7528\u5168\u9650\u5b9a\u7c7b\u540d\uff0c\u7136\u540e\u5728resources\u8def\u5f84\u4e0b\u5efa\u7acb\u548cmapper\u63a5\u53e3\u4e00\u6837\u7684\u5305\u8def\u5f84\nmybatis:\n#  type-aliases-package: com.bsx.shiro.pojo # \u522b\u540d\n  mapper-locations: classpath:mapper/*.xml # \u626b\u63cfmapper.xml\u6587\u4ef6\u8def\u5f84\n")))}s.isMDXComponent=!0},386:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||l;return t?a.a.createElement(m,c(c({ref:n},p),{},{components:t})):a.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<l;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},591:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/1-3396ca87702fe7e8b714a695bcede53d.png"}}]);