(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{141:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return b}));var r=t(2),a=t(6),i=(t(0),t(567)),l={id:"12.springbootShiro",title:"SpirngBoot\u6574\u5408Shiro",hide_title:!0},o={unversionedId:"springboot/12.springbootShiro",id:"springboot/12.springbootShiro",isDocsHomePage:!1,title:"SpirngBoot\u6574\u5408Shiro",description:"SpirngBoot\u6574\u5408Shiro",source:"@site/docs/springboot/12.SpringBoot\u6574\u5408Shiro.md",slug:"/springboot/12.springbootShiro",permalink:"/docs/springboot/12.springbootShiro",version:"current",sidebar:"someSidebar",previous:{title:"Shrio",permalink:"/docs/springboot/12.shiro"},next:{title:"Shiro\u5b9e\u73b0\u767b\u5f55\u62e6\u622a",permalink:"/docs/springboot/12.shiroLogin"}},c=[{value:"SpirngBoot\u6574\u5408Shiro",id:"spirngboot\u6574\u5408shiro",children:[{value:"\u57fa\u672c\u73af\u5883\u642d\u5efa",id:"\u57fa\u672c\u73af\u5883\u642d\u5efa",children:[]},{value:"\u6574\u5408Shiro",id:"\u6574\u5408shiro",children:[{value:"\u7f16\u5199\u914d\u7f6e\u7c7b",id:"\u7f16\u5199\u914d\u7f6e\u7c7b",children:[]}]}]}],u={rightToc:c};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"spirngboot\u6574\u5408shiro"},"SpirngBoot\u6574\u5408Shiro"),Object(i.b)("h2",{id:"\u57fa\u672c\u73af\u5883\u642d\u5efa"},"\u57fa\u672c\u73af\u5883\u642d\u5efa"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>org.apache.shiro</groupId>\n    <artifactId>shiro-spring</artifactId>\n    <version>1.4.0</version>\n</dependency>\n")),Object(i.b)("p",null,"\u5bfc\u5165\u6a21\u677f\u5f15\u64ce\u2014\u2014freemarker"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n   <groupId>org.springframework.boot</groupId>\n   <artifactId>spring-boot-starter-freemarker</artifactId>\n</dependency>\n")),Object(i.b)("p",null,"\u5bfc\u5165Druid\u4f9d\u8d56"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>com.alibaba</groupId>\n    <artifactId>druid</artifactId>\n    <version>1.1.21</version>\n</dependency>\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"application.yaml"),"\u6dfb\u52a0freemarker\u57fa\u672c\u8bbe\u7f6e\u3001\u8bbe\u7f6e\u6570\u636e\u6e90\u8bbe\u7f6e")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"spring:\n    freemarker:\n      cache: false # \u7f13\u5b58\u914d\u7f6e \u5f00\u53d1\u9636\u6bb5\u5e94\u8be5\u914d\u7f6e\u4e3afalse \u56e0\u4e3a\u7ecf\u5e38\u4f1a\u6539\n      suffix: .ftl # \u6a21\u7248\u540e\u7f00\u540d \u9ed8\u8ba4\u4e3aftl  / \u8fd8\u662f\u7528ftl\u5427\uff0chtml\u6ca1freemarker\u8bed\u6cd5\u63d0\u793a\n      charset: UTF-8 # \u6587\u4ef6\u7f16\u7801\n      template-loader-path: classpath:/templates/\n\n    datasource:\n      username: root\n      password: root\n      #?serverTimezone=UTC\u89e3\u51b3\u65f6\u533a\u7684\u62a5\u9519\n      url: jdbc:mysql://localhost:3306/test?serverTimezone=UTC&useUnicode=true&characterEncoding=utf-8\n      driver-class-name: com.mysql.jdbc.Driver\n      type: com.alibaba.druid.pool.DruidDataSource # \u914d\u7f6e\u4f7f\u7528Druid\u6570\u636e\u6e90\n\n      #Spring Boot \u9ed8\u8ba4\u662f\u4e0d\u6ce8\u5165\u8fd9\u4e9b\u5c5e\u6027\u503c\u7684\uff0c\u9700\u8981\u81ea\u5df1\u7ed1\u5b9a\n      #druid \u6570\u636e\u6e90\u4e13\u6709\u914d\u7f6e\n      initialSize: 5\n      minIdle: 5\n      maxActive: 20\n      maxWait: 60000\n      timeBetweenEvictionRunsMillis: 60000\n      minEvictableIdleTimeMillis: 300000\n      validationQuery: SELECT 1 FROM DUAL\n      testWhileIdle: true\n      testOnBorrow: false\n      testOnReturn: false\n      poolPreparedStatements: true\n\n      #\u914d\u7f6e\u76d1\u63a7\u7edf\u8ba1\u62e6\u622a\u7684filters\uff0cstat:\u76d1\u63a7\u7edf\u8ba1\u3001log4j\uff1a\u65e5\u5fd7\u8bb0\u5f55\u3001wall\uff1a\u9632\u5fa1sql\u6ce8\u5165\n      #\u5982\u679c\u5141\u8bb8\u65f6\u62a5\u9519  java.lang.ClassNotFoundException: org.apache.log4j.Priority\n      #\u5219\u5bfc\u5165 log4j \u4f9d\u8d56\u5373\u53ef\uff0cMaven \u5730\u5740\uff1attps://mvnrepository.com/artifact/log4j/log4j\n      filters: stat,wall,log4j\n      maxPoolPreparedStatementPerConnectionSize: 20\n      useGlobalDataSourceStat: true\n      connectionProperties: druid.stat.mergeSql=true;druid.stat.slowSqlMillis=500\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Controller")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Controller\npublic class HelloController {\n\n    @RequestMapping({"/index", "/"})\n    public String toIndex(Model model) {\n        model.addAttribute("msg", "Hello shiro _ freemarker");\n        return "index";\n    }\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"index.ftl"))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Title</title>\n</head>\n<body>\n    \u9996\u9875<br>\n    ${msg}\n</body>\n</html>\n')),Object(i.b)("h2",{id:"\u6574\u5408shiro"},"\u6574\u5408Shiro"),Object(i.b)("h3",{id:"\u7f16\u5199\u914d\u7f6e\u7c7b"},"\u7f16\u5199\u914d\u7f6e\u7c7b"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u4e09\u5927\u8981\u7d20\uff1a")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"ShiroFilterFactoryBean")," (Subject)"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"DefaultWebSecurityManager")),Object(i.b)("li",{parentName:"ol"},"\u521b\u5efarealm\u5bf9\u8c61")),Object(i.b)("p",null,"\u5199\u7684\u65f6\u5019\uff0c\u5012\u7740\u5199\uff0c\u5148\u4ece3\u5f00\u59cb"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u81ea\u5b9a\u4e49Realm"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u7ee7\u627f",Object(i.b)("inlineCode",{parentName:"li"},"AuthorizingRealm"),"\uff0c\u91cd\u5199\u65b9\u6cd5",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"AuthorizationInfo"),"\u2014\u2014\u6388\u6743"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"AuthenticationInfo"),"\u2014\u2014\u8ba4\u8bc1")))))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class UserRealm extends AuthorizingRealm {\n    @Override\n    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {\n        System.out.println("\u6267\u884c\u4e86<<\u6388\u6743>>\u65b9\u6cd5");\n        return null;\n    }\n\n    @Override\n    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {\n        System.out.println("\u6267\u884c\u4e86<<\u8ba4\u8bc1>>\u65b9\u6cd5");\n        return null;\n    }\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u914d\u7f6e\u7c7b"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Shiro\u914d\u7f6e\u7c7b\u662f\u4e00\u4e2aSpring\u914d\u7f6e\u7c7b"),Object(i.b)("li",{parentName:"ul"},"\u5728\u91cc\u9762\u6ce8\u518c\u521a\u624d\u81ea\u5b9a\u4e49\u7684",Object(i.b)("inlineCode",{parentName:"li"},"UserRealm")," \u7684Bean"),Object(i.b)("li",{parentName:"ul"},"\u521b\u5efa",Object(i.b)("inlineCode",{parentName:"li"},"DefaultWebSecurityManager"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6ce8\u5165",Object(i.b)("inlineCode",{parentName:"li"},"userRealm"),"\u5bf9\u8c61"))),Object(i.b)("li",{parentName:"ul"},"\u521b\u5efa",Object(i.b)("inlineCode",{parentName:"li"},"ShiroFilterFactoryBean"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6ce8\u5165",Object(i.b)("inlineCode",{parentName:"li"},"DefaultWebSecurityManager"))))))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Configuration\npublic class ShiroConfig {\n    //\u6ce8\u5165\u81ea\u5b9a\u4e49realm\uff0c\u65b9\u6cd5\u540d\u5373Bean\u540d\n    @Bean\n    public UserRealm userRealm() {\n        return new UserRealm();\n    }\n\n    //DefaultWebSecurityManager\n    @Bean\n    public DefaultSecurityManager defaultSecurityManager(@Qualifier("userRealm") UserRealm userRealm) {\n        DefaultWebSecurityManager defaultSecurityManager = new DefaultWebSecurityManager();\n        //\u5173\u8054Realm\n        defaultSecurityManager.setRealm(userRealm);\n        return defaultSecurityManager;\n    }\n\n    //shiroFilterFactoryBean\n    @Bean\n    public ShiroFilterFactoryBean getShiroFilterFactoryBean(DefaultSecurityManager defaultSecurityManager) {\n        ShiroFilterFactoryBean shiroFilterFactoryBean = new ShiroFilterFactoryBean();\n        shiroFilterFactoryBean.setSecurityManager(defaultSecurityManager);\n        return shiroFilterFactoryBean;\n    }\n}\n')))}b.isMDXComponent=!0},567:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),b=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=b(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=b(t),m=r,d=p["".concat(l,".").concat(m)]||p[m]||s[m]||i;return t?a.a.createElement(d,o(o({ref:n},u),{},{components:t})):a.a.createElement(d,o({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);