(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{135:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(2),o=t(6),a=(t(0),t(338)),i={id:"1.mybatis",title:"\u6574\u5408mybatis",hide_title:!0},c={unversionedId:"ssm/1.mybatis",id:"ssm/1.mybatis",isDocsHomePage:!1,title:"\u6574\u5408mybatis",description:"\u6574\u5408Mybatis",source:"@site/docs/ssm/1.\u6574\u5408Mybatis.md",permalink:"/docs/ssm/1.mybatis",sidebar:"someSidebar",previous:{title:"\u5bfc\u51faExcel",permalink:"/docs/springmvc/14.excel"},next:{title:"\u914d\u7f6espring",permalink:"/docs/ssm/2.spring"}},p=[{value:"\u6574\u5408Mybatis",id:"\u6574\u5408mybatis",children:[{value:"\u73af\u5883\u4f9d\u8d56",id:"\u73af\u5883\u4f9d\u8d56",children:[]},{value:"\u6570\u636e\u5e93\u73af\u5883",id:"\u6570\u636e\u5e93\u73af\u5883",children:[]},{value:"\u73af\u5883\u642d\u5efa",id:"\u73af\u5883\u642d\u5efa",children:[]},{value:"\u914d\u7f6eMybatis",id:"\u914d\u7f6emybatis",children:[{value:"Dao",id:"dao",children:[]},{value:"Service",id:"service",children:[]}]}]}],b={rightToc:p};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"\u6574\u5408mybatis"},"\u6574\u5408Mybatis"),Object(a.b)("h2",{id:"\u73af\u5883\u4f9d\u8d56"},"\u73af\u5883\u4f9d\u8d56"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"IDEA"),Object(a.b)("li",{parentName:"ul"},"Mysql 5.7.19"),Object(a.b)("li",{parentName:"ul"},"Tomcat 9"),Object(a.b)("li",{parentName:"ul"},"Maven 3.6")),Object(a.b)("h2",{id:"\u6570\u636e\u5e93\u73af\u5883"},"\u6570\u636e\u5e93\u73af\u5883"),Object(a.b)("p",null,"\u95ef\u8fdb\u554a\u4e00\u4e2a\u5b58\u4e66\u6570\u636e\u5e93\u8868"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sql"}),"CREATE DATABASE `ssmbuild`;\n\nUSE `ssmbuild`;\n\nDROP TABLE IF EXISTS `books`;\n\nCREATE TABLE `books` (\n`bookID` INT(10) NOT NULL AUTO_INCREMENT COMMENT '\u4e66id',\n`bookName` VARCHAR(100) NOT NULL COMMENT '\u4e66\u540d',\n`bookCounts` INT(11) NOT NULL COMMENT '\u6570\u91cf',\n`detail` VARCHAR(200) NOT NULL COMMENT '\u63cf\u8ff0',\nKEY `bookID` (`bookID`)\n) ENGINE=INNODB DEFAULT CHARSET=utf8\n\nINSERT  INTO `books`(`bookID`,`bookName`,`bookCounts`,`detail`)VALUES \n(1,'Java',1,'\u4ece\u5165\u95e8\u5230\u653e\u5f03'),\n(2,'MySQL',10,'\u4ece\u5220\u5e93\u5230\u8dd1\u8def'),\n(3,'Linux',5,'\u4ece\u8fdb\u95e8\u5230\u8fdb\u7262');\n")),Object(a.b)("h2",{id:"\u73af\u5883\u642d\u5efa"},"\u73af\u5883\u642d\u5efa"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u65b0\u5efaMaven\u9879\u76ee")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u6dfb\u52a0WEB\u652f\u6301")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Maven\u4f9d\u8d56"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<dependencies>\n   \x3c!--Junit--\x3e\n   <dependency>\n       <groupId>junit</groupId>\n       <artifactId>junit</artifactId>\n       <version>4.12</version>\n   </dependency>\n   \x3c!--\u6570\u636e\u5e93\u9a71\u52a8--\x3e\n   <dependency>\n       <groupId>mysql</groupId>\n       <artifactId>mysql-connector-java</artifactId>\n       <version>5.1.47</version>\n   </dependency>\n   \x3c!-- \u6570\u636e\u5e93\u8fde\u63a5\u6c60 --\x3e\n   <dependency>\n       <groupId>com.mchange</groupId>\n       <artifactId>c3p0</artifactId>\n       <version>0.9.5.2</version>\n   </dependency>\n\n   \x3c!--Servlet - JSP --\x3e\n   <dependency>\n       <groupId>javax.servlet</groupId>\n       <artifactId>servlet-api</artifactId>\n       <version>2.5</version>\n   </dependency>\n   <dependency>\n       <groupId>javax.servlet.jsp</groupId>\n       <artifactId>jsp-api</artifactId>\n       <version>2.2</version>\n   </dependency>\n   <dependency>\n       <groupId>javax.servlet</groupId>\n       <artifactId>jstl</artifactId>\n       <version>1.2</version>\n   </dependency>\n\n   \x3c!--Mybatis--\x3e\n   <dependency>\n       <groupId>org.mybatis</groupId>\n       <artifactId>mybatis</artifactId>\n       <version>3.5.2</version>\n   </dependency>\n   <dependency>\n       <groupId>org.mybatis</groupId>\n       <artifactId>mybatis-spring</artifactId>\n       <version>2.0.2</version>\n   </dependency>\n\n   \x3c!--Spring--\x3e\n   <dependency>\n       <groupId>org.springframework</groupId>\n       <artifactId>spring-webmvc</artifactId>\n       <version>5.1.9.RELEASE</version>\n   </dependency>\n   <dependency>\n       <groupId>org.springframework</groupId>\n       <artifactId>spring-jdbc</artifactId>\n       <version>5.1.9.RELEASE</version>\n   </dependency>\n    \x3c!-- lombok --\x3e  \n    <dependency>\n        <groupId>org.projectlombok</groupId>\n        <artifactId>lombok</artifactId>\n        <version>1.18.8</version>\n        <scope>provided</scope>\n    </dependency>\n</dependencies>\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Maven\u9759\u6001\u8d44\u6e90\u5bfc\u51fa\u95ee\u9898"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<build>\n    <resources>\n        <resource>\n            <directory>src/main/java</directory>\n            <includes>\n                <include>**/*.properties</include>\n                <include>**/*.xml</include>\n            </includes>\n            <filtering>false</filtering>\n        </resource>\n        <resource>\n            <directory>src/main/resources</directory>\n            <includes>\n                <include>**/*.properties</include>\n                <include>**/*.xml</include>\n            </includes>\n            <filtering>false</filtering>\n        </resource>\n    </resources>\n</build>\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u5efa\u5305"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"pojo"),Object(a.b)("li",{parentName:"ul"},"dao(mapper)"),Object(a.b)("li",{parentName:"ul"},"service"),Object(a.b)("li",{parentName:"ul"},"controller"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u5efaresources"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"mybatis-config.xml"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8" ?>\n<!DOCTYPE configuration\n       PUBLIC "-//mybatis.org//DTD Config 3.0//EN"\n       "http://mybatis.org/dtd/mybatis-3-config.dtd">\n<configuration>\n\n</configuration>\n'))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"applicationContext.xml"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n      xsi:schemaLocation="http://www.springframework.org/schema/beans\n       http://www.springframework.org/schema/beans/spring-beans.xsd">\n\n</beans>\n')))))),Object(a.b)("h2",{id:"\u914d\u7f6emybatis"},"\u914d\u7f6eMybatis"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u6570\u636e\u5e93\u914d\u7f6e\u6587\u4ef6",Object(a.b)("inlineCode",{parentName:"p"},"database.properties")),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-properties"}),"jdbc.driver=com.mysql.jdbc.Driver\njdbc.url=jdbc:mysql://localhost:3306/ssmbuild?useSSL=true&useUnicode=true&characterEncoding=utf8\njdbc.username=root\njdbc.password=root\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"pojo.Books"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"@Data\n@AllArgsConstructor\n@NoArgsConstructor\npublic class Books {\n    private int bookID;\n    private String bookName;\n    private int bookCounts;\n    private String detail;\n}\n")))),Object(a.b)("h3",{id:"dao"},"Dao"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public interface BookMapper {\n\n    //\u589e\u52a0\u4e00\u672c\u4e66\n    int addBook(Books books);\n\n    //\u5220\u9664\u4e00\u672c\u4e66\n    int deleteBookById(@Param("bookID") int id);\n\n    //\u4fee\u6539\u4e00\u672c\u4e66\n    int updateBook(Books books);\n\n    //\u67e5\u8be2\u4e00\u672c\u4e66\n    Books queryBookById(@Param("bookID") int id);\n\n    //\u67e5\u8be2\u6240\u6709\u4e66\n    List<Books> queryAllBooks();\n}\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Mapper.xml"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8" ?>\n<!DOCTYPE mapper\n        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"\n        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n<mapper namespace="com.bsx.dao.BookMapper">\n\n    <insert id="addBook" parameterType="com.bsx.pojo.Books">\n        insert into books (bookName, bookCounts, detail) values\n        (#{bookName}, #{bookCounts}, #{detail});\n    </insert>\n\n    <delete id="deleteBookById">\n        delete from books where bookID = #{bookID};\n    </delete>\n\n    <update id="updateBook" parameterType="com.bsx.pojo.Books">\n        update books set bookCounts = #{bookCounts}, bookName = #{bookName}, detail =\n        #{detail} where bookID = #{bookID};\n    </update>\n\n    <select id="queryBookById" resultType="com.bsx.pojo.Books">\n        select * from books where bookID = #{bookID};\n    </select>\n\n    <select id="queryAllBooks" resultType="com.bsx.pojo.Books">\n        select * from books\n    </select>\n</mapper>\n'))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u5c06mapper.xml\u7ed1\u5b9a\u5230mybatis\u914d\u7f6e\u6587\u4ef6\u4e2d"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<mappers>\n    <mapper resource="com/bsx/dao/BookMapper.xml"/>\n</mappers>\n')))),Object(a.b)("h3",{id:"service"},"Service"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"BookService"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public interface BookService {\n    //\u589e\u52a0\u4e00\u672c\u4e66\n    int addBook(Books books);\n\n    //\u5220\u9664\u4e00\u672c\u4e66\n    int deleteBookById(@Param("bookID") int id);\n\n    //\u4fee\u6539\u4e00\u672c\u4e66\n    int updateBook(Books books);\n\n    //\u67e5\u8be2\u4e00\u672c\u4e66\n    Books queryBookById(@Param("bookID") int id);\n\n    //\u67e5\u8be2\u6240\u6709\u4e66\n    List<Books> queryAllBooks();\n}\n'))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"BookServiceImpl"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u7ec4\u5408\u4e00\u4e2a",Object(a.b)("inlineCode",{parentName:"li"},"BookMapper"),"\u5bf9\u8c61"),Object(a.b)("li",{parentName:"ul"},"\u5199\u4e00\u4e2a\u6784\u9020\u65b9\u6cd5\u6216\u8005set\u65b9\u6cd5\u4f9bSpring\u5b9e\u73b0\u4f9d\u8d56\u6ce8\u5165")))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Service("bookService")\npublic class BookServiceImpl implements BookService {\n\n    //\u4e1a\u52a1\u5c42\u8c03\u7528Dao,\u7ec4\u5408\u4e00\u4e2aBookMapper\n    //\u4e5f\u53ef\u4ee5\u7528\u6784\u9020\u5668\u6ce8\u5165\uff0c\u8bbe\u7f6e\u4e00\u4e2a\u6784\u9020\u65b9\u6cd5\u5c31\u884c\n    @Autowired\n    private BookMapper bookMapper;\n\n    //\u7528\u6765Spring Set\u6ce8\u5165\n    public void setBookMapper(BookMapper bookMapper) {\n        this.bookMapper = bookMapper;\n    }\n\n    public int addBook(Books books) {\n        return bookMapper.addBook(books);\n    }\n\n    public int deleteBookById(int id) {\n        return bookMapper.deleteBookById(id);\n    }\n\n    public int updateBook(Books books) {\n        return bookMapper.updateBook(books);\n    }\n\n    public Books queryBookById(int id) {\n        return bookMapper.queryBookById(id);\n    }\n\n    public List<Books> queryAllBooks() {\n        return bookMapper.queryAllBooks();\n    }\n}\n')))}l.isMDXComponent=!0},338:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var b=o.a.createContext({}),l=function(e){var n=o.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=l(e.components);return o.a.createElement(b.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=l(t),u=r,m=s["".concat(i,".").concat(u)]||s[u]||d[u]||a;return t?o.a.createElement(m,c(c({ref:n},b),{},{components:t})):o.a.createElement(m,c({ref:n},b))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<a;b++)i[b]=t[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);