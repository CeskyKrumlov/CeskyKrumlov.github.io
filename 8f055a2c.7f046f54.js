(window.webpackJsonp=window.webpackJsonp||[]).push([[288],{1e3:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/23-c28664ee7ff30c37f01743f889075f9d.png"},1001:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/24-e15dd7c57765c26cb46a14977fa26a46.png"},1002:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/25-410f81e236253b211a15acb6b2f89f38.png"},345:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return r})),a.d(t,"default",(function(){return m}));var n=a(2),b=a(6),i=(a(0),a(567)),c={id:"4.bTree",title:"B\u6811",hide_title:!0},l={unversionedId:"sf/\u6811/4.bTree",id:"sf/\u6811/4.bTree",isDocsHomePage:!1,title:"B\u6811",description:"B-tree",source:"@site/datastructure/sf/\u6811/b\u6811.md",slug:"/sf/\u6811/4.bTree",permalink:"/datastructure/sf/\u6811/4.bTree",version:"current",sidebar:"docs2",previous:{title:"\u5e73\u8861\u4e8c\u53c9\u641c\u7d22\u6811\u2014\u2014AVL\u6811",permalink:"/datastructure/sf/\u6811/3.avlTree"},next:{title:"\u5e73\u8861\u4e8c\u53c9\u641c\u7d22\u6811\u2014\u2014\u7ea2\u9ed1\u6811",permalink:"/datastructure/sf/\u6811/5.redBlackTree"}},r=[{value:"B-tree",id:"b-tree",children:[]},{value:"m\u9636B\u6811\u7684\u6027\u8d28\uff08m \u2265 2\uff09",id:"m\u9636b\u6811\u7684\u6027\u8d28\uff08m-\u2265-2\uff09",children:[]},{value:"B\u6811\u4e0e\u4e8c\u53c9\u641c\u7d22\u6811",id:"b\u6811\u4e0e\u4e8c\u53c9\u641c\u7d22\u6811",children:[]},{value:"\u641c\u7d22",id:"\u641c\u7d22",children:[]},{value:"\u6dfb\u52a0",id:"\u6dfb\u52a0",children:[{value:"\u4e0a\u6ea2",id:"\u4e0a\u6ea2",children:[]}]},{value:"\u5220\u9664",id:"\u5220\u9664",children:[{value:"\u5220\u9664\u53f6\u5b50\u8282\u70b9",id:"\u5220\u9664\u53f6\u5b50\u8282\u70b9",children:[]},{value:"\u5220\u9664\u975e\u53f6\u5b50\u8282\u70b9",id:"\u5220\u9664\u975e\u53f6\u5b50\u8282\u70b9",children:[]},{value:"\u4e0b\u6ea2",id:"\u4e0b\u6ea2",children:[]}]},{value:"4\u9636B\u6811",id:"4\u9636b\u6811",children:[]}],o={rightToc:r};function m(e){var t=e.components,c=Object(b.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"b-tree"},"B-tree"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("inlineCode",{parentName:"p"},"B\u6811"),"\u662f\u4e00\u79cd\u5e73\u8861\u7684",Object(i.b)("inlineCode",{parentName:"p"},"\u591a\u53c9\u641c\u7d22\u6811"),"\uff0c\u591a\u7528\u4e8e\u6587\u4ef6\u7cfb\u7edf\u3001\u6570\u636e\u5e93\u7684\u5b9e\u73b0"),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"1"),"\u4e2a\u8282\u70b9\u53ef\u4ee5\u5b58\u50a8\u8d85\u8fc7",Object(i.b)("inlineCode",{parentName:"li"},"2"),"\u4e2a\u5143\u7d20\uff0c\u53ef\u4ee5\u62e5\u6709\u8d85\u8fc7",Object(i.b)("inlineCode",{parentName:"li"},"2"),"\u4e2a\u5b50\u8282\u70b9"),Object(i.b)("li",{parentName:"ul"},"\u62e5\u6709\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u4e00\u4e9b\u6027\u8d28"),Object(i.b)("li",{parentName:"ul"},"\u5e73\u8861\uff0c\u6bcf\u4e2a\u8282\u70b9\u7684\u6240\u6709\u5b50\u6811\u9ad8\u5ea6\u4e00\u81f4"),Object(i.b)("li",{parentName:"ul"},"\u77ee"))),Object(i.b)("p",null,Object(i.b)("img",{alt:"image-20201106143549279",src:a(996).default})),Object(i.b)("h1",{id:"m\u9636b\u6811\u7684\u6027\u8d28\uff08m-\u2265-2\uff09"},"m\u9636B\u6811\u7684\u6027\u8d28\uff08m \u2265 2\uff09"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("inlineCode",{parentName:"p"},"m"),"\u9636\uff0c\u5c31\u662f\u6307\uff0c1\u4e2a\u8282\u70b9",Object(i.b)("inlineCode",{parentName:"p"},"\u6700\u591a"),"\u53ef\u4ee5\u6709",Object(i.b)("inlineCode",{parentName:"p"},"m"),"\u4e2a\u5b50\u8282\u70b9")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u6027\u8d28")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u5047\u8bbe\u4e00\u4e2a\u8282\u70b9\u5b58\u50a8",Object(i.b)("inlineCode",{parentName:"li"},"\u5143\u7d20\u7684\u4e2a\u6570"),"\u4e3a",Object(i.b)("inlineCode",{parentName:"li"},"x"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u6839\u8282\u70b9\uff1a")," ",Object(i.b)("inlineCode",{parentName:"li"},"1 \u2264 x \u2264 m-1")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u975e\u6839\u8282\u70b9\uff1a")," ",Object(i.b)("inlineCode",{parentName:"li"},"\u5411\u4e0a\u53d6\u6574(m/2) - 1 \u2264 x \u2264 m-1")),Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u6709\u5b50\u8282\u70b9\uff0c\u5219",Object(i.b)("inlineCode",{parentName:"li"},"\u5b50\u8282\u70b9\u4e2a\u6570 y = x + 1"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6839\u8282\u70b9\uff1a",Object(i.b)("inlineCode",{parentName:"li"},"2 \u2264 y \u2264 m")),Object(i.b)("li",{parentName:"ul"},"\u975e\u6839\u8282\u70b9\uff1a",Object(i.b)("inlineCode",{parentName:"li"},"\u5411\u4e0a\u53d6\u6574(m/2) \u2264 y \u2264 m")))))))),Object(i.b)("h1",{id:"b\u6811\u4e0e\u4e8c\u53c9\u641c\u7d22\u6811"},"B\u6811\u4e0e\u4e8c\u53c9\u641c\u7d22\u6811"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u5f53",Object(i.b)("inlineCode",{parentName:"p"},"m = 2"),"\u65f6\uff0c\u4e8c\u9636B\u6811\u5373\u4e8c\u53c9\u641c\u7d22\u6811")),Object(i.b)("blockquote",null,Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"B\u6811\u548c\u4e8c\u53c9\u641c\u7d22\u6811\uff0c\u5728\u903b\u8f91\u4e0a\u662f\u7b49\u4ef7\u7684"),Object(i.b)("li",{parentName:"ul"},"\u591a\u4ee3\u8282\u70b9\u5408\u5e76\uff0c\u53ef\u4ee5\u83b7\u5f97\u4e00\u4e2a\u8d85\u7ea7\u8282\u70b9\uff08\u53ef\u4ee5\u5b58\u50a8\u591a\u4e2a\u5143\u7d20\u7684\u8282\u70b9\uff09",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"n"),"\u4ee3\u5408\u5e76\u7684\u8d85\u7ea7\u8282\u70b9\uff0c\u6700\u591a\u62e5\u6709",Object(i.b)("inlineCode",{parentName:"li"},"2 ^ n"),"\u4e2a\u5b50\u8282\u70b9",Object(i.b)("strong",{parentName:"li"},"\uff08\u81f3\u5c11\u662f2 ^ n\u9636B\u6811\uff09")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"m"),"\u9636B\u6811\uff0c\u6700\u591a\u9700\u8981",Object(i.b)("inlineCode",{parentName:"li"},"logm"),"\u4ee3\u5408\u5e76"))),Object(i.b)("h1",{id:"\u641c\u7d22"},"\u641c\u7d22"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u5148\u5728\u8282\u70b9\u5185\u90e8\u4ece\u5c0f\u5230\u5927\u5f00\u59cb\u641c\u7d22\u5143\u7d20"),Object(i.b)("li",{parentName:"ol"},"\u5982\u679c\u547d\u4e2d\uff1b\u641c\u7d22\u7ed3\u675f"),Object(i.b)("li",{parentName:"ol"},"\u5982\u679c\u6ca1\u6709\u547d\u4e2d\uff0c\u518d\u53bb\u5bf9\u5e94\u7684\u5b50\u8282\u70b9\u4e2d\u641c\u7d22\u5143\u7d20\uff0c\u91cd\u590d\u6b65\u9aa41")),Object(i.b)("h1",{id:"\u6dfb\u52a0"},"\u6dfb\u52a0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u65b0\u6dfb\u52a0\u7684\u5143\u7d20\u5fc5\u5b9a\u662f\u6dfb\u52a0\u5230\u53f6\u5b50\u8282\u70b9\u7684")),Object(i.b)("h2",{id:"\u4e0a\u6ea2"},"\u4e0a\u6ea2"),Object(i.b)("p",null,Object(i.b)("img",{alt:"image-20201106154841570",src:a(997).default})),Object(i.b)("blockquote",null,Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u5047\u8bbe\u662f",Object(i.b)("inlineCode",{parentName:"li"},"4"),"\u9636B\u6811"),Object(i.b)("li",{parentName:"ul"},"\u6700\u53f3\u4e0b\u89d2\u7684\u53f6\u5b50\u8282\u70b9\u4e0a\u9650\u4e3a",Object(i.b)("inlineCode",{parentName:"li"},"3"),"\uff0c\u63d2\u516598\uff0c\u4f1a\u5bfc\u81f4\u8282\u70b9\u5143\u7d20\u4e2a\u6570\u8d85\u51fa\u9650\u5236"),Object(i.b)("li",{parentName:"ul"},"\u8fd9\u79cd\u73b0\u8c61\u79f0\u4e3a",Object(i.b)("inlineCode",{parentName:"li"},"\u4e0a\u6ea2\uff08Overflow\uff09")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u4e0a\u6ea2\u7684\u89e3\u51b3")),Object(i.b)("p",null,Object(i.b)("img",{alt:"image-20201106155623520",src:a(998).default})),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u5047\u8bbe5\u9636B\u6811")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u4e0a\u6ea2\u8282\u70b9"),"\u7684\u5143\u7d20\u4e2a\u6570\u5fc5\u7136\u7b49\u4e8e",Object(i.b)("inlineCode",{parentName:"li"},"m"),"\uff08\u6b64\u5904\u4e3a",Object(i.b)("inlineCode",{parentName:"li"},"5"),"\uff09"),Object(i.b)("li",{parentName:"ul"},"\u6c42\u51fa",Object(i.b)("strong",{parentName:"li"},"\u4e0a\u6ea2\u8282\u70b9"),"\u4e2d",Object(i.b)("strong",{parentName:"li"},"\u6700\u4e2d\u95f4"),"\u5143\u7d20\u7684\u4f4d\u7f6e",Object(i.b)("inlineCode",{parentName:"li"},"k"),"\uff0c\u5047\u8bbe\u6700\u4e2d\u95f4\u5143\u7d20\u7684\u4f4d\u7f6e\u4e3a",Object(i.b)("inlineCode",{parentName:"li"},"k")),Object(i.b)("li",{parentName:"ul"},"\u5c06",Object(i.b)("inlineCode",{parentName:"li"},"k"),"\u4f4d\u7f6e\u5bf9\u5e94\u7684\u5143\u7d20\uff0c\u5411\u4e0a\u4e0e\u7236\u8282\u70b9\u8fdb\u884c\u5408\u5e76"),Object(i.b)("li",{parentName:"ul"},"\u5c06 ",Object(i.b)("inlineCode",{parentName:"li"},"[0, k-1]"),"\u548c",Object(i.b)("inlineCode",{parentName:"li"},"[k+1, m-1]"),"\u4f4d\u7f6e\u7684\u5143\u7d20\u5206\u88c2\u6210",Object(i.b)("inlineCode",{parentName:"li"},"2"),"\u4e2a\u5b50\u8282\u70b9",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5206\u88c2\u4e4b\u540e\uff0c",Object(i.b)("inlineCode",{parentName:"li"},"2"),"\u4e2a\u5b50\u8282\u70b9\u7684\u5143\u7d20\u4e2a\u6570\uff0c\u5fc5\u7136\u4e0d\u4f1a\u4f4e\u4e8e\u6700\u4f4e\u9650\u5236",Object(i.b)("inlineCode",{parentName:"li"},"\u5411\u4e0a\u53d6\u6574(m/2) - 1")))))),Object(i.b)("p",null,Object(i.b)("img",{alt:"image-20201106160103378",src:a(999).default})),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u95ee\u9898")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u8fd9\u79cd\u505a\u6cd5\u53ef\u80fd\u5bfc\u81f4\u7236\u8282\u70b9\u518d\u6b21\u53d1\u751f\u4e0a\u6ea2\uff0c\u7ee7\u7eed\u5411\u4e0a\u5408\u5e76\u5373\u53ef "),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"\u6781\u7aef\u60c5\u51b5\u4e0b\uff0c\u53ef\u80fd\u4e00\u76f4\u5206\u88c2\u5230\u6839\u8282\u70b9"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u8fd9\u662f\u552f\u4e00\u4e00\u79cd\u4f1a\u8ba9B\u6811\u9ad8\u5ea6\u53d8\u9ad8\u7684\u60c5\u51b5"))))),Object(i.b)("img",{src:a(1e3).default,style:{zoom:"60%",border:"0px black solid"}}),Object(i.b)("h1",{id:"\u5220\u9664"},"\u5220\u9664"),Object(i.b)("h2",{id:"\u5220\u9664\u53f6\u5b50\u8282\u70b9"},"\u5220\u9664\u53f6\u5b50\u8282\u70b9"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u76f4\u63a5\u5220\u9664\u5373\u53ef")),Object(i.b)("h2",{id:"\u5220\u9664\u975e\u53f6\u5b50\u8282\u70b9"},"\u5220\u9664\u975e\u53f6\u5b50\u8282\u70b9"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u8981\u5220\u9664\u7684\u8282\u70b9\u5728\u975e\u53f6\u5b50\u8282\u70b9\u4e2d")),Object(i.b)("ol",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ol"},"\u5148\u627e\u5230",Object(i.b)("inlineCode",{parentName:"li"},"\u524d\u9a71"),"\u6216\u8005",Object(i.b)("inlineCode",{parentName:"li"},"\u540e\u7ee7\u5143\u7d20"),"\uff0c\u8986\u76d6\u6240\u9700\u5220\u9664\u5143\u7d20\u7684\u503c"),Object(i.b)("li",{parentName:"ol"},"\u5220\u9664",Object(i.b)("inlineCode",{parentName:"li"},"\u524d\u9a71"),"\u6216\u8005",Object(i.b)("inlineCode",{parentName:"li"},"\u540e\u7ee7\u5143\u7d20")))),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"\u6ce8\u610f")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u5728B\u6811\u4e2d"),Object(i.b)("ol",{parentName:"div"},Object(i.b)("li",{parentName:"ol"},"\u975e\u53f6\u5b50\u8282\u70b9\u7684\u524d\u9a71\u6216\u8005\u540e\u7ee7\u5143\u7d20\uff0c\u5fc5\u5b9a\u5728\u53f6\u5b50\u8282\u70b9\u4e2d"),Object(i.b)("li",{parentName:"ol"},"\u63a8\u51fa\uff0c\u88ab\u5220\u9664\u7684\u672c\u8d28\u4e0a\u8fd8\u662f\u53f6\u5b50\u8282\u70b9")))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u7ed3\u8bba")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u5728B\u6811\u4e2d\uff0c\u771f\u6b63\u7684\u88ab\u5220\u9664\u5143\u7d20\uff0c\u4e00\u5b9a\u662f\u53f6\u5b50\u8282\u70b9"))),Object(i.b)("h2",{id:"\u4e0b\u6ea2"},"\u4e0b\u6ea2"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u53f6\u5b50\u8282\u70b9\u88ab\u5220\u9664\u6389\u4e00\u4e2a\u5143\u7d20\u540e\uff0c\u5143\u7d20\u4e2a\u6570\u53ef\u80fd\u5c0f\u4e8em\u9636B\u6811\u7684\u6700\u4f4e\u9650\u5236",Object(i.b)("inlineCode",{parentName:"p"},"\u5411\u4e0a\u53d6\u6574(m /2) - 1")),Object(i.b)("p",{parentName:"blockquote"},"\u8fd9\u79cd\u73b0\u8c61\u79f0\u4e3a",Object(i.b)("inlineCode",{parentName:"p"},"\u4e0b\u6ea2\uff08underflow\uff09"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u4e0b\u6ea2\u7684\u89e3\u51b3")),Object(i.b)("blockquote",null,Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u4e0b\u6ea2\u8282\u70b9\u7684\u5143\u7d20\u6570\u91cf\u5fc5\u7136\u7b49\u4e8e",Object(i.b)("inlineCode",{parentName:"li"},"\u5411\u4e0a\u53d6\u6574(m / 2) - 2")),Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u4e0b\u6ea2\u8282\u70b9\u4e34\u8fd1\u7684\u5144\u5f1f\u8282\u70b9\uff0c\u6709\u81f3\u5c11",Object(i.b)("inlineCode",{parentName:"li"},"\u5411\u4e0a\u53d6\u6574(m/2)"),"\u4e2a\u5143\u7d20\uff0c\u53ef\u4ee5\u5411\u5176\u501f",Object(i.b)("inlineCode",{parentName:"li"},"1"),"\u4e2a\u5143\u7d20",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5c06\u7236\u8282\u70b9\u7684\u5143\u7d20",Object(i.b)("inlineCode",{parentName:"li"},"b"),"\u63d2\u5165\u5230\u4e0b\u6ea2\u8282\u70b9\u7684",Object(i.b)("inlineCode",{parentName:"li"},"0"),"\u4f4d\u7f6e\uff08\u6700\u5c0f\u4f4d\u7f6e\u3001\u6700\u5de6\u4fa7\u4f4d\u7f6e\uff09"),Object(i.b)("li",{parentName:"ul"},"\u7528\u5144\u5f1f\u8282\u70b9\u7684\u5143\u7d20",Object(i.b)("inlineCode",{parentName:"li"},"a"),"\uff08\u6700\u5927\u5143\u7d20\uff09\u66ff\u4ee3\u7236\u8282\u70b9\u7684\u5143\u7d20",Object(i.b)("inlineCode",{parentName:"li"},"b")),Object(i.b)("li",{parentName:"ul"},"\u8fd9\u79cd\u64cd\u4f5c\uff0c\u5b9e\u9645\u4e0a\u5c31\u662f",Object(i.b)("inlineCode",{parentName:"li"},"\u65cb\u8f6c"),"\uff08\u56fe\u4e2d",Object(i.b)("inlineCode",{parentName:"li"},"b"),"\u8282\u70b9\u8fdb\u884c\u53f3\u65cb\uff09"))))),Object(i.b)("p",null,Object(i.b)("img",{alt:"image-20201109164053639",src:a(1001).default})),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u95ee\u9898\uff1a"),"\u5982\u679c\u5144\u5f1f\u8282\u70b9\u6b63\u597d\u53ea\u6709",Object(i.b)("inlineCode",{parentName:"p"},"\u5411\u4e0a\u53d6\u6574(m/2) - 1"),"\u4e2a\u5143\u7d20\uff0c\u4e0d\u80fd\u518d\u501f\u51fa\u4e00\u4e2a\u5143\u7d20\uff0c\u8be5\u600e\u4e48\u529e\u5462"),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u5c06\u7236\u8282\u70b9\u7684\u5143\u7d20",Object(i.b)("inlineCode",{parentName:"li"},"b"),"\u632a\u4e0b\u6765\u8ddf\u5de6\u53f3\u8282\u70b9\u8fdb\u884c",Object(i.b)("inlineCode",{parentName:"li"},"\u5408\u5e76")),Object(i.b)("li",{parentName:"ul"},"\u5408\u5e76\u540e\u7684\u8282\u70b9\u5143\u7d20\u4e2a\u6570\u7b49\u4e8e",Object(i.b)("inlineCode",{parentName:"li"},"\u5411\u4e0a\u53d6\u6574(m/2) + \u5411\u4e0a\u53d6\u6574(m/2) - 2"),"\uff0c\u4e0d\u8d85\u8fc7",Object(i.b)("inlineCode",{parentName:"li"},"m - 1")))),Object(i.b)("p",null,Object(i.b)("img",{alt:"image-20201109162214813",src:a(1002).default})),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"\u6ce8\u610f")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u8fd9\u4e2a\u64cd\u4f5c\u53ef\u80fd\u5bfc\u81f4\u7236\u8282\u70b9\u4e0b\u6ea2\uff0c\u4f9d\u7136\u6309\u7167\u4e0a\u8ff0\u65b9\u6cd5\u89e3\u51b3\uff0c\u4e0b\u6ea2\u73b0\u8c61\u53ef\u80fd\u4e00\u76f4\u5411\u4e0a\u4f20\u64ad"))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u603b\u7ed3")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u4e0b\u6ea2\u7684\u89e3\u51b3"),Object(i.b)("ol",{parentName:"div"},Object(i.b)("li",{parentName:"ol"},"\u5148\u770b\u80fd\u4e0d\u80fd\u4ece\u5144\u5f1f\u8282\u70b9\u501f\u4e00\u4e2a\u5143\u7d20\u8fc7\u6765\uff0c\u5b9e\u73b0\u65cb\u8f6c"),Object(i.b)("li",{parentName:"ol"},"\u5982\u679c\u5144\u5f1f\u8282\u70b9\u501f\u4e0d\u6765\u5143\u7d20\uff0c\u5219\u5c06\u7236\u8282\u70b9\u4e2d\u592e\u5143\u7d20\u632a\u4e0b\u6765\u548c\u5de6\u53f3\u5b50\u8282\u70b9\u4e00\u8d77\u5408\u5e76")))),Object(i.b)("h1",{id:"4\u9636b\u6811"},"4\u9636B\u6811"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u5148\u5b66\u4e604\u9636B\u6811\uff0c\u5c06\u80fd\u66f4\u597d\u7684\u5b66\u4e60\u7406\u89e3\u7ea2\u9ed1\u6811")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"4\u9636B\u6811\u7684\u6027\u8d28\uff1a")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u6240\u6709\u8282\u70b9\u80fd\u5b58\u50a8\u7684\u5143\u7d20\u4e2a\u6570",Object(i.b)("inlineCode",{parentName:"li"},"x \u2208 [1, 3]")),Object(i.b)("li",{parentName:"ul"},"\u6240\u6709\u975e\u53f6\u5b50\u8282\u70b9\u7684\u5b50\u8282\u70b9\u4e2a\u6570",Object(i.b)("inlineCode",{parentName:"li"},"y \u2208 [2, 4]")))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u7ec3\u4e60")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u624b\u52a8\u6a21\u62df4\u9636B\u6811\u6dfb\u52a0\u4e0e\u5220\u9664\u5143\u7d20\u7684\u8fc7\u7a0b"),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"\u4ece1\u6dfb\u52a0\u523022"),Object(i.b)("li",{parentName:"ul"},"\u4ece1\u5220\u9664\u523022")),Object(i.b)("p",{parentName:"div"},"\u89c2\u5bdf\u3001\u5206\u67904\u9636B\u6811\u7684\u8fd0\u4f5c\u65b9\u5f0f"),Object(i.b)("p",{parentName:"div"},"\u4f7f\u7528\u7b97\u6cd5\u53ef\u89c6\u5316\u7f51\u7ad9\u9a8c\u8bc1\u7ed3\u679c"))))}m.isMDXComponent=!0},567:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),b=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var o=b.a.createContext({}),m=function(e){var t=b.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=m(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,o=r(e,["components","mdxType","originalType","parentName"]),p=m(a),j=n,d=p["".concat(c,".").concat(j)]||p[j]||O[j]||i;return a?b.a.createElement(d,l(l({ref:t},o),{},{components:a})):b.a.createElement(d,l({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=j;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<i;o++)c[o]=a[o];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},996:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/19-ea80119d62173730883b6cd5a84db126.png"},997:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/20-a2f70be9896aaaa499460f80fa21b909.png"},998:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/21-5c94dbff216eec51c9a1b9652a47fcee.png"},999:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/22-7e02dd021afc6c4f07d8f38e5f20c84a.png"}}]);