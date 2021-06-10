(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{237:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),c=(n(0),n(511)),i={id:"10.oneToMulti",title:"\u4e00\u5bf9\u591a",hide_title:!0},l={unversionedId:"mybatis/10.oneToMulti",id:"mybatis/10.oneToMulti",isDocsHomePage:!1,title:"\u4e00\u5bf9\u591a",description:"1. \u4e00\u5bf9\u591a",source:"@site/docs/mybatis/10.\u4e00\u5bf9\u591a.md",slug:"/mybatis/10.oneToMulti",permalink:"/docs/mybatis/10.oneToMulti",version:"current",sidebar:"someSidebar",previous:{title:"\u591a\u5bf9\u4e00",permalink:"/docs/mybatis/9.multiToOne"},next:{title:"\u52a8\u6001SQL",permalink:"/docs/mybatis/11.dynamicSQL"}},p=[{value:"1. \u4e00\u5bf9\u591a",id:"1-\u4e00\u5bf9\u591a",children:[{value:"1.1 \u73af\u5883\u642d\u5efa",id:"11-\u73af\u5883\u642d\u5efa",children:[]}]},{value:"2. \u4e00\u5bf9\u591a\u9700\u6c42",id:"2-\u4e00\u5bf9\u591a\u9700\u6c42",children:[{value:"3. \u5c0f\u7ed3",id:"3-\u5c0f\u7ed3",children:[]}]}],o={rightToc:p};function b(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},o,i,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"1-\u4e00\u5bf9\u591a"},"1. \u4e00\u5bf9\u591a"),Object(c.b)("p",null,"\u4e00\u4e2a\u8001\u5e08\u62e5\u6709\u591a\u4e2a\u5b66\u751f"),Object(c.b)("p",null,"\u5bf9\u4e8e\u8001\u5e08\u800c\u8a00\u5c31\u662f\u4e00\u5bf9\u591a\u7684\u5173\u7cfb"),Object(c.b)("h2",{id:"11-\u73af\u5883\u642d\u5efa"},"1.1 \u73af\u5883\u642d\u5efa"),Object(c.b)("p",null,"\u65b0\u5efa\u4e00\u4e2aMybatis07\uff0c\u548c\u4e4b\u524d\u4e00\u6837"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u4fee\u6539POJO"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Student"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"@Data\n@NoArgsConstructor\n@AllArgsConstructor\npublic class Student {\n    private int id;\n    private String name;\n    private int tid;\n}\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Teacher"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"@Data\n@AllArgsConstructor\n@NoArgsConstructor\npublic class Teacher {\n    private int id;\n    private String name;\n    private List<Student> students;\n}\n"))))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u63a5\u53e3"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public interface TeacherMapper {\n\n    //\u83b7\u53d6\u8001\u5e08\n    List<Teacher> getTeacher();\n}\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Mapper.xml"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<mapper namespace="com.bsx.dao.TeacherMapper">\n    <select id="getTeacher" resultType="com.bsx.pojo.Teacher">\n        select * from teacher\n    </select>\n</mapper>\n'))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u6d4b\u8bd5"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void testEnv() throws IOException {\n    InputStream inputStream = Resources.getResourceAsStream("mybatis-config.xml");\n    SqlSessionFactory sessionFactory = new SqlSessionFactoryBuilder().build(inputStream);\n    SqlSession sqlSession = sessionFactory.openSession();\n\n    try {\n        TeacherMapper mapper = sqlSession.getMapper(TeacherMapper.class);\n        List<Teacher> teachers = mapper.getTeacher();\n\n        for (Teacher teacher : teachers) {\n            System.out.println(teacher);\n        }\n    } catch (Exception e) {\n        e.printStackTrace();\n    } finally {\n        sqlSession.close();\n    }\n}\n')))),Object(c.b)("h1",{id:"2-\u4e00\u5bf9\u591a\u9700\u6c42"},"2. \u4e00\u5bf9\u591a\u9700\u6c42"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u9700\u6c42\uff1a\u83b7\u53d6\u6307\u5b9a\u8001\u5e08\u53ca\u5176\u6240\u6709\u5b66\u751f")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u63a5\u53e3"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public interface TeacherMapper {\n\n    //\u83b7\u53d6\u8001\u5e08\n//    List<Teacher> getTeacher();\n\n    //\u83b7\u53d6\u6307\u5b9a\u8001\u5e08\u53ca\u5176\u6240\u6709\u5b66\u751f**\n    Teacher getTeacher(@Param("tid") int id);\n}\n'))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"mapper.xml"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"javaType:\u6307\u5b9a\u5c5e\u6027\u7684\u7c7b\u578b\uff0c\u96c6\u5408\u4e2d\u7684\u6cdb\u578b\u4fe1\u606f\u6211\u4eec\u4f7f\u7528",Object(c.b)("inlineCode",{parentName:"li"},"ofType"),"\u83b7\u53d6\n",Object(c.b)("inlineCode",{parentName:"li"},"students"),"\u662f\u4e00\u4e2a",Object(c.b)("inlineCode",{parentName:"li"},"List"),"\u91cc\u9762\u88c5\u7740",Object(c.b)("inlineCode",{parentName:"li"},"Student"),"\uff0c\u6240\u4ee5\u5728",Object(c.b)("inlineCode",{parentName:"li"},"mapper.xml"),"\u4e2d\u6307\u5b9a",Object(c.b)("inlineCode",{parentName:"li"},"students"),"\u5185\u7684",Object(c.b)("inlineCode",{parentName:"li"},"Student"),"\u8981\u7528",Object(c.b)("inlineCode",{parentName:"li"},"ofType"),"\u800c\u4e0d\u662f",Object(c.b)("inlineCode",{parentName:"li"},"javaType"))),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<mapper namespace="com.bsx.dao.TeacherMapper">\n\x3c!--    \u6309\u7ed3\u679c\u5d4c\u5957\u67e5\u8be2--\x3e\n    <select id="getTeacher" resultMap="TeacherStudent">\n        SELECT\n        t.id tid, t.name tname, s.id sid, s.name sname\n        FROM\n        student s, teacher t\n        WHERE\n        s.tid = t.id\n        AND\n        t.id = #{tid}\n    </select>\n    <resultMap id="TeacherStudent" type="com.bsx.pojo.Teacher">\n        <result column="tid" property="id"/>\n        <result column="tname" property="name"/>\n        <collection  property="students" ofType="com.bsx.pojo.Student" >\n            <result column="sid" property="id"/>\n            <result column="sname" property="name"/>\n            <result column="tid" property="tid"/>\n        </collection>\n    </resultMap>\n\n</mapper>\n'))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u6d4b\u8bd5"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void testGetTeacher() throws IOException {\n    InputStream inputStream = Resources.getResourceAsStream("mybatis-config.xml");\n    SqlSessionFactory sessionFactory = new SqlSessionFactoryBuilder().build(inputStream);\n    SqlSession sqlSession = sessionFactory.openSession();\n\n    try {\n        TeacherMapper mapper = sqlSession.getMapper(TeacherMapper.class);\n        Teacher teacher = mapper.getTeacher(1);\n\n        System.out.println(teacher);\n\n    } catch (Exception e) {\n        e.printStackTrace();\n    } finally {\n        sqlSession.close();\n    }\n}\n'))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u7ed3\u679c"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"Teacher(id=1, name=\u79e6\u8001\u5e08, \nstudents=[\n    Student(id=1, name=\u5c0f\u660e, tid=1), \n    Student(id=2, name=\u5c0f\u7ea2, tid=1), \n    Student(id=3, name=\u5c0f\u5f20, tid=1), \n    Student(id=4, name=\u5c0f\u674e, tid=1), \n    Student(id=5, name=\u5c0f\u738b, tid=1)])\n")))),Object(c.b)("h2",{id:"3-\u5c0f\u7ed3"},"3. \u5c0f\u7ed3"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u5173\u8054 - association ","[\u591a\u5bf9\u4e00]"),Object(c.b)("li",{parentName:"ul"},"\u96c6\u5408 - collection ","[\u4e00\u5bf9\u591a]"),Object(c.b)("li",{parentName:"ul"},"javaType & ofType",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"javaType\u7528\u6765\u6307\u5b9a\u5b9e\u4f53\u7c7b\u4e2d\u5c5e\u6027\u7684\u7c7b\u578b"),Object(c.b)("li",{parentName:"ul"},"ofTyoe\u7528\u6765\u6307\u5b9a\u6620\u5c04\u5230List\u6216\u8005\u96c6\u5408\u4e2d\u7684POJO\u7c7b\u578b\uff0c\u5373\u6cdb\u578b\u7c7b\u578b")))),Object(c.b)("img",{src:n(859).default,style:{zoom:"40%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(c.b)("br",null),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u6ce8\u610f\u70b9\uff1a")),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\u4fdd\u8bc1sql\u8bed\u53e5\u7684\u53ef\u8bfb\u6027"),Object(c.b)("li",{parentName:"ol"},"\u6ce8\u610f\u4e00\u5bf9\u591a\u548c\u591a\u5bf9\u4e00\u4e2d\uff0c\u5c5e\u6027\u540d\u548c\u5b57\u6bb5\u7684\u95ee\u9898"),Object(c.b)("li",{parentName:"ol"},"\u5982\u679c\u95ee\u9898\u4e0d\u597d\u6392\u67e5\uff0c\u53ef\u4ee5\u4f7f\u7528\u65e5\u5fd7\uff0c\u5efa\u8bae\u4f7f\u7528LOG4J")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Mysql\u5f15\u64ce"),Object(c.b)("li",{parentName:"ul"},"InnoDB\u5e95\u5c42\u539f\u7406"),Object(c.b)("li",{parentName:"ul"},"\u7d22\u5f15"),Object(c.b)("li",{parentName:"ul"},"\u7d22\u5f15\u4f18\u5316")))}b.isMDXComponent=!0},511:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),b=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),s=b(n),m=a,d=s["".concat(i,".").concat(m)]||s[m]||u[m]||c;return n?r.a.createElement(d,l(l({ref:t},o),{},{components:n})):r.a.createElement(d,l({ref:t},o))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var o=2;o<c;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},859:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/17-1a3933d1b524cc17883db60999d015b0.png"}}]);