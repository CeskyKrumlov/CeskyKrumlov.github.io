(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{293:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),l=(a(0),a(570)),b={id:"3.config",title:"\u914d\u7f6e\u89e3\u6790",hide_title:!0},c={unversionedId:"mybatis/3.config",id:"mybatis/3.config",isDocsHomePage:!1,title:"\u914d\u7f6e\u89e3\u6790",description:"\u914d\u7f6e\u89e3\u6790",source:"@site/docs/mybatis/3.\u914d\u7f6e\u89e3\u6790.md",slug:"/mybatis/3.config",permalink:"/docs/mybatis/3.config",version:"current",sidebar:"someSidebar",previous:{title:"CRUD",permalink:"/docs/mybatis/2.crud"},next:{title:"ResultMap",permalink:"/docs/mybatis/4.resultMap"}},p=[{value:"\u914d\u7f6e\u89e3\u6790",id:"\u914d\u7f6e\u89e3\u6790",children:[{value:"1. \u6838\u5fc3\u914d\u7f6e\u6587\u4ef6",id:"1-\u6838\u5fc3\u914d\u7f6e\u6587\u4ef6",children:[]},{value:"2. \u73af\u5883\u914d\u7f6e(environments)",id:"2-\u73af\u5883\u914d\u7f6eenvironments",children:[]},{value:"3. \u5c5e\u6027(properties)",id:"3-\u5c5e\u6027properties",children:[]},{value:"4. \u7c7b\u578b\u522b\u540d\uff08typeAliases\uff09",id:"4-\u7c7b\u578b\u522b\u540d\uff08typealiases\uff09",children:[]},{value:"5. \u8bbe\u7f6e(Settings)",id:"5-\u8bbe\u7f6esettings",children:[]},{value:"6. \u5176\u4ed6\u8bbe\u7f6e",id:"6-\u5176\u4ed6\u8bbe\u7f6e",children:[]},{value:"7. \u6620\u5c04\u5668(Mapper)",id:"7-\u6620\u5c04\u5668mapper",children:[]},{value:"8. \u751f\u547d\u5468\u671f",id:"8-\u751f\u547d\u5468\u671f",children:[]}]}],i={rightToc:p};function s(e){var t=e.components,b=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},i,b,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"\u914d\u7f6e\u89e3\u6790"},"\u914d\u7f6e\u89e3\u6790"),Object(l.b)("h2",{id:"1-\u6838\u5fc3\u914d\u7f6e\u6587\u4ef6"},"1. \u6838\u5fc3\u914d\u7f6e\u6587\u4ef6"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"mybatis-config.xml")),Object(l.b)("img",{src:a(958).default,style:{zoom:"50%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(l.b)("br",null),Object(l.b)("h2",{id:"2-\u73af\u5883\u914d\u7f6eenvironments"},"2. \u73af\u5883\u914d\u7f6e(environments)"),Object(l.b)("p",null,"Mybatis\u53ef\u4ee5\u9002\u5e94\u591a\u79cd\u73af\u5883\uff0c",Object(l.b)("strong",{parentName:"p"},"\u4e0d\u8fc7\u8981\u8bb0\u4f4f\uff0c\u6bcf\u4e2aSqlSessionFactory\u5b9e\u4f8b\u53ea\u80fd\u9009\u62e9\u4e00\u79cd\u73af\u5883")),Object(l.b)("img",{src:a(959).default,style:{zoom:"40%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(l.b)("br",null),Object(l.b)("img",{src:a(960).default,style:{zoom:"40%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(l.b)("br",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Mybatis\u9ed8\u8ba4\u7684\u4e8b\u52a1\u7ba1\u7406\u5668 -> JDBC | MANAGED"),Object(l.b)("li",{parentName:"ul"},"Mybatis\u9ed8\u8ba4\u7684\u8fde\u63a5\u6c60:  POOLED | UNPOOLED | JNDI")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u914d\u7f6e\u591a\u5957\u73af\u5883")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<environments default="test">\n    <environment id="development">\n        <transactionManager type="JDBC"/>\n        <dataSource type="POOLED">\n            <property name="driver" value="com.mysql.jdbc.Driver"/>\n            <property name="url" value="jdbc:mysql://localhost:3306/test?useSSL=false&amp;useUnicode=true&amp;characterEncoding=UTF-8"/>\n            <property name="username" value="root"/>\n            <property name="password" value="root"/>\n        </dataSource>\n    </environment>\n\n    <environment id="test">\n        <transactionManager type="JDBC"></transactionManager>\n        <dataSource type="POOLED">\n            <property name="driver" value="com.mysql.jdbc.Driver"/>\n            <property name="url" value="jdbc:mysql://localhost:3306/test?useSSL=false&amp;useUnicode=true&amp;characterEncoding=UTF-8"/>\n            <property name="username" value="root"/>\n            <property name="password" value="root"/>\n        </dataSource>\n    </environment>\n</environments>\n')),Object(l.b)("h2",{id:"3-\u5c5e\u6027properties"},"3. \u5c5e\u6027(properties)"),Object(l.b)("p",null,"\u53ef\u4ee5\u901a\u8fc7properties\u5c5e\u6027\u5b9e\u73b0\u5f15\u7528\u914d\u7f6e\u6587\u4ef6"),Object(l.b)("p",null,"\u7f16\u5199\u4e00\u4e2a\u6570\u636e\u5e93\u914d\u7f6e\u6587\u4ef6"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-properties"}),"driver=com.mysql.jdbc.Driver\nurl=jdbc:mysql://localhost:3306/test?useSSL=false&useUnicode=true&characterEncoding=UTF-8\nusername=root\npassword=root\n")),Object(l.b)("p",null,"\u5728\u6838\u5fc3\u914d\u7f6e\u6587\u4ef6\u4e2d\u5f15\u5165"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!--    \u5f15\u5165\u5916\u90e8\u914d\u7f6e\u6587\u4ef6--\x3e\n<properties resource="db.properties"/>\n\n<environments default="test">\n    <environment id="development">\n        <transactionManager type="JDBC"/>\n        <dataSource type="POOLED">\n            <property name="driver" value="com.mysql.jdbc.Driver"/>\n            <property name="url" value="jdbc:mysql://localhost:3306/test?useSSL=false&amp;useUnicode=true&amp;characterEncoding=UTF-8"/>\n            <property name="username" value="root"/>\n            <property name="password" value="root"/>\n        </dataSource>\n    </environment>\n\n    <environment id="test">\n        <transactionManager type="JDBC"></transactionManager>\n        <dataSource type="POOLED">\n            <property name="driver" value="${driver}"/>\n            <property name="url" value="${url}"/>\n            <property name="username" value="${username}"/>\n            <property name="password" value="${password}"/>\n        </dataSource>\n    </environment>\n</environments>\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u76f4\u63a5\u5f15\u5165\u5916\u90e8\u6587\u4ef6"),Object(l.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u5728\u5176\u4e2d\u589e\u52a0\u4e00\u4e9b\u5c5e\u6027\u914d\u7f6e"),Object(l.b)("li",{parentName:"ul"},"\u5916\u90e8\u5f15\u5165\u914d\u7f6e\u6587\u4ef6\u4f18\u5148\u7ea7\u9ad8\u4e8e\u5185\u90e8\u914d\u7f6e\u7684")),Object(l.b)("h2",{id:"4-\u7c7b\u578b\u522b\u540d\uff08typealiases\uff09"},"4. \u7c7b\u578b\u522b\u540d\uff08typeAliases\uff09"),Object(l.b)("p",null,"\u7c7b\u578b\u522b\u540d\u65f6Java\u7c7b\u578b\u8bbe\u7f6e\u4e00\u4e2a\u77ed\u7684\u540d\u5b57\u3002\u5b83\u4e4b\u548cXML\u914d\u7f6e\u6709\u5173\uff0c\u5b58\u5728\u7684\u610f\u4e49\u4ec5\u5728\u4e8e\u51cf\u5c11\u7c7b\u5b8c\u5168\u9650\u5b9a\u540d\u7684\u5197\u4f59"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u65b9\u5f0f\u4e00\uff1a\u5728",Object(l.b)("inlineCode",{parentName:"li"},"mybatis-config.xml"),"\u4e2d\u6dfb\u52a0",Object(l.b)("inlineCode",{parentName:"li"},"typeAliases"),"\u6807\u7b7e\uff0c\u8bbe\u7f6e",Object(l.b)("inlineCode",{parentName:"li"},"typeAlias"),"\u6807\u7b7e")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!--    \u53ef\u4ee5\u7ed9\u5b9e\u4f53\u7c7b\u8d77\u522b\u540d--\x3e\n<typeAliases>\n    <typeAlias type="com.bsx.pojo.User" alias="User"/>\n</typeAliases>\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"mapper.xml")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'<select id="getUserList" resultType="User">\nSELECT * FROM USER;\n</select>\n')),Object(l.b)("p",null,"\u6d4b\u8bd5\u901a\u8fc7\u3002"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u65b9\u5f0f\u4e8c\uff1a\u5728",Object(l.b)("inlineCode",{parentName:"li"},"mybatis-config.xml"),"\u4e2d\u6dfb\u52a0",Object(l.b)("inlineCode",{parentName:"li"},"typeAliases"),"\u6807\u7b7e\uff0c\u8bbe\u7f6e",Object(l.b)("inlineCode",{parentName:"li"},"package"),"\u6807\u7b7e\n\u6307\u5b9a\u4e00\u4e2a\u5305\u540d\uff0cMybatis\u4f1a\u5728\u5305\u540d\u4e0b\u9762\u641c\u7d22\u9700\u8981\u7684Java Bean")),Object(l.b)("p",null,"\u5728\u6ca1\u6709\u6ce8\u89e3\u7684\u60c5\u51b5\u4e0b\uff0c\u4f1a\u4f7f\u7528Bean\u7684",Object(l.b)("strong",{parentName:"p"},"\u9996\u5b57\u6bcd\u5c0f\u5199"),"\u7684\u975e\u9650\u5b9a\u7c7b\u540d\u6765\u4f5c\u4e3a\u5b83\u7684\u522b\u540d\u3002\u82e5\u6709\u6ce8\u89e3\uff0c\u5219\u522b\u540d\u4e3a\u5176\u6ce8\u89e3\u503c"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!--    \u53ef\u4ee5\u5f00\u542f\u5305\u626b\u63cf--\x3e\n<typeAliases>\n    <package name="com.bsx.pojo"/>        \n</typeAliases>\n')),Object(l.b)("p",null,"\u626b\u63cf\u5b9e\u4f53\u7c7b\u7684\u62a5\u540d\uff0c\u9ed8\u8ba4\u522b\u540d\u4e3a\u5c31\u4e3a\u8fd9\u4e2a\u7c7b\u7684\u7c7b\u540d\u9996\u5b57\u6bcd\u5c0f\u5199"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'@Alias("user")\npublic class User{...}\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<select id="getUserList" resultType="user">\n    SELECT * FROM USER;\n</select>\n')),Object(l.b)("p",null,"\u6d4b\u8bd5\u901a\u8fc7"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u5b9e\u4f53\u7c7b\u6bd4\u8f83\u5c11\u65f6\uff0c\u4f7f\u7528\u7b2c\u4e00\u79cd\u65b9\u5f0f\uff0c\u5426\u5219\u5efa\u8bae\u4f7f\u7528\u7b2c\u4e8c\u79cd")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u7b2c\u4e00\u79cd\u53ef\u4ee5\u81ea\u5b9a\u4e49\u522b\u540d\uff0c\u7b2c\u4e8c\u79cd\u5219\u8981\u901a\u8fc7\u6ce8\u89e3\u81ea\u5b9a\u4e49\u522b\u540d")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Mybatis\u5185\u5efa\u4e86\u4e00\u4e9b\u57fa\u672c\u522b\u540d"),"\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"byte -> _byte")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"int -> _int")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"double -> _double")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Double -> double")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Integer -> int")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"HashMap -> hashmap")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Boolean -> boolean")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Short -> short"),Object(l.b)("p",{parentName:"li"},".... \u4ee5\u6b64\u7c7b\u63a8"))),Object(l.b)("h2",{id:"5-\u8bbe\u7f6esettings"},"5. \u8bbe\u7f6e(Settings)"),Object(l.b)("p",null,"\u8fd9\u662fMybatis\u79cd\u6781\u4e3a\u91cd\u8981\u7684\u8c03\u6574\u8bbe\u7f6e\uff0c\u4ed6\u4eec\u4f1a\u6539\u8fb9MyBaits\u7684\u8fd0\u884c\u65f6\u884c\u4e3a\u3002"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u540d"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u63cf\u8ff0"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u6709\u6548\u503c"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cacheEnabled"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5168\u5c40\u7684\u5f00\u542f\u6216\u5173\u95ed\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u6240\u6709\u6620\u5c04\u5668\u4ee5\u914d\u7f6e\u7684\u4efb\u4f55\u7f13\u5b58"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true/false"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"lazyLoadingEnabled"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5ef6\u8fdf\u52a0\u8f7d\u7684\u5168\u5c40\u5f00\u5173\u3002\u5f53\u5f00\u542f\u65f6\uff0c\u6240\u6709\u5173\u8054\u5bf9\u8c61\u90fd\u4f1a\u5ef6\u8fdf\u52a0\u8f7d\uff0c\u7279\u5b9a\u5173\u8054\u5173\u7cfb\u4e2d\u53ef\u901a\u8fc7\u8bbe\u7f6e",Object(l.b)("inlineCode",{parentName:"td"},"fetchType"),"\u5c5e\u6027\u6765\u8986\u76d6\u8be5\u9879\u7684\u5f00\u5173\u72b6\u6001"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true/false"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"useGenerateKeys"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5141\u8bb8JDBC\u652f\u6301\u81ea\u52a8\u751f\u6210\u4e3b\u952e\uff0c\u9700\u8981\u9a71\u52a8\u652f\u6301\u3002\u5982\u679c\u8bbe\u7f6e\u4e3atrue\u5219\u8fd9\u4e2a\u8bbe\u7f6e\u5f3a\u5236\u4f7f\u7528\u81ea\u52a8\u751f\u6210\u4e3b\u952e\uff0c\u5c3d\u7ba1\u4e00\u4e9b\u9a71\u52a8\u4e0d\u80fd\u652f\u6301\u4f46\u4ecd\u53ef\u6b63\u5e38\u5de5\u4f5c"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true/false"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"mapUnderscoreToCamelCase"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u662f\u5426\u5f00\u542f\u81ea\u52a8\u9a7c\u5cf0\u547d\u540d\u89c4\u5219\u6620\u5c04\uff0c\u5373\u4ece\u7ecf\u5178\u6570\u636e\u5e93\u5217\u540dA_COLUMN\u5230\u7ecf\u5178Java\u5c5e\u6027aCoulumn\u7684\u7c7b\u4f3c\u6620\u5c04"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true/false"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"logImpl"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u6307\u5b9aMybatis\u6240\u6709\u65e5\u5fd7\u7684\u5177\u4f53\u5b9e\u73b0\uff0c\u672a\u6307\u5b9a\u65f6\u5c06\u81ea\u52a8\u67e5\u627e"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SLF4J\u3001LOG4J\u3001",Object(l.b)("br",null),"LOG4J2\u3001JDK_LOGGING\u3001",Object(l.b)("br",null),"COMMONS_LOGGING\u3001",Object(l.b)("br",null),"STDOUT_LOGGING\u3001",Object(l.b)("br",null),"NO_LOGGING"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u672a\u8bbe\u7f6e")))),Object(l.b)("h2",{id:"6-\u5176\u4ed6\u8bbe\u7f6e"},"6. \u5176\u4ed6\u8bbe\u7f6e"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"typeHandlers(\u7c7b\u578b\u5904\u7406\u5668)"),Object(l.b)("li",{parentName:"ul"},"objectFactory(\u5bf9\u8c61\u5de5\u5382)"),Object(l.b)("li",{parentName:"ul"},"plugins(\u63d2\u4ef6)",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Mybatis Generator Core -> \u81ea\u52a8\u751f\u6210mybatis\u4ee3\u7801"),Object(l.b)("li",{parentName:"ul"},"Mybatis plus -> \u4e92\u8865\u63d2\u4ef6\uff0c\u63d0\u5347Mybatis\u6548\u7387"),Object(l.b)("li",{parentName:"ul"},"\u901a\u7528mapper")))),Object(l.b)("h2",{id:"7-\u6620\u5c04\u5668mapper"},"7. \u6620\u5c04\u5668(Mapper)"),Object(l.b)("p",null,"MapperRegistry: \u6ce8\u518c\u7ed1\u5b9a\u6211\u4eec\u7684Mapper.xml\u6587\u4ef6"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u56db\u79cd\u65b9\u5f0f")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u65b9\u5f0f\u4e00\uff1a",Object(l.b)("strong",{parentName:"li"},"\u63a8\u8350\u4f7f\u7528"))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!--\u4f7f\u7528\u76f8\u5bf9\u8def\u5f84\u7684\u8d44\u6e90\u5f15\u7528--\x3e\n<mappers>\n    <mapper resource="com/bsx/dao/UserMapper.xml"/>\n</mappers>\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),"\u65b9\u5f0f\u4e8c \x3c!--\u4f7f\u7528\u5b8c\u5168\u9650\u5b9a\u8d44\u6e90\u5b9a\u4f4d\u7b26URL--\x3e  \u4e0d\u63a8\u8350\u4f7f\u7528\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u65b9\u5f0f\u4e09\uff1a\u4f7f\u7528class\u6587\u4ef6\u7ed1\u5b9a\u6ce8\u518c")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!--\u4f7f\u7528\u6620\u5c04\u5668\u63a5\u53e3\u5b9e\u73b0\u7c7b\u7684\u5b8c\u5168\u9650\u5b9a\u7c7b\u540d--\x3e\n<mappers>\n    <mapper class="com.bsx.dao.UserMapper"/>\n</mappers>\n')),Object(l.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"\u63a5\u53e3\u548cmapper.xml\u6587\u4ef6\u540d\u5b57\u5fc5\u987b\u4e00\u81f4"),Object(l.b)("p",{parentName:"div"},"\u63a5\u53e3\u548cmapper.xml\u6587\u4ef6\u5fc5\u987b\u5728\u540c\u4e00\u5305\u5185"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u65b9\u5f0f\u56db\uff1a\u5c06\u5305\u5185\u7684\u6620\u5c04\u5668\u63a5\u53e3\u5b9e\u73b0\u5168\u90e8\u6ce8\u518c\u4e3a\u6620\u5c04\u5668")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<mappers>\n    <package name="com.bsx.dao"/>\n</mappers>\n')),Object(l.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"\u63a5\u53e3\u548cmapper.xml\u6587\u4ef6\u540d\u5b57\u5fc5\u987b\u4e00\u81f4"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u5982\u679c\u5e0c\u671bmapper.xml\u548c\u63a5\u53e3\u6587\u4ef6\u5206\u79bb\uff0c\u53ef\u4ee5\u5728resource\u76ee\u5f55\u4e0b\u5efa\u4e0e\u63a5\u53e3\u4e00\u6837\u7684\u5305\u8def\u5f84\uff0c\u7f16\u8bd1\u540e\u7684\u6587\u4ef6\u4f1a\u51fa\u73b0\u5728\u540c\u4e00\u8def\u5f84")),Object(l.b)("h2",{id:"8-\u751f\u547d\u5468\u671f"},"8. \u751f\u547d\u5468\u671f"),Object(l.b)("p",null,"\u751f\u547d\u5468\u671f\u662f\u81f3\u5173\u91cd\u8981\u7684\uff0c\u56e0\u4e3a",Object(l.b)("strong",{parentName:"p"},"\u9519\u8bef\u7684\u4f7f\u7528\u4f1a\u5bfc\u81f4\u975e\u5e38\u4e25\u91cd\u7684\u5e76\u53d1\u95ee\u9898")),Object(l.b)("p",null,Object(l.b)("img",{src:a(961).default})),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"SqlSessionFactoryBuilder"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4e00\u65e6\u521b\u5efa\u4e86",Object(l.b)("inlineCode",{parentName:"li"},"SqlSessionFactory"),"\uff0c\u5c31\u4e0d\u518d\u9700\u8981\u5b83\u4e86"),Object(l.b)("li",{parentName:"ul"},"\u5c40\u90e8\u53d8\u91cf"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"SqlSessionFactory"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u76f8\u5f53\u4e8e\u6570\u636e\u5e93\u8fde\u63a5\u6c60"),Object(l.b)("li",{parentName:"ul"},"\u4e00\u65e6\u88ab\u521b\u5efa\u5e94\u8be5\u5728\u5e94\u7528\u7684\u8fd0\u884c\u671f\u95f4\u4e00\u76f4\u5b58\u5728\uff0c\u6ca1\u6709\u4efb\u4f55\u7406\u7531\u4e22\u5f03\u5b83\u6216\u8005\u91cd\u65b0\u521b\u5efa\u53e6\u4e00\u4e2a\u5b9e\u4f8b\u3002\u591a\u6b21\u91cd\u5efa",Object(l.b)("inlineCode",{parentName:"li"},"SqlSessionFactroy"),"\u4f1a\u88ab\u89c6\u4e3a\u4e00\u79cd\u4e0d\u826f\u64cd\u4f5c\u3002\u56e0\u6b64",Object(l.b)("inlineCode",{parentName:"li"},"SqlSessionFactory"),"\u7684\u6700\u4f73\u4f5c\u7528\u57df\u662f\u5e94\u7528\u4f5c\u7528\u57dfApplication"),Object(l.b)("li",{parentName:"ul"},"\u6700\u7b80\u5355\u7684\u5c31\u662f\u4f7f\u7528",Object(l.b)("strong",{parentName:"li"},"\u5355\u4f8b\u6a21\u5f0f"),"\u6216\u8005\u9759\u6001\u5355\u4f8b\u6a21\u5f0f"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"SqlSession"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6bcf\u4e2a\u7ebf\u7a0b\u90fd\u5e94\u8be5\u6709\u5b83\u81ea\u5df1\u7684SqlSession\u5b9e\u4f8b\u3002"),Object(l.b)("li",{parentName:"ul"},"\u8fde\u63a5\u5230\u8fde\u63a5\u6c60\u7684\u4e00\u4e2a\u8bf7\u6c42"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"SqlSession"),"\u5b9e\u4f8b\u4e0d\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\uff0c\u56e0\u6b64\u4e0d\u80fd\u88ab\u5171\u4eab"),Object(l.b)("li",{parentName:"ul"},"\u9700\u8981\u5f00\u542f\u548c\u5173\u95ed"),Object(l.b)("li",{parentName:"ul"},"\u6700\u4f73\u4f5c\u7528\u57df\u662f\u65b9\u6cd5\u4f5c\u7528\u57df")))),Object(l.b)("p",null,Object(l.b)("img",{src:a(962).default})),Object(l.b)("p",null,"\u6bcf\u4e00\u4e2amapper\u4ee3\u8868\u4e00\u4e2a\u5177\u4f53\u7684\u4e1a\u52a1"))}s.isMDXComponent=!0},570:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),s=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},o=function(e){var t=s(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),o=s(a),u=n,O=o["".concat(b,".").concat(u)]||o[u]||m[u]||l;return a?r.a.createElement(O,c(c({ref:t},i),{},{components:a})):r.a.createElement(O,c({ref:t},i))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var i=2;i<l;i++)b[i]=a[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},958:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/1-5eb69237de8ba8bc5a78fd52d0b4c4bf.png"},959:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/2-dc33de025a2f7471f7f6841d2a75cd2c.png"},960:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/3-83a04f0647a1a9afa5a8214f704e7e11.png"},961:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/4-9e0efc6deae7ce56f984e561734241c2.png"},962:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/5-0116dd22b367089ac7e16fb02e62c909.png"}}]);