(window.webpackJsonp=window.webpackJsonp||[]).push([[350],{406:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return b}));var r=t(2),a=t(6),p=(t(0),t(564)),i={id:"13.springTransaction",title:"\u58f0\u660e\u5f0f\u4e8b\u52a1",hide_title:!0},s={unversionedId:"spring/13.springTransaction",id:"spring/13.springTransaction",isDocsHomePage:!1,title:"\u58f0\u660e\u5f0f\u4e8b\u52a1",description:"\u58f0\u660e\u5f0f\u4e8b\u52a1",source:"@site/docs/spring/13.\u58f0\u660e\u5f0f\u4e8b\u52a1.md",slug:"/spring/13.springTransaction",permalink:"/docs/spring/13.springTransaction",version:"current",sidebar:"someSidebar",previous:{title:"\u6574\u5408Mybatis",permalink:"/docs/spring/12.addMybatis"},next:{title:"\u5faa\u73af\u4f9d\u8d56",permalink:"/docs/spring/14.circleDependence"}},l=[{value:"\u58f0\u660e\u5f0f\u4e8b\u52a1",id:"\u58f0\u660e\u5f0f\u4e8b\u52a1",children:[]},{value:"1. \u56de\u987e\u4e8b\u52a1",id:"1-\u56de\u987e\u4e8b\u52a1",children:[{value:"1.1 \u73af\u5883\u642d\u5efa",id:"11-\u73af\u5883\u642d\u5efa",children:[]},{value:"1.2 \u6a21\u62df\u4e8b\u52a1",id:"12-\u6a21\u62df\u4e8b\u52a1",children:[]}]},{value:"2. Spring\u4e2d\u7684\u4e8b\u52a1",id:"2-spring\u4e2d\u7684\u4e8b\u52a1",children:[{value:"2.1 \u58f0\u660e\u5f0f\u4e8b\u52a1 \uff08AOP\uff09",id:"21-\u58f0\u660e\u5f0f\u4e8b\u52a1-\uff08aop\uff09",children:[{value:"2.1.1 \u914d\u7f6e\u5b9e\u73b0",id:"211-\u914d\u7f6e\u5b9e\u73b0",children:[]},{value:"2.1.2 \u6ce8\u89e3\u5b9e\u73b0",id:"212-\u6ce8\u89e3\u5b9e\u73b0",children:[]},{value:"2.1.3 \u4e03\u79cdPropagation\u4e8b\u52a1\u5c5e\u6027",id:"213-\u4e03\u79cdpropagation\u4e8b\u52a1\u5c5e\u6027",children:[]},{value:"2.1.4 \u56db\u79cdIsolation\u4e8b\u52a1\u9694\u79bb\u5c5e\u6027",id:"214-\u56db\u79cdisolation\u4e8b\u52a1\u9694\u79bb\u5c5e\u6027",children:[]}]},{value:"2.2 \u7f16\u7a0b\u5f0f\u4e8b\u52a1\uff08\u4ee3\u7801\u7ba1\u7406\uff09",id:"22-\u7f16\u7a0b\u5f0f\u4e8b\u52a1\uff08\u4ee3\u7801\u7ba1\u7406\uff09",children:[]}]}],c={rightToc:l};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(p.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(p.b)("h1",{id:"\u58f0\u660e\u5f0f\u4e8b\u52a1"},"\u58f0\u660e\u5f0f\u4e8b\u52a1"),Object(p.b)("h1",{id:"1-\u56de\u987e\u4e8b\u52a1"},"1. \u56de\u987e\u4e8b\u52a1"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"\u8981\u4e48\u90fd\u6210\u529f\uff0c\u8981\u4e48\u90fd\u5931\u8d25"),Object(p.b)("li",{parentName:"ul"},"\u4e8b\u52a1\u5728\u9879\u76ee\u5f00\u53d1\u4e2d\uff0c\u5341\u5206\u91cd\u8981\uff0c\u6d89\u53ca\u5230\u6570\u636e\u4e00\u81f4\u6027\u95ee\u9898\uff0c\u4e0d\u80fd\u9a6c\u864e"),Object(p.b)("li",{parentName:"ul"},"\u786e\u4fdd\u5b8c\u6574\u6027\u548c\u4e00\u81f4\u6027")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"\u4e8b\u7269\u7684ACID\u539f\u5219\uff1a"),"\u3010\u9762\u8bd5\u3011  \u610f\u601d\u5c31\u662f \u8981\u4e48\u90fd\u6210\u529f\u8981\u4e48\u90fd\u5931\u8d25"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"\u539f\u5b50\u6027\n\u4e0d\u53ef\u518d\u5206"),Object(p.b)("li",{parentName:"ul"},"\u4e00\u81f4\u6027\n\u4e8b\u52a1\u524d\u540e\u6570\u636e\u7684\u5b8c\u6574\u6027\u5fc5\u987b\u4fdd\u6301\u4e00\u81f4"),Object(p.b)("li",{parentName:"ul"},"\u9694\u79bb\u6027\n\u64cd\u4f5c\u4e4b\u95f4\u4e92\u4e0d\u5f71\u54cd\uff0c\u9632\u6b62\u6570\u636e\u635f\u574f"),Object(p.b)("li",{parentName:"ul"},"\u6301\u4e45\u6027\n\u64cd\u4f5c\u7684\u7ed3\u679c\u662f\u6c38\u4e45\u7684")),Object(p.b)("h2",{id:"11-\u73af\u5883\u642d\u5efa"},"1.1 \u73af\u5883\u642d\u5efa"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"\u65b0\u5efamaven\u6a21\u5757spring-11-transaction"),Object(p.b)("li",{parentName:"ul"},"\u5efapojo"),Object(p.b)("li",{parentName:"ul"},"\u5199\u63a5\u53e3"),Object(p.b)("li",{parentName:"ul"},"mybatis\u548cspring\u914d\u7f6e\u6587\u4ef6"),Object(p.b)("li",{parentName:"ul"},"\u6574\u5408Mybatis"),Object(p.b)("li",{parentName:"ul"},"\u6d4b\u8bd5")),Object(p.b)("h2",{id:"12-\u6a21\u62df\u4e8b\u52a1"},"1.2 \u6a21\u62df\u4e8b\u52a1"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"Mapper\u63a5\u53e3"),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'//\u6dfb\u52a0\u4e00\u4e2a\u7528\u6237\npublic int addUser(User user);\n\n//\u5220\u9664\u4e00\u4e2a\u7528\u6237\npublic int deleteUser(@Param("id") int id);\n'))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"Mapper.xml\n",Object(p.b)("strong",{parentName:"p"},"\u4e3a\u4e86\u6a21\u62df\u4e8b\u52a1\uff0c\u6545\u610f\u628adelete\u8bed\u53e5\u5199\u9519\uff0c\u628adelete\u5199\u6210deletes")),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<mapper namespace="com.bsx.mapper.UserMapper">\n    <select id="queryUser" resultType="com.bsx.pojo.User">\n      SELECT * FROM USER;\n    </select>\n\n    <insert id="addUser" parameterType="com.bsx.pojo.User">\n       insert into user (id, name, password) values (#{id} , #{name} , #{password})\n   </insert>\n\n    <delete id="deleteUser" >\n        deletes from user where id = #{id}\n    </delete>\n</mapper>\n'))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"mapper\u5b9e\u73b0\u7c7b"),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class UserMapperImpl implements UserMapper {\n\n    private SqlSessionTemplate sqlSession;\n\n    //\u7528\u6765\u8ba9Spring\u6ce8\u5165\n    public void setSqlSession(SqlSessionTemplate sqlSession) {\n        this.sqlSession = sqlSession;\n    }\n\n    public List<User> queryUser() {\n        User user = new User();\n        user.setId(6);\n        user.setName("\u7b2c\u516d\u4e2a");\n        user.setPassword("123455");\n\n        UserMapper mapper = sqlSession.getMapper(UserMapper.class);\n        mapper.addUser(user);\n        mapper.deleteUser(6);\n\n        return mapper.queryUser();\n    }\n\n    public int addUser(User user) {\n        UserMapper mapper = sqlSession.getMapper(UserMapper.class);\n        return mapper.addUser(user);\n    }\n\n    public int deleteUser(int id) {\n        UserMapper mapper = sqlSession.getMapper(UserMapper.class);\n        return mapper.deleteUser(id);\n    }\n\n}\n'))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"\u6d4b\u8bd5\n",Object(p.b)("strong",{parentName:"p"},"\u62a5\u9519\uff0c\u63d2\u5165\u6210\u529f\u3001\u5220\u9664\u5931\u8d25\uff0c\u8fd9\u662f\u6211\u4eec\u4e0d\u5e0c\u671b\u770b\u5230\u7684")))),Object(p.b)("h1",{id:"2-spring\u4e2d\u7684\u4e8b\u52a1"},"2. Spring\u4e2d\u7684\u4e8b\u52a1"),Object(p.b)("h2",{id:"21-\u58f0\u660e\u5f0f\u4e8b\u52a1-\uff08aop\uff09"},"2.1 \u58f0\u660e\u5f0f\u4e8b\u52a1 \uff08AOP\uff09"),Object(p.b)("p",null,"\u65e0\u9700\u6539\u53d8\u539f\u6709\u4ee3\u7801"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"\u8981\u5f00\u542fSpring\u4e8b\u52a1\u5904\u7406\u529f\u80fd\uff0c\u9700\u8981\u5728Spring\u914d\u7f6e\u6587\u4ef6\u4e2d\u521b\u5efa\u4e00\u4e2a",Object(p.b)("inlineCode",{parentName:"strong"},"DataSourceTransactionManager"),"\u5bf9\u8c61")),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!--    \u5f00\u542f\u4e8b\u52a1\u7ba1\u7406--\x3e\n<bean id="transactionManager" \n      class="org.springframework.jdbc.datasource.DataSourceTransactionManager">\n    <constructor-arg ref="datasource" />\n</bean>\n')),Object(p.b)("h3",{id:"211-\u914d\u7f6e\u5b9e\u73b0"},"2.1.1 \u914d\u7f6e\u5b9e\u73b0"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"\u914d\u7f6e\u58f0\u660e\u5f0f\u4e8b\u52a1")),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!--    \u7ed3\u5408AOP\u5b9e\u73b0\u4e8b\u52a1\u7684\u7ec7\u5165--\x3e\n\x3c!--    \u914d\u7f6e\u4e8b\u52a1\u7684\u901a\u77e5--\x3e\n<tx:advice id="txAdvice" transaction-manager="transactionManager" >\n    \x3c!--        \u7ed9\u54ea\u4e9b\u65b9\u6cd5\u914d\u7f6e\u4e8b\u52a1--\x3e\n    \x3c!--        \u914d\u7f6e\u4e8b\u52a1\u7684\u4f20\u64ad\u7279\u6027 propagation  \u9ed8\u8ba4\u503c\u4e3aREQUIRED--\x3e\n    <tx:advice id="txAdvice" transaction-manager="transactionManager">\n        \x3c!--        \u7ed9\u54ea\u4e9b\u65b9\u6cd5\u914d\u7f6e\u4e8b\u52a1--\x3e\n        \x3c!--        \u914d\u7f6e\u4e8b\u52a1\u7684\u4f20\u64ad\u7279\u6027 propagation  \u9ed8\u8ba4\u503c\u4e3aREQUIRED--\x3e\n        <tx:attributes>\n            <tx:method name="*"/>\n            <tx:method name="add*" propagation="REQUIRED"/>\n            <tx:method name="delete*" propagation="REQUIRED"/>\n            <tx:method name="query*" read-only="true"/>\n        </tx:attributes>\n    </tx:advice>\n</tx:advice>\n\n\x3c!--    \u914d\u7f6e\u4e8b\u52a1\u5207\u5165 mapper\u5305\u4e0b\u6240\u6709\u7c7b\u6240\u6709\u65b9\u6cd5\u4efb\u610f\u53c2\u6570--\x3e\n<aop:config>\n    <aop:pointcut id="txPointCut" expression="execution(* com.bsx.mapper.*.*(..))"/>\n    <aop:advisor advice-ref="txAdvice" pointcut-ref="txPointCut"/>\n</aop:config>\n')),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"\u6d4b\u8bd5")),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void testMybatis() {\n    ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");\n\n    UserMapper userMapper = context.getBean("userMapper", UserMapper.class);\n    List<User> users = userMapper.queryUser();\n\n    for (User user : users) {\n        System.out.println(user);\n    }\n\n}\n')),Object(p.b)("h3",{id:"212-\u6ce8\u89e3\u5b9e\u73b0"},"2.1.2 \u6ce8\u89e3\u5b9e\u73b0"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"\u5f00\u542f\u4e8b\u52a1\u7ba1\u7406"),Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"\u5f00\u542f\u4e8b\u52a1\u6ce8\u89e3"),Object(p.b)("li",{parentName:"ul"},"\u65e0\u5e8f\u914d\u7f6eaop")),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!--    \u5f00\u542f\u4e8b\u52a1\u7ba1\u7406--\x3e\n<bean id="transactionManager" \n      class="org.springframework.jdbc.datasource.DataSourceTransactionManager">\n    <constructor-arg ref="datasource" />\n</bean>\n\n<tx:annotation-driven transaction-manager="transactionManager"/>\n'))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"\u5728Mapper\u5b9e\u73b0\u7c7b\u4e2d\u4f7f\u7528",Object(p.b)("inlineCode",{parentName:"p"},"@Transactional"),"\u6ce8\u89e3"),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class UserMapperImpl implements UserMapper {\n\n    private SqlSessionTemplate sqlSession;\n\n    //\u7528\u6765\u8ba9Spring\u6ce8\u5165\n    public void setSqlSession(SqlSessionTemplate sqlSession) {\n        this.sqlSession = sqlSession;\n    }\n\n    @Transactional(propagation = Propagation.REQUIRED,\n                   isolation = Isolation.READ_COMMITTED,\n                   readOnly = false)\n    public List<User> queryUser() {\n        User user = new User();\n        user.setId(6);\n        user.setName("\u7b2c\u4e94\u4e2a");\n        user.setPassword("123455");\n\n        UserMapper mapper = sqlSession.getMapper(UserMapper.class);\n        mapper.addUser(user);\n        mapper.deleteUser(6);\n\n        return mapper.queryUser();\n    }\n\n    public int addUser(User user) {\n        UserMapper mapper = sqlSession.getMapper(UserMapper.class);\n        return mapper.addUser(user);\n    }\n\n    public int deleteUser(int id) {\n        UserMapper mapper = sqlSession.getMapper(UserMapper.class);\n        return mapper.deleteUser(id);\n    }\n}\n')))),Object(p.b)("h3",{id:"213-\u4e03\u79cdpropagation\u4e8b\u52a1\u5c5e\u6027"},"2.1.3 \u4e03\u79cdPropagation\u4e8b\u52a1\u5c5e\u6027"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Spring\u4e2dPropagation\u7c7b\u7684\u4e03\u79cd\u4e8b\u52a1\u5c5e\u6027")),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"REQUIRED"),"\uff1a\u652f\u6301\u5f53\u524d\u4e8b\u52a1\uff0c\u5982\u679c\u5f53\u524d\u6ca1\u6709\u4e8b\u52a1\uff0c\u5c31\u65b0\u5efa\u4e00\u4e2a\u4e8b\u52a1\u3002\u5e38\u7528"),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"SUPPORTS"),"\uff1a\u652f\u6301\u5f53\u524d\u4e8b\u52a1\uff0c\u5982\u679c\u5f53\u524d\u6ca1\u6709\u4e8b\u52a1\uff0c\u5c31\u4ee5\u975e\u4e8b\u52a1\u65b9\u5f0f\u6267\u884c"),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"MANDATORY"),"\uff1a\u652f\u6301\u5f53\u524d\u4e8b\u52a1\uff0c\u5982\u679c\u5f53\u524d\u6ca1\u6709\u4e8b\u52a1\uff0c\u5c31\u629b\u51fa\u5f02\u5e38"),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"REQUIRED_NEW"),"\uff1a\u65b0\u5efa\u4e8b\u52a1\uff0c\u5982\u679c\u5f53\u524d\u5b58\u5728\u4e8b\u52a1\uff0c\u628a\u5f53\u524d\u4e8b\u52a1\u6302\u8d77"),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"NOT_SUPPORTED"),"\uff1a\u4ee5\u975e\u4e8b\u52a1\u65b9\u5f0f\u6267\u884c\u64cd\u4f5c\uff0c\u5982\u679c\u5f53\u524d\u5b58\u5728\u4e8b\u52a1\uff0c\u5c31\u628a\u5f53\u524d\u4e8b\u52a1\u6302\u8d77"),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"NEVER"),"\uff1a\u4ee5\u975e\u5b9e\u7269\u65b9\u5f0f\u6267\u884c\uff0c\u5982\u679c\u5f53\u524d\u5b58\u5728\u4e8b\u52a1\uff0c\u5219\u629b\u51fa\u5f02\u5e38"),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"NESTED"),"\uff1a\u652f\u6301\u5f53\u524d\u4e8b\u52a1\uff0c\u5982\u679c\u5f53\u524d\u4e8b\u52a1\u5b58\u5728\uff0c\u5219\u6267\u884c\u4e00\u4e2a\u5d4c\u5957\u4e8b\u52a1\uff0c\u5982\u679c\u5f53\u524d\u6ca1\u6709\u4e8b\u52a1\uff0c\u5c31\u65b0\u5efa\u4e00\u4e2a\u4e8b\u52a1")),Object(p.b)("h3",{id:"214-\u56db\u79cdisolation\u4e8b\u52a1\u9694\u79bb\u5c5e\u6027"},"2.1.4 \u56db\u79cdIsolation\u4e8b\u52a1\u9694\u79bb\u5c5e\u6027"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Spring\u4e2d\u4e8b\u52a1\u7684\u9694\u79bb\u7ea7\u522b\u53ef\u4ee5\u901a\u8fc7\u9694\u79bb\u5c5e\u6027\u6307\u5b9a")),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"DEFAULT"),"\uff1a\u4f7f\u7528\u5e95\u5c42\u6570\u636e\u5e93\u9ed8\u8ba4\u9694\u79bb\u7ea7\u522b\uff0c\u5927\u90e8\u5206\u6570\u636e\u5e93\uff0c\u9ed8\u8ba4\u9694\u79bb\u7ea7\u522b\u4e3aREAD_COMMITED"),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"READ_COMMITED"),"\uff1a\u53ea\u5141\u8bb8\u4e8b\u52a1\u8bfb\u53d6\u5df2\u7ecf\u88ab\u5176\u4ed6\u4e8b\u52a1\u63d0\u4ea4\u7684\u66f4\u6539\uff0c\u53ef\u4ee5\u907f\u514d\u85cf\u72ec\uff0c\u4f46\u4e0d\u53ef\u91cd\u590d\u8bfb\u548c\u5e7b\u8bfb\u95ee\u9898\u4ecd\u7136\u53ef\u80fd\u51fa\u73b0"),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"READ_UNCOMMITED"),"\uff1a\u5141\u8bb8\u4e8b\u52a1\u8bfb\u53d6\u672a\u88ab\u5176\u4ed6\u4e8b\u52a1\u63d0\u4ea4\u7684\u66f4\u6539\u3002\u810f\u8bfb\uff0c\u4e0d\u53ef\u91cd\u590d\u8bfb\uff0c\u5e7b\u8bfb\u90fd\u6709\u53ef\u80fd\u51fa\u73b0"),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"REPEATABLE_READ"),"\uff1a\u786e\u4fdd\u4e8b\u52a1\u53ef\u4ee5\u591a\u6b21\u4ece\u4e00\u4e2a\u5b57\u6bb5\u4e2d\u8bfb\u53d6\u76f8\u540c\u7684\u503c\u3002\u5728\u8fd9\u4e2a\u4e8b\u52a1\u6301\u7eed\u671f\u95f4\uff0c\u7981\u6b62\u5176\u4ed6\u4e8b\u52a1\u5bf9\u8fd9\u4e2a\u5b57\u6bb5\u8fdb\u884c\u66f4\u65b0\uff0c\u53ef\u4ee5\u907f\u514d\u810f\u8bfb\u548c\u4e0d\u53ef\u91cd\u590d\u8bfb\uff0c\u4f46\u662f\u5e7b\u8bfb\u7684\u95ee\u9898\u4f9d\u7136\u5b58\u5728"),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"SERIALIZABLE"),"\uff1a\u786e\u4fdd\u4e8b\u52a1\u53ef\u4ee5\u4ece\u4e00\u4e2a\u8868\u4e2d\u8bfb\u53d6\u76f8\u540c\u7684\u884c\uff0c\u5728\u8fd9\u4e2a\u4e8b\u52a1\u6301\u7eed\u671f\u95f4\uff0c\u7981\u6b62\u5176\u4ed6\u4e8b\u52a1\u5bf9\u8be5\u8868\u6267\u884c\u63d2\u5165\uff0c\u66f4\u65b0\uff0c\u5220\u9664\u3002\u6240\u6709\u7684\u5e76\u53d1\u95ee\u9898\u90fd\u80fd\u907f\u514d\uff0c\u4f46\u662f\u6027\u80fd\u6bd4\u8f83\u4f4e\u3002")),Object(p.b)("h2",{id:"22-\u7f16\u7a0b\u5f0f\u4e8b\u52a1\uff08\u4ee3\u7801\u7ba1\u7406\uff09"},"2.2 \u7f16\u7a0b\u5f0f\u4e8b\u52a1\uff08\u4ee3\u7801\u7ba1\u7406\uff09"),Object(p.b)("p",null,"\u9700\u8981\u6539\u53d8\u539f\u6709\u4ee3\u7801\uff08\u7565\uff09"))}b.isMDXComponent=!0},564:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),b=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},o=function(e){var n=b(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),o=b(t),m=r,d=o["".concat(i,".").concat(m)]||o[m]||u[m]||p;return t?a.a.createElement(d,s(s({ref:n},c),{},{components:t})):a.a.createElement(d,s({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,i=new Array(p);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<p;c++)i[c]=t[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);