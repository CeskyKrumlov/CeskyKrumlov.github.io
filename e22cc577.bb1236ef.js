(window.webpackJsonp=window.webpackJsonp||[]).push([[408],{1086:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/18-b5672fdd96623ab8732238a99b4540ac.png"},1087:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/2-72d1f1405cf2ac93f7d7e607543521b5.gif"},464:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),i=(a(0),a(520)),b={id:"10.druid",title:"\u6574\u5408Druid",hide_title:!0},c={unversionedId:"springboot/10.druid",id:"springboot/10.druid",isDocsHomePage:!1,title:"\u6574\u5408Druid",description:"\u6574\u5408Druid",source:"@site/docs/springboot/10.\u6574\u5408Druid.md",slug:"/springboot/10.druid",permalink:"/docs/springboot/10.druid",version:"current",sidebar:"someSidebar",previous:{title:"SpringMVC\u81ea\u52a8\u914d\u7f6e\u539f\u7406",permalink:"/docs/springboot/9.springmvc"},next:{title:"\u6574\u5408JDBC",permalink:"/docs/springboot/10.jdbc"}},l=[{value:"\u6574\u5408Druid",id:"\u6574\u5408druid",children:[{value:"\u914d\u7f6eDruid\u6570\u636e\u6e90",id:"\u914d\u7f6edruid\u6570\u636e\u6e90",children:[]},{value:"\u914d\u7f6eDruid\u6570\u636e\u6e90\u76d1\u63a7",id:"\u914d\u7f6edruid\u6570\u636e\u6e90\u76d1\u63a7",children:[]}]}],o={rightToc:l};function d(e){var t=e.components,b=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,b,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u6574\u5408druid"},"\u6574\u5408Druid"),Object(i.b)("p",null,"Druid \u662f\u963f\u91cc\u5df4\u5df4\u5f00\u6e90\u5e73\u53f0\u4e0a\u4e00\u4e2a\u6570\u636e\u5e93\u8fde\u63a5\u6c60\u5b9e\u73b0\uff0c\u7ed3\u5408\u4e86 C3P0\u3001DBCP \u7b49 DB \u6c60\u7684\u4f18\u70b9\uff0c\u540c\u65f6\u52a0\u5165\u4e86\u65e5\u5fd7\u76d1\u63a7\u3002"),Object(i.b)("p",null,"Druid \u53ef\u4ee5\u5f88\u597d\u7684\u76d1\u63a7 DB \u6c60\u8fde\u63a5\u548c SQL \u7684\u6267\u884c\u60c5\u51b5\uff0c\u5929\u751f\u5c31\u662f\u9488\u5bf9\u76d1\u63a7\u800c\u751f\u7684 DB \u8fde\u63a5\u6c60\u3002"),Object(i.b)("p",null,"Druid\u5df2\u7ecf\u5728\u963f\u91cc\u5df4\u5df4\u90e8\u7f72\u4e86\u8d85\u8fc7600\u4e2a\u5e94\u7528\uff0c\u7ecf\u8fc7\u4e00\u5e74\u591a\u751f\u4ea7\u73af\u5883\u5927\u89c4\u6a21\u90e8\u7f72\u7684\u4e25\u82db\u8003\u9a8c\u3002"),Object(i.b)("p",null,"Spring Boot 2.0 \u4ee5\u4e0a\u9ed8\u8ba4\u4f7f\u7528 Hikari \u6570\u636e\u6e90\uff0c\u53ef\u4ee5\u8bf4 Hikari \u4e0e Driud \u90fd\u662f\u5f53\u524d Java Web \u4e0a\u6700\u4f18\u79c0\u7684\u6570\u636e\u6e90\uff0c\u6211\u4eec\u6765\u91cd\u70b9\u4ecb\u7ecd Spring Boot \u5982\u4f55\u96c6\u6210 Druid \u6570\u636e\u6e90\uff0c\u5982\u4f55\u5b9e\u73b0\u6570\u636e\u5e93\u76d1\u63a7\u3002"),Object(i.b)("p",null,"Github\u5730\u5740\uff1a",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/alibaba/druid/"}),"https://github.com/alibaba/druid/")),Object(i.b)("p",null,"\u4e2d\u6587\u6587\u6863\uff1a",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/alibaba/druid/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98"}),"https://github.com/alibaba/druid/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"com.alibaba.druid.pool.DruidDataSource \u57fa\u672c\u914d\u7f6e\u53c2\u6570\u5982\u4e0b\uff1a")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u914d\u7f6e"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u7f3a\u7701\u503c"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"name"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'\u914d\u7f6e\u8fd9\u4e2a\u5c5e\u6027\u7684\u610f\u4e49\u5728\u4e8e\uff0c\u5982\u679c\u5b58\u5728\u591a\u4e2a\u6570\u636e\u6e90\uff0c\u76d1\u63a7\u7684\u65f6\u5019\u53ef\u4ee5\u901a\u8fc7\u540d\u5b57\u6765\u533a\u5206\u5f00\u6765\u3002\u5982\u679c\u6ca1\u6709\u914d\u7f6e\uff0c\u5c06\u4f1a\u751f\u6210\u4e00\u4e2a\u540d\u5b57\uff0c\u683c\u5f0f\u662f\uff1a"DataSource-" + System.identityHashCode(this). \u53e6\u5916\u914d\u7f6e\u6b64\u5c5e\u6027\u81f3\u5c11\u57281.0.5\u7248\u672c\u4e2d\u662f\u4e0d\u8d77\u4f5c\u7528\u7684\uff0c\u5f3a\u884c\u8bbe\u7f6ename\u4f1a\u51fa\u9519\u3002',Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"http://blog.csdn.net/lanmo555/article/details/41248763"}),"\u8be6\u60c5-\u70b9\u6b64\u5904"),"\u3002")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"url"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u8fde\u63a5\u6570\u636e\u5e93\u7684url\uff0c\u4e0d\u540c\u6570\u636e\u5e93\u4e0d\u4e00\u6837\u3002\u4f8b\u5982\uff1a mysql : jdbc:mysql://10.20.153.104:3306/druid2 oracle : jdbc:oracle:thin:@10.20.149.85:1521:ocnauto")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"username"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u8fde\u63a5\u6570\u636e\u5e93\u7684\u7528\u6237\u540d")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"password"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u8fde\u63a5\u6570\u636e\u5e93\u7684\u5bc6\u7801\u3002\u5982\u679c\u4f60\u4e0d\u5e0c\u671b\u5bc6\u7801\u76f4\u63a5\u5199\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528ConfigFilter\u3002",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/alibaba/druid/wiki/%E4%BD%BF%E7%94%A8ConfigFilter"}),"\u8be6\u7ec6\u770b\u8fd9\u91cc"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"driverClassName"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u6839\u636eurl\u81ea\u52a8\u8bc6\u522b"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u8fd9\u4e00\u9879\u53ef\u914d\u53ef\u4e0d\u914d\uff0c\u5982\u679c\u4e0d\u914d\u7f6edruid\u4f1a\u6839\u636eurl\u81ea\u52a8\u8bc6\u522bdbType\uff0c\u7136\u540e\u9009\u62e9\u76f8\u5e94\u7684driverClassName")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"initialSize"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"0"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u521d\u59cb\u5316\u65f6\u5efa\u7acb\u7269\u7406\u8fde\u63a5\u7684\u4e2a\u6570\u3002\u521d\u59cb\u5316\u53d1\u751f\u5728\u663e\u793a\u8c03\u7528init\u65b9\u6cd5\uff0c\u6216\u8005\u7b2c\u4e00\u6b21getConnection\u65f6")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"maxActive"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"8"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u6700\u5927\u8fde\u63a5\u6c60\u6570\u91cf")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"maxIdle"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"8"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5df2\u7ecf\u4e0d\u518d\u4f7f\u7528\uff0c\u914d\u7f6e\u4e86\u4e5f\u6ca1\u6548\u679c")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"minIdle"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u6700\u5c0f\u8fde\u63a5\u6c60\u6570\u91cf")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"maxWait"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u83b7\u53d6\u8fde\u63a5\u65f6\u6700\u5927\u7b49\u5f85\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2\u3002\u914d\u7f6e\u4e86maxWait\u4e4b\u540e\uff0c\u7f3a\u7701\u542f\u7528\u516c\u5e73\u9501\uff0c\u5e76\u53d1\u6548\u7387\u4f1a\u6709\u6240\u4e0b\u964d\uff0c\u5982\u679c\u9700\u8981\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6euseUnfairLock\u5c5e\u6027\u4e3atrue\u4f7f\u7528\u975e\u516c\u5e73\u9501\u3002")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"poolPreparedStatements"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u662f\u5426\u7f13\u5b58preparedStatement\uff0c\u4e5f\u5c31\u662fPSCache\u3002PSCache\u5bf9\u652f\u6301\u6e38\u6807\u7684\u6570\u636e\u5e93\u6027\u80fd\u63d0\u5347\u5de8\u5927\uff0c\u6bd4\u5982\u8bf4oracle\u3002\u5728mysql\u4e0b\u5efa\u8bae\u5173\u95ed\u3002")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"maxPoolPrepared-StatementPerConnectionSize"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-1"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u8981\u542f\u7528PSCache\uff0c\u5fc5\u987b\u914d\u7f6e\u5927\u4e8e0\uff0c\u5f53\u5927\u4e8e0\u65f6\uff0cpoolPreparedStatements\u81ea\u52a8\u89e6\u53d1\u4fee\u6539\u4e3atrue\u3002\u5728Druid\u4e2d\uff0c\u4e0d\u4f1a\u5b58\u5728Oracle\u4e0bPSCache\u5360\u7528\u5185\u5b58\u8fc7\u591a\u7684\u95ee\u9898\uff0c\u53ef\u4ee5\u628a\u8fd9\u4e2a\u6570\u503c\u914d\u7f6e\u5927\u4e00\u4e9b\uff0c\u6bd4\u5982\u8bf4100")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"validationQuery"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u7528\u6765\u68c0\u6d4b\u8fde\u63a5\u662f\u5426\u6709\u6548\u7684sql\uff0c\u8981\u6c42\u662f\u4e00\u4e2a\u67e5\u8be2\u8bed\u53e5\uff0c\u5e38\u7528select 'x'\u3002\u5982\u679cvalidationQuery\u4e3anull\uff0ctestOnBorrow\u3001testOnReturn\u3001testWhileIdle\u90fd\u4e0d\u4f1a\u8d77\u4f5c\u7528\u3002")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"validationQueryTimeout"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5355\u4f4d\uff1a\u79d2\uff0c\u68c0\u6d4b\u8fde\u63a5\u662f\u5426\u6709\u6548\u7684\u8d85\u65f6\u65f6\u95f4\u3002\u5e95\u5c42\u8c03\u7528jdbc Statement\u5bf9\u8c61\u7684void setQueryTimeout(int seconds)\u65b9\u6cd5")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"testOnBorrow"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"true"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u7533\u8bf7\u8fde\u63a5\u65f6\u6267\u884cvalidationQuery\u68c0\u6d4b\u8fde\u63a5\u662f\u5426\u6709\u6548\uff0c\u505a\u4e86\u8fd9\u4e2a\u914d\u7f6e\u4f1a\u964d\u4f4e\u6027\u80fd\u3002")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"testOnReturn"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5f52\u8fd8\u8fde\u63a5\u65f6\u6267\u884cvalidationQuery\u68c0\u6d4b\u8fde\u63a5\u662f\u5426\u6709\u6548\uff0c\u505a\u4e86\u8fd9\u4e2a\u914d\u7f6e\u4f1a\u964d\u4f4e\u6027\u80fd\u3002")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"testWhileIdle"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5efa\u8bae\u914d\u7f6e\u4e3atrue\uff0c\u4e0d\u5f71\u54cd\u6027\u80fd\uff0c\u5e76\u4e14\u4fdd\u8bc1\u5b89\u5168\u6027\u3002\u7533\u8bf7\u8fde\u63a5\u7684\u65f6\u5019\u68c0\u6d4b\uff0c\u5982\u679c\u7a7a\u95f2\u65f6\u95f4\u5927\u4e8etimeBetweenEvictionRunsMillis\uff0c\u6267\u884cvalidationQuery\u68c0\u6d4b\u8fde\u63a5\u662f\u5426\u6709\u6548\u3002")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"keepAlive"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false \uff081.0.28\uff09"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u8fde\u63a5\u6c60\u4e2d\u7684minIdle\u6570\u91cf\u4ee5\u5185\u7684\u8fde\u63a5\uff0c\u7a7a\u95f2\u65f6\u95f4\u8d85\u8fc7minEvictableIdleTimeMillis\uff0c\u5219\u4f1a\u6267\u884ckeepAlive\u64cd\u4f5c\u3002")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"timeBetweenEvictionRunsMillis"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"1\u5206\u949f\uff081.0.14\uff09"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u6709\u4e24\u4e2a\u542b\u4e49\uff1a 1) Destroy\u7ebf\u7a0b\u4f1a\u68c0\u6d4b\u8fde\u63a5\u7684\u95f4\u9694\u65f6\u95f4\uff0c\u5982\u679c\u8fde\u63a5\u7a7a\u95f2\u65f6\u95f4\u5927\u4e8e\u7b49\u4e8eminEvictableIdleTimeMillis\u5219\u5173\u95ed\u7269\u7406\u8fde\u63a5\u3002 2) testWhileIdle\u7684\u5224\u65ad\u4f9d\u636e\uff0c\u8be6\u7ec6\u770btestWhileIdle\u5c5e\u6027\u7684\u8bf4\u660e")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"numTestsPerEvictionRun"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"30\u5206\u949f\uff081.0.14\uff09"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u4e0d\u518d\u4f7f\u7528\uff0c\u4e00\u4e2aDruidDataSource\u53ea\u652f\u6301\u4e00\u4e2aEvictionRun")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"minEvictableIdleTimeMillis"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u8fde\u63a5\u4fdd\u6301\u7a7a\u95f2\u800c\u4e0d\u88ab\u9a71\u9010\u7684\u6700\u5c0f\u65f6\u95f4")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"connectionInitSqls"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u7269\u7406\u8fde\u63a5\u521d\u59cb\u5316\u7684\u65f6\u5019\u6267\u884c\u7684sql")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"exceptionSorter"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u6839\u636edbType\u81ea\u52a8\u8bc6\u522b"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5f53\u6570\u636e\u5e93\u629b\u51fa\u4e00\u4e9b\u4e0d\u53ef\u6062\u590d\u7684\u5f02\u5e38\u65f6\uff0c\u629b\u5f03\u8fde\u63a5")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"filters"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5c5e\u6027\u7c7b\u578b\u662f\u5b57\u7b26\u4e32\uff0c\u901a\u8fc7\u522b\u540d\u7684\u65b9\u5f0f\u914d\u7f6e\u6269\u5c55\u63d2\u4ef6\uff0c\u5e38\u7528\u7684\u63d2\u4ef6\u6709\uff1a \u76d1\u63a7\u7edf\u8ba1\u7528\u7684filter:stat \u65e5\u5fd7\u7528\u7684filter:log4j \u9632\u5fa1sql\u6ce8\u5165\u7684filter:wall")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"proxyFilters"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b\u662f",Object(i.b)("inlineCode",{parentName:"td"},"List<com.alibaba.druid.filter.Filter>"),"\uff0c\u5982\u679c\u540c\u65f6\u914d\u7f6e\u4e86filters\u548cproxyFilters\uff0c\u662f\u7ec4\u5408\u5173\u7cfb\uff0c\u5e76\u975e\u66ff\u6362\u5173\u7cfb")))),Object(i.b)("h2",{id:"\u914d\u7f6edruid\u6570\u636e\u6e90"},"\u914d\u7f6eDruid\u6570\u636e\u6e90"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"\u6dfb\u52a0Maven\u4f9d\u8d56"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>com.alibaba</groupId>\n    <artifactId>druid</artifactId>\n    <version>1.1.21</version>\n</dependency>\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"\u5728applicaiton.yaml\u4e2d\uff0c\u914d\u7f6e\u5207\u6362\u6570\u636e\u6e90"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"spring:\n  datasource:\n    username: root\n    password: root\n    #?serverTimezone=UTC\u89e3\u51b3\u65f6\u533a\u7684\u62a5\u9519\n    url: jdbc:mysql://localhost:3306/test?serverTimezone=UTC&useUnicode=true&characterEncoding=utf-8\n    driver-class-name: com.mysql.jdbc.Driver\n    type: com.alibaba.druid.pool.DruidDataSource # \u914d\u7f6e\u4f7f\u7528Druid\u6570\u636e\u6e90\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"\u6d4b\u8bd5\u662f\u5426\u5207\u6362\u6210\u529f"),Object(i.b)("img",{src:a(1086).default,style:{zoom:"80%",boxShadow:"5px 7px 28px #333333"}}),Object(i.b)("br",null)),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"\u8be6\u7ec6\u8bbe\u7f6e"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6570\u636e\u6e90\u8fde\u63a5\u6c60\u521d\u59cb\u5316\u5927\u5c0f"),Object(i.b)("li",{parentName:"ul"},"\u6700\u5927\u8fde\u63a5\u6570"),Object(i.b)("li",{parentName:"ul"},"\u7b49\u5f85\u65f6\u95f4"),Object(i.b)("li",{parentName:"ul"},"\u6700\u5c0f\u8fde\u63a5\u6570"),Object(i.b)("li",{parentName:"ul"},"\u65e5\u5fd7"),Object(i.b)("li",{parentName:"ul"},"...")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"spring:\n  datasource:\n    username: root\n    password: root\n    #?serverTimezone=UTC\u89e3\u51b3\u65f6\u533a\u7684\u62a5\u9519\n    url: jdbc:mysql://localhost:3306/test?serverTimezone=UTC&useUnicode=true&characterEncoding=utf-8\n    driver-class-name: com.mysql.jdbc.Driver\n    type: com.alibaba.druid.pool.DruidDataSource # \u914d\u7f6e\u4f7f\u7528Druid\u6570\u636e\u6e90\n\n    #Spring Boot \u9ed8\u8ba4\u662f\u4e0d\u6ce8\u5165\u8fd9\u4e9b\u5c5e\u6027\u503c\u7684\uff0c\u9700\u8981\u81ea\u5df1\u7ed1\u5b9a\n    #druid \u6570\u636e\u6e90\u4e13\u6709\u914d\u7f6e\n    initialSize: 5\n    minIdle: 5\n    maxActive: 20\n    maxWait: 60000\n    timeBetweenEvictionRunsMillis: 60000\n    minEvictableIdleTimeMillis: 300000\n    validationQuery: SELECT 1 FROM DUAL\n    testWhileIdle: true\n    testOnBorrow: false\n    testOnReturn: false\n    poolPreparedStatements: true\n\n    #\u914d\u7f6e\u76d1\u63a7\u7edf\u8ba1\u62e6\u622a\u7684filters\uff0cstat:\u76d1\u63a7\u7edf\u8ba1\u3001log4j\uff1a\u65e5\u5fd7\u8bb0\u5f55\u3001wall\uff1a\u9632\u5fa1sql\u6ce8\u5165\n    #\u5982\u679c\u5141\u8bb8\u65f6\u62a5\u9519  java.lang.ClassNotFoundException: org.apache.log4j.Priority\n    #\u5219\u5bfc\u5165 log4j \u4f9d\u8d56\u5373\u53ef\uff0cMaven \u5730\u5740\uff1ahttps://mvnrepository.com/artifact/log4j/log4j\n    filters: stat,wall,log4j\n    maxPoolPreparedStatementPerConnectionSize: 20\n    useGlobalDataSourceStat: true\n    connectionProperties: druid.stat.mergeSql=true;druid.stat.slowSqlMillis=500\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Log4j maven\u5750\u6807"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>log4j</groupId>\n    <artifactId>log4j</artifactId>\n    <version>1.2.17</version>\n</dependency>\n")),Object(i.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-tip alert alert--success"}),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u63d0\u793a")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u9700\u8981\u624b\u52a8\u4e3aDruidDataSource\u7ed1\u5b9a\u5168\u5c40\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u53c2\u6570\uff0c\u518d\u6dfb\u52a0\u5230\u5bb9\u5668\u4e2d\uff0c\u800c\u4e0d\u518d\u4f7f\u7528SpringBoot\u81ea\u52a8\u751f\u6210\u7684dataSource\u5bf9\u8c61"))),Object(i.b)("p",{parentName:"li"},"\u7ed1\u5b9a\u5168\u5c40\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684 druid \u6570\u636e\u6e90\u5c5e\u6027\u5230 com.alibaba.druid.pool.DruidDataSource\u4ece\u800c\u8ba9\u5b83\u4eec\u751f\u6548       "),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},'@ConfigurationProperties(prefix = "spring.datasource")'),"\uff1a"),Object(i.b)("p",{parentName:"li"},"\u4f5c\u7528\u5c31\u662f\u5c06\u5168\u5c40\u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u524d\u7f00\u4e3a spring.datasource\u7684\u5c5e\u6027\u503c\u6ce8\u5165\u5230",Object(i.b)("inlineCode",{parentName:"p"},"com.alibaba.druid.pool.DruidDataSource")," \u7684\u540c\u540d\u53c2\u6570\u4e2d"))),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'@Configuration\npublic class DruidConfig {\n\n    @ConfigurationProperties(prefix = "spring.datasource")\n    @Bean\n    public DataSource druidDataSource() {\n        return new DruidDataSource();\n    }\n}\n'))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"\u6d4b\u8bd5"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'@Test\nvoid testDataSource() throws SQLException {\n    System.out.println(dataSource.getClass());\n    Connection connection = dataSource.getConnection();\n    System.out.println(connection);\n\n    DruidDataSource druidDataSource = (DruidDataSource) dataSource;\n    System.out.println("Druid Data Source \u6570\u636e\u6e90\u6700\u5927\u8fde\u63a5\u6570 : " + druidDataSource.getMaxActive());\n    System.out.println("Druid Data Source \u6570\u636e\u6e90\u521d\u59cb\u5316\u8fde\u63a5\u6570 : " + druidDataSource.getInitialSize());\n\n    connection.close();\n}\n')),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"com.alibaba.druid.proxy.jdbc.ConnectionProxyImpl@5f0f9947\nDruid Data Source \u6570\u636e\u6e90\u6700\u5927\u8fde\u63a5\u6570 : 20\nDruid Data Source \u6570\u636e\u6e90\u521d\u59cb\u5316\u8fde\u63a5\u6570 : 5\n")))),Object(i.b)("h2",{id:"\u914d\u7f6edruid\u6570\u636e\u6e90\u76d1\u63a7"},"\u914d\u7f6eDruid\u6570\u636e\u6e90\u76d1\u63a7"),Object(i.b)("p",null,"Druid \u6570\u636e\u6e90\u5177\u6709\u76d1\u63a7\u7684\u529f\u80fd\uff0c\u5e76\u63d0\u4f9b\u4e86\u4e00\u4e2a web \u754c\u9762\u65b9\u4fbf\u7528\u6237\u67e5\u770b"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"\u8bbe\u7f6eDruid\u540e\u53f0\u7ba1\u7406\u9875\u9762"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u767b\u9646\u8d26\u53f7\u3001\u5bc6\u7801"),Object(i.b)("li",{parentName:"ul"},"\u914d\u7f6eDruid\u76d1\u63a7\u7ba1\u7406\u540e\u53f0\u7684Servlet\n\u5185\u7f6eServlet\u5bb9\u5668\u6ca1\u6709web.xml\u6587\u4ef6\uff0c\u6240\u4ee5\u4f7f\u7528SpringBoot\u6ce8\u518cServlet"),Object(i.b)("li",{parentName:"ul"},"\u5404\u79cd\u53c2\u6570\u53ef\u4ee5\u5728",Object(i.b)("inlineCode",{parentName:"li"},"com.alibaba.druid.support.http.StatViewServlet"),"\u7684\u7236\u7c7b ",Object(i.b)("inlineCode",{parentName:"li"},"com.alibaba.druid.support.http.ResourceServlet "),"\u4e2d\u627e\u5230"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"\u914d\u7f6e Druid web\u76d1\u63a7filter\u8fc7\u6ee4\u5668"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'@Bean\npublic ServletRegistrationBean statViewServlet() {\n    ServletRegistrationBean<StatViewServlet> bean =\n        new ServletRegistrationBean<>(new StatViewServlet(), "/druid/*");\n    // \u8fd9\u4e9b\u53c2\u6570\u53ef\u4ee5\u5728 com.alibaba.druid.support.http.StatViewServlet\n    // \u7684\u7236\u7c7b com.alibaba.druid.support.http.ResourceServlet \u4e2d\u627e\u5230\n    Map<String, String> initParams = new HashMap<>();\n    initParams.put("loginUsername", "admin");\n    initParams.put("loginPassword", "admin");\n    //\u914d\u7f6e\u8c01\u53ef\u4ee5\u8bbf\u95ee\u540e\u53f0\n    //initParams.put("allow", "localhost")\uff1a\u8868\u793a\u53ea\u6709\u672c\u673a\u53ef\u4ee5\u8bbf\u95ee\n    //initParams.put("allow", "")\uff1a\u4e3a\u7a7a\u6216\u8005\u4e3anull\u65f6\uff0c\u8868\u793a\u5141\u8bb8\u6240\u6709\u8bbf\u95ee\n    initParams.put("allow", "127.0.0.1");\n    //deny\uff1aDruid \u540e\u53f0\u62d2\u7edd\u8c01\u8bbf\u95ee\n    //initParams.put("kuangshen", "192.168.1.20");\u8868\u793a\u7981\u6b62\u6b64ip\u8bbf\u95ee\n    bean.setInitParameters(initParams);\n    return bean;\n}\n\n@Bean\npublic FilterRegistrationBean duridFilterRegistrationBean() {\n    FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean();\n    filterRegistrationBean.setFilter(new WebStatFilter());\n    Map<String, String> initParams = new HashMap<String, String>();\n    //\u8bbe\u7f6e\u5ffd\u7565\u8bf7\u6c42\n    initParams.put("exclusions", "*.js,*.gif,*.jpg,*.bmp,*.png,*.css,*.ico,/druid/*");\n    filterRegistrationBean.setInitParameters(initParams);\n    filterRegistrationBean.addUrlPatterns("/*");\n    return filterRegistrationBean;\n}\n')),Object(i.b)("p",{parentName:"li"},"\u8bbf\u95eehttp://localhost:8080/druid/login.html"),Object(i.b)("img",{src:a(1087).default,style:{zoom:"80%",boxShadow:"5px 7px 28px #333333"}}),Object(i.b)("br",null))))}d.isMDXComponent=!0},520:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,b=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,j=p["".concat(b,".").concat(u)]||p[u]||m[u]||i;return a?r.a.createElement(j,c(c({ref:t},o),{},{components:a})):r.a.createElement(j,c({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,b=new Array(i);b[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var o=2;o<i;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);