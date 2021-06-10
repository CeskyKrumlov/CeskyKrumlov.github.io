(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),c=(n(0),n(338)),o={id:"10.jdbc",title:"\u6574\u5408JDBC",hide_title:!0},i={unversionedId:"springboot/10.jdbc",id:"springboot/10.jdbc",isDocsHomePage:!1,title:"\u6574\u5408JDBC",description:"SpringData\u7b80\u4ecb",source:"@site/docs/springboot/10.\u6574\u5408JDBC.md",permalink:"/docs/springboot/10.jdbc",sidebar:"someSidebar",previous:{title:"\u6574\u5408Druid",permalink:"/docs/springboot/10.druid"},next:{title:"\u6574\u5408Mybatis",permalink:"/docs/springboot/10.mybatis"}},l=[{value:"SpringData\u7b80\u4ecb",id:"springdata\u7b80\u4ecb",children:[]},{value:"\u6574\u5408JDBC",id:"\u6574\u5408jdbc",children:[{value:"\u521b\u5efa\u9879\u76ee\u6d4b\u8bd5\u6570\u636e\u6e90",id:"\u521b\u5efa\u9879\u76ee\u6d4b\u8bd5\u6570\u636e\u6e90",children:[]},{value:"\u4f7f\u7528JdbcTemplate",id:"\u4f7f\u7528jdbctemplate",children:[]}]}],b={rightToc:l};function p(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,o,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"springdata\u7b80\u4ecb"},"SpringData\u7b80\u4ecb"),Object(c.b)("p",null,"\u5bf9\u4e8e\u6570\u636e\u8bbf\u95ee\u5c42\uff0c\u65e0\u8bba\u662f\u5173\u7cfb\u578b\u6570\u636e\u5e93SQL\u8fd8\u662f\u975e\u5173\u7cfb\u578b\u6570\u636e\u5e93NoSQL\uff0cSpringBoot\u5e95\u5c42\u90fd\u91c7\u7528SpringData\u7684\u65b9\u5f0f\u8fdb\u884c\u7edf\u4e00\u5904\u7406"),Object(c.b)("p",null,"SpringData\u5b98\u7f51\uff1a",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://spring.io/projects/spring-data"}),"https://spring.io/projects/spring-data")),Object(c.b)("p",null,"\u6570\u636e\u5e93\u76f8\u5173\u7684\u542f\u52a8\u5668\uff1a",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.spring.io/spring-boot/docs/2.2.5.RELEASE/reference/htmlsingle/#using-boot-starter"}),"https://docs.spring.io/spring-boot/docs/2.2.5.RELEASE/reference/htmlsingle/#using-boot-starter")),Object(c.b)("h1",{id:"\u6574\u5408jdbc"},"\u6574\u5408JDBC"),Object(c.b)("h2",{id:"\u521b\u5efa\u9879\u76ee\u6d4b\u8bd5\u6570\u636e\u6e90"},"\u521b\u5efa\u9879\u76ee\u6d4b\u8bd5\u6570\u636e\u6e90"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"springboot-data-jdbc\uff0c\u5f15\u5165web\u548csql\u6a21\u5757")),Object(c.b)("p",null,Object(c.b)("img",{alt:"image-20200429152841520",src:n(513).default})),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"SpringBoot\u4e3a\u6211\u4eec\u81ea\u52a8\u5bfc\u5165\u4e86\u4ee5\u4e0b\u5750\u6807\u4f9d\u8d56",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"mysql\u9ed8\u8ba4\u7528\u76848\u7248\u672c\uff0c\u53ef\u4ee5\u624b\u52a8\u6dfb\u52a0\u6307\u5b9a\u7248\u672c")))),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-jdbc</artifactId>\n</dependency>\n<dependency>\n    <groupId>mysql</groupId>\n    <artifactId>mysql-connector-java</artifactId>\n    \x3c!-- <version>5.1.47</version> --\x3e\n    <scope>runtime</scope>\n</dependency>\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"yaml\u914d\u7f6e\u6587\u4ef6")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"spring:\n  datasource:\n    username: root\n    password: root\n    #?serverTimezone=UTC\u89e3\u51b3\u65f6\u533a\u7684\u62a5\u9519\n    url: jdbc:mysql://localhost:3306/test?serverTimezone=UTC&useUnicode=true&characterEncoding=utf-8\n    driver-class-name: com.mysql.jdbc.Driver #com.mysql.cj.jdbc.Driver\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u67e5\u770b\u9ed8\u8ba4\u6570\u636e\u6e90")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"@SpringBootTest\nclass Springboot03JdbcApplicationTests {\n    @Autowired\n    DataSource dataSource;\n\n    @Test\n    public void contextLoads() throws SQLException {\n        //\u770b\u4e00\u4e0b\u9ed8\u8ba4\u6570\u636e\u6e90\n        System.out.println(dataSource.getClass());\n        //\u83b7\u5f97\u8fde\u63a5\n        Connection connection =   dataSource.getConnection();\n        System.out.println(connection);\n        //\u5173\u95ed\u8fde\u63a5\n        connection.close();\n    }\n}\n")),Object(c.b)("p",null,"\u53ef\u4ee5\u770b\u5230\u9ed8\u8ba4\u6570\u636e\u6e90\u662fhikari"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-j"}),"class com.zaxxer.hikari.HikariDataSource\n")),Object(c.b)("h2",{id:"\u4f7f\u7528jdbctemplate"},"\u4f7f\u7528JdbcTemplate"),Object(c.b)("p",null,"\u53ef\u4ee5\u53c2\u8003",Object(c.b)("inlineCode",{parentName:"p"},"Java Web \u6570\u636e\u6301\u4e45\u5316"),"\u90e8\u5206\u7684\u5185\u5bb9"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u6709\u4e86\u6570\u636e\u6e90\uff0c\u5c31\u53ef\u4ee5\u62ff\u5230\u6570\u636e\u5e93\u8fde\u63a5\u5bf9\u8c61\uff0c\u6709\u4e86\u8fde\u63a5\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u539f\u751fJDBC\u8bed\u53e5\u64cd\u4f5c\u6570\u636e\u5e93"),Object(c.b)("li",{parentName:"ul"},"\u5373\u4f7f\u4e0d\u4f7f\u7528\u7b2c\u4e09\u65b9\u6570\u636e\u5e93\u6846\u67b6\uff0cSpring\u672c\u8eab\u4e5f\u5bf9\u539f\u751fJDBC\u505a\u4e86\u5c01\u88c5\uff0c\u5373JdbcTemplate"),Object(c.b)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u6240\u6709\u7684CRUD\u65b9\u6cd5\u90fd\u5df2\u7ecf\u5b9a\u4e49\u5728JdbcTemplate\u4e2d"),Object(c.b)("li",{parentName:"ul"},"SpringBoot\u4e0d\u4ec5\u63d0\u4f9b\u4e86\u9ed8\u8ba4\u7684\u6570\u636e\u6e90\uff0c\u540c\u65f6\u9ed8\u8ba4\u5df2\u7ecf\u914d\u7f6e\u597d\u4e86Jdbc Template\u653e\u5728\u4e86\u5bb9\u5668\u4e2d\uff0c\u76f4\u63a5\u6ce8\u5165\u5c31\u80fd\u7528"),Object(c.b)("li",{parentName:"ul"},"JdbcTemplate\u7684\u81ea\u52a8\u914d\u7f6e\u4f9d\u8d56",Object(c.b)("inlineCode",{parentName:"li"},"org.springframework.boot.autoconfigure.jdbc")," \u5305\u4e0b\u7684 ",Object(c.b)("inlineCode",{parentName:"li"},"JdbcTemplateConfiguration")," \u7c7b")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Jdbc Template\u63d0\u4f9b\u7684\u4e3b\u8981\u51e0\u7c7b\u65b9\u6cd5\uff1a")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"execute"),"\uff1a\u53ef\u4ee5\u7528\u4e8e\u6267\u884c\u4efb\u4f55SQL\u8bed\u53e5\uff0c\u4e00\u822c\u7528\u4e8e\u6267\u884cDDL\u8bed\u53e5"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"update"),"/",Object(c.b)("inlineCode",{parentName:"li"},"batchUpdate"),"\uff1a\u589e\u5220\u6539\u8bed\u53e5\uff0cbatch\u7528\u4e8e\u6279\u91cf\u5904\u7406"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"query"),"/",Object(c.b)("inlineCode",{parentName:"li"},"queryFor"),"\uff1a\u6267\u884c\u67e5\u8be2\u8bed\u53e5"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"call"),"\uff1a\u7528\u4e8e\u6267\u884c\u5b58\u50a8\u8fc7\u7a0b\u3001\u51fd\u6570\u76f8\u5173\u8bed\u53e5")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u6d4b\u8bd5")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@SpringBootTest\nclass Springboot03JdbcApplicationTests {\n    /**\n     * Spring Boot \u9ed8\u8ba4\u63d0\u4f9b\u4e86\u6570\u636e\u6e90\uff0c\u9ed8\u8ba4\u63d0\u4f9b\u4e86 org.springframework.jdbc.core.JdbcTemplate\n     * JdbcTemplate \u4e2d\u4f1a\u81ea\u5df1\u6ce8\u5165\u6570\u636e\u6e90\uff0c\u7528\u4e8e\u7b80\u5316 JDBC\u64cd\u4f5c\n     * \u8fd8\u80fd\u907f\u514d\u4e00\u4e9b\u5e38\u89c1\u7684\u9519\u8bef,\u4f7f\u7528\u8d77\u6765\u4e5f\u4e0d\u7528\u518d\u81ea\u5df1\u6765\u5173\u95ed\u6570\u636e\u5e93\u8fde\u63a5\n     */\n    @Autowired\n    JdbcTemplate jdbcTemplate;\n\n    @Test\n    void contextLoads() throws SQLException {\n        String sql = "select * from user";\n        List<Map<String, Object>> maps = jdbcTemplate.queryForList(sql);\n        System.out.println(maps);\n    }\n}\n')),Object(c.b)("p",null,"\u7ed3\u679c"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"[{id=1, name=\u6539\u540d\u7684, password=123456}, {id=2, name=\u72c2\u795e2, password=123456}, {id=3, name=map\u6765\u7684, password=123123}, {id=4, name=\u72c2\u795e1, password=123123}, {id=5, name=\u6ce8\u89e3\u6765\u7684, password=123}]\n")))}p.isMDXComponent=!0},338:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,m=s["".concat(o,".").concat(u)]||s[u]||d[u]||c;return n?a.a.createElement(m,i(i({ref:t},b),{},{components:n})):a.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var b=2;b<c;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},513:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/17-9e24eed4bd9808fd97332f45480b81b0.png"}}]);