(window.webpackJsonp=window.webpackJsonp||[]).push([[386],{442:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),i=(n(0),n(576)),l={id:"13.MasterSlave",title:"\u4e3b\u4ece\u590d\u5236",hide_title:!0},b={unversionedId:"redis/13.MasterSlave",id:"redis/13.MasterSlave",isDocsHomePage:!1,title:"\u4e3b\u4ece\u590d\u5236",description:"\u4e3b\u4ece\u590d\u5236",source:"@site/docs/redis/13.\u4e3b\u4ece\u590d\u5236.md",slug:"/redis/13.MasterSlave",permalink:"/docs/redis/13.MasterSlave",version:"current",sidebar:"someSidebar",previous:{title:"\u7f13\u5b58\u7a7f\u900f|\u51fb\u7a7f|\u96ea\u5d29",permalink:"/docs/redis/11.cache"},next:{title:"Redis\u5206\u5e03\u5f0f\u9501",permalink:"/docs/redis/14.redisLock"}},c=[{value:"\u4e3b\u4ece\u590d\u5236",id:"\u4e3b\u4ece\u590d\u5236",children:[]},{value:"\u914d\u7f6e\u4e3b/\u4ece",id:"\u914d\u7f6e\u4e3b\u4ece",children:[{value:"\u4f7f\u7528\u89c4\u5219",id:"\u4f7f\u7528\u89c4\u5219",children:[]},{value:"\u5168\u91cf\u590d\u5236 | \u589e\u91cf\u590d\u5236",id:"\u5168\u91cf\u590d\u5236--\u589e\u91cf\u590d\u5236",children:[]}]},{value:"\u54e8\u5175\u6a21\u5f0f",id:"\u54e8\u5175\u6a21\u5f0f",children:[{value:"\u4f18\u7f3a\u70b9",id:"\u4f18\u7f3a\u70b9",children:[{value:"\u54e8\u5175\u6a21\u5f0f\u5b8c\u6574\u914d\u7f6e\u6587\u4ef6",id:"\u54e8\u5175\u6a21\u5f0f\u5b8c\u6574\u914d\u7f6e\u6587\u4ef6",children:[]}]}]}],o={rightToc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("br",null),Object(i.b)("h1",{id:"\u4e3b\u4ece\u590d\u5236"},"\u4e3b\u4ece\u590d\u5236"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://blog.csdn.net/Cantevenl/article/details/115839649"}),"\u5168\u91cf_\u589e\u91cf\u590d\u5236\u4ee3\u7801")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://zhuanlan.zhihu.com/p/102859170"}),"\u4e3b\u4ece\u590d\u5236\u539f\u7406 RDB_AOF_Buffer")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://zhuanlan.zhihu.com/p/349184262"}),"\u54e8\u5175 Sentinal"))),Object(i.b)("br",null),Object(i.b)("h1",{id:"\u914d\u7f6e\u4e3b\u4ece"},"\u914d\u7f6e\u4e3b/\u4ece"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u901a\u8fc7 ",Object(i.b)("inlineCode",{parentName:"p"},"info replication")," \u67e5\u770b\u8282\u70b9\u72b6\u6001")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"\u9ed8\u8ba4\u6240\u6709\u7684 Redis \u8282\u70b9\u90fd\u662f ",Object(i.b)("inlineCode",{parentName:"strong"},"\u4e3b\u8282\u70b9")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u56e0\u6b64\uff0c\u53ea\u9700\u8981\u914d\u7f6e ",Object(i.b)("inlineCode",{parentName:"p"},"\u4ece\u673a")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"SLAVEOF 127.0.0.1 6379")),Object(i.b)("li",{parentName:"ul"},"SLAVEOF IP PORT"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"\u6570\u636e\u7684\u590d\u5236\u662f\u5355\u5411\u7684\uff01\u53ea\u80fd\u7531\u4e3b\u8282\u70b9\u590d\u5236\u5230\u4ece\u8282\u70b9")))),Object(i.b)("br",null),Object(i.b)("h2",{id:"\u4f7f\u7528\u89c4\u5219"},"\u4f7f\u7528\u89c4\u5219"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u53ea\u80fd\u8bfb\uff0c\u4e0d\u80fd\u5199\uff0c\u4e3b\u673a\u53ef\u8bfb\u53ef\u5199\u4f46\u662f\u591a\u7528\u4e8e\u5199\u3002")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"127.0.0.1:6381> set name sakura # \u4ece\u673a6381\u5199\u5165\u5931\u8d25\n(error) READONLY You can't write against a read only replica.\n\n127.0.0.1:6380> set name sakura # \u4ece\u673a6380\u5199\u5165\u5931\u8d25\n(error) READONLY You can't write against a read only replica.\n\n127.0.0.1:6379> set name sakura\nOK\n127.0.0.1:6379> get name\n\"sakura\"\n")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"\u5f53\u4e3b\u673a\u65ad\u7535\u5b95\u673a\u540e\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4ece\u673a\u7684\u89d2\u8272\u4e0d\u4f1a\u53d1\u751f\u53d8\u5316 \uff0c\u96c6\u7fa4\u4e2d\u53ea\u662f\u5931\u53bb\u4e86\u5199\u64cd\u4f5c\uff0c\u5f53\u4e3b\u673a\u6062\u590d\u4ee5\u540e\uff0c\u53c8\u4f1a\u8fde\u63a5\u4e0a\u4ece\u673a\u6062\u590d\u539f\u72b6\u3002")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"\u5f53\u4ece\u673a\u65ad\u7535\u5b95\u673a\u540e\uff0c\u82e5\u4e0d\u662f\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u914d\u7f6e\u7684\u4ece\u673a\uff0c\u518d\u6b21\u542f\u52a8\u540e\u4f5c\u4e3a\u4e3b\u673a\u662f\u65e0\u6cd5\u83b7\u53d6\u4e4b\u524d\u4e3b\u673a\u7684\u6570\u636e\u7684\uff0c\u82e5\u6b64\u65f6\u91cd\u65b0\u914d\u7f6e\u79f0\u4e3a\u4ece\u673a\uff0c\u53c8\u53ef\u4ee5\u83b7\u53d6\u5230\u4e3b\u673a\u7684\u6240\u6709\u6570\u636e\u3002\u8fd9\u91cc\u5c31\u8981\u63d0\u5230\u4e00\u4e2a\u540c\u6b65\u539f\u7406\u3002")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"\u7b2c\u4e8c\u6761\u4e2d\u63d0\u5230\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e3b\u673a\u6545\u969c\u540e\uff0c\u4e0d\u4f1a\u51fa\u73b0\u65b0\u7684\u4e3b\u673a\uff0c\u6709\u4e24\u79cd\u65b9\u5f0f\u53ef\u4ee5\u4ea7\u751f\u65b0\u7684\u4e3b\u673a\uff1a"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"\u4ece\u673a\u624b\u52a8\u6267\u884c\u547d\u4ee4slaveof no one,\u8fd9\u6837\u6267\u884c\u4ee5\u540e\u4ece\u673a\u4f1a\u72ec\u7acb\u51fa\u6765\u6210\u4e3a\u4e00\u4e2a\u4e3b\u673a"),Object(i.b)("li",{parentName:"ol"},"\u4f7f\u7528\u54e8\u5175\u6a21\u5f0f\uff08\u81ea\u52a8\u9009\u4e3e\uff09")))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u6ce8\u610f")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u5982\u679c\u6ca1\u6709\u8001\u5927\u4e86\uff0c\u8fd9\u4e2a\u65f6\u5019\u80fd\u4e0d\u80fd\u9009\u62e9\u51fa\u6765\u4e00\u4e2a\u8001\u5927\u5462\uff1f\u624b\u52a8\uff01"),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u4e3b\u673a\u65ad\u5f00\u4e86\u8fde\u63a5\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"li"},"SLAVEOF no one")," \u8ba9\u81ea\u5df1\u53d8\u6210\u4e3b\u673a\uff01\u5176\u4ed6\u7684\u8282\u70b9\u5c31\u53ef\u4ee5\u624b\u52a8\u8fde\u63a5\u5230\u6700\u65b0\u7684\u4e3b\u8282\u70b9\uff08\u624b\u52a8\uff09\uff01\u5982\u679c\u8fd9\u4e2a\u65f6\u5019\u8001\u5927\u4fee\u590d\u4e86\uff0c\u90a3\u4e48\u4e45\u91cd\u65b0\u8fde\u63a5\uff01")))),Object(i.b)("h2",{id:"\u5168\u91cf\u590d\u5236--\u589e\u91cf\u590d\u5236"},"\u5168\u91cf\u590d\u5236 | \u589e\u91cf\u590d\u5236"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5168\u91cf\u590d\u5236\uff1a\u590d\u5236 RBD \u6216 AOF \u6587\u4ef6\u7ed9\u4ece\u8282\u70b9"),Object(i.b)("li",{parentName:"ul"},"\u589e\u91cf\u590d\u5236\uff1a\u4e3b\u8282\u70b9\u8bb2\u63a5\u53d7\u5230\u7684\u6307\u4ee4\u8fdb\u884c ",Object(i.b)("inlineCode",{parentName:"li"},"\u5e7f\u64ad"),"\uff0c\u4e3a\u4e86\u51cf\u5c11 I/O \u6b21\u6570\uff0c\u7ef4\u62a4\u4e00\u4e2a ",Object(i.b)("inlineCode",{parentName:"li"},"Buffer")," \uff08\u5e38\u89c1\u64cd\u4f5c\u4e86\uff09\uff0cBuffer \u6ee1\u624d\u5e7f\u64ad\u4e00\u6b21\uff0c\u79f0\u4e3a ",Object(i.b)("inlineCode",{parentName:"li"},"\u589e\u91cf\u590d\u5236"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u4e3b\u4ece\u76f4\u63a5\u6570\u636e\u5dee > Buffer \u5bb9\u91cf\uff0c\u5c31\u4f1a\u89e6\u53d1 ",Object(i.b)("inlineCode",{parentName:"li"},"\u5168\u91cf\u590d\u5236"))))),Object(i.b)("br",null),Object(i.b)("h1",{id:"\u54e8\u5175\u6a21\u5f0f"},"\u54e8\u5175\u6a21\u5f0f"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.jianshu.com/p/06ab9daf921d"}),"Redis\u54e8\u5175\uff08Sentinel\uff09\u6a21\u5f0f - \u7b80\u4e66 (jianshu.com)")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u54e8\u5175"),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u4e3b\u4ece\u5207\u6362\u6280\u672f\u7684\u65b9\u6cd5\u662f\uff1a\u5f53\u4e3b\u670d\u52a1\u5668\u5b95\u673a\u540e\uff0c\u9700\u8981\u624b\u52a8\u628a\u4e00\u53f0\u4ece\u670d\u52a1\u5668\u5207\u6362\u4e3a\u4e3b\u670d\u52a1\u5668\uff0c\u8fd9\u5c31\u9700\u8981\u4eba\u5de5\u5e72\u9884\uff0c\u8d39\u4e8b\u8d39\u529b\uff0c\u8fd8\u4f1a\u9020\u6210\u4e00\u6bb5\u65f6\u95f4\u5185\u670d\u52a1\u4e0d\u53ef\u7528\u3002"),"\u8fd9\u4e0d\u662f\u4e00\u79cd\u63a8\u8350\u7684\u65b9\u5f0f\uff0c\u66f4\u591a\u65f6\u5019\uff0c\u6211\u4eec\u4f18\u5148\u8003\u8651 ",Object(i.b)("inlineCode",{parentName:"li"},"\u54e8\u5175\u6a21\u5f0f")),Object(i.b)("li",{parentName:"ul"},"\u54e8\u5175\u7684\u4f5c\u7528\uff1a",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u901a\u8fc7\u53d1\u9001\u547d\u4ee4\uff0c\u8ba9Redis\u670d\u52a1\u5668\u8fd4\u56de\u76d1\u63a7\u5176\u8fd0\u884c\u72b6\u6001\uff0c\u5305\u62ec\u4e3b\u670d\u52a1\u5668\u548c\u4ece\u670d\u52a1\u5668\u3002"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u5f53\u54e8\u5175\u76d1\u6d4b\u5230master\u5b95\u673a\uff0c\u4f1a\u81ea\u52a8\u5c06slave\u5207\u6362\u6210master\uff0c\u7136\u540e\u901a\u8fc7\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f\u901a\u77e5\u5176\u4ed6\u7684\u4ece\u670d\u52a1\u5668\uff0c\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\uff0c\u8ba9\u5b83\u4eec\u5207\u6362\u4e3b\u673a\u3002")))),Object(i.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u914d\u7f6e\u591a\u4e2a\u54e8\u5175"))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u54e8\u5175\u6838\u5fc3\u914d\u7f6e")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u914d\u7f6e\u591a\u5c11\u4e2a\u54e8\u5175\u4e3b\u89c2\u8ba4\u4e3a Master \u65ad\u5f00\u65f6\uff0c\u6700\u7ec8\u5224\u5b9a\u4e3a Master \u8282\u70b9\u5ba2\u89c2\u65ad\u5f00",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sentinel monitor mymaster 127.0.0.1 6379 1")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"1")," \u8868\u793a \u4e00\u4e2a\u54e8\u5175\u4e3b\u7ba1\u65ad\u5f00\uff0c\u5c31\u8ba4\u4e3a Master \u5ba2\u89c2\u65ad\u5f00"))),Object(i.b)("li",{parentName:"ul"},"\u542f\u52a8\u54e8\u5175\u6a21\u5f0f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"redis-sentinel xxx/sentinel.conf")))))),Object(i.b)("h2",{id:"\u4f18\u7f3a\u70b9"},"\u4f18\u7f3a\u70b9"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u4f18\u70b9"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u7f3a\u70b9"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"1. \u54e8\u5175\u96c6\u7fa4\uff0c\u57fa\u4e8e\u4e3b\u4ece\u590d\u5236\u6a21\u5f0f\uff0c\u6240\u6709\u4e3b\u4ece\u590d\u5236\u7684\u4f18\u70b9\uff0c\u5b83\u90fd\u6709",Object(i.b)("br",null),"2. \u4e3b\u4ece\u53ef\u4ee5\u5207\u6362\uff0c\u6545\u969c\u53ef\u4ee5\u8f6c\u79fb\uff0c\u7cfb\u7edf\u7684\u53ef\u7528\u6027\u66f4\u597d",Object(i.b)("br",null),"3. \u54e8\u5175\u6a21\u5f0f\u662f\u4e3b\u4ece\u6a21\u5f0f\u7684\u5347\u7ea7\uff0c\u624b\u52a8\u5230\u81ea\u52a8\uff0c\u66f4\u52a0\u5065\u58ee"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"1. Redis \u4e0d\u597d\u5728\u7ebf\u6269\u5bb9\uff0c\u96c6\u7fa4\u5bb9\u91cf\u4e00\u65e6\u8fbe\u5230\u4e0a\u9650\uff0c\u5728\u7ebf\u6269\u5bb9\u5c31\u5341\u5206\u9ebb\u70e6",Object(i.b)("br",null),"2.\u5b9e\u73b0\u54e8\u5175\u6a21\u5f0f\u7684\u914d\u7f6e\u6bd4\u8f83\u9ebb\u70e6\uff0c\u76f8\u5173\u914d\u7f6e\u9879\u5f88\u591a")))),Object(i.b)("h3",{id:"\u54e8\u5175\u6a21\u5f0f\u5b8c\u6574\u914d\u7f6e\u6587\u4ef6"},"\u54e8\u5175\u6a21\u5f0f\u5b8c\u6574\u914d\u7f6e\u6587\u4ef6"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="sentinel.conf"',title:'"sentinel.conf"'}),'# Example sentinel.conf\n \n# \u54e8\u5175sentinel\u5b9e\u4f8b\u8fd0\u884c\u7684\u7aef\u53e3 \u9ed8\u8ba426379\nport 26379\n \n# \u54e8\u5175sentinel\u7684\u5de5\u4f5c\u76ee\u5f55\ndir /tmp\n \n# \u54e8\u5175sentinel\u76d1\u63a7\u7684redis\u4e3b\u8282\u70b9\u7684 ip port \n# master-name  \u53ef\u4ee5\u81ea\u5df1\u547d\u540d\u7684\u4e3b\u8282\u70b9\u540d\u5b57 \u53ea\u80fd\u7531\u5b57\u6bcdA-z\u3001\u6570\u5b570-9 \u3001\u8fd9\u4e09\u4e2a\u5b57\u7b26".-_"\u7ec4\u6210\u3002\n# quorum \u5f53\u8fd9\u4e9bquorum\u4e2a\u6570sentinel\u54e8\u5175\u8ba4\u4e3amaster\u4e3b\u8282\u70b9\u5931\u8054 \u90a3\u4e48\u8fd9\u65f6 \u5ba2\u89c2\u4e0a\u8ba4\u4e3a\u4e3b\u8282\u70b9\u5931\u8054\u4e86\n# sentinel monitor <master-name> <ip> <redis-port> <quorum>\nsentinel monitor mymaster 127.0.0.1 6379 1\n \n# \u5f53\u5728Redis\u5b9e\u4f8b\u4e2d\u5f00\u542f\u4e86requirepass foobared \u6388\u6743\u5bc6\u7801 \u8fd9\u6837\u6240\u6709\u8fde\u63a5Redis\u5b9e\u4f8b\u7684\u5ba2\u6237\u7aef\u90fd\u8981\u63d0\u4f9b\u5bc6\u7801\n# \u8bbe\u7f6e\u54e8\u5175sentinel \u8fde\u63a5\u4e3b\u4ece\u7684\u5bc6\u7801 \u6ce8\u610f\u5fc5\u987b\u4e3a\u4e3b\u4ece\u8bbe\u7f6e\u4e00\u6837\u7684\u9a8c\u8bc1\u5bc6\u7801\n# sentinel auth-pass <master-name> <password>\nsentinel auth-pass mymaster MySUPER--secret-0123passw0rd\n \n \n# \u6307\u5b9a\u591a\u5c11\u6beb\u79d2\u4e4b\u540e \u4e3b\u8282\u70b9\u6ca1\u6709\u5e94\u7b54\u54e8\u5175sentinel \u6b64\u65f6 \u54e8\u5175\u4e3b\u89c2\u4e0a\u8ba4\u4e3a\u4e3b\u8282\u70b9\u4e0b\u7ebf \u9ed8\u8ba430\u79d2\n# sentinel down-after-milliseconds <master-name> <milliseconds>\nsentinel down-after-milliseconds mymaster 30000\n \n# \u8fd9\u4e2a\u914d\u7f6e\u9879\u6307\u5b9a\u4e86\u5728\u53d1\u751ffailover\u4e3b\u5907\u5207\u6362\u65f6\u6700\u591a\u53ef\u4ee5\u6709\u591a\u5c11\u4e2aslave\u540c\u65f6\u5bf9\u65b0\u7684master\u8fdb\u884c \u540c\u6b65\uff0c\n\u8fd9\u4e2a\u6570\u5b57\u8d8a\u5c0f\uff0c\u5b8c\u6210failover\u6240\u9700\u7684\u65f6\u95f4\u5c31\u8d8a\u957f\uff0c\n\u4f46\u662f\u5982\u679c\u8fd9\u4e2a\u6570\u5b57\u8d8a\u5927\uff0c\u5c31\u610f\u5473\u7740\u8d8a \u591a\u7684slave\u56e0\u4e3areplication\u800c\u4e0d\u53ef\u7528\u3002\n\u53ef\u4ee5\u901a\u8fc7\u5c06\u8fd9\u4e2a\u503c\u8bbe\u4e3a 1 \u6765\u4fdd\u8bc1\u6bcf\u6b21\u53ea\u6709\u4e00\u4e2aslave \u5904\u4e8e\u4e0d\u80fd\u5904\u7406\u547d\u4ee4\u8bf7\u6c42\u7684\u72b6\u6001\u3002\n# sentinel parallel-syncs <master-name> <numslaves>\nsentinel parallel-syncs mymaster 1\n \n \n \n# \u6545\u969c\u8f6c\u79fb\u7684\u8d85\u65f6\u65f6\u95f4 failover-timeout \u53ef\u4ee5\u7528\u5728\u4ee5\u4e0b\u8fd9\u4e9b\u65b9\u9762\uff1a \n#1. \u540c\u4e00\u4e2asentinel\u5bf9\u540c\u4e00\u4e2amaster\u4e24\u6b21failover\u4e4b\u95f4\u7684\u95f4\u9694\u65f6\u95f4\u3002\n#2. \u5f53\u4e00\u4e2aslave\u4ece\u4e00\u4e2a\u9519\u8bef\u7684master\u90a3\u91cc\u540c\u6b65\u6570\u636e\u5f00\u59cb\u8ba1\u7b97\u65f6\u95f4\u3002\u76f4\u5230slave\u88ab\u7ea0\u6b63\u4e3a\u5411\u6b63\u786e\u7684master\u90a3\u91cc\u540c\u6b65\u6570\u636e\u65f6\u3002\n#3.\u5f53\u60f3\u8981\u53d6\u6d88\u4e00\u4e2a\u6b63\u5728\u8fdb\u884c\u7684failover\u6240\u9700\u8981\u7684\u65f6\u95f4\u3002  \n#4.\u5f53\u8fdb\u884cfailover\u65f6\uff0c\u914d\u7f6e\u6240\u6709slaves\u6307\u5411\u65b0\u7684master\u6240\u9700\u7684\u6700\u5927\u65f6\u95f4\u3002\u4e0d\u8fc7\uff0c\u5373\u4f7f\u8fc7\u4e86\u8fd9\u4e2a\u8d85\u65f6\uff0cslaves\u4f9d\u7136\u4f1a\u88ab\u6b63\u786e\u914d\u7f6e\u4e3a\u6307\u5411master\uff0c\u4f46\u662f\u5c31\u4e0d\u6309parallel-syncs\u6240\u914d\u7f6e\u7684\u89c4\u5219\u6765\u4e86\n# \u9ed8\u8ba4\u4e09\u5206\u949f\n# sentinel failover-timeout <master-name> <milliseconds>\nsentinel failover-timeout mymaster 180000\n \n# SCRIPTS EXECUTION\n \n#\u914d\u7f6e\u5f53\u67d0\u4e00\u4e8b\u4ef6\u53d1\u751f\u65f6\u6240\u9700\u8981\u6267\u884c\u7684\u811a\u672c\uff0c\u53ef\u4ee5\u901a\u8fc7\u811a\u672c\u6765\u901a\u77e5\u7ba1\u7406\u5458\uff0c\u4f8b\u5982\u5f53\u7cfb\u7edf\u8fd0\u884c\u4e0d\u6b63\u5e38\u65f6\u53d1\u90ae\u4ef6\u901a\u77e5\u76f8\u5173\u4eba\u5458\u3002\n#\u5bf9\u4e8e\u811a\u672c\u7684\u8fd0\u884c\u7ed3\u679c\u6709\u4ee5\u4e0b\u89c4\u5219\uff1a\n#\u82e5\u811a\u672c\u6267\u884c\u540e\u8fd4\u56de1\uff0c\u90a3\u4e48\u8be5\u811a\u672c\u7a0d\u540e\u5c06\u4f1a\u88ab\u518d\u6b21\u6267\u884c\uff0c\u91cd\u590d\u6b21\u6570\u76ee\u524d\u9ed8\u8ba4\u4e3a10\n#\u82e5\u811a\u672c\u6267\u884c\u540e\u8fd4\u56de2\uff0c\u6216\u8005\u6bd42\u66f4\u9ad8\u7684\u4e00\u4e2a\u8fd4\u56de\u503c\uff0c\u811a\u672c\u5c06\u4e0d\u4f1a\u91cd\u590d\u6267\u884c\u3002\n#\u5982\u679c\u811a\u672c\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\u7531\u4e8e\u6536\u5230\u7cfb\u7edf\u4e2d\u65ad\u4fe1\u53f7\u88ab\u7ec8\u6b62\u4e86\uff0c\u5219\u540c\u8fd4\u56de\u503c\u4e3a1\u65f6\u7684\u884c\u4e3a\u76f8\u540c\u3002\n#\u4e00\u4e2a\u811a\u672c\u7684\u6700\u5927\u6267\u884c\u65f6\u95f4\u4e3a60s\uff0c\u5982\u679c\u8d85\u8fc7\u8fd9\u4e2a\u65f6\u95f4\uff0c\u811a\u672c\u5c06\u4f1a\u88ab\u4e00\u4e2aSIGKILL\u4fe1\u53f7\u7ec8\u6b62\uff0c\u4e4b\u540e\u91cd\u65b0\u6267\u884c\u3002\n \n#\u901a\u77e5\u578b\u811a\u672c:\u5f53sentinel\u6709\u4efb\u4f55\u8b66\u544a\u7ea7\u522b\u7684\u4e8b\u4ef6\u53d1\u751f\u65f6\uff08\u6bd4\u5982\u8bf4redis\u5b9e\u4f8b\u7684\u4e3b\u89c2\u5931\u6548\u548c\u5ba2\u89c2\u5931\u6548\u7b49\u7b49\uff09\uff0c\u5c06\u4f1a\u53bb\u8c03\u7528\u8fd9\u4e2a\u811a\u672c\uff0c\n#\u8fd9\u65f6\u8fd9\u4e2a\u811a\u672c\u5e94\u8be5\u901a\u8fc7\u90ae\u4ef6\uff0cSMS\u7b49\u65b9\u5f0f\u53bb\u901a\u77e5\u7cfb\u7edf\u7ba1\u7406\u5458\u5173\u4e8e\u7cfb\u7edf\u4e0d\u6b63\u5e38\u8fd0\u884c\u7684\u4fe1\u606f\u3002\u8c03\u7528\u8be5\u811a\u672c\u65f6\uff0c\u5c06\u4f20\u7ed9\u811a\u672c\u4e24\u4e2a\u53c2\u6570\uff0c\n#\u4e00\u4e2a\u662f\u4e8b\u4ef6\u7684\u7c7b\u578b\uff0c\n#\u4e00\u4e2a\u662f\u4e8b\u4ef6\u7684\u63cf\u8ff0\u3002\n#\u5982\u679csentinel.conf\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e\u4e86\u8fd9\u4e2a\u811a\u672c\u8def\u5f84\uff0c\u90a3\u4e48\u5fc5\u987b\u4fdd\u8bc1\u8fd9\u4e2a\u811a\u672c\u5b58\u5728\u4e8e\u8fd9\u4e2a\u8def\u5f84\uff0c\u5e76\u4e14\u662f\u53ef\u6267\u884c\u7684\uff0c\u5426\u5219sentinel\u65e0\u6cd5\u6b63\u5e38\u542f\u52a8\u6210\u529f\u3002\n#\u901a\u77e5\u811a\u672c\n# sentinel notification-script <master-name> <script-path>\n  sentinel notification-script mymaster /var/redis/notify.sh\n \n# \u5ba2\u6237\u7aef\u91cd\u65b0\u914d\u7f6e\u4e3b\u8282\u70b9\u53c2\u6570\u811a\u672c\n# \u5f53\u4e00\u4e2amaster\u7531\u4e8efailover\u800c\u53d1\u751f\u6539\u53d8\u65f6\uff0c\u8fd9\u4e2a\u811a\u672c\u5c06\u4f1a\u88ab\u8c03\u7528\uff0c\u901a\u77e5\u76f8\u5173\u7684\u5ba2\u6237\u7aef\u5173\u4e8emaster\u5730\u5740\u5df2\u7ecf\u53d1\u751f\u6539\u53d8\u7684\u4fe1\u606f\u3002\n# \u4ee5\u4e0b\u53c2\u6570\u5c06\u4f1a\u5728\u8c03\u7528\u811a\u672c\u65f6\u4f20\u7ed9\u811a\u672c:\n# <master-name> <role> <state> <from-ip> <from-port> <to-ip> <to-port>\n# \u76ee\u524d<state>\u603b\u662f\u201cfailover\u201d,\n# <role>\u662f\u201cleader\u201d\u6216\u8005\u201cobserver\u201d\u4e2d\u7684\u4e00\u4e2a\u3002 \n# \u53c2\u6570 from-ip, from-port, to-ip, to-port\u662f\u7528\u6765\u548c\u65e7\u7684master\u548c\u65b0\u7684master(\u5373\u65e7\u7684slave)\u901a\u4fe1\u7684\n# \u8fd9\u4e2a\u811a\u672c\u5e94\u8be5\u662f\u901a\u7528\u7684\uff0c\u80fd\u88ab\u591a\u6b21\u8c03\u7528\uff0c\u4e0d\u662f\u9488\u5bf9\u6027\u7684\u3002\n# sentinel client-reconfig-script <master-name> <script-path>\nsentinel client-reconfig-script mymaster /var/redis/reconfig.sh\n')))}s.isMDXComponent=!0},576:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=s(n),O=a,u=p["".concat(l,".").concat(O)]||p[O]||m[O]||i;return n?r.a.createElement(u,b(b({ref:t},o),{},{components:n})):r.a.createElement(u,b({ref:t},o))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=O;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var o=2;o<i;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);