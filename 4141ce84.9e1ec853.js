(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{184:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var b=n(2),l=n(6),a=(n(0),n(564)),r={id:"3.sentinelFlowControl",title:"Sentinel \u6d41\u91cf\u63a7\u5236",hide_title:!0},i={unversionedId:"springcloudalibaba/\u6d41\u91cf\u536b\u5175/3.sentinelFlowControl",id:"springcloudalibaba/\u6d41\u91cf\u536b\u5175/3.sentinelFlowControl",isDocsHomePage:!1,title:"Sentinel \u6d41\u91cf\u63a7\u5236",description:"Sentinel \u6d41\u91cf\u63a7\u5236",source:"@site/docs/springcloudalibaba/\u6d41\u91cf\u536b\u5175/3.\u6d41\u91cf\u63a7\u5236.md",slug:"/springcloudalibaba/\u6d41\u91cf\u536b\u5175/3.sentinelFlowControl",permalink:"/docs/springcloudalibaba/\u6d41\u91cf\u536b\u5175/3.sentinelFlowControl",version:"current",sidebar:"someSidebar",previous:{title:"Sentinel \u521d\u59cb\u5316\u76d1\u63a7",permalink:"/docs/springcloudalibaba/\u6d41\u91cf\u536b\u5175/2.sentinelDashboard"},next:{title:"Sentinel \u670d\u52a1\u964d\u7ea7",permalink:"/docs/springcloudalibaba/\u6d41\u91cf\u536b\u5175/4.sentinelFallback"}},c=[{value:"Sentinel \u6d41\u91cf\u63a7\u5236",id:"sentinel-\u6d41\u91cf\u63a7\u5236",children:[]},{value:"\u6d41\u63a7\u6a21\u5f0f",id:"\u6d41\u63a7\u6a21\u5f0f",children:[{value:"\u76f4\u63a5\uff08\u9ed8\u8ba4\uff09",id:"\u76f4\u63a5\uff08\u9ed8\u8ba4\uff09",children:[]},{value:"\u5173\u8054",id:"\u5173\u8054",children:[]},{value:"\u94fe\u8def",id:"\u94fe\u8def",children:[]}]},{value:"\u6d41\u63a7\u6548\u679c",id:"\u6d41\u63a7\u6548\u679c",children:[{value:"\u5feb\u901f\u5931\u8d25",id:"\u5feb\u901f\u5931\u8d25",children:[]},{value:"\u9884\u70ed",id:"\u9884\u70ed",children:[]},{value:"\u6392\u961f\u7b49\u5f85",id:"\u6392\u961f\u7b49\u5f85",children:[]}]}],o={rightToc:c};function p(e){var t=e.components,r=Object(l.a)(e,["components"]);return Object(a.b)("wrapper",Object(b.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"sentinel-\u6d41\u91cf\u63a7\u5236"},"Sentinel \u6d41\u91cf\u63a7\u5236"),Object(a.b)("img",{src:n(769).default,style:{zoom:"100%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(a.b)("br",null),Object(a.b)("blockquote",null,Object(a.b)("h2",Object(b.a)({parentName:"blockquote"},{id:"sentinel\u540d\u8bcd\u89e3\u91ca"}),"Sentinel\u540d\u8bcd\u89e3\u91ca"),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"\u8d44\u6e90\u540d\uff1a\u552f\u4e00\u540d\u79f0\uff0c\u9ed8\u8ba4\u8bf7\u6c42\u8def\u5f84"),Object(a.b)("li",{parentName:"ul"},"\u9488\u5bf9\u6765\u6e90\uff1aSentinel\u53ef\u4ee5\u9488\u5bf9\u8c03\u7528\u8005\u8fdb\u884c\u9650\u6d41\uff0c\u586b\u5199\u5fae\u670d\u52a1\u540d\uff0c\u6307\u5b9a\u5bf9\u54ea\u4e2a\u5fae\u670d\u52a1\u8fdb\u884c\u9650\u6d41 \uff0c\u9ed8\u8ba4default(\u4e0d\u533a\u5206\u6765\u6e90\uff0c\u5168\u90e8\u9650\u5236)"),Object(a.b)("li",{parentName:"ul"},"\u9608\u503c\u7c7b\u578b/\u5355\u673a\u9608\u503c\uff1a\n1\u3001QPS(\u6bcf\u79d2\u949f\u7684\u8bf7\u6c42\u6570\u91cf)\uff1a\u5f53\u8c03\u7528\u8be5\u63a5\u53e3\u7684QPS\u8fbe\u5230\u4e86\u9608\u503c\u7684\u65f6\u5019\uff0c\u8fdb\u884c\u9650\u6d41\uff1b\n2\u3001\u7ebf\u7a0b\u6570\uff1a\u5f53\u8c03\u7528\u8be5\u63a5\u53e3\u7684\u7ebf\u7a0b\u6570\u8fbe\u5230\u9608\u503c\u65f6\uff0c\u8fdb\u884c\u9650\u6d41"),Object(a.b)("li",{parentName:"ul"},"\u662f\u5426\u96c6\u7fa4\uff1a\u4e0d\u9700\u8981\u96c6\u7fa4"),Object(a.b)("li",{parentName:"ul"},"\u6d41\u63a7\u6a21\u5f0f\uff1a\n1\u3001\u76f4\u63a5\uff1a\u63a5\u53e3\u8fbe\u5230\u9650\u6d41\u6761\u4ef6\u65f6\uff0c\u76f4\u63a5\u9650\u6d41\n2\u3001\u5173\u8054\uff1a\u5f53\u5173\u8054\u7684\u8d44\u6e90\u8fbe\u5230\u9608\u503c\u65f6\uff0c\u5c31\u9650\u6d41\u81ea\u5df1\n3\u3001\u94fe\u8def\uff1a\u53ea\u8bb0\u5f55\u6307\u5b9a\u94fe\u8def\u4e0a\u7684\u6d41\u91cf\uff08\u6307\u5b9a\u8d44\u6e90\u4ece\u5165\u53e3\u8d44\u6e90\u8fdb\u6765\u7684\u6d41\u91cf\uff0c\u5982\u679c\u8fbe\u5230\u9608\u503c\uff0c\u5c31\u53ef\u4ee5\u9650\u6d41\uff09","[api\u7ea7\u522b\u7684\u9488\u5bf9\u6765\u6e90]"),Object(a.b)("li",{parentName:"ul"},"\u6d41\u63a7\u6548\u679c\n1\u3001\u5feb\u901f\u5931\u8d25\uff1a\u76f4\u63a5\u5931\u8d25\n2\u3001Warm Up\uff1a\u5373\u8bf7\u6c42 QPS \u4ece threshold / 3 \u5f00\u59cb\uff0c\u7ecf\u9884\u70ed\u65f6\u957f\u9010\u6e10\u5347\u81f3\u8bbe\u5b9a\u7684 QPS \u9608\u503c\n3\u3001\u6392\u961f\u7b49\u5f85"))),Object(a.b)("br",null),Object(a.b)("h1",{id:"\u6d41\u63a7\u6a21\u5f0f"},"\u6d41\u63a7\u6a21\u5f0f"),Object(a.b)("h2",{id:"\u76f4\u63a5\uff08\u9ed8\u8ba4\uff09"},"\u76f4\u63a5\uff08\u9ed8\u8ba4\uff09"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u8d44\u6e90\u540d\uff1a\u552f\u4e00\u540d\u79f0\uff0c\u9ed8\u8ba4\u8bf7\u6c42\u8def\u5f84"),"\uff0cController \u91cc\u7684\u8def\u5f84"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u8fdb\u5165 ",Object(a.b)("inlineCode",{parentName:"li"},"\u7c07\u70b9\u94fe\u8def")," "),Object(a.b)("li",{parentName:"ul"},"\u5728\u5bf9\u5e94\u7684 ",Object(a.b)("inlineCode",{parentName:"li"},"\u8def\u5f84 path")," \uff08\u5982 ",Object(a.b)("inlineCode",{parentName:"li"},"/testA"),"\uff09 \u540e\u70b9\u51fb ",Object(a.b)("inlineCode",{parentName:"li"},"\u6d41\u63a7"))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"QPS \u76f4\u63a5\u5931\u8d25")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u9009\u62e9 ",Object(a.b)("inlineCode",{parentName:"li"},"\u9608\u503c\u7c7b\u578b QPS"),"\uff1a",Object(a.b)("inlineCode",{parentName:"li"},"QPS"),"\uff1aQueries Per Second \u6bcf\u79d2\u67e5\u8be2/\u8bf7\u6c42\u6570\uff0c\u9608\u503c\u8bbe\u7f6e\u4e3a ",Object(a.b)("inlineCode",{parentName:"li"},"1")," \u8868\u793a\u6bcf\u79d2\u8bbf\u95ee\u6570\u5927\u4e8e 1 \u5c31\u89e6\u53d1"),Object(a.b)("li",{parentName:"ul"},"\u6d41\u63a7\u6a21\u5f0f\u8bbe\u7f6e\u4e3a ",Object(a.b)("inlineCode",{parentName:"li"},"\u76f4\u63a5")),Object(a.b)("li",{parentName:"ul"},"\u6d41\u63a7\u6548\u679c\u8bbe\u7f6e\u4e3a ",Object(a.b)("inlineCode",{parentName:"li"},"\u5feb\u901f\u5931\u8d25"))),Object(a.b)("br",null),Object(a.b)("img",{src:n(770).default,style:{zoom:"100%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(a.b)("br",null),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u4e4b\u540e\uff0c\u8fd9\u6761\u8bbe\u7f6e\u597d\u7684\u6d41\u91cf\u89c4\u5219\uff0c\u53ef\u4ee5\u518d ",Object(a.b)("inlineCode",{parentName:"li"},"\u6d41\u91cf\u89c4\u5219")," \u6a21\u5757\u4e2d\u67e5\u770b")),Object(a.b)("br",null),Object(a.b)("img",{src:n(771).default,style:{zoom:"100%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(a.b)("br",null),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"\u6d4b\u8bd5")),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"\u75af\u72c2\u8bbf\u95ee ",Object(a.b)("inlineCode",{parentName:"li"},"http://localhost:8401/testA")),Object(a.b)("li",{parentName:"ul"},"\u4f1a\u89e6\u53d1\u8bbe\u7f6e\u7684\u6d41\u63a7\u89c4\u5219"),Object(a.b)("li",{parentName:"ul"},"\u5f97\u5230\u54cd\u5e94\u4e3a\u62a5\u9519\u5b57\u7b26\u4e32 ",Object(a.b)("inlineCode",{parentName:"li"},"\u88ab Sentinel \u963b\u6321\uff08\u6d41\u91cf\u63a7\u5236\uff09")))),Object(a.b)("img",{src:n(772).default,style:{zoom:"100%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(a.b)("br",null),Object(a.b)("h2",{id:"\u5173\u8054"},"\u5173\u8054"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"\u5f53\u5173\u8054\u7684\u8d44\u6e90\u8fbe\u5230\u9608\u503c\u65f6\uff0c\u5c31\u9650\u6d41\u81ea\u5df1")),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"\u767d\u8bdd\uff1a\u522b\u4eba\u7684\u9505\u6211\u6765\u80cc"),Object(a.b)("li",{parentName:"ul"},"\u5f53\u4e0e A \u5173\u8054\u7684\u8d44\u6e90 B \u8fbe\u5230\u9608\u503c\u540e\uff0c\u5c31\u9650\u6d41 A \u81ea\u5df1"),Object(a.b)("li",{parentName:"ul"},"B \u60f9\u4e8b\uff0cA \u628a\u81ea\u5df1\u6302\u4e86"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"\u4fee\u6539 ",Object(a.b)("inlineCode",{parentName:"strong"},"/testA")," \u7684\u6d41\u63a7\u89c4\u5219\uff0c\u8bbe\u7f6e\u4e3a\u5173\u8054\u5230 ",Object(a.b)("inlineCode",{parentName:"strong"},"/testB")),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u5373\uff0c\u5982\u679c B \u6302\u4e86\uff0c\u5e0c\u671b A \u5c31\u628a\u81ea\u5df1\u9650\u6d41\u4e86\uff0c\u56e0\u4e3a A \u7684\u4e1a\u52a1\u53ef\u80fd\u8981\u8c03\u7528 B")))),Object(a.b)("br",null),Object(a.b)("img",{src:n(773).default,style:{zoom:"100%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(a.b)("br",null),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u6b64\u5904\u6307\uff1a\u5982\u679c ",Object(a.b)("inlineCode",{parentName:"li"},"/testB")," \u7684 QPS \u8d85\u8fc7 ",Object(a.b)("inlineCode",{parentName:"li"},"1")," \uff0c\u5c31\u628a ",Object(a.b)("inlineCode",{parentName:"li"},"/testA")," \u9650\u6d41")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"\u4f7f\u7528 POSTMAN \u6a21\u62df\u5e76\u53d1\u5bc6\u96c6\u8bf7\u6c42 /testB \u6d4b\u8bd5")),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"\u5728 POSTMAN \u4e2d\u8f93\u5165\u8bf7\u6c42\u5730\u5740\uff0c\u7136\u540e\u70b9 ",Object(a.b)("inlineCode",{parentName:"li"},"Save"),"\uff0c\u628a\u5b83\u5b58\u50a8\u5230 ",Object(a.b)("inlineCode",{parentName:"li"},"\u96c6\u5408 Collections")," \u4e2d\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u628a\u4e00\u4e9b\u5217\u8bf7\u6c42\u505a\u6210\u4e00\u4e2a ",Object(a.b)("inlineCode",{parentName:"li"},"ArrayList")," \u4e00\u6837\u7684\u4e1c\u897f"),Object(a.b)("li",{parentName:"ul"},"\u8bbe\u7f6e\u96c6\u5408\u8fd0\u884c\u65b9\u5f0f\uff1a\u8bbe\u7f6e ",Object(a.b)("inlineCode",{parentName:"li"},"20")," \u4e2a\u7ebf\u7a0b\u6bcf\u95f4\u9694 ",Object(a.b)("inlineCode",{parentName:"li"},"300")," \u6beb\u79d2\u8bf7\u6c42\u4e00\u6b21\u76ee\u6807\u5730\u5740")),Object(a.b)("br",null),Object(a.b)("img",{src:n(774).default,style:{zoom:"100%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(a.b)("br",null),Object(a.b)("img",{src:n(775).default,style:{zoom:"100%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(a.b)("br",null),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"\u6267\u884c POSTMAN \u5bc6\u96c6\u8bf7\u6c42\uff0c\u671f\u95f4\u8bbf\u95ee ",Object(a.b)("inlineCode",{parentName:"li"},"http://localhost:8401/testA"),"\uff0c\u53ef\u4ee5\u53d1\u73b0 A \u5df2\u7ecf\u88ab\u9650\u6d41\u4e86")),Object(a.b)("br",null),Object(a.b)("img",{src:n(776).default,style:{zoom:"50%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(a.b)("br",null),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"POSTMAN \u8bf7\u6c42\u5b8c\u6bd5\u540e\uff0c ",Object(a.b)("inlineCode",{parentName:"li"},"/testA")," \u53c8\u6062\u590d\u4e86\u6b63\u5e38\u529f\u80fd"))),Object(a.b)("h2",{id:"\u94fe\u8def"},"\u94fe\u8def"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"\u591a\u4e2a\u8bf7\u6c42\u8c03\u7528\u4e86\u540c\u4e00\u4e2a\u5fae\u670d\u52a1"))),Object(a.b)("br",null),Object(a.b)("h1",{id:"\u6d41\u63a7\u6548\u679c"},"\u6d41\u63a7\u6548\u679c"),Object(a.b)("h2",{id:"\u5feb\u901f\u5931\u8d25"},"\u5feb\u901f\u5931\u8d25"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u76f4\u63a5\u8fd4\u56de\u4e00\u4e2a\u62a5\u9519\u5b57\u7b26\u4e32")),Object(a.b)("h2",{id:"\u9884\u70ed"},"\u9884\u70ed"),Object(a.b)("p",null,"\u5206\u5e03\u5f0f\u7cfb\u7edf\u5bb3\u6015\u9047\u5230\u7684\u60c5\u51b5\uff1a\u5e73\u65f6\u6ca1\u4eba\u7528\uff0c\u5173\u952e\u65f6\u523b\u76f4\u63a5\u597d\u51e0\u5341\u4e07\u8bbf\u95ee\u91cf"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u8981\u5b9e\u73b0\u4e00\u4e2a ",Object(a.b)("inlineCode",{parentName:"li"},"\u524a\u5cf0")," \u7684\u6548\u679c"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"\u516c\u5f0f\uff1a\u9608\u503c / coldFactor"),"\uff0c\u7ecf\u8fc7\u9884\u70ed\u65f6\u957f\u540e\u624d\u4f1a\u8fbe\u5230\u9608\u503c\u3002\u5176\u4e2d ",Object(a.b)("inlineCode",{parentName:"li"},"coldFactor")," \u4e3a\u51b7\u5374\u56e0\u5b50\uff0c\u9ed8\u8ba4\u503c\u4e3a ",Object(a.b)("inlineCode",{parentName:"li"},"3")),Object(a.b)("li",{parentName:"ul"},"\u8bf7\u6c42 QPS \u4ece ",Object(a.b)("inlineCode",{parentName:"li"},"\u9608\u503c / 3")," \u5f00\u59cb\uff0c\u7ecf\u8fc7\u9884\u70ed\u65f6\u957f\u9010\u6b65\u63d0\u5347\u81f3\u8bbe\u5b9a\u7684 QPS \u9608\u503c"),Object(a.b)("li",{parentName:"ul"},"\u8bbe\u7f6e\u5141\u8bb8\u7684\u6700\u5927 QPS \u4e3a ",Object(a.b)("inlineCode",{parentName:"li"},"10"),"\uff0c\u8bbe\u7f6e\u4e3a\u9884\u70ed\uff0c\u5728 ",Object(a.b)("inlineCode",{parentName:"li"},"5")," \u79d2\u5185\u63d0\u5347\u81f3\u6700\u5927\u9608\u503c ",Object(a.b)("inlineCode",{parentName:"li"},"10")," \uff0c\u4e00\u5f00\u59cb\u7684 QPS \u4e3a ",Object(a.b)("inlineCode",{parentName:"li"},"10 / 3 = 3"))),Object(a.b)("br",null),Object(a.b)("img",{src:n(777).default,style:{zoom:"40%",boxShadow:"5px 7px 28px #333333",borderRadius:"19px"}})," ",Object(a.b)("br",null),Object(a.b)("h2",{id:"\u6392\u961f\u7b49\u5f85"},"\u6392\u961f\u7b49\u5f85"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u5300\u901f\u6392\u961f\uff0c\u8ba9\u8bf7\u6c42\u4ee5\u5747\u5300\u901f\u5ea6\u901a\u8fc7\uff0c\u9608\u503c\u7c7b\u578b\u5fc5\u987b\u8bbe\u7f6e\u4e3a ",Object(a.b)("inlineCode",{parentName:"li"},"QPS"),"\uff0c\u5426\u5219\u65e0\u6548\uff0c\u4f7f\u7528\u7684\u662f ",Object(a.b)("inlineCode",{parentName:"li"},"\u6f0f\u6876\u7b97\u6cd5")),Object(a.b)("li",{parentName:"ul"},"\u8bbe\u7f6e ",Object(a.b)("inlineCode",{parentName:"li"},"/testA")," QPS \u9608\u503c\u4e3a ",Object(a.b)("inlineCode",{parentName:"li"},"1"),"\uff0c\u6bcf\u79d2\u53ea\u5904\u7406\u8bf7\u6c42 ",Object(a.b)("inlineCode",{parentName:"li"},"1")," \u6b21\uff0c\u5982\u679c\u8d85\u8fc7\u4e86\u5c31\u5fc5\u987b\u6392\u961f\u7b49\u5f85\uff0c\u7b49\u5f85\u7684\u8d85\u65f6\u65f6\u95f4\u8bbe\u7f6e\u4e3a ",Object(a.b)("inlineCode",{parentName:"li"},"20000")," \u6beb\u79d2")),Object(a.b)("br",null),Object(a.b)("img",{src:n(778).default,style:{zoom:"40%",boxShadow:"5px 7px 28px #333333",borderRadius:"19px"}})," ",Object(a.b)("br",null))}p.isMDXComponent=!0},564:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var b=n(0),l=n.n(b);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,b)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,b,l=function(e,t){if(null==e)return{};var n,b,l={},a=Object.keys(e);for(b=0;b<a.length;b++)n=a[b],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(b=0;b<a.length;b++)n=a[b],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=l.a.createContext({}),p=function(e){var t=l.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return l.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},s=l.a.forwardRef((function(e,t){var n=e.components,b=e.mdxType,a=e.originalType,r=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=p(n),s=b,O=u["".concat(r,".").concat(s)]||u[s]||d[s]||a;return n?l.a.createElement(O,i(i({ref:t},o),{},{components:n})):l.a.createElement(O,i({ref:t},o))}));function O(e,t){var n=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var a=n.length,r=new Array(a);r[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:b,r[1]=i;for(var o=2;o<a;o++)r[o]=n[o];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},769:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/3-62ce296e528480efd520dac57f2e4647.png"},770:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/4-75f9ada90468c0baa31ca2820115e41b.png"},771:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/5-9b3fb4bb052661a64f0a64946013beed.png"},772:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/6-5a5d19944f366da67391b4537846406f.png"},773:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/7-d5ce43190f79c9974b46cb12649ad162.png"},774:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/8-978dde45a1275f86301a1d4f64a97b5c.png"},775:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/9-48003b4cf55379a9cdc48661ddef07fc.png"},776:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/10-195000d4ffa6d8c4b12a86d92c1d3979.png"},777:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/11-8b3ac2f18c0d449ff24a58cba7b8bcd0.png"},778:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/12-2a7563be448cea9e4480bebb012d53ad.png"}}]);