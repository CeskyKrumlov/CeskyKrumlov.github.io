(window.webpackJsonp=window.webpackJsonp||[]).push([[410],{466:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return b})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return o}));var a=t(2),r=t(6),i=(t(0),t(511)),b={id:"300.longestIncreasingSubsequenceLIS",title:"300.\u6700\u957f\u4e0a\u5347\u5b50\u5e8f\u5217LIS",hide_title:!0},l={unversionedId:"sf/\u52a8\u6001\u89c4\u5212/300.longestIncreasingSubsequenceLIS",id:"sf/\u52a8\u6001\u89c4\u5212/300.longestIncreasingSubsequenceLIS",isDocsHomePage:!1,title:"300.\u6700\u957f\u4e0a\u5347\u5b50\u5e8f\u5217LIS",description:"300.\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217",source:"@site/datastructure/sf/\u52a8\u6001\u89c4\u5212/300.\u6700\u957f\u4e0a\u5347\u5b50\u5e8f\u5217LIS.md",slug:"/sf/\u52a8\u6001\u89c4\u5212/300.longestIncreasingSubsequenceLIS",permalink:"/datastructure/sf/\u52a8\u6001\u89c4\u5212/300.longestIncreasingSubsequenceLIS",version:"current",sidebar:"docs2",previous:{title:"53.\u6700\u5927\u8fde\u7eed\u5b50\u5e8f\u5217\u548c",permalink:"/datastructure/sf/\u5206\u6cbb/53.maximumSubarray"},next:{title:"1143.\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217LCS",permalink:"/datastructure/sf/\u52a8\u6001\u89c4\u5212/1143.longestCommonSubsequence"}},c=[{value:"300.\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217",id:"300\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217",children:[]},{value:"\u52a8\u6001\u89c4\u5212",id:"\u52a8\u6001\u89c4\u5212",children:[]}],p={rightToc:c};function o(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"300\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217"},"300.\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217 Longest Increasing Subsequence LIS")),Object(i.b)("p",{parentName:"blockquote"},"\u96be\u5ea6 ",Object(i.b)("inlineCode",{parentName:"p"},"\u4e2d\u7b49")),Object(i.b)("p",{parentName:"blockquote"},"\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 ",Object(i.b)("inlineCode",{parentName:"p"},"nums")," \uff0c\u627e\u5230\u5176\u4e2d\u6700\u957f\u4e25\u683c\u9012\u589e\u5b50\u5e8f\u5217\u7684\u957f\u5ea6\u3002"),Object(i.b)("p",{parentName:"blockquote"},"\u5b50\u5e8f\u5217\u662f\u7531\u6570\u7ec4\u6d3e\u751f\u800c\u6765\u7684\u5e8f\u5217\uff0c\u5220\u9664\uff08\u6216\u4e0d\u5220\u9664\uff09\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u800c\u4e0d\u6539\u53d8\u5176\u4f59\u5143\u7d20\u7684\u987a\u5e8f\u3002\u4f8b\u5982\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"[3,6,2,7]")," \u662f\u6570\u7ec4 ",Object(i.b)("inlineCode",{parentName:"p"},"[0,3,1,6,2,2,7]")," \u7684\u5b50\u5e8f\u5217\u3002"),Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\u8f93\u5165\uff1anums = [10,9,2,5,3,7,101,18]\n\u8f93\u51fa\uff1a4\n\u89e3\u91ca\uff1a\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\u662f [2,3,7,101]\uff0c\u56e0\u6b64\u957f\u5ea6\u4e3a 4 \u3002\n")),Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\u8f93\u5165\uff1anums = [0,1,0,3,2,3]\n\u8f93\u51fa\uff1a4\n")),Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u793a\u4f8b 3\uff1a")),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\u8f93\u5165\uff1anums = [7,7,7,7,7,7,7]\n\u8f93\u51fa\uff1a1\n")),Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"1 <= nums.length <= 2500")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-104 <= nums[i] <= 104"))),Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u8fdb\u9636\uff1a")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u4f60\u53ef\u4ee5\u8bbe\u8ba1\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a ",Object(i.b)("inlineCode",{parentName:"li"},"O(n2)")," \u7684\u89e3\u51b3\u65b9\u6848\u5417\uff1f"),Object(i.b)("li",{parentName:"ul"},"\u4f60\u80fd\u5c06\u7b97\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u964d\u4f4e\u5230 ",Object(i.b)("inlineCode",{parentName:"li"},"O(n log(n))")," \u5417?"))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Given an integer array nums, return the length of the longest strictly increasing subsequence."),Object(i.b)("p",{parentName:"blockquote"},"A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, ","[3,6,2,7]"," is a subsequence of the array ","[0,3,1,6,2,2,7]",".")),Object(i.b)("br",null),Object(i.b)("h1",{id:"\u52a8\u6001\u89c4\u5212"},"\u52a8\u6001\u89c4\u5212"),Object(i.b)("p",null,"\u5bf9\u4e8e ",Object(i.b)("inlineCode",{parentName:"p"},"[10, 2, 2, 5, 1, 7, 101, 18]")),Object(i.b)("blockquote",null,Object(i.b)("ol",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"\u5b9a\u4e49\u72b6\u6001\uff1a",Object(i.b)("inlineCode",{parentName:"strong"},"dp(i)")," \u662f\u4ee5 ",Object(i.b)("inlineCode",{parentName:"strong"},"nums[i]")," \u7ed3\u5c3e\u7684\u6700\u957f\u4e0a\u5347\u5b50\u5e8f\u5217\u7684\u957f\u5ea6")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4ee5",Object(i.b)("inlineCode",{parentName:"li"},"nums[0] = 10")," \u7ed3\u5c3e\u7684\u6700\u957f\u4e0a\u5347\u5b50\u5e8f\u5217\u662f ",Object(i.b)("inlineCode",{parentName:"li"},"[10]"),"\uff0c\u5219 ",Object(i.b)("inlineCode",{parentName:"li"},"dp[0] = 1")),Object(i.b)("li",{parentName:"ul"},"\u4ee5",Object(i.b)("inlineCode",{parentName:"li"},"nums[1] = 2")," \u7ed3\u5c3e\u7684\u5b50\u5e8f\u5217\u662f ",Object(i.b)("inlineCode",{parentName:"li"},"[10, 2]")," \u548c ",Object(i.b)("inlineCode",{parentName:"li"},"[2]"),"\uff0c\u6700\u957f\u4e0a\u5347\u5b50\u5e8f\u5217\u4e3a ",Object(i.b)("inlineCode",{parentName:"li"},"[2]")," \uff0c\u5219 ",Object(i.b)("inlineCode",{parentName:"li"},"dp[1] = 1")),Object(i.b)("li",{parentName:"ul"},"\u4ee5",Object(i.b)("inlineCode",{parentName:"li"},"nums[2] = 2")," \u7ed3\u5c3e\u7684\u6700\u957f\u4e0a\u5347\u5b50\u5e8f\u5217\u662f ",Object(i.b)("inlineCode",{parentName:"li"},"[2]"),"\uff0c\u5219 ",Object(i.b)("inlineCode",{parentName:"li"},"dp[2] = 1")),Object(i.b)("li",{parentName:"ul"},"\u4ee5",Object(i.b)("inlineCode",{parentName:"li"},"nums[3] = 5")," \u7ed3\u5c3e\u7684\u6700\u957f\u4e0a\u5347\u5b50\u5e8f\u5217\u662f ",Object(i.b)("inlineCode",{parentName:"li"},"[2, 5]"),"\uff0c\u5219 ",Object(i.b)("inlineCode",{parentName:"li"},"dp[3] = dp[2] + 1 = 2")),Object(i.b)("li",{parentName:"ul"},"\u4ee5",Object(i.b)("inlineCode",{parentName:"li"},"nums[4] = 1")," \u7ed3\u5c3e\u7684\u6700\u957f\u4e0a\u5347\u5b50\u5e8f\u5217\u662f ",Object(i.b)("inlineCode",{parentName:"li"},"[1]"),"\uff0c\u5219 ",Object(i.b)("inlineCode",{parentName:"li"},"dp[4] = 1")),Object(i.b)("li",{parentName:"ul"},"\u4ee5",Object(i.b)("inlineCode",{parentName:"li"},"nums[5] = 7")," \u7ed3\u5c3e\u7684\u6700\u957f\u4e0a\u5347\u5b50\u5e8f\u5217\u662f ",Object(i.b)("inlineCode",{parentName:"li"},"[2, 5, 7]"),"\uff0c\u5219 ",Object(i.b)("inlineCode",{parentName:"li"},"dp[5] = dp[3] + 1 = 3")),Object(i.b)("li",{parentName:"ul"},"\u4ee5",Object(i.b)("inlineCode",{parentName:"li"},"nums[6] = 101")," \u7ed3\u5c3e\u7684\u6700\u957f\u4e0a\u5347\u5b50\u5e8f\u5217\u662f ",Object(i.b)("inlineCode",{parentName:"li"},"[2, 5, 7, 101]"),"\uff0c\u5219 ",Object(i.b)("inlineCode",{parentName:"li"},"dp[6] = dp[5] + 1 = 4")),Object(i.b)("li",{parentName:"ul"},"\u4ee5",Object(i.b)("inlineCode",{parentName:"li"},"nums[7] = 18")," \u7ed3\u5c3e\u7684\u6700\u957f\u4e0a\u5347\u5b50\u5e8f\u5217\u662f ",Object(i.b)("inlineCode",{parentName:"li"},"[2, 5, 7, 18]"),"\uff0c\u5219 ",Object(i.b)("inlineCode",{parentName:"li"},"dp[7] = dp[5] + 1 = 4")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"\u521d\u59cb\u72b6\u6001\uff08\u8fb9\u754c\uff09"),"\uff1a\u5bf9\u4e8e\u4ee5\u4efb\u610f\u4e00\u4e2a\u5143\u7d20\u7ed3\u5c3e\u7684\u4e0a\u5347\u5b50\u5e8f\u5217\uff0c\u5176\u9ed8\u8ba4\u957f\u5ea6\u90fd\u4e3a ",Object(i.b)("inlineCode",{parentName:"p"},"1"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5bf9\u4e8e\u5f53\u524d\u5143\u7d20 ",Object(i.b)("inlineCode",{parentName:"li"},"nums[i]"),"\uff0c\u904d\u5386\u5f53\u524d\u5143\u7d20\u4e4b\u524d\u6240\u6709\u5143\u7d20\uff0c\u76ee\u7684\u662f\u627e\u5230\u5148\u524d\u6240\u6709\u5143\u7d20 ",Object(i.b)("inlineCode",{parentName:"li"},"dp")," \u503c\u7684 ",Object(i.b)("inlineCode",{parentName:"li"},"\u6700\u5927\u503c")),Object(i.b)("li",{parentName:"ul"},"\u5f53\u524d ",Object(i.b)("inlineCode",{parentName:"li"},"nums[i]")," \u4e0e\u5148\u524d\u7684\u6bcf\u4e00\u4e2a\u5143\u7d20 ",Object(i.b)("inlineCode",{parentName:"li"},"nums[j]")," \u6bd4\u8f83\uff0c",Object(i.b)("inlineCode",{parentName:"li"},"nums[i] > nums[j]"),"\uff0c\u8bf4\u660e\u5f53\u524d ",Object(i.b)("inlineCode",{parentName:"li"},"nums[i]")," \u53ef\u4ee5\u63a5\u5728\u4ee5 ",Object(i.b)("inlineCode",{parentName:"li"},"nums[j]")," \u7ed3\u5c3e\u7684\u6700\u957f\u4e0a\u5347\u5b50\u5e8f\u5217\u540e\u9762\uff0c\u5f62\u6210\u4e00\u4e2a ",Object(i.b)("strong",{parentName:"li"},"\u6bd4 ",Object(i.b)("inlineCode",{parentName:"strong"},"dp[j]")," \u66f4\u957f\u7684\u4e0a\u5347\u5b50\u5e8f\u5217\u957f\u5ea6\u4e3a dp","[j + 1]"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u8fd8\u8981\u786e\u4fdd ",Object(i.b)("inlineCode",{parentName:"li"},"nums[i]")," \u63a5\u5230 ",Object(i.b)("inlineCode",{parentName:"li"},"nums[j]")," \u540e\u9762\u5f62\u6210\u7684\u5b50\u5e8f\u5217\u4e0d\u4f1a\u6bd4\u5f53\u524d\u7684\u6700\u957f\u5b50\u5e8f\u5217\u8fd8\u77ed\uff0c\u5373\u786e\u4fdd",Object(i.b)("inlineCode",{parentName:"li"},"dp[j + 1] > dp[i]"),"\uff0c",Object(i.b)("strong",{parentName:"li"},"\u624d\u66f4\u65b0 ",Object(i.b)("inlineCode",{parentName:"strong"},"dp[i]")," \u7684\u503c\uff0c\u603b\u662f\u786e\u4fdd ",Object(i.b)("inlineCode",{parentName:"strong"},"dp[i]"),"\u7684\u503c\u66f4\u5927\uff0c\u5373")," ",Object(i.b)("inlineCode",{parentName:"li"},"dp[i] = max{ dp[i], dp[j] + 1}")))),Object(i.b)("li",{parentName:"ul"},"\u5426\u5219\uff0c\u8bf4\u660e ",Object(i.b)("inlineCode",{parentName:"li"},"nums[i] <= nums[j]"),"\uff0c\u4e0d\u80fd\u628a ",Object(i.b)("inlineCode",{parentName:"li"},"nums[i]")," \u63a5\u5728 ",Object(i.b)("inlineCode",{parentName:"li"},"nums[j]")," \u540e\u9762\uff0c\u5219",Object(i.b)("inlineCode",{parentName:"li"},"dp[i] = 1")),Object(i.b)("li",{parentName:"ul"},"\u4e00\u76f4\u8bb0\u5f55\u6700\u5927\u7684\u90a3\u4e2a ",Object(i.b)("inlineCode",{parentName:"li"},"dp[i]"),"\uff0c\u5373\u4e3a\u6240\u6c42\u89e3"))))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class _300\u6700\u957f\u4e0a\u5347\u5b50\u5e8f\u5217 {\n    public static int lengthOfLIS(int[] nums) {\n        if (nums == null || nums.length == 0) return 0;\n\n        int[] dp = new int[nums.length];\n\n        dp[0] = 1;\n        int max = dp[0];\n\n        for (int i = 1; i < nums.length; i++) {\n            dp[i] = 1; // \u4ee5\u6bcf\u4e2a\u5143\u7d20\u7ed3\u5c3e\u3002\u9ed8\u8ba4\u5b50\u5e8f\u5217\u957f\u5ea6\u90fd\u4e3a 1\n            for (int j = 0; j < i; j++) { // \u904d\u5386\u5f53\u524d\u503c\u4e4b\u524d\u6240\u6709\u7684\u5143\u7d20\n                // \u5f53\u524d\u503c \u6bd4 \u5148\u524d\u67d0\u4e2a\u5143\u7d20\u5927\n                // \u8bf4\u660e \u5f53\u524d\u503ci \u53ef\u4ee5\u63a5\u5728 \u4ee5\u5148\u524d\u503cj\u7ed3\u5c3e\u7684 \u4e0a\u5347\u5b50\u5e8f\u5217\u540e\u9762\n                // \u8fd8\u8981\u786e\u4fdd\u63a5\u5728j\u8fd9\u4e2a\u5143\u7d20\u7684\u5b50\u5e8f\u540e\u9762\u4e0d\u4f1a\u6bd4\u73b0\u5728\u8fd8\u77ed\n                if (nums[i] > nums[j])\n                    dp[i] = Math.max(dp[i], dp[j] + 1);\n            }\n            // \u4e00\u81f4\u8bb0\u5f55\u6700\u5927\u7684 dp[i]\n            max = Math.max(max, dp[i]);\n        }\n\n        return max;\n    }\n\n    public static void main(String[] args) {\n        int[] nums1 = {10, 9, 2, 5, 3, 7, 101, 18};\n        int[] nums2 = {0, 1, 0, 3, 2, 3};\n        int[] nums3 = {7, 7, 7, 7, 7, 7, 7};\n\n        int res1 = lengthOfLIS(nums1); // expect 4\n        int res2 = lengthOfLIS(nums2); // expect 4\n        int res3 = lengthOfLIS(nums3); // expect 1\n\n        System.out.println("res1 = " + res1);\n        System.out.println("res2 = " + res2);\n        System.out.println("res3 = " + res3);\n    }\n}\n')))}o.isMDXComponent=!0},511:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return j}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),o=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=o(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,b=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=o(t),s=a,j=m["".concat(b,".").concat(s)]||m[s]||u[s]||i;return t?r.a.createElement(j,l(l({ref:n},p),{},{components:t})):r.a.createElement(j,l({ref:n},p))}));function j(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,b=new Array(i);b[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,b[1]=l;for(var p=2;p<i;p++)b[p]=t[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);