(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{219:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return o}));var b=a(2),n=a(6),l=(a(0),a(490)),r={id:"1.nosql",title:"NoSQL\u6982\u8ff0",hide_title:!0},c={unversionedId:"redis/1.nosql",id:"redis/1.nosql",isDocsHomePage:!1,title:"NoSQL\u6982\u8ff0",description:"NoSQL\u6982\u8ff0",source:"@site/docs/redis/1.nosql.md",slug:"/redis/1.nosql",permalink:"/docs/redis/1.nosql",version:"current",sidebar:"someSidebar",previous:{title:"MySQL\u9ad8\u7ea7",permalink:"/docs/javaweb/2.mysqlPro"},next:{title:"Redis\u5165\u95e8",permalink:"/docs/redis/2.helloRedis"}},p=[{value:"NoSQL\u6982\u8ff0",id:"nosql\u6982\u8ff0",children:[{value:"\u5f53\u4eca\u4f01\u4e1a\u67b6\u6784\u5206\u6790",id:"\u5f53\u4eca\u4f01\u4e1a\u67b6\u6784\u5206\u6790",children:[]},{value:"\u4e3a\u4ec0\u4e48\u4f7f\u7528NoSQL",id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528nosql",children:[]},{value:"\u4ec0\u4e48\u662fNoSQL",id:"\u4ec0\u4e48\u662fnosql",children:[{value:"NoSQL\u7684\u7279\u70b9",id:"nosql\u7684\u7279\u70b9",children:[]}]},{value:"\u963f\u91cc\u5df4\u5df4\u67b6\u6784\u6f14\u8fdb\u5206\u6790",id:"\u963f\u91cc\u5df4\u5df4\u67b6\u6784\u6f14\u8fdb\u5206\u6790",children:[]},{value:"NoSQL\u7684\u56db\u5927\u5206\u7c7b",id:"nosql\u7684\u56db\u5927\u5206\u7c7b",children:[]}]}],O={rightToc:p};function o(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(b.a)({},O,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"nosql\u6982\u8ff0"},"NoSQL\u6982\u8ff0"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528\u975e\u5173\u7cfb\u578b\u6570\u636e\u5e93NoSQL\uff1f"))),Object(l.b)("blockquote",null,Object(l.b)("ol",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ol"},"\u5355\u673aMySQL\u5e74\u4ee3"))),Object(l.b)("p",null,"2020\u5e74\u5df2\u7ecf\u662f\u5927\u6570\u636e\u65f6\u4ee3\uff0c\u4e00\u822c\u7684\u6570\u636e\u5e93\u5df2\u7ecf\u65e0\u6cd5\u8fdb\u884c\u5206\u6790\u5904\u7406\u4e86"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"\u6570\u636e\u91cf\u592a\u5927\uff0c\u4e00\u4e2a\u673a\u5668\u653e\u4e0d\u4e0b"),Object(l.b)("li",{parentName:"ol"},"\u6570\u636e\u5e93\u7d22\u5f15\uff0cMySQL B+\u6811\uff0c\u6570\u636e\u592a\u591a\uff0c\u5355\u4e2a\u8ba1\u7b97\u673a\u5185\u5b58\u653e\u4e0d\u4e0b"),Object(l.b)("li",{parentName:"ol"},"\u8bbf\u95ee\u91cf\uff08\u8bfb\u5199\u6df7\u5408\uff09\uff0c\u903c\u8fd1\u5355\u53f0\u670d\u52a1\u5668\u627f\u53d7\u6781\u9650")),Object(l.b)("blockquote",null,Object(l.b)("ol",Object(b.a)({parentName:"blockquote"},{start:2}),Object(l.b)("li",{parentName:"ol"},"Memcached(\u7f13\u5b58)+MySQL+",Object(l.b)("strong",{parentName:"li"},"\u5782\u76f4\u62c6\u5206\uff08\u8bfb\u5199\u5206\u79bb\uff09")))),Object(l.b)("img",{src:a(811).default,style:{zoom:"50%"}}),Object(l.b)("p",null,"\u7f51\u7ad9\u5927\u90e8\u5206\u65f6\u5019\u90fd\u5728\u6267\u884c\u67e5\u8be2\u64cd\u4f5c\uff0c\u8fd9\u6837\u4f1a\u9020\u6210\u9891\u7e41\u8bbf\u95ee\u6570\u636e\u5e93\uff0c\u4e8e\u662f\u4ea7\u751f\u4e86",Object(l.b)("strong",{parentName:"p"},"\u7f13\u5b58"),"\uff0c\u76f8\u540c\u7684\u67e5\u8be2\u76f4\u63a5\u8d70\u7f13\u5b58\uff0c\u51cf\u8f7b\u6570\u636e\u5e93\u7684\u8bbf\u95ee\u538b\u529b\uff0c\u4fdd\u8bc1\u6548\u7387"),Object(l.b)("blockquote",null,Object(l.b)("ol",Object(b.a)({parentName:"blockquote"},{start:3}),Object(l.b)("li",{parentName:"ol"},"\u5206\u5e93\u5206\u8868\u3001",Object(l.b)("strong",{parentName:"li"},"\u6c34\u5e73\u62c6\u5206\uff08MySQL\u96c6\u7fa4"),"\uff09"))),Object(l.b)("p",null,Object(l.b)("img",{alt:"image-20200521192835499",src:a(812).default})),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u672c\u8d28\uff1a\u6570\u636e\u5e93\uff08\u8bfb\u3001\u5199\uff09")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"MyISAM\u5f15\u64ce\uff1a"),"\u8868\u9501\uff0c\u5341\u5206\u5f71\u54cd\u6548\u7387\uff0c\u9ad8\u5e76\u53d1\u4e0b\u4f1a\u51fa\u73b0\u4e25\u91cd\u95ee\u9898"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"InnoDB\u5f15\u64ce\uff1a"),"\u884c\u9501")),Object(l.b)("blockquote",null,Object(l.b)("ol",Object(b.a)({parentName:"blockquote"},{start:4}),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"\u5f53\u524d\uff1a"),Object(l.b)("p",{parentName:"li"},"MySQL\u7b49\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4e0d\u591f\u7528\u4e86\uff0c\u6570\u636e\u91cf\u5f88\u5927\uff0c\u53d8\u5316\u5f88\u5feb"),Object(l.b)("p",{parentName:"li"},"\u5982\u679c\u6709\u4e00\u79cd\u6570\u636e\u5e93\u4e13\u95e8\u5904\u7406\u8f83\u5927\u7684\u6570\u636e\uff0c\u4f8b\u5982\u535a\u5ba2\uff0c\u56fe\u7247\uff0c\u89c6\u9891\uff0c\u90a3\u4e48MySQL\u7684\u538b\u529b\u5c31\u4f1a\u53d8\u5c0f"),Object(l.b)("p",{parentName:"li"},"\u4ea7\u751f\u4e86\u591a\u79cd\u5f62\u5f0f\u7684\u5b58\u50a8\u65b9\u5f0f,\uff0c\u4f8b\u5982JSON -> BSOM\uff08\u4e8c\u8fdb\u5236JSON\uff0cMySQL\u96be\u4ee5\u5e94\u4ed8\u9891\u7e41\u548c\u5927\u5e45\u5ea6\u7684\u4fee\u6539")))),Object(l.b)("h2",{id:"\u5f53\u4eca\u4f01\u4e1a\u67b6\u6784\u5206\u6790"},"\u5f53\u4eca\u4f01\u4e1a\u67b6\u6784\u5206\u6790"),Object(l.b)("p",null,Object(l.b)("img",{alt:"image-20200521194656113",src:a(813).default})),Object(l.b)("h2",{id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528nosql"},"\u4e3a\u4ec0\u4e48\u4f7f\u7528NoSQL"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u7528\u6237\u4e2a\u4eba\u4fe1\u606f\uff0c\u793e\u4ea4\u7f51\u7edc\uff0c\u5730\u7406\u4f4d\u7f6e\u7b49\u56e0\u7d20\u9020\u6210\u6570\u636e\u3001\u7528\u6237\u65e5\u5fd7\u7b49\u7206\u70b8\u5f0f\u589e\u957f"),Object(l.b)("p",{parentName:"blockquote"},"NoSQL\u6570\u636e\u5e93\u53ef\u4ee5\u5f88\u597d\u7684\u5904\u7406\u4ee5\u4e0a\u60c5\u51b5")),Object(l.b)("h2",{id:"\u4ec0\u4e48\u662fnosql"},"\u4ec0\u4e48\u662fNoSQL"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"NoSQL")," -> Not Only SQL"),Object(l.b)("p",{parentName:"blockquote"},"\u6cdb\u6307",Object(l.b)("strong",{parentName:"p"},"\u975e\u5173\u7cfb\u578b\u6570\u636e\u5e93"),"\uff0c\u4f20\u7edf\u5173\u7cfb\u578b\u6570\u636e\u5e93\u96be\u4ee5\u5e94\u4ed8\u5927\u89c4\u6a21\u9ad8\u5e76\u53d1\u573a\u666f\uff0cNoSQL\u5728\u5f53\u4eca\u5927\u6570\u636e\u73af\u5883\u4e0b\u53d1\u5c55\u7684\u5341\u5206\u8fc5\u901f\uff0cRedis\u662f\u5176\u4e2d\u53d1\u5c55\u6700\u5feb\u7684\uff0c\u662f\u6211\u4eec\u5f53\u4e0b\u5fc5\u987b\u638c\u63e1\u7684\u4e00\u9879\u6280\u672f"),Object(l.b)("p",{parentName:"blockquote"},"\u5f88\u591a\u5e94\u7528\u6570\u636e\u4e0d\u9700\u8981\u56fa\u5b9a\u683c\u5f0f\uff08\u884c\u3001\u5217\u3001\u8868\uff09\uff0c\u4e0d\u9700\u8981\u591a\u4f59\u7684\u64cd\u4f5c\u5c31\u53ef\u4ee5\u6a2a\u5411\u6269\u5c55\uff08\u591a\u673a\u5668\u96c6\u7fa4\uff09")),Object(l.b)("h3",{id:"nosql\u7684\u7279\u70b9"},"NoSQL\u7684\u7279\u70b9"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u5927\u6570\u636e\u91cf\u3001\u9ad8\u6027\u80fd\nRedis\u4e00\u79d2\u5199\u51658\u4e07\u6b21\uff0c\u8bfb\u53d611\u4e07\u6b21\nNoSQL\u7684\u7f13\u5b58\u8bb0\u5f55\u7ea7\uff0c\u662f\u4e00\u79cd\u7ec6\u7c92\u5ea6\u7684\u7f13\u5b58")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u6570\u636e\u7c7b\u578b\u662f\u591a\u6837\u7684"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u4e94\u79cd\u57fa\u672c\u6570\u636e\u7c7b\u578b\n",Object(l.b)("inlineCode",{parentName:"p"},"String"),"\u3001",Object(l.b)("inlineCode",{parentName:"p"},"List"),"\u3001",Object(l.b)("inlineCode",{parentName:"p"},"Set"),"\u3001",Object(l.b)("inlineCode",{parentName:"p"},"Hash"),"\u3001",Object(l.b)("inlineCode",{parentName:"p"},"Zset"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u4e09\u79cd\u7279\u6b8a\u6570\u636e\u7c7b\u578b"),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"geo"),"\u3001",Object(l.b)("inlineCode",{parentName:"p"},"hyperloglog"),"\u3001",Object(l.b)("inlineCode",{parentName:"p"},"bitmap"))))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u4e0d\u9700\u8981\u5b9e\u73b0\u8bbe\u8ba1\u6570\u636e\u5e93\uff0c\u968f\u533a\u968f\u7528")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u4f20\u7edfRDBMS\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4e0eNoSQL\u7684\u533a\u522b"))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5173\u7cfb\u578b\u6570\u636e\u5e93"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u975e\u5173\u7cfb\u6570\u636e\u5e93"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"SQL"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"NoSQL")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u6570\u636e\u548c\u5173\u7cfb\u90fd\u5b58\u5728\u5355\u72ec\u7684\u8868\u4e2d"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u4e0d\u4ec5\u4ec5\u662f\u6570\u636e")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u64cd\u4f5c\u3001\u6570\u636e\u5b9a\u4e49\u8bed\u8a00"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u6ca1\u6709\u56fa\u5b9a\u67e5\u8be2\u8bed\u8a00")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u4e25\u683c\u7684\u4e00\u81f4\u6027"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u952e\u503c\u5bf9\u3001\u5217\u3001\u6587\u6863\u3001\u56fe\u5f62\u5b58\u50a8")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u57fa\u7840\u4e8b\u52a1"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u6700\u7ec8\u4e00\u81f4\u6027")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"CAP\u5b9a\u7406\u548cBASE\u3001\u5f02\u5730\u591a\u6d3b")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u9ad8\u6027\u80fd\u3001\u9ad8\u53ef\u7528\u3001\u9ad8\u53ef\u6269")))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"\u4e86\u89e3\uff1a"),"3V+3\u9ad8"),Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"\u5927\u6570\u636e\u65f6\u4ee3\u76843V\uff1a\u4e3b\u8981\u63cf\u8ff0\u95ee\u9898",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6d77\u91cfVolume"),Object(l.b)("li",{parentName:"ul"},"\u591a\u6837Variety"),Object(l.b)("li",{parentName:"ul"},"\u5b9e\u65f6Velocity"))),Object(l.b)("li",{parentName:"ul"},"\u5927\u6570\u636e\u65f6\u4ee3\u76843\u9ad8\uff1a\u4e3b\u8981\u662f\u5bf9\u7a0b\u5e8f\u7684\u8981\u6c42",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9ad8\u5e76\u53d1"),Object(l.b)("li",{parentName:"ul"},"\u9ad8\u53ef\u62d3\u5c55"),Object(l.b)("li",{parentName:"ul"},"\u9ad8\u6027\u80fd"))))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u5b9e\u8df5\u4e2d\uff1aNoSQL+RDBMS")),Object(l.b)("h2",{id:"\u963f\u91cc\u5df4\u5df4\u67b6\u6784\u6f14\u8fdb\u5206\u6790"},"\u963f\u91cc\u5df4\u5df4\u67b6\u6784\u6f14\u8fdb\u5206\u6790"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"php -> java -> EJP -> Spring+IBatis -> \u5206\u5e03\u5f0f")),Object(l.b)("p",null,"\u654f\u6377\u5f00\u53d1\u3001\u6781\u9650\u7f16\u7a0b"),Object(l.b)("blockquote",null,Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u5546\u54c1\u57fa\u672c\u4fe1\u606f"),Object(l.b)("p",{parentName:"li"},"\u540d\u79f0\u3001\u4ef7\u683c\u3001\u5546\u5bb6\u4fe1\u606f"),Object(l.b)("p",{parentName:"li"},"\u5173\u7cfb\u578b\u6570\u636e\u5e93\u5c31\u53ef\u4ee5\u89e3\u51b3\u3001\u963f\u91cc\u81ea\u5df1\u4fee\u6539\u7684",Object(l.b)("inlineCode",{parentName:"p"},"MySQL")," \uff08\u300a\u963f\u91cc\u4e91\u7684\u8fd9\u7fa4\u75af\u5b50\u300b\uff09")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u5546\u54c1\u7684\u63cf\u8ff0\u3001\u8bc4\u8bba"),Object(l.b)("p",{parentName:"li"},"\u6587\u6863\u884c\u6570\u636e\u5e93\uff0c",Object(l.b)("inlineCode",{parentName:"p"},"MongoDB"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u56fe\u7247"),Object(l.b)("p",{parentName:"li"},"\u5206\u5e03\u5f0f\u6587\u4ef6\u7cfb\u7edf",Object(l.b)("inlineCode",{parentName:"p"},"FastDFS")),Object(l.b)("p",{parentName:"li"},"\u6dd8\u5b9d\u81ea\u5df1\u7684",Object(l.b)("inlineCode",{parentName:"p"},"TFS")),Object(l.b)("p",{parentName:"li"},"Google ",Object(l.b)("inlineCode",{parentName:"p"},"GFS")),Object(l.b)("p",{parentName:"li"},"Hadoop ",Object(l.b)("inlineCode",{parentName:"p"},"HDFS")),Object(l.b)("p",{parentName:"li"},"\u963f\u91cc\u4e91 ",Object(l.b)("inlineCode",{parentName:"p"},"oss"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u5546\u54c1\u5173\u952e\u5b57\uff08\u7528\u4e8e\u641c\u7d22\uff09"),Object(l.b)("p",{parentName:"li"},"\u641c\u7d22\u5f15\u64ce\uff1a ",Object(l.b)("inlineCode",{parentName:"p"},"solr"),"\u3001",Object(l.b)("inlineCode",{parentName:"p"},"ElasticSearch"),"\u3001",Object(l.b)("inlineCode",{parentName:"p"},"ISearch"),"\uff08\u591a\u9686\uff09")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u5546\u54c1\u70ed\u95e8\u6ce2\u6bb5\u4fe1\u606f"),Object(l.b)("p",{parentName:"li"},"\u5185\u5b58\u6570\u636e\u5e93\uff1a",Object(l.b)("inlineCode",{parentName:"p"},"Redis"),"\u3001",Object(l.b)("inlineCode",{parentName:"p"},"Tair"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u5546\u54c1\u7684\u4ea4\u6613\u3001\u5916\u90e8\u652f\u4ed8\u63a5\u53e3"),Object(l.b)("p",{parentName:"li"},"\u7b2c\u4e09\u65b9\u5e94\u7528")))),Object(l.b)("p",null,"\u4e00\u5f20\u7f51\u9875\u80cc\u540e\u7684\u6280\u672f\u5e76\u4e0d\u662f\u90a3\u4e48\u7b80\u5355\u7684"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u5927\u5382\u4ea7\u54c1\u9762\u4e34\u7684\u95ee\u9898\uff1a")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u6570\u636e\u7c7b\u578b\u592a\u591a"),Object(l.b)("li",{parentName:"ul"},"\u6570\u636e\u6e90\u592a\u591a\uff0c\u7ecf\u5e38\u91cd\u6784"),Object(l.b)("li",{parentName:"ul"},"\u6570\u636e\u8981\u6539\u9020\uff0c\u5927\u9762\u79ef\u6539\u52a8")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u89e3\u51b3\u65b9\u6848\uff1a\u7edf\u4e00\u6570\u636e\u670d\u52a1\u5c42",Object(l.b)("inlineCode",{parentName:"p"},"UDSL")),Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"\u5c4f\u853d\u6240\u6709\u6570\u636e\u5e93\u7684\u5dee\u5f02")),Object(l.b)("li",{parentName:"ul"},"\u5927\u5382\u72ec\u6709\u7684\u81ea\u7814\u6280\u672f"))),Object(l.b)("h2",{id:"nosql\u7684\u56db\u5927\u5206\u7c7b"},"NoSQL\u7684\u56db\u5927\u5206\u7c7b"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"KV\u952e\u503c\u5bf9"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"\u65b0\u6d6a\uff1a"),"Redis"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"\u7f8e\u56e2\uff1a"),"Redis+Tair"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"\u963f\u91cc\u3001\u767e\u5ea6\uff1a"),"Redis+memcatch")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"\u6587\u6863\u578b\u6570\u636e\u5e93(BSON)"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"MongoDB"),"(\u4e00\u822c\u5fc5\u987b\u638c\u63e1)\n\u57fa\u4e8e\u5206\u5e03\u5f0f\u6587\u4ef6\u5b58\u50a8\u7684\u6570\u636e\u5e93\uff0c\u4f7f\u7528CPP\u7f16\u5199\uff0c\u4e3b\u8981\u7528\u6765\u5b58\u50a8\u5927\u91cf\u7684\u6587\u6863",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"MongoDB\u662f\u4e00\u4e2a\u4ecb\u4e8e\u5173\u7cfb\u578b\u6570\u636e\u5e93\u548c\u975e\u5173\u7cfb\u6570\u636e\u5e93\u4e4b\u95f4\u7684\u4ea7\u54c1\uff0cMongoDB\u662f\u975e\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4e2d\u529f\u80fd\u6700\u4e30\u5bcc\uff0c\u6700\u60f3\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7684"))),Object(l.b)("li",{parentName:"ul"},"ConthDB")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"\u5217\u5b58\u50a8\u6570\u636e\u5e93"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"HBase"),Object(l.b)("li",{parentName:"ul"},"\u5206\u5e03\u5f0f\u6587\u4ef6\u7cfb\u7edf")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"\u56fe\u6570\u636e\u5e93"),"\uff08\u62d3\u6251\u578b\uff09\u2014\u2014\u7528\u4e8e\u5b58\u50a8\u5173\u7cfb\u62d3\u6251\u7ed3\u6784")),Object(l.b)("p",null,"\u793e\u4ea4\u7f51\u7edc\u5173\u7cfb\u3001\u793e\u4ea4\u63a8\u8350\u3001\u5e7f\u544a\u63a8\u8350"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Neo4j"),Object(l.b)("li",{parentName:"ul"},"InfoGrid")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"th"},"\u5206\u7c7b")),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"th"},"Examples\u4e3e\u4f8b")),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"th"},"\u5178\u578b\u5e94\u7528\u573a\u666f")),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"th"},"\u6570\u636e\u6a21\u578b")),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"th"},"\u4f18\u70b9")),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"th"},"\u7f3a\u70b9")))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"\u952e\u503c\uff08key-value\uff09")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Tokyo Cabinet/Tyrant, Redis, Voldemort, Oracle BDB"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5185\u5bb9\u7f13\u5b58\uff0c\u4e3b\u8981\u7528\u4e8e\u5904\u7406\u5927\u91cf\u6570\u636e\u7684\u9ad8\u8bbf\u95ee\u8d1f\u8f7d\uff0c\u4e5f\u7528\u4e8e\u4e00\u4e9b\u65e5\u5fd7\u7cfb\u7edf\u7b49\u7b49\u3002"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Key \u6307\u5411 Value \u7684\u952e\u503c\u5bf9\uff0c\u901a\u5e38\u7528hash table\u6765\u5b9e\u73b0"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u67e5\u627e\u901f\u5ea6\u5feb"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u6570\u636e\u65e0\u7ed3\u6784\u5316\uff0c\u901a\u5e38\u53ea\u88ab\u5f53\u4f5c\u5b57\u7b26\u4e32\u6216\u8005\u4e8c\u8fdb\u5236\u6570\u636e")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"\u5217\u5b58\u50a8\u6570\u636e\u5e93")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Cassandra, HBase, Riak"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5206\u5e03\u5f0f\u7684\u6587\u4ef6\u7cfb\u7edf"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u4ee5\u5217\u7c07\u5f0f\u5b58\u50a8\uff0c\u5c06\u540c\u4e00\u5217\u6570\u636e\u5b58\u5728\u4e00\u8d77"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u67e5\u627e\u901f\u5ea6\u5feb\uff0c\u53ef\u6269\u5c55\u6027\u5f3a\uff0c\u66f4\u5bb9\u6613\u8fdb\u884c\u5206\u5e03\u5f0f\u6269\u5c55"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u529f\u80fd\u76f8\u5bf9\u5c40\u9650")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"\u6587\u6863\u578b\u6570\u636e\u5e93")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"CouchDB, MongoDb"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Web\u5e94\u7528\uff08\u4e0eKey-Value\u7c7b\u4f3c\uff0cValue\u662f\u7ed3\u6784\u5316\u7684\uff0c\u4e0d\u540c\u7684\u662f\u6570\u636e\u5e93\u80fd\u591f\u4e86\u89e3Value\u7684\u5185\u5bb9\uff09"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Key-Value\u5bf9\u5e94\u7684\u952e\u503c\u5bf9\uff0cValue\u4e3a\u7ed3\u6784\u5316\u6570\u636e"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u6570\u636e\u7ed3\u6784\u8981\u6c42\u4e0d\u4e25\u683c\uff0c\u8868\u7ed3\u6784\u53ef\u53d8\uff0c\u4e0d\u9700\u8981\u50cf\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4e00\u6837\u9700\u8981\u9884\u5148\u5b9a\u4e49\u8868\u7ed3\u6784"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u67e5\u8be2\u6027\u80fd\u4e0d\u9ad8\uff0c\u800c\u4e14\u7f3a\u4e4f\u7edf\u4e00\u7684\u67e5\u8be2\u8bed\u6cd5\u3002")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"\u56fe\u5f62(Graph)\u6570\u636e\u5e93")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Neo4J, InfoGrid, Infinite Graph"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u793e\u4ea4\u7f51\u7edc\uff0c\u63a8\u8350\u7cfb\u7edf\u7b49\u3002\u4e13\u6ce8\u4e8e\u6784\u5efa\u5173\u7cfb\u56fe\u8c31"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u56fe\u7ed3\u6784"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5229\u7528\u56fe\u7ed3\u6784\u76f8\u5173\u7b97\u6cd5\u3002\u6bd4\u5982\u6700\u77ed\u8def\u5f84\u5bfb\u5740\uff0cN\u5ea6\u5173\u7cfb\u67e5\u627e\u7b49"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5f88\u591a\u65f6\u5019\u9700\u8981\u5bf9\u6574\u4e2a\u56fe\u505a\u8ba1\u7b97\u624d\u80fd\u5f97\u51fa\u9700\u8981\u7684\u4fe1\u606f\uff0c\u800c\u4e14\u8fd9\u79cd\u7ed3\u6784\u4e0d\u592a\u597d\u505a\u5206\u5e03\u5f0f\u7684\u96c6\u7fa4")))))}o.isMDXComponent=!0},490:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return u}));var b=a(0),n=a.n(b);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,b)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,b,n=function(e,t){if(null==e)return{};var a,b,n={},l=Object.keys(e);for(b=0;b<l.length;b++)a=l[b],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(b=0;b<l.length;b++)a=l[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var O=n.a.createContext({}),o=function(e){var t=n.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},j=function(e){var t=o(e.components);return n.a.createElement(O.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,b=e.mdxType,l=e.originalType,r=e.parentName,O=p(e,["components","mdxType","originalType","parentName"]),j=o(a),m=b,u=j["".concat(r,".").concat(m)]||j[m]||i[m]||l;return a?n.a.createElement(u,c(c({ref:t},O),{},{components:a})):n.a.createElement(u,c({ref:t},O))}));function u(e,t){var a=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var l=a.length,r=new Array(l);r[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:b,r[1]=c;for(var O=2;O<l;O++)r[O]=a[O];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},811:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/1-17bf1e56d36538e2362a3b5b590a507e.png"},812:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/2-c530d796e38a9518bdb1d3e6b439200c.png"},813:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/3-8a3abb3420315bd521bcb23714a2c4b7.png"}}]);