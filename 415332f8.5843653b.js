(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{185:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),o=(n(0),n(564)),c={id:"5.log",title:"\u65e5\u5fd7",hide_title:!0},l={unversionedId:"mybatis/5.log",id:"mybatis/5.log",isDocsHomePage:!1,title:"\u65e5\u5fd7",description:"\u65e5\u5fd7",source:"@site/docs/mybatis/5.\u65e5\u5fd7.md",slug:"/mybatis/5.log",permalink:"/docs/mybatis/5.log",version:"current",sidebar:"someSidebar",previous:{title:"ResultMap",permalink:"/docs/mybatis/4.resultMap"},next:{title:"\u5206\u9875",permalink:"/docs/mybatis/6.pageHelper"}},b=[{value:"\u65e5\u5fd7",id:"\u65e5\u5fd7",children:[{value:"1.\u65e5\u5fd7\u5de5\u5382",id:"1\u65e5\u5fd7\u5de5\u5382",children:[{value:"STDOUT_LOGGING",id:"stdout_logging",children:[]},{value:"LOG4J",id:"log4j",children:[]}]}]}],i={rightToc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"\u65e5\u5fd7"},"\u65e5\u5fd7"),Object(o.b)("h2",{id:"1\u65e5\u5fd7\u5de5\u5382"},"1.\u65e5\u5fd7\u5de5\u5382"),Object(o.b)("p",null,"\u5728\u4f7f\u7528Mybatis\u7684\u60c5\u51b5\u4e0b\uff0c\u5982\u4f55\u6253\u5370\u6211\u4eec\u8f93\u5165\u7684SQL\u8bed\u53e5\u5462\uff1f"),Object(o.b)("p",null,"\u5982\u679c\u4e00\u4e2a\u6570\u636e\u5e93\u64cd\u4f5c\u51fa\u73b0\u4e86\u5f02\u5e38\uff0c\u6211\u4eec\u9700\u8981\u6392\u9519\u3002\u65e5\u5fd7\u5c31\u662f\u6700\u597d\u7684\u52a9\u624b\u3002"),Object(o.b)("p",null,"\u66fe\u7ecf\uff1asout\u3001debug"),Object(o.b)("p",null,"\u73b0\u5728\uff1a\u65e5\u5fd7\u5de5\u5382"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u8bbe\u7f6e\u540d"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u63cf\u8ff0"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u6709\u6548\u503c"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u9ed8\u8ba4\u503c"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"logImpl"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u6307\u5b9aMybatis\u6240\u6709\u65e5\u5fd7\u7684\u5177\u4f53\u5b9e\u73b0\uff0c\u672a\u6307\u5b9a\u65f6\u5c06\u81ea\u52a8\u67e5\u627e"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"SLF4J\u3001LOG4J\u3001",Object(o.b)("br",null),"LOG4J2\u3001JDK_LOGGING\u3001",Object(o.b)("br",null),"COMMONS_LOGGING\u3001",Object(o.b)("br",null),"STDOUT_LOGGING\u3001",Object(o.b)("br",null),"NO_LOGGING"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u672a\u8bbe\u7f6e")))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"SLF4J")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"LOG4J\u3010\u8981\u6c42\u638c\u63e1\u3011")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"LOG4J2")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"JDK_LOGGING")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"COMMONS_LOGGING")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"STDOUT_LOGGING\u3010\u8981\u6c42\u638c\u63e1\u3011")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"NO_LOGGING"))),Object(o.b)("h3",{id:"stdout_logging"},"STDOUT_LOGGING"),Object(o.b)("p",null,"\u5728Mybatis\u4e2d\u5177\u4f53\u4f7f\u7528\u54ea\u4e00\u4e2a\u65e5\u5fd7\u5b9e\u73b0\uff0c\u5728\u8bbe\u7f6e\u4e2d\u8bbe\u5b9a\u3002\u5728",Object(o.b)("inlineCode",{parentName:"p"},"mybatis-config.xml"),"\u4e2d\u8bbe\u7f6e",Object(o.b)("inlineCode",{parentName:"p"},"settings"),"\u6807\u7b7e"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<settings>\n    <setting name="logImpl" value="STDOUT_LOGGING"/>\n</settings>\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u65e5\u5fd7\nOpening JDBC Connection\nCreated connection 1920467934.\nSetting autocommit to false on JDBC Connection [com.mysql.jdbc.JDBC4Connection@727803de]\n==>  Preparing: SELECT * FROM USER WHERE id = ? \n==> Parameters: 1(Integer)\n<==    Columns: id, name, password\n<==        Row: 1, \u6539\u540d\u7684, 123456\n<==      Total: 1\nUser(id=1, name=\u6539\u540d\u7684, pwd=123456)\nResetting autocommit to true on JDBC Connection [com.mysql.jdbc.JDBC4Connection@727803de]\nClosing JDBC Connection [com.mysql.jdbc.JDBC4Connection@727803de]\nReturned connection 1920467934 to pool.\n")),Object(o.b)("h3",{id:"log4j"},"LOG4J"),Object(o.b)("p",null,"\u53ef\u4ee5\u63a7\u5236\u6bcf\u4e00\u6761\u65e5\u5fd7\u7684\u8f93\u51fa\u683c\u5f0f\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u6bcf\u4e00\u6761\u65e5\u5fd7\u7684\u7ea7\u522b\uff0c\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u7075\u6d3b\u7684\u8fdb\u884c\u914d\u7f6e\uff0c\u800c\u4e0d\u9700\u8981\u4fee\u6539\u5e94\u7528\u7684\u4ee3\u7801\u3002"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"\u5148\u5bfc\u5165jar\u5305"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>log4j</groupId>\n    <artifactId>log4j</artifactId>\n    <version>1.2.17</version>\n</dependency>\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Log4j\u914d\u7f6e\u6587\u4ef6"),Object(o.b)("p",{parentName:"li"},"\u5728",Object(o.b)("inlineCode",{parentName:"p"},"resources"),"\u4e0b\u65b0\u5efa",Object(o.b)("inlineCode",{parentName:"p"},"log4j.properties")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-properties"}),"#\u5c06\u7b49\u7ea7\u4e3aDEBUG\u7684\u65e5\u5fd7\u4fe1\u606f\u8f93\u51fa\u5230console\u548cfile\u8fd9\u4e24\u4e2a\u76ee\u7684\u5730\uff0cconsole\u548cfile\u7684\u5b9a\u4e49\u5728\u4e0b\u9762\u7684\u4ee3\u7801\nlog4j.rootLogger=DEBUG,console,file\n\n#\u63a7\u5236\u53f0\u8f93\u51fa\u7684\u76f8\u5173\u8bbe\u7f6e\nlog4j.appender.console = org.apache.log4j.ConsoleAppender\nlog4j.appender.console.Target = System.out\nlog4j.appender.console.Threshold=DEBUG\nlog4j.appender.console.layout = org.apache.log4j.PatternLayout\nlog4j.appender.console.layout.ConversionPattern=[%c]-%m%n\n\n#\u6587\u4ef6\u8f93\u51fa\u7684\u76f8\u5173\u8bbe\u7f6e\nlog4j.appender.file = org.apache.log4j.RollingFileAppender\nlog4j.appender.file.File=./log/log4j.log\nlog4j.appender.file.MaxFileSize=10mb\nlog4j.appender.file.Threshold=DEBUG\nlog4j.appender.file.layout=org.apache.log4j.PatternLayout\nlog4j.appender.file.layout.ConversionPattern=[%p][%d{yy-MM-dd}][%c]%m%n\n\n#\u65e5\u5fd7\u8f93\u51fa\u7ea7\u522b\nlog4j.logger.org.mybatis=DEBUG\nlog4j.logger.java.sql=DEBUG\nlog4j.logger.java.sql.Statement=DEBUG\nlog4j.logger.java.sql.ResultSet=DEBUG\nlog4j.logger.java.sql.PreparedStatement=DEBUG\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"\u8bbe\u7f6eLOG4J\u4e3a\u65e5\u5fd7\u7684\u5b9e\u73b0"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<settings>\n    <setting name="logImpl" value="LOG4J"/>\n</settings>\n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Log4j\u7684\u4f7f\u7528"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"[org.apache.ibatis.transaction.jdbc.JdbcTransaction]-Opening JDBC Connection\n[org.apache.ibatis.datasource.pooled.PooledDataSource]-Created connection 688766789.\n[org.apache.ibatis.transaction.jdbc.JdbcTransaction]-Setting autocommit to false on JDBC Connection [com.mysql.jdbc.JDBC4Connection@290dbf45]\n[com.bsx.dao.UserMapper.getUserById]-==>  Preparing: SELECT * FROM USER WHERE id = ? \n[com.bsx.dao.UserMapper.getUserById]-==> Parameters: 1(Integer)\n[com.bsx.dao.UserMapper.getUserById]-<==      Total: 1\nUser(id=1, name=\u6539\u540d\u7684, pwd=123456)\n[org.apache.ibatis.transaction.jdbc.JdbcTransaction]-Resetting autocommit to true on JDBC Connection [com.mysql.jdbc.JDBC4Connection@290dbf45]\n[org.apache.ibatis.transaction.jdbc.JdbcTransaction]-Closing JDBC Connection [com.mysql.jdbc.JDBC4Connection@290dbf45]\n[org.apache.ibatis.datasource.pooled.PooledDataSource]-Returned connection 688766789 to pool.\n")),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"\u7b80\u5355\u4f7f\u7528")),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"\u5728\u8981\u4f7f\u7528Log4j\u7684\u7c7b\u4e2d\u5bfc\u5165\u5305")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"\u751f\u6210\u65e5\u5fd7\u5bf9\u8c61Logger,\u52a0\u8f7d\u53c2\u6570\u4e3a\u5f53\u524d\u7c7b\u7684class\u6587\u4ef6"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'import org.apache.log4j.Logger;\npublic class UserDaoTest {\n\n    static Logger logger = Logger.getLogger(UserDaoTest.class);\n\n    @Test\n    public void testLog4j() {\n        logger.info("info: \u8fdb\u5165\u4e86testLog4j\u65b9\u6cd5");\n        logger.debug("debug: \u8fdb\u5165\u4e86log4j");\n        logger.error("error\uff1a\u8fdb\u5165\u4e86Log4j");\n    }\n}\n')))))))}p.isMDXComponent=!0},564:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),s=p(n),j=a,O=s["".concat(c,".").concat(j)]||s[j]||g[j]||o;return n?r.a.createElement(O,l(l({ref:t},i),{},{components:n})):r.a.createElement(O,l({ref:t},i))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=j;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);