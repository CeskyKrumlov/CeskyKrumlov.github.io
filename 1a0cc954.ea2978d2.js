(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(2),b=n(6),l=(n(0),n(576)),c={id:"3.synchronized",title:"\u540c\u6b65\u4e0e\u4e92\u65a5",hide_title:!0},r={unversionedId:"\u64cd\u4f5c\u7cfb\u7edf/3.synchronized",id:"\u64cd\u4f5c\u7cfb\u7edf/3.synchronized",isDocsHomePage:!1,title:"\u540c\u6b65\u4e0e\u4e92\u65a5",description:"\u540c\u6b65\u4e0e\u4e92\u65a5",source:"@site/docs/\u64cd\u4f5c\u7cfb\u7edf/\u540c\u6b65\u4e0e\u4e92\u65a5.md",slug:"/\u64cd\u4f5c\u7cfb\u7edf/3.synchronized",permalink:"/docs/\u64cd\u4f5c\u7cfb\u7edf/3.synchronized",version:"current",sidebar:"someSidebar",previous:{title:"\u5904\u7406\u673a\u8c03\u5ea6",permalink:"/docs/\u64cd\u4f5c\u7cfb\u7edf/2.scheduling"},next:{title:"\u4fe1\u53f7\u91cf",permalink:"/docs/\u64cd\u4f5c\u7cfb\u7edf/4.semaphore"}},o=[{value:"\u540c\u6b65\u4e0e\u4e92\u65a5",id:"\u540c\u6b65\u4e0e\u4e92\u65a5",children:[{value:"\u4e92\u65a5\u8bbf\u95ee\u7684\u539f\u5219",id:"\u4e92\u65a5\u8bbf\u95ee\u7684\u539f\u5219",children:[]}]},{value:"\u4e92\u65a5\u7684\u8f6f\u4ef6\u5b9e\u73b0\u65b9\u6cd5",id:"\u4e92\u65a5\u7684\u8f6f\u4ef6\u5b9e\u73b0\u65b9\u6cd5",children:[{value:"\u5355\u6807\u5fd7\u6cd5",id:"\u5355\u6807\u5fd7\u6cd5",children:[]},{value:"\u53cc\u6807\u5fd7\u5148\u68c0\u67e5",id:"\u53cc\u6807\u5fd7\u5148\u68c0\u67e5",children:[]},{value:"\u53cc\u6807\u5fd7\u540e\u68c0\u67e5",id:"\u53cc\u6807\u5fd7\u540e\u68c0\u67e5",children:[]},{value:"Peterson \u7b97\u6cd5",id:"peterson-\u7b97\u6cd5",children:[]}]},{value:"\u4e92\u65a5\u7684\u786c\u4ef6\u5b9e\u73b0\u65b9\u6cd5",id:"\u4e92\u65a5\u7684\u786c\u4ef6\u5b9e\u73b0\u65b9\u6cd5",children:[{value:"\u4e2d\u65ad\u5c4f\u853d\u6cd5",id:"\u4e2d\u65ad\u5c4f\u853d\u6cd5",children:[]},{value:"TestAndSet (TS \u6307\u4ee4 / TSL \u6307\u4ee4)",id:"testandset-ts-\u6307\u4ee4--tsl-\u6307\u4ee4",children:[]},{value:"Swap \u6307\u4ee4 (XCHG \u6307\u4ee4)",id:"swap-\u6307\u4ee4-xchg-\u6307\u4ee4",children:[]}]}],i={rightToc:o};function p(e){var t=e.components,n=Object(b.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("br",null),Object(l.b)("h1",{id:"\u540c\u6b65\u4e0e\u4e92\u65a5"},"\u540c\u6b65\u4e0e\u4e92\u65a5"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"\u540c\u6b65\uff0c\u4e5f\u79f0 ",Object(l.b)("inlineCode",{parentName:"strong"},"\u76f4\u63a5\u5236\u7ea6\u5173\u7cfb")),"\uff0c\u5b83\u662f\u6307\u4e3a\u5b8c\u6210\u67d0\u79cd\u4efb\u52a1\u800c\u5efa\u7acb\u7684\u4e24\u4e2a\u6216\u591a\u4e2a\u8fdb\u7a0b\uff0c\u8fd9\u4e9b\u8fdb\u7a0b\u56e0\u4e3a\u9700\u8981\u5728\u67d0\u4e9b\u4f4d\u7f6e\u4e0a ",Object(l.b)("inlineCode",{parentName:"p"},"\u534f\u8c03")," \u5b83\u4eec\u7684 ",Object(l.b)("inlineCode",{parentName:"p"},"\u5de5\u4f5c\u6b21\u5e8f")," \u800c\u4ea7\u751f\u7684\u5236\u7ea6\u5173\u7cfb"),Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"\u8fdb\u7a0b\u95f4\u7684\u76f4\u63a5\u5236\u7ea6\u5173\u7cfb\u6e90\u4e8e\u5b83\u4eec\u4e4b\u95f4\u7684\u76f8\u4e92\u5408\u4f5c"))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"\u4e92\u65a5\uff1a"),"\u8fdb\u7a0b\u7684 \u201c\u5e76\u53d1\u201d \u9700\u8981 \u201c\u5171\u4eab\u201d \u7684\u652f\u6301\u3002\u5404\u4e2a\u5e76\u53d1\u6267\u884c\u7684\u8fdb\u7a0b\u4e0d\u53ef\u907f\u514d\u7684\u9700\u8981\u5171\u4eab\u4e00\u4e9b\u8d44\u6e90\uff08\u5982\u5185\u5b58\u3001\u6253\u5370\u673a\u3001\u6444\u50cf\u5934\uff09"),Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"\u4e00\u4e2a\u65f6\u95f4\u6bb5\u5185\u53ea\u5141\u8bb8\u4e00\u4e2a\u8fdb\u7a0b\u4f7f\u7528\u7684\u8d44\u6e90\u79f0\u4e3a ",Object(l.b)("inlineCode",{parentName:"li"},"\u4e34\u754c\u8d44\u6e90")),Object(l.b)("li",{parentName:"ul"},"\u8bb8\u591a\u7269\u7406\u8bbe\u5907\uff08\u6444\u50cf\u673a\u3001\u6253\u5370\u673a\uff09\u90fd\u5c5e\u4e8e ",Object(l.b)("inlineCode",{parentName:"li"},"\u4e34\u754c\u8d44\u6e90")),Object(l.b)("li",{parentName:"ul"},"\u8bb8\u591a\u53d8\u91cf\u3001\u6570\u636e\u3001\u5185\u5b58\u7f13\u51b2\u533a\u7b49\u4e5f\u5c5e\u4e8e\u4e34\u754c\u8d44\u6e90"),Object(l.b)("li",{parentName:"ul"},"\u5bf9\u4e34\u754c\u8d44\u6e90\u7684\u8bbf\u95ee\uff0c\u5fc5\u987b ",Object(l.b)("inlineCode",{parentName:"li"},"\u4e92\u65a5")," \u5730\u8fdb\u884c"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"strong"},"\u4e92\u65a5"),"\uff0c\u4e5f\u79f0 ",Object(l.b)("inlineCode",{parentName:"strong"},"\u95f4\u63a5\u5236\u7ea6\u5173\u7cfb"),"\u3002\u8fdb\u7a0b\u4e92\u65a5\u6307\u5f53\u4e00\u4e2a\u8fdb\u7a0b\u8bbf\u95ee\u67d0\u4e34\u8857\u8d44\u6e90\u65f6\uff0c\u53e6\u4e00\u4e2a\u60f3\u8981\u8bbf\u95ee\u8be5\u4e34\u754c\u8d44\u6e90\u7684\u8fdb\u7a0b\u5fc5\u987b\u7b49\u5f85\u3002\u5f53\u524d\u8bbf\u95ee\u4e34\u754c\u8d44\u6e90\u7684\u8fdb\u7a0b\u8bbf\u95ee\u7ed3\u675f\uff0c\u91ca\u653e\u8be5\u8d44\u6e90\u540e\uff0c\u53e6\u4e00\u4e2a\u8fdb\u7a0b\u624d\u80fd\u53bb\u8bbf\u95ee\u4e34\u754c\u8d44\u6e90")))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u5bf9\u4e34\u754c\u8d44\u6e90\u7684\u8bbf\u95ee\uff0c\u53ef\u4ee5\u5728\u903b\u8f91\u4e0a\u5206\u4e3a\u5982\u4e0b\u56db\u4e2a\u90e8\u5206\uff1a"),Object(l.b)("pre",{parentName:"blockquote"},Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),"do {\n    entry section; // \u8fdb\u5165\u533a \u4e0a\u9501\n    critical section; // \u4e34\u754c\u533a\n    exit section; // \u9000\u51fa\u533a \u89e3\u9501\n    remainder seciotn; // \u5269\u4f59\u533a\n}\n")),Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"\u4e34\u754c\u533a")," \u662f\u8fdb\u7a0b\u4e2d ",Object(l.b)("strong",{parentName:"li"},"\u8bbf\u95ee\u4e34\u754c\u8d44\u6e90")," \u7684\u4ee3\u7801\u6bb5"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"\u8fdb\u5165\u533a")," \u548c ",Object(l.b)("inlineCode",{parentName:"li"},"\u9000\u51fa\u533a")," \u662f ",Object(l.b)("strong",{parentName:"li"},"\u8d1f\u8d23\u5b9e\u73b0\u4e92\u65a5")," \u7684\u4ee3\u7801\u6bb5"),Object(l.b)("li",{parentName:"ul"},"\u4e34\u754c\u533a\u4e5f\u79f0\u4e34\u754c\u6bb5"))),Object(l.b)("h2",{id:"\u4e92\u65a5\u8bbf\u95ee\u7684\u539f\u5219"},"\u4e92\u65a5\u8bbf\u95ee\u7684\u539f\u5219"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u4e3a\u4e86\u5b9e\u73b0\u5bf9\u4e34\u754c\u8d44\u6e90\u7684\u4e92\u65a5\u8bbf\u95ee\uff0c\u540c\u65f6\u4fdd\u8bc1\u7cfb\u7edf\u6574\u4f53\u6027\u80fd\uff0c\u9700\u8981\u9075\u5faa\u4ee5\u4e0b\u539f\u5219\uff1a"),Object(l.b)("ol",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"\u7a7a\u95f2\u8ba9\u8fdb"),"\u3002\u4e34\u754c\u533a\u7a7a\u95f2\u65f6\uff0c\u53ef\u4ee5\u5141\u8bb8\u4e00\u4e2a\u8bf7\u6c42\u8fdb\u5165\u4e34\u754c\u533a\u7684\u8fdb\u7a0b\u7acb\u5373\u8fdb\u5165\u4e34\u754c\u533a"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"\u5fd9\u5219\u7b49\u5f85"),"\u3002\u5f53\u5df2\u6709\u8fdb\u7a0b\u8fdb\u5165\u4e34\u754c\u533a\uff0c\u5176\u4ed6\u8bd5\u56fe\u8fdb\u5165\u4e34\u754c\u533a\u7684\u8fdb\u7a0b\u5fc5\u987b\u7b49\u5f85"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"\u6709\u9650\u7b49\u5f85"),"\u3002\u5bf9\u8bf7\u6c42\u8bbf\u95ee\u7684\u8fdb\u7a0b\uff0c\u5e94\u4fdd\u8bc1\u80fd\u5728\u6709\u9650\u65f6\u95f4\u5185\u8fdb\u5165\u4e34\u754c\u533a\uff08\u4fdd\u8bc1\u4e0d\u4f1a\u9965\u997f\uff09"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"\u8ba9\u6743\u7b49\u5f85"),"\u3002\u5f53\u8fdb\u7a0b\u4e0d\u80fd\u8fdb\u5165\u4e34\u754c\u533a\u65f6\uff0c\u5e94\u5f53\u7acb\u5373\u91ca\u653e\u5904\u7406\u673a\uff0c\u9632\u6b62\u8fdb\u7a0b\u5fd9\u7b49\u5f85"))),Object(l.b)("br",null),Object(l.b)("h1",{id:"\u4e92\u65a5\u7684\u8f6f\u4ef6\u5b9e\u73b0\u65b9\u6cd5"},"\u4e92\u65a5\u7684\u8f6f\u4ef6\u5b9e\u73b0\u65b9\u6cd5"),Object(l.b)("h2",{id:"\u5355\u6807\u5fd7\u6cd5"},"\u5355\u6807\u5fd7\u6cd5"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u7b97\u6cd5\u601d\u60f3"),Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"\u5171\u4e24\u4e2a\u8fdb\u7a0b\uff0c\u4e00\u4e2a\u8fdb\u7a0b\u5728 ",Object(l.b)("strong",{parentName:"li"},"\u8bbf\u95ee\u5b8c\u4e34\u754c\u533a\u540e")," \u4f1a\u628a\u4f7f\u7528\u4e34\u754c\u533a\u7684\u6743\u9650\u4ea4\u7ed9\u53e6\u4e00\u4e2a\u8fdb\u7a0b"),Object(l.b)("li",{parentName:"ul"},"\u6bcf\u4e2a\u8fdb\u7a0b\u8fdb\u5165\u4e34\u754c\u533a\u7684\u6743\u9650\u53ea\u80fd\u88ab\u53e6\u4e00\u4e2a\u8fdb\u7a0b\u8d4b\u4e88"))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u7b97\u6cd5\u89c4\u5219"),Object(l.b)("pre",{parentName:"blockquote"},Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// \u7ebf\u7a0b1\nwhile (turn != 0){}\n\u4e34\u754c\u533a;\nturn = 1;\n\u5269\u4f59\u533a;\n// \u7ebf\u7a0b2\nwhile (turn != 1) {}\n\u4e34\u754c\u533a;\nturn = 0;\n\u5269\u4f59\u533a;\n"))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u4f18\u7f3a\u70b9"),Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"\u4f18\u70b9\uff1a\u53ef\u4ee5\u4fdd\u8bc1\u4e92\u65a5"),Object(l.b)("li",{parentName:"ul"},"\u7f3a\u70b9\uff1a\u4e24\u4e2a\u7ebf\u7a0b\u5fc5\u7136\u4ea4\u66ff\u6267\u884c\uff0c\u8fdd\u80cc\u4e86 ",Object(l.b)("inlineCode",{parentName:"li"},"\u7a7a\u95f2\u8ba9\u8fdb")," \u539f\u5219"))),Object(l.b)("h2",{id:"\u53cc\u6807\u5fd7\u5148\u68c0\u67e5"},"\u53cc\u6807\u5fd7\u5148\u68c0\u67e5"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u7b97\u6cd5\u601d\u60f3"),Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"\u8bbe\u7f6e\u4e00\u4e2a bool \u6570\u7ec4 flag[]\uff0c\u6570\u7ec4\u4e2d\u5404\u4e2a\u5143\u7d20\u7528\u6765 ",Object(l.b)("strong",{parentName:"li"},"\u6807\u8bb0\u5404\u8fdb\u7a0b\u60f3\u8fdb\u5165\u4e34\u754c\u533a\u7684\u610f\u613f")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"flag[0] = true")," \u8868\u793a 0 \u53f7\u8fdb\u7a0b P0 \u73b0\u5728\u60f3\u8981\u8fdb\u5165\u4e34\u754c\u533a"),Object(l.b)("li",{parentName:"ul"},"\u6bcf\u4e2a\u8fdb\u7a0b\u8fdb\u5165\u4e34\u754c\u533a\u4e4b\u524d\u5148\u68c0\u67e5\u5f53\u524d\u6709\u6ca1\u6709\u522b\u7684\u8fdb\u7a0b\u60f3\u8fdb\u5165\u4e34\u754c\u533a\uff0c\u5982\u679c\u6ca1\u6709\uff0c\u5219\u628a\u81ea\u8eab\u5bf9\u5e94\u7684\u6807\u5fd7 flag","[i]"," \u8bbe\u7f6e\u4e3a true\uff0c\u4e4b\u540e\u5f00\u59cb\u8bbf\u95ee\u4e34\u754c\u533a"))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u7b97\u6cd5\u89c4\u5219"),Object(l.b)("pre",{parentName:"blockquote"},Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"boolean[] flag = new boolean[2];\nflag[0] = false;\nflag[1] = false;\n// \u7ebf\u7a0b1\nwhile (flag[1]){}\nflag[0] = true;\n\u4e34\u754c\u533a;\nflag[0] = false;\n\u5269\u4f59\u533a;\n// \u7ebf\u7a0b2\nwhile (flag[0]){}\nflag[1] = true;\n\u4e34\u754c\u533a;\nflag[1] = false;\n\u5269\u4f59\u533a;\n"))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u4f18\u7f3a\u70b9"),Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"\u4f18\u70b9\uff1a\u53ef\u4ee5\u4fdd\u8bc1\u4e92\u65a5"),Object(l.b)("li",{parentName:"ul"},"\u7f3a\u70b9\uff1a\u5e76\u53d1\u73af\u5883\u4e0b\u4e24\u4e2a\u7ebf\u7a0b\u53ef\u80fd\u540c\u65f6\u8fdb\u5165\u4e34\u754c\u533a\uff0c\u8fdd\u80cc\u4e86 ",Object(l.b)("inlineCode",{parentName:"li"},"\u5fd9\u5219\u7b49\u5f85")," \u539f\u5219",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"\u539f\u56e0\u5728\u4e8e ",Object(l.b)("inlineCode",{parentName:"strong"},"\u8fdb\u5165\u533a")," \u7684 ",Object(l.b)("inlineCode",{parentName:"strong"},"\u68c0\u67e5")," \u548c ",Object(l.b)("inlineCode",{parentName:"strong"},"\u4e0a\u9501")," \u4e24\u4e2a\u64cd\u4f5c\u4e0d\u662f\u4e00\u6c14\u5475\u6210\u7684")),Object(l.b)("li",{parentName:"ul"},"\u68c0\u67e5\u4e4b\u540e\uff0c\u4e0a\u9501\u524d\u53ef\u80fd\u53d1\u751f\u8fdb\u7a0b\u5207\u6362"))))),Object(l.b)("h2",{id:"\u53cc\u6807\u5fd7\u540e\u68c0\u67e5"},"\u53cc\u6807\u5fd7\u540e\u68c0\u67e5"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u7b97\u6cd5\u601d\u60f3"),Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"\u53cc\u6807\u5fd7\u5148\u68c0\u67e5\u6cd5\u7684\u6539\u7248"),Object(l.b)("li",{parentName:"ul"},"\u628a\u5148\u68c0\u67e5\u540e\u4e0a\u9501\uff0c\u6539\u4e3a ",Object(l.b)("strong",{parentName:"li"},"\u5148\u4e0a\u9501\u540e\u68c0\u67e5")))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u7b97\u6cd5\u89c4\u5219"),Object(l.b)("pre",{parentName:"blockquote"},Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"boolean[] flag = new boolean[2];\nflag[0] = false;\nflag[1] = false;\n// \u7ebf\u7a0b1\nflag[0] = true;\nwhile (flag[1]){}\n\u4e34\u754c\u533a;\nflag[0] = false;\n\u5269\u4f59\u533a;\n// \u7ebf\u7a0b2\nflag[1] = true;\nwhile (flag[0]){}\n\u4e34\u754c\u533a;\nflag[1] = false;\n\u5269\u4f59\u533a;\n"))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u4f18\u7f3a\u70b9"),Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"\u4f18\u70b9\uff1a\u53ef\u4ee5\u4fdd\u8bc1\u4e92\u65a5"),Object(l.b)("li",{parentName:"ul"},"\u7f3a\u70b9\uff1a\u5e76\u53d1\u73af\u5883\u4e0b\u4e24\u4e2a\u7ebf\u7a0b\u53ef\u80fd\u540c\u65f6\u4e0a\u9501\uff0c\u8fdd\u80cc\u4e86 ",Object(l.b)("inlineCode",{parentName:"li"},"\u7a7a\u95f2\u8ba9\u8fdb"),"\u3001",Object(l.b)("inlineCode",{parentName:"li"},"\u6709\u9650\u7b49\u5f85")),Object(l.b)("li",{parentName:"ul"},"\u8fdb\u4e00\u6b65\u4ea7\u751f ",Object(l.b)("inlineCode",{parentName:"li"},"\u9965\u997f")))),Object(l.b)("h2",{id:"peterson-\u7b97\u6cd5"},"Peterson \u7b97\u6cd5"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u7b97\u6cd5\u601d\u60f3"),Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"\u5982\u679c\u4e24\u4e2a\u8fdb\u7a0b\u90fd\u4e89\u7740\u8fdb\u5165\u4e34\u754c\u533a\uff0c\u53ef\u4ee5\u8ba9\u8fdb\u7a0b\u8fdb\u884c\u4e3b\u52a8\u8ba9\u6b65\uff0c\u4e3b\u52a8\u8ba9\u5bf9\u65b9\u5148\u4f7f\u7528\u4e34\u754c\u533a"))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u7b97\u6cd5\u89c4\u5219"),Object(l.b)("pre",{parentName:"blockquote"},Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"boolean[] flag = new boolean[2]; // \u8868\u793a\u8fdb\u5165\u4e34\u754c\u533a\u610f\u613f\u7684\u6570\u7ec4\uff0c\u521d\u59cb\u503c\u90fd\u662f false\nint turn = 0; // turn \u8868\u793a\u4f18\u5148\u8ba9\u54ea\u4e2a\u7ebf\u7a0b\u8fdb\u5165\u4e34\u754c\u533a\n// 0 \u8fdb\u7a0b\nflag[0] = true;\nturn = 1;\nwhile (flag[1] && turn == 1) {}\n\u4e34\u754c\u533a;\nflag[0] = false;\n\u5269\u4f59\u533a;\n// 1 \u8fdb\u7a0b\nflag[1] = true; // \u8868\u793a\u81ea\u5df1\u60f3\u8fdb\u5165\u4e34\u754c\u533a\nturn = 0; // \u53ef\u4ee5\u4f18\u5148\u8ba9\u5bf9\u65b9\u8fdb\u5165\u4e34\u754c\u533a\nwhile (flag[0] && turn == 0) {} // \u5bf9\u65b9\u60f3\u8fdb\uff0c\u4e14\u6700\u540e\u4e00\u6b21\u662f\u81ea\u5df1\u8ba9\u6b65\uff0c\u90a3\u4e48\u5c31\u81ea\u65cb\u7b49\u5f85\n\u4e34\u754c\u533a;\nflag[1] = false; // \u8bbf\u95ee\u5b8c\u4e34\u754c\u533a\uff0c\u8868\u793a\u81ea\u5df1\u5df2\u7ecf\u4e0d\u60f3\u518d\u8bbf\u95ee\u4e34\u754c\u533a\u4e86\n\u5269\u4f59\u533a;\n"))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u4f18\u7f3a\u70b9"),Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"\u4f18\u70b9\uff1a\u4fdd\u8bc1\u4e86\u4e92\u65a5\uff0c\u9075\u5faa\u4e86 ",Object(l.b)("inlineCode",{parentName:"li"},"\u7a7a\u95f2\u8ba9\u8fdb"),"\u3001",Object(l.b)("inlineCode",{parentName:"li"},"\u5fd9\u5219\u7b49\u5f85"),"\u3001",Object(l.b)("inlineCode",{parentName:"li"},"\u6709\u9650\u7b49\u5f85")),Object(l.b)("li",{parentName:"ul"},"\u7f3a\u70b9\uff1a\u6ca1\u6709\u9075\u5faa ",Object(l.b)("inlineCode",{parentName:"li"},"\u8ba9\u6743\u7b49\u5f85")," \u539f\u5219\uff0c\u6ca1\u6709\u7c7b\u4f3c\u7b49\u5f85\u961f\u5217\u7684\u7ed3\u6784\uff0c\u81ea\u65cb\u7b49\u5f85\u4f1a\u6d88\u8017 CPU \u7b97\u529b"))),Object(l.b)("br",null),Object(l.b)("h1",{id:"\u4e92\u65a5\u7684\u786c\u4ef6\u5b9e\u73b0\u65b9\u6cd5"},"\u4e92\u65a5\u7684\u786c\u4ef6\u5b9e\u73b0\u65b9\u6cd5"),Object(l.b)("h2",{id:"\u4e2d\u65ad\u5c4f\u853d\u6cd5"},"\u4e2d\u65ad\u5c4f\u853d\u6cd5"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u7b97\u6cd5\u601d\u60f3"),Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"\u5229\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"\u5f00\u5173\u4e2d\u65ad\u6307\u4ee4")," \u5b9e\u73b0"))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u7b97\u6cd5\u89c4\u5219"),Object(l.b)("pre",{parentName:"blockquote"},Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"\u5173\u4e2d\u65ad;\n\u4e34\u754c\u533a;\n\u5f00\u4e2d\u65ad;\n"))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u4f18\u7f3a\u70b9"),Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"\u4f18\u70b9\uff1a\u7b80\u5355\u3001\u9ad8\u6548"),Object(l.b)("li",{parentName:"ul"},"\u7f3a\u70b9\uff1a\u4e0d\u9002\u7528\u4e8e\u591a\u5904\u7406\u673a\uff1b\u53ea\u9002\u7528\u4e8e\u64cd\u4f5c\u7cfb\u7edf\u5185\u6838\u8fdb\u7a0b\uff0c \u4e0d\u9002\u7528\u4e8e\u7528\u6237\u8fdb\u7a0b\u3002\u56e0\u4e3a\u5f00\u5173\u4e2d\u65ad\u6307\u4ee4\u53ea\u80fd\u8fd0\u884c\u5728\u5185\u6838\u6001"))),Object(l.b)("h2",{id:"testandset-ts-\u6307\u4ee4--tsl-\u6307\u4ee4"},"TestAndSet (TS \u6307\u4ee4 / TSL \u6307\u4ee4)"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u7b97\u6cd5\u601d\u60f3"),Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"\u7528\u786c\u4ef6\u5b9e\u73b0\uff0c\u6267\u884c\u8fc7\u7a0b\u4e2d\u4e0d\u5141\u8bb8\u88ab\u4e2d\u65ad"))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u7b97\u6cd5\u89c4\u5219"),Object(l.b)("pre",{parentName:"blockquote"},Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),"// bool \u5171\u4eab\u53d8\u91cf lock \u8868\u793a\u5f53\u524d\u4e34\u754c\u533a\u662f\u5426\u88ab\u52a0\u9501\n// true \u8868\u793a\u5df2\u52a0\u9501, false \u8868\u793a\u6ca1\u52a0\u9501\nbool TestAndSet(bool *lock) \n{\n    bool old;\n    old = *lock; // old \u7528\u6765\u5b58\u653e lock \u539f\u6765\u7684\u503c\n    *lock = true; // \u65e0\u8bba\u4e4b\u524d\u662f\u5426\u5df2\u7ecf\u52a0\u9501\uff0c\u90fd\u4f1a\u5c06 lock \u8bbe\u7f6e\u4e3a true\n    rturn old;  // \u8fd4\u56de lock \u539f\u6765\u7684\u503c\n}\n")),Object(l.b)("pre",{parentName:"blockquote"},Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c",metastring:'title="\u4f7f\u7528 TS \u6307\u4ee4\u5b9e\u73b0\u4e92\u65a5"',title:'"\u4f7f\u7528',TS:!0,'\u6307\u4ee4\u5b9e\u73b0\u4e92\u65a5"':!0}),"while (TestAndSet (&lock)); // \u4e0a\u9501\u5e76\u68c0\u67e5\n\u4e34\u754c\u533a;\nlock = false; // \u89e3\u9501\n\u5269\u4f59\u533a;\n")),Object(l.b)("p",{parentName:"blockquote"},"\u4f18\u7f3a\u70b9")),Object(l.b)("blockquote",null,Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"\u4f18\u70b9\uff1a",Object(l.b)("inlineCode",{parentName:"li"},"\u68c0\u67e5")," \u3001",Object(l.b)("inlineCode",{parentName:"li"},"\u4e0a\u9501")," \u5408\u5e76\u4e3a\u539f\u5b50\u64cd\u4f5c\uff0c\u5b9e\u73b0\u7b80\u5355\uff0c\u65e0\u9700\u50cf\u8f6f\u4ef6\u5b9e\u73b0\u65b9\u6cd5\u90a3\u6837\u4e25\u683c\u68c0\u67e5\u662f\u5426\u6709\u903b\u8f91\u6f0f\u6d1e\uff1b\u9002\u7528\u4e8e\u591a\u5904\u7406\u673a\u73af\u5883"),Object(l.b)("li",{parentName:"ul"},"\u7f3a\u70b9\uff1a\u4e0d\u6ee1\u8db3 ",Object(l.b)("inlineCode",{parentName:"li"},"\u8ba9\u6743\u7b49\u5f85")," \u539f\u5219\uff0c\u6682\u65f6\u65e0\u6cd5\u8fdb\u5165\u4e34\u754c\u533a\u7684\u8fdb\u7a0b\u4f1a\u5360\u7528 CPU \u5e76\u5faa\u73af\u81ea\u65cb\uff0c\u5bfc\u81f4 ",Object(l.b)("inlineCode",{parentName:"li"},"\u5fd9\u7b49\u5f85")))),Object(l.b)("h2",{id:"swap-\u6307\u4ee4-xchg-\u6307\u4ee4"},"Swap \u6307\u4ee4 (XCHG \u6307\u4ee4)"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u7b97\u6cd5\u601d\u60f3"),Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"Swap \u6307\u4ee4\u901a\u8fc7\u786c\u4ef6\u5b9e\u73b0\uff0c\u4fdd\u8bc1\u539f\u5b50\u6027"),Object(l.b)("li",{parentName:"ul"},"\u4e5f\u79f0 Exchange \u6307\u4ee4\u3001XCHG \u6307\u4ee4"))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u7b97\u6cd5\u89c4\u5219"),Object(l.b)("pre",{parentName:"blockquote"},Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),"// Swap \u6307\u4ee4\u7684\u4f5c\u7528\u662f\u4ea4\u6362\u4e24\u4e2a\u53d8\u91cf\u7684\u503c\nSwap (bool *a, bool *b) {\n    bool temp;\n    temp = *a;\n    *a = *b;\n    *b = temp;\n}\n")),Object(l.b)("pre",{parentName:"blockquote"},Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c",metastring:'title="\u4f7f\u7528 Swap \u6307\u4ee4\u5b9e\u73b0\u4e92\u65a5"',title:'"\u4f7f\u7528',Swap:!0,'\u6307\u4ee4\u5b9e\u73b0\u4e92\u65a5"':!0}),"// lock \u8868\u793a\u5f53\u524d\u4e34\u754c\u533a\u662f\u5426\u88ab\u52a0\u9501\nbool old = true;\nwhile (old == true) Swap(&lock, &old);\n\u4e34\u754c\u533a;\nlock = false;\n\u5269\u4f59\u533a;\n")),Object(l.b)("p",{parentName:"blockquote"},"\u4f18\u7f3a\u70b9")),Object(l.b)("blockquote",null,Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"\u4f18\u70b9\uff1a",Object(l.b)("inlineCode",{parentName:"li"},"\u68c0\u67e5")," \u3001",Object(l.b)("inlineCode",{parentName:"li"},"\u4e0a\u9501")," \u5408\u5e76\u4e3a\u539f\u5b50\u64cd\u4f5c\uff0c\u5b9e\u73b0\u7b80\u5355\uff0c\u65e0\u9700\u50cf\u8f6f\u4ef6\u5b9e\u73b0\u65b9\u6cd5\u90a3\u6837\u4e25\u683c\u68c0\u67e5\u662f\u5426\u6709\u903b\u8f91\u6f0f\u6d1e\uff1b\u9002\u7528\u4e8e\u591a\u5904\u7406\u673a\u73af\u5883"),Object(l.b)("li",{parentName:"ul"},"\u7f3a\u70b9\uff1a\u4e0d\u6ee1\u8db3 ",Object(l.b)("inlineCode",{parentName:"li"},"\u8ba9\u6743\u7b49\u5f85")," \u539f\u5219\uff0c\u6682\u65f6\u65e0\u6cd5\u8fdb\u5165\u4e34\u754c\u533a\u7684\u8fdb\u7a0b\u4f1a\u5360\u7528 CPU \u5e76\u5faa\u73af\u81ea\u65cb\uff0c\u5bfc\u81f4 ",Object(l.b)("inlineCode",{parentName:"li"},"\u5fd9\u7b49\u5f85")))))}p.isMDXComponent=!0},576:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),b=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,b=function(e,t){if(null==e)return{};var n,a,b={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var i=b.a.createContext({}),p=function(e){var t=b.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return b.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=b.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=p(n),j=a,m=u["".concat(c,".").concat(j)]||u[j]||O[j]||l;return n?b.a.createElement(m,r(r({ref:t},i),{},{components:n})):b.a.createElement(m,r({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=j;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:a,c[1]=r;for(var i=2;i<l;i++)c[i]=n[i];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);