(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var a=n(2),c=n(6),r=(n(0),n(492)),b={id:"oracle",title:"Mybatis\u64cd\u4f5cOracle\u8e29\u5751",hide_title:!0},l={unversionedId:"mybatis/oracle",id:"mybatis/oracle",isDocsHomePage:!1,title:"Mybatis\u64cd\u4f5cOracle\u8e29\u5751",description:"Mybatis\u64cd\u4f5cOracle\u7684\u4e00\u4e9b\u5751\u4e0e\u603b\u7ed3",source:"@site/docs/mybatis/oracle.md",slug:"/mybatis/oracle",permalink:"/docs/mybatis/oracle",version:"current",sidebar:"someSidebar",previous:{title:"Mybatis\u7f13\u5b58",permalink:"/docs/mybatis/12.cache"},next:{title:"\u56de\u987eJavaWeb",permalink:"/docs/springmvc/1.javaweb"}},i=[{value:"Mybatis\u64cd\u4f5cOracle\u7684\u4e00\u4e9b\u5751\u4e0e\u603b\u7ed3",id:"mybatis\u64cd\u4f5coracle\u7684\u4e00\u4e9b\u5751\u4e0e\u603b\u7ed3",children:[{value:"\u8054\u8868\u5220\u9664",id:"\u8054\u8868\u5220\u9664",children:[]},{value:"\u81ea\u589e\u4e3b\u952e",id:"\u81ea\u589e\u4e3b\u952e",children:[{value:"\u5e8f\u5217\u7684\u5efa\u7acb",id:"\u5e8f\u5217\u7684\u5efa\u7acb",children:[]},{value:"\u5e8f\u5217\u7684\u5220\u9664",id:"\u5e8f\u5217\u7684\u5220\u9664",children:[]},{value:"\u901a\u8fc7\u5e8f\u5217\u83b7\u5f97\u5b8c\u6210\u81ea\u589e\u4e3b\u952e",id:"\u901a\u8fc7\u5e8f\u5217\u83b7\u5f97\u5b8c\u6210\u81ea\u589e\u4e3b\u952e",children:[]},{value:"\u5728\u63d2\u5165\u547d\u4ee4\u4e2d\u4f7f\u7528\u5e8f\u5217\u5b9e\u73b0\u81ea\u589e\u4e3b\u952e",id:"\u5728\u63d2\u5165\u547d\u4ee4\u4e2d\u4f7f\u7528\u5e8f\u5217\u5b9e\u73b0\u81ea\u589e\u4e3b\u952e",children:[]}]},{value:"\u81ea\u589e\u4e3b\u952e\u5e76\u8fd4\u56de\u4e3b\u952e\u503c\u5b9e\u73b0\u591a\u8868\u8054\u5408\u63d2\u5165",id:"\u81ea\u589e\u4e3b\u952e\u5e76\u8fd4\u56de\u4e3b\u952e\u503c\u5b9e\u73b0\u591a\u8868\u8054\u5408\u63d2\u5165",children:[{value:"selectKey\u6807\u7b7e",id:"selectkey\u6807\u7b7e",children:[]}]},{value:"\u6279\u91cf\u63d2\u5165",id:"\u6279\u91cf\u63d2\u5165",children:[]}]}],o={rightToc:i};function s(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"mybatis\u64cd\u4f5coracle\u7684\u4e00\u4e9b\u5751\u4e0e\u603b\u7ed3"},"Mybatis\u64cd\u4f5cOracle\u7684\u4e00\u4e9b\u5751\u4e0e\u603b\u7ed3"),Object(r.b)("h2",{id:"\u8054\u8868\u5220\u9664"},"\u8054\u8868\u5220\u9664"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u9700\u6c42\uff1a")),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u6709\u4e24\u4e2a\u8868\uff0cBusinessProcessStatus\u548cMioInfoLst\uff0c\u4e00\u6761BusinessProcessStatus\u5bf9\u5e94\u591a\u6761MioinfoLst\uff0c\u7528\u8001\u5e08\u548c\u5b66\u751f\u4e3e\u4f8b\u5b50"),Object(r.b)("li",{parentName:"ul"},"\u5b66\u751f\u548c\u8001\u5e08\uff0c\u4e00\u4e2a\u8001\u5e08\u6709\u4e00\u5806\u5b66\u751f\uff0c\u8001\u5e08\u81ea\u5df1\u6709\u4e2atid\uff0c\u5b66\u751f\u9664\u4e86\u81ea\u5df1\u7684id\u4e4b\u5916\u8fd8\u6709\u4e00\u4e2atid\uff0c\u7528\u6765\u6807\u8bb0\u81ea\u5df1\u7684\u8001\u5e08\u662f\u8c01"),Object(r.b)("li",{parentName:"ul"},"BusinessProcessStatus\u81ea\u5df1\u6709\u4e2aBID\uff0cMioInfoLst\u9664\u4e86\u81ea\u5df1\u7684id\u4e4b\u5916\u8fd8\u6709\u4e2aBID\u7528\u6765\u6307\u660e\u81ea\u5df1\u6240\u5c5e\u7684BusinessProcessStatus"),Object(r.b)("li",{parentName:"ul"},"\u4e4b\u6240\u4ee5\u4e0d\u5728\u8001\u5e08\u8fd9\u4e00\u7aef\u5f04\u4e00\u4e2aStudentID\u6765\u6807\u8bb0\u5b66\u751f\uff0c\u800c\u662f\u7528\u5b66\u751f\u5b58\u8001\u5e08tid\u7684\u65b9\u5f0f\uff0c\u662f\u56e0\u4e3a\u8fd9\u6837\u65b9\u4fbf\uff0c\u9053\u7406\u5982\u540c\u8ba9\u4e00\u5806\u5b66\u751f\u8bb0\u4f4f\u81ea\u5df1\u7684\u8001\u5e08\u6bd4\u8ba9\u8001\u5e08\u8bb0\u4f4f\u4e00\u5806\u5b66\u751f\u5bb9\u6613"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u5f53\u4e00\u4e2a\u8001\u5e08\u88ab\u5220\u9664\u4e86\uff0c\u90a3\u4e48\u8fd9\u4e2a\u8001\u5e08\u6240\u5c5e\u7684\u5b66\u751f\u5e94\u5f53\u81ea\u5df1\u628a\u81ea\u5df1\u5220\u9664\u4e86\uff0c\u4e0d\u7136\u5c31\u6210\u4e86\u5b64\u513f")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u5bf9\u7167\uff1aBusinessProcessStatus\u88ab\u5220\u9664\u65f6\uff0c\u6240\u5c5e\u7684MioInfoLst\u5e94\u8be5\u628a\u81ea\u5df1\u5220\u9664\u6389"))),Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u95ee\u9898\uff1a")),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u5f53\u8981\u5220\u9664\u4e00\u4e2aBusinessProcessStatus\u8bb0\u5f55\u65f6\uff0c\u9700\u8981\u53d6\u51fa\u5b83\u7684\u4e3b\u952eBID\uff0c\u7136\u540e\u628aMioInfoLst\u8868\u4e2d\u6240\u6709BID\u6307\u5411\u8fd9\u6761BusinessProcessStatus\u7684\u8bb0\u5f55\u5168\u5220\u4e86"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u5bf9\u4e8eMysql\uff1a"),Object(r.b)("inlineCode",{parentName:"li"},"delete from MioInfoLst,BusinessProcessStatus where BusinessProcessStatus.ID =  MioInfoLst.BID"),"\u5c31\u884c\u4e86"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u5bf9\u4e8eOracle\uff1a\u5f88\u4e0d\u5e78\uff0cOracle\u4e0d\u652f\u6301\u8fd9\u79cd\u8bed\u6cd5\uff0c\u5c31\u5f88\u86cb\u75bc"))),Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u89e3\u51b3\uff1a")),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u5728\u952e\u8868\u65f6\uff0c\u5916\u952e\u540e\u9762\u8ddf\u4e0a",Object(r.b)("inlineCode",{parentName:"strong"},"on delete cascade"),"\uff0c\u8fd9\u6837\u5f53\u4e3b\u8868\u8bb0\u5f55\u88ab\u5220\u9664\u65f6\uff0c\u5bf9\u5e94\u5b50\u8868\u7684\u8bb0\u5f55\u81ea\u52a8\u5c31\u88ab\u5220\u9664\u4e86\uff0cdelete\u8bed\u53e5\u76f4\u63a5\u53ef\u4ee5\u8fd9\u6837\u5199"))),Object(r.b)("pre",{parentName:"blockquote"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"delete from BusinessProcessStatus where credentialNum = #{credentialNum}\n"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE BusinessProcessStatus (\nID NUMBER PRIMARY KEY,\nBusinessName VARCHAR2(50),\nBusinessStatus VARCHAR2(50),\nBusinessMessage VARCHAR2(500),\nClaimNo VARCHAR2(20) NOT NULL,\nBusinessKeyNo VARCHAR2(20) NOT NULL,\nPersonGUID VARCHAR2(255),\nNAME VARCHAR2(60),\nSaveTime DATE NOT NULL,\ncredentialType VARCHAR2(2) NOT NULL,    \ncredentialNum VARCHAR2(22) NOT NULL\n)\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE MioInfoLst(\nID NUMBER PRIMARY KEY,\nMioFlag VARCHAR2(2) NOT NULL,\nMioAmnt NUMBER NOT NULL,\nPlnmioDate DATE NOT NULL,\nMioDate DATE,\nBankAccNo VARCHAR2(30) NOT NULL,\nBankCode VARCHAR2(50) NOT NULL,\nAccCustName VARCHAR2(200) NOT NULL,\nBID NUMBER NOT NULL,\nCONSTRAINT BusID FOREIGN KEY (BID) REFERENCES BusinessProcessStatus(ID) \non delete cascade\n)\n")),Object(r.b)("h2",{id:"\u81ea\u589e\u4e3b\u952e"},"\u81ea\u589e\u4e3b\u952e"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u9700\u6c42\uff1a")),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u5728\u6267\u884cinsert\u65f6\uff0c\u8868\u91cc\u6709\u4e2a\u81ea\u589e\u4e3b\u952e\uff0c\u6211\u4eec\u4e0d\u5173\u5fc3\u4e3b\u952e\u7684\u503c\uff0c\u5e0c\u671b\u5728\u63d2\u5165\u65f6\uff0c\u6570\u636e\u5e93\u81ea\u52a8\u7b97\u51fa\u65b0\u7684\u503c\u5f80\u91cc\u63d2\u5c31\u884c\u4e86"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u5bf9\u4e8eMysql\uff1a"),"\u5efa\u8868\u7684\u65f6\u5019\u5728\u4e3b\u952e\u540e\u9762\u5199\u4e2a",Object(r.b)("inlineCode",{parentName:"li"},"auto_increament"),"\u5c31\u884c\u4e86"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u5bf9\u4e8eOracle\uff1a"),"\u5f88\u4e0d\u5e78\uff0cOracle\u5b83\u4e0d\u4f1a"))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u89e3\u51b3\uff1a"),"\u5728Oracle\u4e2d\u53ef\u4ee5\u7528",Object(r.b)("strong",{parentName:"p"},"\u5e8f\u5217"),"\u6216\u8005",Object(r.b)("strong",{parentName:"p"},"\u89e6\u53d1\u5668"),"\uff0c\u6211\u5c31\u8bd5\u4e86\u4e0b\u5e8f\u5217\uff0c\u89e6\u53d1\u5668\u53bb\u81ea\u5df1\u67e5\u5427")),Object(r.b)("h3",{id:"\u5e8f\u5217\u7684\u5efa\u7acb"},"\u5e8f\u5217\u7684\u5efa\u7acb"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"CREATE SEQUENCE MioInfoLstAutoIncrement \nminvalue 1\nmaxvalue 999999999999999999999999999\nstart with 1\nincrement by 1\nnocache;  \nminvalue 1\nmaxvalue 999999999999999999999999999\nstart with 1\nincrement by 1\nnocache;\n")),Object(r.b)("h3",{id:"\u5e8f\u5217\u7684\u5220\u9664"},"\u5e8f\u5217\u7684\u5220\u9664"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"drop SEQUENCE MioInfoLstAutoIncrement \n")),Object(r.b)("h3",{id:"\u901a\u8fc7\u5e8f\u5217\u83b7\u5f97\u5b8c\u6210\u81ea\u589e\u4e3b\u952e"},"\u901a\u8fc7\u5e8f\u5217\u83b7\u5f97\u5b8c\u6210\u81ea\u589e\u4e3b\u952e"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u83b7\u53d6\u4e3b\u952e\u7684\u4e0b\u4e00\u4e2a\u503c"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"select MioInfoLstAutoIncrement.nextval from dual\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"dual\u662f\u4e2aOracle\u7684\u865a\u62df\u8868\uff0c\u4e5f\u4e0d\u7528\u4f60\u81ea\u5df1\u5efa\uff0c\u53cd\u6b63\u8fd9\u4e48\u7528\u5c31\u5bf9\u4e86\uff0c\u60f3\u77e5\u9053\u539f\u7406\u53bb\u67e5")),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u53ea\u8981\u4f60\u6267\u884c\u4e86\u8fd9\u4e2a\u547d\u4ee4\uff0c\u5e8f\u5217\u503c\u5c31\u4f1a\u589e\u52a0\uff0c\u4e0d\u8981\u770b\u5b83\u662f\u4e2aselect\u8bed\u53e5\uff0c\u6267\u884c\u5b8c\u503c\u4f1a\u589e\u52a0\uff01"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u83b7\u53d6\u4e3b\u952e\u7684\u5f53\u524d\u503c"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"select MioInfoLstAutoIncrement.currval from dual\n")),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u5f53\u4f60\u65b0\u5efa\u4e86\u4e00\u4e2a\u5e8f\u5217\uff0c\u5fc5\u987b\u6267\u884c\u4e00\u6b21\u4e0a\u9762\u90a3\u4e2a",Object(r.b)("inlineCode",{parentName:"p"},"nextval"),"\u547d\u4ee4\uff0c\u4e0d\u7136",Object(r.b)("inlineCode",{parentName:"p"},"currval"),"\u5c31\u62a5\u9519\uff0c\u6700\u597d\u624b\u52a8\u8dd1\u4e00\u6b21nextval\uff0c\u4e0d\u7136\u53ef\u80fd\u4e0aMybatis\u76f4\u63a5\u75af\u72c2\u62a5\u9519\uff0c\u4ee4\u4f60\u4e00\u8138\u61f5\u903c"))),Object(r.b)("h3",{id:"\u5728\u63d2\u5165\u547d\u4ee4\u4e2d\u4f7f\u7528\u5e8f\u5217\u5b9e\u73b0\u81ea\u589e\u4e3b\u952e"},"\u5728\u63d2\u5165\u547d\u4ee4\u4e2d\u4f7f\u7528\u5e8f\u5217\u5b9e\u73b0\u81ea\u589e\u4e3b\u952e"),Object(r.b)("blockquote",null,Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u5728MySQL\u7684insert\u8bed\u53e5\u4e2d\uff0c\u81ea\u589e\u4e3b\u952e\u7684\u4f4d\u7f6e\u76f4\u63a5\u5199\u4e2a",Object(r.b)("inlineCode",{parentName:"li"},"null"),"\u5c31\u884c\u4e86"),Object(r.b)("li",{parentName:"ul"},"\u5728Oracle\u4e2d\uff0c\u8981\u4f7f\u7528",Object(r.b)("inlineCode",{parentName:"li"},"\u5e8f\u5217\u540d.nextval"),"\u6765\u83b7\u53d6\u81ea\u589e\u4e3b\u952e\u503c"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"INSERT INTO\n                MioInfoLst (\n                ID,\n                MioFlag,\n                MioAmnt,\n                PlnmioDate,\n                MioDate,\n                BankAccNo,\n                BankCode,\n                AccCustName,\n                BID)\nvalues (\n                MioInfoLstAutoIncrement.NEXTVAL,\n                #{item.MioFlag},\n                #{item.MioAmnt},\n                to_date(#{item.MioDate},'yyyy/mm/dd HH24:MI:SS'),\n                to_date(#{item.PlnmioDate},'yyyy/mm/dd HH24:MI:SS'),\n                #{item.BankAccNo},\n                #{item.BankCode},\n                #{item.AccCustName},\n                #{item.BID}\n       );\n")),Object(r.b)("h2",{id:"\u81ea\u589e\u4e3b\u952e\u5e76\u8fd4\u56de\u4e3b\u952e\u503c\u5b9e\u73b0\u591a\u8868\u8054\u5408\u63d2\u5165"},"\u81ea\u589e\u4e3b\u952e\u5e76\u8fd4\u56de\u4e3b\u952e\u503c\u5b9e\u73b0\u591a\u8868\u8054\u5408\u63d2\u5165"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u9700\u6c42\uff1a")),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u6309\u7167\u6211\u4eec\u7684\u5bf9\u7167\u5c0f\u4f8b\u5b50\uff0c\u5047\u8bbe\u73b0\u5728\u8ba9\u4f60\u5f80\u6570\u636e\u5e93\u91cc\u5b58\u8001\u5e08\u548c\u5b66\u751f\uff0c\u90a3\u4f60\u8981\u89e3\u51b3\u4e00\u4e9b\u95ee\u9898"),Object(r.b)("li",{parentName:"ul"},"\u9996\u5148\u4f60\u63d2\u5165\u4e86\u4e00\u4e2a\u8001\u5e08\uff0c\u8fd9\u8001\u5e08\u81ea\u5df1\u6709\u4e2atid"),Object(r.b)("li",{parentName:"ul"},"\u63a5\u4e0b\u6765\u4f60\u8981\u63d2\u5165\u5b66\u751f\uff0c\u8fd9\u4e9b\u5b66\u751f\u662f\u4e0a\u9762\u90a3\u4e2a\u8001\u5e08\u7684\u5b66\u751f\uff0c\u6240\u4ee5\u8fd9\u4e9b\u5b66\u751f\u7684tid\u5b57\u6bb5\u7684\u503c\uff0c\u5c31\u662f\u4f60\u521a\u624d\u63d2\u5165\u7684\u90a3\u4e2a\u8001\u5e08\u7684tid\u503c")),Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u95ee\u9898\uff1a")),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u60f3\u8c61\u4e00\u4e0b\uff0c\u4f60\u5199\u4e86\u4e00\u6761SQL\uff0c\u628a\u8001\u5e08\u63d2\u8fdb\u6570\u636e\u5e93\u4e86\uff0c\u8001\u5e08\u7684tid\u662f\u81ea\u589e\u4e3b\u952e\uff0c\u81ea\u52a8\u751f\u6210\u7684\uff0c\u5728\u4f60\u7684Java\u7a0b\u5e8f\u4e2d\u8fd9\u4e2atid\u6839\u672c\u6ca1\u51fa\u73b0"),Object(r.b)("li",{parentName:"ul"},"\u63a5\u4e0b\u6765\u4f60\u8be5\u63d2\u5b66\u751f\u4e86\uff0c\u4f60\u9700\u8981\u901a\u8fc7Java\u7a0b\u5e8f\u628a\u4e0a\u9762\u90a3\u4e2a\u8001\u5e08\u7684tid\u4f20\u5230\u63d2\u5165\u5b66\u751f\u7684SQL\u8bed\u53e5\u91cc\uff0c\u586b\u5145\u5b66\u751f\u7684tid\u5b57\u6bb5"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u95ee\u9898\u5c31\u662f\u8fd9\u4e2atid\u5c31\u6ca1\u51fa\u73b0\u5728Java\u7a0b\u5e8f\u91cc\uff0c\u5c31\u662f\u63d2\u5165\u8001\u5e08\u7684\u65f6\u5019\u81ea\u5df1\u751f\u6210\u7684\uff0c\u5982\u4f55\u628a\u8fd9\u4e2a\u503c\u6363\u9f13\u51fa\u6765\uff0c\u597d\u8ba9\u6211\u4eec\u628a\u8fd9\u4e2atid\u4f20\u7ed9\u5b66\u751f\uff0c\u5b8c\u6210\u8054\u5408\u63d2\u5165"))),Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u89e3\u51b3\uff1a\u6211\u4eec\u9700\u8981\u4e00\u79cd\u65b9\u6cd5\uff0c\u5728SQL\u4e2d\u81ea\u52a8\u751f\u6210\u4e3b\u952e\u503c\u7684\u540c\u65f6\uff0c\u8fd8\u8981\u628a\u8fd9\u4e2a\u4e3b\u952e\u503c\u8fd4\u56de\u5230Java\u7a0b\u5e8f\u4e2d\uff0c\u8fd9\u6837\u6211\u4eec\u5c31\u80fd\u518d\u7528\u8fd9\u4e2a\u4e3b\u952e\u503c")),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"Mybatis\u63d0\u4f9b\u4e86\u4e00\u4e9b\u65b9\u6cd5\uff0c\u8fd9\u91cc\u4ecb\u7ecd",Object(r.b)("inlineCode",{parentName:"li"},"selectKey"),"\u6807\u7b7e\uff0c\u8fd8\u6709\u4e00\u4e9b\u5176\u4ed6\u65b9\u6cd5\uff0c\u611f\u5174\u8da3\u53bb\u67e5"))),Object(r.b)("h3",{id:"selectkey\u6807\u7b7e"},"selectKey\u6807\u7b7e"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),'<selectKey keyProperty="ID" resultType="int" order="BEFORE">\n     select BusinessProcessStatusAutoIncrement.nextval from dual\n</selectKey>\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u8fd8\u662f\u7528\u5e8f\u5217\u67e5\u8be2\u51fa\u4e0b\u4e00\u4e2a\u4e3b\u952e\u503c"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"keyProperty"),"\uff1a\u4f60\u67e5\u51fa\u6765\u7684\u4e0b\u4e00\u4e2a\u4e3b\u952e\u503c\uff0c\u7ed9\u5b83\u8d77\u4e2a\u540d\u5b57\uff0c\u5728insert\u8bed\u53e5\u7684values\u4e2d\uff0c\u4f60\u5c31\u53ef\u4ee5\u7528",Object(r.b)("inlineCode",{parentName:"li"},"#{\u540d\u5b57}"),"\u62ff\u5230\u8fd9\u4e2a\u4e3b\u952e\u503c\u4e86\uff0c\u6211\u8fd9\u91cc\u5c31",Object(r.b)("inlineCode",{parentName:"li"},'keyProperty="ID"'),"\uff0c\u7136\u540e",Object(r.b)("inlineCode",{parentName:"li"},"#{ID}")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"resultType"),"\uff1a\u67e5\u51fa\u6765\u7684\u4e3b\u952e\u662f\u4e2a\u5565\u7c7b\u578b\uff0c\u4e00\u822c\u5c31int"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u5982\u4f55\u5728Java\u7a0b\u5e8f\u4e2d\u62ff\u5230\u8fd9\u4e2a\u503c\uff1f"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5728\u6267\u884c\u8fd9\u6761Mapper\u547d\u4ee4\u65f6\uff0c\u4f20\u5165\u53c2\u6570\u4f7f\u7528\u7684",Object(r.b)("strong",{parentName:"li"},"\u5b9e\u4f53\u7c7b\u5bf9\u8c61"),"\uff0c\u6bd4\u5982\u8001\u5e08\u4f60\u5c31\u4f20\u4e2aTeacher\u7684\u5bf9\u8c61teacher"),Object(r.b)("li",{parentName:"ul"},"\u5b9e\u4f53\u7c7b\u5bf9\u8c61\u81ea\u5df1\u6709\u4e2aid\u5c5e\u6027\uff0c\u6bd4\u5982Teacher\u5c31\u6709\u4e2atid\u5c5e\u6027"),Object(r.b)("li",{parentName:"ul"},"\u5f53\u6267\u884c\u5b8c",Object(r.b)("inlineCode",{parentName:"li"},"selectKey"),"\uff0cMybatis\u4f1a\u628a\u65b0\u7684\u4e3b\u952e\u503c\uff0c\u901a\u8fc7\u53cd\u5c04\uff0c",Object(r.b)("strong",{parentName:"li"},"\u81ea\u52a8set\u5230\u4f60\u4e4b\u524d\u4f20\u5165\u7684\u90a3\u4e2a\u5b9e\u4f53\u7c7b\u5bf9\u8c61\u7684ID\u503c\u91cc")),Object(r.b)("li",{parentName:"ul"},"\u5728Java\u7a0b\u5e8f\u91cc\uff0c\u5f53\u4f60\u6267\u884c\u5b8cMapper\u90a3\u4e00\u53e5\u6570\u636e\u5e93\u64cd\u4f5c\u540e\uff0c\u5c31\u53ef\u4ee5\u7528\u4e4b\u524d\u4f20\u5165\u7684\u90a3\u4e2a\u5b9e\u4f53\u7c7b\u5bf9\u8c61\u76f4\u63a5\u53d6\u51fa\u65b0\u4e3b\u952e\u503c\u4e86")))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'// \u8c03\u7528Mapper\u6267\u884c\u6570\u636e\u5e93\u64cd\u4f5c\uff0c\u4f20\u5165\u4e86\u4e00\u4e2abusinessProcessStatusDto\ndao.save("webServiceMioMapper.saveBusinessProcessStatus", businessProcessStatusDto);\n// \u7d27\u63a5\u7740\uff0c\u4ece\u8fd9\u4e2abusinessProcessStatusDto\u4e2d\u76f4\u63a5\u62ffID\uff0c\u5c31\u662f\u4e0a\u4e00\u4e2a\u6570\u636e\u5e93\u64cd\u4f5c\u4e2d\u751f\u6210\u7684\u65b0ID\u503c\u4e86\nint nextBid = businessProcessStatusDto.getID();\n// ... \u7701\u7565\u4e00\u4e9b\u4e1c\u897f\n//\u63a5\u4e0b\u6765\u4f60\u53ef\u4ee5\u5728\u8981\u63d2\u5165\u7684\u4ece\u8868\u6570\u636e\u4e2d\uff0c\u8bbe\u7f6e\u8fd9\u4e2aid\u503c\uff0c\u597d\u8ba9\u4ece\u8868\u7684\u6570\u636e\u6307\u5411\u521a\u521a\u63d2\u5165\u7684\u7236\u8868\u8bb0\u5f55\nmioInfoLstDto.setBID(nextBid); \n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u6015\u4f60\u4e0d\u660e\u767d\uff0c\u518d\u5199\u4e2a\u5bf9\u7167\u7684\u4f8b\u5b50\uff0c\u7f16\u7684\uff0c\u8dd1\u4e0d\u4e86")),Object(r.b)("pre",{parentName:"blockquote"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// \u7528Mapper\u63d2\u4e00\u4e2aTeacher\nteacherMapper.saveTeacher(teacher);\n// \u76f4\u63a5\u4ece\u8fd9\u4e2ateacher\u62ffid\uff0c\u62ff\u5230\u7684\u65f6\u65b0\u7684\u81ea\u589eid\nint tid = teacher.getId();\n// \u7136\u540e\u4f60\u8be5\u63d2\u5165\u5b66\u751f\u4e86\uff0c\u4f60\u5f97\u7ed9\u5b66\u751f\u8bbe\u7f6e\u8001\u5e08\uff0c\u5c31\u8bbe\u7f6e\u521a\u624d\u8fd9\u4e2a\u8001\u5e08\nstudent1.setTeacherId(tid);\nstudent2.setTeacherId(tid);\n// ... \u53ef\u4ee5\u5f04\u4e00\u5806\u5b66\u751f\uff0c\u53ea\u8981\u8bbe\u7f6e\u4e86teacherId\uff0c\u5b83\u4eec\u5c31\u6709\u8001\u5e08\u4e86\n// \u63a5\u4e0b\u6765\u4f60\u5c31\u53ef\u4ee5\u5f80\u6570\u636e\u5e93\u63d2\u5165\u8fd9\u4e9b\u5b66\u751f\u4e86\n// \u9996\u5148\u4f60\u9700\u8981\u628a\u8fd9\u4e9b\u5b66\u751f\u5f04\u6210\u4e00\u4e2aList\nList<Student> studentList = new ArrayList<>();\nstudentList.add(student1);\nstudentList.add(student2);\n// \u8c03\u7528Mapper,\u76f4\u63a5\u628aList\u6254\u8fdb\u53bb\nstudentMapper.saveStudents(studentList);\n"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),'<insert id="saveBusinessProcessStatus" parameterType="com.lz.controller.webservicedto.BusinessProcessStatusDto">\n        <selectKey keyProperty="ID" resultType="int" order="BEFORE">\n            select BusinessProcessStatusAutoIncrement.nextval from dual\n        </selectKey>\n    INSERT INTO\n    BusinessProcessStatus\n    (ID,\n    BUSINESSNAME,\n    BUSINESSSTATUS,\n    BUSINESSMESSAGE,\n    CLAIMNO,\n    BUSINESSKEYNO,\n    PERSONGUID,\n    NAME,SAVETIME,\n    CREDENTIALTYPE,\n    CREDENTIALNUM)\n\n        VALUES (\n            #{ID},\n            #{BusinessName},\n            #{BusinessStatus},\n            #{BusinessMessage},\n            #{ClaimNo},\n            #{BusinessKeyNo},\n            #{PersonGUID},\n            #{NAME},\n            to_date(#{SaveTime},\'yyyy/mm/dd HH24:MI:SS\'),\n            #{credentialType},\n            #{credentialNum}\n            )\n    </insert>\n')),Object(r.b)("h2",{id:"\u6279\u91cf\u63d2\u5165"},"\u6279\u91cf\u63d2\u5165"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u9700\u6c42\uff1a")),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u8fd8\u662f\u4e0a\u9762\u6211\u4eec\u7684\u5bf9\u7167\u4f8b\u5b50\uff1a\u4e00\u6b21\u5b58\u4e00\u4e2a\u8001\u5e08\uff0c\u548c\u8001\u5e08\u7684\u4e00\u5806\u5b66\u751f"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u5b58\u5b66\u751f\u4f20\u8fdb\u7684\u662f\u4e00\u4e2a\u5b66\u751f\u7684List\uff0c\u90a3\u6211\u4eec\u5c31\u5f97\u5199\u4e2aInsert\uff0c\u628a\u8fd9\u4e2aList\u91cc\u7684\u5b66\u751f\u90fd\u904d\u5386\u4e86\u7ed9\u5b58\u8fdb\u53bb"))),Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u95ee\u9898\uff1a")),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"MySQL\u548cOracle\u5199\u6cd5\u53c8\u4e0d\u4e00\u6837\uff1a")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"MySQL\u6b63\u5e38\u7684\u591a\u6761\u63d2\u5165 ",Object(r.b)("inlineCode",{parentName:"li"},"inset into \u67d0\u8868 values ([\u5217\u503c], [\u5217\u503c]), ([\u5217\u503c], [\u5217\u503c]), ([\u5217\u503c], [\u5217\u503c]), ...")),Object(r.b)("li",{parentName:"ul"},"Oracle\u6b63\u5e38\u7684\u591a\u6761\u63d2\u5165\u5199\u6cd5\uff1a")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"insert all\n    into <tableName>[(<table_column1>,<table_column2>...)] values([<column_value1>,<column_value2>...]) \n[ into <tableName>[(<table_column1>,<table_column2>...)] values([<column_value1>,<column_value2>...])]...\nselect  <table_value1>[,<table_value2>...] from dual;\n")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"})," insert into <tableName>[(<table_column1>,<table_column2>...)] \n select [<column_value1>,<column_value2>...] from dual\n   [ union select [<column_value1>,<column_value2>...] from dual ]...\n")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"insert into <tableName1>[(<table_column1>,<table_column2>...)] \n   select [<column_value1>,<column_value2>...] from <tableName2> [where [...]]\n   union [ select [<column_value1>,<column_value2>...] from <tableName2> [where [...] ]]\n")),Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"\u53cd\u6b63\u770b\u7740\u633a\u86cb\u75bc\u7684\uff01"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"\u7136\u540e\u7528Mybatis\u904d\u5386\uff0c\u8fd8\u8981\u7528\u5230foreach\u6807\u7b7e\u6765\u5faa\u73af\uff0c\u5199\u51fa\u6765\u5c31\u86cb\u75bc\u7684\u5f88\u86cb\u75bc\u7684\u5f88")))),Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u89e3\u51b3\uff1a")),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"MySQL\u5c31\u7528foreach\u6807\u7b7e\u5199"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"collection"),"\uff1a\u4f60\u4f20\u8fdb\u53bb\u7684\u90a3\u4e2aList\u7684\u540d\u5b57\uff0c\u8981\u5bf9\u5e94"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"item"),"\uff1a\u5728SQL\u8bed\u53e5\u91cc\uff0c\u904d\u5386\u51fa\u6765\u7684\u6bcf\u4e00\u4e2a\u96c6\u5408\u4e2d\u5143\u7d20\u7684\u4e34\u65f6\u540d\u5b57\uff0c\u76f8\u5f53\u4e8efor\u5faa\u73af\u7684\u90a3\u4e2ai"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"separator"),"\uff1a\u5faa\u73af\u548c\u5faa\u73af\u4e4b\u95f4\u7684\u5206\u5272\u7b26\uff0c\u5199\u4e2a",Object(r.b)("inlineCode",{parentName:"li"},","),"\uff0c\u5c31\u62fc\u6210\u4e86",Object(r.b)("inlineCode",{parentName:"li"},"(\u4e00\u5806\u53c2\u6570), (\u4e00\u5806\u53c2\u6570)"),"\u8fd9\u6837")))),Object(r.b)("pre",{parentName:"blockquote"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),'<insert id="insertBatch" >\n    insert into person  \n    values \n    <foreach collection="list" item="item" index="index" separator=",">\n        (null,#{item.name},#{item.sex},#{item.address})\n    </foreach>\n</insert>\n')),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Oracle\u4e0d\u80fd\u7528\u4e0a\u9762\u8fd9\u4e2a\u5199\u6cd5\uff0c\u56e0\u4e3a\u4ed6\u548cMysql\u8bed\u6cd5\u4e0d\u4e00\u6837\u3002\u7136\u540e\u4e0a\u9762\u5217\u4e863\u4e2dOracle\u7684\u591a\u6761\u63d2\u5165\u8bed\u6cd5\uff0c\u4f60\u53ef\u4ee5\u81ea\u5df1\u62fcforeach\uff0c\u53cd\u6b63\u633a\u86cb\u75bc\u7684\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4e0a\u7f51\u53bb\u67e5\u522b\u4eba\u7684\uff0c\u6211\u6bd4\u8f83\u61d2\uff0c\u6211\u5c31\u5728\u8fd9\u91cc\u5199\u4e00\u79cd\u81ea\u5df1\u770b\u7684\u61c2\u7684\u5199\u6cd5")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u76f4\u63a5\u628a\u6574\u4e2aInsert\u8bed\u53e5\u7528foreach\u904d\u5386\uff0c\u7528",Object(r.b)("inlineCode",{parentName:"strong"},"begin"),"\u548c",Object(r.b)("inlineCode",{parentName:"strong"},"end;"),"\u5957\u8d77\u6765\uff0c\u5f04\u6210\u4e00\u4e2a\u5b58\u50a8\u8fc7\u7a0b")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u628aMioInfoLst\u5f53\u6210\u5b66\u751f\u8868Student\u5c31\u5bf9\u4e86\uff0c\u73b0\u5728\u8981\u63d2\u5165\u4e00\u5806\u5b66\u751f\uff0c\u4f20\u8fdb\u53bb\u7684\u5217\u8868\u5c31\u53eblist"))),Object(r.b)("pre",{parentName:"blockquote"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'// \u8fd9\u662f\u4e2aHashMap\uff0c\u91cc\u9762\u653e\u4e86\u4e86\u4e2a\u5217\u8868MioInfoLstDtoList\uff0c\u952e\u53eblist\nmioInfoLstMap.put("list", MioInfoLstDtoList);\n\ndao.save("webServiceMioMapper.saveMioInfoLst", mioInfoLstMap);\n')),Object(r.b)("pre",{parentName:"blockquote"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),'<insert id="saveMioInfoLst">\n        begin\n        <foreach collection="list" item="item" index="index">\n            INSERT INTO\n                MioInfoLst (\n                ID,\n                MioFlag,\n                MioAmnt,\n                PlnmioDate,\n                MioDate,\n                BankAccNo,\n                BankCode,\n                AccCustName,\n                BID)\n            values (\n                MioInfoLstAutoIncrement.NEXTVAL,\n                #{item.MioFlag},\n                #{item.MioAmnt},\n                to_date(#{item.MioDate},\'yyyy/mm/dd HH24:MI:SS\'),\n                to_date(#{item.PlnmioDate},\'yyyy/mm/dd HH24:MI:SS\'),\n                #{item.BankAccNo},\n                #{item.BankCode},\n                #{item.AccCustName},\n                #{item.BID}\n            );\n        </foreach>\n        end;\n</insert>\n')),Object(r.b)("div",Object(a.a)({parentName:"blockquote"},{className:"admonition admonition-warning alert alert--danger"}),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u8fd9\u79cd\u5199\u6cd5\uff0c\u8981\u7279\u522b\u6ce8\u610f",Object(r.b)("inlineCode",{parentName:"p"},";"),"\uff0c\u5f88\u4e25\u683c\uff0c\u5982\u4ee3\u7801\u6240\u793a\uff0c\u9996\u5148Insert\u8bed\u53e5\u540e\u9762\u7684",Object(r.b)("inlineCode",{parentName:"p"},";"),"\u4e0d\u80fd\u5c11\uff0c\u5e73\u65f6\u5199\u5355\u6761insert",Object(r.b)("inlineCode",{parentName:"p"},";"),"\u6ca1\u4e86\u6ca1\u4e8b\uff0c\u8fd9\u91cc\u6ca1\u4e86\u76f4\u63a5\u51c9\u51c9\uff1b\u5176\u6b21\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"end"),"\u540e\u9762\u6709\u4e2a",Object(r.b)("inlineCode",{parentName:"p"},";"),"\uff0c\u4e0d\u5199\u4e5f\u51c9\u51c9"))),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u8fd9\u4e2a\u5199\u6cd5\u76f8\u5f53\u4e8e\u4f60\u7684\u5217\u8868\u91cc\u6709\u51e0\u4e2a\u5143\u7d20\uff0c\u6700\u540e\u5c31\u8dd1\u51e0\u4e2a\u6b63\u5e38\u7684\u5355\u6b21insert\u8bed\u53e5"))))}s.isMDXComponent=!0},492:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return O}));var a=n(0),c=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var o=c.a.createContext({}),s=function(e){var t=c.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return c.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},u=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,O=m["".concat(b,".").concat(u)]||m[u]||p[u]||r;return n?c.a.createElement(O,l(l({ref:t},o),{},{components:n})):c.a.createElement(O,l({ref:t},o))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,b=new Array(r);b[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,b[1]=l;for(var o=2;o<r;o++)b[o]=n[o];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);