(window.webpackJsonp=window.webpackJsonp||[]).push([[423],{479:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return c})),n.d(a,"metadata",(function(){return l})),n.d(a,"rightToc",(function(){return u})),n.d(a,"default",(function(){return b}));var r=n(2),t=n(6),o=(n(0),n(548)),s=n(552),i=n(553),c={id:"10.mybatis",title:"\u6574\u5408Mybatis",hide_title:!0},l={unversionedId:"springboot/10.mybatis",id:"springboot/10.mybatis",isDocsHomePage:!1,title:"\u6574\u5408Mybatis",description:"\u6574\u5408Mybatis",source:"@site/docs/springboot/10.\u6574\u5408Mybatis.md",slug:"/springboot/10.mybatis",permalink:"/docs/springboot/10.mybatis",version:"current",sidebar:"someSidebar",previous:{title:"\u6574\u5408JDBC",permalink:"/docs/springboot/10.jdbc"},next:{title:"\u65e5\u5fd7\u6846\u67b6",permalink:"/docs/springboot/20.log4j2"}},u=[{value:"\u6574\u5408Mybatis",id:"\u6574\u5408mybatis",children:[]},{value:"Mybatis + Druid + \u591a\u6570\u636e\u6e90",id:"mybatis--druid--\u591a\u6570\u636e\u6e90",children:[]}],p={rightToc:u};function b(e){var a=e.components,n=Object(t.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:a,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"\u6574\u5408mybatis"},"\u6574\u5408Mybatis"),Object(o.b)("p",null,"\u5b98\u65b9\u6587\u6863\uff1a",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://mybatis.org/spring-boot-starter/mybatis-spring-boot-autoconfigure/"}),"http://mybatis.org/spring-boot-starter/mybatis-spring-boot-autoconfigure/")),Object(o.b)(s.a,{defaultValue:"1",values:[{label:"Maven \u5750\u6807",value:"1"},{label:"application.yaml",value:"2"},{label:"\u4e1a\u52a1\u7c7b",value:"3"},{label:"mapper.xml",value:"4"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"1",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>org.mybatis.spring.boot</groupId>\n    <artifactId>mybatis-spring-boot-starter</artifactId>\n    <version>2.1.1</version>\n</dependency>\n"))),Object(o.b)(i.a,{value:"2",mdxType:"TabItem"},Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u63d0\u793a")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u4ee5\u524dMybatis\u6838\u5fc3\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u914d\u7f6e\uff0c\u73b0\u5728\u53ef\u4ee5\u5728\u8fd9\u91cc\u914d"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"type-aliases-package"),Object(o.b)("li",{parentName:"ul"},"mapper-locations")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"spring:\n  datasource:\n    username: root\n    password: root\n    #?serverTimezone=UTC\u89e3\u51b3\u65f6\u533a\u7684\u62a5\u9519\n    url: jdbc:mysql://localhost:3306/test?serverTimezone=UTC&useUnicode=true&characterEncoding=utf-8\n    driver-class-name: com.mysql.jdbc.Driver\n    type: com.alibaba.druid.pool.DruidDataSource # \u914d\u7f6e\u4f7f\u7528Druid\u6570\u636e\u6e90\n\n    #Spring Boot \u9ed8\u8ba4\u662f\u4e0d\u6ce8\u5165\u8fd9\u4e9b\u5c5e\u6027\u503c\u7684\uff0c\u9700\u8981\u81ea\u5df1\u7ed1\u5b9a\n    #druid \u6570\u636e\u6e90\u4e13\u6709\u914d\u7f6e\n    initialSize: 5\n    minIdle: 5\n    maxActive: 20\n    maxWait: 60000\n    timeBetweenEvictionRunsMillis: 60000\n    minEvictableIdleTimeMillis: 300000\n    validationQuery: SELECT 1 FROM DUAL\n    testWhileIdle: true\n    testOnBorrow: false\n    testOnReturn: false\n    poolPreparedStatements: true\n\n    #\u914d\u7f6e\u76d1\u63a7\u7edf\u8ba1\u62e6\u622a\u7684filters\uff0cstat:\u76d1\u63a7\u7edf\u8ba1\u3001log4j\uff1a\u65e5\u5fd7\u8bb0\u5f55\u3001wall\uff1a\u9632\u5fa1sql\u6ce8\u5165\n    #\u5982\u679c\u5141\u8bb8\u65f6\u62a5\u9519  java.lang.ClassNotFoundException: org.apache.log4j.Priority\n    #\u5219\u5bfc\u5165 log4j \u4f9d\u8d56\u5373\u53ef\uff0cMaven \u5730\u5740\uff1ahttps://mvnrepository.com/artifact/log4j/log4j\n    filters: stat,wall,log4j\n    maxPoolPreparedStatementPerConnectionSize: 20\n    useGlobalDataSourceStat: true\n    connectionProperties: druid.stat.mergeSql=true;druid.stat.slowSqlMillis=500\n\n# \u914d\u7f6eMybatis\n# \u4e5f\u53ef\u4ee5\u4e0d\u914d\u7f6e\uff0c\u5199\u5168\u8def\u5f84\uff0c\u7136\u540e\u5728resources\u8def\u5f84\u4e0b\u5efa\u7acb\u548cmapper\u63a5\u53e3\u4e00\u6837\u7684\u5305\u8def\u5f84\nmybatis:\n  type-aliases-package: com.example.demo.pojo # \u522b\u540d\n  mapper-locations: classpath:mapper/*.xml # \u626b\u63cfmapper.xml\u6587\u4ef6\u8def\u5f84\n"))),Object(o.b)(i.a,{value:"3",mdxType:"TabItem"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Pojo"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"@Data\n@AllArgsConstructor\n@NoArgsConstructor\npublic class User {\n    private int id;\n    private String name;\n    private String password;\n}\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Mapper\u63a5\u53e3"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"@mapper"),"\u6ce8\u89e3\uff0c\u8868\u793a\u8fd9\u662f\u4e00\u4e2aMybatis\u7684mapper\u7c7b"),Object(o.b)("li",{parentName:"ul"},"\u53e6\u4e00\u79cd\u65b9\u5f0f\u662f\u5728SpringBootApplication\u7c7b\u4e0a\u7528",Object(o.b)("inlineCode",{parentName:"li"},"@MapperScan()"),"\u6307\u5b9a\u5305\u626b\u63cf\u8def\u5f84")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"@Mapper\n@Repository\npublic interface UserMapper {\n    List<User> queryUserList();\n\n    User queryUserById(int id);\n\n    int addUser(User user);\n\n    int updateUser(User user);\n\n    int deleteUser(int id);\n}\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Controller"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@RestController\npublic class UserController {\n\n    @Autowired\n    UserMapper userMapper;\n    \n    @GetMapping("/user")\n    public List<User> queryUserList(){\n        return userMapper.queryUserList();\n    }\n}\n'))))),Object(o.b)(i.a,{value:"4",mdxType:"TabItem"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"UserMapper.xml")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8" ?>\n<!DOCTYPE mapper\n        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"\n        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n\n<mapper namespace="com.example.demo.mapper.UserMapper">\n    <select id="queryUserList" resultType="com.example.demo.pojo.User">\n          SELECT * FROM USER;\n    </select>\n\n    <select id="queryUserById" resultType="com.example.demo.pojo.User">\n        SELECT * FROM USER WHERE id = #{id}\n    </select>\n\n    <insert id="addUser" parameterType="com.example.demo.pojo.User">\n        INSERT INTO USER (id, name, password) VALUES (NULL, #{name}, #{password});\n    </insert>\n\n    <update id="updateUser" parameterType="com.example.demo.pojo.User">\n        update user set name = #{name}, password = #{password} where id = #{id};\n    </update>\n\n    <delete id="deleteUser">\n        DELETE FROM USER WHERE id = #{id};\n    </delete>\n</mapper>\n')))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u8bbf\u95eehttp://localhost:8080/user")),Object(o.b)("br",null),Object(o.b)("h1",{id:"mybatis--druid--\u591a\u6570\u636e\u6e90"},"Mybatis + Druid + \u591a\u6570\u636e\u6e90"),Object(o.b)(s.a,{defaultValue:"1",values:[{label:"application.yaml",value:"1"},{label:"\u6570\u636e\u6e90\u914d\u7f6e\u7c7b",value:"2"},{label:"\u4e3b\u542f\u52a8\u7c7b",value:"3"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"1",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"spring:\n  datasource:\n#    username: root\n#    password: root\n#    url: jdbc:mysql://localhost:3306/oauth?serverTimezone=UTC&useUnicode=true&characterEncoding=utf-8\n#    driver-class-name: com.mysql.jdbc.Driver\n#    type: com.alibaba.druid.pool.DruidDataSource\n    primary:\n      username: root\n      password: root\n      jdbc-url: jdbc:mysql://localhost:3306/oauth?serverTimezone=UTC&useUnicode=true&characterEncoding=utf-8\n      driver-class-name: com.mysql.jdbc.Driver\n      type: com.alibaba.druid.pool.DruidDataSource\n    secondary:\n      username: root\n      password: root\n      jdbc-url: jdbc:mysql://localhost:3306/blog?serverTimezone=UTC&useUnicode=true&characterEncoding=utf-8\n      driver-class-name: com.mysql.jdbc.Driver\n      type: com.alibaba.druid.pool.DruidDataSource\n\n  jackson:\n    date-format: yyyy-MM-dd HH:mm:ss\n    time-zone: GMT+8\n\nmybatis:\n  configuration:\n    map-underscore-to-camel-case: true       #\u9a7c\u5cf0\u6620\u5c04\n    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl   #\u8c03\u8bd5\u6253\u5370SQL\n"))),Object(o.b)(i.a,{value:"2",mdxType:"TabItem"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u4e00\u4e2a\u6570\u636e\u6e90\u5bf9\u5e94\u4e00\u4e2a\u914d\u7f6e\u7c7b"),Object(o.b)("li",{parentName:"ul"},"\u901a\u8fc7 ",Object(o.b)("inlineCode",{parentName:"li"},"@MapperScan")," \u6765\u6307\u5b9a\u6570\u636e\u6e90\u751f\u6548\u7684\u5305\u8303\u56f4"),Object(o.b)("li",{parentName:"ul"},"\u901a\u8fc7\u5728\u4e0d\u540c\u7684\u5305\u751f\u6548\uff0c\u6765\u533a\u5206\u591a\u6570\u636e\u6e90")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u7b2c\u4e00\u6570\u636e\u6e90"',title:'"\u7b2c\u4e00\u6570\u636e\u6e90"'}),'@Configuration\n@MapperScan(basePackages = {\n        "com.bsx.flute.cloud.persistence.**.mapper", // \u7cfb\u7edf\u7ba1\u7406auto\u3001rbac\n        "com.bsx.flute.cloud.security.**.mapper" // spring security \u57fa\u4e8e rbac \u6743\u9650\u63a7\u5236\n},\n        sqlSessionTemplateRef = "primarySqlSessionTemplate")\npublic class PrimaryDataSourceConfig {\n\n    //@Value("${spring.datasource.primary.filters}")\n    //String filters;\n    @Value("${spring.datasource.primary.driver-class-name}")\n    String driverClassName;\n    @Value("${spring.datasource.primary.username}")\n    String username;\n    @Value("${spring.datasource.primary.password}")\n    String password;\n    @Value("${spring.datasource.primary.jdbc-url}")\n    String url;\n\n    @Bean(name = "primaryDataSource")\n    @ConfigurationProperties(prefix = "spring.datasource.primary")   //\u6570\u636e\u6e90primary\u914d\u7f6e\n    @Primary\n    public DataSource primaryDataSource() {\n        //        return DataSourceBuilder.create().build(); // \u9ed8\u8ba4\u6570\u636e\u6e90\n        // druid\n        DruidDataSource druid = new DruidDataSource();\n        // \u76d1\u63a7\u7edf\u8ba1\u62e6\u622a\u7684filters\n        //druid.setFilters(filters);\n        // \u914d\u7f6e\u57fa\u672c\u5c5e\u6027\n        druid.setDriverClassName(driverClassName);\n        druid.setUsername(username);\n        druid.setPassword(password);\n        druid.setUrl(url);\n\n        return druid;\n    }\n\n    @Bean(name = "primarySqlSessionFactory")\n    @Primary\n    public SqlSessionFactory primarySqlSessionFactory(\n            @Qualifier("primaryDataSource") DataSource dataSource)\n            throws Exception {\n        SqlSessionFactoryBean bean = new SqlSessionFactoryBean();\n        bean.setDataSource(dataSource);\n        //\u8bbe\u7f6eXML\u6587\u4ef6\u5b58\u653e\u4f4d\u7f6e\n        bean.setMapperLocations(new PathMatchingResourcePatternResolver()\n                .getResources("classpath:com/bsx/flute/cloud/persistence/**/*.xml"));\n        return bean.getObject();\n    }\n\n    @Bean(name = "primaryTransactionManager")\n    @Primary\n    public DataSourceTransactionManager primaryTransactionManager(\n            @Qualifier("primaryDataSource") DataSource dataSource) {\n        return new DataSourceTransactionManager(dataSource);\n    }\n\n    @Bean(name = "primarySqlSessionTemplate")\n    @Primary\n    public SqlSessionTemplate primarySqlSessionTemplate(\n            @Qualifier("primarySqlSessionFactory") SqlSessionFactory sqlSessionFactory)\n            throws Exception {\n        return new SqlSessionTemplate(sqlSessionFactory);\n    }\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u7b2c\u4e8c\u6570\u636e\u6e90"',title:'"\u7b2c\u4e8c\u6570\u636e\u6e90"'}),'@Configuration\n@MapperScan(basePackages = "com.bsx.flute.cloud.blog.**.mapper",     //\u6ce8\u610f\u8fd9\u91cctestdb2\u76ee\u5f55\n            sqlSessionTemplateRef = "secondarySqlSessionTemplate")\npublic class SecondaryDataSourceConfig {\n\n    //@Value("${spring.datasource.secondary.filters}")\n    //String filters;\n    @Value("${spring.datasource.secondary.driver-class-name}")\n    String driverClassName;\n    @Value("${spring.datasource.secondary.username}")\n    String username;\n    @Value("${spring.datasource.secondary.password}")\n    String password;\n    @Value("${spring.datasource.secondary.jdbc-url}")\n    String url;\n\n    @Bean(name = "secondaryDataSource")\n    @ConfigurationProperties(prefix = "spring.datasource.secondary")    //\u6ce8\u610f\u8fd9\u91ccsecondary\u914d\u7f6e\n    public DataSource secondaryDataSource() {\n        //        return DataSourceBuilder.create().build(); // \u9ed8\u8ba4\u6570\u636e\u6e90\n        // druid\n        DruidDataSource druid = new DruidDataSource();\n        // \u76d1\u63a7\u7edf\u8ba1\u62e6\u622a\u7684filters\n        //druid.setFilters(filters);\n        // \u914d\u7f6e\u57fa\u672c\u5c5e\u6027\n        druid.setDriverClassName(driverClassName);\n        druid.setUsername(username);\n        druid.setPassword(password);\n        druid.setUrl(url);\n\n        return druid;\n    }\n\n    @Bean(name = "secondarySqlSessionFactory")\n    public SqlSessionFactory secondarySqlSessionFactory(\n                        @Qualifier("secondaryDataSource") DataSource dataSource)\n                        throws Exception {\n        SqlSessionFactoryBean bean = new SqlSessionFactoryBean();\n        bean.setDataSource(dataSource);\n        //\u8bbe\u7f6eXML\u6587\u4ef6\u5b58\u653e\u4f4d\u7f6e\n        bean.setMapperLocations(new PathMatchingResourcePatternResolver()\n                .getResources("classpath:com/bsx/flute/cloud/blog/**/*.xml"));\n        return bean.getObject();\n    }\n\n    @Bean(name = "secondaryTransactionManager")\n    public DataSourceTransactionManager secondaryTransactionManager(\n                        @Qualifier("secondaryDataSource") DataSource dataSource) {\n        return new DataSourceTransactionManager(dataSource);\n    }\n\n    @Bean(name = "secondarySqlSessionTemplate")\n    public SqlSessionTemplate secondarySqlSessionTemplate(\n                        @Qualifier("secondarySqlSessionFactory") SqlSessionFactory sqlSessionFactory)\n                        throws Exception {\n        return new SqlSessionTemplate(sqlSessionFactory);\n    }\n\n}\n'))),Object(o.b)(i.a,{value:"3",mdxType:"TabItem"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u53bb\u9664 ",Object(o.b)("inlineCode",{parentName:"li"},"@MapperScan")," \u6ce8\u89e3\uff0c\u56e0\u4e3a\u5df2\u7ecf\u5728\u6570\u636e\u6e90\u914d\u7f6e\u7c7b\u8fdb\u884c\u4e86\u8bbe\u7f6e")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@SpringBootApplication(scanBasePackages = {"com.bsx.flute.cloud"})\n//@MapperScan(basePackages = "com.bsx.flute.cloud.**.mapper")\n@EnableDiscoveryClient\n@EnableFeignClients\npublic class BlogMain8403 {\n    public static void main(String[] args) {\n        SpringApplication.run(BlogMain8403.class, args);\n    }\n}\n')))))}b.isMDXComponent=!0},548:function(e,a,n){"use strict";n.d(a,"a",(function(){return p})),n.d(a,"b",(function(){return m}));var r=n(0),t=n.n(r);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=t.a.createContext({}),u=function(e){var a=t.a.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},p=function(e){var a=u(e.components);return t.a.createElement(l.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return t.a.createElement(t.a.Fragment,{},a)}},d=t.a.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(s,".").concat(d)]||p[d]||b[d]||o;return n?t.a.createElement(m,i(i({ref:a},l),{},{components:n})):t.a.createElement(m,i({ref:a},l))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return t.a.createElement.apply(null,s)}return t.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},549:function(e,a,n){"use strict";function r(e){var a,n,t="";if("string"==typeof e||"number"==typeof e)t+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(n=r(e[a]))&&(t&&(t+=" "),t+=n);else for(a in e)e[a]&&(t&&(t+=" "),t+=a);return t}a.a=function(){for(var e,a,n=0,t="";n<arguments.length;)(e=arguments[n++])&&(a=r(e))&&(t&&(t+=" "),t+=a);return t}},550:function(e,a,n){"use strict";var r=n(0);const t=Object(r.createContext)(void 0);a.a=t},551:function(e,a,n){"use strict";var r=n(0),t=n(550);a.a=function(){const e=Object(r.useContext)(t.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},552:function(e,a,n){"use strict";var r=n(0),t=n.n(r),o=n(551),s=n(549),i=n(47),c=n.n(i);const l=37,u=39;a.a=function(e){const{block:a,children:n,defaultValue:i,values:p,groupId:b}=e,{tabGroupChoices:d,setTabGroupChoices:m}=Object(o.a)(),[y,g]=Object(r.useState)(i),[j,S]=Object(r.useState)(!1);if(null!=b){const e=d[b];null!=e&&e!==y&&p.some(a=>a.value===e)&&g(e)}const f=e=>{g(e),null!=b&&m(b,e)},O=[],v=e=>{e.metaKey||e.altKey||e.ctrlKey||S(!0)},w=()=>{S(!1)};return Object(r.useEffect)(()=>{window.addEventListener("keydown",v),window.addEventListener("mousedown",w)},[]),t.a.createElement("div",null,t.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":a})},p.map(({value:e,label:a})=>t.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===e,className:Object(s.a)("tabs__item",c.a.tabItem,{"tabs__item--active":y===e}),style:j?{}:{outline:"none"},key:e,ref:e=>O.push(e),onKeyDown:e=>{((e,a,n)=>{switch(n.keyCode){case u:((e,a)=>{const n=e.indexOf(a)+1;e[n]?e[n].focus():e[0].focus()})(e,a);break;case l:((e,a)=>{const n=e.indexOf(a)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,a)}})(O,e.target,e),v(e)},onFocus:()=>f(e),onClick:()=>{f(e),S(!1)},onPointerDown:()=>S(!1)},a))),t.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter(e=>e.props.value===y)[0]))}},553:function(e,a,n){"use strict";var r=n(0),t=n.n(r);a.a=function(e){return t.a.createElement("div",null,e.children)}}}]);