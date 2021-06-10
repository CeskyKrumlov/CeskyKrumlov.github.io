(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{210:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return p})),a.d(n,"metadata",(function(){return i})),a.d(n,"rightToc",(function(){return c})),a.d(n,"default",(function(){return o}));var r=a(2),t=a(6),s=(a(0),a(350)),p={id:"12.addMybatis",title:"\u6574\u5408Mybatis",hide_title:!0},i={unversionedId:"spring/12.addMybatis",id:"spring/12.addMybatis",isDocsHomePage:!1,title:"\u6574\u5408Mybatis",description:"\u6574\u5408Mybatis",source:"@site/docs/spring/12.\u6574\u5408Mybatis.md",slug:"/spring/12.addMybatis",permalink:"/docs/spring/12.addMybatis",version:"current",sidebar:"someSidebar",previous:{title:"AOP",permalink:"/docs/spring/11.aop"},next:{title:"\u58f0\u660e\u5f0f\u4e8b\u52a1",permalink:"/docs/spring/13.springTransaction"}},c=[{value:"\u6574\u5408Mybatis",id:"\u6574\u5408mybatis",children:[{value:"\u73af\u5883\u642d\u5efa",id:"\u73af\u5883\u642d\u5efa",children:[{value:"\u56de\u5fc6Mybatis",id:"\u56de\u5fc6mybatis",children:[]}]},{value:"1. Spring\u6574\u5408Mybatis",id:"1-spring\u6574\u5408mybatis",children:[{value:"1.1 Mybatis-Spring",id:"11-mybatis-spring",children:[]},{value:"1.1.1 \u5bfc\u5305",id:"111-\u5bfc\u5305",children:[]},{value:"1.1.2 \u6574\u5408\u65b9\u5f0f\u4e00  \u91cd\u8981",id:"112-\u6574\u5408\u65b9\u5f0f\u4e00--\u91cd\u8981",children:[]},{value:"1.1.3 \u6574\u5408\u65b9\u5f0f\u4e8c",id:"113-\u6574\u5408\u65b9\u5f0f\u4e8c",children:[]}]}]}],l={rightToc:c};function o(e){var n=e.components,a=Object(t.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,a,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"\u6574\u5408mybatis"},"\u6574\u5408Mybatis"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"\u5bfc\u5165\u76f8\u5173jar\u5305",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"junit"),Object(s.b)("li",{parentName:"ul"},"Mybatis"),Object(s.b)("li",{parentName:"ul"},"Mysql\u6570\u636e\u5e93"),Object(s.b)("li",{parentName:"ul"},"Spring"),Object(s.b)("li",{parentName:"ul"},"Aop\u7ec7\u5165"),Object(s.b)("li",{parentName:"ul"},"Mybatis-Spring ",Object(s.b)("strong",{parentName:"li"},"[new]")))),Object(s.b)("li",{parentName:"ol"},"\u7f16\u5199\u914d\u7f6e\u6587\u4ef6"),Object(s.b)("li",{parentName:"ol"},"\u6d4b\u8bd5")),Object(s.b)("h2",{id:"\u73af\u5883\u642d\u5efa"},"\u73af\u5883\u642d\u5efa"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"\u65b0\u5efaMaven\u6a21\u5757spring-10-mybatis")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"\u5bfc\u5305"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>mysql</groupId>\n    <artifactId>mysql-connector-java</artifactId>\n    <version>5.1.46</version>\n</dependency>\n\n<dependency>\n    <groupId>org.mybatis</groupId>\n    <artifactId>mybatis</artifactId>\n    <version>3.5.2</version>\n</dependency>\n\n<dependency>\n    <groupId>org.springframework</groupId>\n    <artifactId>spring-webmvc</artifactId>\n    <version>5.2.0.RELEASE</version>\n</dependency>\n\n<dependency>\n    <groupId>org.springframework</groupId>\n    <artifactId>spring-jdbc</artifactId>\n    <version>5.1.9.RELEASE</version>\n</dependency>\n\n<dependency>\n    <groupId>org.mybatis</groupId>\n    <artifactId>mybatis-spring</artifactId>\n    <version>2.0.2</version>\n</dependency>\n")))),Object(s.b)("h3",{id:"\u56de\u5fc6mybatis"},"\u56de\u5fc6Mybatis"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"\u7f16\u5199\u5b9e\u4f53\u7c7b")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"\u7f16\u5199\u6838\u5fc3\u914d\u7f6e\u6587\u4ef6"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8" ?>\n<!DOCTYPE configuration\n      PUBLIC "-//mybatis.org//DTD Config 3.0//EN"\n      "http://mybatis.org/dtd/mybatis-3-config.dtd">\n<configuration>\n    <environments default="development">\n        <environment id="development">\n            <transactionManager type="JDBC"/>\n            <dataSource type="POOLED">\n                <property name="driver" value="com.mysql.jdbc.Driver"/>\n                <property name="url" value="jdbc:mysql://localhost:3306/test?useSSL=false&amp;useUnicode=true&amp;characterEncoding=UTF-8"/>\n                <property name="username" value="root"/>\n                <property name="password" value="root"/>\n            </dataSource>\n        </environment>\n    </environments>\n\n    <mappers>\n        <mapper resource="com/bsx/mapper/UserMapper.xml"/>\n    </mappers>\n\n</configuration>\n')))),Object(s.b)("ol",{start:3},Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"\u7f16\u5199\u63a5\u53e3"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"public interface UserMapper {\n\n    public List<User> queryUser();\n}\n"))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"\u7f16\u5199Mapper.xml"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8" ?>\n<!DOCTYPE mapper\n        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"\n        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n\n<mapper namespace="com.bsx.mapper.UserMapper">\n    <select id="queryUser" resultType="com.bsx.pojo.User">\n      SELECT * FROM USER;\n    </select>\n</mapper>\n'))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"\u89e3\u51b3\u627e\u4e0d\u5230Mapper.xml\u6587\u4ef6\u7684\u95ee\u9898\n\u5728pom.xml\u4e2d\u6dfb\u52a0"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<build>\n    <resources>\n        <resource>\n            <directory>src/main/resources</directory>\n            <includes>\n                <include>**/*.properties</include>\n                <include>**/*.xml</include>\n            </includes>\n            <filtering>true</filtering>\n        </resource>\n        <resource>\n            <directory>src/main/java</directory>\n            <includes>\n                <include>**/*.properties</include>\n                <include>**/*.xml</include>\n            </includes>\n            <filtering>true</filtering>\n        </resource>\n    </resources>\n</build>\n"))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"\u6d4b\u8bd5"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void testMybatis() throws IOException {\n    InputStream inputStream = Resources.getResourceAsStream("mybatis-config.xml");\n    SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);\n    SqlSession sqlSession = sqlSessionFactory.openSession();\n\n    try {\n        UserMapper mapper = sqlSession.getMapper(UserMapper.class);\n        List<User> users = mapper.queryUser();\n\n        for (User user : users) {\n            System.out.println(user);\n        }\n\n    } catch (Exception e) {\n        e.printStackTrace();\n    } finally {\n        sqlSession.close();\n    }\n\n}\n')))),Object(s.b)("h2",{id:"1-spring\u6574\u5408mybatis"},"1. Spring\u6574\u5408Mybatis"),Object(s.b)("h3",{id:"11-mybatis-spring"},"1.1 Mybatis-Spring"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"\u4ec0\u4e48\u662fMybatis-Spring")),Object(s.b)("p",null,"\u5e2e\u52a9\u5c06Mybatis\u4ee3\u7801\u65e0\u7f1d\u7684\u6574\u5408\u5230Spring\u4e2d\u3002\u5b83\u5141\u8bb8Mybatis\u53c2\u4e0e\u5230Spring\u7684\u4e8b\u52a1\u7ba1\u7406\u4e2d\uff0c\u521b\u5efa\u6620\u5c04\u5176Mapper\u548c",Object(s.b)("inlineCode",{parentName:"p"},"sqlSession"),"\u5e76\u6ce8\u5165\u5230bean\u4e2d\uff0c\u4ee5\u53ca\u5c06Mybatis\u7684\u5f02\u5e38\u8f6c\u6362\u4e3aSpring\u7684",Object(s.b)("inlineCode",{parentName:"p"},"DataAccessException"),"\u3002\u6700\u7ec8\u53ef\u4ee5\u505a\u5230\u4ee3\u7801\u4e0d\u4f9d\u8d56\u4e8eMybatis\u3001Spring\u6216Mybatis-Spring"),Object(s.b)("h3",{id:"111-\u5bfc\u5305"},"1.1.1 \u5bfc\u5305"),Object(s.b)("p",null,"\u5728\u73af\u5883\u642d\u5efa\u90e8\u5206\u5bfc\u8fc7\u4e86"),Object(s.b)("h3",{id:"112-\u6574\u5408\u65b9\u5f0f\u4e00--\u91cd\u8981"},"1.1.2 \u6574\u5408\u65b9\u5f0f\u4e00  ","[\u91cd\u8981]"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Spring\u5bb9\u5668 -> \u65b0\u5efa",Object(s.b)("strong",{parentName:"p"},"spring-dao.xml"),"\n\u6ce8\u518c\u4ee5\u4e0b\u4e1c\u897f"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"sqlSessionFactory \uff08\u53ef\u4ee5\u5b9e\u73b0\u4e00\u5207mybatis\u6838\u5fc3\u914d\u7f6e\u6587\u4ef6\u7684\u529f\u80fd\uff09",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"\u6307\u5b9a\u6570\u636e\u6e90DataSource"),Object(s.b)("li",{parentName:"ul"},"\u7ed1\u5b9aMybatis\u914d\u7f6e\u6587\u4ef6"),Object(s.b)("li",{parentName:"ul"},"\u7ed1\u5b9amapper.xml\u6587\u4ef6"))),Object(s.b)("li",{parentName:"ul"},"DataSource",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"\u4f7f\u7528Spring\u6570\u636e\u6e90\u66ff\u6362Mybatis\u7684\u914d\u7f6e \uff08\u8fd8\u53ef\u7528c3p0 druid\uff09\n",Object(s.b)("strong",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"strong"},"DriverManagerDataSource")),"\u7c7b"),Object(s.b)("li",{parentName:"ul"},"\u5220\u9664Mybatis\u6838\u5fc3\u914d\u7f6e\u6587\u4ef6\u4e2d\u5173\u4e8e\u8fde\u63a5\u6570\u636e\u5e93\u7684\u914d\u7f6e"))),Object(s.b)("li",{parentName:"ul"},"SqlSessionTemplate (\u4ee3\u66ffSqlSession)",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"\u6784\u9020\u5668\u6ce8\u5165\uff0c\u8981\u6c42\u4f20\u5165\u4e00\u4e2a",Object(s.b)("inlineCode",{parentName:"li"},"sqlSessionFactory"))))),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xmlns:aop="http://www.springframework.org/schema/aop"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans\n        https://www.springframework.org/schema/beans/spring-beans.xsd\n        http://www.springframework.org/schema/aop\n        https://www.springframework.org/schema/aop/spring-aop.xsd">\n\n    \x3c!--   DataSource \u6765\u81ea\u5bfc\u5165\u7684\u5305spring jdbc --\x3e\n    <bean id="datasource"\n          class="org.springframework.jdbc.datasource.DriverManagerDataSource">\n        <property name="driverClassName" value="com.mysql.jdbc.Driver"/>\n        <property name="url" value="jdbc:mysql://localhost:3306/test?useSSL=false&amp;useUnicode=true&amp;characterEncoding=UTF-8"/>\n        <property name="username" value="root"/>\n        <property name="password" value="root"/>\n    </bean>\n\n     \x3c!--sqlSessionFactory--\x3e\n    <bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">\n        <property name="dataSource" ref="datasource"/>\n        <property name="configLocation" value="classpath:mybatis-config.xml"/>\n        <property name="mapperLocations" value="classpath:com/bsx/mapper/*.xml"/>\n    </bean>\n</beans>\n')))),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Mapper\u5b9e\u73b0\u7c7bMapperImpl\n\u6240\u6709\u64cd\u4f5c\u4f7f\u7528sqlSessionTemplate\u6765\u6267\u884c"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"public class UserMapperImpl implements UserMapper{\n\n    private SqlSessionTemplate sqlSession;\n\n    //\u7528\u6765\u8ba9Spring\u6ce8\u5165\n    public void setSqlSession(SqlSessionTemplate sqlSession) {\n        this.sqlSession = sqlSession;\n    }\n\n    public List<User> queryUser() {\n        UserMapper mapper = sqlSession.getMapper(UserMapper.class);\n        List<User> users = mapper.queryUser();\n        return users;\n    }\n}\n")),Object(s.b)("p",{parentName:"li"},"  ",Object(s.b)("strong",{parentName:"p"},"\u628a\u5b9e\u73b0\u7c7b\u6ce8\u518c\u5230Spring\u5bb9\u5668")),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'\n\x3c!--   DataSource \u6765\u81ea\u5bfc\u5165\u7684\u5305spring jdbc --\x3e\n<bean id="datasource"\n class="org.springframework.jdbc.datasource.DriverManagerDataSource">\n    <property name="driverClassName" value="com.mysql.jdbc.Driver"/>\n    <property name="url" value="jdbc:mysql://localhost:3306/test?useSSL=false&amp;useUnicode=true&amp;characterEncoding=UTF-8"/>\n    <property name="username" value="root"/>\n    <property name="password" value="root"/>\n</bean>\n\n\x3c!--sqlSessionFactory--\x3e\n<bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">\n    <property name="dataSource" ref="datasource"/>\n    <property name="configLocation" value="classpath:mybatis-config.xml"/>\n    <property name="mapperLocations" value="classpath:com/bsx/mapper/*.xml"/>\n</bean>\n\n\x3c!--    sqlSessionTemplate \u6784\u9020\u5668\u6ce8\u5165\u4e00\u4e2asqlSessionFactory--\x3e\n<bean id="sqlSession" class="org.mybatis.spring.SqlSessionTemplate">\n    <constructor-arg index="0" ref="sqlSessionFactory"/>\n</bean>\n\n\x3c!--    userMapperImpl--\x3e\n<bean id="userMapper" class="com.bsx.mapper.UserMapperImpl">\n    <property name="sqlSession" ref="sqlSession"/>\n</bean>\n')),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"\u65b0\u5efa\u4e00\u4e2a",Object(s.b)("inlineCode",{parentName:"li"},"applicationContext.xml"),"\u5f15\u5165\u4e0a\u9762\u7684",Object(s.b)("inlineCode",{parentName:"li"},"spring-dao.xml"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xmlns:aop="http://www.springframework.org/schema/aop"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans\n        https://www.springframework.org/schema/beans/spring-beans.xsd\n        http://www.springframework.org/schema/aop\n        https://www.springframework.org/schema/aop/spring-aop.xsd">\n\n    <import resource="spring-dao.xml"/>\n</beans>\n'))))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"\u6d4b\u8bd5"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void testSpringMybatis(){\n    ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");\n\n    UserMapper userMapper = context.getBean("userMapper", UserMapper.class);\n    List<User> users = userMapper.queryUser();\n    for (User user : users) {\n        System.out.println(user);\n    }\n}\n')))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"\u6b65\u9aa4")),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"\u7f16\u5199\u6570\u636e\u6e90\u914d\u7f6e"),Object(s.b)("li",{parentName:"ol"},"\u7528sqlSessionFactoryBean \u521b\u5efa sqlSessionFactory"),Object(s.b)("li",{parentName:"ol"},"\u521b\u5efasqlSessionTemplate"),Object(s.b)("li",{parentName:"ol"},"\u9700\u8981\u7ed9mapper\u63a5\u53e3\u52a0\u5b9e\u73b0\u7c7b  ","[\u65b0]"),Object(s.b)("li",{parentName:"ol"},"\u5c06\u7f16\u5199\u7684\u5b9e\u73b0\u7c7b\u6ce8\u518c\u5230Spring\u5bb9\u5668\uff0c\u63d0\u4f9bset\u65b9\u6cd5\u8ba9spring\u6ce8\u5165"),Object(s.b)("li",{parentName:"ol"},"\u7f16\u5199\u6d4b\u8bd5\uff0c\u76f4\u63a5\u4eceSpring\u5bb9\u5668\u62ffMapper\u5b9e\u73b0\u7c7b\u5bf9\u8c61\uff0c\u8c03\u7528\u65b9\u6cd5")),Object(s.b)("h3",{id:"113-\u6574\u5408\u65b9\u5f0f\u4e8c"},"1.1.3 \u6574\u5408\u65b9\u5f0f\u4e8c"),Object(s.b)("p",null,"\u8fd9\u79cd\u65b9\u5f0f\u7ee7\u627f",Object(s.b)("inlineCode",{parentName:"p"},"sqlSessionDaoSupport"),"\u7c7b\uff0c\u7136\u540e\u76f4\u63a5\u4f7f\u7528\u5b83\u7684",Object(s.b)("inlineCode",{parentName:"p"},"getSqlSession"),"\u65b9\u6cd5\u83b7\u5f97",Object(s.b)("inlineCode",{parentName:"p"},"sqlSessionFactoryTemplate"),"\u5bf9\u8c61\uff0c\u8fd9\u79cd\u65b9\u5f0f\u4e0d\u9700\u8981\u5728Spring\u4e2d\u6ce8\u518c\u4e00\u4e2a",Object(s.b)("inlineCode",{parentName:"p"},"sqlSessionFactoryTemplate")),Object(s.b)("p",null,"\u8fd9\u79cd\u65b9\u5f0f\u8981\u6c42\u5728\u5c06\u5b9e\u73b0\u7c7b\u6ce8\u518c\u5230Spring\u5bb9\u5668\u65f6\u4f20\u5165\u4e00\u4e2a",Object(s.b)("inlineCode",{parentName:"p"},"sqlSessionFactory"),"\u5bf9\u8c61\uff0c\u56e0\u4e3a",Object(s.b)("inlineCode",{parentName:"p"},"sqlSessionDaoSupport"),"\u9700\u8981\u5b83\u6765\u5b9e\u4f8b\u5316",Object(s.b)("inlineCode",{parentName:"p"},"sqlSessionTemplate")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"mapper\u5b9e\u73b0\u7c7b"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"public class UserMapperImpl2 extends SqlSessionDaoSupport implements UserMapper {\n    public List<User> queryUser() {\n        return getSqlSession().getMapper(UserMapper.class).queryUser();\n    }\n}\n"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"\u6ce8\u518c\u5230Spring"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<bean id="userMapper2" class="com.bsx.mapper.UserMapperImpl2">\n    <property name="sqlSessionFactory" ref="sqlSessionFactory"/>\n</bean>\n'))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"\u6d4b\u8bd5"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void testSpringMybatis(){\n    ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");\n\n    UserMapper userMapper = context.getBean("userMapper2", UserMapper.class);\n    List<User> users = userMapper.queryUser();\n    for (User user : users) {\n        System.out.println(user);\n    }\n}\n')))))}o.isMDXComponent=!0},350:function(e,n,a){"use strict";a.d(n,"a",(function(){return b})),a.d(n,"b",(function(){return d}));var r=a(0),t=a.n(r);function s(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function p(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?p(Object(a),!0).forEach((function(n){s(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var l=t.a.createContext({}),o=function(e){var n=t.a.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},b=function(e){var n=o(e.components);return t.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.a.createElement(t.a.Fragment,{},n)}},u=t.a.forwardRef((function(e,n){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=o(a),u=r,d=b["".concat(p,".").concat(u)]||b[u]||m[u]||s;return a?t.a.createElement(d,i(i({ref:n},l),{},{components:a})):t.a.createElement(d,i({ref:n},l))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=a.length,p=new Array(s);p[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var l=2;l<s;l++)p[l]=a[l];return t.a.createElement.apply(null,p)}return t.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);