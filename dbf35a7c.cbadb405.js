(window.webpackJsonp=window.webpackJsonp||[]).push([[354],{410:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),i=(n(0),n(472)),o={id:"10.mybatis",title:"\u6574\u5408Mybatis",hide_title:!0},p={unversionedId:"springboot/10.mybatis",id:"springboot/10.mybatis",isDocsHomePage:!1,title:"\u6574\u5408Mybatis",description:"\u6574\u5408Mybatis",source:"@site/docs/springboot/10.\u6574\u5408Mybatis.md",slug:"/springboot/10.mybatis",permalink:"/docs/springboot/10.mybatis",version:"current",sidebar:"someSidebar",previous:{title:"\u6574\u5408JDBC",permalink:"/docs/springboot/10.jdbc"},next:{title:"\u65e5\u5fd7\u6846\u67b6",permalink:"/docs/springboot/20.log4j2"}},s=[{value:"\u6574\u5408Mybatis",id:"\u6574\u5408mybatis",children:[]}],c={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u6574\u5408mybatis"},"\u6574\u5408Mybatis"),Object(i.b)("p",null,"\u5b98\u65b9\u6587\u6863\uff1a",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://mybatis.org/spring-boot-starter/mybatis-spring-boot-autoconfigure/"}),"http://mybatis.org/spring-boot-starter/mybatis-spring-boot-autoconfigure/")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Maven\u5750\u6807"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>org.mybatis.spring.boot</groupId>\n    <artifactId>mybatis-spring-boot-starter</artifactId>\n    <version>2.1.1</version>\n</dependency>\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"application.yaml"),Object(i.b)("div",Object(r.a)({parentName:"li"},{className:"admonition admonition-tip alert alert--success"}),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u63d0\u793a")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u4ee5\u524dMybatis\u6838\u5fc3\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u914d\u7f6e\uff0c\u73b0\u5728\u53ef\u4ee5\u5728\u8fd9\u91cc\u914d"))),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"type-aliases-package"),Object(i.b)("li",{parentName:"ul"},"mapper-locations")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"spring:\n  datasource:\n    username: root\n    password: root\n    #?serverTimezone=UTC\u89e3\u51b3\u65f6\u533a\u7684\u62a5\u9519\n    url: jdbc:mysql://localhost:3306/test?serverTimezone=UTC&useUnicode=true&characterEncoding=utf-8\n    driver-class-name: com.mysql.jdbc.Driver\n    type: com.alibaba.druid.pool.DruidDataSource # \u914d\u7f6e\u4f7f\u7528Druid\u6570\u636e\u6e90\n\n    #Spring Boot \u9ed8\u8ba4\u662f\u4e0d\u6ce8\u5165\u8fd9\u4e9b\u5c5e\u6027\u503c\u7684\uff0c\u9700\u8981\u81ea\u5df1\u7ed1\u5b9a\n    #druid \u6570\u636e\u6e90\u4e13\u6709\u914d\u7f6e\n    initialSize: 5\n    minIdle: 5\n    maxActive: 20\n    maxWait: 60000\n    timeBetweenEvictionRunsMillis: 60000\n    minEvictableIdleTimeMillis: 300000\n    validationQuery: SELECT 1 FROM DUAL\n    testWhileIdle: true\n    testOnBorrow: false\n    testOnReturn: false\n    poolPreparedStatements: true\n\n    #\u914d\u7f6e\u76d1\u63a7\u7edf\u8ba1\u62e6\u622a\u7684filters\uff0cstat:\u76d1\u63a7\u7edf\u8ba1\u3001log4j\uff1a\u65e5\u5fd7\u8bb0\u5f55\u3001wall\uff1a\u9632\u5fa1sql\u6ce8\u5165\n    #\u5982\u679c\u5141\u8bb8\u65f6\u62a5\u9519  java.lang.ClassNotFoundException: org.apache.log4j.Priority\n    #\u5219\u5bfc\u5165 log4j \u4f9d\u8d56\u5373\u53ef\uff0cMaven \u5730\u5740\uff1ahttps://mvnrepository.com/artifact/log4j/log4j\n    filters: stat,wall,log4j\n    maxPoolPreparedStatementPerConnectionSize: 20\n    useGlobalDataSourceStat: true\n    connectionProperties: druid.stat.mergeSql=true;druid.stat.slowSqlMillis=500\n\n# \u914d\u7f6eMybatis\n# \u4e5f\u53ef\u4ee5\u4e0d\u914d\u7f6e\uff0c\u5199\u5168\u8def\u5f84\uff0c\u7136\u540e\u5728resources\u8def\u5f84\u4e0b\u5efa\u7acb\u548cmapper\u63a5\u53e3\u4e00\u6837\u7684\u5305\u8def\u5f84\nmybatis:\n  type-aliases-package: com.example.demo.pojo # \u522b\u540d\n  mapper-locations: classpath:mapper/*.xml # \u626b\u63cfmapper.xml\u6587\u4ef6\u8def\u5f84\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Pojo"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"@Data\n@AllArgsConstructor\n@NoArgsConstructor\npublic class User {\n    private int id;\n    private String name;\n    private String password;\n}\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Mapper\u63a5\u53e3"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"@mapper"),"\u6ce8\u89e3\uff0c\u8868\u793a\u8fd9\u662f\u4e00\u4e2aMybatis\u7684mapper\u7c7b"),Object(i.b)("li",{parentName:"ul"},"\u53e6\u4e00\u79cd\u65b9\u5f0f\u662f\u5728SpringBootApplication\u7c7b\u4e0a\u7528",Object(i.b)("inlineCode",{parentName:"li"},"@MapperScan()"),"\u6307\u5b9a\u5305\u626b\u63cf\u8def\u5f84")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"@Mapper\n@Repository\npublic interface UserMapper {\n    List<User> queryUserList();\n\n    User queryUserById(int id);\n\n    int addUser(User user);\n\n    int updateUser(User user);\n\n    int deleteUser(int id);\n}\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"UserMapper.xml"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8" ?>\n<!DOCTYPE mapper\n        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"\n        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n\n<mapper namespace="com.example.demo.mapper.UserMapper">\n    <select id="queryUserList" resultType="com.example.demo.pojo.User">\n          SELECT * FROM USER;\n    </select>\n\n    <select id="queryUserById" resultType="com.example.demo.pojo.User">\n        SELECT * FROM USER WHERE id = #{id}\n    </select>\n\n    <insert id="addUser" parameterType="com.example.demo.pojo.User">\n        INSERT INTO USER (id, name, password) VALUES (NULL, #{name}, #{password});\n    </insert>\n\n    <update id="updateUser" parameterType="com.example.demo.pojo.User">\n        update user set name = #{name}, password = #{password} where id = #{id};\n    </update>\n\n    <delete id="deleteUser">\n        DELETE FROM USER WHERE id = #{id};\n    </delete>\n</mapper>\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Controller"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@RestController\npublic class UserController {\n\n    @Autowired\n    UserMapper userMapper;\n    \n    @GetMapping("/user")\n    public List<User> queryUserList(){\n        return userMapper.queryUserList();\n    }\n}\n')),Object(i.b)("p",{parentName:"li"},"\u8bbf\u95eehttp://localhost:8080/user"))))}l.isMDXComponent=!0},472:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=l(n),u=r,d=b["".concat(o,".").concat(u)]||b[u]||m[u]||i;return n?a.a.createElement(d,p(p({ref:t},c),{},{components:n})):a.a.createElement(d,p({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);