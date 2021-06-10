(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return O}));var a=n(2),b=n(6),r=(n(0),n(472)),c={id:"2.kmp",title:"KMP",hide_title:!0},i={unversionedId:"sf/\u4e32/2.kmp",id:"sf/\u4e32/2.kmp",isDocsHomePage:!1,title:"KMP",description:"KMP",source:"@site/datastructure/sf/\u4e32/kmp.md",slug:"/sf/\u4e32/2.kmp",permalink:"/datastructure/sf/\u4e32/2.kmp",version:"current",sidebar:"docs2",previous:{title:"\u4e32",permalink:"/datastructure/sf/\u4e32/1.sequence"},next:{title:"\u53cc\u6307\u9488\u7b97\u6cd5",permalink:"/datastructure/sf/\u53cc\u6307\u9488/1.duoPoint"}},l=[{value:"KMP",id:"kmp",children:[]},{value:"KMP \u2014\u2014 next \u8868\u7684\u4f7f\u7528",id:"kmp--next-\u8868\u7684\u4f7f\u7528",children:[]},{value:"KMP \u6838\u5fc3\u539f\u7406\x01",id:"kmp-\u6838\u5fc3\u539f\u7406\x01",children:[]},{value:"KMP\u2014\u2014\u771f\u524d\u7f00\u540e\u7f00\u7684\u6700\u5927\u516c\u5171\u5b50\u4e32\u957f\u5ea6",id:"kmp\u771f\u524d\u7f00\u540e\u7f00\u7684\u6700\u5927\u516c\u5171\u5b50\u4e32\u957f\u5ea6",children:[{value:"\u5f97\u5230 next \u8868",id:"\u5f97\u5230-next-\u8868",children:[]}]},{value:"\u6784\u5efa next \u8868",id:"\u6784\u5efa-next-\u8868",children:[]},{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",children:[]}],p={rightToc:l};function O(e){var t=e.components,c=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,c,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"kmp"},"KMP"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"KMP")," \u662f ",Object(r.b)("inlineCode",{parentName:"strong"},"Knuth-Morris-Pratt")," \u7684\u7b80\u79f0\uff0c\u53d6\u81ea\u4e09\u4f4d\u53d1\u660e\u4eba\u7684\u540d\u5b57\uff0c\u4e8e 1977 \u5e74\u63d0\u51fa"))),Object(r.b)("img",{src:n(634).default,style:{zoom:"40%",border:"0px black solid"}}),Object(r.b)("p",null,"\u76f4\u63a5\u8df3\u5230\u4e0b\u4e00\u4e2a\u4ee5 ",Object(r.b)("inlineCode",{parentName:"p"},"1")," \u5f00\u5934\u7684\u4f4d\u7f6e"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u4e0e\u86ee\u529b\u6cd5\u76f8\u6bd4\uff0cKMP \u7684\u7cbe\u5999\u4e4b\u5904\u5728\u4e8e\uff1a\u5145\u5206\u5229\u7528\u5148\u524d\u6bd4\u8f83\u8fc7\u7684\u5185\u5bb9\uff0c\u53ef\u4ee5\u806a\u660e\u5730\u8df3\u8fc7\u4e00\u4e9b\u4e0d\u5fc5\u8981\u6bd4\u8f83\u7684\u4f4d\u7f6e")),Object(r.b)("br",null),Object(r.b)("h1",{id:"kmp--next-\u8868\u7684\u4f7f\u7528"},"KMP \u2014\u2014 next \u8868\u7684\u4f7f\u7528"),Object(r.b)("blockquote",null,Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"KMP \u4f1a\u9884\u5148\u6839\u636e ",Object(r.b)("inlineCode",{parentName:"li"},"\u6a21\u5f0f\u4e32")," \u7684\u5185\u5bb9\u751f\u6210\u4e00\u5f20 ",Object(r.b)("inlineCode",{parentName:"li"},"next")," \u8868\uff08\u4e00\u822c\u662f\u4e00\u4e2a\u6570\u7ec4\uff09"),Object(r.b)("li",{parentName:"ul"},"\u5bf9\u4e8e\u6a21\u5f0f\u4e32 ",Object(r.b)("inlineCode",{parentName:"li"},"ABCDABCE"),"\uff0c\u5176 ",Object(r.b)("inlineCode",{parentName:"li"},"next")," \u8868\u4e3a\uff1a")),Object(r.b)("table",{parentName:"blockquote"},Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u6a21\u5f0f\u4e32\u5b57\u7b26"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"A"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"B"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"C"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"D"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"A"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"B"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"C"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"E"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u7d22\u5f15"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"0"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"1"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"2"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"3"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"4"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"5"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"6"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"7")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5143\u7d20"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"-1"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"0"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"0"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"0"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"0"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"1"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"2"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"3"))))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u5982\u679c\u9047\u5230\u4e86\u5728 \u6a21\u5f0f\u4e32 \u7684\u9760\u540e\u4f4d\u7f6e\u5339\u914d\u5931\u8d25\u7684\u60c5\u51b5")),Object(r.b)("img",{src:n(635).default,style:{zoom:"40%",border:"0px black solid"}}),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u5bf9\u4e8e\u86ee\u529b\u6cd5\uff0c\u9700\u8981\u5c06 ",Object(r.b)("inlineCode",{parentName:"li"},"pi")," \u6e05\u96f6\uff0c",Object(r.b)("inlineCode",{parentName:"li"},"ti")," \u56de\u9000\uff0c\u4e2d\u95f4\u6bd4\u8f83\u64cd\u4f5c\u5168\u90e8\u76f8\u5f53\u4e8e\u767d\u505a"),Object(r.b)("li",{parentName:"ul"},"KMP \u5219\u4f1a\u67e5\u8be2 ",Object(r.b)("inlineCode",{parentName:"li"},"next")," \u8868\uff0c\u6839\u636e ",Object(r.b)("inlineCode",{parentName:"li"},"\u6a21\u5f0f\u4e32\u51fa\u73b0\u5339\u914d\u5931\u8d25\u7684\u5b57\u7b26\u7d22\u5f15\u2014\u2014 pi"),"\uff0c\u5728 ",Object(r.b)("inlineCode",{parentName:"li"},"next")," \u8fdb\u884c\u67e5\u8be2\u3002\u5bf9\u4e8e\u6b64\u5904\u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"pi = 7")," \u548c\u4e0a\u6587\u7ed9\u51fa\u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"next")," \u8868\uff0c\u660e\u663e\u53ef\u77e5\u6b64\u65f6\u4ece\u8868\u4e2d\u67e5\u51fa\u7684\u503c\u662f ",Object(r.b)("inlineCode",{parentName:"li"},"3")," "),Object(r.b)("li",{parentName:"ul"},"\u5927\u5e45\u79fb\u52a8 ",Object(r.b)("inlineCode",{parentName:"li"},"\u6a21\u5f0f\u4e32"),"\uff0c\u76f4\u63a5\u8df3\u8fc7 ",Object(r.b)("inlineCode",{parentName:"li"},"\u6587\u672c\u4e32")," \u7684\u90e8\u5206\u5b57\u7b26\uff0c\u901a\u8fc7 ",Object(r.b)("inlineCode",{parentName:"li"},"pi - next[pi]")," \u5b9e\u73b0\uff0c\u6b64\u5904\u7b49\u4e8e ",Object(r.b)("inlineCode",{parentName:"li"},"7 - 3 = 4"),Object(r.b)("img",{src:n(636).default,style:{zoom:"40%",border:"0px black solid"}})),Object(r.b)("li",{parentName:"ul"},"\u63a5\u4e0b\u6765\u5c06 ",Object(r.b)("inlineCode",{parentName:"li"},"next[pi]")," \u7684\u503c\u8d4b\u503c\u7ed9 ",Object(r.b)("inlineCode",{parentName:"li"},"pi"),"\uff0c\u5373 ",Object(r.b)("inlineCode",{parentName:"li"},"pi = next[pi]"),"\uff0c\u6b64\u65f6 ",Object(r.b)("inlineCode",{parentName:"li"},"pi = 3"),"\u3002\u8fbe\u5230\u7684\u6548\u679c\u4e3a ",Object(r.b)("strong",{parentName:"li"},"\u4ece\u6a21\u5f0f\u4e32\u5148\u524d\u5b9e\u914d\u7684\u4f4d\u7f6e\u5f00\u59cb\u6bd4\u8f83\uff0c\u5148\u524d\u5339\u914d\u6210\u529f\u7684\u5b57\u7b26\u76f4\u63a5\u4e0d\u6bd4\u4e86"),Object(r.b)("img",{src:n(637).default,style:{zoom:"40%",border:"0px black solid"}})))),Object(r.b)("br",null),Object(r.b)("h1",{id:"kmp-\u6838\u5fc3\u539f\u7406\x01"},"KMP \u6838\u5fc3\u539f\u7406\x01"),Object(r.b)("img",{src:n(638).default,style:{zoom:"40%",border:"0px black solid"}}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"A"),"\u3001",Object(r.b)("inlineCode",{parentName:"li"},"B")," \u4e3a\u5b50\u4e32\uff1b",Object(r.b)("inlineCode",{parentName:"li"},"c"),"\u3001",Object(r.b)("inlineCode",{parentName:"li"},"d"),"\u3001",Object(r.b)("inlineCode",{parentName:"li"},"e")," \u4e3a\u5355\u4e2a\u5b57\u7b26"),Object(r.b)("li",{parentName:"ul"},"\u5f53 ",Object(r.b)("inlineCode",{parentName:"li"},"d"),"\u3001",Object(r.b)("inlineCode",{parentName:"li"},"e")," \u5931\u914d\u65f6\uff0c\u5982\u679c\u5e0c\u671b ",Object(r.b)("inlineCode",{parentName:"li"},"\u6a21\u5f0f\u4e32")," \u80fd\u591f\u4e00\u6b21\u6027\u5411\u53f3\u79fb\u52a8\u4e00\u5927\u6bb5\u8ddd\u79bb\uff0c\u7136\u540e\u76f4\u63a5\u6bd4\u8f83 ",Object(r.b)("inlineCode",{parentName:"li"},"d"),"\u3001",Object(r.b)("inlineCode",{parentName:"li"},"c")," \u5b57\u7b26",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u524d\u63d0\u6761\u4ef6\u662f ",Object(r.b)("inlineCode",{parentName:"strong"},"A\u4e32")," \u5fc5\u987b\u7b49\u4e8e ",Object(r.b)("inlineCode",{parentName:"strong"},"B\u4e32"))))),Object(r.b)("li",{parentName:"ul"},"\u56e0\u6b64\uff0cKMP \u5fc5\u987b\u5728\u5931\u914d\u5b57\u7b26 ",Object(r.b)("inlineCode",{parentName:"li"},"e")," \u5de6\u8fb9\u7684\u5b50\u4e32\u4e2d\u627e\u51fa\u7b26\u5408\u6761\u4ef6\u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"A"),"\u3001",Object(r.b)("inlineCode",{parentName:"li"},"B"),"\uff0c\u4ece\u800c\u5f97\u77e5\u5411\u53f3\u79fb\u52a8\u7684\u8ddd\u79bb"),Object(r.b)("li",{parentName:"ul"},"\u5411\u53f3\u79fb\u52a8\u7684\u8bb0\u5f55\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"e\u5de6\u8fb9\u5b57\u7b26\u4e32\u7684\u957f\u5ea6 - A\u4e32\u7684\u957f\u5ea6 = e\u7684\u7d22\u5f15 - c\u7684\u7d22\u5f15")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"c\u7684\u7d22\u5f15"),"\uff1a\u7b49\u4e8e ",Object(r.b)("inlineCode",{parentName:"li"},"next[e\u7684\u7d22\u5f15]"),"\uff0c\u6240\u4ee5\u5411\u53f3\u79fb\u52a8\u7684\u8ddd\u79bb\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"e\u7684\u7d22\u5f15 - next[e\u7684\u7d22\u5f15]"))),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u603b\u7ed3")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"\u5982\u679c\u5728 ",Object(r.b)("inlineCode",{parentName:"li"},"pi")," \u4f4d\u7f6e\u5931\u914d\uff0c\u5411\u53f3\u79fb\u52a8\u7684\u8ddd\u79bb\u662f ",Object(r.b)("inlineCode",{parentName:"li"},"pi - next[pi]"),"\uff0c\u6240\u4ee5 ",Object(r.b)("inlineCode",{parentName:"li"},"next[pi]")," \u8d8a\u5c0f\uff0c\u79fb\u52a8\u5e45\u5ea6\u8d8a\u5927"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"next[pi]")," \u662f ",Object(r.b)("inlineCode",{parentName:"strong"},"pi")," \u5de6\u8fb9\u5b50\u4e32\u7684\u771f\u524d\u7f00\u540e\u7f00\u7684\u6700\u5927\u516c\u5171\u5b50\u4e32\u957f\u5ea6"))))),Object(r.b)("br",null),Object(r.b)("h1",{id:"kmp\u771f\u524d\u7f00\u540e\u7f00\u7684\u6700\u5927\u516c\u5171\u5b50\u4e32\u957f\u5ea6"},"KMP\u2014\u2014\u771f\u524d\u7f00\u540e\u7f00\u7684\u6700\u5927\u516c\u5171\u5b50\u4e32\u957f\u5ea6"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u6a21\u5f0f\u4e32"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u771f\u524d\u7f00"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u771f\u540e\u7f00"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u6700\u5927\u516c\u5171\u5b50\u4e32\u957f\u5ea6"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"ABCDABCE"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"A\u3001AB\u3001ABC\u3001ABCD\u3001ABCDA\u3001ABCDAB\u3001ABCDABC"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"BCDABCE\u3001CDABCE\u3001DABCE\u3001ABCE\u3001BCE\u3001CE\u3001E"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"ABCDABC"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"A\u3001AB\u3001",Object(r.b)("inlineCode",{parentName:"td"},"ABC"),"\u3001ABCD\u3001ABCDA\u3001ABCDAB"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"BCDABC\u3001CDABC\u3001DABC\u3001",Object(r.b)("inlineCode",{parentName:"td"},"ABC"),"\u3001BC\u3001C"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"ABCDAB"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"A\u3001",Object(r.b)("inlineCode",{parentName:"td"},"AB"),"\u3001ABC\u3001ABCD\u3001ABCDA"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"BCDAB\u3001CDAB\u3001DAB\u3001",Object(r.b)("inlineCode",{parentName:"td"},"AB"),"\u3001B"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"ABCDA"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"A"),"\u3001AB\u3001ABC\u3001ABCD"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"BCDA\u3001CDA\u3001DA\u3001",Object(r.b)("inlineCode",{parentName:"td"},"A")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"1")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"ABCD"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"A\u3001AB\u3001ABC"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"BCD\u3001CD\u3001D"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"ABC"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"A\u3001AB"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"BC\u3001C"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"AB"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"A"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"B"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"A"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"0")))),Object(r.b)("p",null,"\u5c06\u4e0a\u8868\u538b\u7f29\u4e3a\u4e00\u4e2a\u6570\u7ec4"),Object(r.b)("blockquote",null,Object(r.b)("table",{parentName:"blockquote"},Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u6a21\u5f0f\u4e32\u5b57\u7b26"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"A"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"B"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"C"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"D"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"A"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"B"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"C"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"E"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u6700\u5927\u516c\u5171\u5b50\u4e32\u957f\u5ea6"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"0"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"0"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"0"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"0"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"1"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"2"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"3"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"0")))),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u7b2c\u4e00\u884c\uff0c\u5230\u54ea\u4e2a\u5b57\u7b26\uff0c\u5c31\u8868\u793a\u4ee5\u8be5\u5b57\u7b26\u7ed3\u5c3e\u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"\u5b50\u4e32")),Object(r.b)("li",{parentName:"ul"},"\u5143\u7d20\u503c\u8868\u793a\u8be5 ",Object(r.b)("inlineCode",{parentName:"li"},"\u5b50\u4e32")," \u5bf9\u5e94\u7684\u5b50\u4e32\u957f\u5ea6")),Object(r.b)("br",null),Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u4f8b\u5982\uff1a\u4e0b\u56fe\u5c31\u8868\u793a ",Object(r.b)("inlineCode",{parentName:"strong"},"\u5b50\u4e32 ABCDABC")," \u5bf9\u5e94\u7684\u771f\u524d\u7f00\u540e\u7f00\u6700\u5927\u516c\u5171\u5b50\u4e32\u957f\u5ea6\u4e3a ",Object(r.b)("inlineCode",{parentName:"strong"},"3"))),Object(r.b)("img",{src:n(639).default,style:{zoom:"40%",border:"0px black solid"}})),Object(r.b)("h2",{id:"\u5f97\u5230-next-\u8868"},"\u5f97\u5230 next \u8868"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u5c06\u6700\u5927\u516c\u5171\u5b50\u4e32\u957f\u5ea6\u90fd\u5411\u53f3\u79fb\u52a8 ",Object(r.b)("inlineCode",{parentName:"strong"},"1")," \u4f4d\uff0c\u9996\u5b57\u7b26\u8bbe\u7f6e\u4e3a ",Object(r.b)("inlineCode",{parentName:"strong"},"-1"),"\uff0c \u5c31\u5f97\u5230\u4e86 next \u8868")),Object(r.b)("table",{parentName:"blockquote"},Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u6a21\u5f0f\u4e32\u5b57\u7b26"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"A"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"B"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"C"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"D"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"A"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"B"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"C"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"E"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u7d22\u5f15"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"0"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"1"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"2"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"3"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"4"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"5"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"6"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"7")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5143\u7d20"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"-1"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"0"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"0"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"0"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"0"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"1"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"2"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"3"))))),Object(r.b)("br",null),Object(r.b)("h1",{id:"\u6784\u5efa-next-\u8868"},"\u6784\u5efa next \u8868"),Object(r.b)("img",{src:n(640).default,style:{zoom:"40%",border:"0px black solid"}}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u5bf9\u4e8e\u4e00\u4e2a\u6a21\u5f0f\u4e32\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"n"),"\u3001",Object(r.b)("inlineCode",{parentName:"p"},"i")," \u4e3a\u56fe\u4e2d\u4e24\u4e2a\u5b57\u7b26\u7684\u4e0b\u6807\uff0c\u5219 ",Object(r.b)("inlineCode",{parentName:"p"},"next[i] == n"),"\uff0c\u56e0\u4e3a next \u8868\u5b58\u50a8\u7740 ",Object(r.b)("inlineCode",{parentName:"p"},"i")," \u7d22\u5f15\u5bf9\u5e94\u5b57\u7b26\u5de6\u4fa7\u5b50\u4e32\u7684\u771f\u524d\u7f00\u540e\u7f00\u6700\u5927\u516c\u5171\u5b50\u4e32\u957f\u5ea6\uff0c\u8be5\u957f\u5ea6\u5728\u6570\u503c\u4e0a\u6070\u597d\u7b49\u4e8e\u7d22\u5f15 ",Object(r.b)("inlineCode",{parentName:"p"},"n")),Object(r.b)("ol",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ol"},"\u5982\u679c ",Object(r.b)("inlineCode",{parentName:"li"},"pattern[i] == pattern[n]"),"\uff0c\u7d22\u5f15 ",Object(r.b)("inlineCode",{parentName:"li"},"i")," \u4f4d\u7f6e\u7684\u5b57\u7b26 \u4e0e \u7d22\u5f15 ",Object(r.b)("inlineCode",{parentName:"li"},"n")," \u4f4d\u7f6e\u7684\u5b57\u7b26 ",Object(r.b)("em",{parentName:"li"},"\u76f8\u540c"),"\uff0c\u5219\uff1a",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"next[i + 1] == n + 1")))),Object(r.b)("li",{parentName:"ol"},"\u5982\u679c ",Object(r.b)("inlineCode",{parentName:"li"},"pattern[i] != pattern[n]"),"\uff0c\u7d22\u5f15 ",Object(r.b)("inlineCode",{parentName:"li"},"i")," \u4f4d\u7f6e\u7684\u5b57\u7b26 \u4e0e \u7d22\u5f15 ",Object(r.b)("inlineCode",{parentName:"li"},"n")," \u4f4d\u7f6e\u7684\u5b57\u7b26 ",Object(r.b)("em",{parentName:"li"},"\u4e0d\u76f8\u540c"),"\uff0c\u5219\uff1a",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5728 ",Object(r.b)("inlineCode",{parentName:"li"},"A\u4e32")," \u53f3\u4fa7\u865a\u62df\u653e\u7f6e\u4e00\u4e2a\u5b57\u7b26\uff0c\u5176\u4e0b\u6807\u7d22\u5f15\u4e3a ",Object(r.b)("inlineCode",{parentName:"li"},"k"),"\uff0c\u5219\u53ef\u8ba4\u4e3a ",Object(r.b)("inlineCode",{parentName:"li"},"A\u4e32")," \u7684\u957f\u5ea6\u4e3a ",Object(r.b)("inlineCode",{parentName:"li"},"k"),Object(r.b)("img",{src:n(641).default,style:{zoom:"40%",border:"0px black solid"}})),Object(r.b)("li",{parentName:"ul"},"\u5219 ",Object(r.b)("inlineCode",{parentName:"li"},"next[n] == k"),"\uff0c\u56e0\u4e3a\u7d22\u5f15 ",Object(r.b)("inlineCode",{parentName:"li"},"n")," \u5de6\u4fa7\u7684\u771f\u524d\u540e\u7f00\u6700\u5927\u516c\u5171\u5b50\u4e32\u6b64\u65f6\u4e3a ",Object(r.b)("inlineCode",{parentName:"li"},"A\u4e32"),"\uff0c\u800c ",Object(r.b)("inlineCode",{parentName:"li"},"A\u4e32")," \u7684\u957f\u5ea6\u4e3a ",Object(r.b)("inlineCode",{parentName:"li"},"k")),Object(r.b)("li",{parentName:"ul"},"\u5982\u679c ",Object(r.b)("inlineCode",{parentName:"li"},"pattern[i] == pattern[k]"),"\uff0c",Object(r.b)("strong",{parentName:"li"},"\u5219\u5982\u56fe\u6240\u793a\uff0c",Object(r.b)("inlineCode",{parentName:"strong"},"next[i + 1] = k + 1")),Object(r.b)("img",{src:n(642).default,style:{zoom:"40%",border:"0px black solid"}})),Object(r.b)("li",{parentName:"ul"},"\u5982\u679c  ",Object(r.b)("inlineCode",{parentName:"li"},"pattern[i] != pattern[k]"),"\uff1a\u5c06 ",Object(r.b)("inlineCode",{parentName:"li"},"k")," \u5e26\u5165 ",Object(r.b)("inlineCode",{parentName:"li"},"n")," \uff0c\u91cd\u590d\u6267\u884c ",Object(r.b)("inlineCode",{parentName:"li"},"2.")))))),Object(r.b)("br",null),Object(r.b)("h1",{id:"\u5b9e\u73b0"},"\u5b9e\u73b0"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:'title="KMP"',title:'"KMP"'}),"public static int indexOf(String text, String pattern) {\n    if (text == null || pattern == null) return -1;\n\n    char[] textChars = text.toCharArray(); // \u8f6c\u6210\u5b57\u7b26\u6570\u7ec4\n    char[] patternChars = pattern.toCharArray();\n\n    int tlen = textChars.length;\n    int plen = patternChars.length;\n    // \u5982\u679c\u6a21\u5f0f\u4e32\u957f\u5ea6\u5927\u4e8e \u6587\u672c\u4e32\u957f\u5ea6 \u8fd4\u56de -1\n    if (tlen == 0 || plen == 0 || plen > tlen) return -1;\n\n    // next \u8868\n    int[] next = next(pattern);\n\n    int pi = 0, ti = 0, lenDelta = tlen - plen;\n    while (pi < plen && ti - pi <= lenDelta) {\n        if (pi < 0 || textChars[ti] == patternChars[pi]) {\n            pi++;\n            ti++;\n        } else { // \u5931\u914d\n            pi = next[pi];\n        }\n    }\n\n    return (pi == plen) ? (ti - pi) : -1;\n}\n\n/**\n * \u751f\u6210\u5e76\u8fd4\u56de next \u8868\n *\n * @param pattern \u6a21\u5f0f\u4e32\n * @return next \u8868\n */\nprivate static int[] next(String pattern) {\n    char[] chars = pattern.toCharArray();\n    int len = chars.length;\n    int[] next = new int[chars.length];\n\n    next[0] = -1;\n    int i = 0;\n    int n = -1;\n    int iMax = len - 1; // \u4e0b\u8868\u6700\u5927\u503c\u4e3a \u957f\u5ea6 - 1\n    while (i < iMax) { // \u6ca1\u6709=\u53f7\uff0c\u56e0\u4e3a\u5faa\u73af\u4f53\u91cc\u6709 ++i\n        if (n < 0 || chars[i] == chars[n]) {\n            next[++i] = ++n;\n        } else {\n            n = next[n];\n        }\n    }\n\n    return next;\n}\n")))}O.isMDXComponent=!0},472:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return o}));var a=n(0),b=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,b=function(e,t){if(null==e)return{};var n,a,b={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var p=b.a.createContext({}),O=function(e){var t=b.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},j=function(e){var t=O(e.components);return b.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},d=b.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),j=O(n),d=a,o=j["".concat(c,".").concat(d)]||j[d]||m[d]||r;return n?b.a.createElement(o,i(i({ref:t},p),{},{components:n})):b.a.createElement(o,i({ref:t},p))}));function o(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<r;p++)c[p]=n[p];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},634:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/8-25a47281f4e91af71d31bc249772c4f9.png"},635:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/11-0d81b3c5e93c543df89152f6436ba377.png"},636:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/10-263a18d65bea014068b2922eb4f697b7.png"},637:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/13-1371193c19dc457c39eb3d8116b4a58b.png"},638:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/12-ce8343894b2add38006675f84fc24e13.png"},639:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/14-6829a967edeb622c203329519c7afe60.png"},640:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/15-5d6ccdf506ab7fe8d5af1231217284bd.png"},641:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/16-9f5312050267d563d23109040bbf1e73.png"},642:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/17-4d07a2d4881b6f5370d977c742cffea4.png"}}]);