(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{572:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return j}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=a.a.createContext({}),u=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},s=function(e){var n=u(e.components);return a.a.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),s=u(t),m=r,j=s["".concat(c,".").concat(m)]||s[m]||p[m]||i;return t?a.a.createElement(j,b(b({ref:n},o),{},{components:t})):a.a.createElement(j,b({ref:n},o))}));function j(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=m;var b={};for(var l in n)hasOwnProperty.call(n,l)&&(b[l]=n[l]);b.originalType=e,b.mdxType="string"==typeof e?e:r,c[1]=b;for(var o=2;o<i;o++)c[o]=t[o];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},637:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/3-09e4dd1f61a2594b3c6f086fe236a783.png"},638:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/4-1ec35fea642932aad023122ad0100011.png"},75:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return b})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(2),a=t(6),i=(t(0),t(572)),c={id:"1143.longestCommonSubsequence",title:"1143.\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217LCS",hide_title:!0},b={unversionedId:"sf/\u52a8\u6001\u89c4\u5212/1143.longestCommonSubsequence",id:"sf/\u52a8\u6001\u89c4\u5212/1143.longestCommonSubsequence",isDocsHomePage:!1,title:"1143.\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217LCS",description:"1143.\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217",source:"@site/datastructure/sf/\u52a8\u6001\u89c4\u5212/1143.\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217.md",slug:"/sf/\u52a8\u6001\u89c4\u5212/1143.longestCommonSubsequence",permalink:"/datastructure/sf/\u52a8\u6001\u89c4\u5212/1143.longestCommonSubsequence",version:"current",sidebar:"docs2",previous:{title:"300.\u6700\u957f\u4e0a\u5347\u5b50\u5e8f\u5217LIS",permalink:"/datastructure/sf/\u52a8\u6001\u89c4\u5212/300.longestIncreasingSubsequenceLIS"},next:{title:"239.\u6ed1\u52a8\u7a97\u53e3\u6700\u5927\u503c",permalink:"/datastructure/sf/\u6808/239.slidingWindowMaximum"}},l=[{value:"1143.\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217",id:"1143\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217",children:[]},{value:"\u52a8\u6001\u89c4\u5212",id:"\u52a8\u6001\u89c4\u5212",children:[]}],o={rightToc:l};function u(e){var n=e.components,c=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,c,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"1143\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217"},"1143.\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217"),Object(i.b)("p",null,"\u96be\u5ea6 ",Object(i.b)("inlineCode",{parentName:"p"},"\u4e2d\u7b49")),Object(i.b)("p",null,"\u7ed9\u5b9a\u4e24\u4e2a\u5b57\u7b26\u4e32 ",Object(i.b)("inlineCode",{parentName:"p"},"text1")," \u548c ",Object(i.b)("inlineCode",{parentName:"p"},"text2"),"\uff0c\u8fd4\u56de\u8fd9\u4e24\u4e2a\u5b57\u7b26\u4e32\u7684\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217\u7684\u957f\u5ea6\u3002"),Object(i.b)("p",null,"\u4e00\u4e2a\u5b57\u7b26\u4e32\u7684 ",Object(i.b)("em",{parentName:"p"},"\u5b50\u5e8f\u5217"),' \u662f\u6307\u8fd9\u6837\u4e00\u4e2a\u65b0\u7684\u5b57\u7b26\u4e32\uff1a\u5b83\u662f\u7531\u539f\u5b57\u7b26\u4e32\u5728\u4e0d\u6539\u53d8\u5b57\u7b26\u7684\u76f8\u5bf9\u987a\u5e8f\u7684\u60c5\u51b5\u4e0b\u5220\u9664\u67d0\u4e9b\u5b57\u7b26\uff08\u4e5f\u53ef\u4ee5\u4e0d\u5220\u9664\u4efb\u4f55\u5b57\u7b26\uff09\u540e\u7ec4\u6210\u7684\u65b0\u5b57\u7b26\u4e32\u3002\n\u4f8b\u5982\uff0c"ace" \u662f "abcde" \u7684\u5b50\u5e8f\u5217\uff0c\u4f46 "aec" \u4e0d\u662f "abcde" \u7684\u5b50\u5e8f\u5217\u3002\u4e24\u4e2a\u5b57\u7b26\u4e32\u7684\u300c\u516c\u5171\u5b50\u5e8f\u5217\u300d\u662f\u8fd9\u4e24\u4e2a\u5b57\u7b26\u4e32\u6240\u5171\u540c\u62e5\u6709\u7684\u5b50\u5e8f\u5217\u3002'),Object(i.b)("p",null,"\u82e5\u8fd9\u4e24\u4e2a\u5b57\u7b26\u4e32\u6ca1\u6709\u516c\u5171\u5b50\u5e8f\u5217\uff0c\u5219\u8fd4\u56de 0\u3002"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u793a\u4f8b 1:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'\u8f93\u5165\uff1atext1 = "abcde", text2 = "ace" \n\u8f93\u51fa\uff1a3  \n\u89e3\u91ca\uff1a\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217\u662f "ace"\uff0c\u5b83\u7684\u957f\u5ea6\u4e3a 3\u3002\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u793a\u4f8b 2:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'\u8f93\u5165\uff1atext1 = "abc", text2 = "abc"\n\u8f93\u51fa\uff1a3\n\u89e3\u91ca\uff1a\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217\u662f "abc"\uff0c\u5b83\u7684\u957f\u5ea6\u4e3a 3\u3002\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u793a\u4f8b 3:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'\u8f93\u5165\uff1atext1 = "abc", text2 = "def"\n\u8f93\u51fa\uff1a0\n\u89e3\u91ca\uff1a\u4e24\u4e2a\u5b57\u7b26\u4e32\u6ca1\u6709\u516c\u5171\u5b50\u5e8f\u5217\uff0c\u8fd4\u56de 0\u3002\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u63d0\u793a:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"1 <= text1.length <= 1000")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"1 <= text2.length <= 1000")),Object(i.b)("li",{parentName:"ul"},"\u8f93\u5165\u7684\u5b57\u7b26\u4e32\u53ea\u542b\u6709\u5c0f\u5199\u82f1\u6587\u5b57\u7b26\u3002")),Object(i.b)("hr",null),Object(i.b)("p",null,"Given two strings text1 and text2, return the length of their longest common subsequence."),Object(i.b)("p",null,'A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.'),Object(i.b)("p",null,"If there is no common subsequence, return 0."),Object(i.b)("p",null,"Example 1:"),Object(i.b)("p",null,'Input: text1 = "abcde", text2 = "ace"\nOutput: 3',Object(i.b)("br",{parentName:"p"}),"\n",'Explanation: The longest common subsequence is "ace" and its length is 3.\nExample 2:'),Object(i.b)("p",null,'Input: text1 = "abc", text2 = "abc"\nOutput: 3\nExplanation: The longest common subsequence is "abc" and its length is 3.\nExample 3:'),Object(i.b)("p",null,'Input: text1 = "abc", text2 = "def"\nOutput: 0\nExplanation: There is no such common subsequence, so the result is 0.'),Object(i.b)("br",null),Object(i.b)("h1",{id:"\u52a8\u6001\u89c4\u5212"},"\u52a8\u6001\u89c4\u5212"),Object(i.b)("blockquote",null,Object(i.b)("ol",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"\u5b9a\u4e49\u72b6\u6001")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u5047\u8bbe ",Object(i.b)("inlineCode",{parentName:"strong"},"dp(i, j)")," \u662f ",Object(i.b)("inlineCode",{parentName:"strong"},"nums1")," \u524d ",Object(i.b)("inlineCode",{parentName:"strong"},"i")," \u4e2a\u5143\u7d20\u4e0e ",Object(i.b)("inlineCode",{parentName:"strong"},"nums2")," \u524d ",Object(i.b)("inlineCode",{parentName:"strong"},"j")," \u4e2a\u5143\u7d20\u7684\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217\u957f\u5ea6")),Object(i.b)("li",{parentName:"ul"},"\u6240\u6c42\u89e3\u5373\u4e3a ",Object(i.b)("inlineCode",{parentName:"li"},"dp(nums1.length, nums2.length)")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"\u521d\u59cb\u6761\u4ef6")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4e24\u4e2a\u5e8f\u5217\uff0c\u5176\u4e2d\u4e00\u4e2a\u4e3a\u7a7a\uff0c\u5219\uff1a",Object(i.b)("inlineCode",{parentName:"li"},"dp(i, 0) = dp(0, j) = 0")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\uff1a"),"\u5982\u4f55\u5b9e\u73b0 ",Object(i.b)("inlineCode",{parentName:"p"},"dp(i - 1, j - 1) -> dp(i, j)")),Object(i.b)("img",{src:t(637).default,style:{zoom:"40%",border:"0px black solid"}}),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6240\u6c42 ",Object(i.b)("inlineCode",{parentName:"li"},"dp(i, j)")," \u5373\u4e0a\u56fe\u4e24\u4e2a\u5e8f\u5217\u7684\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217"),Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u4e24\u4e2a\u5e8f\u5217\u7684\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u76f8\u7b49\uff0c\u5373 ",Object(i.b)("inlineCode",{parentName:"li"},"nums1[i - 1] = nums2[j - 1]"),"\uff0c\u5219 ",Object(i.b)("inlineCode",{parentName:"li"},"dp(i, j) = dp(i - 1, j - 1) + 1")),Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u4e24\u4e2a\u5e8f\u5217\u7684\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u4e0d\u76f8\u7b49\uff0c\u5373 ",Object(i.b)("inlineCode",{parentName:"li"},"nums1[i - 1] \u2260 nums2[j - 1]"),"\uff0c\u90a3\u4e48\u770b\u770b\u8fd9\u8fb9\u7684\u65b0\u5143\u7d20\u5728\u5bf9\u9762\u524d\u9762\u7684\u5143\u7d20\u4e2d\u6709\u6ca1\u6709\u4e00\u6837\u7684\uff0c\u53cd\u4e4b\u4ea6\u7136\uff0c\u7136\u540e\u6c42\u4e8c\u8005\u7684\u6700\u5927\u503c\uff0c\u5219 ",Object(i.b)("inlineCode",{parentName:"li"},"dp(i, j) = max{ dp(i - 1, j), dp(i, j - 1) }"))),Object(i.b)("img",{src:t(638).default,style:{zoom:"40%",border:"0px black solid"}})))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class _1143\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217 {\n    public static int longestCommonSubsequence(String text1, String text2) {\n        return 0;\n    }\n\n    public static int longestCommonSubsequence(int[] nums1, int[] nums2) {\n        if (nums1 == null || nums1.length == 0) return 0;\n        if (nums2 == null || nums2.length == 0) return 0;\n\n        int[][] dp = new int[nums1.length + 1][nums2.length + 1];\n\n        for (int i = 1; i <= nums1.length; i++) {\n            for (int j = 1; j <= nums2.length; j++) {\n                if (nums1[i - 1] == nums2[j - 1])\n                    dp[i][j] = dp[i - 1][j - 1] + 1;\n                else\n                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n            }\n        }\n\n        return dp[nums1.length][nums2.length];\n    }\n\n    public static void main(String[] args) {\n        int[] nums1 = {1, 3, 5, 9, 10};\n        int[] nums2 = {1, 4, 9, 10};\n\n        int res = longestCommonSubsequence(nums1, nums2);\n        System.out.println("res = " + res);\n    }\n}\n')))}u.isMDXComponent=!0}}]);