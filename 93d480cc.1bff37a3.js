(window.webpackJsonp=window.webpackJsonp||[]).push([[299],{1002:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/8-11d74c9bed90f7453366f360afe4be94.png"},1003:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/9-0e68c80150d9a0d5c9c351dbc2b87c82.png"},356:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return o}));var a=n(2),r=n(6),b=(n(0),n(561)),i={id:"5.longestPalindromicSubstring",title:"5.\u6700\u957f\u56de\u6587\u5b50\u4e32",hide_title:!0},l={unversionedId:"sf/\u52a8\u6001\u89c4\u5212/5.longestPalindromicSubstring",id:"sf/\u52a8\u6001\u89c4\u5212/5.longestPalindromicSubstring",isDocsHomePage:!1,title:"5.\u6700\u957f\u56de\u6587\u5b50\u4e32",description:"5.\u6700\u957f\u56de\u6587\u5b50\u4e32",source:"@site/datastructure/sf/\u52a8\u6001\u89c4\u5212/5.\u6700\u957f\u56de\u6587\u5b50\u4e32.md",slug:"/sf/\u52a8\u6001\u89c4\u5212/5.longestPalindromicSubstring",permalink:"/datastructure/sf/\u52a8\u6001\u89c4\u5212/5.longestPalindromicSubstring",version:"current",sidebar:"docs2",previous:{title:"72.\u7f16\u8f91\u8ddd\u79bb",permalink:"/datastructure/sf/\u52a8\u6001\u89c4\u5212/72.editDistance"},next:{title:"17.\u7535\u8bdd\u53f7\u7801\u7684\u5b57\u6bcd\u7ec4\u5408",permalink:"/datastructure/sf/dfs/17.letterCombinationsofaPhoneNumber"}},c=[{value:"5.\u6700\u957f\u56de\u6587\u5b50\u4e32",id:"5\u6700\u957f\u56de\u6587\u5b50\u4e32",children:[{value:"\u66b4\u529b\u6cd5",id:"\u66b4\u529b\u6cd5",children:[]},{value:"\u52a8\u6001\u89c4\u5212",id:"\u52a8\u6001\u89c4\u5212",children:[]},{value:"\u6269\u5c55\u4e2d\u5fc3\u6cd5",id:"\u6269\u5c55\u4e2d\u5fc3\u6cd5",children:[]}]}],p={rightToc:c};function o(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(b.b)("br",null),Object(b.b)("h1",{id:"5\u6700\u957f\u56de\u6587\u5b50\u4e32"},"5.\u6700\u957f\u56de\u6587\u5b50\u4e32"),Object(b.b)("p",null,Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://leetcode-cn.com/problems/longest-palindromic-substring/"}),"5. \u6700\u957f\u56de\u6587\u5b50\u4e32")),Object(b.b)("p",null,"\u96be\u5ea6 ",Object(b.b)("inlineCode",{parentName:"p"},"\u4e2d\u7b49")),Object(b.b)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32 ",Object(b.b)("inlineCode",{parentName:"p"},"s"),"\uff0c\u627e\u5230 ",Object(b.b)("inlineCode",{parentName:"p"},"s")," \u4e2d\u6700\u957f\u7684\u56de\u6587\u5b50\u4e32\u3002"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),'\u8f93\u5165\uff1as = "babad"\n\u8f93\u51fa\uff1a"bab"\n\u89e3\u91ca\uff1a"aba" \u540c\u6837\u662f\u7b26\u5408\u9898\u610f\u7684\u7b54\u6848\u3002\n')),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),'\u8f93\u5165\uff1as = "cbbd"\n\u8f93\u51fa\uff1a"bb"\n')),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u793a\u4f8b 3\uff1a")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),'\u8f93\u5165\uff1as = "a"\n\u8f93\u51fa\uff1a"a"\n')),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u793a\u4f8b 4\uff1a")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),'\u8f93\u5165\uff1as = "ac"\n\u8f93\u51fa\uff1a"a"\n')),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"1 <= s.length <= 1000")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"s")," \u4ec5\u7531\u6570\u5b57\u548c\u82f1\u6587\u5b57\u6bcd\uff08\u5927\u5199\u548c/\u6216\u5c0f\u5199\uff09\u7ec4\u6210")),Object(b.b)("h2",{id:"\u66b4\u529b\u6cd5"},"\u66b4\u529b\u6cd5"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"0"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"1"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"2"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"3"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"4"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"5"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"a"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"b"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"b"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"a"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"b"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"a")))),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u601d\u8def"),Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},"\u627e\u51fa\u6240\u6709\u7684\u5b50\u4e32"),Object(b.b)("li",{parentName:"ul"},"\u5bf9\u6bcf\u4e2a\u5b57\u6bb5\u5224\u65ad\u662f\u4e0d\u662f\u56de\u6587\u4e32"),Object(b.b)("li",{parentName:"ul"},"\u8bb0\u5f55\u56de\u6587\u4e32\u7684\u6700\u5927\u957f\u5ea6")),Object(b.b)("p",{parentName:"blockquote"},"\u5b9e\u73b0"),Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},"\u53cc\u6307\u9488 begin \u3001 end \u6846\u9009\u51fa\u5b50\u4e32\u8303\u56f4"),Object(b.b)("li",{parentName:"ul"},"\u5217\u4e3e\u51fa\u6240\u6709\u5b50\u4e32\uff1a\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a O(n ^ 2)"),Object(b.b)("li",{parentName:"ul"},"\u9488\u5bf9\u6bcf\u4e00\u4e2a\u5b50\u4e32\uff0c\u68c0\u67e5\u5176\u662f\u5426\u4e3a\u56de\u6587\u4e32\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a O(n)"),Object(b.b)("li",{parentName:"ul"},"\u603b\u65f6\u95f4\u590d\u6742\u5ea6 O(n ^ 3)\uff0c \u7a7a\u95f4\u590d\u6742\u5ea6 O(1)"))),Object(b.b)("h2",{id:"\u52a8\u6001\u89c4\u5212"},"\u52a8\u6001\u89c4\u5212"),Object(b.b)("img",{src:n(1002).default,style:{zoom:"40%",boxShadow:"0px 0px 0px #333333",borderRadius:"19px"}})," ",Object(b.b)("br",null),Object(b.b)("blockquote",null,Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},"\u5047\u8bbe\u5b57\u7b26\u4e32 ",Object(b.b)("inlineCode",{parentName:"li"},"babad")," \u4e3a ",Object(b.b)("inlineCode",{parentName:"li"},"s"),"\uff0c\u957f\u5ea6\u4e3a ",Object(b.b)("inlineCode",{parentName:"li"},"n")),Object(b.b)("li",{parentName:"ul"},"dp \u662f \u5927\u5c0f\u4e3a ",Object(b.b)("inlineCode",{parentName:"li"},"n*n")," \u7684\u4e8c\u7ef4\u6570\u7ec4\uff0c",Object(b.b)("inlineCode",{parentName:"li"},"dp[i][j]")," \u8868\u793a ",Object(b.b)("inlineCode",{parentName:"li"},"s[i][j]")," \u662f\u5426\u4e3a\u56de\u6587\u4e32\uff0c\u662f\u5b58\u50a8 true\uff0c\u4e0d\u662f\u5b58\u50a8 false"),Object(b.b)("li",{parentName:"ul"},"\u5bf9\u89d2\u7ebf\u5143\u7d20\u8868\u793a\uff0c\u4ece\u67d0\u4e2a\u5b57\u6bcd\u5230\u67d0\u4e2a\u5b57\u6bcd\uff0c\u4e5f\u5c31\u662f\u53ea\u6709\u4e00\u4e2a\u5b57\u6bcd\uff0c\u6240\u4ee5\u5fc5\u7136\u662f\u56de\u6587\u4e32"),Object(b.b)("li",{parentName:"ul"},"\u5de6\u4e0b\u89d2\u4e3a\u7a7a\uff0c\u56e0\u4e3a\u5de6\u4e0b\u89d2\u90e8\u5206\u8868\u793a\u5012\u7740\u622a\u53d6\u5b57\u7b26\u4e32\uff0c\u8fd9\u4e0d\u5408\u7406\uff0c\u53ea\u9700\u8981\u4ece\u5de6\u5230\u53f3\u6b63\u7740\u622a\u53d6\u5b57\u7b26\u4e32\u5c31\u884c\u4e86"),Object(b.b)("li",{parentName:"ul"},"\u7efc\u4e0a\u5e94\u5f53\u6ee1\u8db3 ",Object(b.b)("inlineCode",{parentName:"li"},"j \u2265 i")),Object(b.b)("li",{parentName:"ul"},"\u6700\u7ec8\u67e5\u770b\u503c\u4e3a ",Object(b.b)("inlineCode",{parentName:"li"},"true")," \u7684\u683c\u5b50\uff0c\u53d6 ",Object(b.b)("inlineCode",{parentName:"li"},"j - i + 1")," \u7684\u6700\u5927\u503c"))),Object(b.b)("blockquote",null,Object(b.b)("h3",Object(a.a)({parentName:"blockquote"},{id:"\u5982\u4f55\u6c42-dpij-\u7684\u503c"}),"\u5982\u4f55\u6c42 ",Object(b.b)("inlineCode",{parentName:"h3"},"dp[i][j]")," \u7684\u503c"),Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},"\u4e24\u79cd\u60c5\u51b5\uff1a",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5982\u679c ",Object(b.b)("inlineCode",{parentName:"li"},"s[i][j]")," \u7684\u957f\u5ea6 ",Object(b.b)("inlineCode",{parentName:"li"},"j - i + 1")," \u2264 2\uff1a\u8fd4\u56de ",Object(b.b)("inlineCode",{parentName:"li"},"s[i]")," == ",Object(b.b)("inlineCode",{parentName:"li"},"s[j]"),"\uff1a\u4e24\u4e2a\u5b57\u7b26\u76f8\u7b49\u5c31\u662f\u56de\u6587\u4e32",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5373\uff1a ",Object(b.b)("inlineCode",{parentName:"li"},"dp[i][j]")," = ",Object(b.b)("inlineCode",{parentName:"li"},"s[i]")," == ",Object(b.b)("inlineCode",{parentName:"li"},"s[j]")))),Object(b.b)("li",{parentName:"ul"},"\u5982\u679c ",Object(b.b)("inlineCode",{parentName:"li"},"s[i][j]")," \u7684\u957f\u5ea6 ",Object(b.b)("inlineCode",{parentName:"li"},"j - i + 1")," \uff1e 2\uff1a",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5982\u679c ",Object(b.b)("inlineCode",{parentName:"li"},"s[i + 1, j - 1]")," \u662f\u56de\u6587\u4e32\uff0c\u4e14 ",Object(b.b)("inlineCode",{parentName:"li"},"s[i]")," \u7b49\u4e8e ",Object(b.b)("inlineCode",{parentName:"li"},"s[j]"),"\uff0c\u90a3\u4e48 ",Object(b.b)("inlineCode",{parentName:"li"},"s[i, j]")," \u662f\u56de\u6587\u4e32\uff08\u53bb\u6389 i, j \u6307\u5411\u7684\u5b57\u7b26\uff0c\u770b\u4e2d\u95f4\u5939\u4f4f\u7684\u4e00\u6bb5\u662f\u4e0d\u662f\u56de\u6587\u4e32\uff0c\u5982\u679c\u662f\uff0c\u5c31\u770b i, j \u662f\u4e0d\u662f\u76f8\u540c\u7684\u5b57\u7b26\uff0c\u5982\u679c\u662f\uff0c\u90a3\u4e48 ",Object(b.b)("inlineCode",{parentName:"li"},"s[i, j]")," \u5c31\u662f\u56de\u6587\u4e32\u4e86\uff09"),Object(b.b)("li",{parentName:"ul"},"\u5373\uff1a ",Object(b.b)("inlineCode",{parentName:"li"},"dp[i][j]")," = ",Object(b.b)("inlineCode",{parentName:"li"},"dp[i + 1][j - 1]")," && (",Object(b.b)("inlineCode",{parentName:"li"},"s[i]")," == ",Object(b.b)("inlineCode",{parentName:"li"},"s[j]"),")")))))),Object(b.b)("h3",Object(a.a)({parentName:"blockquote"},{id:"\u5982\u4f55\u5f97\u5230\u6700\u957f\u56de\u6587\u5b50\u4e32\u957f\u5ea6"}),"\u5982\u4f55\u5f97\u5230\u6700\u957f\u56de\u6587\u5b50\u4e32\u957f\u5ea6"),Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},"\u6bcf\u5f53\u67d0\u4e2a ",Object(b.b)("inlineCode",{parentName:"li"},"dp[i][j]")," \u7684\u503c\u4e3a ",Object(b.b)("inlineCode",{parentName:"li"},"true")," \u5c31\u53bb\u770b\u5176\u5bf9\u5e94\u7684\u5b50\u4e32 ",Object(b.b)("inlineCode",{parentName:"li"},"s[i, j]")," \u7684\u957f\u5ea6"),Object(b.b)("li",{parentName:"ul"},"\u8bb0\u5f55\u6700\u5927\u957f\u5ea6"))),Object(b.b)("div",{className:"admonition admonition-info alert alert--info"},Object(b.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u6ce8\u610f")),Object(b.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"\u5b9e\u73b0\u65f6\uff0c\u5e94\u5f53\u4ece\u4e0b\u5f80\u4e0a\uff0c\u4ece\u5de6\u5f80\u53f3\u8ba1\u7b97\u6bcf\u4e2a\u683c\u5b50"))),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public static String longestPalindrome(String s) {\n    if (s.length() == 1) return s;\n\n    char[] chars = s.toCharArray();\n\n    boolean[][] dp = new boolean[chars.length][chars.length];\n\n    int maxSubStrLen = 0; // \u6700\u5927\u56de\u6587\u5b50\u4e32\u7684\u957f\u5ea6\n    int maxSubStrI = 0; // \u6700\u5927\u56de\u6587\u5b50\u4e32\u7b2c\u4e00\u4e2a\u5b57\u7b26\u7684\u4e0b\u6807\n\n    for (int i = chars.length - 1; i >= 0; i--) {\n        for (int j = i; j < chars.length; j++) {\n            int currentSubStrLen = j - i + 1;\n            dp[i][j] = currentSubStrLen <= 2 ? chars[i] == chars[j] : (dp[i + 1][j - 1] && (chars[i] == chars[j]));\n            // \u66f4\u65b0\u6700\u5927\u5b50\u4e32\u957f\u5ea6\n            if (dp[i][j] && (currentSubStrLen > maxSubStrLen)) {\n                maxSubStrLen = currentSubStrLen;\n                maxSubStrI = i;\n            }\n        }\n    }\n\n    return s.substring(maxSubStrI, maxSubStrI + maxSubStrLen);\n}\n")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6 O(n ^ 2)"),Object(b.b)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6 O(n ^ 2)")),Object(b.b)("h2",{id:"\u6269\u5c55\u4e2d\u5fc3\u6cd5"},"\u6269\u5c55\u4e2d\u5fc3\u6cd5"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u7528 i \u904d\u5386\u6570\u7ec4"),Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},"\u5bf9\u6bcf\u4e00\u4e2a\u5b57\u7b26\uff0c\u540c\u65f6\u5411\u4e24\u8fb9\u6269\u5c55\u63a2\u6d4b\uff0c\u770b\u5b57\u7b26\u662f\u4e0d\u662f\u76f8\u7b49",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u76f8\u7b49\uff1a\u7ee7\u7eed\u6269\u5c55\u4e00\u6b65\uff0c\u6301\u7eed\u8fdb\u884c"),Object(b.b)("li",{parentName:"ul"},"\u4e0d\u76f8\u7b49\uff1a\u8bb0\u5f55\u5f53\u524d\u957f\u5ea6\uff0ci++"))),Object(b.b)("li",{parentName:"ul"},"\u904d\u5386\u540e\uff0c\u83b7\u77e5\u4ee5\u6bcf\u4e2a\u5b57\u7b26\u4e3a\u4e2d\u5fc3\u7684\u6700\u5927\u56de\u6587\u5b50\u4e32\u957f\u5ea6"),Object(b.b)("li",{parentName:"ul"},"\u4ece\u4e2d\u6311\u9009\u51fa\u6700\u5927\u503c"))),Object(b.b)("div",{className:"admonition admonition-info alert alert--info"},Object(b.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u95ee\u9898")),Object(b.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"\u8fd9\u4e48\u641e\uff0c\u51fa\u6765\u7684\u56de\u6587\u5b50\u4e32\u957f\u5ea6\u6c38\u8fdc\u662f\u5947\u6570"),Object(b.b)("ul",{parentName:"div"},Object(b.b)("li",{parentName:"ul"},"\u8fd8\u8981\u8003\u8651\u5076\u6570\u7684\u60c5\u51b5"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"\u4ee5\u5b57\u7b26\u95f4\u9699\u4e3a\u4e2d\u5fc3\uff0c\u5411\u5de6\u53f3\u6269\u6563"))))),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u5047\u8bbe\u5b57\u7b26\u4e32 ",Object(b.b)("inlineCode",{parentName:"p"},"abbaba")," \u7684\u957f\u5ea6\u4e3a ",Object(b.b)("inlineCode",{parentName:"p"},"n")," \uff0c \u90a3\u4e48\u4e00\u5171\u6709 ",Object(b.b)("inlineCode",{parentName:"p"},"n + (n - 1)")," == ",Object(b.b)("inlineCode",{parentName:"p"},"2n - 1")," \u4e2a\u6269\u5c55\u4e2d\u5fc3"),Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},"\u4ece\u53f3\u5411\u5de6\u626b\u63cf\u5b57\u7b26\u6570\u7ec4"),Object(b.b)("li",{parentName:"ul"},"\u5f00\u5934\u7684\u7b2c\u4e00\u4e2a\u5b57\u7b26\u5fc5\u5b9a\u53ea\u80fd\u8ddf\u81ea\u5df1\u5f62\u6210\u56de\u6587\u4e32 \uff08\u56e0\u4e3a\u95f4\u9699\u6982\u5ff5\u7684\u5b58\u5728\uff0c\u6240\u4ee5\u4e0d\u8003\u8651\u5b83\u548c\u5de6\u4fa7\u5b57\u7b26\u76f8\u540c\u7684\u60c5\u51b5\uff09"),Object(b.b)("li",{parentName:"ul"},"\u7ed3\u5c3e\u7684\u6700\u540e\u4e00\u4e2a\u5b57\u7b26\u540c\u7406\uff0c",Object(b.b)("strong",{parentName:"li"},"\u56e0\u6b64\u626b\u63cf\u8303\u56f4\u4e3a ",Object(b.b)("inlineCode",{parentName:"strong"},"[1, len - 2]"),"\uff0c\u4f46\u662f",Object(b.b)("inlineCode",{parentName:"strong"},"\u4f1a\u6f0f\u6389\u5de6\u4fa7\u5f00\u59cb\u6570\u7684\u7b2c\u4e00\u4e2a\u95f4\u9699"))),Object(b.b)("li",{parentName:"ul"},"\u7528 ",Object(b.b)("inlineCode",{parentName:"li"},"i")," \u626b\u63cf\u5b57\u7b26\u6570\u7ec4\uff0c\u5bf9\u4e8e\u6bcf\u4e00\u4e2a ",Object(b.b)("inlineCode",{parentName:"li"},"i")," , \u8003\u8651 ",Object(b.b)("strong",{parentName:"li"},"\u4ee5\u5f53\u524d\u6307\u5411\u7684\u5b57\u7b26\u4e3a\u4e2d\u5fc3")," \u548c ",Object(b.b)("strong",{parentName:"li"},"\u4ee5\u5f53\u524d\u6307\u5411\u5b57\u7b26\u53f3\u4fa7\u95f4\u9699\u4e3a\u4e2d\u5fc3")," \u7684\u60c5\u51b5",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5206\u522b\u786e\u5b9a ",Object(b.b)("inlineCode",{parentName:"li"},"\u5de6"),"\u3001",Object(b.b)("inlineCode",{parentName:"li"},"\u53f3")," \u4e24\u4fa7\u5f00\u59cb\u6269\u5c55\u626b\u63cf\u7684 ",Object(b.b)("inlineCode",{parentName:"li"},"\u7d22\u5f15\u4e0b\u6807"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5bf9\u4e8e\u5b57\u7b26\uff1a\u5de6\uff1a",Object(b.b)("inlineCode",{parentName:"li"},"i-1"),"\uff1b\u53f3\uff1a",Object(b.b)("inlineCode",{parentName:"li"},"i+1")),Object(b.b)("li",{parentName:"ul"},"\u5bf9\u4e8e\u95f4\u9699\uff1a\u5de6\uff1a",Object(b.b)("inlineCode",{parentName:"li"},"i"),"\uff1b\u53f3\uff1a",Object(b.b)("inlineCode",{parentName:"li"},"i+1")))),Object(b.b)("li",{parentName:"ul"},"\u5206\u522b\u8ba1\u7b97\u51fa\u4ece\u5b57\u7b26\u5f00\u59cb\u548c\u4ece\u95f4\u9699\u5f00\u59cb\u6269\u5c55\uff0c\u6700\u7ec8\u7684\u6700\u5927\u56de\u6587\u5b50\u4e32\u957f\u5ea6\uff0c",Object(b.b)("strong",{parentName:"li"},"\u4e8c\u8005\u53d6\u6700\u5927\u503c")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"\u4e8c\u8005\u7684\u6700\u5927\u503c")," \u5728\u548c ",Object(b.b)("strong",{parentName:"li"},"\u603b\u4f53\u6700\u5927\u503c")," \u6bd4\u8f83\uff0c\u51b3\u5b9a\u662f\u5426\u66f4\u65b0 ",Object(b.b)("strong",{parentName:"li"},"\u603b\u4f53\u6700\u5927\u503c")),Object(b.b)("li",{parentName:"ul"},"\u5982\u679c\u8981\u66f4\u65b0\u5168\u5c40\u6700\u5927\u503c\uff0c\u8fd8\u8981\u8ba1\u7b97\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u533a\u95f4\u7684\u5de6\u4fa7\u8d77\u59cb\u4e0b\u6807",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"\u5de6\u4fa7\u5176\u5b9e\u4e0b\u6807 =  \u4e2d\u5fc3\u4e0b\u6807 - (\u5f53\u524d\u56de\u6587\u533a\u95f4\u957f\u5ea6 - 1) / 2")),Object(b.b)("li",{parentName:"ul"},"leftIndex = i - ((len - 1) / 2)"))))),Object(b.b)("li",{parentName:"ul"},"\u5904\u7406\u5de6\u4fa7\u7b2c\u4e00\u4e2a\u95f4\u9699",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"s","[0]"," \u3001 s","[1]"," \u662f\u5426\u76f8\u7b49",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u76f8\u7b49\uff1a\u662f\u56de\u6587\u4e32\uff0c\u957f\u5ea6\u4e3a 2 \uff0c\u5de6\u4fa7\u4e0b\u6807\u4e3a0",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5982\u679c\u5f53\u524d\u5168\u5c40\u6700\u5927\u957f\u5ea6 < 2\uff0c\u90a3\u4e48\u5c31\u8981\u66f4\u65b0\uff0c\u5426\u5219\u4e0d\u7ba1"))),Object(b.b)("li",{parentName:"ul"},"\u4e0d\u76f8\u7b49\uff1a\u4e0d\u662f\u56de\u6587\u4e32\uff0c\u4e0d\u7ba1"))))))),Object(b.b)("img",{src:n(1003).default,style:{zoom:"40%",boxShadow:"0px 0px 0px #333333",borderRadius:"19px"}})," ",Object(b.b)("br",null),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class _5\u6700\u957f\u56de\u6587\u5b50\u4e32 {\n    public static String longestPalindrome(String s) {\n        if (s.length() == 1) return s;\n\n        char[] chars = s.toCharArray();\n\n        boolean[][] dp = new boolean[chars.length][chars.length];\n\n        int maxSubStrLen = 0; // \u6700\u5927\u56de\u6587\u5b50\u4e32\u7684\u957f\u5ea6\n        int maxSubStrI = 0; // \u6700\u5927\u56de\u6587\u5b50\u4e32\u7b2c\u4e00\u4e2a\u5b57\u7b26\u7684\u4e0b\u6807\n\n        for (int i = chars.length - 1; i >= 0; i--) {\n            for (int j = i; j < chars.length; j++) {\n                int currentSubStrLen = j - i + 1;\n                dp[i][j] = currentSubStrLen <= 2 ? chars[i] == chars[j] : (dp[i + 1][j - 1] && (chars[i] == chars[j]));\n                // \u66f4\u65b0\u6700\u5927\u5b50\u4e32\u957f\u5ea6\n                if (dp[i][j] && (currentSubStrLen > maxSubStrLen)) {\n                    maxSubStrLen = currentSubStrLen;\n                    maxSubStrI = i;\n                }\n            }\n        }\n\n        return s.substring(maxSubStrI, maxSubStrI + maxSubStrLen);\n    }\n\n    // \u6269\u5c55\u4e2d\u5fc3\u6cd5\n    public static String longestPalindromeByCenterGrowth(String s) {\n        if (s.length() == 1) return s;\n        char[] chars = s.toCharArray();\n\n        int maxSubStrLen = 1;\n        int maxSubStrI = 0;\n\n        for (int i = chars.length - 2; i >= 1; i--) {\n            // \u626b\u63cf\u6240\u6709\u7684 \u5b57\u7b26 \u548c \u95f4\u9699\n            // \u5206\u522b\u6839\u636e\u4ece\u5f53\u524d\u5b57\u7b26\u6269\u5c55\uff0c\u8fd8\u662f\u4ece\u5f53\u524d\u5b57\u7b26\u53f3\u4fa7\u7684\u95f4\u9699\u626b\u63cf\n            // \u4ece\u5b57\u7b26\u5f00\u59cb\u6269\u5c55\u83b7\u5f97\u7684\u6700\u5927\u56de\u6587\u5b50\u4e32\u957f\u5ea6\n            int fromCharLen = palindromeLength(chars, i - 1, i + 1);\n            // \u4ece\u5b57\u7b26\u53f3\u4fa7\u95f4\u9699\u5f00\u59cb\u6269\u5c55\u83b7\u5f97\u7684\u6700\u5927\u5b50\u4e32\u957f\u5ea6\n            int fromSpaceLen = palindromeLength(chars, i, i + 1);\n            // \u4e8c\u8005\u53d6\u8f83\u5927\u7684\n            fromCharLen = Math.max(fromCharLen, fromSpaceLen);\n            // \u4e8c\u8005\u8f83\u5927 \u518d \u4e0e\u5168\u5c40\u6700\u5927\u6bd4\u8f83\n            if (fromCharLen > maxSubStrLen) {\n                maxSubStrLen = fromCharLen;\n                maxSubStrI = i - ((fromCharLen - 1) >> 1); // \u5de6\u4fa7\u5176\u5b9e\u4e0b\u6807 =  \u4e2d\u5fc3\u4e0b\u6807 - (\u5f53\u524d\u56de\u6587\u533a\u95f4\u957f\u5ea6 - 1) / 2\n            }\n        }\n\n        // \u5904\u7406 0 \u53f7\u5b57\u7b26\u53f3\u4fa7\u7684\u95f4\u9699\uff0c\u7b2c\u4e00\u4e2a\u95f4\u9699\n        if (chars[0] == chars[1] && maxSubStrLen < 2) {\n            maxSubStrLen = 2;\n            maxSubStrI = 0;\n        }\n\n        return new String(chars, maxSubStrI, maxSubStrLen);\n    }\n\n    /**\n     * \u4ecel\u5411\u5de6\uff1b\u4ecer\u5411\u53f3\u626b\u63cf\uff1b\u8fd4\u56de\u6700\u957f\u56de\u6587\u5b50\u4e32\u7684\u957f\u5ea6\n     *\n     * @param chars \u5b57\u7b26\u6570\u7ec4\n     * @param l     \u5de6\u4fa7\u6269\u5c55\u4e0b\u6807\n     * @param r     \u53f3\u4fa7\u6269\u5c55\u4e0b\u6807\n     * @return \u4ecel\u5411\u5de6\uff1b\u4ecer\u5411\u53f3\u626b\u63cf\uff1b\u8fd4\u56de\u6700\u957f\u56de\u6587\u5b50\u4e32\u7684\u957f\u5ea6\n     */\n    private static int palindromeLength(char[] chars, int l, int r) {\n        while (l >= 0 && r < chars.length && chars[l] == chars[r]) { // \u53ea\u8981\u6269\u5c55\u51fa\u6765\u7684\u4e24\u4e2a\u65b0\u5b57\u7b26\u76f8\u7b49\n            // \u7ee7\u7eed\u6269\u5c55\n            l--;\n            r++;\n        }\n\n        return r - l - 1;\n    }\n\n    public static void main(String[] args) {\n        String s = "bb";\n        String s1 = longestPalindromeByCenterGrowth(s);\n\n        System.out.println("s1 = " + s1);\n    }\n}\n')),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6 O(n ^ 2)"),Object(b.b)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6 O(1)")),Object(b.b)("p",null,"bai P3 1:06 \u4f18\u5316"))}o.isMDXComponent=!0},561:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},j=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),j=o(n),O=a,u=j["".concat(i,".").concat(O)]||j[O]||m[O]||b;return n?r.a.createElement(u,l(l({ref:t},p),{},{components:n})):r.a.createElement(u,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,i=new Array(b);i[0]=O;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<b;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);