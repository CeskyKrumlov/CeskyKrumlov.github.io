(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{115:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return p})),a.d(n,"metadata",(function(){return c})),a.d(n,"rightToc",(function(){return l})),a.d(n,"default",(function(){return b}));var t=a(2),r=a(6),s=(a(0),a(375)),p={id:"2.crud",title:"CRUD",hide_title:!0},c={unversionedId:"mybatis/2.crud",id:"mybatis/2.crud",isDocsHomePage:!1,title:"CRUD",description:"CRUD",source:"@site/docs/mybatis/2.CRUD\u5b9e\u73b0.md",slug:"/mybatis/2.crud",permalink:"/docs/mybatis/2.crud",version:"current",sidebar:"someSidebar",previous:{title:"Mybatis\u5feb\u901f\u5165\u95e8",permalink:"/docs/mybatis/1.mybatis"},next:{title:"\u914d\u7f6e\u89e3\u6790",permalink:"/docs/mybatis/3.config"}},l=[{value:"CRUD",id:"crud",children:[{value:"Mapper.xml -&gt; namespace",id:"mapperxml---namespace",children:[]},{value:"Mapper.xml -&gt; select",id:"mapperxml---select",children:[]},{value:"Mapper.xml -&gt; insert",id:"mapperxml---insert",children:[]},{value:"Mapper.xml -&gt; Update",id:"mapperxml---update",children:[]},{value:"Mapper.xml -&gt; Delete",id:"mapperxml---delete",children:[]},{value:"\u4e07\u80fdMap",id:"\u4e07\u80fdmap",children:[{value:"\u6a21\u7cca\u67e5\u8be2",id:"\u6a21\u7cca\u67e5\u8be2",children:[]}]}]}],i={rightToc:l};function b(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(t.a)({},i,a,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"crud"},"CRUD"),Object(s.b)("h2",{id:"mapperxml---namespace"},"Mapper.xml -> namespace"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"namespace\u4e2d\u7684\u5305\u540d\u8981\u4e0e\u63a5\u53e3\u540d\u4e00\u81f4")),Object(s.b)("h2",{id:"mapperxml---select"},"Mapper.xml -> select"),Object(s.b)("p",null,"\u9009\u62e9\u3001\u67e5\u8be2\u8bed\u53e5"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml"}),'<select id="\u65b9\u6cd5\u540d" resultType="Sql\u8bed\u53e5\u7684\u8fd4\u56de\u503c" parameterTyep="\u53c2\u6570\u7c7b\u578b"></select>\n')),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"id:\u5c31\u662f\u5bf9\u5e94\u7684namespace\u4e2d\u7684",Object(s.b)("strong",{parentName:"li"},"\u65b9\u6cd5\u540d")),Object(s.b)("li",{parentName:"ul"},"resultType: Sql\u8bed\u53e5\u6267\u884c\u7684\u8fd4\u56de\u7c7b\u578b "),Object(s.b)("li",{parentName:"ul"},"parameterType:\u53c2\u6570\u7684\u7c7b\u578b")),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"//\u63a5\u53e3\n\npublic interface IUserMapper {\n    //\u67e5\u8be2\u5168\u90e8\u7528\u6237\n    List<User> getUserList();\n\n    //\u6839\u636eid\u67e5\u8be2\u7528\u6237\n    User getUserById(int id);\n}\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!-- mapper.xml --\x3e\n<mapper namespace="com.bsx.dao.IUserMapper">\n    <select id="getUserList" resultType="com.bsx.pojo.User">\n      SELECT * FROM USER;\n  </select>\n\n    <select id="getUserById" resultType="com.bsx.pojo.User" parameterType="int">\n        SELECT * FROM USER WHERE id = #{id}\n    </select>\n</mapper>\n')),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"//\u6d4b\u8bd5\u7c7b\n@Test\npublic void testGetUserById() {\n    SqlSession sqlSession = MybatisUtils.getSqlSession();\n    //1.\u83b7\u53d6SqlSession\u5bf9\u8c61\n    try {\n        IUserMapper mapper = sqlSession.getMapper(IUserMapper.class);\n        User user = mapper.getUserById(1);\n        System.out.println(user);\n    } catch (Exception e) {\n        e.printStackTrace();\n    } finally {\n        sqlSession.close();\n    }\n}\n")),Object(s.b)("h2",{id:"mapperxml---insert"},"Mapper.xml -> insert"),Object(s.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(s.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(s.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(s.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"\u589e\u5220\u6539\u64cd\u4f5c\u9700\u8981\u63d0\u4ea4\u4e8b\u52a1"))),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"//\u63a5\u53e3\npublic interface IUserMapper {\n    int addUser(User user);\n}\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!--    \u5bf9\u8c61\u4e2d\u7684\u5c5e\u6027\u53ef\u4ee5\u76f4\u63a5\u53d6\u51fa\u6765 user.name , user.password--\x3e\n<insert id="addUser" parameterType="com.bsx.pojo.User">\n    INSERT INTO USER (id, name, password) VALUES (NULL, #{name}, #{password});\n</insert>\n')),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),'//\u6d4b\u8bd5\u7c7b\n@Test\npublic void testInsertUser() {\n    SqlSession sqlSession = MybatisUtils.getSqlSession();\n\n    try {\n        User user = new User();\n        user.setName("\u65b0\u6765\u7684");\n        user.setPassword("3306");\n\n        IUserMapper mapper = sqlSession.getMapper(IUserMapper.class);\n        int returnNumber = mapper.addUser(user);\n\n        System.out.println("return number = " + returnNumber);\n        if (returnNumber > 0) {\n            System.out.println("\u63d2\u5165\u6210\u529f");\n        }\n        //\u63d0\u4ea4\u4e8b\u52a1\n        sqlSession.commit();\n\n    } catch (Exception e) {\n        e.printStackTrace();\n    } finally {\n        sqlSession.close();\n    }\n}\n')),Object(s.b)("h2",{id:"mapperxml---update"},"Mapper.xml -> Update"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"//\u63a5\u53e3\npublic interface IUserMapper {\n    int updateUser(User user);\n}\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!-- mapper.xml --\x3e\n<update id="updateUser" parameterType="com.bsx.pojo.User">\n    update user set name = #{name}, password = #{password} where id = #{id};\n</update>\n')),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void testUpdateUser() {\n    SqlSession sqlSession = MybatisUtils.getSqlSession();\n    try {\n        User user = new User();\n        user.setId(1);\n        user.setName("\u6539\u540d\u7684");\n        user.setPassword("123456");\n\n        IUserMapper mapper = sqlSession.getMapper(IUserMapper.class);\n        int returnNumber = mapper.updateUser(user);\n\n        System.out.println("return number = " + returnNumber);\n\n        sqlSession.commit();\n    } catch (Exception e) {\n        e.printStackTrace();\n    } finally {\n        sqlSession.close();\n    }\n}\n')),Object(s.b)("h2",{id:"mapperxml---delete"},"Mapper.xml -> Delete"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"//\u63a5\u53e3\nint deleteUser(int id);\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml"}),'<delete id="deleteUser">\n    DELETE FROM USER WHERE id = #{id};\n</delete>\n')),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void testDelete() {\n    SqlSession sqlSession = MybatisUtils.getSqlSession();\n    try {\n        IUserMapper mapper = sqlSession.getMapper(IUserMapper.class);\n        int returnNumber = mapper.deleteUser(3);\n        System.out.println("return number = " + returnNumber);\n\n        sqlSession.commit();\n    } catch (Exception e) {\n        e.printStackTrace();\n    } finally {\n        sqlSession.close();\n    }\n}\n')),Object(s.b)("h2",{id:"\u4e07\u80fdmap"},"\u4e07\u80fdMap"),Object(s.b)("p",null,'\u4e0d\u9700\u8981\u586b\u5199\u5b9e\u4f53\u7c7b\u7684\u6240\u6709\u5b57\u6bb5  -> parameterType="map"'),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"//\u63a5\u53e3\n//\u4e07\u80fd\u7684map\nint addUser2(Map<String,Object> map);\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!-- values\u90e8\u5206\u7684\u540d\u5b57\u4e3a map\u7684key\u5c31\u53ef\u4ee5--\x3e\n\x3c!-- \u53ef\u4ee5\u53ea\u586b\u5145\u90e8\u5206\u5b57\u6bb5--\x3e\n<insert id="addUser2" parameterType="map">\n    insert into user (id,name,password) values (#{userid},#{userName},#{password})\n</insert>\n')),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"//\u6d4b\u8bd5\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void testAddUser2() {\n    SqlSession sqlSession = MybatisUtils.getSqlSession();\n    IUserMapper mapper = sqlSession.getMapper(IUserMapper.class);\n\n    HashMap<String, Object> map = new HashMap<String, Object>();\n    map.put("userid", null);\n    map.put("userName", "map\u6765\u7684");\n    map.put("password", "123123");\n\n    mapper.addUser2(map);\n    sqlSession.commit();\n}\n')),Object(s.b)("h3",{id:"\u6a21\u7cca\u67e5\u8be2"},"\u6a21\u7cca\u67e5\u8be2"),Object(s.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(s.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(s.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(s.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"\u6ce8\u610f\uff01\uff01\uff01\u6d4b\u8bd5\u7c7b\u4e2d\u62fc\u63a5\u503c\u5fc5\u987b\u7528%%\u5305\u8d77\u6765,\u4f20\u9012\u901a\u914d\u7b26\uff0csql\u8bed\u53e5\u4e2d\u7684\u53c2\u6570\u540d\u4e0e\u63a5\u53e3\u53c2\u6570\u540d\u4e00\u81f4\uff0c\u53ea\u6709\u4e00\u4e2a\u53c2\u6570"))),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"//\u63a5\u53e3\n//\u6a21\u7cca\u67e5\u8be2\nList<User> getUserLike(String value);\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!--    \u6a21\u7cca\u67e5\u8be2--\x3e\n<select id="getUserLike" resultType="com.bsx.pojo.User">\n    SELECT * FROM USER where name like #{value}\n</select>\n')),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),'//\u6d4b\u8bd5\n@Test\npublic void testLike(){\n    SqlSession sqlSession = MybatisUtils.getSqlSession();\n    IUserMapper mapper = sqlSession.getMapper(IUserMapper.class);\n    List<User> userList = mapper.getUserLike("%\u72c2%");\n    for (User user : userList) {\n        System.out.println(user);\n    }\n}\n')))}b.isMDXComponent=!0},375:function(e,n,a){"use strict";a.d(n,"a",(function(){return m})),a.d(n,"b",(function(){return d}));var t=a(0),r=a.n(t);function s(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function p(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function c(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?p(Object(a),!0).forEach((function(n){s(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),b=function(e){var n=r.a.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):c(c({},n),e)),a},m=function(e){var n=b(e.components);return r.a.createElement(i.Provider,{value:n},e.children)},o={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,s=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=b(a),u=t,d=m["".concat(p,".").concat(u)]||m[u]||o[u]||s;return a?r.a.createElement(d,c(c({ref:n},i),{},{components:a})):r.a.createElement(d,c({ref:n},i))}));function d(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var s=a.length,p=new Array(s);p[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,p[1]=c;for(var i=2;i<s;i++)p[i]=a[i];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);