(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(386)),l={id:"1.mybatis",title:"Mybatis\u5feb\u901f\u5165\u95e8",hide_title:!0},b={unversionedId:"mybatis/1.mybatis",id:"mybatis/1.mybatis",isDocsHomePage:!1,title:"Mybatis\u5feb\u901f\u5165\u95e8",description:"Mybatis\u5feb\u901f\u5165\u95e8",source:"@site/docs/mybatis/1.mybatis\u5feb\u901f\u5165\u95e8.md",slug:"/mybatis/1.mybatis",permalink:"/docs/mybatis/1.mybatis",version:"current",sidebar:"someSidebar",previous:{title:"\u58f0\u660e\u5f0f\u4e8b\u52a1",permalink:"/docs/spring/13.springTransaction"},next:{title:"CRUD",permalink:"/docs/mybatis/2.crud"}},c=[{value:"Mybatis\u5feb\u901f\u5165\u95e8",id:"mybatis\u5feb\u901f\u5165\u95e8",children:[{value:"Mybatis-9.28",id:"mybatis-928",children:[]},{value:"1. \u7b80\u4ecb",id:"1-\u7b80\u4ecb",children:[{value:"1.1 \u4ec0\u4e48\u662fMybatis",id:"11-\u4ec0\u4e48\u662fmybatis",children:[]},{value:"1.2 \u6301\u4e45\u5316",id:"12-\u6301\u4e45\u5316",children:[]},{value:"1.3 \u6301\u4e45\u5c42",id:"13-\u6301\u4e45\u5c42",children:[]},{value:"1.4 \u4e3a\u4ec0\u4e48\u9700\u8981Mybatis",id:"14-\u4e3a\u4ec0\u4e48\u9700\u8981mybatis",children:[]}]},{value:"2. \u7b2c\u4e00\u4e2aMybatis\u7a0b\u5e8f",id:"2-\u7b2c\u4e00\u4e2amybatis\u7a0b\u5e8f",children:[{value:"2.1 \u642d\u5efa\u73af\u5883",id:"21-\u642d\u5efa\u73af\u5883",children:[]},{value:"2.2 \u521b\u5efa\u4e00\u4e2a\u6a21\u5757(\u7236\u5de5\u7a0b\u4e0b\u7684\u5b50\u5de5\u7a0b)",id:"22-\u521b\u5efa\u4e00\u4e2a\u6a21\u5757\u7236\u5de5\u7a0b\u4e0b\u7684\u5b50\u5de5\u7a0b",children:[]},{value:"2.3 \u7f16\u5199\u4ee3\u7801",id:"23-\u7f16\u5199\u4ee3\u7801",children:[]},{value:"2.4 \u6d4b\u8bd5",id:"24-\u6d4b\u8bd5",children:[]}]},{value:"\u53ef\u80fd\u51fa\u73b0\u7684\u95ee\u9898",id:"\u53ef\u80fd\u51fa\u73b0\u7684\u95ee\u9898",children:[]}]}],s={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"mybatis\u5feb\u901f\u5165\u95e8"},"Mybatis\u5feb\u901f\u5165\u95e8"),Object(i.b)("h2",{id:"mybatis-928"},"Mybatis-9.28"),Object(i.b)("p",null,"\u73af\u5883\uff1a\t"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"jdk1.8"),Object(i.b)("li",{parentName:"ul"},"Mysql5.7"),Object(i.b)("li",{parentName:"ul"},"maven 3.6.1"),Object(i.b)("li",{parentName:"ul"},"IDEA")),Object(i.b)("p",null,"\u56de\u987e\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"JDBC"),Object(i.b)("li",{parentName:"ul"},"Mysql"),Object(i.b)("li",{parentName:"ul"},"JavaSE&JavaEE"),Object(i.b)("li",{parentName:"ul"},"Maven"),Object(i.b)("li",{parentName:"ul"},"Junit")),Object(i.b)("p",null,"SSM\u6846\u67b6\uff1a\u5b66\u4e60\u914d\u7f6e\u6587\u4ef6\u7684\u6700\u597d\u65b9\u5f0f\uff0c\u770b\u5b98\u65b9\u6587\u6863"),Object(i.b)("h2",{id:"1-\u7b80\u4ecb"},"1. \u7b80\u4ecb"),Object(i.b)("h3",{id:"11-\u4ec0\u4e48\u662fmybatis"},"1.1 \u4ec0\u4e48\u662fMybatis"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u4f18\u79c0\u7684\u6301\u4e45\u5c42\u6846\u67b6")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u652f\u6301\u5b9a\u5236SQL\u3001\u5b58\u50a8\u8fc7\u7a0b\u4ee5\u53ca\u9ad8\u7ea7\u6620\u5c04")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u907f\u514d\u51e0\u4e4e\u6240\u6709JDBC\u4ee3\u7801\u548c\u624b\u52a8\u8bbe\u7f6e\u53c2\u6570\u548c\u83b7\u53d6\u7ed3\u679c\u96c6")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u4f7f\u7528XML\u6216\u6ce8\u89e3\u6765\u914d\u7f6e\u548c\u6620\u5c04\u539f\u751f\u7c7b\u578b\u3001\u63a5\u53e3\u548cJava\u7684POJO(Plian Old Java Objects\uff0c\u666e\u901a\u8001\u5f0f(java\u5bf9\u8c61)\u4e3a\u6570\u636e\u5e93\u4e2d\u7684\u8bb0\u5f55")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"apche\u5f00\u6e90\u9879\u76eeIbatis\uff0c\u8fc1\u79fb\u5230google code, 2013.11\u8fc1\u79fb\u5230github"))),Object(i.b)("p",null,"\u5982\u4f55\u83b7\u5f97Mybatis:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Maven\u4e2d\u592e\u4ed3\u5e93"),Object(i.b)("li",{parentName:"ul"},"Github"),Object(i.b)("li",{parentName:"ul"},"\u4e2d\u6587\u6587\u6863\uff1a",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://mybatis.org/mybatis-3/zh/index.html"}),"https://mybatis.org/mybatis-3/zh/index.html"))),Object(i.b)("h3",{id:"12-\u6301\u4e45\u5316"},"1.2 \u6301\u4e45\u5316"),Object(i.b)("p",null,"\u6570\u636e\u6301\u4e45\u5316"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u6301\u4e45\u5316\u5c31\u662f\u5c06\u7a0b\u5e8f\u7684\u6570\u636e\u5728\u6301\u4e45\u72b6\u6001\u548c\u77ac\u65f6\u72b6\u6001\u8f6c\u5316\u7684\u8fc7\u7a0b"),Object(i.b)("li",{parentName:"ul"},"\u5185\u5b58\uff1a\u65ad\u7535\u5373\u5931"),Object(i.b)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u3001IO\u6587\u4ef6\u6301\u4e45\u5316")),Object(i.b)("h3",{id:"13-\u6301\u4e45\u5c42"},"1.3 \u6301\u4e45\u5c42"),Object(i.b)("p",null,"Dao\u5c42\u3001Service\u5c42\u3001Controller\u5c42"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5b8c\u6210\u6301\u4e45\u5316\u5de5\u4f5c\u7684\u4ee3\u7801\u5757"),Object(i.b)("li",{parentName:"ul"},"\u5c42\u754c\u9650\u660e\u663e")),Object(i.b)("h3",{id:"14-\u4e3a\u4ec0\u4e48\u9700\u8981mybatis"},"1.4 \u4e3a\u4ec0\u4e48\u9700\u8981Mybatis"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u4f20\u7edf\u7684JDBC\u8fc7\u4e8e\u590d\u6742\u3002\u7b80\u5316\u3002\u6846\u67b6\u3002"),Object(i.b)("li",{parentName:"ul"},"\u5e2e\u52a9\u7a0b\u5e8f\u5458\u5c06\u6570\u636e\u5b58\u5165\u5230\u6570\u636e\u5e93\u4e2d"),Object(i.b)("li",{parentName:"ul"},"\u4e0d\u7528Mybatis\u4e5f\u53ef\u4ee5"),Object(i.b)("li",{parentName:"ul"},"SQL\u548c\u4ee3\u7801\u5206\u79bb"),Object(i.b)("li",{parentName:"ul"},"\u63d0\u4f9b\u6620\u5c04\u6807\u7b7e\u3001\u8fd9\u652f\u6301\u5bf9\u8c61\u4e0e\u6570\u636e\u5e93\u7684orm\u5b57\u6bb5\u6620\u5c04"),Object(i.b)("li",{parentName:"ul"},"\u63d0\u4f9b\u5bf9\u8c61\u5173\u7cfb\u6620\u5c04\u6807\u7b7e\uff0c\u652f\u6301\u5bf9\u8c61\u5173\u7cfb\u7ec4\u7ef4\u62a4"),Object(i.b)("li",{parentName:"ul"},"\u63d0\u4f9bxml\u6807\u7b7e\uff0c\u652f\u6301\u7f16\u5199\u52a8\u6001sql")),Object(i.b)("p",null,"\u6700\u91cd\u8981\u7684\u4e00\u70b9\uff1a\u7528\u7684\u4eba\u591a"),Object(i.b)("h2",{id:"2-\u7b2c\u4e00\u4e2amybatis\u7a0b\u5e8f"},"2. \u7b2c\u4e00\u4e2aMybatis\u7a0b\u5e8f"),Object(i.b)("p",null,"\u601d\u8def\uff1a\u642d\u5efa\u73af\u5883 -> \u5bfc\u5165Mybatis -> \u7f16\u5199\u4ee3\u7801 -> \u6d4b\u8bd5"),Object(i.b)("h3",{id:"21-\u642d\u5efa\u73af\u5883"},"2.1 \u642d\u5efa\u73af\u5883"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u642d\u5efa\u6570\u636e\u5e93")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE USER(\n    id INT PRIMARY KEY AUTO_INCREMENT,\n    NAME VARCHAR(30) DEFAULT NULL,\n    PASSWORD VARCHAR(20) DEFAULT NULL\n)ENGINE=INNODB DEFAULT CHARSET=utf8;\n\nINSERT INTO USER (id,NAME,PASSWORD) VALUES \n(NULL,'\u72c2\u795e1','123456'),\n(NULL,'\u72c2\u795e2','123456'),\n(NULL,'\u72c2\u795e3','123456');\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u65b0\u5efa\u9879\u76ee\uff0c\u5bfc\u5165Jar\u5305")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\uff08SSM/Mybatis/project/MybatisFirst\uff09")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u65b0\u5efa\u4e00\u4e2a\u666e\u901amaven\u9879\u76ee")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5220\u9664src\u76ee\u5f55\uff0c\u5c31\u53ef\u4ee5\u5f53\u4e00\u4e2a\u7236\u5de5\u7a0b\u7528")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5bfc\u5165\u4ee5\u6765"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Mybatis"),Object(i.b)("li",{parentName:"ul"},"sql\u9a71\u52a8"),Object(i.b)("li",{parentName:"ul"},"junit")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),"\x3c!--    mysql--\x3e\n<dependency>\n    <groupId>mysql</groupId>\n    <artifactId>mysql-connector-java</artifactId>\n    <version>5.1.46</version>\n</dependency>\n\x3c!--    mysql--\x3e\n\n\x3c!-- mybatis  --\x3e\n<dependency>\n    <groupId>org.mybatis</groupId>\n    <artifactId>mybatis</artifactId>\n    <version>3.5.2</version>\n</dependency>\n\x3c!-- mybatis  --\x3e\n\n\x3c!-- junit--\x3e\n<dependency>\n    <groupId>junit</groupId>\n    <artifactId>junit</artifactId>\n    <version>4.12</version>\n    <scope>test</scope>\n</dependency>\n\x3c!-- junit--\x3e\n")))),Object(i.b)("h3",{id:"22-\u521b\u5efa\u4e00\u4e2a\u6a21\u5757\u7236\u5de5\u7a0b\u4e0b\u7684\u5b50\u5de5\u7a0b"},"2.2 \u521b\u5efa\u4e00\u4e2a\u6a21\u5757(\u7236\u5de5\u7a0b\u4e0b\u7684\u5b50\u5de5\u7a0b)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5728\u7236\u5de5\u7a0b\u4e2d\u5bfc\u5165\u4e86\u5750\u6807\uff0c\u6240\u6709\u5b50\u6a21\u5757\u4e0d\u5fc5\u518d\u5bfc")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u7f16\u5199Mybatis\u7684\u6838\u5fc3\u914d\u7f6e\u6587\u4ef6\n\u6254\u5230src-main-resources\u4e0b"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u6587\u4ef6\u540d\tmybatis-config.xml")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5185\u5bb9        \u5b98\u65b9\u6587\u6863\u91cc\u6709"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8" ?>\n<!DOCTYPE configuration\n        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"\n        "http://mybatis.org/dtd/mybatis-3-config.dtd">\n<configuration>\n    <environments default="development">\n        <environment id="development">\n            <transactionManager type="JDBC"/>\n            <dataSource type="POOLED">\n                <property name="driver" value="com.mysql.jdbc.Driver"/>\n                <property name="url" value="jdbc:mysql://localhost:3306/test?useSSL=false&amp;useUnicode=true&amp;characterEncoding=UTF-8"/>\n                <property name="username" value="root"/>\n                <property name="password" value="root"/>\n            </dataSource>\n        </environment>\n    </environments>\n\n\x3c!--    \u6bcf\u4e00\u4e2amapper.xml\u90fd\u9700\u8981\u5728mybatis\u6838\u5fc3xml\u4e2d\u6ce8\u518c--\x3e\n    <mappers>\n        <mapper resource="com/bsx/dao/UserMapper.xml"/>\n    </mappers>\n\x3c!--    \u6bcf\u4e00\u4e2amapper.xml\u90fd\u9700\u8981\u5728mybatis\u6838\u5fc3xml\u4e2d\u6ce8\u518c--\x3e\n</configuration>\n'))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u7f16\u5199mybatis\u5de5\u5177\u7c7b"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'/***\n *  \u5de5\u5382\u6a21\u5f0f\n *  sqlSessionFactory -> sqlSession\n */\npublic class MybatisUtils {\n    private static SqlSessionFactory sqlSessionFactory;\n\n    static {\n        try {\n            //\u83b7\u53d6sqlSessionFactory\u5bf9\u8c61\n            String resource = "mybatis-config.xml";\n            InputStream inputStream = Resources.getResourceAsStream(resource);\n            sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n\n    /***\n     *    \u4ecesqlSessionFactory\u91cc\u83b7\u53d6sqlSession \u76f8\u5f53\u4e8ejdbc\u7684PreparedStatement\n     */\n    public static SqlSession getSqlSession() {\n        return sqlSessionFactory.openSession();\n    }\n}\n')),Object(i.b)("h3",{id:"23-\u7f16\u5199\u4ee3\u7801"},"2.3 \u7f16\u5199\u4ee3\u7801"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5b9e\u4f53\u7c7bPojo(\u5077\u61d2\u4f7f\u7528lombok)"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"@Data\n@AllArgsConstructor\n@NoArgsConstructor\npublic class User implements Serializable {\n    private int id;\n    private String name;\n    private String password;\n}\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Dao\u63a5\u53e3(Mapper)"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public interface IUserDao {\n    List<User> getUserList();\n}\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u63a5\u53e3\u5b9e\u73b0\u7c7b -> \u6620\u5c04\u914d\u7f6e\u6587\u4ef6 (\u73b0\u5728Dao(Mapper)\u76ee\u5f55\u4e0b)\n",Object(i.b)("strong",{parentName:"p"},"\u5728JDBC\u4e2d\uff0c\u4f1a\u5728\u5b9e\u73b0\u7c7b\u4e2d\u5199\u6570\u636e\u5e93\u4ee3\u7801"),"\uff0c\n",Object(i.b)("strong",{parentName:"p"},"Mybatis\u907f\u514d\u51e0\u4e4e\u6240\u6709JDBC\u4ee3\u7801\u548c\u624b\u52a8\u8bbe\u7f6e\u53c2\u6570\u548c\u83b7\u53d6\u7ed3\u679c\u96c6")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u65b0\u5efaUserMapper.xml "),Object(i.b)("li",{parentName:"ul"},"\u5185\u5bb9\uff1a\u5b98\u65b9\u6587\u6863\u6709")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8" ?>\n<!DOCTYPE mapper\n        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"\n        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n\n\x3c!--\n\u7ed1\u5b9a\u4e00\u4e2a\u5bf9\u5e94\u7684Dao\u63a5\u53e3(Mapper)\n\u76f8\u5f53\u4e8e\u5e2e\u6211\u4eec\u5b9e\u73b0\u63a5\u53e3\n\n<mapper>\u6807\u7b7e\u4e0b\u4e00\u5171\u53ea\u6709\u51e0\u4e2a\u6807\u7b7e\uff0c\u5305\u62ec\u4e86\u5e38\u7528\u7684CRUD\n - id: \u65b9\u6cd5\u540d (\u76f8\u5f53\u4e8e\u5b9e\u73b0\u7c7b\u91cd\u5199\u65b9\u6cd5)\n        \u5bf9\u4e8e\u5b9e\u73b0\u7c7b\uff1a\u63a5\u4e0b\u6765\u5e94\u5f53\u7f16\u5199sql\u7136\u540e\u653e\u5230preparedStatement\u4e2d\u6267\u884c\n        \u518d\u63a5\u6536\u7ed3\u679c\u96c6\n        Mybatis\u4e2d\u914d\u7f6e\u597d\uff0c\u81ea\u52a8\u6254\u7ed9sqlSession\u6267\u884csql\n - select\u6807\u7b7e\u4e0b\u7684\u5176\u4ed6\u5c5e\u6027\n     - resultType: \u8fd4\u56de\u4e00\u4e2a\uff0c\u5b9e\u4f53\u7c7b\u7c7b\u578b\n     - resultMap:  \u8fd4\u56de\u591a\u4e2a\uff0c\u5c01\u88c5\u4e3a\u96c6\u5408\n--\x3e\n<mapper namespace="com.bsx.dao.IUserDao">\n  <select id="getUserList" resultType="com.bsx.pojo.User">\n      SELECT * FROM USER;\n  </select>\n</mapper>\n')))),Object(i.b)("h3",{id:"24-\u6d4b\u8bd5"},"2.4 \u6d4b\u8bd5"),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u6ce8\u610f\uff1a\u9700\u8981\u5728mybatis\u6838\u5fc3xml\u6587\u4ef6\u4e2d\uff0c\u6ce8\u518cmapper\u7684xml\u6587\u4ef6\uff0c\u5426\u5219\u4f1a\u51fa\u73b0\u4ee5\u4e0b\u5f02\u5e38"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"org.apache.ibatis.binding.BindingException: \nType interface com.bsx.dao.IUserDao is not known to the MapperRegistry.\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!--    \u6bcf\u4e00\u4e2amapper.xml\u90fd\u9700\u8981\u5728mybatis\u6838\u5fc3xml\u4e2d\u6ce8\u518c--\x3e\n    <mappers>\n        <mapper resource="com/bsx/dao/UserMapper.xml"/>\n    </mappers>\n\x3c!--    \u6bcf\u4e00\u4e2amapper.xml\u90fd\u9700\u8981\u5728mybatis\u6838\u5fc3xml\u4e2d\u6ce8\u518c--\x3e\n')),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u6ce8\u610f\uff1a\u7531\u4e8emaven\u7ea6\u5b9a\u5927\u4e8e\u914d\u7f6e\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6240\u5199\u914d\u7f6e\u6587\u4ef6\u65e0\u6cd5\u5bfc\u51fa\u6216\u8005\u751f\u6548\u7684\u95ee\u9898\uff0c\u89e3\u51b3\u65b9\u6848"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),"\x3c!-- \u4fee\u6539pom.xml,\u5728build\u4e2d\u914d\u7f6eresource\u8d44\u6e90\u8fc7\u6ee4\uff0c\u6765\u9632\u6b62\u6211\u4eec\u7684\u8d44\u6e90\u5bfc\u51fa\u5931\u8d25 --\x3e\n\x3c!-- \u626b\u63cfsrc/main/resources\u4e0b\u548csrc/main/java\u4e0b\u7684\u6240\u6709properties\u548cxml\u6587\u4ef6--\x3e\n\x3c!-- \u6211\u8fd9\u91cc\u6dfb\u52a0\u5728\u7236\u5de5\u7a0b\u7684pom.xml\u4e2d\u5c31\u6210\u529f\u4e86\uff0c\u5982\u679c\u4e0d\u6210\u529f\u53ef\u4ee5\u5728\u5b50\u6a21\u5757\u7684pom.xml\u91cc\u4e5f\u6765\u4e00\u4efd --\x3e \n<build>\n    <resources>\n        <resource>\n            <directory>src/main/resources</directory>\n            <includes>\n                <include>**/*.properties</include>\n                <include>**/*.xml</include>\n            </includes>\n            <filtering>true</filtering>\n        </resource>\n        <resource>\n            <directory>src/main/java</directory>\n            <includes>\n                <include>**/*.properties</include>\n                <include>**/*.xml</include>\n            </includes>\n            <filtering>true</filtering>\n        </resource>\n    </resources>\n</build>\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Junit\u5355\u5143\u6d4b\u8bd5")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class UserDaoTest {\n\n    /***\n     * \u5728JDBC\u4e2d,\u83b7\u53d6preparedStatement\u7136\u540e\u6267\u884csql\n     *\n     * \u5728Mybatis\u4e2d\uff0c\u83b7\u53d6sqlSession\n     *     - \u5229\u7528\u5148\u524d\u7f16\u5199\u597d\u7684\u5de5\u5177\u7c7b\uff0c\u83b7\u53d6sqlSession\n     *     - \u7528sqlSession\u6267\u884csql\u8bed\u53e5\uff0c\u4e3a\u6b64\u9700\u8981\u83b7\u53d6\u7f16\u5199\u597d\u7684IUserDao\u5bf9\u8c61,\u4f20\u5165\u5b57\u8282\u7801\u6587\u4ef6\n     */\n    @Test\n    public void test() {\n        //1. \u83b7\u53d6sqlSession\u5bf9\u8c61\n        SqlSession sqlSession = MybatisUtils.getSqlSession();\n\n        //2. \u6267\u884csql,getMapper\u4f20\u5165\u63a5\u53e3\u5b57\u8282\u7801\n        IUserDao mapper = sqlSession.getMapper(IUserDao.class);\n        // 3. \u65b9\u5f0f\u4e00:getMapper\n        // 3. \u8c03\u7528\u65b9\u6cd5\u65f6\u4f1a\u8dd1\u5230\u63a5\u53e3\u5bf9\u5e94\u7684Mapper.xml\u6587\u4ef6\u4e2d\uff0c\u6309\u7167Mapper\u6807\u7b7e\u5185\u914d\u7f6e\u7684sql\u8bed\u53e5\u8fdb\u884c\u6267\u884c\n        List<User> userList = mapper.getUserList();\n\n        for (User user : userList) {\n            System.out.println(user);\n        }\n        \n        // \u65b9\u5f0f\u4e8c\uff0c\u4e0d\u63a8\u8350\n        /*List<User> userList1 =    sqlSession.selectList("com.bsx.dao.IUserDao.getUserList");\n        \n        for (User user : userList1) {\n            System.out.println(user);\n        }*/\n\n        //4,\u5173\u95edsqlSesuin\n        sqlSession.close();\n    }\n}\n')),Object(i.b)("h2",{id:"\u53ef\u80fd\u51fa\u73b0\u7684\u95ee\u9898"},"\u53ef\u80fd\u51fa\u73b0\u7684\u95ee\u9898"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u914d\u7f6e\u6587\u4ef6\u6ca1\u6709\u6ce8\u518c"),Object(i.b)("li",{parentName:"ol"},"\u7ed1\u5b9a\u63a5\u53e3\u9519\u8bef -> \u8981\u5199\u5168\u9650\u5b9a\u7c7b\u540d"),Object(i.b)("li",{parentName:"ol"},"\u65b9\u6cd5\u540d\u4e0d\u5bf9"),Object(i.b)("li",{parentName:"ol"},"\u8fd4\u56de\u7c7b\u578b\u4e0d\u5bf9 -> \u8981\u5199\u5b9e\u4f53\u7c7b\u7684\u5168\u9650\u5b9a\u7c7b\u540d"),Object(i.b)("li",{parentName:"ol"},"Maven\u5bfc\u51fa\u8d44\u6e90\u95ee\u9898"),Object(i.b)("li",{parentName:"ol"},"\u6570\u636e\u5e93,useSSL=true\u53ef\u80fd\u4f1a\u5931\u8d25\uff0c\u7528useSSL=false"),Object(i.b)("li",{parentName:"ol"},"\u786e\u4fddxml\u6587\u4ef6\uff0cidea\u5168\u5c40\uff0cidea\u5f53\u524d\u6587\u4ef6\u5168\u90e8\u91c7\u7528\u7edf\u4e00\u7f16\u7801(\u63a8\u8350utf-8)\n\u786e\u4fdd\u4e0d\u4e86\u5c31\u4e0d\u8981\u5728\u7236\u5de5\u7a0b\u7684pom.xml\u4e2d\u5199\u4e2d\u6587\u6ce8\u91ca")))}p.isMDXComponent=!0},386:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},o=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),o=p(n),u=a,O=o["".concat(l,".").concat(u)]||o[u]||m[u]||i;return n?r.a.createElement(O,b(b({ref:t},s),{},{components:n})):r.a.createElement(O,b({ref:t},s))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var s=2;s<i;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);