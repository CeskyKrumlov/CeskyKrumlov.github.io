(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{301:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return b})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var i=t(2),a=t(6),r=(t(0),t(556)),l={id:"72.editDistance",title:"72.\u7f16\u8f91\u8ddd\u79bb",hide_title:!0},b={unversionedId:"sf/\u52a8\u6001\u89c4\u5212/72.editDistance",id:"sf/\u52a8\u6001\u89c4\u5212/72.editDistance",isDocsHomePage:!1,title:"72.\u7f16\u8f91\u8ddd\u79bb",description:"72.\u7f16\u8f91\u8ddd\u79bb",source:"@site/datastructure/sf/\u52a8\u6001\u89c4\u5212/72.\u7f16\u8f91\u8ddd\u79bb.md",slug:"/sf/\u52a8\u6001\u89c4\u5212/72.editDistance",permalink:"/datastructure/sf/\u52a8\u6001\u89c4\u5212/72.editDistance",version:"current",sidebar:"docs2",previous:{title:"121.\u4e70\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673a",permalink:"/datastructure/sf/\u52a8\u6001\u89c4\u5212/121.bestTimetoBuyandSellStock"},next:{title:"5.\u6700\u957f\u56de\u6587\u5b50\u4e32",permalink:"/datastructure/sf/\u52a8\u6001\u89c4\u5212/5.longestPalindromicSubstring"}},c=[{value:"72.\u7f16\u8f91\u8ddd\u79bb",id:"72\u7f16\u8f91\u8ddd\u79bb",children:[{value:"\u52a8\u6001\u89c4\u5212",id:"\u52a8\u6001\u89c4\u5212",children:[{value:"\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b",id:"\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b",children:[]}]}]}],o={rightToc:c};function p(e){var n=e.components,l=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},o,l,{components:n,mdxType:"MDXLayout"}),Object(r.b)("br",null),Object(r.b)("h1",{id:"72\u7f16\u8f91\u8ddd\u79bb"},"72.\u7f16\u8f91\u8ddd\u79bb"),Object(r.b)("p",null,Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://leetcode-cn.com/problems/edit-distance/"}),"72. \u7f16\u8f91\u8ddd\u79bb")),Object(r.b)("p",null,"\u96be\u5ea6 ",Object(r.b)("inlineCode",{parentName:"p"},"\u56f0\u96be")),Object(r.b)("p",null,"\u7ed9\u4f60\u4e24\u4e2a\u5355\u8bcd ",Object(r.b)("inlineCode",{parentName:"p"},"word1")," \u548c ",Object(r.b)("inlineCode",{parentName:"p"},"word2"),"\uff0c\u8bf7\u4f60\u8ba1\u7b97\u51fa\u5c06 ",Object(r.b)("inlineCode",{parentName:"p"},"word1")," \u8f6c\u6362\u6210 ",Object(r.b)("inlineCode",{parentName:"p"},"word2")," \u6240\u4f7f\u7528\u7684\u6700\u5c11\u64cd\u4f5c\u6570 \u3002"),Object(r.b)("p",null,"\u4f60\u53ef\u4ee5\u5bf9\u4e00\u4e2a\u5355\u8bcd\u8fdb\u884c\u5982\u4e0b\u4e09\u79cd\u64cd\u4f5c\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u63d2\u5165\u4e00\u4e2a\u5b57\u7b26"),Object(r.b)("li",{parentName:"ul"},"\u5220\u9664\u4e00\u4e2a\u5b57\u7b26"),Object(r.b)("li",{parentName:"ul"},"\u66ff\u6362\u4e00\u4e2a\u5b57\u7b26")),Object(r.b)("p",null,"Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2."),Object(r.b)("p",null,"You have the following three operations permitted on a word:"),Object(r.b)("p",null,"Insert a character\nDelete a character\nReplace a character"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"\u8f93\u5165\uff1aword1 = \"horse\", word2 = \"ros\"\n\u8f93\u51fa\uff1a3\n\u89e3\u91ca\uff1a\nhorse -> rorse (\u5c06 'h' \u66ff\u6362\u4e3a 'r')\nrorse -> rose (\u5220\u9664 'r')\nrose -> ros (\u5220\u9664 'e')\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"\u8f93\u5165\uff1aword1 = \"intention\", word2 = \"execution\"\n\u8f93\u51fa\uff1a5\n\u89e3\u91ca\uff1a\nintention -> inention (\u5220\u9664 't')\ninention -> enention (\u5c06 'i' \u66ff\u6362\u4e3a 'e')\nenention -> exention (\u5c06 'n' \u66ff\u6362\u4e3a 'x')\nexention -> exection (\u5c06 'n' \u66ff\u6362\u4e3a 'c')\nexection -> execution (\u63d2\u5165 'u')\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"0 <= word1.length, word2.length <= 500")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"word1")," \u548c ",Object(r.b)("inlineCode",{parentName:"li"},"word2")," \u7531\u5c0f\u5199\u82f1\u6587\u5b57\u6bcd\u7ec4\u6210")),Object(r.b)("h2",{id:"\u52a8\u6001\u89c4\u5212"},"\u52a8\u6001\u89c4\u5212"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u5047\u8bbe\u4ece\u5355\u8bcd ",Object(r.b)("inlineCode",{parentName:"p"},"mice")," \u53d8\u5230\u5355\u8bcd ",Object(r.b)("inlineCode",{parentName:"p"},"arise")),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u4ee4 ",Object(r.b)("inlineCode",{parentName:"li"},"s1 = mice"),"\uff0c\u957f\u5ea6\u4e3a ",Object(r.b)("inlineCode",{parentName:"li"},"n1")),Object(r.b)("li",{parentName:"ul"},"\u4ee4 ",Object(r.b)("inlineCode",{parentName:"li"},"s2 = arise"),"\uff0c\u957f\u5ea6\u4e3a ",Object(r.b)("inlineCode",{parentName:"li"},"n2")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"dp")," \u662f\u5927\u5c0f\u4e3a ",Object(r.b)("inlineCode",{parentName:"li"},"[n1 + 1][n2 + 1]")," \u7684\u4e8c\u7ef4\u6570\u7ec4"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"dp[i][j]")," \u8868\u793a\u4ece \u5b50\u4e32",Object(r.b)("inlineCode",{parentName:"strong"},"s1[0, j)")," \u8f6c\u5316\u5230 \u5b50\u4e32",Object(r.b)("inlineCode",{parentName:"strong"},"s2[0, j)")," \u7684\u6700\u5c11\u64cd\u4f5c\u6570"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"s1[0, i)")," \u662f\u7531 ",Object(r.b)("inlineCode",{parentName:"li"},"s1")," \u7684\u524d ",Object(r.b)("inlineCode",{parentName:"li"},"i")," \u4e2a\u5b57\u7b26\u7ec4\u6210\u7684\u5b50\u4e32"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"s2[0, j)")," \u662f\u7531 ",Object(r.b)("inlineCode",{parentName:"li"},"s2")," \u7684\u524d ",Object(r.b)("inlineCode",{parentName:"li"},"j")," \u4e2a\u5b57\u7b26\u7ec4\u6210\u7684\u5b50\u4e32"))),Object(r.b)("li",{parentName:"ul"},"\u5219 ",Object(r.b)("inlineCode",{parentName:"li"},"dp[n1][n2]")," \u5c31\u662f\u6700\u7ec8\u7b54\u6848\uff0c\u8868\u793a ",Object(r.b)("inlineCode",{parentName:"li"},"s1[0, n1)")," \u5230 ",Object(r.b)("inlineCode",{parentName:"li"},"s2[0, n2)")," \u7684\u6700\u5c11\u64cd\u4f5c\u6570"))),Object(r.b)("p",null,Object(r.b)("img",{alt:"image-20210412154631891",src:t(949).default})),Object(r.b)("h3",{id:"\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b"},"\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b"),Object(r.b)("blockquote",null,Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u6700\u5de6\u4e0a\u89d2 ",Object(r.b)("inlineCode",{parentName:"li"},"dp[0][0]")," \u8868\u793a ",Object(r.b)("inlineCode",{parentName:"li"},"s1")," \u7a7a\u5b50\u4e32\u8f6c\u6362\u5230 ",Object(r.b)("inlineCode",{parentName:"li"},"s2")," \u7a7a\u5b50\u4e32\u7684\u6700\u5c11\u64cd\u4f5c\u6570\uff0c\u663e\u7136\u7b49\u4e8e ",Object(r.b)("inlineCode",{parentName:"li"},"0")),Object(r.b)("li",{parentName:"ul"},"\u7b2c0\u884c\u3001\u7b2c0\u5217\u8868\u793a\u4ece \u7a7a\u4e32 \u8f6c\u5230 \u975e\u7a7a\u4e32 \u9700\u8981\u7684\u6700\u5c11\u64cd\u4f5c\uff0c\u663e\u7136\u7b49\u4e8e \u975e\u7a7a\u4e32 \u7684\u957f\u5ea6",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5bf9\u4e8e\u7b2c0\u5217\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"dp[i][0] = i")),Object(r.b)("li",{parentName:"ul"},"\u5bf9\u4e8e\u7b2c0\u884c\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"dp[0][j] = j")))))),Object(r.b)("p",null,Object(r.b)("img",{alt:"image-20210412160114610",src:t(950).default})),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u4ece \u7b2c1\u5217\u3001\u7b2c1\u884c\u5f00\u59cb\u4e3a\u4e00\u822c\u60c5\u51b5"),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u6c42\u51fa\u4e00\u822c\u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"dp[i][j]")),Object(r.b)("li",{parentName:"ul"},"\u5206\u4e3a 4 \u79cd\u60c5\u51b5\u8ba8\u8bba\uff1a",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"\u5148 ",Object(r.b)("inlineCode",{parentName:"li"},"\u5220\u9664")," ",Object(r.b)("inlineCode",{parentName:"li"},"s1[0, i)")," \u7684\u6700\u540e\u4e00\u4e2a\u5b57\u7b26\u5f97\u5230 ",Object(r.b)("inlineCode",{parentName:"li"},"s1[0, i - 1)"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u518d\u4ece ",Object(r.b)("inlineCode",{parentName:"li"},"s1[0, i - 1)")," \u8f6c\u5316\u4e3a ",Object(r.b)("inlineCode",{parentName:"li"},"s2[0, j)")),Object(r.b)("li",{parentName:"ul"},"\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c",Object(r.b)("inlineCode",{parentName:"li"},"dp[i][j]")," = ",Object(r.b)("inlineCode",{parentName:"li"},"1")," + ",Object(r.b)("inlineCode",{parentName:"li"},"dp[i - 1][j]")))),Object(r.b)("li",{parentName:"ol"},"\u5148\u7531 ",Object(r.b)("inlineCode",{parentName:"li"},"s1[0, i)")," \u8f6c\u6362\u4e3a ",Object(r.b)("inlineCode",{parentName:"li"},"s2[0, j - 1)"),"\uff0c\u7136\u540e\u5728\u6700\u540e ",Object(r.b)("inlineCode",{parentName:"li"},"\u63d2\u5165")," \u5b57\u7b26 ",Object(r.b)("inlineCode",{parentName:"li"},"s2[j - 1]"),"\uff0c\u5f97\u5230 ",Object(r.b)("inlineCode",{parentName:"li"},"s2[0, j)"),"\uff0c\u6b64\u65f6 ",Object(r.b)("inlineCode",{parentName:"li"},"dp[i][j]")," = ",Object(r.b)("inlineCode",{parentName:"li"},"dp[i][j - 1]")," + ",Object(r.b)("inlineCode",{parentName:"li"},"1")),Object(r.b)("li",{parentName:"ol"},"\u5982\u679c\u5b50\u4e32\u7684\u6700\u540e\u4e00\u4e2a\u5b57\u7b26\u4e0d\u540c\uff1a ",Object(r.b)("inlineCode",{parentName:"li"},"s1[i - 1]")," != ",Object(r.b)("inlineCode",{parentName:"li"},"s2[j - 1]"),"\uff0c\u5148\u7531 ",Object(r.b)("inlineCode",{parentName:"li"},"s1[0, i - 1)")," \u8f6c\u6362\u5230 ",Object(r.b)("inlineCode",{parentName:"li"},"s2[0, j - 1)"),"\uff0c\u5c31\u662f\u770b\u51fa\u4e86\u6700\u540e\u4e00\u4e2a\u5b57\u7b26\u4ee5\u5916\u7684\u90e8\u5206\uff0c\u5982\u4f55\u76f8\u4e92\u8f6c\u6362\u3002\u5728\u6b64\u57fa\u7840\u4e0a\uff0c\u518d\u8c03\u6574\u6700\u540e\u4e00\u4e2a\u539f\u672c\u4e0d\u76f8\u540c\u7684\u5b57\u7b26\u5373\u53ef",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"dp[i][j]")," = ",Object(r.b)("inlineCode",{parentName:"li"},"dp[i - 1][j - 1]")," + ",Object(r.b)("inlineCode",{parentName:"li"},"1")))),Object(r.b)("li",{parentName:"ol"},"\u5982\u679c\u5b50\u4e32\u7684\u6700\u540e\u4e00\u4e2a\u5b57\u7b26\u76f8\u7b49\uff1a  ",Object(r.b)("inlineCode",{parentName:"li"},"s1[i - 1]")," == ",Object(r.b)("inlineCode",{parentName:"li"},"s2[j - 1]"),"\uff0c\u90a3\u4e48\u4ece  ",Object(r.b)("inlineCode",{parentName:"li"},"s1[0, i - 1)")," \u8f6c\u6362\u5230 ",Object(r.b)("inlineCode",{parentName:"li"},"s2[0, j - 1)")," \u540e\uff0c\u4e0d\u9700\u8981\u8fdb\u884c\u4efb\u4f55\u989d\u5916\u64cd\u4f5c",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"dp[i][j]")," = ",Object(r.b)("inlineCode",{parentName:"li"},"dp[i - 1][j - 1]")))))),Object(r.b)("li",{parentName:"ul"},"\u4e0a\u8ff0 4 \u79cd\u60c5\u51b5\uff0c\u5176\u4e2d ",Object(r.b)("inlineCode",{parentName:"li"},"\u60c5\u51b53")," \u548c ",Object(r.b)("inlineCode",{parentName:"li"},"\u60c5\u51b54")," \u4e3a\u4e8c\u9009\u4e00",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u6700\u7ec8\u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"dp[i][j]")," \u4e3a ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"\u60c5\u51b51"),"\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"dp[i][j]")," = ",Object(r.b)("inlineCode",{parentName:"li"},"1")," + ",Object(r.b)("inlineCode",{parentName:"li"},"dp[i - 1][j]")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"\u60c5\u51b52"),"\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"dp[i][j]")," = ",Object(r.b)("inlineCode",{parentName:"li"},"dp[i][j - 1]")," + ",Object(r.b)("inlineCode",{parentName:"li"},"1")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"\u60c5\u51b53/4"),"\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"dp[i][j]")," = ",Object(r.b)("inlineCode",{parentName:"li"},"dp[i - 1][j - 1]")," + ",Object(r.b)("inlineCode",{parentName:"li"},"1")," \u6216 ",Object(r.b)("inlineCode",{parentName:"li"},"dp[i][j]")," = ",Object(r.b)("inlineCode",{parentName:"li"},"dp[i - 1][j - 1]")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u4e09\u8005\u4e2d\u7684 ",Object(r.b)("inlineCode",{parentName:"strong"},"\u6700\u5c0f\u503c"))))))),Object(r.b)("img",{src:t(951).default,style:{zoom:"50%",boxShadow:"0px 0px 0px #333333",borderRadius:"19px"}})," ",Object(r.b)("br",null),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"public int minDistance(String word1, String word2) {\n    if (word1.length() == 0 && word2.length() == 0) return 0;\n    if (word1.length() == 0) return word2.length();\n    if (word2.length() == 0) return word1.length();\n\n    char[] chars1 = word1.toCharArray();\n    char[] chars2 = word2.toCharArray();\n\n    int[][] dp = new int[chars1.length + 1][chars2.length + 1];\n\n    dp[0][0] = 0;\n\n    for (int i = 1; i <= chars1.length; i++)  // \u7b2c0\u5217\uff0c\u904d\u5386\u6240\u6709\u884c\n        dp[i][0] = i;\n\n    for (int j = 1; j <= chars2.length; j++)  // \u7b2c0\u884c\uff0c\u904d\u5386\u6240\u6709\u5217\n        dp[0][j] = j;\n    // \u4ece\u7b2c\u4e00\u884c\u7b2c\u4e00\u5217\u5f00\u59cb\u4e3a\u4e00\u822c\u60c5\u51b5\uff0c\u5206\u4e3a4\u79cd\u60c5\u51b5\u8ba8\u8bba\n    for (int i = 1; i <= chars1.length; i++) {\n        for (int j = 1; j <= chars2.length; j++) {\n            // 1. \u5148 `\u5220\u9664` `s1[0, i)` \u7684\u6700\u540e\u4e00\u4e2a\u5b57\u7b26\u5f97\u5230 `s1[0, i - 1)`\n            // \u4e0a\u9762\u90a3\u4e2a\u683c\u5b50\n            int top = dp[i - 1][j] + 1;\n            // 2. \u5148\u7531 `s1[0, i)` \u8f6c\u6362\u4e3a `s2[0, j - 1)`\uff0c\u7136\u540e\u5728\u6700\u540e `\u63d2\u5165` \u5b57\u7b26 `s2[j - 1]`\uff0c\u5f97\u5230 `s2[0, j)`\uff0c\n            // \u5de6\u8fb9\u90a3\u4e2a\u683c\u5b50\n            int left = dp[i][j - 1] + 1;\n            // \u5de6\u4e0a\u89d2 \u884c\u5217\u90fd - 1\n            int leftTop = dp[i - 1][j - 1];\n            // 3. \u5982\u679c\u5b50\u4e32\u7684\u6700\u540e\u4e00\u4e2a\u5b57\u7b26\u4e0d\u540c\n            if (chars1[i - 1] != chars2[j - 1]) leftTop++;\n            // \u4e09\u8005\u53d6\u6700\u5c0f\n            dp[i][j] = Math.min(Math.min(left, top), leftTop);\n        }\n    }\n\n    // \u8fd4\u56de\u6700\u53f3\u4e0b\u89d2\u7684\u683c\u5b50\n    return dp[chars1.length][chars2.length];\n}\n")))}p.isMDXComponent=!0},556:function(e,n,t){"use strict";t.d(n,"a",(function(){return j})),t.d(n,"b",(function(){return m}));var i=t(0),a=t.n(i);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=a.a.createContext({}),p=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},j=function(e){var n=p(e.components);return a.a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},O=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),j=p(t),O=i,m=j["".concat(l,".").concat(O)]||j[O]||d[O]||r;return t?a.a.createElement(m,b(b({ref:n},o),{},{components:t})):a.a.createElement(m,b({ref:n},o))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=O;var b={};for(var c in n)hasOwnProperty.call(n,c)&&(b[c]=n[c]);b.originalType=e,b.mdxType="string"==typeof e?e:i,l[1]=b;for(var o=2;o<r;o++)l[o]=t[o];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}O.displayName="MDXCreateElement"},949:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/5-59503c930a5e64d723cf9da3b1347729.png"},950:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/6-b45bdca1660f949ae642bffba2f3e7d9.png"},951:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/7-e6565d10f303bba62cb1fdba8bd104e8.png"}}]);