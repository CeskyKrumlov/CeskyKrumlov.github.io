(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{201:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),b=n(6),i=(n(0),n(492)),l={id:"1.bloomFilter",title:"\u5e03\u9686\u8fc7\u6ee4\u5668",hide_title:!0},r={unversionedId:"sf/\u5e03\u9686\u8fc7\u6ee4\u5668/1.bloomFilter",id:"sf/\u5e03\u9686\u8fc7\u6ee4\u5668/1.bloomFilter",isDocsHomePage:!1,title:"\u5e03\u9686\u8fc7\u6ee4\u5668",description:"\u5e03\u9686\u8fc7\u6ee4\u5668",source:"@site/datastructure/sf/\u5e03\u9686\u8fc7\u6ee4\u5668/\u5e03\u9686\u8fc7\u6ee4\u5668.md",slug:"/sf/\u5e03\u9686\u8fc7\u6ee4\u5668/1.bloomFilter",permalink:"/datastructure/sf/\u5e03\u9686\u8fc7\u6ee4\u5668/1.bloomFilter",version:"current",sidebar:"docs2",previous:{title:"\u54c8\u5e0c\u8868",permalink:"/datastructure/sf/\u54c8\u5e0c/1.hashTableDataStructure"},next:{title:"\u8df3\u8868",permalink:"/datastructure/sf/\u8df3\u8868/1.skipList"}},c=[{value:"\u5e03\u9686\u8fc7\u6ee4\u5668",id:"\u5e03\u9686\u8fc7\u6ee4\u5668",children:[]},{value:"\u5e03\u9686\u8fc7\u6ee4\u5668\u539f\u7406",id:"\u5e03\u9686\u8fc7\u6ee4\u5668\u539f\u7406",children:[{value:"\u590d\u6742\u5ea6\u5206\u6790",id:"\u590d\u6742\u5ea6\u5206\u6790",children:[]},{value:"\u8bef\u5224\u7387\u63a7\u5236",id:"\u8bef\u5224\u7387\u63a7\u5236",children:[]}]},{value:"\u5e03\u9686\u8fc7\u6ee4\u5668\u7684\u5b9e\u73b0",id:"\u5e03\u9686\u8fc7\u6ee4\u5668\u7684\u5b9e\u73b0",children:[{value:"\u6210\u5458\u53d8\u91cf",id:"\u6210\u5458\u53d8\u91cf",children:[]},{value:"\u6784\u9020\u65b9\u6cd5",id:"\u6784\u9020\u65b9\u6cd5",children:[]},{value:"\u63d2\u5165\u65b9\u6cd5",id:"\u63d2\u5165\u65b9\u6cd5",children:[]},{value:"\u67e5\u8be2\u65b9\u6cd5",id:"\u67e5\u8be2\u65b9\u6cd5",children:[]}]},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",children:[{value:"\u57fa\u672c\u4f7f\u7528\u6d4b\u8bd5",id:"\u57fa\u672c\u4f7f\u7528\u6d4b\u8bd5",children:[]},{value:"\u8bef\u5224\u7387\u6d4b\u8bd5",id:"\u8bef\u5224\u7387\u6d4b\u8bd5",children:[]}]}],o={rightToc:c};function p(e){var t=e.components,l=Object(b.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,l,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u5e03\u9686\u8fc7\u6ee4\u5668"},"\u5e03\u9686\u8fc7\u6ee4\u5668"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u601d\u8003")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u5982\u679c\u9700\u8981\u7ecf\u5e38\u5224\u65ad\u4e00\u4e2a\u5143\u7d20\u662f\u5426\u5b58\u5728\uff0c\u5e94\u5f53\u600e\u4e48\u505a\uff1f"),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"\u5bb9\u6613\u60f3\u5230\u4f7f\u7528\u54c8\u5e0c\u8868\uff08HashSet\u3001HashMap\uff09\uff0c\u5c06\u5143\u7d20\u4f5c\u4e3a key \u53bb\u67e5\u627e",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6 ",Object(i.b)("inlineCode",{parentName:"li"},"O(1)"),"\uff0c\u4f46\u662f\u7a7a\u95f4\u5229\u7528\u7387\u4e0d\u9ad8\uff0c\u9700\u8981\u5360\u7528\u6bd4\u8f83\u591a\u7684\u5185\u5b58\u8d44\u6e90"),Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u9700\u8981\u5224\u65ad\u7684\u6570\u636e\u89c4\u6a21\u975e\u5e38\u5927\uff0c\u90a3\u4e48\u54c8\u5e0c\u8868\u7684\u7a7a\u95f4\u89c4\u6a21\u4f1a\u53d8\u5f97\u66f4\u5927\u66f4\u5927\uff0c\u975e\u5e38\u5938\u5f20\u7684\u5927"))),Object(i.b)("li",{parentName:"ul"},"\u662f\u5426\u5b58\u5728\u65f6\u95f4\u590d\u6742\u5ea6\u4f4e\u3001\u4e14\u5360\u7528\u5185\u5b58\u8f83\u5c11\u7684\u65b9\u6848\uff1f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u5e03\u9686\u8fc7\u6ee4\u5668\u2014\u2014Bloom Filter"))))))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u5e03\u9686\u8fc7\u6ee4\u5668")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"1970\u5e74\u7531 ",Object(i.b)("em",{parentName:"li"},"\u5e03\u9686")," \u63d0\u51fa"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u662f\u4e00\u79cd ",Object(i.b)("inlineCode",{parentName:"strong"},"\u7a7a\u95f4\u6548\u7387\u9ad8")," \u7684 ",Object(i.b)("em",{parentName:"strong"},"\u6982\u7387\u578b"),"  ",Object(i.b)("inlineCode",{parentName:"strong"},"\u6570\u636e\u7ed3\u6784"),"\uff0c\u53ef\u4ee5\u7528\u6765\u53cd\u6620\uff1a",Object(i.b)("em",{parentName:"strong"},"\u4e00\u4e2a\u5143\u7d20\u4e00\u5b9a\u4e0d\u5b58\u5728"),"  \u6216 ",Object(i.b)("em",{parentName:"strong"},"\u53ef\u80fd\u5b58\u5728")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u7c7b\u6bd4HashMap\u7684 ",Object(i.b)("inlineCode",{parentName:"li"},"contains")," \u65b9\u6cd5\uff0c\u5982\u679c\u5e03\u9686\u8fc7\u6ee4\u5668\u6709\u7c7b\u4f3c\u7684\u65b9\u6cd5\uff0c\u90a3\u4e48\u5176\u8fd4\u56de ",Object(i.b)("inlineCode",{parentName:"li"},"false")," \u53ef\u4ee5\u51c6\u786e\u8bf4\u660e\u76ee\u6807\u5143\u7d20\u4e0d\u5b58\u5728\uff0c\u4f46\u5982\u679c\u8fd4\u56de ",Object(i.b)("inlineCode",{parentName:"li"},"true")," ",Object(i.b)("strong",{parentName:"li"},"\u53ea\u80fd\u8bf4\u660e\u76ee\u6807\u5143\u7d20 ",Object(i.b)("em",{parentName:"strong"},"\u53ef\u80fd\u5b58\u5728"))))),Object(i.b)("li",{parentName:"ul"},"\u4f18\u7f3a\u70b9",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4f18\u70b9\uff1a\u7a7a\u95f4\u6548\u7387\u548c\u67e5\u8be2\u6548\u7387\u90fd\u8fdc\u8fdc\u8d85\u8fc7\u4e00\u822c\u6570\u636e\u7ed3\u6784"),Object(i.b)("li",{parentName:"ul"},"\u7f3a\u70b9\uff1a\u6709\u4e00\u5b9a\u8bef\u5224\u7387\u3001\u5220\u9664\u56f0\u96be"))),Object(i.b)("li",{parentName:"ul"},"\u9002\u7528\u573a\u666f\uff08\u5178\u578b\uff1aRedis\uff09",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u7ecf\u5e38\u9700\u8981\u5224\u65ad\u67d0\u4e2a\u5143\u7d20\u662f\u5426\u5b58\u5728"),Object(i.b)("li",{parentName:"ul"},"\u5143\u7d20\u6570\u76ee\u975e\u5e38\u5de8\u5927\uff0c\u5e0c\u671b\u9002\u7528\u5c3d\u53ef\u80fd\u5c11\u7684\u5185\u5b58\u7a7a\u95f4"),Object(i.b)("li",{parentName:"ul"},"\u5141\u8bb8\u5b58\u5728\u4e00\u5b9a\u8bef\u5224\u7387"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u672c\u8d28\uff1a\u4e00\u4e2a\u5f88\u957f\u7684\u4e8c\u8fdb\u5236\u5411\u91cf\u548c\u4e00\u7cfb\u5217\u968f\u673a\u6620\u5c04\u51fd\u6570\uff08Hash\u51fd\u6570\uff09")),Object(i.b)("li",{parentName:"ul"},"\u5e38\u89c1\u5e94\u7528\uff1a",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u7f51\u9875\u9ed1\u540d\u5355\u7cfb\u7edf"),Object(i.b)("li",{parentName:"ul"},"\u5783\u573e\u90ae\u4ef6\u8fc7\u6ee4\u7cfb\u7edf"),Object(i.b)("li",{parentName:"ul"},"\u722c\u866b\u7f51\u5740\u5224\u91cd\u7cfb\u7edf"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u89e3\u51b3\u7f13\u5b58\u7a7f\u900f\u95ee\u9898")))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Guava \u63d0\u4f9b\u4e86\u57fa\u4e8e Java \u7684\u5e03\u9686\u8fc7\u6ee4\u5668\u5b9e\u73b0")),Object(i.b)("br",null),Object(i.b)("h1",{id:"\u5e03\u9686\u8fc7\u6ee4\u5668\u539f\u7406"},"\u5e03\u9686\u8fc7\u6ee4\u5668\u539f\u7406"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5047\u8bbe\u5e03\u9686\u8fc7\u6ee4\u5668\u7531 ",Object(i.b)("inlineCode",{parentName:"p"},"20")," \u4e8c\u8fdb\u5236\u3001",Object(i.b)("inlineCode",{parentName:"p"},"3")," \u4e2a\u54c8\u5e0c\u51fd\u6570\u7ec4\u6210\uff0c\u6bcf\u4e2a\u5143\u7d20\u7ecf\u8fc7\u54c8\u5e0c\u51fd\u6570\u5904\u7406\u90fd\u80fd\u751f\u6210\u4e00\u4e2a\u7d22\u5f15\u4f4d\u7f6e"),Object(i.b)("img",{src:n(725).default,style:{zoom:"50%",border:"0px black solid"}})),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"\u6dfb\u52a0\u5143\u7d20\uff1a"),"\u5c06\u6bcf\u4e00\u4e2a\u54c8\u5e0c\u51fd\u6570\u751f\u6210\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"\u7d22\u5f15\u4f4d\u7f6e")," \u90fd\u8bbe\u7f6e\u4e3a ",Object(i.b)("inlineCode",{parentName:"p"},"1")),Object(i.b)("img",{src:n(726).default,style:{zoom:"50%",border:"0px black solid"}})),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"\u67e5\u8be2\u5143\u7d20\uff1a\u501f\u52a9\u54c8\u5e0c\u51fd\u6570\u5b9e\u73b0\uff0c\u67e5\u770b\u6bcf\u4e00\u4e2a\u54c8\u5e0c\u51fd\u6570\u8ba1\u7b97\u51fa\u7684\u7d22\u5f15")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u53ea\u8981\u6709\u4e00\u4e2a\u54c8\u5e0c\u51fd\u6570\u751f\u6210\u7684\u7d22\u5f15\u4f4d\u7f6e\u503c\u4e0d\u4e3a ",Object(i.b)("inlineCode",{parentName:"strong"},"1"),"\uff0c\u5c31\u8868\u793a\u76ee\u6807\u5143\u7d20 ",Object(i.b)("em",{parentName:"strong"},"\u4e0d\u5b58\u5728"),"\uff0c\u8be5\u7ed3\u8bba ",Object(i.b)("inlineCode",{parentName:"strong"},"\u7edd\u5bf9\u51c6\u786e"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u6bcf\u4e00\u4e2a\u54c8\u5e0c\u51fd\u6570\u751f\u6210\u7684\u7d22\u5f15\u4f4d\u7f6e\u503c\u90fd\u4e3a ",Object(i.b)("inlineCode",{parentName:"strong"},"1"),"\uff0c\u5c31\u8868\u793a\u76ee\u6807\u5143\u7d20 ",Object(i.b)("em",{parentName:"strong"},"\u5b58\u5728"),"\uff0c\u8be5\u7ed3\u8bba ",Object(i.b)("inlineCode",{parentName:"strong"},"\u5b58\u5728\u8bef\u5224\u7387")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5b58\u5728\u8fd9\u79cd\u8bef\u5224\u7684\u539f\u56e0\u662f\u56e0\u4e3a\uff0c\u4e0d\u77e5\u9053\u7d22\u5f15\u4f4d\u7f6e\u4e0a\u7684 ",Object(i.b)("inlineCode",{parentName:"li"},"1")," \u662f\u7531\u54ea\u4e2a\u5143\u7d20\u751f\u6210\u6765\u7684"),Object(i.b)("li",{parentName:"ul"},"\u672c\u8d28\u4e0a\u8fd8\u662f",Object(i.b)("strong",{parentName:"li"},"\u54c8\u5e0c\u51b2\u7a81"),"\u95ee\u9898")))))),Object(i.b)("img",{src:n(727).default,style:{zoom:"50%",border:"0px black solid"}}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u5220\u9664\u5143\u7d20\uff1a\u5f88\u96be\u5220\u9664"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5c06\u5bf9\u5e94\u54c8\u5e0c\u8ba1\u7b97\u51fa\u7684\u7d22\u5f15\u5bf9\u5e94\u4f4d\u7f6e\u7684\u503c\u8bbe\u7f6e\u4e3a ",Object(i.b)("inlineCode",{parentName:"li"},"0")),Object(i.b)("li",{parentName:"ul"},"\u4f46\u662f\u8fd9\u4e9b\u4f4d\u7f6e\u53ef\u4e0d\u662f\u4e13\u4f9b\u67d0\u4e00\u4e2a\u5143\u7d20\u7528\u7684\uff0c\u53ef\u80fd\u662f\u5b58\u5728\u54c8\u5e0c\u51b2\u7a81\u7684\uff0c\u5373 ",Object(i.b)("strong",{parentName:"li"},"\u5220\u9664\u4e00\u4e2a\u5143\u7d20\u4f1a\u5f71\u54cd\u522b\u7684\u5143\u7d20")),Object(i.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u5bf9\u6bcf\u4e00\u4e2a\u4f4d\u8bbe\u7f6e\u5f15\u7528\u8ba1\u6570\u7684\u6982\u5ff5\uff0c\u4f46\u662f\u8fd9\u6837\u5c31\u9ebb\u70e6\u4e86\uff0c\u8fdd\u80cc\u4e86\u4f7f\u7528\u5e03\u9686\u8fc7\u6ee4\u5668\u7684\u521d\u8877\uff0c\u56e0\u6b64\u4e00\u822c",Object(i.b)("strong",{parentName:"li"},"\u4e0d\u63d0\u4f9b\u5220\u9664\u65b9\u6cd5"))))),Object(i.b)("h2",{id:"\u590d\u6742\u5ea6\u5206\u6790"},"\u590d\u6742\u5ea6\u5206\u6790"),Object(i.b)("p",null,"\u8bbe ",Object(i.b)("inlineCode",{parentName:"p"},"k")," \u662f\u54c8\u5e0c\u51fd\u6570\u7684\u4e2a\u6570\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"m")," \u662f\u4e8c\u8fdb\u5236\u5411\u91cf\u7684\u4f4d\u6570"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u64cd\u4f5c"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u65f6\u95f4\u590d\u6742\u5ea6"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u7a7a\u95f4\u590d\u6742\u5ea6"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u6dfb\u52a0"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"O(k)")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"O(m)"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u67e5\u8be2"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"O(k)")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"O(m)"))))),Object(i.b)("h2",{id:"\u8bef\u5224\u7387\u63a7\u5236"},"\u8bef\u5224\u7387\u63a7\u5236"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u5982\u4f55\u964d\u4f4e\u8bef\u5224\u7387")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u589e\u52a0\u8be5\u5411\u91cf\u7684\u957f\u5ea6"),Object(i.b)("li",{parentName:"ul"},"\u8bbe\u7f6e\u66f4\u591a\u7684\u54c8\u5e0c\u51fd\u6570")),Object(i.b)("p",{parentName:"blockquote"},"\u663e\u7136\uff0c\u5728\u5b9e\u9645\u4f7f\u7528\u65f6\uff0c\u9700\u8981\u8fdb\u884c\u4e00\u5b9a\u7684\u6743\u8861")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u7406\u8bba\u516c\u5f0f")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u8bef\u5224\u7387 ",Object(i.b)("inlineCode",{parentName:"li"},"p")," \u53d7 ",Object(i.b)("inlineCode",{parentName:"li"},"3")," \u4e2a\u56e0\u7d20\u7684\u5f71\u54cd\uff1a\u4e8c\u8fdb\u5236\u4f4d\u6570 ",Object(i.b)("inlineCode",{parentName:"li"},"m"),"\u3001\u54c8\u5e0c\u51fd\u6570\u4e2a\u6570 ",Object(i.b)("inlineCode",{parentName:"li"},"k"),"\u3001\u6570\u636e\u89c4\u6a21 ",Object(i.b)("inlineCode",{parentName:"li"},"n"),Object(i.b)("img",{src:n(728).default,style:{zoom:"40%",border:"0px black solid"}})))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u7406\u8bba\u516c\u5f0f\u7684\u5b9e\u9645\u5e94\u7528")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u5df2\u77e5\u8bef\u5224\u7387 ",Object(i.b)("inlineCode",{parentName:"li"},"p"),"\u3001\u6570\u636e\u89c4\u6a21 ",Object(i.b)("inlineCode",{parentName:"li"},"n")," \uff0c\u6c42\u4e8c\u8fdb\u5236\u4f4d\u7684\u4e2a\u6570 ",Object(i.b)("inlineCode",{parentName:"li"},"m"),"\u3001\u54c8\u5e0c\u51fd\u6570\u7684\u4e2a\u6570 ",Object(i.b)("inlineCode",{parentName:"li"},"k"),Object(i.b)("img",{src:n(729).default,style:{zoom:"40%",border:"0px black solid"}})))),Object(i.b)("br",null),Object(i.b)("h1",{id:"\u5e03\u9686\u8fc7\u6ee4\u5668\u7684\u5b9e\u73b0"},"\u5e03\u9686\u8fc7\u6ee4\u5668\u7684\u5b9e\u73b0"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u529f\u80fd"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"boolean put(T value)")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u63d2\u5165\u5143\u7d20")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"boolean contains(T value)")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u8fd4\u56de\u76ee\u6807\u5143\u7d20\u662f\u5426\u5b58\u5728",Object(i.b)("br",null),Object(i.b)("inlineCode",{parentName:"td"},"false")," \u7edd\u5bf9\u4e0d\u5b58\u5728",Object(i.b)("br",null),Object(i.b)("inlineCode",{parentName:"td"},"true")," \u53ef\u80fd\u5b58\u5728")))),Object(i.b)("h2",{id:"\u6210\u5458\u53d8\u91cf"},"\u6210\u5458\u53d8\u91cf"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u53d8\u91cf"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u542b\u4e49"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"int bitSize")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u4e8c\u8fdb\u5236\u5411\u91cf\u7684\u957f\u5ea6\u3001\u4e00\u5171\u6709\u591a\u5c11\u4e2a\u4e8c\u8fdb\u5236\u4f4d")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"long[] bits")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u4e8c\u8fdb\u5236\u5411\u91cf\u672c\u4f53\uff0c\u4e00\u4e2along\u4e3a ",Object(i.b)("inlineCode",{parentName:"td"},"8")," \u4e2a\u5b57\u8282 ",Object(i.b)("inlineCode",{parentName:"td"},"64")," bit ",Object(i.b)("br",null),"\u6570\u7ec4\u957f\u5ea6\u4e3a ",Object(i.b)("inlineCode",{parentName:"td"},"bitSize")," \u9664 ",Object(i.b)("inlineCode",{parentName:"td"},"64")," \u5411\u4e0a\u53d6\u6574",Object(i.b)("br",null),"\u4f7f\u7528\u516c\u5f0f ",Object(i.b)("inlineCode",{parentName:"td"},"(\u603b\u6570 + \u9875\u5927\u5c0f-1) / \u9875\u5927\u5c0f "))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"int hashFunctionSize")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u54c8\u5e0c\u51fd\u6570\u6570\u76ee")))),Object(i.b)("h2",{id:"\u6784\u9020\u65b9\u6cd5"},"\u6784\u9020\u65b9\u6cd5"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u6839\u636e\u7406\u8bba\u516c\u5f0f\uff0c\u8981\u6c42\u4f20\u5165\u671f\u671b\u7684\u8bef\u5224\u7387 ",Object(i.b)("inlineCode",{parentName:"p"},"p"),"\u3001\u6570\u636e\u7684\u89c4\u6a21 ",Object(i.b)("inlineCode",{parentName:"p"},"n")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u8fb9\u9645\u68c0\u67e5\uff1a\u6392\u9664\u6570\u636e\u89c4\u6a21\u5c0f\u4e8e\u7b49\u4e8e0\u3001\u8bef\u5224\u7387\u4e0d\u5728 (0, 1) \u533a\u95f4"),Object(i.b)("li",{parentName:"ul"},"\u81ea\u5df1\u8ba1\u7b97\u51fa \u9700\u8981\u7684\u4e8c\u8fdb\u5236\u4f4d\u6570 ",Object(i.b)("inlineCode",{parentName:"li"},"m"),"\u3001\u54c8\u5e0c\u51fd\u6570\u7684\u4e2a\u6570 ",Object(i.b)("inlineCode",{parentName:"li"},"k")),Object(i.b)("li",{parentName:"ul"},"\u8ba1\u7b97\u51fa\u5728\u4e0a\u8ff0 ",Object(i.b)("inlineCode",{parentName:"li"},"m")," \u4f4d\u7684\u60c5\u51b5\u4e0b\uff0c\u9700\u8981\u4e00\u4e2a\u591a\u5927\u7684 ",Object(i.b)("inlineCode",{parentName:"li"},"long[]")," \u6570\u7ec4\u6765\u8868\u793a\u4e8c\u8fdb\u5236\u5411\u91cf\u5b9e\u4f53"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u6210\u5458\u53d8\u91cf\u4e0e\u6784\u9020\u65b9\u6cd5"',title:'"\u6210\u5458\u53d8\u91cf\u4e0e\u6784\u9020\u65b9\u6cd5"'}),'// \u4e8c\u8fdb\u5236\u5411\u91cf\u7684\u957f\u5ea6\uff0c\u4e00\u5171\u6709\u591a\u5c11\u4e2a\u4e8c\u8fdb\u5236\u4f4d\nprivate int bitSize;\n// \u4e8c\u8fdb\u5236\u5411\u91cf\u672c\u4f53\nprivate long[] bits;\n// Hash\u51fd\u6570\u6570\u76ee\nprivate int hashFunctionSize;\n\n/**\n * \u6784\u9020\u65b9\u6cd5\uff0c\u6839\u636e \u6570\u636e\u89c4\u6a21\u3001\u76ee\u6807\u8bef\u5224\u7387\u3001\u8ba1\u7b97\u51fa\u9700\u8981\u7684\u4e8c\u8fdb\u5236\u4f4d\u6570\u548c\u54c8\u5e0c\u51fd\u6570\u6570\u76ee\n *\n * @param n \u6570\u636e\u89c4\u6a21 \u5927\u4e8e0\n * @param p \u76ee\u6807\u8bef\u5224\u7387 \u5c5e\u4e8e (0, 1)\u533a\u95f4\n */\npublic MyBloomFilter(int n, double p) {\n    if (n <= 0 || p <= 0 || p >= 1)\n        throw new IllegalArgumentException("\u4f20\u5165 \u6570\u636e\u89c4\u6a21 \u6216 \u8bef\u5224\u7387 \u4e0d\u5408\u6cd5");\n    // \u8ba1\u7b97 \u4e8c\u8fdb\u5236\u5411\u91cf\u957f\u5ea6 m\u3001\u54c8\u5e0c\u51fd\u6570\u6570\u76ee k\n    double ln2 = Math.log(2); // \u8ba1\u7b97 ln2\n    bitSize = (int) (-(n * Math.log(p)) / Math.pow(ln2, 2));\n    hashFunctionSize = (int) ((bitSize * ln2) / n);\n    // \u8ba1\u7b97\u4e8c\u8fdb\u5236\u5411\u91cf\u5b9e\u4f53\u3001\u672c\u8d28\u662f\u4e00\u4e2along\u6570\u7ec4\uff0c\u7684\u6570\u7ec4\u957f\u5ea6\n    bits = new long[(bitSize + Long.SIZE - 1) / Long.SIZE];\n}\n')),Object(i.b)("h2",{id:"\u63d2\u5165\u65b9\u6cd5"},"\u63d2\u5165\u65b9\u6cd5"),Object(i.b)("blockquote",null,Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u8c03\u7528\u6240\u6709\u7684\u54c8\u5e0c\u51fd\u6570\uff08\u53c2\u8003 Guava \u7684\u54c8\u5e0c\u5b9e\u73b0\uff09",Object(i.b)("br",null),"\n",Object(i.b)("inlineCode",{parentName:"p"},"obj.hashCode() -> hash\u5904\u74061 -> \u7d22\u5f151"),Object(i.b)("br",null),"\n",Object(i.b)("inlineCode",{parentName:"p"},"obj.hashCode() -> hash\u5904\u74062 -> \u7d22\u5f152"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"\u6a21")," \u4e0a\u4e8c\u8fdb\u5236\u5411\u91cf\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"\u957f\u5ea6")," \u5c31\u53ef\u4ee5\u5f97\u5230 ",Object(i.b)("inlineCode",{parentName:"p"},"\u7d22\u5f15"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5c06 ",Object(i.b)("inlineCode",{parentName:"p"},"\u7d22\u5f15")," \u4f4d\u7f6e\u7684\u4e8c\u8fdb\u5236\u503c\u8bbe\u7f6e\u4e3a ",Object(i.b)("inlineCode",{parentName:"p"},"1"),"\uff0c\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"\u6309\u4f4d\u6216")," \u64cd\u4f5c\u5b9e\u73b0"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u901a\u8fc7 ",Object(i.b)("inlineCode",{parentName:"li"},"\u7d22\u5f15 / Long.SIZE")," \u5f97\u5230\u76ee\u6807\u4e8c\u8fdb\u5236\u4f4d\u5728 ",Object(i.b)("em",{parentName:"li"},"\u7b2c\u51e0\u4e2along")," ")),Object(i.b)("img",{src:n(730).default,style:{zoom:"40%",border:"0px black solid"}}),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5728\u8fd9\u4e2a ",Object(i.b)("inlineCode",{parentName:"li"},"long")," \u5185\u90e8\uff0c\u4ece\u53f3\u5411\u5de6\u627e\u5230\u5bf9\u5e94\u7684\u4e8c\u8fdb\u5236\u4f4d",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u8ba1\u7b97\u5185\u90e8\u504f\u79fb ",Object(i.b)("inlineCode",{parentName:"li"},"offset = \u7d22\u5f15 % Long.SIZE")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"1")," \u5de6\u79fb ",Object(i.b)("inlineCode",{parentName:"li"},"(Long.SIZE - 1) - offset")," \u5373\u53ef\u5f97\u5230\u5bf9\u5e94\u4e8c\u8fdb\u5236\u4f4d\u7684 One-Hot \u63a9\u7801"),Object(i.b)("li",{parentName:"ul"},"\u5c06\u8be5\u63a9\u7801\u4e0e\u76ee\u6807 ",Object(i.b)("inlineCode",{parentName:"li"},"long")," \u8fdb\u884c ",Object(i.b)("inlineCode",{parentName:"li"},"\u6309\u4f4d\u6216")," \u8fd0\u7b97\uff0c\u5373\u53ef\u5c06\u76ee\u6807\u4e8c\u8fdb\u5236\u4f4d\u7f6e ",Object(i.b)("inlineCode",{parentName:"li"},"1")))),Object(i.b)("li",{parentName:"ul"},"\u5c06\u8fd9\u4e2a\u66f4\u65b0\u540e\u7684 ",Object(i.b)("inlineCode",{parentName:"li"},"long"),"\uff0c\u5b58\u56de ",Object(i.b)("inlineCode",{parentName:"li"},"long[]")," \u6570\u7ec4\uff0c\u8986\u76d6\u65e7\u7684 ",Object(i.b)("inlineCode",{parentName:"li"},"long")))))),Object(i.b)("h2",{id:"\u67e5\u8be2\u65b9\u6cd5"},"\u67e5\u8be2\u65b9\u6cd5"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u4e0e\u63d2\u5165\u65b9\u6cd5\u7c7b\u4f3c\uff0c\u9996\u5148\u83b7\u5f97\u8c03\u7528\u6240\u6709\u54c8\u5e0c\u51fd\u6570\uff0c\u83b7\u5f97 ",Object(i.b)("inlineCode",{parentName:"p"},"\u7d22\u5f15"),"\u3001\u7b97\u51fa\u662f\u54ea\u4e2a ",Object(i.b)("inlineCode",{parentName:"p"},"long")," \uff0c\u5f97\u5230 ",Object(i.b)("inlineCode",{parentName:"p"},"\u5185\u90e8\u504f\u79fb"),"\u3001\u5c06 ",Object(i.b)("inlineCode",{parentName:"p"},"1"),"  \u5de6\u79fb ",Object(i.b)("inlineCode",{parentName:"p"},"(Long.SIZE - 1) - offset")," "),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u8fdb\u884c ",Object(i.b)("inlineCode",{parentName:"li"},"\u6309\u4f4d\u4e0e"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u76ee\u6807\u4f4d\u4e3a ",Object(i.b)("inlineCode",{parentName:"li"},"0")," \uff0c\u8ba1\u7b97\u7ed3\u679c\u5fc5\u4e3a ",Object(i.b)("inlineCode",{parentName:"li"},"0")),Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u76ee\u6807\u4f4d\u4e3a ",Object(i.b)("inlineCode",{parentName:"li"},"1"),"\uff0c \u8ba1\u7b97\u7ed3\u679c\u5fc5\u4e3a ",Object(i.b)("inlineCode",{parentName:"li"},"2\u7684\u6b21\u5e42")))),Object(i.b)("li",{parentName:"ul"},"\u6545\uff0c\u5224\u65ad\u8ba1\u7b97\u7ed3\u679c\u662f\u5426\u4e3a ",Object(i.b)("inlineCode",{parentName:"li"},"0"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u7ed3\u679c\u4e3a ",Object(i.b)("inlineCode",{parentName:"li"},"0"),"\uff0c\u8fd4\u56de\u76ee\u6807\u4f4d\u503c\u4e3a ",Object(i.b)("inlineCode",{parentName:"li"},"0")),Object(i.b)("li",{parentName:"ul"},"\u7ed3\u679c\u4e0d\u4e3a ",Object(i.b)("inlineCode",{parentName:"li"},"0"),"\uff0c\u8fd4\u56de\u76ee\u6807\u4f4d\u503c\u4e3a ",Object(i.b)("inlineCode",{parentName:"li"},"1")))),Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u76ee\u6807\u4e8c\u8fdb\u5236\u4f4d\u7684\u503c\u4e3a ",Object(i.b)("inlineCode",{parentName:"li"},"0"),"\uff08\u4efb\u610f\u4e00\u4e2a\u54c8\u5e0c\u51fd\u6570\u5bf9\u5e94\u7684\u7d22\u5f15\uff09\uff0c\u5219\u53ef\u65ad\u8a00\u5f53\u524d\u5e03\u9686\u8fc7\u6ee4\u5668\u4e0d\u5305\u542b\u8be5\u5143\u7d20"),Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u6240\u6709\u54c8\u5e0c\u51fd\u6570\u5bf9\u5e94\u7684\u76ee\u6807\u4e8c\u8fdb\u5236\u4f4d\u90fd\u4e0d\u4e3a ",Object(i.b)("inlineCode",{parentName:"li"},"0"),"\uff0c\u5219\u5f53\u524d\u5e03\u9686\u8fc7\u6ee4\u5668 ",Object(i.b)("em",{parentName:"li"},"\u53ef\u80fd\u5305\u542b\u76ee\u6807\u5143\u7d20")))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{1:!0,className:"language-java",metastring:'title="\u5c06\u76ee\u6807\u4e8c\u8fdb\u5236\u4f4d\u8bbe\u7f6e\u4e3a 1 \u7684\u65b9\u6cd5"',title:'"\u5c06\u76ee\u6807\u4e8c\u8fdb\u5236\u4f4d\u8bbe\u7f6e\u4e3a','\u7684\u65b9\u6cd5"':!0}),"/**\n * \u5c06 Index \u4f4d\u7f6e\u7684\u4e8c\u8fdb\u5236\u4f4d\u8bbe\u7f6e\u4e3a 1\n *\n * @param index \u7d22\u5f15\n */\nprivate void set(int index) {\n    long targetLong = bits[index / Long.SIZE]; // \u627e\u5230\u76ee\u6807\u4e8c\u8fdb\u5236\u4f4d\u6240\u5728\u7684\u90a3\u4e2a Long\n    int offset = index % Long.SIZE; // \u76ee\u6807 long \u5185\u90e8\u7d22\u5f15\n    targetLong |= 1 << ((Long.SIZE - 1) - offset);\n    bits[index / Long.SIZE] = targetLong; // \u8986\u76d6\u539f\u6765\u7684 long\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u83b7\u53d6\u76ee\u6807\u4e8c\u8fdb\u5236\u4f4d\u5177\u4f53\u503c\u7684\u65b9\u6cd5"',title:'"\u83b7\u53d6\u76ee\u6807\u4e8c\u8fdb\u5236\u4f4d\u5177\u4f53\u503c\u7684\u65b9\u6cd5"'}),"/**\n * \u67e5\u8be2 index \u4f4d\u7f6e\u7684\u4e8c\u8fdb\u5236\u503c\n *\n * @param index \u7d22\u5f15\n * @return \u7d22\u5f15\u4f4d\u7f6e\u4e0a\u7684\u4e8c\u8fdb\u5236\u503c\n */\nprivate int get(int index) {\n    long targetLong = bits[index / Long.SIZE]; // \u627e\u5230\u76ee\u6807\u4e8c\u8fdb\u5236\u4f4d\u6240\u5728\u7684\u90a3\u4e2a Long\n    int offset = index % Long.SIZE; // \u76ee\u6807 long \u5185\u90e8\u7d22\u5f15\n    return (targetLong & (1 << ((Long.SIZE - 1) - offset))) == 0 ? 0 : 1;\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u63d2\u5165\u65b9\u6cd5"',title:'"\u63d2\u5165\u65b9\u6cd5"'}),"public void put(T value) {\n    // \u8c03\u7528\u6240\u6709\u54c8\u5e0c\u51fd\u6570\n    // \u5229\u7528value \u751f\u6210\u4e24\u4e2a\u6574\u6570\n    int hash1 = value.hashCode();\n    int hash2 = hash1 >>> 16; // \u65e0\u7b26\u53f7\u53f3\u79fb\n\n    for (int i = 1; i < hashFunctionSize; i++) {\n        int combinedHash = hash1 + (i * hash2); // \u5de6hash\u5904\u7406\n\n        if (combinedHash < 0) // \u5982\u679c\u8ba1\u7b97\u51fa\u7684\u8054\u5408\u54c8\u5e0c\u4e3a\u8d1f\u6570\uff0c\u5c31\u53d6\u53cd\n            combinedHash = ~combinedHash;\n        // \u53d6\u6a21\uff0c\u5f97\u5230\u7d22\u5f15\n        int index = combinedHash % bitSize;\n        // \u5c06\u7d22\u5f15\u4f4d\u7f6e\u7684\u4e8c\u8fdb\u5236\u4f4d\u4e3a 1\n        set(index);\n    }\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u67e5\u8be2\u65b9\u6cd5"',title:'"\u67e5\u8be2\u65b9\u6cd5"'}),"public boolean contains(T value) {\n    // \u8c03\u7528\u6240\u6709\u54c8\u5e0c\u51fd\u6570\n    // \u5229\u7528value \u751f\u6210\u4e24\u4e2a\u6574\u6570\n    int hash1 = value.hashCode();\n    int hash2 = hash1 >>> 16; // \u65e0\u7b26\u53f7\u53f3\u79fb\n\n    for (int i = 1; i < hashFunctionSize; i++) {\n        int combinedHash = hash1 + (i * hash2); // \u5de6hash\u5904\u7406\n\n        if (combinedHash < 0) // \u5982\u679c\u8ba1\u7b97\u51fa\u7684\u8054\u5408\u54c8\u5e0c\u4e3a\u8d1f\u6570\uff0c\u5c31\u53d6\u53cd\n            combinedHash = ~combinedHash;\n        // \u53d6\u6a21\uff0c\u5f97\u5230\u7d22\u5f15\n        int index = combinedHash % bitSize;\n        // \u67e5\u8be2\u76ee\u6807\u7d22\u5f15\u4f4d\u7f6e\u7684\u4e8c\u8fdb\u5236\u503c\u662f\u5426\u4e3a0\n        // \u53ea\u8981\u6709\u4e00\u4e2a\u4e3a0\uff0c\u5219\u7edd\u5bf9\u4e0d\u5305\u542b\u5f53\u524d\u6240\u67e5\u8be2\u7684 value\u5143\u7d20\n        if (get(index) == 0) return false; // \u5fc5\u7136\u4e0d\u5305\u542b\n    }\n    return true; // \u53ef\u80fd\u5305\u542b\n}\n")),Object(i.b)("h1",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),Object(i.b)("h2",{id:"\u57fa\u672c\u4f7f\u7528\u6d4b\u8bd5"},"\u57fa\u672c\u4f7f\u7528\u6d4b\u8bd5"),Object(i.b)("blockquote",null,Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u63d2\u5165\u82e5\u5e72\u4e2a\u6570\uff0c\u7136\u540e\u67e5\u8be2\u5176\u662f\u5426\u5b58\u5728\u4e8e\u5e03\u9686\u8fc7\u6ee4\u5668\u4e2d\u2014\u2014\u671f\u5f85\u8fd4\u56de ",Object(i.b)("inlineCode",{parentName:"li"},"true")),Object(i.b)("li",{parentName:"ul"},"\u67e5\u8be2\u4e00\u4e2a\u4e0d\u66fe\u63d2\u5165\u7684\u6570\uff0c\u67e5\u8be2\u5176\u662f\u5426\u5728\u5e03\u9686\u8fc7\u6ee4\u5668\u4e2d\u2014\u2014\u671f\u5f85\u8fd4\u56de ",Object(i.b)("inlineCode",{parentName:"li"},"false")))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u6d4b\u8bd5"',title:'"\u6d4b\u8bd5"'}),'public static void main(String[] args) {\n    MyBloomFilter<Integer> bloomFilter = new MyBloomFilter<>(100_0000, 0.01);\n    for (int i = 0; i < 10; i++)\n        bloomFilter.put(i);\n\n    for (int i = 0; i < 10; i++)\n        System.out.println("bloomFilter.contains(" + i + ") = " + bloomFilter.contains(i));\n\n    System.out.println("bloomFilter.contains(520) = " + bloomFilter.contains(520));\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="\u8fd0\u884c\u7ed3\u679c"',title:'"\u8fd0\u884c\u7ed3\u679c"'}),"bloomFilter.contains(0) = true\nbloomFilter.contains(1) = true\nbloomFilter.contains(2) = true\nbloomFilter.contains(3) = true\nbloomFilter.contains(4) = true\nbloomFilter.contains(5) = true\nbloomFilter.contains(6) = true\nbloomFilter.contains(7) = true\nbloomFilter.contains(8) = true\nbloomFilter.contains(9) = true\nbloomFilter.contains(520) = false\n")),Object(i.b)("h2",{id:"\u8bef\u5224\u7387\u6d4b\u8bd5"},"\u8bef\u5224\u7387\u6d4b\u8bd5"),Object(i.b)("blockquote",null,Object(i.b)("ol",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ol"},"\u63d2\u5165 ",Object(i.b)("inlineCode",{parentName:"li"},"0 ~ 1000\u4e07")," \u5171 1000 \u4e07 \u4e2a\u5143\u7d20"),Object(i.b)("li",{parentName:"ol"},"\u67e5\u8be2 ",Object(i.b)("inlineCode",{parentName:"li"},"1000\u4e07 ~ 9000\u4e07")," \u662f\u5426\u5b58\u5728\u4e8e\u5e03\u9686\u8fc7\u6ee4\u5668\u4e2d",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u7406\u60f3\u60c5\u51b5\u4e0b\u5e94\u5f53\u5168\u90e8\u4e0d\u5b58\u5728"),Object(i.b)("li",{parentName:"ul"},"\u8bbe\u5b9a\u8bef\u5224\u7387\u4e3a ",Object(i.b)("inlineCode",{parentName:"li"},"0.01")),Object(i.b)("li",{parentName:"ul"},"\u7edf\u8ba1\u8bef\u5224\u4e2a\u6570\uff0c\u8ba1\u7b97\u5b9e\u9645\u8bef\u5224\u7387"))))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u8bef\u5224\u7387\u6d4b\u8bd5"',title:'"\u8bef\u5224\u7387\u6d4b\u8bd5"'}),'public static void main(String[] args) {\n    MyBloomFilter<Integer> bloomFilter = new MyBloomFilter<>(8000_0000, 0.01);\n    // \u5148\u67e5 1000 \u4e07 \u4e2a\u6570\u636e\n    for (int i = 0; i < 1000_0000; i++)\n        bloomFilter.put(i);\n    // \u4ece 1000\u4e07 \u67e5\u770b\u5230 9000\u4e07\n    int errorCount = 0;\n    for (int i = 1000_0000; i < 9000_0000; i++)\n        if (bloomFilter.contains(i)) errorCount++; // \u8ba1\u7b97\u8bef\u5224\u6570\n    double errorP = errorCount / 8000_0000.0; // \u8ba1\u7b97\u8bef\u5224\u7387\n\n    System.out.printf("8\u5343\u4e07\u4e2a [\u4e0d\u5b58\u5728] \u7684\u6570\uff0c\u8bef\u5224\u4e3a [\u5b58\u5728] \u5171 [ %d ] \u6b21\uff0c" +\n            "\u8bef\u5224\u7387\u4e3a [ %.7f ]", errorCount, errorP);\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="\u8fd0\u884c\u7ed3\u679c"',title:'"\u8fd0\u884c\u7ed3\u679c"'}),"8 \u5343\u4e07\u4e2a [\u4e0d\u5b58\u5728] \u7684\u6570\uff0c\u8bef\u5224\u4e3a [\u5b58\u5728] \u5171 [ 8 ] \u6b21\uff0c\u8bef\u5224\u7387\u4e3a [ 0.0000001 ]\n")))}p.isMDXComponent=!0},492:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),b=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,b=function(e,t){if(null==e)return{};var n,a,b={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var o=b.a.createContext({}),p=function(e){var t=b.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=b.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),m=p(n),j=a,u=m["".concat(l,".").concat(j)]||m[j]||O[j]||i;return n?b.a.createElement(u,r(r({ref:t},o),{},{components:n})):b.a.createElement(u,r({ref:t},o))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=j;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var o=2;o<i;o++)l[o]=n[o];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"},725:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/1-74e1b4e6989743e5cd1cca55db2feeb9.png"},726:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/2-8ea4615a930c74f9ae3df39f7f7fec8a.png"},727:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/3-d26e49b34a918728b84aad61ddbe7287.png"},728:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/4-9da74e6ca29f148458ee31d0bd998c23.png"},729:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/5-5815d7441814b7d4dcd2a7eb9207f7b2.png"},730:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/6-90ea247cb791523c4ac820bd70b72b45.png"}}]);