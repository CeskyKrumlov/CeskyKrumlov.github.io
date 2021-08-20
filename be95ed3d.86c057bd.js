(window.webpackJsonp=window.webpackJsonp||[]).push([[386],{442:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(2),r=t(6),i=(t(0),t(567)),l={id:"6.pageHelper",title:"\u5206\u9875",hide_title:!0},s={unversionedId:"mybatis/6.pageHelper",id:"mybatis/6.pageHelper",isDocsHomePage:!1,title:"\u5206\u9875",description:"\u5206\u9875",source:"@site/docs/mybatis/6.\u5206\u9875.md",slug:"/mybatis/6.pageHelper",permalink:"/docs/mybatis/6.pageHelper",version:"current",sidebar:"someSidebar",previous:{title:"\u65e5\u5fd7",permalink:"/docs/mybatis/5.log"},next:{title:"\u6ce8\u89e3\u5f00\u53d1",permalink:"/docs/mybatis/7.annotation"}},c=[{value:"\u5206\u9875",id:"\u5206\u9875",children:[{value:"Limit\u5206\u9875",id:"limit\u5206\u9875",children:[]},{value:"RowBounds\u5206\u9875\uff08\u4e86\u89e3\uff09",id:"rowbounds\u5206\u9875\uff08\u4e86\u89e3\uff09",children:[]},{value:"\u5206\u9875\u63d2\u4ef6MybatisPageHelper",id:"\u5206\u9875\u63d2\u4ef6mybatispagehelper",children:[{value:"\u5750\u6807",id:"\u5750\u6807",children:[]},{value:"\u914d\u7f6e\u65b9\u5f0f1\uff1a\u5728Mybatis\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e",id:"\u914d\u7f6e\u65b9\u5f0f1\uff1a\u5728mybatis\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e",children:[]},{value:"\u914d\u7f6e\u65b9\u5f0f2\uff1aSpring\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u65b9\u5f0f2\uff1aspring\u914d\u7f6e\u6587\u4ef6",children:[]},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",children:[]}]}]}],o={rightToc:c};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u5206\u9875"},"\u5206\u9875"),Object(i.b)("p",null,"\u601d\u8003\uff1a\u95ee\u4ec0\u4e48\u8981\u5206\u9875\uff1f"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u51cf\u5c11\u6570\u636e\u7684\u5904\u7406\u91cf")),Object(i.b)("h2",{id:"limit\u5206\u9875"},"Limit\u5206\u9875"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT * FROM USER LIMIT startIndex, pageSize\nSELECT * FROM USER LIMIT 0, 2\n\n# \u67e5\u8be2[0, 3)  \u8bb0\u5f550, 1, 2\nSELECT * FROM USER LIMIT 3 \n")),Object(i.b)("p",null,"\u4f7f\u7528Mybatis\u5b9e\u73b0\u5206\u9875\uff0c\u6838\u5fc3\u5c31\u662fSql"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"\u63a5\u53e3"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"List<User> getUserByLimit(Map<String, Integer> map);\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Mapper.xml"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<select id="getUserByLimit" parameterType="map" resultType="com.bsx.pojo.User">\n    SELECT * FROM USER LIMIT #{startIndex}, #{pageSize}\n</select>\n'))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"\u6d4b\u8bd5\u7c7b"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),' \n@Test\npublic void testGetUserByLimit() throws IOException {\n    String resource = "mybatis-config.xml";\n    InputStream resourceAsStream = Resources.getResourceAsStream(resource);\n    SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(resourceAsStream);\n    SqlSession sqlSession = sqlSessionFactory.openSession();\n\n\n    try {\n        UserMapper mapper = sqlSession.getMapper(UserMapper.class);\n        HashMap<String, Integer> hashMap = new HashMap<String, Integer>();\n        hashMap.put("startIndex", 0);\n        hashMap.put("pageSize", 2);\n\n        List<User> userByLimit = mapper.getUserByLimit(hashMap);\n\n        for (User user : userByLimit) {\n            System.out.println(user);\n        }\n\n    } catch (Exception e) {\n        e.printStackTrace();\n    } finally {\n        sqlSession.close();\n    }\n\n}\n')))),Object(i.b)("h2",{id:"rowbounds\u5206\u9875\uff08\u4e86\u89e3\uff09"},"RowBounds\u5206\u9875\uff08\u4e86\u89e3\uff09"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u63a5\u53e3"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"List<User> getUserByRowBounds();\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"mapper.xml"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!--    rowBounds\u5206\u9875--\x3e\n<select id="getUserByRowBounds" resultType="com.bsx.pojo.User">\n    SELECT * FROM USER\n</select>\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u6d4b\u8bd5"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void testGetUserByRowBounds() throws IOException {\n    String resource = "mybatis-config.xml";\n    InputStream inputStream = Resources.getResourceAsStream(resource);\n    SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);\n    SqlSession sqlSession = sqlSessionFactory.openSession();\n\n    try {\n        //\u901a\u8fc7RowBounds\u5b9e\u73b0\n        RowBounds rowBounds = new RowBounds(1, 2);\n\n        //\u901a\u8fc7Java\u4ee3\u7801\u5c42\u9762\u5b9e\u73b0\u5206\u9875\n        List<User> users = sqlSession.selectList("com.bsx.dao.UserMapper" +\n                                                 ".getUserByRowBounds", null, rowBounds);\n        for (User user : users) {\n            System.out.println(user);\n        }\n    } catch (Exception e) {\n        e.printStackTrace();\n    } finally {\n        sqlSession.close();\n    }\n}\n\n')))),Object(i.b)("h2",{id:"\u5206\u9875\u63d2\u4ef6mybatispagehelper"},"\u5206\u9875\u63d2\u4ef6MybatisPageHelper"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://blog.csdn.net/eson_15/article/details/52270046"}),"https://blog.csdn.net/eson_15/article/details/52270046")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"layui\u5206\u9875")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://blog.csdn.net/ardo_pass/article/details/78694717"}),"https://blog.csdn.net/ardo_pass/article/details/78694717")),Object(i.b)("h3",{id:"\u5750\u6807"},"\u5750\u6807"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),"\x3c!-- mybatis\u5206\u9875\u63d2\u4ef6 --\x3e\n<dependency>\n    <groupId>com.github.pagehelper</groupId>\n    <artifactId>pagehelper</artifactId>\n    <version>5.1.4</version>\n</dependency>\n")),Object(i.b)("h3",{id:"\u914d\u7f6e\u65b9\u5f0f1\uff1a\u5728mybatis\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e"},"\u914d\u7f6e\u65b9\u5f0f1\uff1a\u5728Mybatis\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!-- \u914d\u7f6e\u5206\u9875\u63d2\u4ef6 --\x3e\n<plugins>\n    <plugin interceptor="com.github.pagehelper.PageInterceptor">\n        \x3c!-- \u8bbe\u7f6e\u6570\u636e\u5e93\u7c7b\u578b Oracle,Mysql,MariaDB,SQLite,Hsqldb,PostgreSQL\u516d\u79cd\u6570\u636e\u5e93--\x3e\n        <property name="helperDialect" value="mysql"/>\n    </plugin>\n</plugins>\n')),Object(i.b)("h3",{id:"\u914d\u7f6e\u65b9\u5f0f2\uff1aspring\u914d\u7f6e\u6587\u4ef6"},"\u914d\u7f6e\u65b9\u5f0f2\uff1aSpring\u914d\u7f6e\u6587\u4ef6"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'2. Using in Spring application.xml\n\nconfig org.mybatis.spring.SqlSessionFactoryBean as following:\n\n<bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">\n  \x3c!-- other configuration --\x3e\n  <property name="plugins">\n    <array>\n      <bean class="com.github.pagehelper.PageInterceptor">\n        <property name="properties">\n          \x3c!-- config params as the following --\x3e\n          <value>\n            param1=value1\n          </value>\n        </property>\n      </bean>\n    </array>\n  </property>\n</bean>\n')),Object(i.b)("h3",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public class DocServiceImpl implements IDocService {\n    @Autowired\n    private DocMapper docMapper;\n\n    @Override\n    public PageInfo<Doc> selectDocByPage1(int currentPage, int pageSize) {\n        // \u4f7f\u7528PageHelper\u7c7b\u5373\u53ef\u5206\u9875\n        PageHelper.startPage(currentPage, pageSize);\n        // PageHelper.startPage\u65b9\u6cd5\u7684\u4e0b\u4e00\u6b21\u6570\u636e\u5e93\u67e5\u8be2\u64cd\u4f5c\u4f1a\u88ab\u5206\u9875\n        List<Doc> list = docMapper.selectByPageAndSelections();\n        // \u7528PageInfo\u6784\u9020\u65b9\u6cd5\u63a5\u6536\u8fd4\u56de\u7684\u67e5\u8be2\u7ed3\u679c\uff0c\u53ef\u4ee5\u5f97\u5230\u8fd9\u6b21\u67e5\u8be2\u7684\u5206\u9875\u4fe1\u606f\n        PageInfo<Doc> pageInfo = new PageInfo<>(list);\n        // \u4f8b\u5982\u83b7\u53d6\u672c\u6b21\u5206\u9875\u67e5\u8be2\uff0c\u6570\u636e\u5e93\u8fd4\u56de\u7684\u603b\u8bb0\u5f55\u6570\n        long total = pageInfo.getTotal();  // \u4ece\u5206\u9875\u4fe1\u606f\u5bf9\u8c61\u4e2d\u67e5\u8be2\u51fa\u6570\u636e\u5e93\u8bb0\u5f55\u603b\u6570\n        return pageInfo;\n    }\n}\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u524d\u7aefjs")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'// \u5b9a\u4e49\u5c55\u793a\u8868\u683c\u548c\u5206\u9875\u680f\u7684\u65b9\u6cd5\nvar currentPage = 1;  // \u9ed8\u8ba4\u5f53\u524d\u9875\nvar limitSize = 15;  // \u6bcf\u9875\u663e\u793a\u6761\u6570\nfunction show(currentPage, limitSize) {\n    $.ajax({\n        type: "post",\n        dataType: "json",\n        async: true,\n        beforeSend: () => {\n            layer.load = load;\n        },\n        complete: () => {\n            layer.close(load);\n        },\n        data: {\n            \'aac002\': aac002,\n            \'aac003\': aac003,\n            \'akb020_in\': akb020_in,\n            \'aae030\': aae030,\n            \'aae031\': aae031,\n            \'currentPage\': currentPage,\n            \'limitSize\': limitSize\n        },\n        url: "<%=basePath%>vocationalcontroller/queryLocalMedicalInformation.json",\n        success: function (data) {\n            layer.close(load)\n            // \u5f97\u5230\u7684\u54cd\u5e94\n            console.log(data);\n            // \u603b\u7ed3\u679c\u6570\n            var total = data.total;\n\n            // \u5f97\u5230\u7684\u54cd\u5e94\u6570\u636e\n            var resultList = data.list;\n            // console.log(resultList);\n            // \u9875\u9762\u5e8f\u53f7\n            var index = 0;\n            // \u5904\u7406\u5b9e\u4ed8\u6807\u5fd7\u8f6c\u4e49\n            var mioFlag = "";\n            // \u5904\u7406\u8bc1\u4ef6\u7c7b\u578b\u8f6c\u4e49\n            var cardType = "";\n            // \u6700\u7ec8\u586b\u5145\u8868\u683c\u4f53\u7684html\u5185\u5bb9\n            var html = "";\n\n            for (var i = 0; i < resultList.length; i++) {\n                // \u5904\u7406\u5e8f\u53f7\n                index = i + 1;\n\n                html += "<tr>" +\n                    "<td>" + index + "</td>" +\n                    "<td>" + resultList[i].AAC003 + "</td>" +\n                    "<td>" + resultList[i].AAC002 + "</td>" +\n                    "<td>" + resultList[i].AKB021 + "</td>" +\n                    "<td>" + resultList[i].YKC193 + "</td>" +\n                    "<td>" + resultList[i].AAE030 + "</td>" +\n                    "<td>" + resultList[i].AAE031 + "</td>" +\n                    "<td>" + resultList[i].AAA103 + "</td>" +\n                    +"</tr>"\n            }\n            //\u5f80id\u4e3acotent\u7684\u8868\u683c\u4e2d\u52a0\u6570\u636e\n            $("#id-tbody").html(html);\n\n            //\u5206\u9875\n            layui.use(\'laypage\', function () {\n                var laypage = layui.laypage;\n\n                //\u6267\u884c\u4e00\u4e2alaypage\u5b9e\u4f8b\n                //\u81ea\u5b9a\u4e49\u6837\u5f0f\n                laypage.render({\n                    elem: \'id-pageSeparate\'\n                    , count: total // \u603b\u6761\u6570\n                    , limit: limitSize // \u6bcf\u9875\u6761\u6570\n                    , curr: currentPage // \u5f53\u524d\u9875\n                    , theme: \'#90EE90\' // \u989c\u8272\n                    , jump: function (obj, first) {\n                        if (!first) { // \u5982\u679c\u4e0d\u662f\u5206\u9875\u7684\u7b2c\u4e00\u9875\u624d\u6267\u884c\n                            // alert(obj.curr);  // \u5f53\u524d\u88ab\u70b9\u51fb\u7684\u9875\u7801\n                            show(obj.curr, limitSize); // \u4f20\u5165\u88ab\u70b9\u51fb\u7684\u9875\u7801\u548c\u6bcf\u9875\u7684\u5927\u5c0f\n                        } \n                    }\n                });\n            });\n        }\n    });\n}\n\n// \u8c03\u7528\nshow(currentPage, limitSize);\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u524d\u7aefhtml")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'\x3c!-- \u5206\u9875\u6846 --\x3e\n<div class="mt-1" style="text-align: center;">\n    <div id="id-pageSeparate"></div>\n</div>\n')))}p.isMDXComponent=!0},567:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),p=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},b=function(e){var n=p(e.components);return r.a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),b=p(t),m=a,d=b["".concat(l,".").concat(m)]||b[m]||u[m]||i;return t?r.a.createElement(d,s(s({ref:n},o),{},{components:t})):r.a.createElement(d,s({ref:n},o))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var o=2;o<i;o++)l[o]=t[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);