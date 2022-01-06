(window.webpackJsonp=window.webpackJsonp||[]).push([[426],{482:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return c}));var a=n(2),l=n(6),r=(n(0),n(572)),i={id:"11.dynamicSQL",title:"\u52a8\u6001SQL",hide_title:!0},p={unversionedId:"mybatis/11.dynamicSQL",id:"mybatis/11.dynamicSQL",isDocsHomePage:!1,title:"\u52a8\u6001SQL",description:"\u52a8\u6001SQL",source:"@site/docs/mybatis/11.\u52a8\u6001SQL.md",slug:"/mybatis/11.dynamicSQL",permalink:"/docs/mybatis/11.dynamicSQL",version:"current",sidebar:"someSidebar",previous:{title:"\u4e00\u5bf9\u591a",permalink:"/docs/mybatis/10.oneToMulti"},next:{title:"Mybatis\u7f13\u5b58",permalink:"/docs/mybatis/12.cache"}},o=[{value:"\u52a8\u6001SQL",id:"\u52a8\u6001sql",children:[{value:"1. \u73af\u5883\u642d\u5efa",id:"1-\u73af\u5883\u642d\u5efa",children:[]},{value:"2. \u52a8\u6001SQL\u4e4bIF\u8bed\u53e5",id:"2-\u52a8\u6001sql\u4e4bif\u8bed\u53e5",children:[]},{value:"3. \u52a8\u6001SQL\u4e4b\u5e38\u7528\u6807\u7b7e",id:"3-\u52a8\u6001sql\u4e4b\u5e38\u7528\u6807\u7b7e",children:[{value:"3.1 trim(where, set)",id:"31-trimwhere-set",children:[]},{value:"3.2 choose, when, otherwise",id:"32-choose-when-otherwise",children:[]}]},{value:"4. SQL\u7247\u6bb5",id:"4-sql\u7247\u6bb5",children:[]},{value:"5. \u52a8\u6001SQL\u4e4bForeach",id:"5-\u52a8\u6001sql\u4e4bforeach",children:[]}]}],b={rightToc:o};function c(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"\u52a8\u6001sql"},"\u52a8\u6001SQL"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u4ec0\u4e48\u662f\u52a8\u6001SQL: \u5c31\u662f\u6307\u6839\u636e\u4e0d\u540c\u7684\u6761\u4ef6\u751f\u6210\u4e0d\u540c\u7684SQL\u8bed\u53e5")),Object(r.b)("p",null,"\u6240\u8c13\u7684\u52a8\u6001SQL\u672c\u8d28\u8fd8\u662fSQL\u8bed\u53e5\uff0c\u53ea\u662f\u6211\u4eec\u53ef\u4ee5\u5728SQL\u5c42\u9762\u6267\u884c\u4e00\u4e9b\u903b\u8f91\u4ee3\u7801"),Object(r.b)("h2",{id:"1-\u73af\u5883\u642d\u5efa"},"1. \u73af\u5883\u642d\u5efa"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"create table blog(\n    id varchar(50) not null comment '\u535a\u5ba2id',\n    title varchar(100) not null comment '\u535a\u5ba2\u6807\u9898',\n    author varchar(30) not null comment '\u535a\u5ba2\u4f5c\u8005',\n    create_time datetime not null comment '\u521b\u5efa\u65f6\u95f4',\n    views int(30) not null comment '\u6d4f\u89c8\u91cf'\n)ENGINE = INNODB default charset = utf8;\n")),Object(r.b)("p",null,"\u521b\u5efa\u4e00\u4e2a\u57fa\u7840\u5de5\u7a0bmybatis08"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"\u5bfc\u5305")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"\u7f16\u5199\u914d\u7f6e\u6587\u4ef6")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"\u7f16\u5199\u5b9e\u4f53\u7c7b"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"@Data\npublic class Blog {\n    private String id;\n    private String titile;\n    private String author;\n    private Date createTime;\n    private int views;\n}\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"\u7f16\u5199\u5b9e\u4f53\u7c7b\u5bf9\u5e94\u7684Mapper\u63a5\u53e3\u548cmapper.xml\u6587\u4ef6"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"//\u63d2\u5165\u6570\u636e\n    int addBlog(Blog blog);\n")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<mapper namespace="com.bsx.dao.BlogMapper">\n<insert id="addBlog" parameterType="com.bsx.pojo.Blog">\n    insert into blog (id, title, author, create_time, views)\n    values (#{id}, #{title} , #{author}, #{createTime}, #{views});\n</insert>\n</mapper>\n'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"\u7f16\u5199IDUtils\u5de5\u5177\u7c7b"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class IDUtils {\n    public static String getUUID() {\n        return UUID.randomUUID().toString().replace("-", "");\n    }\n}\n')),Object(r.b)("ol",Object(a.a)({parentName:"li"},{start:6}),Object(r.b)("li",{parentName:"ol"},"\u5f00\u542f\u9a7c\u5cf0\u547d\u540d\u6620\u5c04\n\u5728\u6838\u5fc3\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e",Object(r.b)("inlineCode",{parentName:"li"},"settings"),"\u5f00\u542f",Object(r.b)("inlineCode",{parentName:"li"},"mapUnderscoreToCamelCase"))),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<settings>\n    <setting name="logImpl" value="LOG4J"/>\n    <setting name="mapUnderscoreToCamelCase" value="true"/>\n</settings>\n')),Object(r.b)("ol",Object(a.a)({parentName:"li"},{start:7}),Object(r.b)("li",{parentName:"ol"},"\u6d4b\u8bd5")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void testInsert() throws IOException {\n    InputStream inputStream = Resources.getResourceAsStream("mybatis-config.xml");\n    SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);\n    SqlSession sqlSession = sqlSessionFactory.openSession(true);\n\n    try {\n        BlogMapper mapper = sqlSession.getMapper(BlogMapper.class);\n        Blog blog = new Blog();\n        blog.setId(IDUtils.getUUID());\n        blog.setAuthor("bsx");\n        blog.setTitle("Title 1");\n        blog.setCreateTime(new Date());\n        blog.setViews(9999);\n\n        mapper.addBlog(blog);\n\n        blog.setId(IDUtils.getUUID());\n        blog.setTitle("Title 2");\n        blog.setCreateTime(new Date());\n\n        mapper.addBlog(blog);\n\n        blog.setId(IDUtils.getUUID());\n        blog.setTitle("Title 3");\n        blog.setCreateTime(new Date());\n\n        mapper.addBlog(blog);\n\n    } catch (Exception e) {\n        e.printStackTrace();\n    } finally {\n        sqlSession.close();\n    }\n}\n')))),Object(r.b)("h2",{id:"2-\u52a8\u6001sql\u4e4bif\u8bed\u53e5"},"2. \u52a8\u6001SQL\u4e4bIF\u8bed\u53e5"),Object(r.b)("p",null,"\u5982\u679c\u4f20\u4e86\u4f5c\u8005\u5c31\u6309\u4f5c\u8005\u67e5\uff0c\u5982\u679c\u4f20\u4e86\u6807\u9898\u5c31\u6309\u6807\u9898\u67e5\uff0c\u5982\u679c\u5565\u4e5f\u6ca1\u4f20\u5c31\u67e5\u6240\u6709"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u63a5\u53e3"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"//\u67e5\u8be2\u535a\u5ba2\nList<Blog> queryBlogIF(Map map);\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"mapper.xml"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<select id="queryBlogIF" resultType="com.bsx.pojo.Blog" parameterType="map">\n    select * from blog where 1=1\n    <if test="title != null">\n        and title = #{title}\n    </if>\n    <if test="author != null">\n        and author = #{author}\n    </if>\n</select>\n')))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u6d4b\u8bd5"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void testQueryBlogIF() throws IOException {\n    InputStream inputStream = Resources.getResourceAsStream("mybatis-config.xml");\n    SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);\n    SqlSession sqlSession = sqlSessionFactory.openSession(true);\n\n    try {\n        BlogMapper mapper = sqlSession.getMapper(BlogMapper.class);\n\n        //1. \u5565\u4e5f\u4e0d\u4f20\n        Map map = new HashMap();\n\n        //\u67e5\u51fa\u6240\u6709blog\n        List<Blog> blogs = mapper.queryBlogIF(map);\n        for (Blog blog : blogs) {\n            System.out.println(blog);\n        }\n\n        //2. \u4f20title\n        map.put("title", "Title 1");\n\n        //Blog(id=ac6d574b9f0a4dbe9ecb8a9ce433a461, title=Title 1, author=bsx, createTime=Thu Mar 19 20:38:00 CST 2020, views=9999)\n        blogs = mapper.queryBlogIF(map);\n        for (Blog blog : blogs) {\n            System.out.println(blog);\n        }\n\n        map.put("author", "bsx");\n\n        //Blog(id=ac6d574b9f0a4dbe9ecb8a9ce433a461, title=Title 1, author=bsx, createTime=Thu Mar 19 20:38:00 CST 2020, views=9999)\n        blogs = mapper.queryBlogIF(map);\n        for (Blog blog : blogs) {\n            System.out.println(blog);\n        }\n\n    } catch (Exception e) {\n        e.printStackTrace();\n    } finally {\n        sqlSession.close();\n    }\n}\n')))),Object(r.b)("h2",{id:"3-\u52a8\u6001sql\u4e4b\u5e38\u7528\u6807\u7b7e"},"3. \u52a8\u6001SQL\u4e4b\u5e38\u7528\u6807\u7b7e"),Object(r.b)("h3",{id:"31-trimwhere-set"},"3.1 trim(where, set)"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},'where\u5143\u7d20\u53ea\u4f1a\u5728\u81f3\u5c11\u6709\u4e00\u4e2a\u5b50\u5143\u7d20\u7684\u6761\u4ef6\u8fd4\u56desql\u5b50\u53e5\u7684\u60c5\u51b5\u4e0b\u624d\u53bb\u63d2\u5165"WHERE"\u5b50\u53e5\u3002\u800c\u4e14\uff0c\u82e5\u8bed\u53e5\u5f00\u5934\u4e3a"AND"\u6216\u8005"OR"\uff0cwhere\u5143\u7d20\u4e5f\u4f1a\u5c06\u5b83\u4eec\u53bb\u9664')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"where\u6807\u7b7e"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<select id="queryBlogIF" resultType="com.bsx.pojo.Blog" parameterType="map">\n    select * from blog \n    <where>\n        <if test="title != null">\n            and title = #{title}\n        </if>\n        <if test="author != null">\n            and author = #{author}\n        </if>\n    </where>\n</select>\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"set\n",Object(r.b)("strong",{parentName:"p"},"\u7528\u5728Update\u8bed\u53e5\u4e2d\uff0cset\u5143\u7d20\u4f1a\u52a8\u6001\u524d\u7f6eSET\u5173\u952e\u5b57\uff0c\u540c\u65f6\u4e5f\u4f1a\u5220\u6389\u65e0\u5173\u7684\u9017\u53f7\uff0c\u56e0\u4e3a\u7528\u4e86\u6761\u4ef6\u8bed\u53e5\u4e4b\u540e\u5f88\u53ef\u80fd\u5c31\u4f1a\u5728\u751f\u6210\u7684SQL\u8bed\u53e5\u7684\u540e\u9762\u7559\u4e0b\u8fd9\u4e9b\u9017\u53f7")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u63a5\u53e3"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"//\u66f4\u65b0\u535a\u5ba2\nint updateBlog(Map map);\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"mapper.xml"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<update id="updateBlog" parameterType="map">\n    update blog\n    <set>\n        <if test="title != null">\n            title = #{title},\n        </if>\n        <if test="author != null">\n            author = #{author},\n        </if>\n    </set>\n    where id = #{id}\n</update>\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u6d4b\u8bd5"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void testUpdateSet(){\n    SqlSession sqlSession = MybatisUtils.getSqlSession();\n\n    try {\n        BlogMapper mapper = sqlSession.getMapper(BlogMapper.class);\n        Map map = new HashMap();\n        //\u8fd9\u91cc\u7684id\u4ece\u6570\u636e\u5e93\u590d\u5236\n        map.put("id","ac6d574b9f0a4dbe9ecb8a9ce433a461");\n        map.put("title","UpdatedTitle");\n        map.put("author","updateAuthor");\n\n        mapper.updateBlog(map);\n    } catch (Exception e) {\n        e.printStackTrace();\n    } finally {\n        sqlSession.close();\n    }\n}\n'))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"trim\n\u628a",Object(r.b)("inlineCode",{parentName:"p"},","),"\u540e\u7f00\u66ff\u6362\u4e3a",Object(r.b)("inlineCode",{parentName:"p"},"SET")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<trim prefix="SET" suffixOverrides=",">\n...\n</trim>\n')),Object(r.b)("p",{parentName:"li"},"\u540c\u7406\u628a",Object(r.b)("inlineCode",{parentName:"p"},"AND"),"\u6216\u8005",Object(r.b)("inlineCode",{parentName:"p"},"OR"),"\u66ff\u6362\u4e3a",Object(r.b)("inlineCode",{parentName:"p"},"WHERE")))),Object(r.b)("h3",{id:"32-choose-when-otherwise"},"3.2 choose, when, otherwise"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u7c7b\u4f3cJava\u4e2d\u7684switch\u8bed\u53e5,\u7528",Object(r.b)("inlineCode",{parentName:"strong"},"where"),"\u6807\u7b7e\u66ff\u6362sql\u8bed\u53e5\u4e2d\u7684where")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u63a5\u53e3"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"//test Choose when otherwise\nList<Blog> queryBlogChoose(Map map);\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"mapper.xml"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<select id="queryBlogChoose" resultType="com.bsx.pojo.Blog" parameterType="map">\n    select * from blog\n    <where>\n        <choose>\n            <when test="title != null">\n                title = #{title}\n            </when>\n            <when test="author != null">\n                and author = #{author}\n            </when>\n            <otherwise>\n                and views = #{views}\n            </otherwise>\n        </choose>\n    </where>\n</select>\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u6d4b\u8bd5"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'\n@Test\npublic void testChoose() {\n    SqlSession sqlSession = MybatisUtils.getSqlSession();\n\n    try {\n        BlogMapper mapper = sqlSession.getMapper(BlogMapper.class);\n        Map map = new HashMap();\n        map.put("views", 9999);\n\n        List<Blog> blogs = mapper.queryBlogChoose(map);\n        for (Blog blog : blogs) {\n            System.out.println(blog);\n        }\n\n\n        //            map.put("title", "Title 1");\n        //            blogs = mapper.queryBlogChoose(map);\n        //            for (Blog blog : blogs) {\n        //                System.out.println(blog);\n        //            }\n\n\n        map.put("author", "bsx");\n        blogs = mapper.queryBlogChoose(map);\n        for (Blog blog : blogs) {\n            System.out.println(blog);\n        }\n    } catch (Exception e) {\n        e.printStackTrace();\n    } finally {\n        sqlSession.close();\n    }\n}\n\n')))),Object(r.b)("h2",{id:"4-sql\u7247\u6bb5"},"4. SQL\u7247\u6bb5"),Object(r.b)("p",null,"\u6709\u7684\u65f6\u5019\uff0c\u6211\u4eec\u53ef\u80fd\u4f1a\u5c06\u4e00\u4e9b\u516c\u5171\u7684\u90e8\u5206\u62bd\u53d6\u51fa\u6765\uff0c\u7528",Object(r.b)("inlineCode",{parentName:"p"},"sql\u6807\u7b7e"),"\u5305\u8d77\u6765\uff0c\u65b9\u4fbf\u590d\u7528\u3002"),Object(r.b)("p",null,"\u5b9e\u7528",Object(r.b)("inlineCode",{parentName:"p"},"include\u6807\u7b7e"),"\u5f15\u7528",Object(r.b)("inlineCode",{parentName:"p"},"sql\u6807\u7b7e"),"\u7684\u5185\u5bb9"),Object(r.b)("p",null,"\u6ce8\u610f\u4e8b\u9879\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u6700\u597d\u57fa\u4e8e\u5355\u8868\u5b9a\u4e49SQL\u7247\u6bb5"),Object(r.b)("li",{parentName:"ul"},"\u4e0d\u8981\u5b58\u5728",Object(r.b)("inlineCode",{parentName:"li"},"where\u6807\u7b7e")),Object(r.b)("li",{parentName:"ul"})),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),'<select id="queryBlogIF" resultType="com.bsx.pojo.Blog" parameterType="map">\n    select * from blog where 1=1\n    <include refid="if-title-author"/>\n</select>\n\n <sql id="if-title-author">\n    <if test="title != null">\n        and title = #{title}\n    </if>\n    <if test="author != null">\n        and author = #{author}\n    </if>\n</sql>\n')),Object(r.b)("h2",{id:"5-\u52a8\u6001sql\u4e4bforeach"},"5. \u52a8\u6001SQL\u4e4bForeach"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"select * from blog where 1=1 and (id=1 or id=2 or id=3)\n")),Object(r.b)("p",null,"\u52a8\u6001SQL\u7684\u53e6\u4e00\u4e2a\u5e38\u7528\u7684\u64cd\u4f5c\u9700\u6c42\u662f\u5bf9\u4e00\u4e2a\u96c6\u5408\u8fdb\u884c\u904d\u5386\uff0c\u901a\u5e38\u662f\u5728\u6784\u9020IN\u6761\u4ef6\u8bed\u53e5\u7684\u65f6\u5019"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"foreach\u6807\u7b7e"),"\u5141\u8bb8\u6307\u5b9a\u4e00\u4e2a\u96c6\u5408\uff0c\u58f0\u540d\u53ef\u4ee5\u5728\u5143\u7d20\u4f53\u5185\u5b9e\u7528\u7684\u96c6\u5408\u9879",Object(r.b)("inlineCode",{parentName:"p"},"item"),"\u548c\u7d22\u5f15",Object(r.b)("inlineCode",{parentName:"p"},"index"),"\u53d8\u91cf\u3002\u5b83\u4e5f\u5141\u8bb8\u4f60\u6307\u5b9a\u5f00\u59cb\u548c\u7ed3\u5c3e\u7684\u5b57\u7b26\u4e32\u4ee5\u53ca\u8fed\u4ee3\u7ed3\u679c\u4e4b\u95f4\u5206\u9694\u7b26\u3002"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u5f53\u4f7f\u7528List\u3001Set\u6216\u8005\u6570\u7ec4\u65f6\uff0c",Object(r.b)("inlineCode",{parentName:"strong"},"index"),"\u662f\u5f53\u524d\u8fed\u4ee3\u7684\u6b21\u6570\uff0c",Object(r.b)("inlineCode",{parentName:"strong"},"item"),"\u662f\u672c\u6b21\u8fed\u4ee3\u83b7\u53d6\u7684\u5143\u7d20\uff1b\u5f53\u4f7f\u7528Map\u5bf9\u8c61\u6216\u8005Map.Entry\u5bf9\u8c61\u7684\u96c6\u5408\u65f6\uff0c",Object(r.b)("inlineCode",{parentName:"strong"},"index"),"\u662f\u952e\uff0c",Object(r.b)("inlineCode",{parentName:"strong"},"item"),"\u662f\u503c")),Object(r.b)("p",null,"\u4e3a\u4e86\u6d4b\u8bd5\u65b9\u4fbf\uff0c\u73b0\u5c06\u6570\u636e\u5e93\u4e2d\u7684id\u6539\u4e3a1234\u7684\u5f62\u5f0f"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u63a5\u53e3"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"//\u67e5\u8be2\u7b2c1-2-3\u53f7\u8bb0\u5f55\u7684\u535a\u5ba2\nList<Blog> queryBlogForeach(Map map);\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"mapper.xml\n\u73b0\u5728\u4f20\u9012\u4e00\u4e2a\u4e07\u80fd\u7684",Object(r.b)("inlineCode",{parentName:"p"},"map"),"\uff0c\u8fd9\u4e2a",Object(r.b)("inlineCode",{parentName:"p"},"map"),"\u4e2d\u5b58\u5728\u4e00\u4e2a\u96c6\u5408",Object(r.b)("inlineCode",{parentName:"p"},"ids"),"\u5bf9\u5e94",Object(r.b)("inlineCode",{parentName:"p"},"foreach"),"\u4e2d\u7684",Object(r.b)("inlineCode",{parentName:"p"},"collection"),"\uff0c\u5176\u4e2d\u7684\u6bcf\u4e00\u9879\u4e3a",Object(r.b)("inlineCode",{parentName:"p"},"id"),"\u5bf9\u5e94",Object(r.b)("inlineCode",{parentName:"p"},"item")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<select id="queryBlogForeach" resultType="com.bsx.pojo.Blog" parameterType="map">\n    select * from blog\n    <where>\n        <foreach collection="ids" item="id" open="(" separator="or" close=")">\n            id = #{id}\n        </foreach>\n    </where>\n</select>\n')))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u6d4b\u8bd5"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void testForeach() {\n    SqlSession sqlSession = MybatisUtils.getSqlSession();\n\n    try {\n        BlogMapper mapper = sqlSession.getMapper(BlogMapper.class);\n        Map map = new HashMap();\n        List list = Arrays.asList(1, 2, 3);\n        map.put("ids", list);\n        List<Blog> blogs = mapper.queryBlogForeach(map);\n\n        for (Blog blog : blogs) {\n            System.out.println(blog);\n        }\n\n    } catch (Exception e) {\n        e.printStackTrace();\n    } finally {\n        sqlSession.close();\n    }\n}\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u7ed3\u679c"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Blog(id=1, title=UpdatedddddTitle, author=updateAuthor, createTime=Thu Mar 19 20:38:00 CST 2020, views=9999)\nBlog(id=2, title=Title 2, author=bsx, createTime=Thu Mar 19 20:38:01 CST 2020, views=9999)\nBlog(id=3, title=Title 3, author=bsx, createTime=Thu Mar 19 20:38:01 CST 2020, views=9999)\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u52a8\u6001\u60c5\u51b5"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"select * from blog\nselect * from blog where (id=1)\nselect * from blog where (id=1 or id=2 or id=2)\n")))),Object(r.b)("p",null,"\u52a8\u6001SQL\u5c31\u662f\u5728\u62fc\u63a5SQL\u8bed\u53e5\uff0c\u6211\u4eec\u53ea\u8981\u786e\u4fddSQL\u7684\u6b63\u786e\u6027\uff0c\u6309\u7167SQL\u7684\u683c\u5f0f\uff0c\u8fdb\u884c\u6392\u5217\u7ec4\u5408"),Object(r.b)("p",null,"\u5efa\u8bae\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5148\u5728Mysql\u4e2d\u5199\u51fa\u5b8c\u6574\u7684SQL\uff0c\u5728\u5bf9\u5e94\u5199\u6539\u6210\u4e3a\u52a8\u6001SQL\uff0c\u5b9e\u73b0\u901a\u7528\u5373\u53ef")))}c.isMDXComponent=!0},572:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return j}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var b=l.a.createContext({}),c=function(e){var t=l.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return l.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},u=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),s=c(n),u=a,j=s["".concat(i,".").concat(u)]||s[u]||m[u]||r;return n?l.a.createElement(j,p(p({ref:t},b),{},{components:n})):l.a.createElement(j,p({ref:t},b))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var b=2;b<r;b++)i[b]=n[b];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);