(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{274:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return j}));var n=a(2),b=a(6),r=(a(0),a(556)),c={id:"3.longestSubstringWithoutRepeatingCharacters",title:"3.\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32",hide_title:!0},i={unversionedId:"sf/\u5b57\u7b26\u4e32/3.longestSubstringWithoutRepeatingCharacters",id:"sf/\u5b57\u7b26\u4e32/3.longestSubstringWithoutRepeatingCharacters",isDocsHomePage:!1,title:"3.\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32",description:"3.\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32",source:"@site/datastructure/sf/\u5b57\u7b26\u4e32/3.\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32.md",slug:"/sf/\u5b57\u7b26\u4e32/3.longestSubstringWithoutRepeatingCharacters",permalink:"/datastructure/sf/\u5b57\u7b26\u4e32/3.longestSubstringWithoutRepeatingCharacters",version:"current",sidebar:"docs2",previous:{title:"151.\u7ffb\u8f6c\u5b57\u7b26\u4e32\u91cc\u7684\u5355\u8bcd",permalink:"/datastructure/sf/\u5b57\u7b26\u4e32/151.reverseWordsInAString"},next:{title:"344.\u53cd\u8f6c\u5b57\u7b26\u4e32",permalink:"/datastructure/sf/\u53cc\u6307\u9488/344.reverseString"}},l=[{value:"3.\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32",id:"3\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32",children:[{value:"\u9012\u63a8\u6cd5",id:"\u9012\u63a8\u6cd5",children:[]},{value:"\u6ed1\u52a8\u7a97\u53e3\u6cd5",id:"\u6ed1\u52a8\u7a97\u53e3\u6cd5",children:[]}]}],O={rightToc:l};function j(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("br",null),Object(r.b)("h1",{id:"3\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32"},"3.\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/"}),"3. \u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32")),Object(r.b)("p",null,"\u96be\u5ea6 ",Object(r.b)("inlineCode",{parentName:"p"},"\u4e2d\u7b49")),Object(r.b)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u8bf7\u4f60\u627e\u51fa\u5176\u4e2d\u4e0d\u542b\u6709\u91cd\u590d\u5b57\u7b26\u7684 ",Object(r.b)("strong",{parentName:"p"},"\u6700\u957f\u5b50\u4e32")," \u7684\u957f\u5ea6\u3002"),Object(r.b)("p",null,"Given a string s, find the length of the longest substring without repeating characters."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u793a\u4f8b 1:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'\u8f93\u5165: s = "abcabcbb"\n\u8f93\u51fa: 3 \n\u89e3\u91ca: \u56e0\u4e3a\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32\u662f "abc"\uff0c\u6240\u4ee5\u5176\u957f\u5ea6\u4e3a 3\u3002\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u793a\u4f8b 2:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'\u8f93\u5165: s = "bbbbb"\n\u8f93\u51fa: 1\n\u89e3\u91ca: \u56e0\u4e3a\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32\u662f "b"\uff0c\u6240\u4ee5\u5176\u957f\u5ea6\u4e3a 1\u3002\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u793a\u4f8b 3:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'\u8f93\u5165: s = "pwwkew"\n\u8f93\u51fa: 3\n\u89e3\u91ca: \u56e0\u4e3a\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32\u662f "wke"\uff0c\u6240\u4ee5\u5176\u957f\u5ea6\u4e3a 3\u3002\n     \u8bf7\u6ce8\u610f\uff0c\u4f60\u7684\u7b54\u6848\u5fc5\u987b\u662f \u5b50\u4e32 \u7684\u957f\u5ea6\uff0c"pwke" \u662f\u4e00\u4e2a\u5b50\u5e8f\u5217\uff0c\u4e0d\u662f\u5b50\u4e32\u3002\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u793a\u4f8b 4:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'\u8f93\u5165: s = ""\n\u8f93\u51fa: 0\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"0 <= s.length <= 5 * 104")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"s")," \u7531\u82f1\u6587\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u7b26\u53f7\u548c\u7a7a\u683c\u7ec4\u6210")),Object(r.b)("h2",{id:"\u9012\u63a8\u6cd5"},"\u9012\u63a8\u6cd5"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u8bb0\u5f55 \u4ee5\u6bcf\u4e2a\u5b57\u7b26\u7ed3\u5c3e\u7684\u6700\u957f\u65e0\u91cd\u590d\u5b50\u4e32 \u548c \u4ee5\u6bcf\u4e2a\u5b57\u7b26\u7ed3\u5c3e\u7684\u6700\u957f\u65e0\u91cd\u590d\u5b50\u4e32\u957f\u5ea6")),Object(r.b)("p",null,"\u5bf9\u4e8e\u5b57\u7b26\u4e32 ",Object(r.b)("inlineCode",{parentName:"p"},"pwwkew")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"0"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"1"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"2"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"3"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"4"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"5"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"p"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"w"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"w"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"k"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"e"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"w")))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u4f4d\u7f6e"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5b57\u7b26"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u4ee5\u8fd9\u4e2a\u5b57\u7b26\u7ed3\u5c3e\u7684\u6700\u957f\u65e0\u91cd\u590d\u5b50\u4e32"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u4ee5\u8fd9\u4e2a\u5b57\u7b26\u7ed3\u5c3e\u7684\u6700\u957f\u65e0\u91cd\u590d\u5b50\u4e32\u957f\u5ea6"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"p"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"p"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"1")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"w"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"pw"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"2"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"w"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"w"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"1")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"3"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"k"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"wk"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"4"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"e"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"wke"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"5"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"w"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"kew"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"3")))),Object(r.b)("blockquote",null,Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"pi")," \u662f ",Object(r.b)("inlineCode",{parentName:"li"},"s[i]")," \u5b57\u7b26\u4e0a\u4e00\u6b21\u51fa\u73b0\u7684\u4f4d\u7f6e"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"li")," \u662f\u4ee5 ",Object(r.b)("inlineCode",{parentName:"li"},"s[i]")," \u5b57\u7b26\u7ed3\u5c3e\u7684\u6700\u957f\u4e0d\u91cd\u590d\u5b50\u4e32\u7684\u5f00\u59cb\u7d22\u5f15\uff08\u6700\u5de6\u7d22\u5f15\uff09"),Object(r.b)("li",{parentName:"ul"},"\u7528 ",Object(r.b)("inlineCode",{parentName:"li"},"i")," \u904d\u5386\u6574\u4e2a\u5b57\u7b26\u4e32"))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u5c1d\u8bd5\u8ba9 ",Object(r.b)("inlineCode",{parentName:"p"},"li")," \u5411\u5de6\u4fa7\u5ef6\u4f38"),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"li")," \u6307\u5411\u7684\u5b57\u7b26 \u4e0d\u80fd\u7b49\u4e8e \u5f53\u524d ",Object(r.b)("inlineCode",{parentName:"li"},"i")," \u6307\u5411\u7684\u5b57\u7b26\uff0c\u56e0\u6b64\u9700\u8981 ",Object(r.b)("strong",{parentName:"li"},"\u8bb0\u5f55 ",Object(r.b)("inlineCode",{parentName:"strong"},"i")," \u6307\u5411\u5b57\u7b26\u4e0a\u4e00\u6b21\u51fa\u73b0\u7684\u4f4d\u7f6e ",Object(r.b)("inlineCode",{parentName:"strong"},"pi"))))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"0"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"pi"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"li"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"i - 1"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"i"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"D"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"A"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"D"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))),Object(r.b)("p",null,"\u4e0a\u8ff0\u60c5\u51b5\uff1a",Object(r.b)("inlineCode",{parentName:"p"},"pi")," < ",Object(r.b)("inlineCode",{parentName:"p"},"li")," \uff0c\u8bf4\u660e ",Object(r.b)("inlineCode",{parentName:"p"},"[li, i - 1]")," \u4e4b\u95f4\u5fc5\u7136\u6ca1\u6709\u91cd\u590d\u5b57\u7b26\uff0c\u4ee5 ",Object(r.b)("inlineCode",{parentName:"p"},"s[i]")," \u7ed3\u5c3e\u7684\u6700\u957f\u4e0d\u91cd\u590d\u5b50\u4e32\u4e3a ",Object(r.b)("inlineCode",{parentName:"p"},"[li, i]")," "),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"0"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Li"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"pi"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"i - 1"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"i"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"D"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"A"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"D"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))),Object(r.b)("p",null,"\u4e0a\u8ff0\u60c5\u51b5\uff1a ",Object(r.b)("inlineCode",{parentName:"p"},"pi")," > ",Object(r.b)("inlineCode",{parentName:"p"},"li")," \uff0c ",Object(r.b)("inlineCode",{parentName:"p"},"[li, i - 1]")," \u662f\u4ee5 ",Object(r.b)("inlineCode",{parentName:"p"},"s[i - 1]")," \u7ed3\u5c3e\u7684\u4e0d\u91cd\u590d\u5b50\u4e32\u3002\u5219\uff0c\u4ee5 ",Object(r.b)("inlineCode",{parentName:"p"},"s[i]")," \u7ed3\u5c3e\u7684\u6700\u957f\u4e0d\u91cd\u590d\u5b50\u4e32\u4e3a ",Object(r.b)("inlineCode",{parentName:"p"},"[pi + 1, i]")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"0"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"li",Object(r.b)("br",null),"pi"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"i - 1"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"i"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"D"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"A"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"D"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))),Object(r.b)("p",null,"\u4e0a\u8ff0\u60c5\u51b5\uff1a ",Object(r.b)("inlineCode",{parentName:"p"},"pi")," = ",Object(r.b)("inlineCode",{parentName:"p"},"li")," \uff0c\u5219\u4ee5 ",Object(r.b)("inlineCode",{parentName:"p"},"s[i]")," \u7ed3\u5c3e\u7684\u6700\u957f\u4e0d\u91cd\u590d\u5b50\u4e32\u4e3a ",Object(r.b)("inlineCode",{parentName:"p"},"[pi + 1, i]")," \u4e5f\u7b49\u4e8e ",Object(r.b)("inlineCode",{parentName:"p"},"[li + 1, i]")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u7efc\u4e0a\uff0c\u5206\u4e3a\u4e24\u79cd\u60c5\u51b5\u8fdb\u884c\u5b9e\u73b0\uff1a"),Object(r.b)("ol",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"pi < li")," -> ",Object(r.b)("inlineCode",{parentName:"li"},"[li, i]")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"pi \u2265 li")," -> ",Object(r.b)("inlineCode",{parentName:"li"},"[li + 1, i]"))),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u7528 \u54c8\u5e0c\u8868 \u5b58\u50a8\u67d0\u5b57\u7b26\u4e0a\u4e00\u6b21\u51fa\u73b0\u7684\u4f4d\u7f6e"),Object(r.b)("li",{parentName:"ul"},"\u6bcf\u6b21\u5bf9 ",Object(r.b)("inlineCode",{parentName:"li"},"s[i]")," \u8ba1\u7b97\u51fa\u6700\u957f\u4e0d\u91cd\u590d\u5b50\u4e32\u8303\u56f4\u540e\uff0c\u5c06\u5b50\u4e32\u5f00\u59cb\u4f4d\u7f6e\u5b58\u50a8\u5230 ",Object(r.b)("inlineCode",{parentName:"li"},"li")," \u4e2d\uff0c\u7136\u540e ",Object(r.b)("inlineCode",{parentName:"li"},"i++"),"\uff0c\u5bf9\u4e8e\u4e0b\u4e00\u4e2a ",Object(r.b)("inlineCode",{parentName:"li"},"s[i]")," \u800c\u8a00\uff0cli \u5b58\u50a8\u7684\u5c31\u662f ",Object(r.b)("inlineCode",{parentName:"li"},"[li, i - 1]")," \u6700\u957f\u4e0d\u91cd\u590d\u5b50\u4e32\u7684\u5f00\u59cb\u7d22\u5f15"),Object(r.b)("li",{parentName:"ul"},"\u6bcf\u6b21 pi \u4ece HashMap \u67e5\u8be2\u83b7\u5f97",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5982\u679c pi \u4e3a null\uff0c\u8bf4\u660e ",Object(r.b)("inlineCode",{parentName:"li"},"s[i]")," \u5b57\u7b26\u6839\u672c\u6ca1\u51fa\u73b0\u8fc7\uff0c\u90a3\u4e48\u6700\u957f\u4e0d\u91cd\u590d\u5b50\u5e8f\u5217\u5c31\u662f ",Object(r.b)("inlineCode",{parentName:"li"},"[li, i]"),"\uff0c\u90a3\u4e48\u5728\u7a0b\u5e8f\u5b9e\u73b0\u4e0a\u5c31\u8981\u6ee1\u8db3 ",Object(r.b)("inlineCode",{parentName:"li"},"pi < li")," \u90a3\u4e48\u624b\u52a8\u5c06 pi \u8bbe\u7f6e\u7684\u5c3d\u53ef\u80fd\u5c0f \uff08\u5c3d\u53ef\u80fd\u9760\u6570\u7ec4\u7684\u8d77\u59cb\u4fa7\uff09 \u5373\u53ef"),Object(r.b)("li",{parentName:"ul"},"hashMap.getOrDefault(chars","[i]",", -1) \uff1a \u6709\u503c\u5c31\u53d6\u503c\uff0c\u6ca1\u503c\u4e3a null \u7684\u8bdd\uff0c\u7528 ",Object(r.b)("inlineCode",{parentName:"li"},"-1")," \u66ff\u6362"))))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"public int lengthOfLongestSubstring(String s) {\n    if (s.length() == 0) return 0;\n    // pi \u5b58\u653e\u6bcf\u4e00\u4e2a\u5b57\u7b26\u4e0a\u4e00\u6b21\u51fa\u73b0\u7684\u4f4d\u7f6e\n    Map<Character, Integer> preIndexes = new HashMap<>();\n    char[] chars = s.toCharArray();\n    preIndexes.put(chars[0], 0);\n\n    int maxLen = 1;\n    int li = 0; // \u6700\u521d\u7684 i = 1 \uff0c \u90a3\u4e48\u6700\u521d\u7684 i-1 \u5c31\u662f 0\n    // \u56e0\u4e3a\u7b97\u6cd5\u6267\u884c\u5230 i \u65f6\uff0c\u9700\u8981\u7528 i - 1 \u548c li \u4e4b\u7c7b\u7684\u4e1c\u897f\uff0c\u6240\u4ee5\u5e94\u5f53\u4ece 1 \u5f00\u59cb\u904d\u5386\n    for (int i = 1; i < chars.length; i++) {\n        // i \u5b57\u7b26\u4e0a\u4e00\u6b21\u51fa\u73b0\u7684\u4f4d\u7f6e\n        int pi = preIndexes.getOrDefault(chars[i], -1);\n\n        if (pi >= li)\n            li = pi + 1; // \u8986\u76d6 li \u7684\u503c\n\n        // \u628a\u672c\u6b21\u5b57\u7b26\u51fa\u73b0\u7684\u4f4d\u7f6e\u5b58\u50a8\u5230 Map\n        preIndexes.put(chars[i], i);\n        maxLen = Math.max(i - li + 1, maxLen);\n    }\n\n    return maxLen;\n}\n")),Object(r.b)("h2",{id:"\u6ed1\u52a8\u7a97\u53e3\u6cd5"},"\u6ed1\u52a8\u7a97\u53e3\u6cd5"),Object(r.b)("blockquote",null,Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"HashMap \u8bb0\u5f55\u6bcf\u4e2a\u5b57\u7b26\u6700\u540e\u4e00\u6b21\u51fa\u73b0\u7684\u4f4d\u7f6e"),Object(r.b)("li",{parentName:"ul"},"\u5047\u60f3\u4e00\u4e2a\u6ed1\u52a8\u7a97\u53e3\uff0c\u5176\u4e2d\u5305\u542b\u7740\u6700\u957f\u4e0d\u91cd\u590d\u5b50\u4e32",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"left")," \u4e3a\u6ed1\u52a8\u7a97\u53e3\u7684\u6700\u5de6\u4fa7\u4f4d\u7f6e"),Object(r.b)("li",{parentName:"ul"},"\u7528 ",Object(r.b)("inlineCode",{parentName:"li"},"i")," \u904d\u5386\u5b57\u7b26\u4e32\uff0c\u53d1\u73b0\u91cd\u590d\u5b57\u7b26\u5c31\u8c03\u6574 ",Object(r.b)("inlineCode",{parentName:"li"},"left")," \u7684\u503c\uff0c\u628a\u91cd\u590d\u90e8\u5206\u79fb\u51fa\u6ed1\u52a8\u7a97\u53e3"))),Object(r.b)("li",{parentName:"ul"},"\u53d6\u8fc7\u7a0b\u4e2d\u6ed1\u52a8\u7a97\u53e3\u957f\u5ea6\u7684\u6700\u5927\u503c\uff1aMax {i - left + 1}"))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"public int lengthOfLongestSubstring(String s) {\n    if (s.length() < 2) return s.length();\n\n    // HashMap \u5b58\u50a8\u6bcf\u4e2a\u5b57\u7b26\u6700\u540e\u51fa\u73b0\u7684\u4f4d\u7f6e\n    int[] charPositions = new int[128]; // ASCII\n\n    for (int i = 0; i < charPositions.length; i++)\n        charPositions[i] = -1;\n\n    int max = 0; // \u6700\u957f\u957f\u5ea6\n    int left = 0; // \u7a97\u53e3\u5de6\u4fa7\u6307\u9488\n\n    char[] chars = s.toCharArray();\n    for (int i = 0; i < chars.length; i++) {\n        if (charPositions[chars[i]] != -1)\n            left = Math.max(left, charPositions[chars[i]] + 1);\n\n        charPositions[chars[i]] = i;\n        max = Math.max(max, i - left + 1);\n    }\n\n    return max;\n}\n")))}j.isMDXComponent=!0},556:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return N}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var O=b.a.createContext({}),j=function(e){var t=b.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=j(e.components);return b.a.createElement(O.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},o=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,O=l(e,["components","mdxType","originalType","parentName"]),p=j(a),o=n,N=p["".concat(c,".").concat(o)]||p[o]||m[o]||r;return a?b.a.createElement(N,i(i({ref:t},O),{},{components:a})):b.a.createElement(N,i({ref:t},O))}));function N(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=o;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var O=2;O<r;O++)c[O]=a[O];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"}}]);